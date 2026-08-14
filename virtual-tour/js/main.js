import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from "three-mesh-bvh";

// Patch THREE prototypes — enables BVH on any BufferGeometry/Mesh
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// ── DOM refs ─────────────────────────────────────────────────────
const canvas = document.getElementById("c");
const barFill = document.getElementById("barFill");
const barTxt = document.getElementById("barTxt");
const stageTxt = document.getElementById("stageTxt");
const loadSc = document.getElementById("loadScreen");
const errBox = document.getElementById("errBox");
const entrySc = document.getElementById("entryScreen");
const xhair = document.getElementById("xhair");
const lockMsg = document.getElementById("lockMsg");
const joystick = document.getElementById("joystick");
const joystickKnob = document.getElementById("joystickKnob");
const infoBox = document.getElementById("info");
const btnSV = document.getElementById("btnSV");
const btnOrb = document.getElementById("btnOrbit");
const fpsEl = document.getElementById("fpsBox");
const poiLayer = document.getElementById("poiLayer");
const poiPrompt = document.getElementById("poiPrompt");
const poiModal = document.getElementById("poiModal");
const poiClose = document.getElementById("poiClose");
const poiImgEl = document.getElementById("poiImg");
const poiImgFrame = document.getElementById("poiImgFrame");
const poiDirEl = document.getElementById("poiDir");
const poiTitleEl = document.getElementById("poiTitle");
const poiDescEl = document.getElementById("poiDesc");
const poiAudioEl = document.getElementById("poiAudio");
const poiAudioBtn = document.getElementById("poiAudioBtn");
const poiAudioIcon = document.getElementById("poiAudioIcon");
const poiAudioLabel = document.getElementById("poiAudioLabel");
let currentLang = "id";
const I18N = {
  id: {
    loadSubtitle: "Virtual Heritage · Prambanan",
    loadInit: "Menginisialisasi...",
    loadModel: "Memuat model...",
    stageScaling: "⚙ Scaling...",
    stageBVH: "⚙ Membangun BVH (pohon collision)...",
    stageChunks: "⚙ Membangun chunk visual...",
    loadError: "Error!",
    entryTitle: "CANDI SIWA",
    entrySubtitle: "PRAMBANAN · ABAD IX MASEHI",
    entryNote: "Klik canvas untuk mengunci mouse · ESC untuk keluar",
    entryButton: "MASUK VIRTUAL TOUR",
    topbarTitle: "Candi Siwa Prambanan",
    topbarLocation: "Kompleks Prambanan, Jawa Tengah",
    topbarEra: "Abad IX M",
    btnSV: "Street View",
    btnOrbit: "Orbit",
    lockMsg: "Klik canvas untuk mengunci mouse",
    infoTitle: "CANDI SIWA",
    infoLoc: "Kompleks Prambanan, DIY",
    rowHeight: "Tinggi Asli",
    rowBuilt: "Dibangun",
    rowStyle: "Gaya",
    rowMaterial: "Material",
    rowReligion: "Agama",
    hintWalk: "Berjalan",
    hintLook: "Melihat",
    hintRun: "Berlari",
    hintJump: "Lompat",
    hintInfo: "Info titik terdekat",
    hintExit: "Keluar mode",
    poiPromptTxt: "Lihat informasi",
    poiImgEmpty: "🖼 Gambar arca belum tersedia",
  },
  en: {
    loadSubtitle: "Virtual Heritage · Prambanan",
    loadInit: "Initializing...",
    loadModel: "Loading model...",
    stageScaling: "⚙ Scaling...",
    stageBVH: "⚙ Building BVH (collision tree)...",
    stageChunks: "⚙ Building visual chunks...",
    loadError: "Error!",
    entryTitle: "CANDI SIWA",
    entrySubtitle: "PRAMBANAN · 9TH CENTURY CE",
    entryNote: "Click canvas to lock mouse · ESC to exit",
    entryButton: "ENTER VIRTUAL TOUR",
    topbarTitle: "Siwa Temple, Prambanan",
    topbarLocation: "Prambanan Complex, Central Java",
    topbarEra: "9th Century CE",
    btnSV: "Street View",
    btnOrbit: "Orbit",
    lockMsg: "Click canvas to lock mouse",
    infoTitle: "SIWA TEMPLE",
    infoLoc: "Prambanan Complex, DIY",
    rowHeight: "Original Height",
    rowBuilt: "Built",
    rowStyle: "Style",
    rowMaterial: "Material",
    rowReligion: "Religion",
    hintWalk: "Walk",
    hintLook: "Look",
    hintRun: "Run",
    hintJump: "Jump",
    hintInfo: "Nearest point info",
    hintExit: "Exit mode",
    poiPromptTxt: "View information",
    poiImgEmpty: "🖼 Statue image not yet available",
  },
};

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll(".langBtn").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  poiImgFrame.dataset.emptyText = I18N[lang].poiImgEmpty;
  localStorage.setItem("candiSiwaLang", lang);
  refreshDotLabels();
  if (poiOpen && activePOIRef) refreshPOIText(activePOIRef);
}

// ── RENDERER ─────────────────────────────────────────────────────
// Deteksi mobile: GPU & CPU HP jauh lebih lemah, jadi cap resolusi render
// (pixel ratio) lebih rendah supaya jumlah fragment yang diproses GPU
// jauh lebih sedikit. Ini penyebab #1 FPS 29-30 di HP vs mulus di laptop.
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
document.body.classList.toggle("is-mobile", isMobile); // dipakai buat override layout khusus HP di CSS
const PR_ORBIT_MAX = isMobile ? 1.25 : 2; // sebelumnya selalu 2
const PR_SV_MAX = isMobile ? 0.75 : 1.0; // sebelumnya selalu 1.0

// antialias OFF for performance; we re-enable only in orbit mode
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false, // OFF during street-view → big GPU saving
  powerPreference: "high-performance",
  stencil: false,
  depth: true,
});
renderer.setPixelRatio(Math.min(devicePixelRatio, PR_ORBIT_MAX));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// ── SCENE ────────────────────────────────────────────────────────
const SKY = new THREE.Color(0x87ceeb);
const scene = new THREE.Scene();
scene.background = SKY;
// Fog near/far = camera near clip for visible geometry
// IMPORTANT: fog.far must match fpsCam.far so GPU discards geometry beyond fog
const FOG_NEAR_SV = 8;
const FOG_FAR_SV = 18; // tight fog when inside candi — hides far geometry
const FOG_NEAR_ORBIT = 30;
const FOG_FAR_ORBIT = 120;
scene.fog = new THREE.Fog(SKY, FOG_NEAR_ORBIT, FOG_FAR_ORBIT);

// ── LIGHTS ───────────────────────────────────────────────────────
// Pencahayaan siang hari tropis — matahari kuat dari sudut, langit biru hangat
scene.add(new THREE.AmbientLight(0xfff0d0, 1.7)); // dinaikkan dari 0.9 → isi bayangan
const sun = new THREE.DirectionalLight(0xffe8b0, 2.4); // sinar matahari kuning-emas (sedikit diturunkan biar tak overexpose)
sun.position.set(50, 80, 30);
scene.add(sun);
// Lampu isian kedua dari arah berlawanan matahari — meniru bounce
// cahaya langit/tanah, supaya sisi candi yang tidak kena sinar
// langsung tidak jatuh ke hitam total
const fill = new THREE.DirectionalLight(0xcfe0ff, 0.8);
fill.position.set(-40, 40, -30);
scene.add(fill);
// Langit biru sebagai fill light, tanah hijau sebagai bounce light
scene.add(new THREE.HemisphereLight(0xb8d4f0, 0x6b8c4a, 1.1));

// ── GROUND ───────────────────────────────────────────────────────
const ground = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshLambertMaterial({ color: 0x5a7a4a }));
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const plaza = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshLambertMaterial({ color: 0x9e8f78 }));
plaza.rotation.x = -Math.PI / 2;
plaza.position.y = 0.005;
scene.add(plaza);

// ── CAMERAS ──────────────────────────────────────────────────────
const orbitCam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 300);
orbitCam.position.set(8, 5, 12);

// fpsCam.far MUST equal FOG_FAR_SV so WebGL depth-clips geometry beyond fog
const fpsCam = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.05, FOG_FAR_SV);
scene.add(fpsCam);

let activeCamera = orbitCam;
let isSV = false,
  locked = false;

// ── ORBIT CONTROL ────────────────────────────────────────────────
const orb = { theta: -0.8, phi: 1.0, r: 12, tx: 0, ty: 2, tz: 0, drag: false, lx: 0, ly: 0 };
function updateOrbit() {
  orbitCam.position.set(orb.tx + orb.r * Math.sin(orb.phi) * Math.sin(orb.theta), orb.ty + orb.r * Math.cos(orb.phi), orb.tz + orb.r * Math.sin(orb.phi) * Math.cos(orb.theta));
  orbitCam.lookAt(orb.tx, orb.ty, orb.tz);
}
updateOrbit();

canvas.addEventListener("mousedown", (e) => {
  if (!isSV) {
    orb.drag = true;
    orb.lx = e.clientX;
    orb.ly = e.clientY;
  }
});
window.addEventListener("mouseup", () => (orb.drag = false));
window.addEventListener("mousemove", (e) => {
  if (!orb.drag || isSV) return;
  orb.theta -= (e.clientX - orb.lx) * 0.005;
  orb.phi = Math.max(0.05, Math.min(Math.PI / 2 - 0.01, orb.phi + (e.clientY - orb.ly) * 0.005));
  orb.lx = e.clientX;
  orb.ly = e.clientY;
  updateOrbit();
});
canvas.addEventListener(
  "wheel",
  (e) => {
    if (isSV) return;
    orb.r = Math.max(2, Math.min(80, orb.r + e.deltaY * 0.015));
    updateOrbit();
  },
  { passive: true },
);

