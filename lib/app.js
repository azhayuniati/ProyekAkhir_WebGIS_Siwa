function s_(o, c) {
  for (var f = 0; f < c.length; f++) {
    const h = c[f];
    if (typeof h != "string" && !Array.isArray(h)) {
      for (const g in h)
        if (g !== "default" && !(g in o)) {
          const y = Object.getOwnPropertyDescriptor(h, g);
          y && Object.defineProperty(o, g, y.get ? y : { enumerable: !0, get: () => h[g] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const g of document.querySelectorAll('link[rel="modulepreload"]')) h(g);
  new MutationObserver((g) => {
    for (const y of g) if (y.type === "childList") for (const _ of y.addedNodes) _.tagName === "LINK" && _.rel === "modulepreload" && h(_);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(g) {
    const y = {};
    return (
      g.integrity && (y.integrity = g.integrity),
      g.referrerPolicy && (y.referrerPolicy = g.referrerPolicy),
      g.crossOrigin === "use-credentials" ? (y.credentials = "include") : g.crossOrigin === "anonymous" ? (y.credentials = "omit") : (y.credentials = "same-origin"),
      y
    );
  }
  function h(g) {
    if (g.ep) return;
    g.ep = !0;
    const y = f(g);
    fetch(g.href, y);
  }
})();
function ug(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Df = { exports: {} },
  Es = {};
var dp;
function l_() {
  if (dp) return Es;
  dp = 1;
  var o = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function f(h, g, y) {
    var _ = null;
    if ((y !== void 0 && (_ = "" + y), g.key !== void 0 && (_ = "" + g.key), "key" in g)) {
      y = {};
      for (var T in g) T !== "key" && (y[T] = g[T]);
    } else y = g;
    return ((g = y.ref), { $$typeof: o, type: h, key: _, ref: g !== void 0 ? g : null, props: y });
  }
  return ((Es.Fragment = c), (Es.jsx = f), (Es.jsxs = f), Es);
}
var hp;
function u_() {
  return (hp || ((hp = 1), (Df.exports = l_())), Df.exports);
}
var m = u_(),
  Nf = { exports: {} },
  As = {},
  Pf = { exports: {} },
  Bf = {};
var mp;
function c_() {
  return (
    mp ||
      ((mp = 1),
      (function (o) {
        function c(z, et) {
          var Y = z.length;
          z.push(et);
          t: for (; 0 < Y; ) {
            var xt = (Y - 1) >>> 1,
              S = z[xt];
            if (0 < g(S, et)) ((z[xt] = et), (z[Y] = S), (Y = xt));
            else break t;
          }
        }
        function f(z) {
          return z.length === 0 ? null : z[0];
        }
        function h(z) {
          if (z.length === 0) return null;
          var et = z[0],
            Y = z.pop();
          if (Y !== et) {
            z[0] = Y;
            t: for (var xt = 0, S = z.length, I = S >>> 1; xt < I; ) {
              var lt = 2 * (xt + 1) - 1,
                st = z[lt],
                ct = lt + 1,
                ut = z[ct];
              if (0 > g(st, Y)) ct < S && 0 > g(ut, st) ? ((z[xt] = ut), (z[ct] = Y), (xt = ct)) : ((z[xt] = st), (z[lt] = Y), (xt = lt));
              else if (ct < S && 0 > g(ut, Y)) ((z[xt] = ut), (z[ct] = Y), (xt = ct));
              else break t;
            }
          }
          return et;
        }
        function g(z, et) {
          var Y = z.sortIndex - et.sortIndex;
          return Y !== 0 ? Y : z.id - et.id;
        }
        if (((o.unstable_now = void 0), typeof performance == "object" && typeof performance.now == "function")) {
          var y = performance;
          o.unstable_now = function () {
            return y.now();
          };
        } else {
          var _ = Date,
            T = _.now();
          o.unstable_now = function () {
            return _.now() - T;
          };
        }
        var k = [],
          b = [],
          E = 1,
          A = null,
          C = 3,
          D = !1,
          B = !1,
          H = !1,
          W = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          $ = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function at(z) {
          for (var et = f(b); et !== null; ) {
            if (et.callback === null) h(b);
            else if (et.startTime <= z) (h(b), (et.sortIndex = et.expirationTime), c(k, et));
            else break;
            et = f(b);
          }
        }
        function nt(z) {
          if (((H = !1), at(z), !B))
            if (f(k) !== null) ((B = !0), ot || ((ot = !0), ht()));
            else {
              var et = f(b);
              et !== null && Rt(nt, et.startTime - z);
            }
        }
        var ot = !1,
          ft = -1,
          F = 5,
          pt = -1;
        function kt() {
          return W ? !0 : !(o.unstable_now() - pt < F);
        }
        function _t() {
          if (((W = !1), ot)) {
            var z = o.unstable_now();
            pt = z;
            var et = !0;
            try {
              t: {
                ((B = !1), H && ((H = !1), $(ft), (ft = -1)), (D = !0));
                var Y = C;
                try {
                  e: {
                    for (at(z), A = f(k); A !== null && !(A.expirationTime > z && kt()); ) {
                      var xt = A.callback;
                      if (typeof xt == "function") {
                        ((A.callback = null), (C = A.priorityLevel));
                        var S = xt(A.expirationTime <= z);
                        if (((z = o.unstable_now()), typeof S == "function")) {
                          ((A.callback = S), at(z), (et = !0));
                          break e;
                        }
                        (A === f(k) && h(k), at(z));
                      } else h(k);
                      A = f(k);
                    }
                    if (A !== null) et = !0;
                    else {
                      var I = f(b);
                      (I !== null && Rt(nt, I.startTime - z), (et = !1));
                    }
                  }
                  break t;
                } finally {
                  ((A = null), (C = Y), (D = !1));
                }
                et = void 0;
              }
            } finally {
              et ? ht() : (ot = !1);
            }
          }
        }
        var ht;
        if (typeof K == "function")
          ht = function () {
            K(_t);
          };
        else if (typeof MessageChannel < "u") {
          var Ot = new MessageChannel(),
            Tt = Ot.port2;
          ((Ot.port1.onmessage = _t),
            (ht = function () {
              Tt.postMessage(null);
            }));
        } else
          ht = function () {
            X(_t, 0);
          };
        function Rt(z, et) {
          ft = X(function () {
            z(o.unstable_now());
          }, et);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (o.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (F = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (o.unstable_next = function (z) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var et = 3;
                break;
              default:
                et = C;
            }
            var Y = C;
            C = et;
            try {
              return z();
            } finally {
              C = Y;
            }
          }),
          (o.unstable_requestPaint = function () {
            W = !0;
          }),
          (o.unstable_runWithPriority = function (z, et) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var Y = C;
            C = z;
            try {
              return et();
            } finally {
              C = Y;
            }
          }),
          (o.unstable_scheduleCallback = function (z, et, Y) {
            var xt = o.unstable_now();
            switch ((typeof Y == "object" && Y !== null ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? xt + Y : xt)) : (Y = xt), z)) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = Y + S),
              (z = { id: E++, callback: et, priorityLevel: z, startTime: Y, expirationTime: S, sortIndex: -1 }),
              Y > xt ? ((z.sortIndex = Y), c(b, z), f(k) === null && z === f(b) && (H ? ($(ft), (ft = -1)) : (H = !0), Rt(nt, Y - xt))) : ((z.sortIndex = S), c(k, z), B || D || ((B = !0), ot || ((ot = !0), ht()))),
              z
            );
          }),
          (o.unstable_shouldYield = kt),
          (o.unstable_wrapCallback = function (z) {
            var et = C;
            return function () {
              var Y = C;
              C = et;
              try {
                return z.apply(this, arguments);
              } finally {
                C = Y;
              }
            };
          }));
      })(Bf)),
    Bf
  );
}
var pp;
function f_() {
  return (pp || ((pp = 1), (Pf.exports = c_())), Pf.exports);
}
var Hf = { exports: {} },
  jt = {};
var gp;
function d_() {
  if (gp) return jt;
  gp = 1;
  var o = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    g = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    _ = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    A = Symbol.iterator;
  function C(S) {
    return S === null || typeof S != "object" ? null : ((S = (A && S[A]) || S["@@iterator"]), typeof S == "function" ? S : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    H = {};
  function W(S, I, lt) {
    ((this.props = S), (this.context = I), (this.refs = H), (this.updater = lt || D));
  }
  ((W.prototype.isReactComponent = {}),
    (W.prototype.setState = function (S, I) {
      if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, I, "setState");
    }),
    (W.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function X() {}
  X.prototype = W.prototype;
  function $(S, I, lt) {
    ((this.props = S), (this.context = I), (this.refs = H), (this.updater = lt || D));
  }
  var K = ($.prototype = new X());
  ((K.constructor = $), B(K, W.prototype), (K.isPureReactComponent = !0));
  var at = Array.isArray,
    nt = { H: null, A: null, T: null, S: null, V: null },
    ot = Object.prototype.hasOwnProperty;
  function ft(S, I, lt, st, ct, ut) {
    return ((lt = ut.ref), { $$typeof: o, type: S, key: I, ref: lt !== void 0 ? lt : null, props: ut });
  }
  function F(S, I) {
    return ft(S.type, I, void 0, void 0, void 0, S.props);
  }
  function pt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === o;
  }
  function kt(S) {
    var I = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (lt) {
        return I[lt];
      })
    );
  }
  var _t = /\/+/g;
  function ht(S, I) {
    return typeof S == "object" && S !== null && S.key != null ? kt("" + S.key) : I.toString(36);
  }
  function Ot() {}
  function Tt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Ot, Ot)
            : ((S.status = "pending"),
              S.then(
                function (I) {
                  S.status === "pending" && ((S.status = "fulfilled"), (S.value = I));
                },
                function (I) {
                  S.status === "pending" && ((S.status = "rejected"), (S.reason = I));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Rt(S, I, lt, st, ct) {
    var ut = typeof S;
    (ut === "undefined" || ut === "boolean") && (S = null);
    var rt = !1;
    if (S === null) rt = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case o:
            case c:
              rt = !0;
              break;
            case E:
              return ((rt = S._init), Rt(rt(S._payload), I, lt, st, ct));
          }
      }
    if (rt)
      return (
        (ct = ct(S)),
        (rt = st === "" ? "." + ht(S, 0) : st),
        at(ct)
          ? ((lt = ""),
            rt != null && (lt = rt.replace(_t, "$&/") + "/"),
            Rt(ct, I, lt, "", function (Gt) {
              return Gt;
            }))
          : ct != null && (pt(ct) && (ct = F(ct, lt + (ct.key == null || (S && S.key === ct.key) ? "" : ("" + ct.key).replace(_t, "$&/") + "/") + rt)), I.push(ct)),
        1
      );
    rt = 0;
    var Xt = st === "" ? "." : st + ":";
    if (at(S)) for (var Pt = 0; Pt < S.length; Pt++) ((st = S[Pt]), (ut = Xt + ht(st, Pt)), (rt += Rt(st, I, lt, ut, ct)));
    else if (((Pt = C(S)), typeof Pt == "function")) for (S = Pt.call(S), Pt = 0; !(st = S.next()).done; ) ((st = st.value), (ut = Xt + ht(st, Pt++)), (rt += Rt(st, I, lt, ut, ct)));
    else if (ut === "object") {
      if (typeof S.then == "function") return Rt(Tt(S), I, lt, st, ct);
      throw (
        (I = String(S)),
        Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.")
      );
    }
    return rt;
  }
  function z(S, I, lt) {
    if (S == null) return S;
    var st = [],
      ct = 0;
    return (
      Rt(S, st, "", "", function (ut) {
        return I.call(lt, ut, ct++);
      }),
      st
    );
  }
  function et(S) {
    if (S._status === -1) {
      var I = S._result;
      ((I = I()),
        I.then(
          function (lt) {
            (S._status === 0 || S._status === -1) && ((S._status = 1), (S._result = lt));
          },
          function (lt) {
            (S._status === 0 || S._status === -1) && ((S._status = 2), (S._result = lt));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = I)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Y =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var I = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S), error: S });
            if (!window.dispatchEvent(I)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function xt() {}
  return (
    (jt.Children = {
      map: z,
      forEach: function (S, I, lt) {
        z(
          S,
          function () {
            I.apply(this, arguments);
          },
          lt,
        );
      },
      count: function (S) {
        var I = 0;
        return (
          z(S, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (S) {
        return (
          z(S, function (I) {
            return I;
          }) || []
        );
      },
      only: function (S) {
        if (!pt(S)) throw Error("React.Children.only expected to receive a single React element child.");
        return S;
      },
    }),
    (jt.Component = W),
    (jt.Fragment = f),
    (jt.Profiler = g),
    (jt.PureComponent = $),
    (jt.StrictMode = h),
    (jt.Suspense = k),
    (jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = nt),
    (jt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return nt.H.useMemoCache(S);
      },
    }),
    (jt.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (jt.cloneElement = function (S, I, lt) {
      if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
      var st = B({}, S.props),
        ct = S.key,
        ut = void 0;
      if (I != null)
        for (rt in (I.ref !== void 0 && (ut = void 0), I.key !== void 0 && (ct = "" + I.key), I)) !ot.call(I, rt) || rt === "key" || rt === "__self" || rt === "__source" || (rt === "ref" && I.ref === void 0) || (st[rt] = I[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) st.children = lt;
      else if (1 < rt) {
        for (var Xt = Array(rt), Pt = 0; Pt < rt; Pt++) Xt[Pt] = arguments[Pt + 2];
        st.children = Xt;
      }
      return ft(S.type, ct, void 0, void 0, ut, st);
    }),
    (jt.createContext = function (S) {
      return ((S = { $$typeof: _, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null }), (S.Provider = S), (S.Consumer = { $$typeof: y, _context: S }), S);
    }),
    (jt.createElement = function (S, I, lt) {
      var st,
        ct = {},
        ut = null;
      if (I != null) for (st in (I.key !== void 0 && (ut = "" + I.key), I)) ot.call(I, st) && st !== "key" && st !== "__self" && st !== "__source" && (ct[st] = I[st]);
      var rt = arguments.length - 2;
      if (rt === 1) ct.children = lt;
      else if (1 < rt) {
        for (var Xt = Array(rt), Pt = 0; Pt < rt; Pt++) Xt[Pt] = arguments[Pt + 2];
        ct.children = Xt;
      }
      if (S && S.defaultProps) for (st in ((rt = S.defaultProps), rt)) ct[st] === void 0 && (ct[st] = rt[st]);
      return ft(S, ut, void 0, void 0, null, ct);
    }),
    (jt.createRef = function () {
      return { current: null };
    }),
    (jt.forwardRef = function (S) {
      return { $$typeof: T, render: S };
    }),
    (jt.isValidElement = pt),
    (jt.lazy = function (S) {
      return { $$typeof: E, _payload: { _status: -1, _result: S }, _init: et };
    }),
    (jt.memo = function (S, I) {
      return { $$typeof: b, type: S, compare: I === void 0 ? null : I };
    }),
    (jt.startTransition = function (S) {
      var I = nt.T,
        lt = {};
      nt.T = lt;
      try {
        var st = S(),
          ct = nt.S;
        (ct !== null && ct(lt, st), typeof st == "object" && st !== null && typeof st.then == "function" && st.then(xt, Y));
      } catch (ut) {
        Y(ut);
      } finally {
        nt.T = I;
      }
    }),
    (jt.unstable_useCacheRefresh = function () {
      return nt.H.useCacheRefresh();
    }),
    (jt.use = function (S) {
      return nt.H.use(S);
    }),
    (jt.useActionState = function (S, I, lt) {
      return nt.H.useActionState(S, I, lt);
    }),
    (jt.useCallback = function (S, I) {
      return nt.H.useCallback(S, I);
    }),
    (jt.useContext = function (S) {
      return nt.H.useContext(S);
    }),
    (jt.useDebugValue = function () {}),
    (jt.useDeferredValue = function (S, I) {
      return nt.H.useDeferredValue(S, I);
    }),
    (jt.useEffect = function (S, I, lt) {
      var st = nt.H;
      if (typeof lt == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return st.useEffect(S, I);
    }),
    (jt.useId = function () {
      return nt.H.useId();
    }),
    (jt.useImperativeHandle = function (S, I, lt) {
      return nt.H.useImperativeHandle(S, I, lt);
    }),
    (jt.useInsertionEffect = function (S, I) {
      return nt.H.useInsertionEffect(S, I);
    }),
    (jt.useLayoutEffect = function (S, I) {
      return nt.H.useLayoutEffect(S, I);
    }),
    (jt.useMemo = function (S, I) {
      return nt.H.useMemo(S, I);
    }),
    (jt.useOptimistic = function (S, I) {
      return nt.H.useOptimistic(S, I);
    }),
    (jt.useReducer = function (S, I, lt) {
      return nt.H.useReducer(S, I, lt);
    }),
    (jt.useRef = function (S) {
      return nt.H.useRef(S);
    }),
    (jt.useState = function (S) {
      return nt.H.useState(S);
    }),
    (jt.useSyncExternalStore = function (S, I, lt) {
      return nt.H.useSyncExternalStore(S, I, lt);
    }),
    (jt.useTransition = function () {
      return nt.H.useTransition();
    }),
    (jt.version = "19.1.0"),
    jt
  );
}
var vp;
function Au() {
  return (vp || ((vp = 1), (Hf.exports = d_())), Hf.exports);
}
var Zf = { exports: {} },
  Ze = {};
var yp;
function h_() {
  if (yp) return Ze;
  yp = 1;
  var o = Au();
  function c(k) {
    var b = "https://react.dev/errors/" + k;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++) b += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + k + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {}
  var h = {
      d: {
        f,
        r: function () {
          throw Error(c(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    g = Symbol.for("react.portal");
  function y(k, b, E) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: A == null ? null : "" + A, children: k, containerInfo: b, implementation: E };
  }
  var _ = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function T(k, b) {
    if (k === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Ze.createPortal = function (k, b) {
      var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)) throw Error(c(299));
      return y(k, b, null, E);
    }),
    (Ze.flushSync = function (k) {
      var b = _.T,
        E = h.p;
      try {
        if (((_.T = null), (h.p = 2), k)) return k();
      } finally {
        ((_.T = b), (h.p = E), h.d.f());
      }
    }),
    (Ze.preconnect = function (k, b) {
      typeof k == "string" && (b ? ((b = b.crossOrigin), (b = typeof b == "string" ? (b === "use-credentials" ? b : "") : void 0)) : (b = null), h.d.C(k, b));
    }),
    (Ze.prefetchDNS = function (k) {
      typeof k == "string" && h.d.D(k);
    }),
    (Ze.preinit = function (k, b) {
      if (typeof k == "string" && b && typeof b.as == "string") {
        var E = b.as,
          A = T(E, b.crossOrigin),
          C = typeof b.integrity == "string" ? b.integrity : void 0,
          D = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        E === "style"
          ? h.d.S(k, typeof b.precedence == "string" ? b.precedence : void 0, { crossOrigin: A, integrity: C, fetchPriority: D })
          : E === "script" && h.d.X(k, { crossOrigin: A, integrity: C, fetchPriority: D, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
      }
    }),
    (Ze.preinitModule = function (k, b) {
      if (typeof k == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var E = T(b.as, b.crossOrigin);
            h.d.M(k, { crossOrigin: E, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
          }
        } else b == null && h.d.M(k);
    }),
    (Ze.preload = function (k, b) {
      if (typeof k == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
        var E = b.as,
          A = T(E, b.crossOrigin);
        h.d.L(k, E, {
          crossOrigin: A,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Ze.preloadModule = function (k, b) {
      if (typeof k == "string")
        if (b) {
          var E = T(b.as, b.crossOrigin);
          h.d.m(k, { as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0, crossOrigin: E, integrity: typeof b.integrity == "string" ? b.integrity : void 0 });
        } else h.d.m(k);
    }),
    (Ze.requestFormReset = function (k) {
      h.d.r(k);
    }),
    (Ze.unstable_batchedUpdates = function (k, b) {
      return k(b);
    }),
    (Ze.useFormState = function (k, b, E) {
      return _.H.useFormState(k, b, E);
    }),
    (Ze.useFormStatus = function () {
      return _.H.useHostTransitionStatus();
    }),
    (Ze.version = "19.1.0"),
    Ze
  );
}
var _p;
function cg() {
  if (_p) return Zf.exports;
  _p = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return (o(), (Zf.exports = h_()), Zf.exports);
}
var xp;
function m_() {
  if (xp) return As;
  xp = 1;
  var o = f_(),
    c = Au(),
    f = cg();
  function h(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) e += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      i = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (i = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? i : null;
  }
  function _(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
  }
  function T(t) {
    if (y(t) !== t) throw Error(h(188));
  }
  function k(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(h(188));
      return e !== t ? null : t;
    }
    for (var i = t, r = e; ; ) {
      var l = i.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          i = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === i) return (T(l), t);
          if (u === r) return (T(l), e);
          u = u.sibling;
        }
        throw Error(h(188));
      }
      if (i.return !== r.return) ((i = l), (r = u));
      else {
        for (var v = !1, w = l.child; w; ) {
          if (w === i) {
            ((v = !0), (i = l), (r = u));
            break;
          }
          if (w === r) {
            ((v = !0), (r = l), (i = u));
            break;
          }
          w = w.sibling;
        }
        if (!v) {
          for (w = u.child; w; ) {
            if (w === i) {
              ((v = !0), (i = u), (r = l));
              break;
            }
            if (w === r) {
              ((v = !0), (r = u), (i = l));
              break;
            }
            w = w.sibling;
          }
          if (!v) throw Error(h(189));
        }
      }
      if (i.alternate !== r) throw Error(h(190));
    }
    if (i.tag !== 3) throw Error(h(188));
    return i.stateNode.current === i ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign,
    A = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    W = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    $ = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    nt = Symbol.for("react.suspense"),
    ot = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    pt = Symbol.for("react.activity"),
    kt = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function ht(t) {
    return t === null || typeof t != "object" ? null : ((t = (_t && t[_t]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var Ot = Symbol.for("react.client.reference");
  function Tt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === Ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case B:
        return "Fragment";
      case W:
        return "Profiler";
      case H:
        return "StrictMode";
      case nt:
        return "Suspense";
      case ot:
        return "SuspenseList";
      case pt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case K:
          return (t.displayName || "Context") + ".Provider";
        case $:
          return (t._context.displayName || "Context") + ".Consumer";
        case at:
          var e = t.render;
          return ((t = t.displayName), t || ((t = e.displayName || e.name || ""), (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")), t);
        case ft:
          return ((e = t.displayName || null), e !== null ? e : Tt(t.type) || "Memo");
        case F:
          ((e = t._payload), (t = t._init));
          try {
            return Tt(t(e));
          } catch {}
      }
    return null;
  }
  var Rt = Array.isArray,
    z = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    xt = [],
    S = -1;
  function I(t) {
    return { current: t };
  }
  function lt(t) {
    0 > S || ((t.current = xt[S]), (xt[S] = null), S--);
  }
  function st(t, e) {
    (S++, (xt[S] = t.current), (t.current = e));
  }
  var ct = I(null),
    ut = I(null),
    rt = I(null),
    Xt = I(null);
  function Pt(t, e) {
    switch ((st(rt, e), st(ut, t), st(ct, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Zm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = Zm(e)), (t = Um(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (lt(ct), st(ct, t));
  }
  function Gt() {
    (lt(ct), lt(ut), lt(rt));
  }
  function on(t) {
    t.memoizedState !== null && st(Xt, t);
    var e = ct.current,
      i = Um(e, t.type);
    e !== i && (st(ut, t), st(ct, i));
  }
  function Ue(t) {
    (ut.current === t && (lt(ct), lt(ut)), Xt.current === t && (lt(Xt), (bs._currentValue = Y)));
  }
  var je = Object.prototype.hasOwnProperty,
    sn = o.unstable_scheduleCallback,
    bn = o.unstable_cancelCallback,
    ci = o.unstable_shouldYield,
    Bs = o.unstable_requestPaint,
    Qe = o.unstable_now,
    Er = o.unstable_getCurrentPriorityLevel,
    Hs = o.unstable_ImmediatePriority,
    So = o.unstable_UserBlockingPriority,
    Xi = o.unstable_NormalPriority,
    Zs = o.unstable_LowPriority,
    ko = o.unstable_IdlePriority,
    Hu = o.log,
    Zu = o.unstable_setDisableYieldValue,
    fi = null,
    De = null;
  function zn(t) {
    if ((typeof Hu == "function" && Zu(t), De && typeof De.setStrictMode == "function"))
      try {
        De.setStrictMode(fi, t);
      } catch {}
  }
  var Ge = Math.clz32 ? Math.clz32 : Uu,
    Us = Math.log,
    Gs = Math.LN2;
  function Uu(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Us(t) / Gs) | 0)) | 0);
  }
  var Ya = 256,
    Ii = 4194304;
  function Yn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ar(t, e, i) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      u = t.suspendedLanes,
      v = t.pingedLanes;
    t = t.warmLanes;
    var w = r & 134217727;
    return (
      w !== 0
        ? ((r = w & ~u), r !== 0 ? (l = Yn(r)) : ((v &= w), v !== 0 ? (l = Yn(v)) : i || ((i = w & ~t), i !== 0 && (l = Yn(i)))))
        : ((w = r & ~u), w !== 0 ? (l = Yn(w)) : v !== 0 ? (l = Yn(v)) : i || ((i = r & ~t), i !== 0 && (l = Yn(i)))),
      l === 0 ? 0 : e !== 0 && e !== l && (e & u) === 0 && ((u = l & -l), (i = e & -e), u >= i || (u === 32 && (i & 4194048) !== 0)) ? e : l
    );
  }
  function jn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gu(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ws() {
    var t = Ya;
    return ((Ya <<= 1), (Ya & 4194048) === 0 && (Ya = 256), t);
  }
  function To() {
    var t = Ii;
    return ((Ii <<= 1), (Ii & 62914560) === 0 && (Ii = 4194304), t);
  }
  function Cr(t) {
    for (var e = [], i = 0; 31 > i; i++) e.push(t);
    return e;
  }
  function Ki(t, e) {
    ((t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Wu(t, e, i, r, l, u) {
    var v = t.pendingLanes;
    ((t.pendingLanes = i), (t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0), (t.expiredLanes &= i), (t.entangledLanes &= i), (t.errorRecoveryDisabledLanes &= i), (t.shellSuspendCounter = 0));
    var w = t.entanglements,
      O = t.expirationTimes,
      U = t.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var Q = 31 - Ge(i),
        tt = 1 << Q;
      ((w[Q] = 0), (O[Q] = -1));
      var G = U[Q];
      if (G !== null)
        for (U[Q] = null, Q = 0; Q < G.length; Q++) {
          var q = G[Q];
          q !== null && (q.lane &= -536870913);
        }
      i &= ~tt;
    }
    (r !== 0 && qs(t, r, 0), u !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(v & ~e)));
  }
  function qs(t, e, i) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var r = 31 - Ge(e);
    ((t.entangledLanes |= e), (t.entanglements[r] = t.entanglements[r] | 1073741824 | (i & 4194090)));
  }
  function Vs(t, e) {
    var i = (t.entangledLanes |= e);
    for (t = t.entanglements; i; ) {
      var r = 31 - Ge(i),
        l = 1 << r;
      ((l & e) | (t[r] & e) && (t[r] |= e), (i &= ~l));
    }
  }
  function Eo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ao(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Ys() {
    var t = et.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : op(t.type));
  }
  function Co(t, e) {
    var i = et.p;
    try {
      return ((et.p = t), e());
    } finally {
      et.p = i;
    }
  }
  var Xn = Math.random().toString(36).slice(2),
    we = "__reactFiber$" + Xn,
    Ne = "__reactProps$" + Xn,
    Qi = "__reactContainer$" + Xn,
    Fe = "__reactEvents$" + Xn,
    wt = "__reactListeners$" + Xn,
    Xs = "__reactHandles$" + Xn,
    Mo = "__reactResources$" + Xn,
    Fi = "__reactMarker$" + Xn;
  function Mr(t) {
    (delete t[we], delete t[Ne], delete t[Fe], delete t[wt], delete t[Xs]);
  }
  function In(t) {
    var e = t[we];
    if (e) return e;
    for (var i = t.parentNode; i; ) {
      if ((e = i[Qi] || i[we])) {
        if (((i = e.alternate), e.child !== null || (i !== null && i.child !== null)))
          for (t = Vm(t); t !== null; ) {
            if ((i = t[we])) return i;
            t = Vm(t);
          }
        return e;
      }
      ((t = i), (i = t.parentNode));
    }
    return null;
  }
  function di(t) {
    if ((t = t[we] || t[Qi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function wn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(h(33));
  }
  function hi(t) {
    var e = t[Mo];
    return (e || (e = t[Mo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function pe(t) {
    t[Fi] = !0;
  }
  var Is = new Set(),
    Ks = {};
  function mi(t, e) {
    (pi(t, e), pi(t + "Capture", e));
  }
  function pi(t, e) {
    for (Ks[t] = e, t = 0; t < e.length; t++) Is.add(e[t]);
  }
  var qu = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Xa = {},
    Qs = {};
  function Vu(t) {
    return je.call(Qs, t) ? !0 : je.call(Xa, t) ? !1 : qu.test(t) ? (Qs[t] = !0) : ((Xa[t] = !0), !1);
  }
  function Lr(t, e, i) {
    if (Vu(e))
      if (i === null) t.removeAttribute(e);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var r = e.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + i);
      }
  }
  function Or(t, e, i) {
    if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + i);
    }
  }
  function Dn(t, e, i, r) {
    if (r === null) t.removeAttribute(i);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(e, i, "" + r);
    }
  }
  var Ia, Ji;
  function gi(t) {
    if (Ia === void 0)
      try {
        throw Error();
      } catch (i) {
        var e = i.stack.trim().match(/\n( *(at )?)/);
        ((Ia = (e && e[1]) || ""),
          (Ji =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ia +
      t +
      Ji
    );
  }
  var Rr = !1;
  function vi(t, e) {
    if (!t || Rr) return "";
    Rr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var tt = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(tt.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(tt, []);
                } catch (q) {
                  var G = q;
                }
                Reflect.construct(t, [], tt);
              } else {
                try {
                  tt.call();
                } catch (q) {
                  G = q;
                }
                t.call(tt.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                G = q;
              }
              (tt = t()) && typeof tt.catch == "function" && tt.catch(function () {});
            }
          } catch (q) {
            if (q && G && typeof q.stack == "string") return [q.stack, G.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      l && l.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = r.DetermineComponentFrameRoot(),
        v = u[0],
        w = u[1];
      if (v && w) {
        var O = v.split(`
`),
          U = w.split(`
`);
        for (l = r = 0; r < O.length && !O[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; l < U.length && !U[l].includes("DetermineComponentFrameRoot"); ) l++;
        if (r === O.length || l === U.length) for (r = O.length - 1, l = U.length - 1; 1 <= r && 0 <= l && O[r] !== U[l]; ) l--;
        for (; 1 <= r && 0 <= l; r--, l--)
          if (O[r] !== U[l]) {
            if (r !== 1 || l !== 1)
              do
                if ((r--, l--, 0 > l || O[r] !== U[l])) {
                  var Q =
                    `
` + O[r].replace(" at new ", " at ");
                  return (t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)), Q);
                }
              while (1 <= r && 0 <= l);
            break;
          }
      }
    } finally {
      ((Rr = !1), (Error.prepareStackTrace = i));
    }
    return (i = t ? t.displayName || t.name : "") ? gi(i) : "";
  }
  function Wt(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return gi(t.type);
      case 16:
        return gi("Lazy");
      case 13:
        return gi("Suspense");
      case 19:
        return gi("SuspenseList");
      case 0:
      case 15:
        return vi(t.type, !1);
      case 11:
        return vi(t.type.render, !1);
      case 1:
        return vi(t.type, !0);
      case 31:
        return gi("Activity");
      default:
        return "";
    }
  }
  function ee(t) {
    try {
      var e = "";
      do ((e += Wt(t)), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function yi(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function $i(t) {
    var e = yi(t) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var l = i.get,
        u = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (v) {
            ((r = "" + v), u.call(this, v));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (v) {
            r = "" + v;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function ta(t) {
    t._valueTracker || (t._valueTracker = $i(t));
  }
  function zt(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var i = e.getValue(),
      r = "";
    return (t && (r = yi(t) ? (t.checked ? "true" : "false") : t.value), (t = r), t !== i ? (e.setValue(t), !0) : !1);
  }
  function ne(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Lo = /[\n"\\]/g;
  function Me(t) {
    return t.replace(Lo, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pe(t, e, i, r, l, u, v, w) {
    ((t.name = ""),
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? (t.type = v) : t.removeAttribute("type"),
      e != null ? (v === "number" ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + Ce(e)) : t.value !== "" + Ce(e) && (t.value = "" + Ce(e))) : (v !== "submit" && v !== "reset") || t.removeAttribute("value"),
      e != null ? ea(t, v, Ce(e)) : i != null ? ea(t, v, Ce(i)) : r != null && t.removeAttribute("value"),
      l == null && u != null && (t.defaultChecked = !!u),
      l != null && (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? (t.name = "" + Ce(w)) : t.removeAttribute("name"));
  }
  function Fs(t, e, i, r, l, u, v, w) {
    if ((u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || i != null)) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      ((i = i != null ? "" + Ce(i) : ""), (e = e != null ? "" + Ce(e) : i), w || e === t.value || (t.value = e), (t.defaultValue = e));
    }
    ((r = r ?? l),
      (r = typeof r != "function" && typeof r != "symbol" && !!r),
      (t.checked = w ? t.checked : !!r),
      (t.defaultChecked = !!r),
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v));
  }
  function ea(t, e, i) {
    (e === "number" && ne(t.ownerDocument) === t) || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function Je(t, e, i, r) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < i.length; l++) e["$" + i[l]] = !0;
      for (i = 0; i < t.length; i++) ((l = e.hasOwnProperty("$" + t[i].value)), t[i].selected !== l && (t[i].selected = l), l && r && (t[i].defaultSelected = !0));
    } else {
      for (i = "" + Ce(i), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === i) {
          ((t[l].selected = !0), r && (t[l].defaultSelected = !0));
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function se(t, e, i) {
    if (e != null && ((e = "" + Ce(e)), e !== t.value && (t.value = e), i == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = i != null ? "" + Ce(i) : "";
  }
  function Kn(t, e, i, r) {
    if (e == null) {
      if (r != null) {
        if (i != null) throw Error(h(92));
        if (Rt(r)) {
          if (1 < r.length) throw Error(h(93));
          r = r[0];
        }
        i = r;
      }
      (i == null && (i = ""), (e = i));
    }
    ((i = Ce(e)), (t.defaultValue = i), (r = t.textContent), r === i && r !== "" && r !== null && (t.value = r));
  }
  function Sn(t, e) {
    if (e) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ka = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function zr(t, e, i) {
    var r = e.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? r
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : r
        ? t.setProperty(e, i)
        : typeof i != "number" || i === 0 || Ka.has(e)
          ? e === "float"
            ? (t.cssFloat = i)
            : (t[e] = ("" + i).trim())
          : (t[e] = i + "px");
  }
  function na(t, e, i) {
    if (e != null && typeof e != "object") throw Error(h(62));
    if (((t = t.style), i != null)) {
      for (var r in i) !i.hasOwnProperty(r) || (e != null && e.hasOwnProperty(r)) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? (t.cssFloat = "") : (t[r] = ""));
      for (var l in e) ((r = e[l]), e.hasOwnProperty(l) && i[l] !== r && zr(t, l, r));
    } else for (var u in e) e.hasOwnProperty(u) && zr(t, u, e[u]);
  }
  function Qa(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Oo = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ia(t) {
    return jr.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var Fa = null;
  function aa(t) {
    return ((t = t.target || t.srcElement || window), t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t);
  }
  var _i = null,
    Qn = null;
  function Js(t) {
    var e = di(t);
    if (e && (t = e.stateNode)) {
      var i = t[Ne] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if ((Pe(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), (e = i.name), i.type === "radio" && e != null)) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + Me("" + e) + '"][type="radio"]'), e = 0; e < i.length; e++) {
              var r = i[e];
              if (r !== t && r.form === t.form) {
                var l = r[Ne] || null;
                if (!l) throw Error(h(90));
                Pe(r, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name);
              }
            }
            for (e = 0; e < i.length; e++) ((r = i[e]), r.form === t.form && zt(r));
          }
          break t;
        case "textarea":
          se(t, i.value, i.defaultValue);
          break t;
        case "select":
          ((e = i.value), e != null && Je(t, !!i.multiple, e, !1));
      }
    }
  }
  var Lt = !1;
  function ln(t, e, i) {
    if (Lt) return t(e, i);
    Lt = !0;
    try {
      var r = t(e);
      return r;
    } finally {
      if (((Lt = !1), (_i !== null || Qn !== null) && (Yl(), _i && ((e = _i), (t = Qn), (Qn = _i = null), Js(e), t)))) for (e = 0; e < t.length; e++) Js(t[e]);
    }
  }
  function Vt(t, e) {
    var i = t.stateNode;
    if (i === null) return null;
    var r = i[Ne] || null;
    if (r === null) return null;
    i = r[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) || ((t = t.type), (r = !(t === "button" || t === "input" || t === "select" || t === "textarea"))), (t = !r));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(h(231, e, typeof i));
    return i;
  }
  var kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ja = !1;
  if (kn)
    try {
      var xi = {};
      (Object.defineProperty(xi, "passive", {
        get: function () {
          Ja = !0;
        },
      }),
        window.addEventListener("test", xi, xi),
        window.removeEventListener("test", xi, xi));
    } catch {
      Ja = !1;
    }
  var Tn = null,
    Nn = null,
    ra = null;
  function oa() {
    if (ra) return ra;
    var t,
      e = Nn,
      i = e.length,
      r,
      l = "value" in Tn ? Tn.value : Tn.textContent,
      u = l.length;
    for (t = 0; t < i && e[t] === l[t]; t++);
    var v = i - t;
    for (r = 1; r <= v && e[i - r] === l[u - r]; r++);
    return (ra = l.slice(t, 1 < r ? 1 - r : void 0));
  }
  function fe(t) {
    var e = t.keyCode;
    return ("charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e), t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0);
  }
  function En() {
    return !0;
  }
  function Ro() {
    return !1;
  }
  function Le(t) {
    function e(i, r, l, u, v) {
      ((this._reactName = i), (this._targetInst = l), (this.type = r), (this.nativeEvent = u), (this.target = v), (this.currentTarget = null));
      for (var w in t) t.hasOwnProperty(w) && ((i = t[w]), (this[w] = i ? i(u) : u[w]));
      return ((this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? En : Ro), (this.isPropagationStopped = Ro), this);
    }
    return (
      E(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), (this.isDefaultPrevented = En));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), (this.isPropagationStopped = En));
        },
        persist: function () {},
        isPersistent: En,
      }),
      e
    );
  }
  var bi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $a = Le(bi),
    wi = E({}, bi, { view: 0, detail: 0 }),
    Yu = Le(wi),
    Dr,
    Bt,
    tr,
    Be = E({}, wi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0 ? (t.fromElement === t.srcElement ? t.toElement : t.fromElement) : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t ? t.movementX : (t !== tr && (tr && t.type === "mousemove" ? ((Dr = t.screenX - tr.screenX), (Bt = t.screenY - tr.screenY)) : (Bt = Dr = 0), (tr = t)), Dr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Bt;
      },
    }),
    sa = Le(Be),
    $s = E({}, Be, { dataTransfer: 0 }),
    Xu = Le($s),
    zo = E({}, wi, { relatedTarget: 0 }),
    jo = Le(zo),
    tl = E({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iu = Le(tl),
    Ku = E({}, bi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Do = Le(Ku),
    Qu = E({}, bi, { data: 0 }),
    un = Le(Qu),
    Fu = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    el = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function nl(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Fn[t]) ? !!e[t] : !1;
  }
  function Nr() {
    return nl;
  }
  var No = E({}, wi, {
      key: function (t) {
        if (t.key) {
          var e = Fu[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? ((t = fe(t)), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? el[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nr,
      charCode: function (t) {
        return t.type === "keypress" ? fe(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress" ? fe(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
    }),
    Ju = Le(No),
    il = E({}, Be, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Po = Le(il),
    $u = E({}, wi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nr }),
    tc = Le($u),
    Bo = E({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ec = Le(Bo),
    al = E({}, Be, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rl = Le(al),
    Pr = E({}, bi, { newState: 0, oldState: 0 }),
    Si = Le(Pr),
    nc = [9, 13, 27, 32],
    ki = kn && "CompositionEvent" in window,
    Se = null;
  kn && "documentMode" in document && (Se = document.documentMode);
  var ol = kn && "TextEvent" in window && !Se,
    Ho = kn && (!ki || (Se && 8 < Se && 11 >= Se)),
    sl = " ",
    Br = !1;
  function Hr(t, e) {
    switch (t) {
      case "keyup":
        return nc.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ll(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var la = !1;
  function ul(t, e) {
    switch (t) {
      case "compositionend":
        return ll(e);
      case "keypress":
        return e.which !== 32 ? null : ((Br = !0), sl);
      case "textInput":
        return ((t = e.data), t === sl && Br ? null : t);
      default:
        return null;
    }
  }
  function ic(t, e) {
    if (la) return t === "compositionend" || (!ki && Hr(t, e)) ? ((t = oa()), (ra = Nn = Tn = null), (la = !1), t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ho && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var cn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ti(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!cn[t.type] : e === "textarea";
  }
  function cl(t, e, i, r) {
    (_i ? (Qn ? Qn.push(r) : (Qn = [r])) : (_i = r), (e = Jl(e, "onChange")), 0 < e.length && ((i = new $a("onChange", "change", null, i, r)), t.push({ event: i, listeners: e })));
  }
  var We = null,
    er = null;
  function ua(t) {
    Dm(t, 0);
  }
  function Zr(t) {
    var e = wn(t);
    if (zt(e)) return t;
  }
  function ca(t, e) {
    if (t === "change") return e;
  }
  var Zo = !1;
  if (kn) {
    var fa;
    if (kn) {
      var Uo = "oninput" in document;
      if (!Uo) {
        var Pn = document.createElement("div");
        (Pn.setAttribute("oninput", "return;"), (Uo = typeof Pn.oninput == "function"));
      }
      fa = Uo;
    } else fa = !1;
    Zo = fa && (!document.documentMode || 9 < document.documentMode);
  }
  function nr() {
    We && (We.detachEvent("onpropertychange", fl), (er = We = null));
  }
  function fl(t) {
    if (t.propertyName === "value" && Zr(er)) {
      var e = [];
      (cl(e, er, t, aa(t)), ln(ua, e));
    }
  }
  function Go(t, e, i) {
    t === "focusin" ? (nr(), (We = e), (er = i), We.attachEvent("onpropertychange", fl)) : t === "focusout" && nr();
  }
  function ac(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Zr(er);
  }
  function Bn(t, e) {
    if (t === "click") return Zr(e);
  }
  function rc(t, e) {
    if (t === "input" || t === "change") return Zr(e);
  }
  function da(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var qe = typeof Object.is == "function" ? Object.is : da;
  function Ve(t, e) {
    if (qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var i = Object.keys(t),
      r = Object.keys(e);
    if (i.length !== r.length) return !1;
    for (r = 0; r < i.length; r++) {
      var l = i[r];
      if (!je.call(e, l) || !qe(t[l], e[l])) return !1;
    }
    return !0;
  }
  function ir(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Wo(t, e) {
    var i = ir(t);
    t = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (((r = t + i.textContent.length), t <= e && r >= e)) return { node: i, offset: e - t };
        t = r;
      }
      t: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break t;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = ir(i);
    }
  }
  function Ur(t, e) {
    return t && e ? (t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ur(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1) : !1;
  }
  function ar(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ne(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof e.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = e.contentWindow;
      else break;
      e = ne(t.document);
    }
    return e;
  }
  function rr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && ((e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password")) || e === "textarea" || t.contentEditable === "true");
  }
  var Gr = kn && "documentMode" in document && 11 >= document.documentMode,
    fn = null,
    ha = null,
    Ei = null,
    Wr = !1;
  function dl(t, e, i) {
    var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Wr ||
      fn == null ||
      fn !== ne(r) ||
      ((r = fn),
      "selectionStart" in r && rr(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
      (Ei && Ve(Ei, r)) || ((Ei = r), (r = Jl(ha, "onSelect")), 0 < r.length && ((e = new $a("onSelect", "select", null, e, i)), t.push({ event: e, listeners: r }), (e.target = fn))));
  }
  function An(t, e) {
    var i = {};
    return ((i[t.toLowerCase()] = e.toLowerCase()), (i["Webkit" + t] = "webkit" + e), (i["Moz" + t] = "moz" + e), i);
  }
  var ma = {
      animationend: An("Animation", "AnimationEnd"),
      animationiteration: An("Animation", "AnimationIteration"),
      animationstart: An("Animation", "AnimationStart"),
      transitionrun: An("Transition", "TransitionRun"),
      transitionstart: An("Transition", "TransitionStart"),
      transitioncancel: An("Transition", "TransitionCancel"),
      transitionend: An("Transition", "TransitionEnd"),
    },
    qr = {},
    hl = {};
  kn &&
    ((hl = document.createElement("div").style),
    "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation),
    "TransitionEvent" in window || delete ma.transitionend.transition);
  function Jn(t) {
    if (qr[t]) return qr[t];
    if (!ma[t]) return t;
    var e = ma[t],
      i;
    for (i in e) if (e.hasOwnProperty(i) && i in hl) return (qr[t] = e[i]);
    return t;
  }
  var ml = Jn("animationend"),
    dn = Jn("animationiteration"),
    or = Jn("animationstart"),
    oc = Jn("transitionrun"),
    Vr = Jn("transitionstart"),
    sc = Jn("transitioncancel"),
    qo = Jn("transitionend"),
    pl = new Map(),
    Ai =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ai.push("scrollEnd");
  function hn(t, e) {
    (pl.set(t, e), mi(e, [t]));
  }
  var Ci = new WeakMap();
  function Ye(t, e) {
    if (typeof t == "object" && t !== null) {
      var i = Ci.get(t);
      return i !== void 0 ? i : ((e = { value: t, source: e, stack: ee(e) }), Ci.set(t, e), e);
    }
    return { value: t, source: e, stack: ee(e) };
  }
  var Xe = [],
    pa = 0,
    mn = 0;
  function sr() {
    for (var t = pa, e = (mn = pa = 0); e < t; ) {
      var i = Xe[e];
      Xe[e++] = null;
      var r = Xe[e];
      Xe[e++] = null;
      var l = Xe[e];
      Xe[e++] = null;
      var u = Xe[e];
      if (((Xe[e++] = null), r !== null && l !== null)) {
        var v = r.pending;
        (v === null ? (l.next = l) : ((l.next = v.next), (v.next = l)), (r.pending = l));
      }
      u !== 0 && ur(i, l, u);
    }
  }
  function lr(t, e, i, r) {
    ((Xe[pa++] = t), (Xe[pa++] = e), (Xe[pa++] = i), (Xe[pa++] = r), (mn |= r), (t.lanes |= r), (t = t.alternate), t !== null && (t.lanes |= r));
  }
  function Mi(t, e, i, r) {
    return (lr(t, e, i, r), $n(t));
  }
  function ga(t, e) {
    return (lr(t, null, null, e), $n(t));
  }
  function ur(t, e, i) {
    t.lanes |= i;
    var r = t.alternate;
    r !== null && (r.lanes |= i);
    for (var l = !1, u = t.return; u !== null; ) ((u.childLanes |= i), (r = u.alternate), r !== null && (r.childLanes |= i), u.tag === 22 && ((t = u.stateNode), t === null || t._visibility & 1 || (l = !0)), (t = u), (u = u.return));
    return t.tag === 3 ? ((u = t.stateNode), l && e !== null && ((l = 31 - Ge(i)), (t = u.hiddenUpdates), (r = t[l]), r === null ? (t[l] = [e]) : r.push(e), (e.lane = i | 536870912)), u) : null;
  }
  function $n(t) {
    if (50 < hs) throw ((hs = 0), (rf = null), Error(h(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Li = {};
  function gl(t, e, i, r) {
    ((this.tag = t),
      (this.key = i),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ie(t, e, i, r) {
    return new gl(t, e, i, r);
  }
  function Yr(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Cn(t, e) {
    var i = t.alternate;
    return (
      i === null
        ? ((i = Ie(t.tag, e, t.key, t.mode)), (i.elementType = t.elementType), (i.type = t.type), (i.stateNode = t.stateNode), (i.alternate = t), (t.alternate = i))
        : ((i.pendingProps = e), (i.type = t.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)),
      (i.flags = t.flags & 65011712),
      (i.childLanes = t.childLanes),
      (i.lanes = t.lanes),
      (i.child = t.child),
      (i.memoizedProps = t.memoizedProps),
      (i.memoizedState = t.memoizedState),
      (i.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (i.sibling = t.sibling),
      (i.index = t.index),
      (i.ref = t.ref),
      (i.refCleanup = t.refCleanup),
      i
    );
  }
  function Vo(t, e) {
    t.flags &= 65011714;
    var i = t.alternate;
    return (
      i === null
        ? ((t.childLanes = 0), (t.lanes = e), (t.child = null), (t.subtreeFlags = 0), (t.memoizedProps = null), (t.memoizedState = null), (t.updateQueue = null), (t.dependencies = null), (t.stateNode = null))
        : ((t.childLanes = i.childLanes),
          (t.lanes = i.lanes),
          (t.child = i.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = i.memoizedProps),
          (t.memoizedState = i.memoizedState),
          (t.updateQueue = i.updateQueue),
          (t.type = i.type),
          (e = i.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function cr(t, e, i, r, l, u) {
    var v = 0;
    if (((r = t), typeof t == "function")) Yr(t) && (v = 1);
    else if (typeof t == "string") v = Iy(t, i, ct.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case pt:
          return ((t = Ie(31, i, e, l)), (t.elementType = pt), (t.lanes = u), t);
        case B:
          return ti(i.children, l, u, e);
        case H:
          ((v = 8), (l |= 24));
          break;
        case W:
          return ((t = Ie(12, i, e, l | 2)), (t.elementType = W), (t.lanes = u), t);
        case nt:
          return ((t = Ie(13, i, e, l)), (t.elementType = nt), (t.lanes = u), t);
        case ot:
          return ((t = Ie(19, i, e, l)), (t.elementType = ot), (t.lanes = u), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
              case K:
                v = 10;
                break t;
              case $:
                v = 9;
                break t;
              case at:
                v = 11;
                break t;
              case ft:
                v = 14;
                break t;
              case F:
                ((v = 16), (r = null));
                break t;
            }
          ((v = 29), (i = Error(h(130, t === null ? "null" : typeof t, ""))), (r = null));
      }
    return ((e = Ie(v, i, e, l)), (e.elementType = t), (e.type = r), (e.lanes = u), e);
  }
  function ti(t, e, i, r) {
    return ((t = Ie(7, t, r, e)), (t.lanes = i), t);
  }
  function Yo(t, e, i) {
    return ((t = Ie(6, t, null, e)), (t.lanes = i), t);
  }
  function Xr(t, e, i) {
    return ((e = Ie(4, t.children !== null ? t.children : [], t.key, e)), (e.lanes = i), (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }), e);
  }
  var Oi = [],
    va = 0,
    n = null,
    a = 0,
    s = [],
    d = 0,
    p = null,
    x = 1,
    M = "";
  function P(t, e) {
    ((Oi[va++] = a), (Oi[va++] = n), (n = t), (a = e));
  }
  function V(t, e, i) {
    ((s[d++] = x), (s[d++] = M), (s[d++] = p), (p = t));
    var r = x;
    t = M;
    var l = 32 - Ge(r) - 1;
    ((r &= ~(1 << l)), (i += 1));
    var u = 32 - Ge(e) + l;
    if (30 < u) {
      var v = l - (l % 5);
      ((u = (r & ((1 << v) - 1)).toString(32)), (r >>= v), (l -= v), (x = (1 << (32 - Ge(e) + l)) | (i << l) | r), (M = u + t));
    } else ((x = (1 << u) | (i << l) | r), (M = t));
  }
  function it(t) {
    t.return !== null && (P(t, 1), V(t, 1, 0));
  }
  function dt(t) {
    for (; t === n; ) ((n = Oi[--va]), (Oi[va] = null), (a = Oi[--va]), (Oi[va] = null));
    for (; t === p; ) ((p = s[--d]), (s[d] = null), (M = s[--d]), (s[d] = null), (x = s[--d]), (s[d] = null));
  }
  var vt = null,
    bt = null,
    Mt = !1,
    ie = null,
    le = !1,
    ke = Error(h(519));
  function $e(t) {
    var e = Error(h(418, ""));
    throw (_a(Ye(e, t)), ke);
  }
  function vl(t) {
    var e = t.stateNode,
      i = t.type,
      r = t.memoizedProps;
    switch (((e[we] = t), (e[Ne] = r), i)) {
      case "dialog":
        (Ut("cancel", e), Ut("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < ps.length; i++) Ut(ps[i], e);
        break;
      case "source":
        Ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Ut("error", e), Ut("load", e));
        break;
      case "details":
        Ut("toggle", e);
        break;
      case "input":
        (Ut("invalid", e), Fs(e, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ta(e));
        break;
      case "select":
        Ut("invalid", e);
        break;
      case "textarea":
        (Ut("invalid", e), Kn(e, r.value, r.defaultValue, r.children), ta(e));
    }
    ((i = r.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") || e.textContent === "" + i || r.suppressHydrationWarning === !0 || Hm(e.textContent, i)
        ? (r.popover != null && (Ut("beforetoggle", e), Ut("toggle", e)), r.onScroll != null && Ut("scroll", e), r.onScrollEnd != null && Ut("scrollend", e), r.onClick != null && (e.onclick = $l), (e = !0))
        : (e = !1),
      e || $e(t));
  }
  function yl(t) {
    for (vt = t.return; vt; )
      switch (vt.tag) {
        case 5:
        case 13:
          le = !1;
          return;
        case 27:
        case 3:
          le = !0;
          return;
        default:
          vt = vt.return;
      }
  }
  function fr(t) {
    if (t !== vt) return !1;
    if (!Mt) return (yl(t), (Mt = !0), !1);
    var e = t.tag,
      i;
    if (((i = e !== 3 && e !== 27) && ((i = e === 5) && ((i = t.type), (i = !(i !== "form" && i !== "button") || bf(t.type, t.memoizedProps))), (i = !i)), i && bt && $e(t), yl(t), e === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(h(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((i = t.data), i === "/$")) {
              if (e === 0) {
                bt = Gn(t.nextSibling);
                break t;
              }
              e--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || e++;
          t = t.nextSibling;
        }
        bt = null;
      }
    } else e === 27 ? ((e = bt), ja(t.type) ? ((t = Tf), (Tf = null), (bt = t)) : (bt = e)) : (bt = vt ? Gn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ya() {
    ((bt = vt = null), (Mt = !1));
  }
  function _l() {
    var t = ie;
    return (t !== null && (nn === null ? (nn = t) : nn.push.apply(nn, t), (ie = null)), t);
  }
  function _a(t) {
    ie === null ? (ie = [t]) : ie.push(t);
  }
  var re = I(null),
    Mn = null,
    Hn = null;
  function ei(t, e, i) {
    (st(re, e._currentValue), (e._currentValue = i));
  }
  function Zn(t) {
    ((t._currentValue = re.current), lt(re));
  }
  function dr(t, e, i) {
    for (; t !== null; ) {
      var r = t.alternate;
      if (((t.childLanes & e) !== e ? ((t.childLanes |= e), r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === i)) break;
      t = t.return;
    }
  }
  function Ir(t, e, i, r) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var v = l.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var w = u;
          u = l;
          for (var O = 0; O < e.length; O++)
            if (w.context === e[O]) {
              ((u.lanes |= i), (w = u.alternate), w !== null && (w.lanes |= i), dr(u.return, i, t), r || (v = null));
              break t;
            }
          u = w.next;
        }
      } else if (l.tag === 18) {
        if (((v = l.return), v === null)) throw Error(h(341));
        ((v.lanes |= i), (u = v.alternate), u !== null && (u.lanes |= i), dr(v, i, t), (v = null));
      } else v = l.child;
      if (v !== null) v.return = l;
      else
        for (v = l; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (((l = v.sibling), l !== null)) {
            ((l.return = v.return), (v = l));
            break;
          }
          v = v.return;
        }
      l = v;
    }
  }
  function hr(t, e, i, r) {
    t = null;
    for (var l = e, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var v = l.alternate;
        if (v === null) throw Error(h(387));
        if (((v = v.memoizedProps), v !== null)) {
          var w = l.type;
          qe(l.pendingProps.value, v.value) || (t !== null ? t.push(w) : (t = [w]));
        }
      } else if (l === Xt.current) {
        if (((v = l.alternate), v === null)) throw Error(h(387));
        v.memoizedState.memoizedState !== l.memoizedState.memoizedState && (t !== null ? t.push(bs) : (t = [bs]));
      }
      l = l.return;
    }
    (t !== null && Ir(e, t, i, r), (e.flags |= 262144));
  }
  function xl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!qe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function mr(t) {
    ((Mn = t), (Hn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function He(t) {
    return Td(Mn, t);
  }
  function bl(t, e) {
    return (Mn === null && mr(t), Td(t, e));
  }
  function Td(t, e) {
    var i = e._currentValue;
    if (((e = { context: e, memoizedValue: i, next: null }), Hn === null)) {
      if (t === null) throw Error(h(308));
      ((Hn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else Hn = Hn.next = e;
    return i;
  }
  var Xv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (i, r) {
                  t.push(r);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (i) {
                  return i();
                }));
            };
          },
    Iv = o.unstable_scheduleCallback,
    Kv = o.unstable_NormalPriority,
    ye = { $$typeof: K, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function lc() {
    return { controller: new Xv(), data: new Map(), refCount: 0 };
  }
  function Xo(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Iv(Kv, function () {
          t.controller.abort();
        }));
  }
  var Io = null,
    uc = 0,
    Kr = 0,
    Qr = null;
  function Qv(t, e) {
    if (Io === null) {
      var i = (Io = []);
      ((uc = 0),
        (Kr = df()),
        (Qr = {
          status: "pending",
          value: void 0,
          then: function (r) {
            i.push(r);
          },
        }));
    }
    return (uc++, e.then(Ed, Ed), e);
  }
  function Ed() {
    if (--uc === 0 && Io !== null) {
      Qr !== null && (Qr.status = "fulfilled");
      var t = Io;
      ((Io = null), (Kr = 0), (Qr = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Fv(t, e) {
    var i = [],
      r = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          i.push(l);
        },
      };
    return (
      t.then(
        function () {
          ((r.status = "fulfilled"), (r.value = e));
          for (var l = 0; l < i.length; l++) (0, i[l])(e);
        },
        function (l) {
          for (r.status = "rejected", r.reason = l, l = 0; l < i.length; l++) (0, i[l])(void 0);
        },
      ),
      r
    );
  }
  var Ad = z.S;
  z.S = function (t, e) {
    (typeof e == "object" && e !== null && typeof e.then == "function" && Qv(t, e), Ad !== null && Ad(t, e));
  };
  var pr = I(null);
  function cc() {
    var t = pr.current;
    return t !== null ? t : ae.pooledCache;
  }
  function wl(t, e) {
    e === null ? st(pr, pr.current) : st(pr, e.pool);
  }
  function Cd() {
    var t = cc();
    return t === null ? null : { parent: ye._currentValue, pool: t };
  }
  var Ko = Error(h(460)),
    Md = Error(h(474)),
    Sl = Error(h(542)),
    fc = { then: function () {} };
  function Ld(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function kl() {}
  function Od(t, e, i) {
    switch (((i = t[i]), i === void 0 ? t.push(e) : i !== e && (e.then(kl, kl), (e = i)), e.status)) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), zd(t), t);
      default:
        if (typeof e.status == "string") e.then(kl, kl);
        else {
          if (((t = ae), t !== null && 100 < t.shellSuspendCounter)) throw Error(h(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (r) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "fulfilled"), (l.value = r));
                }
              },
              function (r) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "rejected"), (l.reason = r));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), zd(t), t);
        }
        throw ((Qo = e), Ko);
    }
  }
  var Qo = null;
  function Rd() {
    if (Qo === null) throw Error(h(459));
    var t = Qo;
    return ((Qo = null), t);
  }
  function zd(t) {
    if (t === Ko || t === Sl) throw Error(h(483));
  }
  var xa = !1;
  function dc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function hc(t, e) {
    ((t = t.updateQueue), e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null }));
  }
  function ba(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wa(t, e, i) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (It & 2) !== 0)) {
      var l = r.pending;
      return (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (r.pending = e), (e = $n(t)), ur(t, null, i), e);
    }
    return (lr(t, r, e, i), $n(t));
  }
  function Fo(t, e, i) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (i & 4194048) !== 0))) {
      var r = e.lanes;
      ((r &= t.pendingLanes), (i |= r), (e.lanes = i), Vs(t, i));
    }
  }
  function mc(t, e) {
    var i = t.updateQueue,
      r = t.alternate;
    if (r !== null && ((r = r.updateQueue), i === r)) {
      var l = null,
        u = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
          (u === null ? (l = u = v) : (u = u.next = v), (i = i.next));
        } while (i !== null);
        u === null ? (l = u = e) : (u = u.next = e);
      } else l = u = e;
      ((i = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, callbacks: r.callbacks }), (t.updateQueue = i));
      return;
    }
    ((t = i.lastBaseUpdate), t === null ? (i.firstBaseUpdate = e) : (t.next = e), (i.lastBaseUpdate = e));
  }
  var pc = !1;
  function Jo() {
    if (pc) {
      var t = Qr;
      if (t !== null) throw t;
    }
  }
  function $o(t, e, i, r) {
    pc = !1;
    var l = t.updateQueue;
    xa = !1;
    var u = l.firstBaseUpdate,
      v = l.lastBaseUpdate,
      w = l.shared.pending;
    if (w !== null) {
      l.shared.pending = null;
      var O = w,
        U = O.next;
      ((O.next = null), v === null ? (u = U) : (v.next = U), (v = O));
      var Q = t.alternate;
      Q !== null && ((Q = Q.updateQueue), (w = Q.lastBaseUpdate), w !== v && (w === null ? (Q.firstBaseUpdate = U) : (w.next = U), (Q.lastBaseUpdate = O)));
    }
    if (u !== null) {
      var tt = l.baseState;
      ((v = 0), (Q = U = O = null), (w = u));
      do {
        var G = w.lane & -536870913,
          q = G !== w.lane;
        if (q ? (qt & G) === G : (r & G) === G) {
          (G !== 0 && G === Kr && (pc = !0), Q !== null && (Q = Q.next = { lane: 0, tag: w.tag, payload: w.payload, callback: null, next: null }));
          t: {
            var Ct = t,
              Et = w;
            G = e;
            var Jt = i;
            switch (Et.tag) {
              case 1:
                if (((Ct = Et.payload), typeof Ct == "function")) {
                  tt = Ct.call(Jt, tt, G);
                  break t;
                }
                tt = Ct;
                break t;
              case 3:
                Ct.flags = (Ct.flags & -65537) | 128;
              case 0:
                if (((Ct = Et.payload), (G = typeof Ct == "function" ? Ct.call(Jt, tt, G) : Ct), G == null)) break t;
                tt = E({}, tt, G);
                break t;
              case 2:
                xa = !0;
            }
          }
          ((G = w.callback), G !== null && ((t.flags |= 64), q && (t.flags |= 8192), (q = l.callbacks), q === null ? (l.callbacks = [G]) : q.push(G)));
        } else ((q = { lane: G, tag: w.tag, payload: w.payload, callback: w.callback, next: null }), Q === null ? ((U = Q = q), (O = tt)) : (Q = Q.next = q), (v |= G));
        if (((w = w.next), w === null)) {
          if (((w = l.shared.pending), w === null)) break;
          ((q = w), (w = q.next), (q.next = null), (l.lastBaseUpdate = q), (l.shared.pending = null));
        }
      } while (!0);
      (Q === null && (O = tt), (l.baseState = O), (l.firstBaseUpdate = U), (l.lastBaseUpdate = Q), u === null && (l.shared.lanes = 0), (La |= v), (t.lanes = v), (t.memoizedState = tt));
    }
  }
  function jd(t, e) {
    if (typeof t != "function") throw Error(h(191, t));
    t.call(e);
  }
  function Dd(t, e) {
    var i = t.callbacks;
    if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++) jd(i[t], e);
  }
  var Fr = I(null),
    Tl = I(0);
  function Nd(t, e) {
    ((t = Bi), st(Tl, t), st(Fr, e), (Bi = t | e.baseLanes));
  }
  function gc() {
    (st(Tl, Bi), st(Fr, Fr.current));
  }
  function vc() {
    ((Bi = Tl.current), lt(Fr), lt(Tl));
  }
  var Sa = 0,
    Dt = null,
    Qt = null,
    ge = null,
    El = !1,
    Jr = !1,
    gr = !1,
    Al = 0,
    ts = 0,
    $r = null,
    Jv = 0;
  function he() {
    throw Error(h(321));
  }
  function yc(t, e) {
    if (e === null) return !1;
    for (var i = 0; i < e.length && i < t.length; i++) if (!qe(t[i], e[i])) return !1;
    return !0;
  }
  function _c(t, e, i, r, l, u) {
    return ((Sa = u), (Dt = e), (e.memoizedState = null), (e.updateQueue = null), (e.lanes = 0), (z.H = t === null || t.memoizedState === null ? _h : xh), (gr = !1), (u = i(r, l)), (gr = !1), Jr && (u = Bd(e, i, r, l)), Pd(t), u);
  }
  function Pd(t) {
    z.H = zl;
    var e = Qt !== null && Qt.next !== null;
    if (((Sa = 0), (ge = Qt = Dt = null), (El = !1), (ts = 0), ($r = null), e)) throw Error(h(300));
    t === null || Te || ((t = t.dependencies), t !== null && xl(t) && (Te = !0));
  }
  function Bd(t, e, i, r) {
    Dt = t;
    var l = 0;
    do {
      if ((Jr && ($r = null), (ts = 0), (Jr = !1), 25 <= l)) throw Error(h(301));
      if (((l += 1), (ge = Qt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null), (u.events = null), (u.stores = null), u.memoCache != null && (u.memoCache.index = 0));
      }
      ((z.H = ry), (u = e(i, r)));
    } while (Jr);
    return u;
  }
  function $v() {
    var t = z.H,
      e = t.useState()[0];
    return ((e = typeof e.then == "function" ? es(e) : e), (t = t.useState()[0]), (Qt !== null ? Qt.memoizedState : null) !== t && (Dt.flags |= 1024), e);
  }
  function xc() {
    var t = Al !== 0;
    return ((Al = 0), t);
  }
  function bc(t, e, i) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i));
  }
  function wc(t) {
    if (El) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      El = !1;
    }
    ((Sa = 0), (ge = Qt = Dt = null), (Jr = !1), (ts = Al = 0), ($r = null));
  }
  function tn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ge === null ? (Dt.memoizedState = ge = t) : (ge = ge.next = t), ge);
  }
  function ve() {
    if (Qt === null) {
      var t = Dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Qt.next;
    var e = ge === null ? Dt.memoizedState : ge.next;
    if (e !== null) ((ge = e), (Qt = t));
    else {
      if (t === null) throw Dt.alternate === null ? Error(h(467)) : Error(h(310));
      ((Qt = t), (t = { memoizedState: Qt.memoizedState, baseState: Qt.baseState, baseQueue: Qt.baseQueue, queue: Qt.queue, next: null }), ge === null ? (Dt.memoizedState = ge = t) : (ge = ge.next = t));
    }
    return ge;
  }
  function Sc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function es(t) {
    var e = ts;
    return ((ts += 1), $r === null && ($r = []), (t = Od($r, t, e)), (e = Dt), (ge === null ? e.memoizedState : ge.next) === null && ((e = e.alternate), (z.H = e === null || e.memoizedState === null ? _h : xh)), t);
  }
  function Cl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return es(t);
      if (t.$$typeof === K) return He(t);
    }
    throw Error(h(438, String(t)));
  }
  function kc(t) {
    var e = null,
      i = Dt.updateQueue;
    if ((i !== null && (e = i.memoCache), e == null)) {
      var r = Dt.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (e = {
              data: r.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if ((e == null && (e = { data: [], index: 0 }), i === null && ((i = Sc()), (Dt.updateQueue = i)), (i.memoCache = e), (i = e.data[e.index]), i === void 0)) for (i = e.data[e.index] = Array(t), r = 0; r < t; r++) i[r] = kt;
    return (e.index++, i);
  }
  function Ri(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ml(t) {
    var e = ve();
    return Tc(e, Qt, t);
  }
  function Tc(t, e, i) {
    var r = t.queue;
    if (r === null) throw Error(h(311));
    r.lastRenderedReducer = i;
    var l = t.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var v = l.next;
        ((l.next = u.next), (u.next = v));
      }
      ((e.baseQueue = l = u), (r.pending = null));
    }
    if (((u = t.baseState), l === null)) t.memoizedState = u;
    else {
      e = l.next;
      var w = (v = null),
        O = null,
        U = e,
        Q = !1;
      do {
        var tt = U.lane & -536870913;
        if (tt !== U.lane ? (qt & tt) === tt : (Sa & tt) === tt) {
          var G = U.revertLane;
          if (G === 0) (O !== null && (O = O.next = { lane: 0, revertLane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), tt === Kr && (Q = !0));
          else if ((Sa & G) === G) {
            ((U = U.next), G === Kr && (Q = !0));
            continue;
          } else ((tt = { lane: 0, revertLane: U.revertLane, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), O === null ? ((w = O = tt), (v = u)) : (O = O.next = tt), (Dt.lanes |= G), (La |= G));
          ((tt = U.action), gr && i(u, tt), (u = U.hasEagerState ? U.eagerState : i(u, tt)));
        } else ((G = { lane: tt, revertLane: U.revertLane, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), O === null ? ((w = O = G), (v = u)) : (O = O.next = G), (Dt.lanes |= tt), (La |= tt));
        U = U.next;
      } while (U !== null && U !== e);
      if ((O === null ? (v = u) : (O.next = w), !qe(u, t.memoizedState) && ((Te = !0), Q && ((i = Qr), i !== null)))) throw i;
      ((t.memoizedState = u), (t.baseState = v), (t.baseQueue = O), (r.lastRenderedState = u));
    }
    return (l === null && (r.lanes = 0), [t.memoizedState, r.dispatch]);
  }
  function Ec(t) {
    var e = ve(),
      i = e.queue;
    if (i === null) throw Error(h(311));
    i.lastRenderedReducer = t;
    var r = i.dispatch,
      l = i.pending,
      u = e.memoizedState;
    if (l !== null) {
      i.pending = null;
      var v = (l = l.next);
      do ((u = t(u, v.action)), (v = v.next));
      while (v !== l);
      (qe(u, e.memoizedState) || (Te = !0), (e.memoizedState = u), e.baseQueue === null && (e.baseState = u), (i.lastRenderedState = u));
    }
    return [u, r];
  }
  function Hd(t, e, i) {
    var r = Dt,
      l = ve(),
      u = Mt;
    if (u) {
      if (i === void 0) throw Error(h(407));
      i = i();
    } else i = e();
    var v = !qe((Qt || l).memoizedState, i);
    (v && ((l.memoizedState = i), (Te = !0)), (l = l.queue));
    var w = Gd.bind(null, r, l, t);
    if ((ns(2048, 8, w, [t]), l.getSnapshot !== e || v || (ge !== null && ge.memoizedState.tag & 1))) {
      if (((r.flags |= 2048), to(9, Ll(), Ud.bind(null, r, l, i, e), null), ae === null)) throw Error(h(349));
      u || (Sa & 124) !== 0 || Zd(r, e, i);
    }
    return i;
  }
  function Zd(t, e, i) {
    ((t.flags |= 16384), (t = { getSnapshot: e, value: i }), (e = Dt.updateQueue), e === null ? ((e = Sc()), (Dt.updateQueue = e), (e.stores = [t])) : ((i = e.stores), i === null ? (e.stores = [t]) : i.push(t)));
  }
  function Ud(t, e, i, r) {
    ((e.value = i), (e.getSnapshot = r), Wd(e) && qd(t));
  }
  function Gd(t, e, i) {
    return i(function () {
      Wd(e) && qd(t);
    });
  }
  function Wd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var i = e();
      return !qe(t, i);
    } catch {
      return !0;
    }
  }
  function qd(t) {
    var e = ga(t, 2);
    e !== null && _n(e, t, 2);
  }
  function Ac(t) {
    var e = tn();
    if (typeof t == "function") {
      var i = t;
      if (((t = i()), gr)) {
        zn(!0);
        try {
          i();
        } finally {
          zn(!1);
        }
      }
    }
    return ((e.memoizedState = e.baseState = t), (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ri, lastRenderedState: t }), e);
  }
  function Vd(t, e, i, r) {
    return ((t.baseState = i), Tc(t, Qt, typeof r == "function" ? r : Ri));
  }
  function ty(t, e, i, r, l) {
    if (Rl(t)) throw Error(h(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          u.listeners.push(v);
        },
      };
      (z.T !== null ? i(!0) : (u.isTransition = !1), r(u), (i = e.pending), i === null ? ((u.next = e.pending = u), Yd(e, u)) : ((u.next = i.next), (e.pending = i.next = u)));
    }
  }
  function Yd(t, e) {
    var i = e.action,
      r = e.payload,
      l = t.state;
    if (e.isTransition) {
      var u = z.T,
        v = {};
      z.T = v;
      try {
        var w = i(l, r),
          O = z.S;
        (O !== null && O(v, w), Xd(t, e, w));
      } catch (U) {
        Cc(t, e, U);
      } finally {
        z.T = u;
      }
    } else
      try {
        ((u = i(l, r)), Xd(t, e, u));
      } catch (U) {
        Cc(t, e, U);
      }
  }
  function Xd(t, e, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (r) {
            Id(t, e, r);
          },
          function (r) {
            return Cc(t, e, r);
          },
        )
      : Id(t, e, i);
  }
  function Id(t, e, i) {
    ((e.status = "fulfilled"), (e.value = i), Kd(e), (t.state = i), (e = t.pending), e !== null && ((i = e.next), i === e ? (t.pending = null) : ((i = i.next), (e.next = i), Yd(t, i))));
  }
  function Cc(t, e, i) {
    var r = t.pending;
    if (((t.pending = null), r !== null)) {
      r = r.next;
      do ((e.status = "rejected"), (e.reason = i), Kd(e), (e = e.next));
      while (e !== r);
    }
    t.action = null;
  }
  function Kd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Qd(t, e) {
    return e;
  }
  function Fd(t, e) {
    if (Mt) {
      var i = ae.formState;
      if (i !== null) {
        t: {
          var r = Dt;
          if (Mt) {
            if (bt) {
              e: {
                for (var l = bt, u = le; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break e;
                  }
                  if (((l = Gn(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                ((u = l.data), (l = u === "F!" || u === "F" ? l : null));
              }
              if (l) {
                ((bt = Gn(l.nextSibling)), (r = l.data === "F!"));
                break t;
              }
            }
            $e(r);
          }
          r = !1;
        }
        r && (e = i[0]);
      }
    }
    return (
      (i = tn()),
      (i.memoizedState = i.baseState = e),
      (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qd, lastRenderedState: e }),
      (i.queue = r),
      (i = gh.bind(null, Dt, r)),
      (r.dispatch = i),
      (r = Ac(!1)),
      (u = zc.bind(null, Dt, !1, r.queue)),
      (r = tn()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (r.queue = l),
      (i = ty.bind(null, Dt, l, u, i)),
      (l.dispatch = i),
      (r.memoizedState = t),
      [e, i, !1]
    );
  }
  function Jd(t) {
    var e = ve();
    return $d(e, Qt, t);
  }
  function $d(t, e, i) {
    if (((e = Tc(t, e, Qd)[0]), (t = Ml(Ri)[0]), typeof e == "object" && e !== null && typeof e.then == "function"))
      try {
        var r = es(e);
      } catch (v) {
        throw v === Ko ? Sl : v;
      }
    else r = e;
    e = ve();
    var l = e.queue,
      u = l.dispatch;
    return (i !== e.memoizedState && ((Dt.flags |= 2048), to(9, Ll(), ey.bind(null, l, i), null)), [r, u, t]);
  }
  function ey(t, e) {
    t.action = e;
  }
  function th(t) {
    var e = ve(),
      i = Qt;
    if (i !== null) return $d(e, i, t);
    (ve(), (e = e.memoizedState), (i = ve()));
    var r = i.queue.dispatch;
    return ((i.memoizedState = t), [e, r, !1]);
  }
  function to(t, e, i, r) {
    return (
      (t = { tag: t, create: i, deps: r, inst: e, next: null }),
      (e = Dt.updateQueue),
      e === null && ((e = Sc()), (Dt.updateQueue = e)),
      (i = e.lastEffect),
      i === null ? (e.lastEffect = t.next = t) : ((r = i.next), (i.next = t), (t.next = r), (e.lastEffect = t)),
      t
    );
  }
  function Ll() {
    return { destroy: void 0, resource: void 0 };
  }
  function eh() {
    return ve().memoizedState;
  }
  function Ol(t, e, i, r) {
    var l = tn();
    ((r = r === void 0 ? null : r), (Dt.flags |= t), (l.memoizedState = to(1 | e, Ll(), i, r)));
  }
  function ns(t, e, i, r) {
    var l = ve();
    r = r === void 0 ? null : r;
    var u = l.memoizedState.inst;
    Qt !== null && r !== null && yc(r, Qt.memoizedState.deps) ? (l.memoizedState = to(e, u, i, r)) : ((Dt.flags |= t), (l.memoizedState = to(1 | e, u, i, r)));
  }
  function nh(t, e) {
    Ol(8390656, 8, t, e);
  }
  function ih(t, e) {
    ns(2048, 8, t, e);
  }
  function ah(t, e) {
    return ns(4, 2, t, e);
  }
  function rh(t, e) {
    return ns(4, 4, t, e);
  }
  function oh(t, e) {
    if (typeof e == "function") {
      t = t();
      var i = e(t);
      return function () {
        typeof i == "function" ? i() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function sh(t, e, i) {
    ((i = i != null ? i.concat([t]) : null), ns(4, 4, oh.bind(null, e, t), i));
  }
  function Mc() {}
  function lh(t, e) {
    var i = ve();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    return e !== null && yc(e, r[1]) ? r[0] : ((i.memoizedState = [t, e]), t);
  }
  function uh(t, e) {
    var i = ve();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    if (e !== null && yc(e, r[1])) return r[0];
    if (((r = t()), gr)) {
      zn(!0);
      try {
        t();
      } finally {
        zn(!1);
      }
    }
    return ((i.memoizedState = [r, e]), r);
  }
  function Lc(t, e, i) {
    return i === void 0 || (Sa & 1073741824) !== 0 ? (t.memoizedState = e) : ((t.memoizedState = i), (t = dm()), (Dt.lanes |= t), (La |= t), i);
  }
  function ch(t, e, i, r) {
    return qe(i, e) ? i : Fr.current !== null ? ((t = Lc(t, i, r)), qe(t, e) || (Te = !0), t) : (Sa & 42) === 0 ? ((Te = !0), (t.memoizedState = i)) : ((t = dm()), (Dt.lanes |= t), (La |= t), e);
  }
  function fh(t, e, i, r, l) {
    var u = et.p;
    et.p = u !== 0 && 8 > u ? u : 8;
    var v = z.T,
      w = {};
    ((z.T = w), zc(t, !1, e, i));
    try {
      var O = l(),
        U = z.S;
      if ((U !== null && U(w, O), O !== null && typeof O == "object" && typeof O.then == "function")) {
        var Q = Fv(O, r);
        is(t, e, Q, yn(t));
      } else is(t, e, r, yn(t));
    } catch (tt) {
      is(t, e, { then: function () {}, status: "rejected", reason: tt }, yn());
    } finally {
      ((et.p = u), (z.T = v));
    }
  }
  function ny() {}
  function Oc(t, e, i, r) {
    if (t.tag !== 5) throw Error(h(476));
    var l = dh(t).queue;
    fh(
      t,
      l,
      e,
      Y,
      i === null
        ? ny
        : function () {
            return (hh(t), i(r));
          },
    );
  }
  function dh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: Y, baseState: Y, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ri, lastRenderedState: Y }, next: null };
    var i = {};
    return (
      (e.next = { memoizedState: i, baseState: i, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ri, lastRenderedState: i }, next: null }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function hh(t) {
    var e = dh(t).next.queue;
    is(t, e, {}, yn());
  }
  function Rc() {
    return He(bs);
  }
  function mh() {
    return ve().memoizedState;
  }
  function ph() {
    return ve().memoizedState;
  }
  function iy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var i = yn();
          t = ba(i);
          var r = wa(e, t, i);
          (r !== null && (_n(r, e, i), Fo(r, e, i)), (e = { cache: lc() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function ay(t, e, i) {
    var r = yn();
    ((i = { lane: r, revertLane: 0, action: i, hasEagerState: !1, eagerState: null, next: null }), Rl(t) ? vh(e, i) : ((i = Mi(t, e, i, r)), i !== null && (_n(i, t, r), yh(i, e, r))));
  }
  function gh(t, e, i) {
    var r = yn();
    is(t, e, i, r);
  }
  function is(t, e, i, r) {
    var l = { lane: r, revertLane: 0, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Rl(t)) vh(e, l);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && ((u = e.lastRenderedReducer), u !== null))
        try {
          var v = e.lastRenderedState,
            w = u(v, i);
          if (((l.hasEagerState = !0), (l.eagerState = w), qe(w, v))) return (lr(t, e, l, 0), ae === null && sr(), !1);
        } catch {}
      if (((i = Mi(t, e, l, r)), i !== null)) return (_n(i, t, r), yh(i, e, r), !0);
    }
    return !1;
  }
  function zc(t, e, i, r) {
    if (((r = { lane: 2, revertLane: df(), action: r, hasEagerState: !1, eagerState: null, next: null }), Rl(t))) {
      if (e) throw Error(h(479));
    } else ((e = Mi(t, i, r, 2)), e !== null && _n(e, t, 2));
  }
  function Rl(t) {
    var e = t.alternate;
    return t === Dt || (e !== null && e === Dt);
  }
  function vh(t, e) {
    Jr = El = !0;
    var i = t.pending;
    (i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)), (t.pending = e));
  }
  function yh(t, e, i) {
    if ((i & 4194048) !== 0) {
      var r = e.lanes;
      ((r &= t.pendingLanes), (i |= r), (e.lanes = i), Vs(t, i));
    }
  }
  var zl = {
      readContext: He,
      use: Cl,
      useCallback: he,
      useContext: he,
      useEffect: he,
      useImperativeHandle: he,
      useLayoutEffect: he,
      useInsertionEffect: he,
      useMemo: he,
      useReducer: he,
      useRef: he,
      useState: he,
      useDebugValue: he,
      useDeferredValue: he,
      useTransition: he,
      useSyncExternalStore: he,
      useId: he,
      useHostTransitionStatus: he,
      useFormState: he,
      useActionState: he,
      useOptimistic: he,
      useMemoCache: he,
      useCacheRefresh: he,
    },
    _h = {
      readContext: He,
      use: Cl,
      useCallback: function (t, e) {
        return ((tn().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: He,
      useEffect: nh,
      useImperativeHandle: function (t, e, i) {
        ((i = i != null ? i.concat([t]) : null), Ol(4194308, 4, oh.bind(null, e, t), i));
      },
      useLayoutEffect: function (t, e) {
        return Ol(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Ol(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var i = tn();
        e = e === void 0 ? null : e;
        var r = t();
        if (gr) {
          zn(!0);
          try {
            t();
          } finally {
            zn(!1);
          }
        }
        return ((i.memoizedState = [r, e]), r);
      },
      useReducer: function (t, e, i) {
        var r = tn();
        if (i !== void 0) {
          var l = i(e);
          if (gr) {
            zn(!0);
            try {
              i(e);
            } finally {
              zn(!1);
            }
          }
        } else l = e;
        return ((r.memoizedState = r.baseState = l), (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: l }), (r.queue = t), (t = t.dispatch = ay.bind(null, Dt, t)), [r.memoizedState, t]);
      },
      useRef: function (t) {
        var e = tn();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Ac(t);
        var e = t.queue,
          i = gh.bind(null, Dt, e);
        return ((e.dispatch = i), [t.memoizedState, i]);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var i = tn();
        return Lc(i, t, e);
      },
      useTransition: function () {
        var t = Ac(!1);
        return ((t = fh.bind(null, Dt, t.queue, !0, !1)), (tn().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, i) {
        var r = Dt,
          l = tn();
        if (Mt) {
          if (i === void 0) throw Error(h(407));
          i = i();
        } else {
          if (((i = e()), ae === null)) throw Error(h(349));
          (qt & 124) !== 0 || Zd(r, e, i);
        }
        l.memoizedState = i;
        var u = { value: i, getSnapshot: e };
        return ((l.queue = u), nh(Gd.bind(null, r, u, t), [t]), (r.flags |= 2048), to(9, Ll(), Ud.bind(null, r, u, i, e), null), i);
      },
      useId: function () {
        var t = tn(),
          e = ae.identifierPrefix;
        if (Mt) {
          var i = M,
            r = x;
          ((i = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + i), (e = "«" + e + "R" + i), (i = Al++), 0 < i && (e += "H" + i.toString(32)), (e += "»"));
        } else ((i = Jv++), (e = "«" + e + "r" + i.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Rc,
      useFormState: Fd,
      useActionState: Fd,
      useOptimistic: function (t) {
        var e = tn();
        e.memoizedState = e.baseState = t;
        var i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
        return ((e.queue = i), (e = zc.bind(null, Dt, !0, i)), (i.dispatch = e), [t, e]);
      },
      useMemoCache: kc,
      useCacheRefresh: function () {
        return (tn().memoizedState = iy.bind(null, Dt));
      },
    },
    xh = {
      readContext: He,
      use: Cl,
      useCallback: lh,
      useContext: He,
      useEffect: ih,
      useImperativeHandle: sh,
      useInsertionEffect: ah,
      useLayoutEffect: rh,
      useMemo: uh,
      useReducer: Ml,
      useRef: eh,
      useState: function () {
        return Ml(Ri);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var i = ve();
        return ch(i, Qt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ml(Ri)[0],
          e = ve().memoizedState;
        return [typeof t == "boolean" ? t : es(t), e];
      },
      useSyncExternalStore: Hd,
      useId: mh,
      useHostTransitionStatus: Rc,
      useFormState: Jd,
      useActionState: Jd,
      useOptimistic: function (t, e) {
        var i = ve();
        return Vd(i, Qt, t, e);
      },
      useMemoCache: kc,
      useCacheRefresh: ph,
    },
    ry = {
      readContext: He,
      use: Cl,
      useCallback: lh,
      useContext: He,
      useEffect: ih,
      useImperativeHandle: sh,
      useInsertionEffect: ah,
      useLayoutEffect: rh,
      useMemo: uh,
      useReducer: Ec,
      useRef: eh,
      useState: function () {
        return Ec(Ri);
      },
      useDebugValue: Mc,
      useDeferredValue: function (t, e) {
        var i = ve();
        return Qt === null ? Lc(i, t, e) : ch(i, Qt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ec(Ri)[0],
          e = ve().memoizedState;
        return [typeof t == "boolean" ? t : es(t), e];
      },
      useSyncExternalStore: Hd,
      useId: mh,
      useHostTransitionStatus: Rc,
      useFormState: th,
      useActionState: th,
      useOptimistic: function (t, e) {
        var i = ve();
        return Qt !== null ? Vd(i, Qt, t, e) : ((i.baseState = t), [t, i.queue.dispatch]);
      },
      useMemoCache: kc,
      useCacheRefresh: ph,
    },
    eo = null,
    as = 0;
  function jl(t) {
    var e = as;
    return ((as += 1), eo === null && (eo = []), Od(eo, t, e));
  }
  function rs(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Dl(t, e) {
    throw e.$$typeof === A ? Error(h(525)) : ((t = Object.prototype.toString.call(e)), Error(h(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function bh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function wh(t) {
    function e(N, j) {
      if (t) {
        var Z = N.deletions;
        Z === null ? ((N.deletions = [j]), (N.flags |= 16)) : Z.push(j);
      }
    }
    function i(N, j) {
      if (!t) return null;
      for (; j !== null; ) (e(N, j), (j = j.sibling));
      return null;
    }
    function r(N) {
      for (var j = new Map(); N !== null; ) (N.key !== null ? j.set(N.key, N) : j.set(N.index, N), (N = N.sibling));
      return j;
    }
    function l(N, j) {
      return ((N = Cn(N, j)), (N.index = 0), (N.sibling = null), N);
    }
    function u(N, j, Z) {
      return ((N.index = Z), t ? ((Z = N.alternate), Z !== null ? ((Z = Z.index), Z < j ? ((N.flags |= 67108866), j) : Z) : ((N.flags |= 67108866), j)) : ((N.flags |= 1048576), j));
    }
    function v(N) {
      return (t && N.alternate === null && (N.flags |= 67108866), N);
    }
    function w(N, j, Z, J) {
      return j === null || j.tag !== 6 ? ((j = Yo(Z, N.mode, J)), (j.return = N), j) : ((j = l(j, Z)), (j.return = N), j);
    }
    function O(N, j, Z, J) {
      var yt = Z.type;
      return yt === B
        ? Q(N, j, Z.props.children, J, Z.key)
        : j !== null && (j.elementType === yt || (typeof yt == "object" && yt !== null && yt.$$typeof === F && bh(yt) === j.type))
          ? ((j = l(j, Z.props)), rs(j, Z), (j.return = N), j)
          : ((j = cr(Z.type, Z.key, Z.props, null, N.mode, J)), rs(j, Z), (j.return = N), j);
    }
    function U(N, j, Z, J) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== Z.containerInfo || j.stateNode.implementation !== Z.implementation ? ((j = Xr(Z, N.mode, J)), (j.return = N), j) : ((j = l(j, Z.children || [])), (j.return = N), j);
    }
    function Q(N, j, Z, J, yt) {
      return j === null || j.tag !== 7 ? ((j = ti(Z, N.mode, J, yt)), (j.return = N), j) : ((j = l(j, Z)), (j.return = N), j);
    }
    function tt(N, j, Z) {
      if ((typeof j == "string" && j !== "") || typeof j == "number" || typeof j == "bigint") return ((j = Yo("" + j, N.mode, Z)), (j.return = N), j);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case C:
            return ((Z = cr(j.type, j.key, j.props, null, N.mode, Z)), rs(Z, j), (Z.return = N), Z);
          case D:
            return ((j = Xr(j, N.mode, Z)), (j.return = N), j);
          case F:
            var J = j._init;
            return ((j = J(j._payload)), tt(N, j, Z));
        }
        if (Rt(j) || ht(j)) return ((j = ti(j, N.mode, Z, null)), (j.return = N), j);
        if (typeof j.then == "function") return tt(N, jl(j), Z);
        if (j.$$typeof === K) return tt(N, bl(N, j), Z);
        Dl(N, j);
      }
      return null;
    }
    function G(N, j, Z, J) {
      var yt = j !== null ? j.key : null;
      if ((typeof Z == "string" && Z !== "") || typeof Z == "number" || typeof Z == "bigint") return yt !== null ? null : w(N, j, "" + Z, J);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case C:
            return Z.key === yt ? O(N, j, Z, J) : null;
          case D:
            return Z.key === yt ? U(N, j, Z, J) : null;
          case F:
            return ((yt = Z._init), (Z = yt(Z._payload)), G(N, j, Z, J));
        }
        if (Rt(Z) || ht(Z)) return yt !== null ? null : Q(N, j, Z, J, null);
        if (typeof Z.then == "function") return G(N, j, jl(Z), J);
        if (Z.$$typeof === K) return G(N, j, bl(N, Z), J);
        Dl(N, Z);
      }
      return null;
    }
    function q(N, j, Z, J, yt) {
      if ((typeof J == "string" && J !== "") || typeof J == "number" || typeof J == "bigint") return ((N = N.get(Z) || null), w(j, N, "" + J, yt));
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case C:
            return ((N = N.get(J.key === null ? Z : J.key) || null), O(j, N, J, yt));
          case D:
            return ((N = N.get(J.key === null ? Z : J.key) || null), U(j, N, J, yt));
          case F:
            var Ht = J._init;
            return ((J = Ht(J._payload)), q(N, j, Z, J, yt));
        }
        if (Rt(J) || ht(J)) return ((N = N.get(Z) || null), Q(j, N, J, yt, null));
        if (typeof J.then == "function") return q(N, j, Z, jl(J), yt);
        if (J.$$typeof === K) return q(N, j, Z, bl(j, J), yt);
        Dl(j, J);
      }
      return null;
    }
    function Ct(N, j, Z, J) {
      for (var yt = null, Ht = null, St = j, At = (j = 0), Ae = null; St !== null && At < Z.length; At++) {
        St.index > At ? ((Ae = St), (St = null)) : (Ae = St.sibling);
        var Yt = G(N, St, Z[At], J);
        if (Yt === null) {
          St === null && (St = Ae);
          break;
        }
        (t && St && Yt.alternate === null && e(N, St), (j = u(Yt, j, At)), Ht === null ? (yt = Yt) : (Ht.sibling = Yt), (Ht = Yt), (St = Ae));
      }
      if (At === Z.length) return (i(N, St), Mt && P(N, At), yt);
      if (St === null) {
        for (; At < Z.length; At++) ((St = tt(N, Z[At], J)), St !== null && ((j = u(St, j, At)), Ht === null ? (yt = St) : (Ht.sibling = St), (Ht = St)));
        return (Mt && P(N, At), yt);
      }
      for (St = r(St); At < Z.length; At++)
        ((Ae = q(St, N, At, Z[At], J)), Ae !== null && (t && Ae.alternate !== null && St.delete(Ae.key === null ? At : Ae.key), (j = u(Ae, j, At)), Ht === null ? (yt = Ae) : (Ht.sibling = Ae), (Ht = Ae)));
      return (
        t &&
          St.forEach(function (Ha) {
            return e(N, Ha);
          }),
        Mt && P(N, At),
        yt
      );
    }
    function Et(N, j, Z, J) {
      if (Z == null) throw Error(h(151));
      for (var yt = null, Ht = null, St = j, At = (j = 0), Ae = null, Yt = Z.next(); St !== null && !Yt.done; At++, Yt = Z.next()) {
        St.index > At ? ((Ae = St), (St = null)) : (Ae = St.sibling);
        var Ha = G(N, St, Yt.value, J);
        if (Ha === null) {
          St === null && (St = Ae);
          break;
        }
        (t && St && Ha.alternate === null && e(N, St), (j = u(Ha, j, At)), Ht === null ? (yt = Ha) : (Ht.sibling = Ha), (Ht = Ha), (St = Ae));
      }
      if (Yt.done) return (i(N, St), Mt && P(N, At), yt);
      if (St === null) {
        for (; !Yt.done; At++, Yt = Z.next()) ((Yt = tt(N, Yt.value, J)), Yt !== null && ((j = u(Yt, j, At)), Ht === null ? (yt = Yt) : (Ht.sibling = Yt), (Ht = Yt)));
        return (Mt && P(N, At), yt);
      }
      for (St = r(St); !Yt.done; At++, Yt = Z.next())
        ((Yt = q(St, N, At, Yt.value, J)), Yt !== null && (t && Yt.alternate !== null && St.delete(Yt.key === null ? At : Yt.key), (j = u(Yt, j, At)), Ht === null ? (yt = Yt) : (Ht.sibling = Yt), (Ht = Yt)));
      return (
        t &&
          St.forEach(function (o_) {
            return e(N, o_);
          }),
        Mt && P(N, At),
        yt
      );
    }
    function Jt(N, j, Z, J) {
      if ((typeof Z == "object" && Z !== null && Z.type === B && Z.key === null && (Z = Z.props.children), typeof Z == "object" && Z !== null)) {
        switch (Z.$$typeof) {
          case C:
            t: {
              for (var yt = Z.key; j !== null; ) {
                if (j.key === yt) {
                  if (((yt = Z.type), yt === B)) {
                    if (j.tag === 7) {
                      (i(N, j.sibling), (J = l(j, Z.props.children)), (J.return = N), (N = J));
                      break t;
                    }
                  } else if (j.elementType === yt || (typeof yt == "object" && yt !== null && yt.$$typeof === F && bh(yt) === j.type)) {
                    (i(N, j.sibling), (J = l(j, Z.props)), rs(J, Z), (J.return = N), (N = J));
                    break t;
                  }
                  i(N, j);
                  break;
                } else e(N, j);
                j = j.sibling;
              }
              Z.type === B ? ((J = ti(Z.props.children, N.mode, J, Z.key)), (J.return = N), (N = J)) : ((J = cr(Z.type, Z.key, Z.props, null, N.mode, J)), rs(J, Z), (J.return = N), (N = J));
            }
            return v(N);
          case D:
            t: {
              for (yt = Z.key; j !== null; ) {
                if (j.key === yt)
                  if (j.tag === 4 && j.stateNode.containerInfo === Z.containerInfo && j.stateNode.implementation === Z.implementation) {
                    (i(N, j.sibling), (J = l(j, Z.children || [])), (J.return = N), (N = J));
                    break t;
                  } else {
                    i(N, j);
                    break;
                  }
                else e(N, j);
                j = j.sibling;
              }
              ((J = Xr(Z, N.mode, J)), (J.return = N), (N = J));
            }
            return v(N);
          case F:
            return ((yt = Z._init), (Z = yt(Z._payload)), Jt(N, j, Z, J));
        }
        if (Rt(Z)) return Ct(N, j, Z, J);
        if (ht(Z)) {
          if (((yt = ht(Z)), typeof yt != "function")) throw Error(h(150));
          return ((Z = yt.call(Z)), Et(N, j, Z, J));
        }
        if (typeof Z.then == "function") return Jt(N, j, jl(Z), J);
        if (Z.$$typeof === K) return Jt(N, j, bl(N, Z), J);
        Dl(N, Z);
      }
      return (typeof Z == "string" && Z !== "") || typeof Z == "number" || typeof Z == "bigint"
        ? ((Z = "" + Z), j !== null && j.tag === 6 ? (i(N, j.sibling), (J = l(j, Z)), (J.return = N), (N = J)) : (i(N, j), (J = Yo(Z, N.mode, J)), (J.return = N), (N = J)), v(N))
        : i(N, j);
    }
    return function (N, j, Z, J) {
      try {
        as = 0;
        var yt = Jt(N, j, Z, J);
        return ((eo = null), yt);
      } catch (St) {
        if (St === Ko || St === Sl) throw St;
        var Ht = Ie(29, St, null, N.mode);
        return ((Ht.lanes = J), (Ht.return = N), Ht);
      }
    };
  }
  var no = wh(!0),
    Sh = wh(!1),
    Ln = I(null),
    ni = null;
  function ka(t) {
    var e = t.alternate;
    (st(_e, _e.current & 1), st(Ln, t), ni === null && (e === null || Fr.current !== null || e.memoizedState !== null) && (ni = t));
  }
  function kh(t) {
    if (t.tag === 22) {
      if ((st(_e, _e.current), st(Ln, t), ni === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ni = t);
      }
    } else Ta();
  }
  function Ta() {
    (st(_e, _e.current), st(Ln, Ln.current));
  }
  function zi(t) {
    (lt(Ln), ni === t && (ni = null), lt(_e));
  }
  var _e = I(0);
  function Nl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var i = e.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === "$?" || kf(i))) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function jc(t, e, i, r) {
    ((e = t.memoizedState), (i = i(r, e)), (i = i == null ? e : E({}, e, i)), (t.memoizedState = i), t.lanes === 0 && (t.updateQueue.baseState = i));
  }
  var Dc = {
    enqueueSetState: function (t, e, i) {
      t = t._reactInternals;
      var r = yn(),
        l = ba(r);
      ((l.payload = e), i != null && (l.callback = i), (e = wa(t, l, r)), e !== null && (_n(e, t, r), Fo(e, t, r)));
    },
    enqueueReplaceState: function (t, e, i) {
      t = t._reactInternals;
      var r = yn(),
        l = ba(r);
      ((l.tag = 1), (l.payload = e), i != null && (l.callback = i), (e = wa(t, l, r)), e !== null && (_n(e, t, r), Fo(e, t, r)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var i = yn(),
        r = ba(i);
      ((r.tag = 2), e != null && (r.callback = e), (e = wa(t, r, i)), e !== null && (_n(e, t, i), Fo(e, t, i)));
    },
  };
  function Th(t, e, i, r, l, u, v) {
    return ((t = t.stateNode), typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, u, v) : e.prototype && e.prototype.isPureReactComponent ? !Ve(i, r) || !Ve(l, u) : !0);
  }
  function Eh(t, e, i, r) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(i, r),
      typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(i, r),
      e.state !== t && Dc.enqueueReplaceState(e, e.state, null));
  }
  function vr(t, e) {
    var i = e;
    if ("ref" in e) {
      i = {};
      for (var r in e) r !== "ref" && (i[r] = e[r]);
    }
    if ((t = t.defaultProps)) {
      i === e && (i = E({}, i));
      for (var l in t) i[l] === void 0 && (i[l] = t[l]);
    }
    return i;
  }
  var Pl =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Ah(t) {
    Pl(t);
  }
  function Ch(t) {
    console.error(t);
  }
  function Mh(t) {
    Pl(t);
  }
  function Bl(t, e) {
    try {
      var i = t.onUncaughtError;
      i(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Lh(t, e, i) {
    try {
      var r = t.onCaughtError;
      r(i.value, { componentStack: i.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Nc(t, e, i) {
    return (
      (i = ba(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Bl(t, e);
      }),
      i
    );
  }
  function Oh(t) {
    return ((t = ba(t)), (t.tag = 3), t);
  }
  function Rh(t, e, i, r) {
    var l = i.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = r.value;
      ((t.payload = function () {
        return l(u);
      }),
        (t.callback = function () {
          Lh(e, i, r);
        }));
    }
    var v = i.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (t.callback = function () {
        (Lh(e, i, r), typeof l != "function" && (Oa === null ? (Oa = new Set([this])) : Oa.add(this)));
        var w = r.stack;
        this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
      });
  }
  function oy(t, e, i, r, l) {
    if (((i.flags |= 32768), r !== null && typeof r == "object" && typeof r.then == "function")) {
      if (((e = i.alternate), e !== null && hr(e, i, l, !0), (i = Ln.current), i !== null)) {
        switch (i.tag) {
          case 13:
            return (
              ni === null ? sf() : i.alternate === null && de === 0 && (de = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = l),
              r === fc ? (i.flags |= 16384) : ((e = i.updateQueue), e === null ? (i.updateQueue = new Set([r])) : e.add(r), uf(t, r, l)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              r === fc
                ? (i.flags |= 16384)
                : ((e = i.updateQueue),
                  e === null ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }), (i.updateQueue = e)) : ((i = e.retryQueue), i === null ? (e.retryQueue = new Set([r])) : i.add(r)),
                  uf(t, r, l)),
              !1
            );
        }
        throw Error(h(435, i.tag));
      }
      return (uf(t, r, l), sf(), !1);
    }
    if (Mt)
      return (
        (e = Ln.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256), (e.flags |= 65536), (e.lanes = l), r !== ke && ((t = Error(h(422), { cause: r })), _a(Ye(t, i))))
          : (r !== ke && ((e = Error(h(423), { cause: r })), _a(Ye(e, i))), (t = t.current.alternate), (t.flags |= 65536), (l &= -l), (t.lanes |= l), (r = Ye(r, i)), (l = Nc(t.stateNode, r, l)), mc(t, l), de !== 4 && (de = 2)),
        !1
      );
    var u = Error(h(520), { cause: r });
    if (((u = Ye(u, i)), ds === null ? (ds = [u]) : ds.push(u), de !== 4 && (de = 2), e === null)) return !0;
    ((r = Ye(r, i)), (i = e));
    do {
      switch (i.tag) {
        case 3:
          return ((i.flags |= 65536), (t = l & -l), (i.lanes |= t), (t = Nc(i.stateNode, r, t)), mc(i, t), !1);
        case 1:
          if (((e = i.type), (u = i.stateNode), (i.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || (u !== null && typeof u.componentDidCatch == "function" && (Oa === null || !Oa.has(u))))))
            return ((i.flags |= 65536), (l &= -l), (i.lanes |= l), (l = Oh(l)), Rh(l, t, i, r), mc(i, l), !1);
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var zh = Error(h(461)),
    Te = !1;
  function Oe(t, e, i, r) {
    e.child = t === null ? Sh(e, null, i, r) : no(e, t.child, i, r);
  }
  function jh(t, e, i, r, l) {
    i = i.render;
    var u = e.ref;
    if ("ref" in r) {
      var v = {};
      for (var w in r) w !== "ref" && (v[w] = r[w]);
    } else v = r;
    return (mr(e), (r = _c(t, e, i, v, u, l)), (w = xc()), t !== null && !Te ? (bc(t, e, l), ji(t, e, l)) : (Mt && w && it(e), (e.flags |= 1), Oe(t, e, r, l), e.child));
  }
  function Dh(t, e, i, r, l) {
    if (t === null) {
      var u = i.type;
      return typeof u == "function" && !Yr(u) && u.defaultProps === void 0 && i.compare === null ? ((e.tag = 15), (e.type = u), Nh(t, e, u, r, l)) : ((t = cr(i.type, null, r, e, e.mode, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((u = t.child), !qc(t, l))) {
      var v = u.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : Ve), i(v, r) && t.ref === e.ref)) return ji(t, e, l);
    }
    return ((e.flags |= 1), (t = Cn(u, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Nh(t, e, i, r, l) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ve(u, r) && t.ref === e.ref)
        if (((Te = !1), (e.pendingProps = r = u), qc(t, l))) (t.flags & 131072) !== 0 && (Te = !0);
        else return ((e.lanes = t.lanes), ji(t, e, l));
    }
    return Pc(t, e, i, r, l);
  }
  function Ph(t, e, i) {
    var r = e.pendingProps,
      l = r.children,
      u = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((r = u !== null ? u.baseLanes | i : i), t !== null)) {
          for (l = e.child = t.child, u = 0; l !== null; ) ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          e.childLanes = u & ~r;
        } else ((e.childLanes = 0), (e.child = null));
        return Bh(t, e, r, i);
      }
      if ((i & 536870912) !== 0) ((e.memoizedState = { baseLanes: 0, cachePool: null }), t !== null && wl(e, u !== null ? u.cachePool : null), u !== null ? Nd(e, u) : gc(), kh(e));
      else return ((e.lanes = e.childLanes = 536870912), Bh(t, e, u !== null ? u.baseLanes | i : i, i));
    } else u !== null ? (wl(e, u.cachePool), Nd(e, u), Ta(), (e.memoizedState = null)) : (t !== null && wl(e, null), gc(), Ta());
    return (Oe(t, e, l, i), e.child);
  }
  function Bh(t, e, i, r) {
    var l = cc();
    return ((l = l === null ? null : { parent: ye._currentValue, pool: l }), (e.memoizedState = { baseLanes: i, cachePool: l }), t !== null && wl(e, null), gc(), kh(e), t !== null && hr(t, e, r, !0), null);
  }
  function Hl(t, e) {
    var i = e.ref;
    if (i === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(h(284));
      (t === null || t.ref !== i) && (e.flags |= 4194816);
    }
  }
  function Pc(t, e, i, r, l) {
    return (mr(e), (i = _c(t, e, i, r, void 0, l)), (r = xc()), t !== null && !Te ? (bc(t, e, l), ji(t, e, l)) : (Mt && r && it(e), (e.flags |= 1), Oe(t, e, i, l), e.child));
  }
  function Hh(t, e, i, r, l, u) {
    return (mr(e), (e.updateQueue = null), (i = Bd(e, r, i, l)), Pd(t), (r = xc()), t !== null && !Te ? (bc(t, e, u), ji(t, e, u)) : (Mt && r && it(e), (e.flags |= 1), Oe(t, e, i, u), e.child));
  }
  function Zh(t, e, i, r, l) {
    if ((mr(e), e.stateNode === null)) {
      var u = Li,
        v = i.contextType;
      (typeof v == "object" && v !== null && (u = He(v)),
        (u = new i(r, u)),
        (e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Dc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = r),
        (u.state = e.memoizedState),
        (u.refs = {}),
        dc(e),
        (v = i.contextType),
        (u.context = typeof v == "object" && v !== null ? He(v) : Li),
        (u.state = e.memoizedState),
        (v = i.getDerivedStateFromProps),
        typeof v == "function" && (jc(e, i, v, r), (u.state = e.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function") ||
          ((v = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
          v !== u.state && Dc.enqueueReplaceState(u, u.state, null),
          $o(e, r, u, l),
          Jo(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (r = !0));
    } else if (t === null) {
      u = e.stateNode;
      var w = e.memoizedProps,
        O = vr(i, w);
      u.props = O;
      var U = u.context,
        Q = i.contextType;
      ((v = Li), typeof Q == "object" && Q !== null && (v = He(Q)));
      var tt = i.getDerivedStateFromProps;
      ((Q = typeof tt == "function" || typeof u.getSnapshotBeforeUpdate == "function"),
        (w = e.pendingProps !== w),
        Q || (typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function") || ((w || U !== v) && Eh(e, u, r, v)),
        (xa = !1));
      var G = e.memoizedState;
      ((u.state = G),
        $o(e, r, u, l),
        Jo(),
        (U = e.memoizedState),
        w || G !== U || xa
          ? (typeof tt == "function" && (jc(e, i, tt, r), (U = e.memoizedState)),
            (O = xa || Th(e, i, O, r, G, U, v))
              ? (Q ||
                  (typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), (e.memoizedProps = r), (e.memoizedState = U)),
            (u.props = r),
            (u.state = U),
            (u.context = v),
            (r = O))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), (r = !1)));
    } else {
      ((u = e.stateNode),
        hc(t, e),
        (v = e.memoizedProps),
        (Q = vr(i, v)),
        (u.props = Q),
        (tt = e.pendingProps),
        (G = u.context),
        (U = i.contextType),
        (O = Li),
        typeof U == "object" && U !== null && (O = He(U)),
        (w = i.getDerivedStateFromProps),
        (U = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function") ||
          ((v !== tt || G !== O) && Eh(e, u, r, O)),
        (xa = !1),
        (G = e.memoizedState),
        (u.state = G),
        $o(e, r, u, l),
        Jo());
      var q = e.memoizedState;
      v !== tt || G !== q || xa || (t !== null && t.dependencies !== null && xl(t.dependencies))
        ? (typeof w == "function" && (jc(e, i, w, r), (q = e.memoizedState)),
          (Q = xa || Th(e, i, Q, r, G, q, O) || (t !== null && t.dependencies !== null && xl(t.dependencies)))
            ? (U ||
                (typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, q, O), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, q, O)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" || (v === t.memoizedProps && G === t.memoizedState) || (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" || (v === t.memoizedProps && G === t.memoizedState) || (e.flags |= 1024),
              (e.memoizedProps = r),
              (e.memoizedState = q)),
          (u.props = r),
          (u.state = q),
          (u.context = O),
          (r = Q))
        : (typeof u.componentDidUpdate != "function" || (v === t.memoizedProps && G === t.memoizedState) || (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" || (v === t.memoizedProps && G === t.memoizedState) || (e.flags |= 1024),
          (r = !1));
    }
    return (
      (u = r),
      Hl(t, e),
      (r = (e.flags & 128) !== 0),
      u || r
        ? ((u = e.stateNode),
          (i = r && typeof i.getDerivedStateFromError != "function" ? null : u.render()),
          (e.flags |= 1),
          t !== null && r ? ((e.child = no(e, t.child, null, l)), (e.child = no(e, null, i, l))) : Oe(t, e, i, l),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = ji(t, e, l)),
      t
    );
  }
  function Uh(t, e, i, r) {
    return (ya(), (e.flags |= 256), Oe(t, e, i, r), e.child);
  }
  var Bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Hc(t) {
    return { baseLanes: t, cachePool: Cd() };
  }
  function Zc(t, e, i) {
    return ((t = t !== null ? t.childLanes & ~i : 0), e && (t |= On), t);
  }
  function Gh(t, e, i) {
    var r = e.pendingProps,
      l = !1,
      u = (e.flags & 128) !== 0,
      v;
    if (((v = u) || (v = t !== null && t.memoizedState === null ? !1 : (_e.current & 2) !== 0), v && ((l = !0), (e.flags &= -129)), (v = (e.flags & 32) !== 0), (e.flags &= -33), t === null)) {
      if (Mt) {
        if ((l ? ka(e) : Ta(), Mt)) {
          var w = bt,
            O;
          if ((O = w)) {
            t: {
              for (O = w, w = le; O.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break t;
                }
                if (((O = Gn(O.nextSibling)), O === null)) {
                  w = null;
                  break t;
                }
              }
              w = O;
            }
            w !== null
              ? ((e.memoizedState = { dehydrated: w, treeContext: p !== null ? { id: x, overflow: M } : null, retryLane: 536870912, hydrationErrors: null }),
                (O = Ie(18, null, null, 0)),
                (O.stateNode = w),
                (O.return = e),
                (e.child = O),
                (vt = e),
                (bt = null),
                (O = !0))
              : (O = !1);
          }
          O || $e(e);
        }
        if (((w = e.memoizedState), w !== null && ((w = w.dehydrated), w !== null))) return (kf(w) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        zi(e);
      }
      return (
        (w = r.children),
        (r = r.fallback),
        l
          ? (Ta(),
            (l = e.mode),
            (w = Zl({ mode: "hidden", children: w }, l)),
            (r = ti(r, l, i, null)),
            (w.return = e),
            (r.return = e),
            (w.sibling = r),
            (e.child = w),
            (l = e.child),
            (l.memoizedState = Hc(i)),
            (l.childLanes = Zc(t, v, i)),
            (e.memoizedState = Bc),
            r)
          : (ka(e), Uc(e, w))
      );
    }
    if (((O = t.memoizedState), O !== null && ((w = O.dehydrated), w !== null))) {
      if (u)
        e.flags & 256
          ? (ka(e), (e.flags &= -257), (e = Gc(t, e, i)))
          : e.memoizedState !== null
            ? (Ta(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Ta(),
              (l = r.fallback),
              (w = e.mode),
              (r = Zl({ mode: "visible", children: r.children }, w)),
              (l = ti(l, w, i, null)),
              (l.flags |= 2),
              (r.return = e),
              (l.return = e),
              (r.sibling = l),
              (e.child = r),
              no(e, t.child, null, i),
              (r = e.child),
              (r.memoizedState = Hc(i)),
              (r.childLanes = Zc(t, v, i)),
              (e.memoizedState = Bc),
              (e = l));
      else if ((ka(e), kf(w))) {
        if (((v = w.nextSibling && w.nextSibling.dataset), v)) var U = v.dgst;
        ((v = U), (r = Error(h(419))), (r.stack = ""), (r.digest = v), _a({ value: r, source: null, stack: null }), (e = Gc(t, e, i)));
      } else if ((Te || hr(t, e, i, !1), (v = (i & t.childLanes) !== 0), Te || v)) {
        if (((v = ae), v !== null && ((r = i & -i), (r = (r & 42) !== 0 ? 1 : Eo(r)), (r = (r & (v.suspendedLanes | i)) !== 0 ? 0 : r), r !== 0 && r !== O.retryLane))) throw ((O.retryLane = r), ga(t, r), _n(v, t, r), zh);
        (w.data === "$?" || sf(), (e = Gc(t, e, i)));
      } else
        w.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = O.treeContext),
            (bt = Gn(w.nextSibling)),
            (vt = e),
            (Mt = !0),
            (ie = null),
            (le = !1),
            t !== null && ((s[d++] = x), (s[d++] = M), (s[d++] = p), (x = t.id), (M = t.overflow), (p = e)),
            (e = Uc(e, r.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (Ta(),
        (l = r.fallback),
        (w = e.mode),
        (O = t.child),
        (U = O.sibling),
        (r = Cn(O, { mode: "hidden", children: r.children })),
        (r.subtreeFlags = O.subtreeFlags & 65011712),
        U !== null ? (l = Cn(U, l)) : ((l = ti(l, w, i, null)), (l.flags |= 2)),
        (l.return = e),
        (r.return = e),
        (r.sibling = l),
        (e.child = r),
        (r = l),
        (l = e.child),
        (w = t.child.memoizedState),
        w === null ? (w = Hc(i)) : ((O = w.cachePool), O !== null ? ((U = ye._currentValue), (O = O.parent !== U ? { parent: U, pool: U } : O)) : (O = Cd()), (w = { baseLanes: w.baseLanes | i, cachePool: O })),
        (l.memoizedState = w),
        (l.childLanes = Zc(t, v, i)),
        (e.memoizedState = Bc),
        r)
      : (ka(e),
        (i = t.child),
        (t = i.sibling),
        (i = Cn(i, { mode: "visible", children: r.children })),
        (i.return = e),
        (i.sibling = null),
        t !== null && ((v = e.deletions), v === null ? ((e.deletions = [t]), (e.flags |= 16)) : v.push(t)),
        (e.child = i),
        (e.memoizedState = null),
        i);
  }
  function Uc(t, e) {
    return ((e = Zl({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function Zl(t, e) {
    return ((t = Ie(22, t, null, e)), (t.lanes = 0), (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t);
  }
  function Gc(t, e, i) {
    return (no(e, t.child, null, i), (t = Uc(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t);
  }
  function Wh(t, e, i) {
    t.lanes |= e;
    var r = t.alternate;
    (r !== null && (r.lanes |= e), dr(t.return, e, i));
  }
  function Wc(t, e, i, r, l) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: i, tailMode: l })
      : ((u.isBackwards = e), (u.rendering = null), (u.renderingStartTime = 0), (u.last = r), (u.tail = i), (u.tailMode = l));
  }
  function qh(t, e, i) {
    var r = e.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Oe(t, e, r.children, i), (r = _e.current), (r & 2) !== 0)) ((r = (r & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Wh(t, i, e);
          else if (t.tag === 19) Wh(t, i, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      r &= 1;
    }
    switch ((st(_e, r), l)) {
      case "forwards":
        for (i = e.child, l = null; i !== null; ) ((t = i.alternate), t !== null && Nl(t) === null && (l = i), (i = i.sibling));
        ((i = l), i === null ? ((l = e.child), (e.child = null)) : ((l = i.sibling), (i.sibling = null)), Wc(e, !1, l, i, u));
        break;
      case "backwards":
        for (i = null, l = e.child, e.child = null; l !== null; ) {
          if (((t = l.alternate), t !== null && Nl(t) === null)) {
            e.child = l;
            break;
          }
          ((t = l.sibling), (l.sibling = i), (i = l), (l = t));
        }
        Wc(e, !0, i, null, u);
        break;
      case "together":
        Wc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ji(t, e, i) {
    if ((t !== null && (e.dependencies = t.dependencies), (La |= e.lanes), (i & e.childLanes) === 0))
      if (t !== null) {
        if ((hr(t, e, i, !1), (i & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(h(153));
    if (e.child !== null) {
      for (t = e.child, i = Cn(t, t.pendingProps), e.child = i, i.return = e; t.sibling !== null; ) ((t = t.sibling), (i = i.sibling = Cn(t, t.pendingProps)), (i.return = e));
      i.sibling = null;
    }
    return e.child;
  }
  function qc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && xl(t)));
  }
  function sy(t, e, i) {
    switch (e.tag) {
      case 3:
        (Pt(e, e.stateNode.containerInfo), ei(e, ye, t.memoizedState.cache), ya());
        break;
      case 27:
      case 5:
        on(e);
        break;
      case 4:
        Pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ei(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (ka(e), (e.flags |= 128), null) : (i & e.child.childLanes) !== 0 ? Gh(t, e, i) : (ka(e), (t = ji(t, e, i)), t !== null ? t.sibling : null);
        ka(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (((r = (i & e.childLanes) !== 0), r || (hr(t, e, i, !1), (r = (i & e.childLanes) !== 0)), l)) {
          if (r) return qh(t, e, i);
          e.flags |= 128;
        }
        if (((l = e.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), st(_e, _e.current), r)) break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Ph(t, e, i));
      case 24:
        ei(e, ye, t.memoizedState.cache);
    }
    return ji(t, e, i);
  }
  function Vh(t, e, i) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Te = !0;
      else {
        if (!qc(t, i) && (e.flags & 128) === 0) return ((Te = !1), sy(t, e, i));
        Te = (t.flags & 131072) !== 0;
      }
    else ((Te = !1), Mt && (e.flags & 1048576) !== 0 && V(e, a, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var r = e.elementType,
            l = r._init;
          if (((r = l(r._payload)), (e.type = r), typeof r == "function")) Yr(r) ? ((t = vr(r, t)), (e.tag = 1), (e = Zh(null, e, r, t, i))) : ((e.tag = 0), (e = Pc(null, e, r, t, i)));
          else {
            if (r != null) {
              if (((l = r.$$typeof), l === at)) {
                ((e.tag = 11), (e = jh(null, e, r, t, i)));
                break t;
              } else if (l === ft) {
                ((e.tag = 14), (e = Dh(null, e, r, t, i)));
                break t;
              }
            }
            throw ((e = Tt(r) || r), Error(h(306, e, "")));
          }
        }
        return e;
      case 0:
        return Pc(t, e, e.type, e.pendingProps, i);
      case 1:
        return ((r = e.type), (l = vr(r, e.pendingProps)), Zh(t, e, r, l, i));
      case 3:
        t: {
          if ((Pt(e, e.stateNode.containerInfo), t === null)) throw Error(h(387));
          r = e.pendingProps;
          var u = e.memoizedState;
          ((l = u.element), hc(t, e), $o(e, r, null, i));
          var v = e.memoizedState;
          if (((r = v.cache), ei(e, ye, r), r !== u.cache && Ir(e, [ye], i, !0), Jo(), (r = v.element), u.isDehydrated))
            if (((u = { element: r, isDehydrated: !1, cache: v.cache }), (e.updateQueue.baseState = u), (e.memoizedState = u), e.flags & 256)) {
              e = Uh(t, e, r, i);
              break t;
            } else if (r !== l) {
              ((l = Ye(Error(h(424)), e)), _a(l), (e = Uh(t, e, r, i)));
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? (t = t.body) : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t), bt = Gn(t.firstChild), vt = e, Mt = !0, ie = null, le = !0, i = Sh(e, null, r, i), e.child = i; i; )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((ya(), r === l)) {
              e = ji(t, e, i);
              break t;
            }
            Oe(t, e, r, i);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Hl(t, e),
          t === null
            ? (i = Km(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = i)
              : Mt || ((i = e.type), (t = e.pendingProps), (r = tu(rt.current).createElement(i)), (r[we] = e), (r[Ne] = t), ze(r, i, t), pe(r), (e.stateNode = r))
            : (e.memoizedState = Km(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          on(e),
          t === null && Mt && ((r = e.stateNode = Ym(e.type, e.pendingProps, rt.current)), (vt = e), (le = !0), (l = bt), ja(e.type) ? ((Tf = l), (bt = Gn(r.firstChild))) : (bt = l)),
          Oe(t, e, e.pendingProps.children, i),
          Hl(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null && Mt && ((l = r = bt) && ((r = Dy(r, e.type, e.pendingProps, le)), r !== null ? ((e.stateNode = r), (vt = e), (bt = Gn(r.firstChild)), (le = !1), (l = !0)) : (l = !1)), l || $e(e)),
          on(e),
          (l = e.type),
          (u = e.pendingProps),
          (v = t !== null ? t.memoizedProps : null),
          (r = u.children),
          bf(l, u) ? (r = null) : v !== null && bf(l, v) && (e.flags |= 32),
          e.memoizedState !== null && ((l = _c(t, e, $v, null, null, i)), (bs._currentValue = l)),
          Hl(t, e),
          Oe(t, e, r, i),
          e.child
        );
      case 6:
        return (t === null && Mt && ((t = i = bt) && ((i = Ny(i, e.pendingProps, le)), i !== null ? ((e.stateNode = i), (vt = e), (bt = null), (t = !0)) : (t = !1)), t || $e(e)), null);
      case 13:
        return Gh(t, e, i);
      case 4:
        return (Pt(e, e.stateNode.containerInfo), (r = e.pendingProps), t === null ? (e.child = no(e, null, r, i)) : Oe(t, e, r, i), e.child);
      case 11:
        return jh(t, e, e.type, e.pendingProps, i);
      case 7:
        return (Oe(t, e, e.pendingProps, i), e.child);
      case 8:
        return (Oe(t, e, e.pendingProps.children, i), e.child);
      case 12:
        return (Oe(t, e, e.pendingProps.children, i), e.child);
      case 10:
        return ((r = e.pendingProps), ei(e, e.type, r.value), Oe(t, e, r.children, i), e.child);
      case 9:
        return ((l = e.type._context), (r = e.pendingProps.children), mr(e), (l = He(l)), (r = r(l)), (e.flags |= 1), Oe(t, e, r, i), e.child);
      case 14:
        return Dh(t, e, e.type, e.pendingProps, i);
      case 15:
        return Nh(t, e, e.type, e.pendingProps, i);
      case 19:
        return qh(t, e, i);
      case 31:
        return (
          (r = e.pendingProps),
          (i = e.mode),
          (r = { mode: r.mode, children: r.children }),
          t === null ? ((i = Zl(r, i)), (i.ref = e.ref), (e.child = i), (i.return = e), (e = i)) : ((i = Cn(t.child, r)), (i.ref = e.ref), (e.child = i), (i.return = e), (e = i)),
          e
        );
      case 22:
        return Ph(t, e, i);
      case 24:
        return (
          mr(e),
          (r = He(ye)),
          t === null
            ? ((l = cc()), l === null && ((l = ae), (u = lc()), (l.pooledCache = u), u.refCount++, u !== null && (l.pooledCacheLanes |= i), (l = u)), (e.memoizedState = { parent: r, cache: l }), dc(e), ei(e, ye, l))
            : ((t.lanes & i) !== 0 && (hc(t, e), $o(e, null, null, i), Jo()),
              (l = t.memoizedState),
              (u = e.memoizedState),
              l.parent !== r ? ((l = { parent: r, cache: r }), (e.memoizedState = l), e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = l), ei(e, ye, r)) : ((r = u.cache), ei(e, ye, r), r !== l.cache && Ir(e, [ye], i, !0))),
          Oe(t, e, e.pendingProps.children, i),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(h(156, e.tag));
  }
  function Di(t) {
    t.flags |= 4;
  }
  function Yh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !tp(e))) {
      if (((e = Ln.current), e !== null && ((qt & 4194048) === qt ? ni !== null : ((qt & 62914560) !== qt && (qt & 536870912) === 0) || e !== ni))) throw ((Qo = fc), Md);
      t.flags |= 8192;
    }
  }
  function Ul(t, e) {
    (e !== null && (t.flags |= 4), t.flags & 16384 && ((e = t.tag !== 22 ? To() : 536870912), (t.lanes |= e), (oo |= e)));
  }
  function os(t, e) {
    if (!Mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var i = null; e !== null; ) (e.alternate !== null && (i = e), (e = e.sibling));
          i === null ? (t.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = t.tail;
          for (var r = null; i !== null; ) (i.alternate !== null && (r = i), (i = i.sibling));
          r === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (r.sibling = null);
      }
  }
  function ue(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      i = 0,
      r = 0;
    if (e) for (var l = t.child; l !== null; ) ((i |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 65011712), (r |= l.flags & 65011712), (l.return = t), (l = l.sibling));
    else for (l = t.child; l !== null; ) ((i |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = t), (l = l.sibling));
    return ((t.subtreeFlags |= r), (t.childLanes = i), e);
  }
  function ly(t, e, i) {
    var r = e.pendingProps;
    switch ((dt(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ue(e), null);
      case 1:
        return (ue(e), null);
      case 3:
        return (
          (i = e.stateNode),
          (r = null),
          t !== null && (r = t.memoizedState.cache),
          e.memoizedState.cache !== r && (e.flags |= 2048),
          Zn(ye),
          Gt(),
          i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
          (t === null || t.child === null) && (fr(e) ? Di(e) : t === null || (t.memoizedState.isDehydrated && (e.flags & 256) === 0) || ((e.flags |= 1024), _l())),
          ue(e),
          null
        );
      case 26:
        return (
          (i = e.memoizedState),
          t === null
            ? (Di(e), i !== null ? (ue(e), Yh(e, i)) : (ue(e), (e.flags &= -16777217)))
            : i
              ? i !== t.memoizedState
                ? (Di(e), ue(e), Yh(e, i))
                : (ue(e), (e.flags &= -16777217))
              : (t.memoizedProps !== r && Di(e), ue(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Ue(e), (i = rt.current));
        var l = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== r && Di(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(h(166));
            return (ue(e), null);
          }
          ((t = ct.current), fr(e) ? vl(e) : ((t = Ym(l, r, i)), (e.stateNode = t), Di(e)));
        }
        return (ue(e), null);
      case 5:
        if ((Ue(e), (i = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== r && Di(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(h(166));
            return (ue(e), null);
          }
          if (((t = ct.current), fr(e))) vl(e);
          else {
            switch (((l = tu(rt.current)), t)) {
              case 1:
                t = l.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                t = l.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    t = l.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    t = l.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                    break;
                  case "script":
                    ((t = l.createElement("div")), (t.innerHTML = "<script><\/script>"), (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t = typeof r.is == "string" ? l.createElement("select", { is: r.is }) : l.createElement("select")), r.multiple ? (t.multiple = !0) : r.size && (t.size = r.size));
                    break;
                  default:
                    t = typeof r.is == "string" ? l.createElement(i, { is: r.is }) : l.createElement(i);
                }
            }
            ((t[we] = e), (t[Ne] = r));
            t: for (l = e.child; l !== null; ) {
              if (l.tag === 5 || l.tag === 6) t.appendChild(l.stateNode);
              else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                ((l.child.return = l), (l = l.child));
                continue;
              }
              if (l === e) break t;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === e) break t;
                l = l.return;
              }
              ((l.sibling.return = l.return), (l = l.sibling));
            }
            e.stateNode = t;
            t: switch ((ze(t, i, r), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!r.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Di(e);
          }
        }
        return (ue(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== r && Di(e);
        else {
          if (typeof r != "string" && e.stateNode === null) throw Error(h(166));
          if (((t = rt.current), fr(e))) {
            if (((t = e.stateNode), (i = e.memoizedProps), (r = null), (l = vt), l !== null))
              switch (l.tag) {
                case 27:
                case 5:
                  r = l.memoizedProps;
              }
            ((t[we] = e), (t = !!(t.nodeValue === i || (r !== null && r.suppressHydrationWarning === !0) || Hm(t.nodeValue, i))), t || $e(e));
          } else ((t = tu(t).createTextNode(r)), (t[we] = e), (e.stateNode = t));
        }
        return (ue(e), null);
      case 13:
        if (((r = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((l = fr(e)), r !== null && r.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(h(318));
              if (((l = e.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
              l[we] = e;
            } else (ya(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (ue(e), (l = !1));
          } else ((l = _l()), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), (l = !0));
          if (!l) return e.flags & 256 ? (zi(e), e) : (zi(e), null);
        }
        if ((zi(e), (e.flags & 128) !== 0)) return ((e.lanes = i), e);
        if (((i = r !== null), (t = t !== null && t.memoizedState !== null), i)) {
          ((r = e.child), (l = null), r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (l = r.alternate.memoizedState.cachePool.pool));
          var u = null;
          (r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool), u !== l && (r.flags |= 2048));
        }
        return (i !== t && i && (e.child.flags |= 8192), Ul(e, e.updateQueue), ue(e), null);
      case 4:
        return (Gt(), t === null && gf(e.stateNode.containerInfo), ue(e), null);
      case 10:
        return (Zn(e.type), ue(e), null);
      case 19:
        if ((lt(_e), (l = e.memoizedState), l === null)) return (ue(e), null);
        if (((r = (e.flags & 128) !== 0), (u = l.rendering), u === null))
          if (r) os(l, !1);
          else {
            if (de !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = Nl(t)), u !== null)) {
                  for (e.flags |= 128, os(l, !1), t = u.updateQueue, e.updateQueue = t, Ul(e, t), e.subtreeFlags = 0, t = i, i = e.child; i !== null; ) (Vo(i, t), (i = i.sibling));
                  return (st(_e, (_e.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null && Qe() > ql && ((e.flags |= 128), (r = !0), os(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = Nl(u)), t !== null)) {
              if (((e.flags |= 128), (r = !0), (t = t.updateQueue), (e.updateQueue = t), Ul(e, t), os(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Mt)) return (ue(e), null);
            } else 2 * Qe() - l.renderingStartTime > ql && i !== 536870912 && ((e.flags |= 128), (r = !0), os(l, !1), (e.lanes = 4194304));
          l.isBackwards ? ((u.sibling = e.child), (e.child = u)) : ((t = l.last), t !== null ? (t.sibling = u) : (e.child = u), (l.last = u));
        }
        return l.tail !== null ? ((e = l.tail), (l.rendering = e), (l.tail = e.sibling), (l.renderingStartTime = Qe()), (e.sibling = null), (t = _e.current), st(_e, r ? (t & 1) | 2 : t & 1), e) : (ue(e), null);
      case 22:
      case 23:
        return (
          zi(e),
          vc(),
          (r = e.memoizedState !== null),
          t !== null ? (t.memoizedState !== null) !== r && (e.flags |= 8192) : r && (e.flags |= 8192),
          r ? (i & 536870912) !== 0 && (e.flags & 128) === 0 && (ue(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ue(e),
          (i = e.updateQueue),
          i !== null && Ul(e, i.retryQueue),
          (i = null),
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
          (r = null),
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool),
          r !== i && (e.flags |= 2048),
          t !== null && lt(pr),
          null
        );
      case 24:
        return ((i = null), t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Zn(ye), ue(e), null);
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, e.tag));
  }
  function uy(t, e) {
    switch ((dt(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (Zn(ye), Gt(), (t = e.flags), (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 26:
      case 27:
      case 5:
        return (Ue(e), null);
      case 13:
        if ((zi(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(h(340));
          ya();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (lt(_e), null);
      case 4:
        return (Gt(), null);
      case 10:
        return (Zn(e.type), null);
      case 22:
      case 23:
        return (zi(e), vc(), t !== null && lt(pr), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 24:
        return (Zn(ye), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xh(t, e) {
    switch ((dt(e), e.tag)) {
      case 3:
        (Zn(ye), Gt());
        break;
      case 26:
      case 27:
      case 5:
        Ue(e);
        break;
      case 4:
        Gt();
        break;
      case 13:
        zi(e);
        break;
      case 19:
        lt(_e);
        break;
      case 10:
        Zn(e.type);
        break;
      case 22:
      case 23:
        (zi(e), vc(), t !== null && lt(pr));
        break;
      case 24:
        Zn(ye);
    }
  }
  function ss(t, e) {
    try {
      var i = e.updateQueue,
        r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var l = r.next;
        i = l;
        do {
          if ((i.tag & t) === t) {
            r = void 0;
            var u = i.create,
              v = i.inst;
            ((r = u()), (v.destroy = r));
          }
          i = i.next;
        } while (i !== l);
      }
    } catch (w) {
      $t(e, e.return, w);
    }
  }
  function Ea(t, e, i) {
    try {
      var r = e.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & t) === t) {
            var v = r.inst,
              w = v.destroy;
            if (w !== void 0) {
              ((v.destroy = void 0), (l = e));
              var O = i,
                U = w;
              try {
                U();
              } catch (Q) {
                $t(l, O, Q);
              }
            }
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (Q) {
      $t(e, e.return, Q);
    }
  }
  function Ih(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var i = t.stateNode;
      try {
        Dd(e, i);
      } catch (r) {
        $t(t, t.return, r);
      }
    }
  }
  function Kh(t, e, i) {
    ((i.props = vr(t.type, t.memoizedProps)), (i.state = t.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (r) {
      $t(t, e, r);
    }
  }
  function ls(t, e) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof i == "function" ? (t.refCleanup = i(r)) : (i.current = r);
      }
    } catch (l) {
      $t(t, e, l);
    }
  }
  function ii(t, e) {
    var i = t.ref,
      r = t.refCleanup;
    if (i !== null)
      if (typeof r == "function")
        try {
          r();
        } catch (l) {
          $t(t, e, l);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          $t(t, e, l);
        }
      else i.current = null;
  }
  function Qh(t) {
    var e = t.type,
      i = t.memoizedProps,
      r = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && r.focus();
          break t;
        case "img":
          i.src ? (r.src = i.src) : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (l) {
      $t(t, t.return, l);
    }
  }
  function Vc(t, e, i) {
    try {
      var r = t.stateNode;
      (Ly(r, t.type, i, e), (r[Ne] = e));
    } catch (l) {
      $t(t, t.return, l);
    }
  }
  function Fh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && ja(t.type)) || t.tag === 4;
  }
  function Yc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if ((t.tag === 27 && ja(t.type)) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xc(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6)
      ((t = t.stateNode),
        e
          ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, e)
          : ((e = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i), e.appendChild(t), (i = i._reactRootContainer), i != null || e.onclick !== null || (e.onclick = $l)));
    else if (r !== 4 && (r === 27 && ja(t.type) && ((i = t.stateNode), (e = null)), (t = t.child), t !== null)) for (Xc(t, e, i), t = t.sibling; t !== null; ) (Xc(t, e, i), (t = t.sibling));
  }
  function Gl(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6) ((t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t));
    else if (r !== 4 && (r === 27 && ja(t.type) && (i = t.stateNode), (t = t.child), t !== null)) for (Gl(t, e, i), t = t.sibling; t !== null; ) (Gl(t, e, i), (t = t.sibling));
  }
  function Jh(t) {
    var e = t.stateNode,
      i = t.memoizedProps;
    try {
      for (var r = t.type, l = e.attributes; l.length; ) e.removeAttributeNode(l[0]);
      (ze(e, r, i), (e[we] = t), (e[Ne] = i));
    } catch (u) {
      $t(t, t.return, u);
    }
  }
  var Ni = !1,
    me = !1,
    Ic = !1,
    $h = typeof WeakSet == "function" ? WeakSet : Set,
    Ee = null;
  function cy(t, e) {
    if (((t = t.containerInfo), (_f = ou), (t = ar(t)), rr(t))) {
      if ("selectionStart" in t) var i = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          i = ((i = t.ownerDocument) && i.defaultView) || window;
          var r = i.getSelection && i.getSelection();
          if (r && r.rangeCount !== 0) {
            i = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              (i.nodeType, u.nodeType);
            } catch {
              i = null;
              break t;
            }
            var v = 0,
              w = -1,
              O = -1,
              U = 0,
              Q = 0,
              tt = t,
              G = null;
            e: for (;;) {
              for (var q; tt !== i || (l !== 0 && tt.nodeType !== 3) || (w = v + l), tt !== u || (r !== 0 && tt.nodeType !== 3) || (O = v + r), tt.nodeType === 3 && (v += tt.nodeValue.length), (q = tt.firstChild) !== null; )
                ((G = tt), (tt = q));
              for (;;) {
                if (tt === t) break e;
                if ((G === i && ++U === l && (w = v), G === u && ++Q === r && (O = v), (q = tt.nextSibling) !== null)) break;
                ((tt = G), (G = tt.parentNode));
              }
              tt = q;
            }
            i = w === -1 || O === -1 ? null : { start: w, end: O };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (xf = { focusedElem: t, selectionRange: i }, ou = !1, Ee = e; Ee !== null; )
      if (((e = Ee), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)) ((t.return = e), (Ee = t));
      else
        for (; Ee !== null; ) {
          switch (((e = Ee), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0), (i = e), (l = u.memoizedProps), (u = u.memoizedState), (r = i.stateNode));
                try {
                  var Ct = vr(i.type, l, i.elementType === i.type);
                  ((t = r.getSnapshotBeforeUpdate(Ct, u)), (r.__reactInternalSnapshotBeforeUpdate = t));
                } catch (Et) {
                  $t(i, i.return, Et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (i = t.nodeType), i === 9)) Sf(t);
                else if (i === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(h(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Ee = t));
            break;
          }
          Ee = e.return;
        }
  }
  function tm(t, e, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Aa(t, i), r & 4 && ss(5, i));
        break;
      case 1:
        if ((Aa(t, i), r & 4))
          if (((t = i.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (v) {
              $t(i, i.return, v);
            }
          else {
            var l = vr(i.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              $t(i, i.return, v);
            }
          }
        (r & 64 && Ih(i), r & 512 && ls(i, i.return));
        break;
      case 3:
        if ((Aa(t, i), r & 64 && ((t = i.updateQueue), t !== null))) {
          if (((e = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                e = i.child.stateNode;
                break;
              case 1:
                e = i.child.stateNode;
            }
          try {
            Dd(t, e);
          } catch (v) {
            $t(i, i.return, v);
          }
        }
        break;
      case 27:
        e === null && r & 4 && Jh(i);
      case 26:
      case 5:
        (Aa(t, i), e === null && r & 4 && Qh(i), r & 512 && ls(i, i.return));
        break;
      case 12:
        Aa(t, i);
        break;
      case 13:
        (Aa(t, i), r & 4 && im(t, i), r & 64 && ((t = i.memoizedState), t !== null && ((t = t.dehydrated), t !== null && ((i = _y.bind(null, i)), Py(t, i)))));
        break;
      case 22:
        if (((r = i.memoizedState !== null || Ni), !r)) {
          ((e = (e !== null && e.memoizedState !== null) || me), (l = Ni));
          var u = me;
          ((Ni = r), (me = e) && !u ? Ca(t, i, (i.subtreeFlags & 8772) !== 0) : Aa(t, i), (Ni = l), (me = u));
        }
        break;
      case 30:
        break;
      default:
        Aa(t, i);
    }
  }
  function em(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), em(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Mr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var oe = null,
    en = !1;
  function Pi(t, e, i) {
    for (i = i.child; i !== null; ) (nm(t, e, i), (i = i.sibling));
  }
  function nm(t, e, i) {
    if (De && typeof De.onCommitFiberUnmount == "function")
      try {
        De.onCommitFiberUnmount(fi, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (me || ii(i, e), Pi(t, e, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        me || ii(i, e);
        var r = oe,
          l = en;
        (ja(i.type) && ((oe = i.stateNode), (en = !1)), Pi(t, e, i), vs(i.stateNode), (oe = r), (en = l));
        break;
      case 5:
        me || ii(i, e);
      case 6:
        if (((r = oe), (l = en), (oe = null), Pi(t, e, i), (oe = r), (en = l), oe !== null))
          if (en)
            try {
              (oe.nodeType === 9 ? oe.body : oe.nodeName === "HTML" ? oe.ownerDocument.body : oe).removeChild(i.stateNode);
            } catch (u) {
              $t(i, e, u);
            }
          else
            try {
              oe.removeChild(i.stateNode);
            } catch (u) {
              $t(i, e, u);
            }
        break;
      case 18:
        oe !== null && (en ? ((t = oe), qm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), Ts(t)) : qm(oe, i.stateNode));
        break;
      case 4:
        ((r = oe), (l = en), (oe = i.stateNode.containerInfo), (en = !0), Pi(t, e, i), (oe = r), (en = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (me || Ea(2, i, e), me || Ea(4, i, e), Pi(t, e, i));
        break;
      case 1:
        (me || (ii(i, e), (r = i.stateNode), typeof r.componentWillUnmount == "function" && Kh(i, e, r)), Pi(t, e, i));
        break;
      case 21:
        Pi(t, e, i);
        break;
      case 22:
        ((me = (r = me) || i.memoizedState !== null), Pi(t, e, i), (me = r));
        break;
      default:
        Pi(t, e, i);
    }
  }
  function im(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null))))
      try {
        Ts(t);
      } catch (i) {
        $t(e, e.return, i);
      }
  }
  function fy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new $h()), e);
      case 22:
        return ((t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new $h()), e);
      default:
        throw Error(h(435, t.tag));
    }
  }
  function Kc(t, e) {
    var i = fy(t);
    e.forEach(function (r) {
      var l = xy.bind(null, t, r);
      i.has(r) || (i.add(r), r.then(l, l));
    });
  }
  function pn(t, e) {
    var i = e.deletions;
    if (i !== null)
      for (var r = 0; r < i.length; r++) {
        var l = i[r],
          u = t,
          v = e,
          w = v;
        t: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (ja(w.type)) {
                ((oe = w.stateNode), (en = !1));
                break t;
              }
              break;
            case 5:
              ((oe = w.stateNode), (en = !1));
              break t;
            case 3:
            case 4:
              ((oe = w.stateNode.containerInfo), (en = !0));
              break t;
          }
          w = w.return;
        }
        if (oe === null) throw Error(h(160));
        (nm(u, v, l), (oe = null), (en = !1), (u = l.alternate), u !== null && (u.return = null), (l.return = null));
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) (am(e, t), (e = e.sibling));
  }
  var Un = null;
  function am(t, e) {
    var i = t.alternate,
      r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (pn(e, t), gn(t), r & 4 && (Ea(3, t, t.return), ss(3, t), Ea(5, t, t.return)));
        break;
      case 1:
        (pn(e, t),
          gn(t),
          r & 512 && (me || i === null || ii(i, i.return)),
          r & 64 && Ni && ((t = t.updateQueue), t !== null && ((r = t.callbacks), r !== null && ((i = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = i === null ? r : i.concat(r))))));
        break;
      case 26:
        var l = Un;
        if ((pn(e, t), gn(t), r & 512 && (me || i === null || ii(i, i.return)), r & 4)) {
          var u = i !== null ? i.memoizedState : null;
          if (((r = t.memoizedState), i === null))
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  ((r = t.type), (i = t.memoizedProps), (l = l.ownerDocument || l));
                  e: switch (r) {
                    case "title":
                      ((u = l.getElementsByTagName("title")[0]),
                        (!u || u[Fi] || u[we] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && ((u = l.createElement(r)), l.head.insertBefore(u, l.querySelector("head > title"))),
                        ze(u, r, i),
                        (u[we] = t),
                        pe(u),
                        (r = u));
                      break t;
                    case "link":
                      var v = Jm("link", "href", l).get(r + (i.href || ""));
                      if (v) {
                        for (var w = 0; w < v.length; w++)
                          if (
                            ((u = v[w]),
                            u.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) &&
                              u.getAttribute("rel") === (i.rel == null ? null : i.rel) &&
                              u.getAttribute("title") === (i.title == null ? null : i.title) &&
                              u.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            v.splice(w, 1);
                            break e;
                          }
                      }
                      ((u = l.createElement(r)), ze(u, r, i), l.head.appendChild(u));
                      break;
                    case "meta":
                      if ((v = Jm("meta", "content", l).get(r + (i.content || "")))) {
                        for (w = 0; w < v.length; w++)
                          if (
                            ((u = v[w]),
                            u.getAttribute("content") === (i.content == null ? null : "" + i.content) &&
                              u.getAttribute("name") === (i.name == null ? null : i.name) &&
                              u.getAttribute("property") === (i.property == null ? null : i.property) &&
                              u.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) &&
                              u.getAttribute("charset") === (i.charSet == null ? null : i.charSet))
                          ) {
                            v.splice(w, 1);
                            break e;
                          }
                      }
                      ((u = l.createElement(r)), ze(u, r, i), l.head.appendChild(u));
                      break;
                    default:
                      throw Error(h(468, r));
                  }
                  ((u[we] = t), pe(u), (r = u));
                }
                t.stateNode = r;
              } else $m(l, t.type, t.stateNode);
            else t.stateNode = Fm(l, r, t.memoizedProps);
          else
            u !== r
              ? (u === null ? i.stateNode !== null && ((i = i.stateNode), i.parentNode.removeChild(i)) : u.count--, r === null ? $m(l, t.type, t.stateNode) : Fm(l, r, t.memoizedProps))
              : r === null && t.stateNode !== null && Vc(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        (pn(e, t), gn(t), r & 512 && (me || i === null || ii(i, i.return)), i !== null && r & 4 && Vc(t, t.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if ((pn(e, t), gn(t), r & 512 && (me || i === null || ii(i, i.return)), t.flags & 32)) {
          l = t.stateNode;
          try {
            Sn(l, "");
          } catch (q) {
            $t(t, t.return, q);
          }
        }
        (r & 4 && t.stateNode != null && ((l = t.memoizedProps), Vc(t, l, i !== null ? i.memoizedProps : l)), r & 1024 && (Ic = !0));
        break;
      case 6:
        if ((pn(e, t), gn(t), r & 4)) {
          if (t.stateNode === null) throw Error(h(162));
          ((r = t.memoizedProps), (i = t.stateNode));
          try {
            i.nodeValue = r;
          } catch (q) {
            $t(t, t.return, q);
          }
        }
        break;
      case 3:
        if (((iu = null), (l = Un), (Un = eu(e.containerInfo)), pn(e, t), (Un = l), gn(t), r & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            Ts(e.containerInfo);
          } catch (q) {
            $t(t, t.return, q);
          }
        Ic && ((Ic = !1), rm(t));
        break;
      case 4:
        ((r = Un), (Un = eu(t.stateNode.containerInfo)), pn(e, t), gn(t), (Un = r));
        break;
      case 12:
        (pn(e, t), gn(t));
        break;
      case 13:
        (pn(e, t), gn(t), t.child.flags & 8192 && (t.memoizedState !== null) != (i !== null && i.memoizedState !== null) && (ef = Qe()), r & 4 && ((r = t.updateQueue), r !== null && ((t.updateQueue = null), Kc(t, r))));
        break;
      case 22:
        l = t.memoizedState !== null;
        var O = i !== null && i.memoizedState !== null,
          U = Ni,
          Q = me;
        if (((Ni = U || l), (me = Q || O), pn(e, t), (me = Q), (Ni = U), gn(t), r & 8192))
          t: for (e = t.stateNode, e._visibility = l ? e._visibility & -2 : e._visibility | 1, l && (i === null || O || Ni || me || yr(t)), i = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (i === null) {
                O = i = e;
                try {
                  if (((u = O.stateNode), l)) ((v = u.style), typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : (v.display = "none"));
                  else {
                    w = O.stateNode;
                    var tt = O.memoizedProps.style,
                      G = tt != null && tt.hasOwnProperty("display") ? tt.display : null;
                    w.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (q) {
                  $t(O, O.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (i === null) {
                O = e;
                try {
                  O.stateNode.nodeValue = l ? "" : O.memoizedProps;
                } catch (q) {
                  $t(O, O.return, q);
                }
              }
            } else if (((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) && e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (i === e && (i = null), (e = e.return));
            }
            (i === e && (i = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        r & 4 && ((r = t.updateQueue), r !== null && ((i = r.retryQueue), i !== null && ((r.retryQueue = null), Kc(t, i))));
        break;
      case 19:
        (pn(e, t), gn(t), r & 4 && ((r = t.updateQueue), r !== null && ((t.updateQueue = null), Kc(t, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (pn(e, t), gn(t));
    }
  }
  function gn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var i, r = t.return; r !== null; ) {
          if (Fh(r)) {
            i = r;
            break;
          }
          r = r.return;
        }
        if (i == null) throw Error(h(160));
        switch (i.tag) {
          case 27:
            var l = i.stateNode,
              u = Yc(t);
            Gl(t, u, l);
            break;
          case 5:
            var v = i.stateNode;
            i.flags & 32 && (Sn(v, ""), (i.flags &= -33));
            var w = Yc(t);
            Gl(t, w, v);
            break;
          case 3:
          case 4:
            var O = i.stateNode.containerInfo,
              U = Yc(t);
            Xc(t, U, O);
            break;
          default:
            throw Error(h(161));
        }
      } catch (Q) {
        $t(t, t.return, Q);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function rm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (rm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function Aa(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) (tm(t, e.alternate, e), (e = e.sibling));
  }
  function yr(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ea(4, e, e.return), yr(e));
          break;
        case 1:
          ii(e, e.return);
          var i = e.stateNode;
          (typeof i.componentWillUnmount == "function" && Kh(e, e.return, i), yr(e));
          break;
        case 27:
          vs(e.stateNode);
        case 26:
        case 5:
          (ii(e, e.return), yr(e));
          break;
        case 22:
          e.memoizedState === null && yr(e);
          break;
        case 30:
          yr(e);
          break;
        default:
          yr(e);
      }
      t = t.sibling;
    }
  }
  function Ca(t, e, i) {
    for (i = i && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate,
        l = t,
        u = e,
        v = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Ca(l, u, i), ss(4, u));
          break;
        case 1:
          if ((Ca(l, u, i), (r = u), (l = r.stateNode), typeof l.componentDidMount == "function"))
            try {
              l.componentDidMount();
            } catch (U) {
              $t(r, r.return, U);
            }
          if (((r = u), (l = r.updateQueue), l !== null)) {
            var w = r.stateNode;
            try {
              var O = l.shared.hiddenCallbacks;
              if (O !== null) for (l.shared.hiddenCallbacks = null, l = 0; l < O.length; l++) jd(O[l], w);
            } catch (U) {
              $t(r, r.return, U);
            }
          }
          (i && v & 64 && Ih(u), ls(u, u.return));
          break;
        case 27:
          Jh(u);
        case 26:
        case 5:
          (Ca(l, u, i), i && r === null && v & 4 && Qh(u), ls(u, u.return));
          break;
        case 12:
          Ca(l, u, i);
          break;
        case 13:
          (Ca(l, u, i), i && v & 4 && im(l, u));
          break;
        case 22:
          (u.memoizedState === null && Ca(l, u, i), ls(u, u.return));
          break;
        case 30:
          break;
        default:
          Ca(l, u, i);
      }
      e = e.sibling;
    }
  }
  function Qc(t, e) {
    var i = null;
    (t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
      t !== i && (t != null && t.refCount++, i != null && Xo(i)));
  }
  function Fc(t, e) {
    ((t = null), e.alternate !== null && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache), e !== t && (e.refCount++, t != null && Xo(t)));
  }
  function ai(t, e, i, r) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (om(t, e, i, r), (e = e.sibling));
  }
  function om(t, e, i, r) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ai(t, e, i, r), l & 2048 && ss(9, e));
        break;
      case 1:
        ai(t, e, i, r);
        break;
      case 3:
        (ai(t, e, i, r), l & 2048 && ((t = null), e.alternate !== null && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache), e !== t && (e.refCount++, t != null && Xo(t))));
        break;
      case 12:
        if (l & 2048) {
          (ai(t, e, i, r), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              v = u.id,
              w = u.onPostCommit;
            typeof w == "function" && w(v, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (O) {
            $t(e, e.return, O);
          }
        } else ai(t, e, i, r);
        break;
      case 13:
        ai(t, e, i, r);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (v = e.alternate),
          e.memoizedState !== null ? (u._visibility & 2 ? ai(t, e, i, r) : us(t, e)) : u._visibility & 2 ? ai(t, e, i, r) : ((u._visibility |= 2), io(t, e, i, r, (e.subtreeFlags & 10256) !== 0)),
          l & 2048 && Qc(v, e));
        break;
      case 24:
        (ai(t, e, i, r), l & 2048 && Fc(e.alternate, e));
        break;
      default:
        ai(t, e, i, r);
    }
  }
  function io(t, e, i, r, l) {
    for (l = l && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        v = e,
        w = i,
        O = r,
        U = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (io(u, v, w, O, l), ss(8, v));
          break;
        case 23:
          break;
        case 22:
          var Q = v.stateNode;
          (v.memoizedState !== null ? (Q._visibility & 2 ? io(u, v, w, O, l) : us(u, v)) : ((Q._visibility |= 2), io(u, v, w, O, l)), l && U & 2048 && Qc(v.alternate, v));
          break;
        case 24:
          (io(u, v, w, O, l), l && U & 2048 && Fc(v.alternate, v));
          break;
        default:
          io(u, v, w, O, l);
      }
      e = e.sibling;
    }
  }
  function us(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var i = t,
          r = e,
          l = r.flags;
        switch (r.tag) {
          case 22:
            (us(i, r), l & 2048 && Qc(r.alternate, r));
            break;
          case 24:
            (us(i, r), l & 2048 && Fc(r.alternate, r));
            break;
          default:
            us(i, r);
        }
        e = e.sibling;
      }
  }
  var cs = 8192;
  function ao(t) {
    if (t.subtreeFlags & cs) for (t = t.child; t !== null; ) (sm(t), (t = t.sibling));
  }
  function sm(t) {
    switch (t.tag) {
      case 26:
        (ao(t), t.flags & cs && t.memoizedState !== null && Qy(Un, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ao(t);
        break;
      case 3:
      case 4:
        var e = Un;
        ((Un = eu(t.stateNode.containerInfo)), ao(t), (Un = e));
        break;
      case 22:
        t.memoizedState === null && ((e = t.alternate), e !== null && e.memoizedState !== null ? ((e = cs), (cs = 16777216), ao(t), (cs = e)) : ao(t));
        break;
      default:
        ao(t);
    }
  }
  function lm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function fs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          ((Ee = r), cm(r, t));
        }
      lm(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (um(t), (t = t.sibling));
  }
  function um(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (fs(t), t.flags & 2048 && Ea(9, t, t.return));
        break;
      case 3:
        fs(t);
        break;
      case 12:
        fs(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? ((e._visibility &= -3), Wl(t)) : fs(t);
        break;
      default:
        fs(t);
    }
  }
  function Wl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          ((Ee = r), cm(r, t));
        }
      lm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ea(8, e, e.return), Wl(e));
          break;
        case 22:
          ((i = e.stateNode), i._visibility & 2 && ((i._visibility &= -3), Wl(e)));
          break;
        default:
          Wl(e);
      }
      t = t.sibling;
    }
  }
  function cm(t, e) {
    for (; Ee !== null; ) {
      var i = Ee;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ea(8, i, e);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Xo(i.memoizedState.cache);
      }
      if (((r = i.child), r !== null)) ((r.return = i), (Ee = r));
      else
        t: for (i = t; Ee !== null; ) {
          r = Ee;
          var l = r.sibling,
            u = r.return;
          if ((em(r), r === i)) {
            Ee = null;
            break t;
          }
          if (l !== null) {
            ((l.return = u), (Ee = l));
            break t;
          }
          Ee = u;
        }
    }
  }
  var dy = {
      getCacheForType: function (t) {
        var e = He(ye),
          i = e.data.get(t);
        return (i === void 0 && ((i = t()), e.data.set(t, i)), i);
      },
    },
    hy = typeof WeakMap == "function" ? WeakMap : Map,
    It = 0,
    ae = null,
    Zt = null,
    qt = 0,
    Kt = 0,
    vn = null,
    Ma = !1,
    ro = !1,
    Jc = !1,
    Bi = 0,
    de = 0,
    La = 0,
    _r = 0,
    $c = 0,
    On = 0,
    oo = 0,
    ds = null,
    nn = null,
    tf = !1,
    ef = 0,
    ql = 1 / 0,
    Vl = null,
    Oa = null,
    Re = 0,
    Ra = null,
    so = null,
    lo = 0,
    nf = 0,
    af = null,
    fm = null,
    hs = 0,
    rf = null;
  function yn() {
    if ((It & 2) !== 0 && qt !== 0) return qt & -qt;
    if (z.T !== null) {
      var t = Kr;
      return t !== 0 ? t : df();
    }
    return Ys();
  }
  function dm() {
    On === 0 && (On = (qt & 536870912) === 0 || Mt ? Ws() : 536870912);
    var t = Ln.current;
    return (t !== null && (t.flags |= 32), On);
  }
  function _n(t, e, i) {
    (((t === ae && (Kt === 2 || Kt === 9)) || t.cancelPendingCommit !== null) && (uo(t, 0), za(t, qt, On, !1)), Ki(t, i), ((It & 2) === 0 || t !== ae) && (t === ae && ((It & 2) === 0 && (_r |= i), de === 4 && za(t, qt, On, !1)), ri(t)));
  }
  function hm(t, e, i) {
    if ((It & 6) !== 0) throw Error(h(327));
    var r = (!i && (e & 124) === 0 && (e & t.expiredLanes) === 0) || jn(t, e),
      l = r ? gy(t, e) : lf(t, e, !0),
      u = r;
    do {
      if (l === 0) {
        ro && !r && za(t, e, 0, !1);
        break;
      } else {
        if (((i = t.current.alternate), u && !my(i))) {
          ((l = lf(t, e, !1)), (u = !1));
          continue;
        }
        if (l === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var v = 0;
          else ((v = t.pendingLanes & -536870913), (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            e = v;
            t: {
              var w = t;
              l = ds;
              var O = w.current.memoizedState.isDehydrated;
              if ((O && (uo(w, v).flags |= 256), (v = lf(w, v, !1)), v !== 2)) {
                if (Jc && !O) {
                  ((w.errorRecoveryDisabledLanes |= u), (_r |= u), (l = 4));
                  break t;
                }
                ((u = nn), (nn = l), u !== null && (nn === null ? (nn = u) : nn.push.apply(nn, u)));
              }
              l = v;
            }
            if (((u = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (uo(t, 0), za(t, e, 0, !0));
          break;
        }
        t: {
          switch (((r = t), (u = l), u)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              za(r, e, On, !Ma);
              break t;
            case 2:
              nn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((e & 62914560) === e && ((l = ef + 300 - Qe()), 10 < l)) {
            if ((za(r, e, On, !Ma), Ar(r, 0, !0) !== 0)) break t;
            r.timeoutHandle = Gm(mm.bind(null, r, i, nn, Vl, tf, e, On, _r, oo, Ma, u, 2, -0, 0), l);
            break t;
          }
          mm(r, i, nn, Vl, tf, e, On, _r, oo, Ma, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ri(t);
  }
  function mm(t, e, i, r, l, u, v, w, O, U, Q, tt, G, q) {
    if (((t.timeoutHandle = -1), (tt = e.subtreeFlags), (tt & 8192 || (tt & 16785408) === 16785408) && ((xs = { stylesheets: null, count: 0, unsuspend: Ky }), sm(e), (tt = Fy()), tt !== null))) {
      ((t.cancelPendingCommit = tt(bm.bind(null, t, e, u, i, r, l, v, w, O, Q, 1, G, q))), za(t, u, v, !U));
      return;
    }
    bm(t, e, u, i, r, l, v, w, O);
  }
  function my(t) {
    for (var e = t; ; ) {
      var i = e.tag;
      if ((i === 0 || i === 11 || i === 15) && e.flags & 16384 && ((i = e.updateQueue), i !== null && ((i = i.stores), i !== null)))
        for (var r = 0; r < i.length; r++) {
          var l = i[r],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = e.child), e.subtreeFlags & 16384 && i !== null)) ((i.return = e), (e = i));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function za(t, e, i, r) {
    ((e &= ~$c), (e &= ~_r), (t.suspendedLanes |= e), (t.pingedLanes &= ~e), r && (t.warmLanes |= e), (r = t.expirationTimes));
    for (var l = e; 0 < l; ) {
      var u = 31 - Ge(l),
        v = 1 << u;
      ((r[u] = -1), (l &= ~v));
    }
    i !== 0 && qs(t, i, e);
  }
  function Yl() {
    return (It & 6) === 0 ? (ms(0), !1) : !0;
  }
  function of() {
    if (Zt !== null) {
      if (Kt === 0) var t = Zt.return;
      else ((t = Zt), (Hn = Mn = null), wc(t), (eo = null), (as = 0), (t = Zt));
      for (; t !== null; ) (Xh(t.alternate, t), (t = t.return));
      Zt = null;
    }
  }
  function uo(t, e) {
    var i = t.timeoutHandle;
    (i !== -1 && ((t.timeoutHandle = -1), Ry(i)),
      (i = t.cancelPendingCommit),
      i !== null && ((t.cancelPendingCommit = null), i()),
      of(),
      (ae = t),
      (Zt = i = Cn(t.current, null)),
      (qt = e),
      (Kt = 0),
      (vn = null),
      (Ma = !1),
      (ro = jn(t, e)),
      (Jc = !1),
      (oo = On = $c = _r = La = de = 0),
      (nn = ds = null),
      (tf = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= e; 0 < r; ) {
        var l = 31 - Ge(r),
          u = 1 << l;
        ((e |= t[l]), (r &= ~u));
      }
    return ((Bi = e), sr(), i);
  }
  function pm(t, e) {
    ((Dt = null),
      (z.H = zl),
      e === Ko || e === Sl ? ((e = Rd()), (Kt = 3)) : e === Md ? ((e = Rd()), (Kt = 4)) : (Kt = e === zh ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1),
      (vn = e),
      Zt === null && ((de = 1), Bl(t, Ye(e, t.current))));
  }
  function gm() {
    var t = z.H;
    return ((z.H = zl), t === null ? zl : t);
  }
  function vm() {
    var t = z.A;
    return ((z.A = dy), t);
  }
  function sf() {
    ((de = 4), Ma || ((qt & 4194048) !== qt && Ln.current !== null) || (ro = !0), ((La & 134217727) === 0 && (_r & 134217727) === 0) || ae === null || za(ae, qt, On, !1));
  }
  function lf(t, e, i) {
    var r = It;
    It |= 2;
    var l = gm(),
      u = vm();
    ((ae !== t || qt !== e) && ((Vl = null), uo(t, e)), (e = !1));
    var v = de;
    t: do
      try {
        if (Kt !== 0 && Zt !== null) {
          var w = Zt,
            O = vn;
          switch (Kt) {
            case 8:
              (of(), (v = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ln.current === null && (e = !0);
              var U = Kt;
              if (((Kt = 0), (vn = null), co(t, w, O, U), i && ro)) {
                v = 0;
                break t;
              }
              break;
            default:
              ((U = Kt), (Kt = 0), (vn = null), co(t, w, O, U));
          }
        }
        (py(), (v = de));
        break;
      } catch (Q) {
        pm(t, Q);
      }
    while (!0);
    return (e && t.shellSuspendCounter++, (Hn = Mn = null), (It = r), (z.H = l), (z.A = u), Zt === null && ((ae = null), (qt = 0), sr()), v);
  }
  function py() {
    for (; Zt !== null; ) ym(Zt);
  }
  function gy(t, e) {
    var i = It;
    It |= 2;
    var r = gm(),
      l = vm();
    ae !== t || qt !== e ? ((Vl = null), (ql = Qe() + 500), uo(t, e)) : (ro = jn(t, e));
    t: do
      try {
        if (Kt !== 0 && Zt !== null) {
          e = Zt;
          var u = vn;
          e: switch (Kt) {
            case 1:
              ((Kt = 0), (vn = null), co(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Ld(u)) {
                ((Kt = 0), (vn = null), _m(e));
                break;
              }
              ((e = function () {
                ((Kt !== 2 && Kt !== 9) || ae !== t || (Kt = 7), ri(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              Kt = 7;
              break t;
            case 4:
              Kt = 5;
              break t;
            case 7:
              Ld(u) ? ((Kt = 0), (vn = null), _m(e)) : ((Kt = 0), (vn = null), co(t, e, u, 7));
              break;
            case 5:
              var v = null;
              switch (Zt.tag) {
                case 26:
                  v = Zt.memoizedState;
                case 5:
                case 27:
                  var w = Zt;
                  if (!v || tp(v)) {
                    ((Kt = 0), (vn = null));
                    var O = w.sibling;
                    if (O !== null) Zt = O;
                    else {
                      var U = w.return;
                      U !== null ? ((Zt = U), Xl(U)) : (Zt = null);
                    }
                    break e;
                  }
              }
              ((Kt = 0), (vn = null), co(t, e, u, 5));
              break;
            case 6:
              ((Kt = 0), (vn = null), co(t, e, u, 6));
              break;
            case 8:
              (of(), (de = 6));
              break t;
            default:
              throw Error(h(462));
          }
        }
        vy();
        break;
      } catch (Q) {
        pm(t, Q);
      }
    while (!0);
    return ((Hn = Mn = null), (z.H = r), (z.A = l), (It = i), Zt !== null ? 0 : ((ae = null), (qt = 0), sr(), de));
  }
  function vy() {
    for (; Zt !== null && !ci(); ) ym(Zt);
  }
  function ym(t) {
    var e = Vh(t.alternate, t, Bi);
    ((t.memoizedProps = t.pendingProps), e === null ? Xl(t) : (Zt = e));
  }
  function _m(t) {
    var e = t,
      i = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Hh(i, e, e.pendingProps, e.type, void 0, qt);
        break;
      case 11:
        e = Hh(i, e, e.pendingProps, e.type.render, e.ref, qt);
        break;
      case 5:
        wc(e);
      default:
        (Xh(i, e), (e = Zt = Vo(e, Bi)), (e = Vh(i, e, Bi)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Xl(t) : (Zt = e));
  }
  function co(t, e, i, r) {
    ((Hn = Mn = null), wc(e), (eo = null), (as = 0));
    var l = e.return;
    try {
      if (oy(t, l, e, i, qt)) {
        ((de = 1), Bl(t, Ye(i, t.current)), (Zt = null));
        return;
      }
    } catch (u) {
      if (l !== null) throw ((Zt = l), u);
      ((de = 1), Bl(t, Ye(i, t.current)), (Zt = null));
      return;
    }
    e.flags & 32768
      ? (Mt || r === 1 ? (t = !0) : ro || (qt & 536870912) !== 0 ? (t = !1) : ((Ma = t = !0), (r === 2 || r === 9 || r === 3 || r === 6) && ((r = Ln.current), r !== null && r.tag === 13 && (r.flags |= 16384))), xm(e, t))
      : Xl(e);
  }
  function Xl(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        xm(e, Ma);
        return;
      }
      t = e.return;
      var i = ly(e.alternate, e, Bi);
      if (i !== null) {
        Zt = i;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Zt = e;
        return;
      }
      Zt = e = t;
    } while (e !== null);
    de === 0 && (de = 5);
  }
  function xm(t, e) {
    do {
      var i = uy(t.alternate, t);
      if (i !== null) {
        ((i.flags &= 32767), (Zt = i));
        return;
      }
      if (((i = t.return), i !== null && ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)), !e && ((t = t.sibling), t !== null))) {
        Zt = t;
        return;
      }
      Zt = t = i;
    } while (t !== null);
    ((de = 6), (Zt = null));
  }
  function bm(t, e, i, r, l, u, v, w, O) {
    t.cancelPendingCommit = null;
    do Il();
    while (Re !== 0);
    if ((It & 6) !== 0) throw Error(h(327));
    if (e !== null) {
      if (e === t.current) throw Error(h(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= mn),
        Wu(t, i, u, v, w, O),
        t === ae && ((Zt = ae = null), (qt = 0)),
        (so = e),
        (Ra = t),
        (lo = i),
        (nf = u),
        (af = l),
        (fm = r),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            by(Xi, function () {
              return (Em(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (r = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = z.T), (z.T = null), (l = et.p), (et.p = 2), (v = It), (It |= 4));
        try {
          cy(t, e, i);
        } finally {
          ((It = v), (et.p = l), (z.T = r));
        }
      }
      ((Re = 1), wm(), Sm(), km());
    }
  }
  function wm() {
    if (Re === 1) {
      Re = 0;
      var t = Ra,
        e = so,
        i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        ((i = z.T), (z.T = null));
        var r = et.p;
        et.p = 2;
        var l = It;
        It |= 4;
        try {
          am(e, t);
          var u = xf,
            v = ar(t.containerInfo),
            w = u.focusedElem,
            O = u.selectionRange;
          if (v !== w && w && w.ownerDocument && Ur(w.ownerDocument.documentElement, w)) {
            if (O !== null && rr(w)) {
              var U = O.start,
                Q = O.end;
              if ((Q === void 0 && (Q = U), "selectionStart" in w)) ((w.selectionStart = U), (w.selectionEnd = Math.min(Q, w.value.length)));
              else {
                var tt = w.ownerDocument || document,
                  G = (tt && tt.defaultView) || window;
                if (G.getSelection) {
                  var q = G.getSelection(),
                    Ct = w.textContent.length,
                    Et = Math.min(O.start, Ct),
                    Jt = O.end === void 0 ? Et : Math.min(O.end, Ct);
                  !q.extend && Et > Jt && ((v = Jt), (Jt = Et), (Et = v));
                  var N = Wo(w, Et),
                    j = Wo(w, Jt);
                  if (N && j && (q.rangeCount !== 1 || q.anchorNode !== N.node || q.anchorOffset !== N.offset || q.focusNode !== j.node || q.focusOffset !== j.offset)) {
                    var Z = tt.createRange();
                    (Z.setStart(N.node, N.offset), q.removeAllRanges(), Et > Jt ? (q.addRange(Z), q.extend(j.node, j.offset)) : (Z.setEnd(j.node, j.offset), q.addRange(Z)));
                  }
                }
              }
            }
            for (tt = [], q = w; (q = q.parentNode); ) q.nodeType === 1 && tt.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < tt.length; w++) {
              var J = tt[w];
              ((J.element.scrollLeft = J.left), (J.element.scrollTop = J.top));
            }
          }
          ((ou = !!_f), (xf = _f = null));
        } finally {
          ((It = l), (et.p = r), (z.T = i));
        }
      }
      ((t.current = e), (Re = 2));
    }
  }
  function Sm() {
    if (Re === 2) {
      Re = 0;
      var t = Ra,
        e = so,
        i = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || i) {
        ((i = z.T), (z.T = null));
        var r = et.p;
        et.p = 2;
        var l = It;
        It |= 4;
        try {
          tm(t, e.alternate, e);
        } finally {
          ((It = l), (et.p = r), (z.T = i));
        }
      }
      Re = 3;
    }
  }
  function km() {
    if (Re === 4 || Re === 3) {
      ((Re = 0), Bs());
      var t = Ra,
        e = so,
        i = lo,
        r = fm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (Re = 5) : ((Re = 0), (so = Ra = null), Tm(t, t.pendingLanes));
      var l = t.pendingLanes;
      if ((l === 0 && (Oa = null), Ao(i), (e = e.stateNode), De && typeof De.onCommitFiberRoot == "function"))
        try {
          De.onCommitFiberRoot(fi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((e = z.T), (l = et.p), (et.p = 2), (z.T = null));
        try {
          for (var u = t.onRecoverableError, v = 0; v < r.length; v++) {
            var w = r[v];
            u(w.value, { componentStack: w.stack });
          }
        } finally {
          ((z.T = e), (et.p = l));
        }
      }
      ((lo & 3) !== 0 && Il(), ri(t), (l = t.pendingLanes), (i & 4194090) !== 0 && (l & 42) !== 0 ? (t === rf ? hs++ : ((hs = 0), (rf = t))) : (hs = 0), ms(0));
    }
  }
  function Tm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), Xo(e)));
  }
  function Il(t) {
    return (wm(), Sm(), km(), Em());
  }
  function Em() {
    if (Re !== 5) return !1;
    var t = Ra,
      e = nf;
    nf = 0;
    var i = Ao(lo),
      r = z.T,
      l = et.p;
    try {
      ((et.p = 32 > i ? 32 : i), (z.T = null), (i = af), (af = null));
      var u = Ra,
        v = lo;
      if (((Re = 0), (so = Ra = null), (lo = 0), (It & 6) !== 0)) throw Error(h(331));
      var w = It;
      if (((It |= 4), um(u.current), om(u, u.current, v, i), (It = w), ms(0, !1), De && typeof De.onPostCommitFiberRoot == "function"))
        try {
          De.onPostCommitFiberRoot(fi, u);
        } catch {}
      return !0;
    } finally {
      ((et.p = l), (z.T = r), Tm(t, e));
    }
  }
  function Am(t, e, i) {
    ((e = Ye(i, e)), (e = Nc(t.stateNode, e, 2)), (t = wa(t, e, 2)), t !== null && (Ki(t, 2), ri(t)));
  }
  function $t(t, e, i) {
    if (t.tag === 3) Am(t, t, i);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Am(e, t, i);
          break;
        } else if (e.tag === 1) {
          var r = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (Oa === null || !Oa.has(r)))) {
            ((t = Ye(i, t)), (i = Oh(2)), (r = wa(e, i, 2)), r !== null && (Rh(i, r, e, t), Ki(r, 2), ri(r)));
            break;
          }
        }
        e = e.return;
      }
  }
  function uf(t, e, i) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new hy();
      var l = new Set();
      r.set(e, l);
    } else ((l = r.get(e)), l === void 0 && ((l = new Set()), r.set(e, l)));
    l.has(i) || ((Jc = !0), l.add(i), (t = yy.bind(null, t, e, i)), e.then(t, t));
  }
  function yy(t, e, i) {
    var r = t.pingCache;
    (r !== null && r.delete(e),
      (t.pingedLanes |= t.suspendedLanes & i),
      (t.warmLanes &= ~i),
      ae === t && (qt & i) === i && (de === 4 || (de === 3 && (qt & 62914560) === qt && 300 > Qe() - ef) ? (It & 2) === 0 && uo(t, 0) : ($c |= i), oo === qt && (oo = 0)),
      ri(t));
  }
  function Cm(t, e) {
    (e === 0 && (e = To()), (t = ga(t, e)), t !== null && (Ki(t, e), ri(t)));
  }
  function _y(t) {
    var e = t.memoizedState,
      i = 0;
    (e !== null && (i = e.retryLane), Cm(t, i));
  }
  function xy(t, e) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode,
          l = t.memoizedState;
        l !== null && (i = l.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (r !== null && r.delete(e), Cm(t, i));
  }
  function by(t, e) {
    return sn(t, e);
  }
  var Kl = null,
    fo = null,
    cf = !1,
    Ql = !1,
    ff = !1,
    xr = 0;
  function ri(t) {
    (t !== fo && t.next === null && (fo === null ? (Kl = fo = t) : (fo = fo.next = t)), (Ql = !0), cf || ((cf = !0), Sy()));
  }
  function ms(t, e) {
    if (!ff && Ql) {
      ff = !0;
      do
        for (var i = !1, r = Kl; r !== null; ) {
          if (t !== 0) {
            var l = r.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var v = r.suspendedLanes,
                w = r.pingedLanes;
              ((u = (1 << (31 - Ge(42 | t) + 1)) - 1), (u &= l & ~(v & ~w)), (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((i = !0), Rm(r, u));
          } else ((u = qt), (u = Ar(r, r === ae ? u : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1)), (u & 3) === 0 || jn(r, u) || ((i = !0), Rm(r, u)));
          r = r.next;
        }
      while (i);
      ff = !1;
    }
  }
  function wy() {
    Mm();
  }
  function Mm() {
    Ql = cf = !1;
    var t = 0;
    xr !== 0 && (Oy() && (t = xr), (xr = 0));
    for (var e = Qe(), i = null, r = Kl; r !== null; ) {
      var l = r.next,
        u = Lm(r, e);
      (u === 0 ? ((r.next = null), i === null ? (Kl = l) : (i.next = l), l === null && (fo = i)) : ((i = r), (t !== 0 || (u & 3) !== 0) && (Ql = !0)), (r = l));
    }
    ms(t);
  }
  function Lm(t, e) {
    for (var i = t.suspendedLanes, r = t.pingedLanes, l = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var v = 31 - Ge(u),
        w = 1 << v,
        O = l[v];
      (O === -1 ? ((w & i) === 0 || (w & r) !== 0) && (l[v] = Gu(w, e)) : O <= e && (t.expiredLanes |= w), (u &= ~w));
    }
    if (((e = ae), (i = qt), (i = Ar(t, t === e ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)), (r = t.callbackNode), i === 0 || (t === e && (Kt === 2 || Kt === 9)) || t.cancelPendingCommit !== null))
      return (r !== null && r !== null && bn(r), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((i & 3) === 0 || jn(t, i)) {
      if (((e = i & -i), e === t.callbackPriority)) return e;
      switch ((r !== null && bn(r), Ao(i))) {
        case 2:
        case 8:
          i = So;
          break;
        case 32:
          i = Xi;
          break;
        case 268435456:
          i = ko;
          break;
        default:
          i = Xi;
      }
      return ((r = Om.bind(null, t)), (i = sn(i, r)), (t.callbackPriority = e), (t.callbackNode = i), e);
    }
    return (r !== null && r !== null && bn(r), (t.callbackPriority = 2), (t.callbackNode = null), 2);
  }
  function Om(t, e) {
    if (Re !== 0 && Re !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var i = t.callbackNode;
    if (Il() && t.callbackNode !== i) return null;
    var r = qt;
    return ((r = Ar(t, t === ae ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)), r === 0 ? null : (hm(t, r, e), Lm(t, Qe()), t.callbackNode != null && t.callbackNode === i ? Om.bind(null, t) : null));
  }
  function Rm(t, e) {
    if (Il()) return null;
    hm(t, e, !0);
  }
  function Sy() {
    zy(function () {
      (It & 6) !== 0 ? sn(Hs, wy) : Mm();
    });
  }
  function df() {
    return (xr === 0 && (xr = Ws()), xr);
  }
  function zm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ia("" + t);
  }
  function jm(t, e) {
    var i = e.ownerDocument.createElement("input");
    return ((i.name = e.name), (i.value = e.value), t.id && i.setAttribute("form", t.id), e.parentNode.insertBefore(i, e), (t = new FormData(t)), i.parentNode.removeChild(i), t);
  }
  function ky(t, e, i, r, l) {
    if (e === "submit" && i && i.stateNode === l) {
      var u = zm((l[Ne] || null).action),
        v = r.submitter;
      v && ((e = (e = v[Ne] || null) ? zm(e.formAction) : v.getAttribute("formAction")), e !== null && ((u = e), (v = null)));
      var w = new $a("action", "action", null, r, l);
      t.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (xr !== 0) {
                  var O = v ? jm(l, v) : new FormData(l);
                  Oc(i, { pending: !0, data: O, method: l.method, action: u }, null, O);
                }
              } else typeof u == "function" && (w.preventDefault(), (O = v ? jm(l, v) : new FormData(l)), Oc(i, { pending: !0, data: O, method: l.method, action: u }, u, O));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var hf = 0; hf < Ai.length; hf++) {
    var mf = Ai[hf],
      Ty = mf.toLowerCase(),
      Ey = mf[0].toUpperCase() + mf.slice(1);
    hn(Ty, "on" + Ey);
  }
  (hn(ml, "onAnimationEnd"),
    hn(dn, "onAnimationIteration"),
    hn(or, "onAnimationStart"),
    hn("dblclick", "onDoubleClick"),
    hn("focusin", "onFocus"),
    hn("focusout", "onBlur"),
    hn(oc, "onTransitionRun"),
    hn(Vr, "onTransitionStart"),
    hn(sc, "onTransitionCancel"),
    hn(qo, "onTransitionEnd"),
    pi("onMouseEnter", ["mouseout", "mouseover"]),
    pi("onMouseLeave", ["mouseout", "mouseover"]),
    pi("onPointerEnter", ["pointerout", "pointerover"]),
    pi("onPointerLeave", ["pointerout", "pointerover"]),
    mi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    mi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    mi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    mi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    mi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    mi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
    Ay = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));
  function Dm(t, e) {
    e = (e & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var r = t[i],
        l = r.event;
      r = r.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var v = r.length - 1; 0 <= v; v--) {
            var w = r[v],
              O = w.instance,
              U = w.currentTarget;
            if (((w = w.listener), O !== u && l.isPropagationStopped())) break t;
            ((u = w), (l.currentTarget = U));
            try {
              u(l);
            } catch (Q) {
              Pl(Q);
            }
            ((l.currentTarget = null), (u = O));
          }
        else
          for (v = 0; v < r.length; v++) {
            if (((w = r[v]), (O = w.instance), (U = w.currentTarget), (w = w.listener), O !== u && l.isPropagationStopped())) break t;
            ((u = w), (l.currentTarget = U));
            try {
              u(l);
            } catch (Q) {
              Pl(Q);
            }
            ((l.currentTarget = null), (u = O));
          }
      }
    }
  }
  function Ut(t, e) {
    var i = e[Fe];
    i === void 0 && (i = e[Fe] = new Set());
    var r = t + "__bubble";
    i.has(r) || (Nm(e, t, 2, !1), i.add(r));
  }
  function pf(t, e, i) {
    var r = 0;
    (e && (r |= 4), Nm(i, t, r, e));
  }
  var Fl = "_reactListening" + Math.random().toString(36).slice(2);
  function gf(t) {
    if (!t[Fl]) {
      ((t[Fl] = !0),
        Is.forEach(function (i) {
          i !== "selectionchange" && (Ay.has(i) || pf(i, !1, t), pf(i, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fl] || ((e[Fl] = !0), pf("selectionchange", !1, e));
    }
  }
  function Nm(t, e, i, r) {
    switch (op(e)) {
      case 2:
        var l = t_;
        break;
      case 8:
        l = e_;
        break;
      default:
        l = Lf;
    }
    ((i = l.bind(null, e, i, t)),
      (l = void 0),
      !Ja || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (l = !0),
      r ? (l !== void 0 ? t.addEventListener(e, i, { capture: !0, passive: l }) : t.addEventListener(e, i, !0)) : l !== void 0 ? t.addEventListener(e, i, { passive: l }) : t.addEventListener(e, i, !1));
  }
  function vf(t, e, i, r, l) {
    var u = r;
    if ((e & 1) === 0 && (e & 2) === 0 && r !== null)
      t: for (;;) {
        if (r === null) return;
        var v = r.tag;
        if (v === 3 || v === 4) {
          var w = r.stateNode.containerInfo;
          if (w === l) break;
          if (v === 4)
            for (v = r.return; v !== null; ) {
              var O = v.tag;
              if ((O === 3 || O === 4) && v.stateNode.containerInfo === l) return;
              v = v.return;
            }
          for (; w !== null; ) {
            if (((v = In(w)), v === null)) return;
            if (((O = v.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              r = u = v;
              continue t;
            }
            w = w.parentNode;
          }
        }
        r = r.return;
      }
    ln(function () {
      var U = u,
        Q = aa(i),
        tt = [];
      t: {
        var G = pl.get(t);
        if (G !== void 0) {
          var q = $a,
            Ct = t;
          switch (t) {
            case "keypress":
              if (fe(i) === 0) break t;
            case "keydown":
            case "keyup":
              q = Ju;
              break;
            case "focusin":
              ((Ct = "focus"), (q = jo));
              break;
            case "focusout":
              ((Ct = "blur"), (q = jo));
              break;
            case "beforeblur":
            case "afterblur":
              q = jo;
              break;
            case "click":
              if (i.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = sa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = Xu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = tc;
              break;
            case ml:
            case dn:
            case or:
              q = Iu;
              break;
            case qo:
              q = ec;
              break;
            case "scroll":
            case "scrollend":
              q = Yu;
              break;
            case "wheel":
              q = rl;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = Do;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Po;
              break;
            case "toggle":
            case "beforetoggle":
              q = Si;
          }
          var Et = (e & 4) !== 0,
            Jt = !Et && (t === "scroll" || t === "scrollend"),
            N = Et ? (G !== null ? G + "Capture" : null) : G;
          Et = [];
          for (var j = U, Z; j !== null; ) {
            var J = j;
            if (((Z = J.stateNode), (J = J.tag), (J !== 5 && J !== 26 && J !== 27) || Z === null || N === null || ((J = Vt(j, N)), J != null && Et.push(gs(j, J, Z))), Jt)) break;
            j = j.return;
          }
          0 < Et.length && ((G = new q(G, Ct, null, i, Q)), tt.push({ event: G, listeners: Et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (((G = t === "mouseover" || t === "pointerover"), (q = t === "mouseout" || t === "pointerout"), G && i !== Fa && (Ct = i.relatedTarget || i.fromElement) && (In(Ct) || Ct[Qi]))) break t;
          if (
            (q || G) &&
            ((G = Q.window === Q ? Q : (G = Q.ownerDocument) ? G.defaultView || G.parentWindow : window),
            q ? ((Ct = i.relatedTarget || i.toElement), (q = U), (Ct = Ct ? In(Ct) : null), Ct !== null && ((Jt = y(Ct)), (Et = Ct.tag), Ct !== Jt || (Et !== 5 && Et !== 27 && Et !== 6)) && (Ct = null)) : ((q = null), (Ct = U)),
            q !== Ct)
          ) {
            if (
              ((Et = sa),
              (J = "onMouseLeave"),
              (N = "onMouseEnter"),
              (j = "mouse"),
              (t === "pointerout" || t === "pointerover") && ((Et = Po), (J = "onPointerLeave"), (N = "onPointerEnter"), (j = "pointer")),
              (Jt = q == null ? G : wn(q)),
              (Z = Ct == null ? G : wn(Ct)),
              (G = new Et(J, j + "leave", q, i, Q)),
              (G.target = Jt),
              (G.relatedTarget = Z),
              (J = null),
              In(Q) === U && ((Et = new Et(N, j + "enter", Ct, i, Q)), (Et.target = Z), (Et.relatedTarget = Jt), (J = Et)),
              (Jt = J),
              q && Ct)
            )
              e: {
                for (Et = q, N = Ct, j = 0, Z = Et; Z; Z = ho(Z)) j++;
                for (Z = 0, J = N; J; J = ho(J)) Z++;
                for (; 0 < j - Z; ) ((Et = ho(Et)), j--);
                for (; 0 < Z - j; ) ((N = ho(N)), Z--);
                for (; j--; ) {
                  if (Et === N || (N !== null && Et === N.alternate)) break e;
                  ((Et = ho(Et)), (N = ho(N)));
                }
                Et = null;
              }
            else Et = null;
            (q !== null && Pm(tt, G, q, Et, !1), Ct !== null && Jt !== null && Pm(tt, Jt, Ct, Et, !0));
          }
        }
        t: {
          if (((G = U ? wn(U) : window), (q = G.nodeName && G.nodeName.toLowerCase()), q === "select" || (q === "input" && G.type === "file"))) var yt = ca;
          else if (Ti(G))
            if (Zo) yt = rc;
            else {
              yt = ac;
              var Ht = Go;
            }
          else ((q = G.nodeName), !q || q.toLowerCase() !== "input" || (G.type !== "checkbox" && G.type !== "radio") ? U && Qa(U.elementType) && (yt = ca) : (yt = Bn));
          if (yt && (yt = yt(t, U))) {
            cl(tt, yt, i, Q);
            break t;
          }
          (Ht && Ht(t, G, U), t === "focusout" && U && G.type === "number" && U.memoizedProps.value != null && ea(G, "number", G.value));
        }
        switch (((Ht = U ? wn(U) : window), t)) {
          case "focusin":
            (Ti(Ht) || Ht.contentEditable === "true") && ((fn = Ht), (ha = U), (Ei = null));
            break;
          case "focusout":
            Ei = ha = fn = null;
            break;
          case "mousedown":
            Wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Wr = !1), dl(tt, i, Q));
            break;
          case "selectionchange":
            if (Gr) break;
          case "keydown":
          case "keyup":
            dl(tt, i, Q);
        }
        var St;
        if (ki)
          t: {
            switch (t) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else la ? Hr(t, i) && (At = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (At = "onCompositionStart");
        (At &&
          (Ho && i.locale !== "ko" && (la || At !== "onCompositionStart" ? At === "onCompositionEnd" && la && (St = oa()) : ((Tn = Q), (Nn = "value" in Tn ? Tn.value : Tn.textContent), (la = !0))),
          (Ht = Jl(U, At)),
          0 < Ht.length && ((At = new un(At, t, null, i, Q)), tt.push({ event: At, listeners: Ht }), St ? (At.data = St) : ((St = ll(i)), St !== null && (At.data = St)))),
          (St = ol ? ul(t, i) : ic(t, i)) && ((At = Jl(U, "onBeforeInput")), 0 < At.length && ((Ht = new un("onBeforeInput", "beforeinput", null, i, Q)), tt.push({ event: Ht, listeners: At }), (Ht.data = St))),
          ky(tt, t, U, i, Q));
      }
      Dm(tt, e);
    });
  }
  function gs(t, e, i) {
    return { instance: t, listener: e, currentTarget: i };
  }
  function Jl(t, e) {
    for (var i = e + "Capture", r = []; t !== null; ) {
      var l = t,
        u = l.stateNode;
      if (((l = l.tag), (l !== 5 && l !== 26 && l !== 27) || u === null || ((l = Vt(t, i)), l != null && r.unshift(gs(t, l, u)), (l = Vt(t, e)), l != null && r.push(gs(t, l, u))), t.tag === 3)) return r;
      t = t.return;
    }
    return [];
  }
  function ho(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Pm(t, e, i, r, l) {
    for (var u = e._reactName, v = []; i !== null && i !== r; ) {
      var w = i,
        O = w.alternate,
        U = w.stateNode;
      if (((w = w.tag), O !== null && O === r)) break;
      ((w !== 5 && w !== 26 && w !== 27) || U === null || ((O = U), l ? ((U = Vt(i, u)), U != null && v.unshift(gs(i, U, O))) : l || ((U = Vt(i, u)), U != null && v.push(gs(i, U, O)))), (i = i.return));
    }
    v.length !== 0 && t.push({ event: e, listeners: v });
  }
  var Cy = /\r\n?/g,
    My = /\u0000|\uFFFD/g;
  function Bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Cy,
        `
`,
      )
      .replace(My, "");
  }
  function Hm(t, e) {
    return ((e = Bm(e)), Bm(t) === e);
  }
  function $l() {}
  function Ft(t, e, i, r, l, u) {
    switch (i) {
      case "children":
        typeof r == "string" ? e === "body" || (e === "textarea" && r === "") || Sn(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && Sn(t, "" + r);
        break;
      case "className":
        Or(t, "class", r);
        break;
      case "tabIndex":
        Or(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Or(t, i, r);
        break;
      case "style":
        na(t, r, u);
        break;
      case "data":
        if (e !== "object") {
          Or(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (e !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        ((r = ia("" + r)), t.setAttribute(i, r));
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (i === "formAction"
              ? (e !== "input" && Ft(t, e, "name", l.name, l, null), Ft(t, e, "formEncType", l.formEncType, l, null), Ft(t, e, "formMethod", l.formMethod, l, null), Ft(t, e, "formTarget", l.formTarget, l, null))
              : (Ft(t, e, "encType", l.encType, l, null), Ft(t, e, "method", l.method, l, null), Ft(t, e, "target", l.target, l, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        ((r = ia("" + r)), t.setAttribute(i, r));
        break;
      case "onClick":
        r != null && (t.onclick = $l);
        break;
      case "onScroll":
        r != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(h(61));
          if (((i = r.__html), i != null)) {
            if (l.children != null) throw Error(h(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((i = ia("" + r)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "" + r) : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        r === !0 ? t.setAttribute(i, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(i) : t.setAttribute(i, r);
        break;
      case "popover":
        (Ut("beforetoggle", t), Ut("toggle", t), Lr(t, "popover", r));
        break;
      case "xlinkActuate":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Lr(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || (i[0] !== "o" && i[0] !== "O") || (i[1] !== "n" && i[1] !== "N")) && ((i = Oo.get(i) || i), Lr(t, i, r));
    }
  }
  function yf(t, e, i, r, l, u) {
    switch (i) {
      case "style":
        na(t, r, u);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(h(61));
          if (((i = r.__html), i != null)) {
            if (l.children != null) throw Error(h(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof r == "string" ? Sn(t, r) : (typeof r == "number" || typeof r == "bigint") && Sn(t, "" + r);
        break;
      case "onScroll":
        r != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Ut("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = $l);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ks.hasOwnProperty(i))
          t: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((l = i.endsWith("Capture")), (e = i.slice(2, l ? i.length - 7 : void 0)), (u = t[Ne] || null), (u = u != null ? u[i] : null), typeof u == "function" && t.removeEventListener(e, u, l), typeof r == "function")
            ) {
              (typeof u != "function" && u !== null && (i in t ? (t[i] = null) : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(e, r, l));
              break t;
            }
            i in t ? (t[i] = r) : r === !0 ? t.setAttribute(i, "") : Lr(t, i, r);
          }
    }
  }
  function ze(t, e, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ut("error", t), Ut("load", t));
        var r = !1,
          l = !1,
          u;
        for (u in i)
          if (i.hasOwnProperty(u)) {
            var v = i[u];
            if (v != null)
              switch (u) {
                case "src":
                  r = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, e));
                default:
                  Ft(t, e, u, v, i, null);
              }
          }
        (l && Ft(t, e, "srcSet", i.srcSet, i, null), r && Ft(t, e, "src", i.src, i, null));
        return;
      case "input":
        Ut("invalid", t);
        var w = (u = v = l = null),
          O = null,
          U = null;
        for (r in i)
          if (i.hasOwnProperty(r)) {
            var Q = i[r];
            if (Q != null)
              switch (r) {
                case "name":
                  l = Q;
                  break;
                case "type":
                  v = Q;
                  break;
                case "checked":
                  O = Q;
                  break;
                case "defaultChecked":
                  U = Q;
                  break;
                case "value":
                  u = Q;
                  break;
                case "defaultValue":
                  w = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null) throw Error(h(137, e));
                  break;
                default:
                  Ft(t, e, r, Q, i, null);
              }
          }
        (Fs(t, u, w, O, U, v, l, !1), ta(t));
        return;
      case "select":
        (Ut("invalid", t), (r = v = u = null));
        for (l in i)
          if (i.hasOwnProperty(l) && ((w = i[l]), w != null))
            switch (l) {
              case "value":
                u = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "multiple":
                r = w;
              default:
                Ft(t, e, l, w, i, null);
            }
        ((e = u), (i = v), (t.multiple = !!r), e != null ? Je(t, !!r, e, !1) : i != null && Je(t, !!r, i, !0));
        return;
      case "textarea":
        (Ut("invalid", t), (u = l = r = null));
        for (v in i)
          if (i.hasOwnProperty(v) && ((w = i[v]), w != null))
            switch (v) {
              case "value":
                r = w;
                break;
              case "defaultValue":
                l = w;
                break;
              case "children":
                u = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(h(91));
                break;
              default:
                Ft(t, e, v, w, i, null);
            }
        (Kn(t, r, l, u), ta(t));
        return;
      case "option":
        for (O in i) i.hasOwnProperty(O) && ((r = i[O]), r != null) && (O === "selected" ? (t.selected = r && typeof r != "function" && typeof r != "symbol") : Ft(t, e, O, r, i, null));
        return;
      case "dialog":
        (Ut("beforetoggle", t), Ut("toggle", t), Ut("cancel", t), Ut("close", t));
        break;
      case "iframe":
      case "object":
        Ut("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < ps.length; r++) Ut(ps[r], t);
        break;
      case "image":
        (Ut("error", t), Ut("load", t));
        break;
      case "details":
        Ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Ut("error", t), Ut("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in i)
          if (i.hasOwnProperty(U) && ((r = i[U]), r != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, e));
              default:
                Ft(t, e, U, r, i, null);
            }
        return;
      default:
        if (Qa(e)) {
          for (Q in i) i.hasOwnProperty(Q) && ((r = i[Q]), r !== void 0 && yf(t, e, Q, r, i, void 0));
          return;
        }
    }
    for (w in i) i.hasOwnProperty(w) && ((r = i[w]), r != null && Ft(t, e, w, r, i, null));
  }
  function Ly(t, e, i, r) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          u = null,
          v = null,
          w = null,
          O = null,
          U = null,
          Q = null;
        for (q in i) {
          var tt = i[q];
          if (i.hasOwnProperty(q) && tt != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = tt;
              default:
                r.hasOwnProperty(q) || Ft(t, e, q, null, r, tt);
            }
        }
        for (var G in r) {
          var q = r[G];
          if (((tt = i[G]), r.hasOwnProperty(G) && (q != null || tt != null)))
            switch (G) {
              case "type":
                u = q;
                break;
              case "name":
                l = q;
                break;
              case "checked":
                U = q;
                break;
              case "defaultChecked":
                Q = q;
                break;
              case "value":
                v = q;
                break;
              case "defaultValue":
                w = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(h(137, e));
                break;
              default:
                q !== tt && Ft(t, e, G, q, r, tt);
            }
        }
        Pe(t, v, w, O, U, Q, u, l);
        return;
      case "select":
        q = v = w = G = null;
        for (u in i)
          if (((O = i[u]), i.hasOwnProperty(u) && O != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                q = O;
              default:
                r.hasOwnProperty(u) || Ft(t, e, u, null, r, O);
            }
        for (l in r)
          if (((u = r[l]), (O = i[l]), r.hasOwnProperty(l) && (u != null || O != null)))
            switch (l) {
              case "value":
                G = u;
                break;
              case "defaultValue":
                w = u;
                break;
              case "multiple":
                v = u;
              default:
                u !== O && Ft(t, e, l, u, r, O);
            }
        ((e = w), (i = v), (r = q), G != null ? Je(t, !!i, G, !1) : !!r != !!i && (e != null ? Je(t, !!i, e, !0) : Je(t, !!i, i ? [] : "", !1)));
        return;
      case "textarea":
        q = G = null;
        for (w in i)
          if (((l = i[w]), i.hasOwnProperty(w) && l != null && !r.hasOwnProperty(w)))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ft(t, e, w, null, r, l);
            }
        for (v in r)
          if (((l = r[v]), (u = i[v]), r.hasOwnProperty(v) && (l != null || u != null)))
            switch (v) {
              case "value":
                G = l;
                break;
              case "defaultValue":
                q = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(h(91));
                break;
              default:
                l !== u && Ft(t, e, v, l, r, u);
            }
        se(t, G, q);
        return;
      case "option":
        for (var Ct in i) ((G = i[Ct]), i.hasOwnProperty(Ct) && G != null && !r.hasOwnProperty(Ct) && (Ct === "selected" ? (t.selected = !1) : Ft(t, e, Ct, null, r, G)));
        for (O in r) ((G = r[O]), (q = i[O]), r.hasOwnProperty(O) && G !== q && (G != null || q != null) && (O === "selected" ? (t.selected = G && typeof G != "function" && typeof G != "symbol") : Ft(t, e, O, G, r, q)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Et in i) ((G = i[Et]), i.hasOwnProperty(Et) && G != null && !r.hasOwnProperty(Et) && Ft(t, e, Et, null, r, G));
        for (U in r)
          if (((G = r[U]), (q = i[U]), r.hasOwnProperty(U) && G !== q && (G != null || q != null)))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null) throw Error(h(137, e));
                break;
              default:
                Ft(t, e, U, G, r, q);
            }
        return;
      default:
        if (Qa(e)) {
          for (var Jt in i) ((G = i[Jt]), i.hasOwnProperty(Jt) && G !== void 0 && !r.hasOwnProperty(Jt) && yf(t, e, Jt, void 0, r, G));
          for (Q in r) ((G = r[Q]), (q = i[Q]), !r.hasOwnProperty(Q) || G === q || (G === void 0 && q === void 0) || yf(t, e, Q, G, r, q));
          return;
        }
    }
    for (var N in i) ((G = i[N]), i.hasOwnProperty(N) && G != null && !r.hasOwnProperty(N) && Ft(t, e, N, null, r, G));
    for (tt in r) ((G = r[tt]), (q = i[tt]), !r.hasOwnProperty(tt) || G === q || (G == null && q == null) || Ft(t, e, tt, G, r, q));
  }
  var _f = null,
    xf = null;
  function tu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Zm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function bf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var wf = null;
  function Oy() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === wf ? !1 : ((wf = t), !0)) : ((wf = null), !1);
  }
  var Gm = typeof setTimeout == "function" ? setTimeout : void 0,
    Ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wm = typeof Promise == "function" ? Promise : void 0,
    zy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wm < "u"
          ? function (t) {
              return Wm.resolve(null).then(t).catch(jy);
            }
          : Gm;
  function jy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ja(t) {
    return t === "head";
  }
  function qm(t, e) {
    var i = e,
      r = 0,
      l = 0;
    do {
      var u = i.nextSibling;
      if ((t.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (0 < r && 8 > r) {
            i = r;
            var v = t.ownerDocument;
            if ((i & 1 && vs(v.documentElement), i & 2 && vs(v.body), i & 4))
              for (i = v.head, vs(i), v = i.firstChild; v; ) {
                var w = v.nextSibling,
                  O = v.nodeName;
                (v[Fi] || O === "SCRIPT" || O === "STYLE" || (O === "LINK" && v.rel.toLowerCase() === "stylesheet") || i.removeChild(v), (v = w));
              }
          }
          if (l === 0) {
            (t.removeChild(u), Ts(e));
            return;
          }
          l--;
        } else i === "$" || i === "$?" || i === "$!" ? l++ : (r = i.charCodeAt(0) - 48);
      else r = 0;
      i = u;
    } while (i);
    Ts(e);
  }
  function Sf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var i = e;
      switch (((e = e.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Sf(i), Mr(i));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function Dy(t, e, i, r) {
    for (; t.nodeType === 1; ) {
      var l = i;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (r) {
        if (!t[Fi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (((u = t.getAttribute("rel")), u === "stylesheet" && t.hasAttribute("data-precedence"))) break;
              if (
                u !== l.rel ||
                t.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (l.src == null ? null : l.src) || t.getAttribute("type") !== (l.type == null ? null : l.type) || t.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Gn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ny(t, e, i) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if (((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i) || ((t = Gn(t.nextSibling)), t === null)) return null;
    return t;
  }
  function kf(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState === "complete");
  }
  function Py(t, e) {
    var i = t.ownerDocument;
    if (t.data !== "$?" || i.readyState === "complete") e();
    else {
      var r = function () {
        (e(), i.removeEventListener("DOMContentLoaded", r));
      };
      (i.addEventListener("DOMContentLoaded", r), (t._reactRetry = r));
    }
  }
  function Gn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")) break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Tf = null;
  function Vm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (e === 0) return t;
          e--;
        } else i === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ym(t, e, i) {
    switch (((e = tu(i)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(h(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(h(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(h(454));
        return t;
      default:
        throw Error(h(451));
    }
  }
  function vs(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Mr(t);
  }
  var Rn = new Map(),
    Xm = new Set();
  function eu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Hi = et.d;
  et.d = { f: By, r: Hy, D: Zy, C: Uy, L: Gy, m: Wy, X: Vy, S: qy, M: Yy };
  function By() {
    var t = Hi.f(),
      e = Yl();
    return t || e;
  }
  function Hy(t) {
    var e = di(t);
    e !== null && e.tag === 5 && e.type === "form" ? hh(e) : Hi.r(t);
  }
  var mo = typeof document > "u" ? null : document;
  function Im(t, e, i) {
    var r = mo;
    if (r && typeof e == "string" && e) {
      var l = Me(e);
      ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof i == "string" && (l += '[crossorigin="' + i + '"]'),
        Xm.has(l) || (Xm.add(l), (t = { rel: t, crossOrigin: i, href: e }), r.querySelector(l) === null && ((e = r.createElement("link")), ze(e, "link", t), pe(e), r.head.appendChild(e))));
    }
  }
  function Zy(t) {
    (Hi.D(t), Im("dns-prefetch", t, null));
  }
  function Uy(t, e) {
    (Hi.C(t, e), Im("preconnect", t, e));
  }
  function Gy(t, e, i) {
    Hi.L(t, e, i);
    var r = mo;
    if (r && t && e) {
      var l = 'link[rel="preload"][as="' + Me(e) + '"]';
      e === "image" && i && i.imageSrcSet ? ((l += '[imagesrcset="' + Me(i.imageSrcSet) + '"]'), typeof i.imageSizes == "string" && (l += '[imagesizes="' + Me(i.imageSizes) + '"]')) : (l += '[href="' + Me(t) + '"]');
      var u = l;
      switch (e) {
        case "style":
          u = po(t);
          break;
        case "script":
          u = go(t);
      }
      Rn.has(u) ||
        ((t = E({ rel: "preload", href: e === "image" && i && i.imageSrcSet ? void 0 : t, as: e }, i)),
        Rn.set(u, t),
        r.querySelector(l) !== null || (e === "style" && r.querySelector(ys(u))) || (e === "script" && r.querySelector(_s(u))) || ((e = r.createElement("link")), ze(e, "link", t), pe(e), r.head.appendChild(e)));
    }
  }
  function Wy(t, e) {
    Hi.m(t, e);
    var i = mo;
    if (i && t) {
      var r = e && typeof e.as == "string" ? e.as : "script",
        l = 'link[rel="modulepreload"][as="' + Me(r) + '"][href="' + Me(t) + '"]',
        u = l;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = go(t);
      }
      if (!Rn.has(u) && ((t = E({ rel: "modulepreload", href: t }, e)), Rn.set(u, t), i.querySelector(l) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(_s(u))) return;
        }
        ((r = i.createElement("link")), ze(r, "link", t), pe(r), i.head.appendChild(r));
      }
    }
  }
  function qy(t, e, i) {
    Hi.S(t, e, i);
    var r = mo;
    if (r && t) {
      var l = hi(r).hoistableStyles,
        u = po(t);
      e = e || "default";
      var v = l.get(u);
      if (!v) {
        var w = { loading: 0, preload: null };
        if ((v = r.querySelector(ys(u)))) w.loading = 5;
        else {
          ((t = E({ rel: "stylesheet", href: t, "data-precedence": e }, i)), (i = Rn.get(u)) && Ef(t, i));
          var O = (v = r.createElement("link"));
          (pe(O),
            ze(O, "link", t),
            (O._p = new Promise(function (U, Q) {
              ((O.onload = U), (O.onerror = Q));
            })),
            O.addEventListener("load", function () {
              w.loading |= 1;
            }),
            O.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            nu(v, e, r));
        }
        ((v = { type: "stylesheet", instance: v, count: 1, state: w }), l.set(u, v));
      }
    }
  }
  function Vy(t, e) {
    Hi.X(t, e);
    var i = mo;
    if (i && t) {
      var r = hi(i).hoistableScripts,
        l = go(t),
        u = r.get(l);
      u ||
        ((u = i.querySelector(_s(l))),
        u || ((t = E({ src: t, async: !0 }, e)), (e = Rn.get(l)) && Af(t, e), (u = i.createElement("script")), pe(u), ze(u, "link", t), i.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        r.set(l, u));
    }
  }
  function Yy(t, e) {
    Hi.M(t, e);
    var i = mo;
    if (i && t) {
      var r = hi(i).hoistableScripts,
        l = go(t),
        u = r.get(l);
      u ||
        ((u = i.querySelector(_s(l))),
        u || ((t = E({ src: t, async: !0, type: "module" }, e)), (e = Rn.get(l)) && Af(t, e), (u = i.createElement("script")), pe(u), ze(u, "link", t), i.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        r.set(l, u));
    }
  }
  function Km(t, e, i, r) {
    var l = (l = rt.current) ? eu(l) : null;
    if (!l) throw Error(h(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((e = po(i.href)), (i = hi(l).hoistableStyles), (r = i.get(e)), r || ((r = { type: "style", instance: null, count: 0, state: null }), i.set(e, r)), r)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = po(i.href);
          var u = hi(l).hoistableStyles,
            v = u.get(t);
          if (
            (v ||
              ((l = l.ownerDocument || l),
              (v = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }),
              u.set(t, v),
              (u = l.querySelector(ys(t))) && !u._p && ((v.instance = u), (v.state.loading = 5)),
              Rn.has(t) ||
                ((i = { rel: "preload", as: "style", href: i.href, crossOrigin: i.crossOrigin, integrity: i.integrity, media: i.media, hrefLang: i.hrefLang, referrerPolicy: i.referrerPolicy }), Rn.set(t, i), u || Xy(l, t, i, v.state))),
            e && r === null)
          )
            throw Error(h(528, ""));
          return v;
        }
        if (e && r !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (e = i.async),
          (i = i.src),
          typeof i == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = go(i)), (i = hi(l).hoistableScripts), (r = i.get(e)), r || ((r = { type: "script", instance: null, count: 0, state: null }), i.set(e, r)), r)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, t));
    }
  }
  function po(t) {
    return 'href="' + Me(t) + '"';
  }
  function ys(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Qm(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Xy(t, e, i, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (r.loading = 1)
      : ((e = t.createElement("link")),
        (r.preload = e),
        e.addEventListener("load", function () {
          return (r.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (r.loading |= 2);
        }),
        ze(e, "link", i),
        pe(e),
        t.head.appendChild(e));
  }
  function go(t) {
    return '[src="' + Me(t) + '"]';
  }
  function _s(t) {
    return "script[async]" + t;
  }
  function Fm(t, e, i) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var r = t.querySelector('style[data-href~="' + Me(i.href) + '"]');
          if (r) return ((e.instance = r), pe(r), r);
          var l = E({}, i, { "data-href": i.href, "data-precedence": i.precedence, href: null, precedence: null });
          return ((r = (t.ownerDocument || t).createElement("style")), pe(r), ze(r, "style", l), nu(r, i.precedence, t), (e.instance = r));
        case "stylesheet":
          l = po(i.href);
          var u = t.querySelector(ys(l));
          if (u) return ((e.state.loading |= 4), (e.instance = u), pe(u), u);
          ((r = Qm(i)), (l = Rn.get(l)) && Ef(r, l), (u = (t.ownerDocument || t).createElement("link")), pe(u));
          var v = u;
          return (
            (v._p = new Promise(function (w, O) {
              ((v.onload = w), (v.onerror = O));
            })),
            ze(u, "link", r),
            (e.state.loading |= 4),
            nu(u, i.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = go(i.src)),
            (l = t.querySelector(_s(u)))
              ? ((e.instance = l), pe(l), l)
              : ((r = i), (l = Rn.get(u)) && ((r = E({}, i)), Af(r, l)), (t = t.ownerDocument || t), (l = t.createElement("script")), pe(l), ze(l, "link", r), t.head.appendChild(l), (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, e.type));
      }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && ((r = e.instance), (e.state.loading |= 4), nu(r, i.precedence, t));
    return e.instance;
  }
  function nu(t, e, i) {
    for (var r = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = r.length ? r[r.length - 1] : null, u = l, v = 0; v < r.length; v++) {
      var w = r[v];
      if (w.dataset.precedence === e) u = w;
      else if (u !== l) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : ((e = i.nodeType === 9 ? i.head : i), e.insertBefore(t, e.firstChild));
  }
  function Ef(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title));
  }
  function Af(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity));
  }
  var iu = null;
  function Jm(t, e, i) {
    if (iu === null) {
      var r = new Map(),
        l = (iu = new Map());
      l.set(i, r);
    } else ((l = iu), (r = l.get(i)), r || ((r = new Map()), l.set(i, r)));
    if (r.has(t)) return r;
    for (r.set(t, null), i = i.getElementsByTagName(t), l = 0; l < i.length; l++) {
      var u = i[l];
      if (!(u[Fi] || u[we] || (t === "link" && u.getAttribute("rel") === "stylesheet")) && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = u.getAttribute(e) || "";
        v = t + v;
        var w = r.get(v);
        w ? w.push(u) : r.set(v, [u]);
      }
    }
    return r;
  }
  function $m(t, e, i) {
    ((t = t.ownerDocument || t), t.head.insertBefore(i, e === "title" ? t.querySelector("head > title") : null));
  }
  function Iy(t, e, i) {
    if (i === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        return e.rel === "stylesheet" ? ((t = e.disabled), typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0;
    }
    return !1;
  }
  function tp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var xs = null;
  function Ky() {}
  function Qy(t, e, i) {
    if (xs === null) throw Error(h(475));
    var r = xs;
    if (e.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var l = po(i.href),
          u = t.querySelector(ys(l));
        if (u) {
          ((t = u._p), t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, (r = au.bind(r)), t.then(r, r)), (e.state.loading |= 4), (e.instance = u), pe(u));
          return;
        }
        ((u = t.ownerDocument || t), (i = Qm(i)), (l = Rn.get(l)) && Ef(i, l), (u = u.createElement("link")), pe(u));
        var v = u;
        ((v._p = new Promise(function (w, O) {
          ((v.onload = w), (v.onerror = O));
        })),
          ze(u, "link", i),
          (e.instance = u));
      }
      (r.stylesheets === null && (r.stylesheets = new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, (e = au.bind(r)), t.addEventListener("load", e), t.addEventListener("error", e)));
    }
  }
  function Fy() {
    if (xs === null) throw Error(h(475));
    var t = xs;
    return (
      t.stylesheets && t.count === 0 && Cf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Cf(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function au() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Cf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ru = null;
  function Cf(t, e) {
    ((t.stylesheets = null), t.unsuspend !== null && (t.count++, (ru = new Map()), e.forEach(Jy, t), (ru = null), au.call(t)));
  }
  function Jy(t, e) {
    if (!(e.state.loading & 4)) {
      var i = ru.get(t);
      if (i) var r = i.get(null);
      else {
        ((i = new Map()), ru.set(t, i));
        for (var l = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < l.length; u++) {
          var v = l[u];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (i.set(v.dataset.precedence, v), (r = v));
        }
        r && i.set(null, r);
      }
      ((l = e.instance),
        (v = l.getAttribute("data-precedence")),
        (u = i.get(v) || r),
        u === r && i.set(null, l),
        i.set(v, l),
        this.count++,
        (r = au.bind(this)),
        l.addEventListener("load", r),
        l.addEventListener("error", r),
        u ? u.parentNode.insertBefore(l, u.nextSibling) : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var bs = { $$typeof: K, Provider: null, Consumer: null, _currentValue: Y, _currentValue2: Y, _threadCount: 0 };
  function $y(t, e, i, r, l, u, v, w) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Cr(-1)),
      (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = Cr(0)),
      (this.hiddenUpdates = Cr(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = l),
      (this.onCaughtError = u),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function ep(t, e, i, r, l, u, v, w, O, U, Q, tt) {
    return (
      (t = new $y(t, e, i, v, w, O, U, tt)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ie(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = lc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: r, isDehydrated: i, cache: e }),
      dc(u),
      t
    );
  }
  function np(t) {
    return t ? ((t = Li), t) : Li;
  }
  function ip(t, e, i, r, l, u) {
    ((l = np(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = ba(e)),
      (r.payload = { element: i }),
      (u = u === void 0 ? null : u),
      u !== null && (r.callback = u),
      (i = wa(t, r, e)),
      i !== null && (_n(i, t, e), Fo(i, t, e)));
  }
  function ap(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < e ? i : e;
    }
  }
  function Mf(t, e) {
    (ap(t, e), (t = t.alternate) && ap(t, e));
  }
  function rp(t) {
    if (t.tag === 13) {
      var e = ga(t, 67108864);
      (e !== null && _n(e, t, 67108864), Mf(t, 67108864));
    }
  }
  var ou = !0;
  function t_(t, e, i, r) {
    var l = z.T;
    z.T = null;
    var u = et.p;
    try {
      ((et.p = 2), Lf(t, e, i, r));
    } finally {
      ((et.p = u), (z.T = l));
    }
  }
  function e_(t, e, i, r) {
    var l = z.T;
    z.T = null;
    var u = et.p;
    try {
      ((et.p = 8), Lf(t, e, i, r));
    } finally {
      ((et.p = u), (z.T = l));
    }
  }
  function Lf(t, e, i, r) {
    if (ou) {
      var l = Of(r);
      if (l === null) (vf(t, e, r, su, i), sp(t, r));
      else if (i_(l, t, e, i, r)) r.stopPropagation();
      else if ((sp(t, r), e & 4 && -1 < n_.indexOf(t))) {
        for (; l !== null; ) {
          var u = di(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var v = Yn(u.pendingLanes);
                  if (v !== 0) {
                    var w = u;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v; ) {
                      var O = 1 << (31 - Ge(v));
                      ((w.entanglements[1] |= O), (v &= ~O));
                    }
                    (ri(u), (It & 6) === 0 && ((ql = Qe() + 500), ms(0)));
                  }
                }
                break;
              case 13:
                ((w = ga(u, 2)), w !== null && _n(w, u, 2), Yl(), Mf(u, 2));
            }
          if (((u = Of(r)), u === null && vf(t, e, r, su, i), u === l)) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vf(t, e, r, null, i);
    }
  }
  function Of(t) {
    return ((t = aa(t)), Rf(t));
  }
  var su = null;
  function Rf(t) {
    if (((su = null), (t = In(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var i = e.tag;
        if (i === 13) {
          if (((t = _(e)), t !== null)) return t;
          t = null;
        } else if (i === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((su = t), null);
  }
  function op(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Er()) {
          case Hs:
            return 2;
          case So:
            return 8;
          case Xi:
          case Zs:
            return 32;
          case ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = !1,
    Da = null,
    Na = null,
    Pa = null,
    ws = new Map(),
    Ss = new Map(),
    Ba = [],
    n_ =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function sp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Da = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        Pa = null;
        break;
      case "pointerover":
      case "pointerout":
        ws.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ss.delete(e.pointerId);
    }
  }
  function ks(t, e, i, r, l, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = { blockedOn: e, domEventName: i, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }), e !== null && ((e = di(e)), e !== null && rp(e)), t)
      : ((t.eventSystemFlags |= r), (e = t.targetContainers), l !== null && e.indexOf(l) === -1 && e.push(l), t);
  }
  function i_(t, e, i, r, l) {
    switch (e) {
      case "focusin":
        return ((Da = ks(Da, t, e, i, r, l)), !0);
      case "dragenter":
        return ((Na = ks(Na, t, e, i, r, l)), !0);
      case "mouseover":
        return ((Pa = ks(Pa, t, e, i, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (ws.set(u, ks(ws.get(u) || null, t, e, i, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Ss.set(u, ks(Ss.get(u) || null, t, e, i, r, l)), !0);
    }
    return !1;
  }
  function lp(t) {
    var e = In(t.target);
    if (e !== null) {
      var i = y(e);
      if (i !== null) {
        if (((e = i.tag), e === 13)) {
          if (((e = _(i)), e !== null)) {
            ((t.blockedOn = e),
              Co(t.priority, function () {
                if (i.tag === 13) {
                  var r = yn();
                  r = Eo(r);
                  var l = ga(i, r);
                  (l !== null && _n(l, i, r), Mf(i, r));
                }
              }));
            return;
          }
        } else if (e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function lu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var i = Of(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var r = new i.constructor(i.type, i);
        ((Fa = r), i.target.dispatchEvent(r), (Fa = null));
      } else return ((e = di(i)), e !== null && rp(e), (t.blockedOn = i), !1);
      e.shift();
    }
    return !0;
  }
  function up(t, e, i) {
    lu(t) && i.delete(e);
  }
  function a_() {
    ((zf = !1), Da !== null && lu(Da) && (Da = null), Na !== null && lu(Na) && (Na = null), Pa !== null && lu(Pa) && (Pa = null), ws.forEach(up), Ss.forEach(up));
  }
  function uu(t, e) {
    t.blockedOn === e && ((t.blockedOn = null), zf || ((zf = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, a_)));
  }
  var cu = null;
  function cp(t) {
    cu !== t &&
      ((cu = t),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        cu === t && (cu = null);
        for (var e = 0; e < t.length; e += 3) {
          var i = t[e],
            r = t[e + 1],
            l = t[e + 2];
          if (typeof r != "function") {
            if (Rf(r || i) === null) continue;
            break;
          }
          var u = di(i);
          u !== null && (t.splice(e, 3), (e -= 3), Oc(u, { pending: !0, data: l, method: i.method, action: r }, r, l));
        }
      }));
  }
  function Ts(t) {
    function e(O) {
      return uu(O, t);
    }
    (Da !== null && uu(Da, t), Na !== null && uu(Na, t), Pa !== null && uu(Pa, t), ws.forEach(e), Ss.forEach(e));
    for (var i = 0; i < Ba.length; i++) {
      var r = Ba[i];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < Ba.length && ((i = Ba[0]), i.blockedOn === null); ) (lp(i), i.blockedOn === null && Ba.shift());
    if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
      for (r = 0; r < i.length; r += 3) {
        var l = i[r],
          u = i[r + 1],
          v = l[Ne] || null;
        if (typeof u == "function") v || cp(i);
        else if (v) {
          var w = null;
          if (u && u.hasAttribute("formAction")) {
            if (((l = u), (v = u[Ne] || null))) w = v.formAction;
            else if (Rf(l) !== null) continue;
          } else w = v.action;
          (typeof w == "function" ? (i[r + 1] = w) : (i.splice(r, 3), (r -= 3)), cp(i));
        }
      }
  }
  function jf(t) {
    this._internalRoot = t;
  }
  ((fu.prototype.render = jf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(h(409));
      var i = e.current,
        r = yn();
      ip(i, r, t, e, null, null);
    }),
    (fu.prototype.unmount = jf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (ip(t.current, 2, null, t, null, null), Yl(), (e[Qi] = null));
        }
      }));
  function fu(t) {
    this._internalRoot = t;
  }
  fu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ys();
      t = { blockedOn: null, target: t, priority: e };
      for (var i = 0; i < Ba.length && e !== 0 && e < Ba[i].priority; i++);
      (Ba.splice(i, 0, t), i === 0 && lp(t));
    }
  };
  var fp = c.version;
  if (fp !== "19.1.0") throw Error(h(527, fp, "19.1.0"));
  et.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(h(188)) : ((t = Object.keys(t).join(",")), Error(h(268, t)));
    return ((t = k(e)), (t = t !== null ? b(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var r_ = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!du.isDisabled && du.supportsFiber)
      try {
        ((fi = du.inject(r_)), (De = du));
      } catch {}
  }
  return (
    (As.createRoot = function (t, e) {
      if (!g(t)) throw Error(h(299));
      var i = !1,
        r = "",
        l = Ah,
        u = Ch,
        v = Mh,
        w = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (i = !0),
          e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (v = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (w = e.unstable_transitionCallbacks)),
        (e = ep(t, 1, !1, null, null, i, r, l, u, v, w, null)),
        (t[Qi] = e.current),
        gf(t),
        new jf(e)
      );
    }),
    (As.hydrateRoot = function (t, e, i) {
      if (!g(t)) throw Error(h(299));
      var r = !1,
        l = "",
        u = Ah,
        v = Ch,
        w = Mh,
        O = null,
        U = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (r = !0),
          i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (u = i.onUncaughtError),
          i.onCaughtError !== void 0 && (v = i.onCaughtError),
          i.onRecoverableError !== void 0 && (w = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 && (O = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (U = i.formState)),
        (e = ep(t, 1, !0, e, i ?? null, r, l, u, v, w, O, U)),
        (e.context = np(null)),
        (i = e.current),
        (r = yn()),
        (r = Eo(r)),
        (l = ba(r)),
        (l.callback = null),
        wa(i, l, r),
        (i = r),
        (e.current.lanes = i),
        Ki(e, i),
        ri(e),
        (t[Qi] = e.current),
        gf(t),
        new fu(e)
      );
    }),
    (As.version = "19.1.0"),
    As
  );
}
var bp;
function p_() {
  if (bp) return Nf.exports;
  bp = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return (o(), (Nf.exports = m_()), Nf.exports);
}
var g_ = p_();
function v_(o, c) {
  if (o instanceof RegExp) return { keys: !1, pattern: o };
  var f,
    h,
    g,
    y,
    _ = [],
    T = "",
    k = o.split("/");
  for (k[0] || k.shift(); (g = k.shift()); )
    ((f = g[0]),
      f === "*"
        ? (_.push(f), (T += g[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : f === ":"
          ? ((h = g.indexOf("?", 1)), (y = g.indexOf(".", 1)), _.push(g.substring(1, ~h ? h : ~y ? y : g.length)), (T += ~h && !~y ? "(?:/([^/]+?))?" : "/([^/]+?)"), ~y && (T += (~h ? "?" : "") + "\\" + g.substring(y)))
          : (T += "/" + g));
  return { keys: _, pattern: new RegExp("^" + T + (c ? "(?=$|/)" : "/?$"), "i") };
}
var R = Au();
const y_ = ug(R),
  Ds = s_({ __proto__: null, default: y_ }, [R]);
var Uf = { exports: {} },
  Gf = {};
var wp;
function __() {
  if (wp) return Gf;
  wp = 1;
  var o = Au();
  function c(A, C) {
    return (A === C && (A !== 0 || 1 / A === 1 / C)) || (A !== A && C !== C);
  }
  var f = typeof Object.is == "function" ? Object.is : c,
    h = o.useState,
    g = o.useEffect,
    y = o.useLayoutEffect,
    _ = o.useDebugValue;
  function T(A, C) {
    var D = C(),
      B = h({ inst: { value: D, getSnapshot: C } }),
      H = B[0].inst,
      W = B[1];
    return (
      y(
        function () {
          ((H.value = D), (H.getSnapshot = C), k(H) && W({ inst: H }));
        },
        [A, D, C],
      ),
      g(
        function () {
          return (
            k(H) && W({ inst: H }),
            A(function () {
              k(H) && W({ inst: H });
            })
          );
        },
        [A],
      ),
      _(D),
      D
    );
  }
  function k(A) {
    var C = A.getSnapshot;
    A = A.value;
    try {
      var D = C();
      return !f(A, D);
    } catch {
      return !0;
    }
  }
  function b(A, C) {
    return C();
  }
  var E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? b : T;
  return ((Gf.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : E), Gf);
}
var Sp;
function x_() {
  return (Sp || ((Sp = 1), (Uf.exports = __())), Uf.exports);
}
var b_ = x_();
const w_ = Ds.useInsertionEffect,
  S_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  k_ = S_ ? R.useLayoutEffect : R.useEffect,
  T_ = w_ || k_,
  fg = (o) => {
    const c = R.useRef([o, (...f) => c[0](...f)]).current;
    return (
      T_(() => {
        c[0] = o;
      }),
      c[1]
    );
  },
  E_ = "popstate",
  od = "pushState",
  sd = "replaceState",
  A_ = "hashchange",
  kp = [E_, od, sd, A_],
  C_ = (o) => {
    for (const c of kp) addEventListener(c, o);
    return () => {
      for (const c of kp) removeEventListener(c, o);
    };
  },
  dg = (o, c) => b_.useSyncExternalStore(C_, o, c),
  Tp = () => location.search,
  M_ = ({ ssrSearch: o } = {}) => dg(Tp, o != null ? () => o : Tp),
  Ep = () => location.pathname,
  L_ = ({ ssrPath: o } = {}) => dg(Ep, o != null ? () => o : Ep),
  O_ = (o, { replace: c = !1, state: f = null } = {}) => history[c ? sd : od](f, "", o),
  R_ = (o = {}) => [L_(o), O_],
  Ap = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ap] > "u") {
  for (const o of [od, sd]) {
    const c = history[o];
    history[o] = function () {
      const f = c.apply(this, arguments),
        h = new Event(o);
      return ((h.arguments = arguments), dispatchEvent(h), f);
    };
  }
  Object.defineProperty(window, Ap, { value: !0 });
}
const z_ = (o, c) => (c.toLowerCase().indexOf(o.toLowerCase()) ? "~" + c : c.slice(o.length) || "/"),
  hg = (o = "") => (o === "/" ? "" : o),
  j_ = (o, c) => (o[0] === "~" ? o.slice(1) : hg(c) + o),
  D_ = (o = "", c) => z_(Cp(hg(o)), Cp(c)),
  Cp = (o) => {
    try {
      return decodeURI(o);
    } catch {
      return o;
    }
  },
  mg = { hook: R_, searchHook: M_, parser: v_, base: "", ssrPath: void 0, ssrSearch: void 0, ssrContext: void 0, hrefs: (o) => o, aroundNav: (o, c, f) => o(c, f) },
  pg = R.createContext(mg),
  Cu = () => R.useContext(pg),
  gg = {},
  vg = R.createContext(gg),
  N_ = () => R.useContext(vg),
  ld = (o) => {
    const [c, f] = o.hook(o);
    return [D_(o.base, c), fg((h, g) => o.aroundNav(f, j_(h, o.base), g))];
  },
  yg = (o, c, f, h) => {
    const { pattern: g, keys: y } = c instanceof RegExp ? { keys: !1, pattern: c } : o(c || "*", h),
      _ = g.exec(f) || [],
      [T, ...k] = _;
    return T !== void 0
      ? [
          !0,
          (() => {
            const b = y !== !1 ? Object.fromEntries(y.map((A, C) => [A, k[C]])) : _.groups;
            let E = { ...k };
            return (b && Object.assign(E, b), E);
          })(),
          ...(h ? [T] : []),
        ]
      : [!1, null];
  },
  _g = ({ children: o, ...c }) => {
    const f = Cu(),
      h = c.hook ? mg : f;
    let g = h;
    const [y, _ = c.ssrSearch ?? ""] = c.ssrPath?.split("?") ?? [];
    (y && ((c.ssrSearch = _), (c.ssrPath = y)), (c.hrefs = c.hrefs ?? c.hook?.hrefs), (c.searchHook = c.searchHook ?? c.hook?.searchHook));
    let T = R.useRef({}),
      k = T.current,
      b = k;
    for (let E in h) {
      const A = E === "base" ? h[E] + (c[E] ?? "") : (c[E] ?? h[E]);
      (k === b && A !== b[E] && (T.current = b = { ...b }), (b[E] = A), (A !== h[E] || A !== g[E]) && (g = b));
    }
    return R.createElement(pg.Provider, { value: g, children: o });
  },
  Mp = ({ children: o, component: c }, f) => (c ? R.createElement(c, { params: f }) : typeof o == "function" ? o(f) : o),
  P_ = (o) => {
    let c = R.useRef(gg);
    const f = c.current;
    return (c.current = Object.keys(o).length !== Object.keys(f).length || Object.entries(o).some(([h, g]) => g !== f[h]) ? o : f);
  },
  Wf = ({ path: o, nest: c, match: f, ...h }) => {
    const g = Cu(),
      [y] = ld(g),
      [_, T, k] = f ?? yg(g.parser, o, y, c),
      b = P_({ ...N_(), ...T });
    if (!_) return null;
    const E = k ? R.createElement(_g, { base: k }, Mp(h, b)) : Mp(h, b);
    return R.createElement(vg.Provider, { value: b, children: E });
  };
R.forwardRef((o, c) => {
  const f = Cu(),
    [h, g] = ld(f),
    { to: y = "", href: _ = y, onClick: T, asChild: k, children: b, className: E, replace: A, state: C, transition: D, ...B } = o,
    H = fg((X) => {
      X.ctrlKey || X.metaKey || X.altKey || X.shiftKey || X.button !== 0 || (T?.(X), X.defaultPrevented || (X.preventDefault(), g(_, o)));
    }),
    W = f.hrefs(_[0] === "~" ? _.slice(1) : f.base + _, f);
  return k && R.isValidElement(b) ? R.cloneElement(b, { onClick: H, href: W }) : R.createElement("a", { ...B, onClick: H, href: W, className: E?.call ? E(h === _) : E, children: b, ref: c });
});
const xg = (o) => (Array.isArray(o) ? o.flatMap((c) => xg(c && c.type === R.Fragment ? c.props.children : c)) : [o]),
  B_ = ({ children: o, location: c }) => {
    const f = Cu(),
      [h] = ld(f);
    for (const g of xg(o)) {
      let y = 0;
      if (R.isValidElement(g) && (y = yg(f.parser, g.props.path, c || h, g.props.nest))[0]) return R.cloneElement(g, { match: y });
    }
    return null;
  },
  H_ = 1,
  Z_ = 1e6;
let qf = 0;
function U_() {
  return ((qf = (qf + 1) % Number.MAX_SAFE_INTEGER), qf.toString());
}
const Vf = new Map(),
  Lp = (o) => {
    if (Vf.has(o)) return;
    const c = setTimeout(() => {
      (Vf.delete(o), Os({ type: "REMOVE_TOAST", toastId: o }));
    }, Z_);
    Vf.set(o, c);
  },
  G_ = (o, c) => {
    switch (c.type) {
      case "ADD_TOAST":
        return { ...o, toasts: [c.toast, ...o.toasts].slice(0, H_) };
      case "UPDATE_TOAST":
        return { ...o, toasts: o.toasts.map((f) => (f.id === c.toast.id ? { ...f, ...c.toast } : f)) };
      case "DISMISS_TOAST": {
        const { toastId: f } = c;
        return (
          f
            ? Lp(f)
            : o.toasts.forEach((h) => {
                Lp(h.id);
              }),
          { ...o, toasts: o.toasts.map((h) => (h.id === f || f === void 0 ? { ...h, open: !1 } : h)) }
        );
      }
      case "REMOVE_TOAST":
        return c.toastId === void 0 ? { ...o, toasts: [] } : { ...o, toasts: o.toasts.filter((f) => f.id !== c.toastId) };
    }
  },
  yu = [];
let _u = { toasts: [] };
function Os(o) {
  ((_u = G_(_u, o)),
    yu.forEach((c) => {
      c(_u);
    }));
}
function W_({ ...o }) {
  const c = U_(),
    f = (g) => Os({ type: "UPDATE_TOAST", toast: { ...g, id: c } }),
    h = () => Os({ type: "DISMISS_TOAST", toastId: c });
  return (
    Os({
      type: "ADD_TOAST",
      toast: {
        ...o,
        id: c,
        open: !0,
        onOpenChange: (g) => {
          g || h();
        },
      },
    }),
    { id: c, dismiss: h, update: f }
  );
}
function q_() {
  const [o, c] = R.useState(_u);
  return (
    R.useEffect(
      () => (
        yu.push(c),
        () => {
          const f = yu.indexOf(c);
          f > -1 && yu.splice(f, 1);
        }
      ),
      [o],
    ),
    { ...o, toast: W_, dismiss: (f) => Os({ type: "DISMISS_TOAST", toastId: f }) }
  );
}
var Mu = cg(),
  V_ = Object.defineProperty,
  xo = (o, c) => V_(o, "name", { value: c, configurable: !0 }),
  bg = !!(typeof window < "u" && window.document && window.document.createElement);
function an(o, c, { checkForDefaultPrevented: f = !0 } = {}) {
  return xo(function (g) {
    if ((o?.(g), f === !1 || !g || !g.defaultPrevented)) return c?.(g);
  }, "handleEvent");
}
xo(an, "composeEventHandlers");
function Y_(o) {
  if (!bg) throw new Error("Cannot access window outside of the DOM");
  return o?.ownerDocument?.defaultView ?? window;
}
xo(Y_, "getOwnerWindow");
function Qf(o) {
  if (!bg) throw new Error("Cannot access document outside of the DOM");
  return o?.ownerDocument ?? document;
}
xo(Qf, "getOwnerDocument");
function wg(o, c = !1) {
  const { activeElement: f } = Qf(o);
  if (!f?.nodeName) return null;
  if (Sg(f) && f.contentDocument) return wg(f.contentDocument.body, c);
  if (c) {
    const h = f.getAttribute("aria-activedescendant");
    if (h) {
      const g = Qf(f).getElementById(h);
      if (g) return g;
    }
  }
  return f;
}
xo(wg, "getActiveElement");
function Sg(o) {
  return o.tagName === "IFRAME";
}
xo(Sg, "isFrame");
function Op(o, c) {
  if (typeof o == "function") return o(c);
  o != null && (o.current = c);
}
function X_(...o) {
  return (c) => {
    let f = !1;
    const h = o.map((g) => {
      const y = Op(g, c);
      return (!f && typeof y == "function" && (f = !0), y);
    });
    if (f)
      return () => {
        for (let g = 0; g < h.length; g++) {
          const y = h[g];
          typeof y == "function" ? y() : Op(o[g], null);
        }
      };
  };
}
function Wi(...o) {
  return R.useCallback(X_(...o), o);
}
function Lu(o, c = []) {
  let f = [];
  function h(y, _) {
    const T = R.createContext(_);
    T.displayName = y + "Context";
    const k = f.length;
    f = [...f, _];
    const b = (A) => {
      const { scope: C, children: D, ...B } = A,
        H = C?.[o]?.[k] || T,
        W = R.useMemo(() => B, Object.values(B));
      return m.jsx(H.Provider, { value: W, children: D });
    };
    b.displayName = y + "Provider";
    function E(A, C, D = {}) {
      const { optional: B = !1 } = D,
        H = C?.[o]?.[k] || T,
        W = R.useContext(H);
      if (W) return W;
      if (_ !== void 0) return _;
      if (!B) throw new Error(`\`${A}\` must be used within \`${y}\``);
    }
    return [b, E];
  }
  const g = () => {
    const y = f.map((_) => R.createContext(_));
    return function (T) {
      const k = T?.[o] || y;
      return R.useMemo(() => ({ [`__scope${o}`]: { ...T, [o]: k } }), [T, k]);
    };
  };
  return ((g.scopeName = o), [h, I_(g, ...c)]);
}
function I_(...o) {
  const c = o[0];
  if (o.length === 1) return c;
  const f = () => {
    const h = o.map((g) => ({ useScope: g(), scopeName: g.scopeName }));
    return function (y) {
      const _ = h.reduce((T, { useScope: k, scopeName: b }) => {
        const A = k(y)[`__scope${b}`];
        return { ...T, ...A };
      }, {});
      return R.useMemo(() => ({ [`__scope${c.scopeName}`]: _ }), [_]);
    };
  };
  return ((f.scopeName = c.scopeName), f);
}
function Ff(o) {
  const c = R.forwardRef((f, h) => {
    let { children: g, ...y } = f,
      _ = null,
      T = !1;
    const k = [];
    (Rp(g) && typeof hu == "function" && (g = hu(g._payload)),
      R.Children.forEach(g, (C) => {
        if ($_(C)) {
          T = !0;
          const D = C;
          let B = "child" in D.props ? D.props.child : D.props.children;
          (Rp(B) && typeof hu == "function" && (B = hu(B._payload)), (_ = Q_(D, B)), k.push(_?.props?.children));
        } else k.push(C);
      }),
      _ ? (_ = R.cloneElement(_, void 0, k)) : !T && R.Children.count(g) === 1 && R.isValidElement(g) && (_ = g));
    const b = _ ? J_(_) : void 0,
      E = Wi(h, b);
    if (!_) {
      if (g || g === 0) throw new Error(T ? i0(o) : n0(o));
      return g;
    }
    const A = F_(y, _.props ?? {});
    return (_.type !== R.Fragment && (A.ref = h ? E : b), R.cloneElement(_, A));
  });
  return ((c.displayName = `${o}.Slot`), c);
}
var kg = Symbol.for("radix.slottable");
function K_(o) {
  const c = (f) => ("child" in f ? f.children(f.child) : f.children);
  return ((c.displayName = `${o}.Slottable`), (c.__radixId = kg), c);
}
var Q_ = (o, c) => {
  if ("child" in o.props) {
    const f = o.props.child;
    return R.isValidElement(f) ? R.cloneElement(f, void 0, o.props.children(f.props.children)) : null;
  }
  return R.isValidElement(c) ? c : null;
};
function F_(o, c) {
  const f = { ...c };
  for (const h in c) {
    const g = o[h],
      y = c[h];
    /^on[A-Z]/.test(h)
      ? g && y
        ? (f[h] = (...T) => {
            const k = y(...T);
            return (g(...T), k);
          })
        : g && (f[h] = g)
      : h === "style"
        ? (f[h] = { ...g, ...y })
        : h === "className" && (f[h] = [g, y].filter(Boolean).join(" "));
  }
  return { ...o, ...f };
}
function J_(o) {
  let c = Object.getOwnPropertyDescriptor(o.props, "ref")?.get,
    f = c && "isReactWarning" in c && c.isReactWarning;
  return f ? o.ref : ((c = Object.getOwnPropertyDescriptor(o, "ref")?.get), (f = c && "isReactWarning" in c && c.isReactWarning), f ? o.props.ref : o.props.ref || o.ref);
}
function $_(o) {
  return R.isValidElement(o) && typeof o.type == "function" && "__radixId" in o.type && o.type.__radixId === kg;
}
var t0 = Symbol.for("react.lazy");
function Rp(o) {
  return o != null && typeof o == "object" && "$$typeof" in o && o.$$typeof === t0 && "_payload" in o && e0(o._payload);
}
function e0(o) {
  return typeof o == "object" && o !== null && "then" in o;
}
var n0 = (o) => `${o} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
  i0 = (o) => `${o} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
  hu = Ds[" use ".trim().toString()];
function a0(o) {
  const c = o + "CollectionProvider",
    [f, h] = Lu(c),
    [g, y] = f(c, { collectionRef: { current: null }, itemMap: new Map() }),
    _ = (H) => {
      const { scope: W, children: X } = H,
        $ = R.useRef(null),
        K = R.useRef(new Map()).current;
      return m.jsx(g, { scope: W, itemMap: K, collectionRef: $, children: X });
    };
  _.displayName = c;
  const T = o + "CollectionSlot",
    k = Ff(T),
    b = R.forwardRef((H, W) => {
      const { scope: X, children: $ } = H,
        K = y(T, X),
        at = Wi(W, K.collectionRef);
      return m.jsx(k, { ref: at, children: $ });
    });
  b.displayName = T;
  const E = o + "CollectionItemSlot",
    A = "data-radix-collection-item",
    C = Ff(E),
    D = R.forwardRef((H, W) => {
      const { scope: X, children: $, ...K } = H,
        at = R.useRef(null),
        nt = Wi(W, at),
        ot = y(E, X);
      return (
        R.useEffect(
          () => (
            ot.itemMap.set(at, { ref: at, ...K }),
            () => {
              ot.itemMap.delete(at);
            }
          ),
        ),
        m.jsx(C, { [A]: "", ref: nt, children: $ })
      );
    });
  D.displayName = E;
  function B(H) {
    const W = y(o + "CollectionConsumer", H);
    return R.useCallback(() => {
      const $ = W.collectionRef.current;
      if (!$) return [];
      const K = Array.from($.querySelectorAll(`[${A}]`));
      return Array.from(W.itemMap.values()).sort((ot, ft) => K.indexOf(ot.ref.current) - K.indexOf(ft.ref.current));
    }, [W.collectionRef, W.itemMap]);
  }
  return [{ Provider: _, Slot: b, ItemSlot: D }, B, h];
}
var r0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
  Vn = r0.reduce((o, c) => {
    const f = Ff(`Primitive.${c}`),
      h = R.forwardRef((g, y) => {
        const { asChild: _, ...T } = g,
          k = _ ? f : c;
        return (typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), m.jsx(k, { ...T, ref: y }));
      });
    return ((h.displayName = `Primitive.${c}`), { ...o, [c]: h });
  }, {});
function Tg(o, c) {
  o && Mu.flushSync(() => o.dispatchEvent(c));
}
function Ua(o) {
  const c = R.useRef(o);
  return (
    R.useEffect(() => {
      c.current = o;
    }),
    R.useMemo(
      () =>
        (...f) =>
          c.current?.(...f),
      [],
    )
  );
}
var o0 = Object.defineProperty,
  be = (o, c) => o0(o, "name", { value: c, configurable: !0 }),
  Jf = "dismissableLayer.update",
  s0 = "dismissableLayer.pointerDownOutside",
  l0 = "dismissableLayer.focusOutside",
  zp,
  ud = R.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set(), dismissableSurfaces: new Set() }),
  Eg = R.forwardRef(
    be(function (c, f) {
      const { disableOutsidePointerEvents: h = !1, deferPointerDownOutside: g = !1, onEscapeKeyDown: y, onPointerDownOutside: _, onFocusOutside: T, onInteractOutside: k, onDismiss: b, ...E } = c,
        A = R.useContext(ud),
        [C, D] = R.useState(null),
        B = C?.ownerDocument ?? globalThis?.document,
        [, H] = R.useState({}),
        W = Wi(f, D),
        X = Array.from(A.layers),
        [$] = [...A.layersWithOutsidePointerEventsDisabled].slice(-1),
        K = $ ? X.indexOf($) : -1,
        at = C ? X.indexOf(C) : -1,
        nt = A.layersWithOutsidePointerEventsDisabled.size > 0,
        ot = at >= K,
        ft = R.useRef(!1),
        F = Ag(
          (ht) => {
            (_?.(ht), k?.(ht), ht.defaultPrevented || b?.());
          },
          {
            ownerDocument: B,
            deferPointerDownOutside: g,
            isDeferredPointerDownOutsideRef: ft,
            dismissableSurfaces: A.dismissableSurfaces,
            shouldHandlePointerDownOutside: R.useCallback(
              (ht) => {
                if (!(ht instanceof Node)) return !1;
                const Ot = [...A.branches].some((Tt) => Tt.contains(ht));
                return ot && !Ot;
              },
              [A.branches, ot],
            ),
          },
        ),
        pt = Cg((ht) => {
          if (g && ft.current) return;
          const Ot = ht.target;
          [...A.branches].some((Rt) => Rt.contains(Ot)) || (T?.(ht), k?.(ht), ht.defaultPrevented || b?.());
        }, B),
        kt = C ? at === X.length - 1 : !1,
        _t = Ua((ht) => {
          ht.key === "Escape" && (y?.(ht), !ht.defaultPrevented && b && (ht.preventDefault(), b()));
        });
      return (
        R.useEffect(() => {
          if (kt) return (B.addEventListener("keydown", _t, { capture: !0 }), () => B.removeEventListener("keydown", _t, { capture: !0 }));
        }, [B, kt, _t]),
        R.useEffect(() => {
          if (C)
            return (
              h && (A.layersWithOutsidePointerEventsDisabled.size === 0 && ((zp = B.body.style.pointerEvents), (B.body.style.pointerEvents = "none")), A.layersWithOutsidePointerEventsDisabled.add(C)),
              A.layers.add(C),
              $f(),
              () => {
                h && (A.layersWithOutsidePointerEventsDisabled.delete(C), A.layersWithOutsidePointerEventsDisabled.size === 0 && (B.body.style.pointerEvents = zp));
              }
            );
        }, [C, B, h, A]),
        R.useEffect(
          () => () => {
            C && (A.layers.delete(C), A.layersWithOutsidePointerEventsDisabled.delete(C), $f());
          },
          [C, A],
        ),
        R.useEffect(() => {
          const ht = be(() => H({}), "handleUpdate");
          return (document.addEventListener(Jf, ht), () => document.removeEventListener(Jf, ht));
        }, []),
        m.jsx(Vn.div, {
          ...E,
          ref: W,
          style: { pointerEvents: nt ? (ot ? "auto" : "none") : void 0, ...c.style },
          onFocusCapture: an(c.onFocusCapture, pt.onFocusCapture),
          onBlurCapture: an(c.onBlurCapture, pt.onBlurCapture),
          onPointerDownCapture: an(c.onPointerDownCapture, F.onPointerDownCapture),
        })
      );
    }, "DismissableLayer"),
  ),
  u0 = R.forwardRef(
    be(function (c, f) {
      const h = R.useContext(ud),
        g = R.useRef(null),
        y = Wi(f, g);
      return (
        R.useEffect(() => {
          const _ = g.current;
          if (_)
            return (
              h.branches.add(_),
              () => {
                h.branches.delete(_);
              }
            );
        }, [h.branches]),
        m.jsx(Vn.div, { ...c, ref: y })
      );
    }, "DismissableLayerBranch"),
  );
function c0() {
  const o = R.useContext(ud),
    [c, f] = R.useState(null);
  return (
    R.useEffect(() => {
      if (c)
        return (
          o.dismissableSurfaces.add(c),
          () => {
            o.dismissableSurfaces.delete(c);
          }
        );
    }, [c, o.dismissableSurfaces]),
    f
  );
}
be(c0, "useDismissableLayerSurface");
var f0 = be(() => !0, "IS_TRUE");
function Ag(o, c) {
  const { ownerDocument: f = globalThis?.document, deferPointerDownOutside: h = !1, isDeferredPointerDownOutsideRef: g, dismissableSurfaces: y, shouldHandlePointerDownOutside: _ = f0 } = c,
    T = Ua(o),
    k = R.useRef(!1),
    b = R.useRef(!1),
    E = R.useRef(new Map()),
    A = R.useRef(() => {});
  return (
    R.useEffect(() => {
      function C() {
        ((b.current = !1), (g.current = !1), E.current.clear());
      }
      be(C, "resetOutsideInteraction");
      function D() {
        return Array.from(E.current.values()).some(Boolean);
      }
      be(D, "isOutsideInteractionIntercepted");
      function B(K) {
        if (!b.current) return;
        const at = K.target;
        ((at instanceof Node && [...y].some((ot) => ot.contains(at))) || E.current.set(K.type, !0),
          K.type === "click" &&
            window.setTimeout(() => {
              b.current && A.current();
            }, 0));
      }
      be(B, "handleInteractionCapture");
      function H(K) {
        b.current && E.current.set(K.type, !1);
      }
      be(H, "handleInteractionBubble");
      const W = be((K) => {
          if (K.target && !k.current) {
            let at = function () {
              f.removeEventListener("click", A.current);
              const ot = D();
              (C(), ot || cd(s0, T, nt, { discrete: !0 }));
            };
            if ((be(at, "handleAndDispatchPointerDownOutsideEvent"), !_(K.target))) {
              (f.removeEventListener("click", A.current), C(), (k.current = !1));
              return;
            }
            const nt = { originalEvent: K };
            ((b.current = !0), (g.current = h && K.button === 0), E.current.clear(), !h || K.button !== 0 ? at() : (f.removeEventListener("click", A.current), (A.current = at), f.addEventListener("click", A.current, { once: !0 })));
          } else (f.removeEventListener("click", A.current), C());
          k.current = !1;
        }, "handlePointerDown"),
        X = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
      for (const K of X) (f.addEventListener(K, B, !0), f.addEventListener(K, H));
      const $ = window.setTimeout(() => {
        f.addEventListener("pointerdown", W);
      }, 0);
      return () => {
        (window.clearTimeout($), f.removeEventListener("pointerdown", W), f.removeEventListener("click", A.current));
        for (const K of X) (f.removeEventListener(K, B, !0), f.removeEventListener(K, H));
      };
    }, [f, T, h, g, y, _]),
    { onPointerDownCapture: be(() => (k.current = !0), "onPointerDownCapture") }
  );
}
be(Ag, "usePointerDownOutside");
function Cg(o, c = globalThis?.document) {
  const f = Ua(o),
    h = R.useRef(!1);
  return (
    R.useEffect(() => {
      const g = be((y) => {
        y.target && !h.current && cd(l0, f, { originalEvent: y }, { discrete: !1 });
      }, "handleFocus");
      return (c.addEventListener("focusin", g), () => c.removeEventListener("focusin", g));
    }, [c, f]),
    { onFocusCapture: be(() => (h.current = !0), "onFocusCapture"), onBlurCapture: be(() => (h.current = !1), "onBlurCapture") }
  );
}
be(Cg, "useFocusOutside");
function $f() {
  const o = new CustomEvent(Jf);
  document.dispatchEvent(o);
}
be($f, "dispatchUpdate");
function cd(o, c, f, { discrete: h }) {
  const g = f.originalEvent.target,
    y = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: f });
  (c && g.addEventListener(o, c, { once: !0 }), h ? Tg(g, y) : g.dispatchEvent(y));
}
be(cd, "handleAndDispatchCustomEvent");
var d0 = Eg,
  h0 = u0,
  qn = globalThis?.document ? R.useLayoutEffect : () => {},
  m0 = Object.defineProperty,
  p0 = (o, c) => m0(o, "name", { value: c, configurable: !0 }),
  Mg = R.forwardRef(
    p0(function (c, f) {
      const { container: h, ...g } = c,
        [y, _] = R.useState(!1);
      qn(() => _(!0), []);
      const T = h || (y && globalThis?.document?.body);
      return T ? Mu.createPortal(m.jsx(Vn.div, { ...g, ref: f }), T) : null;
    }, "Portal"),
  ),
  g0 = Object.defineProperty,
  qi = (o, c) => g0(o, "name", { value: c, configurable: !0 });
function Lg(o, c) {
  return R.useReducer((f, h) => c[f][h] ?? f, o);
}
qi(Lg, "useStateMachine");
var fd = qi((o) => {
  const { present: c, children: f } = o,
    h = Og(c),
    g = typeof f == "function" ? f({ present: h.isPresent }) : R.Children.only(f),
    y = Rg(h.ref, zg(g));
  return typeof f == "function" || h.isPresent ? R.cloneElement(g, { ref: y }) : null;
}, "Presence");
function Og(o) {
  const [c, f] = R.useState(),
    h = R.useRef(null),
    g = R.useRef(o),
    y = R.useRef("none"),
    _ = R.useRef(void 0),
    T = o ? "mounted" : "unmounted",
    [k, b] = Lg(T, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return (
    R.useEffect(() => {
      k === "mounted" ? ((y.current = _.current ?? vo(h.current)), (_.current = void 0)) : (y.current = "none");
    }, [k]),
    qn(() => {
      const E = h.current,
        A = g.current;
      if (A !== o) {
        const D = y.current,
          B = vo(E);
        (o ? ((_.current = B), b("MOUNT")) : B === "none" || E?.display === "none" ? b("UNMOUNT") : b(A && D !== B ? "ANIMATION_OUT" : "UNMOUNT"), (g.current = o));
      }
    }, [o, b]),
    qn(() => {
      if (c) {
        let E;
        const A = c.ownerDocument.defaultView ?? window,
          C = qi((B) => {
            const W = vo(h.current).includes(CSS.escape(B.animationName));
            if (B.target === c && W && (b("ANIMATION_END"), !g.current)) {
              const X = c.style.animationFillMode;
              ((c.style.animationFillMode = "forwards"),
                (E = A.setTimeout(() => {
                  c.style.animationFillMode === "forwards" && (c.style.animationFillMode = X);
                })));
            }
          }, "handleAnimationEnd"),
          D = qi((B) => {
            B.target === c && (y.current = vo(h.current));
          }, "handleAnimationStart");
        return (
          c.addEventListener("animationstart", D),
          c.addEventListener("animationcancel", C),
          c.addEventListener("animationend", C),
          () => {
            (A.clearTimeout(E), c.removeEventListener("animationstart", D), c.removeEventListener("animationcancel", C), c.removeEventListener("animationend", C));
          }
        );
      } else b("ANIMATION_END");
    }, [c, b]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(k),
      ref: R.useCallback((E) => {
        if (E) {
          const A = getComputedStyle(E);
          ((h.current = A), (_.current = vo(A)));
        } else h.current = null;
        f(E);
      }, []),
    }
  );
}
qi(Og, "usePresence");
function td(o, c) {
  if (typeof o == "function") return o(c);
  o != null && (o.current = c);
}
qi(td, "setRef");
function Rg(...o) {
  const c = R.useRef(o);
  return (
    (c.current = o),
    R.useCallback((f) => {
      const h = c.current;
      let g = !1;
      const y = h.map((_) => {
        const T = td(_, f);
        return (!g && typeof T == "function" && (g = !0), T);
      });
      if (g)
        return () => {
          for (let _ = 0; _ < y.length; _++) {
            const T = y[_];
            typeof T == "function" ? T() : td(h[_], null);
          }
        };
    }, [])
  );
}
qi(Rg, "useStableComposedRefs");
function vo(o) {
  return o?.animationName || "none";
}
qi(vo, "getAnimationName");
function zg(o) {
  let c = Object.getOwnPropertyDescriptor(o.props, "ref")?.get,
    f = c && "isReactWarning" in c && c.isReactWarning;
  return f ? o.ref : ((c = Object.getOwnPropertyDescriptor(o, "ref")?.get), (f = c && "isReactWarning" in c && c.isReactWarning), f ? o.props.ref : o.props.ref || o.ref);
}
qi(zg, "getElementRef");
var jp = Ds[" useEffectEvent ".trim().toString()],
  Dp = Ds[" useInsertionEffect ".trim().toString()];
function v0(o) {
  if (typeof jp == "function") return jp(o);
  const c = R.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    typeof Dp == "function"
      ? Dp(() => {
          c.current = o;
        })
      : qn(() => {
          c.current = o;
        }),
    R.useMemo(
      () =>
        (...f) =>
          c.current?.(...f),
      [],
    )
  );
}
var y0 = Object.defineProperty,
  Ns = (o, c) => y0(o, "name", { value: c, configurable: !0 }),
  _0 = Ds[" useInsertionEffect ".trim().toString()] || qn;
function jg({ prop: o, defaultProp: c, onChange: f = Ns(() => {}, "onChange"), caller: h }) {
  const [g, y, _] = Dg({ defaultProp: c, onChange: f }),
    T = o !== void 0,
    k = T ? o : g,
    b = R.useCallback(
      (E) => {
        if (T) {
          const A = Ng(E) ? E(o) : E;
          A !== o && _.current?.(A);
        } else y(E);
      },
      [T, o, y, _],
    );
  return [k, b];
}
Ns(jg, "useControllableState");
function Dg({ defaultProp: o, onChange: c }) {
  const [f, h] = R.useState(o),
    g = R.useRef(f),
    y = R.useRef(c);
  return (
    _0(() => {
      y.current = c;
    }, [c]),
    R.useEffect(() => {
      g.current !== f && (y.current?.(f), (g.current = f));
    }, [f, g]),
    [f, h, y]
  );
}
Ns(Dg, "useUncontrolledState");
function Ng(o) {
  return typeof o == "function";
}
Ns(Ng, "isFunction");
var Np = Symbol("RADIX:SYNC_STATE");
function x0(o, c, f, h) {
  const { prop: g, defaultProp: y, onChange: _, caller: T } = c,
    k = g !== void 0,
    b = v0(_),
    E = [{ ...f, state: y }];
  h && E.push(h);
  const [A, C] = R.useReducer(
      (W, X) => {
        if (X.type === Np) return { ...W, state: X.state };
        const $ = o(W, X);
        return (k && !Object.is($.state, W.state) && b($.state), $);
      },
      ...E,
    ),
    D = A.state,
    B = R.useRef(D);
  R.useEffect(() => {
    B.current !== D && ((B.current = D), k || b(D));
  }, [D, B, k]);
  const H = R.useMemo(() => (g !== void 0 ? { ...A, state: g } : A), [A, g]);
  return (
    R.useEffect(() => {
      k && !Object.is(g, A.state) && C({ type: Np, state: g });
    }, [g, A.state, k]),
    [H, C]
  );
}
Ns(x0, "useControllableStateReducer");
var b0 = Object.defineProperty,
  w0 = (o, c) => b0(o, "name", { value: c, configurable: !0 }),
  S0 = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }),
  dd = R.forwardRef(
    w0(function (c, f) {
      return m.jsx(Vn.span, { ...c, ref: f, style: { ...S0, ...c.style } });
    }, "VisuallyHidden"),
  ),
  k0 = dd,
  T0 = Object.defineProperty,
  te = (o, c) => T0(o, "name", { value: c, configurable: !0 }),
  Pg = "ToastProvider",
  [hd, Bg, E0] = a0("Toast"),
  [Hg] = Lu("Toast", [E0]),
  [A0, Ou] = Hg(Pg),
  C0 = te((o) => {
    const { __scopeToast: c, label: f = "Notification", duration: h = 5e3, swipeDirection: g = "right", swipeThreshold: y = 50, announcerContainer: _, children: T } = o,
      [k, b] = R.useState(null),
      [E, A] = R.useState(0),
      C = R.useRef(!1);
    return (
      f.trim() || console.error(`Invalid prop \`label\` supplied to \`${Pg}\`. Expected non-empty \`string\`.`),
      m.jsx(hd.Provider, {
        scope: c,
        children: m.jsx(A0, {
          scope: c,
          label: f,
          duration: h,
          swipeDirection: g,
          swipeThreshold: y,
          toastCount: E,
          viewport: k,
          onViewportChange: b,
          onToastAdd: R.useCallback(() => A((D) => D + 1), []),
          onToastRemove: R.useCallback(() => A((D) => D - 1), []),
          isClosePausedRef: C,
          announcerContainer: _,
          children: T,
        }),
      })
    );
  }, "ToastProvider"),
  M0 = "ToastViewport",
  L0 = ["F8"],
  ed = "toast.viewportPause",
  nd = "toast.viewportResume",
  O0 = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, hotkey: g = L0, label: y = "Notifications ({hotkey})", ..._ } = c,
        T = Ou(M0, h),
        k = Bg(h),
        b = R.useRef(null),
        E = R.useRef(null),
        A = R.useRef(null),
        C = R.useRef(null),
        D = Wi(f, C, T.onViewportChange),
        B = g.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        H = T.toastCount > 0;
      (R.useEffect(() => {
        const X = te(($) => {
          g.length !== 0 && g.every((at) => $[at] || $.code === at) && C.current?.focus();
        }, "handleKeyDown");
        return (document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X));
      }, [g]),
        R.useEffect(() => {
          const X = b.current,
            $ = C.current;
          if (H && X && $) {
            const K = te(() => {
                if (!T.isClosePausedRef.current) {
                  const ft = new CustomEvent(ed);
                  ($.dispatchEvent(ft), (T.isClosePausedRef.current = !0));
                }
              }, "handlePause"),
              at = te(() => {
                if (T.isClosePausedRef.current) {
                  const ft = new CustomEvent(nd);
                  ($.dispatchEvent(ft), (T.isClosePausedRef.current = !1));
                }
              }, "handleResume"),
              nt = te((ft) => {
                !X.contains(ft.relatedTarget) && at();
              }, "handleFocusOutResume"),
              ot = te(() => {
                X.contains(document.activeElement) || at();
              }, "handlePointerLeaveResume");
            return (
              X.addEventListener("focusin", K),
              X.addEventListener("focusout", nt),
              X.addEventListener("pointermove", K),
              X.addEventListener("pointerleave", ot),
              window.addEventListener("blur", K),
              window.addEventListener("focus", at),
              () => {
                (X.removeEventListener("focusin", K),
                  X.removeEventListener("focusout", nt),
                  X.removeEventListener("pointermove", K),
                  X.removeEventListener("pointerleave", ot),
                  window.removeEventListener("blur", K),
                  window.removeEventListener("focus", at));
              }
            );
          }
        }, [H, T.isClosePausedRef]));
      const W = R.useCallback(
        ({ tabbingDirection: X }) => {
          const K = k().map((at) => {
            const nt = at.ref.current,
              ot = [nt, ...qg(nt)];
            return X === "forwards" ? ot : ot.reverse();
          });
          return (X === "forwards" ? K.reverse() : K).flat();
        },
        [k],
      );
      return (
        R.useEffect(() => {
          const X = C.current;
          if (X) {
            const $ = te((K) => {
              const at = K.altKey || K.ctrlKey || K.metaKey;
              if (K.key === "Tab" && !at) {
                const ot = document.activeElement,
                  ft = K.shiftKey;
                if (K.target === X && ft) {
                  E.current?.focus();
                  return;
                }
                const kt = W({ tabbingDirection: ft ? "backwards" : "forwards" }),
                  _t = kt.findIndex((ht) => ht === ot);
                xu(kt.slice(_t + 1)) ? K.preventDefault() : ft ? E.current?.focus() : A.current?.focus();
              }
            }, "handleKeyDown");
            return (X.addEventListener("keydown", $), () => X.removeEventListener("keydown", $));
          }
        }, [k, W]),
        m.jsxs(h0, {
          ref: b,
          role: "region",
          "aria-label": y.replace("{hotkey}", B),
          tabIndex: -1,
          style: { pointerEvents: H ? void 0 : "none" },
          children: [
            H &&
              m.jsx(Pp, {
                ref: E,
                onFocusFromOutsideViewport: () => {
                  const X = W({ tabbingDirection: "forwards" });
                  xu(X);
                },
              }),
            m.jsx(hd.Slot, { scope: h, children: m.jsx(Vn.ol, { tabIndex: -1, ..._, ref: D }) }),
            H &&
              m.jsx(Pp, {
                ref: A,
                onFocusFromOutsideViewport: () => {
                  const X = W({ tabbingDirection: "backwards" });
                  xu(X);
                },
              }),
          ],
        })
      );
    }, "ToastViewport"),
  ),
  R0 = "ToastFocusProxy",
  Pp = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, onFocusFromOutsideViewport: g, ...y } = c,
        _ = Ou(R0, h);
      return m.jsx(dd, {
        tabIndex: 0,
        ...y,
        ref: f,
        style: { position: "fixed" },
        onFocus: (T) => {
          const k = T.relatedTarget;
          !_.viewport?.contains(k) && g();
        },
      });
    }, "ToastFocusProxy"),
  ),
  Ru = "Toast",
  z0 = "toast.swipeStart",
  j0 = "toast.swipeMove",
  D0 = "toast.swipeCancel",
  N0 = "toast.swipeEnd",
  P0 = R.forwardRef(
    te(function (c, f) {
      const { forceMount: h, open: g, defaultOpen: y, onOpenChange: _, ...T } = c,
        [k, b] = jg({ prop: g, defaultProp: y ?? !0, onChange: _, caller: Ru });
      return m.jsx(fd, {
        present: h || k,
        children: m.jsx(Z0, {
          open: k,
          ...T,
          ref: f,
          onClose: () => b(!1),
          onPause: Ua(c.onPause),
          onResume: Ua(c.onResume),
          onSwipeStart: an(c.onSwipeStart, (E) => {
            E.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: an(c.onSwipeMove, (E) => {
            const { x: A, y: C } = E.detail.delta;
            (E.currentTarget.setAttribute("data-swipe", "move"), E.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${A}px`), E.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${C}px`));
          }),
          onSwipeCancel: an(c.onSwipeCancel, (E) => {
            (E.currentTarget.setAttribute("data-swipe", "cancel"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
          }),
          onSwipeEnd: an(c.onSwipeEnd, (E) => {
            const { x: A, y: C } = E.detail.delta;
            (E.currentTarget.setAttribute("data-swipe", "end"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
              E.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
              E.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${A}px`),
              E.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${C}px`),
              b(!1));
          }),
        }),
      });
    }, "Toast"),
  ),
  [B0, H0] = Hg(Ru, { onClose() {} }),
  Z0 = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, type: g = "foreground", duration: y, open: _, onClose: T, onEscapeKeyDown: k, onPause: b, onResume: E, onSwipeStart: A, onSwipeMove: C, onSwipeCancel: D, onSwipeEnd: B, ...H } = c,
        W = Ou(Ru, h),
        X = Bg(h),
        [$, K] = R.useState(null),
        at = Wi(f, K),
        nt = R.useRef(null),
        ot = R.useRef(null),
        ft = y || W.duration,
        F = R.useRef(0),
        pt = R.useRef(ft),
        kt = R.useRef(0),
        { onToastAdd: _t, onToastRemove: ht } = W,
        Ot = Ua(() => {
          ($?.contains(document.activeElement) && W.viewport?.focus(), T());
        }),
        Tt = R.useCallback(
          (z) => {
            !z || z === 1 / 0 || (window.clearTimeout(kt.current), (F.current = new Date().getTime()), (kt.current = window.setTimeout(Ot, z)));
          },
          [Ot],
        );
      (R.useEffect(() => {
        const z = W.viewport;
        if (z) {
          const et = te(() => {
              (Tt(pt.current), E?.());
            }, "handleResume"),
            Y = te(() => {
              const xt = new Date().getTime() - F.current;
              ((pt.current = pt.current - xt), window.clearTimeout(kt.current), b?.());
            }, "handlePause");
          return (
            z.addEventListener(ed, Y),
            z.addEventListener(nd, et),
            () => {
              (z.removeEventListener(ed, Y), z.removeEventListener(nd, et));
            }
          );
        }
      }, [W.viewport, ft, b, E, Tt]),
        R.useEffect(() => {
          _ && !W.isClosePausedRef.current && Tt(ft);
        }, [_, ft, W.isClosePausedRef, Tt]),
        R.useEffect(
          () => () => {
            window.clearTimeout(kt.current);
          },
          [],
        ),
        R.useEffect(() => (_t(), () => ht()), [_t, ht]));
      const Rt = R.useMemo(() => ($ ? md($) : null), [$]);
      return W.viewport
        ? m.jsxs(m.Fragment, {
            children: [
              Rt && m.jsx(U0, { __scopeToast: h, role: "status", "aria-live": g === "foreground" ? "assertive" : "polite", children: Rt }),
              m.jsx(B0, {
                scope: h,
                onClose: Ot,
                children: Mu.createPortal(
                  m.jsx(hd.ItemSlot, {
                    scope: h,
                    children: m.jsx(d0, {
                      asChild: !0,
                      onEscapeKeyDown: an(k, (z) => {
                        X().some((Y) => Y.ref.current?.contains(z.target)) || Ot();
                      }),
                      children: m.jsx(Vn.li, {
                        tabIndex: 0,
                        "data-state": _ ? "open" : "closed",
                        "data-swipe-direction": W.swipeDirection,
                        ...H,
                        ref: at,
                        style: { userSelect: "none", touchAction: "none", ...c.style },
                        onKeyDown: an(c.onKeyDown, (z) => {
                          z.key === "Escape" && (k?.(z.nativeEvent), z.nativeEvent.defaultPrevented || Ot());
                        }),
                        onPointerDown: an(c.onPointerDown, (z) => {
                          z.button === 0 && (nt.current = { x: z.clientX, y: z.clientY });
                        }),
                        onPointerMove: an(c.onPointerMove, (z) => {
                          if (!nt.current) return;
                          const et = z.clientX - nt.current.x,
                            Y = z.clientY - nt.current.y,
                            xt = !!ot.current,
                            S = ["left", "right"].includes(W.swipeDirection),
                            I = ["left", "up"].includes(W.swipeDirection) ? Math.min : Math.max,
                            lt = S ? I(0, et) : 0,
                            st = S ? 0 : I(0, Y),
                            ct = z.pointerType === "touch" ? 10 : 2,
                            ut = { x: lt, y: st },
                            rt = { originalEvent: z, delta: ut };
                          xt
                            ? ((ot.current = ut), Ms(j0, C, rt, { discrete: !1 }))
                            : Bp(ut, W.swipeDirection, ct)
                              ? ((ot.current = ut), Ms(z0, A, rt, { discrete: !1 }), z.target.setPointerCapture(z.pointerId))
                              : (Math.abs(et) > ct || Math.abs(Y) > ct) && (nt.current = null);
                        }),
                        onPointerUp: an(c.onPointerUp, (z) => {
                          const et = ot.current,
                            Y = z.target;
                          if ((Y.hasPointerCapture(z.pointerId) && Y.releasePointerCapture(z.pointerId), (ot.current = null), (nt.current = null), et)) {
                            const xt = z.currentTarget,
                              S = { originalEvent: z, delta: et };
                            (Bp(et, W.swipeDirection, W.swipeThreshold) ? Ms(N0, B, S, { discrete: !0 }) : Ms(D0, D, S, { discrete: !0 }), xt.addEventListener("click", (I) => I.preventDefault(), { once: !0 }));
                          }
                        }),
                      }),
                    }),
                  }),
                  W.viewport,
                ),
              }),
            ],
          })
        : null;
    }, "ToastImpl"),
  ),
  U0 = te((o) => {
    const { __scopeToast: c, children: f, ...h } = o,
      g = Ou(Ru, c),
      [y, _] = R.useState(!1),
      [T, k] = R.useState(!1);
    return (
      Gg(() => _(!0)),
      R.useEffect(() => {
        const b = window.setTimeout(() => k(!0), 1e3);
        return () => window.clearTimeout(b);
      }, []),
      T ? null : m.jsx(Mg, { asChild: !0, container: g.announcerContainer || void 0, children: m.jsx(dd, { ...h, children: y && m.jsxs(m.Fragment, { children: [g.label, " ", f] }) }) })
    );
  }, "ToastAnnounce"),
  G0 = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, ...g } = c;
      return m.jsx(Vn.div, { ...g, ref: f });
    }, "ToastTitle"),
  ),
  W0 = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, ...g } = c;
      return m.jsx(Vn.div, { ...g, ref: f });
    }, "ToastDescription"),
  ),
  q0 = "ToastAction",
  V0 = R.forwardRef(
    te(function (c, f) {
      const { altText: h, ...g } = c;
      return h.trim() ? m.jsx(Ug, { altText: h, asChild: !0, children: m.jsx(Zg, { ...g, ref: f }) }) : (console.error(`Invalid prop \`altText\` supplied to \`${q0}\`. Expected non-empty \`string\`.`), null);
    }, "ToastAction"),
  ),
  Y0 = "ToastClose",
  Zg = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, ...g } = c,
        y = H0(Y0, h);
      return m.jsx(Ug, { asChild: !0, children: m.jsx(Vn.button, { type: "button", ...g, ref: f, onClick: an(c.onClick, y.onClose) }) });
    }, "ToastClose"),
  ),
  Ug = R.forwardRef(
    te(function (c, f) {
      const { __scopeToast: h, altText: g, ...y } = c;
      return m.jsx(Vn.div, { "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": g || void 0, ...y, ref: f });
    }, "ToastAnnounceExclude"),
  );
function md(o) {
  const c = [];
  return (
    Array.from(o.childNodes).forEach((h) => {
      if ((h.nodeType === h.TEXT_NODE && h.textContent && c.push(h.textContent), Wg(h))) {
        const g = h.ariaHidden || h.hidden || h.style.display === "none",
          y = h.dataset.radixToastAnnounceExclude === "";
        if (!g)
          if (y) {
            const _ = h.dataset.radixToastAnnounceAlt;
            _ && c.push(_);
          } else c.push(...md(h));
      }
    }),
    c
  );
}
te(md, "getAnnounceTextContent");
function Ms(o, c, f, { discrete: h }) {
  const g = f.originalEvent.currentTarget,
    y = new CustomEvent(o, { bubbles: !0, cancelable: !0, detail: f });
  (c && g.addEventListener(o, c, { once: !0 }), h ? Tg(g, y) : g.dispatchEvent(y));
}
te(Ms, "handleAndDispatchCustomEvent");
var Bp = te((o, c, f = 0) => {
  const h = Math.abs(o.x),
    g = Math.abs(o.y),
    y = h > g;
  return c === "left" || c === "right" ? y && h > f : !y && g > f;
}, "isDeltaInDirection");
function Gg(o = () => {}) {
  const c = Ua(o);
  qn(() => {
    let f = 0,
      h = 0;
    return (
      (f = window.requestAnimationFrame(() => (h = window.requestAnimationFrame(c)))),
      () => {
        (window.cancelAnimationFrame(f), window.cancelAnimationFrame(h));
      }
    );
  }, [c]);
}
te(Gg, "useNextFrame");
function Wg(o) {
  return o.nodeType === o.ELEMENT_NODE;
}
te(Wg, "isHTMLElement");
function qg(o) {
  const c = [],
    f = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
      acceptNode: te((h) => {
        const g = h.tagName === "INPUT" && h.type === "hidden";
        return h.disabled || h.hidden || g ? NodeFilter.FILTER_SKIP : h.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }, "acceptNode"),
    });
  for (; f.nextNode(); ) c.push(f.currentNode);
  return c;
}
te(qg, "getTabbableCandidates");
function xu(o) {
  const c = document.activeElement;
  return o.some((f) => (f === c ? !0 : (f.focus(), document.activeElement !== c)));
}
te(xu, "focusFirst");
var X0 = C0,
  Vg = O0,
  Yg = P0,
  Xg = G0,
  Ig = W0,
  Kg = V0,
  Qg = Zg;
function Fg(o) {
  var c,
    f,
    h = "";
  if (typeof o == "string" || typeof o == "number") h += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var g = o.length;
      for (c = 0; c < g; c++) o[c] && (f = Fg(o[c])) && (h && (h += " "), (h += f));
    } else for (f in o) o[f] && (h && (h += " "), (h += f));
  return h;
}
function Jg() {
  for (var o, c, f = 0, h = "", g = arguments.length; f < g; f++) (o = arguments[f]) && (c = Fg(o)) && (h && (h += " "), (h += c));
  return h;
}
const Hp = (o) => (typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o),
  Zp = Jg,
  I0 = (o, c) => (f) => {
    var h;
    if (c?.variants == null) return Zp(o, f?.class, f?.className);
    const { variants: g, defaultVariants: y } = c,
      _ = Object.keys(g).map((b) => {
        const E = f?.[b],
          A = y?.[b];
        if (E === null) return null;
        const C = Hp(E) || Hp(A);
        return g[b][C];
      }),
      T =
        f &&
        Object.entries(f).reduce((b, E) => {
          let [A, C] = E;
          return (C === void 0 || (b[A] = C), b);
        }, {}),
      k =
        c == null || (h = c.compoundVariants) === null || h === void 0
          ? void 0
          : h.reduce((b, E) => {
              let { class: A, className: C, ...D } = E;
              return Object.entries(D).every((B) => {
                let [H, W] = B;
                return Array.isArray(W) ? W.includes({ ...y, ...T }[H]) : { ...y, ...T }[H] === W;
              })
                ? [...b, A, C]
                : b;
            }, []);
    return Zp(o, _, k, f?.class, f?.className);
  };
const K0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Q0 = (o) => o.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, f, h) => (h ? h.toUpperCase() : f.toLowerCase())),
  Up = (o) => {
    const c = Q0(o);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  $g = (...o) =>
    o
      .filter((c, f, h) => !!c && c.trim() !== "" && h.indexOf(c) === f)
      .join(" ")
      .trim(),
  F0 = (o) => {
    for (const c in o) if (c.startsWith("aria-") || c === "role" || c === "title") return !0;
  };
var J0 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const $0 = R.forwardRef(({ color: o = "currentColor", size: c = 24, strokeWidth: f = 2, absoluteStrokeWidth: h, className: g = "", children: y, iconNode: _, ...T }, k) =>
  R.createElement("svg", { ref: k, ...J0, width: c, height: c, stroke: o, strokeWidth: h ? (Number(f) * 24) / Number(c) : f, className: $g("lucide", g), ...(!y && !F0(T) && { "aria-hidden": "true" }), ...T }, [
    ..._.map(([b, E]) => R.createElement(b, E)),
    ...(Array.isArray(y) ? y : [y]),
  ]),
);
const Ps = (o, c) => {
  const f = R.forwardRef(({ className: h, ...g }, y) => R.createElement($0, { ref: y, iconNode: c, className: $g(`lucide-${K0(Up(o))}`, `lucide-${o}`, h), ...g }));
  return ((f.displayName = Up(o)), f);
};
const tx = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  ex = Ps("arrow-down", tx);
const nx = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  ix = Ps("circle-alert", nx);
const ax = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  rx = Ps("menu", ax);
const ox = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]],
  sx = Ps("navigation", ox);
const lx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  tv = Ps("x", lx),
  ux = (o, c) => {
    const f = new Array(o.length + c.length);
    for (let h = 0; h < o.length; h++) f[h] = o[h];
    for (let h = 0; h < c.length; h++) f[o.length + h] = c[h];
    return f;
  },
  cx = (o, c) => ({ classGroupId: o, validator: c }),
  ev = (o = new Map(), c = null, f) => ({ nextPart: o, validators: c, classGroupId: f }),
  wu = "-",
  Gp = [],
  fx = "arbitrary..",
  dx = (o) => {
    const c = mx(o),
      { conflictingClassGroups: f, conflictingClassGroupModifiers: h } = o;
    return {
      getClassGroupId: (_) => {
        if (_.startsWith("[") && _.endsWith("]")) return hx(_);
        const T = _.split(wu),
          k = T[0] === "" && T.length > 1 ? 1 : 0;
        return nv(T, k, c);
      },
      getConflictingClassGroupIds: (_, T) => {
        if (T) {
          const k = h[_],
            b = f[_];
          return k ? (b ? ux(b, k) : k) : b || Gp;
        }
        return f[_] || Gp;
      },
    };
  },
  nv = (o, c, f) => {
    if (o.length - c === 0) return f.classGroupId;
    const g = o[c],
      y = f.nextPart.get(g);
    if (y) {
      const b = nv(o, c + 1, y);
      if (b) return b;
    }
    const _ = f.validators;
    if (_ === null) return;
    const T = c === 0 ? o.join(wu) : o.slice(c).join(wu),
      k = _.length;
    for (let b = 0; b < k; b++) {
      const E = _[b];
      if (E.validator(T)) return E.classGroupId;
    }
  },
  hx = (o) =>
    o.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const c = o.slice(1, -1),
            f = c.indexOf(":"),
            h = c.slice(0, f);
          return h ? fx + h : void 0;
        })(),
  mx = (o) => {
    const { theme: c, classGroups: f } = o;
    return px(f, c);
  },
  px = (o, c) => {
    const f = ev();
    for (const h in o) {
      const g = o[h];
      pd(g, f, h, c);
    }
    return f;
  },
  pd = (o, c, f, h) => {
    const g = o.length;
    for (let y = 0; y < g; y++) {
      const _ = o[y];
      gx(_, c, f, h);
    }
  },
  gx = (o, c, f, h) => {
    if (typeof o == "string") {
      vx(o, c, f);
      return;
    }
    if (typeof o == "function") {
      yx(o, c, f, h);
      return;
    }
    _x(o, c, f, h);
  },
  vx = (o, c, f) => {
    const h = o === "" ? c : iv(c, o);
    h.classGroupId = f;
  },
  yx = (o, c, f, h) => {
    if (xx(o)) {
      pd(o(h), c, f, h);
      return;
    }
    (c.validators === null && (c.validators = []), c.validators.push(cx(f, o)));
  },
  _x = (o, c, f, h) => {
    const g = Object.entries(o),
      y = g.length;
    for (let _ = 0; _ < y; _++) {
      const [T, k] = g[_];
      pd(k, iv(c, T), f, h);
    }
  },
  iv = (o, c) => {
    let f = o;
    const h = c.split(wu),
      g = h.length;
    for (let y = 0; y < g; y++) {
      const _ = h[y];
      let T = f.nextPart.get(_);
      (T || ((T = ev()), f.nextPart.set(_, T)), (f = T));
    }
    return f;
  },
  xx = (o) => "isThemeGetter" in o && o.isThemeGetter === !0,
  bx = (o) => {
    if (o < 1) return { get: () => {}, set: () => {} };
    let c = 0,
      f = Object.create(null),
      h = Object.create(null);
    const g = (y, _) => {
      ((f[y] = _), c++, c > o && ((c = 0), (h = f), (f = Object.create(null))));
    };
    return {
      get(y) {
        let _ = f[y];
        if (_ !== void 0) return _;
        if ((_ = h[y]) !== void 0) return (g(y, _), _);
      },
      set(y, _) {
        y in f ? (f[y] = _) : g(y, _);
      },
    };
  },
  id = "!",
  Wp = ":",
  wx = [],
  qp = (o, c, f, h, g) => ({ modifiers: o, hasImportantModifier: c, baseClassName: f, maybePostfixModifierPosition: h, isExternal: g }),
  Sx = (o) => {
    const { prefix: c, experimentalParseClassName: f } = o;
    let h = (g) => {
      const y = [];
      let _ = 0,
        T = 0,
        k = 0,
        b;
      const E = g.length;
      for (let H = 0; H < E; H++) {
        const W = g[H];
        if (_ === 0 && T === 0) {
          if (W === Wp) {
            (y.push(g.slice(k, H)), (k = H + 1));
            continue;
          }
          if (W === "/") {
            b = H;
            continue;
          }
        }
        W === "[" ? _++ : W === "]" ? _-- : W === "(" ? T++ : W === ")" && T--;
      }
      const A = y.length === 0 ? g : g.slice(k);
      let C = A,
        D = !1;
      A.endsWith(id) ? ((C = A.slice(0, -1)), (D = !0)) : A.startsWith(id) && ((C = A.slice(1)), (D = !0));
      const B = b && b > k ? b - k : void 0;
      return qp(y, D, C, B);
    };
    if (c) {
      const g = c + Wp,
        y = h;
      h = (_) => (_.startsWith(g) ? y(_.slice(g.length)) : qp(wx, !1, _, void 0, !0));
    }
    if (f) {
      const g = h;
      h = (y) => f({ className: y, parseClassName: g });
    }
    return h;
  },
  kx = (o) => {
    const c = new Map();
    return (
      o.orderSensitiveModifiers.forEach((f, h) => {
        c.set(f, 1e6 + h);
      }),
      (f) => {
        const h = [];
        let g = [];
        for (let y = 0; y < f.length; y++) {
          const _ = f[y],
            T = _[0] === "[",
            k = c.has(_);
          T || k ? (g.length > 0 && (g.sort(), h.push(...g), (g = [])), h.push(_)) : g.push(_);
        }
        return (g.length > 0 && (g.sort(), h.push(...g)), h);
      }
    );
  },
  Tx = (o) => ({ cache: bx(o.cacheSize), parseClassName: Sx(o), sortModifiers: kx(o), postfixLookupClassGroupIds: Ex(o), ...dx(o) }),
  Ex = (o) => {
    const c = Object.create(null),
      f = o.postfixLookupClassGroups;
    if (f) for (let h = 0; h < f.length; h++) c[f[h]] = !0;
    return c;
  },
  Ax = /\s+/,
  Cx = (o, c) => {
    const { parseClassName: f, getClassGroupId: h, getConflictingClassGroupIds: g, sortModifiers: y, postfixLookupClassGroupIds: _ } = c,
      T = [],
      k = o.trim().split(Ax);
    let b = "";
    for (let E = k.length - 1; E >= 0; E -= 1) {
      const A = k[E],
        { isExternal: C, modifiers: D, hasImportantModifier: B, baseClassName: H, maybePostfixModifierPosition: W } = f(A);
      if (C) {
        b = A + (b.length > 0 ? " " + b : b);
        continue;
      }
      let X = !!W,
        $;
      if (X) {
        const ft = H.substring(0, W);
        $ = h(ft);
        const F = $ && _[$] ? h(H) : void 0;
        F && F !== $ && (($ = F), (X = !1));
      } else $ = h(H);
      if (!$) {
        if (!X) {
          b = A + (b.length > 0 ? " " + b : b);
          continue;
        }
        if ((($ = h(H)), !$)) {
          b = A + (b.length > 0 ? " " + b : b);
          continue;
        }
        X = !1;
      }
      const K = D.length === 0 ? "" : D.length === 1 ? D[0] : y(D).join(":"),
        at = B ? K + id : K,
        nt = at + $;
      if (T.indexOf(nt) > -1) continue;
      T.push(nt);
      const ot = g($, X);
      for (let ft = 0; ft < ot.length; ++ft) {
        const F = ot[ft];
        T.push(at + F);
      }
      b = A + (b.length > 0 ? " " + b : b);
    }
    return b;
  },
  Mx = (...o) => {
    let c = 0,
      f,
      h,
      g = "";
    for (; c < o.length; ) (f = o[c++]) && (h = av(f)) && (g && (g += " "), (g += h));
    return g;
  },
  av = (o) => {
    if (typeof o == "string") return o;
    let c,
      f = "";
    for (let h = 0; h < o.length; h++) o[h] && (c = av(o[h])) && (f && (f += " "), (f += c));
    return f;
  },
  Lx = (o, ...c) => {
    let f, h, g, y;
    const _ = (k) => {
        const b = c.reduce((E, A) => A(E), o());
        return ((f = Tx(b)), (h = f.cache.get), (g = f.cache.set), (y = T), T(k));
      },
      T = (k) => {
        const b = h(k);
        if (b) return b;
        const E = Cx(k, f);
        return (g(k, E), E);
      };
    return ((y = _), (...k) => y(Mx(...k)));
  },
  Ox = [],
  xe = (o) => {
    const c = (f) => f[o] || Ox;
    return ((c.isThemeGetter = !0), c);
  },
  rv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  ov = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Rx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  zx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  jx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Px = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Za = (o) => Rx.test(o),
  Nt = (o) => !!o && !Number.isNaN(Number(o)),
  oi = (o) => !!o && Number.isInteger(Number(o)),
  Yf = (o) => o.endsWith("%") && Nt(o.slice(0, -1)),
  Zi = (o) => zx.test(o),
  sv = () => !0,
  Bx = (o) => jx.test(o) && !Dx.test(o),
  gd = () => !1,
  Hx = (o) => Nx.test(o),
  Zx = (o) => Px.test(o),
  Ux = (o) => !mt(o) && !gt(o),
  Gx = (o) => o.startsWith("@container") && ((o[10] === "/" && o[11] !== void 0) || (o[11] === "s" && o[16] !== void 0 && o.startsWith("-size/", 10)) || (o[11] === "n" && o[18] !== void 0 && o.startsWith("-normal/", 10))),
  Wx = (o) => qa(o, cv, gd),
  mt = (o) => rv.test(o),
  br = (o) => qa(o, fv, Bx),
  Vp = (o) => qa(o, Fx, Nt),
  qx = (o) => qa(o, hv, sv),
  Vx = (o) => qa(o, dv, gd),
  Yp = (o) => qa(o, lv, gd),
  Yx = (o) => qa(o, uv, Zx),
  mu = (o) => qa(o, mv, Hx),
  gt = (o) => ov.test(o),
  Cs = (o) => Tr(o, fv),
  Xx = (o) => Tr(o, dv),
  Xp = (o) => Tr(o, lv),
  Ix = (o) => Tr(o, cv),
  Kx = (o) => Tr(o, uv),
  pu = (o) => Tr(o, mv, !0),
  Qx = (o) => Tr(o, hv, !0),
  qa = (o, c, f) => {
    const h = rv.exec(o);
    return h ? (h[1] ? c(h[1]) : f(h[2])) : !1;
  },
  Tr = (o, c, f = !1) => {
    const h = ov.exec(o);
    return h ? (h[1] ? c(h[1]) : f) : !1;
  },
  lv = (o) => o === "position" || o === "percentage",
  uv = (o) => o === "image" || o === "url",
  cv = (o) => o === "length" || o === "size" || o === "bg-size",
  fv = (o) => o === "length",
  Fx = (o) => o === "number",
  dv = (o) => o === "family-name",
  hv = (o) => o === "number" || o === "weight",
  mv = (o) => o === "shadow",
  Jx = () => {
    const o = xe("color"),
      c = xe("font"),
      f = xe("text"),
      h = xe("font-weight"),
      g = xe("tracking"),
      y = xe("leading"),
      _ = xe("breakpoint"),
      T = xe("container"),
      k = xe("spacing"),
      b = xe("radius"),
      E = xe("shadow"),
      A = xe("inset-shadow"),
      C = xe("text-shadow"),
      D = xe("drop-shadow"),
      B = xe("blur"),
      H = xe("perspective"),
      W = xe("aspect"),
      X = xe("ease"),
      $ = xe("animate"),
      K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      at = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
      nt = () => [...at(), gt, mt],
      ot = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ft = () => ["auto", "contain", "none"],
      F = () => [gt, mt, k],
      pt = () => [Za, "full", "auto", ...F()],
      kt = () => [oi, "none", "subgrid", gt, mt],
      _t = () => ["auto", { span: ["full", oi, gt, mt] }, oi, gt, mt],
      ht = () => [oi, "auto", gt, mt],
      Ot = () => ["auto", "min", "max", "fr", gt, mt],
      Tt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
      Rt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      z = () => ["auto", ...F()],
      et = () => [Za, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()],
      Y = () => [Za, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...F()],
      xt = () => [Za, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...F()],
      S = () => [o, gt, mt],
      I = () => [...at(), Xp, Yp, { position: [gt, mt] }],
      lt = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      st = () => ["auto", "cover", "contain", Ix, Wx, { size: [gt, mt] }],
      ct = () => [Yf, Cs, br],
      ut = () => ["", "none", "full", b, gt, mt],
      rt = () => ["", Nt, Cs, br],
      Xt = () => ["solid", "dashed", "dotted", "double"],
      Pt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      Gt = () => [Nt, Yf, Xp, Yp],
      on = () => ["", "none", B, gt, mt],
      Ue = () => ["none", Nt, gt, mt],
      je = () => ["none", Nt, gt, mt],
      sn = () => [Nt, gt, mt],
      bn = () => [Za, "full", ...F()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Zi],
        breakpoint: [Zi],
        color: [sv],
        container: [Zi],
        "drop-shadow": [Zi],
        ease: ["in", "out", "in-out"],
        font: [Ux],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [Zi],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [Zi],
        shadow: [Zi],
        spacing: ["px", Nt],
        text: [Zi],
        "text-shadow": [Zi],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Za, mt, gt, W] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", gt, mt] }],
        "container-named": [Gx],
        columns: [{ columns: [Nt, mt, gt, T] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: nt() }],
        overflow: [{ overflow: ot() }],
        "overflow-x": [{ "overflow-x": ot() }],
        "overflow-y": [{ "overflow-y": ot() }],
        overscroll: [{ overscroll: ft() }],
        "overscroll-x": [{ "overscroll-x": ft() }],
        "overscroll-y": [{ "overscroll-y": ft() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: pt() }],
        "inset-x": [{ "inset-x": pt() }],
        "inset-y": [{ "inset-y": pt() }],
        start: [{ "inset-s": pt(), start: pt() }],
        end: [{ "inset-e": pt(), end: pt() }],
        "inset-bs": [{ "inset-bs": pt() }],
        "inset-be": [{ "inset-be": pt() }],
        top: [{ top: pt() }],
        right: [{ right: pt() }],
        bottom: [{ bottom: pt() }],
        left: [{ left: pt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [oi, "auto", gt, mt] }],
        basis: [{ basis: [Za, "full", "auto", T, ...F()] }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Nt, Za, "auto", "initial", "none", mt] }],
        grow: [{ grow: ["", Nt, gt, mt] }],
        shrink: [{ shrink: ["", Nt, gt, mt] }],
        order: [{ order: [oi, "first", "last", "none", gt, mt] }],
        "grid-cols": [{ "grid-cols": kt() }],
        "col-start-end": [{ col: _t() }],
        "col-start": [{ "col-start": ht() }],
        "col-end": [{ "col-end": ht() }],
        "grid-rows": [{ "grid-rows": kt() }],
        "row-start-end": [{ row: _t() }],
        "row-start": [{ "row-start": ht() }],
        "row-end": [{ "row-end": ht() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": Ot() }],
        "auto-rows": [{ "auto-rows": Ot() }],
        gap: [{ gap: F() }],
        "gap-x": [{ "gap-x": F() }],
        "gap-y": [{ "gap-y": F() }],
        "justify-content": [{ justify: [...Tt(), "normal"] }],
        "justify-items": [{ "justify-items": [...Rt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Rt()] }],
        "align-content": [{ content: ["normal", ...Tt()] }],
        "align-items": [{ items: [...Rt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Rt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Tt() }],
        "place-items": [{ "place-items": [...Rt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Rt()] }],
        p: [{ p: F() }],
        px: [{ px: F() }],
        py: [{ py: F() }],
        ps: [{ ps: F() }],
        pe: [{ pe: F() }],
        pbs: [{ pbs: F() }],
        pbe: [{ pbe: F() }],
        pt: [{ pt: F() }],
        pr: [{ pr: F() }],
        pb: [{ pb: F() }],
        pl: [{ pl: F() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mbs: [{ mbs: z() }],
        mbe: [{ mbe: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        "space-x": [{ "space-x": F() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": F() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: et() }],
        "inline-size": [{ inline: ["auto", ...Y()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...Y()] }],
        "max-inline-size": [{ "max-inline": ["none", ...Y()] }],
        "block-size": [{ block: ["auto", ...xt()] }],
        "min-block-size": [{ "min-block": ["auto", ...xt()] }],
        "max-block-size": [{ "max-block": ["none", ...xt()] }],
        w: [{ w: [T, "screen", ...et()] }],
        "min-w": [{ "min-w": [T, "screen", "none", ...et()] }],
        "max-w": [{ "max-w": [T, "screen", "none", "prose", { screen: [_] }, ...et()] }],
        h: [{ h: ["screen", "lh", ...et()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...et()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...et()] }],
        "font-size": [{ text: ["base", f, Cs, br] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [h, Qx, qx] }],
        "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Yf, mt] }],
        "font-family": [{ font: [Xx, Vx, c] }],
        "font-features": [{ "font-features": [mt] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [g, gt, mt] }],
        "line-clamp": [{ "line-clamp": [Nt, "none", gt, Vp] }],
        leading: [{ leading: [y, ...F()] }],
        "list-image": [{ "list-image": ["none", gt, mt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", gt, mt] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "placeholder-color": [{ placeholder: S() }],
        "text-color": [{ text: S() }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...Xt(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: [Nt, "from-font", "auto", gt, br] }],
        "text-decoration-color": [{ decoration: S() }],
        "underline-offset": [{ "underline-offset": [Nt, "auto", gt, mt] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "tab-size": [{ tab: [oi, gt, mt] }],
        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", gt, mt] }],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", gt, mt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: I() }],
        "bg-repeat": [{ bg: lt() }],
        "bg-size": [{ bg: st() }],
        "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, oi, gt, mt], radial: ["", gt, mt], conic: [oi, gt, mt] }, Kx, Yx] }],
        "bg-color": [{ bg: S() }],
        "gradient-from-pos": [{ from: ct() }],
        "gradient-via-pos": [{ via: ct() }],
        "gradient-to-pos": [{ to: ct() }],
        "gradient-from": [{ from: S() }],
        "gradient-via": [{ via: S() }],
        "gradient-to": [{ to: S() }],
        rounded: [{ rounded: ut() }],
        "rounded-s": [{ "rounded-s": ut() }],
        "rounded-e": [{ "rounded-e": ut() }],
        "rounded-t": [{ "rounded-t": ut() }],
        "rounded-r": [{ "rounded-r": ut() }],
        "rounded-b": [{ "rounded-b": ut() }],
        "rounded-l": [{ "rounded-l": ut() }],
        "rounded-ss": [{ "rounded-ss": ut() }],
        "rounded-se": [{ "rounded-se": ut() }],
        "rounded-ee": [{ "rounded-ee": ut() }],
        "rounded-es": [{ "rounded-es": ut() }],
        "rounded-tl": [{ "rounded-tl": ut() }],
        "rounded-tr": [{ "rounded-tr": ut() }],
        "rounded-br": [{ "rounded-br": ut() }],
        "rounded-bl": [{ "rounded-bl": ut() }],
        "border-w": [{ border: rt() }],
        "border-w-x": [{ "border-x": rt() }],
        "border-w-y": [{ "border-y": rt() }],
        "border-w-s": [{ "border-s": rt() }],
        "border-w-e": [{ "border-e": rt() }],
        "border-w-bs": [{ "border-bs": rt() }],
        "border-w-be": [{ "border-be": rt() }],
        "border-w-t": [{ "border-t": rt() }],
        "border-w-r": [{ "border-r": rt() }],
        "border-w-b": [{ "border-b": rt() }],
        "border-w-l": [{ "border-l": rt() }],
        "divide-x": [{ "divide-x": rt() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": rt() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Xt(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Xt(), "hidden", "none"] }],
        "border-color": [{ border: S() }],
        "border-color-x": [{ "border-x": S() }],
        "border-color-y": [{ "border-y": S() }],
        "border-color-s": [{ "border-s": S() }],
        "border-color-e": [{ "border-e": S() }],
        "border-color-bs": [{ "border-bs": S() }],
        "border-color-be": [{ "border-be": S() }],
        "border-color-t": [{ "border-t": S() }],
        "border-color-r": [{ "border-r": S() }],
        "border-color-b": [{ "border-b": S() }],
        "border-color-l": [{ "border-l": S() }],
        "divide-color": [{ divide: S() }],
        "outline-style": [{ outline: [...Xt(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Nt, gt, mt] }],
        "outline-w": [{ outline: ["", Nt, Cs, br] }],
        "outline-color": [{ outline: S() }],
        shadow: [{ shadow: ["", "none", E, pu, mu] }],
        "shadow-color": [{ shadow: S() }],
        "inset-shadow": [{ "inset-shadow": ["none", A, pu, mu] }],
        "inset-shadow-color": [{ "inset-shadow": S() }],
        "ring-w": [{ ring: rt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: S() }],
        "ring-offset-w": [{ "ring-offset": [Nt, br] }],
        "ring-offset-color": [{ "ring-offset": S() }],
        "inset-ring-w": [{ "inset-ring": rt() }],
        "inset-ring-color": [{ "inset-ring": S() }],
        "text-shadow": [{ "text-shadow": ["none", C, pu, mu] }],
        "text-shadow-color": [{ "text-shadow": S() }],
        opacity: [{ opacity: [Nt, gt, mt] }],
        "mix-blend": [{ "mix-blend": [...Pt(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": Pt() }],
        "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"],
        "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
        "mask-image-linear-pos": [{ "mask-linear": [Nt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Gt() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Gt() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": S() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": S() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Gt() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Gt() }],
        "mask-image-t-from-color": [{ "mask-t-from": S() }],
        "mask-image-t-to-color": [{ "mask-t-to": S() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Gt() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Gt() }],
        "mask-image-r-from-color": [{ "mask-r-from": S() }],
        "mask-image-r-to-color": [{ "mask-r-to": S() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Gt() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Gt() }],
        "mask-image-b-from-color": [{ "mask-b-from": S() }],
        "mask-image-b-to-color": [{ "mask-b-to": S() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Gt() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Gt() }],
        "mask-image-l-from-color": [{ "mask-l-from": S() }],
        "mask-image-l-to-color": [{ "mask-l-to": S() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Gt() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Gt() }],
        "mask-image-x-from-color": [{ "mask-x-from": S() }],
        "mask-image-x-to-color": [{ "mask-x-to": S() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Gt() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Gt() }],
        "mask-image-y-from-color": [{ "mask-y-from": S() }],
        "mask-image-y-to-color": [{ "mask-y-to": S() }],
        "mask-image-radial": [{ "mask-radial": [gt, mt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Gt() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Gt() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": S() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": S() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }],
        "mask-image-radial-pos": [{ "mask-radial-at": at() }],
        "mask-image-conic-pos": [{ "mask-conic": [Nt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Gt() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Gt() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": S() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": S() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }],
        "mask-position": [{ mask: I() }],
        "mask-repeat": [{ mask: lt() }],
        "mask-size": [{ mask: st() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", gt, mt] }],
        filter: [{ filter: ["", "none", gt, mt] }],
        blur: [{ blur: on() }],
        brightness: [{ brightness: [Nt, gt, mt] }],
        contrast: [{ contrast: [Nt, gt, mt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", D, pu, mu] }],
        "drop-shadow-color": [{ "drop-shadow": S() }],
        grayscale: [{ grayscale: ["", Nt, gt, mt] }],
        "hue-rotate": [{ "hue-rotate": [Nt, gt, mt] }],
        invert: [{ invert: ["", Nt, gt, mt] }],
        saturate: [{ saturate: [Nt, gt, mt] }],
        sepia: [{ sepia: ["", Nt, gt, mt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", gt, mt] }],
        "backdrop-blur": [{ "backdrop-blur": on() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Nt, gt, mt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Nt, gt, mt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Nt, gt, mt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Nt, gt, mt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Nt, gt, mt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Nt, gt, mt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Nt, gt, mt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Nt, gt, mt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": F() }],
        "border-spacing-x": [{ "border-spacing-x": F() }],
        "border-spacing-y": [{ "border-spacing-y": F() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", gt, mt] }],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Nt, "initial", gt, mt] }],
        ease: [{ ease: ["linear", "initial", X, gt, mt] }],
        delay: [{ delay: [Nt, gt, mt] }],
        animate: [{ animate: ["none", $, gt, mt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [H, gt, mt] }],
        "perspective-origin": [{ "perspective-origin": nt() }],
        rotate: [{ rotate: Ue() }],
        "rotate-x": [{ "rotate-x": Ue() }],
        "rotate-y": [{ "rotate-y": Ue() }],
        "rotate-z": [{ "rotate-z": Ue() }],
        scale: [{ scale: je() }],
        "scale-x": [{ "scale-x": je() }],
        "scale-y": [{ "scale-y": je() }],
        "scale-z": [{ "scale-z": je() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: sn() }],
        "skew-x": [{ "skew-x": sn() }],
        "skew-y": [{ "skew-y": sn() }],
        transform: [{ transform: [gt, mt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: nt() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: bn() }],
        "translate-x": [{ "translate-x": bn() }],
        "translate-y": [{ "translate-y": bn() }],
        "translate-z": [{ "translate-z": bn() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [oi, gt, mt] }],
        accent: [{ accent: S() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: S() }],
        "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              gt,
              mt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": S() }],
        "scrollbar-track-color": [{ "scrollbar-track": S() }],
        "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mbs": [{ "scroll-mbs": F() }],
        "scroll-mbe": [{ "scroll-mbe": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pbs": [{ "scroll-pbs": F() }],
        "scroll-pbe": [{ "scroll-pbe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", gt, mt] }],
        fill: [{ fill: ["none", ...S()] }],
        "stroke-w": [{ stroke: [Nt, Cs, br, Vp] }],
        stroke: [{ stroke: ["none", ...S()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"],
    };
  },
  $x = Lx(Jx);
function xn(...o) {
  return $x(Jg(o));
}
const tb = X0,
  pv = R.forwardRef(({ className: o, ...c }, f) => m.jsx(Vg, { ref: f, className: xn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", o), ...c }));
pv.displayName = Vg.displayName;
const eb = I0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    { variants: { variant: { default: "border bg-background text-foreground", destructive: "destructive group border-destructive bg-destructive text-destructive-foreground" } }, defaultVariants: { variant: "default" } },
  ),
  gv = R.forwardRef(({ className: o, variant: c, ...f }, h) => m.jsx(Yg, { ref: h, className: xn(eb({ variant: c }), o), ...f }));
gv.displayName = Yg.displayName;
const nb = R.forwardRef(({ className: o, ...c }, f) =>
  m.jsx(Kg, {
    ref: f,
    className: xn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      o,
    ),
    ...c,
  }),
);
nb.displayName = Kg.displayName;
const vv = R.forwardRef(({ className: o, ...c }, f) =>
  m.jsx(Qg, {
    ref: f,
    className: xn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      o,
    ),
    "toast-close": "",
    ...c,
    children: m.jsx(tv, { className: "h-4 w-4" }),
  }),
);
vv.displayName = Qg.displayName;
const yv = R.forwardRef(({ className: o, ...c }, f) => m.jsx(Xg, { ref: f, className: xn("text-sm font-semibold", o), ...c }));
yv.displayName = Xg.displayName;
const _v = R.forwardRef(({ className: o, ...c }, f) => m.jsx(Ig, { ref: f, className: xn("text-sm opacity-90", o), ...c }));
_v.displayName = Ig.displayName;
function ib() {
  const { toasts: o } = q_();
  return m.jsxs(tb, {
    children: [
      o.map(function ({ id: c, title: f, description: h, action: g, ...y }) {
        return m.jsxs(gv, { ...y, children: [m.jsxs("div", { className: "grid gap-1", children: [f && m.jsx(yv, { children: f }), h && m.jsx(_v, { children: h })] }), g, m.jsx(vv, {})] }, c);
      }),
      m.jsx(pv, {}),
    ],
  });
}
const ab = ["top", "right", "bottom", "left"],
  Ga = Math.min,
  Ui = Math.max,
  Su = Math.round,
  gu = Math.floor,
  Gi = (o) => ({ x: o, y: o }),
  rb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xv(o, c, f) {
  return Ui(o, Ga(c, f));
}
function Vi(o, c) {
  return typeof o == "function" ? o(c) : o;
}
function Wa(o) {
  return o.split("-")[0];
}
function bo(o) {
  return o.split("-")[1];
}
function vd(o) {
  return o === "x" ? "y" : "x";
}
function yd(o) {
  return o === "y" ? "height" : "width";
}
function si(o) {
  const c = o[0];
  return c === "t" || c === "b" ? "y" : "x";
}
function _d(o) {
  return vd(si(o));
}
function ob(o, c, f) {
  f === void 0 && (f = !1);
  const h = bo(o),
    g = _d(o),
    y = yd(g);
  let _ = g === "x" ? (h === (f ? "end" : "start") ? "right" : "left") : h === "start" ? "bottom" : "top";
  return (c.reference[y] > c.floating[y] && (_ = ku(_)), [_, ku(_)]);
}
function sb(o) {
  const c = ku(o);
  return [ad(o), c, ad(c)];
}
function ad(o) {
  return o.includes("start") ? o.replace("start", "end") : o.replace("end", "start");
}
const Ip = ["left", "right"],
  Kp = ["right", "left"],
  lb = ["top", "bottom"],
  ub = ["bottom", "top"];
function cb(o, c, f) {
  switch (o) {
    case "top":
    case "bottom":
      return f ? (c ? Kp : Ip) : c ? Ip : Kp;
    case "left":
    case "right":
      return c ? lb : ub;
    default:
      return [];
  }
}
function fb(o, c, f, h) {
  const g = bo(o);
  let y = cb(Wa(o), f === "start", h);
  return (g && ((y = y.map((_) => _ + "-" + g)), c && (y = y.concat(y.map(ad)))), y);
}
function ku(o) {
  const c = Wa(o);
  return rb[c] + o.slice(c.length);
}
function db(o) {
  var c, f, h, g;
  return { top: (c = o.top) != null ? c : 0, right: (f = o.right) != null ? f : 0, bottom: (h = o.bottom) != null ? h : 0, left: (g = o.left) != null ? g : 0 };
}
function bv(o) {
  return typeof o != "number" ? db(o) : { top: o, right: o, bottom: o, left: o };
}
function Tu(o) {
  const { x: c, y: f, width: h, height: g } = o;
  return { width: h, height: g, top: f, left: c, right: c + h, bottom: f + g, x: c, y: f };
}
function Qp(o, c, f) {
  let { reference: h, floating: g } = o;
  const y = si(c),
    _ = _d(c),
    T = yd(_),
    k = Wa(c),
    b = y === "y",
    E = h.x + h.width / 2 - g.width / 2,
    A = h.y + h.height / 2 - g.height / 2,
    C = h[T] / 2 - g[T] / 2;
  let D;
  switch (k) {
    case "top":
      D = { x: E, y: h.y - g.height };
      break;
    case "bottom":
      D = { x: E, y: h.y + h.height };
      break;
    case "right":
      D = { x: h.x + h.width, y: A };
      break;
    case "left":
      D = { x: h.x - g.width, y: A };
      break;
    default:
      D = { x: h.x, y: h.y };
  }
  const B = bo(c);
  return (B && (D[_] += C * (B === "end" ? 1 : -1) * (f && b ? -1 : 1)), D);
}
async function hb(o, c) {
  var f;
  c === void 0 && (c = {});
  const { x: h, y: g, platform: y, rects: _, elements: T, strategy: k } = o,
    { boundary: b = "clippingAncestors", rootBoundary: E = "viewport", elementContext: A = "floating", altBoundary: C = !1, padding: D = 0 } = Vi(c, o),
    B = bv(D),
    W = T[C ? (A === "floating" ? "reference" : "floating") : A],
    X = Tu(
      await y.getClippingRect({
        element: (f = await (y.isElement == null ? void 0 : y.isElement(W))) == null || f ? W : W.contextElement || (await (y.getDocumentElement == null ? void 0 : y.getDocumentElement(T.floating))),
        boundary: b,
        rootBoundary: E,
        strategy: k,
      }),
    ),
    $ = A === "floating" ? { x: h, y: g, width: _.floating.width, height: _.floating.height } : _.reference,
    K = await (y.getOffsetParent == null ? void 0 : y.getOffsetParent(T.floating)),
    at = ((await (y.isElement == null ? void 0 : y.isElement(K))) && (await (y.getScale == null ? void 0 : y.getScale(K)))) || { x: 1, y: 1 },
    nt = Tu(y.convertOffsetParentRelativeRectToViewportRelativeRect ? await y.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: T, rect: $, offsetParent: K, strategy: k }) : $);
  return { top: (X.top - nt.top + B.top) / at.y, bottom: (nt.bottom - X.bottom + B.bottom) / at.y, left: (X.left - nt.left + B.left) / at.x, right: (nt.right - X.right + B.right) / at.x };
}
const mb = 50,
  pb = async (o, c, f) => {
    const { placement: h = "bottom", strategy: g = "absolute", middleware: y = [], platform: _ } = f,
      T = _.detectOverflow ? _ : { ..._, detectOverflow: hb },
      k = await (_.isRTL == null ? void 0 : _.isRTL(c));
    let b = await _.getElementRects({ reference: o, floating: c, strategy: g }),
      { x: E, y: A } = Qp(b, h, k),
      C = h,
      D = 0;
    const B = {};
    for (let H = 0; H < y.length; H++) {
      const W = y[H];
      if (!W) continue;
      const { name: X, fn: $ } = W,
        { x: K, y: at, data: nt, reset: ot } = await $({ x: E, y: A, initialPlacement: h, placement: C, strategy: g, middlewareData: B, rects: b, platform: T, elements: { reference: o, floating: c } });
      ((E = K ?? E),
        (A = at ?? A),
        (B[X] = { ...B[X], ...nt }),
        ot &&
          D < mb &&
          (D++, typeof ot == "object" && (ot.placement && (C = ot.placement), ot.rects && (b = ot.rects === !0 ? await _.getElementRects({ reference: o, floating: c, strategy: g }) : ot.rects), ({ x: E, y: A } = Qp(b, C, k))), (H = -1)));
    }
    return { x: E, y: A, placement: C, strategy: g, middlewareData: B };
  },
  gb = (o) => ({
    name: "arrow",
    options: o,
    async fn(c) {
      const { x: f, y: h, placement: g, rects: y, platform: _, elements: T, middlewareData: k } = c,
        { element: b, padding: E = 0 } = Vi(o, c) || {};
      if (b == null) return {};
      const A = bv(E),
        C = { x: f, y: h },
        D = _d(g),
        B = yd(D),
        H = await _.getDimensions(b),
        W = D === "y",
        X = W ? "top" : "left",
        $ = W ? "bottom" : "right",
        K = W ? "clientHeight" : "clientWidth",
        at = y.reference[B] + y.reference[D] - C[D] - y.floating[B],
        nt = C[D] - y.reference[D],
        ot = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(b));
      let ft = ot ? ot[K] : 0;
      (!ft || !(await (_.isElement == null ? void 0 : _.isElement(ot)))) && (ft = T.floating[K] || y.floating[B]);
      const F = at / 2 - nt / 2,
        pt = ft / 2 - H[B] / 2 - 1,
        kt = Ga(A[X], pt),
        _t = Ga(A[$], pt),
        ht = ft - H[B] - _t,
        Ot = ft / 2 - H[B] / 2 + F,
        Tt = xv(kt, Ot, ht),
        Rt = !k.arrow && bo(g) != null && Ot !== Tt && y.reference[B] / 2 - (Ot < kt ? kt : _t) - H[B] / 2 < 0,
        z = Rt ? (Ot < kt ? Ot - kt : Ot - ht) : 0;
      return { [D]: C[D] + z, data: { [D]: Tt, centerOffset: Ot - Tt - z, ...(Rt && { alignmentOffset: z }) }, reset: Rt };
    },
  }),
  vb = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: "flip",
        options: o,
        async fn(c) {
          var f, h;
          const { placement: g, middlewareData: y, rects: _, initialPlacement: T, platform: k, elements: b } = c,
            { mainAxis: E = !0, crossAxis: A = !0, fallbackPlacements: C, fallbackStrategy: D = "bestFit", fallbackAxisSideDirection: B = "none", flipAlignment: H = !0, ...W } = Vi(o, c);
          if ((f = y.arrow) != null && f.alignmentOffset) return {};
          const X = Wa(g),
            $ = si(T),
            K = Wa(T) === T,
            at = await (k.isRTL == null ? void 0 : k.isRTL(b.floating)),
            nt = C || (K || !H ? [ku(T)] : sb(T)),
            ot = B !== "none";
          !C && ot && nt.push(...fb(T, H, B, at));
          const ft = [T, ...nt],
            F = await k.detectOverflow(c, W),
            pt = [];
          let kt = ((h = y.flip) == null ? void 0 : h.overflows) || [];
          if ((E && pt.push(F[X]), A)) {
            const Tt = ob(g, _, at);
            pt.push(F[Tt[0]], F[Tt[1]]);
          }
          if (((kt = [...kt, { placement: g, overflows: pt }]), !pt.every((Tt) => Tt <= 0))) {
            var _t, ht;
            const Tt = (((_t = y.flip) == null ? void 0 : _t.index) || 0) + 1,
              Rt = ft[Tt];
            if (Rt && (!(A === "alignment" ? $ !== si(Rt) : !1) || kt.every((Y) => (si(Y.placement) === $ ? Y.overflows[0] > 0 : !0)))) return { data: { index: Tt, overflows: kt }, reset: { placement: Rt } };
            let z = (ht = kt.filter((et) => et.overflows[0] <= 0).sort((et, Y) => et.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : ht.placement;
            if (!z)
              switch (D) {
                case "bestFit": {
                  var Ot;
                  const et =
                    (Ot = kt
                      .filter((Y) => {
                        if (ot) {
                          const xt = si(Y.placement);
                          return xt === $ || xt === "y";
                        }
                        return !0;
                      })
                      .map((Y) => [Y.placement, Y.overflows.filter((xt) => xt > 0).reduce((xt, S) => xt + S, 0)])
                      .sort((Y, xt) => Y[1] - xt[1])[0]) == null
                      ? void 0
                      : Ot[0];
                  et && (z = et);
                  break;
                }
                case "initialPlacement":
                  z = T;
                  break;
              }
            if (g !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Fp(o, c) {
  return { top: o.top - c.height, right: o.right - c.width, bottom: o.bottom - c.height, left: o.left - c.width };
}
function Jp(o) {
  return ab.some((c) => o[c] >= 0);
}
const yb = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: "hide",
        options: o,
        async fn(c) {
          const { rects: f, platform: h } = c,
            { strategy: g = "referenceHidden", ...y } = Vi(o, c);
          switch (g) {
            case "referenceHidden": {
              const _ = await h.detectOverflow(c, { ...y, elementContext: "reference" }),
                T = Fp(_, f.reference);
              return { data: { referenceHiddenOffsets: T, referenceHidden: Jp(T) } };
            }
            case "escaped": {
              const _ = await h.detectOverflow(c, { ...y, altBoundary: !0 }),
                T = Fp(_, f.floating);
              return { data: { escapedOffsets: T, escaped: Jp(T) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  wv = new Set(["left", "top"]);
async function _b(o, c) {
  const { placement: f, platform: h, elements: g } = o,
    y = await (h.isRTL == null ? void 0 : h.isRTL(g.floating)),
    _ = Wa(f),
    T = bo(f),
    k = si(f) === "y",
    b = wv.has(_) ? -1 : 1,
    E = y && k ? -1 : 1,
    A = Vi(c, o);
  let { mainAxis: C, crossAxis: D, alignmentAxis: B } = typeof A == "number" ? { mainAxis: A, crossAxis: 0, alignmentAxis: null } : { mainAxis: A.mainAxis || 0, crossAxis: A.crossAxis || 0, alignmentAxis: A.alignmentAxis };
  return (T && typeof B == "number" && (D = T === "end" ? B * -1 : B), k ? { x: D * E, y: C * b } : { x: C * b, y: D * E });
}
const xb = function (o) {
    return (
      o === void 0 && (o = 0),
      {
        name: "offset",
        options: o,
        async fn(c) {
          var f, h;
          const { x: g, y, placement: _, middlewareData: T } = c,
            k = await _b(c, o);
          return _ === ((f = T.offset) == null ? void 0 : f.placement) && (h = T.arrow) != null && h.alignmentOffset ? {} : { x: g + k.x, y: y + k.y, data: { ...k, placement: _ } };
        },
      }
    );
  },
  bb = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: "shift",
        options: o,
        async fn(c) {
          const { x: f, y: h, placement: g, platform: y } = c,
            {
              mainAxis: _ = !0,
              crossAxis: T = !1,
              limiter: k = {
                fn: ($) => {
                  let { x: K, y: at } = $;
                  return { x: K, y: at };
                },
              },
              ...b
            } = Vi(o, c),
            E = { x: f, y: h },
            A = await y.detectOverflow(c, b),
            C = si(g),
            D = vd(C);
          let B = E[D],
            H = E[C];
          const W = ($, K) => xv(K + A[$ === "y" ? "top" : "left"], K, K - A[$ === "y" ? "bottom" : "right"]);
          (_ && (B = W(D, B)), T && (H = W(C, H)));
          const X = k.fn({ ...c, [D]: B, [C]: H });
          return { ...X, data: { x: X.x - f, y: X.y - h, enabled: { [D]: _, [C]: T } } };
        },
      }
    );
  },
  wb = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        options: o,
        fn(c) {
          var f, h;
          const { x: g, y, placement: _, rects: T, middlewareData: k } = c,
            { offset: b = 0, mainAxis: E = !0, crossAxis: A = !0 } = Vi(o, c),
            C = { x: g, y },
            D = si(_),
            B = vd(D);
          let H = C[B],
            W = C[D];
          const X = Vi(b, c),
            $ = typeof X == "number" ? { mainAxis: X, crossAxis: 0 } : { mainAxis: (f = X.mainAxis) != null ? f : 0, crossAxis: (h = X.crossAxis) != null ? h : 0 };
          if (E) {
            const nt = B === "y" ? "height" : "width",
              ot = T.reference[B] - T.floating[nt] + $.mainAxis,
              ft = T.reference[B] + T.reference[nt] - $.mainAxis;
            H < ot ? (H = ot) : H > ft && (H = ft);
          }
          if (A) {
            var K, at;
            const nt = B === "y" ? "width" : "height",
              ot = wv.has(Wa(_)),
              ft = T.reference[D] - T.floating[nt] + ((ot && ((K = k.offset) == null ? void 0 : K[D])) || 0) + (ot ? 0 : $.crossAxis),
              F = T.reference[D] + T.reference[nt] + (ot ? 0 : ((at = k.offset) == null ? void 0 : at[D]) || 0) - (ot ? $.crossAxis : 0);
            W < ft ? (W = ft) : W > F && (W = F);
          }
          return { [B]: H, [D]: W };
        },
      }
    );
  },
  Sb = function (o) {
    return (
      o === void 0 && (o = {}),
      {
        name: "size",
        options: o,
        async fn(c) {
          const { placement: f, rects: h, platform: g, elements: y } = c,
            { apply: _ = () => {}, ...T } = Vi(o, c),
            k = await g.detectOverflow(c, T),
            b = Wa(f),
            E = bo(f),
            A = si(f) === "y",
            { width: C, height: D } = h.floating;
          let B, H;
          b === "top" || b === "bottom" ? ((B = b), (H = E === ((await (g.isRTL == null ? void 0 : g.isRTL(y.floating))) ? "start" : "end") ? "left" : "right")) : ((H = b), (B = E === "end" ? "top" : "bottom"));
          const W = D - k.top - k.bottom,
            X = C - k.left - k.right,
            $ = Ga(D - k[B], W),
            K = Ga(C - k[H], X),
            at = c.middlewareData.shift,
            nt = !at;
          let ot = $,
            ft = K;
          (at != null && at.enabled.x && (ft = X),
            at != null && at.enabled.y && (ot = W),
            nt && !E && (A ? (ft = C - 2 * Ui(k.left, k.right)) : (ot = D - 2 * Ui(k.top, k.bottom))),
            await _({ ...c, availableWidth: ft, availableHeight: ot }));
          const F = await g.getDimensions(y.floating);
          return C !== F.width || D !== F.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function zu() {
  return typeof window < "u";
}
function wo(o) {
  return Sv(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function rn(o) {
  var c;
  return (o == null || (c = o.ownerDocument) == null ? void 0 : c.defaultView) || window;
}
function Yi(o) {
  var c;
  return (c = (Sv(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : c.documentElement;
}
function Sv(o) {
  return zu() ? o instanceof Node || o instanceof rn(o).Node : !1;
}
function li(o) {
  return zu() ? o instanceof Element || o instanceof rn(o).Element : !1;
}
function Va(o) {
  return zu() ? o instanceof HTMLElement || o instanceof rn(o).HTMLElement : !1;
}
function $p(o) {
  return !zu() || typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof rn(o).ShadowRoot;
}
function ju(o) {
  const { overflow: c, overflowX: f, overflowY: h, display: g } = ui(o);
  return /auto|scroll|overlay|hidden|clip/.test(c + h + f) && g !== "inline" && g !== "contents";
}
function kb(o) {
  return /^(table|td|th)$/.test(wo(o));
}
function Du(o) {
  try {
    if (o.matches(":popover-open")) return !0;
  } catch {}
  try {
    return o.matches(":modal");
  } catch {
    return !1;
  }
}
const Tb = /transform|translate|scale|rotate|perspective|filter/,
  Eb = /paint|layout|strict|content/,
  wr = (o) => !!o && o !== "none";
let Xf;
function xd(o) {
  const c = li(o) ? ui(o) : o;
  return wr(c.transform) || wr(c.translate) || wr(c.scale) || wr(c.rotate) || wr(c.perspective) || (!bd() && (wr(c.backdropFilter) || wr(c.filter))) || Tb.test(c.willChange || "") || Eb.test(c.contain || "");
}
function Ab(o) {
  let c = Sr(o);
  for (; Va(c) && !Rs(c); ) {
    if (xd(c)) return c;
    if (Du(c)) return null;
    c = Sr(c);
  }
  return null;
}
function bd() {
  return (Xf == null && (Xf = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Xf);
}
function Rs(o) {
  return /^(html|body|#document)$/.test(wo(o));
}
function ui(o) {
  return rn(o).getComputedStyle(o);
}
function Nu(o) {
  return li(o) ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop } : { scrollLeft: o.scrollX, scrollTop: o.scrollY };
}
function Sr(o) {
  if (wo(o) === "html") return o;
  const c = o.assignedSlot || o.parentNode || ($p(o) && o.host) || Yi(o);
  return $p(c) ? c.host : c;
}
function kv(o) {
  const c = Sr(o);
  return Rs(c) ? (o.ownerDocument || o).body : Va(c) && ju(c) ? c : kv(c);
}
function zs(o, c, f) {
  var h;
  (c === void 0 && (c = []), f === void 0 && (f = !0));
  const g = kv(o),
    y = g === ((h = o.ownerDocument) == null ? void 0 : h.body),
    _ = rn(g);
  if (y) {
    const T = rd(_);
    return c.concat(_, _.visualViewport || [], ju(g) ? g : [], T && f ? zs(T) : []);
  } else return c.concat(g, zs(g, [], f));
}
function rd(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function Tv(o) {
  const c = ui(o);
  let f = parseFloat(c.width) || 0,
    h = parseFloat(c.height) || 0;
  const g = Va(o),
    y = g ? o.offsetWidth : f,
    _ = g ? o.offsetHeight : h,
    T = Su(f) !== y || Su(h) !== _;
  return (T && ((f = y), (h = _)), { width: f, height: h, $: T });
}
function wd(o) {
  return li(o) ? o : o.contextElement;
}
function yo(o) {
  const c = wd(o);
  if (!Va(c)) return Gi(1);
  const f = c.getBoundingClientRect(),
    { width: h, height: g, $: y } = Tv(c);
  let _ = (y ? Su(f.width) : f.width) / h,
    T = (y ? Su(f.height) : f.height) / g;
  return ((!_ || !Number.isFinite(_)) && (_ = 1), (!T || !Number.isFinite(T)) && (T = 1), { x: _, y: T });
}
const Cb = Gi(0);
function Ev(o) {
  const c = rn(o);
  return !bd() || !c.visualViewport ? Cb : { x: c.visualViewport.offsetLeft, y: c.visualViewport.offsetTop };
}
function Mb(o, c, f) {
  return (c === void 0 && (c = !1), !!f && c && f === rn(o));
}
function kr(o, c, f, h) {
  (c === void 0 && (c = !1), f === void 0 && (f = !1));
  const g = o.getBoundingClientRect(),
    y = wd(o);
  let _ = Gi(1);
  c && (h ? li(h) && (_ = yo(h)) : (_ = yo(o)));
  const T = Mb(y, f, h) ? Ev(y) : Gi(0);
  let k = (g.left + T.x) / _.x,
    b = (g.top + T.y) / _.y,
    E = g.width / _.x,
    A = g.height / _.y;
  if (y && h) {
    const C = rn(y),
      D = li(h) ? rn(h) : h;
    let B = C,
      H = rd(B);
    for (; H && D !== B; ) {
      const W = yo(H),
        X = H.getBoundingClientRect(),
        $ = ui(H),
        K = X.left + (H.clientLeft + parseFloat($.paddingLeft)) * W.x,
        at = X.top + (H.clientTop + parseFloat($.paddingTop)) * W.y;
      ((k *= W.x), (b *= W.y), (E *= W.x), (A *= W.y), (k += K), (b += at), (B = rn(H)), (H = rd(B)));
    }
  }
  return Tu({ width: E, height: A, x: k, y: b });
}
function Pu(o, c) {
  const f = Nu(o).scrollLeft;
  return c ? c.left + f : kr(Yi(o)).left + f;
}
function Av(o, c) {
  const f = o.getBoundingClientRect(),
    h = f.left + c.scrollLeft - Pu(o, f),
    g = f.top + c.scrollTop;
  return { x: h, y: g };
}
function Lb(o) {
  let { elements: c, rect: f, offsetParent: h, strategy: g } = o;
  const y = g === "fixed",
    _ = Yi(h),
    T = c ? Du(c.floating) : !1;
  if (h === _ || (T && y)) return f;
  let k = { scrollLeft: 0, scrollTop: 0 },
    b = Gi(1);
  const E = Gi(0),
    A = Va(h);
  if ((A || !y) && ((wo(h) !== "body" || ju(_)) && (k = Nu(h)), A)) {
    const D = kr(h);
    ((b = yo(h)), (E.x = D.x + h.clientLeft), (E.y = D.y + h.clientTop));
  }
  const C = _ && !A && !y ? Av(_, k) : Gi(0);
  return { width: f.width * b.x, height: f.height * b.y, x: f.x * b.x - k.scrollLeft * b.x + E.x + C.x, y: f.y * b.y - k.scrollTop * b.y + E.y + C.y };
}
function Ob(o) {
  return o.getClientRects ? Array.from(o.getClientRects()) : [];
}
function Rb(o) {
  const c = Nu(o),
    f = o.ownerDocument.body,
    h = Ui(o.scrollWidth, o.clientWidth, f.scrollWidth, f.clientWidth),
    g = Ui(o.scrollHeight, o.clientHeight, f.scrollHeight, f.clientHeight);
  let y = -c.scrollLeft + Pu(o);
  const _ = -c.scrollTop;
  return (ui(f).direction === "rtl" && (y += Ui(o.clientWidth, f.clientWidth) - h), { width: h, height: g, x: y, y: _ });
}
const zb = 25;
function jb(o, c, f) {
  f === void 0 && (f = "viewport");
  const h = f === "layoutViewport",
    g = rn(o),
    y = Yi(o),
    _ = g.visualViewport;
  let T = y.clientWidth,
    k = y.clientHeight,
    b = 0,
    E = 0;
  if (_) {
    const C = !bd() || c === "fixed";
    h ? C || ((b = -_.offsetLeft), (E = -_.offsetTop)) : ((T = _.width), (k = _.height), C && ((b = _.offsetLeft), (E = _.offsetTop)));
  }
  if (Pu(y) <= 0) {
    const C = y.ownerDocument,
      D = C.body,
      B = getComputedStyle(D),
      H = (C.compatMode === "CSS1Compat" && parseFloat(B.marginLeft) + parseFloat(B.marginRight)) || 0,
      W = Math.abs(y.clientWidth - D.clientWidth - H),
      X = getComputedStyle(y).scrollbarGutter === "stable both-edges" ? W / 2 : W;
    X <= zb && (T -= X);
  }
  return { width: T, height: k, x: b, y: E };
}
function Db(o, c) {
  const f = kr(o, !0, c === "fixed"),
    h = f.top + o.clientTop,
    g = f.left + o.clientLeft,
    y = yo(o),
    _ = o.clientWidth * y.x,
    T = o.clientHeight * y.y,
    k = g * y.x,
    b = h * y.y;
  return { width: _, height: T, x: k, y: b };
}
function tg(o, c, f) {
  let h;
  if (c === "viewport" || c === "layoutViewport") h = jb(o, f, c);
  else if (c === "document") h = Rb(Yi(o));
  else if (li(c)) h = Db(c, f);
  else {
    const g = Ev(o);
    h = { x: c.x - g.x, y: c.y - g.y, width: c.width, height: c.height };
  }
  return Tu(h);
}
function Nb(o, c) {
  const f = c.get(o);
  if (f) return f;
  let h = zs(o, [], !1).filter((T) => li(T) && wo(T) !== "body"),
    g = null;
  const y = ui(o).position === "fixed";
  let _ = y ? Sr(o) : o;
  for (; li(_) && !Rs(_); ) {
    const T = ui(_),
      k = xd(_),
      b = g ? g.position : y ? "fixed" : "";
    (!k && (b === "fixed" || (b === "absolute" && T.position === "static")) ? (h = h.filter((A) => A !== _)) : (g = T), (_ = Sr(_)));
  }
  return (c.set(o, h), h);
}
function Pb(o) {
  let { element: c, boundary: f, rootBoundary: h, strategy: g } = o;
  const _ = [...(f === "clippingAncestors" ? (Du(c) ? [] : Nb(c, this._c)) : [].concat(f)), h],
    T = tg(c, _[0], g);
  let k = T.top,
    b = T.right,
    E = T.bottom,
    A = T.left;
  for (let C = 1; C < _.length; C++) {
    const D = tg(c, _[C], g);
    ((k = Ui(D.top, k)), (b = Ga(D.right, b)), (E = Ga(D.bottom, E)), (A = Ui(D.left, A)));
  }
  return { width: b - A, height: E - k, x: A, y: k };
}
function Bb(o) {
  const { width: c, height: f } = Tv(o);
  return { width: c, height: f };
}
function Hb(o, c, f) {
  const h = Va(c),
    g = Yi(c),
    y = f === "fixed",
    _ = kr(o, !0, y, c);
  let T = { scrollLeft: 0, scrollTop: 0 };
  const k = Gi(0);
  if ((h || !y) && ((wo(c) !== "body" || ju(g)) && (T = Nu(c)), h)) {
    const C = kr(c, !0, y, c);
    ((k.x = C.x + c.clientLeft), (k.y = C.y + c.clientTop));
  }
  !h && g && (k.x = Pu(g));
  const b = g && !h && !y ? Av(g, T) : Gi(0),
    E = _.left + T.scrollLeft - k.x - b.x,
    A = _.top + T.scrollTop - k.y - b.y;
  return { x: E, y: A, width: _.width, height: _.height };
}
function If(o) {
  return ui(o).position === "static";
}
function eg(o, c) {
  if (!Va(o) || ui(o).position === "fixed") return null;
  if (c) return c(o);
  let f = o.offsetParent;
  return (Yi(o) === f && (f = f.ownerDocument.body), f);
}
function Cv(o, c) {
  const f = rn(o);
  if (Du(o)) return f;
  if (!Va(o)) {
    let g = Sr(o);
    for (; g && !Rs(g); ) {
      if (li(g) && !If(g)) return g;
      g = Sr(g);
    }
    return f;
  }
  let h = eg(o, c);
  for (; h && kb(h) && If(h); ) h = eg(h, c);
  return h && Rs(h) && If(h) && !xd(h) ? f : h || Ab(o) || f;
}
const Zb = async function (o) {
  const c = this.getOffsetParent || Cv,
    f = this.getDimensions,
    h = await f(o.floating);
  return { reference: Hb(o.reference, await c(o.floating), o.strategy), floating: { x: 0, y: 0, width: h.width, height: h.height } };
};
function Ub(o) {
  return ui(o).direction === "rtl";
}
const Gb = { convertOffsetParentRelativeRectToViewportRelativeRect: Lb, getDocumentElement: Yi, getClippingRect: Pb, getOffsetParent: Cv, getElementRects: Zb, getClientRects: Ob, getDimensions: Bb, getScale: yo, isElement: li, isRTL: Ub };
function Mv(o, c) {
  return o.x === c.x && o.y === c.y && o.width === c.width && o.height === c.height;
}
function Wb(o, c, f) {
  let h = null,
    g;
  const y = Yi(o);
  function _() {
    var E;
    (clearTimeout(g), (E = h) == null || E.disconnect(), (h = null));
  }
  function T(E, A) {
    (E === void 0 && (E = !1), A === void 0 && (A = 1), _());
    const C = o.getBoundingClientRect(),
      { left: D, top: B, width: H, height: W } = C;
    if ((E || c(), !H || !W)) return;
    const X = gu(B),
      $ = gu(y.clientWidth - (D + H)),
      K = gu(y.clientHeight - (B + W)),
      at = gu(D),
      ot = { rootMargin: -X + "px " + -$ + "px " + -K + "px " + -at + "px", threshold: Ui(0, Ga(1, A)) || 1 };
    let ft = !0;
    function F(pt) {
      const kt = pt[0].intersectionRatio;
      if (!Mv(C, o.getBoundingClientRect())) return T();
      if (kt !== A) {
        if (!ft) return T();
        kt
          ? T(!1, kt)
          : (g = setTimeout(() => {
              T(!1, 1e-7);
            }, 1e3));
      }
      ft = !1;
    }
    try {
      h = new IntersectionObserver(F, { ...ot, root: y.ownerDocument });
    } catch {
      h = new IntersectionObserver(F, ot);
    }
    h.observe(o);
  }
  const k = rn(o),
    b = () => T(f);
  return (
    k.addEventListener("resize", b),
    T(!0),
    () => {
      (k.removeEventListener("resize", b), _());
    }
  );
}
function qb(o, c, f, h) {
  h === void 0 && (h = {});
  const { ancestorScroll: g = !0, ancestorResize: y = !0, elementResize: _ = typeof ResizeObserver == "function", layoutShift: T = typeof IntersectionObserver == "function", animationFrame: k = !1 } = h,
    b = wd(o),
    E = g || y ? [...(b ? zs(b) : []), ...(c ? zs(c) : [])] : [];
  E.forEach((X) => {
    (g && X.addEventListener("scroll", f), y && X.addEventListener("resize", f));
  });
  const A = b && T ? Wb(b, f, y) : null;
  let C = -1,
    D = null;
  _ &&
    ((D = new ResizeObserver((X) => {
      let [$] = X;
      ($ &&
        $.target === b &&
        D &&
        c &&
        (D.unobserve(c),
        cancelAnimationFrame(C),
        (C = requestAnimationFrame(() => {
          var K;
          (K = D) == null || K.observe(c);
        }))),
        f());
    })),
    b && !k && D.observe(b),
    c && D.observe(c));
  let B,
    H = k ? kr(o) : null;
  k && W();
  function W() {
    const X = kr(o);
    (H && !Mv(H, X) && f(), (H = X), (B = requestAnimationFrame(W)));
  }
  return (
    f(),
    () => {
      var X;
      (E.forEach(($) => {
        (g && $.removeEventListener("scroll", f), y && $.removeEventListener("resize", f));
      }),
        A?.(),
        (X = D) == null || X.disconnect(),
        (D = null),
        k && cancelAnimationFrame(B));
    }
  );
}
const Vb = xb,
  Yb = bb,
  Xb = vb,
  Ib = Sb,
  Kb = yb,
  ng = gb,
  Qb = wb,
  Fb = (o, c, f) => {
    const h = new Map(),
      g = f ?? {},
      y = { ...Gb, ...g.platform, _c: h };
    return pb(o, c, { ...g, platform: y });
  };
var Jb = typeof document < "u",
  $b = function () {},
  bu = Jb ? R.useLayoutEffect : $b;
function Eu(o, c) {
  if (o === c) return !0;
  if (typeof o != typeof c) return !1;
  if (typeof o == "function" && o.toString() === c.toString()) return !0;
  let f, h, g;
  if (o && c && typeof o == "object") {
    if (Array.isArray(o)) {
      if (((f = o.length), f !== c.length)) return !1;
      for (h = f; h-- !== 0; ) if (!Eu(o[h], c[h])) return !1;
      return !0;
    }
    if (((g = Object.keys(o)), (f = g.length), f !== Object.keys(c).length)) return !1;
    for (h = f; h-- !== 0; ) if (!{}.hasOwnProperty.call(c, g[h])) return !1;
    for (h = f; h-- !== 0; ) {
      const y = g[h];
      if (!(y === "_owner" && o.$$typeof) && !Eu(o[y], c[y])) return !1;
    }
    return !0;
  }
  return o !== o && c !== c;
}
function Lv(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ig(o, c) {
  const f = Lv(o);
  return Math.round(c * f) / f;
}
function Kf(o) {
  const c = R.useRef(o);
  return (
    bu(() => {
      c.current = o;
    }),
    c
  );
}
function t1(o) {
  o === void 0 && (o = {});
  const { placement: c = "bottom", strategy: f = "absolute", middleware: h = [], platform: g, elements: { reference: y, floating: _ } = {}, transform: T = !0, whileElementsMounted: k, open: b } = o,
    [E, A] = R.useState({ x: 0, y: 0, strategy: f, placement: c, middlewareData: {}, isPositioned: !1 }),
    [C, D] = R.useState(h);
  Eu(C, h) || D(h);
  const [B, H] = R.useState(null),
    [W, X] = R.useState(null),
    $ = R.useCallback((Y) => {
      Y !== ot.current && ((ot.current = Y), H(Y));
    }, []),
    K = R.useCallback((Y) => {
      Y !== ft.current && ((ft.current = Y), X(Y));
    }, []),
    at = y || B,
    nt = _ || W,
    ot = R.useRef(null),
    ft = R.useRef(null),
    F = R.useRef(E),
    pt = k != null,
    kt = Kf(k),
    _t = Kf(g),
    ht = Kf(b),
    Ot = R.useCallback(() => {
      if (!ot.current || !ft.current) return;
      const Y = { placement: c, strategy: f, middleware: C };
      (_t.current && (Y.platform = _t.current),
        Fb(ot.current, ft.current, Y).then((xt) => {
          const S = { ...xt, isPositioned: ht.current !== !1 };
          Tt.current &&
            !Eu(F.current, S) &&
            ((F.current = S),
            Mu.flushSync(() => {
              A(S);
            }));
        }));
    }, [C, c, f, _t, ht]);
  bu(() => {
    b === !1 && F.current.isPositioned && ((F.current.isPositioned = !1), A((Y) => ({ ...Y, isPositioned: !1 })));
  }, [b]);
  const Tt = R.useRef(!1);
  (bu(
    () => (
      (Tt.current = !0),
      () => {
        Tt.current = !1;
      }
    ),
    [],
  ),
    bu(() => {
      if ((at && (ot.current = at), nt && (ft.current = nt), at && nt)) {
        if (kt.current) return kt.current(at, nt, Ot);
        Ot();
      }
    }, [at, nt, Ot, kt, pt]));
  const Rt = R.useMemo(() => ({ reference: ot, floating: ft, setReference: $, setFloating: K }), [$, K]),
    z = R.useMemo(() => ({ reference: at, floating: nt }), [at, nt]),
    et = R.useMemo(() => {
      const Y = { position: f, left: 0, top: 0 };
      if (!z.floating) return Y;
      const xt = ig(z.floating, E.x),
        S = ig(z.floating, E.y);
      return T ? { ...Y, transform: "translate(" + xt + "px, " + S + "px)", ...(Lv(z.floating) >= 1.5 && { willChange: "transform" }) } : { position: f, left: xt, top: S };
    }, [f, T, z.floating, E.x, E.y]);
  return R.useMemo(() => ({ ...E, update: Ot, refs: Rt, elements: z, floatingStyles: et }), [E, Ot, Rt, z, et]);
}
const e1 = (o) => {
    function c(f) {
      return {}.hasOwnProperty.call(f, "current");
    }
    return {
      name: "arrow",
      options: o,
      fn(f) {
        const { element: h, padding: g } = typeof o == "function" ? o(f) : o;
        return h && c(h) ? (h.current != null ? ng({ element: h.current, padding: g }).fn(f) : {}) : h ? ng({ element: h, padding: g }).fn(f) : {};
      },
    };
  },
  n1 = (o, c) => {
    const f = Vb(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  },
  i1 = (o, c) => {
    const f = Yb(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  },
  a1 = (o, c) => ({ fn: Qb(o).fn, options: [o, c] }),
  r1 = (o, c) => {
    const f = Xb(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  },
  o1 = (o, c) => {
    const f = Ib(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  },
  s1 = (o, c) => {
    const f = Kb(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  },
  l1 = (o, c) => {
    const f = e1(o);
    return { name: f.name, fn: f.fn, options: [o, c] };
  };
function u1(o) {
  const [c, f] = R.useState(void 0);
  return (
    qn(() => {
      if (o) {
        f({ width: o.offsetWidth, height: o.offsetHeight });
        const h = new ResizeObserver((g) => {
          if (!Array.isArray(g) || !g.length) return;
          const y = g[0];
          let _, T;
          if ("borderBoxSize" in y) {
            const k = y.borderBoxSize,
              b = Array.isArray(k) ? k[0] : k;
            ((_ = b.inlineSize), (T = b.blockSize));
          } else ((_ = o.offsetWidth), (T = o.offsetHeight));
          f({ width: _, height: T });
        });
        return (h.observe(o, { box: "border-box" }), () => h.unobserve(o));
      } else f(void 0);
    }, [o]),
    c
  );
}
var c1 = Object.defineProperty,
  _o = (o, c) => c1(o, "name", { value: c, configurable: !0 }),
  Ov = "Popper",
  [Rv, zv] = Lu(Ov),
  [O2, f1] = Rv(Ov),
  jv = "PopperContent",
  [d1, R2] = Rv(jv),
  h1 = R.forwardRef(
    _o(function (c, f) {
      const {
          __scopePopper: h,
          side: g = "bottom",
          sideOffset: y = 0,
          align: _ = "center",
          alignOffset: T = 0,
          arrowPadding: k = 0,
          avoidCollisions: b = !0,
          collisionBoundary: E = [],
          collisionPadding: A = 0,
          sticky: C = "partial",
          hideWhenDetached: D = !1,
          updatePositionStrategy: B = "optimized",
          onPlaced: H,
          ...W
        } = c,
        X = f1(jv, h),
        [$, K] = R.useState(null),
        at = Wi(f, K),
        [nt, ot] = R.useState(null),
        ft = u1(nt),
        F = ft?.width ?? 0,
        pt = ft?.height ?? 0,
        kt = g + (_ !== "center" ? "-" + _ : ""),
        _t = typeof A == "number" ? A : { top: 0, right: 0, bottom: 0, left: 0, ...A },
        ht = Array.isArray(E) ? E : [E],
        Ot = ht.length > 0,
        Tt = { padding: _t, boundary: ht.filter(Dv), altBoundary: Ot },
        {
          refs: Rt,
          floatingStyles: z,
          placement: et,
          isPositioned: Y,
          middlewareData: xt,
        } = t1({
          strategy: "fixed",
          placement: kt,
          whileElementsMounted: _o((...Gt) => qb(...Gt, { animationFrame: B === "always" }), "whileElementsMounted"),
          elements: { reference: X.anchor },
          middleware: [
            n1({ mainAxis: y + pt, alignmentAxis: T }),
            b && i1({ mainAxis: !0, crossAxis: !1, limiter: C === "partial" ? a1() : void 0, ...Tt }),
            b && r1({ ...Tt }),
            o1({
              ...Tt,
              apply: _o(({ elements: Gt, rects: on, availableWidth: Ue, availableHeight: je }) => {
                const { width: sn, height: bn } = on.reference,
                  ci = Gt.floating.style;
                (ci.setProperty("--radix-popper-available-width", `${Ue}px`),
                  ci.setProperty("--radix-popper-available-height", `${je}px`),
                  ci.setProperty("--radix-popper-anchor-width", `${sn}px`),
                  ci.setProperty("--radix-popper-anchor-height", `${bn}px`));
              }, "apply"),
            }),
            nt && l1({ element: nt, padding: k }),
            m1({ arrowWidth: F, arrowHeight: pt }),
            D && s1({ strategy: "referenceHidden", ...Tt, boundary: Ot ? Tt.boundary : void 0 }),
          ],
        }),
        S = X.setPlacementState;
      qn(
        () => (
          S(et),
          () => {
            S(void 0);
          }
        ),
        [et, S],
      );
      const [I, lt] = Sd(et),
        st = Ua(H);
      qn(() => {
        Y && st?.();
      }, [Y, st]);
      const ct = xt.arrow?.x,
        ut = xt.arrow?.y,
        rt = xt.arrow?.centerOffset !== 0,
        [Xt, Pt] = R.useState();
      return (
        qn(() => {
          $ && Pt(window.getComputedStyle($).zIndex);
        }, [$]),
        m.jsx("div", {
          ref: Rt.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...z,
            transform: Y ? z.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Xt,
            "--radix-popper-transform-origin": [xt.transformOrigin?.x, xt.transformOrigin?.y].join(" "),
            ...(xt.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
          },
          dir: c.dir,
          children: m.jsx(d1, {
            scope: h,
            placedSide: I,
            placedAlign: lt,
            onArrowChange: ot,
            arrowX: ct,
            arrowY: ut,
            shouldHideArrow: rt,
            children: m.jsx(Vn.div, { "data-side": I, "data-align": lt, ...W, ref: at, style: { ...W.style, animation: Y ? W.style?.animation : "none" } }),
          }),
        })
      );
    }, "PopperContent"),
  );
function Dv(o) {
  return o !== null;
}
_o(Dv, "isNotNull");
var m1 = _o(
  (o) => ({
    name: "transformOrigin",
    options: o,
    fn(c) {
      const { placement: f, rects: h, middlewareData: g } = c,
        _ = g.arrow?.centerOffset !== 0,
        T = _ ? 0 : o.arrowWidth,
        k = _ ? 0 : o.arrowHeight,
        [b, E] = Sd(f),
        A = { start: "0%", center: "50%", end: "100%" }[E],
        C = (g.arrow?.x ?? 0) + T / 2,
        D = (g.arrow?.y ?? 0) + k / 2;
      let B = "",
        H = "";
      return (
        b === "bottom"
          ? ((B = _ ? A : `${C}px`), (H = `${-k}px`))
          : b === "top"
            ? ((B = _ ? A : `${C}px`), (H = `${h.floating.height + k}px`))
            : b === "right"
              ? ((B = `${-k}px`), (H = _ ? A : `${D}px`))
              : b === "left" && ((B = `${h.floating.width + k}px`), (H = _ ? A : `${D}px`)),
        { data: { x: B, y: H } }
      );
    },
  }),
  "transformOrigin",
);
function Sd(o) {
  const [c, f = "center"] = o.split("-");
  return [c, f];
}
_o(Sd, "getSideAndAlignFromPlacement");
var p1 = h1,
  g1 = Object.defineProperty,
  Ke = (o, c) => g1(o, "name", { value: c, configurable: !0 }),
  [kd] = Lu("Tooltip", [zv]),
  v1 = zv(),
  y1 = "TooltipProvider",
  _1 = 700,
  ag = "tooltip.open",
  [x1, b1] = kd(y1),
  w1 = Ke((o) => {
    const { __scopeTooltip: c, delayDuration: f = _1, skipDelayDuration: h = 300, disableHoverableContent: g = !1, children: y } = o,
      _ = R.useRef(!0),
      T = R.useRef(!1),
      k = R.useRef(0);
    return (
      R.useEffect(() => {
        const b = k.current;
        return () => window.clearTimeout(b);
      }, []),
      m.jsx(x1, {
        scope: c,
        isOpenDelayedRef: _,
        delayDuration: f,
        onOpen: R.useCallback(() => {
          h <= 0 || (window.clearTimeout(k.current), (_.current = !1));
        }, [h]),
        onClose: R.useCallback(() => {
          h <= 0 || (window.clearTimeout(k.current), (k.current = window.setTimeout(() => (_.current = !0), h)));
        }, [h]),
        isPointerInTransitRef: T,
        onPointerInTransitChange: R.useCallback((b) => {
          T.current = b;
        }, []),
        disableHoverableContent: g,
        children: y,
      })
    );
  }, "TooltipProvider"),
  S1 = "Tooltip",
  [z2, Bu] = kd(S1),
  Nv = "TooltipPortal",
  [k1, T1] = kd(Nv, { forceMount: void 0 }),
  E1 = Ke((o) => {
    const { __scopeTooltip: c, forceMount: f, children: h, container: g } = o,
      y = Bu(Nv, c);
    return m.jsx(k1, { scope: c, forceMount: f, children: m.jsx(fd, { present: f || y.open, children: m.jsx(Mg, { asChild: !0, container: g, children: h }) }) });
  }, "TooltipPortal"),
  js = "TooltipContent",
  A1 = R.forwardRef(
    Ke(function (c, f) {
      const h = T1(js, c.__scopeTooltip),
        { forceMount: g = h.forceMount, side: y = "top", ..._ } = c,
        T = Bu(js, c.__scopeTooltip);
      return m.jsx(fd, { present: g || T.open, children: T.disableHoverableContent ? m.jsx(Pv, { side: y, ..._, ref: f }) : m.jsx(C1, { side: y, ..._, ref: f }) });
    }, "TooltipContent"),
  ),
  C1 = R.forwardRef(
    Ke(function (c, f) {
      const h = Bu(js, c.__scopeTooltip),
        g = b1(js, c.__scopeTooltip),
        y = R.useRef(null),
        _ = Wi(f, y),
        [T, k] = R.useState(null),
        { trigger: b, onClose: E } = h,
        A = y.current,
        { onPointerInTransitChange: C } = g,
        D = R.useCallback(() => {
          (k(null), C(!1));
        }, [C]),
        B = R.useCallback(
          (H, W) => {
            const X = H.currentTarget,
              $ = { x: H.clientX, y: H.clientY },
              K = Bv($, X.getBoundingClientRect()),
              at = Hv($, K),
              nt = Zv(W.getBoundingClientRect()),
              ot = Gv([...at, ...nt]);
            (k(ot), C(!0));
          },
          [C],
        );
      return (
        R.useEffect(() => () => D(), [D]),
        R.useEffect(() => {
          if (b && A) {
            const H = Ke((X) => B(X, A), "handleTriggerLeave"),
              W = Ke((X) => B(X, b), "handleContentLeave");
            return (
              b.addEventListener("pointerleave", H),
              A.addEventListener("pointerleave", W),
              () => {
                (b.removeEventListener("pointerleave", H), A.removeEventListener("pointerleave", W));
              }
            );
          }
        }, [b, A, B, D]),
        R.useEffect(() => {
          if (T) {
            const H = Ke((W) => {
              const X = W.target,
                $ = { x: W.clientX, y: W.clientY },
                K = b?.contains(X) || A?.contains(X),
                at = !Uv($, T);
              K ? D() : at && (D(), E());
            }, "handleTrackPointerGrace");
            return (document.addEventListener("pointermove", H), () => document.removeEventListener("pointermove", H));
          }
        }, [b, A, T, E, D]),
        m.jsx(Pv, { ...c, ref: _ })
      );
    }, "TooltipContentHoverable"),
  ),
  M1 = K_("TooltipContent"),
  Pv = R.forwardRef(
    Ke(function (c, f) {
      const { __scopeTooltip: h, children: g, "aria-label": y, id: _, onEscapeKeyDown: T, onPointerDownOutside: k, ...b } = c,
        E = Bu(js, h),
        A = v1(h),
        { onClose: C } = E;
      (R.useEffect(() => (document.addEventListener(ag, C), () => document.removeEventListener(ag, C)), [C]),
        R.useEffect(() => {
          if (E.trigger) {
            const B = Ke((H) => {
              H.target instanceof Node && H.target.contains(E.trigger) && C();
            }, "handleScroll");
            return (window.addEventListener("scroll", B, { capture: !0 }), () => window.removeEventListener("scroll", B, { capture: !0 }));
          }
        }, [E.trigger, C]));
      const { setContentId: D } = E;
      return (
        qn(
          () => (
            D(_),
            () => {
              D(void 0);
            }
          ),
          [_, D],
        ),
        m.jsx(Eg, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: T,
          onPointerDownOutside: k,
          onFocusOutside: (B) => B.preventDefault(),
          onDismiss: C,
          children: m.jsxs(p1, {
            "data-state": E.stateAttribute,
            role: y ? void 0 : "tooltip",
            id: y ? void 0 : E.contentId,
            ...A,
            ...b,
            ref: f,
            style: {
              ...b.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
            },
            children: [m.jsx(M1, { children: g }), y ? m.jsx(k0, { id: E.contentId, role: "tooltip", children: y }) : null],
          }),
        })
      );
    }, "TooltipContentImpl"),
  );
function Bv(o, c) {
  const f = Math.abs(c.top - o.y),
    h = Math.abs(c.bottom - o.y),
    g = Math.abs(c.right - o.x),
    y = Math.abs(c.left - o.x);
  switch (Math.min(f, h, g, y)) {
    case y:
      return "left";
    case g:
      return "right";
    case f:
      return "top";
    case h:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
Ke(Bv, "getExitSideFromRect");
function Hv(o, c, f = 5) {
  const h = [];
  switch (c) {
    case "top":
      h.push({ x: o.x - f, y: o.y + f }, { x: o.x + f, y: o.y + f });
      break;
    case "bottom":
      h.push({ x: o.x - f, y: o.y - f }, { x: o.x + f, y: o.y - f });
      break;
    case "left":
      h.push({ x: o.x + f, y: o.y - f }, { x: o.x + f, y: o.y + f });
      break;
    case "right":
      h.push({ x: o.x - f, y: o.y - f }, { x: o.x - f, y: o.y + f });
      break;
  }
  return h;
}
Ke(Hv, "getPaddedExitPoints");
function Zv(o) {
  const { top: c, right: f, bottom: h, left: g } = o;
  return [
    { x: g, y: c },
    { x: f, y: c },
    { x: f, y: h },
    { x: g, y: h },
  ];
}
Ke(Zv, "getPointsFromRect");
function Uv(o, c) {
  const { x: f, y: h } = o;
  let g = !1;
  for (let y = 0, _ = c.length - 1; y < c.length; _ = y++) {
    const T = c[y],
      k = c[_],
      b = T.x,
      E = T.y,
      A = k.x,
      C = k.y;
    E > h != C > h && f < ((A - b) * (h - E)) / (C - E) + b && (g = !g);
  }
  return g;
}
Ke(Uv, "isPointInPolygon");
function Gv(o) {
  const c = o.slice();
  return (c.sort((f, h) => (f.x < h.x ? -1 : f.x > h.x ? 1 : f.y < h.y ? -1 : f.y > h.y ? 1 : 0)), Wv(c));
}
Ke(Gv, "getHull");
function Wv(o) {
  if (o.length <= 1) return o.slice();
  const c = [];
  for (let h = 0; h < o.length; h++) {
    const g = o[h];
    for (; c.length >= 2; ) {
      const y = c[c.length - 1],
        _ = c[c.length - 2];
      if ((y.x - _.x) * (g.y - _.y) >= (y.y - _.y) * (g.x - _.x)) c.pop();
      else break;
    }
    c.push(g);
  }
  c.pop();
  const f = [];
  for (let h = o.length - 1; h >= 0; h--) {
    const g = o[h];
    for (; f.length >= 2; ) {
      const y = f[f.length - 1],
        _ = f[f.length - 2];
      if ((y.x - _.x) * (g.y - _.y) >= (y.y - _.y) * (g.x - _.x)) f.pop();
      else break;
    }
    f.push(g);
  }
  return (f.pop(), c.length === 1 && f.length === 1 && c[0].x === f[0].x && c[0].y === f[0].y ? c : c.concat(f));
}
Ke(Wv, "getHullPresorted");
var L1 = w1,
  O1 = E1,
  qv = A1;
const R1 = L1,
  z1 = R.forwardRef(({ className: o, sideOffset: c = 4, ...f }, h) =>
    m.jsx(O1, {
      children: m.jsx(qv, {
        ref: h,
        sideOffset: c,
        className: xn(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          o,
        ),
        ...f,
      }),
    }),
  );
z1.displayName = qv.displayName;
const rg = [
  { label: "Pengenalan", href: "#tentang" },
  { label: "Data", href: "#data" },
  { label: "Peta", href: "#peta" },
  { label: "Tour", href: "#tour" },
  { label: "Relief", href: "#relief" },
];
function j1() {
  const [o, c] = R.useState(!1),
    [f, h] = R.useState(!1);
  R.useEffect(() => {
    const y = () => c(window.scrollY > 20);
    return (window.addEventListener("scroll", y, { passive: !0 }), () => window.removeEventListener("scroll", y));
  }, []);
  const g = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1e3,
    background: o ? "rgba(235,232,219,0.92)" : "transparent",
    backdropFilter: o ? "blur(16px) saturate(180%)" : "none",
    WebkitBackdropFilter: o ? "blur(16px) saturate(180%)" : "none",
    borderBottom: o ? "1px dashed color-mix(in srgb, #2a2119 20%, transparent)" : "1px solid transparent",
    transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
    padding: "0 var(--site-pad)",
    height: o ? 58 : 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return m.jsxs("nav", {
    style: g,
    children: [
      m.jsxs("a", {
        href: "#",
        style: { textDecoration: "none", display: "flex", alignItems: "center", gap: 12 },
        children: [
          m.jsx("div", {
            style: { width: 32, height: 32, borderRadius: "50%", background: "var(--yellow)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
            children: m.jsxs("svg", {
              width: "16",
              height: "18",
              viewBox: "0 0 16 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                m.jsx("rect", { x: "7", y: "0", width: "2", height: "2", rx: "1", fill: "#2a2119" }),
                m.jsx("rect", { x: "6", y: "2", width: "4", height: "2", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "5", y: "4", width: "6", height: "2", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "4", y: "6", width: "8", height: "2", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "3", y: "8", width: "10", height: "3", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "1", y: "11", width: "14", height: "2.5", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "0", y: "13.5", width: "16", height: "3", rx: "0.5", fill: "#2a2119" }),
                m.jsx("rect", { x: "1", y: "16.5", width: "14", height: "3.5", rx: "0", fill: "#2a2119" }),
              ],
            }),
          }),
          m.jsxs("div", {
            children: [
              m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 14, fontWeight: 500, color: "var(--dark)", letterSpacing: "-0.3px", lineHeight: 1.1 }, children: "Candi Siwa" }),
              m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--dark-32)", marginTop: 1 }, children: "WebGIS · Prambanan" }),
            ],
          }),
        ],
      }),
      m.jsxs("div", {
        className: "hidden md:flex",
        style: { alignItems: "center", gap: 4 },
        children: [
          rg.map((y) =>
            m.jsx(
              "a",
              {
                href: y.href,
                style: {
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "var(--dark-64)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-pill)",
                  transition: "color 0.2s, background 0.2s",
                },
                onMouseEnter: (_) => {
                  ((_.currentTarget.style.background = "var(--dark-8)"), (_.currentTarget.style.color = "var(--dark)"));
                },
                onMouseLeave: (_) => {
                  ((_.currentTarget.style.background = "transparent"), (_.currentTarget.style.color = "var(--dark-64)"));
                },
                children: y.label,
              },
              y.href,
            ),
          ),
          m.jsx("a", { href: "#peta", className: "btn-primary", style: { marginLeft: 8, padding: "8px 20px", fontSize: 11 }, children: "Buka Peta →" }),
        ],
      }),
      m.jsx("button", {
        className: "md:hidden",
        onClick: () => h(!f),
        style: { background: "transparent", border: "none", cursor: "pointer", color: "var(--dark)", padding: 8 },
        children: f ? m.jsx(tv, { size: 20 }) : m.jsx(rx, { size: 20 }),
      }),
      f &&
        m.jsxs("div", {
          style: {
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(235,232,219,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px dashed var(--dark-32)",
            padding: "12px var(--site-pad) 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          },
          children: [
            rg.map((y) =>
              m.jsx(
                "a",
                {
                  href: y.href,
                  onClick: () => h(!1),
                  style: { fontFamily: "var(--font-ui)", fontSize: 12, letterSpacing: "1px", textTransform: "uppercase", color: "var(--dark-64)", textDecoration: "none", padding: "10px 0", borderBottom: "1px dashed var(--dark-8)" },
                  children: y.label,
                },
                y.href,
              ),
            ),
            m.jsx("a", { href: "#peta", onClick: () => h(!1), className: "btn-primary", style: { marginTop: 8, textAlign: "center", justifyContent: "center" }, children: "Buka Peta →" }),
          ],
        }),
    ],
  });
}
function D1() {
  return m.jsxs("section", {
    id: "hero",
    style: { background: "var(--dark)", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" },
    children: [
      m.jsx("div", {
        style: { position: "absolute", top: "14%", right: "8%", opacity: 0.12, pointerEvents: "none" },
        children: m.jsx("svg", {
          viewBox: "0 0 120 120",
          width: "120",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: m.jsx("path", { d: "M60 0L62.6 57.4L120 60L62.6 62.6L60 120L57.4 62.6L0 60L57.4 57.4Z", fill: "var(--yellow)" }),
        }),
      }),
      m.jsx("div", {
        style: { position: "absolute", bottom: "22%", left: "6%", opacity: 0.08, pointerEvents: "none" },
        children: m.jsxs("svg", {
          viewBox: "0 0 80 80",
          width: "80",
          fill: "none",
          children: [
            m.jsx("circle", { cx: "40", cy: "40", r: "39", stroke: "var(--bg-3)", strokeWidth: "1", strokeDasharray: "4 3" }),
            m.jsx("circle", { cx: "40", cy: "40", r: "26", stroke: "var(--bg-3)", strokeWidth: "1", strokeDasharray: "4 3" }),
            m.jsx("circle", { cx: "40", cy: "40", r: "13", stroke: "var(--bg-3)", strokeWidth: "1" }),
          ],
        }),
      }),
      m.jsx("div", { style: { height: 72, flexShrink: 0 } }),
      m.jsxs("div", {
        className: "main-container",
        style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "5rem", paddingTop: "4rem" },
        children: [
          m.jsxs("div", {
            className: "animate-fade-up",
            style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" },
            children: [
              m.jsx("div", {
                style: { fontFamily: "var(--font-ui)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "color-mix(in srgb, #ebe8db 48%, transparent)" },
                children: "WebGIS Interaktif · Proyek Akhir TSPD",
              }),
              m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "color-mix(in srgb, #ebe8db 24%, transparent)" }, children: "© 2026 SV UGM" }),
            ],
          }),
          m.jsxs("div", {
            style: { marginBottom: "2.4rem" },
            children: [
              m.jsx("h1", {
                className: "animate-fade-up delay-100",
                style: { fontFamily: "var(--font-heading-sans)", fontSize: "clamp(60px, 9vw, 128px)", lineHeight: 0.88, fontWeight: 500, letterSpacing: "-4px", color: "var(--bg-1)", marginBottom: "0.15em" },
                children: "Candi",
              }),
              m.jsx("h1", {
                className: "animate-fade-up delay-200",
                style: { fontFamily: "var(--font-heading-serif)", fontSize: "clamp(60px, 9vw, 128px)", lineHeight: 0.88, fontWeight: 400, letterSpacing: "-4px", color: "var(--yellow)", fontStyle: "italic", marginBottom: "0.1em" },
                children: "Siwa",
              }),
              m.jsx("h1", {
                className: "animate-fade-up delay-300",
                style: { fontFamily: "var(--font-heading-sans)", fontSize: "clamp(60px, 9vw, 128px)", lineHeight: 0.88, fontWeight: 500, letterSpacing: "-4px", color: "color-mix(in srgb, #ebe8db 35%, transparent)" },
                children: "Prambanan",
              }),
            ],
          }),
          m.jsxs("div", {
            className: "animate-fade-up delay-400",
            style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" },
            children: [
              m.jsx("p", {
                style: { fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.65, color: "color-mix(in srgb, #ebe8db 50%, transparent)", maxWidth: 480, letterSpacing: "-0.3px" },
                children: "Dokumentasi Multi-Sensor & Virtual Tour berbasis model HBIM. Warisan Budaya Dunia UNESCO — Sleman, Yogyakarta.",
              }),
              m.jsxs("div", {
                style: { display: "flex", gap: 12, flexWrap: "wrap" },
                children: [
                  m.jsx("a", { href: "#peta", className: "btn-primary", children: "Buka Peta →" }),
                  m.jsx("a", { href: "#tentang", className: "btn-secondary", style: { color: "color-mix(in srgb, #ebe8db 70%, transparent)", borderColor: "color-mix(in srgb, #ebe8db 20%, transparent)" }, children: "Pelajari ↓" }),
                ],
              }),
            ],
          }),
        ],
      }),
      m.jsxs("div", {
        className: "animate-float",
        style: { position: "absolute", bottom: "12rem", right: "var(--site-pad)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "color-mix(in srgb, #ebe8db 28%, transparent)" },
        children: [m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", writingMode: "vertical-rl" }, children: "Scroll" }), m.jsx(ex, { size: 12 })],
      }),
    ],
  });
}
const N1 = [
  { num: "01", title: "Candi Hindu Terbesar", desc: "Candi tertinggi di Asia Tenggara dengan ketinggian 47 meter, pusat Kompleks Prambanan sebagai trimurti Hindu." },
  { num: "02", title: "Dinasti Sanjaya Abad 9", desc: "Dibangun sekitar 850 M oleh Dinasti Sanjaya dari Kerajaan Mataram Hindu sebagai persembahan agung kepada Dewa Siwa." },
  { num: "03", title: "42 Panel Relief Ramayana", desc: "Dinding lorong pradaksina menampung 42 panel relief epik Ramayana sepanjang lebih dari 100 meter — karya pahatan terbaik dunia kuno." },
  { num: "04", title: "UNESCO World Heritage 1991", desc: "Kompleks Candi Prambanan ditetapkan sebagai Situs Warisan Budaya Dunia oleh UNESCO pada tahun 1991." },
];
function P1() {
  const h = [
      [220, 22],
      [188, 18],
      [158, 16],
      [132, 14],
      [108, 12],
    ],
    g = [
      [105, 20],
      [90, 22],
      [78, 20],
      [66, 20],
      [56, 18],
      [47, 16],
      [39, 14],
      [32, 12],
      [26, 10],
      [20, 10],
      [15, 8],
      [11, 7],
      [8, 6],
      [5, 6],
      [3, 5],
    ];
  let y = 470;
  const _ = [];
  h.forEach(([F, pt], kt) => {
    const _t = y - pt;
    (_.push(
      m.jsxs(
        "g",
        {
          children: [
            m.jsx("rect", { x: 260 - F, y: _t, width: F * 2, height: pt, fill: `hsl(30, 20%, ${72 - kt * 3}%)`, stroke: "rgba(42,33,25,0.18)", strokeWidth: "0.7" }),
            m.jsx("line", { x1: 260 - F, y1: _t, x2: 260 + F, y2: _t, stroke: "rgba(255,255,255,0.3)", strokeWidth: "0.6" }),
            m.jsx("line", { x1: 260 - F, y1: _t + pt, x2: 260 + F, y2: _t + pt, stroke: "rgba(42,33,25,0.15)", strokeWidth: "0.6" }),
            kt < 3 &&
              Array.from({ length: Math.floor(F / 18) }).map((ht, Ot) =>
                m.jsx("rect", { x: 260 - F + 8 + Ot * 18, y: _t - 3, width: 6, height: 4, fill: `hsl(30, 20%, ${76 - kt * 3}%)`, stroke: "rgba(42,33,25,0.15)", strokeWidth: "0.5" }, Ot),
              ),
          ],
        },
        `plat-${kt}`,
      ),
    ),
      (y = _t));
  });
  const T = 68,
    k = 98,
    b = y - T,
    E = 28,
    A = 44;
  let C = b;
  const D = [];
  g.forEach(([F, pt], kt) => {
    const _t = C - pt;
    (D.push(
      m.jsxs(
        "g",
        {
          children: [
            m.jsx("rect", { x: 260 - F, y: _t, width: F * 2, height: pt, fill: `hsl(28, 18%, ${62 - kt * 1.5}%)`, stroke: "rgba(42,33,25,0.15)", strokeWidth: "0.5" }),
            m.jsx("line", { x1: 260 - F, y1: _t, x2: 260 + F, y2: _t, stroke: "rgba(255,255,255,0.2)", strokeWidth: "0.4" }),
            kt < 8 && kt % 2 === 0 && m.jsx("circle", { cx: 260, cy: _t + pt / 2, r: F * 0.12, fill: "none", stroke: "rgba(42,33,25,0.18)", strokeWidth: "0.5" }),
          ],
        },
        `spire-${kt}`,
      ),
    ),
      (C = _t));
  });
  const B = C,
    H = m.jsxs("g", {
      children: [
        m.jsx("ellipse", { cx: 260, cy: B - 10, rx: 5, ry: 6, fill: "hsl(28,18%,55%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.5" }),
        m.jsx("circle", { cx: 260, cy: B - 18, r: 4, fill: "hsl(40,60%,50%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.5" }),
        m.jsx("circle", { cx: 260, cy: B - 26, r: 3, fill: "hsl(45,70%,60%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.5" }),
        m.jsx("line", { x1: 260, y1: B - 32, x2: 260, y2: B - 28, stroke: "hsl(45,70%,55%)", strokeWidth: "1.5", strokeLinecap: "round" }),
        m.jsx("circle", { cx: 260, cy: B - 35, r: 2, fill: "var(--yellow)", opacity: "0.9" }),
      ],
    }),
    W = 42,
    X = 22,
    $ = b + 10,
    K = m.jsxs("g", {
      children: [
        m.jsx("rect", { x: 260 - k - X, y: $, width: X, height: W, fill: "hsl(30,18%,68%)", stroke: "rgba(42,33,25,0.15)", strokeWidth: "0.6" }),
        m.jsx("rect", { x: 260 - k - X + 4, y: $ + 6, width: 12, height: 26, fill: "hsl(30,18%,60%)", stroke: "rgba(42,33,25,0.12)", strokeWidth: "0.5" }),
        m.jsx("rect", { x: 260 + k, y: $, width: X, height: W, fill: "hsl(30,18%,68%)", stroke: "rgba(42,33,25,0.15)", strokeWidth: "0.6" }),
        m.jsx("rect", { x: 260 + k + 6, y: $ + 6, width: 12, height: 26, fill: "hsl(30,18%,60%)", stroke: "rgba(42,33,25,0.12)", strokeWidth: "0.5" }),
      ],
    }),
    at = Array.from({ length: 4 }).map((F, pt) =>
      m.jsx("g", { children: m.jsx("rect", { x: 260 - k + 2, y: b + 10 + pt * 13, width: (k - 2) * 2, height: 5, fill: "hsl(28,16%,65%)", stroke: "rgba(42,33,25,0.12)", strokeWidth: "0.4" }) }, `rb-${pt}`),
    ),
    nt = m.jsxs("g", {
      children: [
        m.jsx("path", { d: `M 242 ${b + 4} Q 260 ${b - 8} 278 ${b + 4}`, fill: "hsl(28,16%,63%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.7" }),
        m.jsx("circle", { cx: 260, cy: b - 3, r: 5, fill: "hsl(30,18%,68%)", stroke: "rgba(42,33,25,0.18)", strokeWidth: "0.5" }),
      ],
    }),
    ot = m.jsxs("g", { children: [m.jsx("ellipse", { cx: 260, cy: 480, rx: 232, ry: 10, fill: "rgba(42,33,25,0.07)" }), m.jsx("line", { x1: 10, y1: 470, x2: 510, y2: 470, stroke: "rgba(42,33,25,0.12)", strokeWidth: "1" })] }),
    ft = [20, 60, 460, 500].map((F, pt) =>
      m.jsxs(
        "g",
        { children: [m.jsx("ellipse", { cx: F, cy: 462, rx: 12, ry: 18, fill: "hsl(100,15%,52%)", opacity: "0.35" }), m.jsx("ellipse", { cx: F + 5, cy: 466, rx: 9, ry: 14, fill: "hsl(100,15%,47%)", opacity: "0.25" })] },
        `fl-${pt}`,
      ),
    );
  return m.jsxs("svg", {
    viewBox: "0 0 520 510",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "90%", display: "block", margin: "auto" },
    children: [
      m.jsx("defs", {
        children: m.jsxs("linearGradient", {
          id: "skyGrad",
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [m.jsx("stop", { offset: "0%", stopColor: "hsl(30,20%,88%)", stopOpacity: "0" }), m.jsx("stop", { offset: "100%", stopColor: "hsl(30,20%,75%)", stopOpacity: "0.4" })],
        }),
      }),
      m.jsx("rect", { x: "0", y: "0", width: "520", height: "510", fill: "url(#skyGrad)", rx: "4" }),
      ft,
      ot,
      _,
      m.jsx("rect", { x: 260 - k, y: b, width: k * 2, height: T, fill: "hsl(30,18%,70%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.8" }),
      K,
      at,
      m.jsx("rect", { x: 260 - E / 2 - 4, y: b + T - A - 4, width: E + 8, height: A + 4, fill: "hsl(28,15%,62%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.7", rx: "1" }),
      m.jsx("rect", { x: 260 - E / 2, y: b + T - A, width: E, height: A, fill: "hsl(25,30%,28%)", stroke: "rgba(42,33,25,0.3)", strokeWidth: "0.6", rx: "1" }),
      m.jsx("path", { d: `M ${260 - E / 2} ${b + T - A} Q 260 ${b + T - A - 12} ${260 + E / 2} ${b + T - A}`, fill: "hsl(25,30%,28%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.5" }),
      nt,
      m.jsx("circle", { cx: 260, cy: b + T - A - 14, r: 7, fill: "hsl(28,16%,60%)", stroke: "rgba(42,33,25,0.2)", strokeWidth: "0.5" }),
      D,
      H,
      m.jsx("circle", { cx: 260, cy: B - 38, r: 14, fill: "var(--yellow)", opacity: "0.08" }),
    ],
  });
}
function B1() {
  return m.jsxs("section", {
    id: "tentang",
    style: { background: "var(--bg-1)", padding: "80px 0 0", position: "relative" },
    children: [
      m.jsxs("div", {
        className: "main-container",
        children: [
          m.jsxs("div", {
            className: "reveal",
            style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, gap: 40, flexWrap: "wrap" },
            children: [
              m.jsxs("div", {
                children: [
                  m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Pengenalan" }),
                  m.jsx("h2", { style: { margin: 0, color: "var(--dark)", maxWidth: 540 }, children: "Mahkota Kompleks Prambanan" }),
                ],
              }),
              m.jsx("p", {
                className: "text-large",
                style: { maxWidth: 420, color: "var(--dark-64)", marginTop: 12, alignSelf: "flex-end" },
                children: "Candi Siwa adalah pusat spiritual dan arsitektural Kompleks Prambanan, menjulang megah sebagai simbol keagungan peradaban Jawa Kuno.",
              }),
            ],
          }),
          m.jsxs("div", {
            style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 80 },
            children: [
              m.jsx("div", {
                className: "reveal",
                children: m.jsxs("div", {
                  style: {
                    borderRadius: "var(--radius-card)",
                    background: "linear-gradient(160deg, var(--bg-3) 0%, var(--bg-2) 100%)",
                    aspectRatio: "4/5",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    border: "1px solid var(--dark-8)",
                  },
                  children: [
                    m.jsx("div", { style: { width: "100%", padding: "0 0 0 0", position: "absolute", bottom: 0 }, children: m.jsx(P1, {}) }),
                    m.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--yellow)" } }),
                  ],
                }),
              }),
              m.jsx("div", {
                className: "reveal delay-2",
                style: { display: "flex", flexDirection: "column", gap: 0 },
                children: N1.map((o, c) =>
                  m.jsxs(
                    "div",
                    {
                      style: { display: "flex", gap: 24, padding: "28px 0", borderTop: c === 0 ? "none" : "1px dashed var(--dark-16)", alignItems: "flex-start" },
                      children: [
                        m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "1px", color: "var(--dark-32)", flexShrink: 0, width: 28, marginTop: 4 }, children: o.num }),
                        m.jsxs("div", {
                          children: [
                            m.jsx("h4", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", marginBottom: 8 }, children: o.title }),
                            m.jsx("p", { style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65, color: "var(--dark-64)", margin: 0, letterSpacing: "-0.1px" }, children: o.desc }),
                          ],
                        }),
                      ],
                    },
                    o.num,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      m.jsx("div", {
        style: { background: "var(--dark)", padding: "16px 0", overflow: "hidden" },
        children: m.jsx("div", {
          className: "ticker-inner",
          children: [...Array(14)].map((o, c) =>
            m.jsx(
              "span",
              {
                style: {
                  fontFamily: "var(--font-heading-sans)",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.5px",
                  color: c % 2 === 0 ? "var(--bg-1)" : "var(--yellow)",
                  whiteSpace: "nowrap",
                  padding: "0 32px",
                  opacity: c % 2 === 0 ? 0.7 : 0.9,
                },
                children: ["Candi Siwa", "Prambanan", "UNESCO 1991", "Relief Ramayana", "HBIM", "Multi-Sensor", "WebGIS"][c % 7],
              },
              c,
            ),
          ),
        }),
      }),
      m.jsxs("div", {
        className: "main-container reveal",
        style: { padding: "48px var(--site-pad)", display: "flex", gap: 12, flexWrap: "wrap" },
        children: [
          m.jsx("a", { href: "#peta", className: "btn-primary", children: "Eksplorasi Peta Interaktif →" }),
          m.jsx("a", { href: "#tour", className: "btn-secondary", children: "Virtual Tour 3D" }),
          m.jsx("a", { href: "#relief", className: "btn-secondary", children: "Relief Ramayana" }),
        ],
      }),
    ],
  });
}
function H1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "14", cy: "14", r: "3.5", fill: "currentColor" }),
      m.jsx("path", { d: "M14 4.5C14 4.5 8.5 8 8.5 14S14 23.5 14 23.5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", opacity: "0.25" }),
      m.jsx("path", { d: "M14 4.5C14 4.5 19.5 8 19.5 14S14 23.5 14 23.5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", opacity: "0.25" }),
      m.jsx("path", { d: "M4.5 14h5M18.5 14h5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("path", { d: "M6.5 7.5L10 11M18 17l3.5 3.5M21.5 7.5L18 11M10 17l-3.5 3.5", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.5" }),
      m.jsx("circle", { cx: "14", cy: "14", r: "6.5", stroke: "currentColor", strokeWidth: "1", opacity: "0.2" }),
      m.jsx("circle", { cx: "14", cy: "14", r: "10", stroke: "currentColor", strokeWidth: "0.8", opacity: "0.12", strokeDasharray: "2 3" }),
    ],
  });
}
function Z1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("rect", { x: "3", y: "8.5", width: "22", height: "15", rx: "2.5", stroke: "currentColor", strokeWidth: "1.5" }),
      m.jsx("path", { d: "M10 8.5V7.5A2 2 0 0112 5.5h4a2 2 0 012 2v1", stroke: "currentColor", strokeWidth: "1.3", strokeLinejoin: "round" }),
      m.jsx("circle", { cx: "14", cy: "16", r: "4", stroke: "currentColor", strokeWidth: "1.4" }),
      m.jsx("circle", { cx: "14", cy: "16", r: "1.8", fill: "currentColor", opacity: "0.4" }),
      m.jsx("circle", { cx: "21", cy: "12", r: "1", fill: "currentColor", opacity: "0.5" }),
    ],
  });
}
function U1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("ellipse", { cx: "14", cy: "9", rx: "5", ry: "3.5", stroke: "currentColor", strokeWidth: "1.4", transform: "rotate(-30 14 9)" }),
      m.jsx("line", { x1: "4", y1: "14", x2: "8", y2: "10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("line", { x1: "8", y1: "10", x2: "10", y2: "12", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
      m.jsx("line", { x1: "4", y1: "10", x2: "8", y2: "10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
      m.jsx("circle", { cx: "18", cy: "18", r: "5", stroke: "currentColor", strokeWidth: "1.3" }),
      m.jsx("path", { d: "M18 13v10M13 18h10M15 15.5l6 5M21 15.5l-6 5", stroke: "currentColor", strokeWidth: "0.8", strokeLinecap: "round", opacity: "0.4" }),
      m.jsx("path", { d: "M8 14l5 2", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeDasharray: "1.5 2", opacity: "0.6" }),
    ],
  });
}
function G1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("rect", { x: "9", y: "6", width: "10", height: "9", rx: "2", stroke: "currentColor", strokeWidth: "1.4" }),
      m.jsx("circle", { cx: "14", cy: "10.5", r: "2", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("line", { x1: "14", y1: "15", x2: "14", y2: "20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("path", { d: "M9 20h10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("path", { d: "M11 20v3M17 20v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("path", { d: "M19 8l4-2M9 8L5 6", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeDasharray: "1.5 1.5", opacity: "0.5" }),
      m.jsx("circle", { cx: "23", cy: "6", r: "1.2", fill: "currentColor", opacity: "0.4" }),
      m.jsx("circle", { cx: "5", cy: "5", r: "1.2", fill: "currentColor", opacity: "0.4" }),
    ],
  });
}
function W1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("rect", { x: "11", y: "11", width: "6", height: "6", rx: "1.5", stroke: "currentColor", strokeWidth: "1.4" }),
      m.jsx("circle", { cx: "14", cy: "14", r: "2", fill: "currentColor", opacity: "0.3" }),
      m.jsx("line", { x1: "11", y1: "11", x2: "7", y2: "7", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("line", { x1: "17", y1: "11", x2: "21", y2: "7", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("line", { x1: "11", y1: "17", x2: "7", y2: "21", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("line", { x1: "17", y1: "17", x2: "21", y2: "21", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("ellipse", { cx: "7", cy: "6.5", rx: "3.5", ry: "1.5", stroke: "currentColor", strokeWidth: "1.2", opacity: "0.7" }),
      m.jsx("ellipse", { cx: "21", cy: "6.5", rx: "3.5", ry: "1.5", stroke: "currentColor", strokeWidth: "1.2", opacity: "0.7" }),
      m.jsx("ellipse", { cx: "7", cy: "21.5", rx: "3.5", ry: "1.5", stroke: "currentColor", strokeWidth: "1.2", opacity: "0.7" }),
      m.jsx("ellipse", { cx: "21", cy: "21.5", rx: "3.5", ry: "1.5", stroke: "currentColor", strokeWidth: "1.2", opacity: "0.7" }),
    ],
  });
}
function q1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "14", cy: "10", r: "4.5", stroke: "currentColor", strokeWidth: "1.4" }),
      m.jsx("line", { x1: "14", y1: "5.5", x2: "14", y2: "3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("line", { x1: "18.5", y1: "10", x2: "22", y2: "10", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("line", { x1: "9.5", y1: "10", x2: "6", y2: "10", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", opacity: "0.4" }),
      m.jsx("circle", { cx: "14", cy: "10", r: "1.5", fill: "currentColor", opacity: "0.5" }),
      m.jsx("line", { x1: "14", y1: "14.5", x2: "14", y2: "19", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("path", { d: "M9 19h10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
      m.jsx("path", { d: "M10.5 19l-2 4M17.5 19l2 4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }),
      m.jsx("path", { d: "M22 10l2-3", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeDasharray: "1.5 1.5", opacity: "0.5" }),
    ],
  });
}
function V1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "14", cy: "14", r: "10", stroke: "currentColor", strokeWidth: "1.4" }),
      m.jsx("path", { d: "M4 14h20", stroke: "currentColor", strokeWidth: "0.9", opacity: "0.35" }),
      m.jsx("path", { d: "M14 4v20", stroke: "currentColor", strokeWidth: "0.9", opacity: "0.35" }),
      m.jsx("ellipse", { cx: "14", cy: "14", rx: "5.5", ry: "10", stroke: "currentColor", strokeWidth: "1", opacity: "0.55" }),
      m.jsx("ellipse", { cx: "14", cy: "14", rx: "10", ry: "4", stroke: "currentColor", strokeWidth: "0.9", opacity: "0.35" }),
      m.jsx("circle", { cx: "14", cy: "14", r: "2.2", fill: "currentColor", opacity: "0.5" }),
      m.jsx("path", { d: "M5.5 8.5Q14 11 22.5 8.5M5.5 19.5Q14 17 22.5 19.5", stroke: "currentColor", strokeWidth: "0.8", opacity: "0.25" }),
    ],
  });
}
function Y1() {
  return m.jsxs("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    children: [
      m.jsx("rect", { x: "3", y: "9", width: "22", height: "14", rx: "2.5", stroke: "currentColor", strokeWidth: "1.5" }),
      m.jsx("path", { d: "M10 9V8A2.5 2.5 0 0112.5 5.5h3A2.5 2.5 0 0118 8v1", stroke: "currentColor", strokeWidth: "1.3", strokeLinejoin: "round" }),
      m.jsx("circle", { cx: "14", cy: "16", r: "4.5", stroke: "currentColor", strokeWidth: "1.3" }),
      m.jsx("circle", { cx: "14", cy: "16", r: "2.5", stroke: "currentColor", strokeWidth: "1", opacity: "0.5" }),
      m.jsx("circle", { cx: "14", cy: "16", r: "1", fill: "currentColor", opacity: "0.6" }),
      m.jsx("circle", { cx: "21", cy: "12", r: "1.2", fill: "currentColor", opacity: "0.45" }),
      m.jsx("line", { x1: "5.5", y1: "12", x2: "7.5", y2: "12", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.4" }),
    ],
  });
}
const X1 = [
    { num: "01", Icon: H1, title: "LiDAR", tag: "Point Cloud", color: "var(--dark)", desc: "Light Detection and Ranging untuk pemetaan 3D point cloud resolusi tinggi dengan ketelitian milimetrik." },
    { num: "02", Icon: Z1, title: "Fotogrametri", tag: "SfM · Dense Cloud", color: "var(--acc-1)", desc: "Rekonstruksi 3D berbasis foto menggunakan Structure from Motion untuk model tekstur permukaan batu candi." },
    { num: "03", Icon: U1, title: "GNSS / RTK", tag: "GCP · Geodetik", color: "var(--teal)", desc: "Global Navigation Satellite System untuk penentuan koordinat geodetik presisi tinggi sebagai titik kontrol tanah." },
    { num: "04", Icon: G1, title: "TLS", tag: "Terrestrial LS", color: "var(--acc-3)", desc: "Terrestrial Laser Scanning untuk akuisisi point cloud detail interior dan eksterior relief candi dari jarak dekat." },
    { num: "05", Icon: W1, title: "Drone UAV", tag: "Aerial · Ortofoto", color: "var(--dark)", desc: "Unmanned Aerial Vehicle untuk pemotretan udara ortofoto dan pemodelan 3D bagian puncak candi." },
    { num: "06", Icon: q1, title: "Total Station", tag: "Geodetik", color: "var(--acc-1)", desc: "Pengukuran sudut dan jarak presisi tinggi untuk titik kontrol dan verifikasi geometri bangunan." },
    { num: "07", Icon: V1, title: "Kamera 360°", tag: "Ekuirektangular", color: "var(--teal)", desc: "Pemotretan panoramik 360° untuk dokumentasi visual interior lorong dan ruangan candi." },
    { num: "08", Icon: Y1, title: "Kamera RGB", tag: "Tekstur · Detail", color: "var(--acc-3)", desc: "Dokumentasi detail tekstur permukaan relief dan ornamen arsitektural untuk anotasi HBIM digital." },
  ],
  I1 = [
    { num: "01", title: "Akuisisi Data", desc: "Multi-sensor field survey di lokasi Kompleks Prambanan" },
    { num: "02", title: "Pengolahan & Registrasi", desc: "Co-registration point cloud & pembuatan dense mesh 3D" },
    { num: "03", title: "Pemodelan HBIM", desc: "Heritage Building Information Modeling dari data multi-sensor" },
    { num: "04", title: "WebGIS & Virtual Tour", desc: "Publikasi digital interaktif berbasis web untuk publik" },
  ];
function K1() {
  return m.jsx("section", {
    id: "data",
    style: { background: "var(--bg-2)", padding: "80px 0", position: "relative" },
    children: m.jsxs("div", {
      className: "main-container",
      children: [
        m.jsxs("div", {
          className: "reveal",
          style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, gap: 40, flexWrap: "wrap" },
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Metodologi Akuisisi" }),
                m.jsx("h2", { style: { margin: 0, color: "var(--dark)", maxWidth: 500 }, children: "Data Multi-Sensor" }),
              ],
            }),
            m.jsx("p", {
              className: "text-large",
              style: { maxWidth: 400, color: "var(--dark-64)", marginTop: 12, alignSelf: "flex-end" },
              children: "Delapan metode akuisisi data geospasial yang saling melengkapi menghasilkan model HBIM beresolusi tinggi.",
            }),
          ],
        }),
        m.jsx("div", {
          className: "reveal delay-2",
          style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 80 },
          children: X1.map((o, c) =>
            m.jsxs(
              "div",
              {
                style: { display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px 0 24px 24px", borderLeft: "1px dashed var(--dark)", minHeight: 220, gap: 20 },
                children: [
                  m.jsxs("div", {
                    children: [
                      m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1px", textTransform: "uppercase", color: "var(--dark-32)", marginBottom: 12 }, children: o.num }),
                      m.jsx("div", { style: { color: o.color, marginBottom: 10, lineHeight: 0 }, children: m.jsx(o.Icon, {}) }),
                      m.jsx("h4", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", marginBottom: 8 }, children: o.title }),
                      m.jsx("p", { style: { fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.65, color: "var(--dark-64)", margin: 0 }, children: o.desc }),
                    ],
                  }),
                  m.jsx("span", {
                    style: {
                      display: "inline-block",
                      fontFamily: "var(--font-ui)",
                      fontSize: 9,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "var(--dark-64)",
                      border: "1px dashed var(--dark-32)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-pill)",
                      background: "transparent",
                    },
                    children: o.tag,
                  }),
                ],
              },
              o.num,
            ),
          ),
        }),
        m.jsxs("div", {
          className: "reveal delay-3",
          children: [
            m.jsx("div", { style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, marginBottom: 32 }, children: m.jsx("div", { className: "label", style: { color: "var(--dark-32)" }, children: "Alur Pengolahan Data" }) }),
            m.jsx("div", {
              style: { display: "flex", gap: 0, flexWrap: "wrap" },
              children: I1.map((o) =>
                m.jsxs(
                  "div",
                  {
                    style: { display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "24px 32px 24px 24px", borderLeft: "1px dashed var(--dark-32)", flex: 1, minWidth: 180, gap: 24 },
                    children: [
                      m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 64, fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--dark-8)" }, children: o.num }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("h4", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", marginBottom: 6 }, children: o.title }),
                          m.jsx("p", { style: { fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.65, color: "var(--dark-64)", margin: 0 }, children: o.desc }),
                        ],
                      }),
                    ],
                  },
                  o.num,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
var Ls = { exports: {} };
var Q1 = Ls.exports,
  og;
function F1() {
  return (
    og ||
      ((og = 1),
      (function (o, c) {
        (function (f, h) {
          h(c);
        })(Q1, function (f) {
          var h = "1.9.4";
          function g(n) {
            var a, s, d, p;
            for (s = 1, d = arguments.length; s < d; s++) {
              p = arguments[s];
              for (a in p) n[a] = p[a];
            }
            return n;
          }
          var y =
            Object.create ||
            (function () {
              function n() {}
              return function (a) {
                return ((n.prototype = a), new n());
              };
            })();
          function _(n, a) {
            var s = Array.prototype.slice;
            if (n.bind) return n.bind.apply(n, s.call(arguments, 1));
            var d = s.call(arguments, 2);
            return function () {
              return n.apply(a, d.length ? d.concat(s.call(arguments)) : arguments);
            };
          }
          var T = 0;
          function k(n) {
            return ("_leaflet_id" in n || (n._leaflet_id = ++T), n._leaflet_id);
          }
          function b(n, a, s) {
            var d, p, x, M;
            return (
              (M = function () {
                ((d = !1), p && (x.apply(s, p), (p = !1)));
              }),
              (x = function () {
                d ? (p = arguments) : (n.apply(s, arguments), setTimeout(M, a), (d = !0));
              }),
              x
            );
          }
          function E(n, a, s) {
            var d = a[1],
              p = a[0],
              x = d - p;
            return n === d && s ? n : ((((n - p) % x) + x) % x) + p;
          }
          function A() {
            return !1;
          }
          function C(n, a) {
            if (a === !1) return n;
            var s = Math.pow(10, a === void 0 ? 6 : a);
            return Math.round(n * s) / s;
          }
          function D(n) {
            return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
          }
          function B(n) {
            return D(n).split(/\s+/);
          }
          function H(n, a) {
            Object.prototype.hasOwnProperty.call(n, "options") || (n.options = n.options ? y(n.options) : {});
            for (var s in a) n.options[s] = a[s];
            return n.options;
          }
          function W(n, a, s) {
            var d = [];
            for (var p in n) d.push(encodeURIComponent(s ? p.toUpperCase() : p) + "=" + encodeURIComponent(n[p]));
            return (!a || a.indexOf("?") === -1 ? "?" : "&") + d.join("&");
          }
          var X = /\{ *([\w_ -]+) *\}/g;
          function $(n, a) {
            return n.replace(X, function (s, d) {
              var p = a[d];
              if (p === void 0) throw new Error("No value provided for variable " + s);
              return (typeof p == "function" && (p = p(a)), p);
            });
          }
          var K =
            Array.isArray ||
            function (n) {
              return Object.prototype.toString.call(n) === "[object Array]";
            };
          function at(n, a) {
            for (var s = 0; s < n.length; s++) if (n[s] === a) return s;
            return -1;
          }
          var nt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          function ot(n) {
            return window["webkit" + n] || window["moz" + n] || window["ms" + n];
          }
          var ft = 0;
          function F(n) {
            var a = +new Date(),
              s = Math.max(0, 16 - (a - ft));
            return ((ft = a + s), window.setTimeout(n, s));
          }
          var pt = window.requestAnimationFrame || ot("RequestAnimationFrame") || F,
            kt =
              window.cancelAnimationFrame ||
              ot("CancelAnimationFrame") ||
              ot("CancelRequestAnimationFrame") ||
              function (n) {
                window.clearTimeout(n);
              };
          function _t(n, a, s) {
            if (s && pt === F) n.call(a);
            else return pt.call(window, _(n, a));
          }
          function ht(n) {
            n && kt.call(window, n);
          }
          var Ot = {
            __proto__: null,
            extend: g,
            create: y,
            bind: _,
            get lastId() {
              return T;
            },
            stamp: k,
            throttle: b,
            wrapNum: E,
            falseFn: A,
            formatNum: C,
            trim: D,
            splitWords: B,
            setOptions: H,
            getParamString: W,
            template: $,
            isArray: K,
            indexOf: at,
            emptyImageUrl: nt,
            requestFn: pt,
            cancelFn: kt,
            requestAnimFrame: _t,
            cancelAnimFrame: ht,
          };
          function Tt() {}
          ((Tt.extend = function (n) {
            var a = function () {
                (H(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks());
              },
              s = (a.__super__ = this.prototype),
              d = y(s);
            ((d.constructor = a), (a.prototype = d));
            for (var p in this) Object.prototype.hasOwnProperty.call(this, p) && p !== "prototype" && p !== "__super__" && (a[p] = this[p]);
            return (
              n.statics && g(a, n.statics),
              n.includes && (Rt(n.includes), g.apply(null, [d].concat(n.includes))),
              g(d, n),
              delete d.statics,
              delete d.includes,
              d.options && ((d.options = s.options ? y(s.options) : {}), g(d.options, n.options)),
              (d._initHooks = []),
              (d.callInitHooks = function () {
                if (!this._initHooksCalled) {
                  (s.callInitHooks && s.callInitHooks.call(this), (this._initHooksCalled = !0));
                  for (var x = 0, M = d._initHooks.length; x < M; x++) d._initHooks[x].call(this);
                }
              }),
              a
            );
          }),
            (Tt.include = function (n) {
              var a = this.prototype.options;
              return (g(this.prototype, n), n.options && ((this.prototype.options = a), this.mergeOptions(n.options)), this);
            }),
            (Tt.mergeOptions = function (n) {
              return (g(this.prototype.options, n), this);
            }),
            (Tt.addInitHook = function (n) {
              var a = Array.prototype.slice.call(arguments, 1),
                s =
                  typeof n == "function"
                    ? n
                    : function () {
                        this[n].apply(this, a);
                      };
              return ((this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(s), this);
            }));
          function Rt(n) {
            if (!(typeof L > "u" || !L || !L.Mixin)) {
              n = K(n) ? n : [n];
              for (var a = 0; a < n.length; a++) n[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
          }
          var z = {
            on: function (n, a, s) {
              if (typeof n == "object") for (var d in n) this._on(d, n[d], a);
              else {
                n = B(n);
                for (var p = 0, x = n.length; p < x; p++) this._on(n[p], a, s);
              }
              return this;
            },
            off: function (n, a, s) {
              if (!arguments.length) delete this._events;
              else if (typeof n == "object") for (var d in n) this._off(d, n[d], a);
              else {
                n = B(n);
                for (var p = arguments.length === 1, x = 0, M = n.length; x < M; x++) p ? this._off(n[x]) : this._off(n[x], a, s);
              }
              return this;
            },
            _on: function (n, a, s, d) {
              if (typeof a != "function") {
                console.warn("wrong listener type: " + typeof a);
                return;
              }
              if (this._listens(n, a, s) === !1) {
                s === this && (s = void 0);
                var p = { fn: a, ctx: s };
                (d && (p.once = !0), (this._events = this._events || {}), (this._events[n] = this._events[n] || []), this._events[n].push(p));
              }
            },
            _off: function (n, a, s) {
              var d, p, x;
              if (this._events && ((d = this._events[n]), !!d)) {
                if (arguments.length === 1) {
                  if (this._firingCount) for (p = 0, x = d.length; p < x; p++) d[p].fn = A;
                  delete this._events[n];
                  return;
                }
                if (typeof a != "function") {
                  console.warn("wrong listener type: " + typeof a);
                  return;
                }
                var M = this._listens(n, a, s);
                if (M !== !1) {
                  var P = d[M];
                  (this._firingCount && ((P.fn = A), (this._events[n] = d = d.slice())), d.splice(M, 1));
                }
              }
            },
            fire: function (n, a, s) {
              if (!this.listens(n, s)) return this;
              var d = g({}, a, { type: n, target: this, sourceTarget: (a && a.sourceTarget) || this });
              if (this._events) {
                var p = this._events[n];
                if (p) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var x = 0, M = p.length; x < M; x++) {
                    var P = p[x],
                      V = P.fn;
                    (P.once && this.off(n, V, P.ctx), V.call(P.ctx || this, d));
                  }
                  this._firingCount--;
                }
              }
              return (s && this._propagateEvent(d), this);
            },
            listens: function (n, a, s, d) {
              typeof n != "string" && console.warn('"string" type argument expected');
              var p = a;
              typeof a != "function" && ((d = !!a), (p = void 0), (s = void 0));
              var x = this._events && this._events[n];
              if (x && x.length && this._listens(n, p, s) !== !1) return !0;
              if (d) {
                for (var M in this._eventParents) if (this._eventParents[M].listens(n, a, s, d)) return !0;
              }
              return !1;
            },
            _listens: function (n, a, s) {
              if (!this._events) return !1;
              var d = this._events[n] || [];
              if (!a) return !!d.length;
              s === this && (s = void 0);
              for (var p = 0, x = d.length; p < x; p++) if (d[p].fn === a && d[p].ctx === s) return p;
              return !1;
            },
            once: function (n, a, s) {
              if (typeof n == "object") for (var d in n) this._on(d, n[d], a, !0);
              else {
                n = B(n);
                for (var p = 0, x = n.length; p < x; p++) this._on(n[p], a, s, !0);
              }
              return this;
            },
            addEventParent: function (n) {
              return ((this._eventParents = this._eventParents || {}), (this._eventParents[k(n)] = n), this);
            },
            removeEventParent: function (n) {
              return (this._eventParents && delete this._eventParents[k(n)], this);
            },
            _propagateEvent: function (n) {
              for (var a in this._eventParents) this._eventParents[a].fire(n.type, g({ layer: n.target, propagatedFrom: n.target }, n), !0);
            },
          };
          ((z.addEventListener = z.on), (z.removeEventListener = z.clearAllEventListeners = z.off), (z.addOneTimeEventListener = z.once), (z.fireEvent = z.fire), (z.hasEventListeners = z.listens));
          var et = Tt.extend(z);
          function Y(n, a, s) {
            ((this.x = s ? Math.round(n) : n), (this.y = s ? Math.round(a) : a));
          }
          var xt =
            Math.trunc ||
            function (n) {
              return n > 0 ? Math.floor(n) : Math.ceil(n);
            };
          Y.prototype = {
            clone: function () {
              return new Y(this.x, this.y);
            },
            add: function (n) {
              return this.clone()._add(S(n));
            },
            _add: function (n) {
              return ((this.x += n.x), (this.y += n.y), this);
            },
            subtract: function (n) {
              return this.clone()._subtract(S(n));
            },
            _subtract: function (n) {
              return ((this.x -= n.x), (this.y -= n.y), this);
            },
            divideBy: function (n) {
              return this.clone()._divideBy(n);
            },
            _divideBy: function (n) {
              return ((this.x /= n), (this.y /= n), this);
            },
            multiplyBy: function (n) {
              return this.clone()._multiplyBy(n);
            },
            _multiplyBy: function (n) {
              return ((this.x *= n), (this.y *= n), this);
            },
            scaleBy: function (n) {
              return new Y(this.x * n.x, this.y * n.y);
            },
            unscaleBy: function (n) {
              return new Y(this.x / n.x, this.y / n.y);
            },
            round: function () {
              return this.clone()._round();
            },
            _round: function () {
              return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
            },
            floor: function () {
              return this.clone()._floor();
            },
            _floor: function () {
              return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
            },
            ceil: function () {
              return this.clone()._ceil();
            },
            _ceil: function () {
              return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
            },
            trunc: function () {
              return this.clone()._trunc();
            },
            _trunc: function () {
              return ((this.x = xt(this.x)), (this.y = xt(this.y)), this);
            },
            distanceTo: function (n) {
              n = S(n);
              var a = n.x - this.x,
                s = n.y - this.y;
              return Math.sqrt(a * a + s * s);
            },
            equals: function (n) {
              return ((n = S(n)), n.x === this.x && n.y === this.y);
            },
            contains: function (n) {
              return ((n = S(n)), Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y));
            },
            toString: function () {
              return "Point(" + C(this.x) + ", " + C(this.y) + ")";
            },
          };
          function S(n, a, s) {
            return n instanceof Y ? n : K(n) ? new Y(n[0], n[1]) : n == null ? n : typeof n == "object" && "x" in n && "y" in n ? new Y(n.x, n.y) : new Y(n, a, s);
          }
          function I(n, a) {
            if (n) for (var s = a ? [n, a] : n, d = 0, p = s.length; d < p; d++) this.extend(s[d]);
          }
          I.prototype = {
            extend: function (n) {
              var a, s;
              if (!n) return this;
              if (n instanceof Y || typeof n[0] == "number" || "x" in n) a = s = S(n);
              else if (((n = lt(n)), (a = n.min), (s = n.max), !a || !s)) return this;
              return (
                !this.min && !this.max
                  ? ((this.min = a.clone()), (this.max = s.clone()))
                  : ((this.min.x = Math.min(a.x, this.min.x)), (this.max.x = Math.max(s.x, this.max.x)), (this.min.y = Math.min(a.y, this.min.y)), (this.max.y = Math.max(s.y, this.max.y))),
                this
              );
            },
            getCenter: function (n) {
              return S((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, n);
            },
            getBottomLeft: function () {
              return S(this.min.x, this.max.y);
            },
            getTopRight: function () {
              return S(this.max.x, this.min.y);
            },
            getTopLeft: function () {
              return this.min;
            },
            getBottomRight: function () {
              return this.max;
            },
            getSize: function () {
              return this.max.subtract(this.min);
            },
            contains: function (n) {
              var a, s;
              return (typeof n[0] == "number" || n instanceof Y ? (n = S(n)) : (n = lt(n)), n instanceof I ? ((a = n.min), (s = n.max)) : (a = s = n), a.x >= this.min.x && s.x <= this.max.x && a.y >= this.min.y && s.y <= this.max.y);
            },
            intersects: function (n) {
              n = lt(n);
              var a = this.min,
                s = this.max,
                d = n.min,
                p = n.max,
                x = p.x >= a.x && d.x <= s.x,
                M = p.y >= a.y && d.y <= s.y;
              return x && M;
            },
            overlaps: function (n) {
              n = lt(n);
              var a = this.min,
                s = this.max,
                d = n.min,
                p = n.max,
                x = p.x > a.x && d.x < s.x,
                M = p.y > a.y && d.y < s.y;
              return x && M;
            },
            isValid: function () {
              return !!(this.min && this.max);
            },
            pad: function (n) {
              var a = this.min,
                s = this.max,
                d = Math.abs(a.x - s.x) * n,
                p = Math.abs(a.y - s.y) * n;
              return lt(S(a.x - d, a.y - p), S(s.x + d, s.y + p));
            },
            equals: function (n) {
              return n ? ((n = lt(n)), this.min.equals(n.getTopLeft()) && this.max.equals(n.getBottomRight())) : !1;
            },
          };
          function lt(n, a) {
            return !n || n instanceof I ? n : new I(n, a);
          }
          function st(n, a) {
            if (n) for (var s = a ? [n, a] : n, d = 0, p = s.length; d < p; d++) this.extend(s[d]);
          }
          st.prototype = {
            extend: function (n) {
              var a = this._southWest,
                s = this._northEast,
                d,
                p;
              if (n instanceof ut) ((d = n), (p = n));
              else if (n instanceof st) {
                if (((d = n._southWest), (p = n._northEast), !d || !p)) return this;
              } else return n ? this.extend(rt(n) || ct(n)) : this;
              return (
                !a && !s
                  ? ((this._southWest = new ut(d.lat, d.lng)), (this._northEast = new ut(p.lat, p.lng)))
                  : ((a.lat = Math.min(d.lat, a.lat)), (a.lng = Math.min(d.lng, a.lng)), (s.lat = Math.max(p.lat, s.lat)), (s.lng = Math.max(p.lng, s.lng))),
                this
              );
            },
            pad: function (n) {
              var a = this._southWest,
                s = this._northEast,
                d = Math.abs(a.lat - s.lat) * n,
                p = Math.abs(a.lng - s.lng) * n;
              return new st(new ut(a.lat - d, a.lng - p), new ut(s.lat + d, s.lng + p));
            },
            getCenter: function () {
              return new ut((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
            },
            getSouthWest: function () {
              return this._southWest;
            },
            getNorthEast: function () {
              return this._northEast;
            },
            getNorthWest: function () {
              return new ut(this.getNorth(), this.getWest());
            },
            getSouthEast: function () {
              return new ut(this.getSouth(), this.getEast());
            },
            getWest: function () {
              return this._southWest.lng;
            },
            getSouth: function () {
              return this._southWest.lat;
            },
            getEast: function () {
              return this._northEast.lng;
            },
            getNorth: function () {
              return this._northEast.lat;
            },
            contains: function (n) {
              typeof n[0] == "number" || n instanceof ut || "lat" in n ? (n = rt(n)) : (n = ct(n));
              var a = this._southWest,
                s = this._northEast,
                d,
                p;
              return (n instanceof st ? ((d = n.getSouthWest()), (p = n.getNorthEast())) : (d = p = n), d.lat >= a.lat && p.lat <= s.lat && d.lng >= a.lng && p.lng <= s.lng);
            },
            intersects: function (n) {
              n = ct(n);
              var a = this._southWest,
                s = this._northEast,
                d = n.getSouthWest(),
                p = n.getNorthEast(),
                x = p.lat >= a.lat && d.lat <= s.lat,
                M = p.lng >= a.lng && d.lng <= s.lng;
              return x && M;
            },
            overlaps: function (n) {
              n = ct(n);
              var a = this._southWest,
                s = this._northEast,
                d = n.getSouthWest(),
                p = n.getNorthEast(),
                x = p.lat > a.lat && d.lat < s.lat,
                M = p.lng > a.lng && d.lng < s.lng;
              return x && M;
            },
            toBBoxString: function () {
              return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
            },
            equals: function (n, a) {
              return n ? ((n = ct(n)), this._southWest.equals(n.getSouthWest(), a) && this._northEast.equals(n.getNorthEast(), a)) : !1;
            },
            isValid: function () {
              return !!(this._southWest && this._northEast);
            },
          };
          function ct(n, a) {
            return n instanceof st ? n : new st(n, a);
          }
          function ut(n, a, s) {
            if (isNaN(n) || isNaN(a)) throw new Error("Invalid LatLng object: (" + n + ", " + a + ")");
            ((this.lat = +n), (this.lng = +a), s !== void 0 && (this.alt = +s));
          }
          ut.prototype = {
            equals: function (n, a) {
              if (!n) return !1;
              n = rt(n);
              var s = Math.max(Math.abs(this.lat - n.lat), Math.abs(this.lng - n.lng));
              return s <= (a === void 0 ? 1e-9 : a);
            },
            toString: function (n) {
              return "LatLng(" + C(this.lat, n) + ", " + C(this.lng, n) + ")";
            },
            distanceTo: function (n) {
              return Pt.distance(this, rt(n));
            },
            wrap: function () {
              return Pt.wrapLatLng(this);
            },
            toBounds: function (n) {
              var a = (180 * n) / 40075017,
                s = a / Math.cos((Math.PI / 180) * this.lat);
              return ct([this.lat - a, this.lng - s], [this.lat + a, this.lng + s]);
            },
            clone: function () {
              return new ut(this.lat, this.lng, this.alt);
            },
          };
          function rt(n, a, s) {
            return n instanceof ut
              ? n
              : K(n) && typeof n[0] != "object"
                ? n.length === 3
                  ? new ut(n[0], n[1], n[2])
                  : n.length === 2
                    ? new ut(n[0], n[1])
                    : null
                : n == null
                  ? n
                  : typeof n == "object" && "lat" in n
                    ? new ut(n.lat, "lng" in n ? n.lng : n.lon, n.alt)
                    : a === void 0
                      ? null
                      : new ut(n, a, s);
          }
          var Xt = {
              latLngToPoint: function (n, a) {
                var s = this.projection.project(n),
                  d = this.scale(a);
                return this.transformation._transform(s, d);
              },
              pointToLatLng: function (n, a) {
                var s = this.scale(a),
                  d = this.transformation.untransform(n, s);
                return this.projection.unproject(d);
              },
              project: function (n) {
                return this.projection.project(n);
              },
              unproject: function (n) {
                return this.projection.unproject(n);
              },
              scale: function (n) {
                return 256 * Math.pow(2, n);
              },
              zoom: function (n) {
                return Math.log(n / 256) / Math.LN2;
              },
              getProjectedBounds: function (n) {
                if (this.infinite) return null;
                var a = this.projection.bounds,
                  s = this.scale(n),
                  d = this.transformation.transform(a.min, s),
                  p = this.transformation.transform(a.max, s);
                return new I(d, p);
              },
              infinite: !1,
              wrapLatLng: function (n) {
                var a = this.wrapLng ? E(n.lng, this.wrapLng, !0) : n.lng,
                  s = this.wrapLat ? E(n.lat, this.wrapLat, !0) : n.lat,
                  d = n.alt;
                return new ut(s, a, d);
              },
              wrapLatLngBounds: function (n) {
                var a = n.getCenter(),
                  s = this.wrapLatLng(a),
                  d = a.lat - s.lat,
                  p = a.lng - s.lng;
                if (d === 0 && p === 0) return n;
                var x = n.getSouthWest(),
                  M = n.getNorthEast(),
                  P = new ut(x.lat - d, x.lng - p),
                  V = new ut(M.lat - d, M.lng - p);
                return new st(P, V);
              },
            },
            Pt = g({}, Xt, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (n, a) {
                var s = Math.PI / 180,
                  d = n.lat * s,
                  p = a.lat * s,
                  x = Math.sin(((a.lat - n.lat) * s) / 2),
                  M = Math.sin(((a.lng - n.lng) * s) / 2),
                  P = x * x + Math.cos(d) * Math.cos(p) * M * M,
                  V = 2 * Math.atan2(Math.sqrt(P), Math.sqrt(1 - P));
                return this.R * V;
              },
            }),
            Gt = 6378137,
            on = {
              R: Gt,
              MAX_LATITUDE: 85.0511287798,
              project: function (n) {
                var a = Math.PI / 180,
                  s = this.MAX_LATITUDE,
                  d = Math.max(Math.min(s, n.lat), -s),
                  p = Math.sin(d * a);
                return new Y(this.R * n.lng * a, (this.R * Math.log((1 + p) / (1 - p))) / 2);
              },
              unproject: function (n) {
                var a = 180 / Math.PI;
                return new ut((2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * a, (n.x * a) / this.R);
              },
              bounds: (function () {
                var n = Gt * Math.PI;
                return new I([-n, -n], [n, n]);
              })(),
            };
          function Ue(n, a, s, d) {
            if (K(n)) {
              ((this._a = n[0]), (this._b = n[1]), (this._c = n[2]), (this._d = n[3]));
              return;
            }
            ((this._a = n), (this._b = a), (this._c = s), (this._d = d));
          }
          Ue.prototype = {
            transform: function (n, a) {
              return this._transform(n.clone(), a);
            },
            _transform: function (n, a) {
              return ((a = a || 1), (n.x = a * (this._a * n.x + this._b)), (n.y = a * (this._c * n.y + this._d)), n);
            },
            untransform: function (n, a) {
              return ((a = a || 1), new Y((n.x / a - this._b) / this._a, (n.y / a - this._d) / this._c));
            },
          };
          function je(n, a, s, d) {
            return new Ue(n, a, s, d);
          }
          var sn = g({}, Pt, {
              code: "EPSG:3857",
              projection: on,
              transformation: (function () {
                var n = 0.5 / (Math.PI * on.R);
                return je(n, 0.5, -n, 0.5);
              })(),
            }),
            bn = g({}, sn, { code: "EPSG:900913" });
          function ci(n) {
            return document.createElementNS("http://www.w3.org/2000/svg", n);
          }
          function Bs(n, a) {
            var s = "",
              d,
              p,
              x,
              M,
              P,
              V;
            for (d = 0, x = n.length; d < x; d++) {
              for (P = n[d], p = 0, M = P.length; p < M; p++) ((V = P[p]), (s += (p ? "L" : "M") + V.x + " " + V.y));
              s += a ? (wt.svg ? "z" : "x") : "";
            }
            return s || "M0 0";
          }
          var Qe = document.documentElement.style,
            Er = "ActiveXObject" in window,
            Hs = Er && !document.addEventListener,
            So = "msLaunchUri" in navigator && !("documentMode" in document),
            Xi = Fe("webkit"),
            Zs = Fe("android"),
            ko = Fe("android 2") || Fe("android 3"),
            Hu = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            Zu = Zs && Fe("Google") && Hu < 537 && !("AudioNode" in window),
            fi = !!window.opera,
            De = !So && Fe("chrome"),
            zn = Fe("gecko") && !Xi && !fi && !Er,
            Ge = !De && Fe("safari"),
            Us = Fe("phantom"),
            Gs = "OTransition" in Qe,
            Uu = navigator.platform.indexOf("Win") === 0,
            Ya = Er && "transition" in Qe,
            Ii = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ko,
            Yn = "MozPerspective" in Qe,
            Ar = !window.L_DISABLE_3D && (Ya || Ii || Yn) && !Gs && !Us,
            jn = typeof orientation < "u" || Fe("mobile"),
            Gu = jn && Xi,
            Ws = jn && Ii,
            To = !window.PointerEvent && window.MSPointerEvent,
            Cr = !!(window.PointerEvent || To),
            Ki = "ontouchstart" in window || !!window.TouchEvent,
            Wu = !window.L_NO_TOUCH && (Ki || Cr),
            qs = jn && fi,
            Vs = jn && zn,
            Eo = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            Ao = (function () {
              var n = !1;
              try {
                var a = Object.defineProperty({}, "passive", {
                  get: function () {
                    n = !0;
                  },
                });
                (window.addEventListener("testPassiveEventSupport", A, a), window.removeEventListener("testPassiveEventSupport", A, a));
              } catch {}
              return n;
            })(),
            Ys = (function () {
              return !!document.createElement("canvas").getContext;
            })(),
            Co = !!(document.createElementNS && ci("svg").createSVGRect),
            Xn =
              !!Co &&
              (function () {
                var n = document.createElement("div");
                return ((n.innerHTML = "<svg/>"), (n.firstChild && n.firstChild.namespaceURI) === "http://www.w3.org/2000/svg");
              })(),
            we =
              !Co &&
              (function () {
                try {
                  var n = document.createElement("div");
                  n.innerHTML = '<v:shape adj="1"/>';
                  var a = n.firstChild;
                  return ((a.style.behavior = "url(#default#VML)"), a && typeof a.adj == "object");
                } catch {
                  return !1;
                }
              })(),
            Ne = navigator.platform.indexOf("Mac") === 0,
            Qi = navigator.platform.indexOf("Linux") === 0;
          function Fe(n) {
            return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
          }
          var wt = {
              ie: Er,
              ielt9: Hs,
              edge: So,
              webkit: Xi,
              android: Zs,
              android23: ko,
              androidStock: Zu,
              opera: fi,
              chrome: De,
              gecko: zn,
              safari: Ge,
              phantom: Us,
              opera12: Gs,
              win: Uu,
              ie3d: Ya,
              webkit3d: Ii,
              gecko3d: Yn,
              any3d: Ar,
              mobile: jn,
              mobileWebkit: Gu,
              mobileWebkit3d: Ws,
              msPointer: To,
              pointer: Cr,
              touch: Wu,
              touchNative: Ki,
              mobileOpera: qs,
              mobileGecko: Vs,
              retina: Eo,
              passiveEvents: Ao,
              canvas: Ys,
              svg: Co,
              vml: we,
              inlineSvg: Xn,
              mac: Ne,
              linux: Qi,
            },
            Xs = wt.msPointer ? "MSPointerDown" : "pointerdown",
            Mo = wt.msPointer ? "MSPointerMove" : "pointermove",
            Fi = wt.msPointer ? "MSPointerUp" : "pointerup",
            Mr = wt.msPointer ? "MSPointerCancel" : "pointercancel",
            In = { touchstart: Xs, touchmove: Mo, touchend: Fi, touchcancel: Mr },
            di = { touchstart: Qs, touchmove: Xa, touchend: Xa, touchcancel: Xa },
            wn = {},
            hi = !1;
          function pe(n, a, s) {
            return (a === "touchstart" && qu(), di[a] ? ((s = di[a].bind(this, s)), n.addEventListener(In[a], s, !1), s) : (console.warn("wrong event specified:", a), A));
          }
          function Is(n, a, s) {
            if (!In[a]) {
              console.warn("wrong event specified:", a);
              return;
            }
            n.removeEventListener(In[a], s, !1);
          }
          function Ks(n) {
            wn[n.pointerId] = n;
          }
          function mi(n) {
            wn[n.pointerId] && (wn[n.pointerId] = n);
          }
          function pi(n) {
            delete wn[n.pointerId];
          }
          function qu() {
            hi || (document.addEventListener(Xs, Ks, !0), document.addEventListener(Mo, mi, !0), document.addEventListener(Fi, pi, !0), document.addEventListener(Mr, pi, !0), (hi = !0));
          }
          function Xa(n, a) {
            if (a.pointerType !== (a.MSPOINTER_TYPE_MOUSE || "mouse")) {
              a.touches = [];
              for (var s in wn) a.touches.push(wn[s]);
              ((a.changedTouches = [a]), n(a));
            }
          }
          function Qs(n, a) {
            (a.MSPOINTER_TYPE_TOUCH && a.pointerType === a.MSPOINTER_TYPE_TOUCH && fe(a), Xa(n, a));
          }
          function Vu(n) {
            var a = {},
              s,
              d;
            for (d in n) ((s = n[d]), (a[d] = s && s.bind ? s.bind(n) : s));
            return ((n = a), (a.type = "dblclick"), (a.detail = 2), (a.isTrusted = !1), (a._simulated = !0), a);
          }
          var Lr = 200;
          function Or(n, a) {
            n.addEventListener("dblclick", a);
            var s = 0,
              d;
            function p(x) {
              if (x.detail !== 1) {
                d = x.detail;
                return;
              }
              if (!(x.pointerType === "mouse" || (x.sourceCapabilities && !x.sourceCapabilities.firesTouchEvents))) {
                var M = Ro(x);
                if (
                  !(
                    M.some(function (V) {
                      return V instanceof HTMLLabelElement && V.attributes.for;
                    }) &&
                    !M.some(function (V) {
                      return V instanceof HTMLInputElement || V instanceof HTMLSelectElement;
                    })
                  )
                ) {
                  var P = Date.now();
                  (P - s <= Lr ? (d++, d === 2 && a(Vu(x))) : (d = 1), (s = P));
                }
              }
            }
            return (n.addEventListener("click", p), { dblclick: a, simDblclick: p });
          }
          function Dn(n, a) {
            (n.removeEventListener("dblclick", a.dblclick), n.removeEventListener("click", a.simDblclick));
          }
          var Ia = ea(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            Ji = ea(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            gi = Ji === "webkitTransition" || Ji === "OTransition" ? Ji + "End" : "transitionend";
          function Rr(n) {
            return typeof n == "string" ? document.getElementById(n) : n;
          }
          function vi(n, a) {
            var s = n.style[a] || (n.currentStyle && n.currentStyle[a]);
            if ((!s || s === "auto") && document.defaultView) {
              var d = document.defaultView.getComputedStyle(n, null);
              s = d ? d[a] : null;
            }
            return s === "auto" ? null : s;
          }
          function Wt(n, a, s) {
            var d = document.createElement(n);
            return ((d.className = a || ""), s && s.appendChild(d), d);
          }
          function ee(n) {
            var a = n.parentNode;
            a && a.removeChild(n);
          }
          function Ce(n) {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
          }
          function yi(n) {
            var a = n.parentNode;
            a && a.lastChild !== n && a.appendChild(n);
          }
          function $i(n) {
            var a = n.parentNode;
            a && a.firstChild !== n && a.insertBefore(n, a.firstChild);
          }
          function ta(n, a) {
            if (n.classList !== void 0) return n.classList.contains(a);
            var s = Me(n);
            return s.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(s);
          }
          function zt(n, a) {
            if (n.classList !== void 0) for (var s = B(a), d = 0, p = s.length; d < p; d++) n.classList.add(s[d]);
            else if (!ta(n, a)) {
              var x = Me(n);
              Lo(n, (x ? x + " " : "") + a);
            }
          }
          function ne(n, a) {
            n.classList !== void 0 ? n.classList.remove(a) : Lo(n, D((" " + Me(n) + " ").replace(" " + a + " ", " ")));
          }
          function Lo(n, a) {
            n.className.baseVal === void 0 ? (n.className = a) : (n.className.baseVal = a);
          }
          function Me(n) {
            return (n.correspondingElement && (n = n.correspondingElement), n.className.baseVal === void 0 ? n.className : n.className.baseVal);
          }
          function Pe(n, a) {
            "opacity" in n.style ? (n.style.opacity = a) : "filter" in n.style && Fs(n, a);
          }
          function Fs(n, a) {
            var s = !1,
              d = "DXImageTransform.Microsoft.Alpha";
            try {
              s = n.filters.item(d);
            } catch {
              if (a === 1) return;
            }
            ((a = Math.round(a * 100)), s ? ((s.Enabled = a !== 100), (s.Opacity = a)) : (n.style.filter += " progid:" + d + "(opacity=" + a + ")"));
          }
          function ea(n) {
            for (var a = document.documentElement.style, s = 0; s < n.length; s++) if (n[s] in a) return n[s];
            return !1;
          }
          function Je(n, a, s) {
            var d = a || new Y(0, 0);
            n.style[Ia] = (wt.ie3d ? "translate(" + d.x + "px," + d.y + "px)" : "translate3d(" + d.x + "px," + d.y + "px,0)") + (s ? " scale(" + s + ")" : "");
          }
          function se(n, a) {
            ((n._leaflet_pos = a), wt.any3d ? Je(n, a) : ((n.style.left = a.x + "px"), (n.style.top = a.y + "px")));
          }
          function Kn(n) {
            return n._leaflet_pos || new Y(0, 0);
          }
          var Sn, Ka, zr;
          if ("onselectstart" in document)
            ((Sn = function () {
              Lt(window, "selectstart", fe);
            }),
              (Ka = function () {
                Vt(window, "selectstart", fe);
              }));
          else {
            var na = ea(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            ((Sn = function () {
              if (na) {
                var n = document.documentElement.style;
                ((zr = n[na]), (n[na] = "none"));
              }
            }),
              (Ka = function () {
                na && ((document.documentElement.style[na] = zr), (zr = void 0));
              }));
          }
          function Qa() {
            Lt(window, "dragstart", fe);
          }
          function Oo() {
            Vt(window, "dragstart", fe);
          }
          var jr, ia;
          function Fa(n) {
            for (; n.tabIndex === -1; ) n = n.parentNode;
            n.style && (aa(), (jr = n), (ia = n.style.outlineStyle), (n.style.outlineStyle = "none"), Lt(window, "keydown", aa));
          }
          function aa() {
            jr && ((jr.style.outlineStyle = ia), (jr = void 0), (ia = void 0), Vt(window, "keydown", aa));
          }
          function _i(n) {
            do n = n.parentNode;
            while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
            return n;
          }
          function Qn(n) {
            var a = n.getBoundingClientRect();
            return { x: a.width / n.offsetWidth || 1, y: a.height / n.offsetHeight || 1, boundingClientRect: a };
          }
          var Js = {
            __proto__: null,
            TRANSFORM: Ia,
            TRANSITION: Ji,
            TRANSITION_END: gi,
            get: Rr,
            getStyle: vi,
            create: Wt,
            remove: ee,
            empty: Ce,
            toFront: yi,
            toBack: $i,
            hasClass: ta,
            addClass: zt,
            removeClass: ne,
            setClass: Lo,
            getClass: Me,
            setOpacity: Pe,
            testProp: ea,
            setTransform: Je,
            setPosition: se,
            getPosition: Kn,
            get disableTextSelection() {
              return Sn;
            },
            get enableTextSelection() {
              return Ka;
            },
            disableImageDrag: Qa,
            enableImageDrag: Oo,
            preventOutline: Fa,
            restoreOutline: aa,
            getSizedParentNode: _i,
            getScale: Qn,
          };
          function Lt(n, a, s, d) {
            if (a && typeof a == "object") for (var p in a) xi(n, p, a[p], s);
            else {
              a = B(a);
              for (var x = 0, M = a.length; x < M; x++) xi(n, a[x], s, d);
            }
            return this;
          }
          var ln = "_leaflet_events";
          function Vt(n, a, s, d) {
            if (arguments.length === 1) (kn(n), delete n[ln]);
            else if (a && typeof a == "object") for (var p in a) Tn(n, p, a[p], s);
            else if (((a = B(a)), arguments.length === 2))
              kn(n, function (P) {
                return at(a, P) !== -1;
              });
            else for (var x = 0, M = a.length; x < M; x++) Tn(n, a[x], s, d);
            return this;
          }
          function kn(n, a) {
            for (var s in n[ln]) {
              var d = s.split(/\d/)[0];
              (!a || a(d)) && Tn(n, d, null, null, s);
            }
          }
          var Ja = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
          function xi(n, a, s, d) {
            var p = a + k(s) + (d ? "_" + k(d) : "");
            if (n[ln] && n[ln][p]) return this;
            var x = function (P) {
                return s.call(d || n, P || window.event);
              },
              M = x;
            (!wt.touchNative && wt.pointer && a.indexOf("touch") === 0
              ? (x = pe(n, a, x))
              : wt.touch && a === "dblclick"
                ? (x = Or(n, x))
                : "addEventListener" in n
                  ? a === "touchstart" || a === "touchmove" || a === "wheel" || a === "mousewheel"
                    ? n.addEventListener(Ja[a] || a, x, wt.passiveEvents ? { passive: !1 } : !1)
                    : a === "mouseenter" || a === "mouseleave"
                      ? ((x = function (P) {
                          ((P = P || window.event), wi(n, P) && M(P));
                        }),
                        n.addEventListener(Ja[a], x, !1))
                      : n.addEventListener(a, M, !1)
                  : n.attachEvent("on" + a, x),
              (n[ln] = n[ln] || {}),
              (n[ln][p] = x));
          }
          function Tn(n, a, s, d, p) {
            p = p || a + k(s) + (d ? "_" + k(d) : "");
            var x = n[ln] && n[ln][p];
            if (!x) return this;
            (!wt.touchNative && wt.pointer && a.indexOf("touch") === 0 ? Is(n, a, x) : wt.touch && a === "dblclick" ? Dn(n, x) : "removeEventListener" in n ? n.removeEventListener(Ja[a] || a, x, !1) : n.detachEvent("on" + a, x),
              (n[ln][p] = null));
          }
          function Nn(n) {
            return (n.stopPropagation ? n.stopPropagation() : n.originalEvent ? (n.originalEvent._stopped = !0) : (n.cancelBubble = !0), this);
          }
          function ra(n) {
            return (xi(n, "wheel", Nn), this);
          }
          function oa(n) {
            return (Lt(n, "mousedown touchstart dblclick contextmenu", Nn), (n._leaflet_disable_click = !0), this);
          }
          function fe(n) {
            return (n.preventDefault ? n.preventDefault() : (n.returnValue = !1), this);
          }
          function En(n) {
            return (fe(n), Nn(n), this);
          }
          function Ro(n) {
            if (n.composedPath) return n.composedPath();
            for (var a = [], s = n.target; s; ) (a.push(s), (s = s.parentNode));
            return a;
          }
          function Le(n, a) {
            if (!a) return new Y(n.clientX, n.clientY);
            var s = Qn(a),
              d = s.boundingClientRect;
            return new Y((n.clientX - d.left) / s.x - a.clientLeft, (n.clientY - d.top) / s.y - a.clientTop);
          }
          var bi = wt.linux && wt.chrome ? window.devicePixelRatio : wt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
          function $a(n) {
            return wt.edge
              ? n.wheelDeltaY / 2
              : n.deltaY && n.deltaMode === 0
                ? -n.deltaY / bi
                : n.deltaY && n.deltaMode === 1
                  ? -n.deltaY * 20
                  : n.deltaY && n.deltaMode === 2
                    ? -n.deltaY * 60
                    : n.deltaX || n.deltaZ
                      ? 0
                      : n.wheelDelta
                        ? (n.wheelDeltaY || n.wheelDelta) / 2
                        : n.detail && Math.abs(n.detail) < 32765
                          ? -n.detail * 20
                          : n.detail
                            ? (n.detail / -32765) * 60
                            : 0;
          }
          function wi(n, a) {
            var s = a.relatedTarget;
            if (!s) return !0;
            try {
              for (; s && s !== n; ) s = s.parentNode;
            } catch {
              return !1;
            }
            return s !== n;
          }
          var Yu = {
              __proto__: null,
              on: Lt,
              off: Vt,
              stopPropagation: Nn,
              disableScrollPropagation: ra,
              disableClickPropagation: oa,
              preventDefault: fe,
              stop: En,
              getPropagationPath: Ro,
              getMousePosition: Le,
              getWheelDelta: $a,
              isExternalTarget: wi,
              addListener: Lt,
              removeListener: Vt,
            },
            Dr = et.extend({
              run: function (n, a, s, d) {
                (this.stop(),
                  (this._el = n),
                  (this._inProgress = !0),
                  (this._duration = s || 0.25),
                  (this._easeOutPower = 1 / Math.max(d || 0.5, 0.2)),
                  (this._startPos = Kn(n)),
                  (this._offset = a.subtract(this._startPos)),
                  (this._startTime = +new Date()),
                  this.fire("start"),
                  this._animate());
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete());
              },
              _animate: function () {
                ((this._animId = _t(this._animate, this)), this._step());
              },
              _step: function (n) {
                var a = +new Date() - this._startTime,
                  s = this._duration * 1e3;
                a < s ? this._runFrame(this._easeOut(a / s), n) : (this._runFrame(1), this._complete());
              },
              _runFrame: function (n, a) {
                var s = this._startPos.add(this._offset.multiplyBy(n));
                (a && s._round(), se(this._el, s), this.fire("step"));
              },
              _complete: function () {
                (ht(this._animId), (this._inProgress = !1), this.fire("end"));
              },
              _easeOut: function (n) {
                return 1 - Math.pow(1 - n, this._easeOutPower);
              },
            }),
            Bt = et.extend({
              options: {
                crs: sn,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
              },
              initialize: function (n, a) {
                ((a = H(this, a)),
                  (this._handlers = []),
                  (this._layers = {}),
                  (this._zoomBoundLayers = {}),
                  (this._sizeChanged = !0),
                  this._initContainer(n),
                  this._initLayout(),
                  (this._onResize = _(this._onResize, this)),
                  this._initEvents(),
                  a.maxBounds && this.setMaxBounds(a.maxBounds),
                  a.zoom !== void 0 && (this._zoom = this._limitZoom(a.zoom)),
                  a.center && a.zoom !== void 0 && this.setView(rt(a.center), a.zoom, { reset: !0 }),
                  this.callInitHooks(),
                  (this._zoomAnimated = Ji && wt.any3d && !wt.mobileOpera && this.options.zoomAnimation),
                  this._zoomAnimated && (this._createAnimProxy(), Lt(this._proxy, gi, this._catchTransitionEnd, this)),
                  this._addLayers(this.options.layers));
              },
              setView: function (n, a, s) {
                if (((a = a === void 0 ? this._zoom : this._limitZoom(a)), (n = this._limitCenter(rt(n), a, this.options.maxBounds)), (s = s || {}), this._stop(), this._loaded && !s.reset && s !== !0)) {
                  s.animate !== void 0 && ((s.zoom = g({ animate: s.animate }, s.zoom)), (s.pan = g({ animate: s.animate, duration: s.duration }, s.pan)));
                  var d = this._zoom !== a ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, a, s.zoom) : this._tryAnimatedPan(n, s.pan);
                  if (d) return (clearTimeout(this._sizeTimer), this);
                }
                return (this._resetView(n, a, s.pan && s.pan.noMoveStart), this);
              },
              setZoom: function (n, a) {
                return this._loaded ? this.setView(this.getCenter(), n, { zoom: a }) : ((this._zoom = n), this);
              },
              zoomIn: function (n, a) {
                return ((n = n || (wt.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + n, a));
              },
              zoomOut: function (n, a) {
                return ((n = n || (wt.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - n, a));
              },
              setZoomAround: function (n, a, s) {
                var d = this.getZoomScale(a),
                  p = this.getSize().divideBy(2),
                  x = n instanceof Y ? n : this.latLngToContainerPoint(n),
                  M = x.subtract(p).multiplyBy(1 - 1 / d),
                  P = this.containerPointToLatLng(p.add(M));
                return this.setView(P, a, { zoom: s });
              },
              _getBoundsCenterZoom: function (n, a) {
                ((a = a || {}), (n = n.getBounds ? n.getBounds() : ct(n)));
                var s = S(a.paddingTopLeft || a.padding || [0, 0]),
                  d = S(a.paddingBottomRight || a.padding || [0, 0]),
                  p = this.getBoundsZoom(n, !1, s.add(d));
                if (((p = typeof a.maxZoom == "number" ? Math.min(a.maxZoom, p) : p), p === 1 / 0)) return { center: n.getCenter(), zoom: p };
                var x = d.subtract(s).divideBy(2),
                  M = this.project(n.getSouthWest(), p),
                  P = this.project(n.getNorthEast(), p),
                  V = this.unproject(M.add(P).divideBy(2).add(x), p);
                return { center: V, zoom: p };
              },
              fitBounds: function (n, a) {
                if (((n = ct(n)), !n.isValid())) throw new Error("Bounds are not valid.");
                var s = this._getBoundsCenterZoom(n, a);
                return this.setView(s.center, s.zoom, a);
              },
              fitWorld: function (n) {
                return this.fitBounds(
                  [
                    [-90, -180],
                    [90, 180],
                  ],
                  n,
                );
              },
              panTo: function (n, a) {
                return this.setView(n, this._zoom, { pan: a });
              },
              panBy: function (n, a) {
                if (((n = S(n).round()), (a = a || {}), !n.x && !n.y)) return this.fire("moveend");
                if (a.animate !== !0 && !this.getSize().contains(n)) return (this._resetView(this.unproject(this.project(this.getCenter()).add(n)), this.getZoom()), this);
                if ((this._panAnim || ((this._panAnim = new Dr()), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), a.noMoveStart || this.fire("movestart"), a.animate !== !1)) {
                  zt(this._mapPane, "leaflet-pan-anim");
                  var s = this._getMapPanePos().subtract(n).round();
                  this._panAnim.run(this._mapPane, s, a.duration || 0.25, a.easeLinearity);
                } else (this._rawPanBy(n), this.fire("move").fire("moveend"));
                return this;
              },
              flyTo: function (n, a, s) {
                if (((s = s || {}), s.animate === !1 || !wt.any3d)) return this.setView(n, a, s);
                this._stop();
                var d = this.project(this.getCenter()),
                  p = this.project(n),
                  x = this.getSize(),
                  M = this._zoom;
                ((n = rt(n)), (a = a === void 0 ? M : a));
                var P = Math.max(x.x, x.y),
                  V = P * this.getZoomScale(M, a),
                  it = p.distanceTo(d) || 1,
                  dt = 1.42,
                  vt = dt * dt;
                function bt(re) {
                  var Mn = re ? -1 : 1,
                    Hn = re ? V : P,
                    ei = V * V - P * P + Mn * vt * vt * it * it,
                    Zn = 2 * Hn * vt * it,
                    dr = ei / Zn,
                    Ir = Math.sqrt(dr * dr + 1) - dr,
                    hr = Ir < 1e-9 ? -18 : Math.log(Ir);
                  return hr;
                }
                function Mt(re) {
                  return (Math.exp(re) - Math.exp(-re)) / 2;
                }
                function ie(re) {
                  return (Math.exp(re) + Math.exp(-re)) / 2;
                }
                function le(re) {
                  return Mt(re) / ie(re);
                }
                var ke = bt(0);
                function $e(re) {
                  return P * (ie(ke) / ie(ke + dt * re));
                }
                function vl(re) {
                  return (P * (ie(ke) * le(ke + dt * re) - Mt(ke))) / vt;
                }
                function yl(re) {
                  return 1 - Math.pow(1 - re, 1.5);
                }
                var fr = Date.now(),
                  ya = (bt(1) - ke) / dt,
                  _l = s.duration ? 1e3 * s.duration : 1e3 * ya * 0.8;
                function _a() {
                  var re = (Date.now() - fr) / _l,
                    Mn = yl(re) * ya;
                  re <= 1 ? ((this._flyToFrame = _t(_a, this)), this._move(this.unproject(d.add(p.subtract(d).multiplyBy(vl(Mn) / it)), M), this.getScaleZoom(P / $e(Mn), M), { flyTo: !0 })) : this._move(n, a)._moveEnd(!0);
                }
                return (this._moveStart(!0, s.noMoveStart), _a.call(this), this);
              },
              flyToBounds: function (n, a) {
                var s = this._getBoundsCenterZoom(n, a);
                return this.flyTo(s.center, s.zoom, a);
              },
              setMaxBounds: function (n) {
                return (
                  (n = ct(n)),
                  this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
                  n.isValid() ? ((this.options.maxBounds = n), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : ((this.options.maxBounds = null), this)
                );
              },
              setMinZoom: function (n) {
                var a = this.options.minZoom;
                return ((this.options.minZoom = n), this._loaded && a !== n && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(n) : this);
              },
              setMaxZoom: function (n) {
                var a = this.options.maxZoom;
                return ((this.options.maxZoom = n), this._loaded && a !== n && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(n) : this);
              },
              panInsideBounds: function (n, a) {
                this._enforcingBounds = !0;
                var s = this.getCenter(),
                  d = this._limitCenter(s, this._zoom, ct(n));
                return (s.equals(d) || this.panTo(d, a), (this._enforcingBounds = !1), this);
              },
              panInside: function (n, a) {
                a = a || {};
                var s = S(a.paddingTopLeft || a.padding || [0, 0]),
                  d = S(a.paddingBottomRight || a.padding || [0, 0]),
                  p = this.project(this.getCenter()),
                  x = this.project(n),
                  M = this.getPixelBounds(),
                  P = lt([M.min.add(s), M.max.subtract(d)]),
                  V = P.getSize();
                if (!P.contains(x)) {
                  this._enforcingBounds = !0;
                  var it = x.subtract(P.getCenter()),
                    dt = P.extend(x).getSize().subtract(V);
                  ((p.x += it.x < 0 ? -dt.x : dt.x), (p.y += it.y < 0 ? -dt.y : dt.y), this.panTo(this.unproject(p), a), (this._enforcingBounds = !1));
                }
                return this;
              },
              invalidateSize: function (n) {
                if (!this._loaded) return this;
                n = g({ animate: !1, pan: !0 }, n === !0 ? { animate: !0 } : n);
                var a = this.getSize();
                ((this._sizeChanged = !0), (this._lastCenter = null));
                var s = this.getSize(),
                  d = a.divideBy(2).round(),
                  p = s.divideBy(2).round(),
                  x = d.subtract(p);
                return !x.x && !x.y
                  ? this
                  : (n.animate && n.pan
                      ? this.panBy(x)
                      : (n.pan && this._rawPanBy(x), this.fire("move"), n.debounceMoveend ? (clearTimeout(this._sizeTimer), (this._sizeTimer = setTimeout(_(this.fire, this, "moveend"), 200))) : this.fire("moveend")),
                    this.fire("resize", { oldSize: a, newSize: s }));
              },
              stop: function () {
                return (this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop());
              },
              locate: function (n) {
                if (((n = this._locateOptions = g({ timeout: 1e4, watch: !1 }, n)), !("geolocation" in navigator))) return (this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this);
                var a = _(this._handleGeolocationResponse, this),
                  s = _(this._handleGeolocationError, this);
                return (n.watch ? (this._locationWatchId = navigator.geolocation.watchPosition(a, s, n)) : navigator.geolocation.getCurrentPosition(a, s, n), this);
              },
              stopLocate: function () {
                return (navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this);
              },
              _handleGeolocationError: function (n) {
                if (this._container._leaflet_id) {
                  var a = n.code,
                    s = n.message || (a === 1 ? "permission denied" : a === 2 ? "position unavailable" : "timeout");
                  (this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: a, message: "Geolocation error: " + s + "." }));
                }
              },
              _handleGeolocationResponse: function (n) {
                if (this._container._leaflet_id) {
                  var a = n.coords.latitude,
                    s = n.coords.longitude,
                    d = new ut(a, s),
                    p = d.toBounds(n.coords.accuracy * 2),
                    x = this._locateOptions;
                  if (x.setView) {
                    var M = this.getBoundsZoom(p);
                    this.setView(d, x.maxZoom ? Math.min(M, x.maxZoom) : M);
                  }
                  var P = { latlng: d, bounds: p, timestamp: n.timestamp };
                  for (var V in n.coords) typeof n.coords[V] == "number" && (P[V] = n.coords[V]);
                  this.fire("locationfound", P);
                }
              },
              addHandler: function (n, a) {
                if (!a) return this;
                var s = (this[n] = new a(this));
                return (this._handlers.push(s), this.options[n] && s.enable(), this);
              },
              remove: function () {
                if ((this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)) throw new Error("Map container is being reused by another instance");
                try {
                  (delete this._container._leaflet_id, delete this._containerId);
                } catch {
                  ((this._container._leaflet_id = void 0), (this._containerId = void 0));
                }
                (this._locationWatchId !== void 0 && this.stopLocate(),
                  this._stop(),
                  ee(this._mapPane),
                  this._clearControlPos && this._clearControlPos(),
                  this._resizeRequest && (ht(this._resizeRequest), (this._resizeRequest = null)),
                  this._clearHandlers(),
                  this._loaded && this.fire("unload"));
                var n;
                for (n in this._layers) this._layers[n].remove();
                for (n in this._panes) ee(this._panes[n]);
                return ((this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this);
              },
              createPane: function (n, a) {
                var s = "leaflet-pane" + (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""),
                  d = Wt("div", s, a || this._mapPane);
                return (n && (this._panes[n] = d), d);
              },
              getCenter: function () {
                return (this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint()));
              },
              getZoom: function () {
                return this._zoom;
              },
              getBounds: function () {
                var n = this.getPixelBounds(),
                  a = this.unproject(n.getBottomLeft()),
                  s = this.unproject(n.getTopRight());
                return new st(a, s);
              },
              getMinZoom: function () {
                return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
              },
              getMaxZoom: function () {
                return this.options.maxZoom === void 0 ? (this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom) : this.options.maxZoom;
              },
              getBoundsZoom: function (n, a, s) {
                ((n = ct(n)), (s = S(s || [0, 0])));
                var d = this.getZoom() || 0,
                  p = this.getMinZoom(),
                  x = this.getMaxZoom(),
                  M = n.getNorthWest(),
                  P = n.getSouthEast(),
                  V = this.getSize().subtract(s),
                  it = lt(this.project(P, d), this.project(M, d)).getSize(),
                  dt = wt.any3d ? this.options.zoomSnap : 1,
                  vt = V.x / it.x,
                  bt = V.y / it.y,
                  Mt = a ? Math.max(vt, bt) : Math.min(vt, bt);
                return ((d = this.getScaleZoom(Mt, d)), dt && ((d = Math.round(d / (dt / 100)) * (dt / 100)), (d = a ? Math.ceil(d / dt) * dt : Math.floor(d / dt) * dt)), Math.max(p, Math.min(x, d)));
              },
              getSize: function () {
                return ((!this._size || this._sizeChanged) && ((this._size = new Y(this._container.clientWidth || 0, this._container.clientHeight || 0)), (this._sizeChanged = !1)), this._size.clone());
              },
              getPixelBounds: function (n, a) {
                var s = this._getTopLeftPoint(n, a);
                return new I(s, s.add(this.getSize()));
              },
              getPixelOrigin: function () {
                return (this._checkIfLoaded(), this._pixelOrigin);
              },
              getPixelWorldBounds: function (n) {
                return this.options.crs.getProjectedBounds(n === void 0 ? this.getZoom() : n);
              },
              getPane: function (n) {
                return typeof n == "string" ? this._panes[n] : n;
              },
              getPanes: function () {
                return this._panes;
              },
              getContainer: function () {
                return this._container;
              },
              getZoomScale: function (n, a) {
                var s = this.options.crs;
                return ((a = a === void 0 ? this._zoom : a), s.scale(n) / s.scale(a));
              },
              getScaleZoom: function (n, a) {
                var s = this.options.crs;
                a = a === void 0 ? this._zoom : a;
                var d = s.zoom(n * s.scale(a));
                return isNaN(d) ? 1 / 0 : d;
              },
              project: function (n, a) {
                return ((a = a === void 0 ? this._zoom : a), this.options.crs.latLngToPoint(rt(n), a));
              },
              unproject: function (n, a) {
                return ((a = a === void 0 ? this._zoom : a), this.options.crs.pointToLatLng(S(n), a));
              },
              layerPointToLatLng: function (n) {
                var a = S(n).add(this.getPixelOrigin());
                return this.unproject(a);
              },
              latLngToLayerPoint: function (n) {
                var a = this.project(rt(n))._round();
                return a._subtract(this.getPixelOrigin());
              },
              wrapLatLng: function (n) {
                return this.options.crs.wrapLatLng(rt(n));
              },
              wrapLatLngBounds: function (n) {
                return this.options.crs.wrapLatLngBounds(ct(n));
              },
              distance: function (n, a) {
                return this.options.crs.distance(rt(n), rt(a));
              },
              containerPointToLayerPoint: function (n) {
                return S(n).subtract(this._getMapPanePos());
              },
              layerPointToContainerPoint: function (n) {
                return S(n).add(this._getMapPanePos());
              },
              containerPointToLatLng: function (n) {
                var a = this.containerPointToLayerPoint(S(n));
                return this.layerPointToLatLng(a);
              },
              latLngToContainerPoint: function (n) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(rt(n)));
              },
              mouseEventToContainerPoint: function (n) {
                return Le(n, this._container);
              },
              mouseEventToLayerPoint: function (n) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n));
              },
              mouseEventToLatLng: function (n) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
              },
              _initContainer: function (n) {
                var a = (this._container = Rr(n));
                if (a) {
                  if (a._leaflet_id) throw new Error("Map container is already initialized.");
                } else throw new Error("Map container not found.");
                (Lt(a, "scroll", this._onScroll, this), (this._containerId = k(a)));
              },
              _initLayout: function () {
                var n = this._container;
                ((this._fadeAnimated = this.options.fadeAnimation && wt.any3d),
                  zt(
                    n,
                    "leaflet-container" +
                      (wt.touch ? " leaflet-touch" : "") +
                      (wt.retina ? " leaflet-retina" : "") +
                      (wt.ielt9 ? " leaflet-oldie" : "") +
                      (wt.safari ? " leaflet-safari" : "") +
                      (this._fadeAnimated ? " leaflet-fade-anim" : ""),
                  ));
                var a = vi(n, "position");
                (a !== "absolute" && a !== "relative" && a !== "fixed" && a !== "sticky" && (n.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos());
              },
              _initPanes: function () {
                var n = (this._panes = {});
                ((this._paneRenderers = {}),
                  (this._mapPane = this.createPane("mapPane", this._container)),
                  se(this._mapPane, new Y(0, 0)),
                  this.createPane("tilePane"),
                  this.createPane("overlayPane"),
                  this.createPane("shadowPane"),
                  this.createPane("markerPane"),
                  this.createPane("tooltipPane"),
                  this.createPane("popupPane"),
                  this.options.markerZoomAnimation || (zt(n.markerPane, "leaflet-zoom-hide"), zt(n.shadowPane, "leaflet-zoom-hide")));
              },
              _resetView: function (n, a, s) {
                se(this._mapPane, new Y(0, 0));
                var d = !this._loaded;
                ((this._loaded = !0), (a = this._limitZoom(a)), this.fire("viewprereset"));
                var p = this._zoom !== a;
                (this._moveStart(p, s)._move(n, a)._moveEnd(p), this.fire("viewreset"), d && this.fire("load"));
              },
              _moveStart: function (n, a) {
                return (n && this.fire("zoomstart"), a || this.fire("movestart"), this);
              },
              _move: function (n, a, s, d) {
                a === void 0 && (a = this._zoom);
                var p = this._zoom !== a;
                return ((this._zoom = a), (this._lastCenter = n), (this._pixelOrigin = this._getNewPixelOrigin(n)), d ? s && s.pinch && this.fire("zoom", s) : ((p || (s && s.pinch)) && this.fire("zoom", s), this.fire("move", s)), this);
              },
              _moveEnd: function (n) {
                return (n && this.fire("zoomend"), this.fire("moveend"));
              },
              _stop: function () {
                return (ht(this._flyToFrame), this._panAnim && this._panAnim.stop(), this);
              },
              _rawPanBy: function (n) {
                se(this._mapPane, this._getMapPanePos().subtract(n));
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
              },
              _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.");
              },
              _initEvents: function (n) {
                ((this._targets = {}), (this._targets[k(this._container)] = this));
                var a = n ? Vt : Lt;
                (a(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
                  this.options.trackResize && a(window, "resize", this._onResize, this),
                  wt.any3d && this.options.transform3DLimit && (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd));
              },
              _onResize: function () {
                (ht(this._resizeRequest),
                  (this._resizeRequest = _t(function () {
                    this.invalidateSize({ debounceMoveend: !0 });
                  }, this)));
              },
              _onScroll: function () {
                ((this._container.scrollTop = 0), (this._container.scrollLeft = 0));
              },
              _onMoveEnd: function () {
                var n = this._getMapPanePos();
                Math.max(Math.abs(n.x), Math.abs(n.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
              },
              _findEventTargets: function (n, a) {
                for (var s = [], d, p = a === "mouseout" || a === "mouseover", x = n.target || n.srcElement, M = !1; x; ) {
                  if (((d = this._targets[k(x)]), d && (a === "click" || a === "preclick") && this._draggableMoved(d))) {
                    M = !0;
                    break;
                  }
                  if ((d && d.listens(a, !0) && ((p && !wi(x, n)) || (s.push(d), p))) || x === this._container) break;
                  x = x.parentNode;
                }
                return (!s.length && !M && !p && this.listens(a, !0) && (s = [this]), s);
              },
              _isClickDisabled: function (n) {
                for (; n && n !== this._container; ) {
                  if (n._leaflet_disable_click) return !0;
                  n = n.parentNode;
                }
              },
              _handleDOMEvent: function (n) {
                var a = n.target || n.srcElement;
                if (!(!this._loaded || a._leaflet_disable_events || (n.type === "click" && this._isClickDisabled(a)))) {
                  var s = n.type;
                  (s === "mousedown" && Fa(a), this._fireDOMEvent(n, s));
                }
              },
              _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
              _fireDOMEvent: function (n, a, s) {
                if (n.type === "click") {
                  var d = g({}, n);
                  ((d.type = "preclick"), this._fireDOMEvent(d, d.type, s));
                }
                var p = this._findEventTargets(n, a);
                if (s) {
                  for (var x = [], M = 0; M < s.length; M++) s[M].listens(a, !0) && x.push(s[M]);
                  p = x.concat(p);
                }
                if (p.length) {
                  a === "contextmenu" && fe(n);
                  var P = p[0],
                    V = { originalEvent: n };
                  if (n.type !== "keypress" && n.type !== "keydown" && n.type !== "keyup") {
                    var it = P.getLatLng && (!P._radius || P._radius <= 10);
                    ((V.containerPoint = it ? this.latLngToContainerPoint(P.getLatLng()) : this.mouseEventToContainerPoint(n)),
                      (V.layerPoint = this.containerPointToLayerPoint(V.containerPoint)),
                      (V.latlng = it ? P.getLatLng() : this.layerPointToLatLng(V.layerPoint)));
                  }
                  for (M = 0; M < p.length; M++) if ((p[M].fire(a, V, !0), V.originalEvent._stopped || (p[M].options.bubblingMouseEvents === !1 && at(this._mouseEvents, a) !== -1))) return;
                }
              },
              _draggableMoved: function (n) {
                return ((n = n.dragging && n.dragging.enabled() ? n : this), (n.dragging && n.dragging.moved()) || (this.boxZoom && this.boxZoom.moved()));
              },
              _clearHandlers: function () {
                for (var n = 0, a = this._handlers.length; n < a; n++) this._handlers[n].disable();
              },
              whenReady: function (n, a) {
                return (this._loaded ? n.call(a || this, { target: this }) : this.on("load", n, a), this);
              },
              _getMapPanePos: function () {
                return Kn(this._mapPane) || new Y(0, 0);
              },
              _moved: function () {
                var n = this._getMapPanePos();
                return n && !n.equals([0, 0]);
              },
              _getTopLeftPoint: function (n, a) {
                var s = n && a !== void 0 ? this._getNewPixelOrigin(n, a) : this.getPixelOrigin();
                return s.subtract(this._getMapPanePos());
              },
              _getNewPixelOrigin: function (n, a) {
                var s = this.getSize()._divideBy(2);
                return this.project(n, a)._subtract(s)._add(this._getMapPanePos())._round();
              },
              _latLngToNewLayerPoint: function (n, a, s) {
                var d = this._getNewPixelOrigin(s, a);
                return this.project(n, a)._subtract(d);
              },
              _latLngBoundsToNewLayerBounds: function (n, a, s) {
                var d = this._getNewPixelOrigin(s, a);
                return lt([this.project(n.getSouthWest(), a)._subtract(d), this.project(n.getNorthWest(), a)._subtract(d), this.project(n.getSouthEast(), a)._subtract(d), this.project(n.getNorthEast(), a)._subtract(d)]);
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
              },
              _getCenterOffset: function (n) {
                return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint());
              },
              _limitCenter: function (n, a, s) {
                if (!s) return n;
                var d = this.project(n, a),
                  p = this.getSize().divideBy(2),
                  x = new I(d.subtract(p), d.add(p)),
                  M = this._getBoundsOffset(x, s, a);
                return Math.abs(M.x) <= 1 && Math.abs(M.y) <= 1 ? n : this.unproject(d.add(M), a);
              },
              _limitOffset: function (n, a) {
                if (!a) return n;
                var s = this.getPixelBounds(),
                  d = new I(s.min.add(n), s.max.add(n));
                return n.add(this._getBoundsOffset(d, a));
              },
              _getBoundsOffset: function (n, a, s) {
                var d = lt(this.project(a.getNorthEast(), s), this.project(a.getSouthWest(), s)),
                  p = d.min.subtract(n.min),
                  x = d.max.subtract(n.max),
                  M = this._rebound(p.x, -x.x),
                  P = this._rebound(p.y, -x.y);
                return new Y(M, P);
              },
              _rebound: function (n, a) {
                return n + a > 0 ? Math.round(n - a) / 2 : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(a));
              },
              _limitZoom: function (n) {
                var a = this.getMinZoom(),
                  s = this.getMaxZoom(),
                  d = wt.any3d ? this.options.zoomSnap : 1;
                return (d && (n = Math.round(n / d) * d), Math.max(a, Math.min(s, n)));
              },
              _onPanTransitionStep: function () {
                this.fire("move");
              },
              _onPanTransitionEnd: function () {
                (ne(this._mapPane, "leaflet-pan-anim"), this.fire("moveend"));
              },
              _tryAnimatedPan: function (n, a) {
                var s = this._getCenterOffset(n)._trunc();
                return (a && a.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, a), !0);
              },
              _createAnimProxy: function () {
                var n = (this._proxy = Wt("div", "leaflet-proxy leaflet-zoom-animated"));
                (this._panes.mapPane.appendChild(n),
                  this.on(
                    "zoomanim",
                    function (a) {
                      var s = Ia,
                        d = this._proxy.style[s];
                      (Je(this._proxy, this.project(a.center, a.zoom), this.getZoomScale(a.zoom, 1)), d === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd());
                    },
                    this,
                  ),
                  this.on("load moveend", this._animMoveEnd, this),
                  this._on("unload", this._destroyAnimProxy, this));
              },
              _destroyAnimProxy: function () {
                (ee(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy);
              },
              _animMoveEnd: function () {
                var n = this.getCenter(),
                  a = this.getZoom();
                Je(this._proxy, this.project(n, a), this.getZoomScale(a, 1));
              },
              _catchTransitionEnd: function (n) {
                this._animatingZoom && n.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
              },
              _tryAnimatedZoom: function (n, a, s) {
                if (this._animatingZoom) return !0;
                if (((s = s || {}), !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(a - this._zoom) > this.options.zoomAnimationThreshold)) return !1;
                var d = this.getZoomScale(a),
                  p = this._getCenterOffset(n)._divideBy(1 - 1 / d);
                return s.animate !== !0 && !this.getSize().contains(p)
                  ? !1
                  : (_t(function () {
                      this._moveStart(!0, s.noMoveStart || !1)._animateZoom(n, a, !0);
                    }, this),
                    !0);
              },
              _animateZoom: function (n, a, s, d) {
                this._mapPane &&
                  (s && ((this._animatingZoom = !0), (this._animateToCenter = n), (this._animateToZoom = a), zt(this._mapPane, "leaflet-zoom-anim")),
                  this.fire("zoomanim", { center: n, zoom: a, noUpdate: d }),
                  this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  setTimeout(_(this._onZoomTransitionEnd, this), 250));
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                  (this._mapPane && ne(this._mapPane, "leaflet-zoom-anim"),
                  (this._animatingZoom = !1),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  this._tempFireZoomEvent && this.fire("zoom"),
                  delete this._tempFireZoomEvent,
                  this.fire("move"),
                  this._moveEnd(!0));
              },
            });
          function tr(n, a) {
            return new Bt(n, a);
          }
          var Be = Tt.extend({
              options: { position: "topright" },
              initialize: function (n) {
                H(this, n);
              },
              getPosition: function () {
                return this.options.position;
              },
              setPosition: function (n) {
                var a = this._map;
                return (a && a.removeControl(this), (this.options.position = n), a && a.addControl(this), this);
              },
              getContainer: function () {
                return this._container;
              },
              addTo: function (n) {
                (this.remove(), (this._map = n));
                var a = (this._container = this.onAdd(n)),
                  s = this.getPosition(),
                  d = n._controlCorners[s];
                return (zt(a, "leaflet-control"), s.indexOf("bottom") !== -1 ? d.insertBefore(a, d.firstChild) : d.appendChild(a), this._map.on("unload", this.remove, this), this);
              },
              remove: function () {
                return this._map ? (ee(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), (this._map = null), this) : this;
              },
              _refocusOnMap: function (n) {
                this._map && n && n.screenX > 0 && n.screenY > 0 && this._map.getContainer().focus();
              },
            }),
            sa = function (n) {
              return new Be(n);
            };
          Bt.include({
            addControl: function (n) {
              return (n.addTo(this), this);
            },
            removeControl: function (n) {
              return (n.remove(), this);
            },
            _initControlPos: function () {
              var n = (this._controlCorners = {}),
                a = "leaflet-",
                s = (this._controlContainer = Wt("div", a + "control-container", this._container));
              function d(p, x) {
                var M = a + p + " " + a + x;
                n[p + x] = Wt("div", M, s);
              }
              (d("top", "left"), d("top", "right"), d("bottom", "left"), d("bottom", "right"));
            },
            _clearControlPos: function () {
              for (var n in this._controlCorners) ee(this._controlCorners[n]);
              (ee(this._controlContainer), delete this._controlCorners, delete this._controlContainer);
            },
          });
          var $s = Be.extend({
              options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (n, a, s, d) {
                  return s < d ? -1 : d < s ? 1 : 0;
                },
              },
              initialize: function (n, a, s) {
                (H(this, s), (this._layerControlInputs = []), (this._layers = []), (this._lastZIndex = 0), (this._handlingClick = !1), (this._preventClick = !1));
                for (var d in n) this._addLayer(n[d], d);
                for (d in a) this._addLayer(a[d], d, !0);
              },
              onAdd: function (n) {
                (this._initLayout(), this._update(), (this._map = n), n.on("zoomend", this._checkDisabledLayers, this));
                for (var a = 0; a < this._layers.length; a++) this._layers[a].layer.on("add remove", this._onLayerChange, this);
                return this._container;
              },
              addTo: function (n) {
                return (Be.prototype.addTo.call(this, n), this._expandIfNotCollapsed());
              },
              onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var n = 0; n < this._layers.length; n++) this._layers[n].layer.off("add remove", this._onLayerChange, this);
              },
              addBaseLayer: function (n, a) {
                return (this._addLayer(n, a), this._map ? this._update() : this);
              },
              addOverlay: function (n, a) {
                return (this._addLayer(n, a, !0), this._map ? this._update() : this);
              },
              removeLayer: function (n) {
                n.off("add remove", this._onLayerChange, this);
                var a = this._getLayer(k(n));
                return (a && this._layers.splice(this._layers.indexOf(a), 1), this._map ? this._update() : this);
              },
              expand: function () {
                (zt(this._container, "leaflet-control-layers-expanded"), (this._section.style.height = null));
                var n = this._map.getSize().y - (this._container.offsetTop + 50);
                return (
                  n < this._section.clientHeight ? (zt(this._section, "leaflet-control-layers-scrollbar"), (this._section.style.height = n + "px")) : ne(this._section, "leaflet-control-layers-scrollbar"),
                  this._checkDisabledLayers(),
                  this
                );
              },
              collapse: function () {
                return (ne(this._container, "leaflet-control-layers-expanded"), this);
              },
              _initLayout: function () {
                var n = "leaflet-control-layers",
                  a = (this._container = Wt("div", n)),
                  s = this.options.collapsed;
                (a.setAttribute("aria-haspopup", !0), oa(a), ra(a));
                var d = (this._section = Wt("section", n + "-list"));
                s && (this._map.on("click", this.collapse, this), Lt(a, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
                var p = (this._layersLink = Wt("a", n + "-toggle", a));
                ((p.href = "#"),
                  (p.title = "Layers"),
                  p.setAttribute("role", "button"),
                  Lt(
                    p,
                    {
                      keydown: function (x) {
                        x.keyCode === 13 && this._expandSafely();
                      },
                      click: function (x) {
                        (fe(x), this._expandSafely());
                      },
                    },
                    this,
                  ),
                  s || this.expand(),
                  (this._baseLayersList = Wt("div", n + "-base", d)),
                  (this._separator = Wt("div", n + "-separator", d)),
                  (this._overlaysList = Wt("div", n + "-overlays", d)),
                  a.appendChild(d));
              },
              _getLayer: function (n) {
                for (var a = 0; a < this._layers.length; a++) if (this._layers[a] && k(this._layers[a].layer) === n) return this._layers[a];
              },
              _addLayer: function (n, a, s) {
                (this._map && n.on("add remove", this._onLayerChange, this),
                  this._layers.push({ layer: n, name: a, overlay: s }),
                  this.options.sortLayers &&
                    this._layers.sort(
                      _(function (d, p) {
                        return this.options.sortFunction(d.layer, p.layer, d.name, p.name);
                      }, this),
                    ),
                  this.options.autoZIndex && n.setZIndex && (this._lastZIndex++, n.setZIndex(this._lastZIndex)),
                  this._expandIfNotCollapsed());
              },
              _update: function () {
                if (!this._container) return this;
                (Ce(this._baseLayersList), Ce(this._overlaysList), (this._layerControlInputs = []));
                var n,
                  a,
                  s,
                  d,
                  p = 0;
                for (s = 0; s < this._layers.length; s++) ((d = this._layers[s]), this._addItem(d), (a = a || d.overlay), (n = n || !d.overlay), (p += d.overlay ? 0 : 1));
                return (this.options.hideSingleBase && ((n = n && p > 1), (this._baseLayersList.style.display = n ? "" : "none")), (this._separator.style.display = a && n ? "" : "none"), this);
              },
              _onLayerChange: function (n) {
                this._handlingClick || this._update();
                var a = this._getLayer(k(n.target)),
                  s = a.overlay ? (n.type === "add" ? "overlayadd" : "overlayremove") : n.type === "add" ? "baselayerchange" : null;
                s && this._map.fire(s, a);
              },
              _createRadioElement: function (n, a) {
                var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + n + '"' + (a ? ' checked="checked"' : "") + "/>",
                  d = document.createElement("div");
                return ((d.innerHTML = s), d.firstChild);
              },
              _addItem: function (n) {
                var a = document.createElement("label"),
                  s = this._map.hasLayer(n.layer),
                  d;
                (n.overlay ? ((d = document.createElement("input")), (d.type = "checkbox"), (d.className = "leaflet-control-layers-selector"), (d.defaultChecked = s)) : (d = this._createRadioElement("leaflet-base-layers_" + k(this), s)),
                  this._layerControlInputs.push(d),
                  (d.layerId = k(n.layer)),
                  Lt(d, "click", this._onInputClick, this));
                var p = document.createElement("span");
                p.innerHTML = " " + n.name;
                var x = document.createElement("span");
                (a.appendChild(x), x.appendChild(d), x.appendChild(p));
                var M = n.overlay ? this._overlaysList : this._baseLayersList;
                return (M.appendChild(a), this._checkDisabledLayers(), a);
              },
              _onInputClick: function () {
                if (!this._preventClick) {
                  var n = this._layerControlInputs,
                    a,
                    s,
                    d = [],
                    p = [];
                  this._handlingClick = !0;
                  for (var x = n.length - 1; x >= 0; x--) ((a = n[x]), (s = this._getLayer(a.layerId).layer), a.checked ? d.push(s) : a.checked || p.push(s));
                  for (x = 0; x < p.length; x++) this._map.hasLayer(p[x]) && this._map.removeLayer(p[x]);
                  for (x = 0; x < d.length; x++) this._map.hasLayer(d[x]) || this._map.addLayer(d[x]);
                  ((this._handlingClick = !1), this._refocusOnMap());
                }
              },
              _checkDisabledLayers: function () {
                for (var n = this._layerControlInputs, a, s, d = this._map.getZoom(), p = n.length - 1; p >= 0; p--)
                  ((a = n[p]), (s = this._getLayer(a.layerId).layer), (a.disabled = (s.options.minZoom !== void 0 && d < s.options.minZoom) || (s.options.maxZoom !== void 0 && d > s.options.maxZoom)));
              },
              _expandIfNotCollapsed: function () {
                return (this._map && !this.options.collapsed && this.expand(), this);
              },
              _expandSafely: function () {
                var n = this._section;
                ((this._preventClick = !0), Lt(n, "click", fe), this.expand());
                var a = this;
                setTimeout(function () {
                  (Vt(n, "click", fe), (a._preventClick = !1));
                });
              },
            }),
            Xu = function (n, a, s) {
              return new $s(n, a, s);
            },
            zo = Be.extend({
              options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" },
              onAdd: function (n) {
                var a = "leaflet-control-zoom",
                  s = Wt("div", a + " leaflet-bar"),
                  d = this.options;
                return (
                  (this._zoomInButton = this._createButton(d.zoomInText, d.zoomInTitle, a + "-in", s, this._zoomIn)),
                  (this._zoomOutButton = this._createButton(d.zoomOutText, d.zoomOutTitle, a + "-out", s, this._zoomOut)),
                  this._updateDisabled(),
                  n.on("zoomend zoomlevelschange", this._updateDisabled, this),
                  s
                );
              },
              onRemove: function (n) {
                n.off("zoomend zoomlevelschange", this._updateDisabled, this);
              },
              disable: function () {
                return ((this._disabled = !0), this._updateDisabled(), this);
              },
              enable: function () {
                return ((this._disabled = !1), this._updateDisabled(), this);
              },
              _zoomIn: function (n) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
              },
              _zoomOut: function (n) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
              },
              _createButton: function (n, a, s, d, p) {
                var x = Wt("a", s, d);
                return ((x.innerHTML = n), (x.href = "#"), (x.title = a), x.setAttribute("role", "button"), x.setAttribute("aria-label", a), oa(x), Lt(x, "click", En), Lt(x, "click", p, this), Lt(x, "click", this._refocusOnMap, this), x);
              },
              _updateDisabled: function () {
                var n = this._map,
                  a = "leaflet-disabled";
                (ne(this._zoomInButton, a),
                  ne(this._zoomOutButton, a),
                  this._zoomInButton.setAttribute("aria-disabled", "false"),
                  this._zoomOutButton.setAttribute("aria-disabled", "false"),
                  (this._disabled || n._zoom === n.getMinZoom()) && (zt(this._zoomOutButton, a), this._zoomOutButton.setAttribute("aria-disabled", "true")),
                  (this._disabled || n._zoom === n.getMaxZoom()) && (zt(this._zoomInButton, a), this._zoomInButton.setAttribute("aria-disabled", "true")));
              },
            });
          (Bt.mergeOptions({ zoomControl: !0 }),
            Bt.addInitHook(function () {
              this.options.zoomControl && ((this.zoomControl = new zo()), this.addControl(this.zoomControl));
            }));
          var jo = function (n) {
              return new zo(n);
            },
            tl = Be.extend({
              options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 },
              onAdd: function (n) {
                var a = "leaflet-control-scale",
                  s = Wt("div", a),
                  d = this.options;
                return (this._addScales(d, a + "-line", s), n.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), n.whenReady(this._update, this), s);
              },
              onRemove: function (n) {
                n.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
              },
              _addScales: function (n, a, s) {
                (n.metric && (this._mScale = Wt("div", a, s)), n.imperial && (this._iScale = Wt("div", a, s)));
              },
              _update: function () {
                var n = this._map,
                  a = n.getSize().y / 2,
                  s = n.distance(n.containerPointToLatLng([0, a]), n.containerPointToLatLng([this.options.maxWidth, a]));
                this._updateScales(s);
              },
              _updateScales: function (n) {
                (this.options.metric && n && this._updateMetric(n), this.options.imperial && n && this._updateImperial(n));
              },
              _updateMetric: function (n) {
                var a = this._getRoundNum(n),
                  s = a < 1e3 ? a + " m" : a / 1e3 + " km";
                this._updateScale(this._mScale, s, a / n);
              },
              _updateImperial: function (n) {
                var a = n * 3.2808399,
                  s,
                  d,
                  p;
                a > 5280 ? ((s = a / 5280), (d = this._getRoundNum(s)), this._updateScale(this._iScale, d + " mi", d / s)) : ((p = this._getRoundNum(a)), this._updateScale(this._iScale, p + " ft", p / a));
              },
              _updateScale: function (n, a, s) {
                ((n.style.width = Math.round(this.options.maxWidth * s) + "px"), (n.innerHTML = a));
              },
              _getRoundNum: function (n) {
                var a = Math.pow(10, (Math.floor(n) + "").length - 1),
                  s = n / a;
                return ((s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1), a * s);
              },
            }),
            Iu = function (n) {
              return new tl(n);
            },
            Ku =
              '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
            Do = Be.extend({
              options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (wt.inlineSvg ? Ku + " " : "") + "Leaflet</a>" },
              initialize: function (n) {
                (H(this, n), (this._attributions = {}));
              },
              onAdd: function (n) {
                ((n.attributionControl = this), (this._container = Wt("div", "leaflet-control-attribution")), oa(this._container));
                for (var a in n._layers) n._layers[a].getAttribution && this.addAttribution(n._layers[a].getAttribution());
                return (this._update(), n.on("layeradd", this._addAttribution, this), this._container);
              },
              onRemove: function (n) {
                n.off("layeradd", this._addAttribution, this);
              },
              _addAttribution: function (n) {
                n.layer.getAttribution &&
                  (this.addAttribution(n.layer.getAttribution()),
                  n.layer.once(
                    "remove",
                    function () {
                      this.removeAttribution(n.layer.getAttribution());
                    },
                    this,
                  ));
              },
              setPrefix: function (n) {
                return ((this.options.prefix = n), this._update(), this);
              },
              addAttribution: function (n) {
                return n ? (this._attributions[n] || (this._attributions[n] = 0), this._attributions[n]++, this._update(), this) : this;
              },
              removeAttribution: function (n) {
                return n ? (this._attributions[n] && (this._attributions[n]--, this._update()), this) : this;
              },
              _update: function () {
                if (this._map) {
                  var n = [];
                  for (var a in this._attributions) this._attributions[a] && n.push(a);
                  var s = [];
                  (this.options.prefix && s.push(this.options.prefix), n.length && s.push(n.join(", ")), (this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ')));
                }
              },
            });
          (Bt.mergeOptions({ attributionControl: !0 }),
            Bt.addInitHook(function () {
              this.options.attributionControl && new Do().addTo(this);
            }));
          var Qu = function (n) {
            return new Do(n);
          };
          ((Be.Layers = $s), (Be.Zoom = zo), (Be.Scale = tl), (Be.Attribution = Do), (sa.layers = Xu), (sa.zoom = jo), (sa.scale = Iu), (sa.attribution = Qu));
          var un = Tt.extend({
            initialize: function (n) {
              this._map = n;
            },
            enable: function () {
              return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
            },
            disable: function () {
              return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
            },
            enabled: function () {
              return !!this._enabled;
            },
          });
          un.addTo = function (n, a) {
            return (n.addHandler(a, this), this);
          };
          var Fu = { Events: z },
            el = wt.touch ? "touchstart mousedown" : "mousedown",
            Fn = et.extend({
              options: { clickTolerance: 3 },
              initialize: function (n, a, s, d) {
                (H(this, d), (this._element = n), (this._dragStartTarget = a || n), (this._preventOutline = s));
              },
              enable: function () {
                this._enabled || (Lt(this._dragStartTarget, el, this._onDown, this), (this._enabled = !0));
              },
              disable: function () {
                this._enabled && (Fn._dragging === this && this.finishDrag(!0), Vt(this._dragStartTarget, el, this._onDown, this), (this._enabled = !1), (this._moved = !1));
              },
              _onDown: function (n) {
                if (this._enabled && ((this._moved = !1), !ta(this._element, "leaflet-zoom-anim"))) {
                  if (n.touches && n.touches.length !== 1) {
                    Fn._dragging === this && this.finishDrag();
                    return;
                  }
                  if (!(Fn._dragging || n.shiftKey || (n.which !== 1 && n.button !== 1 && !n.touches)) && ((Fn._dragging = this), this._preventOutline && Fa(this._element), Qa(), Sn(), !this._moving)) {
                    this.fire("down");
                    var a = n.touches ? n.touches[0] : n,
                      s = _i(this._element);
                    ((this._startPoint = new Y(a.clientX, a.clientY)), (this._startPos = Kn(this._element)), (this._parentScale = Qn(s)));
                    var d = n.type === "mousedown";
                    (Lt(document, d ? "mousemove" : "touchmove", this._onMove, this), Lt(document, d ? "mouseup" : "touchend touchcancel", this._onUp, this));
                  }
                }
              },
              _onMove: function (n) {
                if (this._enabled) {
                  if (n.touches && n.touches.length > 1) {
                    this._moved = !0;
                    return;
                  }
                  var a = n.touches && n.touches.length === 1 ? n.touches[0] : n,
                    s = new Y(a.clientX, a.clientY)._subtract(this._startPoint);
                  (!s.x && !s.y) ||
                    Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance ||
                    ((s.x /= this._parentScale.x),
                    (s.y /= this._parentScale.y),
                    fe(n),
                    this._moved ||
                      (this.fire("dragstart"),
                      (this._moved = !0),
                      zt(document.body, "leaflet-dragging"),
                      (this._lastTarget = n.target || n.srcElement),
                      window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                      zt(this._lastTarget, "leaflet-drag-target")),
                    (this._newPos = this._startPos.add(s)),
                    (this._moving = !0),
                    (this._lastEvent = n),
                    this._updatePosition());
                }
              },
              _updatePosition: function () {
                var n = { originalEvent: this._lastEvent };
                (this.fire("predrag", n), se(this._element, this._newPos), this.fire("drag", n));
              },
              _onUp: function () {
                this._enabled && this.finishDrag();
              },
              finishDrag: function (n) {
                (ne(document.body, "leaflet-dragging"),
                  this._lastTarget && (ne(this._lastTarget, "leaflet-drag-target"), (this._lastTarget = null)),
                  Vt(document, "mousemove touchmove", this._onMove, this),
                  Vt(document, "mouseup touchend touchcancel", this._onUp, this),
                  Oo(),
                  Ka());
                var a = this._moved && this._moving;
                ((this._moving = !1), (Fn._dragging = !1), a && this.fire("dragend", { noInertia: n, distance: this._newPos.distanceTo(this._startPos) }));
              },
            });
          function nl(n, a, s) {
            var d,
              p = [1, 4, 2, 8],
              x,
              M,
              P,
              V,
              it,
              dt,
              vt,
              bt;
            for (x = 0, dt = n.length; x < dt; x++) n[x]._code = Si(n[x], a);
            for (P = 0; P < 4; P++) {
              for (vt = p[P], d = [], x = 0, dt = n.length, M = dt - 1; x < dt; M = x++)
                ((V = n[x]), (it = n[M]), V._code & vt ? it._code & vt || ((bt = Pr(it, V, vt, a, s)), (bt._code = Si(bt, a)), d.push(bt)) : (it._code & vt && ((bt = Pr(it, V, vt, a, s)), (bt._code = Si(bt, a)), d.push(bt)), d.push(V)));
              n = d;
            }
            return n;
          }
          function Nr(n, a) {
            var s, d, p, x, M, P, V, it, dt;
            if (!n || n.length === 0) throw new Error("latlngs not passed");
            Se(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), (n = n[0]));
            var vt = rt([0, 0]),
              bt = ct(n),
              Mt = bt.getNorthWest().distanceTo(bt.getSouthWest()) * bt.getNorthEast().distanceTo(bt.getNorthWest());
            Mt < 1700 && (vt = No(n));
            var ie = n.length,
              le = [];
            for (s = 0; s < ie; s++) {
              var ke = rt(n[s]);
              le.push(a.project(rt([ke.lat - vt.lat, ke.lng - vt.lng])));
            }
            for (P = V = it = 0, s = 0, d = ie - 1; s < ie; d = s++) ((p = le[s]), (x = le[d]), (M = p.y * x.x - x.y * p.x), (V += (p.x + x.x) * M), (it += (p.y + x.y) * M), (P += M * 3));
            P === 0 ? (dt = le[0]) : (dt = [V / P, it / P]);
            var $e = a.unproject(S(dt));
            return rt([$e.lat + vt.lat, $e.lng + vt.lng]);
          }
          function No(n) {
            for (var a = 0, s = 0, d = 0, p = 0; p < n.length; p++) {
              var x = rt(n[p]);
              ((a += x.lat), (s += x.lng), d++);
            }
            return rt([a / d, s / d]);
          }
          var Ju = { __proto__: null, clipPolygon: nl, polygonCenter: Nr, centroid: No };
          function il(n, a) {
            if (!a || !n.length) return n.slice();
            var s = a * a;
            return ((n = ec(n, s)), (n = tc(n, s)), n);
          }
          function Po(n, a, s) {
            return Math.sqrt(ki(n, a, s, !0));
          }
          function $u(n, a, s) {
            return ki(n, a, s);
          }
          function tc(n, a) {
            var s = n.length,
              d = typeof Uint8Array < "u" ? Uint8Array : Array,
              p = new d(s);
            ((p[0] = p[s - 1] = 1), Bo(n, p, a, 0, s - 1));
            var x,
              M = [];
            for (x = 0; x < s; x++) p[x] && M.push(n[x]);
            return M;
          }
          function Bo(n, a, s, d, p) {
            var x = 0,
              M,
              P,
              V;
            for (P = d + 1; P <= p - 1; P++) ((V = ki(n[P], n[d], n[p], !0)), V > x && ((M = P), (x = V)));
            x > s && ((a[M] = 1), Bo(n, a, s, d, M), Bo(n, a, s, M, p));
          }
          function ec(n, a) {
            for (var s = [n[0]], d = 1, p = 0, x = n.length; d < x; d++) nc(n[d], n[p]) > a && (s.push(n[d]), (p = d));
            return (p < x - 1 && s.push(n[x - 1]), s);
          }
          var al;
          function rl(n, a, s, d, p) {
            var x = d ? al : Si(n, s),
              M = Si(a, s),
              P,
              V,
              it;
            for (al = M; ; ) {
              if (!(x | M)) return [n, a];
              if (x & M) return !1;
              ((P = x || M), (V = Pr(n, a, P, s, p)), (it = Si(V, s)), P === x ? ((n = V), (x = it)) : ((a = V), (M = it)));
            }
          }
          function Pr(n, a, s, d, p) {
            var x = a.x - n.x,
              M = a.y - n.y,
              P = d.min,
              V = d.max,
              it,
              dt;
            return (
              s & 8
                ? ((it = n.x + (x * (V.y - n.y)) / M), (dt = V.y))
                : s & 4
                  ? ((it = n.x + (x * (P.y - n.y)) / M), (dt = P.y))
                  : s & 2
                    ? ((it = V.x), (dt = n.y + (M * (V.x - n.x)) / x))
                    : s & 1 && ((it = P.x), (dt = n.y + (M * (P.x - n.x)) / x)),
              new Y(it, dt, p)
            );
          }
          function Si(n, a) {
            var s = 0;
            return (n.x < a.min.x ? (s |= 1) : n.x > a.max.x && (s |= 2), n.y < a.min.y ? (s |= 4) : n.y > a.max.y && (s |= 8), s);
          }
          function nc(n, a) {
            var s = a.x - n.x,
              d = a.y - n.y;
            return s * s + d * d;
          }
          function ki(n, a, s, d) {
            var p = a.x,
              x = a.y,
              M = s.x - p,
              P = s.y - x,
              V = M * M + P * P,
              it;
            return (V > 0 && ((it = ((n.x - p) * M + (n.y - x) * P) / V), it > 1 ? ((p = s.x), (x = s.y)) : it > 0 && ((p += M * it), (x += P * it))), (M = n.x - p), (P = n.y - x), d ? M * M + P * P : new Y(p, x));
          }
          function Se(n) {
            return !K(n[0]) || (typeof n[0][0] != "object" && typeof n[0][0] < "u");
          }
          function ol(n) {
            return (console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Se(n));
          }
          function Ho(n, a) {
            var s, d, p, x, M, P, V, it;
            if (!n || n.length === 0) throw new Error("latlngs not passed");
            Se(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), (n = n[0]));
            var dt = rt([0, 0]),
              vt = ct(n),
              bt = vt.getNorthWest().distanceTo(vt.getSouthWest()) * vt.getNorthEast().distanceTo(vt.getNorthWest());
            bt < 1700 && (dt = No(n));
            var Mt = n.length,
              ie = [];
            for (s = 0; s < Mt; s++) {
              var le = rt(n[s]);
              ie.push(a.project(rt([le.lat - dt.lat, le.lng - dt.lng])));
            }
            for (s = 0, d = 0; s < Mt - 1; s++) d += ie[s].distanceTo(ie[s + 1]) / 2;
            if (d === 0) it = ie[0];
            else
              for (s = 0, x = 0; s < Mt - 1; s++)
                if (((M = ie[s]), (P = ie[s + 1]), (p = M.distanceTo(P)), (x += p), x > d)) {
                  ((V = (x - d) / p), (it = [P.x - V * (P.x - M.x), P.y - V * (P.y - M.y)]));
                  break;
                }
            var ke = a.unproject(S(it));
            return rt([ke.lat + dt.lat, ke.lng + dt.lng]);
          }
          var sl = {
              __proto__: null,
              simplify: il,
              pointToSegmentDistance: Po,
              closestPointOnSegment: $u,
              clipSegment: rl,
              _getEdgeIntersection: Pr,
              _getBitCode: Si,
              _sqClosestPointOnSegment: ki,
              isFlat: Se,
              _flat: ol,
              polylineCenter: Ho,
            },
            Br = {
              project: function (n) {
                return new Y(n.lng, n.lat);
              },
              unproject: function (n) {
                return new ut(n.y, n.x);
              },
              bounds: new I([-180, -90], [180, 90]),
            },
            Hr = {
              R: 6378137,
              R_MINOR: 6356752314245179e-9,
              bounds: new I([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
              project: function (n) {
                var a = Math.PI / 180,
                  s = this.R,
                  d = n.lat * a,
                  p = this.R_MINOR / s,
                  x = Math.sqrt(1 - p * p),
                  M = x * Math.sin(d),
                  P = Math.tan(Math.PI / 4 - d / 2) / Math.pow((1 - M) / (1 + M), x / 2);
                return ((d = -s * Math.log(Math.max(P, 1e-10))), new Y(n.lng * a * s, d));
              },
              unproject: function (n) {
                for (var a = 180 / Math.PI, s = this.R, d = this.R_MINOR / s, p = Math.sqrt(1 - d * d), x = Math.exp(-n.y / s), M = Math.PI / 2 - 2 * Math.atan(x), P = 0, V = 0.1, it; P < 15 && Math.abs(V) > 1e-7; P++)
                  ((it = p * Math.sin(M)), (it = Math.pow((1 - it) / (1 + it), p / 2)), (V = Math.PI / 2 - 2 * Math.atan(x * it) - M), (M += V));
                return new ut(M * a, (n.x * a) / s);
              },
            },
            ll = { __proto__: null, LonLat: Br, Mercator: Hr, SphericalMercator: on },
            la = g({}, Pt, {
              code: "EPSG:3395",
              projection: Hr,
              transformation: (function () {
                var n = 0.5 / (Math.PI * Hr.R);
                return je(n, 0.5, -n, 0.5);
              })(),
            }),
            ul = g({}, Pt, { code: "EPSG:4326", projection: Br, transformation: je(1 / 180, 1, -1 / 180, 0.5) }),
            ic = g({}, Xt, {
              projection: Br,
              transformation: je(1, 0, -1, 0),
              scale: function (n) {
                return Math.pow(2, n);
              },
              zoom: function (n) {
                return Math.log(n) / Math.LN2;
              },
              distance: function (n, a) {
                var s = a.lng - n.lng,
                  d = a.lat - n.lat;
                return Math.sqrt(s * s + d * d);
              },
              infinite: !0,
            });
          ((Xt.Earth = Pt), (Xt.EPSG3395 = la), (Xt.EPSG3857 = sn), (Xt.EPSG900913 = bn), (Xt.EPSG4326 = ul), (Xt.Simple = ic));
          var cn = et.extend({
            options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 },
            addTo: function (n) {
              return (n.addLayer(this), this);
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (n) {
              return (n && n.removeLayer(this), this);
            },
            getPane: function (n) {
              return this._map.getPane(n ? this.options[n] || n : this.options.pane);
            },
            addInteractiveTarget: function (n) {
              return ((this._map._targets[k(n)] = this), this);
            },
            removeInteractiveTarget: function (n) {
              return (delete this._map._targets[k(n)], this);
            },
            getAttribution: function () {
              return this.options.attribution;
            },
            _layerAdd: function (n) {
              var a = n.target;
              if (a.hasLayer(this)) {
                if (((this._map = a), (this._zoomAnimated = a._zoomAnimated), this.getEvents)) {
                  var s = this.getEvents();
                  (a.on(s, this),
                    this.once(
                      "remove",
                      function () {
                        a.off(s, this);
                      },
                      this,
                    ));
                }
                (this.onAdd(a), this.fire("add"), a.fire("layeradd", { layer: this }));
              }
            },
          });
          Bt.include({
            addLayer: function (n) {
              if (!n._layerAdd) throw new Error("The provided object is not a Layer.");
              var a = k(n);
              return this._layers[a] ? this : ((this._layers[a] = n), (n._mapToAdd = this), n.beforeAdd && n.beforeAdd(this), this.whenReady(n._layerAdd, n), this);
            },
            removeLayer: function (n) {
              var a = k(n);
              return this._layers[a] ? (this._loaded && n.onRemove(this), delete this._layers[a], this._loaded && (this.fire("layerremove", { layer: n }), n.fire("remove")), (n._map = n._mapToAdd = null), this) : this;
            },
            hasLayer: function (n) {
              return k(n) in this._layers;
            },
            eachLayer: function (n, a) {
              for (var s in this._layers) n.call(a, this._layers[s]);
              return this;
            },
            _addLayers: function (n) {
              n = n ? (K(n) ? n : [n]) : [];
              for (var a = 0, s = n.length; a < s; a++) this.addLayer(n[a]);
            },
            _addZoomLimit: function (n) {
              (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) && ((this._zoomBoundLayers[k(n)] = n), this._updateZoomLevels());
            },
            _removeZoomLimit: function (n) {
              var a = k(n);
              this._zoomBoundLayers[a] && (delete this._zoomBoundLayers[a], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
              var n = 1 / 0,
                a = -1 / 0,
                s = this._getZoomSpan();
              for (var d in this._zoomBoundLayers) {
                var p = this._zoomBoundLayers[d].options;
                ((n = p.minZoom === void 0 ? n : Math.min(n, p.minZoom)), (a = p.maxZoom === void 0 ? a : Math.max(a, p.maxZoom)));
              }
              ((this._layersMaxZoom = a === -1 / 0 ? void 0 : a),
                (this._layersMinZoom = n === 1 / 0 ? void 0 : n),
                s !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
                this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom));
            },
          });
          var Ti = cn.extend({
              initialize: function (n, a) {
                (H(this, a), (this._layers = {}));
                var s, d;
                if (n) for (s = 0, d = n.length; s < d; s++) this.addLayer(n[s]);
              },
              addLayer: function (n) {
                var a = this.getLayerId(n);
                return ((this._layers[a] = n), this._map && this._map.addLayer(n), this);
              },
              removeLayer: function (n) {
                var a = n in this._layers ? n : this.getLayerId(n);
                return (this._map && this._layers[a] && this._map.removeLayer(this._layers[a]), delete this._layers[a], this);
              },
              hasLayer: function (n) {
                var a = typeof n == "number" ? n : this.getLayerId(n);
                return a in this._layers;
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this);
              },
              invoke: function (n) {
                var a = Array.prototype.slice.call(arguments, 1),
                  s,
                  d;
                for (s in this._layers) ((d = this._layers[s]), d[n] && d[n].apply(d, a));
                return this;
              },
              onAdd: function (n) {
                this.eachLayer(n.addLayer, n);
              },
              onRemove: function (n) {
                this.eachLayer(n.removeLayer, n);
              },
              eachLayer: function (n, a) {
                for (var s in this._layers) n.call(a, this._layers[s]);
                return this;
              },
              getLayer: function (n) {
                return this._layers[n];
              },
              getLayers: function () {
                var n = [];
                return (this.eachLayer(n.push, n), n);
              },
              setZIndex: function (n) {
                return this.invoke("setZIndex", n);
              },
              getLayerId: function (n) {
                return k(n);
              },
            }),
            cl = function (n, a) {
              return new Ti(n, a);
            },
            We = Ti.extend({
              addLayer: function (n) {
                return this.hasLayer(n) ? this : (n.addEventParent(this), Ti.prototype.addLayer.call(this, n), this.fire("layeradd", { layer: n }));
              },
              removeLayer: function (n) {
                return this.hasLayer(n) ? (n in this._layers && (n = this._layers[n]), n.removeEventParent(this), Ti.prototype.removeLayer.call(this, n), this.fire("layerremove", { layer: n })) : this;
              },
              setStyle: function (n) {
                return this.invoke("setStyle", n);
              },
              bringToFront: function () {
                return this.invoke("bringToFront");
              },
              bringToBack: function () {
                return this.invoke("bringToBack");
              },
              getBounds: function () {
                var n = new st();
                for (var a in this._layers) {
                  var s = this._layers[a];
                  n.extend(s.getBounds ? s.getBounds() : s.getLatLng());
                }
                return n;
              },
            }),
            er = function (n, a) {
              return new We(n, a);
            },
            ua = Tt.extend({
              options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
              initialize: function (n) {
                H(this, n);
              },
              createIcon: function (n) {
                return this._createIcon("icon", n);
              },
              createShadow: function (n) {
                return this._createIcon("shadow", n);
              },
              _createIcon: function (n, a) {
                var s = this._getIconUrl(n);
                if (!s) {
                  if (n === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                  return null;
                }
                var d = this._createImg(s, a && a.tagName === "IMG" ? a : null);
                return (this._setIconStyles(d, n), (this.options.crossOrigin || this.options.crossOrigin === "") && (d.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), d);
              },
              _setIconStyles: function (n, a) {
                var s = this.options,
                  d = s[a + "Size"];
                typeof d == "number" && (d = [d, d]);
                var p = S(d),
                  x = S((a === "shadow" && s.shadowAnchor) || s.iconAnchor || (p && p.divideBy(2, !0)));
                ((n.className = "leaflet-marker-" + a + " " + (s.className || "")), x && ((n.style.marginLeft = -x.x + "px"), (n.style.marginTop = -x.y + "px")), p && ((n.style.width = p.x + "px"), (n.style.height = p.y + "px")));
              },
              _createImg: function (n, a) {
                return ((a = a || document.createElement("img")), (a.src = n), a);
              },
              _getIconUrl: function (n) {
                return (wt.retina && this.options[n + "RetinaUrl"]) || this.options[n + "Url"];
              },
            });
          function Zr(n) {
            return new ua(n);
          }
          var ca = ua.extend({
              options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] },
              _getIconUrl: function (n) {
                return (typeof ca.imagePath != "string" && (ca.imagePath = this._detectIconPath()), (this.options.imagePath || ca.imagePath) + ua.prototype._getIconUrl.call(this, n));
              },
              _stripUrl: function (n) {
                var a = function (s, d, p) {
                  var x = d.exec(s);
                  return x && x[p];
                };
                return ((n = a(n, /^url\((['"])?(.+)\1\)$/, 2)), n && a(n, /^(.*)marker-icon\.png$/, 1));
              },
              _detectIconPath: function () {
                var n = Wt("div", "leaflet-default-icon-path", document.body),
                  a = vi(n, "background-image") || vi(n, "backgroundImage");
                if ((document.body.removeChild(n), (a = this._stripUrl(a)), a)) return a;
                var s = document.querySelector('link[href$="leaflet.css"]');
                return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
              },
            }),
            Zo = un.extend({
              initialize: function (n) {
                this._marker = n;
              },
              addHooks: function () {
                var n = this._marker._icon;
                (this._draggable || (this._draggable = new Fn(n, n, !0)),
                  this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(),
                  zt(n, "leaflet-marker-draggable"));
              },
              removeHooks: function () {
                (this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && ne(this._marker._icon, "leaflet-marker-draggable"));
              },
              moved: function () {
                return this._draggable && this._draggable._moved;
              },
              _adjustPan: function (n) {
                var a = this._marker,
                  s = a._map,
                  d = this._marker.options.autoPanSpeed,
                  p = this._marker.options.autoPanPadding,
                  x = Kn(a._icon),
                  M = s.getPixelBounds(),
                  P = s.getPixelOrigin(),
                  V = lt(M.min._subtract(P).add(p), M.max._subtract(P).subtract(p));
                if (!V.contains(x)) {
                  var it = S(
                    (Math.max(V.max.x, x.x) - V.max.x) / (M.max.x - V.max.x) - (Math.min(V.min.x, x.x) - V.min.x) / (M.min.x - V.min.x),
                    (Math.max(V.max.y, x.y) - V.max.y) / (M.max.y - V.max.y) - (Math.min(V.min.y, x.y) - V.min.y) / (M.min.y - V.min.y),
                  ).multiplyBy(d);
                  (s.panBy(it, { animate: !1 }), this._draggable._newPos._add(it), this._draggable._startPos._add(it), se(a._icon, this._draggable._newPos), this._onDrag(n), (this._panRequest = _t(this._adjustPan.bind(this, n))));
                }
              },
              _onDragStart: function () {
                ((this._oldLatLng = this._marker.getLatLng()), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart"));
              },
              _onPreDrag: function (n) {
                this._marker.options.autoPan && (ht(this._panRequest), (this._panRequest = _t(this._adjustPan.bind(this, n))));
              },
              _onDrag: function (n) {
                var a = this._marker,
                  s = a._shadow,
                  d = Kn(a._icon),
                  p = a._map.layerPointToLatLng(d);
                (s && se(s, d), (a._latlng = p), (n.latlng = p), (n.oldLatLng = this._oldLatLng), a.fire("move", n).fire("drag", n));
              },
              _onDragEnd: function (n) {
                (ht(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", n));
              },
            }),
            fa = cn.extend({
              options: {
                icon: new ca(),
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "Marker",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
              },
              initialize: function (n, a) {
                (H(this, a), (this._latlng = rt(n)));
              },
              onAdd: function (n) {
                ((this._zoomAnimated = this._zoomAnimated && n.options.markerZoomAnimation), this._zoomAnimated && n.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update());
              },
              onRemove: function (n) {
                (this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
                  delete this.dragging,
                  this._zoomAnimated && n.off("zoomanim", this._animateZoom, this),
                  this._removeIcon(),
                  this._removeShadow());
              },
              getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
              },
              getLatLng: function () {
                return this._latlng;
              },
              setLatLng: function (n) {
                var a = this._latlng;
                return ((this._latlng = rt(n)), this.update(), this.fire("move", { oldLatLng: a, latlng: this._latlng }));
              },
              setZIndexOffset: function (n) {
                return ((this.options.zIndexOffset = n), this.update());
              },
              getIcon: function () {
                return this.options.icon;
              },
              setIcon: function (n) {
                return ((this.options.icon = n), this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this);
              },
              getElement: function () {
                return this._icon;
              },
              update: function () {
                if (this._icon && this._map) {
                  var n = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(n);
                }
                return this;
              },
              _initIcon: function () {
                var n = this.options,
                  a = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                  s = n.icon.createIcon(this._icon),
                  d = !1;
                (s !== this._icon && (this._icon && this._removeIcon(), (d = !0), n.title && (s.title = n.title), s.tagName === "IMG" && (s.alt = n.alt || "")),
                  zt(s, a),
                  n.keyboard && ((s.tabIndex = "0"), s.setAttribute("role", "button")),
                  (this._icon = s),
                  n.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Lt(s, "focus", this._panOnFocus, this));
                var p = n.icon.createShadow(this._shadow),
                  x = !1;
                (p !== this._shadow && (this._removeShadow(), (x = !0)),
                  p && (zt(p, a), (p.alt = "")),
                  (this._shadow = p),
                  n.opacity < 1 && this._updateOpacity(),
                  d && this.getPane().appendChild(this._icon),
                  this._initInteraction(),
                  p && x && this.getPane(n.shadowPane).appendChild(this._shadow));
              },
              _removeIcon: function () {
                (this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Vt(this._icon, "focus", this._panOnFocus, this),
                  ee(this._icon),
                  this.removeInteractiveTarget(this._icon),
                  (this._icon = null));
              },
              _removeShadow: function () {
                (this._shadow && ee(this._shadow), (this._shadow = null));
              },
              _setPos: function (n) {
                (this._icon && se(this._icon, n), this._shadow && se(this._shadow, n), (this._zIndex = n.y + this.options.zIndexOffset), this._resetZIndex());
              },
              _updateZIndex: function (n) {
                this._icon && (this._icon.style.zIndex = this._zIndex + n);
              },
              _animateZoom: function (n) {
                var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center).round();
                this._setPos(a);
              },
              _initInteraction: function () {
                if (this.options.interactive && (zt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Zo)) {
                  var n = this.options.draggable;
                  (this.dragging && ((n = this.dragging.enabled()), this.dragging.disable()), (this.dragging = new Zo(this)), n && this.dragging.enable());
                }
              },
              setOpacity: function (n) {
                return ((this.options.opacity = n), this._map && this._updateOpacity(), this);
              },
              _updateOpacity: function () {
                var n = this.options.opacity;
                (this._icon && Pe(this._icon, n), this._shadow && Pe(this._shadow, n));
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
              },
              _resetZIndex: function () {
                this._updateZIndex(0);
              },
              _panOnFocus: function () {
                var n = this._map;
                if (n) {
                  var a = this.options.icon.options,
                    s = a.iconSize ? S(a.iconSize) : S(0, 0),
                    d = a.iconAnchor ? S(a.iconAnchor) : S(0, 0);
                  n.panInside(this._latlng, { paddingTopLeft: d, paddingBottomRight: s.subtract(d) });
                }
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
              },
            });
          function Uo(n, a) {
            return new fa(n, a);
          }
          var Pn = cn.extend({
              options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0,
              },
              beforeAdd: function (n) {
                this._renderer = n.getRenderer(this);
              },
              onAdd: function () {
                (this._renderer._initPath(this), this._reset(), this._renderer._addPath(this));
              },
              onRemove: function () {
                this._renderer._removePath(this);
              },
              redraw: function () {
                return (this._map && this._renderer._updatePath(this), this);
              },
              setStyle: function (n) {
                return (H(this, n), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && n && Object.prototype.hasOwnProperty.call(n, "weight") && this._updateBounds()), this);
              },
              bringToFront: function () {
                return (this._renderer && this._renderer._bringToFront(this), this);
              },
              bringToBack: function () {
                return (this._renderer && this._renderer._bringToBack(this), this);
              },
              getElement: function () {
                return this._path;
              },
              _reset: function () {
                (this._project(), this._update());
              },
              _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
              },
            }),
            nr = Pn.extend({
              options: { fill: !0, radius: 10 },
              initialize: function (n, a) {
                (H(this, a), (this._latlng = rt(n)), (this._radius = this.options.radius));
              },
              setLatLng: function (n) {
                var a = this._latlng;
                return ((this._latlng = rt(n)), this.redraw(), this.fire("move", { oldLatLng: a, latlng: this._latlng }));
              },
              getLatLng: function () {
                return this._latlng;
              },
              setRadius: function (n) {
                return ((this.options.radius = this._radius = n), this.redraw());
              },
              getRadius: function () {
                return this._radius;
              },
              setStyle: function (n) {
                var a = (n && n.radius) || this._radius;
                return (Pn.prototype.setStyle.call(this, n), this.setRadius(a), this);
              },
              _project: function () {
                ((this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds());
              },
              _updateBounds: function () {
                var n = this._radius,
                  a = this._radiusY || n,
                  s = this._clickTolerance(),
                  d = [n + s, a + s];
                this._pxBounds = new I(this._point.subtract(d), this._point.add(d));
              },
              _update: function () {
                this._map && this._updatePath();
              },
              _updatePath: function () {
                this._renderer._updateCircle(this);
              },
              _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
              },
              _containsPoint: function (n) {
                return n.distanceTo(this._point) <= this._radius + this._clickTolerance();
              },
            });
          function fl(n, a) {
            return new nr(n, a);
          }
          var Go = nr.extend({
            initialize: function (n, a, s) {
              if ((typeof a == "number" && (a = g({}, s, { radius: a })), H(this, a), (this._latlng = rt(n)), isNaN(this.options.radius))) throw new Error("Circle radius cannot be NaN");
              this._mRadius = this.options.radius;
            },
            setRadius: function (n) {
              return ((this._mRadius = n), this.redraw());
            },
            getRadius: function () {
              return this._mRadius;
            },
            getBounds: function () {
              var n = [this._radius, this._radiusY || this._radius];
              return new st(this._map.layerPointToLatLng(this._point.subtract(n)), this._map.layerPointToLatLng(this._point.add(n)));
            },
            setStyle: Pn.prototype.setStyle,
            _project: function () {
              var n = this._latlng.lng,
                a = this._latlng.lat,
                s = this._map,
                d = s.options.crs;
              if (d.distance === Pt.distance) {
                var p = Math.PI / 180,
                  x = this._mRadius / Pt.R / p,
                  M = s.project([a + x, n]),
                  P = s.project([a - x, n]),
                  V = M.add(P).divideBy(2),
                  it = s.unproject(V).lat,
                  dt = Math.acos((Math.cos(x * p) - Math.sin(a * p) * Math.sin(it * p)) / (Math.cos(a * p) * Math.cos(it * p))) / p;
                ((isNaN(dt) || dt === 0) && (dt = x / Math.cos((Math.PI / 180) * a)), (this._point = V.subtract(s.getPixelOrigin())), (this._radius = isNaN(dt) ? 0 : V.x - s.project([it, n - dt]).x), (this._radiusY = V.y - M.y));
              } else {
                var vt = d.unproject(d.project(this._latlng).subtract([this._mRadius, 0]));
                ((this._point = s.latLngToLayerPoint(this._latlng)), (this._radius = this._point.x - s.latLngToLayerPoint(vt).x));
              }
              this._updateBounds();
            },
          });
          function ac(n, a, s) {
            return new Go(n, a, s);
          }
          var Bn = Pn.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (n, a) {
              (H(this, a), this._setLatLngs(n));
            },
            getLatLngs: function () {
              return this._latlngs;
            },
            setLatLngs: function (n) {
              return (this._setLatLngs(n), this.redraw());
            },
            isEmpty: function () {
              return !this._latlngs.length;
            },
            closestLayerPoint: function (n) {
              for (var a = 1 / 0, s = null, d = ki, p, x, M = 0, P = this._parts.length; M < P; M++)
                for (var V = this._parts[M], it = 1, dt = V.length; it < dt; it++) {
                  ((p = V[it - 1]), (x = V[it]));
                  var vt = d(n, p, x, !0);
                  vt < a && ((a = vt), (s = d(n, p, x)));
                }
              return (s && (s.distance = Math.sqrt(a)), s);
            },
            getCenter: function () {
              if (!this._map) throw new Error("Must add layer to map before using getCenter()");
              return Ho(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
              return this._bounds;
            },
            addLatLng: function (n, a) {
              return ((a = a || this._defaultShape()), (n = rt(n)), a.push(n), this._bounds.extend(n), this.redraw());
            },
            _setLatLngs: function (n) {
              ((this._bounds = new st()), (this._latlngs = this._convertLatLngs(n)));
            },
            _defaultShape: function () {
              return Se(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (n) {
              for (var a = [], s = Se(n), d = 0, p = n.length; d < p; d++) s ? ((a[d] = rt(n[d])), this._bounds.extend(a[d])) : (a[d] = this._convertLatLngs(n[d]));
              return a;
            },
            _project: function () {
              var n = new I();
              ((this._rings = []), this._projectLatlngs(this._latlngs, this._rings, n), this._bounds.isValid() && n.isValid() && ((this._rawPxBounds = n), this._updateBounds()));
            },
            _updateBounds: function () {
              var n = this._clickTolerance(),
                a = new Y(n, n);
              this._rawPxBounds && (this._pxBounds = new I([this._rawPxBounds.min.subtract(a), this._rawPxBounds.max.add(a)]));
            },
            _projectLatlngs: function (n, a, s) {
              var d = n[0] instanceof ut,
                p = n.length,
                x,
                M;
              if (d) {
                for (M = [], x = 0; x < p; x++) ((M[x] = this._map.latLngToLayerPoint(n[x])), s.extend(M[x]));
                a.push(M);
              } else for (x = 0; x < p; x++) this._projectLatlngs(n[x], a, s);
            },
            _clipPoints: function () {
              var n = this._renderer._bounds;
              if (((this._parts = []), !(!this._pxBounds || !this._pxBounds.intersects(n)))) {
                if (this.options.noClip) {
                  this._parts = this._rings;
                  return;
                }
                var a = this._parts,
                  s,
                  d,
                  p,
                  x,
                  M,
                  P,
                  V;
                for (s = 0, p = 0, x = this._rings.length; s < x; s++)
                  for (V = this._rings[s], d = 0, M = V.length; d < M - 1; d++) ((P = rl(V[d], V[d + 1], n, d, !0)), P && ((a[p] = a[p] || []), a[p].push(P[0]), (P[1] !== V[d + 1] || d === M - 2) && (a[p].push(P[1]), p++)));
              }
            },
            _simplifyPoints: function () {
              for (var n = this._parts, a = this.options.smoothFactor, s = 0, d = n.length; s < d; s++) n[s] = il(n[s], a);
            },
            _update: function () {
              this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
            },
            _updatePath: function () {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function (n, a) {
              var s,
                d,
                p,
                x,
                M,
                P,
                V = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
              for (s = 0, x = this._parts.length; s < x; s++) for (P = this._parts[s], d = 0, M = P.length, p = M - 1; d < M; p = d++) if (!(!a && d === 0) && Po(n, P[p], P[d]) <= V) return !0;
              return !1;
            },
          });
          function rc(n, a) {
            return new Bn(n, a);
          }
          Bn._flat = ol;
          var da = Bn.extend({
            options: { fill: !0 },
            isEmpty: function () {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
              if (!this._map) throw new Error("Must add layer to map before using getCenter()");
              return Nr(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (n) {
              var a = Bn.prototype._convertLatLngs.call(this, n),
                s = a.length;
              return (s >= 2 && a[0] instanceof ut && a[0].equals(a[s - 1]) && a.pop(), a);
            },
            _setLatLngs: function (n) {
              (Bn.prototype._setLatLngs.call(this, n), Se(this._latlngs) && (this._latlngs = [this._latlngs]));
            },
            _defaultShape: function () {
              return Se(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
            },
            _clipPoints: function () {
              var n = this._renderer._bounds,
                a = this.options.weight,
                s = new Y(a, a);
              if (((n = new I(n.min.subtract(s), n.max.add(s))), (this._parts = []), !(!this._pxBounds || !this._pxBounds.intersects(n)))) {
                if (this.options.noClip) {
                  this._parts = this._rings;
                  return;
                }
                for (var d = 0, p = this._rings.length, x; d < p; d++) ((x = nl(this._rings[d], n, !0)), x.length && this._parts.push(x));
              }
            },
            _updatePath: function () {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (n) {
              var a = !1,
                s,
                d,
                p,
                x,
                M,
                P,
                V,
                it;
              if (!this._pxBounds || !this._pxBounds.contains(n)) return !1;
              for (x = 0, V = this._parts.length; x < V; x++)
                for (s = this._parts[x], M = 0, it = s.length, P = it - 1; M < it; P = M++) ((d = s[M]), (p = s[P]), d.y > n.y != p.y > n.y && n.x < ((p.x - d.x) * (n.y - d.y)) / (p.y - d.y) + d.x && (a = !a));
              return a || Bn.prototype._containsPoint.call(this, n, !0);
            },
          });
          function qe(n, a) {
            return new da(n, a);
          }
          var Ve = We.extend({
            initialize: function (n, a) {
              (H(this, a), (this._layers = {}), n && this.addData(n));
            },
            addData: function (n) {
              var a = K(n) ? n : n.features,
                s,
                d,
                p;
              if (a) {
                for (s = 0, d = a.length; s < d; s++) ((p = a[s]), (p.geometries || p.geometry || p.features || p.coordinates) && this.addData(p));
                return this;
              }
              var x = this.options;
              if (x.filter && !x.filter(n)) return this;
              var M = ir(n, x);
              return M ? ((M.feature = ha(n)), (M.defaultOptions = M.options), this.resetStyle(M), x.onEachFeature && x.onEachFeature(n, M), this.addLayer(M)) : this;
            },
            resetStyle: function (n) {
              return n === void 0 ? this.eachLayer(this.resetStyle, this) : ((n.options = g({}, n.defaultOptions)), this._setLayerStyle(n, this.options.style), this);
            },
            setStyle: function (n) {
              return this.eachLayer(function (a) {
                this._setLayerStyle(a, n);
              }, this);
            },
            _setLayerStyle: function (n, a) {
              n.setStyle && (typeof a == "function" && (a = a(n.feature)), n.setStyle(a));
            },
          });
          function ir(n, a) {
            var s = n.type === "Feature" ? n.geometry : n,
              d = s ? s.coordinates : null,
              p = [],
              x = a && a.pointToLayer,
              M = (a && a.coordsToLatLng) || Ur,
              P,
              V,
              it,
              dt;
            if (!d && !s) return null;
            switch (s.type) {
              case "Point":
                return ((P = M(d)), Wo(x, n, P, a));
              case "MultiPoint":
                for (it = 0, dt = d.length; it < dt; it++) ((P = M(d[it])), p.push(Wo(x, n, P, a)));
                return new We(p);
              case "LineString":
              case "MultiLineString":
                return ((V = ar(d, s.type === "LineString" ? 0 : 1, M)), new Bn(V, a));
              case "Polygon":
              case "MultiPolygon":
                return ((V = ar(d, s.type === "Polygon" ? 1 : 2, M)), new da(V, a));
              case "GeometryCollection":
                for (it = 0, dt = s.geometries.length; it < dt; it++) {
                  var vt = ir({ geometry: s.geometries[it], type: "Feature", properties: n.properties }, a);
                  vt && p.push(vt);
                }
                return new We(p);
              case "FeatureCollection":
                for (it = 0, dt = s.features.length; it < dt; it++) {
                  var bt = ir(s.features[it], a);
                  bt && p.push(bt);
                }
                return new We(p);
              default:
                throw new Error("Invalid GeoJSON object.");
            }
          }
          function Wo(n, a, s, d) {
            return n ? n(a, s) : new fa(s, d && d.markersInheritOptions && d);
          }
          function Ur(n) {
            return new ut(n[1], n[0], n[2]);
          }
          function ar(n, a, s) {
            for (var d = [], p = 0, x = n.length, M; p < x; p++) ((M = a ? ar(n[p], a - 1, s) : (s || Ur)(n[p])), d.push(M));
            return d;
          }
          function rr(n, a) {
            return ((n = rt(n)), n.alt !== void 0 ? [C(n.lng, a), C(n.lat, a), C(n.alt, a)] : [C(n.lng, a), C(n.lat, a)]);
          }
          function Gr(n, a, s, d) {
            for (var p = [], x = 0, M = n.length; x < M; x++) p.push(a ? Gr(n[x], Se(n[x]) ? 0 : a - 1, s, d) : rr(n[x], d));
            return (!a && s && p.length > 0 && p.push(p[0].slice()), p);
          }
          function fn(n, a) {
            return n.feature ? g({}, n.feature, { geometry: a }) : ha(a);
          }
          function ha(n) {
            return n.type === "Feature" || n.type === "FeatureCollection" ? n : { type: "Feature", properties: {}, geometry: n };
          }
          var Ei = {
            toGeoJSON: function (n) {
              return fn(this, { type: "Point", coordinates: rr(this.getLatLng(), n) });
            },
          };
          (fa.include(Ei),
            Go.include(Ei),
            nr.include(Ei),
            Bn.include({
              toGeoJSON: function (n) {
                var a = !Se(this._latlngs),
                  s = Gr(this._latlngs, a ? 1 : 0, !1, n);
                return fn(this, { type: (a ? "Multi" : "") + "LineString", coordinates: s });
              },
            }),
            da.include({
              toGeoJSON: function (n) {
                var a = !Se(this._latlngs),
                  s = a && !Se(this._latlngs[0]),
                  d = Gr(this._latlngs, s ? 2 : a ? 1 : 0, !0, n);
                return (a || (d = [d]), fn(this, { type: (s ? "Multi" : "") + "Polygon", coordinates: d }));
              },
            }),
            Ti.include({
              toMultiPoint: function (n) {
                var a = [];
                return (
                  this.eachLayer(function (s) {
                    a.push(s.toGeoJSON(n).geometry.coordinates);
                  }),
                  fn(this, { type: "MultiPoint", coordinates: a })
                );
              },
              toGeoJSON: function (n) {
                var a = this.feature && this.feature.geometry && this.feature.geometry.type;
                if (a === "MultiPoint") return this.toMultiPoint(n);
                var s = a === "GeometryCollection",
                  d = [];
                return (
                  this.eachLayer(function (p) {
                    if (p.toGeoJSON) {
                      var x = p.toGeoJSON(n);
                      if (s) d.push(x.geometry);
                      else {
                        var M = ha(x);
                        M.type === "FeatureCollection" ? d.push.apply(d, M.features) : d.push(M);
                      }
                    }
                  }),
                  s ? fn(this, { geometries: d, type: "GeometryCollection" }) : { type: "FeatureCollection", features: d }
                );
              },
            }));
          function Wr(n, a) {
            return new Ve(n, a);
          }
          var dl = Wr,
            An = cn.extend({
              options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" },
              initialize: function (n, a, s) {
                ((this._url = n), (this._bounds = ct(a)), H(this, s));
              },
              onAdd: function () {
                (this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                  this.options.interactive && (zt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
                  this.getPane().appendChild(this._image),
                  this._reset());
              },
              onRemove: function () {
                (ee(this._image), this.options.interactive && this.removeInteractiveTarget(this._image));
              },
              setOpacity: function (n) {
                return ((this.options.opacity = n), this._image && this._updateOpacity(), this);
              },
              setStyle: function (n) {
                return (n.opacity && this.setOpacity(n.opacity), this);
              },
              bringToFront: function () {
                return (this._map && yi(this._image), this);
              },
              bringToBack: function () {
                return (this._map && $i(this._image), this);
              },
              setUrl: function (n) {
                return ((this._url = n), this._image && (this._image.src = n), this);
              },
              setBounds: function (n) {
                return ((this._bounds = ct(n)), this._map && this._reset(), this);
              },
              getEvents: function () {
                var n = { zoom: this._reset, viewreset: this._reset };
                return (this._zoomAnimated && (n.zoomanim = this._animateZoom), n);
              },
              setZIndex: function (n) {
                return ((this.options.zIndex = n), this._updateZIndex(), this);
              },
              getBounds: function () {
                return this._bounds;
              },
              getElement: function () {
                return this._image;
              },
              _initImage: function () {
                var n = this._url.tagName === "IMG",
                  a = (this._image = n ? this._url : Wt("img"));
                if (
                  (zt(a, "leaflet-image-layer"),
                  this._zoomAnimated && zt(a, "leaflet-zoom-animated"),
                  this.options.className && zt(a, this.options.className),
                  (a.onselectstart = A),
                  (a.onmousemove = A),
                  (a.onload = _(this.fire, this, "load")),
                  (a.onerror = _(this._overlayOnError, this, "error")),
                  (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
                  this.options.zIndex && this._updateZIndex(),
                  n)
                ) {
                  this._url = a.src;
                  return;
                }
                ((a.src = this._url), (a.alt = this.options.alt));
              },
              _animateZoom: function (n) {
                var a = this._map.getZoomScale(n.zoom),
                  s = this._map._latLngBoundsToNewLayerBounds(this._bounds, n.zoom, n.center).min;
                Je(this._image, s, a);
              },
              _reset: function () {
                var n = this._image,
                  a = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                  s = a.getSize();
                (se(n, a.min), (n.style.width = s.x + "px"), (n.style.height = s.y + "px"));
              },
              _updateOpacity: function () {
                Pe(this._image, this.options.opacity);
              },
              _updateZIndex: function () {
                this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
              },
              _overlayOnError: function () {
                this.fire("error");
                var n = this.options.errorOverlayUrl;
                n && this._url !== n && ((this._url = n), (this._image.src = n));
              },
              getCenter: function () {
                return this._bounds.getCenter();
              },
            }),
            ma = function (n, a, s) {
              return new An(n, a, s);
            },
            qr = An.extend({
              options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
              _initImage: function () {
                var n = this._url.tagName === "VIDEO",
                  a = (this._image = n ? this._url : Wt("video"));
                if (
                  (zt(a, "leaflet-image-layer"),
                  this._zoomAnimated && zt(a, "leaflet-zoom-animated"),
                  this.options.className && zt(a, this.options.className),
                  (a.onselectstart = A),
                  (a.onmousemove = A),
                  (a.onloadeddata = _(this.fire, this, "load")),
                  n)
                ) {
                  for (var s = a.getElementsByTagName("source"), d = [], p = 0; p < s.length; p++) d.push(s[p].src);
                  this._url = s.length > 0 ? d : [a.src];
                  return;
                }
                (K(this._url) || (this._url = [this._url]),
                  !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(a.style, "objectFit") && (a.style.objectFit = "fill"),
                  (a.autoplay = !!this.options.autoplay),
                  (a.loop = !!this.options.loop),
                  (a.muted = !!this.options.muted),
                  (a.playsInline = !!this.options.playsInline));
                for (var x = 0; x < this._url.length; x++) {
                  var M = Wt("source");
                  ((M.src = this._url[x]), a.appendChild(M));
                }
              },
            });
          function hl(n, a, s) {
            return new qr(n, a, s);
          }
          var Jn = An.extend({
            _initImage: function () {
              var n = (this._image = this._url);
              (zt(n, "leaflet-image-layer"), this._zoomAnimated && zt(n, "leaflet-zoom-animated"), this.options.className && zt(n, this.options.className), (n.onselectstart = A), (n.onmousemove = A));
            },
          });
          function ml(n, a, s) {
            return new Jn(n, a, s);
          }
          var dn = cn.extend({
            options: { interactive: !1, offset: [0, 0], className: "", pane: void 0, content: "" },
            initialize: function (n, a) {
              (n && (n instanceof ut || K(n)) ? ((this._latlng = rt(n)), H(this, a)) : (H(this, n), (this._source = a)), this.options.content && (this._content = this.options.content));
            },
            openOn: function (n) {
              return ((n = arguments.length ? n : this._source._map), n.hasLayer(this) || n.addLayer(this), this);
            },
            close: function () {
              return (this._map && this._map.removeLayer(this), this);
            },
            toggle: function (n) {
              return (this._map ? this.close() : (arguments.length ? (this._source = n) : (n = this._source), this._prepareOpen(), this.openOn(n._map)), this);
            },
            onAdd: function (n) {
              ((this._zoomAnimated = n._zoomAnimated),
                this._container || this._initLayout(),
                n._fadeAnimated && Pe(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                n._fadeAnimated && Pe(this._container, 1),
                this.bringToFront(),
                this.options.interactive && (zt(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container)));
            },
            onRemove: function (n) {
              (n._fadeAnimated ? (Pe(this._container, 0), (this._removeTimeout = setTimeout(_(ee, void 0, this._container), 200))) : ee(this._container),
                this.options.interactive && (ne(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container)));
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (n) {
              return ((this._latlng = rt(n)), this._map && (this._updatePosition(), this._adjustPan()), this);
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (n) {
              return ((this._content = n), this.update(), this);
            },
            getElement: function () {
              return this._container;
            },
            update: function () {
              this._map && ((this._container.style.visibility = "hidden"), this._updateContent(), this._updateLayout(), this._updatePosition(), (this._container.style.visibility = ""), this._adjustPan());
            },
            getEvents: function () {
              var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
              return (this._zoomAnimated && (n.zoomanim = this._animateZoom), n);
            },
            isOpen: function () {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
              return (this._map && yi(this._container), this);
            },
            bringToBack: function () {
              return (this._map && $i(this._container), this);
            },
            _prepareOpen: function (n) {
              var a = this._source;
              if (!a._map) return !1;
              if (a instanceof We) {
                a = null;
                var s = this._source._layers;
                for (var d in s)
                  if (s[d]._map) {
                    a = s[d];
                    break;
                  }
                if (!a) return !1;
                this._source = a;
              }
              if (!n)
                if (a.getCenter) n = a.getCenter();
                else if (a.getLatLng) n = a.getLatLng();
                else if (a.getBounds) n = a.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
              return (this.setLatLng(n), this._map && this.update(), !0);
            },
            _updateContent: function () {
              if (this._content) {
                var n = this._contentNode,
                  a = typeof this._content == "function" ? this._content(this._source || this) : this._content;
                if (typeof a == "string") n.innerHTML = a;
                else {
                  for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
                  n.appendChild(a);
                }
                this.fire("contentupdate");
              }
            },
            _updatePosition: function () {
              if (this._map) {
                var n = this._map.latLngToLayerPoint(this._latlng),
                  a = S(this.options.offset),
                  s = this._getAnchor();
                this._zoomAnimated ? se(this._container, n.add(s)) : (a = a.add(n).add(s));
                var d = (this._containerBottom = -a.y),
                  p = (this._containerLeft = -Math.round(this._containerWidth / 2) + a.x);
                ((this._container.style.bottom = d + "px"), (this._container.style.left = p + "px"));
              }
            },
            _getAnchor: function () {
              return [0, 0];
            },
          });
          (Bt.include({
            _initOverlay: function (n, a, s, d) {
              var p = a;
              return (p instanceof n || (p = new n(d).setContent(a)), s && p.setLatLng(s), p);
            },
          }),
            cn.include({
              _initOverlay: function (n, a, s, d) {
                var p = s;
                return (p instanceof n ? (H(p, d), (p._source = this)) : ((p = a && !d ? a : new n(d, this)), p.setContent(s)), p);
              },
            }));
          var or = dn.extend({
              options: {
                pane: "popupPane",
                offset: [0, 7],
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: "",
              },
              openOn: function (n) {
                return ((n = arguments.length ? n : this._source._map), !n.hasLayer(this) && n._popup && n._popup.options.autoClose && n.removeLayer(n._popup), (n._popup = this), dn.prototype.openOn.call(this, n));
              },
              onAdd: function (n) {
                (dn.prototype.onAdd.call(this, n), n.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Pn || this._source.on("preclick", Nn)));
              },
              onRemove: function (n) {
                (dn.prototype.onRemove.call(this, n), n.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Pn || this._source.off("preclick", Nn)));
              },
              getEvents: function () {
                var n = dn.prototype.getEvents.call(this);
                return ((this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (n.preclick = this.close), this.options.keepInView && (n.moveend = this._adjustPan), n);
              },
              _initLayout: function () {
                var n = "leaflet-popup",
                  a = (this._container = Wt("div", n + " " + (this.options.className || "") + " leaflet-zoom-animated")),
                  s = (this._wrapper = Wt("div", n + "-content-wrapper", a));
                if (
                  ((this._contentNode = Wt("div", n + "-content", s)),
                  oa(a),
                  ra(this._contentNode),
                  Lt(a, "contextmenu", Nn),
                  (this._tipContainer = Wt("div", n + "-tip-container", a)),
                  (this._tip = Wt("div", n + "-tip", this._tipContainer)),
                  this.options.closeButton)
                ) {
                  var d = (this._closeButton = Wt("a", n + "-close-button", a));
                  (d.setAttribute("role", "button"),
                    d.setAttribute("aria-label", "Close popup"),
                    (d.href = "#close"),
                    (d.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                    Lt(
                      d,
                      "click",
                      function (p) {
                        (fe(p), this.close());
                      },
                      this,
                    ));
                }
              },
              _updateLayout: function () {
                var n = this._contentNode,
                  a = n.style;
                ((a.width = ""), (a.whiteSpace = "nowrap"));
                var s = n.offsetWidth;
                ((s = Math.min(s, this.options.maxWidth)), (s = Math.max(s, this.options.minWidth)), (a.width = s + 1 + "px"), (a.whiteSpace = ""), (a.height = ""));
                var d = n.offsetHeight,
                  p = this.options.maxHeight,
                  x = "leaflet-popup-scrolled";
                (p && d > p ? ((a.height = p + "px"), zt(n, x)) : ne(n, x), (this._containerWidth = this._container.offsetWidth));
              },
              _animateZoom: function (n) {
                var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center),
                  s = this._getAnchor();
                se(this._container, a.add(s));
              },
              _adjustPan: function () {
                if (this.options.autoPan) {
                  if ((this._map._panAnim && this._map._panAnim.stop(), this._autopanning)) {
                    this._autopanning = !1;
                    return;
                  }
                  var n = this._map,
                    a = parseInt(vi(this._container, "marginBottom"), 10) || 0,
                    s = this._container.offsetHeight + a,
                    d = this._containerWidth,
                    p = new Y(this._containerLeft, -s - this._containerBottom);
                  p._add(Kn(this._container));
                  var x = n.layerPointToContainerPoint(p),
                    M = S(this.options.autoPanPadding),
                    P = S(this.options.autoPanPaddingTopLeft || M),
                    V = S(this.options.autoPanPaddingBottomRight || M),
                    it = n.getSize(),
                    dt = 0,
                    vt = 0;
                  (x.x + d + V.x > it.x && (dt = x.x + d - it.x + V.x),
                    x.x - dt - P.x < 0 && (dt = x.x - P.x),
                    x.y + s + V.y > it.y && (vt = x.y + s - it.y + V.y),
                    x.y - vt - P.y < 0 && (vt = x.y - P.y),
                    (dt || vt) && (this.options.keepInView && (this._autopanning = !0), n.fire("autopanstart").panBy([dt, vt])));
                }
              },
              _getAnchor: function () {
                return S(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
              },
            }),
            oc = function (n, a) {
              return new or(n, a);
            };
          (Bt.mergeOptions({ closePopupOnClick: !0 }),
            Bt.include({
              openPopup: function (n, a, s) {
                return (this._initOverlay(or, n, a, s).openOn(this), this);
              },
              closePopup: function (n) {
                return ((n = arguments.length ? n : this._popup), n && n.close(), this);
              },
            }),
            cn.include({
              bindPopup: function (n, a) {
                return (
                  (this._popup = this._initOverlay(or, this._popup, n, a)),
                  this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !0)),
                  this
                );
              },
              unbindPopup: function () {
                return (this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !1), (this._popup = null)), this);
              },
              openPopup: function (n) {
                return (this._popup && (this instanceof We || (this._popup._source = this), this._popup._prepareOpen(n || this._latlng) && this._popup.openOn(this._map)), this);
              },
              closePopup: function () {
                return (this._popup && this._popup.close(), this);
              },
              togglePopup: function () {
                return (this._popup && this._popup.toggle(this), this);
              },
              isPopupOpen: function () {
                return this._popup ? this._popup.isOpen() : !1;
              },
              setPopupContent: function (n) {
                return (this._popup && this._popup.setContent(n), this);
              },
              getPopup: function () {
                return this._popup;
              },
              _openPopup: function (n) {
                if (!(!this._popup || !this._map)) {
                  En(n);
                  var a = n.layer || n.target;
                  if (this._popup._source === a && !(a instanceof Pn)) {
                    this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(n.latlng);
                    return;
                  }
                  ((this._popup._source = a), this.openPopup(n.latlng));
                }
              },
              _movePopup: function (n) {
                this._popup.setLatLng(n.latlng);
              },
              _onKeyPress: function (n) {
                n.originalEvent.keyCode === 13 && this._openPopup(n);
              },
            }));
          var Vr = dn.extend({
              options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, opacity: 0.9 },
              onAdd: function (n) {
                (dn.prototype.onAdd.call(this, n),
                  this.setOpacity(this.options.opacity),
                  n.fire("tooltipopen", { tooltip: this }),
                  this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0)));
              },
              onRemove: function (n) {
                (dn.prototype.onRemove.call(this, n), n.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0)));
              },
              getEvents: function () {
                var n = dn.prototype.getEvents.call(this);
                return (this.options.permanent || (n.preclick = this.close), n);
              },
              _initLayout: function () {
                var n = "leaflet-tooltip",
                  a = n + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                ((this._contentNode = this._container = Wt("div", a)), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + k(this)));
              },
              _updateLayout: function () {},
              _adjustPan: function () {},
              _setPosition: function (n) {
                var a,
                  s,
                  d = this._map,
                  p = this._container,
                  x = d.latLngToContainerPoint(d.getCenter()),
                  M = d.layerPointToContainerPoint(n),
                  P = this.options.direction,
                  V = p.offsetWidth,
                  it = p.offsetHeight,
                  dt = S(this.options.offset),
                  vt = this._getAnchor();
                (P === "top"
                  ? ((a = V / 2), (s = it))
                  : P === "bottom"
                    ? ((a = V / 2), (s = 0))
                    : P === "center"
                      ? ((a = V / 2), (s = it / 2))
                      : P === "right"
                        ? ((a = 0), (s = it / 2))
                        : P === "left"
                          ? ((a = V), (s = it / 2))
                          : M.x < x.x
                            ? ((P = "right"), (a = 0), (s = it / 2))
                            : ((P = "left"), (a = V + (dt.x + vt.x) * 2), (s = it / 2)),
                  (n = n
                    .subtract(S(a, s, !0))
                    .add(dt)
                    .add(vt)),
                  ne(p, "leaflet-tooltip-right"),
                  ne(p, "leaflet-tooltip-left"),
                  ne(p, "leaflet-tooltip-top"),
                  ne(p, "leaflet-tooltip-bottom"),
                  zt(p, "leaflet-tooltip-" + P),
                  se(p, n));
              },
              _updatePosition: function () {
                var n = this._map.latLngToLayerPoint(this._latlng);
                this._setPosition(n);
              },
              setOpacity: function (n) {
                ((this.options.opacity = n), this._container && Pe(this._container, n));
              },
              _animateZoom: function (n) {
                var a = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center);
                this._setPosition(a);
              },
              _getAnchor: function () {
                return S(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
              },
            }),
            sc = function (n, a) {
              return new Vr(n, a);
            };
          (Bt.include({
            openTooltip: function (n, a, s) {
              return (this._initOverlay(Vr, n, a, s).openOn(this), this);
            },
            closeTooltip: function (n) {
              return (n.close(), this);
            },
          }),
            cn.include({
              bindTooltip: function (n, a) {
                return (
                  this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                  (this._tooltip = this._initOverlay(Vr, this._tooltip, n, a)),
                  this._initTooltipInteractions(),
                  this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                  this
                );
              },
              unbindTooltip: function () {
                return (this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this);
              },
              _initTooltipInteractions: function (n) {
                if (!(!n && this._tooltipHandlersAdded)) {
                  var a = n ? "off" : "on",
                    s = { remove: this.closeTooltip, move: this._moveTooltip };
                  (this._tooltip.options.permanent
                    ? (s.add = this._openTooltip)
                    : ((s.mouseover = this._openTooltip), (s.mouseout = this.closeTooltip), (s.click = this._openTooltip), this._map ? this._addFocusListeners() : (s.add = this._addFocusListeners)),
                    this._tooltip.options.sticky && (s.mousemove = this._moveTooltip),
                    this[a](s),
                    (this._tooltipHandlersAdded = !n));
                }
              },
              openTooltip: function (n) {
                return (
                  this._tooltip &&
                    (this instanceof We || (this._tooltip._source = this),
                    this._tooltip._prepareOpen(n) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
                  this
                );
              },
              closeTooltip: function () {
                if (this._tooltip) return this._tooltip.close();
              },
              toggleTooltip: function () {
                return (this._tooltip && this._tooltip.toggle(this), this);
              },
              isTooltipOpen: function () {
                return this._tooltip.isOpen();
              },
              setTooltipContent: function (n) {
                return (this._tooltip && this._tooltip.setContent(n), this);
              },
              getTooltip: function () {
                return this._tooltip;
              },
              _addFocusListeners: function () {
                this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
              },
              _addFocusListenersOnLayer: function (n) {
                var a = typeof n.getElement == "function" && n.getElement();
                a &&
                  (Lt(
                    a,
                    "focus",
                    function () {
                      ((this._tooltip._source = n), this.openTooltip());
                    },
                    this,
                  ),
                  Lt(a, "blur", this.closeTooltip, this));
              },
              _setAriaDescribedByOnLayer: function (n) {
                var a = typeof n.getElement == "function" && n.getElement();
                a && a.setAttribute("aria-describedby", this._tooltip._container.id);
              },
              _openTooltip: function (n) {
                if (!(!this._tooltip || !this._map)) {
                  if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                    this._openOnceFlag = !0;
                    var a = this;
                    this._map.once("moveend", function () {
                      ((a._openOnceFlag = !1), a._openTooltip(n));
                    });
                    return;
                  }
                  ((this._tooltip._source = n.layer || n.target), this.openTooltip(this._tooltip.options.sticky ? n.latlng : void 0));
                }
              },
              _moveTooltip: function (n) {
                var a = n.latlng,
                  s,
                  d;
                (this._tooltip.options.sticky && n.originalEvent && ((s = this._map.mouseEventToContainerPoint(n.originalEvent)), (d = this._map.containerPointToLayerPoint(s)), (a = this._map.layerPointToLatLng(d))),
                  this._tooltip.setLatLng(a));
              },
            }));
          var qo = ua.extend({
            options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" },
            createIcon: function (n) {
              var a = n && n.tagName === "DIV" ? n : document.createElement("div"),
                s = this.options;
              if ((s.html instanceof Element ? (Ce(a), a.appendChild(s.html)) : (a.innerHTML = s.html !== !1 ? s.html : ""), s.bgPos)) {
                var d = S(s.bgPos);
                a.style.backgroundPosition = -d.x + "px " + -d.y + "px";
              }
              return (this._setIconStyles(a, "icon"), a);
            },
            createShadow: function () {
              return null;
            },
          });
          function pl(n) {
            return new qo(n);
          }
          ua.Default = ca;
          var Ai = cn.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: wt.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: "tilePane",
              className: "",
              keepBuffer: 2,
            },
            initialize: function (n) {
              H(this, n);
            },
            onAdd: function () {
              (this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView());
            },
            beforeAdd: function (n) {
              n._addZoomLimit(this);
            },
            onRemove: function (n) {
              (this._removeAllTiles(), ee(this._container), n._removeZoomLimit(this), (this._container = null), (this._tileZoom = void 0));
            },
            bringToFront: function () {
              return (this._map && (yi(this._container), this._setAutoZIndex(Math.max)), this);
            },
            bringToBack: function () {
              return (this._map && ($i(this._container), this._setAutoZIndex(Math.min)), this);
            },
            getContainer: function () {
              return this._container;
            },
            setOpacity: function (n) {
              return ((this.options.opacity = n), this._updateOpacity(), this);
            },
            setZIndex: function (n) {
              return ((this.options.zIndex = n), this._updateZIndex(), this);
            },
            isLoading: function () {
              return this._loading;
            },
            redraw: function () {
              if (this._map) {
                this._removeAllTiles();
                var n = this._clampZoom(this._map.getZoom());
                (n !== this._tileZoom && ((this._tileZoom = n), this._updateLevels()), this._update());
              }
              return this;
            },
            getEvents: function () {
              var n = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
              return (this.options.updateWhenIdle || (this._onMove || (this._onMove = b(this._onMoveEnd, this.options.updateInterval, this)), (n.move = this._onMove)), this._zoomAnimated && (n.zoomanim = this._animateZoom), n);
            },
            createTile: function () {
              return document.createElement("div");
            },
            getTileSize: function () {
              var n = this.options.tileSize;
              return n instanceof Y ? n : new Y(n, n);
            },
            _updateZIndex: function () {
              this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (n) {
              for (var a = this.getPane().children, s = -n(-1 / 0, 1 / 0), d = 0, p = a.length, x; d < p; d++) ((x = a[d].style.zIndex), a[d] !== this._container && x && (s = n(s, +x)));
              isFinite(s) && ((this.options.zIndex = s + n(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function () {
              if (this._map && !wt.ielt9) {
                Pe(this._container, this.options.opacity);
                var n = +new Date(),
                  a = !1,
                  s = !1;
                for (var d in this._tiles) {
                  var p = this._tiles[d];
                  if (!(!p.current || !p.loaded)) {
                    var x = Math.min(1, (n - p.loaded) / 200);
                    (Pe(p.el, x), x < 1 ? (a = !0) : (p.active ? (s = !0) : this._onOpaqueTile(p), (p.active = !0)));
                  }
                }
                (s && !this._noPrune && this._pruneTiles(), a && (ht(this._fadeFrame), (this._fadeFrame = _t(this._updateOpacity, this))));
              }
            },
            _onOpaqueTile: A,
            _initContainer: function () {
              this._container || ((this._container = Wt("div", "leaflet-layer " + (this.options.className || ""))), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
              var n = this._tileZoom,
                a = this.options.maxZoom;
              if (n !== void 0) {
                for (var s in this._levels)
                  ((s = Number(s)),
                    this._levels[s].el.children.length || s === n
                      ? ((this._levels[s].el.style.zIndex = a - Math.abs(n - s)), this._onUpdateLevel(s))
                      : (ee(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]));
                var d = this._levels[n],
                  p = this._map;
                return (
                  d ||
                    ((d = this._levels[n] = {}),
                    (d.el = Wt("div", "leaflet-tile-container leaflet-zoom-animated", this._container)),
                    (d.el.style.zIndex = a),
                    (d.origin = p.project(p.unproject(p.getPixelOrigin()), n).round()),
                    (d.zoom = n),
                    this._setZoomTransform(d, p.getCenter(), p.getZoom()),
                    A(d.el.offsetWidth),
                    this._onCreateLevel(d)),
                  (this._level = d),
                  d
                );
              }
            },
            _onUpdateLevel: A,
            _onRemoveLevel: A,
            _onCreateLevel: A,
            _pruneTiles: function () {
              if (this._map) {
                var n,
                  a,
                  s = this._map.getZoom();
                if (s > this.options.maxZoom || s < this.options.minZoom) {
                  this._removeAllTiles();
                  return;
                }
                for (n in this._tiles) ((a = this._tiles[n]), (a.retain = a.current));
                for (n in this._tiles)
                  if (((a = this._tiles[n]), a.current && !a.active)) {
                    var d = a.coords;
                    this._retainParent(d.x, d.y, d.z, d.z - 5) || this._retainChildren(d.x, d.y, d.z, d.z + 2);
                  }
                for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
              }
            },
            _removeTilesAtZoom: function (n) {
              for (var a in this._tiles) this._tiles[a].coords.z === n && this._removeTile(a);
            },
            _removeAllTiles: function () {
              for (var n in this._tiles) this._removeTile(n);
            },
            _invalidateAll: function () {
              for (var n in this._levels) (ee(this._levels[n].el), this._onRemoveLevel(Number(n)), delete this._levels[n]);
              (this._removeAllTiles(), (this._tileZoom = void 0));
            },
            _retainParent: function (n, a, s, d) {
              var p = Math.floor(n / 2),
                x = Math.floor(a / 2),
                M = s - 1,
                P = new Y(+p, +x);
              P.z = +M;
              var V = this._tileCoordsToKey(P),
                it = this._tiles[V];
              return it && it.active ? ((it.retain = !0), !0) : (it && it.loaded && (it.retain = !0), M > d ? this._retainParent(p, x, M, d) : !1);
            },
            _retainChildren: function (n, a, s, d) {
              for (var p = 2 * n; p < 2 * n + 2; p++)
                for (var x = 2 * a; x < 2 * a + 2; x++) {
                  var M = new Y(p, x);
                  M.z = s + 1;
                  var P = this._tileCoordsToKey(M),
                    V = this._tiles[P];
                  if (V && V.active) {
                    V.retain = !0;
                    continue;
                  } else V && V.loaded && (V.retain = !0);
                  s + 1 < d && this._retainChildren(p, x, s + 1, d);
                }
            },
            _resetView: function (n) {
              var a = n && (n.pinch || n.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), a, a);
            },
            _animateZoom: function (n) {
              this._setView(n.center, n.zoom, !0, n.noUpdate);
            },
            _clampZoom: function (n) {
              var a = this.options;
              return a.minNativeZoom !== void 0 && n < a.minNativeZoom ? a.minNativeZoom : a.maxNativeZoom !== void 0 && a.maxNativeZoom < n ? a.maxNativeZoom : n;
            },
            _setView: function (n, a, s, d) {
              var p = Math.round(a);
              (this.options.maxZoom !== void 0 && p > this.options.maxZoom) || (this.options.minZoom !== void 0 && p < this.options.minZoom) ? (p = void 0) : (p = this._clampZoom(p));
              var x = this.options.updateWhenZooming && p !== this._tileZoom;
              ((!d || x) && ((this._tileZoom = p), this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), p !== void 0 && this._update(n), s || this._pruneTiles(), (this._noPrune = !!s)),
                this._setZoomTransforms(n, a));
            },
            _setZoomTransforms: function (n, a) {
              for (var s in this._levels) this._setZoomTransform(this._levels[s], n, a);
            },
            _setZoomTransform: function (n, a, s) {
              var d = this._map.getZoomScale(s, n.zoom),
                p = n.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(a, s)).round();
              wt.any3d ? Je(n.el, p, d) : se(n.el, p);
            },
            _resetGrid: function () {
              var n = this._map,
                a = n.options.crs,
                s = (this._tileSize = this.getTileSize()),
                d = this._tileZoom,
                p = this._map.getPixelWorldBounds(this._tileZoom);
              (p && (this._globalTileRange = this._pxBoundsToTileRange(p)),
                (this._wrapX = a.wrapLng && !this.options.noWrap && [Math.floor(n.project([0, a.wrapLng[0]], d).x / s.x), Math.ceil(n.project([0, a.wrapLng[1]], d).x / s.y)]),
                (this._wrapY = a.wrapLat && !this.options.noWrap && [Math.floor(n.project([a.wrapLat[0], 0], d).y / s.x), Math.ceil(n.project([a.wrapLat[1], 0], d).y / s.y)]));
            },
            _onMoveEnd: function () {
              !this._map || this._map._animatingZoom || this._update();
            },
            _getTiledPixelBounds: function (n) {
              var a = this._map,
                s = a._animatingZoom ? Math.max(a._animateToZoom, a.getZoom()) : a.getZoom(),
                d = a.getZoomScale(s, this._tileZoom),
                p = a.project(n, this._tileZoom).floor(),
                x = a.getSize().divideBy(d * 2);
              return new I(p.subtract(x), p.add(x));
            },
            _update: function (n) {
              var a = this._map;
              if (a) {
                var s = this._clampZoom(a.getZoom());
                if ((n === void 0 && (n = a.getCenter()), this._tileZoom !== void 0)) {
                  var d = this._getTiledPixelBounds(n),
                    p = this._pxBoundsToTileRange(d),
                    x = p.getCenter(),
                    M = [],
                    P = this.options.keepBuffer,
                    V = new I(p.getBottomLeft().subtract([P, -P]), p.getTopRight().add([P, -P]));
                  if (!(isFinite(p.min.x) && isFinite(p.min.y) && isFinite(p.max.x) && isFinite(p.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                  for (var it in this._tiles) {
                    var dt = this._tiles[it].coords;
                    (dt.z !== this._tileZoom || !V.contains(new Y(dt.x, dt.y))) && (this._tiles[it].current = !1);
                  }
                  if (Math.abs(s - this._tileZoom) > 1) {
                    this._setView(n, s);
                    return;
                  }
                  for (var vt = p.min.y; vt <= p.max.y; vt++)
                    for (var bt = p.min.x; bt <= p.max.x; bt++) {
                      var Mt = new Y(bt, vt);
                      if (((Mt.z = this._tileZoom), !!this._isValidTile(Mt))) {
                        var ie = this._tiles[this._tileCoordsToKey(Mt)];
                        ie ? (ie.current = !0) : M.push(Mt);
                      }
                    }
                  if (
                    (M.sort(function (ke, $e) {
                      return ke.distanceTo(x) - $e.distanceTo(x);
                    }),
                    M.length !== 0)
                  ) {
                    this._loading || ((this._loading = !0), this.fire("loading"));
                    var le = document.createDocumentFragment();
                    for (bt = 0; bt < M.length; bt++) this._addTile(M[bt], le);
                    this._level.el.appendChild(le);
                  }
                }
              }
            },
            _isValidTile: function (n) {
              var a = this._map.options.crs;
              if (!a.infinite) {
                var s = this._globalTileRange;
                if ((!a.wrapLng && (n.x < s.min.x || n.x > s.max.x)) || (!a.wrapLat && (n.y < s.min.y || n.y > s.max.y))) return !1;
              }
              if (!this.options.bounds) return !0;
              var d = this._tileCoordsToBounds(n);
              return ct(this.options.bounds).overlaps(d);
            },
            _keyToBounds: function (n) {
              return this._tileCoordsToBounds(this._keyToTileCoords(n));
            },
            _tileCoordsToNwSe: function (n) {
              var a = this._map,
                s = this.getTileSize(),
                d = n.scaleBy(s),
                p = d.add(s),
                x = a.unproject(d, n.z),
                M = a.unproject(p, n.z);
              return [x, M];
            },
            _tileCoordsToBounds: function (n) {
              var a = this._tileCoordsToNwSe(n),
                s = new st(a[0], a[1]);
              return (this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s);
            },
            _tileCoordsToKey: function (n) {
              return n.x + ":" + n.y + ":" + n.z;
            },
            _keyToTileCoords: function (n) {
              var a = n.split(":"),
                s = new Y(+a[0], +a[1]);
              return ((s.z = +a[2]), s);
            },
            _removeTile: function (n) {
              var a = this._tiles[n];
              a && (ee(a.el), delete this._tiles[n], this.fire("tileunload", { tile: a.el, coords: this._keyToTileCoords(n) }));
            },
            _initTile: function (n) {
              zt(n, "leaflet-tile");
              var a = this.getTileSize();
              ((n.style.width = a.x + "px"), (n.style.height = a.y + "px"), (n.onselectstart = A), (n.onmousemove = A), wt.ielt9 && this.options.opacity < 1 && Pe(n, this.options.opacity));
            },
            _addTile: function (n, a) {
              var s = this._getTilePos(n),
                d = this._tileCoordsToKey(n),
                p = this.createTile(this._wrapCoords(n), _(this._tileReady, this, n));
              (this._initTile(p), this.createTile.length < 2 && _t(_(this._tileReady, this, n, null, p)), se(p, s), (this._tiles[d] = { el: p, coords: n, current: !0 }), a.appendChild(p), this.fire("tileloadstart", { tile: p, coords: n }));
            },
            _tileReady: function (n, a, s) {
              a && this.fire("tileerror", { error: a, tile: s, coords: n });
              var d = this._tileCoordsToKey(n);
              ((s = this._tiles[d]),
                s &&
                  ((s.loaded = +new Date()),
                  this._map._fadeAnimated ? (Pe(s.el, 0), ht(this._fadeFrame), (this._fadeFrame = _t(this._updateOpacity, this))) : ((s.active = !0), this._pruneTiles()),
                  a || (zt(s.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: s.el, coords: n })),
                  this._noTilesToLoad() && ((this._loading = !1), this.fire("load"), wt.ielt9 || !this._map._fadeAnimated ? _t(this._pruneTiles, this) : setTimeout(_(this._pruneTiles, this), 250))));
            },
            _getTilePos: function (n) {
              return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function (n) {
              var a = new Y(this._wrapX ? E(n.x, this._wrapX) : n.x, this._wrapY ? E(n.y, this._wrapY) : n.y);
              return ((a.z = n.z), a);
            },
            _pxBoundsToTileRange: function (n) {
              var a = this.getTileSize();
              return new I(n.min.unscaleBy(a).floor(), n.max.unscaleBy(a).ceil().subtract([1, 1]));
            },
            _noTilesToLoad: function () {
              for (var n in this._tiles) if (!this._tiles[n].loaded) return !1;
              return !0;
            },
          });
          function hn(n) {
            return new Ai(n);
          }
          var Ci = Ai.extend({
            options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1, referrerPolicy: !1 },
            initialize: function (n, a) {
              ((this._url = n),
                (a = H(this, a)),
                a.detectRetina && wt.retina && a.maxZoom > 0
                  ? ((a.tileSize = Math.floor(a.tileSize / 2)),
                    a.zoomReverse ? (a.zoomOffset--, (a.minZoom = Math.min(a.maxZoom, a.minZoom + 1))) : (a.zoomOffset++, (a.maxZoom = Math.max(a.minZoom, a.maxZoom - 1))),
                    (a.minZoom = Math.max(0, a.minZoom)))
                  : a.zoomReverse
                    ? (a.minZoom = Math.min(a.maxZoom, a.minZoom))
                    : (a.maxZoom = Math.max(a.minZoom, a.maxZoom)),
                typeof a.subdomains == "string" && (a.subdomains = a.subdomains.split("")),
                this.on("tileunload", this._onTileRemove));
            },
            setUrl: function (n, a) {
              return (this._url === n && a === void 0 && (a = !0), (this._url = n), a || this.redraw(), this);
            },
            createTile: function (n, a) {
              var s = document.createElement("img");
              return (
                Lt(s, "load", _(this._tileOnLoad, this, a, s)),
                Lt(s, "error", _(this._tileOnError, this, a, s)),
                (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
                typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy),
                (s.alt = ""),
                (s.src = this.getTileUrl(n)),
                s
              );
            },
            getTileUrl: function (n) {
              var a = { r: wt.retina ? "@2x" : "", s: this._getSubdomain(n), x: n.x, y: n.y, z: this._getZoomForUrl() };
              if (this._map && !this._map.options.crs.infinite) {
                var s = this._globalTileRange.max.y - n.y;
                (this.options.tms && (a.y = s), (a["-y"] = s));
              }
              return $(this._url, g(a, this.options));
            },
            _tileOnLoad: function (n, a) {
              wt.ielt9 ? setTimeout(_(n, this, null, a), 0) : n(null, a);
            },
            _tileOnError: function (n, a, s) {
              var d = this.options.errorTileUrl;
              (d && a.getAttribute("src") !== d && (a.src = d), n(s, a));
            },
            _onTileRemove: function (n) {
              n.tile.onload = null;
            },
            _getZoomForUrl: function () {
              var n = this._tileZoom,
                a = this.options.maxZoom,
                s = this.options.zoomReverse,
                d = this.options.zoomOffset;
              return (s && (n = a - n), n + d);
            },
            _getSubdomain: function (n) {
              var a = Math.abs(n.x + n.y) % this.options.subdomains.length;
              return this.options.subdomains[a];
            },
            _abortLoading: function () {
              var n, a;
              for (n in this._tiles)
                if (this._tiles[n].coords.z !== this._tileZoom && ((a = this._tiles[n].el), (a.onload = A), (a.onerror = A), !a.complete)) {
                  a.src = nt;
                  var s = this._tiles[n].coords;
                  (ee(a), delete this._tiles[n], this.fire("tileabort", { tile: a, coords: s }));
                }
            },
            _removeTile: function (n) {
              var a = this._tiles[n];
              if (a) return (a.el.setAttribute("src", nt), Ai.prototype._removeTile.call(this, n));
            },
            _tileReady: function (n, a, s) {
              if (!(!this._map || (s && s.getAttribute("src") === nt))) return Ai.prototype._tileReady.call(this, n, a, s);
            },
          });
          function Ye(n, a) {
            return new Ci(n, a);
          }
          var Xe = Ci.extend({
            defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" },
            options: { crs: null, uppercase: !1 },
            initialize: function (n, a) {
              this._url = n;
              var s = g({}, this.defaultWmsParams);
              for (var d in a) d in this.options || (s[d] = a[d]);
              a = H(this, a);
              var p = a.detectRetina && wt.retina ? 2 : 1,
                x = this.getTileSize();
              ((s.width = x.x * p), (s.height = x.y * p), (this.wmsParams = s));
            },
            onAdd: function (n) {
              ((this._crs = this.options.crs || n.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version)));
              var a = this._wmsVersion >= 1.3 ? "crs" : "srs";
              ((this.wmsParams[a] = this._crs.code), Ci.prototype.onAdd.call(this, n));
            },
            getTileUrl: function (n) {
              var a = this._tileCoordsToNwSe(n),
                s = this._crs,
                d = lt(s.project(a[0]), s.project(a[1])),
                p = d.min,
                x = d.max,
                M = (this._wmsVersion >= 1.3 && this._crs === ul ? [p.y, p.x, x.y, x.x] : [p.x, p.y, x.x, x.y]).join(","),
                P = Ci.prototype.getTileUrl.call(this, n);
              return P + W(this.wmsParams, P, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + M;
            },
            setParams: function (n, a) {
              return (g(this.wmsParams, n), a || this.redraw(), this);
            },
          });
          function pa(n, a) {
            return new Xe(n, a);
          }
          ((Ci.WMS = Xe), (Ye.wms = pa));
          var mn = cn.extend({
              options: { padding: 0.1 },
              initialize: function (n) {
                (H(this, n), k(this), (this._layers = this._layers || {}));
              },
              onAdd: function () {
                (this._container || (this._initContainer(), zt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this));
              },
              onRemove: function () {
                (this.off("update", this._updatePaths, this), this._destroyContainer());
              },
              getEvents: function () {
                var n = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
                return (this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n);
              },
              _onAnimZoom: function (n) {
                this._updateTransform(n.center, n.zoom);
              },
              _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom());
              },
              _updateTransform: function (n, a) {
                var s = this._map.getZoomScale(a, this._zoom),
                  d = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                  p = this._map.project(this._center, a),
                  x = d.multiplyBy(-s).add(p).subtract(this._map._getNewPixelOrigin(n, a));
                wt.any3d ? Je(this._container, x, s) : se(this._container, x);
              },
              _reset: function () {
                (this._update(), this._updateTransform(this._center, this._zoom));
                for (var n in this._layers) this._layers[n]._reset();
              },
              _onZoomEnd: function () {
                for (var n in this._layers) this._layers[n]._project();
              },
              _updatePaths: function () {
                for (var n in this._layers) this._layers[n]._update();
              },
              _update: function () {
                var n = this.options.padding,
                  a = this._map.getSize(),
                  s = this._map.containerPointToLayerPoint(a.multiplyBy(-n)).round();
                ((this._bounds = new I(s, s.add(a.multiplyBy(1 + n * 2)).round())), (this._center = this._map.getCenter()), (this._zoom = this._map.getZoom()));
              },
            }),
            sr = mn.extend({
              options: { tolerance: 0 },
              getEvents: function () {
                var n = mn.prototype.getEvents.call(this);
                return ((n.viewprereset = this._onViewPreReset), n);
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
              },
              onAdd: function () {
                (mn.prototype.onAdd.call(this), this._draw());
              },
              _initContainer: function () {
                var n = (this._container = document.createElement("canvas"));
                (Lt(n, "mousemove", this._onMouseMove, this),
                  Lt(n, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                  Lt(n, "mouseout", this._handleMouseOut, this),
                  (n._leaflet_disable_events = !0),
                  (this._ctx = n.getContext("2d")));
              },
              _destroyContainer: function () {
                (ht(this._redrawRequest), delete this._ctx, ee(this._container), Vt(this._container), delete this._container);
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  var n;
                  this._redrawBounds = null;
                  for (var a in this._layers) ((n = this._layers[a]), n._update());
                  this._redraw();
                }
              },
              _update: function () {
                if (!(this._map._animatingZoom && this._bounds)) {
                  mn.prototype._update.call(this);
                  var n = this._bounds,
                    a = this._container,
                    s = n.getSize(),
                    d = wt.retina ? 2 : 1;
                  (se(a, n.min), (a.width = d * s.x), (a.height = d * s.y), (a.style.width = s.x + "px"), (a.style.height = s.y + "px"), wt.retina && this._ctx.scale(2, 2), this._ctx.translate(-n.min.x, -n.min.y), this.fire("update"));
                }
              },
              _reset: function () {
                (mn.prototype._reset.call(this), this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths()));
              },
              _initPath: function (n) {
                (this._updateDashArray(n), (this._layers[k(n)] = n));
                var a = (n._order = { layer: n, prev: this._drawLast, next: null });
                (this._drawLast && (this._drawLast.next = a), (this._drawLast = a), (this._drawFirst = this._drawFirst || this._drawLast));
              },
              _addPath: function (n) {
                this._requestRedraw(n);
              },
              _removePath: function (n) {
                var a = n._order,
                  s = a.next,
                  d = a.prev;
                (s ? (s.prev = d) : (this._drawLast = d), d ? (d.next = s) : (this._drawFirst = s), delete n._order, delete this._layers[k(n)], this._requestRedraw(n));
              },
              _updatePath: function (n) {
                (this._extendRedrawBounds(n), n._project(), n._update(), this._requestRedraw(n));
              },
              _updateStyle: function (n) {
                (this._updateDashArray(n), this._requestRedraw(n));
              },
              _updateDashArray: function (n) {
                if (typeof n.options.dashArray == "string") {
                  var a = n.options.dashArray.split(/[, ]+/),
                    s = [],
                    d,
                    p;
                  for (p = 0; p < a.length; p++) {
                    if (((d = Number(a[p])), isNaN(d))) return;
                    s.push(d);
                  }
                  n.options._dashArray = s;
                } else n.options._dashArray = n.options.dashArray;
              },
              _requestRedraw: function (n) {
                this._map && (this._extendRedrawBounds(n), (this._redrawRequest = this._redrawRequest || _t(this._redraw, this)));
              },
              _extendRedrawBounds: function (n) {
                if (n._pxBounds) {
                  var a = (n.options.weight || 0) + 1;
                  ((this._redrawBounds = this._redrawBounds || new I()), this._redrawBounds.extend(n._pxBounds.min.subtract([a, a])), this._redrawBounds.extend(n._pxBounds.max.add([a, a])));
                }
              },
              _redraw: function () {
                ((this._redrawRequest = null), this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), (this._redrawBounds = null));
              },
              _clear: function () {
                var n = this._redrawBounds;
                if (n) {
                  var a = n.getSize();
                  this._ctx.clearRect(n.min.x, n.min.y, a.x, a.y);
                } else (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
              },
              _draw: function () {
                var n,
                  a = this._redrawBounds;
                if ((this._ctx.save(), a)) {
                  var s = a.getSize();
                  (this._ctx.beginPath(), this._ctx.rect(a.min.x, a.min.y, s.x, s.y), this._ctx.clip());
                }
                this._drawing = !0;
                for (var d = this._drawFirst; d; d = d.next) ((n = d.layer), (!a || (n._pxBounds && n._pxBounds.intersects(a))) && n._updatePath());
                ((this._drawing = !1), this._ctx.restore());
              },
              _updatePoly: function (n, a) {
                if (this._drawing) {
                  var s,
                    d,
                    p,
                    x,
                    M = n._parts,
                    P = M.length,
                    V = this._ctx;
                  if (P) {
                    for (V.beginPath(), s = 0; s < P; s++) {
                      for (d = 0, p = M[s].length; d < p; d++) ((x = M[s][d]), V[d ? "lineTo" : "moveTo"](x.x, x.y));
                      a && V.closePath();
                    }
                    this._fillStroke(V, n);
                  }
                }
              },
              _updateCircle: function (n) {
                if (!(!this._drawing || n._empty())) {
                  var a = n._point,
                    s = this._ctx,
                    d = Math.max(Math.round(n._radius), 1),
                    p = (Math.max(Math.round(n._radiusY), 1) || d) / d;
                  (p !== 1 && (s.save(), s.scale(1, p)), s.beginPath(), s.arc(a.x, a.y / p, d, 0, Math.PI * 2, !1), p !== 1 && s.restore(), this._fillStroke(s, n));
                }
              },
              _fillStroke: function (n, a) {
                var s = a.options;
                (s.fill && ((n.globalAlpha = s.fillOpacity), (n.fillStyle = s.fillColor || s.color), n.fill(s.fillRule || "evenodd")),
                  s.stroke &&
                    s.weight !== 0 &&
                    (n.setLineDash && n.setLineDash((a.options && a.options._dashArray) || []),
                    (n.globalAlpha = s.opacity),
                    (n.lineWidth = s.weight),
                    (n.strokeStyle = s.color),
                    (n.lineCap = s.lineCap),
                    (n.lineJoin = s.lineJoin),
                    n.stroke()));
              },
              _onClick: function (n) {
                for (var a = this._map.mouseEventToLayerPoint(n), s, d, p = this._drawFirst; p; p = p.next)
                  ((s = p.layer), s.options.interactive && s._containsPoint(a) && (!(n.type === "click" || n.type === "preclick") || !this._map._draggableMoved(s)) && (d = s));
                this._fireEvent(d ? [d] : !1, n);
              },
              _onMouseMove: function (n) {
                if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
                  var a = this._map.mouseEventToLayerPoint(n);
                  this._handleMouseHover(n, a);
                }
              },
              _handleMouseOut: function (n) {
                var a = this._hoveredLayer;
                a && (ne(this._container, "leaflet-interactive"), this._fireEvent([a], n, "mouseout"), (this._hoveredLayer = null), (this._mouseHoverThrottled = !1));
              },
              _handleMouseHover: function (n, a) {
                if (!this._mouseHoverThrottled) {
                  for (var s, d, p = this._drawFirst; p; p = p.next) ((s = p.layer), s.options.interactive && s._containsPoint(a) && (d = s));
                  (d !== this._hoveredLayer && (this._handleMouseOut(n), d && (zt(this._container, "leaflet-interactive"), this._fireEvent([d], n, "mouseover"), (this._hoveredLayer = d))),
                    this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, n),
                    (this._mouseHoverThrottled = !0),
                    setTimeout(
                      _(function () {
                        this._mouseHoverThrottled = !1;
                      }, this),
                      32,
                    ));
                }
              },
              _fireEvent: function (n, a, s) {
                this._map._fireDOMEvent(a, s || a.type, n);
              },
              _bringToFront: function (n) {
                var a = n._order;
                if (a) {
                  var s = a.next,
                    d = a.prev;
                  if (s) s.prev = d;
                  else return;
                  (d ? (d.next = s) : s && (this._drawFirst = s), (a.prev = this._drawLast), (this._drawLast.next = a), (a.next = null), (this._drawLast = a), this._requestRedraw(n));
                }
              },
              _bringToBack: function (n) {
                var a = n._order;
                if (a) {
                  var s = a.next,
                    d = a.prev;
                  if (d) d.next = s;
                  else return;
                  (s ? (s.prev = d) : d && (this._drawLast = d), (a.prev = null), (a.next = this._drawFirst), (this._drawFirst.prev = a), (this._drawFirst = a), this._requestRedraw(n));
                }
              },
            });
          function lr(n) {
            return wt.canvas ? new sr(n) : null;
          }
          var Mi = (function () {
              try {
                return (
                  document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                  function (n) {
                    return document.createElement("<lvml:" + n + ' class="lvml">');
                  }
                );
              } catch {}
              return function (n) {
                return document.createElement("<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
              };
            })(),
            ga = {
              _initContainer: function () {
                this._container = Wt("div", "leaflet-vml-container");
              },
              _update: function () {
                this._map._animatingZoom || (mn.prototype._update.call(this), this.fire("update"));
              },
              _initPath: function (n) {
                var a = (n._container = Mi("shape"));
                (zt(a, "leaflet-vml-shape " + (this.options.className || "")), (a.coordsize = "1 1"), (n._path = Mi("path")), a.appendChild(n._path), this._updateStyle(n), (this._layers[k(n)] = n));
              },
              _addPath: function (n) {
                var a = n._container;
                (this._container.appendChild(a), n.options.interactive && n.addInteractiveTarget(a));
              },
              _removePath: function (n) {
                var a = n._container;
                (ee(a), n.removeInteractiveTarget(a), delete this._layers[k(n)]);
              },
              _updateStyle: function (n) {
                var a = n._stroke,
                  s = n._fill,
                  d = n.options,
                  p = n._container;
                ((p.stroked = !!d.stroke),
                  (p.filled = !!d.fill),
                  d.stroke
                    ? (a || (a = n._stroke = Mi("stroke")),
                      p.appendChild(a),
                      (a.weight = d.weight + "px"),
                      (a.color = d.color),
                      (a.opacity = d.opacity),
                      d.dashArray ? (a.dashStyle = K(d.dashArray) ? d.dashArray.join(" ") : d.dashArray.replace(/( *, *)/g, " ")) : (a.dashStyle = ""),
                      (a.endcap = d.lineCap.replace("butt", "flat")),
                      (a.joinstyle = d.lineJoin))
                    : a && (p.removeChild(a), (n._stroke = null)),
                  d.fill ? (s || (s = n._fill = Mi("fill")), p.appendChild(s), (s.color = d.fillColor || d.color), (s.opacity = d.fillOpacity)) : s && (p.removeChild(s), (n._fill = null)));
              },
              _updateCircle: function (n) {
                var a = n._point.round(),
                  s = Math.round(n._radius),
                  d = Math.round(n._radiusY || s);
                this._setPath(n, n._empty() ? "M0 0" : "AL " + a.x + "," + a.y + " " + s + "," + d + " 0," + 65535 * 360);
              },
              _setPath: function (n, a) {
                n._path.v = a;
              },
              _bringToFront: function (n) {
                yi(n._container);
              },
              _bringToBack: function (n) {
                $i(n._container);
              },
            },
            ur = wt.vml ? Mi : ci,
            $n = mn.extend({
              _initContainer: function () {
                ((this._container = ur("svg")), this._container.setAttribute("pointer-events", "none"), (this._rootGroup = ur("g")), this._container.appendChild(this._rootGroup));
              },
              _destroyContainer: function () {
                (ee(this._container), Vt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize);
              },
              _update: function () {
                if (!(this._map._animatingZoom && this._bounds)) {
                  mn.prototype._update.call(this);
                  var n = this._bounds,
                    a = n.getSize(),
                    s = this._container;
                  ((!this._svgSize || !this._svgSize.equals(a)) && ((this._svgSize = a), s.setAttribute("width", a.x), s.setAttribute("height", a.y)),
                    se(s, n.min),
                    s.setAttribute("viewBox", [n.min.x, n.min.y, a.x, a.y].join(" ")),
                    this.fire("update"));
                }
              },
              _initPath: function (n) {
                var a = (n._path = ur("path"));
                (n.options.className && zt(a, n.options.className), n.options.interactive && zt(a, "leaflet-interactive"), this._updateStyle(n), (this._layers[k(n)] = n));
              },
              _addPath: function (n) {
                (this._rootGroup || this._initContainer(), this._rootGroup.appendChild(n._path), n.addInteractiveTarget(n._path));
              },
              _removePath: function (n) {
                (ee(n._path), n.removeInteractiveTarget(n._path), delete this._layers[k(n)]);
              },
              _updatePath: function (n) {
                (n._project(), n._update());
              },
              _updateStyle: function (n) {
                var a = n._path,
                  s = n.options;
                a &&
                  (s.stroke
                    ? (a.setAttribute("stroke", s.color),
                      a.setAttribute("stroke-opacity", s.opacity),
                      a.setAttribute("stroke-width", s.weight),
                      a.setAttribute("stroke-linecap", s.lineCap),
                      a.setAttribute("stroke-linejoin", s.lineJoin),
                      s.dashArray ? a.setAttribute("stroke-dasharray", s.dashArray) : a.removeAttribute("stroke-dasharray"),
                      s.dashOffset ? a.setAttribute("stroke-dashoffset", s.dashOffset) : a.removeAttribute("stroke-dashoffset"))
                    : a.setAttribute("stroke", "none"),
                  s.fill ? (a.setAttribute("fill", s.fillColor || s.color), a.setAttribute("fill-opacity", s.fillOpacity), a.setAttribute("fill-rule", s.fillRule || "evenodd")) : a.setAttribute("fill", "none"));
              },
              _updatePoly: function (n, a) {
                this._setPath(n, Bs(n._parts, a));
              },
              _updateCircle: function (n) {
                var a = n._point,
                  s = Math.max(Math.round(n._radius), 1),
                  d = Math.max(Math.round(n._radiusY), 1) || s,
                  p = "a" + s + "," + d + " 0 1,0 ",
                  x = n._empty() ? "M0 0" : "M" + (a.x - s) + "," + a.y + p + s * 2 + ",0 " + p + -s * 2 + ",0 ";
                this._setPath(n, x);
              },
              _setPath: function (n, a) {
                n._path.setAttribute("d", a);
              },
              _bringToFront: function (n) {
                yi(n._path);
              },
              _bringToBack: function (n) {
                $i(n._path);
              },
            });
          wt.vml && $n.include(ga);
          function Li(n) {
            return wt.svg || wt.vml ? new $n(n) : null;
          }
          Bt.include({
            getRenderer: function (n) {
              var a = n.options.renderer || this._getPaneRenderer(n.options.pane) || this.options.renderer || this._renderer;
              return (a || (a = this._renderer = this._createRenderer()), this.hasLayer(a) || this.addLayer(a), a);
            },
            _getPaneRenderer: function (n) {
              if (n === "overlayPane" || n === void 0) return !1;
              var a = this._paneRenderers[n];
              return (a === void 0 && ((a = this._createRenderer({ pane: n })), (this._paneRenderers[n] = a)), a);
            },
            _createRenderer: function (n) {
              return (this.options.preferCanvas && lr(n)) || Li(n);
            },
          });
          var gl = da.extend({
            initialize: function (n, a) {
              da.prototype.initialize.call(this, this._boundsToLatLngs(n), a);
            },
            setBounds: function (n) {
              return this.setLatLngs(this._boundsToLatLngs(n));
            },
            _boundsToLatLngs: function (n) {
              return ((n = ct(n)), [n.getSouthWest(), n.getNorthWest(), n.getNorthEast(), n.getSouthEast()]);
            },
          });
          function Ie(n, a) {
            return new gl(n, a);
          }
          (($n.create = ur),
            ($n.pointsToPath = Bs),
            (Ve.geometryToLayer = ir),
            (Ve.coordsToLatLng = Ur),
            (Ve.coordsToLatLngs = ar),
            (Ve.latLngToCoords = rr),
            (Ve.latLngsToCoords = Gr),
            (Ve.getFeature = fn),
            (Ve.asFeature = ha),
            Bt.mergeOptions({ boxZoom: !0 }));
          var Yr = un.extend({
            initialize: function (n) {
              ((this._map = n), (this._container = n._container), (this._pane = n._panes.overlayPane), (this._resetStateTimeout = 0), n.on("unload", this._destroy, this));
            },
            addHooks: function () {
              Lt(this._container, "mousedown", this._onMouseDown, this);
            },
            removeHooks: function () {
              Vt(this._container, "mousedown", this._onMouseDown, this);
            },
            moved: function () {
              return this._moved;
            },
            _destroy: function () {
              (ee(this._pane), delete this._pane);
            },
            _resetState: function () {
              ((this._resetStateTimeout = 0), (this._moved = !1));
            },
            _clearDeferredResetState: function () {
              this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (n) {
              if (!n.shiftKey || (n.which !== 1 && n.button !== 1)) return !1;
              (this._clearDeferredResetState(),
                this._resetState(),
                Sn(),
                Qa(),
                (this._startPoint = this._map.mouseEventToContainerPoint(n)),
                Lt(document, { contextmenu: En, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this));
            },
            _onMouseMove: function (n) {
              (this._moved || ((this._moved = !0), (this._box = Wt("div", "leaflet-zoom-box", this._container)), zt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")),
                (this._point = this._map.mouseEventToContainerPoint(n)));
              var a = new I(this._point, this._startPoint),
                s = a.getSize();
              (se(this._box, a.min), (this._box.style.width = s.x + "px"), (this._box.style.height = s.y + "px"));
            },
            _finish: function () {
              (this._moved && (ee(this._box), ne(this._container, "leaflet-crosshair")), Ka(), Oo(), Vt(document, { contextmenu: En, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this));
            },
            _onMouseUp: function (n) {
              if (!(n.which !== 1 && n.button !== 1) && (this._finish(), !!this._moved)) {
                (this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(_(this._resetState, this), 0)));
                var a = new st(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(a).fire("boxzoomend", { boxZoomBounds: a });
              }
            },
            _onKeyDown: function (n) {
              n.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
            },
          });
          (Bt.addInitHook("addHandler", "boxZoom", Yr), Bt.mergeOptions({ doubleClickZoom: !0 }));
          var Cn = un.extend({
            addHooks: function () {
              this._map.on("dblclick", this._onDoubleClick, this);
            },
            removeHooks: function () {
              this._map.off("dblclick", this._onDoubleClick, this);
            },
            _onDoubleClick: function (n) {
              var a = this._map,
                s = a.getZoom(),
                d = a.options.zoomDelta,
                p = n.originalEvent.shiftKey ? s - d : s + d;
              a.options.doubleClickZoom === "center" ? a.setZoom(p) : a.setZoomAround(n.containerPoint, p);
            },
          });
          (Bt.addInitHook("addHandler", "doubleClickZoom", Cn), Bt.mergeOptions({ dragging: !0, inertia: !0, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: !1, maxBoundsViscosity: 0 }));
          var Vo = un.extend({
            addHooks: function () {
              if (!this._draggable) {
                var n = this._map;
                ((this._draggable = new Fn(n._mapPane, n._container)),
                  this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this),
                  this._draggable.on("predrag", this._onPreDragLimit, this),
                  n.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), n.on("zoomend", this._onZoomEnd, this), n.whenReady(this._onZoomEnd, this)));
              }
              (zt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), (this._positions = []), (this._times = []));
            },
            removeHooks: function () {
              (ne(this._map._container, "leaflet-grab"), ne(this._map._container, "leaflet-touch-drag"), this._draggable.disable());
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            moving: function () {
              return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
              var n = this._map;
              if ((n._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
                var a = ct(this._map.options.maxBounds);
                ((this._offsetLimit = lt(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize()))),
                  (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))));
              } else this._offsetLimit = null;
              (n.fire("movestart").fire("dragstart"), n.options.inertia && ((this._positions = []), (this._times = [])));
            },
            _onDrag: function (n) {
              if (this._map.options.inertia) {
                var a = (this._lastTime = +new Date()),
                  s = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
                (this._positions.push(s), this._times.push(a), this._prunePositions(a));
              }
              this._map.fire("move", n).fire("drag", n);
            },
            _prunePositions: function (n) {
              for (; this._positions.length > 1 && n - this._times[0] > 50; ) (this._positions.shift(), this._times.shift());
            },
            _onZoomEnd: function () {
              var n = this._map.getSize().divideBy(2),
                a = this._map.latLngToLayerPoint([0, 0]);
              ((this._initialWorldOffset = a.subtract(n).x), (this._worldWidth = this._map.getPixelWorldBounds().getSize().x));
            },
            _viscousLimit: function (n, a) {
              return n - (n - a) * this._viscosity;
            },
            _onPreDragLimit: function () {
              if (!(!this._viscosity || !this._offsetLimit)) {
                var n = this._draggable._newPos.subtract(this._draggable._startPos),
                  a = this._offsetLimit;
                (n.x < a.min.x && (n.x = this._viscousLimit(n.x, a.min.x)),
                  n.y < a.min.y && (n.y = this._viscousLimit(n.y, a.min.y)),
                  n.x > a.max.x && (n.x = this._viscousLimit(n.x, a.max.x)),
                  n.y > a.max.y && (n.y = this._viscousLimit(n.y, a.max.y)),
                  (this._draggable._newPos = this._draggable._startPos.add(n)));
              }
            },
            _onPreDragWrap: function () {
              var n = this._worldWidth,
                a = Math.round(n / 2),
                s = this._initialWorldOffset,
                d = this._draggable._newPos.x,
                p = ((d - a + s) % n) + a - s,
                x = ((d + a + s) % n) - a - s,
                M = Math.abs(p + s) < Math.abs(x + s) ? p : x;
              ((this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = M));
            },
            _onDragEnd: function (n) {
              var a = this._map,
                s = a.options,
                d = !s.inertia || n.noInertia || this._times.length < 2;
              if ((a.fire("dragend", n), d)) a.fire("moveend");
              else {
                this._prunePositions(+new Date());
                var p = this._lastPos.subtract(this._positions[0]),
                  x = (this._lastTime - this._times[0]) / 1e3,
                  M = s.easeLinearity,
                  P = p.multiplyBy(M / x),
                  V = P.distanceTo([0, 0]),
                  it = Math.min(s.inertiaMaxSpeed, V),
                  dt = P.multiplyBy(it / V),
                  vt = it / (s.inertiaDeceleration * M),
                  bt = dt.multiplyBy(-vt / 2).round();
                !bt.x && !bt.y
                  ? a.fire("moveend")
                  : ((bt = a._limitOffset(bt, a.options.maxBounds)),
                    _t(function () {
                      a.panBy(bt, { duration: vt, easeLinearity: M, noMoveStart: !0, animate: !0 });
                    }));
              }
            },
          });
          (Bt.addInitHook("addHandler", "dragging", Vo), Bt.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }));
          var cr = un.extend({
            keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] },
            initialize: function (n) {
              ((this._map = n), this._setPanDelta(n.options.keyboardPanDelta), this._setZoomDelta(n.options.zoomDelta));
            },
            addHooks: function () {
              var n = this._map._container;
              (n.tabIndex <= 0 && (n.tabIndex = "0"), Lt(n, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this));
            },
            removeHooks: function () {
              (this._removeHooks(), Vt(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this));
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var n = document.body,
                  a = document.documentElement,
                  s = n.scrollTop || a.scrollTop,
                  d = n.scrollLeft || a.scrollLeft;
                (this._map._container.focus(), window.scrollTo(d, s));
              }
            },
            _onFocus: function () {
              ((this._focused = !0), this._map.fire("focus"));
            },
            _onBlur: function () {
              ((this._focused = !1), this._map.fire("blur"));
            },
            _setPanDelta: function (n) {
              var a = (this._panKeys = {}),
                s = this.keyCodes,
                d,
                p;
              for (d = 0, p = s.left.length; d < p; d++) a[s.left[d]] = [-1 * n, 0];
              for (d = 0, p = s.right.length; d < p; d++) a[s.right[d]] = [n, 0];
              for (d = 0, p = s.down.length; d < p; d++) a[s.down[d]] = [0, n];
              for (d = 0, p = s.up.length; d < p; d++) a[s.up[d]] = [0, -1 * n];
            },
            _setZoomDelta: function (n) {
              var a = (this._zoomKeys = {}),
                s = this.keyCodes,
                d,
                p;
              for (d = 0, p = s.zoomIn.length; d < p; d++) a[s.zoomIn[d]] = n;
              for (d = 0, p = s.zoomOut.length; d < p; d++) a[s.zoomOut[d]] = -n;
            },
            _addHooks: function () {
              Lt(document, "keydown", this._onKeyDown, this);
            },
            _removeHooks: function () {
              Vt(document, "keydown", this._onKeyDown, this);
            },
            _onKeyDown: function (n) {
              if (!(n.altKey || n.ctrlKey || n.metaKey)) {
                var a = n.keyCode,
                  s = this._map,
                  d;
                if (a in this._panKeys) {
                  if (!s._panAnim || !s._panAnim._inProgress)
                    if (((d = this._panKeys[a]), n.shiftKey && (d = S(d).multiplyBy(3)), s.options.maxBounds && (d = s._limitOffset(S(d), s.options.maxBounds)), s.options.worldCopyJump)) {
                      var p = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(d)));
                      s.panTo(p);
                    } else s.panBy(d);
                } else if (a in this._zoomKeys) s.setZoom(s.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[a]);
                else if (a === 27 && s._popup && s._popup.options.closeOnEscapeKey) s.closePopup();
                else return;
                En(n);
              }
            },
          });
          (Bt.addInitHook("addHandler", "keyboard", cr), Bt.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }));
          var ti = un.extend({
            addHooks: function () {
              (Lt(this._map._container, "wheel", this._onWheelScroll, this), (this._delta = 0));
            },
            removeHooks: function () {
              Vt(this._map._container, "wheel", this._onWheelScroll, this);
            },
            _onWheelScroll: function (n) {
              var a = $a(n),
                s = this._map.options.wheelDebounceTime;
              ((this._delta += a), (this._lastMousePos = this._map.mouseEventToContainerPoint(n)), this._startTime || (this._startTime = +new Date()));
              var d = Math.max(s - (+new Date() - this._startTime), 0);
              (clearTimeout(this._timer), (this._timer = setTimeout(_(this._performZoom, this), d)), En(n));
            },
            _performZoom: function () {
              var n = this._map,
                a = n.getZoom(),
                s = this._map.options.zoomSnap || 0;
              n._stop();
              var d = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
                p = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(d))))) / Math.LN2,
                x = s ? Math.ceil(p / s) * s : p,
                M = n._limitZoom(a + (this._delta > 0 ? x : -x)) - a;
              ((this._delta = 0), (this._startTime = null), M && (n.options.scrollWheelZoom === "center" ? n.setZoom(a + M) : n.setZoomAround(this._lastMousePos, a + M)));
            },
          });
          Bt.addInitHook("addHandler", "scrollWheelZoom", ti);
          var Yo = 600;
          Bt.mergeOptions({ tapHold: wt.touchNative && wt.safari && wt.mobile, tapTolerance: 15 });
          var Xr = un.extend({
            addHooks: function () {
              Lt(this._map._container, "touchstart", this._onDown, this);
            },
            removeHooks: function () {
              Vt(this._map._container, "touchstart", this._onDown, this);
            },
            _onDown: function (n) {
              if ((clearTimeout(this._holdTimeout), n.touches.length === 1)) {
                var a = n.touches[0];
                ((this._startPos = this._newPos = new Y(a.clientX, a.clientY)),
                  (this._holdTimeout = setTimeout(
                    _(function () {
                      (this._cancel(), this._isTapValid() && (Lt(document, "touchend", fe), Lt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", a)));
                    }, this),
                    Yo,
                  )),
                  Lt(document, "touchend touchcancel contextmenu", this._cancel, this),
                  Lt(document, "touchmove", this._onMove, this));
              }
            },
            _cancelClickPrevent: function n() {
              (Vt(document, "touchend", fe), Vt(document, "touchend touchcancel", n));
            },
            _cancel: function () {
              (clearTimeout(this._holdTimeout), Vt(document, "touchend touchcancel contextmenu", this._cancel, this), Vt(document, "touchmove", this._onMove, this));
            },
            _onMove: function (n) {
              var a = n.touches[0];
              this._newPos = new Y(a.clientX, a.clientY);
            },
            _isTapValid: function () {
              return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
            },
            _simulateEvent: function (n, a) {
              var s = new MouseEvent(n, { bubbles: !0, cancelable: !0, view: window, screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY });
              ((s._simulated = !0), a.target.dispatchEvent(s));
            },
          });
          (Bt.addInitHook("addHandler", "tapHold", Xr), Bt.mergeOptions({ touchZoom: wt.touch, bounceAtZoomLimits: !0 }));
          var Oi = un.extend({
            addHooks: function () {
              (zt(this._map._container, "leaflet-touch-zoom"), Lt(this._map._container, "touchstart", this._onTouchStart, this));
            },
            removeHooks: function () {
              (ne(this._map._container, "leaflet-touch-zoom"), Vt(this._map._container, "touchstart", this._onTouchStart, this));
            },
            _onTouchStart: function (n) {
              var a = this._map;
              if (!(!n.touches || n.touches.length !== 2 || a._animatingZoom || this._zooming)) {
                var s = a.mouseEventToContainerPoint(n.touches[0]),
                  d = a.mouseEventToContainerPoint(n.touches[1]);
                ((this._centerPoint = a.getSize()._divideBy(2)),
                  (this._startLatLng = a.containerPointToLatLng(this._centerPoint)),
                  a.options.touchZoom !== "center" && (this._pinchStartLatLng = a.containerPointToLatLng(s.add(d)._divideBy(2))),
                  (this._startDist = s.distanceTo(d)),
                  (this._startZoom = a.getZoom()),
                  (this._moved = !1),
                  (this._zooming = !0),
                  a._stop(),
                  Lt(document, "touchmove", this._onTouchMove, this),
                  Lt(document, "touchend touchcancel", this._onTouchEnd, this),
                  fe(n));
              }
            },
            _onTouchMove: function (n) {
              if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
                var a = this._map,
                  s = a.mouseEventToContainerPoint(n.touches[0]),
                  d = a.mouseEventToContainerPoint(n.touches[1]),
                  p = s.distanceTo(d) / this._startDist;
                if (
                  ((this._zoom = a.getScaleZoom(p, this._startZoom)),
                  !a.options.bounceAtZoomLimits && ((this._zoom < a.getMinZoom() && p < 1) || (this._zoom > a.getMaxZoom() && p > 1)) && (this._zoom = a._limitZoom(this._zoom)),
                  a.options.touchZoom === "center")
                ) {
                  if (((this._center = this._startLatLng), p === 1)) return;
                } else {
                  var x = s._add(d)._divideBy(2)._subtract(this._centerPoint);
                  if (p === 1 && x.x === 0 && x.y === 0) return;
                  this._center = a.unproject(a.project(this._pinchStartLatLng, this._zoom).subtract(x), this._zoom);
                }
                (this._moved || (a._moveStart(!0, !1), (this._moved = !0)), ht(this._animRequest));
                var M = _(a._move, a, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
                ((this._animRequest = _t(M, this, !0)), fe(n));
              }
            },
            _onTouchEnd: function () {
              if (!this._moved || !this._zooming) {
                this._zooming = !1;
                return;
              }
              ((this._zooming = !1),
                ht(this._animRequest),
                Vt(document, "touchmove", this._onTouchMove, this),
                Vt(document, "touchend touchcancel", this._onTouchEnd, this),
                this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)));
            },
          });
          (Bt.addInitHook("addHandler", "touchZoom", Oi),
            (Bt.BoxZoom = Yr),
            (Bt.DoubleClickZoom = Cn),
            (Bt.Drag = Vo),
            (Bt.Keyboard = cr),
            (Bt.ScrollWheelZoom = ti),
            (Bt.TapHold = Xr),
            (Bt.TouchZoom = Oi),
            (f.Bounds = I),
            (f.Browser = wt),
            (f.CRS = Xt),
            (f.Canvas = sr),
            (f.Circle = Go),
            (f.CircleMarker = nr),
            (f.Class = Tt),
            (f.Control = Be),
            (f.DivIcon = qo),
            (f.DivOverlay = dn),
            (f.DomEvent = Yu),
            (f.DomUtil = Js),
            (f.Draggable = Fn),
            (f.Evented = et),
            (f.FeatureGroup = We),
            (f.GeoJSON = Ve),
            (f.GridLayer = Ai),
            (f.Handler = un),
            (f.Icon = ua),
            (f.ImageOverlay = An),
            (f.LatLng = ut),
            (f.LatLngBounds = st),
            (f.Layer = cn),
            (f.LayerGroup = Ti),
            (f.LineUtil = sl),
            (f.Map = Bt),
            (f.Marker = fa),
            (f.Mixin = Fu),
            (f.Path = Pn),
            (f.Point = Y),
            (f.PolyUtil = Ju),
            (f.Polygon = da),
            (f.Polyline = Bn),
            (f.Popup = or),
            (f.PosAnimation = Dr),
            (f.Projection = ll),
            (f.Rectangle = gl),
            (f.Renderer = mn),
            (f.SVG = $n),
            (f.SVGOverlay = Jn),
            (f.TileLayer = Ci),
            (f.Tooltip = Vr),
            (f.Transformation = Ue),
            (f.Util = Ot),
            (f.VideoOverlay = qr),
            (f.bind = _),
            (f.bounds = lt),
            (f.canvas = lr),
            (f.circle = ac),
            (f.circleMarker = fl),
            (f.control = sa),
            (f.divIcon = pl),
            (f.extend = g),
            (f.featureGroup = er),
            (f.geoJSON = Wr),
            (f.geoJson = dl),
            (f.gridLayer = hn),
            (f.icon = Zr),
            (f.imageOverlay = ma),
            (f.latLng = rt),
            (f.latLngBounds = ct),
            (f.layerGroup = cl),
            (f.map = tr),
            (f.marker = Uo),
            (f.point = S),
            (f.polygon = qe),
            (f.polyline = rc),
            (f.popup = oc),
            (f.rectangle = Ie),
            (f.setOptions = H),
            (f.stamp = k),
            (f.svg = Li),
            (f.svgOverlay = ml),
            (f.tileLayer = Ye),
            (f.tooltip = sc),
            (f.transformation = je),
            (f.version = h),
            (f.videoOverlay = hl));
          var va = window.L;
          ((f.noConflict = function () {
            return ((window.L = va), this);
          }),
            (window.L = f));
        });
      })(Ls, Ls.exports)),
    Ls.exports
  );
}
var J1 = F1();
const Wn = ug(J1),
  sg = [-7.751987051093749, 110.49123740813083];
function $1() {
  return m.jsxs("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    children: [
      m.jsx("rect", { x: "1", y: "1", width: "12", height: "12", rx: "1.5", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("path", { d: "M1 5h12M1 9h12M5 1v12M9 1v12", stroke: "currentColor", strokeWidth: "0.8", opacity: "0.5" }),
      m.jsx("circle", { cx: "7", cy: "7", r: "1.5", fill: "currentColor" }),
    ],
  });
}
function t2() {
  return m.jsxs("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "7", cy: "7", r: "5.5", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("path", { d: "M7 1.5v11M1.5 7h11", stroke: "currentColor", strokeWidth: "0.8", opacity: "0.4" }),
      m.jsx("ellipse", { cx: "7", cy: "7", rx: "3", ry: "5.5", stroke: "currentColor", strokeWidth: "0.8", opacity: "0.6" }),
      m.jsx("circle", { cx: "7", cy: "7", r: "1.2", fill: "currentColor" }),
    ],
  });
}
function e2() {
  return m.jsxs("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    children: [
      m.jsx("path", { d: "M1 11 L5 4.5 L8 7.5 L11 3 L13 11Z", stroke: "currentColor", strokeWidth: "1.1", strokeLinejoin: "round", fill: "currentColor", fillOpacity: "0.08" }),
      m.jsx("path", { d: "M1 11 L5 4.5 L8 7.5 L11 3 L13 11", stroke: "currentColor", strokeWidth: "1.1", strokeLinejoin: "round" }),
    ],
  });
}
const vu = {
    osm: { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', label: "OpenStreetMap", Icon: $1 },
    satellite: { url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles &copy; Esri", label: "Esri Imagery", Icon: t2 },
    topo: { url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", attribution: "Map data: &copy; OpenStreetMap contributors, SRTM | &copy; OpenTopoMap", label: "OpenTopoMap", Icon: e2 },
  },
  n2 = { candi: { label: "Titik Candi Utama", color: "#2a2119" }, relief: { label: "Jalur Relief Ramayana", color: "#3d6b65" }, area: { label: "Area Kompleks", color: "#7d5b83" }, gps: { label: "Titik GPS Akuisisi", color: "#9c7261" } },
  i2 = [
    ["Nama", "Candi Siwa"],
    ["Kompleks", "Prambanan"],
    ["Kabupaten", "Sleman, DIY"],
    ["Elevasi", "±154 m dpl"],
    ["Status", "UNESCO WHS"],
    ["Sejak", "1991"],
  ],
  a2 = [
    ["Tinggi", "47 m"],
    ["Lebar Dasar", "34 × 34 m"],
    ["Panjang Relief", "±100 m"],
    ["Panel Relief", "42 panel"],
  ];
function r2() {
  const o = R.useRef(null),
    c = R.useRef(null),
    f = R.useRef(null),
    h = R.useRef({}),
    [g, y] = R.useState("osm"),
    [_, T] = R.useState({ candi: !0, relief: !0, area: !0, gps: !0 }),
    [k, b] = R.useState(null);
  R.useEffect(() => {
    if (!c.current || o.current) return;
    const C = Wn.map(c.current, { center: sg, zoom: 16, zoomControl: !1 });
    Wn.control.zoom({ position: "bottomright" }).addTo(C);
    const D = Wn.tileLayer(vu.osm.url, { attribution: vu.osm.attribution, maxZoom: 19 }).addTo(C);
    f.current = D;
    const B = Wn.divIcon({
        html: '<div style="width:36px;height:36px;border-radius:50%;background:#ffda3d;border:3px solid #2a2119;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);"><svg width="16" height="18" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="0" width="2" height="2" rx="1" fill="#2a2119"/><rect x="6" y="2" width="4" height="2" rx="0.5" fill="#2a2119"/><rect x="5" y="4" width="6" height="2" rx="0.5" fill="#2a2119"/><rect x="4" y="6" width="8" height="2" rx="0.5" fill="#2a2119"/><rect x="3" y="8" width="10" height="3" rx="0.5" fill="#2a2119"/><rect x="1" y="11" width="14" height="2.5" rx="0.5" fill="#2a2119"/><rect x="0" y="13.5" width="16" height="3" rx="0.5" fill="#2a2119"/><rect x="1" y="16.5" width="14" height="3.5" fill="#2a2119"/></svg></div>',
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      }),
      H = Wn.marker(sg, { icon: B })
        .bindPopup(
          `<div style="font-family:var(--font-ui);min-width:180px"><strong style="display:block;font-size:13px;letter-spacing:-0.2px;color:var(--dark);margin-bottom:4px">Candi Siwa</strong><span style="font-size:11px;color:var(--dark-64)">Prambanan · Sleman, DIY</span><div style="margin-top:8px;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--dark-32)">7°45'7&quot;S · 110°29'29&quot;E</div></div>`,
        )
        .addTo(C);
    h.current.candi = H;
    const W = [
        [-7.751033032668306, 110.49138258010302],
        [-7.751034612947866, 110.492398500159],
        [-7.753060361559987, 110.49232893011597],
        [-7.7533469921720615, 110.49121846647282],
        [-7.752056855722691, 110.490656022085],
        [-7.751653608558374, 110.49099387037842],
        [-7.751801364455408, 110.4909125329799],
        [-7.7523317086309875, 110.49100197621645],
        [-7.75249905466877, 110.49122001658131],
        [-7.752201189765036, 110.49142579856002],
        [-7.751999364526685, 110.49148771251262],
        [-7.75177637217963, 110.49143638936532],
        [-7.751536664903359, 110.49154080686002],
      ],
      X = Wn.layerGroup(
        W.map((nt) => {
          const ot = Wn.divIcon({ html: '<div style="width:10px;height:10px;border-radius:50%;background:#9c7261;border:2px solid #5c3a2e;"></div>', className: "", iconSize: [10, 10], iconAnchor: [5, 5] });
          return Wn.marker(nt, { icon: ot }).bindPopup(`<div style="font-size:12px;color:var(--dark)">Titik GPS Akuisisi<br/><span style="font-size:10px;color:var(--dark-32)">${nt[0].toFixed(4)}°S, ${nt[1].toFixed(4)}°E</span></div>`);
        }),
      ).addTo(C);
    h.current.gps = X;
    const $ = [
        [-7.752007240192701, 110.49136361774745],
        [-7.752079872734831, 110.49131625309072],
        [-7.752107808324626, 110.49119784144884],
        [-7.7520698159220585, 110.49108957937625],
        [-7.751973717476729, 110.49105123655887],
        [-7.751859740222435, 110.49108732391639],
        [-7.751825100070393, 110.49119896917875],
        [-7.751859740222435, 110.49132527493008],
        [-7.751946899302026, 110.49136474547738],
      ],
      K = Wn.polyline($, { color: "#3d6b65", weight: 2.5, opacity: 0.85, dashArray: "6 4" })
        .bindPopup('<div style="font-size:12px;color:var(--dark)">Jalur Relief Ramayana<br/><span style="font-size:10px;color:var(--dark-32)">42 Panel · ±100 meter</span></div>')
        .addTo(C);
    h.current.relief = K;
    const at = Wn.polygon(
      [
        [-7.75111779379134, 110.49057934716788],
        [-7.751129069498034, 110.49233181783687],
        [-7.752822178087274, 110.49234617174912],
        [-7.752848996271901, 110.49055984317467],
      ],
      { color: "#7d5b83", weight: 1.5, opacity: 0.7, fillColor: "#7d5b83", fillOpacity: 0.05 },
    )
      .bindPopup('<div style="font-size:12px;color:var(--dark)">Area Kompleks Prambanan</div>')
      .addTo(C);
    return (
      (h.current.area = at),
      C.on("mousemove", (nt) => b([nt.latlng.lat, nt.latlng.lng])),
      (o.current = C),
      () => {
        (C.remove(), (o.current = null));
      }
    );
  }, []);
  const E = (C) => {
      if (!o.current || !f.current) return;
      o.current.removeLayer(f.current);
      const D = vu[C];
      ((f.current = Wn.tileLayer(D.url, { attribution: D.attribution, maxZoom: 19 }).addTo(o.current)), y(C));
    },
    A = (C) => {
      if (!o.current) return;
      const D = h.current[C];
      if (!D) return;
      const B = !_[C];
      (B ? o.current.addLayer(D) : o.current.removeLayer(D), T((H) => ({ ...H, [C]: B })));
    };
  return m.jsx("section", {
    id: "peta",
    style: { background: "var(--bg-1)", padding: "80px 0", position: "relative" },
    children: m.jsxs("div", {
      className: "main-container",
      children: [
        m.jsxs("div", {
          className: "reveal",
          style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, gap: 40, flexWrap: "wrap" },
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "WebGIS Interaktif" }),
                m.jsx("h2", { style: { margin: 0, color: "var(--dark)", maxWidth: 480 }, children: "Peta Kawasan Prambanan" }),
              ],
            }),
            m.jsxs("div", {
              style: { alignSelf: "flex-end", display: "flex", alignItems: "center", gap: 32 },
              children: [
                k &&
                  m.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 11, color: "var(--dark-64)", letterSpacing: "0.5px" },
                    children: [m.jsx(sx, { size: 12 }), k[0].toFixed(5), "°, ", k[1].toFixed(5), "°"],
                  }),
                m.jsx("div", {
                  className: "tabs-wrap",
                  children: Object.entries(vu).map(([C, D]) =>
                    m.jsxs(
                      "button",
                      { className: `tab-btn ${g === C ? "active" : ""}`, onClick: () => E(C), children: [m.jsx("div", { className: "tab-highlight" }), m.jsx(D.Icon, {}), m.jsx("span", { style: { fontSize: 10 }, children: D.label })] },
                      C,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className: "reveal delay-2",
          style: { display: "grid", gridTemplateColumns: "1fr 260px", gap: 20, alignItems: "start" },
          children: [
            m.jsx("div", { style: { borderRadius: "var(--radius-card)", overflow: "hidden", border: "1px solid var(--dark-16)", boxShadow: "0 8px 32px var(--dark-8)" }, children: m.jsx("div", { ref: c, style: { height: 520 } }) }),
            m.jsxs("div", {
              style: { display: "flex", flexDirection: "column", gap: 12 },
              children: [
                m.jsxs("div", {
                  style: { background: "var(--bg-2)", borderRadius: "var(--radius-card)", border: "1px solid var(--dark-8)", padding: "16px 18px" },
                  children: [
                    m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 12 }, children: "Informasi Lokasi" }),
                    i2.map(([C, D]) =>
                      m.jsxs(
                        "div",
                        {
                          style: { display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed var(--dark-8)", fontFamily: "var(--font-ui)", fontSize: 11 },
                          children: [m.jsx("span", { style: { color: "var(--dark-32)", letterSpacing: "0.5px" }, children: C }), m.jsx("span", { style: { color: "var(--dark)", letterSpacing: "0.5px", fontWeight: 500 }, children: D })],
                        },
                        C,
                      ),
                    ),
                    m.jsx("div", {
                      style: { marginTop: 10, background: "var(--dark)", borderRadius: 6, padding: "8px 10px", fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.8px", color: "var(--bg-3)" },
                      children: "7°45'7″S · 110°29'29″E",
                    }),
                  ],
                }),
                m.jsxs("div", {
                  style: { background: "var(--bg-2)", borderRadius: "var(--radius-card)", border: "1px solid var(--dark-8)", padding: "16px 18px" },
                  children: [
                    m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 12 }, children: "Kontrol Layer" }),
                    Object.entries(n2).map(([C, D]) =>
                      m.jsxs(
                        "button",
                        {
                          onClick: () => A(C),
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            width: "100%",
                            padding: "8px 10px",
                            background: _[C] ? `color-mix(in srgb, ${D.color} 8%, transparent)` : "transparent",
                            border: `1px ${_[C] ? "solid" : "dashed"} color-mix(in srgb, ${D.color} ${_[C] ? 25 : 12}%, transparent)`,
                            borderRadius: 6,
                            cursor: "pointer",
                            fontFamily: "var(--font-ui)",
                            fontSize: 11,
                            letterSpacing: "0.5px",
                            color: _[C] ? "var(--dark)" : "var(--dark-32)",
                            marginBottom: 6,
                            textAlign: "left",
                            transition: "all 0.2s",
                          },
                          children: [m.jsx("div", { style: { width: 8, height: 8, borderRadius: "50%", background: _[C] ? D.color : "var(--dark-16)", flexShrink: 0, transition: "background 0.2s" } }), D.label],
                        },
                        C,
                      ),
                    ),
                  ],
                }),
                m.jsxs("div", {
                  style: { background: "var(--bg-2)", borderRadius: "var(--radius-card)", border: "1px solid var(--dark-8)", padding: "16px 18px" },
                  children: [
                    m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 12 }, children: "Dimensi Candi" }),
                    a2.map(([C, D]) =>
                      m.jsxs(
                        "div",
                        {
                          style: { display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed var(--dark-8)", fontFamily: "var(--font-ui)", fontSize: 11 },
                          children: [m.jsx("span", { style: { color: "var(--dark-32)", letterSpacing: "0.5px" }, children: C }), m.jsx("span", { style: { color: "var(--dark)", letterSpacing: "0.5px" }, children: D })],
                        },
                        C,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const o2 = [
    { num: "01", title: "Navigasi 3D Bebas", desc: "Bergerak bebas di lorong Candi Siwa menggunakan kontrol mouse atau layar sentuh dengan sudut pandang 360°." },
    { num: "02", title: "Tooltip Relief Interaktif", desc: "Klik setiap panel untuk membaca narasi Ramayana dari 42 panel yang tersaji secara sekuensial." },
    { num: "03", title: "Material PBR Realistis", desc: "Model HBIM ditampilkan dengan material berbasis fisika untuk representasi visual otentik seperti di lokasi." },
  ],
  ce = [
    { id: "siwa", name: "Candi Siwa", sub: "Candi Utama · 47 m", tag: "VIRTUAL TOUR", main: !0, x: 380, y: 296, size: 64, innerSize: 38 },
    { id: "brahma", name: "Candi Brahma", sub: "Trimurti · Selatan", tag: null, main: !1, x: 380, y: 482, size: 44, innerSize: 26 },
    { id: "wisnu", name: "Candi Wisnu", sub: "Trimurti · Utara", tag: null, main: !1, x: 380, y: 110, size: 44, innerSize: 26 },
    { id: "nandi", name: "Candi Nandi", sub: "Wahana Siwa", tag: null, main: !1, x: 680, y: 296, size: 34, innerSize: 20 },
    { id: "garuda", name: "Candi Garuda", sub: "Wahana Wisnu", tag: null, main: !1, x: 680, y: 110, size: 28, innerSize: 16 },
    { id: "angsa", name: "Candi Angsa", sub: "Wahana Brahma", tag: null, main: !1, x: 680, y: 482, size: 28, innerSize: 16 },
  ];
function s2({ x: o, y: c, size: f, innerSize: h, main: g, hovered: y }) {
  const _ = f,
    T = h,
    k = Math.round(_ * 0.72),
    b = Math.round(_ * 0.5),
    E = y || g ? (g ? "#3a2e22" : "#4a3c2e") : "#c5ae94",
    A = y || g ? (g ? "#2a2119" : "#3a2e22") : "#b8a082",
    C = y || g ? (g ? "#1a1410" : "#2a2119") : "#a8906e",
    D = g || y ? "#ffda3d" : "#d4b88a";
  return m.jsxs("g", {
    children: [
      m.jsx("rect", { x: o - _ + 6, y: c - _ + 6, width: _ * 2, height: _ * 2, rx: "2", fill: "rgba(42,33,25,0.18)" }),
      m.jsx("rect", { x: o - _, y: c - _, width: _ * 2, height: _ * 2, rx: "2", fill: E, stroke: "rgba(42,33,25,0.28)", strokeWidth: "0.8" }),
      m.jsx("rect", { x: o - k, y: c - k, width: k * 2, height: k * 2, rx: "2", fill: A, stroke: "rgba(42,33,25,0.28)", strokeWidth: "0.8" }),
      m.jsx("rect", { x: o - b, y: c - b, width: b * 2, height: b * 2, rx: "2", fill: C, stroke: "rgba(42,33,25,0.28)", strokeWidth: "0.8" }),
      m.jsx("rect", { x: o - T, y: c - T, width: T * 2, height: T * 2, rx: "3", fill: D, stroke: "rgba(42,33,25,0.35)", strokeWidth: "1" }),
      m.jsx("circle", { cx: o, cy: c, r: g ? 7 : 4, fill: g ? "#2a2119" : "rgba(42,33,25,0.3)" }),
      g && m.jsx("circle", { cx: o, cy: c, r: 3, fill: "#ffda3d" }),
    ],
  });
}
function l2() {
  const [o, c] = R.useState(null),
    [f, h] = R.useState(null),
    g = ce.find((y) => y.id === f);
  return m.jsxs("section", {
    id: "tour",
    style: { background: "var(--bg-4)", padding: "80px 0 0", overflow: "hidden" },
    children: [
      m.jsxs("div", {
        className: "main-container",
        children: [
          m.jsxs("div", {
            className: "reveal",
            style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, gap: 40, flexWrap: "wrap" },
            children: [
              m.jsxs("div", {
                children: [
                  m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Virtual Tour 3D" }),
                  m.jsx("h2", { style: { margin: 0, color: "var(--dark)", maxWidth: 500 }, children: "Jelajahi Kompleks Prambanan" }),
                ],
              }),
              m.jsxs("p", {
                className: "text-large",
                style: { maxWidth: 380, color: "var(--dark-64)", marginTop: 12, alignSelf: "flex-end" },
                children: ["Pilih", " ", m.jsx("span", { style: { fontStyle: "italic", color: "var(--dark)" }, children: "Candi Siwa" }), " ", "di peta kompleks untuk memulai Virtual Tour 3D interaktif berbasis HBIM."],
              }),
            ],
          }),
          m.jsx("div", {
            className: "reveal delay-2",
            style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 64 },
            children: o2.map((y, _) =>
              m.jsxs(
                "div",
                {
                  style: { display: "flex", flexDirection: "column", gap: 16, padding: "24px 0 24px 24px", borderLeft: "1px dashed var(--dark)" },
                  children: [
                    m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 64, fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--dark-8)" }, children: y.num }),
                    m.jsxs("div", {
                      children: [
                        m.jsx("h4", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", marginBottom: 8 }, children: y.title }),
                        m.jsx("p", { style: { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.65, color: "var(--dark-64)", margin: 0 }, children: y.desc }),
                      ],
                    }),
                  ],
                },
                y.num,
              ),
            ),
          }),
        ],
      }),
      m.jsxs("div", {
        className: "reveal delay-3",
        style: { width: "100%", background: "var(--bg-3)", borderTop: "1px dashed var(--dark-32)", overflow: "hidden", position: "relative" },
        children: [
          m.jsxs("svg", {
            viewBox: "0 0 1060 630",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "100%", display: "block" },
            "aria-label": "Denah Aerial Kompleks Prambanan",
            children: [
              m.jsxs("defs", {
                children: [
                  m.jsx("pattern", {
                    id: "mapgrid",
                    x: "0",
                    y: "0",
                    width: "20",
                    height: "20",
                    patternUnits: "userSpaceOnUse",
                    children: m.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "rgba(42,33,25,0.055)", strokeWidth: "0.5" }),
                  }),
                  m.jsxs("pattern", {
                    id: "paving",
                    x: "0",
                    y: "0",
                    width: "40",
                    height: "40",
                    patternUnits: "userSpaceOnUse",
                    children: [
                      m.jsx("rect", { width: "40", height: "40", fill: "#c9b494" }),
                      m.jsx("rect", { x: "0", y: "0", width: "19", height: "19", fill: "#cbb797", opacity: "0.4" }),
                      m.jsx("rect", { x: "21", y: "21", width: "19", height: "19", fill: "#cbb797", opacity: "0.4" }),
                    ],
                  }),
                ],
              }),
              m.jsx("rect", { x: "30", y: "28", width: "1000", height: "574", rx: "4", fill: "#c2ad8a", stroke: "rgba(42,33,25,0.22)", strokeWidth: "1.5" }),
              m.jsx("line", { x1: ce[0].x, y1: ce[0].y, x2: ce[3].x, y2: ce[3].y, stroke: "rgba(42,33,25,0.22)", strokeWidth: "14", strokeLinecap: "round", opacity: "0.3" }),
              m.jsx("line", { x1: ce[1].x, y1: ce[1].y, x2: ce[5].x, y2: ce[5].y, stroke: "rgba(42,33,25,0.22)", strokeWidth: "10", strokeLinecap: "round", opacity: "0.3" }),
              m.jsx("line", { x1: ce[2].x, y1: ce[2].y, x2: ce[4].x, y2: ce[4].y, stroke: "rgba(42,33,25,0.22)", strokeWidth: "10", strokeLinecap: "round", opacity: "0.3" }),
              m.jsx("line", { x1: ce[2].x, y1: ce[2].y, x2: ce[1].x, y2: ce[1].y, stroke: "rgba(42,33,25,0.22)", strokeWidth: "10", strokeLinecap: "round", opacity: "0.3" }),
              m.jsx("line", { x1: ce[4].x, y1: ce[4].y, x2: ce[5].x, y2: ce[5].y, stroke: "rgba(42,33,25,0.22)", strokeWidth: "8", strokeLinecap: "round", opacity: "0.3" }),
              ce.map((y) =>
                m.jsx(
                  "g",
                  {
                    style: { cursor: "pointer" },
                    onMouseEnter: () => c(y.id),
                    onMouseLeave: () => c(null),
                    onClick: () => {
                      if (y.id === "siwa") {
                        window.location.href = "./virtual-tour/index.html";
                        return;
                      }
                      h((_) => (_ === y.id ? null : y.id));
                    },
                    children: m.jsx(s2, { x: y.x, y: y.y, size: y.size, innerSize: y.innerSize, main: y.main, hovered: o === y.id || f === y.id }),
                  },
                  y.id,
                ),
              ),
              ce.map((y) => {
                const _ = o === y.id || f === y.id,
                  T = y.y + y.size + (y.main ? 22 : 16);
                return m.jsxs(
                  "g",
                  {
                    style: { pointerEvents: "none" },
                    children: [
                      m.jsx("text", {
                        x: y.x,
                        y: T,
                        fontFamily: "'DM Mono', monospace",
                        fontSize: y.main ? 13 : 10,
                        fill: _ ? "#2a2119" : "rgba(42,33,25,0.72)",
                        textAnchor: "middle",
                        fontWeight: y.main ? "600" : "400",
                        letterSpacing: "0.3",
                        children: y.name,
                      }),
                      m.jsx("text", { x: y.x, y: T + (y.main ? 14 : 12), fontFamily: "Georgia, serif", fontSize: "9", fill: "rgba(42,33,25,0.45)", textAnchor: "middle", fontStyle: "italic", children: y.sub }),
                      y.main && m.jsxs("text", { x: y.x, y: T + 26, fontFamily: "'DM Mono', monospace", fontSize: "9", fill: _ ? "#2a2119" : "rgba(42,33,25,0.3)", textAnchor: "middle", letterSpacing: "1", children: ["▶ ", y.tag] }),
                    ],
                  },
                  `lbl-${y.id}`,
                );
              }),
              m.jsxs("g", {
                transform: "translate(998, 56)",
                children: [
                  m.jsx("circle", { cx: "0", cy: "0", r: "22", fill: "rgba(235,232,219,0.7)", stroke: "rgba(42,33,25,0.22)", strokeWidth: "1" }),
                  m.jsx("text", { x: "0", y: "-26", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "rgba(42,33,25,0.5)", textAnchor: "middle", letterSpacing: "0.5", children: "U" }),
                  m.jsx("polygon", { points: "0,-16 -3,-5 0,-8 3,-5", fill: "#2a2119", opacity: "0.65" }),
                  m.jsx("polygon", { points: "0,16 -3,5 0,8 3,5", fill: "#2a2119", opacity: "0.2" }),
                  m.jsx("line", { x1: "-16", y1: "0", x2: "16", y2: "0", stroke: "#2a2119", strokeWidth: "0.7", opacity: "0.2" }),
                ],
              }),
              m.jsxs("g", {
                transform: "translate(50, 575)",
                opacity: "0.5",
                children: [
                  m.jsx("rect", { x: "0", y: "-6", width: "14", height: "12", rx: "1", fill: "#2a2119" }),
                  m.jsx("text", { x: "20", y: "4", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "#2a2119", letterSpacing: "0.5", children: "Candi Utama" }),
                  m.jsx("rect", { x: "120", y: "-6", width: "12", height: "12", rx: "1", fill: "#c5ae94", stroke: "#2a2119", strokeWidth: "1.2" }),
                  m.jsx("text", { x: "138", y: "4", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "#2a2119", letterSpacing: "0.5", children: "Candi Wahana" }),
                ],
              }),
              m.jsx("text", { x: "530", y: "48", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "rgba(42,33,25,0.25)", textAnchor: "middle", letterSpacing: "3", children: "UTARA" }),
              m.jsx("text", { x: "530", y: "584", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "rgba(42,33,25,0.25)", textAnchor: "middle", letterSpacing: "3", children: "SELATAN" }),
              m.jsx("text", { x: "50", y: "295", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "rgba(42,33,25,0.25)", textAnchor: "middle", letterSpacing: "3", transform: "rotate(-90, 50, 295)", children: "BARAT" }),
              m.jsx("text", { x: "1010", y: "295", fontFamily: "'DM Mono', monospace", fontSize: "9", fill: "rgba(42,33,25,0.25)", textAnchor: "middle", letterSpacing: "3", transform: "rotate(90, 1010, 295)", children: "TIMUR" }),
            ],
          }),
          g &&
            m.jsxs("div", {
              style: {
                position: "absolute",
                bottom: 60,
                left: "var(--site-pad)",
                background: "rgba(235,232,219,0.95)",
                backdropFilter: "blur(12px)",
                border: "1px dashed rgba(42,33,25,0.2)",
                borderRadius: "var(--radius-card)",
                padding: "16px 20px",
                minWidth: 220,
                maxWidth: 280,
                boxShadow: "0 8px 32px rgba(42,33,25,0.12)",
                pointerEvents: "none",
              },
              children: [
                m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--dark-32)", marginBottom: 4 }, children: g.sub }),
                m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", marginBottom: 2 }, children: g.name }),
                g.main && m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: "var(--acc-3)", marginTop: 4 }, children: "▶ Virtual Tour Tersedia" }),
              ],
            }),
        ],
      }),
      m.jsx("div", {
        className: "main-container reveal",
        style: { padding: "40px var(--site-pad)" },
        children: m.jsxs("div", {
          style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 },
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 8 }, children: "Candi Siwa · Virtual Tour" }),
                m.jsx("h3", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 28, fontWeight: 500, letterSpacing: "-1px", color: "var(--dark)", margin: 0 }, children: "Buka pengalaman 3D sekarang" }),
              ],
            }),
            m.jsx("a", { href: "./virtual-tour/index.html", className: "btn-primary", children: "Mulai Virtual Tour →" }),
          ],
        }),
      }),
    ],
  });
}
function u2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "11", cy: "5", r: "3", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("path", { d: "M5 20c0-3.3 2.7-6 6-6s6 2.7 6 6", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
      m.jsx("path", { d: "M3 11 Q11 7 19 11", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", fill: "none", opacity: "0.5" }),
      m.jsx("path", { d: "M2 14 Q11 10 20 14", stroke: "currentColor", strokeWidth: "0.9", strokeLinecap: "round", fill: "none", opacity: "0.3" }),
    ],
  });
}
function c2() {
  return m.jsx("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: m.jsx("path", { d: "M11 2 L14 7 L20 7 L15 11 L17 17 L11 13 L5 17 L7 11 L2 7 L8 7 Z", stroke: "currentColor", strokeWidth: "1.1", strokeLinejoin: "round", fill: "currentColor", fillOpacity: "0.08" }),
  });
}
function f2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("rect", { x: "1", y: "14", width: "20", height: "7", rx: "1", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("rect", { x: "4", y: "9", width: "14", height: "5", rx: "0.5", stroke: "currentColor", strokeWidth: "1.1" }),
      m.jsx("rect", { x: "7", y: "5", width: "8", height: "4", rx: "0.5", stroke: "currentColor", strokeWidth: "1.1" }),
      m.jsx("rect", { x: "9.5", y: "2", width: "3", height: "3", rx: "0.5", stroke: "currentColor", strokeWidth: "1" }),
      m.jsx("rect", { x: "9", y: "14", width: "4", height: "7", fill: "currentColor", opacity: "0.3" }),
    ],
  });
}
function d2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("path", { d: "M4 18 L11 4 L18 18", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" }),
      m.jsx("path", { d: "M7 13h8", stroke: "currentColor", strokeWidth: "1.1", strokeLinecap: "round" }),
      m.jsx("circle", { cx: "11", cy: "20", r: "1.5", fill: "currentColor", opacity: "0.4" }),
    ],
  });
}
function h2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("path", { d: "M3 19 Q5 14 9 12 Q13 10 14 6 Q15 3 12 2", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", fill: "none" }),
      m.jsx("path", { d: "M12 2 Q14 4 11 5", stroke: "currentColor", strokeWidth: "1.1", strokeLinecap: "round", fill: "none", opacity: "0.5" }),
      m.jsx("circle", { cx: "3", cy: "19", r: "1.5", fill: "currentColor", opacity: "0.35" }),
    ],
  });
}
function m2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("circle", { cx: "11", cy: "7", r: "3.5", stroke: "currentColor", strokeWidth: "1.2" }),
      m.jsx("path", { d: "M4 21c0-4 3-7 7-7s7 3 7 7", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
      m.jsx("path", { d: "M16 10 Q20 8 21 13", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", fill: "none", opacity: "0.5" }),
      m.jsx("path", { d: "M18 13Q22 15 19 18", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", fill: "none", opacity: "0.5" }),
    ],
  });
}
function p2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("path", { d: "M3 3l16 16M3 19L19 3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", opacity: "0.25" }),
      m.jsx("path", { d: "M4 4l5 5-2 2-5-5 2-2z", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" }),
      m.jsx("path", { d: "M18 18l-5-5 2-2 5 5-2 2z", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" }),
    ],
  });
}
function g2() {
  return m.jsxs("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    children: [
      m.jsx("path", { d: "M1 14 Q11 6 21 14", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", fill: "none" }),
      m.jsx("path", { d: "M1 14h20", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
      m.jsx("path", { d: "M6 14V10M11 14V8M16 14V10", stroke: "currentColor", strokeWidth: "1.1", strokeLinecap: "round", opacity: "0.5" }),
    ],
  });
}
const v2 = [
    {
      num: "01–02",
      Icon: u2,
      title: "Wisnu Turun ke Dunia & Kerajaan Ayodya",
      tag: "Surga Tushita · Kerajaan Ayodya",
      scenes: [
        {
          label: "Panel 1 — Adegan pertama",
          text: "Dewa Wisnu di Surga Tushita, duduk di atas singgasana berbentuk ular naga yang muncul dari laut, dan di belakangnya duduk seekor garuda. Lima orang dewa minta bantuan Wisnu supaya turun ke dunia untuk membinasakan kejahatan yang dilakukan oleh Rawana.",
        },
        { label: "Panel 1 — Adegan kedua", text: "Di Kerajaan Ayodya, memerintahlah raja Dasarata. Raja Dasarata dan permaisuri sedang dihadap oleh Rama, penjelmaan Wisnu, beserta para abdi kraton." },
        {
          label: "Panel 2",
          text: "Pada suatu hari Raja Dasarata kedatangan tamu pendeta bernama Wismamitra. Dia memohon pertolongan kepada Rama agar mau membunuh para raksasa yang mengganggu pertapaannya. Di belakang sang raja duduk tiga istrinya, yaitu Kausalya (ibu Rama), Kaikeyi (ibu Barata), dan Sumitra (ibu Laksmana dan Satrugna). Rama dan Laksmana berada di sebelah kanan mereka.",
        },
      ],
    },
    {
      num: "03–05",
      Icon: c2,
      title: "Tataka, Pertapaan Wismamitra & Sayembara Mithila",
      tag: "Hutan · Pertapaan · Mantilireja",
      scenes: [
        { label: "Panel 3", text: "Rama dan Laksmana dalam perjalanan menuju pertapaan pendeta Wismamitra. Tiba-tiba mereka diganggu oleh raseksi Tataka. Rama membunuh dia di hutan." },
        { label: "Panel 4 — Adegan pertama", text: "Pendeta Wismamitra duduk bersemadi di dalam pertapaannya." },
        { label: "Panel 4 — Adegan kedua", text: "Rama dan Laksmana membunuh semua raksasa yang mengganggu pertapaan Wismamitra." },
        {
          label: "Panel 5 — Adegan pertama",
          text: "Di kerajaan Mantilireja, memerintah Raja Janaka. Beliau mengadakan sayembara: barangsiapa dapat menarik dan mematahkan busur Prabu Janaka akan dikawinkan dengan putrinya yang sangat cantik bernama Sinta.",
        },
        { label: "Panel 5 — Adegan kedua", text: "Rama ikut ambil bagian dalam sayembara dan berhasil menarik serta mematahkan busur Prabu Janaka, disaksikan oleh Sinta dan para pengawalnya." },
      ],
    },
    {
      num: "06–08",
      Icon: f2,
      title: "Penobatan, Kaikeyi & Pengasingan ke Hutan",
      tag: "Ayodya · Hutan Dandaka · 14 Tahun",
      scenes: [
        { label: "Panel 6 — Adegan pertama", text: "Rama, Sinta, beserta Laksmana dalam perjalanan menuju negeri Ayodya." },
        { label: "Panel 6 — Adegan kedua & ketiga", text: "Di dalam perjalanan mereka bertemu dengan Rama Parasu. Dia minta kepada Rama agar membunuhnya dengan panahnya. Rama kemudian membunuh Rama Parasu dengan panahnya." },
        { label: "Panel 6 — Adegan keempat", text: "Raja Dasarata, karena merasa telah lanjut usia, ingin mewariskan tahta kerajaan kepada Rama. Raja dan permaisurinya serta para pembantunya sedang mempersiapkan pesta penobatan." },
        { label: "Panel 7 — Adegan pertama", text: "Penobatan Rama sebagai putra mahkota dilakukan oleh seorang pendeta. Di luar istana rakyat merayakan penobatan tersebut." },
        {
          label: "Panel 7 — Adegan kedua",
          text: "Istri kedua Kaikeyi, ibu Barata, membujuk sang Raja untuk membatalkan penobatan Rama sebagai raja, mengasingkannya ke dalam hutan selama empat belas tahun, dan mengangkat Barata sebagai penggantinya. Malam hari sebelum keberangkatan mereka, Rama dan Sinta berdoa di dalam candi.",
        },
        { label: "Panel 7 — Adegan ketiga", text: "Rama, Sinta, dan Laksmana pergi menuju hutan untuk menjalani pembuangan." },
        { label: "Panel 8", text: "Tidak lama kemudian, raja Dasarata wafat karena dukacita; jenazahnya diperabukan. Para brahmana dan permaisuri Kausalya membagi-bagikan dana kepada rakyat Ayodya." },
      ],
    },
    {
      num: "09–11",
      Icon: d2,
      title: "Barata & Sandal, Kehidupan di Hutan",
      tag: "Ayodya · Hutan Dandaka",
      scenes: [
        {
          label: "Panel 9",
          text: "Barata menolak untuk dinobatkan sebagai raja; dia pergi mencari Rama di hutan untuk membujuknya pulang ke istana dan memerintah kerajaan Ayodya. Akan tetapi Rama menolaknya dan memberikan sandal sebagai gantinya. Sandal tersebut agar ditaruh di atas singgasana, dan menyuruh Barata agar memerintah Ayodya atas nama Rama.",
        },
        { label: "Panel 10", text: "Sinta diganggu oleh dua raksasa, tetapi kedua raksasa tersebut berhasil dibunuh oleh Rama." },
        {
          label: "Panel 11",
          text: "Rama, Sinta, dan Laksmana tinggal di dalam gubuk. Pada suatu hari seekor burung gagak mencuri daging rusa yang sedang dijemur oleh Sinta. Rama membunuh burung gagak tersebut dengan memenggal kepalanya.",
        },
      ],
    },
    {
      num: "12–13",
      Icon: h2,
      title: "Sarpakenaka & Penculikan Sinta oleh Rawana",
      tag: "Hutan Dandaka · Alengka",
      scenes: [
        {
          label: "Panel 12 — Adegan pertama",
          text: "Raseksi Sarpakenaka, adik perempuan Rawana, yang menyamar sebagai wanita cantik, memberikan sesuatu kepada Rama dengan maksud agar Rama mau memperistrinya. Akan tetapi, Rama menolaknya dan menunjuk kepada Laksmana.",
        },
        {
          label: "Panel 12 — Adegan kedua",
          text: "Cinta Sarpakenaka juga ditolak oleh Laksmana; dengan maksud untuk mengusirnya Laksmana memotong daun telinga dan hidungnya. Kemudian, dia mengadu kepada saudaranya, Rawana, tentang penghinaan tersebut.",
        },
        { label: "Panel 12 — Adegan ketiga", text: "Sinta dijaga oleh Laksmana sewaktu Rama sedang memanah seekor kijang jelmaan Marica, raksasa pembantu Rawana." },
        {
          label: "Panel 13 — Adegan pertama",
          text: "Sinta berada di dalam gubuk seorang diri setelah Laksmana pergi mencari Rama atas perintahnya. Rawana yang menyamar sebagai pendeta mendekati Sinta untuk minta nasi. Ketika Sinta memberikan nasi, tangannya ditarik dengan paksa oleh Rawana.",
        },
        {
          label: "Panel 13 — Adegan ketiga",
          text: "Rawana berhasil menculik Sinta dan membawanya terbang ke angkasa. Di tengah perjalanan Rawana diserang oleh Jatayu untuk membebaskan Sinta. Jatayu kalah dalam pertempuran, tetapi dia berhasil menerima cincin Sinta.",
        },
        {
          label: "Panel 13 — Adegan keempat",
          text: "Rama dan Laksmana sangat sedih ketika mengetahui hilangnya Sinta, dan memutuskan mencarinya. Di dalam pengembaraannya mereka berjumpa dengan Jatayu yang hampir menemui ajalnya. Dia menceritakan apa yang telah terjadi, dan setelah memberi cincin kepada Rama, dia meninggal dunia.",
        },
        {
          label: "Panel 13 — Adegan kelima",
          text: "Rama dan Laksmana bertempur melawan raksasa Kabandha. Mereka berhasil mengalahkannya dan mengembalikannya kepada wujudnya yang semula. Kabandha adalah inkarnasi dewa yang dikutuk oleh dewa Siwa dan dihukum untuk hidup sebagai makhluk yang jelek.",
        },
      ],
    },
    {
      num: "14–16",
      Icon: m2,
      title: "Buaya Bidadari, Hanoman & Sugriwa",
      tag: "Hutan · Kiskenda",
      scenes: [
        {
          label: "Panel 14",
          text: "Rama dan Laksmana bertemu dengan seekor buaya yang sebenarnya inkarnasi seorang bidadari yang terkena kutukan oleh dewa. Setelah terkena panah Rama, dia berubah ke dalam wujudnya yang semula dan terbang ke surga.",
        },
        { label: "Panel 15", text: "Rama dan Laksmana bertemu dengan Hanoman, seekor kera putih. Dia memohon kepada mereka untuk menemui Sugriwa, raja kera." },
        {
          label: "Panel 16 — Adegan pertama & kedua",
          text: "Rama menyuruh Laksmana untuk mencari air. Laksmana menemukan air yang menetes dari atas pohon. Akan tetapi, rasanya asin, kemudian, diketahui bahwa air tersebut air mata raja kera Sugriwa yang menangis, karena terjepit.",
        },
        {
          label: "Panel 16 — Adegan ketiga",
          text: "Setelah dibantu oleh Rama dan Laksmana turun dari pohon, Sugriwa minta kepada Rama untuk membantu dia menaklukkan Subali yang telah merebut kerajaan dan istrinya dengan paksa. Pada gilirannya Sugriwa akan membantu Rama untuk mendapatkan kembali Sinta dari Alengka.",
        },
      ],
    },
    {
      num: "17–19",
      Icon: p2,
      title: "Subali Gugur & Sugriwa Naik Tahta Kiskenda",
      tag: "Kiskenda · Hutan",
      scenes: [
        { label: "Panel 17", text: "Untuk meyakinkan Sugriwa atas kesaktian Rama, Rama memanah dengan sebatang anak panah yang dapat memotong tujuh pohon palem." },
        { label: "Panel 18 — Adegan pertama", text: "Setiba Rama, Laksmana, dan Sugriwa di Kiskenda, mereka menyusun strategi untuk menyerang Subali. Rama menyuruh Sugriwa untuk menantang Subali." },
        { label: "Panel 18 — Adegan kedua", text: "Terjadi perang sangat seru antara Subali dan Sugriwa. Rama memanah Subali; Subali mati terbunuh." },
        { label: "Panel 18 — Adegan ketiga", text: "Sugriwa kembali naik tahta Kiskenda, dan Anggada anak Subali diangkat sebagai putra mahkota. Sugriwa disambut oleh para kera." },
        { label: "Panel 19 — Adegan pertama & kedua", text: "Rama, Laksmana, dan Sugriwa dalam perjalanan ke suatu tempat perundingan. Mereka sedang berunding untuk merencanakan dan mengatur siasat dalam rangka penyerangan ke Alengka." },
        {
          label: "Panel 19 — Adegan ketiga & keempat",
          text: "Sugriwa mengusulkan kepada Rama agar mau mengirim utusan, yaitu Hanoman, untuk mencari Sinta di Alengka. Hanoman pergi ke Alengka dengan jalan melompat dari gunung Mahameru untuk menyeberangi laut. Sesampainya di Alengka, dia mengamati situasi istana Rawana dan mencari dari atas atap tempat Sinta tinggal.",
        },
      ],
    },
    {
      num: "20–24",
      Icon: g2,
      title: "Hanoman di Alengka & Jembatan Karang",
      tag: "Taman Asoka · Alengka · Selat",
      scenes: [
        {
          label: "Panel 20 — Adegan pertama",
          text: "Hanoman berada di dalam taman istana Rawana, tempat Sinta disekap. Dia mengintip Sinta dari atas pohon — Sinta sedang duduk di taman ditemani oleh Trijata keponakan Rawana. Seorang dayang menemukan dia dan melaporkan bahwa ada seekor kera bersembunyi di taman.",
        },
        { label: "Panel 20 — Adegan kedua", text: "Hanoman menghadap Sinta dan memberitahukan tujuan kedatangannya dan bahwa Rama akan segera datang untuk menjemput Sinta pulang." },
        { label: "Panel 21 — Adegan pertama", text: "Kedatangan Hanoman diketahui oleh para pengawal kerajaan Alengka, dan dia ditangkap. Dia diikat dengan tali dan ekornya dibakar." },
        {
          label: "Panel 21 — Adegan kedua",
          text: "Akan tetapi, Hanoman dapat melepaskan diri. Dengan ekornya terbakar, dia melompat ke atas atap yang satu ke atap lainnya sambil membakarnya. Dalam waktu sekejap saja seluruh kota Alengka terbakar.",
        },
        { label: "Panel 22", text: "Hanoman kembali ke Kiskenda, diterima oleh Rama, Laksmana, dan Sugriwa. Hanoman melaporkan kepada mereka tugasnya di Alengka." },
        {
          label: "Panel 23",
          text: "Rama akan mengeringkan laut untuk jalan menuju Alengka. Dewa laut merasa takut; kemudian, ia memohon kepada Rama agar membatalkan niatnya tersebut dan menyarankan kepadanya untuk membuat jembatan dari pantai ke Alengka.",
        },
        { label: "Panel 24 — Adegan pertama", text: "Rama, Laksmana, dan Sugriwa menyaksikan para kera sedang membuat jembatan, dibantu oleh ikan dan dewa laut." },
        { label: "Panel 24 — Adegan kedua", text: "Rama, Laksmana, Sugriwa, dan bala tentara kera sedang melewati jembatan menuju Alengka." },
      ],
    },
  ],
  y2 = [
    { label: "Nama Resmi", value: "Candi Siwa", note: "berdasarkan arca Siwa Mahadewa di bilik utama" },
    { label: "Nama Populer", value: "Lara Jonggrang", note: "dari legenda putri yang dikutuk menjadi arca oleh Bandung Bondowoso" },
    { label: "Nama Lokal Lama", value: "Loro Jonggrang", note: "dari kata Jawa 'lara' (perawan) atau 'loro' (dua)" },
    { label: "Sebutan Barat", value: "Prambanan", note: "diambil dari nama desa/dusun di dekat kompleks candi" },
  ];
function _2() {
  const [o, c] = R.useState(null);
  return m.jsx("section", {
    id: "relief",
    style: { background: "var(--bg-5)", padding: "80px 0" },
    children: m.jsxs("div", {
      className: "main-container",
      children: [
        m.jsxs("div", {
          className: "reveal",
          style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, gap: 40, flexWrap: "wrap" },
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Konten Digital Heritage" }),
                m.jsxs("h2", {
                  style: { margin: 0, color: "var(--dark)", maxWidth: 520 },
                  children: ["Relief Ramayana", m.jsx("br", {}), m.jsx("em", { style: { fontFamily: "var(--font-heading-serif)", fontWeight: 400, color: "var(--dark-64)", fontSize: "0.85em" }, children: "Candi Siwa Prambanan" })],
                }),
              ],
            }),
            m.jsx("p", {
              className: "text-large",
              style: { maxWidth: 380, color: "var(--dark-64)", marginTop: 12, alignSelf: "flex-end" },
              children: "42 panel terpahat pada dinding pagar langkan Candi Siwa sepanjang lebih dari 100 meter — karya seni batu terbesar dunia kuno yang masih dapat dibaca.",
            }),
          ],
        }),
        m.jsxs("div", {
          className: "reveal delay-1",
          style: { background: "var(--dark)", borderRadius: "var(--radius-card)", padding: "48px", marginBottom: 64, position: "relative", overflow: "hidden" },
          children: [
            m.jsx("div", {
              style: {
                position: "absolute",
                right: 32,
                top: -8,
                fontFamily: "var(--font-heading-sans)",
                fontSize: 160,
                fontWeight: 500,
                letterSpacing: "-6px",
                lineHeight: 1,
                color: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
                userSelect: "none",
              },
            }),
            m.jsx("div", { className: "label", style: { color: "rgba(235,232,219,0.35)", marginBottom: 20 }, children: "Bab I — Identitas Candi" }),
            m.jsx("h3", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 32, fontWeight: 500, letterSpacing: "-1px", color: "var(--bg-1)", marginBottom: 24, maxWidth: 520 }, children: "Candi Siwa atau Candi Lara Jonggrang?" }),
            m.jsxs("div", {
              style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 },
              children: [
                m.jsxs("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "rgba(235,232,219,0.7)", margin: 0 },
                  children: [
                    "Nama ",
                    m.jsx("em", { children: "Lara Jonggrang" }),
                    " melekat pada candi utama Prambanan berkat sebuah legenda yang hidup di kalangan rakyat Jawa dan Bali: seorang putri cantik bernama Rara Jonggrang yang meminta Bandung Bondowoso membangun seribu candi dalam satu malam. Ketika gagal ia menggagalkan pekerjaan itu, Bandung Bondowoso mengutuk Rara Jonggrang menjadi arca batu — jadilah arca Durga Mahisasuramardini yang kini berdiri di bilik utara Candi Siwa.",
                  ],
                }),
                m.jsxs("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "rgba(235,232,219,0.7)", margin: 0 },
                  children: [
                    "Secara arkeologis, nama yang tepat adalah ",
                    m.jsx("strong", { style: { color: "var(--bg-1)" }, children: "Candi Siwa" }),
                    " — merujuk pada arca utama Siwa Mahadewa setinggi tiga meter di bilik utama. Candi ini dibangun sekitar tahun 850 Masehi pada masa pemerintahan Rakai Pikatan dari Dinasti Sanjaya, dan merupakan candi Hindu terbesar di Asia Tenggara. Ditetapkan sebagai Situs Warisan Dunia UNESCO pada tahun 1991.",
                  ],
                }),
              ],
            }),
            m.jsx("div", {
              style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid rgba(235,232,219,0.1)" },
              children: y2.map((f, h, g) =>
                m.jsxs(
                  "div",
                  {
                    style: { padding: "20px 20px 20px 0", borderRight: h < g.length - 1 ? "1px solid rgba(235,232,219,0.1)" : "none", paddingLeft: h > 0 ? 20 : 0 },
                    children: [
                      m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(235,232,219,0.3)", marginBottom: 6 }, children: f.label }),
                      m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 16, fontWeight: 500, letterSpacing: "-0.3px", color: "var(--yellow)", marginBottom: 4 }, children: f.value }),
                      m.jsx("div", { style: { fontFamily: "var(--font-body)", fontSize: 11, lineHeight: 1.5, color: "rgba(235,232,219,0.4)", fontStyle: "italic" }, children: f.note }),
                    ],
                  },
                  f.label,
                ),
              ),
            }),
          ],
        }),
        m.jsxs("div", {
          className: "reveal delay-2",
          style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 64 },
          children: [
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Arsitektur Candi" }),
                m.jsxs("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--dark-64)", margin: "0 0 16px" },
                  children: [
                    "Candi Siwa menjulang 47 meter, bertumpu pada batur berundak dengan denah bujur sangkar 34 × 34 meter. Empat bilik menghadap ke empat arah: bilik utama (barat) — ",
                    m.jsx("strong", { children: "Siwa Mahadewa" }),
                    "; utara — ",
                    m.jsx("strong", { children: "Durga Mahisasuramardini" }),
                    "; selatan — ",
                    m.jsx("strong", { children: "Agastya" }),
                    "; timur — ",
                    m.jsx("strong", { children: "Ganesha" }),
                    ".",
                  ],
                }),
                m.jsx("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--dark-64)", margin: 0 },
                  children:
                    "Seluruh badan candi dikelilingi deretan ratna (menara kecil) dan motif hias kala-makara, naga, serta kinara-kinari. Pada kaki candi terpahat deretan panel relief Ramayana yang mengular mengelilingi lorong pradaksina.",
                }),
              ],
            }),
            m.jsxs("div", {
              children: [
                m.jsx("div", { className: "label", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Relief Ramayana pada Pagar Langkan" }),
                m.jsxs("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--dark-64)", margin: "0 0 16px" },
                  children: [
                    "Kisah Ramayana dipahatkan pada dinding pagar langkan (pagar selasar) Candi Siwa dalam ",
                    m.jsx("strong", { children: "42 panel" }),
                    " berurutan, dibaca searah jarum jam (pradaksina). Setiap panel diukir pada batu andesit — totalnya membentang lebih dari ",
                    m.jsx("strong", { children: "100 meter" }),
                    ".",
                  ],
                }),
                m.jsx("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--dark-64)", margin: 0 },
                  children:
                    'Kisah yang dipahatkan mengikuti versi Ramayana Kakawin adaptasi pujangga Jawa. Kelanjutan episode diteruskan pada pagar langkan Candi Brahma, menjadikan seluruh kompleks sebagai "buku batu" yang dapat dibaca sambil berjalan pradaksina.',
                }),
              ],
            }),
          ],
        }),
        m.jsx("div", {
          className: "reveal delay-2",
          style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: 64, border: "1px dashed var(--dark-32)", borderRadius: "var(--radius-card)", overflow: "hidden" },
          children: [
            { val: "42", lbl: "Panel Relief" },
            { val: "100m+", lbl: "Panjang Lorong" },
            { val: "850 M", lbl: "Masa Pembuatan" },
            { val: "Andesit", lbl: "Material Batu" },
          ].map((f, h, g) =>
            m.jsxs(
              "div",
              {
                style: { padding: "28px 24px", borderRight: h < g.length - 1 ? "1px dashed var(--dark-32)" : "none", textAlign: "center" },
                children: [
                  m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 40, fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--dark)", marginBottom: 6 }, children: f.val }),
                  m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)" }, children: f.lbl }),
                ],
              },
              f.lbl,
            ),
          ),
        }),
        m.jsxs("div", {
          className: "reveal delay-3",
          children: [
            m.jsx("div", {
              style: { borderTop: "1px dashed var(--dark-32)", paddingTop: 32, marginBottom: 32 },
              children: m.jsx("div", { className: "label", style: { color: "var(--dark-32)" }, children: "Deskripsi Adegan · Pagar Langkan Candi Siwa" }),
            }),
            m.jsxs("div", {
              style: { display: "flex", flexDirection: "column" },
              children: [
                v2.map((f, h) => {
                  const g = o === h;
                  return m.jsxs(
                    "div",
                    {
                      style: { borderTop: "1px dashed var(--dark-32)" },
                      children: [
                        m.jsxs("button", {
                          onClick: () => c(g ? null : h),
                          style: { width: "100%", display: "flex", alignItems: "center", gap: 24, padding: "24px 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" },
                          children: [
                            m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "1px", color: "var(--dark-32)", flexShrink: 0, width: 44 }, children: f.num }),
                            m.jsx("div", {
                              style: {
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                background: g ? "var(--dark)" : "var(--dark-8)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                transition: "background 0.25s",
                                color: g ? "var(--yellow)" : "var(--dark-64)",
                              },
                              children: m.jsx(f.Icon, {}),
                            }),
                            m.jsxs("div", {
                              style: { flex: 1 },
                              children: [
                                m.jsx("h4", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.5px", color: "var(--dark)", margin: 0 }, children: f.title }),
                                m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginTop: 4 }, children: f.tag }),
                              ],
                            }),
                            m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--dark-32)", flexShrink: 0, transition: "transform 0.25s", transform: g ? "rotate(45deg)" : "rotate(0deg)" }, children: "+" }),
                          ],
                        }),
                        g &&
                          m.jsxs("div", {
                            style: { padding: "0 0 32px 116px" },
                            children: [
                              m.jsx("div", {
                                style: { display: "flex", flexDirection: "column", gap: 20 },
                                children: f.scenes.map((y, _) =>
                                  m.jsxs(
                                    "div",
                                    {
                                      style: { display: "flex", gap: 16 },
                                      children: [
                                        m.jsx("div", {
                                          style: { flexShrink: 0, paddingTop: 3 },
                                          children: m.jsx("div", {
                                            style: {
                                              fontFamily: "var(--font-ui)",
                                              fontSize: 8,
                                              letterSpacing: "0.8px",
                                              textTransform: "uppercase",
                                              color: "var(--dark-32)",
                                              border: "1px dashed var(--dark-16)",
                                              borderRadius: "var(--radius-pill)",
                                              padding: "3px 10px",
                                              whiteSpace: "nowrap",
                                            },
                                            children: y.label,
                                          }),
                                        }),
                                        m.jsx("p", { style: { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--dark-64)", margin: 0, maxWidth: 560 }, children: y.text }),
                                      ],
                                    },
                                    _,
                                  ),
                                ),
                              }),
                              m.jsxs("div", {
                                style: { display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" },
                                children: [
                                  m.jsxs("span", {
                                    style: {
                                      fontFamily: "var(--font-ui)",
                                      fontSize: 9,
                                      letterSpacing: "1px",
                                      textTransform: "uppercase",
                                      border: "1px dashed var(--dark-32)",
                                      borderRadius: "var(--radius-pill)",
                                      padding: "4px 12px",
                                      color: "var(--dark-64)",
                                    },
                                    children: ["Panel ", f.num],
                                  }),
                                  m.jsx("span", {
                                    style: {
                                      fontFamily: "var(--font-ui)",
                                      fontSize: 9,
                                      letterSpacing: "1px",
                                      textTransform: "uppercase",
                                      border: "1px dashed var(--dark-32)",
                                      borderRadius: "var(--radius-pill)",
                                      padding: "4px 12px",
                                      color: "var(--dark-64)",
                                    },
                                    children: "Pagar Langkan · Candi Siwa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    },
                    f.num,
                  );
                }),
                m.jsx("div", { style: { borderTop: "1px dashed var(--dark-32)" } }),
              ],
            }),
          ],
        }),
        m.jsxs("div", {
          className: "reveal",
          style: { marginTop: 48, padding: "24px 28px", background: "var(--bg-3)", borderRadius: "var(--radius-card)", border: "1px dashed var(--dark-16)", display: "flex", gap: 20, alignItems: "flex-start" },
          children: [
            m.jsx("div", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--acc-3)", flexShrink: 0, marginTop: 6 } }),
            m.jsxs("div", {
              children: [
                m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: "var(--dark-32)", marginBottom: 6 }, children: "Catatan" }),
                m.jsx("p", {
                  style: { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--dark-64)", margin: 0 },
                  children:
                    "Panel relief 25 – 42 yang melanjutkan kisah (babak perang di Alengka hingga Agni Pariksha) serta kelanjutan Uttarakanda dipahatkan pada pagar langkan Candi Brahma di sebelah selatan. Untuk membaca seluruh epos secara utuh, pengunjung meneruskan pradaksina dari Candi Siwa ke Candi Brahma.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const x2 = [
    { label: "Pengenalan", href: "#tentang" },
    { label: "Pengambilan Data", href: "#data" },
    { label: "WebGIS Peta", href: "#peta" },
    { label: "Virtual Tour 3D", href: "#tour" },
    { label: "Relief Ramayana", href: "#relief" },
  ],
  b2 = ["LiDAR", "Fotogrametri", "GNSS / RTK", "TLS", "Drone UAV", "Total Station", "Kamera 360°", "Kamera RGB"];
function w2() {
  return m.jsxs("footer", {
    style: { background: "var(--yellow)", position: "relative", marginTop: -8 },
    children: [
      m.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 8, background: "var(--bg-5)", borderRadius: "0 0 0 0" } }),
      m.jsxs("div", {
        className: "main-container",
        style: { padding: "48px var(--site-pad) 20px" },
        children: [
          m.jsxs("div", {
            style: { display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 40 },
            children: [
              m.jsxs("div", {
                children: [
                  m.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 },
                    children: [
                      m.jsx("div", {
                        style: { width: 36, height: 36, borderRadius: "50%", background: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
                        children: m.jsxs("svg", {
                          width: "17",
                          height: "19",
                          viewBox: "0 0 16 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            m.jsx("rect", { x: "7", y: "0", width: "2", height: "2", rx: "1", fill: "#ffda3d" }),
                            m.jsx("rect", { x: "6", y: "2", width: "4", height: "2", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "5", y: "4", width: "6", height: "2", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "4", y: "6", width: "8", height: "2", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "3", y: "8", width: "10", height: "3", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "1", y: "11", width: "14", height: "2.5", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "0", y: "13.5", width: "16", height: "3", rx: "0.5", fill: "#ebe8db" }),
                            m.jsx("rect", { x: "1", y: "16.5", width: "14", height: "3.5", rx: "0", fill: "#ebe8db" }),
                          ],
                        }),
                      }),
                      m.jsxs("div", {
                        children: [
                          m.jsx("div", { style: { fontFamily: "var(--font-heading-sans)", fontSize: 15, fontWeight: 500, letterSpacing: "-0.4px", color: "var(--dark)" }, children: "Candi Siwa · WebGIS" }),
                          m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "1.2px", textTransform: "uppercase", color: "var(--dark-64)", marginTop: 2 }, children: "Prambanan · UNESCO WHS" }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx("p", {
                    style: { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--dark-64)", margin: "0 0 16px", maxWidth: 280, fontStyle: "italic" },
                    children: "Platform WebGIS berbasis model HBIM yang memadukan data multi-sensor untuk eksplorasi digital Candi Siwa Prambanan secara komprehensif.",
                  }),
                  m.jsx("div", {
                    style: { display: "flex", gap: 6, flexWrap: "wrap" },
                    children: ["UNESCO 1991", "HBIM", "Multi-Sensor", "SV UGM"].map((o) =>
                      m.jsx(
                        "span",
                        {
                          style: {
                            fontFamily: "var(--font-ui)",
                            fontSize: 9,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            border: "1px solid var(--dark-32)",
                            borderRadius: "var(--radius-pill)",
                            padding: "3px 10px",
                            color: "var(--dark-64)",
                          },
                          children: o,
                        },
                        o,
                      ),
                    ),
                  }),
                ],
              }),
              m.jsxs("div", {
                children: [
                  m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Navigasi" }),
                  x2.map((o) =>
                    m.jsx(
                      "a",
                      {
                        href: o.href,
                        style: { display: "block", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--dark-64)", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" },
                        onMouseEnter: (c) => (c.currentTarget.style.color = "var(--dark)"),
                        onMouseLeave: (c) => (c.currentTarget.style.color = "var(--dark-64)"),
                        children: o.label,
                      },
                      o.label,
                    ),
                  ),
                ],
              }),
              m.jsxs("div", {
                children: [
                  m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Sensor Akuisisi" }),
                  b2.map((o) => m.jsx("div", { style: { fontFamily: "var(--font-body)", fontSize: 13, color: "var(--dark-64)", marginBottom: 6 }, children: o }, o)),
                ],
              }),
              m.jsxs("div", {
                children: [
                  m.jsx("div", { className: "label-small", style: { color: "var(--dark-32)", marginBottom: 16 }, children: "Lokasi" }),
                  m.jsxs("div", {
                    style: { background: "var(--dark)", borderRadius: "var(--radius-card)", padding: "20px", color: "var(--bg-2)" },
                    children: [
                      m.jsx("div", { style: { fontFamily: "var(--font-heading-serif)", fontSize: 22, letterSpacing: "-1px", lineHeight: 1.2, marginBottom: 12 }, children: "Kompleks Candi Prambanan" }),
                      m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.8px", color: "rgba(235,232,219,0.5)", marginBottom: 4 }, children: "Sleman, D.I. Yogyakarta, Indonesia" }),
                      m.jsx("div", {
                        style: { fontFamily: "var(--font-ui)", fontSize: 12, letterSpacing: "0.5px", color: "var(--yellow)", marginTop: 8, padding: "6px 0", borderTop: "1px dashed rgba(235,232,219,0.15)" },
                        children: "7°45'7″S · 110°29'29″E",
                      }),
                      m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.8px", color: "rgba(235,232,219,0.3)", marginTop: 4 }, children: "Elevasi ±154 m dpl" }),
                    ],
                  }),
                  m.jsx("div", { style: { marginTop: 16 }, children: m.jsx("a", { href: "#peta", className: "btn-primary", style: { width: "100%", justifyContent: "center" }, children: "Buka WebGIS →" }) }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            style: { borderTop: "1px solid var(--dark-16)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 },
            children: [
              m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.5px", color: "var(--dark-64)" }, children: "© 2026 Proyek Akhir TSPD · Sekolah Vokasi UGM" }),
              m.jsx("div", { style: { fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.5px", color: "var(--dark-32)" }, children: "Leaflet.js · OpenStreetMap · Esri World Imagery · OpenTopoMap" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function S2() {
  R.useEffect(() => {
    const o = new IntersectionObserver(
      (f) => {
        f.forEach((h) => {
          h.isIntersecting && h.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    return (document.querySelectorAll(".reveal").forEach((f) => o.observe(f)), () => o.disconnect());
  }, []);
}
function lg() {
  return (
    S2(),
    R.useEffect(() => {
      const o = document.createElement("link");
      return (
        (o.rel = "stylesheet"),
        (o.href = "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Instrument+Sans:wght@400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap"),
        document.head.appendChild(o),
        () => {
          try {
            document.head.removeChild(o);
          } catch {}
        }
      );
    }, []),
    R.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    m.jsxs("div", { style: { fontFamily: "'Instrument Sans', sans-serif", overflowX: "hidden" }, children: [m.jsx(j1, {}), m.jsx(D1, {}), m.jsx(B1, {}), m.jsx(K1, {}), m.jsx(r2, {}), m.jsx(l2, {}), m.jsx(_2, {}), m.jsx(w2, {})] })
  );
}
const Vv = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("rounded-xl border bg-card text-card-foreground shadow", o), ...c }));
Vv.displayName = "Card";
const k2 = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("flex flex-col space-y-1.5 p-6", o), ...c }));
k2.displayName = "CardHeader";
const T2 = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("font-semibold leading-none tracking-tight", o), ...c }));
T2.displayName = "CardTitle";
const E2 = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("text-sm text-muted-foreground", o), ...c }));
E2.displayName = "CardDescription";
const Yv = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("p-6 pt-0", o), ...c }));
Yv.displayName = "CardContent";
const A2 = R.forwardRef(({ className: o, ...c }, f) => m.jsx("div", { ref: f, className: xn("flex items-center p-6 pt-0", o), ...c }));
A2.displayName = "CardFooter";
function C2() {
  return m.jsx("div", {
    className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: m.jsx(Vv, {
      className: "w-full max-w-md mx-4",
      children: m.jsxs(Yv, {
        className: "pt-6",
        children: [
          m.jsxs("div", { className: "flex mb-4 gap-2", children: [m.jsx(ix, { className: "h-8 w-8 text-red-500" }), m.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" })] }),
          m.jsx("p", { className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" }),
        ],
      }),
    }),
  });
}
function M2() {
  return m.jsxs(B_, { children: [m.jsx(Wf, { path: "/webgis-siwa", component: lg }), m.jsx(Wf, { path: "/index.html", component: lg }), m.jsx(Wf, { path: "/ProyekAkhir_WebGIS_Siwa", component: lg }), m.jsx(Wf, { path: "/ProyekAkhir_WebGIS_Siwa/", component: lg }), m.jsx(Wf, { component: C2 })] });
}
function L2() {
  return m.jsxs(R1, { children: [m.jsx(_g, { base: "/".replace(/\/$/, ""), children: m.jsx(M2, {}) }), m.jsx(ib, {})] });
}
g_.createRoot(document.getElementById("root")).render(m.jsx(L2, {}));
