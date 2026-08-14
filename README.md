# WebGIS Candi Siwa Prambanan

Website ini punya 2 bagian yang saling terhubung:

1. **WebGIS** (halaman utama, `index.html`) — peta interaktif berbasis React.
2. **Virtual Tour** (folder `virtual-tour/`) — tur 3D interaktif Candi Siwa berbasis Three.js/WebGL. Dibuka dari WebGIS lewat tombol "Mulai Virtual Tour" / klik titik Siwa di peta.

## Struktur Folder

webgis-candi-siwa/
├── index.html            → halaman utama WebGIS (DOM di-render oleh app.js)
├── css/style.css          → styling WebGIS (hasil compile Tailwind CSS)
├── lib/app.js              → seluruh kode WebGIS + library (React, Leaflet,
│                              Framer Motion, Radix UI, dll) dibundel jadi satu file
├── logo.png, robots.txt
└── virtual-tour/           → Virtual Tour 3D (Candi Siwa)
    ├── index.html            → halaman tur 3D
    ├── css/style.css          → styling tur (dark theme, UI panel, animasi)
    ├── js/main.js              → logic: scene, kamera, kontrol orbit/street view,
    │                             minimap, POI, audio narasi, dll
    ├── library/                 → Three.js r158 + three-mesh-bvh, di-host lokal
    └── assets/                  → model 3D (.glb), foto POI, audio narasi ID/EN


## Library / Teknologi yang Dipakai

**WebGIS:**
- React 19 + wouter (routing) + Tailwind CSS v4
- Leaflet.js 1.9.4 — peta interaktif
- Framer Motion, Radix UI, lucide-react — animasi & komponen UI
- Semua dibundel jadi `lib/app.js` lewat Vite (build tool React), bukan ditulis manual
- Tile peta: OpenStreetMap, Esri World Imagery, OpenTopoMap — dimuat langsung dari server penyedia peta saat aplikasi jalan

**Virtual Tour:**
- Three.js r158 (core + GLTFLoader, DRACOLoader, BufferGeometryUtils) — di-host lokal, bukan CDN
- three-mesh-bvh — percepatan collision detection (BVH) untuk mode Street View
- Font (Google Fonts) dan Draco decoder tetap dimuat dari CDN eksternal saat runtime — butuh koneksi internet