// ── ORBIT CONTROL (touch/mobile) ─────────────────────────────────
// Versi sentuh dari drag-rotate + wheel-zoom di atas — sebelumnya orbit
// HANYA bisa diputar & di-zoom pakai mouse (mousedown/mousemove/wheel),
// jadi di HP mode Orbit tidak bisa diputar ATAU di-zoom sama sekali
// (event mouse & wheel itu tidak keluar pas disentuh pakai jari).
// Satu jari = putar (sama seperti drag mouse). Dua jari (pinch) = zoom.
let orbTouchId = null;
let pinchDist = null; // jarak antar 2 jari saat pinch, null = tidak sedang pinch
function _touchDist(t0, t1) {
  return Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
}
canvas.addEventListener(
  "touchstart",
  (e) => {
    if (isSV) return; // orbit only — di SV, touch dipakai buat look-around
    if (e.touches.length >= 2) {
      // 2 jari turun → mulai pinch-zoom, batalkan drag-rotate 1 jari
      orb.drag = false;
      pinchDist = _touchDist(e.touches[0], e.touches[1]);
      return;
    }
    const t = e.changedTouches[0];
    orbTouchId = t.identifier;
    orb.drag = true;
    orb.lx = t.clientX;
    orb.ly = t.clientY;
  },
  { passive: true },
);
canvas.addEventListener(
  "touchmove",
  (e) => {
    if (isSV) return;
    if (e.touches.length >= 2) {
      // Pinch-zoom: jarak mengecil (cubit) → mendekat (zoom in), jarak
      // membesar (regangkan) → menjauh (zoom out) — arah dibalik dari deltaY.
      const d = _touchDist(e.touches[0], e.touches[1]);
      if (pinchDist !== null) {
        orb.r = Math.max(2, Math.min(80, orb.r - (d - pinchDist) * 0.04));
        updateOrbit();
      }
      pinchDist = d;
      e.preventDefault();
      return;
    }
    if (!orb.drag) return;
    let t = null;
    for (const ct of e.changedTouches) if (ct.identifier === orbTouchId) t = ct;
    if (!t) return;
    orb.theta -= (t.clientX - orb.lx) * 0.005;
    orb.phi = Math.max(0.05, Math.min(Math.PI / 2 - 0.01, orb.phi + (t.clientY - orb.ly) * 0.005));
    orb.lx = t.clientX;
    orb.ly = t.clientY;
    updateOrbit();
    e.preventDefault();
  },
  { passive: false },
);
function orbTouchEnd(e) {
  if (e.touches.length < 2) pinchDist = null;
  for (const t of e.changedTouches) {
    if (t.identifier === orbTouchId) {
      orb.drag = false;
      orbTouchId = null;
    }
  }
}
canvas.addEventListener("touchend", orbTouchEnd);
canvas.addEventListener("touchcancel", orbTouchEnd);

// ── PLAYER ───────────────────────────────────────────────────────
// ── SPAWN DEFAULT: gerbang TIMUR (lihat screenshot referensi) ─────
// Isi 2 nilai ini dari hasil kalibrasi tombol "1" (lihat langkah di bawah)
const SPAWN_POS = new THREE.Vector3(2.734, 0.135, -0.046); // ganti x/z sesuai hasil kalibrasi
const SPAWN_YAW = 1.57; // ganti sesuai hasil kalibrasi

const P = {
  pos: SPAWN_POS.clone(),
  vel: new THREE.Vector3(),
  yaw: SPAWN_YAW,
  pitch: 0,
  onGround: false,
  jumpRequested: false,
  eyeH: 0.13,
  radius: 0.02,
  maxStepH: 0.08,
  walkSpd: 0.5,
  runSpd: 1.0,
  gravity: 1.8,
  jumpVel: 0.5,
  bobPhase: 0,
  bobY: 0,
};
// ── POINTS OF INTEREST (4 arca pada bilik candi) ────────────────
// Koordinat dalam satuan model (1 unit ≈ 10 m, sama seperti P.pos).
// ⚠️ pos di bawah PLACEHOLDER — wajib dikalibrasi, lihat instruksi di bawah.
// ── (DEV) KALIBRASI KOORDINAT LOKAL ──────────────────────────────
// 1) Berdiri TEPAT di ambang tangga/pintu masuk sisi TIMUR (gerbang utama),
//    tekan "1"  → jadi ORIGIN.
// 2) Jalan LURUS masuk ke pusat candi (di bawah menara utama),
//    tekan "2"  → jadi arah FORWARD (menentukan sumbu kanan/depan).
// 3) Jalan ke tiap stupa, tekan tombol berikut lalu BACA CONSOLE (F12):
//    "3"=Mahadewa  "4"=Agastya  "5"=Ganesha  "6"=Durga
let _calOrigin = null,
  _calForward = null;

function _calFrame() {
  if (!_calOrigin || !_calForward) return null;
  const fwd = _calForward.clone().sub(_calOrigin);
  fwd.y = 0;
  fwd.normalize();
  const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
  return { fwd, right };
}

document.addEventListener("keydown", (e) => {
  if (!isSV) return;
  if (e.code === "Digit1") {
    _calOrigin = P.pos.clone();
    console.log(`ORIGIN (gerbang timur): pos=(${P.pos.x.toFixed(3)}, ${P.pos.y.toFixed(3)}, ${P.pos.z.toFixed(3)})  yaw=${P.yaw.toFixed(3)}`);
  }
  if (e.code === "Digit2") {
    _calForward = P.pos.clone();
    console.log("FORWARD (arah pusat):", _calForward);
  }

  const names = { Digit3: "mahadewa", Digit4: "agastya", Digit5: "ganesha", Digit6: "durga" };
  if (names[e.code]) {
    const f = _calFrame();
    if (!f) {
      console.warn("Set origin (1) & forward (2) dulu.");
      return;
    }
    const rel = P.pos.clone().sub(_calOrigin);
    console.log(`${names[e.code]} → local: right=${rel.dot(f.right).toFixed(3)} forward=${rel.dot(f.fwd).toFixed(3)} up=${rel.y.toFixed(3)}`);
  }
});

