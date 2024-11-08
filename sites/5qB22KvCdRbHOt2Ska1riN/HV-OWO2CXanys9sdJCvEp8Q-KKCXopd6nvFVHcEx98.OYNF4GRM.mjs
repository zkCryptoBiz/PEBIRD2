import {
  fa as $,
  N as $e,
  ca as $t,
  l as A,
  T as B,
  Z as D,
  V as Er,
  pa as Ge,
  _ as H,
  v as I,
  L as J,
  D as Jt,
  aa as K,
  b as Ke,
  ba as Kt,
  qa as Lr,
  A as Me,
  F as Or,
  p as P,
  Aa as Pr,
  g as Q,
  o as Qt,
  y as U,
  z as Ue,
  q as V,
  ua as W,
  m as X,
  B as Xt,
  W as Y,
  h as Yt,
  n as Zt,
  k as ae,
  O as be,
  u as c,
  na as ea,
  ya as ee,
  Q as f,
  za as ie,
  E as it,
  da as ke,
  x as l,
  X as lt,
  r as me,
  Y as ne,
  f as nt,
  ra as oe,
  w as ot,
  c as p,
  ma as pe,
  d as pr,
  t as r,
  sa as ra,
  xa as se,
  ta as st,
  va as w,
  j as ze,
  C as zr,
} from './chunk-6PKFGRF7.mjs';
import { a as dt } from './chunk-7DCP4TKQ.mjs';
import {
  b as Ja,
  f as g,
  c as navigator,
  d as window,
} from './chunk-ENK4YSX5.mjs';
import { a as ft } from './chunk-ZJOOARMV.mjs';
g();
g();
g();
g();
g();
var ta = (e, t, a) => Math.min(Math.max(a, e), t);
var _r = (e) => typeof e == 'number',
  ct = (e) => Array.isArray(e) && !_r(e[0]),
  Ka = (e, t, a) => {
    let n = t - e;
    return ((((a - e) % n) + n) % n) + e;
  };
function aa(e, t) {
  return ct(e) ? e[Ka(0, e.length, t)] : e;
}
var mt = (e, t, a) => -a * e + a * t + e;
var _e = (e) => e,
  Ar = (e, t, a) => (t - e === 0 ? 1 : (a - e) / (t - e));
function pt(e, t) {
  let a = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    let o = Ar(0, t, n);
    e.push(mt(a, 1, o));
  }
}
function ut(e) {
  let t = [0];
  return pt(t, e - 1), t;
}
function ht(e, t = ut(e.length), a = _e) {
  let n = e.length,
    o = n - t.length;
  return (
    o > 0 && pt(t, o),
    (i) => {
      let s = 0;
      for (; s < n - 2 && !(i < t[s + 1]); s++);
      let m = ta(0, 1, Ar(t[s], t[s + 1], i));
      return (m = aa(a, s)(m)), mt(e[s], e[s + 1], m);
    }
  );
}
var gt = (e) => typeof e == 'string',
  Ir = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function Dr(e, t) {
  return t ? e * (1e3 / t) : 0;
}
g();
g();
var na = (e, t, a) =>
    (((1 - 3 * a + 3 * t) * e + (3 * a - 6 * t)) * e + 3 * t) * e,
  $a = 1e-7,
  en = 12;
function rn(e, t, a, n, o) {
  let i,
    s,
    m = 0;
  do (s = t + (a - t) / 2), (i = na(s, n, o) - e), i > 0 ? (a = s) : (t = s);
  while (Math.abs(i) > $a && ++m < en);
  return s;
}
function ur(e, t, a, n) {
  if (e === t && a === n) return _e;
  let o = (i) => rn(i, 0, 1, e, a);
  return (i) => (i === 0 || i === 1 ? i : na(o(i), t, n));
}
var gs = {
  ease: ur(0.25, 0.1, 0.25, 1),
  'ease-in': ur(0.42, 0, 1, 1),
  'ease-in-out': ur(0.42, 0, 0.58, 1),
  'ease-out': ur(0, 0, 0.58, 1),
};
g();
function xt(e, t) {
  var a = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (a[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (a[n[o]] = e[n[o]]);
  }
  return a;
}
g();
var ir = {};
Object.defineProperty(ir, '__esModule', { value: !0 });
ir.warning = function () {};
ir.invariant = function () {};
var ws = ir.__esModule,
  Rs = ir.warning,
  on = ir.invariant;
g();
var ln = 5;
function jr(e, t, a) {
  let n = Math.max(t - ln, 0);
  return Dr(a - e(n), t - n);
}
var lr = { stiffness: 100, damping: 10, mass: 1 },
  sn = (e = lr.stiffness, t = lr.damping, a = lr.mass) =>
    t / (2 * Math.sqrt(e * a));
function fn(e, t, a) {
  return (e < t && a >= t) || (e > t && a <= t);
}
var yt = ({
    stiffness: e = lr.stiffness,
    damping: t = lr.damping,
    mass: a = lr.mass,
    from: n = 0,
    to: o = 1,
    velocity: i = 0,
    restSpeed: s = 2,
    restDistance: m = 0.5,
  } = {}) => {
    i = i ? Ir.s(i) : 0;
    let b = { done: !1, hasReachedTarget: !1, current: n, target: o },
      d = o - n,
      u = Math.sqrt(e / a) / 1e3,
      h = sn(e, t, a),
      v;
    if (h < 1) {
      let M = u * Math.sqrt(1 - h * h);
      v = (y) =>
        o -
        Math.exp(-h * u * y) *
          (((h * u * d - i) / M) * Math.sin(M * y) + d * Math.cos(M * y));
    } else v = (M) => o - Math.exp(-u * M) * (d + (u * d - i) * M);
    return (M) => {
      b.current = v(M);
      let y = M === 0 ? i : jr(v, M, b.current),
        T = Math.abs(y) <= s,
        R = Math.abs(o - b.current) <= m;
      return (b.done = T && R), (b.hasReachedTarget = fn(n, o, b.current)), b;
    };
  },
  oa = ({
    from: e = 0,
    velocity: t = 0,
    power: a = 0.8,
    decay: n = 0.325,
    bounceDamping: o,
    bounceStiffness: i,
    changeTarget: s,
    min: m,
    max: b,
    restDistance: d = 0.5,
    restSpeed: u,
  }) => {
    n = Ir.ms(n);
    let h = { hasReachedTarget: !1, done: !1, current: e, target: e },
      v = (G) => (m !== void 0 && G < m) || (b !== void 0 && G > b),
      M = (G) =>
        m === void 0
          ? b
          : b === void 0 || Math.abs(m - G) < Math.abs(b - G)
          ? m
          : b,
      y = a * t,
      T = e + y,
      R = s === void 0 ? T : s(T);
    (h.target = R), R !== T && (y = R - e);
    let x = (G) => -y * Math.exp(-G / n),
      C = (G) => R + x(G),
      S = (G) => {
        let O = x(G),
          j = C(G);
        (h.done = Math.abs(O) <= d), (h.current = h.done ? R : j);
      },
      N,
      z,
      L = (G) => {
        v(h.current) &&
          ((N = G),
          (z = yt({
            from: h.current,
            to: M(h.current),
            velocity: jr(C, G, h.current),
            damping: o,
            stiffness: i,
            restDistance: d,
            restSpeed: u,
          })));
      };
    return (
      L(0),
      (G) => {
        let O = !1;
        return (
          !z && N === void 0 && ((O = !0), S(G), L(G)),
          N !== void 0 && G > N
            ? ((h.hasReachedTarget = !0), z(G - N))
            : ((h.hasReachedTarget = !1), !O && S(G), h)
        );
      }
    );
  },
  bt = 10,
  dn = 1e4;
function ia(e, t = _e) {
  let a,
    n = bt,
    o = e(0),
    i = [t(o.current)];
  for (; !o.done && n < dn; )
    (o = e(n)),
      i.push(t(o.done ? o.target : o.current)),
      a === void 0 && o.hasReachedTarget && (a = n),
      (n += bt);
  let s = n - bt;
  return (
    i.length === 1 && i.push(o.current),
    { keyframes: i, duration: s / 1e3, overshootDuration: (a ?? s) / 1e3 }
  );
}
var cn = ['', 'X', 'Y', 'Z'],
  mn = ['translate', 'scale', 'rotate', 'skew'];
var la = {
    syntax: '<angle>',
    initialValue: '0deg',
    toDefaultUnit: (e) => e + 'deg',
  },
  pn = {
    translate: {
      syntax: '<length-percentage>',
      initialValue: '0px',
      toDefaultUnit: (e) => e + 'px',
    },
    rotate: la,
    scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: _e },
    skew: la,
  },
  un = new Map(),
  hn = (e) => `--motion-${e}`,
  xa = ['x', 'y', 'z'];
mn.forEach((e) => {
  cn.forEach((t) => {
    xa.push(e + t), un.set(hn(e + t), pn[e]);
  });
});
var Ds = new Set(xa);
var sa = (e) => document.createElement('div').animate(e, { duration: 0.001 }),
  fa = {
    cssRegisterProperty: () =>
      typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
    partialKeyframes: () => {
      try {
        sa({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!sa({ opacity: [0, 1] }).finished,
  },
  vt = {},
  gn = {};
for (let e in fa) gn[e] = () => (vt[e] === void 0 && (vt[e] = fa[e]()), vt[e]);
function ba(e, t) {
  var a;
  return (
    typeof e == 'string'
      ? t
        ? (((a = t[e]) !== null && a !== void 0) ||
            (t[e] = document.querySelectorAll(e)),
          (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function ya(e) {
  let t = new WeakMap();
  return (a = {}) => {
    let n = new Map(),
      o = (s = 0, m = 100, b = 0, d = !1) => {
        let u = `${s}-${m}-${b}-${d}`;
        return (
          n.has(u) ||
            n.set(
              u,
              e(
                Object.assign(
                  {
                    from: s,
                    to: m,
                    velocity: b,
                    restSpeed: d ? 0.05 : 2,
                    restDistance: d ? 0.01 : 0.5,
                  },
                  a
                )
              )
            ),
          n.get(u)
        );
      },
      i = (s) => (t.has(s) || t.set(s, ia(s)), t.get(s));
    return {
      createAnimation: (s, m, b, d, u) => {
        var h, v;
        let M,
          y = s.length;
        if (b && y <= 2 && s.every(xn)) {
          let R = s[y - 1],
            x = y === 1 ? null : s[0],
            C = 0,
            S = 0,
            N = u?.generator;
          if (N) {
            let { animation: G, generatorStartTime: O } = u,
              j = G?.startTime || O || 0,
              E = G?.currentTime || performance.now() - j,
              re = N(E).current;
            (S = (h = x) !== null && h !== void 0 ? h : re),
              (y === 1 || (y === 2 && s[0] === null)) &&
                (C = jr((de) => N(de).current, E, re));
          } else S = (v = x) !== null && v !== void 0 ? v : parseFloat(m());
          let z = o(S, R, C, d?.includes('scale')),
            L = i(z);
          (M = Object.assign(Object.assign({}, L), { easing: 'linear' })),
            u &&
              ((u.generator = z), (u.generatorStartTime = performance.now()));
        } else M = { easing: 'ease', duration: i(o(0, 100)).overshootDuration };
        return M;
      },
    };
  };
}
var xn = (e) => typeof e != 'string',
  js = ya(yt),
  Bs = ya(oa),
  bn = { any: 0, all: 1 };
function yn(e, t, { root: a, margin: n, amount: o = 'any' } = {}) {
  if (typeof IntersectionObserver > 'u') return () => {};
  let i = ba(e),
    s = new WeakMap(),
    m = (d) => {
      d.forEach((u) => {
        let h = s.get(u.target);
        if (u.isIntersecting !== !!h)
          if (u.isIntersecting) {
            let v = t(u);
            typeof v == 'function' ? s.set(u.target, v) : b.unobserve(u.target);
          } else h && (h(u), s.delete(u.target));
      });
    },
    b = new IntersectionObserver(m, {
      root: a,
      rootMargin: n,
      threshold: typeof o == 'number' ? o : bn[o],
    });
  return i.forEach((d) => b.observe(d)), () => b.disconnect();
}
var Br = new WeakMap(),
  He;
function vn(e, t) {
  if (t) {
    let { inlineSize: a, blockSize: n } = t[0];
    return { width: a, height: n };
  }
  return e instanceof SVGElement && 'getBBox' in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function wn({ target: e, contentRect: t, borderBoxSize: a }) {
  var n;
  (n = Br.get(e)) === null ||
    n === void 0 ||
    n.forEach((o) => {
      o({
        target: e,
        contentSize: t,
        get size() {
          return vn(e, a);
        },
      });
    });
}
function Rn(e) {
  e.forEach(wn);
}
function Mn() {
  typeof ResizeObserver < 'u' && (He = new ResizeObserver(Rn));
}
function Gn(e, t) {
  He || Mn();
  let a = ba(e);
  return (
    a.forEach((n) => {
      let o = Br.get(n);
      o || ((o = new Set()), Br.set(n, o)), o.add(t), He?.observe(n);
    }),
    () => {
      a.forEach((n) => {
        let o = Br.get(n);
        o?.delete(t), o?.size || He?.unobserve(n);
      });
    }
  );
}
var Fr = new Set(),
  gr;
function Cn() {
  (gr = () => {
    let e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Fr.forEach((a) => a(t));
  }),
    window.addEventListener('resize', gr);
}
function Vn(e) {
  return (
    Fr.add(e),
    gr || Cn(),
    () => {
      Fr.delete(e), !Fr.size && gr && (gr = void 0);
    }
  );
}
function xr(e, t) {
  return typeof e == 'function' ? Vn(e) : Gn(e, t);
}
var Tn = 50,
  da = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  Sn = () => ({ time: 0, x: da(), y: da() }),
  kn = {
    x: { length: 'Width', position: 'Left' },
    y: { length: 'Height', position: 'Top' },
  };
function ca(e, t, a, n) {
  let o = a[t],
    { length: i, position: s } = kn[t],
    m = o.current,
    b = a.time;
  (o.current = e['scroll' + s]),
    (o.scrollLength = e['scroll' + i] - e['client' + i]),
    (o.offset.length = 0),
    (o.offset[0] = 0),
    (o.offset[1] = o.scrollLength),
    (o.progress = Ar(0, o.scrollLength, o.current));
  let d = n - b;
  o.velocity = d > Tn ? 0 : Dr(o.current - m, d);
}
function Nn(e, t, a) {
  ca(e, 'x', t, a), ca(e, 'y', t, a), (t.time = a);
}
function Wn(e, t) {
  let a = { x: 0, y: 0 },
    n = e;
  for (; n && n !== t; )
    if (n instanceof HTMLElement)
      (a.x += n.offsetLeft), (a.y += n.offsetTop), (n = n.offsetParent);
    else if (n instanceof SVGGraphicsElement && 'getBBox' in n) {
      let { top: o, left: i } = n.getBBox();
      for (a.x += i, a.y += o; n && n.tagName !== 'svg'; ) n = n.parentNode;
    }
  return a;
}
var zn = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Rt = { start: 0, center: 0.5, end: 1 };
function ma(e, t, a = 0) {
  let n = 0;
  if ((Rt[e] !== void 0 && (e = Rt[e]), gt(e))) {
    let o = parseFloat(e);
    e.endsWith('px')
      ? (n = o)
      : e.endsWith('%')
      ? (e = o / 100)
      : e.endsWith('vw')
      ? (n = (o / 100) * document.documentElement.clientWidth)
      : e.endsWith('vh')
      ? (n = (o / 100) * document.documentElement.clientHeight)
      : (e = o);
  }
  return _r(e) && (n = t * e), a + n;
}
var On = [0, 0];
function En(e, t, a, n) {
  let o = Array.isArray(e) ? e : On,
    i = 0,
    s = 0;
  return (
    _r(e)
      ? (o = [e, e])
      : gt(e) &&
        ((e = e.trim()),
        (o = e.includes(' ') ? e.split(' ') : [e, Rt[e] ? e : '0'])),
    (i = ma(o[0], a, n)),
    (s = ma(o[1], t)),
    i - s
  );
}
var Ln = { x: 0, y: 0 };
function Pn(e, t, a) {
  let { offset: n = zn.All } = a,
    { target: o = e, axis: i = 'y' } = a,
    s = i === 'y' ? 'height' : 'width',
    m = o !== e ? Wn(o, e) : Ln,
    b =
      o === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: o.clientWidth, height: o.clientHeight },
    d = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let u = !t[i].interpolate,
    h = n.length;
  for (let v = 0; v < h; v++) {
    let M = En(n[v], d[s], b[s], m[i]);
    u || M === t[i].interpolatorOffsets[v] || (u = !0), (t[i].offset[v] = M);
  }
  u &&
    ((t[i].interpolate = ht(ut(h), t[i].offset)),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = t[i].interpolate(t[i].current));
}
function _n(e, t = e, a) {
  if (((a.x.targetOffset = 0), (a.y.targetOffset = 0), t !== e)) {
    let n = t;
    for (; n && n != e; )
      (a.x.targetOffset += n.offsetLeft),
        (a.y.targetOffset += n.offsetTop),
        (n = n.offsetParent);
  }
  (a.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (a.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (a.x.containerLength = e.clientWidth),
    (a.y.containerLength = e.clientHeight);
}
function An(e, t, a, n = {}) {
  let o = n.axis || 'y';
  return {
    measure: () => _n(e, n.target, a),
    update: (i) => {
      Nn(e, a, i), (n.offset || n.target) && Pn(e, a, n);
    },
    notify: typeof t == 'function' ? () => t(a) : In(t, a[o]),
  };
}
function In(e, t) {
  return (
    e.pause(),
    e.forEachNative((a, { easing: n }) => {
      var o, i;
      if (a.updateDuration) n || (a.easing = _e), a.updateDuration(1);
      else {
        let s = { duration: 1e3 };
        n || (s.easing = 'linear'),
          (i =
            (o = a.effect) === null || o === void 0
              ? void 0
              : o.updateTiming) === null ||
            i === void 0 ||
            i.call(o, s);
      }
    }),
    () => {
      e.currentTime = t.progress;
    }
  );
}
var hr = new WeakMap(),
  pa = new WeakMap(),
  wt = new WeakMap(),
  ua = (e) => (e === document.documentElement ? window : e);
function va(e, t = {}) {
  var { container: a = document.documentElement } = t,
    n = xt(t, ['container']);
  let o = wt.get(a);
  o || ((o = new Set()), wt.set(a, o));
  let i = Sn(),
    s = An(a, e, i, n);
  if ((o.add(s), !hr.has(a))) {
    let d = () => {
      let h = performance.now();
      for (let v of o) v.measure();
      for (let v of o) v.update(h);
      for (let v of o) v.notify();
    };
    hr.set(a, d);
    let u = ua(a);
    window.addEventListener('resize', d, { passive: !0 }),
      a !== document.documentElement && pa.set(a, xr(a, d)),
      u.addEventListener('scroll', d, { passive: !0 });
  }
  let m = hr.get(a),
    b = requestAnimationFrame(m);
  return () => {
    var d;
    typeof e != 'function' && e.stop(), cancelAnimationFrame(b);
    let u = wt.get(a);
    if (!u || (u.delete(s), u.size)) return;
    let h = hr.get(a);
    hr.delete(a),
      h &&
        (ua(a).removeEventListener('scroll', h),
        (d = pa.get(a)) === null || d === void 0 || d(),
        window.removeEventListener('resize', h));
  };
}
function Mt(e, t, a) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: a } }));
}
function ha(e, t, a) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: a } }));
}
var Dn = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: t, disable: a }, { inViewOptions: n = {} }) => {
      let { once: o } = n,
        i = xt(n, ['once']);
      return yn(
        e,
        (s) => {
          if ((t(), ha(e, 'viewenter', s), !o))
            return (m) => {
              a(), ha(e, 'viewleave', m);
            };
        },
        i
      );
    },
  },
  ga = (e, t, a) => (n) => {
    (!n.pointerType || n.pointerType === 'mouse') && (a(), Mt(e, t, n));
  },
  jn = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: t, disable: a }) => {
      let n = ga(e, 'hoverstart', t),
        o = ga(e, 'hoverend', a);
      return (
        e.addEventListener('pointerenter', n),
        e.addEventListener('pointerleave', o),
        () => {
          e.removeEventListener('pointerenter', n),
            e.removeEventListener('pointerleave', o);
        }
      );
    },
  },
  Bn = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: t, disable: a }) => {
      let n = (i) => {
          a(), Mt(e, 'pressend', i), window.removeEventListener('pointerup', n);
        },
        o = (i) => {
          t(), Mt(e, 'pressstart', i), window.addEventListener('pointerup', n);
        };
      return (
        e.addEventListener('pointerdown', o),
        () => {
          e.removeEventListener('pointerdown', o),
            window.removeEventListener('pointerup', n);
        }
      );
    },
  },
  Fn = { inView: Dn, hover: jn, press: Bn },
  Fs = ['initial', 'animate', ...Object.keys(Fn), 'exit'];
var Un = {
    left: (e) => `translateX(-${e}px)`,
    right: (e) => `translateX(${e}px)`,
    top: (e) => `translateY(-${e}px)`,
    bottom: (e) => `translateY(${e}px)`,
  },
  Gt =
    typeof Animation < 'u' &&
    typeof Animation.prototype.updatePlaybackRate == 'function';