const POIS = [
  {
    id: "mahadewa",
    name: { id: "Siwa Mahadewa", en: "Shiva Mahadewa" },
    dir: { id: "Timur", en: "East" },
    pos: new THREE.Vector3(-0.051, 0.999, -0.039),
    radius: 0.35,
    img: "./assets/poi/siwa.JPG",
    audio: {
      id: "./assets/audio/mahadewa_id.mp3",
      en: "./assets/audio/mahadewa_en.mp3",
    },
    desc: {
      id: "Tempat bersemayamnya Arca Siwa Mahadewa yang memiliki laksana atau atribut Siwa, yaitu tengkorak di atas bulan sabit yang biasa disebut candrakapala, mahkota keagungan (jatamakuta), dan mata ketiga (trinetra) pada bagian dahi.",
      en: "The chamber housing the Shiva Mahadewa statue, shown with Shiva's attributes: a skull above a crescent moon known as the candrakapala, a crown of glory (jatamakuta), and a third eye (trinetra) on the forehead.",
    },
  },
  {
    id: "agastya",
    name: { id: "Agastya", en: "Agastya" },
    dir: { id: "Selatan", en: "South" },
    pos: new THREE.Vector3(-0.038, 0.934, 0.605),
    radius: 0.35,
    img: "./assets/poi/agastya.JPG",
    audio: {
      id: "./assets/audio/agastya_id.mp3",
      en: "./assets/audio/agastya_en.mp3",
    },
    desc: {
      id: "Agastya merupakan perwujudan Dewa Siwa yang digambarkan berasal dari perbatasan Cina dan merupakan seorang musafir. Wajah Arca Agastya mirip dengan wajah orang Mongol, yaitu memiliki kumis dan jenggot panjang serta raut wajah yang teduh dan bijaksana. Tangan kanan Agastya membentuk sikap tubuh seperti Buddha yang melambangkan pengajaran tentang kebenaran. Di pundaknya terdapat penyapu lalat yang digunakan untuk memercikkan air suci. Di bagian kanan terdapat trisula yang melambangkan Trimurti (Brahma, Siwa, Wisnu).",
      en: "Agastya is a manifestation of Shiva, depicted as a wandering sage said to originate from the China border region. His face resembles Mongol features, with a long moustache and beard and a calm, wise expression. His right hand forms a Buddha-like gesture symbolizing the teaching of truth. A fly-whisk rests on his shoulder, used to sprinkle holy water, and a trident on his right represents the Trimurti (Brahma, Shiva, Vishnu).",
    },
  },
  {
    id: "ganesha",
    name: { id: "Ganesha", en: "Ganesha" },
    dir: { id: "Barat", en: "West" },
    pos: new THREE.Vector3(-0.672, 0.947, -0.005),
    radius: 0.35,
    img: "./assets/poi/ganesha.JPG",
    audio: {
      id: "./assets/audio/ganesha_id.mp3",
      en: "./assets/audio/ganesha_en.mp3",
    },
    desc: {
      id: "Tangan kiri Ganesha selalu memegang mangkuk yang berisi ilmu pengetahuan. Belalainya selalu masuk ke dalam mangkuk tersebut, yang berarti ia menyerap ilmu pengetahuan yang ada. Tangan kanannya memegang patahan gading kanannya yang ia patahkan sendiri untuk menulis, demi mengajarkan ilmu pengetahuan kepada manusia.",
      en: "Ganesha's left hand always holds a bowl containing knowledge. His trunk is always inserted into the bowl, symbolizing his absorption of knowledge. His right hand holds a broken tusk he broke off himself to write, in order to teach knowledge to humanity.",
    },
  },
  {
    id: "durga",
    name: { id: "Durga Mahisasuramardini", en: "Durga Mahisasuramardini" },
    dir: { id: "Utara", en: "North" },
    pos: new THREE.Vector3(-0.035, 0.939, -0.614),
    radius: 0.35,
    img: "./assets/poi/durga.JPG",
    audio: {
      id: "./assets/audio/durga_id.mp3",
      en: "./assets/audio/durga_en.mp3",
    },
    desc: {
      id: "Durga digambarkan memiliki delapan tangan, salah satunya memegang cakra (Asura). Raksasa Asura melambangkan egoisme manusia; untuk menaklukkan ego tersebut, Tuhan menganugerahkan senjata berupa cakra. Setiap manusia dipercaya memiliki tujuh cakra, dan baik-buruknya bergantung pada bagaimana manusia mengendalikan cakra-cakra tersebut. Arca Durga adalah satu-satunya arca perempuan yang terdapat di candi ini, dan masyarakat meyakini bahwa arca inilah sosok Roro Jonggrang.",
      en: "Durga is depicted with eight arms, one of which holds a discus (Asura). The Asura represents human egoism; to conquer this ego, God grants the weapon of the discus. Every person is believed to have seven chakras, and their well-being depends on how they control these chakras. The Durga statue is the only female deity in this temple, and the local people believe it represents the figure of Roro Jonggrang.",
    },
  },
  {
    id: "panel_1a",
    name: "Panel Relief 1",
    dir: "Adegan 1",
    pos: new THREE.Vector3(1.427, 0.444, 0.459),
    radius: 0.35,
    img: "./assets/poi/panel_1a.jpg",
    desc: "Dewa Wisnu di Surga Tushita, duduk di atas singgasana berbentuk ular naga yang muncul dari laut, dan dibelakangnya duduk seekor garuda. Lima orang dewa meminta bantuan Wisnu supaya turun ke dunia untuk membinasakan kejahatan yang dilakukan oleh Rawana.",
  },
  {
    id: "panel_1b",
    name: "Panel Relief 1",
    dir: "Adegan 2",
    pos: new THREE.Vector3(1.432, 0.436, 0.672),
    radius: 0.35,
    img: "./assets/poi/panel_1b.jpg",
    desc: "Di Kerajaan Ayodya, memerintahlah raja Dasarata. Raja Dasarata dan permaisuri sedang dihadap oleh Rama, penjelmaan Wisnu, besera para abdi kraton.",
  },
  {
    id: "panel_2",
    name: "Panel Relief 2",
    dir: "Adegan",
    pos: new THREE.Vector3(1.255, 0.449, 0.8),
    radius: 0.35,
    img: "./assets/poi/panel_2.jpg",
    desc: "Pada suatu hari Raja Dasarata kedatangan tamu pendeta bernama Wismamitra. Dia memohon pertolongan kepada Rama agar mau membunuh para raksasa yang mengganggu pertapaannya. Di belakang sang raja duduk tiga istrinya, yaitu Kausalya, yang telah melahirkan Rama (putra pertama), Kaikeyi, yang telah melahirkan Barata, dan Sumitra, yang putranya bernama Laksamana dan Satrugna. Rama dan Laksamana berada di sebelah kanan mereka.",
  },
  {
    id: "panel_3",
    name: "Panel Relief 3",
    dir: "Adegan",
    pos: new THREE.Vector3(1.096, 0.448, 0.972),
    radius: 0.35,
    img: "./assets/poi/panel_3.jpg",
    desc: "Rama dan Laksamana dalam perjalanan menuju pertapaan pendeta Wismamitra. Tiba-tiba mereka diganggu oleh raseksi Tataka. Rama membunuh dia di hutan.",
  },
  {
    id: "panel_4a",
    name: "Panel Relief 4",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.972, 0.444, 1.117),
    radius: 0.35,
    img: "./assets/poi/panel_4a.jpg",
    desc: "Pendeta Wismamitra duduk bersemadi di dalam pertapaannya.",
  },
  {
    id: "panel_4b",
    name: "Panel Relief 4",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.893, 0.44, 1.118),
    radius: 0.35,
    img: "./assets/poi/panel_4b.jpg",
    desc: "Rama dan Laksamana membunuh semua raksasa yang mengganggu pertapaan Wismamitra.",
  },
  {
    id: "panel_5a",
    name: "Panel Relief 5",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.782, 0.448, 1.227),
    radius: 0.35,
    img: "./assets/poi/panel_5a.jpg",
    desc: "Di kerajaan Mantilireja, memerintah Raja Janaka. Beliau mengadakan sayembara: barangsiapa dapat menarik dan mematahkan busur Prabu Janaka akan dikawinkan dengan putrinya yang sangat cantik bernama Sinta.",
  },
  {
    id: "panel_5b",
    name: "Panel Relief 5",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.787, 0.439, 1.318),
    radius: 0.35,
    img: "./assets/poi/panel_5b.jpg",
    desc: "Rama ikut ambil bagian sayembara dan berhasil menarik serta mematahkan busur Prabu Janaka, disaksikan oleh Sinta dan para pengawalnya.",
  },
  {
    id: "panel_6a",
    name: "Panel Relief 6",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.694, 0.442, 1.454),
    radius: 0.35,
    img: "./assets/poi/panel_6a.jpg",
    desc: "Rama, Sinta, beserta Laksamana dalam perjalanan menuju negeri Ayodya.",
  },
  {
    id: "panel_6b",
    name: "Panel Relief 6",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.584, 0.448, 1.456),
    radius: 0.35,
    img: "./assets/poi/panel_6b.jpg",
    desc: "Di dalam perjalanan tersebut mereka bertemu dengan seorang tokoh yang bernama Rama Parasu. Dia meminta kepada Rama agar membunuhnya dengan panah.",
  },
  {
    id: "panel_6c",
    name: "Panel Relief 6",
    dir: "Adegan 3",
    pos: new THREE.Vector3(0.447, 0.447, 1.452),
    radius: 0.35,
    img: "./assets/poi/panel_6c.jpg",
    desc: "Rama membunuh Rama Parasu dengan panahnya.",
  },
  {
    id: "panel_6d",
    name: "Panel Relief 6",
    dir: "Adegan 4",
    pos: new THREE.Vector3(0.319, 0.449, 1.451),
    radius: 0.35,
    img: "./assets/poi/panel_6d.jpg",
    desc: "Raja Dasarata, karena merasa telah lanjut usia, ingin mewariskan tahta kerajaan kepada Rama. Raja dan permaisurinya serta para pembantunya sedang mempersiapkan pesta penobatan.",
  },
  {
    id: "panel_7a",
    name: "Panel Relief 7",
    dir: "Adegan 1",
    pos: new THREE.Vector3(-0.381, 0.446, 1.455),
    radius: 0.35,
    img: "./assets/poi/panel_7a.jpg",
    desc: "Penobatan Rama sebagai putra mahkota dilakukan oleh seorang pendeta. Di luar istana rakyat merayakan penobatan tersebut.",
  },
  {
    id: "panel_7b",
    name: "Panel Relief 7",
    dir: "Adegan 2",
    pos: new THREE.Vector3(-0.574, 0.448, 1.461),
    radius: 0.35,
    img: "./assets/poi/panel_7b.jpg",
    desc: "Istri kedua Kaikeyi, ibu Barata, membujuk sang Raja untuk membatalkan penobatan Rama sebagai raja, mengasingkannya ke dalam hutan selama empat belas tahun, dan mengangkat Barata sebagai penggantinya. Malam hari sebelum keberangkatan mereka, Rama dan Sinta berdoa di dalam candi.",
  },
  {
    id: "panel_7c",
    name: "Panel Relief 7",
    dir: "Adegan 3",
    pos: new THREE.Vector3(-0.696, 0.449, 1.458),
    radius: 0.35,
    img: "./assets/poi/panel_7c.jpg",
    desc: "Rama, Sinta, dan Laksamana pergi menuju hutan untuk menjalani pembuangan.",
  },
  {
    id: "panel_8",
    name: "Panel Relief 8",
    dir: "Adegan",
    pos: new THREE.Vector3(-0.842, 0.456, 1.284),
    radius: 0.35,
    img: "./assets/poi/panel_8.jpg",
    desc: "Tidak lama kemudian, raja Dasarata wafat karena dukacita; jenazahnya diperabukan. Para brahmana dan permaisuri Kausalya membagi-bagikan dana kepada rakyat Ayodya.",
  },
  {
    id: "panel_9",
    name: "Panel Relief 9",
    dir: "Adegan",
    pos: new THREE.Vector3(-0.995, 0.453, 1.134),
    radius: 0.35,
    img: "./assets/poi/panel_9.jpg",
    desc: "Barata menolak untuk dinobatkan sebagai raja; dia pergi mencari Rama di hutan untuk membujuknya pulang ke istana dan memerintah kerajaan Ayodya. Akan tetapi Rama menolaknya dan memberikan sandal sebagai gantinya. Sandal tersebut agar ditaruh di atas singgasana, dan menyuruh Barata agar memerintah Ayodya atas nama Rama.",
  },
  {
    id: "panel_10",
    name: "Panel Relief 10",
    dir: "Adegan",
    pos: new THREE.Vector3(-1.155, 0.45, 0.983),
    radius: 0.35,
    img: "./assets/poi/panel_10.jpg",
    desc: "Sinta diganggu oleh dua raksasa, tetapi kedua raksasa tersebut berhasil dibunuh oleh Rama.",
  },
  {
    id: "panel_11",
    name: "Panel Relief 11",
    dir: "Adegan",
    pos: new THREE.Vector3(-1.327, 0.453, 0.82),
    radius: 0.35,
    img: "./assets/poi/panel_11.jpg",
    desc: "Rama, Sinta, dan Laksamana tinggal di dalam gubuk. Pada suatu hari seekor burung gagak mencuri daging rusa yang sedang dijemur oleh Sinta. Rama membunuh burung gagak tersebut dengan memenggal kepalanya.",
  },
  {
    id: "panel_12a",
    name: "Panel Relief 12",
    dir: "Adegan 1",
    pos: new THREE.Vector3(-1.502, 0.447, 0.676),
    radius: 0.35,
    img: "./assets/poi/panel_12a.jpg",
    desc: "Raseksi Sarpakenaka, adik perempuan Rawana, yang menyamar sebagai wanita cantik, memberikan sesuatu kepada Rama dengan maksud agar Rama mau memperistrinya. Akan tetapi, Rama menolaknya dan menunjuk pada Laksamana.",
  },
  {
    id: "panel_12b",
    name: "Panel Relief 12",
    dir: "Adegan 2",
    pos: new THREE.Vector3(-1.5, 0.449, 0.52),
    radius: 0.35,
    img: "./assets/poi/panel_12b.jpg",
    desc: "Cinta Sarpakenaka juga ditolak oleh Laksamana; dengan maksud untuk mengusirnya Laksamana memotong daun telinga dan hidungnya. Kemudian, dia mengadu kepada saudaranya, Rawana, tentang penghinaan tersebut.",
  },
  {
    id: "panel_12c",
    name: "Panel Relief 12",
    dir: "Adegan 3",
    pos: new THREE.Vector3(-1.494, 0.449, 0.369),
    radius: 0.35,
    img: "./assets/poi/panel_12c.jpg",
    desc: "Sinta dijaga oleh Laksamana sewaktu Rama sedang memanah seekor kijang jelmaan Marica, raksasa pembantu Rawana.",
  },
  {
    id: "panel_13a",
    name: "Panel Relief 13",
    dir: "Adegan 1",
    pos: new THREE.Vector3(-1.491, 0.436, -0.31),
    radius: 0.35,
    img: "./assets/poi/panel_13a.jpg",
    desc: "Sinta berada di dalam gubuk seorang diri setelah Laksamana pergi mencari Rama atas perintahnya.",
  },
  {
    id: "panel_13b",
    name: "Panel Relief 13",
    dir: "Adegan 2",
    pos: new THREE.Vector3(-1.491, 0.443, -0.374),
    radius: 0.35,
    img: "./assets/poi/panel_13b.jpg",
    desc: "Rawana yang menyamar sebagai pendeta mendekati Sinta untuk meminta nasi. Ketika Sinta memberikan nasi, tangannya ditarik dengan paksa oleh Rawana.",
  },
  {
    id: "panel_13c",
    name: "Panel Relief 13",
    dir: "Adegan 3",
    pos: new THREE.Vector3(-1.494, 0.442, -0.471),
    radius: 0.35,
    img: "./assets/poi/panel_13c.jpg",
    desc: "Rawana berhasil menculik Sinta dan membawanya terbang ke angkasa. Di tengah perjalanan Rawana diserang Jatayu untuk membebaskan Sinta. Jatayu kalah dalam pertempuran, tetapi dia berhasil menerima cincin Sinta.",
  },
  {
    id: "panel_13d",
    name: "Panel Relief 13",
    dir: "Adegan 4",
    pos: new THREE.Vector3(-1.496, 0.447, -0.572),
    radius: 0.35,
    img: "./assets/poi/panel_13d.jpg",
    desc: "Rama dan Laksamana sangat sedih ketika mengetahui hilangnya Sinta, dan memutuskan mencarinya. Di dalam pengembaraannya mereka berjumpa dengan Jatayu yang hampir menemui ajalnya. Dia menceritakan apa yang telah terjadi, dan setelah memberi cincin kepada Rama, dia meninggal dunia.",
  },
  {
    id: "panel_13e",
    name: "Panel Relief 13",
    dir: "Adegan 5",
    pos: new THREE.Vector3(-1.497, 0.447, -0.667),
    radius: 0.35,
    img: "./assets/poi/panel_13e.jpg",
    desc: "Rama dan Laksamana bertempur melawan raksasa Kabandha. Mereka berhasil mengalahkannya dan mengembalikannya kepada wujudnya yang semula. Kabandha adalah inkarnasi dewa yang dikutuk oleh dewa Siwa dan dihukum untuk hidup sebagai makhluk yang jelek.",
  },
  {
    id: "panel_14",
    name: "Panel Relief 14",
    dir: "Adegan",
    pos: new THREE.Vector3(-1.323, 0.446, -0.812),
    radius: 0.35,
    img: "./assets/poi/panel_14.jpg",
    desc: "Rama dan Laksamana bertemu dengan seekor buaya yang sebenarnya inkarnasi seorang bidadari yang terkena kutukan oleh dewa. Setelah terkena panah Rama, dia berubah ke dalam wujudnya yang semula dan terbang ke surga.",
  },
  {
    id: "panel_15",
    name: "Panel Relief 15",
    dir: "Adegan",
    pos: new THREE.Vector3(-1.174, 0.448, -0.985),
    radius: 0.35,
    img: "./assets/poi/panel_15.jpg",
    desc: "Rama dan Laksamana bertemu dengan Hanoman, seekor kera putih. Dia memohon kepada mereka untuk menemui Sugriwa, raja kera.",
  },
  {
    id: "panel_16a",
    name: "Panel Relief 16a",
    dir: "Adegan 1",
    pos: new THREE.Vector3(-1.068, 0.44, -1.132),
    radius: 0.35,
    img: "./assets/poi/panel_16a.jpg",
    desc: "Rama dan Laksamana beristirahat di tengah hutan. Rama menyuruh adiknya untuk mencari air.",
  },
  {
    id: "panel_16b",
    name: "Panel Relief 16b",
    dir: "Adegan 2",
    pos: new THREE.Vector3(-1.002, 0.447, -1.13),
    radius: 0.35,
    img: "./assets/poi/panel_16b.jpg",
    desc: "Laksamana menemukan air yang menetes dari atas pohon. Akan tetapi, rasanya asin; kemudian, diketahui bahwa air tersebut air mata raja kera Sugriwa yang menangis karena terjepit.",
  },
  {
    id: "panel_16c",
    name: "Panel Relief 16c",
    dir: "Adegan 3",
    pos: new THREE.Vector3(-0.935, 0.447, -1.132),
    radius: 0.35,
    img: "./assets/poi/panel_16c.jpg",
    desc: "Setelah dibantu oleh Rama dan Laksamana turun dari pohon, Sugriwa minta kepada Rama untuk membantu dia menaklukkan Subali yang telah merebut kerajaan dan istrinya dengan paksa. Pada giliran berikutnya Sugriwa akan membantu Rama untuk mendapatkan kembali Sinta dari Alengka.",
  },
  {
    id: "panel_17",
    name: "Panel Relief 17",
    dir: "Adegan",
    pos: new THREE.Vector3(-0.864, 0.442, -1.299),
    radius: 0.35,
    img: "./assets/poi/panel_17.jpg",
    desc: "Untuk meyakinkan Sugriwa atas kesaktian Rama, Rama memanah dengan sebatang anak panah yang dapat memotonng tujuh pohon palem.",
  },
  {
    id: "panel_18a",
    name: "Panel Relief 18",
    dir: "Adegan 1",
    pos: new THREE.Vector3(-0.717, 0.446, -1.46),
    radius: 0.35,
    img: "./assets/poi/panel_18a.jpg",
    desc: "Setiba Rama, Laksamana, dan Sugriwa di Kiskenda, mereka menyusun strategi untuk menyerang Subali. Rama menyuruh Sugriwa untuk menantang Subali.",
  },
  {
    id: "panel_18b",
    name: "Panel Relief 18",
    dir: "Adegan 2",
    pos: new THREE.Vector3(-0.61, 0.44, -1.465),
    radius: 0.35,
    img: "./assets/poi/panel_18b.jpg",
    desc: "Terjadi perang sangat seru antara Subali dan Sugriwa. Rama memanah Subali; Subali mati terbunuh.",
  },
  {
    id: "panel_18c",
    name: "Panel Relief 18",
    dir: "Adegan 3",
    pos: new THREE.Vector3(-0.429, 0.442, -1.466),
    radius: 0.35,
    img: "./assets/poi/panel_18c.jpg",
    desc: "Sugriwa kembali naik tahta Kiskenda, dan Anggada anak Subali diangkat sebagai putra mahkota. Sugriwa disambut oleh para kera.",
  },
  {
    id: "panel_19a",
    name: "Panel Relief 19",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.25, 0.445, -1.472),
    radius: 0.35,
    img: "./assets/poi/panel_19a.jpg",
    desc: "Rama, Laksamana, dan Sugriwa dalam perjalanan ke suatu tempat perundingan.",
  },
  {
    id: "panel_19b",
    name: "Panel Relief 19",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.357, 0.441, -1.476),
    radius: 0.35,
    img: "./assets/poi/panel_19b.jpg",
    desc: "Rama, Laksamana, dan Sugriwa sedang berunding untuk merencanakan dan mengatur siasat dalam rangka penyerangan ke Alengka.",
  },
  {
    id: "panel_19c",
    name: "Panel Relief 19",
    dir: "Adegan 3",
    pos: new THREE.Vector3(0.491, 0.437, -1.471),
    radius: 0.35,
    img: "./assets/poi/panel_19c.jpg",
    desc: "Sugriwa mengusulkan kepada Rama agar mau mengirim utusan, yaitu Hanoman, untuk mencari Sinta di Alengka.",
  },
  {
    id: "panel_19d",
    name: "Panel Relief 19",
    dir: "Adegan 4",
    pos: new THREE.Vector3(0.586, 0.446, -1.47),
    radius: 0.35,
    img: "./assets/poi/panel_19d.jpg",
    desc: "Hanoman pergi ke Alengka dengan jalan melompat dari gunung Mahameru untuk menyeberangi laut. Sesampainya di Alengka, dia mengamati situasi istana Rawana dan mencari dari atas atap tempat Sinta tinggal.",
  },
  {
    id: "panel_20a",
    name: "Panel Relief 20",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.764, 0.445, -1.35),
    radius: 0.35,
    img: "./assets/poi/panel_20a.jpg",
    desc: "Hanoman berada di dalam istana Rawana, tempat Sinta disekap. Dia mengintip Sinta dari atas pohon; Sinta sedang duduk di taman ditemani oleh Trijata, keponakan Rawana. Seorang dayang menemukan dia dan melaporkan bahwa ada seekor kera bersembunyi di taman.",
  },
  {
    id: "panel_20b",
    name: "Panel Relief 20",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.768, 0.444, -1.261),
    radius: 0.35,
    img: "./assets/poi/panel_20b.jpg",
    desc: "Hanoman menghadap Sinta dan memberitahukan tujuan kedatangannya dan bahwa Rama akan segera datang untuk menjemput Sinta pulang.",
  },
  {
    id: "panel_21a",
    name: "Panel Relief 21",
    dir: "Adegan 1",
    pos: new THREE.Vector3(0.885, 0.446, -1.152),
    radius: 0.35,
    img: "./assets/poi/panel_21a.jpg",
    desc: "Kedatangan Hanoman diketahui oleh para pengawal kerajaan Alengka, dan dia ditangkap. Dia diikat dengan tali dan ekornya dibakar.",
  },
  {
    id: "panel_21b",
    name: "Panel Relief 21",
    dir: "Adegan 2",
    pos: new THREE.Vector3(0.967, 0.443, -1.148),
    radius: 0.35,
    img: "./assets/poi/panel_21b.jpg",
    desc: "Akan tetapi, Hanoman dapat melepaskan diri. Dengan ekornya terbakar, dia melompat ke atas atap yang satu ke atap lainnya sambil membakarnya. Dalam waktu sekejap saja seluruh kota Alengka terbakar.",
  },
  {
    id: "panel_22",
    name: "Panel Relief 22",
    dir: "Adegan",
    pos: new THREE.Vector3(1.091, 0.451, -0.969),
    radius: 0.35,
    img: "./assets/poi/panel_22.jpg",
    desc: "Hanoman kembali ke Kiskenda, diterima oleh Rama, Laksamana, dan Sugriwa. Hanoman melaporkan kepada mereka tugasnya di Alengka.",
  },
  {
    id: "panel_23",
    name: "Panel Relief 23",
    dir: "Adegan",
    pos: new THREE.Vector3(1.249, 0.447, -0.836),
    radius: 0.35,
    img: "./assets/poi/panel_23.jpg",
    desc: "Rama akan mengeringkan laut untuk jalan menuju Alengka. Dewa laut merasa takut; kemudian, ia memohon kepada Rama agar membatalkan niatnya tersebut dan menyarankan kepadanya untuk membuat jembatan dari pantai ke Alengka.",
  },
  {
    id: "panel_24a",
    name: "Panel Relief 24",
    dir: "Adegan 1",
    pos: new THREE.Vector3(1.415, 0.446, -0.646),
    radius: 0.35,
    img: "./assets/poi/panel_24a.jpg",
    desc: "Rama, Laksamana, dan Sugriwa menyaksikan para kera sedang membuat jembatan, dibantu oleh ikan dan dewa laut.",
  },
  {
    id: "panel_24b",
    name: "Panel Relief 24",
    dir: "Adegan 2",
    pos: new THREE.Vector3(1.416, 0.446, -0.459),
    radius: 0.35,
    img: "./assets/poi/panel_24b.jpg",
    desc: "Rama, Laksamana, Sugriwa, dan bala tentara kera sedang melewati jembatan menuju Alengka.",
  },
];

let poiOpen = false,
  activePOI = null;
const poiDots = new Map();

POIS.forEach((p) => {
  const dot = document.createElement("div");
  dot.className = "poiDot";
  dot.addEventListener("click", (e) => {
    e.stopPropagation(); // cegah klik ini juga memicu request pointer lock di canvas
    if (isSV && !poiOpen) openPOI(p);
  });
  const label = document.createElement("div");
  label.className = "poiLabel";
  label.textContent = p.name[currentLang];
  dot.appendChild(label);
  poiLayer.appendChild(dot);
  poiDots.set(p.id, dot);
});

const _poiProj = new THREE.Vector3(),
  _poiVec = new THREE.Vector3();

function updatePOIs() {
  if (!isSV) {
    poiLayer.style.display = "none";
    poiPrompt.classList.add("hidden");
    return;
  }
  poiLayer.style.display = "";
  let nearest = null,
    nearestDist = Infinity;

  for (const p of POIS) {
    const dot = poiDots.get(p.id);
    _poiProj.copy(p.pos).project(fpsCam);
    _poiVec.copy(p.pos).sub(P.pos);
    const dist = _poiVec.length(); // tetap dipakai utk fade/visibility dot
    const distXZ = Math.hypot(_poiVec.x, _poiVec.z); // ← BARU: jarak horizontal saja, abaikan Y
    const visible = _poiProj.z < 1 && _poiProj.x >= -1.15 && _poiProj.x <= 1.15 && _poiProj.y >= -1.15 && _poiProj.y <= 1.15 && dist < 12;

    if (visible) {
      dot.style.display = "block";
      dot.style.left = (_poiProj.x * 0.5 + 0.5) * innerWidth + "px";
      dot.style.top = (1 - (_poiProj.y * 0.5 + 0.5)) * innerHeight + "px";
      dot.style.opacity = Math.max(0.25, 1 - dist / 12);
      dot.classList.toggle("near", distXZ < p.radius); // ← pakai distXZ
    } else dot.style.display = "none";

    if (distXZ < p.radius && distXZ < nearestDist) {
      nearest = p;
      nearestDist = distXZ;
    }
  }
  activePOI = nearest;
  poiPrompt.classList.toggle("hidden", !nearest || poiOpen);
}