function Oe(e) {
  let {
      slots: t,
      gap: a,
      padding: n,
      paddingPerSide: o,
      paddingTop: i,
      paddingRight: s,
      paddingBottom: m,
      paddingLeft: b,
      speed: d,
      hoverFactor: u,
      direction: h,
      alignment: v,
      sizingOptions: M,
      fadeOptions: y,
      style: T,
    } = e,
    {
      fadeContent: R,
      overflow: x,
      fadeWidth: C,
      fadeInset: S,
      fadeAlpha: N,
    } = y,
    { widthType: z, heightType: L } = M,
    G = o ? `${i}px ${s}px ${m}px ${b}px` : `${n}px`,
    O = be.current() === be.canvas,
    j = Ke.count(t),
    E = j > 0;
  h === !0 && (h = 'left');
  let re = h === 'left' || h === 'right',
    de = Ue(0),
    le = Un[h],
    ue = Me(de, le),
    ce = V(null),
    te = P(() => [nt(), nt()], []),
    [ye, he] = me({ parent: null, children: null }),
    Ve = [],
    Ee = [],
    Le = 0,
    Ze = 0;
  O && ((Le = j ? Math.floor(10 / j) : 0), (Ze = 1)),
    !O &&
      E &&
      ye.parent &&
      ((Le = Math.round((ye.parent / ye.children) * 2) + 1), (Ze = 1));
  let fr = ze(() => {
      if (E && ce.current) {
        let _ = re ? ce.current.offsetWidth : ce.current.offsetHeight,
          Z = te[0].current
            ? re
              ? te[0].current.offsetLeft
              : te[0].current.offsetTop
            : 0,
          Te =
            (te[1].current
              ? re
                ? te[1].current.offsetLeft + te[1].current.offsetWidth
                : te[1].current.offsetTop + te[1].current.offsetHeight
              : 0) -
            Z +
            a;
        he({ parent: _, children: Te });
      }
    }, []),
    q = O ? { contentVisibility: 'auto' } : {};
  if (E) {
    if (!O) {
      let _ = V(!0);
      A(
        () => (
          fr(),
          xr(ce.current, ({ contentSize: Z }) => {
            !_.current && (Z.width || Z.height) && fr(), (_.current = !1);
          })
        ),
        []
      );
    }
    Ve = Ke.map(t, (_, Z) => {
      var fe, Te, Ne, We;
      let Pe;
      Z === 0 && (Pe = te[0]), Z === t.length - 1 && (Pe = te[1]);
      let mr = {
        width: z
          ? (fe = _.props) === null || fe === void 0
            ? void 0
            : fe.width
          : '100%',
        height: L
          ? (Te = _.props) === null || Te === void 0
            ? void 0
            : Te.height
          : '100%',
      };
      return r(U, {
        inherit: 'id',
        children: r('li', {
          ref: Pe,
          style: mr,
          children: pr(
            _,
            {
              style: {
                ...((Ne = _.props) === null || Ne === void 0
                  ? void 0
                  : Ne.style),
                ...mr,
                flexShrink: 0,
                ...q,
              },
            },
            (We = _.props) === null || We === void 0 ? void 0 : We.children
          ),
        }),
      });
    });
  }
  if (!O)
    for (let _ = 0; _ < Le; _++)
      Ee = [
        ...Ee,
        ...Ke.map(t, (Z, fe) => {
          var Te, Ne, We, Pe;
          return r(
            U,
            {
              inherit: 'id',
              children: r(
                'li',
                {
                  style: { display: 'contents' },
                  'aria-hidden': !0,
                  children: pr(
                    Z,
                    {
                      key: _ + ' ' + fe,
                      style: {
                        ...((Te = Z.props) === null || Te === void 0
                          ? void 0
                          : Te.style),
                        width: z
                          ? (Ne = Z.props) === null || Ne === void 0
                            ? void 0
                            : Ne.width
                          : '100%',
                        height: L
                          ? (We = Z.props) === null || We === void 0
                            ? void 0
                            : We.height
                          : '100%',
                        flexShrink: 0,
                        ...q,
                      },
                    },
                    (Pe = Z.props) === null || Pe === void 0
                      ? void 0
                      : Pe.children
                  ),
                },
                _ + 'li' + fe
              ),
            },
            _ + 'lg' + fe
          );
        }),
      ];
  let ve = ye.children + ye.children * Math.round(ye.parent / ye.children),
    dr = V(null),
    tr = V(null),
    Ae = V(0),
    we = V(!1),
    Sr = Or(ce),
    cr = zr(),
    kr = V(null),
    Ie = V(null);
  O ||
    (Gt
      ? A(() => {
          if (!(cr || !ve || !d))
            return (
              (Ie.current = kr.current.animate(
                { transform: [le(0), le(ve)] },
                {
                  duration: (Math.abs(ve) / d) * 1e3,
                  iterations: 1 / 0,
                  easing: 'linear',
                }
              )),
              () => Ie.current.cancel()
            );
        }, [u, ve, d])
      : Xt((_) => {
          if (!ve || cr || Gt) return;
          dr.current === null && (dr.current = _), (_ = _ - dr.current);
          let fe = (tr.current === null ? 0 : _ - tr.current) * (d / 1e3);
          we.current && (fe *= u),
            (Ae.current += fe),
            (Ae.current = Jt(0, ve, Ae.current)),
            (tr.current = _),
            Sr && de.set(Ae.current);
        }));
  let Kr = re ? 'to right' : 'to bottom',
    ge = C / 2,
    Qe = 100 - C / 2,
    ar = Qn(S, 0, ge),
    $r = 100 - S,
    Nr = `linear-gradient(${Kr}, rgba(0, 0, 0, ${N}) ${ar}%, rgba(0, 0, 0, 1) ${ge}%, rgba(0, 0, 0, 1) ${Qe}%, rgba(0, 0, 0, ${N}) ${$r}%)`;
  return E
    ? r('section', {
        style: {
          ...wa,
          opacity: Ze,
          WebkitMaskImage: R ? Nr : void 0,
          MozMaskImage: R ? Nr : void 0,
          maskImage: R ? Nr : void 0,
          overflow: x ? 'visible' : 'hidden',
          padding: G,
        },
        ref: ce,
        children: c(l.ul, {
          ref: kr,
          style: {
            ...wa,
            gap: a,
            top: h === 'bottom' && Ra(ve) ? -ve : void 0,
            left: h === 'right' && Ra(ve) ? -ve : void 0,
            placeItems: v,
            position: 'relative',
            flexDirection: re ? 'row' : 'column',
            ...T,
            transform: Gt ? void 0 : ue,
            willChange: 'transform',
          },
          onMouseEnter: () => {
            (we.current = !0), Ie.current && Ie.current.updatePlaybackRate(u);
          },
          onMouseLeave: () => {
            (we.current = !1), Ie.current && Ie.current.updatePlaybackRate(1);
          },
          children: [Ve, Ee],
        }),
      })
    : c('section', {
        style: Hn,
        children: [
          r('div', { style: qn, children: '\u2728' }),
          r('p', { style: Yn, children: 'Connect to Content' }),
          r('p', {
            style: Zn,
            children:
              'Add layers or components to infinitely loop on your page.',
          }),
        ],
      });
}
Oe.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
B(Oe, {
  slots: {
    type: f.Array,
    title: 'Children',
    control: { type: f.ComponentInstance },
  },
  speed: {
    type: f.Number,
    title: 'Speed',
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: '%',
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: f.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom'],
    optionIcons: [
      'direction-left',
      'direction-right',
      'direction-up',
      'direction-down',
    ],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom'],
    defaultValue: 'left',
    displaySegmentedControl: !0,
  },
  alignment: {
    type: f.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end'],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom'],
        left: ['align-top', 'align-middle', 'align-bottom'],
        top: ['align-left', 'align-center', 'align-right'],
        bottom: ['align-left', 'align-center', 'align-right'],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: !0,
  },
  gap: { type: f.Number, title: 'Gap' },
  padding: {
    title: 'Padding',
    type: f.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
  },
  sizingOptions: {
    type: f.Object,
    title: 'Sizing',
    controls: {
      widthType: {
        type: f.Boolean,
        title: 'Width',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
      heightType: {
        type: f.Boolean,
        title: 'Height',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: f.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: f.Boolean, title: 'Fade', defaultValue: !0 },
      overflow: {
        type: f.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: f.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: f.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: f.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: f.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: 'Slows down the speed while you are hovering.',
  },
});
var wa = {
    display: 'flex',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    textIndent: 'none',
  },
  Hn = {
    display: 'flex',
    width: '100%',
    height: '100%',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    color: '#96F',
    background: 'rgba(136, 85, 255, 0.1)',
    fontSize: 11,
    overflow: 'hidden',
    padding: '20px 20px 30px 20px',
  },
  qn = { fontSize: 32, marginBottom: 10 },
  Yn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center' },
  Zn = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  Qn = (e, t, a) => Math.min(Math.max(e, t), a),
  Ra = (e) => typeof e == 'number' && !isNaN(e);
g();
g();
g();
var Ma = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Xn = {
    ...Ma,
    borderRadius: 6,
    background: 'rgba(136, 85, 255, 0.3)',
    color: '#85F',
    border: '1px dashed #85F',
    flexDirection: 'column',
  },
  Ct = {
    onClick: { type: f.EventHandler },
    onMouseEnter: { type: f.EventHandler },
    onMouseLeave: { type: f.EventHandler },
  },
  Jn = {
    type: f.Number,
    title: 'Font Size',
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Kn = {
    font: {
      type: f.Boolean,
      title: 'Font',
      defaultValue: !1,
      disabledTitle: 'Default',
      enabledTitle: 'Custom',
    },
    fontFamily: {
      type: f.String,
      title: 'Family',
      placeholder: 'Inter',
      hidden: ({ font: e }) => !e,
    },
    fontWeight: {
      type: f.Enum,
      title: 'Weight',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        'Thin',
        'Extra-light',
        'Light',
        'Regular',
        'Medium',
        'Semi-bold',
        'Bold',
        'Extra-bold',
        'Black',
      ],
      hidden: ({ font: e }) => !e,
    },
  };
g();
function Vt(e, t) {
  return Ga(!0, e, t);
}
function Tt(e, t) {
  return Ga(!1, e, t);
}
function Ga(e, t, a = !0) {
  let n = Er();
  A(() => {
    a && n === e && t();
  }, [n]);
}
g();
g();
g();
g();
g();
g();
var $n = () => {
    if (typeof navigator < 'u') {
      let e = navigator.userAgent.toLowerCase();
      return (
        (e.indexOf('safari') > -1 ||
          e.indexOf('framermobile') > -1 ||
          e.indexOf('framerx') > -1) &&
        e.indexOf('chrome') < 0
      );
    } else return !1;
  },
  St = () => P(() => $n(), []);
g();
g();
g();
g();
g();
function kt() {
  return P(() => be.current() === be.canvas, []);
}
g();
g();
function Nt(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: a,
    topLeftRadius: n,
    topRightRadius: o,
    bottomRightRadius: i,
    bottomLeftRadius: s,
  } = e;
  return P(
    () => (a ? `${n}px ${o}px ${i}px ${s}px` : `${t}px`),
    [t, a, n, o, i, s]
  );
}
var Wt = {
  borderRadius: {
    title: 'Radius',
    type: f.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: ['Radius', 'Radius per corner'],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: ['TL', 'TR', 'BR', 'BL'],
    min: 0,
  },
};
function zt(e) {
  let {
    padding: t,
    paddingPerSide: a,
    paddingTop: n,
    paddingRight: o,
    paddingBottom: i,
    paddingLeft: s,
  } = e;
  return P(() => (a ? `${n}px ${o}px ${i}px ${s}px` : t), [t, a, n, o, i, s]);
}
var Ot = {
  padding: {
    type: f.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
    title: 'Padding',
  },
};
g();
var Va;
(function (e) {
  (e.Fill = 'fill'),
    (e.Contain = 'contain'),
    (e.Cover = 'cover'),
    (e.None = 'none'),
    (e.ScaleDown = 'scale-down');
})(Va || (Va = {}));
var Ta;
(function (e) {
  (e.Video = 'Upload'), (e.Url = 'URL');
})(Ta || (Ta = {}));
function to(e) {
  let {
    width: t,
    height: a,
    topLeft: n,
    topRight: o,
    bottomRight: i,
    bottomLeft: s,
    id: m,
    children: b,
    ...d
  } = e;
  return d;
}
function qe(e) {
  let t = to(e);
  return r(oo, { ...t });
}
function ao(e) {
  let t = Er(),
    a = V(!1),
    n = ze((s) => {
      if (!e.current) return;
      let m = (s === 1 ? 0.999 : s) * e.current.duration,
        b = Math.abs(e.current.currentTime - m) < 0.1;
      e.current.duration > 0 && !b && (e.current.currentTime = m);
    }, []),
    o = ze(() => {
      !(
        e.current.currentTime > 0 &&
        e.current.onplaying &&
        !e.current.paused &&
        !e.current.ended &&
        e.current.readyState > e.current.HAVE_CURRENT_DATA
      ) &&
        e.current &&
        !a.current &&
        t &&
        ((a.current = !0),
        e.current
          .play()
          .catch((m) => {})
          .finally(() => (a.current = !1)));
    }, []),
    i = ze(() => {
      !e.current || a.current || e.current.pause();
    }, []);
  return { play: o, pause: i, setProgress: n };
}
function no({
  playingProp: e,
  muted: t,
  loop: a,
  playsinline: n,
  controls: o,
}) {
  let [i] = me(() => e),
    [s, m] = me(!1);
  e !== i && !s && m(!0);
  let b = i && t && a && n && !o && !s,
    d;
  return (
    b ? (d = 'on-viewport') : i ? (d = 'on-mount') : (d = 'no-autoplay'), d
  );
}
var Sa = !1,
  oo = Yt(function (t) {
    let {
        srcType: a,
        srcFile: n,
        srcUrl: o,
        playing: i,
        muted: s,
        playsinline: m,
        controls: b,
        progress: d,
        objectFit: u,
        backgroundColor: h,
        onSeeked: v,
        onPause: M,
        onPlay: y,
        onEnd: T,
        onClick: R,
        onMouseEnter: x,
        onMouseLeave: C,
        onMouseDown: S,
        onMouseUp: N,
        poster: z,
        posterEnabled: L,
        startTime: G,
        volume: O,
        loop: j,
      } = t,
      E = V(),
      re = St(),
      de = V(null),
      le = V(null),
      ue = kt(),
      ce = Nt(t),
      te = ue
        ? 'no-autoplay'
        : no({
            playingProp: i,
            muted: s,
            loop: j,
            playsinline: m,
            controls: b,
          }),
      ye = ue ? !0 : Or(E),
      he = G === 100 ? 99.9 : G,
      { play: Ve, pause: Ee, setProgress: Le } = ao(E);
    A(() => {
      ue || (i ? Ve() : Ee());
    }, [i]),
      A(() => {
        ue || (te === 'on-viewport' && (ye ? Ve() : Ee()));
      }, [te, ye]),
      A(() => {
        if (!Sa) {
          Sa = !0;
          return;
        }
        let q = ot(d) ? d.get() : (d ?? 0) * 0.01;
        Le((q ?? 0) || (he ?? 0) / 100);
      }, [he, n, o, d]),
      A(() => {
        if (ot(d)) return d.on('change', (q) => Le(q));
      }, [d]),
      Vt(() => {
        de.current !== null && E.current && ((!le && j) || !de.current) && Ve();
      }),
      Tt(() => {
        E.current &&
          ((le.current = E.current.ended),
          (de.current = E.current.paused),
          Ee());
      });
    let Ze = P(() => {
      let q = '';
      if (a === 'URL') return o + q;
      if (a === 'Upload') return n + q;
    }, [a, n, o, he]);
    return (
      A(() => {
        re && E.current && te === 'on-mount' && setTimeout(() => Ve(), 50);
      }, []),
      A(() => {
        E.current && !s && (E.current.volume = (O ?? 0) / 100);
      }, [O]),
      r('video', {
        onClick: R,
        onMouseEnter: x,
        onMouseLeave: C,
        onMouseDown: S,
        onMouseUp: N,
        src: Ze,
        loop: j,
        ref: E,
        onSeeked: (q) => v?.(q),
        onPause: (q) => M?.(q),
        onPlay: (q) => y?.(q),
        onEnded: (q) => T?.(q),
        autoPlay: te === 'on-mount',
        poster: L ? z : void 0,
        onLoadedData: () => {
          E.current &&
            (E.current.currentTime < 0.3 && Le((he ?? 0) * 0.01),
            te === 'on-mount' && Ve());
        },
        controls: b,
        muted: ue ? !0 : s,
        playsInline: m,
        style: {
          cursor: R ? 'pointer' : 'auto',
          width: '100%',
          height: '100%',
          borderRadius: ce,
          display: 'block',
          objectFit: u,
          backgroundColor: h,
          objectPosition: '50% 50%',
        },
      })
    );
  });
qe.displayName = 'Video';
qe.defaultProps = {
  srcType: 'URL',
  srcUrl:
    'https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4',
  srcFile: '',
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: 'cover',
  backgroundColor: 'rgba(0,0,0,0)',
  radius: 0,
  volume: 25,
  startTime: 0,
};
var io = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function lo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function so(e) {
  return (e.match(io) || []).map(lo).join(' ');
}
var ka = ['cover', 'fill', 'contain', 'scale-down', 'none'];
B(qe, {
  srcType: {
    type: f.Enum,
    displaySegmentedControl: !0,
    title: 'Source',
    options: ['URL', 'Upload'],
  },
  srcUrl: {
    type: f.String,
    title: 'URL',
    placeholder: '../example.mp4',
    hidden(e) {
      return e.srcType === 'Upload';
    },
    description:
      'Hosted video file URL. For YouTube, use the YouTube component.',
  },
  srcFile: {
    type: f.File,
    title: 'File',
    allowedFileTypes: ['mp4', 'webm'],
    hidden(e) {
      return e.srcType === 'URL';
    },
  },
  playing: {
    type: f.Boolean,
    title: 'Playing',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
  },
  posterEnabled: {
    type: f.Boolean,
    title: 'Poster',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
  },
  poster: { type: f.Image, title: ' ', hidden: ({ posterEnabled: e }) => !e },
  backgroundColor: { type: f.Color, title: 'Background' },
  ...Wt,
  startTime: {
    title: 'Start Time',
    type: f.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: '%',
  },
  loop: {
    type: f.Boolean,
    title: 'Loop',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
  },
  objectFit: {
    type: f.Enum,
    title: 'Fit',
    options: ka,
    optionTitles: ka.map(so),
  },
  controls: {
    type: f.Boolean,
    title: 'Controls',
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
  },
  muted: {
    type: f.Boolean,
    title: 'Muted',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
  },
  volume: {
    type: f.Number,
    max: 100,
    min: 0,
    unit: '%',
    hidden: ({ muted: e }) => e,
  },
  onEnd: { type: f.EventHandler },
  onSeeked: { type: f.EventHandler },
  onPause: { type: f.EventHandler },
  onPlay: { type: f.EventHandler },
  ...Ct,
});
g();
g();
var Na = (e, t, a) => Math.min(Math.max(a, e), t);
var Et = (e, t, a) => (t - e === 0 ? 1 : (a - e) / (t - e));
function fo([e, t]) {
  return e + (100 - e) * (t / 100) * 0.5;
}
function co() {
  let [e, t] = me(!1);
  return (
    Qt(() => {
      t(window.matchMedia('(pointer:fine)').matches);
    }, []),
    e
  );
}
function Ur(e, t, { edgeOpacity: a, moreItems: n, buttonRef: o }, i) {
  n.current && e === t
    ? ((n.current = !1), it(a, 1, i), o.current.setAttribute('disabled', ''))
    : !n.current &&
      e !== t &&
      ((n.current = !0), it(a, 0, i), o.current.removeAttribute('disabled'));
}
function Wa(e, t) {
  let a = V(e),
    n = Ue(a.current ? 0 : 1),
    o = Me(n, [0, 1], [t || 0, 1]),
    i = Me(n, (u) => 1 - u),
    s = V(null),
    m = Me(i, (u) => (u > 0.2 ? 'auto' : 'none')),
    b = Me(m, (u) => (u === 'auto' ? 'pointer' : 'default')),
    d = { ...za, opacity: i, pointerEvents: m, cursor: b };
  return {
    moreItems: a,
    fadeOpacity: o,
    edgeOpacity: n,
    buttonStyle: d,
    buttonRef: s,
  };
}
function mo({ element: e }) {
  e.setAttribute('aria-hidden', !1);
}
function po(e, t, a, n, o, i, s) {
  A(() => {
    if (!e.current) return;
    let b = va(
        (u) => {
          (a.current = u[t]),
            u[t].current === o.current && (o.current = void 0),
            n(u[t].current),
            i();
        },
        { container: e.current, axis: t }
      ),
      d = xr(e.current, () => {
        s(), i();
      });
    return () => {
      b(), d();
    };
  }, [i, s]);
}
function sr({
  slots: e,
  gap: t,
  axis: a,
  align: n,
  sizingObject: o,
  fadeObject: i,
  arrowObject: s,
  snapObject: m,
  progressObject: b,
  ariaLabel: d,
  borderRadius: u,
  effectsObject: h,
  ...v
}) {
  let M = e.filter(Boolean),
    y = Ke.count(M),
    T = be.current() === be.canvas,
    R = zt(v),
    x = a ? 'x' : 'y',
    {
      fadeContent: C,
      fadeWidth: S,
      fadeInset: N,
      fadeTransition: z,
      fadeAlpha: L,
    } = i,
    { snap: G, snapEdge: O, fluid: j } = m,
    {
      widthType: E,
      widthInset: re,
      widthColumns: de,
      heightType: le,
      heightInset: ue,
      heightRows: ce,
    } = o,
    {
      showScrollbar: te,
      showProgressDots: ye,
      dotSize: he,
      dotsInset: Ve,
      dotsRadius: Ee,
      dotsPadding: Le,
      dotsGap: Ze,
      dotsFill: fr,
      dotsBackground: q,
      dotsActiveOpacity: ve,
      dotsOpacity: dr,
      dotsBlur: tr,
    } = b,
    {
      showMouseControls: Ae,
      arrowSize: we,
      arrowRadius: Sr,
      arrowFill: cr,
      leftArrow: kr,
      rightArrow: Ie,
      arrowPadding: Kr,
    } = s,
    ge = V(void 0),
    Qe = V(void 0),
    ar = Ue(0),
    $r = (k) => {
      ar.set(Qe.current !== void 0 ? Qe.current : k);
    },
    Nr = co(),
    _ = Wa(!1, L),
    Z = Wa(!0, L),
    fe = Ue(N * 0.5),
    Te = Me(fe, (k) => 100 - k),
    Ne = Ue(S),
    We = Me([fe, Ne], fo),
    Pe = Me(We, (k) => 100 - k),
    mr = Ue(a ? 'right' : 'bottom'),
    et = Me(
      [mr, _.fadeOpacity, fe, We, Z.fadeOpacity, Te, Pe],
      (k) =>
        `linear-gradient(to ${k[0]}, rgb(0, 0, 0, ${k[1]}) ${k[2]}%, rgb(0, 0, 0, 1) ${k[3]}%, rgba(0, 0, 0, 1) ${k[6]}%, rgb(0, 0, 0, ${k[4]}) ${k[5]}%)`
    ),
    nr = V(null),
    [De, Ha] = me(T ? 4 : 1),
    je = { scrollSnapAlign: O, flexShrink: 0 },
    Xe = {};
  n === 'stretch' &&
    (a
      ? ((Xe.height = '100%'), (je.height = 'auto'))
      : ((Xe.width = '100%'), (je.width = 'auto'))),
    j || (je.scrollSnapStop = 'always'),
    E === 'stretch'
      ? ((je.width = `calc(100% - ${re || 0}px)`), (Xe.width = '100%'))
      : E === 'columns' &&
        ((je.width = `calc(${100 / de}% - ${t}px + ${t / de}px)`),
        (Xe.width = '100%')),
    le === 'stretch'
      ? ((je.height = `calc(100% - ${ue || 0}px)`), (Xe.height = '100%'))
      : le === 'rows' &&
        ((je.height = `calc(${100 / ce}% - ${t}px + ${t / ce}px)`),
        (Xe.height = '100%'));
  let Bt = T ? 'hidden' : 'auto',
    qa = { ...wo, padding: R },
    Ya = {
      ...Ro,
      gap: t,
      alignItems: n,
      flexDirection: a ? 'row' : 'column',
      overflowX: a ? Bt : 'hidden',
      overflowY: a ? 'hidden' : Bt,
      scrollSnapType: G ? `${x} mandatory` : void 0,
      WebkitOverflowScrolling: 'touch',
      WebkitMaskImage: C ? et : void 0,
      MozMaskImage: C ? et : void 0,
      maskImage: C ? et : void 0,
      borderRadius: u,
    },
    Ft = { ['aria-roledescription']: 'carousel' };
  d && (Ft['aria-title'] = d);
  let rt = {};
  if (
    (n === 'stretch' &&
      ((rt['aria-role'] = 'group'), (rt['aria-roledescription'] = 'slide')),
    !T)
  ) {
    let k = V([]);
    po(
      nr,
      x,
      ge,
      $r,
      Qe,
      ze(() => {
        if (!ge.current) return;
        let {
            targetLength: F,
            containerLength: Se,
            scrollLength: Je,
          } = ge.current,
          xe = ar.get();
        if (!F && !Se) return;
        if (F > Se) {
          Ur(xe, 0, _, z), Ur(xe, Je, Z, z);
          for (let Be = 0; Be < k.current.length; Be++) {
            let { element: Fe, start: at, end: or } = k.current[Be];
            or < xe || at > xe + Se
              ? Fe.setAttribute('aria-hidden', !0)
              : Fe.setAttribute('aria-hidden', !1);
          }
        } else Ur(0, 0, _, z), Ur(1, 1, Z, z), k.current.forEach(mo);
        let Re = Math.ceil(F / Se);
        isNaN(Re) || (Re / y > 0.65 && (Re = y), Re !== De && Ha(Re));
      }, [De]),
      ze(() => {
        nr.current &&
          (k.current = Array.from(nr.current.children).map((F) =>
            a
              ? {
                  element: F,
                  start: F.offsetLeft,
                  end: F.offsetLeft + F.offsetWidth,
                }
              : {
                  element: F,
                  start: F.offsetTop,
                  end: F.offsetTop + F.offsetHeight,
                }
          ));
      }, [])
    );
  }
  T &&
    (A(() => {
      Ne.set(S);
    }, [S]),
    A(() => {
      fe.set(N * 0.5);
    }, [N]),
    A(() => {
      mr.set(a ? 'right' : 'bottom');
    }, [a]));
  let ns = (k, F) => {
      if (!ge.current) return;
      let { current: Se } = ge.current,
        { children: Je } = nr.current,
        xe,
        Re = k === 1 ? 0 : Je.length - 1;
      for (; xe === void 0; ) {
        let Be = Je[Re],
          Fe = a ? Be.offsetLeft : Be.offsetTop,
          at = a ? Be.offsetWidth : Be.offsetHeight,
          or = Fe + at,
          qt = 0.05;
        k === 1
          ? Et(Fe, or, F) < 1 - qt
            ? (xe = Fe)
            : Re === Je.length - 1 && (xe = or)
          : k === -1 &&
            (Et(Fe, or, F) > qt ? (xe = or) : Re === 0 && (xe = Fe)),
          (Re += k);
      }
      return xe;
    },
    Za = zr(),
    Qa = (k) => {
      Qe.current = k;
      let F = a ? { left: k } : { top: k };
      nr.current.scrollTo({ ...F, behavior: Za ? 'auto' : 'smooth' });
    },
    Ut = (k) => {
      if (!ge.current) return;
      let { scrollLength: F } = ge.current;
      Qa(k * (F / (De - 1)));
    },
    Ht = (k) => () => {
      if (!ge.current) return;
      let { containerLength: F, scrollLength: Se } = ge.current,
        Je = ar.get(),
        xe = Se / De,
        Re = Na(0, De - 1, Math.floor(Je / xe));
      Ut(Re + k);
    };
  if (y === 0) return r(ho, {});
  let tt = [],
    Wr = {};
  if (De > 1 && ye && !te) {
    for (let k = 0; k < De; k++) {
      let F = (T && !k) || !1;
      tt.push(
        r(uo, {
          dotStyle: { ...Co, width: he, height: he, backgroundColor: fr },
          buttonStyle: za,
          isSelected: F,
          selectedOpacity: ve,
          opacity: dr,
          onClick: () => Ut(k),
          currentScroll: ar,
          scrollInfo: ge,
          total: De,
          index: k,
          gap: Ze,
          padding: Le,
          axis: a,
        })
      );
    }
    tr &&
      (Wr.backdropFilter =
        Wr.WebkitBackdropFilter =
        Wr.MozBackdropFilter =
          `blur(${tr}px)`);
  }
  return c('section', {
    style: qa,
    ...Ft,
    children: [
      r(l.ul, {
        ref: nr,
        style: Ya,
        className: 'framer--carousel',
        'data-show-scrollbar': te,
        'aria-atomic': 'false',
        'aria-live': 'polite',
        onWheel: () => (Qe.current = void 0),
        children: Ke.map(M, (k, F) => {
          var Se;
          return r('li', {
            style: je,
            ...rt,
            'aria-label': `${F + 1} of ${y}`,
            children: pr(k, {
              ...k.props,
              style: {
                ...((Se = k.props) === null || Se === void 0
                  ? void 0
                  : Se.style),
                ...Xe,
              },
            }),
          });
        }),
      }),
      c('fieldset', {
        style: {
          ...Mo,
          padding: Kr,
          display: 'flex',
          flexDirection: a ? 'row' : 'column',
        },
        'aria-label': 'Carousel pagination controls',
        className: 'framer--carousel-controls',
        'data-show-mouse-controls': Ae,
        children: [
          r(l.button, {
            ref: _.buttonRef,
            type: 'button',
            style: {
              ..._.buttonStyle,
              backgroundColor: cr,
              width: we,
              height: we,
              borderRadius: Sr,
              rotate: a ? 0 : 90,
              display: Ae ? 'block' : 'none',
            },
            onClick: Ht(-1),
            'aria-label': 'Previous',
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: r('img', {
              alt: '',
              width: we,
              height: we,
              src: kr || './images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg',
            }),
          }),
          r(l.button, {
            ref: Z.buttonRef,
            type: 'button',
            style: {
              ...Z.buttonStyle,
              backgroundColor: cr,
              width: we,
              height: we,
              borderRadius: Sr,
              rotate: a ? 0 : 90,
              display: Ae ? 'block' : 'none',
            },
            onClick: Ht(1),
            'aria-label': 'Next',
            whileTap: { scale: 0.9 },
            transition: { duration: 0.05 },
            children: r('img', {
              alt: '',
              width: we,
              height: we,
              src: Ie || './images/11KSGbIZoRSg4pjdnUoif6MKHI.svg',
            }),
          }),
          tt.length > 1
            ? r('div', {
                style: {
                  ...Go,
                  left: a ? '50%' : Ve,
                  top: a ? 'unset' : '50%',
                  transform: a ? 'translateX(-50%)' : 'translateY(-50%)',
                  flexDirection: a ? 'row' : 'column',
                  bottom: a ? Ve : 'unset',
                  borderRadius: Ee,
                  backgroundColor: q,
                  ...Wr,
                },
                children: tt,
              })
            : null,
        ],
      }),
      r(go, {}),
    ],
  });
}
sr.defaultProps = {
  gap: 10,
  padding: 10,
  progressObject: { showScrollbar: !1, showProgressDots: !1 },
  sizingObject: {
    widthType: 'auto',
    widthOffset: 0,
    widthColumns: 2,
    heightType: 'auto',
    heightOffset: 0,
    heightRows: 2,
  },
  borderRadius: 0,
};
B(sr, {
  slots: {
    type: f.Array,
    title: 'Children',
    control: { type: f.ComponentInstance },
  },
  axis: {
    type: f.Enum,
    title: 'Direction',
    options: [!0, !1],
    optionIcons: ['direction-horizontal', 'direction-vertical'],
    displaySegmentedControl: !0,
  },
  align: {
    type: f.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end'],
    optionIcons: {
      axis: {
        true: ['align-top', 'align-middle', 'align-bottom'],
        false: ['align-left', 'align-center', 'align-right'],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: !0,
  },
  gap: { type: f.Number, title: 'Gap' },
  ...Ot,
  sizingObject: {
    type: f.Object,
    title: 'Sizing',
    controls: {
      widthType: {
        type: f.Enum,
        title: 'Width',
        options: ['auto', 'stretch', 'columns'],
        optionTitles: ['Auto', 'Stretch', 'Columns'],
        defaultValue: 'auto',
      },
      widthInset: {
        type: f.Number,
        title: 'Inset',
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (e) => e.widthType !== 'stretch',
      },
      widthColumns: {
        type: f.Number,
        title: 'Columns',
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (e) => e.widthType !== 'columns',
      },
      heightType: {
        type: f.Enum,
        title: 'Height',
        options: ['auto', 'stretch', 'rows'],
        optionTitles: ['Auto', 'Stretch', 'Rows'],
        defaultValue: 'auto',
      },
      heightInset: {
        type: f.Number,
        title: 'Inset',
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (e) => e.heightType !== 'stretch',
      },
      heightRows: {
        type: f.Number,
        title: 'Rows',
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (e) => e.heightType !== 'rows',
      },
    },
  },
  snapObject: {
    type: f.Object,
    title: 'Snapping',
    controls: {
      snap: { type: f.Boolean, title: 'Enable' },
      snapEdge: {
        type: f.Enum,
        title: 'Edge',
        options: ['start', 'center', 'end'],
        optionTitles: ['Left', 'Center', 'Right'],
        defaultValue: 'center',
        hidden: (e) => !e.snap,
      },
      fluid: {
        type: f.Boolean,
        title: 'Fluid',
        defaultValue: !1,
        hidden: (e) => !e.snap,
      },
    },
  },
  fadeObject: {
    type: f.Object,
    title: 'Fading',
    controls: {
      fadeContent: { type: f.Boolean, title: 'Enable', defaultValue: !1 },
      fadeWidth: {
        type: f.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden: (e) => !e.fadeContent,
      },
      fadeInset: {
        type: f.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden: (e) => !e.fadeContent,
      },
      fadeAlpha: {
        type: f.Number,
        title: 'Opacity',
        hidden: (e) => !e.fadeContent,
        min: 0,
        max: 1,
        step: 0.05,
        defaultValue: 0,
      },
      fadeTransition: {
        type: f.Transition,
        title: 'Transition',
        hidden: (e) => !e.fadeContent,
      },
    },
  },
  progressObject: {
    type: f.Object,
    title: 'Progress',
    controls: {
      showScrollbar: { type: f.Boolean, title: 'Scroll Bar', defaultValue: !1 },
      showProgressDots: {
        type: f.Boolean,
        title: 'Dots',
        defaultValue: !1,
        hidden: (e) => e.showScrollbar,
      },
      dotSize: {
        type: f.Number,
        title: 'Size',
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: f.Number,
        title: 'Inset',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: f.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: f.Number,
        title: 'Padding',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: f.Color,
        title: 'Fill',
        defaultValue: '#fff',
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: f.Color,
        title: 'Backdrop',
        defaultValue: 'rgba(0,0,0,0.2)',
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: f.Number,
        title: 'Radius',
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: f.Number,
        title: 'Opacity',
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: f.Number,
        title: 'Current',
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: f.Number,
        title: 'Blur',
        min: 0,
        max: 50,
        defaultValue: 4,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
  arrowObject: {
    type: f.Object,
    title: 'Arrows',
    controls: {
      showMouseControls: { type: f.Boolean, title: 'Show', defaultValue: !0 },
      arrowFill: {
        type: f.Color,
        title: 'Fill',
        defaultValue: 'rgba(0,0,0,0.2)',
        hidden: (e) => !e.showMouseControls,
      },
      leftArrow: {
        type: f.Image,
        title: 'Previous',
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: f.Image,
        title: 'Next',
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: f.Number,
        title: 'Size',
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: f.Number,
        title: 'Radius',
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPadding: {
        type: f.Number,
        title: 'Inset',
        min: 0,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls,
      },
    },
  },
  ariaLabel: { type: f.String, title: 'Aria Label', placeholder: 'Movies...' },
  borderRadius: {
    type: f.Number,
    title: 'Radius',
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
});
function uo({
  currentScroll: e,
  scrollInfo: t,
  isSelected: a,
  selectedOpacity: n,
  opacity: o,
  total: i,
  index: s,
  dotStyle: m,
  buttonStyle: b,
  gap: d,
  padding: u,
  axis: h,
  ...v
}) {
  let M = Me(e, (S) => {
      var N, z;
      if (!(!((N = t.current) === null || N === void 0) && N.scrollLength))
        return s === 0 ? n : o;
      let L =
          ((z = t.current) === null || z === void 0 ? void 0 : z.scrollLength) /
          i,
        G = L * s,
        O = G + L;
      return S >= G && (s < i - 1 ? S < O : s === i - 1) ? n : o;
    }),
    y = d / 2,
    T = !h && s > 0 ? y : u,
    R = !h && s !== i - 1 ? y : u,
    x = h && s !== i - 1 ? y : u,
    C = h && s > 0 ? y : u;
  return r('button', {
    'aria-label': `Scroll to page ${s + 1}`,
    type: 'button',
    ...v,
    style: { ...b, padding: `${T}px ${x}px ${R}px ${C}px` },
    children: r(l.div, { style: { ...m, opacity: M } }),
  });
}
function ho() {
  return c('section', {
    style: xo,
    children: [
      r('div', { style: bo, children: '\u2728' }),
      r('p', { style: yo, children: 'Connect to Content' }),
      r('p', {
        style: vo,
        children: 'Add layers or components to swipe between.',
      }),
    ],
  });
}
function go() {
  return r('div', {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
var xo = {
    display: 'flex',
    width: '100%',
    height: '100%',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    color: '#96F',
    background: 'rgba(136, 85, 255, 0.1)',
    fontSize: 11,
    overflow: 'hidden',
    padding: '20px 20px 30px 20px',
  },
  bo = { fontSize: 32, marginBottom: 10 },
  yo = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center' },
  vo = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 130,
    lineHeight: 1.5,
    textAlign: 'center',
  };
var wo = {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  Ro = {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    position: 'relative',
    display: 'flex',
    flex: '1 1 100%',
    width: '100%',
    height: '100%',
  },
  za = {
    border: 'none',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    overflow: 'hidden',
    background: 'transparent',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
  },
  Mo = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    border: 0,
    padding: 0,
    margin: 0,
  },
  Go = {
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    pointerEvents: 'auto',
  },
  Co = {
    borderRadius: '50%',
    background: 'white',
    cursor: 'pointer',
    border: 'none',
    placeContent: 'center',
    placeItems: 'center',
    padding: 0,
  };
var Lt = {};
Ja(Lt, { __FramerMetadata__: () => Ao, default: () => Ye });
g();
var Vo = { Xi4uuK477: { hover: !0 } },
  To = ['Xi4uuK477'],
  So = 'framer-Ln0gA',
  ko = { Xi4uuK477: 'framer-v-hhz849' };
function No(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var Wo = {
    delay: 0,
    duration: 0.15,
    ease: [0.5, 0, 0.88, 0.77],
    type: 'tween',
  },
  zo = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  Oo = l(p),
  Eo = ({
    backgroundColor: e,
    buttonFill: t,
    buttonText: a,
    height: n,
    id: o,
    link: i,
    textColor: s,
    textSize: m,
    width: b,
    ...d
  }) => {
    var u, h, v, M, y;
    return {
      ...d,
      BrUi5h7tU:
        (u = s ?? d.BrUi5h7tU) !== null && u !== void 0
          ? u
          : 'rgb(255, 255, 255)',
      bZsnTBIZu:
        (h = e ?? d.bZsnTBIZu) !== null && h !== void 0
          ? h
          : 'rgb(21, 39, 102)',
      CiWo9qyo0: i ?? d.CiWo9qyo0,
      ofLqZhEO8: (v = a ?? d.ofLqZhEO8) !== null && v !== void 0 ? v : '$BUY',
      PPM8eZNfR:
        (M = t ?? d.PPM8eZNfR) !== null && M !== void 0 ? M : 'rgb(0, 29, 178)',
      Rb5OgUSWE: (y = m ?? d.Rb5OgUSWE) !== null && y !== void 0 ? y : 24,
    };
  },
  Lo = (e, t) => t.join('-') + e.layoutDependency,
  Po = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        ofLqZhEO8: b,
        Rb5OgUSWE: d,
        BrUi5h7tU: u,
        PPM8eZNfR: h,
        bZsnTBIZu: v,
        CiWo9qyo0: M,
        ...y
      } = Eo(e),
      {
        baseVariant: T,
        classNames: R,
        gestureVariant: x,
        setGestureState: C,
        setVariant: S,
        variants: N,
      } = oe({
        cycleOrder: To,
        defaultVariant: 'Xi4uuK477',
        enabledGestures: Vo,
        variant: m,
        variantClassNames: ko,
      }),
      z = Lo(e, N),
      { activeVariantCallback: L, delay: G } = pe(T),
      O = L(async (...le) => {
        S(Lr);
      });
    Ge(T, { default: O });
    let j = V(null),
      E = X(),
      re = [],
      de = ne();
    return r(U, {
      id: s ?? E,
      children: r(Oo, {
        animate: N,
        initial: !1,
        children: r(zo, {
          value: Wo,
          children: r(ke, {
            href: M,
            openInNewTab: !0,
            children: c(l.a, {
              ...y,
              className: `${Y(So, ...re, 'framer-hhz849', i, R)} framer-k3dmoe`,
              'data-framer-name': 'Top',
              'data-highlight': !0,
              layoutDependency: z,
              layoutId: 'Xi4uuK477',
              onHoverEnd: () => C({ isHovered: !1 }),
              onHoverStart: () => C({ isHovered: !0 }),
              onTap: () => C({ isPressed: !1 }),
              onTapCancel: () => C({ isPressed: !1 }),
              onTapStart: () => C({ isPressed: !0 }),
              ref: t ?? j,
              style: {
                borderBottomLeftRadius: 118,
                borderBottomRightRadius: 118,
                borderTopLeftRadius: 118,
                borderTopRightRadius: 118,
                ...o,
              },
              ...No(
                { 'Xi4uuK477-hover': { 'data-framer-name': void 0 } },
                T,
                x
              ),
              children: [
                r(l.div, {
                  className: 'framer-lp1pww',
                  'data-framer-name': 'BG',
                  layoutDependency: z,
                  layoutId: 'y0PhOd3_s',
                  style: {
                    backgroundColor: v,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    boxShadow:
                      '0px 4px 2px 0px rgba(0,0,0,0.25), inset 0px -2px 2px 0px rgba(0, 0, 0, 0.1)',
                  },
                }),
                r(l.div, {
                  className: 'framer-1w028ym',
                  'data-framer-name': 'Stroke',
                  layoutDependency: z,
                  layoutId: 'x7Krz2waI',
                  style: {
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgb(0, 29, 178) 97.2deg, rgb(19, 47, 186) 122.4deg, rgb(19, 47, 186) 237.60000000000002deg, rgb(0, 29, 178) 262.8deg)',
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }),
                r(l.div, {
                  className: 'framer-14r6ejv',
                  'data-framer-name': 'Fill',
                  layoutDependency: z,
                  layoutId: 'FoEduTn39',
                  style: {
                    backgroundColor: h,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
                r(w, {
                  __fromCanvasComponent: !0,
                  children: r(p, {
                    children: r(l.p, {
                      style: {
                        '--font-selector':
                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                        '--framer-font-family':
                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                        '--framer-font-size':
                          'calc(var(--variable-reference-Rb5OgUSWE-a6gVLSPwa) * 1px)',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--variable-reference-BrUi5h7tU-a6gVLSPwa))',
                      },
                      children: '$BUY',
                    }),
                  }),
                  className: 'framer-1qt1x83',
                  'data-framer-name': 'Text',
                  fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                  layoutDependency: z,
                  layoutId: 'qSWTdwSqH',
                  style: {
                    '--extracted-r6o4lv':
                      'var(--variable-reference-BrUi5h7tU-a6gVLSPwa)',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    '--framer-paragraph-spacing': '0px',
                    '--variable-reference-BrUi5h7tU-a6gVLSPwa': u,
                    '--variable-reference-Rb5OgUSWE-a6gVLSPwa': d,
                  },
                  text: b,
                  verticalAlignment: 'top',
                  withExternalLayout: !0,
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  _o = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-Ln0gA.framer-k3dmoe, .framer-Ln0gA .framer-k3dmoe { display: block; }',
    '.framer-Ln0gA.framer-hhz849 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 10px 24px 20px 24px; position: relative; text-decoration: none; width: auto; }',
    '.framer-Ln0gA .framer-lp1pww { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 14px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-Ln0gA .framer-1w028ym { bottom: 10px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-Ln0gA .framer-14r6ejv { bottom: 12px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-Ln0gA .framer-1qt1x83 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ln0gA.framer-hhz849 { gap: 0px; } .framer-Ln0gA.framer-hhz849 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Ln0gA.framer-hhz849 > :first-child { margin-top: 0px; } .framer-Ln0gA.framer-hhz849 > :last-child { margin-bottom: 0px; } }',
    '.framer-Ln0gA.framer-v-hhz849.hover.framer-hhz849 { padding: 16px 24px 14px 24px; }',
    '.framer-Ln0gA.framer-v-hhz849.hover .framer-1w028ym { bottom: 4px; top: 4px; }',
    '.framer-Ln0gA.framer-v-hhz849.hover .framer-14r6ejv { bottom: 6px; top: 6px; }',
  ],
  br = K(Po, _o, 'framer-Ln0gA'),
  Ye = br;
br.displayName = 'CTA Blue';
br.defaultProps = { height: 59, width: 96 };
B(br, {
  ofLqZhEO8: {
    defaultValue: '$BUY',
    displayTextArea: !1,
    title: 'Button text',
    type: f.String,
  },
  Rb5OgUSWE: { defaultValue: 24, title: 'Text size', type: f.Number },
  BrUi5h7tU: {
    defaultValue: 'rgb(255, 255, 255)',
    title: 'Text color',
    type: f.Color,
  },
  PPM8eZNfR: {
    defaultValue: 'rgb(0, 29, 178)',
    title: 'Button fill',
    type: f.Color,
  },
  bZsnTBIZu: {
    defaultValue: 'rgb(21, 39, 102)',
    title: 'Background Color',
    type: f.Color,
  },
  CiWo9qyo0: { title: 'Link', type: f.Link },
});
ee(
  br,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ao = {
  exports: {
    Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
    default: {
      type: 'reactComponent',
      name: 'Framera6gVLSPwa',
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"PKTlAyCDq":{"layout":["auto","auto"]}}}',
        framerContractVersion: '1',
        framerIntrinsicHeight: '59',
        framerComponentViewportWidth: 'true',
        framerVariables:
          '{"ofLqZhEO8":"buttonText","Rb5OgUSWE":"textSize","BrUi5h7tU":"textColor","PPM8eZNfR":"buttonFill","bZsnTBIZu":"backgroundColor","CiWo9qyo0":"link"}',
        framerIntrinsicWidth: '96',
        framerImmutableVariables: 'true',
        framerDisplayContentsDiv: 'false',
      },
    },
    __FramerMetadata__: { type: 'variable' },
  },
};
g();
var Io = { fZLCtDaVa: { hover: !0 } },
  Do = ['fZLCtDaVa', 'jfLXtdYzG'],
  jo = 'framer-A3q03',
  Bo = { fZLCtDaVa: 'framer-v-cmmrm2', jfLXtdYzG: 'framer-v-1y70auv' };
function Oa(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var Fo = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: 'tween' },
  Uo = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  Ho = l(p),
  qo = { 'Variant - Pressed': 'jfLXtdYzG', 'Variant 1': 'fZLCtDaVa' },
  Yo = ({ cursor: e, height: t, hitCursor: a, id: n, width: o, ...i }) => {
    var s, m;
    return {
      ...i,
      lVIQMnftQ: e ?? i.lVIQMnftQ,
      Meuey6qiC: a ?? i.Meuey6qiC,
      variant:
        (m = (s = qo[i.variant]) !== null && s !== void 0 ? s : i.variant) !==
          null && m !== void 0
          ? m
          : 'fZLCtDaVa',
    };
  },
  Zo = (e, t) => t.join('-') + e.layoutDependency,
  Qo = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        lVIQMnftQ: b,
        Meuey6qiC: d,
        ...u
      } = Yo(e),
      {
        baseVariant: h,
        classNames: v,
        gestureVariant: M,
        setGestureState: y,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: Do,
        defaultVariant: 'fZLCtDaVa',
        enabledGestures: Io,
        variant: m,
        variantClassNames: Bo,
      }),
      x = Zo(e, R),
      { activeVariantCallback: C, delay: S } = pe(h),
      N = C(async (...E) => {
        y({ isPressed: !1 }), T('jfLXtdYzG');
      }),
      z = C(async (...E) => {
        await S(() => T('fZLCtDaVa'), 3e3);
      });
    Ge(h, { jfLXtdYzG: z });
    let L = V(null),
      G = X(),
      O = [],
      j = ne();
    return r(U, {
      id: s ?? G,
      children: r(Ho, {
        animate: R,
        initial: !1,
        children: r(Uo, {
          value: Fo,
          children: c(l.div, {
            ...u,
            className: Y(jo, ...O, 'framer-cmmrm2', i, v),
            'data-framer-cursor': b,
            'data-framer-name': 'Variant 1',
            'data-highlight': !0,
            layoutDependency: x,
            layoutId: 'fZLCtDaVa',
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: N,
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: t ?? L,
            style: { ...o },
            ...Oa(
              {
                'fZLCtDaVa-hover': { 'data-framer-name': void 0 },
                jfLXtdYzG: {
                  'data-framer-cursor': d,
                  'data-framer-name': 'Variant - Pressed',
                },
              },
              h,
              M
            ),
            children: [
              c(l.div, {
                className: 'framer-169qaok',
                layoutDependency: x,
                layoutId: 'yFoIA9d4C',
                children: [
                  r(l.div, {
                    className: 'framer-1s0crh7',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'lRqMxRmCF',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(7, 34, 172)',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: r(l.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-font-size': '21px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                          },
                          children: 'PHASE 4',
                        }),
                      }),
                      className: 'framer-wbblni',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'ybPvd82HJ',
                      style: {
                        '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                  r(l.div, {
                    className: 'framer-x9ealo',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'xy1RYq5fZ',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '0px',
                      backgroundColor: 'rgb(38, 70, 234)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: c(l.ul, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color':
                              'var(--extracted-1l7ec2w, rgb(255, 255, 255))',
                          },
                          children: [
                            r(l.li, {
                              children: r(l.p, {
                                children: 'LAUNCH $PEBIRD MERCH STORE',
                              }),
                            }),
                            r(l.li, {
                              children: r(l.p, { children: '50.000 HOLDERS' }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children:
                                  'LAUNCH of $PEBIRD DAO FOR COMMUNITY GOVERNANCE',
                              }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children:
                                  'ESTABLISHING $PEBIRD AS A RECOGNISED BRAND',
                              }),
                            }),
                          ],
                        }),
                      }),
                      className: 'framer-1sc6t1d',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'MakCfu4Ee',
                      style: {
                        '--extracted-1l7ec2w': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
              c(l.div, {
                className: 'framer-j6l76x',
                layoutDependency: x,
                layoutId: 'JSjHfJTkk',
                children: [
                  r(W, {
                    background: {
                      alt: '',
                      fit: 'fit',
                      intrinsicHeight: 64,
                      intrinsicWidth: 263,
                      pixelHeight: 557,
                      pixelWidth: 420,
                      positionX: 'center',
                      positionY: 'bottom',
                      sizes: '212px',
                      src: './images/NPsouGXheRMziUFFMKv9e2NhD6A.png?scale-down-to=512',
                      srcSet: './images/NPsouGXheRMziUFFMKv9e2NhD6A.png 420w',
                    },
                    className: 'framer-1qf5ab',
                    'data-framer-name': 'image 5',
                    layoutDependency: x,
                    layoutId: 'tE1aGyVlY',
                  }),
                  c(l.div, {
                    className: 'framer-3vf3rm',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'zwwi9dEVk',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(154, 95, 76)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: '0px 4px 2px 0px rgba(0,0,0,0.25)',
                      rotate: -2,
                    },
                    children: [
                      r(l.div, {
                        className: 'framer-1u4oxfd',
                        layoutDependency: x,
                        layoutId: 'O1VYooqHQ',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-h63akf',
                        layoutDependency: x,
                        layoutId: 'yKhepv6WT',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-2uamnw',
                        layoutDependency: x,
                        layoutId: 'jOfDjftFT',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-9v6af4',
                        layoutDependency: x,
                        layoutId: 'zqbsesqPv',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(w, {
                        __fromCanvasComponent: !0,
                        children: r(p, {
                          children: r(l.p, {
                            style: {
                              '--font-selector':
                                'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                              '--framer-font-family':
                                '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                              '--framer-font-size': '21px',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: '[SOON]',
                          }),
                        }),
                        className: 'framer-1r2xx1c',
                        fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                        layoutDependency: x,
                        layoutId: 'YA5tmwYIx',
                        style: {
                          '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                        },
                        verticalAlignment: 'top',
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  r(l.div, {
                    className: 'framer-12l8e19',
                    'data-framer-name': 'pigeon',
                    layoutDependency: x,
                    layoutId: 'UPh0bOIGj',
                    children: r(W, {
                      background: {
                        alt: '',
                        fit: 'fit',
                        pixelHeight: 506,
                        pixelWidth: 528,
                        positionX: 'center',
                        positionY: 'bottom',
                        sizes: '187px',
                        src: './images/PN34ipMT2rgoollpaJDkbcOym4.png',
                        srcSet:
                          './images/PN34ipMT2rgoollpaJDkbcOym4.png?scale-down-to=512 512w,./images/PN34ipMT2rgoollpaJDkbcOym4.png 528w',
                      },
                      className: 'framer-1qtgsf0',
                      'data-framer-name': 'pigeon',
                      layoutDependency: x,
                      layoutId: 'fjtk8JiZw',
                      ...Oa(
                        {
                          jfLXtdYzG: {
                            background: {
                              alt: '',
                              fit: 'fit',
                              pixelHeight: 1388,
                              pixelWidth: 1056,
                              positionX: 'center',
                              positionY: 'bottom',
                              sizes: '187px',
                              src: './images/5zjennoOoUKml4cs3XnAtai2cg.png',
                              srcSet:
                                './images/5zjennoOoUKml4cs3XnAtai2cg.png?scale-down-to=1024 779w,./images/5zjennoOoUKml4cs3XnAtai2cg.png 1056w',
                            },
                          },
                        },
                        h,
                        M
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Xo = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-A3q03.framer-1nwispw, .framer-A3q03 .framer-1nwispw { display: block; }',
    '.framer-A3q03.framer-cmmrm2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 315px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-A3q03 .framer-169qaok { align-content: center; align-items: center; bottom: 325px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-A3q03 .framer-1s0crh7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-A3q03 .framer-wbblni, .framer-A3q03 .framer-1r2xx1c { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-A3q03 .framer-x9ealo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-A3q03 .framer-1sc6t1d { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-A3q03 .framer-j6l76x { flex: none; height: 277px; overflow: visible; position: relative; width: 212px; }',
    '.framer-A3q03 .framer-1qf5ab { bottom: -4px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-A3q03 .framer-3vf3rm { align-content: center; align-items: center; bottom: 99px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 54px; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; width: auto; will-change: var(--framer-will-change-override, transform); }',
    '.framer-A3q03 .framer-1u4oxfd { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-A3q03 .framer-h63akf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-A3q03 .framer-2uamnw { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-A3q03 .framer-9v6af4 { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-A3q03 .framer-12l8e19 { flex: none; height: 231px; left: calc(49.52830188679248% - 187px / 2); overflow: hidden; position: absolute; top: -231px; width: 187px; z-index: 1; }',
    '.framer-A3q03 .framer-1qtgsf0 { flex: none; height: 231px; left: calc(49.73262032085564% - 187px / 2); overflow: hidden; position: absolute; top: 231px; width: 187px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-A3q03.framer-cmmrm2, .framer-A3q03 .framer-169qaok, .framer-A3q03 .framer-1s0crh7, .framer-A3q03 .framer-x9ealo, .framer-A3q03 .framer-3vf3rm { gap: 0px; } .framer-A3q03.framer-cmmrm2 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-A3q03.framer-cmmrm2 > :first-child, .framer-A3q03 .framer-169qaok > :first-child { margin-top: 0px; } .framer-A3q03.framer-cmmrm2 > :last-child, .framer-A3q03 .framer-169qaok > :last-child { margin-bottom: 0px; } .framer-A3q03 .framer-169qaok > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-A3q03 .framer-1s0crh7 > *, .framer-A3q03 .framer-x9ealo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-A3q03 .framer-1s0crh7 > :first-child, .framer-A3q03 .framer-x9ealo > :first-child, .framer-A3q03 .framer-3vf3rm > :first-child { margin-left: 0px; } .framer-A3q03 .framer-1s0crh7 > :last-child, .framer-A3q03 .framer-x9ealo > :last-child, .framer-A3q03 .framer-3vf3rm > :last-child { margin-right: 0px; } .framer-A3q03 .framer-3vf3rm > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
    '.framer-A3q03.framer-v-1y70auv .framer-169qaok, .framer-A3q03.framer-v-cmmrm2.hover .framer-169qaok { bottom: 437px; }',
    '.framer-A3q03.framer-v-1y70auv .framer-1qtgsf0, .framer-A3q03.framer-v-cmmrm2.hover .framer-1qtgsf0 { top: 35px; }',
    '.framer-A3q03[data-border="true"]::after, .framer-A3q03 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  yr = K(Qo, Xo, 'framer-A3q03'),
  Pt = yr;
yr.displayName = 'Pilar P4';
yr.defaultProps = { height: 592, width: 240 };
B(yr, {
  variant: {
    options: ['fZLCtDaVa', 'jfLXtdYzG'],
    optionTitles: ['Variant 1', 'Variant - Pressed'],
    title: 'Variant',
    type: f.Enum,
  },
  lVIQMnftQ: { title: 'Cursor', type: f.CustomCursor },
  Meuey6qiC: { title: 'Hit Cursor', type: f.CustomCursor },
});
ee(
  yr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
g();
g();
st.loadFonts([]);
var Hr = [{ explicitInter: !0, fonts: [] }],
  qr = [
    '.framer-87hNq .framer-styles-preset-1wicq5s:not(.rich-text-wrapper), .framer-87hNq .framer-styles-preset-1wicq5s.rich-text-wrapper a { --framer-link-current-text-color: #ffffff; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: rgba(255, 255, 255, 0.7); --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }',
  ],
  Yr = 'framer-87hNq';
var Jo = ie(Ye),
  Ko = ['O1iTyTq_8', 'x9K6Z8Zhx'],
  $o = 'framer-GWwT1',
  ei = { O1iTyTq_8: 'framer-v-18h4bqv', x9K6Z8Zhx: 'framer-v-1uu8ozg' };
function La(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var ri = { duration: 0, type: 'tween' },
  ti = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  ai = l(p),
  ni = { 'Variant 1': 'O1iTyTq_8', 'Variant 2': 'x9K6Z8Zhx' },
  oi = ({ height: e, id: t, width: a, ...n }) => {
    var o, i;
    return {
      ...n,
      variant:
        (i = (o = ni[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && i !== void 0
          ? i
          : 'O1iTyTq_8',
    };
  },
  ii = (e, t) =>
    e.layoutDependency ? t.join('-') + e.layoutDependency : t.join('-'),
  li = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      { style: o, className: i, layoutId: s, variant: m, ...b } = oi(e),
      {
        baseVariant: d,
        classNames: u,
        gestureHandlers: h,
        gestureVariant: v,
        setGestureState: M,
        setVariant: y,
        variants: T,
      } = oe({
        cycleOrder: Ko,
        defaultVariant: 'O1iTyTq_8',
        variant: m,
        variantClassNames: ei,
      }),
      R = ii(e, T),
      { activeVariantCallback: x, delay: C } = pe(d),
      S = x(async (...E) => {
        y('x9K6Z8Zhx');
      }),
      N = x(async (...E) => {
        y('O1iTyTq_8');
      }),
      z = V(null),
      L = () => d === 'x9K6Z8Zhx',
      G = X(),
      O = [Yr],
      j = ne();
    return r(U, {
      id: s ?? G,
      children: r(ai, {
        animate: T,
        initial: !1,
        children: r(ti, {
          value: ri,
          children: c(l.div, {
            ...b,
            ...h,
            className: Y($o, ...O, 'framer-18h4bqv', i, u),
            'data-border': !0,
            'data-framer-name': 'Variant 1',
            layoutDependency: R,
            layoutId: 'O1iTyTq_8',
            ref: t ?? z,
            style: {
              '--border-bottom-width': '1px',
              '--border-color': 'rgba(0, 0, 0, 0.25)',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-style': 'solid',
              '--border-top-width': '0px',
              backgroundColor: 'rgb(59, 91, 255)',
              ...o,
            },
            ...La({ x9K6Z8Zhx: { 'data-framer-name': 'Variant 2' } }, d, v),
            children: [
              r(l.div, {
                className: 'framer-fu0y8u',
                'data-framer-name': 'wrapper',
                layoutDependency: R,
                layoutId: 'pUqgbbBCB',
                children: c(l.div, {
                  className: 'framer-1dy6pt4',
                  'data-framer-name': 'container',
                  layoutDependency: R,
                  layoutId: 'IDifVBtSU',
                  children: [
                    r(l.div, {
                      className: 'framer-n8az5',
                      'data-framer-name': 'logo and mobile menu',
                      layoutDependency: R,
                      layoutId: 'ta4VjRUZv',
                      children: c(l.div, {
                        className: 'framer-8999z1',
                        'data-framer-name': 'hamburger',
                        'data-highlight': !0,
                        layoutDependency: R,
                        layoutId: 'ehnCHjFga',
                        onTap: S,
                        ...La({ x9K6Z8Zhx: { onTap: N } }, d, v),
                        children: [
                          r(l.div, {
                            className: 'framer-1ybb975',
                            'data-framer-name': 'Bottom',
                            layoutDependency: R,
                            layoutId: 'EE3zI_JRV',
                            style: {
                              backgroundColor: 'rgb(255, 255, 255)',
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              rotate: 0,
                            },
                            variants: { x9K6Z8Zhx: { rotate: -45 } },
                          }),
                          r(l.div, {
                            className: 'framer-sirfy2',
                            'data-framer-name': 'Mid',
                            layoutDependency: R,
                            layoutId: 'FaM6cv3Dt',
                            style: {
                              backgroundColor: 'rgb(255, 255, 255)',
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                          }),
                          r(l.div, {
                            className: 'framer-1e2bmx9',
                            'data-framer-name': 'Top',
                            layoutDependency: R,
                            layoutId: 'EQV8yrMuE',
                            style: {
                              backgroundColor: 'rgb(255, 255, 255)',
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              rotate: 0,
                            },
                            variants: { x9K6Z8Zhx: { rotate: 45 } },
                          }),
                        ],
                      }),
                    }),
                    r(D, {
                      children: r(l.div, {
                        className: 'framer-16d1l02-container',
                        layoutDependency: R,
                        layoutId: 'gPkRTpH7K-container',
                        children: r(Ye, {
                          BrUi5h7tU: 'rgb(255, 255, 255)',
                          bZsnTBIZu: 'rgb(21, 39, 102)',
                          CiWo9qyo0:
                            'https://pump.fun/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                          height: '100%',
                          id: 'gPkRTpH7K',
                          layoutId: 'gPkRTpH7K',
                          ofLqZhEO8: '$BUY',
                          PPM8eZNfR: 'rgb(0, 29, 178)',
                          Rb5OgUSWE: 16,
                          width: '100%',
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              L() &&
                r(l.div, {
                  className: 'framer-1xs0b2m',
                  'data-border': !0,
                  'data-framer-name': 'mobile menu',
                  layoutDependency: R,
                  layoutId: 'LJiedM8X3',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgba(255, 255, 255, 0.1)',
                    '--border-left-width': '0px',
                    '--border-right-width': '0px',
                    '--border-style': 'solid',
                    '--border-top-width': '0px',
                  },
                  children:
                    L() &&
                    c(l.div, {
                      className: 'framer-tqyutu',
                      'data-framer-name': 'menu',
                      layoutDependency: R,
                      layoutId: 'pkjPtXSQX',
                      children: [
                        r(w, {
                          __fromCanvasComponent: !0,
                          children: r(p, {
                            children: r(l.p, {
                              style: {
                                '--font-selector':
                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                '--framer-font-family':
                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                '--framer-font-size': '20px',
                                '--framer-letter-spacing': '1.5px',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                '--framer-text-transform': 'uppercase',
                              },
                              children: r(ke, {
                                href: {
                                  hash: ':s5SlUrkfV',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: r(l.a, {
                                  className: 'framer-styles-preset-1wicq5s',
                                  'data-styles-preset': 'ro7OPezbn',
                                  children: 'Roadmap',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-19mexvl',
                          'data-framer-name': 'About',
                          fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                          layoutDependency: R,
                          layoutId: 'Tw6pYiuQZ',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)' },
                          verticalAlignment: 'center',
                          withExternalLayout: !0,
                        }),
                        r(w, {
                          __fromCanvasComponent: !0,
                          children: r(p, {
                            children: r(l.p, {
                              style: {
                                '--font-selector':
                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                '--framer-font-family':
                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                '--framer-font-size': '20px',
                                '--framer-letter-spacing': '1.5px',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                '--framer-text-transform': 'uppercase',
                              },
                              children: r(ke, {
                                href: {
                                  hash: ':P2_fKbVen',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: r(l.a, {
                                  className: 'framer-styles-preset-1wicq5s',
                                  'data-styles-preset': 'ro7OPezbn',
                                  children: 'Tokenomics',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-1q5ibki',
                          'data-framer-name': 'How to buy',
                          fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                          layoutDependency: R,
                          layoutId: 'r5XfVQTqm',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)' },
                          verticalAlignment: 'center',
                          withExternalLayout: !0,
                        }),
                        r(w, {
                          __fromCanvasComponent: !0,
                          children: r(p, {
                            children: r(l.p, {
                              style: {
                                '--font-selector':
                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                '--framer-font-family':
                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                '--framer-font-size': '20px',
                                '--framer-letter-spacing': '1.5px',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                '--framer-text-transform': 'uppercase',
                              },
                              children: 'FAQ',
                            }),
                          }),
                          className: 'framer-hue1py',
                          'data-framer-name': 'Tokenomics',
                          fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                          layoutDependency: R,
                          layoutId: 'KOisuBl6d',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)' },
                          verticalAlignment: 'center',
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  si = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-GWwT1.framer-1xpbohl, .framer-GWwT1 .framer-1xpbohl { display: block; }',
    '.framer-GWwT1.framer-18h4bqv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 390px; }',
    '.framer-GWwT1 .framer-fu0y8u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
    '.framer-GWwT1 .framer-1dy6pt4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1168px; overflow: visible; padding: 16px 28px 16px 28px; position: relative; width: 100%; }',
    '.framer-GWwT1 .framer-n8az5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-GWwT1 .framer-8999z1 { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; }',
    '.framer-GWwT1 .framer-1ybb975 { bottom: 7px; flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; width: 24px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-GWwT1 .framer-sirfy2 { flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 24px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-GWwT1 .framer-1e2bmx9 { flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; top: 7px; width: 24px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-GWwT1 .framer-16d1l02-container { flex: none; height: auto; position: relative; width: auto; }',
    '.framer-GWwT1 .framer-1xs0b2m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: auto; justify-content: center; overflow: visible; padding: 24px 0px 40px 0px; position: relative; width: 100%; }',
    '.framer-GWwT1 .framer-tqyutu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-GWwT1 .framer-19mexvl, .framer-GWwT1 .framer-1q5ibki, .framer-GWwT1 .framer-hue1py { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GWwT1.framer-18h4bqv, .framer-GWwT1 .framer-fu0y8u, .framer-GWwT1 .framer-n8az5, .framer-GWwT1 .framer-1xs0b2m, .framer-GWwT1 .framer-tqyutu { gap: 0px; } .framer-GWwT1.framer-18h4bqv > *, .framer-GWwT1 .framer-fu0y8u > *, .framer-GWwT1 .framer-n8az5 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-GWwT1.framer-18h4bqv > :first-child, .framer-GWwT1 .framer-fu0y8u > :first-child, .framer-GWwT1 .framer-n8az5 > :first-child { margin-left: 0px; } .framer-GWwT1.framer-18h4bqv > :last-child, .framer-GWwT1 .framer-fu0y8u > :last-child, .framer-GWwT1 .framer-n8az5 > :last-child { margin-right: 0px; } .framer-GWwT1 .framer-1xs0b2m > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-GWwT1 .framer-1xs0b2m > :first-child, .framer-GWwT1 .framer-tqyutu > :first-child { margin-top: 0px; } .framer-GWwT1 .framer-1xs0b2m > :last-child, .framer-GWwT1 .framer-tqyutu > :last-child { margin-bottom: 0px; } .framer-GWwT1 .framer-tqyutu > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }',
    '.framer-GWwT1.framer-v-1uu8ozg.framer-18h4bqv { flex-direction: column; }',
    '.framer-GWwT1.framer-v-1uu8ozg .framer-1ybb975 { bottom: 15px; height: unset; top: 15px; }',
    '.framer-GWwT1.framer-v-1uu8ozg .framer-sirfy2 { left: calc(50.00000000000002% - 2px / 2); width: 2px; }',
    '.framer-GWwT1.framer-v-1uu8ozg .framer-1e2bmx9 { top: 15px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GWwT1.framer-v-1uu8ozg.framer-18h4bqv { gap: 0px; } .framer-GWwT1.framer-v-1uu8ozg.framer-18h4bqv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-GWwT1.framer-v-1uu8ozg.framer-18h4bqv > :first-child { margin-top: 0px; } .framer-GWwT1.framer-v-1uu8ozg.framer-18h4bqv > :last-child { margin-bottom: 0px; } }',
    ...qr,
    '.framer-GWwT1[data-border="true"]::after, .framer-GWwT1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  vr = K(li, si, 'framer-GWwT1'),
  _t = vr;
vr.displayName = 'Navbar mobile';
vr.defaultProps = { height: 81, width: 390 };
B(vr, {
  variant: {
    options: ['O1iTyTq_8', 'x9K6Z8Zhx'],
    optionTitles: ['Variant 1', 'Variant 2'],
    title: 'Variant',
    type: f.Enum,
  },
});
ee(
  vr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
    ...Jo,
    ...Pr(Hr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
g();
var fi = { IWpILndgO: { hover: !0 } },
  di = ['IWpILndgO', 'VLFH1VXY9'],
  ci = 'framer-JwGRg',
  mi = { IWpILndgO: 'framer-v-1x7lbl5', VLFH1VXY9: 'framer-v-1kbopdn' };
function Pa(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var pi = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: 'tween' },
  ui = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  hi = l(p),
  gi = { 'Variant - Pressed': 'VLFH1VXY9', 'Variant 1': 'IWpILndgO' },
  xi = ({ cursor: e, height: t, hitCursor: a, id: n, width: o, ...i }) => {
    var s, m;
    return {
      ...i,
      lVIQMnftQ: e ?? i.lVIQMnftQ,
      Meuey6qiC: a ?? i.Meuey6qiC,
      variant:
        (m = (s = gi[i.variant]) !== null && s !== void 0 ? s : i.variant) !==
          null && m !== void 0
          ? m
          : 'IWpILndgO',
    };
  },
  bi = (e, t) => t.join('-') + e.layoutDependency,
  yi = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        lVIQMnftQ: b,
        Meuey6qiC: d,
        ...u
      } = xi(e),
      {
        baseVariant: h,
        classNames: v,
        gestureVariant: M,
        setGestureState: y,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: di,
        defaultVariant: 'IWpILndgO',
        enabledGestures: fi,
        variant: m,
        variantClassNames: mi,
      }),
      x = bi(e, R),
      { activeVariantCallback: C, delay: S } = pe(h),
      N = C(async (...E) => {
        y({ isPressed: !1 }), T('VLFH1VXY9');
      }),
      z = C(async (...E) => {
        await S(() => T('IWpILndgO'), 3e3);
      });
    Ge(h, { VLFH1VXY9: z });
    let L = V(null),
      G = X(),
      O = [],
      j = ne();
    return r(U, {
      id: s ?? G,
      children: r(hi, {
        animate: R,
        initial: !1,
        children: r(ui, {
          value: pi,
          children: c(l.div, {
            ...u,
            className: Y(ci, ...O, 'framer-1x7lbl5', i, v),
            'data-framer-cursor': b,
            'data-framer-name': 'Variant 1',
            'data-highlight': !0,
            layoutDependency: x,
            layoutId: 'IWpILndgO',
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: N,
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: t ?? L,
            style: { ...o },
            ...Pa(
              {
                'IWpILndgO-hover': { 'data-framer-name': void 0 },
                VLFH1VXY9: {
                  'data-framer-cursor': d,
                  'data-framer-name': 'Variant - Pressed',
                },
              },
              h,
              M
            ),
            children: [
              c(l.div, {
                className: 'framer-1zi7lu',
                layoutDependency: x,
                layoutId: 'CSY6rLbOL',
                children: [
                  r(l.div, {
                    className: 'framer-1x9jt1k',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'oAjAmt_6n',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(7, 34, 172)',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: r(l.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-font-size': '21px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                          },
                          children: 'PHASE 2',
                        }),
                      }),
                      className: 'framer-1jd1sus',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'pmDlzA_YH',
                      style: {
                        '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                  r(l.div, {
                    className: 'framer-rf3uzn',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'XvH7PapCO',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '0px',
                      backgroundColor: 'rgb(38, 70, 234)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: c(l.ul, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color':
                              'var(--extracted-1l7ec2w, rgb(255, 255, 255))',
                          },
                          children: [
                            r(l.li, {
                              children: r(l.p, { children: '5.000 HOLDERS' }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'COMMUNITY REWARDS PROGRAM',
                              }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'SHITTING ON BAD ACTORS',
                              }),
                            }),
                          ],
                        }),
                      }),
                      className: 'framer-3gpkky',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'KXidMo9Mg',
                      style: {
                        '--extracted-1l7ec2w': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
              c(l.div, {
                className: 'framer-10nghvb',
                layoutDependency: x,
                layoutId: 'CN9fECcpH',
                children: [
                  r(W, {
                    background: {
                      alt: '',
                      fit: 'fit',
                      intrinsicHeight: 64,
                      intrinsicWidth: 263,
                      pixelHeight: 382,
                      pixelWidth: 420,
                      positionX: 'center',
                      positionY: 'bottom',
                      src: './images/i02zg8HxX9r9xHxLi3ZMFT2hc4Y.png',
                    },
                    className: 'framer-1qip7u',
                    'data-framer-name': 'image 5',
                    layoutDependency: x,
                    layoutId: 'ZrJ3qj41s',
                  }),
                  r(l.div, {
                    className: 'framer-10mpijp',
                    'data-framer-name': 'pigeon',
                    layoutDependency: x,
                    layoutId: 'ef1Cnq6_j',
                    children: r(W, {
                      background: {
                        alt: '',
                        fit: 'fit',
                        pixelHeight: 506,
                        pixelWidth: 528,
                        positionX: 'center',
                        positionY: 'bottom',
                        sizes: '187px',
                        src: './images/QC22T5e0SOvLc39fBoJFPzcWDI.png',
                        srcSet:
                          './images/QC22T5e0SOvLc39fBoJFPzcWDI.png?scale-down-to=512 512w,./images/QC22T5e0SOvLc39fBoJFPzcWDI.png 528w',
                      },
                      className: 'framer-1h84siz',
                      'data-framer-name': 'pigeon',
                      layoutDependency: x,
                      layoutId: 'WZ2EAtzhA',
                      ...Pa(
                        {
                          VLFH1VXY9: {
                            background: {
                              alt: '',
                              fit: 'fit',
                              pixelHeight: 1308,
                              pixelWidth: 1056,
                              positionX: 'center',
                              positionY: 'bottom',
                              sizes: '187px',
                              src: './images/QGbjR0IaXyw8DYxzlhIRgXriM.png',
                              srcSet:
                                './images/QGbjR0IaXyw8DYxzlhIRgXriM.png?scale-down-to=1024 826w,./images/QGbjR0IaXyw8DYxzlhIRgXriM.png 1056w',
                            },
                          },
                        },
                        h,
                        M
                      ),
                    }),
                  }),
                  c(l.div, {
                    className: 'framer-18qcr5l',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'upBXHrxk7',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(154, 95, 76)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: '0px 4px 2px 0px rgba(0,0,0,0.25)',
                      rotate: -2,
                    },
                    children: [
                      r(l.div, {
                        className: 'framer-5bcuy2',
                        layoutDependency: x,
                        layoutId: 'YYGffml8R',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-lm51ry',
                        layoutDependency: x,
                        layoutId: 'JaNjVobo5',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-1gzxx6x',
                        layoutDependency: x,
                        layoutId: 'HNb2J3i73',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-1yawqn4',
                        layoutDependency: x,
                        layoutId: 'IuAk8SWA8',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(w, {
                        __fromCanvasComponent: !0,
                        children: r(p, {
                          children: r(l.p, {
                            style: {
                              '--font-selector':
                                'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                              '--framer-font-family':
                                '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                              '--framer-font-size': '21px',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: '[SOON]',
                          }),
                        }),
                        className: 'framer-h7e72n',
                        fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                        layoutDependency: x,
                        layoutId: 'z9M_geIHq',
                        style: {
                          '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                        },
                        verticalAlignment: 'top',
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  vi = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-JwGRg.framer-5xoeou, .framer-JwGRg .framer-5xoeou { display: block; }',
    '.framer-JwGRg.framer-1x7lbl5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 238px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-JwGRg .framer-1zi7lu { align-content: center; align-items: center; bottom: 235px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-JwGRg .framer-1x9jt1k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-JwGRg .framer-1jd1sus, .framer-JwGRg .framer-h7e72n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-JwGRg .framer-rf3uzn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-JwGRg .framer-3gpkky { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-JwGRg .framer-10nghvb { flex: none; height: 187px; overflow: visible; position: relative; width: 212px; }',
    '.framer-JwGRg .framer-1qip7u { bottom: -6px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-JwGRg .framer-10mpijp { flex: none; height: 231px; left: calc(49.52830188679248% - 187px / 2); overflow: hidden; position: absolute; top: -231px; width: 187px; z-index: 1; }',
    '.framer-JwGRg .framer-1h84siz { flex: none; height: 231px; left: calc(49.73262032085564% - 187px / 2); overflow: hidden; position: absolute; top: 231px; width: 187px; }',
    '.framer-JwGRg .framer-18qcr5l { align-content: center; align-items: center; bottom: 34px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 54px; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; width: auto; will-change: var(--framer-will-change-override, transform); }',
    '.framer-JwGRg .framer-5bcuy2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-JwGRg .framer-lm51ry { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-JwGRg .framer-1gzxx6x { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-JwGRg .framer-1yawqn4 { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-JwGRg.framer-1x7lbl5, .framer-JwGRg .framer-1zi7lu, .framer-JwGRg .framer-1x9jt1k, .framer-JwGRg .framer-rf3uzn, .framer-JwGRg .framer-18qcr5l { gap: 0px; } .framer-JwGRg.framer-1x7lbl5 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-JwGRg.framer-1x7lbl5 > :first-child, .framer-JwGRg .framer-1zi7lu > :first-child { margin-top: 0px; } .framer-JwGRg.framer-1x7lbl5 > :last-child, .framer-JwGRg .framer-1zi7lu > :last-child { margin-bottom: 0px; } .framer-JwGRg .framer-1zi7lu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JwGRg .framer-1x9jt1k > *, .framer-JwGRg .framer-rf3uzn > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JwGRg .framer-1x9jt1k > :first-child, .framer-JwGRg .framer-rf3uzn > :first-child, .framer-JwGRg .framer-18qcr5l > :first-child { margin-left: 0px; } .framer-JwGRg .framer-1x9jt1k > :last-child, .framer-JwGRg .framer-rf3uzn > :last-child, .framer-JwGRg .framer-18qcr5l > :last-child { margin-right: 0px; } .framer-JwGRg .framer-18qcr5l > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
    '.framer-JwGRg.framer-v-1kbopdn .framer-1zi7lu, .framer-JwGRg.framer-v-1x7lbl5.hover .framer-1zi7lu { bottom: 347px; }',
    '.framer-JwGRg.framer-v-1kbopdn .framer-1h84siz, .framer-JwGRg.framer-v-1x7lbl5.hover .framer-1h84siz { top: 35px; }',
    '.framer-JwGRg[data-border="true"]::after, .framer-JwGRg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  wr = K(yi, vi, 'framer-JwGRg'),
  At = wr;
wr.displayName = 'Pilar P2';
wr.defaultProps = { height: 425, width: 240 };
B(wr, {
  variant: {
    options: ['IWpILndgO', 'VLFH1VXY9'],
    optionTitles: ['Variant 1', 'Variant - Pressed'],
    title: 'Variant',
    type: f.Enum,
  },
  lVIQMnftQ: { title: 'Cursor', type: f.CustomCursor },
  Meuey6qiC: { title: 'Hit Cursor', type: f.CustomCursor },
});
ee(
  wr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
g();
var wi = { Vs42hLi0k: { hover: !0 } },
  Ri = ['Vs42hLi0k', 'dYYLo0BmC'],
  Mi = 'framer-Xnxnj',
  Gi = { dYYLo0BmC: 'framer-v-7bfzn4', Vs42hLi0k: 'framer-v-17php1l' };
function _a(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var Ci = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: 'tween' },
  Vi = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  Ti = l(p),
  Si = { 'Variant - Pressed': 'dYYLo0BmC', 'Variant 1': 'Vs42hLi0k' },
  ki = ({ cursor: e, height: t, hitCursor: a, id: n, width: o, ...i }) => {
    var s, m;
    return {
      ...i,
      lVIQMnftQ: e ?? i.lVIQMnftQ,
      Meuey6qiC: a ?? i.Meuey6qiC,
      variant:
        (m = (s = Si[i.variant]) !== null && s !== void 0 ? s : i.variant) !==
          null && m !== void 0
          ? m
          : 'Vs42hLi0k',
    };
  },
  Ni = (e, t) => t.join('-') + e.layoutDependency,
  Wi = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        lVIQMnftQ: b,
        Meuey6qiC: d,
        ...u
      } = ki(e),
      {
        baseVariant: h,
        classNames: v,
        gestureVariant: M,
        setGestureState: y,
        setVariant: T,
        variants: R,
      } = oe({
        cycleOrder: Ri,
        defaultVariant: 'Vs42hLi0k',
        enabledGestures: wi,
        variant: m,
        variantClassNames: Gi,
      }),
      x = Ni(e, R),
      { activeVariantCallback: C, delay: S } = pe(h),
      N = C(async (...E) => {
        y({ isPressed: !1 }), T('dYYLo0BmC');
      }),
      z = C(async (...E) => {
        await S(() => T('Vs42hLi0k'), 3e3);
      });
    Ge(h, { dYYLo0BmC: z });
    let L = V(null),
      G = X(),
      O = [],
      j = ne();
    return r(U, {
      id: s ?? G,
      children: r(Ti, {
        animate: R,
        initial: !1,
        children: r(Vi, {
          value: Ci,
          children: c(l.div, {
            ...u,
            className: Y(Mi, ...O, 'framer-17php1l', i, v),
            'data-framer-cursor': b,
            'data-framer-name': 'Variant 1',
            'data-highlight': !0,
            layoutDependency: x,
            layoutId: 'Vs42hLi0k',
            onHoverEnd: () => y({ isHovered: !1 }),
            onHoverStart: () => y({ isHovered: !0 }),
            onTap: N,
            onTapCancel: () => y({ isPressed: !1 }),
            onTapStart: () => y({ isPressed: !0 }),
            ref: t ?? L,
            style: { ...o },
            ..._a(
              {
                'Vs42hLi0k-hover': { 'data-framer-name': void 0 },
                dYYLo0BmC: {
                  'data-framer-cursor': d,
                  'data-framer-name': 'Variant - Pressed',
                },
              },
              h,
              M
            ),
            children: [
              c(l.div, {
                className: 'framer-3fmmh1',
                layoutDependency: x,
                layoutId: 'REr0lJ6EJ',
                children: [
                  r(l.div, {
                    className: 'framer-198yhvf',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'QygimztkE',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(7, 34, 172)',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: r(l.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-font-size': '21px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                          },
                          children: 'PHASE 3',
                        }),
                      }),
                      className: 'framer-jzgb7c',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'QYrQ2TVN9',
                      style: {
                        '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                  r(l.div, {
                    className: 'framer-w28gcr',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'PuSkMxDf4',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '0px',
                      backgroundColor: 'rgb(38, 70, 234)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: c(l.ul, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color':
                              'var(--extracted-1l7ec2w, rgb(255, 255, 255))',
                          },
                          children: [
                            r(l.li, {
                              children: r(l.p, { children: '10.000 HOLDERS' }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'PARTNERSHIPS WITH TIER 1 MEMES',
                              }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'COMMUNITY ONBOARDING PROGRAM',
                              }),
                            }),
                          ],
                        }),
                      }),
                      className: 'framer-15enbnk',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: x,
                      layoutId: 'SToINOVM_',
                      style: {
                        '--extracted-1l7ec2w': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
              c(l.div, {
                className: 'framer-iq2d4p',
                layoutDependency: x,
                layoutId: 'eNupXmhhj',
                children: [
                  r(W, {
                    background: {
                      alt: '',
                      fit: 'fit',
                      intrinsicHeight: 64,
                      intrinsicWidth: 263,
                      pixelHeight: 452,
                      pixelWidth: 420,
                      positionX: 'center',
                      positionY: 'bottom',
                      src: './images/YIWzS9oJH7ufnpzUBXP33iczGA.png',
                    },
                    className: 'framer-ncdc59',
                    'data-framer-name': 'image 5',
                    layoutDependency: x,
                    layoutId: 'Z6MCXW2em',
                  }),
                  c(l.div, {
                    className: 'framer-1s51aud',
                    'data-border': !0,
                    layoutDependency: x,
                    layoutId: 'tovOZlnCh',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(154, 95, 76)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      boxShadow: '0px 4px 2px 0px rgba(0,0,0,0.25)',
                      rotate: -2,
                    },
                    children: [
                      r(l.div, {
                        className: 'framer-1v4qzgx',
                        layoutDependency: x,
                        layoutId: 'SsKSq76yz',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-r36uh0',
                        layoutDependency: x,
                        layoutId: 'JNS8ynHJQ',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-10didnz',
                        layoutDependency: x,
                        layoutId: 'hlV5HeAJR',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(l.div, {
                        className: 'framer-t94ask',
                        layoutDependency: x,
                        layoutId: 'tPrLJR6Sk',
                        style: {
                          backgroundColor: 'rgb(176, 177, 184)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                          borderTopLeftRadius: 5,
                          borderTopRightRadius: 5,
                          boxShadow: '1.5px 1.5px 0px 0px rgb(51, 52, 56)',
                        },
                      }),
                      r(w, {
                        __fromCanvasComponent: !0,
                        children: r(p, {
                          children: r(l.p, {
                            style: {
                              '--font-selector':
                                'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                              '--framer-font-family':
                                '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                              '--framer-font-size': '21px',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: '[SOON]',
                          }),
                        }),
                        className: 'framer-yoy4np',
                        fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                        layoutDependency: x,
                        layoutId: 'jZDhLc9_j',
                        style: {
                          '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                        },
                        verticalAlignment: 'top',
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  r(l.div, {
                    className: 'framer-12lpez4',
                    'data-framer-name': 'pigeon',
                    layoutDependency: x,
                    layoutId: 'GHlfNqNph',
                    children: r(W, {
                      background: {
                        alt: '',
                        fit: 'fit',
                        pixelHeight: 506,
                        pixelWidth: 528,
                        positionX: 'center',
                        positionY: 'bottom',
                        sizes: '187px',
                        src: './images/c3hPpTdBa6zXGt6bqubLT9BjBa4.png',
                        srcSet:
                          './images/c3hPpTdBa6zXGt6bqubLT9BjBa4.png?scale-down-to=512 512w,./images/c3hPpTdBa6zXGt6bqubLT9BjBa4.png 528w',
                      },
                      className: 'framer-1tk1ksx',
                      'data-framer-name': 'pigeon',
                      layoutDependency: x,
                      layoutId: 'esK5EYnBl',
                      ..._a(
                        {
                          dYYLo0BmC: {
                            background: {
                              alt: '',
                              fit: 'fit',
                              pixelHeight: 1291,
                              pixelWidth: 1056,
                              positionX: 'center',
                              positionY: 'bottom',
                              sizes: '187px',
                              src: './images/a7zm4gWSaDMfTiX80vtollWc2fY.png',
                              srcSet:
                                './images/a7zm4gWSaDMfTiX80vtollWc2fY.png?scale-down-to=1024 837w,./images/a7zm4gWSaDMfTiX80vtollWc2fY.png 1056w',
                            },
                          },
                        },
                        h,
                        M
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  zi = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-Xnxnj.framer-16ostvr, .framer-Xnxnj .framer-16ostvr { display: block; }',
    '.framer-Xnxnj.framer-17php1l { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 258px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-Xnxnj .framer-3fmmh1 { align-content: center; align-items: center; bottom: 272px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-Xnxnj .framer-198yhvf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-Xnxnj .framer-jzgb7c, .framer-Xnxnj .framer-yoy4np { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-Xnxnj .framer-w28gcr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-Xnxnj .framer-15enbnk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-Xnxnj .framer-iq2d4p { flex: none; height: 224px; overflow: visible; position: relative; width: 212px; }',
    '.framer-Xnxnj .framer-ncdc59 { bottom: -4px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-Xnxnj .framer-1s51aud { align-content: center; align-items: center; bottom: 64px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 54px; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; width: auto; will-change: var(--framer-will-change-override, transform); }',
    '.framer-Xnxnj .framer-1v4qzgx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-Xnxnj .framer-r36uh0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-Xnxnj .framer-10didnz { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-Xnxnj .framer-t94ask { aspect-ratio: 1 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-Xnxnj .framer-12lpez4 { flex: none; height: 231px; left: calc(49.52830188679248% - 187px / 2); overflow: hidden; position: absolute; top: -231px; width: 187px; z-index: 1; }',
    '.framer-Xnxnj .framer-1tk1ksx { flex: none; height: 231px; left: calc(49.73262032085564% - 187px / 2); overflow: hidden; position: absolute; top: 231px; width: 187px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Xnxnj.framer-17php1l, .framer-Xnxnj .framer-3fmmh1, .framer-Xnxnj .framer-198yhvf, .framer-Xnxnj .framer-w28gcr, .framer-Xnxnj .framer-1s51aud { gap: 0px; } .framer-Xnxnj.framer-17php1l > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-Xnxnj.framer-17php1l > :first-child, .framer-Xnxnj .framer-3fmmh1 > :first-child { margin-top: 0px; } .framer-Xnxnj.framer-17php1l > :last-child, .framer-Xnxnj .framer-3fmmh1 > :last-child { margin-bottom: 0px; } .framer-Xnxnj .framer-3fmmh1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Xnxnj .framer-198yhvf > *, .framer-Xnxnj .framer-w28gcr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Xnxnj .framer-198yhvf > :first-child, .framer-Xnxnj .framer-w28gcr > :first-child, .framer-Xnxnj .framer-1s51aud > :first-child { margin-left: 0px; } .framer-Xnxnj .framer-198yhvf > :last-child, .framer-Xnxnj .framer-w28gcr > :last-child, .framer-Xnxnj .framer-1s51aud > :last-child { margin-right: 0px; } .framer-Xnxnj .framer-1s51aud > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
    '.framer-Xnxnj.framer-v-7bfzn4 .framer-3fmmh1, .framer-Xnxnj.framer-v-17php1l.hover .framer-3fmmh1 { bottom: 384px; }',
    '.framer-Xnxnj.framer-v-7bfzn4 .framer-1tk1ksx, .framer-Xnxnj.framer-v-17php1l.hover .framer-1tk1ksx { top: 35px; }',
    '.framer-Xnxnj[data-border="true"]::after, .framer-Xnxnj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Rr = K(Wi, zi, 'framer-Xnxnj'),
  It = Rr;
Rr.displayName = 'Pilar P3';
Rr.defaultProps = { height: 482, width: 240 };
B(Rr, {
  variant: {
    options: ['Vs42hLi0k', 'dYYLo0BmC'],
    optionTitles: ['Variant 1', 'Variant - Pressed'],
    title: 'Variant',
    type: f.Enum,
  },
  lVIQMnftQ: { title: 'Cursor', type: f.CustomCursor },
  Meuey6qiC: { title: 'Hit Cursor', type: f.CustomCursor },
});
ee(
  Rr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
g();
var Oi = { dGkLkFC2O: { hover: !0 } },
  Ei = ['dGkLkFC2O', 'pWFtRZaYi'],
  Li = 'framer-ZxZYr',
  Pi = { dGkLkFC2O: 'framer-v-uro5a', pWFtRZaYi: 'framer-v-h2dv9s' };
function Aa(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var _i = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: 'tween' },
  Ai = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  Ii = l(p),
  Di = { 'Variant - Pressed': 'pWFtRZaYi', 'Variant 1': 'dGkLkFC2O' },
  ji = ({ cursor: e, height: t, hitCursor: a, id: n, width: o, ...i }) => {
    var s, m;
    return {
      ...i,
      MuKjYuxHy: e ?? i.MuKjYuxHy,
      PQOSgiUu6: a ?? i.PQOSgiUu6,
      variant:
        (m = (s = Di[i.variant]) !== null && s !== void 0 ? s : i.variant) !==
          null && m !== void 0
          ? m
          : 'dGkLkFC2O',
    };
  },
  Bi = (e, t) =>
    e.layoutDependency ? t.join('-') + e.layoutDependency : t.join('-'),
  Fi = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        PQOSgiUu6: b,
        MuKjYuxHy: d,
        ...u
      } = ji(e),
      {
        baseVariant: h,
        classNames: v,
        gestureHandlers: M,
        gestureVariant: y,
        setGestureState: T,
        setVariant: R,
        variants: x,
      } = oe({
        cycleOrder: Ei,
        defaultVariant: 'dGkLkFC2O',
        enabledGestures: Oi,
        variant: m,
        variantClassNames: Pi,
      }),
      C = Bi(e, x),
      { activeVariantCallback: S, delay: N } = pe(h),
      z = S(async (...re) => {
        T({ isPressed: !1 }), R('pWFtRZaYi');
      }),
      L = S(async (...re) => {
        await N(() => R('dGkLkFC2O'), 3e3);
      });
    Ge(h, { pWFtRZaYi: L });
    let G = V(null),
      O = X(),
      j = [],
      E = ne();
    return r(U, {
      id: s ?? O,
      children: r(Ii, {
        animate: x,
        initial: !1,
        children: r(Ai, {
          value: _i,
          children: c(l.div, {
            ...u,
            ...M,
            className: Y(Li, ...j, 'framer-uro5a', i, v),
            'data-framer-cursor': d,
            'data-framer-name': 'Variant 1',
            'data-highlight': !0,
            layoutDependency: C,
            layoutId: 'dGkLkFC2O',
            onTap: z,
            ref: t ?? G,
            style: { ...o },
            ...Aa(
              {
                'dGkLkFC2O-hover': { 'data-framer-name': void 0 },
                pWFtRZaYi: {
                  'data-framer-cursor': b,
                  'data-framer-name': 'Variant - Pressed',
                },
              },
              h,
              y
            ),
            children: [
              c(l.div, {
                className: 'framer-1xuwpac',
                layoutDependency: C,
                layoutId: 'aqdDCbocr',
                children: [
                  r(l.div, {
                    className: 'framer-a2vlvm',
                    'data-border': !0,
                    layoutDependency: C,
                    layoutId: 'lCCJ2iRm6',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '4px',
                      backgroundColor: 'rgb(7, 34, 172)',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: r(l.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-font-size': '21px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                          },
                          children: 'PHASE 1',
                        }),
                      }),
                      className: 'framer-1aswpd',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: C,
                      layoutId: 'W1OS5XcU1',
                      style: {
                        '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                  r(l.div, {
                    className: 'framer-1ibj60w',
                    'data-border': !0,
                    layoutDependency: C,
                    layoutId: 'tuIeP1b0k',
                    style: {
                      '--border-bottom-width': '4px',
                      '--border-color': 'rgb(0, 0, 0)',
                      '--border-left-width': '4px',
                      '--border-right-width': '4px',
                      '--border-style': 'solid',
                      '--border-top-width': '0px',
                      backgroundColor: 'rgb(38, 70, 234)',
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                    },
                    children: r(w, {
                      __fromCanvasComponent: !0,
                      children: r(p, {
                        children: c(l.ul, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                            '--framer-font-family':
                              '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color':
                              'var(--extracted-1l7ec2w, rgb(255, 255, 255))',
                          },
                          children: [
                            r(l.li, {
                              children: r(l.p, { children: 'FAIR LAUNCH' }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'COINGECKO & COINMARKETCAP LISTINGS',
                              }),
                            }),
                            r(l.li, {
                              children: r(l.p, { children: '1.000+ HOLDERS' }),
                            }),
                            r(l.li, {
                              children: r(l.p, {
                                children: 'GET $PEBIRD TRENDING',
                              }),
                            }),
                          ],
                        }),
                      }),
                      className: 'framer-2gmpl2',
                      fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                      layoutDependency: C,
                      layoutId: 'gGlvCJ05_',
                      style: {
                        '--extracted-1l7ec2w': 'rgb(255, 255, 255)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
              c(l.div, {
                className: 'framer-1tq9yx8',
                layoutDependency: C,
                layoutId: 'ocvYVQ9gS',
                children: [
                  r(W, {
                    background: {
                      alt: '',
                      fit: 'fit',
                      intrinsicHeight: 64,
                      intrinsicWidth: 263,
                      pixelHeight: 242,
                      pixelWidth: 424,
                      positionX: 'center',
                      positionY: 'bottom',
                      src: './images/ixfkGOLZixFHkIcJuEsXoxLV8E.png',
                    },
                    className: 'framer-1fpp6t7',
                    'data-framer-name': 'image 5',
                    layoutDependency: C,
                    layoutId: 's6uxuVCH0',
                  }),
                  r(l.div, {
                    className: 'framer-oflfmt',
                    'data-framer-name': 'pigeon',
                    layoutDependency: C,
                    layoutId: 'ZK1W40sM7',
                    children: r(W, {
                      background: {
                        alt: '',
                        fit: 'fit',
                        pixelHeight: 506,
                        pixelWidth: 528,
                        positionX: 'center',
                        positionY: 'bottom',
                        sizes: '187px',
                        src: './images/Il05Y1YvJFa19nKSIw3bWgIc4.png',
                        srcSet:
                          './images/Il05Y1YvJFa19nKSIw3bWgIc4.png?scale-down-to=512 512w,./images/Il05Y1YvJFa19nKSIw3bWgIc4.png 528w',
                      },
                      className: 'framer-t6w2qe',
                      'data-framer-name': 'pigeon',
                      layoutDependency: C,
                      layoutId: 'c75_c8RPN',
                      ...Aa(
                        {
                          pWFtRZaYi: {
                            background: {
                              alt: '',
                              fit: 'fit',
                              pixelHeight: 1043,
                              pixelWidth: 1056,
                              positionX: 'center',
                              positionY: 'bottom',
                              sizes: '187px',
                              src: './images/OF6jyEFguGs4b4ZCS2H5YEQ8Vk.png',
                              srcSet:
                                './images/OF6jyEFguGs4b4ZCS2H5YEQ8Vk.png?scale-down-to=512 512w,./images/OF6jyEFguGs4b4ZCS2H5YEQ8Vk.png?scale-down-to=1024 1024w,./images/OF6jyEFguGs4b4ZCS2H5YEQ8Vk.png 1056w',
                            },
                          },
                        },
                        h,
                        y
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ui = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-ZxZYr.framer-1iawyj6, .framer-ZxZYr .framer-1iawyj6 { display: block; }',
    '.framer-ZxZYr.framer-uro5a { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 257px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-ZxZYr .framer-1xuwpac { align-content: center; align-items: center; bottom: 165px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-ZxZYr .framer-a2vlvm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-ZxZYr .framer-1aswpd { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-ZxZYr .framer-1ibj60w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-ZxZYr .framer-2gmpl2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-ZxZYr .framer-1tq9yx8 { flex: none; height: 117px; overflow: visible; position: relative; width: 212px; }',
    '.framer-ZxZYr .framer-1fpp6t7 { flex: none; height: 121px; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-ZxZYr .framer-oflfmt { flex: none; height: 231px; left: calc(50.00000000000002% - 187px / 2); overflow: hidden; position: absolute; top: -231px; width: 187px; z-index: 1; }',
    '.framer-ZxZYr .framer-t6w2qe { flex: none; height: 100%; left: calc(49.73262032085564% - 100% / 2); overflow: hidden; position: absolute; top: 231px; width: 100%; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZxZYr.framer-uro5a, .framer-ZxZYr .framer-1xuwpac, .framer-ZxZYr .framer-a2vlvm, .framer-ZxZYr .framer-1ibj60w { gap: 0px; } .framer-ZxZYr.framer-uro5a > *, .framer-ZxZYr .framer-1xuwpac > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-ZxZYr.framer-uro5a > :first-child, .framer-ZxZYr .framer-1xuwpac > :first-child { margin-top: 0px; } .framer-ZxZYr.framer-uro5a > :last-child, .framer-ZxZYr .framer-1xuwpac > :last-child { margin-bottom: 0px; } .framer-ZxZYr .framer-a2vlvm > *, .framer-ZxZYr .framer-1ibj60w > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ZxZYr .framer-a2vlvm > :first-child, .framer-ZxZYr .framer-1ibj60w > :first-child { margin-left: 0px; } .framer-ZxZYr .framer-a2vlvm > :last-child, .framer-ZxZYr .framer-1ibj60w > :last-child { margin-right: 0px; } }',
    '.framer-ZxZYr.framer-v-h2dv9s .framer-1xuwpac, .framer-ZxZYr.framer-v-uro5a.hover .framer-1xuwpac { bottom: 277px; }',
    '.framer-ZxZYr.framer-v-h2dv9s .framer-t6w2qe, .framer-ZxZYr.framer-v-uro5a.hover .framer-t6w2qe { top: 35px; }',
    '.framer-ZxZYr[data-border="true"]::after, .framer-ZxZYr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Mr = K(Fi, Ui, 'framer-ZxZYr'),
  Dt = Mr;
Mr.displayName = 'Pilar P1';
Mr.defaultProps = { height: 374, width: 240 };
B(Mr, {
  variant: {
    options: ['dGkLkFC2O', 'pWFtRZaYi'],
    optionTitles: ['Variant 1', 'Variant - Pressed'],
    title: 'Variant',
    type: f.Enum,
  },
  PQOSgiUu6: { title: 'Hit Cursor', type: f.CustomCursor },
  MuKjYuxHy: { title: 'Cursor', type: f.CustomCursor },
});
ee(
  Mr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
g();
var Hi = { LAfRwR2yX: { hover: !0 } },
  qi = ['LAfRwR2yX'],
  Yi = 'framer-uQtQI',
  Zi = { LAfRwR2yX: 'framer-v-n1zi7e' };
function Qi(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var Xi = {
    delay: 0,
    duration: 0.15,
    ease: [0.5, 0, 0.88, 0.77],
    type: 'tween',
  },
  Ji = (e) =>
    typeof e == 'object' && e !== null && typeof e.src == 'string'
      ? e
      : typeof e == 'string'
      ? { src: e }
      : void 0,
  Ki = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  $i = l(p),
  el = ({
    backgroundColor: e,
    buttonFill: t,
    height: a,
    icon: n,
    id: o,
    link: i,
    width: s,
    ...m
  }) => {
    var b, d, u;
    return {
      ...m,
      bZsnTBIZu:
        (b = e ?? m.bZsnTBIZu) !== null && b !== void 0
          ? b
          : 'rgb(21, 39, 102)',
      CiWo9qyo0: i ?? m.CiWo9qyo0,
      jkUJRz9gR:
        (d = n ?? m.jkUJRz9gR) !== null && d !== void 0
          ? d
          : { src: './images/r3pD5FKTHDXQiIvDOX8S8PlHoc.svg' },
      PPM8eZNfR:
        (u = t ?? m.PPM8eZNfR) !== null && u !== void 0 ? u : 'rgb(0, 29, 178)',
    };
  },
  rl = (e, t) => t.join('-') + e.layoutDependency,
  tl = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      {
        style: o,
        className: i,
        layoutId: s,
        variant: m,
        PPM8eZNfR: b,
        bZsnTBIZu: d,
        CiWo9qyo0: u,
        jkUJRz9gR: h,
        ...v
      } = el(e),
      {
        baseVariant: M,
        classNames: y,
        gestureVariant: T,
        setGestureState: R,
        setVariant: x,
        variants: C,
      } = oe({
        cycleOrder: qi,
        defaultVariant: 'LAfRwR2yX',
        enabledGestures: Hi,
        variant: m,
        variantClassNames: Zi,
      }),
      S = rl(e, C),
      { activeVariantCallback: N, delay: z } = pe(M),
      L = N(async (...re) => {
        x(Lr);
      });
    Ge(M, { default: L });
    let G = V(null),
      O = X(),
      j = [],
      E = ne();
    return r(U, {
      id: s ?? O,
      children: r($i, {
        animate: C,
        initial: !1,
        children: r(Ki, {
          value: Xi,
          children: r(ke, {
            href: u,
            openInNewTab: !0,
            children: c(l.a, {
              ...v,
              className: `${Y(Yi, ...j, 'framer-n1zi7e', i, y)} framer-ucqqh5`,
              'data-framer-name': 'Top',
              'data-highlight': !0,
              layoutDependency: S,
              layoutId: 'LAfRwR2yX',
              onHoverEnd: () => R({ isHovered: !1 }),
              onHoverStart: () => R({ isHovered: !0 }),
              onTap: () => R({ isPressed: !1 }),
              onTapCancel: () => R({ isPressed: !1 }),
              onTapStart: () => R({ isPressed: !0 }),
              ref: t ?? G,
              style: {
                borderBottomLeftRadius: 118,
                borderBottomRightRadius: 118,
                borderTopLeftRadius: 118,
                borderTopRightRadius: 118,
                ...o,
              },
              ...Qi(
                { 'LAfRwR2yX-hover': { 'data-framer-name': void 0 } },
                M,
                T
              ),
              children: [
                r(l.div, {
                  className: 'framer-pqe2ec',
                  'data-framer-name': 'BG',
                  layoutDependency: S,
                  layoutId: 'OzZytAPzX',
                  style: {
                    backgroundColor: d,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    boxShadow:
                      '0px 4px 2px 0px rgba(0,0,0,0.25), inset 0px -2px 2px 0px rgba(0, 0, 0, 0.1)',
                  },
                }),
                r(l.div, {
                  className: 'framer-sg07hz',
                  'data-framer-name': 'Stroke',
                  layoutDependency: S,
                  layoutId: 'jg9swXDb6',
                  style: {
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgb(0, 29, 178) 97.2deg, rgb(19, 47, 186) 122.4deg, rgb(19, 47, 186) 237.60000000000002deg, rgb(0, 29, 178) 262.8deg)',
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }),
                r(l.div, {
                  className: 'framer-17el5j6',
                  'data-framer-name': 'Fill',
                  layoutDependency: S,
                  layoutId: 'qDDzZp7_z',
                  style: {
                    backgroundColor: b,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
                r(W, {
                  background: { alt: '', fit: 'fill', sizes: '30px', ...Ji(h) },
                  className: 'framer-1fzcqsk',
                  'data-framer-name': 'Icon',
                  layoutDependency: S,
                  layoutId: 'zpKiHcjZk',
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  al = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-uQtQI.framer-ucqqh5, .framer-uQtQI .framer-ucqqh5 { display: block; }',
    '.framer-uQtQI.framer-n1zi7e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 12px 12px 22px 12px; position: relative; text-decoration: none; width: auto; }',
    '.framer-uQtQI .framer-pqe2ec { bottom: 0px; flex: none; height: 40px; left: 0px; overflow: hidden; position: absolute; right: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-uQtQI .framer-sg07hz { bottom: 10px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-uQtQI .framer-17el5j6 { bottom: 12px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-uQtQI .framer-1fzcqsk { flex: none; height: 30px; position: relative; width: 30px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uQtQI.framer-n1zi7e { gap: 0px; } .framer-uQtQI.framer-n1zi7e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-uQtQI.framer-n1zi7e > :first-child { margin-top: 0px; } .framer-uQtQI.framer-n1zi7e > :last-child { margin-bottom: 0px; } }',
    '.framer-uQtQI.framer-v-n1zi7e.hover.framer-n1zi7e { padding: 18px 12px 16px 12px; }',
    '.framer-uQtQI.framer-v-n1zi7e.hover .framer-pqe2ec { height: 35px; }',
    '.framer-uQtQI.framer-v-n1zi7e.hover .framer-sg07hz { bottom: 4px; top: 4px; }',
    '.framer-uQtQI.framer-v-n1zi7e.hover .framer-17el5j6 { bottom: 6px; top: 6px; }',
  ],
  Gr = K(tl, al, 'framer-uQtQI'),
  er = Gr;
Gr.displayName = 'CTA Icon';
Gr.defaultProps = { height: 64, width: 54 };
B(Gr, {
  PPM8eZNfR: {
    defaultValue: 'rgb(0, 29, 178)',
    title: 'Button fill',
    type: f.Color,
  },
  bZsnTBIZu: {
    defaultValue: 'rgb(21, 39, 102)',
    title: 'Background Color',
    type: f.Color,
  },
  CiWo9qyo0: { title: 'Link', type: f.Link },
  jkUJRz9gR: {
    __defaultAssetReference:
      'data:framer/asset-reference,r3pD5FKTHDXQiIvDOX8S8PlHoc.svg?originalFilename=Frame+427321122.svg&preferredSize=auto',
    title: 'Icon',
    type: f.ResponsiveImage,
  },
});
ee(Gr, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
g();
var nl = ['Zuy9RzUz_', 'ZhLjrDS2y'],
  ol = 'framer-GE7e3',
  il = { ZhLjrDS2y: 'framer-v-1xvc1y8', Zuy9RzUz_: 'framer-v-163g13' };
function Ia(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var ll = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  sl = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  fl = l(p),
  dl = { Hover: 'ZhLjrDS2y', Standard: 'Zuy9RzUz_' },
  cl = ({ height: e, id: t, width: a, ...n }) => {
    var o, i;
    return {
      ...n,
      variant:
        (i = (o = dl[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && i !== void 0
          ? i
          : 'Zuy9RzUz_',
    };
  },
  ml = (e, t) => t.join('-') + e.layoutDependency,
  pl = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      { style: o, className: i, layoutId: s, variant: m, ...b } = cl(e),
      {
        baseVariant: d,
        classNames: u,
        gestureVariant: h,
        setGestureState: v,
        setVariant: M,
        variants: y,
      } = oe({
        cycleOrder: nl,
        defaultVariant: 'Zuy9RzUz_',
        variant: m,
        variantClassNames: il,
      }),
      T = ml(e, y),
      R = V(null),
      x = X(),
      C = [],
      S = ne();
    return r(U, {
      id: s ?? x,
      children: r(fl, {
        animate: y,
        initial: !1,
        children: r(sl, {
          value: ll,
          children: r(l.div, {
            ...b,
            background: {
              alt: '',
              intrinsicHeight: 64,
              intrinsicWidth: 263,
              positionX: 'center',
              positionY: 'center',
            },
            className: Y(ol, ...C, 'framer-163g13', i, u),
            'data-framer-name': 'Standard',
            layoutDependency: T,
            layoutId: 'Zuy9RzUz_',
            onHoverEnd: () => v({ isHovered: !1 }),
            onHoverStart: () => v({ isHovered: !0 }),
            onTap: () => v({ isPressed: !1 }),
            onTapCancel: () => v({ isPressed: !1 }),
            onTapStart: () => v({ isPressed: !0 }),
            ref: t ?? R,
            style: { ...o },
            ...Ia(
              {
                ZhLjrDS2y: {
                  'data-framer-name': 'Hover',
                  background: {
                    alt: '',
                    intrinsicHeight: 64,
                    intrinsicWidth: 263,
                    positionX: 'center',
                    positionY: 'center',
                    src: './images/44TWIy4GpNV7Y6hBSnVSzre5mE.png',
                  },
                },
              },
              d,
              h
            ),
            children: r(W, {
              background: {
                alt: '',
                fit: 'fit',
                pixelHeight: 380,
                pixelWidth: 380,
                positionX: 'center',
                positionY: 'center',
                src: './images/shIKhPkk1UqApa72zHfO4m9wbc.png',
              },
              className: 'framer-s6s88t',
              layoutDependency: T,
              layoutId: 'Sci5ZuHBl',
              ...Ia(
                {
                  ZhLjrDS2y: {
                    background: {
                      alt: '',
                      fit: 'fit',
                      pixelHeight: 380,
                      pixelWidth: 380,
                      positionX: 'center',
                      positionY: 'center',
                      src: './images/j58oTCminTXwkqQF0B2uRkofc.webp',
                    },
                  },
                },
                d,
                h
              ),
            }),
          }),
        }),
      }),
    });
  }),
  ul = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-GE7e3.framer-1pr9ybf, .framer-GE7e3 .framer-1pr9ybf { display: block; }',
    '.framer-GE7e3.framer-163g13 { height: 75px; position: relative; width: 75px; }',
    '.framer-GE7e3 .framer-s6s88t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 75px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GE7e3 .framer-s6s88t { gap: 0px; } .framer-GE7e3 .framer-s6s88t > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-GE7e3 .framer-s6s88t > :first-child { margin-top: 0px; } .framer-GE7e3 .framer-s6s88t > :last-child { margin-bottom: 0px; } }',
  ],
  Cr = K(pl, ul, 'framer-GE7e3'),
  jt = Cr;
Cr.displayName = 'Cursor';
Cr.defaultProps = { height: 75, width: 75 };
B(Cr, {
  variant: {
    options: ['Zuy9RzUz_', 'ZhLjrDS2y'],
    optionTitles: ['Standard', 'Hover'],
    title: 'Variant',
    type: f.Enum,
  },
});
ee(Cr, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
g();
g();
var Da =
  'https://lottie.host/d826e0a7-b7e8-4072-8afe-c943ed2dd2ca/DpX3m5yT5Z.lottie';
function rr(e) {
  return r(gl, { loading: r('div', {}), loaded: r(hl, { ...e }) });
}
function hl(e) {
  let t = be.current() === be.canvas,
    a = V(null),
    n = t || e.hover === !0 || e.autoplay === !1 ? null : !0,
    o;
  switch (e.srcType) {
    case 'url':
      o = e.srcUrl;
      break;
    case 'file':
      o = e.srcFile;
      break;
    default:
      o = Da;
      break;
  }
  let [i, s] = me(!1);
  A(() => {
    a.current && a.current.addEventListener('ready', () => s(!0));
  }, []),
    A(() => {
      a.current && a.current.seek(`${e.progress}%`);
    }, [i, e.progress]);
  let m = V();
  return (
    A(() => {
      if (!t) {
        if (m.current !== e.autoplay) {
          if (!a.current) return;
          e.autoplay === !0 && a.current.play(),
            e.autoplay === !1 && a.current.pause();
        }
        m.current = e.autoplay;
      }
    }, [e.autoplay]),
    r(
      'dotlottie-player',
      {
        src: o,
        ref: a,
        autoplay: n,
        loop: e.loop ? !0 : null,
        hover: e.hover ? !0 : null,
        controls: e.controls ? !0 : null,
        background: e.background ? e.background : null,
        speed: e.speed,
        direction: e.direction,
        style: { ...e.style, width: '100%', height: '100%' },
      },
      o
    )
  );
}
rr.defaultProps = {
  srcUrl: Da,
  autoplay: !0,
  background: '#05F',
  controls: !1,
  direction: 1,
  hover: !1,
  loop: !0,
  speed: 1,
};
rr.displayName = 'Dot Lottie';
B(rr, {
  srcType: {
    type: f.Enum,
    displaySegmentedControl: !0,
    title: 'Source',
    options: ['url', 'file'],
    optionTitles: ['URL', 'File'],
  },
  srcUrl: {
    type: f.String,
    title: 'Link',
    placeholder: '../example.lottie',
    hidden: (e) => e.srcType === 'file',
  },
  srcFile: {
    type: f.File,
    title: 'File',
    allowedFileTypes: ['lottie', 'json'],
    hidden: (e) => e.srcType === 'url',
  },
  autoplay: { type: f.Boolean, title: 'Autoplay', defaultValue: !0 },
  background: { type: f.Color, title: 'Backdrop', defaultValue: '#05F' },
  controls: { type: f.Boolean, title: 'Controls' },
  direction: {
    type: f.Enum,
    title: 'Direction',
    defaultValue: '1',
    displaySegmentedControl: !0,
    segmentedControlDirection: 'horizontal',
    options: ['1', '-1'],
    optionTitles: ['Normal', 'Reverse'],
  },
  hover: { type: f.Boolean, title: 'Hover Play' },
  loop: { type: f.Boolean, title: 'Loop' },
  speed: {
    type: f.Number,
    title: 'Speed',
    defaultValue: 1,
    min: 1,
    max: 10,
    unit: 'x',
    step: 0.5,
    displayStepper: !0,
  },
  progress: {
    type: f.Number,
    title: 'Progress',
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
    description:
      'This component is made for Lottie files. [Learn more here](https://dotlottie.io/).',
  },
});
function gl({ loading: e, loaded: t }) {
  let [a, n] = me(!0);
  return (
    A(() => {
      import('./dotlottie-player-FSGNXSZJ.mjs').then(() => {
        n(!1);
      });
    }, []),
    a ? e : t
  );
}
var xl = ie(rr),
  bl = ['uKbDR5gGL', 'WtMMao55e'],
  yl = 'framer-8vXQ9',
  vl = { uKbDR5gGL: 'framer-v-bxnbux', WtMMao55e: 'framer-v-1ug9t7a' };
function wl(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var Rl = { damping: 40, delay: 0, mass: 1.6, stiffness: 3e3, type: 'spring' },
  Ml = ({ value: e, children: t }) => {
    let a = ae(I),
      n = e ?? a.transition,
      o = P(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(I.Provider, { value: o, children: t });
  },
  Gl = l(p),
  Cl = { 'Hit State': 'WtMMao55e', Default: 'uKbDR5gGL' },
  Vl = ({ height: e, id: t, width: a, ...n }) => {
    var o, i;
    return {
      ...n,
      variant:
        (i = (o = Cl[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && i !== void 0
          ? i
          : 'uKbDR5gGL',
    };
  },
  Tl = (e, t) => t.join('-') + e.layoutDependency,
  Sl = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      { style: o, className: i, layoutId: s, variant: m, ...b } = Vl(e),
      {
        baseVariant: d,
        classNames: u,
        gestureVariant: h,
        setGestureState: v,
        setVariant: M,
        variants: y,
      } = oe({
        cycleOrder: bl,
        defaultVariant: 'uKbDR5gGL',
        variant: m,
        variantClassNames: vl,
      }),
      T = Tl(e, y),
      R = V(null),
      x = () => d === 'WtMMao55e',
      C = X(),
      S = [],
      N = ne();
    return r(U, {
      id: s ?? C,
      children: r(Gl, {
        animate: y,
        initial: !1,
        children: r(Ml, {
          value: Rl,
          children: c(l.div, {
            ...b,
            className: Y(yl, ...S, 'framer-bxnbux', i, u),
            'data-framer-name': 'Default',
            layoutDependency: T,
            layoutId: 'uKbDR5gGL',
            onHoverEnd: () => v({ isHovered: !1 }),
            onHoverStart: () => v({ isHovered: !0 }),
            onTap: () => v({ isPressed: !1 }),
            onTapCancel: () => v({ isPressed: !1 }),
            onTapStart: () => v({ isPressed: !0 }),
            ref: t ?? R,
            style: { ...o },
            ...wl({ WtMMao55e: { 'data-framer-name': 'Hit State' } }, d, h),
            children: [
              r(l.div, {
                className: 'framer-1utt60j',
                layoutDependency: T,
                layoutId: 'I8xAQkO9J',
                style: { rotate: 90 },
                variants: { WtMMao55e: { rotate: 0 } },
                children: r(se, {
                  className: 'framer-1fku9pa',
                  'data-framer-name': 'hammer',
                  fill: 'black',
                  intrinsicHeight: 269,
                  intrinsicWidth: 495,
                  layoutDependency: T,
                  layoutId: 'Z5LIvepw0',
                  style: { rotate: 60 },
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.14 269.22"><g data-name="Layer 3"><path d="M7.52 170.65 481.21 2.02s18.95 1.14 9.09 22.74C461.25 34.11 15.1 199.07 15.1 199.07s-7.59-12.88-7.59-28.42Z" style="stroke:#231f20;stroke-miterlimit:10;stroke-width:4px;fill:#70421a"/><path d="M6.14 170.88c4.84.38 9.12 4.57 11 10.77s2.57 15.46-2.65 18.07c-7.59 3.79-19.71-19.93-8.35-28.83Z" style="fill:#ba7e3d;stroke-width:3px;stroke:#231f20;stroke-miterlimit:10"/></g><g data-name="Layer 2"><path d="M7.53 89.18c13.64 70.74 40.67 144.25 49.52 175.33 59.37 8.46 117.22-7.58 145.52-44.46-12.38-60.88-20.46-117.98-46.48-192.51 0 0-11.1-21.77-91.96 9.6C5.5 59.87 7.53 89.18 7.53 89.18Z" style="fill:#90552a;stroke-width:5px;stroke:#231f20;stroke-miterlimit:10"/><path d="M7.53 89.18c2.65 10.99 43.83 4.44 83.37-12.13 37.13-15.56 69.73-38.65 65.18-49.52 0 0-11.1-21.77-91.96 9.6C5.5 59.87 7.53 89.18 7.53 89.18Z" style="fill:#ab763e;stroke:#231f20;stroke-miterlimit:10;stroke-width:4px"/></g></svg>',
                  withExternalLayout: !0,
                }),
              }),
              x() &&
                r(D, {
                  children: r(l.div, {
                    className: 'framer-1v0dlza-container',
                    layoutDependency: T,
                    layoutId: 'AWkzYiPkH-container',
                    style: { rotate: 90 },
                    children: r(rr, {
                      autoplay: !0,
                      background: 'rgba(0, 0, 0, 0)',
                      controls: !1,
                      direction: '1',
                      height: '100%',
                      hover: !1,
                      id: 'AWkzYiPkH',
                      layoutId: 'AWkzYiPkH',
                      loop: !1,
                      progress: 0,
                      speed: 1,
                      srcFile: './assets/hKtZa10ntkes55pPCk4LrLYIY.json',
                      srcType: 'file',
                      srcUrl:
                        'https://lottie.host/d826e0a7-b7e8-4072-8afe-c943ed2dd2ca/DpX3m5yT5Z.lottie',
                      style: { height: '100%', width: '100%' },
                      width: '100%',
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  kl = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-8vXQ9.framer-12225hl, .framer-8vXQ9 .framer-12225hl { display: block; }',
    '.framer-8vXQ9.framer-bxnbux { height: 75px; overflow: visible; position: relative; width: 150px; }',
    '.framer-8vXQ9 .framer-1utt60j { flex: none; height: 75px; overflow: visible; position: absolute; right: 0px; top: 0px; width: 75px; z-index: 1; }',
    '.framer-8vXQ9 .framer-1fku9pa { aspect-ratio: 1.829268292682927 / 1; bottom: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 42px); left: -1px; position: absolute; right: 0px; }',
    '.framer-8vXQ9 .framer-1v0dlza-container { aspect-ratio: 1 / 1; bottom: -25px; flex: none; height: var(--framer-aspect-ratio-supported, 125px); left: -42px; position: absolute; width: 125px; z-index: 0; }',
    '.framer-8vXQ9.framer-v-1ug9t7a .framer-1utt60j { right: 60px; top: 6px; width: 85px; }',
    '.framer-8vXQ9.framer-v-1ug9t7a .framer-1fku9pa { height: var(--framer-aspect-ratio-supported, 47px); }',
  ],
  Vr = K(Sl, kl, 'framer-8vXQ9'),
  Zr = Vr;
Vr.displayName = 'Cursor - Hammer';
Vr.defaultProps = { height: 75, width: 150 };
B(Vr, {
  variant: {
    options: ['uKbDR5gGL', 'WtMMao55e'],
    optionTitles: ['Default', 'Hit State'],
    title: 'Variant',
    type: f.Enum,
  },
});
ee(Vr, [{ explicitInter: !0, fonts: [] }, ...xl], {
  supportsExplicitInterCodegen: !0,
});
g();
var ja = (e) => (t) => {
  let a = 'bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump';
  return r(e, {
    ...t,
    onClick: (o) => {
      let i = o.currentTarget.querySelector('p');
      i &&
        ((i.textContent = 'COPIED!'),
        setTimeout(() => {
          i.textContent = 'COPY';
        }, 2e3)),
        navigator.clipboard.writeText(a);
    },
  });
};
var Nl = ie(Ye),
  Wl = ie(_t),
  zl = ie(qe),
  Ol = lt(w),
  El = ie(ft),
  Ll = ie(er),
  Pl = ie(Oe),
  _l = lt(W),
  Al = ra(ja(Ye), Lt),
  Il = ie(sr),
  Dl = ie(Dt),
  jl = ie(At),
  Bl = ie(It),
  Fl = ie(Pt),
  Ul = ie(jt),
  Hl = ie(Zr);
var ql = {
    i1xw_uat1: '(min-width: 810px) and (max-width: 1069px)',
    OUExfnfzb: '(min-width: 1070px) and (max-width: 1439px)',
    sz35tS2Nm: '(max-width: 809px)',
    WQLkyLRf1: '(min-width: 1440px)',
  },
  Ba = () => typeof document < 'u',
  Fa = 'framer-aG5lM',
  Yl = {
    i1xw_uat1: 'framer-v-1k5vtbv',
    OUExfnfzb: 'framer-v-1je0ibw',
    sz35tS2Nm: 'framer-v-hc9240',
    WQLkyLRf1: 'framer-v-72rtr7',
  },
  Zl = { delay: 0, duration: 0.7, ease: [0, 0, 1, 1], type: 'tween' },
  Ql = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -15,
  },
  Qr = (e, t) => {
    if (!(!e || typeof e != 'object')) return { ...e, alt: t };
  },
  Xl = { delay: 0, duration: 5, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  Jl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 100,
    y: 0,
  },
  Tr = (e, t) => `translateX(-50%) ${t}`,
  Xr = dt(),
  Kl = {
    'Desktop 2': 'OUExfnfzb',
    Desktop: 'WQLkyLRf1',
    Phone: 'sz35tS2Nm',
    Tablet: 'i1xw_uat1',
  },
  $l = ({ height: e, id: t, width: a, ...n }) => {
    var o, i;
    return {
      ...n,
      variant:
        (i = (o = Kl[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && i !== void 0
          ? i
          : 'WQLkyLRf1',
    };
  },
  Ua = {
    alignment: 'start',
    component: jt,
    offset: { x: 0, y: -20 },
    placement: 'bottom',
    variant: 'Zuy9RzUz_',
  },
  es = {
    alignment: 'start',
    component: Zr,
    offset: { x: -80, y: -75 },
    placement: 'bottom',
    variant: 'WtMMao55e',
  },
  rs = {
    alignment: 'start',
    component: Zr,
    offset: { x: -80, y: -75 },
    placement: 'bottom',
    variant: 'uKbDR5gGL',
  },
  ts = Q(function (e, t) {
    let { activeLocale: a, setLocale: n } = J(),
      { style: o, className: i, layoutId: s, variant: m, ...b } = $l(e);
    Zt(() => {
      let le = dt(void 0, a);
      if (((document.title = le.title || ''), le.viewport)) {
        var ue;
        (ue = document.querySelector('meta[name="viewport"]')) === null ||
          ue === void 0 ||
          ue.setAttribute('content', le.viewport);
      }
      if (le.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((ce) => ce.startsWith('framer-body-'))
            .map((ce) => document.body.classList.remove(ce)),
          document.body.classList.add(`${le.bodyClassName}-framer-aG5lM`),
          () => {
            document.body.classList.remove(`${le.bodyClassName}-framer-aG5lM`);
          }
        );
    }, [void 0, a]);
    let [d, u] = ea(m, ql, !1),
      h = void 0,
      v = V(null),
      M = () => (Ba() ? !['i1xw_uat1', 'sz35tS2Nm'].includes(d) : !0),
      y = $e('oY5SFqVk9'),
      T = V(null),
      R = () => !!(!Ba() || ['i1xw_uat1', 'sz35tS2Nm'].includes(d)),
      x = $e('FjgU2e_Wz'),
      C = V(null),
      S = $e('s5SlUrkfV'),
      N = V(null),
      z = $e('P2_fKbVen'),
      L = V(null),
      G = $e('PrMLfEEJL'),
      O = V(null),
      j = $e('au0M8PfE2'),
      E = V(null),
      re = X(),
      de = [Yr];
    return (
      Kt({
        '1anktu3': Ua,
        '1w8ybsv': { ...Ua, variant: 'ZhLjrDS2y' },
        p8wrn1: es,
        qcaffr: rs,
      }),
      r($t.Provider, {
        value: { primaryVariantId: 'WQLkyLRf1', variantClassNames: Yl },
        children: c(U, {
          id: s ?? re,
          children: [
            c(l.div, {
              ...b,
              className: Y(Fa, ...de, 'framer-72rtr7', i),
              'data-framer-cursor': '1anktu3',
              ref: t ?? v,
              style: { ...o },
              children: [
                M() &&
                  r('div', {
                    className: 'framer-1fqs8gp hidden-1k5vtbv hidden-hc9240',
                    'data-framer-name': 'Navbar',
                    name: 'Navbar',
                    children: r('div', {
                      className: 'framer-ctrzhx',
                      'data-border': !0,
                      'data-framer-name': 'wrapper',
                      name: 'wrapper',
                      children: c('div', {
                        className: 'framer-1ksxgkz',
                        'data-framer-name': 'container',
                        name: 'container',
                        children: [
                          c('div', {
                            className: 'framer-6fy7bk',
                            'data-framer-name': 'menu',
                            name: 'menu',
                            children: [
                              r(w, {
                                __fromCanvasComponent: !0,
                                children: r(p, {
                                  children: r('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-letter-spacing': '1.5px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                      '--framer-text-transform': 'uppercase',
                                    },
                                    children: r(ke, {
                                      href: {
                                        hash: ':s5SlUrkfV',
                                        webPageId: 'augiA20Il',
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !0,
                                      children: r('a', {
                                        className:
                                          'framer-styles-preset-1wicq5s',
                                        'data-styles-preset': 'ro7OPezbn',
                                        children: 'Roadmap',
                                      }),
                                    }),
                                  }),
                                }),
                                className: 'framer-15u0fax',
                                'data-framer-cursor': '1w8ybsv',
                                'data-framer-name': 'About',
                                fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                                id: y,
                                name: 'About',
                                ref: T,
                                verticalAlignment: 'center',
                                withExternalLayout: !0,
                              }),
                              r(w, {
                                __fromCanvasComponent: !0,
                                children: r(p, {
                                  children: r('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-letter-spacing': '1.5px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                      '--framer-text-transform': 'uppercase',
                                    },
                                    children: r(ke, {
                                      href: {
                                        hash: ':P2_fKbVen',
                                        webPageId: 'augiA20Il',
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !0,
                                      children: r('a', {
                                        className:
                                          'framer-styles-preset-1wicq5s',
                                        'data-styles-preset': 'ro7OPezbn',
                                        children: 'Tokenomics',
                                      }),
                                    }),
                                  }),
                                }),
                                className: 'framer-1nw0ifv',
                                'data-framer-cursor': '1w8ybsv',
                                'data-framer-name': 'How to buy',
                                fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                                name: 'How to buy',
                                verticalAlignment: 'center',
                                withExternalLayout: !0,
                              }),
                              r(w, {
                                __fromCanvasComponent: !0,
                                children: r(p, {
                                  children: r('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-letter-spacing': '1.5px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                      '--framer-text-transform': 'uppercase',
                                    },
                                  }),
                                }),
                                className: 'framer-tschmk',
                                'data-framer-cursor': '1w8ybsv',
                                'data-framer-name': 'Tokenomics',
                                fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                                name: 'Tokenomics',
                                verticalAlignment: 'center',
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c('div', {
                            className: 'framer-ph62rv',
                            'data-framer-name': 'logo and mobile menu',
                            name: 'logo and mobile menu',
                            children: [
                              r(w, {
                                __fromCanvasComponent: !0,
                                children: r(p, {
                                  children: r('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                      '--framer-font-family':
                                        '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                      '--framer-font-size': '26px',
                                      '--framer-line-height': '100%',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'built on SOLANA',
                                  }),
                                }),
                                className: 'framer-1v2bsya',
                                fonts: ['CUSTOM;04b_19 Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          r('div', {
                            className: 'framer-1m9muiz',
                            children: r(D, {
                              children: r(H, {
                                className: 'framer-y8fy3f-container',
                                'data-framer-cursor': '1w8ybsv',
                                children: r(Ye, {
                                  BrUi5h7tU: 'rgb(255, 255, 255)',
                                  bZsnTBIZu: 'rgb(21, 39, 102)',
                                  CiWo9qyo0:
                                    'https://pump.fun/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                  height: '100%',
                                  id: 'hhoducbSz',
                                  layoutId: 'hhoducbSz',
                                  ofLqZhEO8: '$BUY',
                                  PPM8eZNfR: 'rgb(0, 29, 178)',
                                  Rb5OgUSWE: 24,
                                  width: '100%',
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                R() &&
                  r($, {
                    breakpoint: d,
                    overrides: {
                      i1xw_uat1: { width: '100vw' },
                      sz35tS2Nm: { width: '100vw' },
                    },
                    children: r(D, {
                      children: r($, {
                        breakpoint: d,
                        overrides: {
                          i1xw_uat1: { layoutScroll: !0 },
                          sz35tS2Nm: { layoutScroll: !0 },
                        },
                        children: r(H, {
                          className:
                            'framer-1jscsa0-container hidden-72rtr7 hidden-1je0ibw',
                          children: r(_t, {
                            height: '100%',
                            id: 'A3h9HJt3G',
                            layoutId: 'A3h9HJt3G',
                            style: { width: '100%' },
                            variant: 'O1iTyTq_8',
                            width: '100%',
                          }),
                        }),
                      }),
                    }),
                  }),
                c('div', {
                  className: 'framer-uouig2',
                  'data-framer-name': 'body',
                  name: 'body',
                  children: [
                    c('div', {
                      className: 'framer-1eldfc',
                      'data-framer-name': 'intro section',
                      id: x,
                      name: 'intro section',
                      ref: C,
                      children: [
                        r(D, {
                          children: r(H, {
                            className: 'framer-c19x8i-container',
                            children: r($, {
                              breakpoint: d,
                              overrides: { sz35tS2Nm: { posterEnabled: !0 } },
                              children: r(qe, {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: '100%',
                                id: 'ZYXdBhRXX',
                                isMixedBorderRadius: !1,
                                layoutId: 'ZYXdBhRXX',
                                loop: !0,
                                muted: !0,
                                objectFit: 'cover',
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  './assets/eGjNSx4kzyBcivZIlE0uNDFHrg.mp4',
                                srcType: 'Upload',
                                srcUrl:
                                  'https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4',
                                startTime: 0,
                                style: { height: '100%', width: '100%' },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: '100%',
                              }),
                            }),
                          }),
                        }),
                        c('div', {
                          className: 'framer-1e2cr0k',
                          'data-framer-name': 'container',
                          name: 'container',
                          children: [
                            r($, {
                              breakpoint: d,
                              overrides: {
                                sz35tS2Nm: {
                                  children: c(p, {
                                    children: [
                                      r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '54px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'peppy',
                                      }),
                                      r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '54px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'bird',
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: r(Ol, {
                                __framer__loop: Ql,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: Zl,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: c(p, {
                                  children: [
                                    r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                        '--framer-font-size': '148px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'peppy',
                                    }),
                                    r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                        '--framer-font-size': '148px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'bird',
                                    }),
                                  ],
                                }),
                                className: 'framer-ox35em',
                                fonts: ['CUSTOM;04b_19 Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                            }),
                            c('div', {
                              className: 'framer-122b91u',
                              children: [
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-1ftmcwu-container',
                                    'data-framer-cursor': '1w8ybsv',
                                    children: r(ft, {
                                      BrUi5h7tU: 'rgb(255, 255, 255)',
                                      bZsnTBIZu: 'rgb(255, 124, 119)',
                                      CiWo9qyo0:
                                        'https://pump.fun/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                      height: '100%',
                                      id: 'pWHJ7jW57',
                                      layoutId: 'pWHJ7jW57',
                                      ofLqZhEO8: 'BUY $PEBIRD',
                                      PPM8eZNfR: 'rgb(255, 167, 34)',
                                      Rb5OgUSWE: 24,
                                      width: '100%',
                                    }),
                                  }),
                                }),
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-1h2s4yi-container',
                                    'data-framer-cursor': '1w8ybsv',
                                    children: r(er, {
                                      bZsnTBIZu: 'rgb(21, 39, 102)',
                                      CiWo9qyo0:
                                        'https://pump.fun/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                      height: '100%',
                                      id: 'cnbvAVx7A',
                                      jkUJRz9gR: Qr(
                                        {
                                          src: './images/Fblg8LYdQnTFpvm2MZ6HYQJWjY.svg',
                                        },
                                        ''
                                      ),
                                      layoutId: 'cnbvAVx7A',
                                      PPM8eZNfR: 'rgb(0, 29, 178)',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r('div', {
                      className: 'framer-szc1yu',
                      'data-border': !0,
                      'data-framer-name': 'Ticker Intersection',
                      name: 'Ticker Intersection',
                      children: r(D, {
                        children: r(H, {
                          className: 'framer-nr6co6-container',
                          children: r(Oe, {
                            alignment: 'center',
                            direction: 'right',
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 36,
                            height: '100%',
                            hoverFactor: 1,
                            id: 'SxjOFViPK',
                            layoutId: 'SxjOFViPK',
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 21,
                                  pixelWidth: 90,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/DZT5cEsmkqUxXepwbLS6j9bakk.png',
                                },
                                className: 'framer-s4tg9s',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 10,
                                  pixelWidth: 10,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/TcaygBkrTLGzahwqSyjHjeVYsg.svg',
                                },
                                className: 'framer-4v69z1',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                            ],
                            speed: 100,
                            style: { height: '100%', width: '100%' },
                            width: '100%',
                          }),
                        }),
                      }),
                    }),
                    r('div', {
                      className: 'framer-yqpr91',
                      'data-framer-name': 'Token Addy Section',
                      name: 'Token Addy Section',
                      children: c('div', {
                        className: 'framer-s7pa4r',
                        'data-framer-name': 'container',
                        name: 'container',
                        children: [
                          M() &&
                            r('div', {
                              className:
                                'framer-eo7vqb hidden-1k5vtbv hidden-hc9240',
                              children: r(_l, {
                                __framer__loop: Jl,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: Xl,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  loading: 'lazy',
                                  pixelHeight: 175,
                                  pixelWidth: 299,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/iRX1Jb1V0r7XGF1Cy7evTDk1bO8.png',
                                },
                                className: 'framer-n4es2z',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                            }),
                          c('div', {
                            className: 'framer-7h5h2s',
                            'data-framer-name': 'Frame 6',
                            name: 'Frame 6',
                            children: [
                              r($, {
                                breakpoint: d,
                                overrides: {
                                  i1xw_uat1: {
                                    children: r(p, {
                                      children: r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '48px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'contract $PEBIRD',
                                      }),
                                    }),
                                  },
                                  sz35tS2Nm: {
                                    children: r(p, {
                                      children: r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '41px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'contract $PEBIRD',
                                      }),
                                    }),
                                  },
                                },
                                children: r(w, {
                                  __fromCanvasComponent: !0,
                                  children: r(p, {
                                    children: r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                        '--framer-font-size': '64px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'contract $PEBIRD',
                                    }),
                                  }),
                                  className: 'framer-8fkya9',
                                  fonts: ['CUSTOM;04b_19 Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                              }),
                              r($, {
                                breakpoint: d,
                                overrides: {
                                  sz35tS2Nm: {
                                    children: r(p, {
                                      children: r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                          '--framer-font-family':
                                            '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                          '--framer-font-size': '18px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children:
                                          "PIGEON THAT CAN'T FLY. PEPPY SAY BIRDS OF A FEATHER FLOCK TOGETHER. PEPPY THINK TIME FOR CHANGE. PEPPY HAS DREAM. MANY DREAMS EVEN. PEPPY BELIEVE FUTURE ON CHAIN.",
                                      }),
                                    }),
                                  },
                                },
                                children: r(w, {
                                  __fromCanvasComponent: !0,
                                  children: r(p, {
                                    children: r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                        '--framer-font-size': '24px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-alignment': 'center',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children:
                                        "PIGEON THAT CAN'T FLY. PEPPY SAY BIRDS OF A FEATHER FLOCK TOGETHER. PEPPY THINK TIME FOR CHANGE. PEPPY HAS DREAM. MANY DREAMS EVEN. PEPPY BELIEVE FUTURE ON CHAIN.",
                                    }),
                                  }),
                                  className: 'framer-1cbivsh',
                                  'data-framer-name':
                                    "PepePoo is exhausted from watching everyone toss around the never-ending derivative of PepeShibaCumGMElonKishuTurboAssFlokiMoon Inu coins like a hot potato. Those Inus have had their moment in the sun, but now it's time for the most recognizable poop-themed meme in the world to rise to the top and reign supreme as the king of all memes.\u2028\u2028PepePoo has arrived to make shitcoins great again! With a stealthy launch that had no presale, no farts, no taxes, and with LP burnt and contract renounced, $PEPEPOO is a coin that belongs to the people, forever. Powered by the raw, stinky strength of memetic energy, let $PEPEPOO lead the way to the ultimate success.",
                                  fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                                  name: "PepePoo is exhausted from watching everyone toss around the never-ending derivative of PepeShibaCumGMElonKishuTurboAssFlokiMoon Inu coins like a hot potato. Those Inus have had their moment in the sun, but now it's time for the most recognizable poop-themed meme in the world to rise to the top and reign supreme as the king of all memes.\u2028\u2028PepePoo has arrived to make shitcoins great again! With a stealthy launch that had no presale, no farts, no taxes, and with LP burnt and contract renounced, $PEPEPOO is a coin that belongs to the people, forever. Powered by the raw, stinky strength of memetic energy, let $PEPEPOO lead the way to the ultimate success.",
                                  verticalAlignment: 'center',
                                  withExternalLayout: !0,
                                }),
                              }),
                              c('div', {
                                className: 'framer-11u4l6r',
                                children: [
                                  r('div', {
                                    className: 'framer-jbtgah',
                                    children: r($, {
                                      breakpoint: d,
                                      overrides: {
                                        sz35tS2Nm: {
                                          children: r(p, {
                                            children: r('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                '--framer-font-size': '14px',
                                                '--framer-letter-spacing':
                                                  '1.5px',
                                                '--framer-line-height': '100%',
                                                '--framer-text-color':
                                                  'rgb(59, 91, 255)',
                                              },
                                              children:
                                                'bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(w, {
                                        __fromCanvasComponent: !0,
                                        children: r(p, {
                                          children: r('p', {
                                            style: {
                                              '--font-selector':
                                                'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                              '--framer-font-family':
                                                '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                              '--framer-letter-spacing':
                                                '1.5px',
                                              '--framer-line-height': '100%',
                                              '--framer-text-color':
                                                'rgb(59, 91, 255)',
                                            },
                                            children:
                                              'bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                          }),
                                        }),
                                        className: 'framer-1t261v',
                                        fonts: [
                                          'CUSTOM;DuperWebW03-Bold Regular',
                                        ],
                                        verticalAlignment: 'top',
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  r($, {
                                    breakpoint: d,
                                    overrides: {
                                      sz35tS2Nm: {
                                        width: 'calc(100vw - 108px)',
                                      },
                                    },
                                    children: r(D, {
                                      children: r(H, {
                                        className: 'framer-111c4iw-container',
                                        'data-framer-cursor': '1w8ybsv',
                                        children: r($, {
                                          breakpoint: d,
                                          overrides: {
                                            sz35tS2Nm: {
                                              Rb5OgUSWE: 16,
                                              style: { width: '100%' },
                                            },
                                          },
                                          children: r(Al, {
                                            BrUi5h7tU: 'rgb(255, 255, 255)',
                                            bZsnTBIZu: 'rgb(21, 39, 102)',
                                            height: '100%',
                                            id: 'VDSlElRGC',
                                            layoutId: 'VDSlElRGC',
                                            ofLqZhEO8: 'COPY',
                                            PPM8eZNfR: 'rgb(0, 29, 178)',
                                            Rb5OgUSWE: 18,
                                            width: '100%',
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r('div', {
                            className: 'framer-16qdeou',
                            children: r(D, {
                              children: r(H, {
                                className: 'framer-2x4p4z-container',
                                children: r($, {
                                  breakpoint: d,
                                  overrides: { sz35tS2Nm: { startTime: 92.6 } },
                                  children: r(qe, {
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: '100%',
                                    id: 'GbLYLR5uW',
                                    isMixedBorderRadius: !1,
                                    layoutId: 'GbLYLR5uW',
                                    loop: !0,
                                    muted: !0,
                                    objectFit: 'cover',
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile:
                                      './assets/7Vj9icJZQ2ANnIlXfMxF8sqphjo.mp4',
                                    srcType: 'Upload',
                                    srcUrl:
                                      'https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4',
                                    startTime: 0,
                                    style: { height: '100%', width: '100%' },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: '100%',
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    r('div', {
                      className: 'framer-102v931',
                      'data-border': !0,
                      'data-framer-name': 'Ticker Intersection',
                      name: 'Ticker Intersection',
                      children: r(D, {
                        children: r(H, {
                          className: 'framer-1qzan20-container',
                          children: r(Oe, {
                            alignment: 'center',
                            direction: 'left',
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 36,
                            height: '100%',
                            hoverFactor: 1,
                            id: 'IDXDyjaxm',
                            layoutId: 'IDXDyjaxm',
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 21,
                                  pixelWidth: 90,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/DZT5cEsmkqUxXepwbLS6j9bakk.png',
                                },
                                className: 'framer-s4tg9s',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 10,
                                  pixelWidth: 10,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/TcaygBkrTLGzahwqSyjHjeVYsg.svg',
                                },
                                className: 'framer-4v69z1',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                            ],
                            speed: 100,
                            style: { height: '100%', width: '100%' },
                            width: '100%',
                          }),
                        }),
                      }),
                    }),
                    r('div', {
                      className: 'framer-cron9o',
                      'data-framer-name': 'Roadmap',
                      id: S,
                      name: 'Roadmap',
                      ref: N,
                      children: c('div', {
                        className: 'framer-19d7h86',
                        'data-framer-name': 'container',
                        name: 'container',
                        children: [
                          r('div', {
                            className: 'framer-18c59j5',
                            'data-framer-name': 'Frame 6',
                            name: 'Frame 6',
                            children: r($, {
                              breakpoint: d,
                              overrides: {
                                sz35tS2Nm: {
                                  children: r(p, {
                                    children: r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                        '--framer-font-size': '54px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'roadmap',
                                    }),
                                  }),
                                },
                              },
                              children: r(w, {
                                __fromCanvasComponent: !0,
                                children: r(p, {
                                  children: r('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                      '--framer-font-family':
                                        '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                      '--framer-font-size': '108px',
                                      '--framer-line-height': '100%',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'roadmap',
                                  }),
                                }),
                                className: 'framer-buzde3',
                                fonts: ['CUSTOM;04b_19 Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          R() &&
                            r(D, {
                              children: r(H, {
                                className:
                                  'framer-13ryeim-container hidden-72rtr7 hidden-1je0ibw',
                                'data-framer-name': 'Roadmap Mobile',
                                name: 'Roadmap Mobile',
                                children: r($, {
                                  breakpoint: d,
                                  overrides: {
                                    i1xw_uat1: {
                                      align: 'flex-end',
                                      ariaLabel: 'roadmap',
                                      arrowObject: {
                                        arrowFill: 'rgba(255, 255, 255, 0.2)',
                                        arrowPadding: 20,
                                        arrowRadius: 40,
                                        arrowSize: 40,
                                        showMouseControls: !0,
                                      },
                                      fadeObject: {
                                        fadeAlpha: 0,
                                        fadeContent: !0,
                                        fadeInset: 0,
                                        fadeTransition: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stiffness: 500,
                                          type: 'spring',
                                        },
                                        fadeWidth: 25,
                                      },
                                      gap: 48,
                                      padding: 0,
                                      paddingBottom: 0,
                                      paddingLeft: 0,
                                      paddingRight: 0,
                                      paddingTop: 0,
                                      sizingObject: {
                                        heightInset: 0,
                                        heightRows: 2,
                                        heightType: 'auto',
                                        widthColumns: 2.5,
                                        widthInset: 0,
                                        widthType: 'auto',
                                      },
                                    },
                                    sz35tS2Nm: {
                                      align: 'flex-end',
                                      ariaLabel: 'roadmap',
                                      arrowObject: {
                                        arrowFill: 'rgb(0, 0, 0)',
                                        arrowPadding: 0,
                                        arrowRadius: 40,
                                        arrowSize: 40,
                                        showMouseControls: !0,
                                      },
                                      fadeObject: {
                                        fadeAlpha: 0,
                                        fadeContent: !0,
                                        fadeInset: 0,
                                        fadeTransition: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stiffness: 500,
                                          type: 'spring',
                                        },
                                        fadeWidth: 25,
                                      },
                                      gap: 30,
                                      padding: 0,
                                      paddingBottom: 0,
                                      paddingLeft: 0,
                                      paddingRight: 0,
                                      paddingTop: 0,
                                      sizingObject: {
                                        heightInset: 0,
                                        heightRows: 2,
                                        heightType: 'auto',
                                        widthColumns: 1,
                                        widthInset: 0,
                                        widthType: 'auto',
                                      },
                                    },
                                  },
                                  children: r(sr, {
                                    align: 'center',
                                    ariaLabel: '',
                                    arrowObject: {
                                      arrowFill: 'rgba(0, 0, 0, 0.2)',
                                      arrowPadding: 20,
                                      arrowRadius: 40,
                                      arrowSize: 40,
                                      showMouseControls: !0,
                                    },
                                    axis: !0,
                                    borderRadius: 0,
                                    fadeObject: {
                                      fadeAlpha: 0,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeTransition: {
                                        damping: 60,
                                        delay: 0,
                                        duration: 0.3,
                                        ease: [0.44, 0, 0.56, 1],
                                        mass: 1,
                                        stiffness: 500,
                                        type: 'spring',
                                      },
                                      fadeWidth: 25,
                                    },
                                    gap: 10,
                                    height: '100%',
                                    id: 'uNSayjJW3',
                                    layoutId: 'uNSayjJW3',
                                    name: 'Roadmap Mobile',
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    progressObject: {
                                      dotsActiveOpacity: 1,
                                      dotsBackground: 'rgba(0, 0, 0, 0.2)',
                                      dotsBlur: 4,
                                      dotsFill: 'rgb(255, 255, 255)',
                                      dotsGap: 10,
                                      dotsInset: 10,
                                      dotSize: 10,
                                      dotsOpacity: 0.5,
                                      dotsPadding: 10,
                                      dotsRadius: 50,
                                      showProgressDots: !1,
                                      showScrollbar: !1,
                                    },
                                    sizingObject: {
                                      heightInset: 0,
                                      heightRows: 2,
                                      heightType: 'auto',
                                      widthColumns: 2,
                                      widthInset: 0,
                                      widthType: 'auto',
                                    },
                                    slots: [
                                      c(l.div, {
                                        className: 'framer-9ms1he',
                                        'data-framer-name': 'Pilar P1',
                                        name: 'Pilar P1',
                                        children: [
                                          r(l.div, {
                                            className: 'framer-2mbc4u',
                                            children: r(W, {
                                              background: {
                                                alt: '',
                                                fit: 'fit',
                                                intrinsicHeight: 64,
                                                intrinsicWidth: 263,
                                                pixelHeight: 242,
                                                pixelWidth: 424,
                                                positionX: 'center',
                                                positionY: 'bottom',
                                                src: './images/ixfkGOLZixFHkIcJuEsXoxLV8E.png',
                                              },
                                              className: 'framer-qnsrha',
                                              'data-framer-name': 'image 5',
                                              name: 'image 5',
                                            }),
                                          }),
                                          c(l.div, {
                                            className: 'framer-1pe5kou',
                                            children: [
                                              r(l.div, {
                                                className: 'framer-tg306u',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: r('p', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-font-size':
                                                          '21px',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: 'PHASE 1',
                                                    }),
                                                  }),
                                                  className: 'framer-1xebpww',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              r(l.div, {
                                                className: 'framer-jcmx11',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: c('ul', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-text-alignment':
                                                          'left',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: [
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'FAIR LAUNCH',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'COINGECKO & COINMARKETCAP LISTINGS',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              '1.000+ HOLDERS',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'GET $PEBIRD TRENDING',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  className: 'framer-4orpe2',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c(l.div, {
                                        className: 'framer-pvw3a3',
                                        'data-framer-name': 'Pilar P2',
                                        name: 'Pilar P2',
                                        children: [
                                          c(l.div, {
                                            className: 'framer-1ewph3x',
                                            children: [
                                              r(W, {
                                                background: {
                                                  alt: '',
                                                  fit: 'fit',
                                                  intrinsicHeight: 64,
                                                  intrinsicWidth: 263,
                                                  pixelHeight: 382,
                                                  pixelWidth: 420,
                                                  positionX: 'center',
                                                  positionY: 'bottom',
                                                  src: './images/i02zg8HxX9r9xHxLi3ZMFT2hc4Y.png',
                                                },
                                                className: 'framer-1143b1e',
                                                'data-framer-name': 'image 5',
                                                name: 'image 5',
                                              }),
                                              c(l.div, {
                                                className: 'framer-o8ou1d',
                                                'data-border': !0,
                                                style: { rotate: -2 },
                                                transformTemplate: Tr,
                                                children: [
                                                  r(l.div, {
                                                    className: 'framer-mco79t',
                                                  }),
                                                  r(l.div, {
                                                    className: 'framer-16vycyt',
                                                  }),
                                                  r(l.div, {
                                                    className: 'framer-f8ulum',
                                                  }),
                                                  r(l.div, {
                                                    className: 'framer-y06qd7',
                                                  }),
                                                  r(w, {
                                                    __fromCanvasComponent: !0,
                                                    children: r(p, {
                                                      children: r('p', {
                                                        style: {
                                                          '--font-selector':
                                                            'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                          '--framer-font-family':
                                                            '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                          '--framer-font-size':
                                                            '21px',
                                                          '--framer-text-color':
                                                            'rgb(255, 255, 255)',
                                                        },
                                                        children: '[SOON]',
                                                      }),
                                                    }),
                                                    className: 'framer-1iji9ql',
                                                    fonts: [
                                                      'CUSTOM;DuperWebW03-Bold Regular',
                                                    ],
                                                    verticalAlignment: 'top',
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          c(l.div, {
                                            className: 'framer-lxvqx7',
                                            children: [
                                              r(l.div, {
                                                className: 'framer-1d7j8sh',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: r('p', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-font-size':
                                                          '21px',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: 'PHASE 2',
                                                    }),
                                                  }),
                                                  className: 'framer-im0tzj',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              r(l.div, {
                                                className: 'framer-d7nxd0',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: c('ul', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-text-alignment':
                                                          'left',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: [
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              '5.000 HOLDERS',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'COMMUNITY REWARDS PROGRAM',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'SHITTING ON BAD ACTORS',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  className: 'framer-6urhc3',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c(l.div, {
                                        className: 'framer-1bek6dr',
                                        'data-framer-name': 'Pilar P3',
                                        name: 'Pilar P3',
                                        children: [
                                          c(l.div, {
                                            className: 'framer-y15ts5',
                                            transformTemplate: Tr,
                                            children: [
                                              r(l.div, {
                                                className: 'framer-ma0oi1',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: r('p', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-font-size':
                                                          '21px',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: 'PHASE 3',
                                                    }),
                                                  }),
                                                  className: 'framer-6j1ojn',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              r(l.div, {
                                                className: 'framer-1x72spo',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: c('ul', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-text-alignment':
                                                          'left',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: [
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              '10.000 HOLDERS',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'PARTNERSHIPS WITH TIER 1 MEMES',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'COMMUNITY ONBOARDING PROGRAM',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  className: 'framer-o3epfg',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          r(W, {
                                            background: {
                                              alt: '',
                                              fit: 'fit',
                                              intrinsicHeight: 64,
                                              intrinsicWidth: 263,
                                              pixelHeight: 452,
                                              pixelWidth: 420,
                                              positionX: 'center',
                                              positionY: 'bottom',
                                              src: './images/YIWzS9oJH7ufnpzUBXP33iczGA.png',
                                            },
                                            className: 'framer-1mykdpu',
                                            'data-framer-name': 'image 5',
                                            name: 'image 5',
                                          }),
                                          c(l.div, {
                                            className: 'framer-88vr2y',
                                            'data-border': !0,
                                            style: { rotate: -2 },
                                            transformTemplate: Tr,
                                            children: [
                                              r(l.div, {
                                                className: 'framer-1hy2lij',
                                              }),
                                              r(l.div, {
                                                className: 'framer-ioiniu',
                                              }),
                                              r(l.div, {
                                                className: 'framer-1nbqg02',
                                              }),
                                              r(l.div, {
                                                className: 'framer-1o3fbe8',
                                              }),
                                              r(w, {
                                                __fromCanvasComponent: !0,
                                                children: r(p, {
                                                  children: r('p', {
                                                    style: {
                                                      '--font-selector':
                                                        'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                      '--framer-font-family':
                                                        '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                      '--framer-font-size':
                                                        '21px',
                                                      '--framer-text-color':
                                                        'rgb(255, 255, 255)',
                                                    },
                                                    children: '[SOON]',
                                                  }),
                                                }),
                                                className: 'framer-1d8nflv',
                                                fonts: [
                                                  'CUSTOM;DuperWebW03-Bold Regular',
                                                ],
                                                verticalAlignment: 'top',
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c(l.div, {
                                        className: 'framer-iygrlf',
                                        'data-framer-name': 'Pilar P4',
                                        name: 'Pilar P4',
                                        children: [
                                          c(l.div, {
                                            className: 'framer-4x661t',
                                            transformTemplate: Tr,
                                            children: [
                                              r(l.div, {
                                                className: 'framer-zm2ipq',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: r('p', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-font-size':
                                                          '21px',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: 'PHASE 4',
                                                    }),
                                                  }),
                                                  className: 'framer-11vln17',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                              r(l.div, {
                                                className: 'framer-1s8t60',
                                                'data-border': !0,
                                                children: r(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: r(p, {
                                                    children: c('ul', {
                                                      style: {
                                                        '--font-selector':
                                                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                        '--framer-font-family':
                                                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                        '--framer-text-alignment':
                                                          'left',
                                                        '--framer-text-color':
                                                          'rgb(255, 255, 255)',
                                                      },
                                                      children: [
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'LAUNCH $PEBIRD MERCH STORE',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              '50.000 HOLDERS',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'LAUNCH of $PEBIRD DAO FOR COMMUNITY GOVERNANCE',
                                                          }),
                                                        }),
                                                        r('li', {
                                                          children: r('p', {
                                                            children:
                                                              'ESTABLISHING $PEBIRD AS A RECOGNISED BRAND',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  className: 'framer-hvo7t4',
                                                  fonts: [
                                                    'CUSTOM;DuperWebW03-Bold Regular',
                                                  ],
                                                  verticalAlignment: 'top',
                                                  withExternalLayout: !0,
                                                }),
                                              }),
                                            ],
                                          }),
                                          r(W, {
                                            background: {
                                              alt: '',
                                              fit: 'fit',
                                              intrinsicHeight: 64,
                                              intrinsicWidth: 263,
                                              pixelHeight: 557,
                                              pixelWidth: 420,
                                              positionX: 'center',
                                              positionY: 'bottom',
                                              sizes: '212px',
                                              src: './images/NPsouGXheRMziUFFMKv9e2NhD6A.png?scale-down-to=512',
                                              srcSet:
                                                './images/NPsouGXheRMziUFFMKv9e2NhD6A.png 420w',
                                            },
                                            className: 'framer-uygteq',
                                            'data-framer-name': 'image 5',
                                            name: 'image 5',
                                          }),
                                          c(l.div, {
                                            className: 'framer-1u8uw3s',
                                            'data-border': !0,
                                            style: { rotate: -2 },
                                            transformTemplate: Tr,
                                            children: [
                                              r(l.div, {
                                                className: 'framer-1vyi7vj',
                                              }),
                                              r(l.div, {
                                                className: 'framer-ov81et',
                                              }),
                                              r(l.div, {
                                                className: 'framer-f4nr08',
                                              }),
                                              r(l.div, {
                                                className: 'framer-9c6nfv',
                                              }),
                                              r(w, {
                                                __fromCanvasComponent: !0,
                                                children: r(p, {
                                                  children: r('p', {
                                                    style: {
                                                      '--font-selector':
                                                        'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                      '--framer-font-family':
                                                        '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                      '--framer-font-size':
                                                        '21px',
                                                      '--framer-text-color':
                                                        'rgb(255, 255, 255)',
                                                    },
                                                    children: '[SOON]',
                                                  }),
                                                }),
                                                className: 'framer-1lpsupf',
                                                fonts: [
                                                  'CUSTOM;DuperWebW03-Bold Regular',
                                                ],
                                                verticalAlignment: 'top',
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                    snapObject: {
                                      fluid: !1,
                                      snap: !0,
                                      snapEdge: 'center',
                                    },
                                    style: { height: '100%', width: '100%' },
                                    width: '100%',
                                  }),
                                }),
                              }),
                            }),
                          M() &&
                            c('div', {
                              className:
                                'framer-9p8l8d hidden-1k5vtbv hidden-hc9240',
                              'data-framer-name': 'Roadmap Desktop',
                              name: 'Roadmap Desktop',
                              children: [
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-ji1ziu-container',
                                    children: r(Dt, {
                                      height: '100%',
                                      id: 'poMtPdaub',
                                      layoutId: 'poMtPdaub',
                                      MuKjYuxHy: 'qcaffr',
                                      PQOSgiUu6: 'p8wrn1',
                                      variant: 'dGkLkFC2O',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-kohrhx-container',
                                    children: r(At, {
                                      height: '100%',
                                      id: 'wB8s2fAxy',
                                      layoutId: 'wB8s2fAxy',
                                      lVIQMnftQ: 'qcaffr',
                                      Meuey6qiC: 'p8wrn1',
                                      variant: 'IWpILndgO',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-1ty9q43-container',
                                    children: r(It, {
                                      height: '100%',
                                      id: 'ioFwtkrTw',
                                      layoutId: 'ioFwtkrTw',
                                      lVIQMnftQ: 'qcaffr',
                                      Meuey6qiC: 'p8wrn1',
                                      variant: 'Vs42hLi0k',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                                r(D, {
                                  children: r(H, {
                                    className: 'framer-1yudfa6-container',
                                    children: r(Pt, {
                                      height: '100%',
                                      id: 'eHXyv1pri',
                                      layoutId: 'eHXyv1pri',
                                      lVIQMnftQ: 'qcaffr',
                                      Meuey6qiC: 'p8wrn1',
                                      variant: 'fZLCtDaVa',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                    r('div', {
                      className: 'framer-1fvooyz',
                      'data-border': !0,
                      'data-framer-name': 'Ticker Intersection',
                      name: 'Ticker Intersection',
                      children: r(D, {
                        children: r(H, {
                          className: 'framer-mo35ov-container',
                          children: r(Oe, {
                            alignment: 'center',
                            direction: 'right',
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 36,
                            height: '100%',
                            hoverFactor: 1,
                            id: 'ZRluVwdvy',
                            layoutId: 'ZRluVwdvy',
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 21,
                                  pixelWidth: 90,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/DZT5cEsmkqUxXepwbLS6j9bakk.png',
                                },
                                className: 'framer-s4tg9s',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 10,
                                  pixelWidth: 10,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/TcaygBkrTLGzahwqSyjHjeVYsg.svg',
                                },
                                className: 'framer-4v69z1',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                            ],
                            speed: 100,
                            style: { height: '100%', width: '100%' },
                            width: '100%',
                          }),
                        }),
                      }),
                    }),

                    r('div', {
                      className: 'framer-uaeo0m',
                      'data-framer-name': 'Tokenomics',
                      id: G,
                      name: 'Tokenomics',
                      ref: O,
                      children: c('div', {
                        className: 'framer-b62xt8',
                        'data-framer-name': 'container',
                        name: 'container',
                        children: [
                          c('div', {
                            className: 'framer-1wn77hv',
                            'data-framer-name': 'Frame 6',
                            name: 'Frame 6',
                            children: [
                              r($, {
                                breakpoint: d,
                                overrides: {
                                  i1xw_uat1: {
                                    background: {
                                      alt: '',
                                      fit: 'fit',
                                      intrinsicHeight: 64,
                                      intrinsicWidth: 263,
                                      loading: 'lazy',
                                      pixelHeight: 786,
                                      pixelWidth: 1306,
                                      positionX: 'center',
                                      positionY: 'center',
                                      sizes:
                                        'max((min(100vw, 1568px) - 118px) / 2, 200px)',
                                      src: './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png',
                                      srcSet:
                                        './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png 512w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=1024.png 1024w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to%3D1024.png 1306w',
                                    },
                                  },
                                  sz35tS2Nm: {
                                    background: {
                                      alt: '',
                                      fit: 'fit',
                                      intrinsicHeight: 64,
                                      intrinsicWidth: 263,
                                      loading: 'lazy',
                                      pixelHeight: 786,
                                      pixelWidth: 1306,
                                      positionX: 'center',
                                      positionY: 'center',
                                      sizes: 'calc(min(100vw, 1568px) - 64px)',
                                      src: './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png',
                                      srcSet:
                                        './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png 512w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=1024.png 1024w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to%3D1024.png 1306w',
                                    },
                                  },
                                },
                                children: r(W, {
                                  background: {
                                    alt: '',
                                    fit: 'fit',
                                    intrinsicHeight: 64,
                                    intrinsicWidth: 263,
                                    loading: 'lazy',
                                    pixelHeight: 786,
                                    pixelWidth: 1306,
                                    positionX: 'center',
                                    positionY: 'center',
                                    sizes:
                                      'max((min(100vw, 1568px) - 236px) / 2, 200px)',
                                    src: './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png',
                                    srcSet:
                                      './images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=512.png 512w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to=1024.png 1024w,./images/NgL8LnR0vIP76WIwdUgQ4PqhcSM_scale-down-to%3D1024.png 1306w',
                                  },
                                  className: 'framer-szzprh',
                                  'data-framer-name': 'image 5',
                                  name: 'image 5',
                                }),
                              }),
                              r(D, {
                                children: r(H, {
                                  className: 'framer-119gpni-container',
                                  children: r(qe, {
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: '100%',
                                    id: 'fyipn5SQW',
                                    isMixedBorderRadius: !1,
                                    layoutId: 'fyipn5SQW',
                                    loop: !0,
                                    muted: !0,
                                    objectFit: 'cover',
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile:
                                      './assets/LhJrmafZn9X3wnEyAZJqabbyLk.mp4',
                                    srcType: 'Upload',
                                    srcUrl:
                                      'https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4',
                                    startTime: 0,
                                    style: { height: '100%', width: '100%' },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: '100%',
                                  }),
                                }),
                              }),
                            ],
                          }),
                          c('div', {
                            className: 'framer-1ta0hdd',
                            'data-framer-name': 'Frame 6',
                            name: 'Frame 6',
                            children: [
                              r($, {
                                breakpoint: d,
                                overrides: {
                                  i1xw_uat1: {
                                    children: c(p, {
                                      children: [
                                        r('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                            '--framer-font-family':
                                              '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                            '--framer-font-size': '55px',
                                            '--framer-line-height': '100%',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: '1.000.000.000',
                                        }),
                                        r('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                            '--framer-font-family':
                                              '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                            '--framer-font-size': '55px',
                                            '--framer-line-height': '100%',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'TOKENS',
                                        }),
                                      ],
                                    }),
                                  },
                                  sz35tS2Nm: {
                                    children: c(p, {
                                      children: [
                                        r('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                            '--framer-font-family':
                                              '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                            '--framer-font-size': '48px',
                                            '--framer-line-height': '100%',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: '100.000.000',
                                        }),
                                        r('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                            '--framer-font-family':
                                              '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                            '--framer-font-size': '48px',
                                            '--framer-line-height': '100%',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'TOKENS',
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: r(w, {
                                  __fromCanvasComponent: !0,
                                  children: c(p, {
                                    children: [
                                      r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '64px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: '100.000.000',
                                      }),
                                      r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '64px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'TOKENS',
                                      }),
                                    ],
                                  }),
                                  className: 'framer-hiiwtb',
                                  fonts: ['CUSTOM;04b_19 Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                              }),
                              c('div', {
                                className: 'framer-18n3asv',
                                children: [
                                  c('div', {
                                    className: 'framer-gp684f',
                                    children: [
                                      r(W, {
                                        background: {
                                          alt: '',
                                          fit: 'fit',
                                          intrinsicHeight: 64,
                                          intrinsicWidth: 263,
                                          loading: 'lazy',
                                          pixelHeight: 36,
                                          pixelWidth: 36,
                                          positionX: 'center',
                                          positionY: 'center',
                                          src: './images/foRaWqkCLIrKTK2UyyTJVN0E4I.svg',
                                        },
                                        className: 'framer-9rdeof',
                                        'data-framer-name': 'image 5',
                                        name: 'image 5',
                                      }),
                                      r($, {
                                        breakpoint: d,
                                        overrides: {
                                          sz35tS2Nm: {
                                            children: r(p, {
                                              children: r('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                  '--framer-font-family':
                                                    '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '18px',
                                                  '--framer-line-height':
                                                    '130%',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: '100% LIQUIDITY POOL',
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(w, {
                                          __fromCanvasComponent: !0,
                                          children: r(p, {
                                            children: r('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                '--framer-font-size': '24px',
                                                '--framer-line-height': '130%',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children: '100% LIQUIDITY POOL',
                                            }),
                                          }),
                                          className: 'framer-1mqaq4o',
                                          fonts: [
                                            'CUSTOM;DuperWebW03-Bold Regular',
                                          ],
                                          verticalAlignment: 'top',
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  c('div', {
                                    className: 'framer-dd3ah3',
                                    children: [
                                      r(W, {
                                        background: {
                                          alt: '',
                                          fit: 'fit',
                                          intrinsicHeight: 64,
                                          intrinsicWidth: 263,
                                          loading: 'lazy',
                                          pixelHeight: 36,
                                          pixelWidth: 36,
                                          positionX: 'center',
                                          positionY: 'center',
                                          src: './images/epXI2H9kNKnopsdJWuWSJMcEt7g.svg',
                                        },
                                        className: 'framer-fkrbt',
                                        'data-framer-name': 'image 5',
                                        name: 'image 5',
                                      }),
                                      r($, {
                                        breakpoint: d,
                                        overrides: {
                                          sz35tS2Nm: {
                                            children: r(p, {
                                              children: r('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                  '--framer-font-family':
                                                    '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '18px',
                                                  '--framer-line-height':
                                                    '130%',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: '100% LP locked',
                                              }),
                                            }),
                                          },
                                        },
                                        children: r(w, {
                                          __fromCanvasComponent: !0,
                                          children: r(p, {
                                            children: r('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                                                '--framer-font-size': '24px',
                                                '--framer-line-height': '130%',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children: '100% LP locked',
                                            }),
                                          }),
                                          className: 'framer-1xdn5jb',
                                          fonts: [
                                            'CUSTOM;DuperWebW03-Bold Regular',
                                          ],
                                          verticalAlignment: 'top',
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    r('div', {
                      className: 'framer-rsxtpk',
                      'data-border': !0,
                      'data-framer-name': 'Ticker Intersection',
                      name: 'Ticker Intersection',
                      children: r(D, {
                        children: r(H, {
                          className: 'framer-1jlajo1-container',
                          children: r(Oe, {
                            alignment: 'center',
                            direction: 'right',
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 36,
                            height: '100%',
                            hoverFactor: 1,
                            id: 'kTMI59KQU',
                            layoutId: 'kTMI59KQU',
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 21,
                                  pixelWidth: 90,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/DZT5cEsmkqUxXepwbLS6j9bakk.png',
                                },
                                className: 'framer-s4tg9s',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                              r(W, {
                                background: {
                                  alt: '',
                                  fit: 'fit',
                                  intrinsicHeight: 64,
                                  intrinsicWidth: 263,
                                  pixelHeight: 10,
                                  pixelWidth: 10,
                                  positionX: 'center',
                                  positionY: 'center',
                                  src: './images/TcaygBkrTLGzahwqSyjHjeVYsg.svg',
                                },
                                className: 'framer-4v69z1',
                                'data-framer-name': 'image 5',
                                name: 'image 5',
                              }),
                            ],
                            speed: 100,
                            style: { height: '100%', width: '100%' },
                            width: '100%',
                          }),
                        }),
                      }),
                    }),
                    c('div', {
                      className: 'framer-1blmejv',
                      'data-framer-name': 'Footer',
                      id: j,
                      name: 'Footer',
                      ref: E,
                      children: [
                        r('div', {
                          className: 'framer-mpb4iy',
                          'data-framer-name': 'Content',
                          name: 'Content',
                          children: c('div', {
                            className: 'framer-10kqh6m',
                            children: [
                              r($, {
                                breakpoint: d,
                                overrides: {
                                  sz35tS2Nm: {
                                    children: r(p, {
                                      children: r('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                          '--framer-font-size': '64px',
                                          '--framer-line-height': '100%',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'socials',
                                      }),
                                    }),
                                  },
                                },
                                children: r(w, {
                                  __fromCanvasComponent: !0,
                                  children: r(p, {
                                    children: r('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NOzA0Yl8xOSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"04b_19 Regular", "04b_19 Regular Placeholder", sans-serif',
                                        '--framer-font-size': '108px',
                                        '--framer-line-height': '100%',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'socials',
                                    }),
                                  }),
                                  className: 'framer-s1t98y',
                                  fonts: ['CUSTOM;04b_19 Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                              }),
                              c('div', {
                                className: 'framer-1dsr43z',
                                children: [
                                  r(D, {
                                    children: r(H, {
                                      className: 'framer-135oz27-container',
                                      'data-framer-cursor': '1w8ybsv',
                                      children: r(er, {
                                        bZsnTBIZu: 'rgb(21, 39, 102)',
                                        CiWo9qyo0: 'https://x.com/BirdySol',
                                        height: '100%',
                                        id: 'jT7ZdRlB8',
                                        layoutId: 'jT7ZdRlB8',
                                        PPM8eZNfR: 'rgb(0, 29, 178)',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                  r(D, {
                                    children: r(H, {
                                      className: 'framer-1ceimdj-container',
                                      'data-framer-cursor': '1w8ybsv',
                                      children: r(er, {
                                        bZsnTBIZu: 'rgb(21, 39, 102)',
                                        CiWo9qyo0: 'https://t.me/BirdyLol',
                                        height: '100%',
                                        id: 'MwED1HNB3',
                                        jkUJRz9gR: Qr(
                                          {
                                            src: './images/6l4aSArFWNBZMX34EfJzXD92sM.svg',
                                          },
                                          ''
                                        ),
                                        layoutId: 'MwED1HNB3',
                                        PPM8eZNfR: 'rgb(0, 29, 178)',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                  r(D, {
                                    children: r(H, {
                                      className: 'framer-18q3hxi-container',
                                      'data-framer-cursor': '1w8ybsv',
                                      children: r(er, {
                                        bZsnTBIZu: 'rgb(21, 39, 102)',
                                        CiWo9qyo0:
                                          'https://dexscreener.com/solana/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                        height: '100%',
                                        id: 'bOHANc5rB',
                                        jkUJRz9gR: Qr(
                                          {
                                            src: './images/xKee447ZT5BBG895HL5aWOXkNg.svg',
                                          },
                                          ''
                                        ),
                                        layoutId: 'bOHANc5rB',
                                        PPM8eZNfR: 'rgb(0, 29, 178)',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                  r(D, {
                                    children: r(H, {
                                      className: 'framer-2skl6p-container',
                                      'data-framer-cursor': '1w8ybsv',
                                      children: r(er, {
                                        bZsnTBIZu: 'rgb(21, 39, 102)',
                                        CiWo9qyo0:
                                          'https://pump.fun/bGgQoa8KgjmfRJewxKNoLaCUU6fQthSu8wGqGbXpump',
                                        height: '100%',
                                        id: 'sHW9lmejQ',
                                        jkUJRz9gR: Qr(
                                          {
                                            src: './images/Fblg8LYdQnTFpvm2MZ6HYQJWjY.svg',
                                          },
                                          ''
                                        ),
                                        layoutId: 'sHW9lmejQ',
                                        PPM8eZNfR: 'rgb(0, 29, 178)',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        r($, {
                          breakpoint: d,
                          overrides: {
                            sz35tS2Nm: {
                              background: {
                                alt: '',
                                fit: 'fit',
                                loading: 'lazy',
                                pixelHeight: 663,
                                pixelWidth: 1210,
                                positionX: 'left',
                                positionY: 'bottom',
                                sizes: '100vw',
                                src: './images/ee7Np7NjGMwCFT7tKWthuQruw.png',
                                srcSet:
                                  './images/ee7Np7NjGMwCFT7tKWthuQruw.png?scale-down-to=512 512w,./images/ee7Np7NjGMwCFT7tKWthuQruw.png?scale-down-to=1024 1024w,./images/ee7Np7NjGMwCFT7tKWthuQruw.png 1210w',
                              },
                            },
                          },
                          children: r(W, {
                            background: {
                              alt: '',
                              fit: 'fit',
                              loading: 'lazy',
                              pixelHeight: 663,
                              pixelWidth: 1210,
                              positionX: 'left',
                              positionY: 'bottom',
                              sizes: '73vw',
                              src: './images/ee7Np7NjGMwCFT7tKWthuQruw.png',
                              srcSet:
                                './images/ee7Np7NjGMwCFT7tKWthuQruw.png?scale-down-to=512 512w,./images/ee7Np7NjGMwCFT7tKWthuQruw.png?scale-down-to=1024 1024w,./images/ee7Np7NjGMwCFT7tKWthuQruw.png 1210w',
                            },
                            className: 'framer-150cc0s',
                            'data-framer-name': 'BG',
                            name: 'BG',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r('div', { className: Y(Fa, ...de), id: 'overlay' }),
          ],
        }),
      })
    );
  }),
  as = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    `.${Xr.bodyClassName}-framer-aG5lM { background: rgb(59, 91, 255); }`,
    '.framer-aG5lM.framer-lux5qc, .framer-aG5lM .framer-lux5qc { display: block; }',
    '.framer-aG5lM.framer-72rtr7 { align-content: center; align-items: center; background-color: #3b5bff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }',
    '.framer-aG5lM .framer-1fqs8gp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; z-index: 9; }',
    '.framer-aG5lM .framer-ctrzhx { --border-bottom-width: 1px; --border-color: rgba(0, 0, 0, 0.25); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: #3b5bff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-1ksxgkz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1568px; overflow: visible; padding: 16px 36px 16px 36px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-6fy7bk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }',
    '.framer-aG5lM .framer-15u0fax, .framer-aG5lM .framer-1nw0ifv, .framer-aG5lM .framer-tschmk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-ph62rv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }',
    '.framer-aG5lM .framer-1v2bsya, .framer-aG5lM .framer-1t261v, .framer-aG5lM .framer-1xebpww, .framer-aG5lM .framer-1iji9ql, .framer-aG5lM .framer-im0tzj, .framer-aG5lM .framer-6j1ojn, .framer-aG5lM .framer-1d8nflv, .framer-aG5lM .framer-11vln17, .framer-aG5lM .framer-1lpsupf, .framer-aG5lM .framer-1mqaq4o, .framer-aG5lM .framer-1xdn5jb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-1cgoiu0 { flex: none; height: 20px; pointer-events: none; position: relative; width: 70px; }',
    '.framer-aG5lM .framer-1m9muiz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }',
    '.framer-aG5lM .framer-y8fy3f-container, .framer-aG5lM .framer-1ftmcwu-container, .framer-aG5lM .framer-1h2s4yi-container, .framer-aG5lM .framer-111c4iw-container, .framer-aG5lM .framer-ji1ziu-container, .framer-aG5lM .framer-kohrhx-container, .framer-aG5lM .framer-1ty9q43-container, .framer-aG5lM .framer-1yudfa6-container, .framer-aG5lM .framer-135oz27-container, .framer-aG5lM .framer-1ceimdj-container, .framer-aG5lM .framer-18q3hxi-container, .framer-aG5lM .framer-2skl6p-container { flex: none; height: auto; position: relative; width: auto; }',
    '.framer-aG5lM .framer-1jscsa0-container { flex: none; height: auto; position: relative; width: 100%; z-index: 9; }',
    '.framer-aG5lM .framer-uouig2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-1eldfc { align-content: center; align-items: center; background-color: #4266fe; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 164px 0px 310px 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-c19x8i-container { aspect-ratio: 4 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 480px); left: 50%; min-width: 100%; position: absolute; transform: translateX(-50%); width: 1920px; z-index: 0; }',
    '.framer-aG5lM .framer-1e2cr0k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 1568px; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-ox35em, .framer-aG5lM .framer-buzde3, .framer-aG5lM .framer-1r6kwdo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 4px 10px 0px #233799; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-122b91u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-szc1yu, .framer-aG5lM .framer-102v931, .framer-aG5lM .framer-1fvooyz, .framer-aG5lM .framer-j7jtfe, .framer-aG5lM .framer-rsxtpk { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #677ff4; box-shadow: 0px 8px 0px 0px #233799; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 72px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }',
    '.framer-aG5lM .framer-nr6co6-container, .framer-aG5lM .framer-1qzan20-container, .framer-aG5lM .framer-mo35ov-container, .framer-aG5lM .framer-1oqdoke-container, .framer-aG5lM .framer-1jlajo1-container { flex: none; height: 100%; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-s4tg9s { height: 24px; position: relative; width: 91px; }',
    '.framer-aG5lM .framer-4v69z1 { height: 10px; position: relative; width: 10px; }',
    '.framer-aG5lM .framer-yqpr91 { align-content: center; align-items: center; background-color: #4266fe; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-s7pa4r { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 600px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-eo7vqb { aspect-ratio: 0.8 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 600px); min-height: 100%; overflow: hidden; pointer-events: none; position: relative; width: 1px; z-index: 0; }',
    '.framer-aG5lM .framer-n4es2z { aspect-ratio: 0.8 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); left: 0px; position: absolute; top: 0px; width: 50%; z-index: 0; }',
    '.framer-aG5lM .framer-7h5h2s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: 100%; justify-content: center; overflow: visible; padding: 64px 0px 64px 0px; position: relative; width: 1px; z-index: 1; }',
    '.framer-aG5lM .framer-8fkya9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 2px 5px 0px #233799; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-1cbivsh { flex: none; height: auto; max-width: 648px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-11u4l6r { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; box-shadow: 0px 8px 0px 0px #233799; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: auto; justify-content: center; overflow: hidden; padding: 8px 10px 14px 36px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }',
    '.framer-aG5lM .framer-jbtgah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 0px 0px 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-16qdeou { aspect-ratio: 0.8 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 600px); min-height: 100%; overflow: visible; pointer-events: none; position: relative; width: 1px; z-index: 0; }',
    '.framer-aG5lM .framer-2x4p4z-container { aspect-ratio: 0.8 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 600px); left: 0px; position: absolute; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-cron9o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 148px 0px 0px 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-19d7h86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 140px; height: min-content; justify-content: center; max-width: 1568px; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-18c59j5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-13ryeim-container { flex: none; height: 200px; position: relative; width: 400px; }',
    '.framer-aG5lM .framer-9ms1he { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 257px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-2mbc4u { flex: none; height: 117px; overflow: visible; position: relative; width: 212px; }',
    '.framer-aG5lM .framer-qnsrha, .framer-aG5lM .framer-1143b1e { bottom: -4px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-aG5lM .framer-1pe5kou { align-content: center; align-items: center; bottom: 165px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-aG5lM .framer-tg306u, .framer-aG5lM .framer-1d7j8sh, .framer-aG5lM .framer-ma0oi1, .framer-aG5lM .framer-zm2ipq { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #0722ac; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-aG5lM .framer-jcmx11, .framer-aG5lM .framer-d7nxd0, .framer-aG5lM .framer-1x72spo, .framer-aG5lM .framer-1s8t60 { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: #2646ea; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 28px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-aG5lM .framer-4orpe2, .framer-aG5lM .framer-6urhc3, .framer-aG5lM .framer-o3epfg, .framer-aG5lM .framer-hvo7t4, .framer-aG5lM .framer-17jv8q1, .framer-aG5lM .framer-ws38ph, .framer-aG5lM .framer-13elatq, .framer-aG5lM .framer-19oolx2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-pvw3a3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 238px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-1ewph3x { flex: none; height: 187px; overflow: visible; position: relative; width: 212px; }',
    '.framer-aG5lM .framer-o8ou1d { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #9a5f4c; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 40px; box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 50%; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; transform: translateX(-50%); width: auto; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-mco79t, .framer-aG5lM .framer-1hy2lij, .framer-aG5lM .framer-1vyi7vj { aspect-ratio: 1 / 1; background-color: #b0b1b8; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 1.5px 1.5px 0px 0px #333438; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-16vycyt, .framer-aG5lM .framer-ioiniu, .framer-aG5lM .framer-ov81et { aspect-ratio: 1 / 1; background-color: #b0b1b8; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 1.5px 1.5px 0px 0px #333438; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; top: 12px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-f8ulum, .framer-aG5lM .framer-1nbqg02, .framer-aG5lM .framer-f4nr08 { aspect-ratio: 1 / 1; background-color: #b0b1b8; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 12px; box-shadow: 1.5px 1.5px 0px 0px #333438; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: absolute; right: 10px; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-y06qd7, .framer-aG5lM .framer-1o3fbe8, .framer-aG5lM .framer-9c6nfv { aspect-ratio: 1 / 1; background-color: #b0b1b8; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; bottom: 12px; box-shadow: 1.5px 1.5px 0px 0px #333438; flex: none; height: var(--framer-aspect-ratio-supported, 5px); left: 10px; overflow: hidden; position: absolute; width: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-lxvqx7 { align-content: center; align-items: center; bottom: 235px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; z-index: 1; }',
    '.framer-aG5lM .framer-1bek6dr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 258px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-y15ts5, .framer-aG5lM .framer-4x661t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 0px; transform: translateX(-50%); width: 240px; z-index: 1; }',
    '.framer-aG5lM .framer-1mykdpu { flex: none; height: 226px; position: relative; width: 212px; }',
    '.framer-aG5lM .framer-88vr2y { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #9a5f4c; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 60px; box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 50%; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; transform: translateX(-50%); width: auto; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-iygrlf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 315px 14px 0px 14px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-uygteq { flex: none; height: 274px; position: relative; width: 212px; }',
    '.framer-aG5lM .framer-1u8uw3s { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #9a5f4c; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; bottom: 83px; box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 50%; overflow: hidden; padding: 12px 24px 12px 24px; position: absolute; transform: translateX(-50%); width: auto; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
    '.framer-aG5lM .framer-9p8l8d { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-4xfnup { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 148px 0px 148px 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-s7itxj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 108px; height: min-content; justify-content: center; max-width: 1568px; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-19na29a, .framer-aG5lM .framer-1dsr43z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-6qiem2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-fivoou { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 150px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-dz7oi6, .framer-aG5lM .framer-13ctjvy, .framer-aG5lM .framer-1xbcuhh, .framer-aG5lM .framer-vt4t1c, .framer-aG5lM .framer-1tpipar { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 480px; overflow: visible; padding: 0px; position: relative; width: 480px; }',
    '.framer-aG5lM .framer-1uqcg7e, .framer-aG5lM .framer-1sjkd2r, .framer-aG5lM .framer-18nadnw, .framer-aG5lM .framer-bex12n, .framer-aG5lM .framer-glzors, .framer-aG5lM .framer-3r04kc, .framer-aG5lM .framer-16yh730, .framer-aG5lM .framer-9bwdhq { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #1030d4; box-shadow: 4px 10px 0px 0px #233799; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: center; overflow: visible; padding: 36px 64px 36px 64px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-dawbuz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-19r8y79, .framer-aG5lM .framer-18p62xu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-1gdnaf6, .framer-aG5lM .framer-19ibpuw, .framer-aG5lM .framer-1y3eks8, .framer-aG5lM .framer-1uxe3q7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 0px 4px 0px #04114f; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-14lq7jh, .framer-aG5lM .framer-1i38w3p { -webkit-filter: drop-shadow(0px 4px 0px #04114f); filter: drop-shadow(0px 4px 0px #04114f); flex: none; height: 24px; pointer-events: none; position: relative; width: 86px; }',
    '.framer-aG5lM .framer-1v39pe6, .framer-aG5lM .framer-1x0dc5f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 310px; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-jw4e1u, .framer-aG5lM .framer-h45lct { -webkit-filter: drop-shadow(4px 1px 2px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.8541666666666666 / 1; bottom: -17px; filter: drop-shadow(4px 1px 2px rgba(0, 0, 0, 0.25)); flex: none; height: var(--framer-aspect-ratio-supported, 96px); position: absolute; right: 6px; width: 82px; z-index: 1; }',
    '.framer-aG5lM .framer-18a5v9b, .framer-aG5lM .framer-npc32k { bottom: -25px; flex: none; height: 92px; left: 396px; position: absolute; width: 78px; z-index: -1; }',
    '.framer-aG5lM .framer-wqzsgc { flex: none; height: 90px; position: absolute; right: -159px; top: -91px; width: 265px; z-index: 1; }',
    '.framer-aG5lM .framer-1xn48v0, .framer-aG5lM .framer-pziz7u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 0px 4px 0px #04114f; white-space: pre-wrap; width: 352px; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-11ri2a9, .framer-aG5lM .framer-1sgs6k5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 352px; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-19xuv0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 150px; height: min-content; justify-content: center; overflow: visible; padding: 148px 0px 0px 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-12axnoy, .framer-aG5lM .framer-fsz3ou, .framer-aG5lM .framer-154oc4b, .framer-aG5lM .framer-2tzvpn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 0px 4px 0px #04114f; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-aG5lM .framer-1xrnxam, .framer-aG5lM .framer-1sovcu { -webkit-filter: drop-shadow(4px 1px 2px rgba(0, 0, 0, 0.25)); aspect-ratio: 0.75 / 1; bottom: -45px; filter: drop-shadow(4px 1px 2px rgba(0, 0, 0, 0.25)); flex: none; height: var(--framer-aspect-ratio-supported, 84px); left: -15px; position: absolute; width: 63px; z-index: 1; }',
    '.framer-aG5lM .framer-eb9szg { aspect-ratio: 1.1933701657458562 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 167px); overflow: visible; position: absolute; right: 50px; top: -142px; width: 200px; z-index: 1; }',
    '.framer-aG5lM .framer-1rfhr79, .framer-aG5lM .framer-4tv5p4 { aspect-ratio: 3.6216216216216215 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 74px); left: -158px; position: absolute; top: -74px; width: 268px; z-index: 1; }',
    '.framer-aG5lM .framer-xvol4m, .framer-aG5lM .framer-iu2ya7 { aspect-ratio: 0.7375 / 1; bottom: -50px; flex: none; height: var(--framer-aspect-ratio-supported, 80px); left: -10px; position: absolute; width: 59px; z-index: -1; }',
    '.framer-aG5lM .framer-1sxw50a, .framer-aG5lM .framer-mr4bfi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 480px; overflow: visible; padding: 0px; position: relative; width: 480px; }',
    '.framer-aG5lM .framer-17z1apl, .framer-aG5lM .framer-1riey29 { aspect-ratio: 3.6216216216216215 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 74px); left: -159px; position: absolute; top: -75px; width: 268px; z-index: 1; }',
    '.framer-aG5lM .framer-1goz7ur { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-10lyz73 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 480px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-92v48l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-1d3slku { aspect-ratio: 2.881720430107527 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 346px); left: 0px; position: absolute; right: -528px; top: -94px; z-index: 1; }',
    '.framer-aG5lM .framer-uaeo0m { align-content: center; align-items: center; background-color: #4266fe; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 148px 0px 148px 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-b62xt8 { display: grid; flex: none; gap: 108px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1568px; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-1wn77hv { align-self: start; flex: none; height: 100%; justify-self: start; overflow: visible; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-szzprh { flex: none; height: 369px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(49.87951807228918% - 369px / 2); width: 100%; z-index: 1; }',
    '.framer-aG5lM .framer-119gpni-container { flex: none; height: 165px; left: calc(49.501661129568134% - 150px / 2); pointer-events: none; position: absolute; top: calc(51.830985915492974% - 165px / 2); width: 150px; z-index: 0; }',
    '.framer-aG5lM .framer-1ta0hdd { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: 100%; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-hiiwtb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 2px 5px 0px #233799; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-18n3asv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-gp684f, .framer-aG5lM .framer-dd3ah3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-9rdeof, .framer-aG5lM .framer-fkrbt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 36px; }',
    '.framer-aG5lM .framer-1blmejv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 750px; justify-content: flex-end; overflow: hidden; padding: 180px 0px 0px 0px; position: relative; width: 100%; }',
    '.framer-aG5lM .framer-mpb4iy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 64px 0px 0px; position: relative; width: auto; z-index: 1; }',
    '.framer-aG5lM .framer-10kqh6m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-aG5lM .framer-s1t98y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 4px 7px 0px #233799; white-space: pre; width: auto; }',
    '.framer-aG5lM .framer-150cc0s { bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; top: 180px; width: 73%; z-index: 0; }',
    '@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aG5lM.framer-72rtr7, .framer-aG5lM .framer-1fqs8gp, .framer-aG5lM .framer-ctrzhx, .framer-aG5lM .framer-6fy7bk, .framer-aG5lM .framer-ph62rv, .framer-aG5lM .framer-1m9muiz, .framer-aG5lM .framer-uouig2, .framer-aG5lM .framer-1eldfc, .framer-aG5lM .framer-1e2cr0k, .framer-aG5lM .framer-122b91u, .framer-aG5lM .framer-szc1yu, .framer-aG5lM .framer-yqpr91, .framer-aG5lM .framer-s7pa4r, .framer-aG5lM .framer-7h5h2s, .framer-aG5lM .framer-11u4l6r, .framer-aG5lM .framer-jbtgah, .framer-aG5lM .framer-102v931, .framer-aG5lM .framer-cron9o, .framer-aG5lM .framer-19d7h86, .framer-aG5lM .framer-18c59j5, .framer-aG5lM .framer-9ms1he, .framer-aG5lM .framer-1pe5kou, .framer-aG5lM .framer-tg306u, .framer-aG5lM .framer-jcmx11, .framer-aG5lM .framer-pvw3a3, .framer-aG5lM .framer-o8ou1d, .framer-aG5lM .framer-lxvqx7, .framer-aG5lM .framer-1d7j8sh, .framer-aG5lM .framer-d7nxd0, .framer-aG5lM .framer-1bek6dr, .framer-aG5lM .framer-y15ts5, .framer-aG5lM .framer-ma0oi1, .framer-aG5lM .framer-1x72spo, .framer-aG5lM .framer-88vr2y, .framer-aG5lM .framer-iygrlf, .framer-aG5lM .framer-4x661t, .framer-aG5lM .framer-zm2ipq, .framer-aG5lM .framer-1s8t60, .framer-aG5lM .framer-1u8uw3s, .framer-aG5lM .framer-1fvooyz, .framer-aG5lM .framer-4xfnup, .framer-aG5lM .framer-s7itxj, .framer-aG5lM .framer-19na29a, .framer-aG5lM .framer-6qiem2, .framer-aG5lM .framer-fivoou, .framer-aG5lM .framer-dz7oi6, .framer-aG5lM .framer-1uqcg7e, .framer-aG5lM .framer-dawbuz, .framer-aG5lM .framer-19r8y79, .framer-aG5lM .framer-13ctjvy, .framer-aG5lM .framer-1sjkd2r, .framer-aG5lM .framer-19xuv0h, .framer-aG5lM .framer-1xbcuhh, .framer-aG5lM .framer-18nadnw, .framer-aG5lM .framer-1sxw50a, .framer-aG5lM .framer-bex12n, .framer-aG5lM .framer-1goz7ur, .framer-aG5lM .framer-10lyz73, .framer-aG5lM .framer-glzors, .framer-aG5lM .framer-92v48l, .framer-aG5lM .framer-18p62xu, .framer-aG5lM .framer-vt4t1c, .framer-aG5lM .framer-3r04kc, .framer-aG5lM .framer-1tpipar, .framer-aG5lM .framer-16yh730, .framer-aG5lM .framer-mr4bfi, .framer-aG5lM .framer-9bwdhq, .framer-aG5lM .framer-j7jtfe, .framer-aG5lM .framer-uaeo0m, .framer-aG5lM .framer-1ta0hdd, .framer-aG5lM .framer-18n3asv, .framer-aG5lM .framer-gp684f, .framer-aG5lM .framer-dd3ah3, .framer-aG5lM .framer-rsxtpk, .framer-aG5lM .framer-1blmejv, .framer-aG5lM .framer-mpb4iy, .framer-aG5lM .framer-10kqh6m, .framer-aG5lM .framer-1dsr43z { gap: 0px; } .framer-aG5lM.framer-72rtr7 > *, .framer-aG5lM .framer-1fqs8gp > *, .framer-aG5lM .framer-ctrzhx > *, .framer-aG5lM .framer-uouig2 > *, .framer-aG5lM .framer-1eldfc > *, .framer-aG5lM .framer-yqpr91 > *, .framer-aG5lM .framer-cron9o > *, .framer-aG5lM .framer-9ms1he > *, .framer-aG5lM .framer-1pe5kou > *, .framer-aG5lM .framer-lxvqx7 > *, .framer-aG5lM .framer-y15ts5 > *, .framer-aG5lM .framer-4x661t > *, .framer-aG5lM .framer-4xfnup > *, .framer-aG5lM .framer-dawbuz > *, .framer-aG5lM .framer-uaeo0m > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-aG5lM.framer-72rtr7 > :first-child, .framer-aG5lM .framer-1fqs8gp > :first-child, .framer-aG5lM .framer-ctrzhx > :first-child, .framer-aG5lM .framer-uouig2 > :first-child, .framer-aG5lM .framer-1eldfc > :first-child, .framer-aG5lM .framer-1e2cr0k > :first-child, .framer-aG5lM .framer-yqpr91 > :first-child, .framer-aG5lM .framer-7h5h2s > :first-child, .framer-aG5lM .framer-cron9o > :first-child, .framer-aG5lM .framer-19d7h86 > :first-child, .framer-aG5lM .framer-18c59j5 > :first-child, .framer-aG5lM .framer-9ms1he > :first-child, .framer-aG5lM .framer-1pe5kou > :first-child, .framer-aG5lM .framer-pvw3a3 > :first-child, .framer-aG5lM .framer-lxvqx7 > :first-child, .framer-aG5lM .framer-1bek6dr > :first-child, .framer-aG5lM .framer-y15ts5 > :first-child, .framer-aG5lM .framer-iygrlf > :first-child, .framer-aG5lM .framer-4x661t > :first-child, .framer-aG5lM .framer-4xfnup > :first-child, .framer-aG5lM .framer-s7itxj > :first-child, .framer-aG5lM .framer-fivoou > :first-child, .framer-aG5lM .framer-1uqcg7e > :first-child, .framer-aG5lM .framer-dawbuz > :first-child, .framer-aG5lM .framer-1sjkd2r > :first-child, .framer-aG5lM .framer-19xuv0h > :first-child, .framer-aG5lM .framer-18nadnw > :first-child, .framer-aG5lM .framer-1sxw50a > :first-child, .framer-aG5lM .framer-bex12n > :first-child, .framer-aG5lM .framer-1goz7ur > :first-child, .framer-aG5lM .framer-glzors > :first-child, .framer-aG5lM .framer-92v48l > :first-child, .framer-aG5lM .framer-3r04kc > :first-child, .framer-aG5lM .framer-16yh730 > :first-child, .framer-aG5lM .framer-mr4bfi > :first-child, .framer-aG5lM .framer-9bwdhq > :first-child, .framer-aG5lM .framer-uaeo0m > :first-child, .framer-aG5lM .framer-1ta0hdd > :first-child, .framer-aG5lM .framer-18n3asv > :first-child, .framer-aG5lM .framer-mpb4iy > :first-child, .framer-aG5lM .framer-10kqh6m > :first-child { margin-top: 0px; } .framer-aG5lM.framer-72rtr7 > :last-child, .framer-aG5lM .framer-1fqs8gp > :last-child, .framer-aG5lM .framer-ctrzhx > :last-child, .framer-aG5lM .framer-uouig2 > :last-child, .framer-aG5lM .framer-1eldfc > :last-child, .framer-aG5lM .framer-1e2cr0k > :last-child, .framer-aG5lM .framer-yqpr91 > :last-child, .framer-aG5lM .framer-7h5h2s > :last-child, .framer-aG5lM .framer-cron9o > :last-child, .framer-aG5lM .framer-19d7h86 > :last-child, .framer-aG5lM .framer-18c59j5 > :last-child, .framer-aG5lM .framer-9ms1he > :last-child, .framer-aG5lM .framer-1pe5kou > :last-child, .framer-aG5lM .framer-pvw3a3 > :last-child, .framer-aG5lM .framer-lxvqx7 > :last-child, .framer-aG5lM .framer-1bek6dr > :last-child, .framer-aG5lM .framer-y15ts5 > :last-child, .framer-aG5lM .framer-iygrlf > :last-child, .framer-aG5lM .framer-4x661t > :last-child, .framer-aG5lM .framer-4xfnup > :last-child, .framer-aG5lM .framer-s7itxj > :last-child, .framer-aG5lM .framer-fivoou > :last-child, .framer-aG5lM .framer-1uqcg7e > :last-child, .framer-aG5lM .framer-dawbuz > :last-child, .framer-aG5lM .framer-1sjkd2r > :last-child, .framer-aG5lM .framer-19xuv0h > :last-child, .framer-aG5lM .framer-18nadnw > :last-child, .framer-aG5lM .framer-1sxw50a > :last-child, .framer-aG5lM .framer-bex12n > :last-child, .framer-aG5lM .framer-1goz7ur > :last-child, .framer-aG5lM .framer-glzors > :last-child, .framer-aG5lM .framer-92v48l > :last-child, .framer-aG5lM .framer-3r04kc > :last-child, .framer-aG5lM .framer-16yh730 > :last-child, .framer-aG5lM .framer-mr4bfi > :last-child, .framer-aG5lM .framer-9bwdhq > :last-child, .framer-aG5lM .framer-uaeo0m > :last-child, .framer-aG5lM .framer-1ta0hdd > :last-child, .framer-aG5lM .framer-18n3asv > :last-child, .framer-aG5lM .framer-mpb4iy > :last-child, .framer-aG5lM .framer-10kqh6m > :last-child { margin-bottom: 0px; } .framer-aG5lM .framer-6fy7bk > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-aG5lM .framer-6fy7bk > :first-child, .framer-aG5lM .framer-ph62rv > :first-child, .framer-aG5lM .framer-1m9muiz > :first-child, .framer-aG5lM .framer-122b91u > :first-child, .framer-aG5lM .framer-szc1yu > :first-child, .framer-aG5lM .framer-s7pa4r > :first-child, .framer-aG5lM .framer-11u4l6r > :first-child, .framer-aG5lM .framer-jbtgah > :first-child, .framer-aG5lM .framer-102v931 > :first-child, .framer-aG5lM .framer-tg306u > :first-child, .framer-aG5lM .framer-jcmx11 > :first-child, .framer-aG5lM .framer-o8ou1d > :first-child, .framer-aG5lM .framer-1d7j8sh > :first-child, .framer-aG5lM .framer-d7nxd0 > :first-child, .framer-aG5lM .framer-ma0oi1 > :first-child, .framer-aG5lM .framer-1x72spo > :first-child, .framer-aG5lM .framer-88vr2y > :first-child, .framer-aG5lM .framer-zm2ipq > :first-child, .framer-aG5lM .framer-1s8t60 > :first-child, .framer-aG5lM .framer-1u8uw3s > :first-child, .framer-aG5lM .framer-1fvooyz > :first-child, .framer-aG5lM .framer-19na29a > :first-child, .framer-aG5lM .framer-6qiem2 > :first-child, .framer-aG5lM .framer-dz7oi6 > :first-child, .framer-aG5lM .framer-19r8y79 > :first-child, .framer-aG5lM .framer-13ctjvy > :first-child, .framer-aG5lM .framer-1xbcuhh > :first-child, .framer-aG5lM .framer-10lyz73 > :first-child, .framer-aG5lM .framer-18p62xu > :first-child, .framer-aG5lM .framer-vt4t1c > :first-child, .framer-aG5lM .framer-1tpipar > :first-child, .framer-aG5lM .framer-j7jtfe > :first-child, .framer-aG5lM .framer-gp684f > :first-child, .framer-aG5lM .framer-dd3ah3 > :first-child, .framer-aG5lM .framer-rsxtpk > :first-child, .framer-aG5lM .framer-1blmejv > :first-child, .framer-aG5lM .framer-1dsr43z > :first-child { margin-left: 0px; } .framer-aG5lM .framer-6fy7bk > :last-child, .framer-aG5lM .framer-ph62rv > :last-child, .framer-aG5lM .framer-1m9muiz > :last-child, .framer-aG5lM .framer-122b91u > :last-child, .framer-aG5lM .framer-szc1yu > :last-child, .framer-aG5lM .framer-s7pa4r > :last-child, .framer-aG5lM .framer-11u4l6r > :last-child, .framer-aG5lM .framer-jbtgah > :last-child, .framer-aG5lM .framer-102v931 > :last-child, .framer-aG5lM .framer-tg306u > :last-child, .framer-aG5lM .framer-jcmx11 > :last-child, .framer-aG5lM .framer-o8ou1d > :last-child, .framer-aG5lM .framer-1d7j8sh > :last-child, .framer-aG5lM .framer-d7nxd0 > :last-child, .framer-aG5lM .framer-ma0oi1 > :last-child, .framer-aG5lM .framer-1x72spo > :last-child, .framer-aG5lM .framer-88vr2y > :last-child, .framer-aG5lM .framer-zm2ipq > :last-child, .framer-aG5lM .framer-1s8t60 > :last-child, .framer-aG5lM .framer-1u8uw3s > :last-child, .framer-aG5lM .framer-1fvooyz > :last-child, .framer-aG5lM .framer-19na29a > :last-child, .framer-aG5lM .framer-6qiem2 > :last-child, .framer-aG5lM .framer-dz7oi6 > :last-child, .framer-aG5lM .framer-19r8y79 > :last-child, .framer-aG5lM .framer-13ctjvy > :last-child, .framer-aG5lM .framer-1xbcuhh > :last-child, .framer-aG5lM .framer-10lyz73 > :last-child, .framer-aG5lM .framer-18p62xu > :last-child, .framer-aG5lM .framer-vt4t1c > :last-child, .framer-aG5lM .framer-1tpipar > :last-child, .framer-aG5lM .framer-j7jtfe > :last-child, .framer-aG5lM .framer-gp684f > :last-child, .framer-aG5lM .framer-dd3ah3 > :last-child, .framer-aG5lM .framer-rsxtpk > :last-child, .framer-aG5lM .framer-1blmejv > :last-child, .framer-aG5lM .framer-1dsr43z > :last-child { margin-right: 0px; } .framer-aG5lM .framer-ph62rv > *, .framer-aG5lM .framer-122b91u > *, .framer-aG5lM .framer-gp684f > *, .framer-aG5lM .framer-dd3ah3 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-aG5lM .framer-1m9muiz > *, .framer-aG5lM .framer-szc1yu > *, .framer-aG5lM .framer-102v931 > *, .framer-aG5lM .framer-tg306u > *, .framer-aG5lM .framer-jcmx11 > *, .framer-aG5lM .framer-1d7j8sh > *, .framer-aG5lM .framer-d7nxd0 > *, .framer-aG5lM .framer-ma0oi1 > *, .framer-aG5lM .framer-1x72spo > *, .framer-aG5lM .framer-zm2ipq > *, .framer-aG5lM .framer-1s8t60 > *, .framer-aG5lM .framer-1fvooyz > *, .framer-aG5lM .framer-19na29a > *, .framer-aG5lM .framer-dz7oi6 > *, .framer-aG5lM .framer-19r8y79 > *, .framer-aG5lM .framer-13ctjvy > *, .framer-aG5lM .framer-1xbcuhh > *, .framer-aG5lM .framer-10lyz73 > *, .framer-aG5lM .framer-18p62xu > *, .framer-aG5lM .framer-vt4t1c > *, .framer-aG5lM .framer-1tpipar > *, .framer-aG5lM .framer-j7jtfe > *, .framer-aG5lM .framer-rsxtpk > *, .framer-aG5lM .framer-1dsr43z > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aG5lM .framer-1e2cr0k > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-aG5lM .framer-s7pa4r > *, .framer-aG5lM .framer-jbtgah > *, .framer-aG5lM .framer-o8ou1d > *, .framer-aG5lM .framer-88vr2y > *, .framer-aG5lM .framer-1u8uw3s > *, .framer-aG5lM .framer-1blmejv > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-aG5lM .framer-7h5h2s > *, .framer-aG5lM .framer-18c59j5 > * { margin: 0px; margin-bottom: calc(54px / 2); margin-top: calc(54px / 2); } .framer-aG5lM .framer-11u4l6r > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-aG5lM .framer-19d7h86 > * { margin: 0px; margin-bottom: calc(140px / 2); margin-top: calc(140px / 2); } .framer-aG5lM .framer-pvw3a3 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-aG5lM .framer-1bek6dr > *, .framer-aG5lM .framer-iygrlf > *, .framer-aG5lM .framer-1sxw50a > *, .framer-aG5lM .framer-mr4bfi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aG5lM .framer-s7itxj > * { margin: 0px; margin-bottom: calc(108px / 2); margin-top: calc(108px / 2); } .framer-aG5lM .framer-6qiem2 > * { margin: 0px; margin-left: calc(160px / 2); margin-right: calc(160px / 2); } .framer-aG5lM .framer-fivoou > *, .framer-aG5lM .framer-19xuv0h > * { margin: 0px; margin-bottom: calc(150px / 2); margin-top: calc(150px / 2); } .framer-aG5lM .framer-1uqcg7e > *, .framer-aG5lM .framer-1sjkd2r > *, .framer-aG5lM .framer-18nadnw > *, .framer-aG5lM .framer-bex12n > *, .framer-aG5lM .framer-glzors > *, .framer-aG5lM .framer-3r04kc > *, .framer-aG5lM .framer-16yh730 > *, .framer-aG5lM .framer-9bwdhq > *, .framer-aG5lM .framer-18n3asv > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-aG5lM .framer-1goz7ur > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-aG5lM .framer-92v48l > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-aG5lM .framer-1ta0hdd > *, .framer-aG5lM .framer-10kqh6m > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-aG5lM .framer-mpb4iy > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } }',
    '@media (min-width: 1440px) { .framer-aG5lM .hidden-72rtr7 { display: none !important; } }',
    `@media (min-width: 810px) and (max-width: 1069px) { .framer-aG5lM .hidden-1k5vtbv { display: none !important; } .${Xr.bodyClassName}-framer-aG5lM { background: rgb(59, 91, 255); } .framer-aG5lM.framer-72rtr7 { width: 810px; } .framer-aG5lM .framer-1jscsa0-container { left: 50%; position: fixed; top: 0px; transform: translateX(-50%); } .framer-aG5lM .framer-1eldfc { padding: 264px 0px 310px 0px; } .framer-aG5lM .framer-1e2cr0k { padding: 0px 64px 0px 56px; } .framer-aG5lM .framer-7h5h2s { padding: 64px 0px 64px 64px; } .framer-aG5lM .framer-2x4p4z-container { height: var(--framer-aspect-ratio-supported, 466px); } .framer-aG5lM .framer-19d7h86 { gap: 80px; } .framer-aG5lM .framer-13ryeim-container { height: 589px; width: 100%; } .framer-aG5lM .framer-s7itxj, .framer-aG5lM .framer-b62xt8 { gap: 54px; padding: 0px 32px 0px 32px; } .framer-aG5lM .framer-1x0dc5f, .framer-aG5lM .framer-1sgs6k5 { width: 100%; } .framer-aG5lM .framer-119gpni-container { top: calc(51.38539042821161% - 165px / 2); } .framer-aG5lM .framer-1ta0hdd { justify-content: center; } .framer-aG5lM .framer-1blmejv { padding: 64px 0px 0px 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aG5lM .framer-19d7h86, .framer-aG5lM .framer-s7itxj, .framer-aG5lM .framer-b62xt8 { gap: 0px; } .framer-aG5lM .framer-19d7h86 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-aG5lM .framer-19d7h86 > :first-child, .framer-aG5lM .framer-s7itxj > :first-child { margin-top: 0px; } .framer-aG5lM .framer-19d7h86 > :last-child, .framer-aG5lM .framer-s7itxj > :last-child { margin-bottom: 0px; } .framer-aG5lM .framer-s7itxj > * { margin: 0px; margin-bottom: calc(54px / 2); margin-top: calc(54px / 2); } .framer-aG5lM .framer-b62xt8 > *, .framer-aG5lM .framer-b62xt8 > :first-child, .framer-aG5lM .framer-b62xt8 > :last-child { margin: 0px; } }}`,
    `@media (max-width: 809px) { .framer-aG5lM .hidden-hc9240 { display: none !important; } .${Xr.bodyClassName}-framer-aG5lM { background: rgb(59, 91, 255); } .framer-aG5lM.framer-72rtr7 { width: 390px; } .framer-aG5lM .framer-1jscsa0-container { left: 50%; position: fixed; top: 0px; transform: translateX(-50%); } .framer-aG5lM .framer-1eldfc { background-color: #3a59fd; padding: 150px 0px 220px 0px; } .framer-aG5lM .framer-c19x8i-container { height: var(--framer-aspect-ratio-supported, 220px); width: 880px; } .framer-aG5lM .framer-ox35em { text-shadow: 2px 5px 0px #233799; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-aG5lM .framer-s7pa4r { align-content: center; align-items: center; background-color: #3a59fd; gap: 64px; height: min-content; justify-content: flex-end; padding: 148px 0px 390px 0px; } .framer-aG5lM .framer-7h5h2s { flex: none; height: min-content; padding: 0px 30px 0px 30px; width: 100%; } .framer-aG5lM .framer-8fkya9 { order: 0; } .framer-aG5lM .framer-1cbivsh { order: 1; } .framer-aG5lM .framer-11u4l6r { flex-direction: column; gap: 16px; order: 2; padding: 16px 24px 14px 24px; width: 100%; } .framer-aG5lM .framer-jbtgah { padding: 0px; } .framer-aG5lM .framer-111c4iw-container, .framer-aG5lM .framer-18c59j5, .framer-aG5lM .framer-19na29a, .framer-aG5lM .framer-1x0dc5f, .framer-aG5lM .framer-1sgs6k5 { width: 100%; } .framer-aG5lM .framer-16qdeou { bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 488px); left: 0px; min-height: unset; position: absolute; right: 0px; width: unset; } .framer-aG5lM .framer-2x4p4z-container { height: var(--framer-aspect-ratio-supported, 488px); left: unset; right: 0px; } .framer-aG5lM .framer-19d7h86 { gap: 60px; } .framer-aG5lM .framer-buzde3, .framer-aG5lM .framer-1r6kwdo { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-aG5lM .framer-13ryeim-container { height: 589px; width: 100%; } .framer-aG5lM .framer-4xfnup { padding: 64px 0px 64px 0px; } .framer-aG5lM .framer-s7itxj { gap: 48px; padding: 0px 32px 0px 32px; } .framer-aG5lM .framer-10lyz73 { max-width: unset; } .framer-aG5lM .framer-glzors, .framer-aG5lM .framer-3r04kc, .framer-aG5lM .framer-16yh730, .framer-aG5lM .framer-9bwdhq { padding: 36px; } .framer-aG5lM .framer-h45lct { bottom: -37px; right: -14px; } .framer-aG5lM .framer-npc32k { bottom: -42px; left: unset; right: -16px; } .framer-aG5lM .framer-vt4t1c, .framer-aG5lM .framer-1tpipar, .framer-aG5lM .framer-mr4bfi { max-width: unset; width: 100%; } .framer-aG5lM .framer-uaeo0m { background-color: #3b5afe; padding: 64px 0px 64px 0px; } .framer-aG5lM .framer-b62xt8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 36px; padding: 0px 32px 0px 32px; } .framer-aG5lM .framer-1wn77hv { align-self: unset; height: 250px; } .framer-aG5lM .framer-szzprh { bottom: 23px; height: 208px; left: 0px; top: unset; } .framer-aG5lM .framer-119gpni-container { aspect-ratio: 0.9090909090909091 / 1; bottom: 55px; height: unset; left: 50%; top: 63px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 120px); } .framer-aG5lM .framer-1ta0hdd { align-self: unset; height: auto; width: auto; } .framer-aG5lM .framer-gp684f, .framer-aG5lM .framer-dd3ah3 { gap: 12px; } .framer-aG5lM .framer-9rdeof, .framer-aG5lM .framer-fkrbt { height: var(--framer-aspect-ratio-supported, 18px); width: 18px; } .framer-aG5lM .framer-1blmejv { height: 660px; justify-content: center; padding: 64px 0px 0px 0px; } .framer-aG5lM .framer-mpb4iy { align-content: center; align-items: center; padding: 0px; } .framer-aG5lM .framer-10kqh6m { align-content: center; align-items: center; } .framer-aG5lM .framer-150cc0s { top: 448px; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aG5lM .framer-s7pa4r, .framer-aG5lM .framer-11u4l6r, .framer-aG5lM .framer-19d7h86, .framer-aG5lM .framer-s7itxj, .framer-aG5lM .framer-b62xt8, .framer-aG5lM .framer-gp684f, .framer-aG5lM .framer-dd3ah3 { gap: 0px; } .framer-aG5lM .framer-s7pa4r > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-aG5lM .framer-s7pa4r > :first-child, .framer-aG5lM .framer-gp684f > :first-child, .framer-aG5lM .framer-dd3ah3 > :first-child { margin-left: 0px; } .framer-aG5lM .framer-s7pa4r > :last-child, .framer-aG5lM .framer-gp684f > :last-child, .framer-aG5lM .framer-dd3ah3 > :last-child { margin-right: 0px; } .framer-aG5lM .framer-11u4l6r > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-aG5lM .framer-11u4l6r > :first-child, .framer-aG5lM .framer-19d7h86 > :first-child, .framer-aG5lM .framer-s7itxj > :first-child, .framer-aG5lM .framer-b62xt8 > :first-child { margin-top: 0px; } .framer-aG5lM .framer-11u4l6r > :last-child, .framer-aG5lM .framer-19d7h86 > :last-child, .framer-aG5lM .framer-s7itxj > :last-child, .framer-aG5lM .framer-b62xt8 > :last-child { margin-bottom: 0px; } .framer-aG5lM .framer-19d7h86 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-aG5lM .framer-s7itxj > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-aG5lM .framer-b62xt8 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-aG5lM .framer-gp684f > *, .framer-aG5lM .framer-dd3ah3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } }}`,
    `@media (min-width: 1070px) and (max-width: 1439px) { .framer-aG5lM .hidden-1je0ibw { display: none !important; } .${Xr.bodyClassName}-framer-aG5lM { background: rgb(59, 91, 255); } .framer-aG5lM.framer-72rtr7 { width: 1070px; } .framer-aG5lM .framer-n4es2z { height: var(--framer-aspect-ratio-supported, 196px); } .framer-aG5lM .framer-7h5h2s { padding: 64px; } .framer-aG5lM .framer-2x4p4z-container { height: var(--framer-aspect-ratio-supported, 393px); } .framer-aG5lM .framer-dz7oi6 { max-width: 400px; width: min-content; } .framer-aG5lM .framer-jw4e1u { bottom: -50px; } .framer-aG5lM .framer-18a5v9b { bottom: -55px; left: unset; right: 2px; } .framer-aG5lM .framer-13ctjvy, .framer-aG5lM .framer-1xbcuhh, .framer-aG5lM .framer-1sxw50a { max-width: 400px; } .framer-aG5lM .framer-wqzsgc { right: -157px; } .framer-aG5lM .framer-1rfhr79, .framer-aG5lM .framer-17z1apl { left: -157px; }}`,
    ...qr,
    '.framer-aG5lM[data-border="true"]::after, .framer-aG5lM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Jr = K(ts, as, 'framer-aG5lM'),
  vm = Jr;
Jr.displayName = 'Home';
Jr.defaultProps = { height: 5508, width: 1440 };
ee(
  Jr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'DuperWebW03-Bold Regular',
          source: 'custom',
          url: './assets/UtpBWDDw1GUQLPoDaFRVU4pCwE4.woff2',
        },
        {
          family: '04b_19 Regular',
          source: 'custom',
          url: './assets/NaWfzGXMkSqtKX9YaS2MB9cQfpU.woff2',
        },
      ],
    },
    ...Nl,
    ...Wl,
    ...zl,
    ...El,
    ...Ll,
    ...Pl,
    ...Il,
    ...Dl,
    ...jl,
    ...Bl,
    ...Fl,
    ...Ul,
    ...Hl,
    ...Pr(Hr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var wm = {
  exports: {
    Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
    default: {
      type: 'reactComponent',
      name: 'FrameraugiA20Il',
      slots: [],
      annotations: {
        framerIntrinsicWidth: '1440',
        framerImmutableVariables: 'true',
        framerIntrinsicHeight: '5508',
        framerComponentViewportWidth: 'true',
        framerDisplayContentsDiv: 'false',
        framerContractVersion: '1',
        framerResponsiveScreen: '',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"i1xw_uat1":{"layout":["fixed","auto"]},"sz35tS2Nm":{"layout":["fixed","auto"]},"OUExfnfzb":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: { type: 'variable' },
  },
};
export { wm as __FramerMetadata__, vm as default };
//# sourceMappingURL=HV-OWO2CXanys9sdJCvEp8Q-KKCXopd6nvFVHcEx98.OYNF4GRM.mjs.map