// ── VIRTUAL JOYSTICK (mobile) ────────────────────────────────────
// Gerakan analog: posisi jempol relatif titik tengah joystick di-map
// ke K.KeyW/S/A/D yang sama persis dipakai updatePlayer() untuk WASD —
// jadi 100% konsisten sama gerakan desktop, termasuk gerak diagonal
// (nahan maju + geser kanan sekaligus, dsb).
//
// "Berat": posisi knob TIDAK langsung nempel ke jari (joyTargetX/Y),
// tapi disusul pelan-pelan tiap frame (joyVisualX/Y, di-lerp lewat
// joyTick() yang dipanggil dari animate()) — hasilnya kerasa ada
// "inersia", tidak langsung snappy. Deadzone juga dinaikkan supaya
// perlu dorongan lebih tegas dulu sebelum karakter mulai jalan.
const JOY_MAX_R = 42; // radius maksimum jempol boleh geser dari pusat (px)
const JOY_DEAD = 0.42; // deadzone (0..1) — dinaikkan dari 0.28, butuh dorongan lebih tegas
const JOY_EASE = 0.14; // 0..1 — makin KECIL makin "berat"/lambat nyusul, makin besar makin ringan/responsif
let joyTouchId = null,
  joyCenterX = 0,
  joyCenterY = 0,
  joyTargetX = 0,
  joyTargetY = 0, // posisi mentah jempol (langsung dari touch)
  joyVisualX = 0,
  joyVisualY = 0; // posisi halus hasil lerp — INI yang gerakin knob & tentuin K.Key*

function joyReset() {
  joyTargetX = 0;
  joyTargetY = 0;
}
function joyUpdate(clientX, clientY) {
  let dx = clientX - joyCenterX,
    dy = clientY - joyCenterY;
  const dist = Math.hypot(dx, dy);
  if (dist > JOY_MAX_R) {
    dx = (dx / dist) * JOY_MAX_R;
    dy = (dy / dist) * JOY_MAX_R;
  }
  joyTargetX = dx;
  joyTargetY = dy;
}
// Dipanggil tiap frame dari animate() — inti dari kesan "berat" itu.
function joyTick() {
  if (!isMobile) return;
  joyVisualX += (joyTargetX - joyVisualX) * JOY_EASE;
  joyVisualY += (joyTargetY - joyVisualY) * JOY_EASE;
  joystickKnob.style.transform = `translate(calc(-50% + ${joyVisualX.toFixed(1)}px), calc(-50% + ${joyVisualY.toFixed(1)}px))`;
  const nx = joyVisualX / JOY_MAX_R,
    ny = joyVisualY / JOY_MAX_R; // -1..1
  K.KeyW = ny < -JOY_DEAD;
  K.KeyS = ny > JOY_DEAD;
  K.KeyA = nx < -JOY_DEAD;
  K.KeyD = nx > JOY_DEAD;
}
joystick.addEventListener(
  "touchstart",
  (e) => {
    if (joyTouchId !== null) return; // sudah ada jari lain yang pegang
    const t = e.changedTouches[0];
    joyTouchId = t.identifier;
    const r = joystick.getBoundingClientRect();
    joyCenterX = r.left + r.width / 2;
    joyCenterY = r.top + r.height / 2;
    joyUpdate(t.clientX, t.clientY);
    e.preventDefault();
  },
  { passive: false },
);
joystick.addEventListener(
  "touchmove",
  (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyTouchId) joyUpdate(t.clientX, t.clientY);
    }
    e.preventDefault();
  },
  { passive: false },
);
function joyEnd(e) {
  for (const t of e.changedTouches) {
    if (t.identifier === joyTouchId) {
      joyTouchId = null;
      joyReset();
    }
  }
}
joystick.addEventListener("touchend", joyEnd);
joystick.addEventListener("touchcancel", joyEnd);

let activePOIRef = null;

function refreshPOIText(p) {
  poiDirEl.textContent = p.dir[currentLang];
  poiTitleEl.textContent = p.name[currentLang];
  poiDescEl.textContent = p.desc[currentLang];
  poiImgEl.alt = p.name[currentLang];

  if (!poiAudioEl || !poiAudioBtn) return; // fitur audio opsional — jangan sampai bikin fitur lain ikut rusak
  poiAudioEl.pause();
  poiAudioEl.currentTime = 0;
  const src = p.audio && p.audio[currentLang];
  if (src) {
    poiAudioEl.src = src;
    poiAudioBtn.style.display = "";
    poiAudioIcon.textContent = "▶";
    poiAudioLabel.textContent = currentLang === "id" ? "Dengarkan" : "Listen";
  } else {
    poiAudioEl.removeAttribute("src");
    poiAudioBtn.style.display = "none";
  }
}

function refreshDotLabels() {
  POIS.forEach((p) => {
    const dot = poiDots.get(p.id);
    const label = dot.querySelector(".poiLabel");
    if (label) label.textContent = p.name[currentLang];
  });
}

function openPOI(p) {
  poiOpen = true;
  activePOIRef = p;
  refreshPOIText(p);
  poiImgFrame.classList.remove("empty");
  poiImgEl.onerror = () => poiImgFrame.classList.add("empty");
  poiImgEl.src = p.img;
  poiModal.classList.remove("hidden");
  poiPrompt.classList.add("hidden");
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}
function closePOI() {
  poiOpen = false;
  activePOIRef = null;
  poiModal.classList.add("hidden");
  if (poiAudioEl) poiAudioEl.pause();
  if (isSV) safeRequestPointerLock();
}
poiClose.addEventListener("click", closePOI);
poiModal.addEventListener("click", (e) => {
  if (e.target === poiModal) closePOI();
});

document.querySelectorAll(".langBtn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

if (poiAudioBtn && poiAudioEl) {
  poiAudioBtn.addEventListener("click", () => {
    if (poiAudioEl.paused) poiAudioEl.play().catch((err) => console.warn("Gagal memutar audio:", err));
    else poiAudioEl.pause();
  });
  poiAudioEl.addEventListener("play", () => {
    poiAudioIcon.textContent = "⏸";
    poiAudioLabel.textContent = currentLang === "id" ? "Jeda" : "Pause";
  });
  poiAudioEl.addEventListener("pause", () => {
    poiAudioIcon.textContent = "▶";
    poiAudioLabel.textContent = currentLang === "id" ? "Dengarkan" : "Listen";
  });
  poiAudioEl.addEventListener("ended", () => {
    poiAudioIcon.textContent = "▶";
    poiAudioLabel.textContent = currentLang === "id" ? "Dengarkan" : "Listen";
  });
} else {
  console.warn("Elemen audio POI tidak ditemukan — cek id #poiAudio dan #poiAudioBtn di index.html.");
}

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyL" && isSV) {
    console.log(`POI coord → x: ${P.pos.x.toFixed(3)}, y: ${P.pos.y.toFixed(3)}, z: ${P.pos.z.toFixed(3)}`);
  }
});

let lastUnlockTime = 0;
function safeRequestPointerLock() {
  const cooldown = 1300; // ms, sedikit di atas batas cooldown browser
  const elapsed = performance.now() - lastUnlockTime;
  const doRequest = () => {
    canvas.requestPointerLock().catch((err) => {
      console.warn("Pointer lock ditunda/gagal:", err.message || err);
    });
  };
  if (elapsed < cooldown) setTimeout(doRequest, cooldown - elapsed);
  else doRequest();
}

// ── POINTER LOCK (desktop) ───────────────────────────────────────
canvas.addEventListener("click", () => {
  if (isMobile) return; // mobile pakai touch-drag look, bukan pointer lock
  if (isSV && !locked) {
    safeRequestPointerLock(); // ← ganti dari canvas.requestPointerLock()
  } else if (isSV && locked && activePOI && !poiOpen) {
    openPOI(activePOI);
  }
});
document.addEventListener("pointerlockchange", () => {
  const wasLocked = locked;
  locked = document.pointerLockElement === canvas;
  if (wasLocked && !locked) lastUnlockTime = performance.now();
  lockMsg.style.display = isSV && !locked && !isMobile ? "block" : "none";
  xhair.style.display = isSV && locked ? "block" : "none";
});
document.addEventListener("mousemove", (e) => {
  if (!locked || !isSV) return;
  P.yaw -= e.movementX * 0.0018;
  P.pitch = Math.max(-1.3, Math.min(1.3, P.pitch - e.movementY * 0.0018));
});

// ── TOUCH LOOK (mobile) ──────────────────────────────────────────
// Gantinya pointer lock: drag jari di mana saja di canvas buat menoleh.
// Tap di tombol panah / hotspot dot tidak kena ini karena elemen itu
// terpisah dari canvas (event-nya tidak akan sampai ke sini).
let touchLookId = null,
  lastTouchX = 0,
  lastTouchY = 0;
canvas.addEventListener(
  "touchstart",
  (e) => {
    if (!isMobile || !isSV || poiOpen) return;
    const t = e.changedTouches[0];
    touchLookId = t.identifier;
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
  },
  { passive: true },
);
canvas.addEventListener(
  "touchmove",
  (e) => {
    if (!isMobile || !isSV || poiOpen || touchLookId === null) return;
    let t = null;
    for (const ct of e.changedTouches) if (ct.identifier === touchLookId) t = ct;
    if (!t) return;
    const dx = t.clientX - lastTouchX,
      dy = t.clientY - lastTouchY;
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
    P.yaw -= dx * 0.0032; // sedikit lebih sensitif dari mouse, drag jari biasanya pendek
    P.pitch = Math.max(-1.3, Math.min(1.3, P.pitch - dy * 0.0032));
    e.preventDefault(); // cegah halaman ikut ke-scroll pas drag
  },
  { passive: false },
);
canvas.addEventListener(
  "touchend",
  (e) => {
    let stillDown = false;
    for (const t of e.touches) if (t.identifier === touchLookId) stillDown = true;
    if (!stillDown) touchLookId = null;
  },
  { passive: true },
);

// ── TAP UNTUK BUKA INFO POI (mobile) ─────────────────────────────
// Di desktop prompt ini cuma indikator (tekan E beneran di keyboard).
// Di HP tidak ada keyboard, jadi prompt-nya sendiri harus bisa di-tap
// (CSS .is-mobile #poiPrompt sudah set pointer-events:auto).
poiPrompt.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isSV && activePOI && !poiOpen) openPOI(activePOI);
});

// ── KEYBOARD ─────────────────────────────────────────────────────
const K = {};
document.addEventListener("keydown", (e) => {
  K[e.code] = true;
  if (e.code === "Escape") {
    if (poiOpen) closePOI();
    else if (isSV) exitSV();
  }
  if (e.code === "KeyE" && isSV && activePOI && !poiOpen) openPOI(activePOI);
  if (e.code === "Space" && isSV) P.jumpRequested = true;
  if (["Space", "ArrowUp", "ArrowDown"].includes(e.code)) e.preventDefault();
});
document.addEventListener("keyup", (e) => (K[e.code] = false));

// ── MODE SWITCH ──────────────────────────────────────────────────
function enterSV() {
  ensureBVHReady(); // bangun BVH baru sekarang, bukan sejak awal load
  isSV = true;
  P.pos.copy(SPAWN_POS);
  P.yaw = SPAWN_YAW;
  P.pitch = 0;
  P.vel.set(0, 0, 0);
  P.onGround = false;
  activeCamera = fpsCam;
  btnSV.classList.add("active");
  btnOrb.classList.remove("active");
  infoBox.style.display = "none"; // kotak info candi cuma relevan di mode Orbit
  if (isMobile) {
    joystick.style.display = "block"; // joystick cuma buat mobile
    document.getElementById("hints").style.display = "none"; // hint keyboard tidak relevan di HP
  } else {
    lockMsg.style.display = "block";
    document.getElementById("hints").style.display = "";
    document.getElementById("hints").style.left = "var(--space-5)"; // info card lagi hidden di SV, aman geser ke pojok asli
  }
  entrySc.classList.add("hidden");
  // Street-view render settings: lower pixel ratio + tight fog = fewer fragments
  renderer.setPixelRatio(Math.min(devicePixelRatio, PR_SV_MAX));
  scene.fog.near = FOG_NEAR_SV;
  scene.fog.far = FOG_FAR_SV;
  fpsCam.far = FOG_FAR_SV;
  fpsCam.updateProjectionMatrix();
}
function exitSV() {
  if (poiOpen) closePOI();
  isSV = false;
  activeCamera = orbitCam;
  locked = false;
  if (document.pointerLockElement === canvas) document.exitPointerLock();
  btnOrb.classList.add("active");
  btnSV.classList.remove("active");
  infoBox.style.display = ""; // tampilkan lagi di mode Orbit
  document.getElementById("hints").style.left = ""; // balik ke slot sebelah info card biar tidak tabrakan
  xhair.style.display = "none";
  lockMsg.style.display = "none";
  joystick.style.display = "none";
  joyTouchId = null;
  joyTargetX = joyTargetY = joyVisualX = joyVisualY = 0; // reset biar tidak nyangkut posisi lama saat SV dibuka lagi
  K.KeyW = false; // pastikan arah yang lagi ditahan tidak "nyangkut" jalan terus
  K.KeyS = false;
  K.KeyA = false;
  K.KeyD = false;
  joystickKnob.style.transform = "translate(-50%, -50%)";
  // Restore full quality for orbit view
  renderer.setPixelRatio(Math.min(devicePixelRatio, PR_ORBIT_MAX));
  scene.fog.near = FOG_NEAR_ORBIT;
  scene.fog.far = FOG_FAR_ORBIT;
  fpsCam.far = FOG_FAR_ORBIT;
  fpsCam.updateProjectionMatrix();
}
btnSV.addEventListener("click", enterSV);
btnOrb.addEventListener("click", exitSV);
document.getElementById("enterBtn").addEventListener("click", enterSV);

// ── BVH COLLISION ────────────────────────────────────────────────
// One invisible mesh with BVH — O(log N) raycast instead of O(N)
let bvhMesh = null; // dibangun lazy, baru saat pertama kali masuk Street View
let rawGeoRef = null; // referensi geometry mentah, diisi setelah model selesai load
let bvhBuilding = false; // guard supaya tidak dobel-build kalau user klik cepat

function ensureBVHReady() {
  if (bvhMesh || bvhBuilding || !rawGeoRef) return; // sudah ada / lagi proses / geometry belum siap
  bvhBuilding = true;
  // BVH cuma dipakai buat collision jalan kaki di Street View — Orbit tidak
  // butuh ini sama sekali. Ditunda sampai baru dibutuhkan supaya loading
  // awal (yang dilihat SEMUA user, termasuk yang cuma mau Orbit) jauh lebih cepat,
  // terutama di HP yang CPU-nya jauh lebih lambat untuk kerjaan berat begini.
  rawGeoRef.computeBoundsTree({ maxLeafTris: 8, strategy: 0 }); // SAH strategy
  bvhMesh = new THREE.Mesh(rawGeoRef, new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }));
  bvhMesh.matrixAutoUpdate = false;
  scene.add(bvhMesh);
  bvhBuilding = false;
}

// ── Dedicated raycasters
const gRay = new THREE.Raycaster();
gRay.firstHitOnly = true;
const stpRay = new THREE.Raycaster();
stpRay.firstHitOnly = true;
const wRayX = new THREE.Raycaster();
wRayX.firstHitOnly = true;
const wRayZ = new THREE.Raycaster();
wRayZ.firstHitOnly = true;
const poiPickRay = new THREE.Raycaster();
document.addEventListener("keydown", (e) => {
  if (e.code !== "KeyK" || !isSV) return;

  if (!bvhMesh) {
    showCalibToast("Model/BVH belum selesai dimuat — tunggu sebentar lalu coba lagi.");
    return;
  }

  poiPickRay.setFromCamera(new THREE.Vector2(0, 0), fpsCam); // arah persis crosshair
  const hit = poiPickRay.intersectObject(bvhMesh, false);
  if (hit.length) {
    const pt = hit[0].point;
    const msg = `x:${pt.x.toFixed(3)} y:${pt.y.toFixed(3)} z:${pt.z.toFixed(3)}`;
    console.log(msg);
    showCalibToast(msg);
  } else {
    console.warn("Tidak kena permukaan — arahkan crosshair ke arca lalu tekan K lagi.");
    showCalibToast("Tidak kena permukaan — arahkan crosshair ke bagian candi.");
  }
});

// Toast kecil supaya feedback kalibrasi kelihatan tanpa buka DevTools
let _toastTimer = null;
function showCalibToast(text) {
  let el = document.getElementById("calibToast");
  if (!el) {
    el = document.createElement("div");
    el.id = "calibToast";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}
const _DN = new THREE.Vector3(0, -1, 0);
const _PX = new THREE.Vector3(1, 0, 0),
  _NX = new THREE.Vector3(-1, 0, 0);
const _PZ = new THREE.Vector3(0, 0, 1),
  _NZ = new THREE.Vector3(0, 0, -1);
const _ro = new THREE.Vector3();

// Ground probe — starts from ABOVE maxStepH so it can detect the next stair tread.
// Far is generous enough to see the current surface AND one step down.
function groundY(pos) {
  // Cast origin: curFloor + maxStepH + small margin  =  pos.y - eyeH + maxStepH + 0.05
  _ro.set(pos.x, pos.y - P.eyeH + P.maxStepH + 0.05, pos.z);
  gRay.set(_ro, _DN);
  // Far: reach from (curFloor+maxStepH) down past (curFloor - maxStepH - buffer)
  gRay.far = P.maxStepH * 2 + P.eyeH + 0.2;
  if (bvhMesh) {
    const h = gRay.intersectObject(bvhMesh, false);
    if (h.length) return h[0].point.y;
  }
  const h2 = gRay.intersectObjects([ground, plaza], false);
  return h2.length ? h2[0].point.y : null;
}

// Wall probe — only 2 heights: just above stair riser + eye level.
// NO top-of-head probe so low archways / door lintels don't block the player.
function wallBlocked(pos, mx, mz) {
  if (!bvhMesh) return { bx: false, bz: false };
  const heights = [
    pos.y - P.eyeH + P.maxStepH + 0.01, // just above max stair riser
    pos.y, // eye / chest level
  ];
  let bx = false,
    bz = false;
  for (const hy of heights) {
    _ro.set(pos.x, hy, pos.z);
    if (!bx && mx !== 0) {
      wRayX.set(_ro, mx > 0 ? _PX : _NX);
      wRayX.far = P.radius + 0.012;
      if (wRayX.intersectObject(bvhMesh, false).length) bx = true;
    }
    if (!bz && mz !== 0) {
      wRayZ.set(_ro, mz > 0 ? _PZ : _NZ);
      wRayZ.far = P.radius + 0.012;
      if (wRayZ.intersectObject(bvhMesh, false).length) bz = true;
    }
    if (bx && bz) break;
  }
  return { bx, bz };
}

// ── PLAYER UPDATE ────────────────────────────────────────────────
const _f = new THREE.Vector3(),
  _r = new THREE.Vector3(),
  _mv = new THREE.Vector3();
function updatePlayer(dt) {
  if (!isSV || poiOpen) return;
  dt = Math.min(dt, 0.05);
  const spd = K.ShiftLeft || K.ShiftRight ? P.runSpd : P.walkSpd;
  _mv.set(0, 0, 0);
  if (K.KeyW || K.ArrowUp) {
    _f.set(Math.sin(P.yaw), 0, Math.cos(P.yaw));
    _mv.addScaledVector(_f, -spd * dt);
  }
  if (K.KeyS || K.ArrowDown) {
    _f.set(Math.sin(P.yaw), 0, Math.cos(P.yaw));
    _mv.addScaledVector(_f, spd * dt);
  }
  if (K.KeyA || K.ArrowLeft) {
    _r.set(Math.cos(P.yaw), 0, -Math.sin(P.yaw));
    _mv.addScaledVector(_r, -spd * dt);
  }
  if (K.KeyD || K.ArrowRight) {
    _r.set(Math.cos(P.yaw), 0, -Math.sin(P.yaw));
    _mv.addScaledVector(_r, spd * dt);
  }

  // ── Horizontal movement + wall collision
  if (_mv.lengthSq() > 0) {
    const { bx, bz } = wallBlocked(P.pos, _mv.x, _mv.z);
    if (!bx) P.pos.x += _mv.x;
    if (!bz) P.pos.z += _mv.z;
  }

  // ── Gravity (only when airborne)
  if (!P.onGround) P.vel.y -= P.gravity * dt;
  P.vel.y = Math.max(P.vel.y, -8.0);
  P.pos.y += P.vel.y * dt;

  // ── Ground resolution — always reset first, re-enable only if truly touching surface.
  // Threshold kept tiny (0.002) so a freshly-jumped player (pos.y rises ~0.008/frame)
  // escapes the snap zone immediately and gravity takes over.
  P.onGround = false;
  const fy = groundY(P.pos);
  if (fy !== null && P.pos.y <= fy + P.eyeH + 0.002) {
    P.pos.y = fy + P.eyeH;
    P.vel.y = 0;
    P.onGround = true;
  } else if (P.pos.y < -5) {
    P.pos.set(3, P.eyeH, 3);
    P.vel.y = 0;
    P.onGround = true;
  }

  // ── Jump — applied AFTER ground resolution.
  // Also nudge pos.y up so the snap condition (threshold 0.002) cannot re-capture
  // the player in the very same frame the jump is triggered.
  if (P.jumpRequested) {
    P.jumpRequested = false;
    if (P.onGround) {
      P.vel.y = P.jumpVel;
      P.pos.y += 0.01; // push clear of snap zone immediately
      P.onGround = false;
    }
  }

  // ── Head-bob while walking on ground
  const moving = _mv.lengthSq() > 0 && P.onGround;
  const bobRate = K.ShiftLeft || K.ShiftRight ? 12 : 6;
  if (moving) {
    P.bobPhase = (P.bobPhase + bobRate * dt) % (Math.PI * 2);
    P.bobY = Math.sin(P.bobPhase) * 0.004;
  } else {
    P.bobY *= 0.8;
  }

  P.pos.x = Math.max(-50, Math.min(50, P.pos.x));
  P.pos.z = Math.max(-50, Math.min(50, P.pos.z));
  fpsCam.position.copy(P.pos);
  fpsCam.position.y += P.bobY;
  fpsCam.rotation.order = "YXZ";
  fpsCam.rotation.y = P.yaw;
  fpsCam.rotation.x = P.pitch;
}

// ===================================================================
// KODE MINIMAP CANDI SIWA — SELASAR 4 MATA ANGIN 100% IDENTIK & SIMETRIS
// ===================================================================
function drawMinimap() {
  const mmCanvas = document.getElementById("mm");
  if (!mmCanvas) return;
  const mmCtx = mmCanvas.getContext("2d");
  const width = mmCanvas.width;
  const height = mmCanvas.height;

  // 1. Clear background (Kertas sketsa cream)
  mmCtx.fillStyle = "#ebe8db";
  mmCtx.fillRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const gridStep = 12; // Skala grid

  const toPx = (gx, gy) => ({
    x: centerX + gx * gridStep,
    y: centerY + gy * gridStep,
  });

  // 3. OUTLINE CANDI (GARIS WARNA MERAH)
  const redPoints = [
    [-1, -10], [1, -10],
    [1, -9], [2, -9], [2, -8], [4, -8], [4, -6], [6, -6], [6, -4], [8, -4], [8, -3], [9, -3], [9, -1],
    [11, -1], [11, 1], [9, 1],
    [9, 3], [8, 3], [8, 4], [6, 4], [6, 6], [4, 6], [4, 8], [2, 8], [2, 9], [1, 9], [1, 10],
    [-1, 10],
    [-1, 9], [-2, 9], [-2, 8], [-4, 8], [-4, 6], [-6, 6], [-6, 4], [-8, 4], [-8, 3], [-9, 3], [-9, 1],
    [-11, 1], [-11, -1], [-9, -1],
    [-9, -3], [-8, -3], [-8, -4], [-6, -4], [-6, -6], [-4, -6], [-4, -8], [-2, -8], [-2, -9], [-1, -9], [-1, -10]
  ];

  mmCtx.beginPath();
  redPoints.forEach(([gx, gy], i) => {
    const pt = toPx(gx, gy);
    if (i === 0) mmCtx.moveTo(pt.x, pt.y);
    else mmCtx.lineTo(pt.x, pt.y);
  });
  mmCtx.closePath();
  mmCtx.strokeStyle = "#2a2119";
  mmCtx.lineWidth = 2.5;
  mmCtx.stroke();

  // 4. OUTLINE KORIDOR & SELASAR
  mmCtx.strokeStyle = "#ffda3d";
  mmCtx.lineWidth = 1.8;

  // A. 4 SELASAR UTAMA (Dengan celah/gap di persimpangan koridor)
  const hallwayPaths = [
    // Selasar Timur (Gap antara x=6 dan x=8)
    [[2, -0.5], [6, -0.5]],
    [[8, -0.5], [10, -0.5]],
    [[2, 0.5], [6, 0.5]],
    [[8, 0.5], [10, 0.5]],

    // Selasar Barat (Gap antara x=-6 dan x=-8)
    [[-5.5, -0.5], [-6, -0.5]],
    [[-8, -0.5], [-10, -0.5]],
    [[-5.5, 0.5], [-6, 0.5]],
    [[-8, 0.5], [-10, 0.5]],

    // Selasar Utara (Gap antara y=-6 dan y=-8)
    [[-0.5, -5.5], [-0.5, -6]],
    [[-0.5, -8], [-0.5, -9]],
    [[0.5, -5.5], [0.5, -6]],
    [[0.5, -8], [0.5, -9]],

    // Selasar Selatan (Gap antara y=6 dan y=8)
    [[-0.5, 5.5], [-0.5, 6]],
    [[-0.5, 8], [-0.5, 9]],
    [[0.5, 5.5], [0.5, 6]],
    [[0.5, 8], [0.5, 9]]
  ];

  hallwayPaths.forEach((path) => {
    mmCtx.beginPath();
    path.forEach(([gx, gy], i) => {
      const pt = toPx(gx, gy);
      if (i === 0) mmCtx.moveTo(pt.x, pt.y);
      else mmCtx.lineTo(pt.x, pt.y);
    });
    mmCtx.stroke();
  });

  // B. DINDING KORIDOR 4 KUADRAN (Ujung dinding terbuka pada lorong selasar)
  // Kuadran NE (Utara-Timur)
  const neOuter = [[0.5, -8], [1, -8], [1, -7], [3, -7], [3, -5], [5, -5], [5, -3], [7, -3], [7, -2], [8, -2], [8, -0.5]];
  const neInner = [[0.5, -6], [1, -6], [2, -6], [2, -4], [4, -4], [4, -2], [6, -2], [6, -0.5]];

  // Kuadran SE (Selatan-Timur)
  const seOuter = [[8, 0.5], [8, 2], [7, 2], [7, 3], [5, 3], [5, 5], [3, 5], [3, 7], [1, 7], [1, 8], [0.5, 8]];
  const seInner = [[6, 0.5], [6, 2], [4, 2], [4, 4], [2, 4], [2, 6], [1, 6], [0.5, 6]];

  // Kuadran SW (Selatan-Barat)
  const swOuter = [[-0.5, 8], [-1, 8], [-1, 7], [-3, 7], [-3, 5], [-5, 5], [-5, 3], [-7, 3], [-7, 2], [-8, 2], [-8, 0.5]];
  const swInner = [[-0.5, 6], [-1, 6], [-2, 6], [-2, 4], [-4, 4], [-4, 2], [-6, 2], [-6, 0.5]];

  // Kuadran NW (Utara-Barat)
  const nwOuter = [[-8, -0.5], [-8, -2], [-7, -2], [-7, -3], [-5, -3], [-5, -5], [-3, -5], [-3, -7], [-1, -7], [-1, -8], [-0.5, -8]];
  const nwInner = [[-6, -0.5], [-6, -2], [-4, -2], [-4, -4], [-2, -4], [-2, -6], [-1, -6], [-0.5, -6]];

  const corridorQuadrants = [neOuter, neInner, seOuter, seInner, swOuter, swInner, nwOuter, nwInner];

  corridorQuadrants.forEach((path) => {
    mmCtx.beginPath();
    path.forEach(([gx, gy], i) => {
      const pt = toPx(gx, gy);
      if (i === 0) mmCtx.moveTo(pt.x, pt.y);
      else mmCtx.lineTo(pt.x, pt.y);
    });
    mmCtx.stroke();
  });

  // 5. OUTLINE RUANG ARCA (GARIS WARNA BIRU TUA)
  mmCtx.strokeStyle = "#3d6b65";
  mmCtx.lineWidth = 2.5;

  // Ruang Arca Utama / Tengah (Siwa) - Pintu ke Timur
  const c1 = toPx(-2, -2), c2 = toPx(2, -2), c3 = toPx(2, 2), c4 = toPx(-2, 2);
  const cEastTop = toPx(2, -0.5), cEastBtm = toPx(2, 0.5);
  mmCtx.beginPath();
  mmCtx.moveTo(cEastTop.x, cEastTop.y);
  mmCtx.lineTo(c2.x, c2.y); mmCtx.lineTo(c1.x, c1.y); mmCtx.lineTo(c4.x, c4.y); mmCtx.lineTo(c3.x, c3.y); mmCtx.lineTo(cEastBtm.x, cEastBtm.y);
  mmCtx.stroke();

  // Ruang Arca Utara (Durga) - Pintu ke Utara
  const nTopLeft = toPx(-1.5, -5.5), nDoorLeft = toPx(-0.5, -5.5), nDoorRight = toPx(0.5, -5.5), nTopRight = toPx(1.5, -5.5), nBtmRight = toPx(1.5, -2.5), nBtmLeft = toPx(-1.5, -2.5);
  mmCtx.beginPath();
  mmCtx.moveTo(nDoorLeft.x, nDoorLeft.y); mmCtx.lineTo(nTopLeft.x, nTopLeft.y); mmCtx.lineTo(nBtmLeft.x, nBtmLeft.y); mmCtx.lineTo(nBtmRight.x, nBtmRight.y); mmCtx.lineTo(nTopRight.x, nTopRight.y); mmCtx.lineTo(nDoorRight.x, nDoorRight.y);
  mmCtx.stroke();

  // Ruang Arca Selatan (Agastya) - Pintu ke Selatan
  const sBtmLeft = toPx(-1.5, 5.5), sDoorLeft = toPx(-0.5, 5.5), sDoorRight = toPx(0.5, 5.5), sBtmRight = toPx(1.5, 5.5), sTopRight = toPx(1.5, 2.5), sTopLeft = toPx(-1.5, 2.5);
  mmCtx.beginPath();
  mmCtx.moveTo(sDoorLeft.x, sDoorLeft.y); mmCtx.lineTo(sBtmLeft.x, sBtmLeft.y); mmCtx.lineTo(sTopLeft.x, sTopLeft.y); mmCtx.lineTo(sTopRight.x, sTopRight.y); mmCtx.lineTo(sBtmRight.x, sBtmRight.y); mmCtx.lineTo(sDoorRight.x, sDoorRight.y);
  mmCtx.stroke();

  // Ruang Arca Barat (Ganesha) - Pintu ke Barat
  const wLeftTop = toPx(-5.5, -1.5), wDoorTop = toPx(-5.5, -0.5), wDoorBtm = toPx(-5.5, 0.5), wLeftBtm = toPx(-5.5, 1.5), wRightBtm = toPx(-2.5, 1.5), wRightTop = toPx(-2.5, -1.5);
  mmCtx.beginPath();
  mmCtx.moveTo(wDoorTop.x, wDoorTop.y); mmCtx.lineTo(wLeftTop.x, wLeftTop.y); mmCtx.lineTo(wRightTop.x, wRightTop.y); mmCtx.lineTo(wRightBtm.x, wRightBtm.y); mmCtx.lineTo(wLeftBtm.x, wLeftBtm.y); mmCtx.lineTo(wDoorBtm.x, wDoorBtm.y);
  mmCtx.stroke();

// ===================================================================
// KODE PLAYER MARKER (Tambahkan di bagian paling bawah fungsi drawMinimap)
// ===================================================================

// Kalibrasi: rasio grid-minimap vs unit dunia (P.pos). Sesuaikan angka
// ini kalau marker meleset dari lorong/gerbang — cek dengan jalan ke
// gerbang timur (tombol 1) lalu bandingkan posisi marker vs gerbang di gambar.
const PLAYER_MARKER_SCALE = 4;
const playerX = P.pos.x * PLAYER_MARKER_SCALE;
const playerY = P.pos.z * PLAYER_MARKER_SCALE;

const playerPt = toPx(playerX, playerY);

mmCtx.save();
mmCtx.translate(playerPt.x, playerPt.y);
mmCtx.rotate(-P.yaw);

// 1. Panah Chevron Arah Player (Warna Merah)
mmCtx.beginPath();
mmCtx.moveTo(0, -10);  // ujung panah (depan)
mmCtx.lineTo(8, 6);    // sudut kanan belakang
mmCtx.lineTo(0, 2);    // lekukan tengah — ini yang bikin bentuk chevron/panah
mmCtx.lineTo(-8, 6);   // sudut kiri belakang
mmCtx.closePath();

mmCtx.fillStyle = "#e53935"; // merah
mmCtx.fill();

mmCtx.restore();
}

// ── LOAD MODEL ───────────────────────────────────────────────────
barFill.style.width = "5%";
barTxt.textContent = I18N[currentLang].loadModel;

const draco = new DRACOLoader();
draco.setDecoderPath("./library/draco/"); // self-hosted, tidak lagi bergantung ke gstatic.com
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);

loader.load(
  "assets/candi_siwa.glb",
  (gltf) => {
    barFill.style.width = "72%";
    stageTxt.textContent = I18N[currentLang].stageScaling;

    const model = gltf.scene;
    // Scale to 4.7 units tall (1 unit = 10 m real)
    const box0 = new THREE.Box3().setFromObject(model);
    const sf = 4.7 / (box0.max.y - box0.min.y);
    model.scale.setScalar(sf);
    const box1 = new THREE.Box3().setFromObject(model);
    model.position.set(-(box1.min.x + box1.max.x) / 2, -box1.min.y, -(box1.min.z + box1.max.z) / 2);
    model.updateMatrixWorld(true);

    // Extract single geometry + material from the model
    let rawGeo = null;
    let srcMat = null;
    model.traverse((o) => {
      if (o.isMesh && !rawGeo) {
        rawGeo = o.geometry.clone();
        rawGeo.applyMatrix4(o.matrixWorld);
        srcMat = o.material; // ← pakai material asli dari GLB
      }
    });
    if (!rawGeo) {
      errBox.style.display = "block";
      errBox.textContent = "Geometry error";
      return;
    }

    // Pastikan colorSpace benar jika ada texture
    if (srcMat?.map) srcMat.map.colorSpace = THREE.SRGBColorSpace;
    // DoubleSide = jaring pengaman kalau ada winding order yang
    // terbalik di sebagian kecil geometri (tidak akan bolong/hitam)
    if (srcMat) srcMat.side = THREE.DoubleSide;

    // PENTING: applyMatrix4() di atas SUDAH mentransformasikan normal
    // asli dari GLB dengan benar (pakai normal matrix, menangani
    // rotasi/skala termasuk mirror). JANGAN hitung ulang normal kalau
    // geometry sudah punya normal attribute — computeVertexNormals()
    // menghitung dari winding segitiga dan bisa menghasilkan normal
    // TERBALIK kalau ada skala negatif/mirror di node model (penyebab
    // candi tampak hitam sebelumnya). Hanya hitung sebagai fallback
    // kalau GLB benar-benar tidak menyertakan normal.
    if (!rawGeo.attributes.normal) {
      rawGeo.computeVertexNormals();
    }

    // ─ BVH ditunda ──────────────────────────────────────────────
    // BVH (collision tree) TIDAK dibangun di sini lagi — cuma dipakai
    // saat Street View, jadi ditunda ke ensureBVHReady() yang dipanggil
    // dari enterSV(). Ini bikin loading awal jauh lebih cepat, terutama
    // di HP, karena kerjaan CPU paling berat (computeBoundsTree atas
    // 3.37M triangle) tidak lagi dikerjakan di depan buat SEMUA user.
    barFill.style.width = "80%";
    rawGeoRef = rawGeo; // simpan referensi, dipakai nanti oleh ensureBVHReady()

    // ─ VISUAL MESH: spatial chunking for frustum culling ─────────
    // Split geometry into GRID×GRID cells → each cell has its own
    // bounding box → GPU automatically skips cells outside the view frustum.
    barFill.style.width = "87%";
    stageTxt.textContent = I18N[currentLang].stageChunks;

    const GRID = 6;
    const posA = rawGeo.attributes.position;
    const idxA = rawGeo.index;
    const norA = rawGeo.attributes.normal;
    const uvA = rawGeo.attributes.uv;
    const triCount = idxA ? idxA.count / 3 : posA.count / 3;

    // World extent — 1x loop biasa, ganti 4x .reduce() yang tiap panggil
    // scan ulang seluruh array posisi (2.75 juta vertex x 4 = mubazir).
    let minX = Infinity,
      maxX = -Infinity,
      minZ = Infinity,
      maxZ = -Infinity;
    for (let i = 0; i < posA.count; i++) {
      const x = posA.getX(i),
        z = posA.getZ(i);
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }
    const cellW = (maxX - minX) / GRID,
      cellD = (maxZ - minZ) / GRID;

    // PASS 1: cuma hitung berapa triangle masuk tiap cell dulu.
    // Tujuannya supaya di PASS 2 kita bisa langsung alokasi Float32Array
    // dengan ukuran PAS dari awal — tidak ada array.push() yang bikin
    // engine JS resize & copy buffer berkali-kali (mahal untuk jutaan elemen).
    const cellTriCount = new Uint32Array(GRID * GRID);
    const triCellIdx = new Uint8Array(triCount); // GRID*GRID=36 → muat di Uint8
    for (let t = 0; t < triCount; t++) {
      const i0 = idxA ? idxA.getX(t * 3) : t * 3;
      const i1 = idxA ? idxA.getX(t * 3 + 1) : t * 3 + 1;
      const i2 = idxA ? idxA.getX(t * 3 + 2) : t * 3 + 2;
      const cx = (posA.getX(i0) + posA.getX(i1) + posA.getX(i2)) / 3;
      const cz = (posA.getZ(i0) + posA.getZ(i1) + posA.getZ(i2)) / 3;
      const gx = Math.min(GRID - 1, Math.max(0, Math.floor((cx - minX) / cellW)));
      const gz = Math.min(GRID - 1, Math.max(0, Math.floor((cz - minZ) / cellD)));
      const cellIdx = gz * GRID + gx;
      triCellIdx[t] = cellIdx;
      cellTriCount[cellIdx]++;
    }

    // Alokasi Float32Array pas ukuran per cell (sekali alokasi, tanpa resize)
    const cellPos = [],
      cellNor = [],
      cellUv = [];
    const cellCursor = new Uint32Array(GRID * GRID);
    for (let c = 0; c < GRID * GRID; c++) {
      const nVerts = cellTriCount[c] * 3;
      cellPos.push(nVerts ? new Float32Array(nVerts * 3) : null);
      cellNor.push(norA && nVerts ? new Float32Array(nVerts * 3) : null);
      cellUv.push(uvA && nVerts ? new Float32Array(nVerts * 2) : null);
    }

    // PASS 2: isi langsung by-index ke typed array (bukan push lagi)
    for (let t = 0; t < triCount; t++) {
      const cellIdx = triCellIdx[t];
      const i0 = idxA ? idxA.getX(t * 3) : t * 3;
      const i1 = idxA ? idxA.getX(t * 3 + 1) : t * 3 + 1;
      const i2 = idxA ? idxA.getX(t * 3 + 2) : t * 3 + 2;
      let cursor = cellCursor[cellIdx];
      for (const vi of [i0, i1, i2]) {
        const b3 = cursor * 3;
        cellPos[cellIdx][b3] = posA.getX(vi);
        cellPos[cellIdx][b3 + 1] = posA.getY(vi);
        cellPos[cellIdx][b3 + 2] = posA.getZ(vi);
        if (norA) {
          cellNor[cellIdx][b3] = norA.getX(vi);
          cellNor[cellIdx][b3 + 1] = norA.getY(vi);
          cellNor[cellIdx][b3 + 2] = norA.getZ(vi);
        }
        if (uvA) {
          const b2 = cursor * 2;
          cellUv[cellIdx][b2] = uvA.getX(vi);
          cellUv[cellIdx][b2 + 1] = uvA.getY(vi);
        }
        cursor++;
      }
      cellCursor[cellIdx] = cursor;
    }

    // Gunakan material asli dari GLB, fallback ke abu-abu batu andesit
    const visMat =
      srcMat ||
      new THREE.MeshStandardMaterial({
        color: 0x8a7d6b,
        roughness: 0.88,
        metalness: 0.04,
        side: THREE.DoubleSide,
      });
    let chunks = 0;
    for (let c = 0; c < GRID * GRID; c++) {
      if (!cellPos[c]) continue;
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(cellPos[c], 3));
      if (cellNor[c]) g.setAttribute("normal", new THREE.BufferAttribute(cellNor[c], 3));
      if (cellUv[c]) g.setAttribute("uv", new THREE.BufferAttribute(cellUv[c], 2));
      const m = new THREE.Mesh(g, visMat);
      m.frustumCulled = true;
      m.matrixAutoUpdate = false;
      scene.add(m);
      chunks++;
    }

    // Orbit camera target
    orb.ty = 4.7 * 0.35;
    orb.r = 12;
    updateOrbit();

    barFill.style.width = "100%";
    stageTxt.textContent = "";

    loadSc.classList.add("hidden");
    entrySc.classList.remove("hidden");
    console.log(`✓ BVH: ${triCount.toLocaleString()} tris → O(log N) raycast | ${chunks} visual chunks`);
  },

  (evt) => {
    const p = evt.lengthComputable ? 5 + (evt.loaded / evt.total) * 60 : 30;
    barFill.style.width = p + "%";
    barTxt.textContent = `${p.toFixed(0)}% · ${(evt.loaded / 1024 / 1024).toFixed(1)} MB`;
  },

  (err) => {
    errBox.style.display = "block";
    errBox.innerHTML = `❌ Gagal memuat model<br>${err.message || err}<br>Pastikan candi_siwa.glb ada di folder yang sama.`;
    barTxt.textContent = I18N[currentLang].loadError;
  },
);

// ── RENDER LOOP ──────────────────────────────────────────────────
const clock = new THREE.Clock();
let fc = 0,
  lastT = performance.now(),
  avgFps = 60;

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  updatePlayer(dt);
  joyTick();
  updatePOIs();
  if (fc++ % 15 === 0) drawMinimap();
  renderer.render(scene, activeCamera);

  const now = performance.now(),
    ft = now - lastT;
  lastT = now;
  if (ft > 0 && ft < 500) avgFps = avgFps * 0.95 + (1000 / ft) * 0.05;

  if (fc % 20 === 0) {
    fpsEl.textContent = `FPS: ${Math.round(avgFps)}`;
  }
}
animate();

window.addEventListener("resize", () => {
  renderer.setSize(innerWidth, innerHeight);
  orbitCam.aspect = fpsCam.aspect = innerWidth / innerHeight;
  orbitCam.updateProjectionMatrix();
  fpsCam.updateProjectionMatrix();
});

// ── Terapkan bahasa tersimpan setelah semua deklarasi siap ──
const savedLang = localStorage.getItem("candiSiwaLang") || "id";
applyLanguage(savedLang);
