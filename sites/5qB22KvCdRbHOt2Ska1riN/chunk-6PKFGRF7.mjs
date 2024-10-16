import {
  f as Zt,
  c as navigator,
  d as window,
  b as wu,
} from './chunk-ENK4YSX5.mjs';
var Tt = {};
wu(Tt, {
  Children: () => En,
  Component: () => ye,
  Fragment: () => Wo,
  Profiler: () => Gk,
  PureComponent: () => Kk,
  StrictMode: () => qk,
  Suspense: () => Uo,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Qk,
  cloneElement: () => mn,
  createContext: () => xe,
  createElement: () => Pu,
  createFactory: () => Zk,
  createRef: () => Mm,
  default: () => b,
  forwardRef: () => $e,
  isValidElement: () => Jt,
  lazy: () => Jk,
  memo: () => eC,
  startTransition: () => Ai,
  unstable_act: () => tC,
  useCallback: () => ge,
  useContext: () => O,
  useDebugValue: () => nC,
  useDeferredValue: () => rC,
  useEffect: () => $,
  useId: () => Jr,
  useImperativeHandle: () => iC,
  useInsertionEffect: () => ot,
  useLayoutEffect: () => Rn,
  useMemo: () => pe,
  useReducer: () => oC,
  useRef: () => D,
  useState: () => pt,
  useSyncExternalStore: () => sC,
  useTransition: () => aC,
  version: () => lC,
});
Zt();
var b = {},
  jo = Symbol.for('react.element'),
  Mk = Symbol.for('react.portal'),
  Ok = Symbol.for('react.fragment'),
  Dk = Symbol.for('react.strict_mode'),
  Ak = Symbol.for('react.profiler'),
  Vk = Symbol.for('react.provider'),
  Bk = Symbol.for('react.context'),
  zk = Symbol.for('react.forward_ref'),
  $k = Symbol.for('react.suspense'),
  Nk = Symbol.for('react.memo'),
  Hk = Symbol.for('react.lazy'),
  km = Symbol.iterator;
function jk(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (km && e[km]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Em = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rm = Object.assign,
  Pm = {};
function Di(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pm),
    (this.updater = n || Em);
}
Di.prototype.isReactComponent = {};
Di.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Di.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function _m() {}
_m.prototype = Di.prototype;
function Cu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pm),
    (this.updater = n || Em);
}
var Tu = (Cu.prototype = new _m());
Tu.constructor = Cu;
Rm(Tu, Di.prototype);
Tu.isPureReactComponent = !0;
var Cm = Array.isArray,
  Fm = Object.prototype.hasOwnProperty,
  Eu = { current: null },
  Im = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Fm.call(t, r) && !Im.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: jo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Eu.current,
  };
}
function Wk(e, t) {
  return {
    $$typeof: jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ru(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === jo;
}
function Uk(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Tm = /\/+/g;
function ku(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Uk('' + e.key)
    : t.toString(36);
}
function Ia(e, t, n, r, i) {
  var o = typeof e;
  (o !== 'undefined' && o !== 'boolean') || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case jo:
          case Mk:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + ku(s, 0) : r),
      Cm(i)
        ? ((n = ''),
          e != null && (n = e.replace(Tm, '$&/') + '/'),
          Ia(i, t, n, '', function (c) {
            return c;
          }))
        : i != null &&
          (Ru(i) &&
            (i = Wk(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Tm, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Cm(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ku(o, a);
      s += Ia(o, t, n, l, i);
    }
  else if (((l = jk(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ku(o, a++)), (s += Ia(o, t, n, l, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Fa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ia(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Xk(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ht = { current: null },
  La = { transition: null },
  Yk = {
    ReactCurrentDispatcher: ht,
    ReactCurrentBatchConfig: La,
    ReactCurrentOwner: Eu,
  };
b.Children = {
  map: Fa,
  forEach: function (e, t, n) {
    Fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ru(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
b.Component = Di;
b.Fragment = Ok;
b.Profiler = Ak;
b.PureComponent = Cu;
b.StrictMode = Dk;
b.Suspense = $k;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yk;
b.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Rm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Eu.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Fm.call(t, l) &&
        !Im.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: jo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
b.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vk, _context: e }),
    (e.Consumer = e)
  );
};
b.createElement = Lm;
b.createFactory = function (e) {
  var t = Lm.bind(null, e);
  return (t.type = e), t;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (e) {
  return { $$typeof: zk, render: e };
};
b.isValidElement = Ru;
b.lazy = function (e) {
  return { $$typeof: Hk, _payload: { _status: -1, _result: e }, _init: Xk };
};
b.memo = function (e, t) {
  return { $$typeof: Nk, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
  var t = La.transition;
  La.transition = {};
  try {
    e();
  } finally {
    La.transition = t;
  }
};
b.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
b.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
b.useContext = function (e) {
  return ht.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
b.useId = function () {
  return ht.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n);
};
b.useRef = function (e) {
  return ht.current.useRef(e);
};
b.useState = function (e) {
  return ht.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
  return ht.current.useTransition();
};
b.version = '18.2.0';
var En = b.Children,
  ye = b.Component,
  Wo = b.Fragment,
  Gk = b.Profiler,
  Kk = b.PureComponent,
  qk = b.StrictMode,
  Uo = b.Suspense,
  Qk = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mn = b.cloneElement,
  xe = b.createContext,
  Pu = b.createElement,
  Zk = b.createFactory,
  Mm = b.createRef,
  $e = b.forwardRef,
  Jt = b.isValidElement,
  Jk = b.lazy,
  eC = b.memo,
  Ai = b.startTransition,
  tC = b.unstable_act,
  ge = b.useCallback,
  O = b.useContext,
  nC = b.useDebugValue,
  rC = b.useDeferredValue,
  $ = b.useEffect,
  Jr = b.useId,
  iC = b.useImperativeHandle,
  ot = b.useInsertionEffect,
  Rn = b.useLayoutEffect,
  pe = b.useMemo,
  oC = b.useReducer,
  D = b.useRef,
  pt = b.useState,
  sC = b.useSyncExternalStore,
  aC = b.useTransition,
  lC = b.version;
Zt();
var cC = 'default' in Tt ? b : Tt,
  Vi = {},
  uC = cC,
  fC = Symbol.for('react.element'),
  dC = Symbol.for('react.fragment'),
  hC = Object.prototype.hasOwnProperty,
  pC = uC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Om(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) hC.call(t, r) && !mC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: fC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: pC.current,
  };
}
Vi.Fragment = dC;
Vi.jsx = Om;
Vi.jsxs = Om;
var Ie = Vi.Fragment,
  C = Vi.jsx,
  ae = Vi.jsxs;
Zt();
var vC = Object.create,
  af = Object.defineProperty,
  gC = Object.getOwnPropertyDescriptor,
  Jv = Object.getOwnPropertyNames,
  yC = Object.getPrototypeOf,
  bC = Object.prototype.hasOwnProperty,
  xC = (e, t, n) =>
    t in e
      ? af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  nn = (e, t) =>
    function () {
      return t || (0, e[Jv(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  SC = (e, t, n, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of Jv(t))
        !bC.call(e, i) &&
          i !== n &&
          af(e, i, {
            get: () => t[i],
            enumerable: !(r = gC(t, i)) || r.enumerable,
          });
    return e;
  },
  On = (e, t, n) => (
    (n = e != null ? vC(yC(e)) : {}),
    SC(
      t || !e || !e.__esModule
        ? af(n, 'default', { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  R = (e, t, n) => (xC(e, typeof t != 'symbol' ? t + '' : t, n), n),
  lf = (e, t, n) => {
    if (!t.has(e)) throw TypeError('Cannot ' + n);
  },
  ai = (e, t, n) => (
    lf(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
  ),
  Wi = (e, t, n) => {
    if (t.has(e))
      throw TypeError('Cannot add the same private member more than once');
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  cf = (e, t, n, r) => (
    lf(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
  ),
  Rt = (e, t, n) => (lf(e, t, 'access private method'), n),
  wC = nn({
    '../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js'(e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  kC = nn({
    '../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js'(
      e
    ) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      function t(o) {
        return o && typeof o == 'object' && 'default' in o ? o.default : o;
      }
      var n = t(wC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Mn = xe({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  ss = xe({}),
  Ui = xe(null),
  Ga = typeof document < 'u',
  xr = Ga ? Rn : $,
  uf = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  CC = 'framerAppearId',
  Ka = 'data-' + uf(CC),
  qa = { skipAnimations: !1, useManualTiming: !1 },
  ns = xe({}),
  Qa = xe({}),
  eg = xe({ strict: !1 }),
  Dm = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function TC(e) {
  let t = new Dm(),
    n = new Dm(),
    r = 0,
    i = !1,
    o = !1,
    s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
var Go = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  EC = 40;
function tg(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Go.reduce((f, d) => ((f[d] = TC(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      let f = qa.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, EC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Go.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Go.reduce((f, d) => {
      let m = o[d];
      return (f[d] = (y, v = !1, S = !1) => (n || l(), m.schedule(y, v, S))), f;
    }, {}),
    cancel: (f) => Go.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: ff, cancel: a5 } = tg(queueMicrotask, !1);
function RC(e, t, n, r) {
  let { visualElement: i } = O(ss),
    o = O(eg),
    s = O(Ui),
    a = O(Mn).reducedMotion,
    l = D();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  let c = l.current;
  ot(() => {
    c && c.update(n, s);
  });
  let u = D(!!(n[Ka] && !window.HandoffComplete));
  return (
    xr(() => {
      c &&
        (ff.render(c.render),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    $(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function Bi(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function PC(e, t, n) {
  return ge(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Bi(n) && (n.current = r));
    },
    [t]
  );
}
function rs(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Za(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
var df = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  hf = ['initial', ...df];
function Ja(e) {
  return Za(e.animate) || hf.some((t) => rs(e[t]));
}
function ng(e) {
  return !!(Ja(e) || e.variants);
}
function _C(e, t) {
  if (Ja(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || rs(n) ? n : void 0,
      animate: rs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function FC(e) {
  let { initial: t, animate: n } = _C(e, O(ss));
  return pe(() => ({ initial: t, animate: n }), [Am(t), Am(n)]);
}
function Am(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
var Vm = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  is = {};
for (let e in Vm) is[e] = { isEnabled: (t) => Vm[e].some((n) => !!t[n]) };
function IC(e) {
  for (let t in e) is[t] = { ...is[t], ...e[t] };
}
var pf = Symbol.for('motionComponentSymbol');
function rg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && IC(e);
  function o(a, l) {
    let c,
      u = { ...O(Mn), ...a, layoutId: LC(a) },
      { isStatic: f } = u,
      d = FC(a),
      m = r(a, f);
    if (!f && Ga) {
      d.visualElement = RC(i, m, u, t);
      let y = O(Qa),
        v = O(eg).strict;
      d.visualElement && (c = d.visualElement.loadFeatures(u, v, e, y));
    }
    return ae(ss.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, PC(m, d.visualElement, l), m, f, d.visualElement),
      ],
    });
  }
  let s = $e(o);
  return (s[pf] = i), s;
}
function LC({ layoutId: e }) {
  let t = O(ns).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
var $a = {};
function mf(e) {
  Object.assign($a, e);
}
var Te = (e) => !!(e && e.getVelocity),
  as = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  li = new Set(as),
  MC = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  OC = as.length;
function ig(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = '';
  for (let s = 0; s < OC; s++) {
    let a = as[s];
    if (e[a] !== void 0) {
      let l = MC[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += 'translateZ(0)'),
    (o = o.trim()),
    i ? (o = i(e, r ? '' : o)) : n && r && (o = 'none'),
    o
  );
}
var Zn = (e, t, n) => (n > t ? t : n < e ? e : n),
  qo = (e) => Math.round(e * 1e5) / 1e5,
  vf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  DC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  AC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ls(e) {
  return typeof e == 'string';
}
var cs = (e) => ({
    test: (t) => ls(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  mr = cs('deg'),
  Pn = cs('%'),
  W = cs('px'),
  VC = cs('vh'),
  BC = cs('vw'),
  Bm = {
    ...Pn,
    parse: (e) => Pn.parse(e) / 100,
    transform: (e) => Pn.transform(e * 100),
  },
  zC = new Set([
    'animate',
    'exit',
    'variants',
    'initial',
    'style',
    'values',
    'variants',
    'transition',
    'transformTemplate',
    'custom',
    'inherit',
    'onBeforeLayoutMeasure',
    'onAnimationStart',
    'onAnimationComplete',
    'onUpdate',
    'onDragStart',
    'onDrag',
    'onDragEnd',
    'onMeasureDragConstraints',
    'onDirectionLock',
    'onDragTransitionEnd',
    '_dragX',
    '_dragY',
    'onHoverStart',
    'onHoverEnd',
    'onViewportEnter',
    'onViewportLeave',
    'globalTapTarget',
    'ignoreStrict',
    'viewport',
  ]);
function Hi(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    zC.has(e)
  );
}
var og = (e) => !Hi(e);
function sg(e) {
  e && (og = (t) => (t.startsWith('on') ? !Hi(t) : e(t)));
}
try {
  sg(kC().default);
} catch {}
function ag(e, t, n) {
  let r = {};
  for (let i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((og(i) ||
        (n === !0 && Hi(i)) ||
        (!t && !Hi(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]));
  return r;
}
var Hu = (e) => Array.isArray(e),
  $C = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
  NC = (e) => (Hu(e) ? e[e.length - 1] || 0 : e);
function st(e) {
  let t = Te(e) ? e.get() : e;
  return $C(t) ? t.toValue() : t;
}
function zm(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function gf(e, t, n, r) {
  if (typeof t == 'function') {
    let [i, o] = zm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    let [i, o] = zm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function tr(e) {
  let t = D(null);
  return t.current === null && (t.current = e()), t.current;
}
function HC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let s = { latestValues: jC(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
var el = (e) => (t, n) => {
  let r = O(ss),
    i = O(Ui),
    o = () => HC(e, t, r, i);
  return n ? o() : tr(o);
};
function jC(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = st(o[d]);
  let { initial: s, animate: a } = e,
    l = Ja(e),
    c = ng(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  return (
    f &&
      typeof f != 'boolean' &&
      !Za(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        let y = gf(e, m);
        if (!y) return;
        let { transitionEnd: v, transition: S, ...p } = y;
        for (let h in p) {
          let g = p[h];
          if (Array.isArray(g)) {
            let x = u ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[h] = g);
        }
        for (let h in v) i[h] = v[h];
      }),
    i
  );
}
var et = (e) => e,
  {
    schedule: Y,
    cancel: mt,
    state: Me,
    steps: Da,
  } = tg(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : et, !0),
  lg = (e) =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1;
function tl(e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var cg = (e) => (t) => lg(t) && e(t, tl(t));
function Qn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function _n(e, t, n, r) {
  return Qn(e, t, cg(n), r);
}
var WC = (e, t) => (n) => t(e(n)),
  Fn = (...e) => e.reduce(WC);
function ug(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var $m = ug('dragHorizontal'),
  Nm = ug('dragVertical');
function fg(e) {
  let t = !1;
  if (e === 'y') t = Nm();
  else if (e === 'x') t = $m();
  else {
    let n = $m(),
      r = Nm();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function yf() {
  let e = fg(!0);
  return e ? (e(), !1) : !0;
}
var Xi = et,
  Vt = et,
  Yi = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  Qo = { ...Yi, transform: (e) => Zn(0, 1, e) },
  Ma = { ...Yi, default: 1 },
  bf = (e, t) => (n) =>
    !!(
      (ls(n) && AC.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  dg = (e, t, n) => (r) => {
    if (!ls(r)) return r;
    let [i, o, s, a] = r.match(vf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  UC = (e) => Zn(0, 255, e),
  _u = { ...Yi, transform: (e) => Math.round(UC(e)) },
  ii = {
    test: bf('rgb', 'red'),
    parse: dg('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      _u.transform(e) +
      ', ' +
      _u.transform(t) +
      ', ' +
      _u.transform(n) +
      ', ' +
      qo(Qo.transform(r)) +
      ')',
  };
function XC(e) {
  let t = '',
    n = '',
    r = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var ju = { test: bf('#'), parse: XC, transform: ii.transform },
  zi = {
    test: bf('hsl', 'hue'),
    parse: dg('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      Pn.transform(qo(t)) +
      ', ' +
      Pn.transform(qo(n)) +
      ', ' +
      qo(Qo.transform(r)) +
      ')',
  },
  Je = {
    test: (e) => ii.test(e) || ju.test(e) || zi.test(e),
    parse: (e) =>
      ii.test(e) ? ii.parse(e) : zi.test(e) ? zi.parse(e) : ju.parse(e),
    transform: (e) =>
      ls(e) ? e : e.hasOwnProperty('red') ? ii.transform(e) : zi.transform(e),
  };
function YC(e) {
  var t, n;
  return (
    isNaN(e) &&
    ls(e) &&
    (((t = e.match(vf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(DC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var hg = 'number',
  pg = 'color',
  GC = 'var',
  KC = 'var(',
  Hm = '${}',
  qC =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function os(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        qC,
        (l) => (
          Je.test(l)
            ? (r.color.push(o), i.push(pg), n.push(Je.parse(l)))
            : l.startsWith(KC)
            ? (r.var.push(o), i.push(GC), n.push(l))
            : (r.number.push(o), i.push(hg), n.push(parseFloat(l))),
          ++o,
          Hm
        )
      )
      .split(Hm);
  return { values: n, split: a, indexes: r, types: i };
}
function mg(e) {
  return os(e).values;
}
function vg(e) {
  let { split: t, types: n } = os(e),
    r = t.length;
  return (i) => {
    let o = '';
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === hg
          ? (o += qo(i[s]))
          : a === pg
          ? (o += Je.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var QC = (e) => (typeof e == 'number' ? 0 : e);
function ZC(e) {
  let t = mg(e);
  return vg(e)(t.map(QC));
}
var Jn = { test: YC, parse: mg, createTransformer: vg, getAnimatableNone: ZC },
  In = (e) => e * 1e3,
  Ln = (e) => e / 1e3;
function xf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var JC = 5;
function gg(e, t, n) {
  let r = Math.max(t - JC, 0);
  return xf(n - e(r), t - r);
}
var Fu = 0.001,
  eT = 0.01,
  jm = 10,
  tT = 0.05,
  nT = 1;
function rT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Xi(e <= In(jm), 'Spring duration must be 10 seconds or less');
  let s = 1 - t;
  (s = Zn(tT, nT, s)),
    (e = Zn(eT, jm, Ln(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            m = Wu(c, s),
            y = Math.exp(-f);
          return Fu - (d / m) * y;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            v = Wu(Math.pow(c, 2), s);
          return ((-i(c) + Fu > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Fu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = oT(i, o, a);
  if (((e = In(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var iT = 12;
function oT(e, t, n) {
  let r = n;
  for (let i = 1; i < iT; i++) r = r - e(r) / t(r);
  return r;
}
function Wu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var sT = ['duration', 'bounce'],
  aT = ['stiffness', 'damping', 'mass'];
function Wm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Wm(e, aT) && Wm(e, sT)) {
    let n = rT(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function us({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = lT({ ...r, velocity: -Ln(r.velocity || 0) }),
    m = f || 0,
    y = l / (2 * Math.sqrt(a * c)),
    v = o - i,
    S = Ln(Math.sqrt(a / c)),
    p = Math.abs(v) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    let g = Wu(S, y);
    h = (x) => {
      let k = Math.exp(-y * S * x);
      return (
        o - k * (((m + y * S * v) / g) * Math.sin(g * x) + v * Math.cos(g * x))
      );
    };
  } else if (y === 1) h = (g) => o - Math.exp(-S * g) * (v + (m + S * v) * g);
  else {
    let g = S * Math.sqrt(y * y - 1);
    h = (x) => {
      let k = Math.exp(-y * S * x),
        w = Math.min(g * x, 300);
      return (
        o - (k * ((m + y * S * v) * Math.sinh(w) + g * v * Math.cosh(w))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (g) => {
      let x = h(g);
      if (d) s.done = g >= u;
      else {
        let k = m;
        g !== 0 && (y < 1 ? (k = gg(h, g, x)) : (k = 0));
        let w = Math.abs(k) <= n,
          T = Math.abs(o - x) <= t;
        s.done = w && T;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
var yg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  cT = 1e-7,
  uT = 12;
function fT(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = yg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > cT && ++a < uT);
  return s;
}
function Gi(e, t, n, r) {
  if (e === t && n === r) return et;
  let i = (o) => fT(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : yg(i(o), t, r));
}
var bg = Gi(0.42, 0, 1, 1),
  xg = Gi(0, 0, 0.58, 1),
  Sf = Gi(0.42, 0, 0.58, 1),
  wf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kf = (e) => (t) => 1 - e(1 - t),
  nl = (e) => 1 - Math.sin(Math.acos(e)),
  Cf = kf(nl),
  Sg = wf(nl),
  Tf = Gi(0.33, 1.53, 0.69, 0.99),
  rl = kf(Tf),
  wg = wf(rl),
  kg = (e) =>
    (e *= 2) < 1 ? 0.5 * rl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  br = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Se = (e, t, n) => e + (t - e) * n;
function Iu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function dT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Iu(l, a, e + 1 / 3)), (o = Iu(l, a, e)), (s = Iu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Na(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Lu = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  hT = [ju, ii, zi],
  pT = (e) => hT.find((t) => t.test(e));
function Um(e) {
  let t = pT(e);
  if (
    (Xi(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === zi && (n = dT(n)), n;
}
var Xm = (e, t) => {
    let n = Um(e),
      r = Um(t);
    if (!n || !r) return Na(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = Lu(n.red, r.red, o)),
      (i.green = Lu(n.green, r.green, o)),
      (i.blue = Lu(n.blue, r.blue, o)),
      (i.alpha = Se(n.alpha, r.alpha, o)),
      ii.transform(i)
    );
  },
  Cg = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Tg = Cg('--'),
  mT = Cg('var(--'),
  Ef = (e) => (mT(e) ? vT.test(e.split('/*')[0].trim()) : !1),
  vT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Uu = new Set(['none', 'hidden']);
function gT(e, t) {
  return Uu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function yT(e, t) {
  return (n) => Se(e, t, n);
}
function Rf(e) {
  return typeof e == 'number'
    ? yT
    : typeof e == 'string'
    ? Ef(e)
      ? Na
      : Je.test(e)
      ? Xm
      : ST
    : Array.isArray(e)
    ? Eg
    : typeof e == 'object'
    ? Je.test(e)
      ? Xm
      : bT
    : Na;
}
function Eg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => Rf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function bT(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rf(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function xT(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var ST = (e, t) => {
  let n = Jn.createTransformer(t),
    r = os(e),
    i = os(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Uu.has(e) && !i.values.length) || (Uu.has(t) && !r.values.length)
      ? gT(e, t)
      : Fn(Eg(xT(r, i), i.values), n)
    : (Xi(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      Na(e, t));
};
function Pf(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? Se(e, t, n)
    : Rf(e)(e, t);
}
function wT(e, t, n) {
  let r = [],
    i = n || Pf,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || et : t;
      a = Fn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ki(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Vt(o === t.length, 'Both input and output ranges must be the same length'),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = wT(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = br(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(Zn(e[0], e[o - 1], c)) : l;
}
var kT = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  Ym = (e) => e === Yi || e === W,
  Gm = (e, t) => parseFloat(e.split(', ')[t]),
  Km =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Gm(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Gm(o[1], e) : 0;
      }
    },
  CT = new Set(['x', 'y', 'z']),
  TT = as.filter((e) => !CT.has(e));
function ET(e) {
  let t = [];
  return (
    TT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t
  );
}
var ji = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Km(4, 13),
  y: Km(5, 14),
};
ji.translateX = ji.x;
ji.translateY = ji.y;
var oi = new Set(),
  Xu = !1,
  Yu = !1;
function Rg() {
  if (Yu) {
    let e = Array.from(oi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = ET(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Yu = !1), (Xu = !1), oi.forEach((e) => e.complete()), oi.clear();
}
function Pg() {
  oi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Yu = !0);
  });
}
function RT() {
  Pg(), Rg();
}
var _f = class {
  constructor(e, t, n, r, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (oi.add(this), Xu || ((Xu = !0), Y.read(Pg), Y.resolveKeyframes(Rg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          let o = r?.get(),
            s = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (n && t) {
            let a = n.readValue(t, s);
            a != null && (e[0] = a);
          }
          e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
        } else e[i] = e[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      oi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), oi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
function qm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    m = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l,
    v = n * t,
    S = f + v,
    p = s === void 0 ? S : s(S);
  p !== S && (v = p - f);
  let h = (E) => -v * Math.exp(-E / r),
    g = (E) => p + h(E),
    x = (E) => {
      let I = h(E),
        F = g(E);
      (d.done = Math.abs(I) <= c), (d.value = d.done ? p : F);
    },
    k,
    w,
    T = (E) => {
      m(d.value) &&
        ((k = E),
        (w = us({
          keyframes: [d.value, y(d.value)],
          velocity: gg(g, E, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let I = !1;
        return (
          !w && k === void 0 && ((I = !0), x(E), T(E)),
          k !== void 0 && E >= k ? w.next(E - k) : (!I && x(E), d)
        );
      },
    }
  );
}
var _g = (e) => Array.isArray(e) && typeof e[0] != 'number',
  Qm = {
    linear: et,
    easeIn: bg,
    easeInOut: Sf,
    easeOut: xg,
    circIn: nl,
    circInOut: Sg,
    circOut: Cf,
    backIn: rl,
    backInOut: wg,
    backOut: Tf,
    anticipate: kg,
  },
  Zm = (e) => {
    if (Array.isArray(e)) {
      Vt(
        e.length === 4,
        'Cubic bezier arrays must contain four numerical values.'
      );
      let [t, n, r, i] = e;
      return Gi(t, n, r, i);
    } else if (typeof e == 'string')
      return Vt(Qm[e] !== void 0, `Invalid easing type '${e}'`), Qm[e];
    return e;
  };
function Fg(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = br(0, t, r);
    e.push(Se(n, 1, i));
  }
}
function Ff(e) {
  let t = [0];
  return Fg(t, e.length - 1), t;
}
function PT(e, t) {
  return e.map((n) => n * t);
}
function _T(e, t) {
  return e.map(() => t || Sf).splice(0, e.length - 1);
}
function Ha({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  let i = _g(r) ? r.map(Zm) : Zm(r),
    o = { done: !1, value: t[0] },
    s = PT(n && n.length === t.length ? n : Ff(t), e),
    a = Ki(s, t, { ease: Array.isArray(i) ? i : _T(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var ja = { current: !1 },
  Jm = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' &&
            (Jn.test(e) || e === '0') &&
            !e.startsWith('url('))
        );
function FT(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function IT(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === 'display' || t === 'visibility') return !0;
  let o = e[e.length - 1],
    s = Jm(i, t),
    a = Jm(o, t);
  return (
    Xi(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : FT(e) || (n === 'spring' && r)
  );
}
var LT = (e) => e !== null;
function il(e, { repeat: t, repeatType: n = 'loop' }, r) {
  let i = e.filter(LT),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var Ig = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = 'keyframes',
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = 'loop',
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && RT(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      this.hasAttemptedResolve = !0;
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !IT(e, n, r, i))
        if (ja.current || !o) {
          a?.(il(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Gu = 2e4;
function Lg(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Gu; ) (t += n), (r = e.next(t));
  return t >= Gu ? 1 / 0 : t;
}
var Aa;
function MT() {
  Aa = void 0;
}
var yr = {
    now: () => (
      Aa === void 0 &&
        yr.set(
          Me.isProcessing || qa.useManualTiming
            ? Me.timestamp
            : performance.now()
        ),
      Aa
    ),
    set: (e) => {
      (Aa = e), queueMicrotask(MT);
    },
  },
  OT = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => Y.update(t, !0),
      stop: () => mt(t),
      now: () => (Me.isProcessing ? Me.timestamp : yr.now()),
    };
  },
  DT = { decay: qm, inertia: qm, tween: Ha, keyframes: Ha, spring: us },
  AT = (e) => e / 100,
  ol = class extends Ig {
    constructor({ KeyframeResolver: e = _f, ...t }) {
      super(t),
        (this.holdTime = null),
        (this.startTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = 'running'),
        (this.state = 'idle'),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === 'idle')
          )
            return;
          this.teardown();
          let { onStop: s } = this.options;
          s && s();
        });
      let { name: n, motionValue: r, keyframes: i } = this.options,
        o = (s, a) => this.onKeyframesResolved(s, a);
      n && r && r.owner
        ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
        : (this.resolver = new e(i, o, n, r)),
        this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = 'keyframes',
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = DT[t] || Ha,
        a,
        l;
      s !== Ha &&
        typeof e[0] != 'number' &&
        ((a = Fn(AT, Pf(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === 'mirror' &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = Lg(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === 'paused' || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: T } = this.options;
        return { done: !0, value: T[T.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: m,
        repeatDelay: y,
        onUpdate: v,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let S = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        p = this.speed >= 0 ? S < 0 : S > c;
      (this.currentTime = Math.max(S, 0)),
        this.state === 'finished' &&
          this.holdTime === null &&
          (this.currentTime = c);
      let h = this.currentTime,
        g = i;
      if (d) {
        let T = Math.min(this.currentTime, c) / u,
          E = Math.floor(T),
          I = T % 1;
        !I && T >= 1 && (I = 1),
          I === 1 && E--,
          (E = Math.min(E, d + 1)),
          !!(E % 2) &&
            (m === 'reverse'
              ? ((I = 1 - I), y && (I -= y / u))
              : m === 'mirror' && (g = o)),
          (h = Zn(0, 1, I) * u);
      }
      let x = p ? { done: !1, value: a[0] } : g.next(h);
      s && (x.value = s(x.value));
      let { done: k } = x;
      !p &&
        l !== null &&
        (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === 'finished' || (this.state === 'running' && k));
      return (
        w && r !== void 0 && (x.value = il(a, this.options, r)),
        v && v(x.value),
        w && this.finish(),
        x
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Ln(e.calculatedDuration) : 0;
    }
    get time() {
      return Ln(this.currentTime);
    }
    set time(e) {
      (e = In(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Ln(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = 'running';
        return;
      }
      if (this.isStopped) return;
      let { driver: e = OT, onPlay: t } = this.options;
      this.driver || (this.driver = e((r) => this.tick(r))), t && t();
      let n = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : (!this.startTime || this.state === 'finished') &&
          (this.startTime = n),
        this.state === 'finished' && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = 'running'),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = 'paused';
        return;
      }
      (this.state = 'paused'),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== 'running' && this.play(),
        (this.pendingPlayState = this.state = 'finished'),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = 'finished');
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = 'idle'),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function If(e) {
  return new ol(e);
}
var Mg = (e) => /^0[^.\s]+$/u.test(e);
function VT(e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || Mg(e)
    : !0;
}
var Og = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  BT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zT(e) {
  let t = BT.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var $T = 4;
function Dg(e, t, n = 1) {
  Vt(
    n <= $T,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = zT(e);
  if (!r) return;
  let o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return Og(s) ? parseFloat(s) : s;
  }
  return Ef(i) ? Dg(i, t, n + 1) : i;
}
var Ag = (e) => (t) => t.test(e),
  NT = { test: (e) => e === 'auto', parse: (e) => e },
  Vg = [Yi, W, Pn, mr, BC, VC, NT],
  ev = (e) => Vg.find(Ag(e)),
  HT = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function jT(e) {
  let [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  let [r] = n.match(vf) || [];
  if (!r) return e;
  let i = n.replace(r, ''),
    o = HT.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + '(' + o + i + ')';
}
var WT = /\b([a-z-]*)\(.*?\)/gu,
  Ku = {
    ...Jn,
    getAnimatableNone: (e) => {
      let t = e.match(WT);
      return t ? t.map(jT).join(' ') : e;
    },
  },
  tv = { ...Yi, transform: Math.round },
  Bg = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    size: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    rotate: mr,
    rotateX: mr,
    rotateY: mr,
    rotateZ: mr,
    scale: Ma,
    scaleX: Ma,
    scaleY: Ma,
    scaleZ: Ma,
    skew: mr,
    skewX: mr,
    skewY: mr,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: Qo,
    originX: Bm,
    originY: Bm,
    originZ: W,
    zIndex: tv,
    backgroundPositionX: W,
    backgroundPositionY: W,
    fillOpacity: Qo,
    strokeOpacity: Qo,
    numOctaves: tv,
  },
  UT = {
    ...Bg,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: Ku,
    WebkitFilter: Ku,
  },
  Lf = (e) => UT[e];
function zg(e, t) {
  let n = Lf(e);
  return (
    n !== Ku && (n = Jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var XT = new Set(['auto', 'none', '0']);
function YT(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == 'string' && !XT.has(o) && os(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = zg(n, i);
}
var $g = class extends _f {
  constructor(e, t, n, r) {
    super(e, t, n, r, r?.owner, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t.current) return;
    super.readKeyframes();
    for (let a = 0; a < e.length; a++) {
      let l = e[a];
      if (typeof l == 'string' && ((l = l.trim()), Ef(l))) {
        let c = Dg(l, t.current);
        c !== void 0 && (e[a] = c),
          a === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !kT.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      o = ev(r),
      s = ev(i);
    if (o !== s)
      if (Ym(o) && Ym(s))
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          typeof l == 'string' && (e[a] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let r = 0; r < e.length; r++) VT(e[r]) && n.push(r);
    n.length && YT(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e.current) return;
    n === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ji[n](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin);
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let o = r.length - 1,
      s = r[o];
    (r[o] = ji[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([a, l]) => {
          t.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes();
  }
};
function Ng(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Hg = (e) => Array.isArray(e) && typeof e[0] == 'number';
function jg(e) {
  return !!(
    !e ||
    (typeof e == 'string' && e in Mf) ||
    Hg(e) ||
    (Array.isArray(e) && e.every(jg))
  );
}
var Ko = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Mf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Ko([0, 0.65, 0.55, 1]),
    circOut: Ko([0.55, 0, 1, 0.45]),
    backIn: Ko([0.31, 0.01, 0.66, -0.59]),
    backOut: Ko([0.33, 1.53, 0.69, 0.99]),
  };
function GT(e) {
  return Wg(e) || Mf.easeOut;
}
function Wg(e) {
  if (e) return Hg(e) ? Ko(e) : Array.isArray(e) ? e.map(GT) : Mf[e];
}
function KT(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = Wg(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: o + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
var qT = Ng(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  QT = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  Wa = 10,
  ZT = 2e4;
function JT(e) {
  return e.type === 'spring' || e.name === 'backgroundColor' || !jg(e.ease);
}
function eE(e, t) {
  let n = new ol({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < ZT; ) (r = n.sample(o)), i.push(r.value), (o += Wa);
  return { times: void 0, keyframes: i, duration: o - Wa, ease: 'linear' };
}
var qu = class extends Ig {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, keyframes: r } = this.options;
    (this.resolver = new $g(r, (i, o) => this.onKeyframesResolved(i, o), t, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (JT(this.options)) {
      let { onComplete: u, onUpdate: f, motionValue: d, ...m } = this.options,
        y = eE(e, m);
      (e = y.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = y.duration),
        (i = y.times),
        (o = y.ease),
        (s = 'keyframes');
    }
    let c = KT(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = yr.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            let { onComplete: u } = this.options;
            a.set(il(e, this.options, t)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return Ln(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return Ln(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = In(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return 'idle';
    let { animation: t } = e;
    return t.playState;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return et;
      let { animation: n } = t;
      (n.timeline = e), (n.onfinish = null);
    }
    return et;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === 'finished' && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return;
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (!(t.playState === 'idle' || t.playState === 'finished')) {
      if (this.time) {
        let { motionValue: a, onUpdate: l, onComplete: c, ...u } = this.options,
          f = new ol({
            ...u,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: s,
            isGenerator: !0,
          }),
          d = In(this.time);
        a.setWithVelocity(f.sample(d - Wa).value, f.sample(d).value, Wa);
      }
      this.cancel();
    }
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      qT() &&
      n &&
      QT.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== 'mirror' &&
      o !== 0 &&
      s !== 'inertia'
    );
  }
};
function Of(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function sl(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function tE([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var Df = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Of(this.subscriptions, e), () => sl(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  nv = 30,
  nE = (e) => !isNaN(parseFloat(e)),
  Zo = { current: void 0 },
  al = class {
    constructor(e, t = {}) {
      (this.version = '11.2.10'),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = yr.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = yr.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = nE(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on('change', e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Df());
      let n = this.events[e].add(t);
      return e === 'change'
        ? () => {
            n(),
              Y.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return Zo.current && Zo.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = yr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > nv
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, nv);
      return xf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Oe(e, t) {
  return new al(e, t);
}
function ll(e, t, n) {
  let r = e.getProps();
  return gf(r, t, n !== void 0 ? n : r.custom, e);
}
var rE = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  iE = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  oE = { type: 'keyframes', duration: 0.8 },
  sE = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  aE = (e, { keyframes: t }) =>
    t.length > 2
      ? oE
      : li.has(e)
      ? e.startsWith('scale')
        ? iE(t[1])
        : rE
      : sE;
function lE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Af(e, t) {
  return e[t] || e.default || e;
}
function cE(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return Y.update(r, !0), () => mt(r);
}
var uE = Ng(() => window.ScrollTimeline !== void 0),
  Vf = class {
    constructor(e) {
      (this.stop = () => this.runAll('stop')),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (uE() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            cE((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll('time');
    }
    set time(e) {
      this.setAll('time', e);
    }
    get speed() {
      return this.getAll('speed');
    }
    set speed(e) {
      this.setAll('speed', e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll('play');
    }
    pause() {
      this.runAll('pause');
    }
    cancel() {
      this.runAll('cancel');
    }
    complete() {
      this.runAll('complete');
    }
  },
  Bf =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = Af(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - In(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      lE(a) || (u = { ...u, ...aE(e, u) }),
        u.duration && (u.duration = In(u.duration)),
        u.repeatDelay && (u.repeatDelay = In(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (ja.current || qa.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = il(u.keyframes, a);
        if (d !== void 0)
          return (
            Y.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Vf([])
          );
      }
      return !o && qu.supports(u) ? new qu(u) : new ol(u);
    };
function Ua(e) {
  return !!(Te(e) && e.add);
}
function fE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Oe(n));
}
function zf(e, t) {
  let n = ll(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = NC(o[s]);
    fE(e, s, a);
  }
}
function Ug(e) {
  return e.getProps()[Ka];
}
function dE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function $f(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t,
    c = e.getValue('willChange');
  r && (s = r);
  let u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (let d in l) {
    let m = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      y = l[d];
    if (y === void 0 || (f && dE(f, d))) continue;
    let v = { delay: n, elapsed: 0, ...Af(s || {}, d) },
      S = !1;
    if (window.HandoffAppearAnimations) {
      let h = Ug(e);
      if (h) {
        let g = window.HandoffAppearAnimations(h, d, m, Y);
        g !== null && ((v.elapsed = g), (S = !0));
      }
    }
    m.start(
      Bf(d, m, y, e.shouldReduceMotion && li.has(d) ? { type: !1 } : v, e, S)
    );
    let p = m.animation;
    p && (Ua(c) && (c.add(d), p.then(() => c.remove(d))), u.push(p));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Y.update(() => {
          a && zf(e, a);
        });
      }),
    u
  );
}
function Qu(e, t, n = {}) {
  var r;
  let i = ll(
      e,
      t,
      n.type === 'exit'
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all($f(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return hE(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === 'beforeChildren' ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function hE(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(pE)
      .forEach((c, u) => {
        c.notify('AnimationStart', t),
          s.push(
            Qu(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(s)
  );
}
function pE(e, t) {
  return e.sortNodePosition(t);
}
function Nf(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => Qu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == 'string') r = Qu(e, t, n);
  else {
    let i = typeof t == 'function' ? ll(e, t, n.custom) : t;
    r = Promise.all($f(e, i, n));
  }
  return r.then(() => {
    Y.postRender(() => {
      e.notify('AnimationComplete', t);
    });
  });
}
function Xg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var mE = [...df].reverse(),
  vE = df.length;
function gE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Nf(e, n, r)));
}
function yE(e) {
  let t = gE(e),
    n = xE(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = ll(
        e,
        u,
        l === 'exit'
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: m, transitionEnd: y, ...v } = d;
        c = { ...c, ...v, ...y };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set(),
      m = {},
      y = 1 / 0;
    for (let S = 0; S < vE; S++) {
      let p = mE[S],
        h = n[p],
        g = c[p] !== void 0 ? c[p] : u[p],
        x = rs(g),
        k = p === l ? h.isActive : null;
      k === !1 && (y = S);
      let w = g === u[p] && g !== c[p] && x;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (h.protectedKeys = { ...m }),
        (!h.isActive && k === null) ||
          (!g && !h.prevProp) ||
          Za(g) ||
          typeof g == 'boolean')
      )
        continue;
      let E =
          bE(h.prevProp, g) ||
          (p === l && h.isActive && !w && x) ||
          (S > y && x),
        I = !1,
        F = Array.isArray(g) ? g : [g],
        B = F.reduce(i(p), {});
      k === !1 && (B = {});
      let { prevResolvedValues: V = {} } = h,
        Z = { ...V, ...B },
        te = (j) => {
          (E = !0),
            d.has(j) && ((I = !0), d.delete(j)),
            (h.needsAnimating[j] = !0);
          let ie = e.getValue(j);
          ie && (ie.liveStyle = !1);
        };
      for (let j in Z) {
        let ie = B[j],
          U = V[j];
        if (m.hasOwnProperty(j)) continue;
        let X = !1;
        Hu(ie) && Hu(U) ? (X = !Xg(ie, U)) : (X = ie !== U),
          X
            ? ie != null
              ? te(j)
              : d.add(j)
            : ie !== void 0 && d.has(j)
            ? te(j)
            : (h.protectedKeys[j] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = B),
        h.isActive && (m = { ...m, ...B }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!w || I) &&
          f.push(...F.map((j) => ({ animation: j, options: { type: p } })));
    }
    if (d.size) {
      let S = {};
      d.forEach((p) => {
        let h = e.getBaseTarget(p),
          g = e.getValue(p);
        g && (g.liveStyle = !0), (S[p] = h ?? null);
      }),
        f.push({ animation: S });
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function bE(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Xg(t, e) : !1;
}
function ei(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function xE() {
  return {
    animate: ei(!0),
    whileInView: ei(),
    whileHover: ei(),
    whileTap: ei(),
    whileDrag: ei(),
    whileFocus: ei(),
    exit: ei(),
  };
}
var Sr = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  SE = class extends Sr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = yE(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      this.unmount(), Za(e) && (this.unmount = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {}
  },
  wE = 0,
  kE = class extends Sr {
    constructor() {
      super(...arguments), (this.id = wE++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive('exit', !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  Hf = { animation: { Feature: SE }, exit: { Feature: kE } },
  Zu = (e, t) => Math.abs(e - t);
function Yg(e, t) {
  let n = Zu(e.x, t.x),
    r = Zu(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Et(e) {
  return e.max - e.min;
}
function Ju(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function rv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = Et(n) / Et(t)),
    (Ju(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    (Ju(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Jo(e, t, n, r) {
  rv(e.x, t.x, n.x, r ? r.originX : void 0),
    rv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function iv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Et(t));
}
function CE(e, t, n) {
  iv(e.x, t.x, n.x), iv(e.y, t.y, n.y);
}
function ov(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Et(t));
}
function es(e, t, n) {
  ov(e.x, t.x, n.x), ov(e.y, t.y, n.y);
}
var sv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  $i = () => ({ x: sv(), y: sv() }),
  av = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: av(), y: av() });
function jf() {
  let e = O(Ui);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = Jr();
  return $(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var TE = (e, t) => e.depth - t.depth,
  Gg = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Of(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      sl(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(TE),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function Kg(e, t) {
  let n = yr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (mt(r), e(o - t));
    };
  return Y.read(r, !0), () => mt(r);
}
var er = new WeakMap(),
  Xa = { current: null },
  Wf = { current: !1 };
function qg() {
  if (((Wf.current = !0), !!Ga))
    if (window.matchMedia) {
      let e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Xa.current = e.matches);
      e.addListener(t), t();
    } else Xa.current = !1;
}
function EE(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      s = n[i];
    if (Te(o)) e.addValue(i, o), Ua(r) && r.add(i);
    else if (Te(s)) e.addValue(i, Oe(o, { owner: e })), Ua(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        let a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        let a = e.getStaticValue(i);
        e.addValue(i, Oe(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var RE = [...Vg, Je, Jn],
  PE = (e) => RE.find(Ag(e)),
  Qg = Object.keys(is),
  _E = Qg.length,
  lv = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  FE = hf.length;
function Zg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Zg(e.parent);
}
var Jg = class {
  scrapeMotionValuesFromProps(e, t, n) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: t,
      presenceContext: n,
      reducedMotionConfig: r,
      blockInitialAnimation: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.resolveKeyframes = (f, d, m, y) =>
      new this.KeyframeResolver(f, d, m, y, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _f),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Y.render(this.render, !1, !0));
    let { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = t.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = t),
      (this.presenceContext = n),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = s),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Ja(t)),
      (this.isVariantNode = ng(t)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
    for (let f in u) {
      let d = u[f];
      a[f] !== void 0 && Te(d) && (d.set(a[f], !1), Ua(c) && c.add(f));
    }
  }
  mount(e) {
    (this.current = e),
      er.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
      Wf.current || qg(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Xa.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    er.delete(this.current),
      this.projection && this.projection.unmount(),
      mt(this.notifyUpdate),
      mt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (let t in this.events) this.events[t].clear();
    for (let t in this.features)
      (e = this.features[t]) === null || e === void 0 || e.unmount();
    this.current = null;
  }
  bindToMotionValue(e, t) {
    let n = li.has(e),
      r = t.on('change', (o) => {
        (this.latestValues[e] = o),
          this.props.onUpdate && Y.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = t.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      r(), i(), t.owner && t.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...t }, n, r, i) {
    let o, s;
    for (let a = 0; a < _E; a++) {
      let l = Qg[a],
        {
          isEnabled: c,
          Feature: u,
          ProjectionNode: f,
          MeasureLayout: d,
        } = is[l];
      f && (o = f),
        c(t) &&
          (!this.features[l] && u && (this.features[l] = new u(this)),
          d && (s = d));
    }
    if (
      (this.type === 'html' || this.type === 'svg') &&
      !this.projection &&
      o
    ) {
      let {
        layoutId: a,
        layout: l,
        drag: c,
        dragConstraints: u,
        layoutScroll: f,
        layoutRoot: d,
      } = t;
      (this.projection = new o(
        this.latestValues,
        t['data-framer-portal-id'] ? void 0 : Zg(this.parent)
      )),
        this.projection.setOptions({
          layoutId: a,
          layout: l,
          alwaysMeasureLayout: !!c || (u && Bi(u)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof l == 'string' ? l : 'both',
          initialPromotionConfig: i,
          layoutScroll: f,
          layoutRoot: d,
        });
    }
    return s;
  }
  updateFeatures() {
    for (let e in this.features) {
      let t = this.features[e];
      t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Le();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, t) {
    this.latestValues[e] = t;
  }
  update(e, t) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = t);
    for (let n = 0; n < lv.length; n++) {
      let r = lv[n];
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](),
        delete this.propEventSubscriptions[r]);
      let i = 'on' + r,
        o = e[i];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    (this.prevMotionValues = EE(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      let n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    let t = {};
    for (let n = 0; n < FE; n++) {
      let r = hf[n],
        i = this.props[r];
      (rs(i) || i === !1) && (t[r] = i);
    }
    return t;
  }
  addVariantChild(e) {
    let t = this.getClosestVariantNode();
    if (t)
      return (
        t.variantChildren && t.variantChildren.add(e),
        () => t.variantChildren.delete(e)
      );
  }
  addValue(e, t) {
    let n = this.values.get(e);
    t !== n &&
      (n && this.removeValue(e),
      this.bindToMotionValue(e, t),
      this.values.set(e, t),
      (this.latestValues[e] = t.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    let t = this.valueSubscriptions.get(e);
    t && (t(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, t) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let n = this.values.get(e);
    return (
      n === void 0 &&
        t !== void 0 &&
        ((n = Oe(t === null ? void 0 : t, { owner: this })),
        this.addValue(e, n)),
      n
    );
  }
  readValue(e, t) {
    var n;
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, e, this.options);
    return (
      r != null &&
        (typeof r == 'string' && (Og(r) || Mg(r))
          ? (r = parseFloat(r))
          : !PE(r) && Jn.test(t) && (r = zg(e, t)),
        this.setBaseTarget(e, Te(r) ? r.get() : r)),
      Te(r) ? r.get() : r
    );
  }
  setBaseTarget(e, t) {
    this.baseTarget[e] = t;
  }
  getBaseTarget(e) {
    var t;
    let { initial: n } = this.props,
      r;
    if (typeof n == 'string' || typeof n == 'object') {
      let o = gf(
        this.props,
        n,
        (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom
      );
      o && (r = o[e]);
    }
    if (n && r !== void 0) return r;
    let i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !Te(i)
      ? i
      : this.initialValues[e] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, t) {
    return this.events[e] || (this.events[e] = new Df()), this.events[e].add(t);
  }
  notify(e, ...t) {
    this.events[e] && this.events[e].notify(...t);
  }
};
function ey(e) {
  function t(r, i = {}) {
    return rg(e(r, i));
  }
  if (typeof Proxy > 'u') return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var IE = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function Uf(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(IE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ty(e, { layout: t, layoutId: n }) {
  return (
    li.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!$a[e] || e === 'opacity'))
  );
}
var LE = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e);
function Xf(e, t, n, r) {
  let { style: i, vars: o, transform: s, transformOrigin: a } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (Tg(f)) {
      o[f] = d;
      continue;
    }
    let m = Bg[f],
      y = LE(d, m);
    if (li.has(f)) {
      if (((l = !0), (s[f] = y), !u)) continue;
      d !== (m.default || 0) && (u = !1);
    } else f.startsWith('origin') ? ((c = !0), (a[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = ig(e.transform, n, u, r))
        : i.transform && (i.transform = 'none')),
    c)
  ) {
    let { originX: f = '50%', originY: d = '50%', originZ: m = 0 } = a;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
var Yf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ny(e, t, n) {
  for (let r in t) !Te(t[r]) && !ty(r, n) && (e[r] = t[r]);
}
function ME({ transformTemplate: e }, t, n) {
  return pe(() => {
    let r = Yf();
    return (
      Xf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function OE(e, t, n) {
  let r = e.style || {},
    i = {};
  return ny(i, r, e), Object.assign(i, ME(e, t, n)), i;
}
function DE(e, t, n) {
  let r = {},
    i = OE(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function cv(e, t, n) {
  return typeof e == 'string' ? e : W.transform(t + n * e);
}
function AE(e, t, n) {
  let r = cv(t, e.x, e.width),
    i = cv(n, e.y, e.height);
  return `${r} ${i}`;
}
var VE = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  BE = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function zE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? VE : BE;
  e[o.offset] = W.transform(-r);
  let s = W.transform(t),
    a = W.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Gf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Xf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = AE(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && zE(m, s, a, l, !1);
}
var ry = () => ({ ...Yf(), attrs: {} }),
  Kf = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function $E(e, t, n, r) {
  let i = pe(() => {
    let o = ry();
    return (
      Gf(o, t, { enableHardwareAcceleration: !1 }, Kf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    ny(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function NE(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (Uf(n) ? $E : DE)(r, o, s, n),
      c = ag(r, typeof n == 'string', e),
      u = n !== Wo ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = pe(() => (Te(f) ? f.get() : f), [f]);
    return Pu(n, { ...u, children: d });
  };
}
function iy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var oy = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function sy(e, t, n, r) {
  iy(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(oy.has(i) ? i : uf(i), t.attrs[i]);
}
function qf(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (Te(i[s]) ||
      (t.style && Te(t.style[s])) ||
      ty(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return o;
}
function ay(e, t, n) {
  let r = qf(e, t, n);
  for (let i in e)
    if (Te(e[i]) || Te(t[i])) {
      let o =
        as.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var HE = {
    useVisualState: el({
      scrapeMotionValuesFromProps: ay,
      createRenderState: ry,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Y.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Y.render(() => {
            Gf(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Kf(t.tagName),
              e.transformTemplate
            ),
              sy(t, n);
          });
      },
    }),
  },
  jE = {
    useVisualState: el({
      scrapeMotionValuesFromProps: qf,
      createRenderState: Yf,
    }),
  };
function ly(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Uf(e) ? HE : jE),
    preloadedFeatures: n,
    useRender: NE(t),
    createVisualElement: r,
    Component: e,
  };
}
function uv(e, t) {
  let n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (o, s) => {
      if (o.pointerType === 'touch' || yf()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive('whileHover', t);
      let l = a[r];
      l && Y.postRender(() => l(o, s));
    };
  return _n(e.current, n, i, { passive: !e.getProps()[r] });
}
var WE = class extends Sr {
    mount() {
      this.unmount = Fn(uv(this.node, !0), uv(this.node, !1));
    }
    unmount() {}
  },
  UE = class extends Sr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(':focus-visible');
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive('whileFocus', !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive('whileFocus', !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Fn(
        Qn(this.node.current, 'focus', () => this.onFocus()),
        Qn(this.node.current, 'blur', () => this.onBlur())
      );
    }
    unmount() {}
  },
  cy = (e, t) => (t ? (e === t ? !0 : cy(e, t.parentElement)) : !1);
function Mu(e, t) {
  if (!t) return;
  let n = new PointerEvent('pointer' + e);
  t(n, tl(n));
}
var XE = class extends Sr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = et),
        (this.removeEndListeners = et),
        (this.removeAccessibleListeners = et),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = _n(
              window,
              'pointerup',
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !cy(this.node.current, s.target) ? c : l;
                f && Y.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = _n(window, 'pointercancel', (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = Fn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== 'Enter' || this.isPressing) return;
              let o = (s) => {
                s.key !== 'Enter' ||
                  !this.checkPressEnd() ||
                  Mu('up', (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && Y.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = Qn(this.node.current, 'keyup', o)),
                Mu('down', (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = Qn(this.node.current, 'keydown', e),
            n = () => {
              this.isPressing && Mu('cancel', (i, o) => this.cancelPress(i, o));
            },
            r = Qn(this.node.current, 'blur', n);
          this.removeAccessibleListeners = Fn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !0),
        n && Y.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive('whileTap', !1),
        !yf()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && Y.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = _n(
          e.globalTapTarget ? window : this.node.current,
          'pointerdown',
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = Qn(this.node.current, 'focus', this.startAccessiblePress);
      this.removeStartListeners = Fn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  ef = new WeakMap(),
  Ou = new WeakMap(),
  YE = (e) => {
    let t = ef.get(e.target);
    t && t(e);
  },
  GE = (e) => {
    e.forEach(YE);
  };
function KE({ root: e, ...t }) {
  let n = e || document;
  Ou.has(n) || Ou.set(n, {});
  let r = Ou.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(GE, { root: e, ...t })), r[i];
}
function qE(e, t, n) {
  let r = KE(t);
  return (
    ef.set(e, n),
    r.observe(e),
    () => {
      ef.delete(e), r.unobserve(e);
    }
  );
}
var QE = { some: 0, all: 1 },
  ZE = class extends Sr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = 'some', once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == 'number' ? r : QE[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive('whileInView', l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return qE(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > 'u') return;
      let { props: e, prevProps: t } = this.node;
      ['amount', 'margin', 'root'].some(JE(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function JE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var uy = {
    inView: { Feature: ZE },
    tap: { Feature: XE },
    focus: { Feature: UE },
    hover: { Feature: WE },
  },
  fy = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = Au(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = Yg(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: m } = u,
            { timestamp: y } = Me;
          this.history.push({ ...m, timestamp: y });
          let { onStart: v, onMove: S } = this.handlers;
          f ||
            (v && v(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            S && S(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Du(f, this.transformPagePoint)),
            Y.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: m, resumeAnimation: y } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let v = Au(
            u.type === 'pointercancel'
              ? this.lastMoveEventInfo
              : Du(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, v), m && m(u, v);
        }),
        !lg(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || window);
      let o = tl(e),
        s = Du(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Me;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, Au(s, this.history)),
        (this.removeListeners = Fn(
          _n(this.contextWindow, 'pointermove', this.handlePointerMove),
          _n(this.contextWindow, 'pointerup', this.handlePointerUp),
          _n(this.contextWindow, 'pointercancel', this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), mt(this.updatePoint);
    }
  };
function Du(e, t) {
  return t ? { point: t(e.point) } : e;
}
function fv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Au({ point: e }, t) {
  return {
    point: e,
    delta: fv(e, dy(t)),
    offset: fv(e, eR(t)),
    velocity: tR(t, 0.1),
  };
}
function eR(e) {
  return e[0];
}
function dy(e) {
  return e[e.length - 1];
}
function tR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = dy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > In(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Ln(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function nR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function dv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function rR(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: dv(e.x, n, i), y: dv(e.y, t, r) };
}
function hv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function iR(e, t) {
  return { x: hv(e.x, t.x), y: hv(e.y, t.y) };
}
function oR(e, t) {
  let n = 0.5,
    r = Et(e),
    i = Et(t);
  return (
    i > r
      ? (n = br(t.min, t.max - r, e.min))
      : r > i && (n = br(e.min, e.max - i, t.min)),
    Zn(0, 1, n)
  );
}
function sR(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var tf = 0.35;
function aR(e = tf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = tf),
    { x: pv(e, 'left', 'right'), y: pv(e, 'top', 'bottom') }
  );
}
function pv(e, t, n) {
  return { min: mv(e, t), max: mv(e, n) };
}
function mv(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
function tn(e) {
  return [e('x'), e('y')];
}
function hy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function lR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cR(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Vu(e) {
  return e === void 0 || e === 1;
}
function nf({ scale: e, scaleX: t, scaleY: n }) {
  return !Vu(e) || !Vu(t) || !Vu(n);
}
function ti(e) {
  return (
    nf(e) ||
    py(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function py(e) {
  return vv(e.x) || vv(e.y);
}
function vv(e) {
  return e && e !== '0%';
}
function Ya(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function gv(e, t, n, r, i) {
  return i !== void 0 && (e = Ya(e, i, r)), Ya(e, n, r) + t;
}
function rf(e, t = 0, n = 1, r, i) {
  (e.min = gv(e.min, t, n, r, i)), (e.max = gv(e.max, t, n, r, i));
}
function my(e, { x: t, y: n }) {
  rf(e.x, t.translate, t.scale, t.originPoint),
    rf(e.y, n.translate, n.scale, n.originPoint);
}
function uR(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Ni(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), my(e, s)),
      r && ti(o.latestValues) && Ni(e, o.latestValues));
  }
  (t.x = yv(t.x)), (t.y = yv(t.y));
}
function yv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function gr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function bv(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    s = Se(e.min, e.max, o);
  rf(e, t[n], t[r], s, t.scale);
}
var fR = ['x', 'scaleX', 'originX'],
  dR = ['y', 'scaleY', 'originY'];
function Ni(e, t) {
  bv(e.x, t, fR), bv(e.y, t, dR);
}
function vy(e, t) {
  return hy(cR(e.getBoundingClientRect(), t));
}
function hR(e, t, n) {
  let r = vy(e, n),
    { scroll: i } = t;
  return i && (gr(r.x, i.offset.x), gr(r.y, i.offset.y)), r;
}
var gy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  pR = new WeakMap(),
  mR = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Le()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(tl(c, 'page').point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = fg(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            tn((v) => {
              let S = this.getAxisMotionValue(v).get() || 0;
              if (Pn.test(S)) {
                let { projection: p } = this.visualElement;
                if (p && p.layout) {
                  let h = p.layout.layoutBox[v];
                  h && (S = Et(h) * (parseFloat(S) / 100));
                }
              }
              this.originPoint[v] = S;
            }),
            m && Y.postRender(() => m(c, u));
          let { animationState: y } = this.visualElement;
          y && y.setActive('whileDrag', !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: m,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: v } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = vR(v)),
              this.currentDirection !== null && m && m(this.currentDirection);
            return;
          }
          this.updateAxis('x', u.point, v),
            this.updateAxis('y', u.point, v),
            this.visualElement.render(),
            y && y(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          tn((c) => {
            var u;
            return (
              this.getAnimationState(c) === 'paused' &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new fy(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: gy(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Y.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive('whileDrag', !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Oa(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = nR(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Bi(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = rR(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = aR(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          tn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = sR(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Bi(e)) return !1;
      let n = e.current;
      Vt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = hR(n, r.root, this.visualElement.getTransformPagePoint()),
        o = iR(r.layout.layoutBox, i);
      if (t) {
        let s = t(lR(o));
        (this.hasMutatedConstraints = !!s), s && (o = hy(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = tn((c) => {
          if (!Oa(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            m = {
              type: 'inertia',
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, m);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Bf(e, n, 0, t, this.visualElement));
    }
    stopAnimation() {
      tn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      tn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      tn((t) => {
        let { drag: n } = this.getProps();
        if (!Oa(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - Se(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Bi(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      tn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = oR({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        tn((o) => {
          if (!Oa(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(Se(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      pR.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = _n(e, 'pointerdown', (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Bi(a) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener('measure', n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        n();
      let o = Qn(window, 'resize', () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          'didUpdate',
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (tn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = tf,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Oa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
var gR = class extends Sr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = et),
        (this.removeListeners = et),
        (this.controls = new mR(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || et);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  xv = (e) => (t, n) => {
    e && Y.postRender(() => e(t, n));
  },
  yR = class extends Sr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = et);
    }
    onPointerDown(e) {
      this.session = new fy(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: gy(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: xv(e),
        onStart: xv(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && Y.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = _n(
        this.node.current,
        'pointerdown',
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Va = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Xo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (W.test(e)) e = parseFloat(e);
        else return e;
      let n = Sv(e, t.target.x),
        r = Sv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  bR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = Jn.parse(e);
      if (i.length > 5) return r;
      let o = Jn.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = Se(a, l, 0.5);
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= c),
        typeof i[3 + s] == 'number' && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  xR = class extends ye {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      mf(SR),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener('animationComplete', () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Va.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                Y.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        ff.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function yy(e) {
  let [t, n] = jf(),
    r = O(ns);
  return C(xR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: O(Qa),
    isPresent: t,
    safeToRemove: n,
  });
}
var SR = {
    borderRadius: {
      ...Xo,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Xo,
    borderTopRightRadius: Xo,
    borderBottomLeftRadius: Xo,
    borderBottomRightRadius: Xo,
    boxShadow: bR,
  },
  by = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  wR = by.length,
  wv = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  kv = (e) => typeof e == 'number' || W.test(e);
function kR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, CR(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, TR(r))))
    : o &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < wR; s++) {
    let a = `border${by[s]}Radius`,
      l = Cv(t, a),
      c = Cv(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || kv(l) === kv(c)
        ? ((e[a] = Math.max(Se(wv(l), wv(c), r), 0)),
          (Pn.test(c) || Pn.test(l)) && (e[a] += '%'))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function Cv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var CR = xy(0, 0.5, Cf),
  TR = xy(0.5, 0.95, et);
function xy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(br(e, t, r)));
}
function Tv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function en(e, t) {
  Tv(e.x, t.x), Tv(e.y, t.y);
}
function Ev(e, t, n, r, i) {
  return (
    (e -= t), (e = Ya(e, 1 / n, r)), i !== void 0 && (e = Ya(e, 1 / i, r)), e
  );
}
function ER(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Pn.test(t) &&
      ((t = parseFloat(t)), (t = Se(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = Se(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Ev(e.min, t, n, a, i)),
    (e.max = Ev(e.max, t, n, a, i));
}
function Rv(e, t, [n, r, i], o, s) {
  ER(e, t[n], t[r], t[i], t.scale, o, s);
}
var RR = ['x', 'scaleX', 'originX'],
  PR = ['y', 'scaleY', 'originY'];
function Pv(e, t, n, r) {
  Rv(e.x, t, RR, n ? n.x : void 0, r ? r.x : void 0),
    Rv(e.y, t, PR, n ? n.y : void 0, r ? r.y : void 0);
}
function _v(e) {
  return e.translate === 0 && e.scale === 1;
}
function Sy(e) {
  return _v(e.x) && _v(e.y);
}
function _R(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function wy(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Fv(e) {
  return Et(e.x) / Et(e.y);
}
var FR = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Of(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (sl(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Iv(e, t, n) {
  let r = '',
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: m,
      skewY: y,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      m && (r += `skewX(${m}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || 'none';
}
function IR(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function ky(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function Qf(e, t, n) {
  let r = Te(e) ? e : Oe(e);
  return r.start(Bf('', r, t, n)), r.animation;
}
var Bu = ['', 'X', 'Y', 'Z'],
  LR = { visibility: 'hidden' },
  Lv = 1e3,
  MR = 0,
  ni = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function zu(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Cy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  let { visualElement: t } = e.options;
  return t
    ? Ug(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? Cy(e.parent)
      : !1
    : !1;
}
function Ty({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = MR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (ni.totalNodes =
              ni.resolvedTargetDeltas =
              ni.recalculatedProjection =
                0),
            this.nodes.forEach(AR),
            this.nodes.forEach(NR),
            this.nodes.forEach(HR),
            this.nodes.forEach(VR),
            IR(ni);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gg());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Df()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = ky(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Kg(d, 250)),
            Va.hasAnimatedSinceResize &&
              ((Va.hasAnimatedSinceResize = !1), this.nodes.forEach(Ov));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let v = this.options.transition || u.getDefaultTransition() || YR,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
                  u.getProps(),
                h = !this.targetLayout || !wy(this.targetLayout, y) || m,
                g = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                let x = { ...Af(v, 'layout'), onPlay: S, onComplete: p };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || Ov(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        mt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(jR),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          Cy(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv);
        return;
      }
      this.isUpdating || this.nodes.forEach(zR),
        (this.isUpdating = !1),
        this.nodes.forEach($R),
        this.nodes.forEach(OR),
        this.nodes.forEach(DR),
        this.clearAllSnapshots();
      let a = yr.now();
      (Me.delta = Zn(0, 1e3 / 60, a - Me.timestamp)),
        (Me.timestamp = a),
        (Me.isProcessing = !0),
        Da.update.process(Me),
        Da.preRender.process(Me),
        Da.render.process(Me),
        (Me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ff.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(BR), this.sharedNodes.forEach(WR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Y.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Y.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = 'measure') {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Sy(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, '') : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || ti(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        GR(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return Le();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (gr(a.x, l.offset.x), gr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      let a = Le();
      en(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            en(a, s);
            let { scroll: d } = this.root;
            d && (gr(a.x, -d.offset.x), gr(a.y, -d.offset.y));
          }
          gr(a.x, u.offset.x), gr(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = Le();
      en(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Ni(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ti(u.latestValues) && Ni(l, u.latestValues);
      }
      return ti(this.latestValues) && Ni(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = Le();
      en(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !ti(c.latestValues)) continue;
        nf(c.latestValues) && c.updateSnapshot();
        let u = Le(),
          f = c.measurePageBox();
        en(u, f),
          Pv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ti(this.latestValues) && Pv(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              es(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              en(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                CE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : en(this.target, this.layout.layoutBox),
                my(this.target, this.targetDelta))
              : en(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                es(this.relativeTargetOrigin, this.target, m.target),
                en(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ni.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          nf(this.parent.latestValues) ||
          py(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Me.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      en(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        m = this.treeScale.y;
      uR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Le()));
      let { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = $i()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = $i()),
        (this.projectionDeltaWithTransform = $i()));
      let v = this.projectionTransform;
      Jo(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Iv(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', y)),
        ni.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = $i();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = Le(),
        m = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(XR));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (x) => {
        let k = x / 1e3;
        Dv(f.x, s.x, k),
          Dv(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (es(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            UR(this.relativeTarget, this.relativeTargetOrigin, d, k),
            g && _R(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Le()),
            en(g, this.relativeTarget)),
          v &&
            ((this.animationValues = u), kR(u, c, this.latestValues, k, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (mt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Y.update(() => {
          (Va.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Qf(0, Lv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Lv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Ey(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Le();
          let f = Et(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = Et(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        en(a, l),
          Ni(a, u),
          Jo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new FR()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && zu('z', s, c, this.animationValues);
      for (let u = 0; u < Bu.length; u++)
        zu(`rotate${Bu[u]}`, s, c, this.animationValues),
          zu(`skew${Bu[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return LR;
      let c = { visibility: '' },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ''),
          (c.pointerEvents = st(s?.pointerEvents) || ''),
          (c.transform = u ? u(this.latestValues, '') : 'none'),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = st(s?.pointerEvents) || '')),
          this.hasProjected &&
            !ti(this.latestValues) &&
            ((v.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
          v
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Iv(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: m, y } = this.projectionDelta;
      (c.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let v in $a) {
        if (d[v] === void 0) continue;
        let { correct: S, applyTo: p } = $a[v],
          h = c.transform === 'none' ? d[v] : S(d[v], f);
        if (p) {
          let g = p.length;
          for (let x = 0; x < g; x++) c[p[x]] = h;
        } else c[v] = h;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? st(s?.pointerEvents) || '' : 'none'),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Mv),
        this.root.sharedNodes.clear();
    }
  };
}
function OR(e) {
  e.updateLayout();
}
function DR(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === 'size'
      ? tn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Et(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Ey(o, n.layoutBox, r) &&
        tn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Et(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    let a = $i();
    Jo(a, r, n.layoutBox);
    let l = $i();
    s ? Jo(l, e.applyTransform(i, !0), n.measuredBox) : Jo(l, r, n.layoutBox);
    let c = !Sy(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: m } = f;
        if (d && m) {
          let y = Le();
          es(y, n.layoutBox, d.layoutBox);
          let v = Le();
          es(v, r, m.layoutBox),
            wy(y, v) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function AR(e) {
  ni.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function VR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function BR(e) {
  e.clearSnapshot();
}
function Mv(e) {
  e.clearMeasurements();
}
function zR(e) {
  e.isLayoutDirty = !1;
}
function $R(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Ov(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function NR(e) {
  e.resolveTargetDelta();
}
function HR(e) {
  e.calcProjection();
}
function jR(e) {
  e.resetSkewAndRotation();
}
function WR(e) {
  e.removeLeadSnapshot();
}
function Dv(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Av(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function UR(e, t, n, r) {
  Av(e.x, t.x, n.x, r), Av(e.y, t.y, n.y, r);
}
function XR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var YR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vv = (e) =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Bv = Vv('applewebkit/') && !Vv('chrome/') ? Math.round : et;
function zv(e) {
  (e.min = Bv(e.min)), (e.max = Bv(e.max));
}
function GR(e) {
  zv(e.x), zv(e.y);
}
function Ey(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Ju(Fv(t), Fv(n), 0.2))
  );
}
var KR = Ty({
    attachResizeListener: (e, t) => Qn(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  si = { current: void 0 },
  Ry = Ty({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!si.current) {
        let e = new KR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (si.current = e);
      }
      return si.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
  }),
  Py = {
    pan: { Feature: yR },
    drag: { Feature: gR, ProjectionNode: Ry, MeasureLayout: yy },
  },
  _y = class extends Jg {
    constructor() {
      super(...arguments), (this.KeyframeResolver = $g);
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
  };
function qR(e) {
  return window.getComputedStyle(e);
}
var Fy = class extends _y {
    constructor() {
      super(...arguments), (this.type = 'html');
    }
    readValueFromInstance(e, t) {
      if (li.has(t)) {
        let n = Lf(t);
        return (n && n.default) || 0;
      } else {
        let n = qR(e),
          r = (Tg(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == 'string' ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return vy(e, t);
    }
    build(e, t, n, r) {
      Xf(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return qf(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Te(e) &&
        (this.childSubscription = e.on('change', (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      iy(e, t, n, r);
    }
  },
  Iy = class extends _y {
    constructor() {
      super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (li.has(t)) {
        let n = Lf(t);
        return (n && n.default) || 0;
      }
      return (t = oy.has(t) ? t : uf(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return Le();
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return ay(e, t, n);
    }
    build(e, t, n, r) {
      Gf(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      sy(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Kf(e.tagName)), super.mount(e);
    }
  },
  Ly = (e, t) =>
    Uf(e)
      ? new Iy(t, { enableHardwareAcceleration: !1 })
      : new Fy(t, {
          allowProjection: e !== Wo,
          enableHardwareAcceleration: !0,
        }),
  My = { layout: { ProjectionNode: Ry, MeasureLayout: yy } },
  QR = { ...Hf, ...uy, ...Py, ...My },
  Bt = ey((e, t) => ly(e, t, QR, Ly));
var ZR = ey(ly);
function Oy() {
  let e = D(!1);
  return (
    xr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function cl() {
  let e = Oy(),
    [t, n] = pt(0),
    r = ge(() => {
      e.current && n(t + 1);
    }, [t]);
  return [ge(() => Y.postRender(r), [r]), t];
}
function Dy(e) {
  return $(() => () => e(), []);
}
var JR = class extends ye {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function eP({ children: e, isPresent: t }) {
  let n = Jr(),
    r = D(null),
    i = D({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = O(Mn);
  return (
    ot(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement('style');
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C(JR, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: mn(e, { ref: r }),
    })
  );
}
var $u = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = tr(tP),
    l = Jr(),
    c = pe(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    pe(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    $(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === 'popLayout' && (e = C(eP, { isPresent: n, children: e })),
    C(Ui.Provider, { value: c, children: e })
  );
};
function tP() {
  return new Map();
}
var ri = (e) => e.key || '';
function nP(e, t) {
  e.forEach((n) => {
    let r = ri(n);
    t.set(r, n);
  });
}
function rP(e) {
  let t = [];
  return (
    En.forEach(e, (n) => {
      Jt(n) && t.push(n);
    }),
    t
  );
}
var Zf = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = 'sync',
}) => {
  Vt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = O(ns).forceRender || cl()[0],
    l = Oy(),
    c = rP(e),
    u = c,
    f = D(new Map()).current,
    d = D(u),
    m = D(new Map()).current,
    y = D(!0);
  if (
    (xr(() => {
      (y.current = !1), nP(c, m), (d.current = u);
    }),
    Dy(() => {
      (y.current = !0), m.clear(), f.clear();
    }),
    y.current)
  )
    return C(Ie, {
      children: u.map((h) =>
        C(
          $u,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: h,
          },
          ri(h)
        )
      ),
    });
  u = [...u];
  let v = d.current.map(ri),
    S = c.map(ri),
    p = v.length;
  for (let h = 0; h < p; h++) {
    let g = v[h];
    S.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
  }
  return (
    s === 'wait' && f.size && (u = []),
    f.forEach((h, g) => {
      if (S.indexOf(g) !== -1) return;
      let x = m.get(g);
      if (!x) return;
      let k = v.indexOf(g),
        w = h;
      w ||
        ((w = C(
          $u,
          {
            isPresent: !1,
            onExitComplete: () => {
              f.delete(g);
              let E = Array.from(m.keys()).filter((I) => !S.includes(I));
              if (
                (E.forEach((I) => m.delete(I)),
                (d.current = c.filter((I) => {
                  let F = ri(I);
                  return F === g || E.includes(F);
                })),
                !f.size)
              ) {
                if (l.current === !1) return;
                a(), r && r();
              }
            },
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: x,
          },
          ri(x)
        )),
        f.set(g, w)),
        u.splice(k, 0, w);
    }),
    (u = u.map((h) => {
      let g = h.key;
      return f.has(g)
        ? h
        : C(
            $u,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h },
            ri(h)
          );
    })),
    C(Ie, { children: f.size ? u : u.map((h) => mn(h)) })
  );
};
function Ay({ children: e, isValidProp: t, ...n }) {
  t && sg(t), (n = { ...O(Mn), ...n }), (n.isStatic = tr(() => n.isStatic));
  let r = pe(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return C(Mn.Provider, { value: r, children: e });
}
var Vy = xe(null),
  iP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function $v() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(iP);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener('willUpdate', n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var By = (e) => e === !0,
  oP = (e) => By(e === !0) || e === 'id',
  zy = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = O(ns),
      i = O(Vy),
      [o, s] = cl(),
      a = D(null),
      l = r.id || i;
    a.current === null &&
      (oP(n) && l && (t = t ? l + '-' + t : l),
      (a.current = { id: t, group: (By(n) && r.group) || $v() }));
    let c = pe(() => ({ ...a.current, forceRender: o }), [s]);
    return C(ns.Provider, { value: c, children: e });
  };
function Dn(e) {
  let t = tr(() => Oe(e)),
    { isStatic: n } = O(Mn);
  if (n) {
    let [, r] = pt(e);
    $(() => t.on('change', r), []);
  }
  return t;
}
var sP = (e) => e && typeof e == 'object' && e.mix,
  aP = (e) => (sP(e) ? e.mix : void 0);
function fs(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = Ki(i, o, { mixer: aP(o[0]), ...s });
  return t ? a(r) : a;
}
function $y(e, t) {
  let n = Dn(t()),
    r = () => n.set(t());
  return (
    r(),
    xr(() => {
      let i = () => Y.preRender(r, !1, !0),
        o = e.map((s) => s.on('change', i));
      return () => {
        o.forEach((s) => s()), mt(r);
      };
    }),
    n
  );
}
function lP(e) {
  (Zo.current = []), e();
  let t = $y(Zo.current, e);
  return (Zo.current = void 0), t;
}
function vt(e, t, n, r) {
  if (typeof e == 'function') return lP(e);
  let i = typeof t == 'function' ? t : fs(t, n, r);
  return Array.isArray(e) ? Nv(e, i) : Nv([e], ([o]) => i(o));
}
function Nv(e, t) {
  let n = tr(() => []);
  return $y(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var Ny = xe(null);
function cP(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = Se(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? tE(e, i, i + o)
    : e;
}
function uP(
  { children: e, as: t = 'ul', axis: n = 'y', onReorder: r, values: i, ...o },
  s
) {
  let a = tr(() => Bt(t)),
    l = [],
    c = D(!1);
  Vt(!!i, 'Reorder.Group must be provided a values prop');
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let m = l.findIndex((y) => f === y.value);
      m !== -1 ? (l[m].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(dP);
    },
    updateOrder: (f, d, m) => {
      if (c.current) return;
      let y = cP(l, f, d, m);
      l !== y &&
        ((c.current = !0), r(y.map(fP).filter((v) => i.indexOf(v) !== -1)));
    },
  };
  return (
    $(() => {
      c.current = !1;
    }),
    C(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: C(Ny.Provider, { value: u, children: e }),
    })
  );
}
var $5 = $e(uP);
function fP(e) {
  return e.value;
}
function dP(e, t) {
  return e.layout.min - t.layout.min;
}
function Hv(e, t = 0) {
  return Te(e) ? e : Dn(t);
}
function hP(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = 'li',
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = tr(() => Bt(r)),
    c = O(Ny),
    u = { x: Hv(t.x), y: Hv(t.y) },
    f = vt([u.x, u.y], ([v, S]) => (v || S ? 1 : 'unset'));
  Vt(!!c, 'Reorder.Item must be a child of Reorder.Group');
  let { axis: d, registerItem: m, updateOrder: y } = c;
  return C(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (v, S) => {
      let { velocity: p } = S;
      p[d] && y(n, u[d].get(), p[d]), i && i(v, S);
    },
    onLayoutMeasure: (v) => m(n, v),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var j5 = $e(hP);
var Hy = { renderer: Ly, ...Hf, ...uy },
  pP = { ...Hy, ...Py, ...My };
function Jf(e, t = {}) {
  let { isStatic: n } = O(Mn),
    r = D(null),
    i = Dn(Te(e) ? e.get() : e),
    o = D(i.get()),
    s = D(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(Me.delta),
        l(),
        (r.current = If({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: 'spring',
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    ot(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), Y.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    xr(() => {
      if (Te(e)) return e.on('change', (c) => i.set(parseFloat(c)));
    }, [i]),
    i
  );
}
function ul(e, t, n) {
  var r;
  if (typeof e == 'string') {
    let i = document;
    t &&
      (Vt(!!t.current, 'Scope provided, but no element detected.'),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Ba = new WeakMap(),
  vr;
function mP(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && 'getBBox' in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function vP({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ba.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return mP(e, n);
        },
      });
    });
}
function gP(e) {
  e.forEach(vP);
}
function yP() {
  typeof ResizeObserver > 'u' || (vr = new ResizeObserver(gP));
}
function bP(e, t) {
  vr || yP();
  let n = ul(e);
  return (
    n.forEach((r) => {
      let i = Ba.get(r);
      i || ((i = new Set()), Ba.set(r, i)), i.add(t), vr?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Ba.get(r);
        i?.delete(t), i?.size || vr?.unobserve(r);
      });
    }
  );
}
var za = new Set(),
  ts;
function xP() {
  (ts = () => {
    let e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    za.forEach((n) => n(t));
  }),
    window.addEventListener('resize', ts);
}
function SP(e) {
  return (
    za.add(e),
    ts || xP(),
    () => {
      za.delete(e), !za.size && ts && (ts = void 0);
    }
  );
}
function wP(e, t) {
  return typeof e == 'function' ? SP(e) : bP(e, t);
}
var kP = 50,
  jv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  CP = () => ({ time: 0, x: jv(), y: jv() }),
  TP = {
    x: { length: 'Width', position: 'Left' },
    y: { length: 'Height', position: 'Top' },
  };
function Wv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = TP[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = br(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > kP ? 0 : xf(i.current - a, c);
}
function EP(e, t, n) {
  Wv(e, 'x', t, n), Wv(e, 'y', t, n), (t.time = n);
}
function RP(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === 'svg') {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === 'svg' && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var PP = {
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
  of = { start: 0, center: 0.5, end: 1 };
function Uv(e, t, n = 0) {
  let r = 0;
  if ((e in of && (e = of[e]), typeof e == 'string')) {
    let i = parseFloat(e);
    e.endsWith('px')
      ? (r = i)
      : e.endsWith('%')
      ? (e = i / 100)
      : e.endsWith('vw')
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith('vh')
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == 'number' && (r = t * e), n + r;
}
var _P = [0, 0];
function FP(e, t, n, r) {
  let i = Array.isArray(e) ? e : _P,
    o = 0,
    s = 0;
  return (
    typeof e == 'number'
      ? (i = [e, e])
      : typeof e == 'string' &&
        ((e = e.trim()),
        e.includes(' ') ? (i = e.split(' ')) : (i = [e, of[e] ? e : '0'])),
    (o = Uv(i[0], n, r)),
    (s = Uv(i[1], t)),
    o - s
  );
}
var IP = { x: 0, y: 0 };
function LP(e) {
  return 'getBBox' in e && e.tagName !== 'svg'
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function MP(e, t, n) {
  let { offset: r = PP.All } = n,
    { target: i = e, axis: o = 'y' } = n,
    s = o === 'y' ? 'height' : 'width',
    a = i !== e ? RP(i, e) : IP,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : LP(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let m = FP(r[d], c[s], l[s], a[o]);
    !u && m !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = m);
  }
  u &&
    ((t[o].interpolate = Ki(t[o].offset, Ff(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function OP(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function DP(e, t, n, r = {}) {
  return {
    measure: () => OP(e, r.target, n),
    update: (i) => {
      EP(e, n, i), (r.offset || r.target) && MP(e, n, r);
    },
    notify: () => t(n),
  };
}
var Yo = new WeakMap(),
  Xv = new WeakMap(),
  Nu = new WeakMap(),
  Yv = (e) => (e === document.documentElement ? window : e);
function qi(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Nu.get(t);
  r || ((r = new Set()), Nu.set(t, r));
  let i = CP(),
    o = DP(t, e, i, n);
  if ((r.add(o), !Yo.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Me.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        Y.read(a, !1, !0), Y.read(l, !1, !0), Y.update(c, !1, !0);
      };
    Yo.set(t, u);
    let f = Yv(t);
    window.addEventListener('resize', u, { passive: !0 }),
      t !== document.documentElement && Xv.set(t, wP(t, u)),
      f.addEventListener('scroll', u, { passive: !0 });
  }
  let s = Yo.get(t);
  return (
    Y.read(s, !1, !0),
    () => {
      var a;
      mt(s);
      let l = Nu.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = Yo.get(t);
      Yo.delete(t),
        c &&
          (Yv(t).removeEventListener('scroll', c),
          (a = Xv.get(t)) === null || a === void 0 || a(),
          window.removeEventListener('resize', c));
    }
  );
}
function Gv(e, t) {
  Xi(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var AP = () => ({
  scrollX: Oe(0),
  scrollY: Oe(0),
  scrollXProgress: Oe(0),
  scrollYProgress: Oe(0),
});
function jy({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = tr(AP);
  return (
    (n ? xr : $)(
      () => (
        Gv('target', t),
        Gv('container', e),
        qi(
          ({ x: s, y: a }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function VP(e) {
  let t = D(0),
    { isStatic: n } = O(Mn);
  $(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return Y.update(r, !0), () => mt(r);
  }, [e]);
}
function Wy() {
  !Wf.current && qg();
  let [e] = pt(Xa.current);
  return e;
}
function ci() {
  let e = Wy(),
    { reducedMotion: t } = O(Mn);
  return t === 'never' ? !1 : t === 'always' ? !0 : e;
}
function BP(e) {
  e.values.forEach((t) => t.stop());
}
function sf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && zf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          sf(o, t);
        });
  });
}
function zP(e, t) {
  if (Array.isArray(t)) return sf(e, t);
  if (typeof t == 'string') return sf(e, [t]);
  zf(e, t);
}
function Uy() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Vt(
          e,
          'controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.'
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Nf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Vt(
            e,
            'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
          ),
          t.forEach((i) => {
            zP(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          BP(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var Xy = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function $P(e) {
  return typeof e == 'object' && !Array.isArray(e);
}
function NP(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = ky(e)
      ? new Iy(t, { enableHardwareAcceleration: !1 })
      : new Fy(t, { enableHardwareAcceleration: !0 });
  n.mount(e), er.set(e, n);
}
function HP(e, t = 100) {
  let n = us({ keyframes: [0, t], ...e }),
    r = Math.min(Lg(n), Gu);
  return {
    type: 'keyframes',
    ease: (i) => n.next(r * i).value / t,
    duration: Ln(r),
  };
}
function Kv(e, t, n, r) {
  var i;
  return typeof t == 'number'
    ? t
    : t.startsWith('-') || t.startsWith('+')
    ? Math.max(0, e + parseFloat(t))
    : t === '<'
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function jP(e, t) {
  return _g(e) ? e[Xy(0, e.length, t)] : e;
}
function WP(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (sl(e, i), r--);
  }
}
function UP(e, t, n, r, i, o) {
  WP(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: Se(i, o, r[s]), easing: jP(n, s) });
}
function XP(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var YP = 'easeInOut';
function GP(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let m = e[d];
    if (typeof m == 'string') {
      l.set(m, u);
      continue;
    } else if (!Array.isArray(m)) {
      l.set(m.name, Kv(u, m.at, c, l));
      continue;
    }
    let [y, v, S = {}] = m;
    S.at !== void 0 && (u = Kv(u, S.at, c, l));
    let p = 0,
      h = (g, x, k, w = 0, T = 0) => {
        let E = KP(g),
          { delay: I = 0, times: F = Ff(E), type: B = 'keyframes', ...V } = x,
          { ease: Z = t.ease || 'easeOut', duration: te } = x,
          j = typeof I == 'function' ? I(w, T) : I,
          ie = E.length;
        if (ie <= 2 && B === 'spring') {
          let J = 100;
          if (ie === 2 && ZP(E)) {
            let ne = E[1] - E[0];
            J = Math.abs(ne);
          }
          let he = { ...V };
          te !== void 0 && (he.duration = In(te));
          let ue = HP(he, J);
          (Z = ue.ease), (te = ue.duration);
        }
        te ?? (te = i);
        let U = u + j,
          X = U + te;
        F.length === 1 && F[0] === 0 && (F[1] = 1);
        let N = F.length - E.length;
        N > 0 && Fg(F, N),
          E.length === 1 && E.unshift(null),
          UP(k, E, Z, F, U, X),
          (p = Math.max(j + te, p)),
          (f = Math.max(X, f));
      };
    if (Te(y)) {
      let g = qv(y, s);
      h(v, S, Qv('default', g));
    } else {
      let g = ul(y, r, a),
        x = g.length;
      for (let k = 0; k < x; k++) {
        (v = v), (S = S);
        let w = g[k],
          T = qv(w, s);
        for (let E in v) h(v[E], qP(S, E), Qv(E, T), k, x);
      }
    }
    (c = u), (u += p);
  }
  return (
    s.forEach((d, m) => {
      for (let y in d) {
        let v = d[y];
        v.sort(XP);
        let S = [],
          p = [],
          h = [];
        for (let x = 0; x < v.length; x++) {
          let { at: k, value: w, easing: T } = v[x];
          S.push(w), p.push(br(0, f, k)), h.push(T || 'easeOut');
        }
        p[0] !== 0 && (p.unshift(0), S.unshift(S[0]), h.unshift(YP)),
          p[p.length - 1] !== 1 && (p.push(1), S.push(null)),
          o.has(m) || o.set(m, { keyframes: {}, transition: {} });
        let g = o.get(m);
        (g.keyframes[y] = S),
          (g.transition[y] = { ...t, duration: f, ease: h, times: p, ...n });
      }
    }),
    o
  );
}
function qv(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Qv(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function KP(e) {
  return Array.isArray(e) ? e : [e];
}
function qP(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var QP = (e) => typeof e == 'number',
  ZP = (e) => e.every(QP);
function Yy(e, t, n, r) {
  let i = ul(e, r),
    o = i.length;
  Vt(!!o, 'No valid element provided.');
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    er.has(l) || NP(l);
    let c = er.get(l),
      u = { ...n };
    typeof u.delay == 'function' && (u.delay = u.delay(a, o)),
      s.push(...$f(c, { ...t, transition: u }, {}));
  }
  return new Vf(s);
}
var JP = (e) => Array.isArray(e) && Array.isArray(e[0]);
function e_(e, t, n) {
  let r = [];
  return (
    GP(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      Te(a) ? (l = Qf(a, o.default, s.default)) : (l = Yy(a, o, s)), r.push(l);
    }),
    new Vf(r)
  );
}
var Gy = (e) => {
    function t(n, r, i) {
      let o;
      return (
        JP(n)
          ? (o = e_(n, r, e))
          : $P(r)
          ? (o = Yy(n, r, i, e))
          : (o = Qf(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  Qi = Gy();
function Ky() {
  let e = tr(Uy);
  return xr(e.mount, []), e;
}
var qy = Ky;
var t_ = { some: 0, all: 1 };
function Qy(e, t, { root: n, margin: r, amount: i = 'some' } = {}) {
  let o = ul(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == 'function' ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == 'number' ? i : t_[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function n_(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = pt(!1);
  return (
    $(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Qy(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function ed(e) {
  return e !== null && typeof e == 'object' && pf in e;
}
function Zy(e) {
  if (ed(e)) return e[pf];
}
function td() {
  return r_;
}
function r_(e) {
  si.current &&
    ((si.current.isUpdating = !1), si.current.blockUpdate(), e && e());
}
function Jy() {
  let [e, t] = cl(),
    n = td(),
    r = D();
  return (
    $(() => {
      Y.postRender(() =>
        Y.postRender(() => {
          t === r.current && (ja.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (ja.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function e0() {
  return ge(() => {
    let t = si.current;
    t && t.resetTree();
  }, []);
}
var Zv = () => ({});
var nB = el({ scrapeMotionValuesFromProps: Zv, createRenderState: Zv });
var i_ = Go.reduce((e, t) => ((e[t] = (n) => mt(n)), e), {});
Zt();
var zF = {};
wu(zF, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => RF,
  createPortal: () => PF,
  createRoot: () => _F,
  default: () => g1,
  findDOMNode: () => FF,
  flushSync: () => IF,
  hydrate: () => LF,
  hydrateRoot: () => MF,
  render: () => OF,
  unmountComponentAtNode: () => DF,
  unstable_batchedUpdates: () => AF,
  unstable_renderSubtreeIntoContainer: () => VF,
  version: () => BF,
});
Zt();
var vl = {};
wu(vl, {
  default: () => G,
  unstable_IdlePriority: () => a_,
  unstable_ImmediatePriority: () => l_,
  unstable_LowPriority: () => c_,
  unstable_NormalPriority: () => u_,
  unstable_Profiling: () => f_,
  unstable_UserBlockingPriority: () => d_,
  unstable_cancelCallback: () => h_,
  unstable_continueExecution: () => p_,
  unstable_forceFrameRate: () => m_,
  unstable_getCurrentPriorityLevel: () => v_,
  unstable_getFirstCallbackNode: () => g_,
  unstable_next: () => y_,
  unstable_now: () => s_,
  unstable_pauseExecution: () => b_,
  unstable_requestPaint: () => x_,
  unstable_runWithPriority: () => S_,
  unstable_scheduleCallback: () => w_,
  unstable_shouldYield: () => k_,
  unstable_wrapCallback: () => C_,
});
Zt();
var G = {};
function od(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < fl(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function vn(e) {
  return e.length === 0 ? null : e[0];
}
function hl(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > fl(a, n))
        l < i && 0 > fl(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > fl(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function fl(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == 'object' && typeof performance.now == 'function'
  ? ((t0 = performance),
    (G.unstable_now = function () {
      return t0.now();
    }))
  : ((nd = Date),
    (n0 = nd.now()),
    (G.unstable_now = function () {
      return nd.now() - n0;
    }));
var t0,
  nd,
  n0,
  An = [],
  wr = [],
  o_ = 1,
  rn = null,
  at = 3,
  pl = !1,
  ui = !1,
  hs = !1,
  o0 = typeof setTimeout == 'function' ? setTimeout : null,
  s0 = typeof clearTimeout == 'function' ? clearTimeout : null,
  r0 = typeof setImmediate < 'u' ? setImmediate : null;
typeof navigator < 'u' &&
  navigator.scheduling !== void 0 &&
  navigator.scheduling.isInputPending !== void 0 &&
  navigator.scheduling.isInputPending.bind(navigator.scheduling);
function sd(e) {
  for (var t = vn(wr); t !== null; ) {
    if (t.callback === null) hl(wr);
    else {
      if (!(t.startTime <= e)) break;
      hl(wr), (t.sortIndex = t.expirationTime), od(An, t);
    }
    t = vn(wr);
  }
}
function ad(e) {
  if (((hs = !1), sd(e), !ui))
    if (vn(An) !== null) (ui = !0), cd(ld);
    else {
      var t = vn(wr);
      t !== null && ud(ad, t.startTime - e);
    }
}
function ld(e, t) {
  (ui = !1), hs && ((hs = !1), s0(ps), (ps = -1)), (pl = !0);
  var n = at;
  try {
    for (
      sd(t), rn = vn(An);
      rn !== null && (!(rn.expirationTime > t) || (e && !c0()));

    ) {
      var r = rn.callback;
      if (typeof r == 'function') {
        (rn.callback = null), (at = rn.priorityLevel);
        var i = r(rn.expirationTime <= t);
        (t = G.unstable_now()),
          typeof i == 'function' ? (rn.callback = i) : rn === vn(An) && hl(An),
          sd(t);
      } else hl(An);
      rn = vn(An);
    }
    if (rn !== null) var o = !0;
    else {
      var s = vn(wr);
      s !== null && ud(ad, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (rn = null), (at = n), (pl = !1);
  }
}
var ml = !1,
  dl = null,
  ps = -1,
  a0 = 5,
  l0 = -1;
function c0() {
  return !(G.unstable_now() - l0 < a0);
}
function rd() {
  if (dl !== null) {
    var e = G.unstable_now();
    l0 = e;
    var t = !0;
    try {
      t = dl(!0, e);
    } finally {
      t ? ds() : ((ml = !1), (dl = null));
    }
  } else ml = !1;
}
var ds;
typeof r0 == 'function'
  ? (ds = function () {
      r0(rd);
    })
  : typeof MessageChannel < 'u'
  ? ((id = new MessageChannel()),
    (i0 = id.port2),
    (id.port1.onmessage = rd),
    (ds = function () {
      i0.postMessage(null);
    }))
  : (ds = function () {
      o0(rd, 0);
    });
var id, i0;
function cd(e) {
  (dl = e), ml || ((ml = !0), ds());
}
function ud(e, t) {
  ps = o0(function () {
    e(G.unstable_now());
  }, t);
}
G.unstable_IdlePriority = 5;
G.unstable_ImmediatePriority = 1;
G.unstable_LowPriority = 4;
G.unstable_NormalPriority = 3;
G.unstable_Profiling = null;
G.unstable_UserBlockingPriority = 2;
G.unstable_cancelCallback = function (e) {
  e.callback = null;
};
G.unstable_continueExecution = function () {
  ui || pl || ((ui = !0), cd(ld));
};
G.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
      )
    : (a0 = 0 < e ? Math.floor(1e3 / e) : 5);
};
G.unstable_getCurrentPriorityLevel = function () {
  return at;
};
G.unstable_getFirstCallbackNode = function () {
  return vn(An);
};
G.unstable_next = function (e) {
  switch (at) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = at;
  }
  var n = at;
  at = t;
  try {
    return e();
  } finally {
    at = n;
  }
};
G.unstable_pauseExecution = function () {};
G.unstable_requestPaint = function () {};
G.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = at;
  at = e;
  try {
    return t();
  } finally {
    at = n;
  }
};
G.unstable_scheduleCallback = function (e, t, n) {
  var r = G.unstable_now();
  switch (
    (typeof n == 'object' && n !== null
      ? ((n = n.delay), (n = typeof n == 'number' && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: o_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        od(wr, e),
        vn(An) === null &&
          e === vn(wr) &&
          (hs ? (s0(ps), (ps = -1)) : (hs = !0), ud(ad, n - r)))
      : ((e.sortIndex = i), od(An, e), ui || pl || ((ui = !0), cd(ld))),
    e
  );
};
G.unstable_shouldYield = c0;
G.unstable_wrapCallback = function (e) {
  var t = at;
  return function () {
    var n = at;
    at = t;
    try {
      return e.apply(this, arguments);
    } finally {
      at = n;
    }
  };
};
var s_ = G.unstable_now,
  a_ = G.unstable_IdlePriority,
  l_ = G.unstable_ImmediatePriority,
  c_ = G.unstable_LowPriority,
  u_ = G.unstable_NormalPriority,
  f_ = G.unstable_Profiling,
  d_ = G.unstable_UserBlockingPriority,
  h_ = G.unstable_cancelCallback,
  p_ = G.unstable_continueExecution,
  m_ = G.unstable_forceFrameRate,
  v_ = G.unstable_getCurrentPriorityLevel,
  g_ = G.unstable_getFirstCallbackNode,
  y_ = G.unstable_next,
  b_ = G.unstable_pauseExecution,
  x_ = G.unstable_requestPaint,
  S_ = G.unstable_runWithPriority,
  w_ = G.unstable_scheduleCallback,
  k_ = G.unstable_shouldYield,
  C_ = G.unstable_wrapCallback;
var T_ = 'default' in Tt ? b : Tt,
  E_ = 'default' in vl ? G : vl,
  jt = {},
  vb = T_,
  Ht = E_;
function L(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var gb = new Set(),
  As = {};
function ki(e, t) {
  bo(e, t), bo(e + 'Capture', t);
}
function bo(e, t) {
  for (As[e] = t, e = 0; e < t.length; e++) gb.add(t[e]);
}
var ar = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Md = Object.prototype.hasOwnProperty,
  R_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  u0 = {},
  f0 = {};
function P_(e) {
  return Md.call(f0, e)
    ? !0
    : Md.call(u0, e)
    ? !1
    : R_.test(e)
    ? (f0[e] = !0)
    : ((u0[e] = !0), !1);
}
function __(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function F_(e, t, n, r) {
  if (t === null || typeof t > 'u' || __(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function bt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var rt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    rt[e] = new bt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new bt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  rt[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  rt[e] = new bt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    rt[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  rt[e] = new bt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  rt[e] = new bt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  rt[e] = new bt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  rt[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ch = /[\-:]([a-z])/g;
function Th(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ch, Th);
    rt[t] = new bt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ch, Th);
    rt[t] = new bt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ch, Th);
  rt[t] = new bt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  rt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new bt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  rt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eh(e, t, n, r) {
  var i = rt.hasOwnProperty(t) ? rt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (F_(t, n, i, r) && (n = null),
    r || i === null
      ? P_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && '' : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fr = vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gl = Symbol.for('react.element'),
  eo = Symbol.for('react.portal'),
  to = Symbol.for('react.fragment'),
  Rh = Symbol.for('react.strict_mode'),
  Od = Symbol.for('react.profiler'),
  yb = Symbol.for('react.provider'),
  bb = Symbol.for('react.context'),
  Ph = Symbol.for('react.forward_ref'),
  Dd = Symbol.for('react.suspense'),
  Ad = Symbol.for('react.suspense_list'),
  _h = Symbol.for('react.memo'),
  Cr = Symbol.for('react.lazy');
Symbol.for('react.scope');
Symbol.for('react.debug_trace_mode');
var xb = Symbol.for('react.offscreen');
Symbol.for('react.legacy_hidden');
Symbol.for('react.cache');
Symbol.for('react.tracing_marker');
var d0 = Symbol.iterator;
function ms(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (d0 && e[d0]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var fd,
  _e = Object.assign;
function ks(e) {
  if (fd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fd = (t && t[1]) || '';
    }
  return (
    `
` +
    fd +
    e
  );
}
var dd = !1;
function hd(e, t) {
  if (!e || dd) return '';
  dd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (dd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ks(e) : '';
}
function I_(e) {
  switch (e.tag) {
    case 5:
      return ks(e.type);
    case 16:
      return ks('Lazy');
    case 13:
      return ks('Suspense');
    case 19:
      return ks('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = hd(e.type, !1)), e;
    case 11:
      return (e = hd(e.type.render, !1)), e;
    case 1:
      return (e = hd(e.type, !0)), e;
    default:
      return '';
  }
}
function Vd(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case to:
      return 'Fragment';
    case eo:
      return 'Portal';
    case Od:
      return 'Profiler';
    case Rh:
      return 'StrictMode';
    case Dd:
      return 'Suspense';
    case Ad:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case bb:
        return (e.displayName || 'Context') + '.Consumer';
      case yb:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ph:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case _h:
        return (
          (t = e.displayName || null), t !== null ? t : Vd(e.type) || 'Memo'
        );
      case Cr:
        (t = e._payload), (e = e._init);
        try {
          return Vd(e(t));
        } catch {}
    }
  return null;
}
function L_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Vd(t);
    case 8:
      return t === Rh ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Br(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Sb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function M_(e) {
  var t = Sb(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yl(e) {
  e._valueTracker || (e._valueTracker = M_(e));
}
function wb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Sb(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function Xl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bd(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function h0(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Br(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function kb(e, t) {
  (t = t.checked), t != null && Eh(e, 'checked', t, !1);
}
function zd(e, t) {
  kb(e, t);
  var n = Br(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? $d(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && $d(e, t.type, Br(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function p0(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function $d(e, t, n) {
  (t === 'number' && Xl(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Cs = Array.isArray;
function ho(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Br(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function m0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Cs(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Br(n) };
}
function Cb(e, t) {
  var n = Br(t.value),
    r = Br(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function v0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Tb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Hd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Tb(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var bl,
  Eb = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        bl = bl || document.createElement('div'),
          bl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = bl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  O_ = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Rs).forEach(function (e) {
  O_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rs[t] = Rs[e]);
  });
});
function Rb(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Rs.hasOwnProperty(e) && Rs[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Pb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Rb(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var D_ = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jd(e, t) {
  if (t) {
    if (D_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62));
  }
}
function Wd(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ud = null;
function Fh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xd = null,
  po = null,
  mo = null;
function g0(e) {
  if ((e = ta(e))) {
    if (typeof Xd != 'function') throw Error(L(280));
    var t = e.stateNode;
    t && ((t = xc(t)), Xd(e.stateNode, e.type, t));
  }
}
function _b(e) {
  po ? (mo ? mo.push(e) : (mo = [e])) : (po = e);
}
function Fb() {
  if (po) {
    var e = po,
      t = mo;
    if (((mo = po = null), g0(e), t)) for (e = 0; e < t.length; e++) g0(t[e]);
  }
}
function Ib(e, t) {
  return e(t);
}
function Lb() {}
var pd = !1;
function Mb(e, t, n) {
  if (pd) return e(t, n);
  pd = !0;
  try {
    return Ib(e, t, n);
  } finally {
    (pd = !1), (po !== null || mo !== null) && (Lb(), Fb());
  }
}
function Bs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
  return n;
}
var Yd = !1;
if (ar)
  try {
    (Zi = {}),
      Object.defineProperty(Zi, 'passive', {
        get: function () {
          Yd = !0;
        },
      }),
      window.addEventListener('test', Zi, Zi),
      window.removeEventListener('test', Zi, Zi);
  } catch {
    Yd = !1;
  }
var Zi;
function A_(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ps = !1,
  Yl = null,
  Gl = !1,
  Gd = null,
  V_ = {
    onError: function (e) {
      (Ps = !0), (Yl = e);
    },
  };
function B_(e, t, n, r, i, o, s, a, l) {
  (Ps = !1), (Yl = null), A_.apply(V_, arguments);
}
function z_(e, t, n, r, i, o, s, a, l) {
  if ((B_.apply(this, arguments), Ps)) {
    if (!Ps) throw Error(L(198));
    var c = Yl;
    (Ps = !1), (Yl = null), Gl || ((Gl = !0), (Gd = c));
  }
}
function Ci(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ob(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function y0(e) {
  if (Ci(e) !== e) throw Error(L(188));
}
function $_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ci(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return y0(i), e;
        if (o === r) return y0(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Db(e) {
  return (e = $_(e)), e !== null ? Ab(e) : null;
}
function Ab(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ab(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vb = Ht.unstable_scheduleCallback,
  b0 = Ht.unstable_cancelCallback,
  N_ = Ht.unstable_shouldYield,
  H_ = Ht.unstable_requestPaint,
  Ne = Ht.unstable_now,
  j_ = Ht.unstable_getCurrentPriorityLevel,
  Ih = Ht.unstable_ImmediatePriority,
  Bb = Ht.unstable_UserBlockingPriority,
  Kl = Ht.unstable_NormalPriority,
  W_ = Ht.unstable_LowPriority,
  zb = Ht.unstable_IdlePriority,
  vc = null,
  $n = null;
function U_(e) {
  if ($n && typeof $n.onCommitFiberRoot == 'function')
    try {
      $n.onCommitFiberRoot(vc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Sn = Math.clz32 ? Math.clz32 : G_,
  X_ = Math.log,
  Y_ = Math.LN2;
function G_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((X_(e) / Y_) | 0)) | 0;
}
var xl = 64,
  Sl = 4194304;
function Ts(e) {
  switch (e & -e) {
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
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ts(a)) : ((o &= s), o !== 0 && (r = Ts(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ts(s)) : o !== 0 && (r = Ts(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Sn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function K_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function q_(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Sn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = K_(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Kd(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function $b() {
  var e = xl;
  return (xl <<= 1), !(4194240 & xl) && (xl = 64), e;
}
function md(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Js(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Sn(t)),
    (e[t] = n);
}
function Q_(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Sn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Lh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Sn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var me = 0;
function Nb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var Hb,
  Mh,
  jb,
  Wb,
  Ub,
  qd = !1,
  wl = [],
  Fr = null,
  Ir = null,
  Lr = null,
  zs = new Map(),
  $s = new Map(),
  Er = [],
  Z_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function x0(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Fr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ir = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Lr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      zs.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      $s.delete(t.pointerId);
  }
}
function vs(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ta(t)), t !== null && Mh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function J_(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Fr = vs(Fr, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Ir = vs(Ir, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Lr = vs(Lr, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return zs.set(o, vs(zs.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), $s.set(o, vs($s.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Xb(e) {
  var t = hi(e.target);
  if (t !== null) {
    var n = Ci(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ob(n)), t !== null)) {
          (e.blockedOn = t),
            Ub(e.priority, function () {
              jb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = ta(n)), t !== null && Mh(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (Ud = r), n.target.dispatchEvent(r), (Ud = null), t.shift();
  }
  return !0;
}
function S0(e, t, n) {
  Al(e) && n.delete(t);
}
function e2() {
  (qd = !1),
    Fr !== null && Al(Fr) && (Fr = null),
    Ir !== null && Al(Ir) && (Ir = null),
    Lr !== null && Al(Lr) && (Lr = null),
    zs.forEach(S0),
    $s.forEach(S0);
}
function gs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qd ||
      ((qd = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, e2)));
}
function Ns(e) {
  function t(i) {
    return gs(i, e);
  }
  if (0 < wl.length) {
    gs(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Fr !== null && gs(Fr, e),
      Ir !== null && gs(Ir, e),
      Lr !== null && gs(Lr, e),
      zs.forEach(t),
      $s.forEach(t),
      n = 0;
    n < Er.length;
    n++
  )
    (r = Er[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Er.length && ((n = Er[0]), n.blockedOn === null); )
    Xb(n), n.blockedOn === null && Er.shift();
}
var vo = fr.ReactCurrentBatchConfig,
  Ql = !0;
function t2(e, t, n, r) {
  var i = me,
    o = vo.transition;
  vo.transition = null;
  try {
    (me = 1), Oh(e, t, n, r);
  } finally {
    (me = i), (vo.transition = o);
  }
}
function n2(e, t, n, r) {
  var i = me,
    o = vo.transition;
  vo.transition = null;
  try {
    (me = 4), Oh(e, t, n, r);
  } finally {
    (me = i), (vo.transition = o);
  }
}
function Oh(e, t, n, r) {
  if (Ql) {
    var i = Qd(e, t, n, r);
    if (i === null) wd(e, t, r, Zl, n), x0(e, r);
    else if (J_(i, e, t, n, r)) r.stopPropagation();
    else if ((x0(e, r), 4 & t && -1 < Z_.indexOf(e))) {
      for (; i !== null; ) {
        var o = ta(i);
        if (
          (o !== null && Hb(o),
          (o = Qd(e, t, n, r)),
          o === null && wd(e, t, r, Zl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else wd(e, t, r, null, n);
  }
}
var Zl = null;
function Qd(e, t, n, r) {
  if (((Zl = null), (e = Fh(r)), (e = hi(e)), e !== null))
    if (((t = Ci(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ob(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zl = e), null;
}
function Yb(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (j_()) {
        case Ih:
          return 1;
        case Bb:
          return 4;
        case Kl:
        case W_:
          return 16;
        case zb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pr = null,
  Dh = null,
  Vl = null;
function Gb() {
  if (Vl) return Vl;
  var e,
    t,
    n = Dh,
    r = n.length,
    i = 'value' in Pr ? Pr.value : Pr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (Vl = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Bl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kl() {
  return !0;
}
function w0() {
  return !1;
}
function Wt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kl
        : w0),
      (this.isPropagationStopped = w0),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = kl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = kl));
      },
      persist: function () {},
      isPersistent: kl,
    }),
    t
  );
}
var vd,
  gd,
  ys,
  Eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ah = Wt(Eo),
  ea = _e({}, Eo, { view: 0, detail: 0 }),
  r2 = Wt(ea),
  gc = _e({}, ea, {
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
    getModifierState: Vh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ys &&
            (ys && e.type === 'mousemove'
              ? ((vd = e.screenX - ys.screenX), (gd = e.screenY - ys.screenY))
              : (gd = vd = 0),
            (ys = e)),
          vd);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : gd;
    },
  }),
  k0 = Wt(gc),
  i2 = _e({}, gc, { dataTransfer: 0 }),
  o2 = Wt(i2),
  s2 = _e({}, ea, { relatedTarget: 0 }),
  yd = Wt(s2),
  a2 = _e({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l2 = Wt(a2),
  c2 = _e({}, Eo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  u2 = Wt(c2),
  f2 = _e({}, Eo, { data: 0 }),
  C0 = Wt(f2),
  d2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  h2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  p2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function m2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = p2[e]) && !!t[e];
}
function Vh() {
  return m2;
}
var v2 = _e({}, ea, {
    key: function (e) {
      if (e.key) {
        var t = d2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Bl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? h2[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vh,
    charCode: function (e) {
      return e.type === 'keypress' ? Bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Bl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  g2 = Wt(v2),
  y2 = _e({}, gc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  T0 = Wt(y2),
  b2 = _e({}, ea, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vh,
  }),
  x2 = Wt(b2),
  S2 = _e({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w2 = Wt(S2),
  k2 = _e({}, gc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  C2 = Wt(k2),
  T2 = [9, 13, 27, 32],
  Bh = ar && 'CompositionEvent' in window,
  _s = null;
ar && 'documentMode' in document && (_s = document.documentMode);
var E2 = ar && 'TextEvent' in window && !_s,
  Kb = ar && (!Bh || (_s && 8 < _s && 11 >= _s)),
  E0 = String.fromCharCode(32),
  R0 = !1;
function qb(e, t) {
  switch (e) {
    case 'keyup':
      return T2.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Qb(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var no = !1;
function R2(e, t) {
  switch (e) {
    case 'compositionend':
      return Qb(t);
    case 'keypress':
      return t.which !== 32 ? null : ((R0 = !0), E0);
    case 'textInput':
      return (e = t.data), e === E0 && R0 ? null : e;
    default:
      return null;
  }
}
function P2(e, t) {
  if (no)
    return e === 'compositionend' || (!Bh && qb(e, t))
      ? ((e = Gb()), (Vl = Dh = Pr = null), (no = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Kb && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _2 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function P0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_2[e.type] : t === 'textarea';
}
function Zb(e, t, n, r) {
  _b(r),
    (t = Jl(t, 'onChange')),
    0 < t.length &&
      ((n = new Ah('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fs = null,
  Hs = null;
function F2(e) {
  cx(e, 0);
}
function yc(e) {
  var t = oo(e);
  if (wb(t)) return e;
}
function I2(e, t) {
  if (e === 'change') return t;
}
var Jb = !1;
ar &&
  (ar
    ? ((Tl = 'oninput' in document),
      Tl ||
        ((bd = document.createElement('div')),
        bd.setAttribute('oninput', 'return;'),
        (Tl = typeof bd.oninput == 'function')),
      (Cl = Tl))
    : (Cl = !1),
  (Jb = Cl && (!document.documentMode || 9 < document.documentMode)));
var Cl, Tl, bd;
function _0() {
  Fs && (Fs.detachEvent('onpropertychange', ex), (Hs = Fs = null));
}
function ex(e) {
  if (e.propertyName === 'value' && yc(Hs)) {
    var t = [];
    Zb(t, Hs, e, Fh(e)), Mb(F2, t);
  }
}
function L2(e, t, n) {
  e === 'focusin'
    ? (_0(), (Fs = t), (Hs = n), Fs.attachEvent('onpropertychange', ex))
    : e === 'focusout' && _0();
}
function M2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return yc(Hs);
}
function O2(e, t) {
  if (e === 'click') return yc(t);
}
function D2(e, t) {
  if (e === 'input' || e === 'change') return yc(t);
}
function A2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kn = typeof Object.is == 'function' ? Object.is : A2;
function js(e, t) {
  if (kn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Md.call(t, i) || !kn(e[i], t[i])) return !1;
  }
  return !0;
}
function F0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function I0(e, t) {
  var n = F0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = F0(n);
  }
}
function tx(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? tx(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function nx() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = Xl(e.document));
  }
  return t;
}
function zh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function V2(e) {
  var t = nx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = I0(n, o));
        var s = I0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var B2 = ar && 'documentMode' in document && 11 >= document.documentMode,
  ro = null,
  Zd = null,
  Is = null,
  Jd = !1;
function L0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jd ||
    ro == null ||
    ro !== Xl(r) ||
    ((r = ro),
    'selectionStart' in r && zh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Is && js(Is, r)) ||
      ((Is = r),
      (r = Jl(Zd, 'onSelect')),
      0 < r.length &&
        ((t = new Ah('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ro))));
}
function El(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var io = {
    animationend: El('Animation', 'AnimationEnd'),
    animationiteration: El('Animation', 'AnimationIteration'),
    animationstart: El('Animation', 'AnimationStart'),
    transitionend: El('Transition', 'TransitionEnd'),
  },
  xd = {},
  rx = {};
ar &&
  ((rx = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete io.animationend.animation,
    delete io.animationiteration.animation,
    delete io.animationstart.animation),
  'TransitionEvent' in window || delete io.transitionend.transition);
function bc(e) {
  if (xd[e]) return xd[e];
  if (!io[e]) return e;
  var t,
    n = io[e];
  for (t in n) if (n.hasOwnProperty(t) && t in rx) return (xd[e] = n[t]);
  return e;
}
var ix = bc('animationend'),
  ox = bc('animationiteration'),
  sx = bc('animationstart'),
  ax = bc('transitionend'),
  lx = new Map(),
  M0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function $r(e, t) {
  lx.set(e, t), ki(t, [e]);
}
for (Rl = 0; Rl < M0.length; Rl++)
  (Pl = M0[Rl]),
    (O0 = Pl.toLowerCase()),
    (D0 = Pl[0].toUpperCase() + Pl.slice(1)),
    $r(O0, 'on' + D0);
var Pl, O0, D0, Rl;
$r(ix, 'onAnimationEnd');
$r(ox, 'onAnimationIteration');
$r(sx, 'onAnimationStart');
$r('dblclick', 'onDoubleClick');
$r('focusin', 'onFocus');
$r('focusout', 'onBlur');
$r(ax, 'onTransitionEnd');
bo('onMouseEnter', ['mouseout', 'mouseover']);
bo('onMouseLeave', ['mouseout', 'mouseover']);
bo('onPointerEnter', ['pointerout', 'pointerover']);
bo('onPointerLeave', ['pointerout', 'pointerover']);
ki(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
ki(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
ki('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ki(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
ki(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
ki(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Es =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  z2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Es));
function A0(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), z_(r, t, void 0, e), (e.currentTarget = null);
}
function cx(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          A0(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          A0(i, a, c), (o = l);
        }
    }
  }
  if (Gl) throw ((e = Gd), (Gl = !1), (Gd = null), e);
}
function we(e, t) {
  var n = t[ih];
  n === void 0 && (n = t[ih] = new Set());
  var r = e + '__bubble';
  n.has(r) || (ux(t, e, 2, !1), n.add(r));
}
function Sd(e, t, n) {
  var r = 0;
  t && (r |= 4), ux(n, e, r, t);
}
var _l = '_reactListening' + Math.random().toString(36).slice(2);
function Ws(e) {
  if (!e[_l]) {
    (e[_l] = !0),
      gb.forEach(function (n) {
        n !== 'selectionchange' && (z2.has(n) || Sd(n, !1, e), Sd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_l] || ((t[_l] = !0), Sd('selectionchange', !1, t));
  }
}
function ux(e, t, n, r) {
  switch (Yb(t)) {
    case 1:
      var i = t2;
      break;
    case 4:
      i = n2;
      break;
    default:
      i = Oh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Yd ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function wd(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = hi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Mb(function () {
    var c = o,
      u = Fh(n),
      f = [];
    e: {
      var d = lx.get(e);
      if (d !== void 0) {
        var m = Ah,
          y = e;
        switch (e) {
          case 'keypress':
            if (Bl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = g2;
            break;
          case 'focusin':
            (y = 'focus'), (m = yd);
            break;
          case 'focusout':
            (y = 'blur'), (m = yd);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = yd;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = k0;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = o2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = x2;
            break;
          case ix:
          case ox:
          case sx:
            m = l2;
            break;
          case ax:
            m = w2;
            break;
          case 'scroll':
            m = r2;
            break;
          case 'wheel':
            m = C2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = u2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = T0;
        }
        var v = (4 & t) !== 0,
          S = !v && e === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d;
        v = [];
        for (var h, g = c; g !== null; ) {
          h = g;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              p !== null && ((x = Bs(g, p)), x != null && v.push(Us(g, x, h)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, u)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === 'mouseover' || e === 'pointerover'),
        (m = e === 'mouseout' || e === 'pointerout'),
        (!d ||
          n === Ud ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!hi(y) && !y[lr])) &&
          (m || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = c),
              (y = y ? hi(y) : null),
              y !== null &&
                ((S = Ci(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = c)),
          m !== y))
      ) {
        if (
          ((v = k0),
          (x = 'onMouseLeave'),
          (p = 'onMouseEnter'),
          (g = 'mouse'),
          (e !== 'pointerout' && e !== 'pointerover') ||
            ((v = T0),
            (x = 'onPointerLeave'),
            (p = 'onPointerEnter'),
            (g = 'pointer')),
          (S = m == null ? d : oo(m)),
          (h = y == null ? d : oo(y)),
          (d = new v(x, g + 'leave', m, n, u)),
          (d.target = S),
          (d.relatedTarget = h),
          (x = null),
          hi(u) === c &&
            ((v = new v(p, g + 'enter', y, n, u)),
            (v.target = h),
            (v.relatedTarget = S),
            (x = v)),
          (S = x),
          m && y)
        )
          e: {
            for (v = m, p = y, g = 0, h = v; h; h = Ji(h)) g++;
            for (h = 0, x = p; x; x = Ji(x)) h++;
            for (; 0 < g - h; ) (v = Ji(v)), g--;
            for (; 0 < h - g; ) (p = Ji(p)), h--;
            for (; g--; ) {
              if (v === p || (p !== null && v === p.alternate)) break e;
              (v = Ji(v)), (p = Ji(p));
            }
            v = null;
          }
        else v = null;
        m !== null && V0(f, d, m, v, !1),
          y !== null && S !== null && V0(f, S, y, v, !0);
      }
      if (
        ((d = c ? oo(c) : window),
        (m = d.nodeName && d.nodeName.toLowerCase()),
        m === 'select' || (m === 'input' && d.type === 'file'))
      )
        var k = I2;
      else if (P0(d))
        if (Jb) k = D2;
        else {
          k = M2;
          var w = L2;
        }
      else
        (m = d.nodeName) &&
          m.toLowerCase() === 'input' &&
          (d.type === 'checkbox' || d.type === 'radio') &&
          (k = O2);
      switch (
        (k && (k = k(e, c))
          ? Zb(f, k, n, u)
          : (w && w(e, d, c),
            e === 'focusout' &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === 'number' &&
              $d(d, 'number', d.value)),
        (w = c ? oo(c) : window),
        e)
      ) {
        case 'focusin':
          (P0(w) || w.contentEditable === 'true') &&
            ((ro = w), (Zd = c), (Is = null));
          break;
        case 'focusout':
          Is = Zd = ro = null;
          break;
        case 'mousedown':
          Jd = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Jd = !1), L0(f, n, u);
          break;
        case 'selectionchange':
          if (B2) break;
        case 'keydown':
        case 'keyup':
          L0(f, n, u);
      }
      var T;
      if (Bh)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        no
          ? qb(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart');
      E &&
        (Kb &&
          n.locale !== 'ko' &&
          (no || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && no && (T = Gb())
            : ((Pr = u),
              (Dh = 'value' in Pr ? Pr.value : Pr.textContent),
              (no = !0))),
        (w = Jl(c, E)),
        0 < w.length &&
          ((E = new C0(E, e, null, n, u)),
          f.push({ event: E, listeners: w }),
          T ? (E.data = T) : ((T = Qb(n)), T !== null && (E.data = T)))),
        (T = E2 ? R2(e, n) : P2(e, n)) &&
          ((c = Jl(c, 'onBeforeInput')),
          0 < c.length &&
            ((u = new C0('onBeforeInput', 'beforeinput', null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = T)));
    }
    cx(f, t);
  });
}
function Us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Bs(e, n)),
      o != null && r.unshift(Us(e, o, i)),
      (o = Bs(e, t)),
      o != null && r.push(Us(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ji(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function V0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Bs(n, o)), l != null && s.unshift(Us(n, l, a)))
        : i || ((l = Bs(n, o)), l != null && s.push(Us(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $2 = /\r\n?/g,
  N2 = /\u0000|\uFFFD/g;
function B0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      $2,
      `
`
    )
    .replace(N2, '');
}
function Fl(e, t, n) {
  if (((t = B0(t)), B0(e) !== t && n)) throw Error(L(425));
}
function ec() {}
var eh = null,
  th = null;
function nh(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rh = typeof setTimeout == 'function' ? setTimeout : void 0,
  H2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  z0 = typeof Promise == 'function' ? Promise : void 0,
  j2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof z0 < 'u'
      ? function (e) {
          return z0.resolve(null).then(e).catch(W2);
        }
      : rh;
function W2(e) {
  setTimeout(function () {
    throw e;
  });
}
function kd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ns(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Ns(t);
}
function Mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function $0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ro = Math.random().toString(36).slice(2),
  zn = '__reactFiber$' + Ro,
  Xs = '__reactProps$' + Ro,
  lr = '__reactContainer$' + Ro,
  ih = '__reactEvents$' + Ro,
  U2 = '__reactListeners$' + Ro,
  X2 = '__reactHandles$' + Ro;
function hi(e) {
  var t = e[zn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lr] || n[zn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $0(e); e !== null; ) {
          if ((n = e[zn])) return n;
          e = $0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ta(e) {
  return (
    (e = e[zn] || e[lr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function oo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function xc(e) {
  return e[Xs] || null;
}
var oh = [],
  so = -1;
function Nr(e) {
  return { current: e };
}
function ke(e) {
  0 > so || ((e.current = oh[so]), (oh[so] = null), so--);
}
function be(e, t) {
  so++, (oh[so] = e.current), (e.current = t);
}
var zr = {},
  ft = Nr(zr),
  Ft = Nr(!1),
  yi = zr;
function xo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function It(e) {
  return (e = e.childContextTypes), e != null;
}
function tc() {
  ke(Ft), ke(ft);
}
function N0(e, t, n) {
  if (ft.current !== zr) throw Error(L(168));
  be(ft, t), be(Ft, n);
}
function fx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, L_(e) || 'Unknown', i));
  return _e({}, n, r);
}
function nc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zr),
    (yi = ft.current),
    be(ft, e),
    be(Ft, Ft.current),
    !0
  );
}
function H0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = fx(e, t, yi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(Ft),
      ke(ft),
      be(ft, e))
    : ke(Ft),
    be(Ft, n);
}
var rr = null,
  Sc = !1,
  Cd = !1;
function dx(e) {
  rr === null ? (rr = [e]) : rr.push(e);
}
function Y2(e) {
  (Sc = !0), dx(e);
}
function Hr() {
  if (!Cd && rr !== null) {
    Cd = !0;
    var e = 0,
      t = me;
    try {
      var n = rr;
      for (me = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rr = null), (Sc = !1);
    } catch (i) {
      throw (rr !== null && (rr = rr.slice(e + 1)), Vb(Ih, Hr), i);
    } finally {
      (me = t), (Cd = !1);
    }
  }
  return null;
}
var ao = [],
  lo = 0,
  rc = null,
  ic = 0,
  on = [],
  sn = 0,
  bi = null,
  ir = 1,
  or = '';
function fi(e, t) {
  (ao[lo++] = ic), (ao[lo++] = rc), (rc = e), (ic = t);
}
function hx(e, t, n) {
  (on[sn++] = ir), (on[sn++] = or), (on[sn++] = bi), (bi = e);
  var r = ir;
  e = or;
  var i = 32 - Sn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Sn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ir = (1 << (32 - Sn(t) + i)) | (n << i) | r),
      (or = o + e);
  } else (ir = (1 << o) | (n << i) | r), (or = e);
}
function $h(e) {
  e.return !== null && (fi(e, 1), hx(e, 1, 0));
}
function Nh(e) {
  for (; e === rc; )
    (rc = ao[--lo]), (ao[lo] = null), (ic = ao[--lo]), (ao[lo] = null);
  for (; e === bi; )
    (bi = on[--sn]),
      (on[sn] = null),
      (or = on[--sn]),
      (on[sn] = null),
      (ir = on[--sn]),
      (on[sn] = null);
}
var Nt = null,
  $t = null,
  Ee = !1,
  xn = null;
function px(e, t) {
  var n = an(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function j0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Nt = e), ($t = Mr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Nt = e), ($t = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = bi !== null ? { id: ir, overflow: or } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = an(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Nt = e),
          ($t = null),
          !0)
      );
    default:
      return !1;
  }
}
function sh(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function ah(e) {
  if (Ee) {
    var t = $t;
    if (t) {
      var n = t;
      if (!j0(e, t)) {
        if (sh(e)) throw Error(L(418));
        t = Mr(n.nextSibling);
        var r = Nt;
        t && j0(e, t)
          ? px(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Ee = !1), (Nt = e));
      }
    } else {
      if (sh(e)) throw Error(L(418));
      (e.flags = (-4097 & e.flags) | 2), (Ee = !1), (Nt = e);
    }
  }
}
function W0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Nt = e;
}
function Il(e) {
  if (e !== Nt) return !1;
  if (!Ee) return W0(e), (Ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !nh(e.type, e.memoizedProps))),
    t && (t = $t))
  ) {
    if (sh(e)) throw (mx(), Error(L(418)));
    for (; t; ) px(e, t), (t = Mr(t.nextSibling));
  }
  if ((W0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              $t = Mr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      $t = null;
    }
  } else $t = Nt ? Mr(e.stateNode.nextSibling) : null;
  return !0;
}
function mx() {
  for (var e = $t; e; ) e = Mr(e.nextSibling);
}
function So() {
  ($t = Nt = null), (Ee = !1);
}
function Hh(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
var G2 = fr.ReactCurrentBatchConfig;
function yn(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var oc = Nr(null),
  sc = null,
  co = null,
  jh = null;
function Wh() {
  jh = co = sc = null;
}
function Uh(e) {
  var t = oc.current;
  ke(oc), (e._currentValue = t);
}
function lh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function go(e, t) {
  (sc = e),
    (jh = co = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_t = !0), (e.firstContext = null));
}
function cn(e) {
  var t = e._currentValue;
  if (jh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), co === null)) {
      if (sc === null) throw Error(L(308));
      (co = e), (sc.dependencies = { lanes: 0, firstContext: e });
    } else co = co.next = e;
  return t;
}
var pi = null;
function Xh(e) {
  pi === null ? (pi = [e]) : pi.push(e);
}
function vx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Xh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    cr(e, r)
  );
}
function cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tr = !1;
function Yh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Or(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & le)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      cr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Xh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    cr(e, n)
  );
}
function zl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lh(e, n);
  }
}
function U0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function ac(e, t, n, r) {
  var i = e.updateQueue;
  Tr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == 'function' ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = _e({}, f, d);
              break e;
            case 2:
              Tr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (l = f)) : (u = u.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Si |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function X0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var yx = new vb.Component().refs;
function ch(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Ci(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = yt(),
      i = Ar(e),
      o = sr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Or(e, o, i)),
      t !== null && (wn(t, e, i, r), zl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = yt(),
      i = Ar(e),
      o = sr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Or(e, o, i)),
      t !== null && (wn(t, e, i, r), zl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = yt(),
      r = Ar(e),
      i = sr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Or(e, i, r)),
      t !== null && (wn(t, e, r, n), zl(t, e, r));
  },
};
function Y0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !js(n, r) ||
        !js(i, o)
  );
}
function bx(e, t, n) {
  var r = !1,
    i = zr,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = cn(o))
      : ((i = It(t) ? yi : ft.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xo(e, i) : zr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function G0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wc.enqueueReplaceState(t, t.state, null);
}
function uh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = yx), Yh(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = cn(o))
    : ((o = It(t) ? yi : ft.current), (i.context = xo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (ch(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && wc.enqueueReplaceState(i, i.state, null),
      ac(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function bs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === yx && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function K0(e) {
  var t = e._init;
  return t(e._payload);
}
function xx(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Vr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = Id(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function l(p, h, g, x) {
    var k = g.type;
    return k === to
      ? u(p, h, g.props.children, x, g.key)
      : h !== null &&
        (h.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === Cr &&
            K0(k) === h.type))
      ? ((x = i(h, g.props)), (x.ref = bs(p, h, g)), (x.return = p), x)
      : ((x = Ul(g.type, g.key, g.props, null, p.mode, x)),
        (x.ref = bs(p, h, g)),
        (x.return = p),
        x);
  }
  function c(p, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Ld(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g.children || [])), (h.return = p), h);
  }
  function u(p, h, g, x, k) {
    return h === null || h.tag !== 7
      ? ((h = gi(g, p.mode, x, k)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function f(p, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Id('' + h, p.mode, g)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case gl:
          return (
            (g = Ul(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = bs(p, null, h)),
            (g.return = p),
            g
          );
        case eo:
          return (h = Ld(h, p.mode, g)), (h.return = p), h;
        case Cr:
          var x = h._init;
          return f(p, x(h._payload), g);
      }
      if (Cs(h) || ms(h))
        return (h = gi(h, p.mode, g, null)), (h.return = p), h;
      Ll(p, h);
    }
    return null;
  }
  function d(p, h, g, x) {
    var k = h !== null ? h.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return k !== null ? null : a(p, h, '' + g, x);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case gl:
          return g.key === k ? l(p, h, g, x) : null;
        case eo:
          return g.key === k ? c(p, h, g, x) : null;
        case Cr:
          return (k = g._init), d(p, h, k(g._payload), x);
      }
      if (Cs(g) || ms(g)) return k !== null ? null : u(p, h, g, x, null);
      Ll(p, g);
    }
    return null;
  }
  function m(p, h, g, x, k) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (p = p.get(g) || null), a(h, p, '' + x, k);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case gl:
          return (p = p.get(x.key === null ? g : x.key) || null), l(h, p, x, k);
        case eo:
          return (p = p.get(x.key === null ? g : x.key) || null), c(h, p, x, k);
        case Cr:
          var w = x._init;
          return m(p, h, g, w(x._payload), k);
      }
      if (Cs(x) || ms(x)) return (p = p.get(g) || null), u(h, p, x, k, null);
      Ll(h, x);
    }
    return null;
  }
  function y(p, h, g, x) {
    for (
      var k = null, w = null, T = h, E = (h = 0), I = null;
      T !== null && E < g.length;
      E++
    ) {
      T.index > E ? ((I = T), (T = null)) : (I = T.sibling);
      var F = d(p, T, g[E], x);
      if (F === null) {
        T === null && (T = I);
        break;
      }
      e && T && F.alternate === null && t(p, T),
        (h = o(F, h, E)),
        w === null ? (k = F) : (w.sibling = F),
        (w = F),
        (T = I);
    }
    if (E === g.length) return n(p, T), Ee && fi(p, E), k;
    if (T === null) {
      for (; E < g.length; E++)
        (T = f(p, g[E], x)),
          T !== null &&
            ((h = o(T, h, E)), w === null ? (k = T) : (w.sibling = T), (w = T));
      return Ee && fi(p, E), k;
    }
    for (T = r(p, T); E < g.length; E++)
      (I = m(T, p, E, g[E], x)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? E : I.key),
          (h = o(I, h, E)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        T.forEach(function (B) {
          return t(p, B);
        }),
      Ee && fi(p, E),
      k
    );
  }
  function v(p, h, g, x) {
    var k = ms(g);
    if (typeof k != 'function') throw Error(L(150));
    if (((g = k.call(g)), g == null)) throw Error(L(151));
    for (
      var w = (k = null), T = h, E = (h = 0), I = null, F = g.next();
      T !== null && !F.done;
      E++, F = g.next()
    ) {
      T.index > E ? ((I = T), (T = null)) : (I = T.sibling);
      var B = d(p, T, F.value, x);
      if (B === null) {
        T === null && (T = I);
        break;
      }
      e && T && B.alternate === null && t(p, T),
        (h = o(B, h, E)),
        w === null ? (k = B) : (w.sibling = B),
        (w = B),
        (T = I);
    }
    if (F.done) return n(p, T), Ee && fi(p, E), k;
    if (T === null) {
      for (; !F.done; E++, F = g.next())
        (F = f(p, F.value, x)),
          F !== null &&
            ((h = o(F, h, E)), w === null ? (k = F) : (w.sibling = F), (w = F));
      return Ee && fi(p, E), k;
    }
    for (T = r(p, T); !F.done; E++, F = g.next())
      (F = m(T, p, E, F.value, x)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? E : F.key),
          (h = o(F, h, E)),
          w === null ? (k = F) : (w.sibling = F),
          (w = F));
    return (
      e &&
        T.forEach(function (V) {
          return t(p, V);
        }),
      Ee && fi(p, E),
      k
    );
  }
  function S(p, h, g, x) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === to &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case gl:
          e: {
            for (var k = g.key, w = h; w !== null; ) {
              if (w.key === k) {
                if (((k = g.type), k === to)) {
                  if (w.tag === 7) {
                    n(p, w.sibling),
                      (h = i(w, g.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === Cr &&
                    K0(k) === w.type)
                ) {
                  n(p, w.sibling),
                    (h = i(w, g.props)),
                    (h.ref = bs(p, w, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, w);
                break;
              }
              t(p, w), (w = w.sibling);
            }
            g.type === to
              ? ((h = gi(g.props.children, p.mode, x, g.key)),
                (h.return = p),
                (p = h))
              : ((x = Ul(g.type, g.key, g.props, null, p.mode, x)),
                (x.ref = bs(p, h, g)),
                (x.return = p),
                (p = x));
          }
          return s(p);
        case eo:
          e: {
            for (w = g.key; h !== null; ) {
              if (h.key === w) {
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, h);
                break;
              }
              t(p, h), (h = h.sibling);
            }
            (h = Ld(g, p.mode, x)), (h.return = p), (p = h);
          }
          return s(p);
        case Cr:
          return (w = g._init), S(p, h, w(g._payload), x);
      }
      if (Cs(g)) return y(p, h, g, x);
      if (ms(g)) return v(p, h, g, x);
      Ll(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = Id(g, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return S;
}
var wo = xx(!0),
  Sx = xx(!1),
  na = {},
  Nn = Nr(na),
  Ys = Nr(na),
  Gs = Nr(na);
function mi(e) {
  if (e === na) throw Error(L(174));
  return e;
}
function Gh(e, t) {
  switch ((be(Gs, t), be(Ys, e), be(Nn, na), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hd(t, e));
  }
  ke(Nn), be(Nn, t);
}
function ko() {
  ke(Nn), ke(Ys), ke(Gs);
}
function wx(e) {
  mi(Gs.current);
  var t = mi(Nn.current),
    n = Hd(t, e.type);
  t !== n && (be(Ys, e), be(Nn, n));
}
function Kh(e) {
  Ys.current === e && (ke(Nn), ke(Ys));
}
var Re = Nr(0);
function lc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Td = [];
function qh() {
  for (var e = 0; e < Td.length; e++)
    Td[e]._workInProgressVersionPrimary = null;
  Td.length = 0;
}
var $l = fr.ReactCurrentDispatcher,
  Ed = fr.ReactCurrentBatchConfig,
  xi = 0,
  Pe = null,
  Ue = null,
  Ge = null,
  cc = !1,
  Ls = !1,
  Ks = 0,
  K2 = 0;
function lt() {
  throw Error(L(321));
}
function Qh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kn(e[n], t[n])) return !1;
  return !0;
}
function Zh(e, t, n, r, i, o) {
  if (
    ((xi = o),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($l.current = e === null || e.memoizedState === null ? J2 : eF),
    (e = n(r, i)),
    Ls)
  ) {
    o = 0;
    do {
      if (((Ls = !1), (Ks = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Ge = Ue = null),
        (t.updateQueue = null),
        ($l.current = tF),
        (e = n(r, i));
    } while (Ls);
  }
  if (
    (($l.current = uc),
    (t = Ue !== null && Ue.next !== null),
    (xi = 0),
    (Ge = Ue = Pe = null),
    (cc = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Jh() {
  var e = Ks !== 0;
  return (Ks = 0), e;
}
function Bn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ge === null ? (Pe.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
}
function un() {
  if (Ue === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ue.next;
  var t = Ge === null ? Pe.memoizedState : Ge.next;
  if (t !== null) (Ge = t), (Ue = e);
  else {
    if (e === null) throw Error(L(310));
    (Ue = e),
      (e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null,
      }),
      Ge === null ? (Pe.memoizedState = Ge = e) : (Ge = Ge.next = e);
  }
  return Ge;
}
function qs(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Rd(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ue,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((xi & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Pe.lanes |= u),
          (Si |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      kn(r, t.memoizedState) || (_t = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Pe.lanes |= o), (Si |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pd(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    kn(o, t.memoizedState) || (_t = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function kx() {}
function Cx(e, t) {
  var n = Pe,
    r = un(),
    i = t(),
    o = !kn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (_t = !0)),
    (r = r.queue),
    ep(Rx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ge !== null && 1 & Ge.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      Qs(9, Ex.bind(null, n, r, i, t), void 0, null),
      Ke === null)
    )
      throw Error(L(349));
    30 & xi || Tx(n, t, i);
  }
  return i;
}
function Tx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ex(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Px(t) && _x(e);
}
function Rx(e, t, n) {
  return n(function () {
    Px(t) && _x(e);
  });
}
function Px(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kn(e, n);
  } catch {
    return !0;
  }
}
function _x(e) {
  var t = cr(e, 1);
  t !== null && wn(t, e, 1, -1);
}
function q0(e) {
  var t = Bn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Z2.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Qs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fx() {
  return un().memoizedState;
}
function Nl(e, t, n, r) {
  var i = Bn();
  (Pe.flags |= e),
    (i.memoizedState = Qs(1 | t, n, void 0, r === void 0 ? null : r));
}
function kc(e, t, n, r) {
  var i = un();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ue !== null) {
    var s = Ue.memoizedState;
    if (((o = s.destroy), r !== null && Qh(r, s.deps))) {
      i.memoizedState = Qs(t, n, o, r);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Qs(1 | t, n, o, r));
}
function Q0(e, t) {
  return Nl(8390656, 8, e, t);
}
function ep(e, t) {
  return kc(2048, 8, e, t);
}
function Ix(e, t) {
  return kc(4, 2, e, t);
}
function Lx(e, t) {
  return kc(4, 4, e, t);
}
function Mx(e, t) {
  return typeof t == 'function'
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Ox(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kc(4, 4, Mx.bind(null, t, e), n)
  );
}
function tp() {}
function Dx(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ax(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vx(e, t, n) {
  return 21 & xi
    ? (kn(n, t) || ((n = $b()), (Pe.lanes |= n), (Si |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_t = !0)), (e.memoizedState = n));
}
function q2(e, t) {
  var n = me;
  (me = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ed.transition;
  Ed.transition = {};
  try {
    e(!1), t();
  } finally {
    (me = n), (Ed.transition = r);
  }
}
function Bx() {
  return un().memoizedState;
}
function Q2(e, t, n) {
  var r = Ar(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zx(e))
  )
    $x(t, n);
  else if (((n = vx(e, t, n, r)), n !== null)) {
    var i = yt();
    wn(n, e, r, i), Nx(n, t, r);
  }
}
function Z2(e, t, n) {
  var r = Ar(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zx(e)) $x(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), kn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Xh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = vx(e, t, i, r)),
      n !== null && ((i = yt()), wn(n, e, r, i), Nx(n, t, r));
  }
}
function zx(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function $x(e, t) {
  Ls = cc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Nx(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lh(e, n);
  }
}
var uc = {
    readContext: cn,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  J2 = {
    readContext: cn,
    useCallback: function (e, t) {
      return (Bn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: cn,
    useEffect: Q0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nl(4194308, 4, Mx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Q2.bind(null, Pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: q0,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (Bn().memoizedState = e);
    },
    useTransition: function () {
      var e = q0(!1),
        t = e[0];
      return (e = q2.bind(null, e[1])), (Bn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        i = Bn();
      if (Ee) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ke === null)) throw Error(L(349));
        30 & xi || Tx(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Q0(Rx.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Qs(9, Ex.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bn(),
        t = Ke.identifierPrefix;
      if (Ee) {
        var n = or,
          r = ir;
        (n = (r & ~(1 << (32 - Sn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ks++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = K2++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eF = {
    readContext: cn,
    useCallback: Dx,
    useContext: cn,
    useEffect: ep,
    useImperativeHandle: Ox,
    useInsertionEffect: Ix,
    useLayoutEffect: Lx,
    useMemo: Ax,
    useReducer: Rd,
    useRef: Fx,
    useState: function () {
      return Rd(qs);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = un();
      return Vx(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Rd(qs)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: kx,
    useSyncExternalStore: Cx,
    useId: Bx,
    unstable_isNewReconciler: !1,
  },
  tF = {
    readContext: cn,
    useCallback: Dx,
    useContext: cn,
    useEffect: ep,
    useImperativeHandle: Ox,
    useInsertionEffect: Ix,
    useLayoutEffect: Lx,
    useMemo: Ax,
    useReducer: Pd,
    useRef: Fx,
    useState: function () {
      return Pd(qs);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = un();
      return Ue === null ? (t.memoizedState = e) : Vx(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Pd(qs)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: kx,
    useSyncExternalStore: Cx,
    useId: Bx,
    unstable_isNewReconciler: !1,
  };
function Co(e, t) {
  try {
    var n = '',
      r = t;
    do (n += I_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function _d(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nF = typeof WeakMap == 'function' ? WeakMap : Map;
function Hx(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dc || ((dc = !0), (xh = r)), fh(e, t);
    }),
    n
  );
}
function jx(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        fh(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        fh(e, t),
          typeof r != 'function' &&
            (Dr === null ? (Dr = new Set([this])) : Dr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function Z0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nF();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = vF.bind(null, e, t, n)), t.then(e, e));
}
function J0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eb(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sr(-1, 1)), (t.tag = 2), Or(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rF = fr.ReactCurrentOwner,
  _t = !1;
function gt(e, t, n, r) {
  t.child = e === null ? Sx(t, null, n, r) : wo(t, e.child, n, r);
}
function tb(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    go(t, i),
    (r = Zh(e, t, n, r, o, i)),
    (n = Jh()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ur(e, t, i))
      : (Ee && n && $h(t), (t.flags |= 1), gt(e, t, r, i), t.child)
  );
}
function nb(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !cp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wx(e, t, o, r, i))
      : ((e = Ul(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : js), n(s, r) && e.ref === t.ref)
    )
      return ur(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Vr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (js(o, r) && e.ref === t.ref) {
      if (((_t = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), ur(e, t, i);
      131072 & e.flags && (_t = !0);
    }
  }
  return dh(e, t, n, r, i);
}
function Ux(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        be(fo, zt),
        (zt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          be(fo, zt),
          (zt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        be(fo, zt),
        (zt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      be(fo, zt),
      (zt |= r);
  return gt(e, t, i, n), t.child;
}
function Xx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function dh(e, t, n, r, i) {
  var o = It(n) ? yi : ft.current;
  return (
    (o = xo(t, o)),
    go(t, i),
    (n = Zh(e, t, n, r, o, i)),
    (r = Jh()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ur(e, t, i))
      : (Ee && r && $h(t), (t.flags |= 1), gt(e, t, n, i), t.child)
  );
}
function rb(e, t, n, r, i) {
  if (It(n)) {
    var o = !0;
    nc(t);
  } else o = !1;
  if ((go(t, i), t.stateNode === null))
    Hl(e, t), bx(t, n, r), uh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = cn(c))
      : ((c = It(n) ? yi : ft.current), (c = xo(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== c) && G0(t, s, r, c)),
      (Tr = !1);
    var d = t.memoizedState;
    (s.state = d),
      ac(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ft.current || Tr
        ? (typeof u == 'function' && (ch(t, n, u, r), (l = t.memoizedState)),
          (a = Tr || Y0(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      gx(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : yn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = cn(l))
        : ((l = It(n) ? yi : ft.current), (l = xo(t, l)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && G0(t, s, r, l)),
      (Tr = !1),
      (d = t.memoizedState),
      (s.state = d),
      ac(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ft.current || Tr
      ? (typeof m == 'function' && (ch(t, n, m, r), (y = t.memoizedState)),
        (c = Tr || Y0(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hh(e, t, n, r, o, i);
}
function hh(e, t, n, r, i, o) {
  Xx(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && H0(t, n, !1), ur(e, t, o);
  (r = t.stateNode), (rF.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = wo(t, e.child, null, o)), (t.child = wo(t, null, a, o)))
      : gt(e, t, a, o),
    (t.memoizedState = r.state),
    i && H0(t, n, !0),
    t.child
  );
}
function Yx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? N0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && N0(e, t.context, !1),
    Gh(e, t.containerInfo);
}
function ib(e, t, n, r, i) {
  return So(), Hh(i), (t.flags |= 256), gt(e, t, n, r), t.child;
}
var ph = { dehydrated: null, treeContext: null, retryLane: 0 };
function mh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gx(e, t, n) {
  var r,
    i = t.pendingProps,
    o = Re.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    be(Re, 1 & o),
    e === null)
  )
    return (
      ah(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: 'hidden', children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Ec(a, i, 0, null)),
              (e = gi(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = mh(n)),
              (t.memoizedState = ph),
              e)
            : np(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return iF(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: 'hidden', children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Vr(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = Vr(r, s)) : ((s = gi(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? mh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ph),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Vr(s, { mode: 'visible', children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function np(e, t) {
  return (
    (t = Ec({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ml(e, t, n, r) {
  return (
    r !== null && Hh(r),
    wo(t, e.child, null, n),
    (e = np(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function iF(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = _d(Error(L(422)))), Ml(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ec({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = gi(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && wo(t, e.child, null, s),
        (t.child.memoizedState = mh(s)),
        (t.memoizedState = ph),
        o);
  if (!(1 & t.mode)) return Ml(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = _d(o, r, void 0)), Ml(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), _t || a)) {
    if (((r = Ke), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), cr(e, i), wn(r, e, i, -1));
    }
    return lp(), (r = _d(Error(L(421)))), Ml(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gF.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      ($t = Mr(i.nextSibling)),
      (Nt = t),
      (Ee = !0),
      (xn = null),
      e !== null &&
        ((on[sn++] = ir),
        (on[sn++] = or),
        (on[sn++] = bi),
        (ir = e.id),
        (or = e.overflow),
        (bi = t)),
      (t = np(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ob(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), lh(e.return, t, n);
}
function Fd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Kx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((gt(e, t, r.children, n), (r = Re.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ob(e, n, t);
        else if (e.tag === 19) ob(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((be(Re, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && lc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Fd(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && lc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Fd(t, !0, n, null, o);
        break;
      case 'together':
        Fd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ur(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Si |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function oF(e, t, n) {
  switch (t.tag) {
    case 3:
      Yx(t), So();
      break;
    case 5:
      wx(t);
      break;
    case 1:
      It(t.type) && nc(t);
      break;
    case 4:
      Gh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      be(oc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (be(Re, 1 & Re.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Gx(e, t, n)
          : (be(Re, 1 & Re.current),
            (e = ur(e, t, n)),
            e !== null ? e.sibling : null);
      be(Re, 1 & Re.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Kx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        be(Re, Re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ux(e, t, n);
  }
  return ur(e, t, n);
}
var qx, vh, Qx, Zx;
qx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vh = function () {};
Qx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), mi(Nn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = Bd(e, i)), (r = Bd(e, r)), (o = []);
        break;
      case 'select':
        (i = _e({}, i, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Nd(e, i)), (r = Nd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ec);
    }
    jd(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === 'style') {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (As.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (o = o || []).push(c, '' + l)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (As.hasOwnProperty(c)
                ? (l != null && c === 'onScroll' && we('scroll', e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Zx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xs(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ct(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sF(e, t, n) {
  var r = t.pendingProps;
  switch ((Nh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ct(t), null;
    case 1:
      return It(t.type) && tc(), ct(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ko(),
        ke(Ft),
        ke(ft),
        qh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Il(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), xn !== null && (kh(xn), (xn = null)))),
        vh(e, t),
        ct(t),
        null
      );
    case 5:
      Kh(t);
      var i = mi(Gs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ct(t), null;
        }
        if (((e = mi(Nn.current)), Il(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[zn] = t), (r[Xs] = o), (e = (1 & t.mode) !== 0), n)) {
            case 'dialog':
              we('cancel', r), we('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              we('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Es.length; i++) we(Es[i], r);
              break;
            case 'source':
              we('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              we('error', r), we('load', r);
              break;
            case 'details':
              we('toggle', r);
              break;
            case 'input':
              h0(r, o), we('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                we('invalid', r);
              break;
            case 'textarea':
              m0(r, o), we('invalid', r);
          }
          jd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Fl(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Fl(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : As.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  we('scroll', r);
            }
          switch (n) {
            case 'input':
              yl(r), p0(r, o, !0);
              break;
            case 'textarea':
              yl(r), v0(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = ec);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Tb(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[zn] = t),
            (e[Xs] = r),
            qx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Wd(n, r)), n)) {
              case 'dialog':
                we('cancel', e), we('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Es.length; i++) we(Es[i], e);
                i = r;
                break;
              case 'source':
                we('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                we('error', e), we('load', e), (i = r);
                break;
              case 'details':
                we('toggle', e), (i = r);
                break;
              case 'input':
                h0(e, r), (i = Bd(e, r)), we('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = _e({}, r, { value: void 0 })),
                  we('invalid', e);
                break;
              case 'textarea':
                m0(e, r), (i = Nd(e, r)), we('invalid', e);
                break;
              default:
                i = r;
            }
            jd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === 'style'
                  ? Pb(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Eb(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Vs(e, l)
                    : typeof l == 'number' && Vs(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (As.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && we('scroll', e)
                      : l != null && Eh(e, o, l, s));
              }
            switch (n) {
              case 'input':
                yl(e), p0(e, r, !1);
                break;
              case 'textarea':
                yl(e), v0(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Br(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ho(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ho(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ec);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) Zx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
        if (((n = mi(Gs.current)), mi(Nn.current), Il(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[zn] = t),
            (o = r.nodeValue !== n) && ((e = Nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[zn] = t),
            (t.stateNode = r);
      }
      return ct(t), null;
    case 13:
      if (
        (ke(Re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ee && $t !== null && 1 & t.mode && !(128 & t.flags))
          mx(), So(), (t.flags |= 98560), (o = !1);
        else if (((o = Il(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[zn] = t;
          } else
            So(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (o = !1);
        } else xn !== null && (kh(xn), (xn = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & Re.current ? Xe === 0 && (Xe = 3) : lp())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        ko(), vh(e, t), e === null && Ws(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return Uh(t.type._context), ct(t), null;
    case 17:
      return It(t.type) && tc(), ct(t), null;
    case 19:
      if ((ke(Re), (o = t.memoizedState), o === null)) return ct(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) xs(o, !1);
        else {
          if (Xe !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = lc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    xs(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return be(Re, (1 & Re.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ne() > To &&
            ((t.flags |= 128), (r = !0), xs(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = lc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xs(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !Ee)
            )
              return ct(t), null;
          } else
            2 * Ne() - o.renderingStartTime > To &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xs(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = Re.current),
          be(Re, r ? (1 & n) | 2 : 1 & n),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        ap(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & zt && (ct(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function aF(e, t) {
  switch ((Nh(t), t.tag)) {
    case 1:
      return (
        It(t.type) && tc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        ko(),
        ke(Ft),
        ke(ft),
        qh(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Kh(t), null;
    case 13:
      if (
        (ke(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        So();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return ke(Re), null;
    case 4:
      return ko(), null;
    case 10:
      return Uh(t.type._context), null;
    case 22:
    case 23:
      return ap(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ol = !1,
  ut = !1,
  lF = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function uo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function Jx(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var sb = !1;
function cF(e, t) {
  if (((eh = Ql), (e = nx()), zh(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (th = { focusedElem: e, selectionRange: n }, Ql = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : yn(t.type, v),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (x) {
          De(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = sb), (sb = !1), y;
}
function Ms(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Jx(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Cc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function gh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function e1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), e1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[zn], delete t[Xs], delete t[ih], delete t[U2], delete t[X2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function t1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ab(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || t1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function yh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ec));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yh(e, t, n), e = e.sibling; e !== null; ) yh(e, t, n), (e = e.sibling);
}
function bh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bh(e, t, n), e = e.sibling; e !== null; ) bh(e, t, n), (e = e.sibling);
}
var tt = null,
  bn = !1;
function kr(e, t, n) {
  for (n = n.child; n !== null; ) n1(e, t, n), (n = n.sibling);
}
function n1(e, t, n) {
  if ($n && typeof $n.onCommitFiberUnmount == 'function')
    try {
      $n.onCommitFiberUnmount(vc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ut || uo(n, t);
    case 6:
      var r = tt,
        i = bn;
      (tt = null),
        kr(e, t, n),
        (tt = r),
        (bn = i),
        tt !== null &&
          (bn
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (bn
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? kd(e.parentNode, n)
              : e.nodeType === 1 && kd(e, n),
            Ns(e))
          : kd(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (i = bn),
        (tt = n.stateNode.containerInfo),
        (bn = !0),
        kr(e, t, n),
        (tt = r),
        (bn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ut &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && Jx(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      kr(e, t, n);
      break;
    case 1:
      if (
        !ut &&
        (uo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          De(n, t, a);
        }
      kr(e, t, n);
      break;
    case 21:
      kr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((ut = (r = ut) || n.memoizedState !== null), kr(e, t, n), (ut = r))
        : kr(e, t, n);
      break;
    default:
      kr(e, t, n);
  }
}
function lb(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lF()),
      t.forEach(function (r) {
        var i = yF.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function gn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (tt = a.stateNode), (bn = !1);
              break e;
            case 3:
              (tt = a.stateNode.containerInfo), (bn = !0);
              break e;
            case 4:
              (tt = a.stateNode.containerInfo), (bn = !0);
              break e;
          }
          a = a.return;
        }
        if (tt === null) throw Error(L(160));
        n1(o, s, i), (tt = null), (bn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        De(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) r1(t, e), (t = t.sibling);
}
function r1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gn(t, e), Vn(e), 4 & r)) {
        try {
          Ms(3, e, e.return), Cc(3, e);
        } catch (v) {
          De(e, e.return, v);
        }
        try {
          Ms(5, e, e.return);
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 1:
      gn(t, e), Vn(e), 512 & r && n !== null && uo(n, n.return);
      break;
    case 5:
      if (
        (gn(t, e),
        Vn(e),
        512 & r && n !== null && uo(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Vs(i, '');
        } catch (v) {
          De(e, e.return, v);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && kb(i, o),
              Wd(a, s);
            var c = Wd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === 'style'
                ? Pb(i, f)
                : u === 'dangerouslySetInnerHTML'
                ? Eb(i, f)
                : u === 'children'
                ? Vs(i, f)
                : Eh(i, u, f, c);
            }
            switch (a) {
              case 'input':
                zd(i, o);
                break;
              case 'textarea':
                Cb(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? ho(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ho(i, !!o.multiple, o.defaultValue, !0)
                      : ho(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Xs] = o;
          } catch (v) {
            De(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((gn(t, e), Vn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          De(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (gn(t, e), Vn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ns(t.containerInfo);
        } catch (v) {
          De(e, e.return, v);
        }
      break;
    case 4:
      gn(t, e), Vn(e);
      break;
    case 13:
      gn(t, e),
        Vn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (op = Ne())),
        4 & r && lb(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((ut = (c = ut) || u), gn(t, e), (ut = c)) : gn(t, e),
        Vn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (A = e, u = e.child; u !== null; ) {
            for (f = A = u; A !== null; ) {
              switch (((d = A), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ms(4, d, d.return);
                  break;
                case 1:
                  uo(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      De(r, n, v);
                    }
                  }
                  break;
                case 5:
                  uo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ub(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (A = m)) : ub(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = Rb('display', s)));
              } catch (v) {
                De(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? '' : f.memoizedProps;
              } catch (v) {
                De(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      gn(t, e), Vn(e), 4 & r && lb(e);
      break;
    case 21:
      break;
    default:
      gn(t, e), Vn(e);
  }
}
function Vn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (t1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Vs(i, ''), (r.flags &= -33));
          var o = ab(e);
          bh(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ab(e);
          yh(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function uF(e, t, n) {
  (A = e), i1(e, t, n);
}
function i1(e, t, n) {
  for (var r = (1 & e.mode) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ol;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ut;
        a = Ol;
        var c = ut;
        if (((Ol = s), (ut = l) && !c))
          for (A = i; A !== null; )
            (s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fb(i)
                : l !== null
                ? ((l.return = s), (A = l))
                : fb(i);
        for (; o !== null; ) (A = o), i1(o, t, n), (o = o.sibling);
        (A = i), (Ol = a), (ut = c);
      }
      cb(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (A = o))
        : cb(e, t, n);
  }
}
function cb(e) {
  for (; A !== null; ) {
    var t = A;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ut || Cc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !ut)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && X0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                X0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Ns(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        ut || (512 & t.flags && gh(t));
      } catch (d) {
        De(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function ub(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function fb(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cc(4, t);
          } catch (l) {
            De(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              De(t, i, l);
            }
          }
          var o = t.return;
          try {
            gh(t);
          } catch (l) {
            De(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            gh(t);
          } catch (l) {
            De(t, s, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var fF = Math.ceil,
  fc = fr.ReactCurrentDispatcher,
  rp = fr.ReactCurrentOwner,
  ln = fr.ReactCurrentBatchConfig,
  le = 0,
  Ke = null,
  We = null,
  nt = 0,
  zt = 0,
  fo = Nr(0),
  Xe = 0,
  Zs = null,
  Si = 0,
  Tc = 0,
  ip = 0,
  Os = null,
  Pt = null,
  op = 0,
  To = 1 / 0,
  nr = null,
  dc = !1,
  xh = null,
  Dr = null,
  Dl = !1,
  _r = null,
  hc = 0,
  Ds = 0,
  Sh = null,
  jl = -1,
  Wl = 0;
function yt() {
  return 6 & le ? Ne() : jl !== -1 ? jl : (jl = Ne());
}
function Ar(e) {
  return 1 & e.mode
    ? 2 & le && nt !== 0
      ? nt & -nt
      : G2.transition !== null
      ? (Wl === 0 && (Wl = $b()), Wl)
      : ((e = me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yb(e.type))),
        e)
    : 1;
}
function wn(e, t, n, r) {
  if (50 < Ds) throw ((Ds = 0), (Sh = null), Error(L(185)));
  Js(e, n, r),
    (2 & le && e === Ke) ||
      (e === Ke && (!(2 & le) && (Tc |= n), Xe === 4 && Rr(e, nt)),
      Lt(e, r),
      n === 1 && le === 0 && !(1 & t.mode) && ((To = Ne() + 500), Sc && Hr()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  q_(e, t);
  var r = ql(e, e === Ke ? nt : 0);
  if (r === 0)
    n !== null && b0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && b0(n), t === 1))
      e.tag === 0 ? Y2(db.bind(null, e)) : dx(db.bind(null, e)),
        j2(function () {
          !(6 & le) && Hr();
        }),
        (n = null);
    else {
      switch (Nb(r)) {
        case 1:
          n = Ih;
          break;
        case 4:
          n = Bb;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = zb;
          break;
        default:
          n = Kl;
      }
      n = d1(n, o1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function o1(e, t) {
  if (((jl = -1), (Wl = 0), 6 & le)) throw Error(L(327));
  var n = e.callbackNode;
  if (yo() && e.callbackNode !== n) return null;
  var r = ql(e, e === Ke ? nt : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = pc(e, r);
  else {
    t = r;
    var i = le;
    le |= 2;
    var o = a1();
    (Ke === e && nt === t) || ((nr = null), (To = Ne() + 500), vi(e, t));
    do
      try {
        pF();
        break;
      } catch (a) {
        s1(e, a);
      }
    while (1);
    Wh(),
      (fc.current = o),
      (le = i),
      We !== null ? (t = 0) : ((Ke = null), (nt = 0), (t = Xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Kd(e)), i !== 0 && ((r = i), (t = wh(e, i)))), t === 1)
    )
      throw ((n = Zs), vi(e, 0), Rr(e, r), Lt(e, Ne()), n);
    if (t === 6) Rr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !dF(i) &&
          ((t = pc(e, r)),
          t === 2 && ((o = Kd(e)), o !== 0 && ((r = o), (t = wh(e, o)))),
          t === 1))
      )
        throw ((n = Zs), vi(e, 0), Rr(e, r), Lt(e, Ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          di(e, Pt, nr);
          break;
        case 3:
          if (
            (Rr(e, r), (130023424 & r) === r && ((t = op + 500 - Ne()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              yt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = rh(di.bind(null, e, Pt, nr), t);
            break;
          }
          di(e, Pt, nr);
          break;
        case 4:
          if ((Rr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Sn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fF(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rh(di.bind(null, e, Pt, nr), r);
            break;
          }
          di(e, Pt, nr);
          break;
        case 5:
          di(e, Pt, nr);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Lt(e, Ne()), e.callbackNode === n ? o1.bind(null, e) : null;
}
function wh(e, t) {
  var n = Os;
  return (
    e.current.memoizedState.isDehydrated && (vi(e, t).flags |= 256),
    (e = pc(e, t)),
    e !== 2 && ((t = Pt), (Pt = n), t !== null && kh(t)),
    e
  );
}
function kh(e) {
  Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function dF(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!kn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rr(e, t) {
  for (
    t &= ~ip,
      t &= ~Tc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Sn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function db(e) {
  if (6 & le) throw Error(L(327));
  yo();
  var t = ql(e, 0);
  if (!(1 & t)) return Lt(e, Ne()), null;
  var n = pc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kd(e);
    r !== 0 && ((t = r), (n = wh(e, r)));
  }
  if (n === 1) throw ((n = Zs), vi(e, 0), Rr(e, t), Lt(e, Ne()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    di(e, Pt, nr),
    Lt(e, Ne()),
    null
  );
}
function sp(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((To = Ne() + 500), Sc && Hr());
  }
}
function wi(e) {
  _r !== null && _r.tag === 0 && !(6 & le) && yo();
  var t = le;
  le |= 1;
  var n = ln.transition,
    r = me;
  try {
    if (((ln.transition = null), (me = 1), e)) return e();
  } finally {
    (me = r), (ln.transition = n), (le = t), !(6 & le) && Hr();
  }
}
function ap() {
  (zt = fo.current), ke(fo);
}
function vi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), H2(n)), We !== null))
    for (n = We.return; n !== null; ) {
      var r = n;
      switch ((Nh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tc();
          break;
        case 3:
          ko(), ke(Ft), ke(ft), qh();
          break;
        case 5:
          Kh(r);
          break;
        case 4:
          ko();
          break;
        case 13:
          ke(Re);
          break;
        case 19:
          ke(Re);
          break;
        case 10:
          Uh(r.type._context);
          break;
        case 22:
        case 23:
          ap();
      }
      n = n.return;
    }
  if (
    ((Ke = e),
    (We = e = Vr(e.current, null)),
    (nt = zt = t),
    (Xe = 0),
    (Zs = null),
    (ip = Tc = Si = 0),
    (Pt = Os = null),
    pi !== null)
  ) {
    for (t = 0; t < pi.length; t++)
      if (((n = pi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    pi = null;
  }
  return e;
}
function s1(e, t) {
  do {
    var n = We;
    try {
      if ((Wh(), ($l.current = uc), cc)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        cc = !1;
      }
      if (
        ((xi = 0),
        (Ge = Ue = Pe = null),
        (Ls = !1),
        (Ks = 0),
        (rp.current = null),
        n === null || n.return === null)
      ) {
        (Xe = 1), (Zs = t), (We = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = nt),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = J0(s);
          if (m !== null) {
            (m.flags &= -257),
              eb(m, s, a, o, t),
              1 & m.mode && Z0(o, c, t),
              (t = m),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            Z0(o, c, t), lp();
            break e;
          }
          l = Error(L(426));
        } else if (Ee && 1 & a.mode) {
          var S = J0(s);
          if (S !== null) {
            !(65536 & S.flags) && (S.flags |= 256),
              eb(S, s, a, o, t),
              Hh(Co(l, a));
            break e;
          }
        }
        (o = l = Co(l, a)),
          Xe !== 4 && (Xe = 2),
          Os === null ? (Os = [o]) : Os.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Hx(o, l, t);
              U0(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                g = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Dr === null || !Dr.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = jx(o, a, t);
                U0(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      c1(n);
    } catch (k) {
      (t = k), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function a1() {
  var e = fc.current;
  return (fc.current = uc), e === null ? uc : e;
}
function lp() {
  (Xe !== 0 && Xe !== 3 && Xe !== 2) || (Xe = 4),
    Ke === null || (!(268435455 & Si) && !(268435455 & Tc)) || Rr(Ke, nt);
}
function pc(e, t) {
  var n = le;
  le |= 2;
  var r = a1();
  (Ke === e && nt === t) || ((nr = null), vi(e, t));
  do
    try {
      hF();
      break;
    } catch (i) {
      s1(e, i);
    }
  while (1);
  if ((Wh(), (le = n), (fc.current = r), We !== null)) throw Error(L(261));
  return (Ke = null), (nt = 0), Xe;
}
function hF() {
  for (; We !== null; ) l1(We);
}
function pF() {
  for (; We !== null && !N_(); ) l1(We);
}
function l1(e) {
  var t = f1(e.alternate, e, zt);
  (e.memoizedProps = e.pendingProps),
    t === null ? c1(e) : (We = t),
    (rp.current = null);
}
function c1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = aF(n, t)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (e === null) {
        (Xe = 6), (We = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = sF(n, t, zt)), n !== null)) {
      We = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      We = t;
      return;
    }
    We = t = e;
  } while (t !== null);
  Xe === 0 && (Xe = 5);
}
function di(e, t, n) {
  var r = me,
    i = ln.transition;
  try {
    (ln.transition = null), (me = 1), mF(e, t, n, r);
  } finally {
    (ln.transition = i), (me = r);
  }
  return null;
}
function mF(e, t, n, r) {
  do yo();
  while (_r !== null);
  if (6 & le) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Q_(e, o),
    e === Ke && ((We = Ke = null), (nt = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Dl ||
      ((Dl = !0),
      d1(Kl, function () {
        return yo(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = ln.transition), (ln.transition = null);
    var s = me;
    me = 1;
    var a = le;
    (le |= 4),
      (rp.current = null),
      cF(e, n),
      r1(n, e),
      V2(th),
      (Ql = !!eh),
      (th = eh = null),
      (e.current = n),
      uF(n, e, i),
      H_(),
      (le = a),
      (me = s),
      (ln.transition = o);
  } else e.current = n;
  if (
    (Dl && ((Dl = !1), (_r = e), (hc = i)),
    (o = e.pendingLanes),
    o === 0 && (Dr = null),
    U_(n.stateNode, r),
    Lt(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (dc) throw ((dc = !1), (e = xh), (xh = null), e);
  return (
    1 & hc && e.tag !== 0 && yo(),
    (o = e.pendingLanes),
    1 & o ? (e === Sh ? Ds++ : ((Ds = 0), (Sh = e))) : (Ds = 0),
    Hr(),
    null
  );
}
function yo() {
  if (_r !== null) {
    var e = Nb(hc),
      t = ln.transition,
      n = me;
    try {
      if (((ln.transition = null), (me = 16 > e ? 16 : e), _r === null))
        var r = !1;
      else {
        if (((e = _r), (_r = null), (hc = 0), 6 & le)) throw Error(L(331));
        var i = le;
        for (le |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (16 & A.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (A = c; A !== null; ) {
                  var u = A;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ms(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (A = f);
                  else
                    for (; A !== null; ) {
                      u = A;
                      var d = u.sibling,
                        m = u.return;
                      if ((e1(u), u === c)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (A = d);
                        break;
                      }
                      A = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              A = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (A = s);
          else
            e: for (; A !== null; ) {
              if (((o = A), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (A = p);
                break e;
              }
              A = o.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var g = s.child;
          if (2064 & s.subtreeFlags && g !== null) (g.return = s), (A = g);
          else
            e: for (s = h; A !== null; ) {
              if (((a = A), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cc(9, a);
                  }
                } catch (k) {
                  De(a, a.return, k);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (A = x);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((le = i), Hr(), $n && typeof $n.onPostCommitFiberRoot == 'function')
        )
          try {
            $n.onPostCommitFiberRoot(vc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (me = n), (ln.transition = t);
    }
  }
  return !1;
}
function hb(e, t, n) {
  (t = Co(n, t)),
    (t = Hx(e, t, 1)),
    (e = Or(e, t, 1)),
    (t = yt()),
    e !== null && (Js(e, 1, t), Lt(e, t));
}
function De(e, t, n) {
  if (e.tag === 3) hb(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hb(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Dr === null || !Dr.has(r)))
        ) {
          (e = Co(n, e)),
            (e = jx(t, e, 1)),
            (t = Or(t, e, 1)),
            (e = yt()),
            t !== null && (Js(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vF(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = yt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ke === e &&
      (nt & n) === n &&
      (Xe === 4 || (Xe === 3 && (130023424 & nt) === nt && 500 > Ne() - op)
        ? vi(e, 0)
        : (ip |= n)),
    Lt(e, t);
}
function u1(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = Sl), (Sl <<= 1), !(130023424 & Sl) && (Sl = 4194304))
      : (t = 1));
  var n = yt();
  (e = cr(e, t)), e !== null && (Js(e, t, n), Lt(e, n));
}
function gF(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), u1(e, n);
}
function yF(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), u1(e, n);
}
var f1;
f1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ft.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (_t = !1), oF(e, t, n);
      _t = (131072 & e.flags) !== 0;
    }
  else (_t = !1), Ee && 1048576 & t.flags && hx(t, ic, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hl(e, t), (e = t.pendingProps);
      var i = xo(t, ft.current);
      go(t, n), (i = Zh(null, t, r, e, i, n));
      var o = Jh();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            It(r) ? ((o = !0), nc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Yh(t),
            (i.updater = wc),
            (t.stateNode = i),
            (i._reactInternals = t),
            uh(t, r, e, n),
            (t = hh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ee && o && $h(t), gt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = xF(r)),
          (e = yn(r, e)),
          i)
        ) {
          case 0:
            t = dh(null, t, r, e, n);
            break e;
          case 1:
            t = rb(null, t, r, e, n);
            break e;
          case 11:
            t = tb(null, t, r, e, n);
            break e;
          case 14:
            t = nb(null, t, r, yn(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        dh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        rb(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Yx(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          gx(e, t),
          ac(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = Co(Error(L(423)), t)), (t = ib(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = Co(Error(L(424)), t)), (t = ib(e, t, r, n, i));
            break e;
          }
          for (
            $t = Mr(t.stateNode.containerInfo.firstChild),
              Nt = t,
              Ee = !0,
              xn = null,
              n = Sx(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((So(), r === i)) {
            t = ur(e, t, n);
            break e;
          }
          gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wx(t),
        e === null && ah(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        nh(r, i) ? (s = null) : o !== null && nh(r, o) && (t.flags |= 32),
        Xx(e, t),
        gt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ah(t), null;
    case 13:
      return Gx(e, t, n);
    case 4:
      return (
        Gh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wo(t, null, r, n)) : gt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        tb(e, t, r, i, n)
      );
    case 7:
      return gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          be(oc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (kn(o.value, s)) {
            if (o.children === i.children && !Ft.current) {
              t = ur(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = sr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      lh(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  lh(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        gt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        go(t, n),
        (i = cn(i)),
        (r = r(i)),
        (t.flags |= 1),
        gt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = yn(r, t.pendingProps)),
        (i = yn(r.type, i)),
        nb(e, t, r, i, n)
      );
    case 15:
      return Wx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : yn(r, i)),
        Hl(e, t),
        (t.tag = 1),
        It(r) ? ((e = !0), nc(t)) : (e = !1),
        go(t, n),
        bx(t, r, i),
        uh(t, r, i, n),
        hh(null, t, r, !0, e, n)
      );
    case 19:
      return Kx(e, t, n);
    case 22:
      return Ux(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function d1(e, t) {
  return Vb(e, t);
}
function bF(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function an(e, t, n, r) {
  return new bF(e, t, n, r);
}
function cp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xF(e) {
  if (typeof e == 'function') return cp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ph)) return 11;
    if (e === _h) return 14;
  }
  return 2;
}
function Vr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = an(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ul(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) cp(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case to:
        return gi(n.children, i, o, t);
      case Rh:
        (s = 8), (i |= 8);
        break;
      case Od:
        return (
          (e = an(12, n, t, 2 | i)), (e.elementType = Od), (e.lanes = o), e
        );
      case Dd:
        return (e = an(13, n, t, i)), (e.elementType = Dd), (e.lanes = o), e;
      case Ad:
        return (e = an(19, n, t, i)), (e.elementType = Ad), (e.lanes = o), e;
      case xb:
        return Ec(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case yb:
              s = 10;
              break e;
            case bb:
              s = 9;
              break e;
            case Ph:
              s = 11;
              break e;
            case _h:
              s = 14;
              break e;
            case Cr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = an(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function gi(e, t, n, r) {
  return (e = an(7, e, r, t)), (e.lanes = n), e;
}
function Ec(e, t, n, r) {
  return (
    (e = an(22, e, r, t)),
    (e.elementType = xb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Id(e, t, n) {
  return (e = an(6, e, null, t)), (e.lanes = n), e;
}
function Ld(e, t, n) {
  return (
    (t = an(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function SF(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = md(0)),
    (this.expirationTimes = md(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = md(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function up(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new SF(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = an(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yh(o),
    e
  );
}
function wF(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: eo,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function h1(e) {
  if (!e) return zr;
  e = e._reactInternals;
  e: {
    if (Ci(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (It(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (It(n)) return fx(e, n, t);
  }
  return t;
}
function p1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = up(n, r, !0, e, i, o, s, a, l)),
    (e.context = h1(null)),
    (n = e.current),
    (r = yt()),
    (i = Ar(n)),
    (o = sr(r, i)),
    (o.callback = t ?? null),
    Or(n, o, i),
    (e.current.lanes = i),
    Js(e, i, r),
    Lt(e, r),
    e
  );
}
function Rc(e, t, n, r) {
  var i = t.current,
    o = yt(),
    s = Ar(i);
  return (
    (n = h1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Or(i, t, s)),
    e !== null && (wn(e, i, s, o), zl(e, i, s)),
    s
  );
}
function mc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pb(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fp(e, t) {
  pb(e, t), (e = e.alternate) && pb(e, t);
}
function kF() {
  return null;
}
var m1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function dp(e) {
  this._internalRoot = e;
}
Pc.prototype.render = dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Rc(e, t, null, null);
};
Pc.prototype.unmount = dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wi(function () {
      Rc(null, e, null, null);
    }),
      (t[lr] = null);
  }
};
function Pc(e) {
  this._internalRoot = e;
}
Pc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Er.length && t !== 0 && t < Er[n].priority; n++);
    Er.splice(n, 0, e), n === 0 && Xb(e);
  }
};
function hp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _c(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function mb() {}
function CF(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = mc(s);
        o.call(c);
      };
    }
    var s = p1(t, r, e, 0, null, !1, !1, '', mb);
    return (
      (e._reactRootContainer = s),
      (e[lr] = s.current),
      Ws(e.nodeType === 8 ? e.parentNode : e),
      wi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = mc(l);
      a.call(c);
    };
  }
  var l = up(e, 0, !1, null, null, !1, !1, '', mb);
  return (
    (e._reactRootContainer = l),
    (e[lr] = l.current),
    Ws(e.nodeType === 8 ? e.parentNode : e),
    wi(function () {
      Rc(t, l, n, r);
    }),
    l
  );
}
function Fc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = mc(s);
        a.call(l);
      };
    }
    Rc(t, s, e, i);
  } else s = CF(n, t, e, i, r);
  return mc(s);
}
Hb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ts(t.pendingLanes);
        n !== 0 &&
          (Lh(t, 1 | n), Lt(t, Ne()), !(6 & le) && ((To = Ne() + 500), Hr()));
      }
      break;
    case 13:
      wi(function () {
        var r = cr(e, 1);
        if (r !== null) {
          var i = yt();
          wn(r, e, 1, i);
        }
      }),
        fp(e, 1);
  }
};
Mh = function (e) {
  if (e.tag === 13) {
    var t = cr(e, 134217728);
    if (t !== null) {
      var n = yt();
      wn(t, e, 134217728, n);
    }
    fp(e, 134217728);
  }
};
jb = function (e) {
  if (e.tag === 13) {
    var t = Ar(e),
      n = cr(e, t);
    if (n !== null) {
      var r = yt();
      wn(n, e, t, r);
    }
    fp(e, t);
  }
};
Wb = function () {
  return me;
};
Ub = function (e, t) {
  var n = me;
  try {
    return (me = e), t();
  } finally {
    me = n;
  }
};
Xd = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((zd(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = xc(r);
            if (!i) throw Error(L(90));
            wb(r), zd(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Cb(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ho(e, !!n.multiple, t, !1);
  }
};
Ib = sp;
Lb = wi;
var TF = { usingClientEntryPoint: !1, Events: [ta, oo, xc, _b, Fb, sp] },
  Ss = {
    findFiberByHostInstance: hi,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  EF = {
    bundleType: Ss.bundleType,
    version: Ss.version,
    rendererPackageName: Ss.rendererPackageName,
    rendererConfig: Ss.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Db(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ss.findFiberByHostInstance || kF,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
  ((ws = __REACT_DEVTOOLS_GLOBAL_HOOK__), !ws.isDisabled && ws.supportsFiber)
)
  try {
    (vc = ws.inject(EF)), ($n = ws);
  } catch {}
var ws;
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TF;
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hp(t)) throw Error(L(200));
  return wF(e, t, null, n);
};
jt.createRoot = function (e, t) {
  if (!hp(e)) throw Error(L(299));
  var n = !1,
    r = '',
    i = m1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = up(e, 1, !1, null, null, n, !1, r, i)),
    (e[lr] = t.current),
    Ws(e.nodeType === 8 ? e.parentNode : e),
    new dp(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(L(188))
      : ((e = Object.keys(e).join(',')), Error(L(268, e)));
  return (e = Db(t)), (e = e === null ? null : e.stateNode), e;
};
jt.flushSync = function (e) {
  return wi(e);
};
jt.hydrate = function (e, t, n) {
  if (!_c(t)) throw Error(L(200));
  return Fc(null, e, t, !0, n);
};
jt.hydrateRoot = function (e, t, n) {
  if (!hp(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = m1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = p1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[lr] = t.current),
    Ws(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Pc(t);
};
jt.render = function (e, t, n) {
  if (!_c(t)) throw Error(L(200));
  return Fc(null, e, t, !1, n);
};
jt.unmountComponentAtNode = function (e) {
  if (!_c(e)) throw Error(L(40));
  return (
    !!e._reactRootContainer &&
    (wi(function () {
      Fc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[lr] = null);
      });
    }),
    !0)
  );
};
jt.unstable_batchedUpdates = sp;
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_c(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Fc(e, t, n, !1, r);
};
jt.version = '18.2.0-next-9e3b772b8-20220608';
function v1() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == 'function'
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v1);
    } catch (e) {
      console.error(e);
    }
}
v1();
var Ut = jt,
  g1 = Ut,
  RF = Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  PF = Ut.createPortal,
  _F = Ut.createRoot,
  FF = Ut.findDOMNode,
  IF = Ut.flushSync,
  LF = Ut.hydrate,
  MF = Ut.hydrateRoot,
  OF = Ut.render,
  DF = Ut.unmountComponentAtNode,
  AF = Ut.unstable_batchedUpdates,
  VF = Ut.unstable_renderSubtreeIntoContainer,
  BF = Ut.version;
var $F = nn({
    '../../../node_modules/hsluv/dist/hsluv.cjs'(e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = '#000000'),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = '#'),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            m = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / m),
            (this.b0i = (d * n) / m),
            (this.b1s = f / (m + 126452)),
            (this.b1i = ((d - 769860) * n) / (m + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = '0123456789abcdef'),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  NF = nn({
    '../../../node_modules/eventemitter3/index.js'(e, t) {
      'use strict';
      var n = Object.prototype.hasOwnProperty,
        r = '~';
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, m) {
        if (typeof f != 'function')
          throw new TypeError('The listener must be a function');
        var y = new o(f, d || c, m),
          v = r ? r + u : u;
        return (
          c._events[v]
            ? c._events[v].fn
              ? (c._events[v] = [c._events[v], y])
              : c._events[v].push(y)
            : ((c._events[v] = y), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var m = 0, y = d.length, v = new Array(y); m < y; m++)
            v[m] = d[m].fn;
          return v;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, m, y, v) {
          var S = r ? r + u : u;
          if (!this._events[S]) return !1;
          var p = this._events[S],
            h = arguments.length,
            g,
            x;
          if (p.fn) {
            switch ((p.once && this.removeListener(u, p.fn, void 0, !0), h)) {
              case 1:
                return p.fn.call(p.context), !0;
              case 2:
                return p.fn.call(p.context, f), !0;
              case 3:
                return p.fn.call(p.context, f, d), !0;
              case 4:
                return p.fn.call(p.context, f, d, m), !0;
              case 5:
                return p.fn.call(p.context, f, d, m, y), !0;
              case 6:
                return p.fn.call(p.context, f, d, m, y, v), !0;
            }
            for (x = 1, g = new Array(h - 1); x < h; x++)
              g[x - 1] = arguments[x];
            p.fn.apply(p.context, g);
          } else {
            var k = p.length,
              w;
            for (x = 0; x < k; x++)
              switch (
                (p[x].once && this.removeListener(u, p[x].fn, void 0, !0), h)
              ) {
                case 1:
                  p[x].fn.call(p[x].context);
                  break;
                case 2:
                  p[x].fn.call(p[x].context, f);
                  break;
                case 3:
                  p[x].fn.call(p[x].context, f, d);
                  break;
                case 4:
                  p[x].fn.call(p[x].context, f, d, m);
                  break;
                default:
                  if (!g)
                    for (w = 1, g = new Array(h - 1); w < h; w++)
                      g[w - 1] = arguments[w];
                  p[x].fn.apply(p[x].context, g);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, m) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return a(this, y), this;
          var v = this._events[y];
          if (v.fn)
            v.fn === f &&
              (!m || v.once) &&
              (!d || v.context === d) &&
              a(this, y);
          else {
            for (var S = 0, p = [], h = v.length; S < h; S++)
              (v[S].fn !== f ||
                (m && !v[S].once) ||
                (d && v[S].context !== d)) &&
                p.push(v[S]);
            p.length
              ? (this._events[y] = p.length === 1 ? p[0] : p)
              : a(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < 'u' && (t.exports = l);
    },
  }),
  Yp = nn({
    '../../../node_modules/process/browser.js'(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function s() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          typeof setTimeout == 'function' ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == 'function' ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(p) {
        if (r === setTimeout) return setTimeout(p, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(p, 0);
        try {
          return r(p, 0);
        } catch {
          try {
            return r.call(null, p, 0);
          } catch {
            return r.call(this, p, 0);
          }
        }
      }
      function l(p) {
        if (i === clearTimeout) return clearTimeout(p);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(p);
        try {
          return i(p);
        } catch {
          try {
            return i.call(null, p);
          } catch {
            return i.call(this, p);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function m() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var p = a(m);
          u = !0;
          for (var h = c.length; h; ) {
            for (f = c, c = []; ++d < h; ) f && f[d].run();
            (d = -1), (h = c.length);
          }
          (f = null), (u = !1), l(p);
        }
      }
      n.nextTick = function (p) {
        var h = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var g = 1; g < arguments.length; g++) h[g - 1] = arguments[g];
        c.push(new v(p, h)), c.length === 1 && !u && a(y);
      };
      function v(p, h) {
        (this.fun = p), (this.array = h);
      }
      (v.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = 'browser'),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ''),
        (n.versions = {});
      function S() {}
      (n.on = S),
        (n.addListener = S),
        (n.once = S),
        (n.off = S),
        (n.removeListener = S),
        (n.removeAllListeners = S),
        (n.emit = S),
        (n.prependListener = S),
        (n.prependOnceListener = S),
        (n.listeners = function (p) {
          return [];
        }),
        (n.binding = function (p) {
          throw new Error('process.binding is not supported');
        }),
        (n.cwd = function () {
          return '/';
        }),
        (n.chdir = function (p) {
          throw new Error('process.chdir is not supported');
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  HF = nn({
    '../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js'(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == 'object' && typeof t < 'u'
          ? r(e)
          : typeof define == 'function' && define.amd
          ? define(['exports'], r)
          : ((n = typeof globalThis < 'u' ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        'use strict';
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = 'ResizeObserver loop completed with undelivered notifications.',
          a = function () {
            var P;
            typeof ErrorEvent == 'function'
              ? (P = new ErrorEvent('error', { message: s }))
              : ((P = document.createEvent('Event')),
                P.initEvent('error', !1, !1),
                (P.message = s)),
              window.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = 'border-box'),
            (P.CONTENT_BOX = 'content-box'),
            (P.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(_, M) {
              (this.inlineSize = _), (this.blockSize = M), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(_, M, z, se) {
              return (
                (this.x = _),
                (this.y = M),
                (this.width = z),
                (this.height = se),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var _ = this,
                  M = _.x,
                  z = _.y,
                  se = _.top,
                  dt = _.right,
                  Ze = _.bottom,
                  ze = _.left,
                  qn = _.width,
                  At = _.height;
                return {
                  x: M,
                  y: z,
                  top: se,
                  right: dt,
                  bottom: Ze,
                  left: ze,
                  width: qn,
                  height: At,
                };
              }),
              (P.fromRect = function (_) {
                return new P(_.x, _.y, _.width, _.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && 'getBBox' in P;
          },
          m = function (P) {
            if (d(P)) {
              var _ = P.getBBox(),
                M = _.width,
                z = _.height;
              return !M && !z;
            }
            var se = P,
              dt = se.offsetWidth,
              Ze = se.offsetHeight;
            return !(dt || Ze || P.getClientRects().length);
          },
          y = function (P) {
            var _, M;
            if (P instanceof Element) return !0;
            var z =
              (M =
                (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) ===
                null || M === void 0
                ? void 0
                : M.defaultView;
            return !!(z && P instanceof z.Element);
          },
          v = function (P) {
            switch (P.tagName) {
              case 'INPUT':
                if (P.type !== 'image') break;
              case 'VIDEO':
              case 'AUDIO':
              case 'EMBED':
              case 'OBJECT':
              case 'CANVAS':
              case 'IFRAME':
              case 'IMG':
                return !0;
            }
            return !1;
          },
          S = typeof window < 'u' ? window : {},
          p = new WeakMap(),
          h = /auto|scroll/,
          g = /^tb|vertical/,
          x = /msie|trident/i.test(S.navigator && S.navigator.userAgent),
          k = function (P) {
            return parseFloat(P || '0');
          },
          w = function (P, _, M) {
            return (
              P === void 0 && (P = 0),
              _ === void 0 && (_ = 0),
              M === void 0 && (M = !1),
              new u((M ? _ : P) || 0, (M ? P : _) || 0)
            );
          },
          T = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          E = function (P, _) {
            if ((_ === void 0 && (_ = !1), p.has(P) && !_)) return p.get(P);
            if (m(P)) return p.set(P, T), T;
            var M = getComputedStyle(P),
              z = d(P) && P.ownerSVGElement && P.getBBox(),
              se = !x && M.boxSizing === 'border-box',
              dt = g.test(M.writingMode || ''),
              Ze = !z && h.test(M.overflowY || ''),
              ze = !z && h.test(M.overflowX || ''),
              qn = z ? 0 : k(M.paddingTop),
              At = z ? 0 : k(M.paddingRight),
              Zr = z ? 0 : k(M.paddingBottom),
              Oi = z ? 0 : k(M.paddingLeft),
              Tk = z ? 0 : k(M.borderTopWidth),
              Ek = z ? 0 : k(M.borderRightWidth),
              Rk = z ? 0 : k(M.borderBottomWidth),
              Pk = z ? 0 : k(M.borderLeftWidth),
              ym = Oi + At,
              bm = qn + Zr,
              xu = Pk + Ek,
              Su = Tk + Rk,
              xm = ze ? P.offsetHeight - Su - P.clientHeight : 0,
              Sm = Ze ? P.offsetWidth - xu - P.clientWidth : 0,
              _k = se ? ym + xu : 0,
              Fk = se ? bm + Su : 0,
              Pa = z ? z.width : k(M.width) - _k - Sm,
              _a = z ? z.height : k(M.height) - Fk - xm,
              Ik = Pa + ym + Sm + xu,
              Lk = _a + bm + xm + Su,
              wm = c({
                devicePixelContentBoxSize: w(
                  Math.round(Pa * devicePixelRatio),
                  Math.round(_a * devicePixelRatio),
                  dt
                ),
                borderBoxSize: w(Ik, Lk, dt),
                contentBoxSize: w(Pa, _a, dt),
                contentRect: new f(Oi, qn, Pa, _a),
              });
            return p.set(P, wm), wm;
          },
          I = function (P, _, M) {
            var z = E(P, M),
              se = z.borderBoxSize,
              dt = z.contentBoxSize,
              Ze = z.devicePixelContentBoxSize;
            switch (_) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return Ze;
              case l.BORDER_BOX:
                return se;
              default:
                return dt;
            }
          },
          F = (function () {
            function P(_) {
              var M = E(_);
              (this.target = _),
                (this.contentRect = M.contentRect),
                (this.borderBoxSize = c([M.borderBoxSize])),
                (this.contentBoxSize = c([M.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  M.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          B = function (P) {
            if (m(P)) return 1 / 0;
            for (var _ = 0, M = P.parentNode; M; ) (_ += 1), (M = M.parentNode);
            return _;
          },
          V = function () {
            var P = 1 / 0,
              _ = [];
            r.forEach(function (Ze) {
              if (Ze.activeTargets.length !== 0) {
                var ze = [];
                Ze.activeTargets.forEach(function (At) {
                  var Zr = new F(At.target),
                    Oi = B(At.target);
                  ze.push(Zr),
                    (At.lastReportedSize = I(At.target, At.observedBox)),
                    Oi < P && (P = Oi);
                }),
                  _.push(function () {
                    Ze.callback.call(Ze.observer, ze, Ze.observer);
                  }),
                  Ze.activeTargets.splice(0, Ze.activeTargets.length);
              }
            });
            for (var M = 0, z = _; M < z.length; M++) {
              var se = z[M];
              se();
            }
            return P;
          },
          Z = function (P) {
            r.forEach(function (M) {
              M.activeTargets.splice(0, M.activeTargets.length),
                M.skippedTargets.splice(0, M.skippedTargets.length),
                M.observationTargets.forEach(function (se) {
                  se.isActive() &&
                    (B(se.target) > P
                      ? M.activeTargets.push(se)
                      : M.skippedTargets.push(se));
                });
            });
          },
          te = function () {
            var P = 0;
            for (Z(P); i(); ) (P = V()), Z(P);
            return o() && a(), P > 0;
          },
          j,
          ie = [],
          U = function () {
            return ie.splice(0).forEach(function (P) {
              return P();
            });
          },
          X = function (P) {
            if (!j) {
              var _ = 0,
                M = document.createTextNode(''),
                z = { characterData: !0 };
              new MutationObserver(function () {
                return U();
              }).observe(M, z),
                (j = function () {
                  M.textContent = '' + (_ ? _-- : _++);
                });
            }
            ie.push(P), j();
          },
          N = function (P) {
            X(function () {
              requestAnimationFrame(P);
            });
          },
          J = 0,
          he = function () {
            return !!J;
          },
          ue = 250,
          ne = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          re = [
            'resize',
            'load',
            'transitionend',
            'animationend',
            'animationstart',
            'animationiteration',
            'keyup',
            'keydown',
            'mouseup',
            'mousedown',
            'mouseover',
            'mouseout',
            'blur',
            'focus',
          ],
          qt = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          fe = !1,
          Ct = (function () {
            function P() {
              var _ = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return _.schedule();
                });
            }
            return (
              (P.prototype.run = function (_) {
                var M = this;
                if ((_ === void 0 && (_ = ue), !fe)) {
                  fe = !0;
                  var z = qt(_);
                  N(function () {
                    var se = !1;
                    try {
                      se = te();
                    } finally {
                      if (((fe = !1), (_ = z - qt()), !he())) return;
                      se ? M.run(1e3) : _ > 0 ? M.run(_) : M.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var _ = this,
                  M = function () {
                    return _.observer && _.observer.observe(document.body, ne);
                  };
                document.body ? M() : S.addEventListener('DOMContentLoaded', M);
              }),
              (P.prototype.start = function () {
                var _ = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  re.forEach(function (M) {
                    return S.addEventListener(M, _.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var _ = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  re.forEach(function (M) {
                    return S.removeEventListener(M, _.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          Q = new Ct(),
          Qt = function (P) {
            !J && P > 0 && Q.start(), (J += P), !J && Q.stop();
          },
          hn = function (P) {
            return !d(P) && !v(P) && getComputedStyle(P).display === 'inline';
          },
          Gn = (function () {
            function P(_, M) {
              (this.target = _),
                (this.observedBox = M || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var _ = I(this.target, this.observedBox, !0);
                return (
                  hn(this.target) && (this.lastReportedSize = _),
                  this.lastReportedSize.inlineSize !== _.inlineSize ||
                    this.lastReportedSize.blockSize !== _.blockSize
                );
              }),
              P
            );
          })(),
          Mi = (function () {
            function P(_, M) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = _),
                (this.callback = M);
            }
            return P;
          })(),
          pn = new WeakMap(),
          Dt = function (P, _) {
            for (var M = 0; M < P.length; M += 1)
              if (P[M].target === _) return M;
            return -1;
          },
          Kn = (function () {
            function P() {}
            return (
              (P.connect = function (_, M) {
                var z = new Mi(_, M);
                pn.set(_, z);
              }),
              (P.observe = function (_, M, z) {
                var se = pn.get(_),
                  dt = se.observationTargets.length === 0;
                Dt(se.observationTargets, M) < 0 &&
                  (dt && r.push(se),
                  se.observationTargets.push(new Gn(M, z && z.box)),
                  Qt(1),
                  Q.schedule());
              }),
              (P.unobserve = function (_, M) {
                var z = pn.get(_),
                  se = Dt(z.observationTargets, M),
                  dt = z.observationTargets.length === 1;
                se >= 0 &&
                  (dt && r.splice(r.indexOf(z), 1),
                  z.observationTargets.splice(se, 1),
                  Qt(-1));
              }),
              (P.disconnect = function (_) {
                var M = this,
                  z = pn.get(_);
                z.observationTargets.slice().forEach(function (se) {
                  return M.unobserve(_, se.target);
                }),
                  z.activeTargets.splice(0, z.activeTargets.length);
              }),
              P
            );
          })(),
          bu = (function () {
            function P(_) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof _ != 'function')
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              Kn.connect(this, _);
            }
            return (
              (P.prototype.observe = function (_, M) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Kn.observe(this, _, M);
              }),
              (P.prototype.unobserve = function (_) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Kn.unobserve(this, _);
              }),
              (P.prototype.disconnect = function () {
                Kn.disconnect(this);
              }),
              (P.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }';
              }),
              P
            );
          })();
        (n.ResizeObserver = bu),
          (n.ResizeObserverEntry = F),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, '__esModule', { value: !0 });
      });
    },
  }),
  jF = nn({
    '../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js'(
      e
    ) {
      'use strict';
      var t = typeof Symbol == 'function' && Symbol.for,
        n = t ? Symbol.for('react.element') : 60103,
        r = t ? Symbol.for('react.portal') : 60106,
        i = t ? Symbol.for('react.fragment') : 60107,
        o = t ? Symbol.for('react.strict_mode') : 60108,
        s = t ? Symbol.for('react.profiler') : 60114,
        a = t ? Symbol.for('react.provider') : 60109,
        l = t ? Symbol.for('react.context') : 60110,
        c = t ? Symbol.for('react.async_mode') : 60111,
        u = t ? Symbol.for('react.concurrent_mode') : 60111,
        f = t ? Symbol.for('react.forward_ref') : 60112,
        d = t ? Symbol.for('react.suspense') : 60113,
        m = t ? Symbol.for('react.suspense_list') : 60120,
        y = t ? Symbol.for('react.memo') : 60115,
        v = t ? Symbol.for('react.lazy') : 60116,
        S = t ? Symbol.for('react.block') : 60121,
        p = t ? Symbol.for('react.fundamental') : 60117,
        h = t ? Symbol.for('react.responder') : 60118,
        g = t ? Symbol.for('react.scope') : 60119;
      function x(w) {
        if (typeof w == 'object' && w !== null) {
          var T = w.$$typeof;
          switch (T) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case v:
                    case y:
                    case a:
                      return w;
                    default:
                      return T;
                  }
              }
            case r:
              return T;
          }
        }
      }
      function k(w) {
        return x(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = v),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || x(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return x(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return x(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == 'object' && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return x(w) === f;
        }),
        (e.isFragment = function (w) {
          return x(w) === i;
        }),
        (e.isLazy = function (w) {
          return x(w) === v;
        }),
        (e.isMemo = function (w) {
          return x(w) === y;
        }),
        (e.isPortal = function (w) {
          return x(w) === r;
        }),
        (e.isProfiler = function (w) {
          return x(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return x(w) === o;
        }),
        (e.isSuspense = function (w) {
          return x(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == 'string' ||
            typeof w == 'function' ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === m ||
            (typeof w == 'object' &&
              w !== null &&
              (w.$$typeof === v ||
                w.$$typeof === y ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === p ||
                w.$$typeof === h ||
                w.$$typeof === g ||
                w.$$typeof === S))
          );
        }),
        (e.typeOf = x);
    },
  }),
  WF = nn({
    '../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js'(
      e,
      t
    ) {
      'use strict';
      t.exports = jF();
    },
  }),
  ou = nn({
    '../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(
      e,
      t
    ) {
      'use strict';
      var n = WF(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(S) {
        return n.isMemo(S) ? s : a[S.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        y = Object.prototype;
      function v(S, p, h) {
        if (typeof p != 'string') {
          if (y) {
            var g = m(p);
            g && g !== y && v(S, g, h);
          }
          var x = u(p);
          f && (x = x.concat(f(p)));
          for (var k = l(S), w = l(p), T = 0; T < x.length; ++T) {
            var E = x[T];
            if (!i[E] && !(h && h[E]) && !(w && w[E]) && !(k && k[E])) {
              var I = d(p, E);
              try {
                c(S, E, I);
              } catch {}
            }
          }
        }
        return S;
      }
      t.exports = v;
    },
  }),
  UF = nn({
    '../../../node_modules/archy/index.js'(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ''), o || (o = {});
        var s = function (u) {
          var f = {
            '\u2502': '|',
            '\u2514': '`',
            '\u251C': '+',
            '\u2500': '-',
            '\u252C': '-',
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == 'string' && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || '').split(`
`),
          c =
            `
` +
            i +
            (a.length ? s('\u2502') : ' ') +
            ' ';
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                m = u.nodes && u.nodes.length,
                y = i + (d ? ' ' : s('\u2502')) + ' ';
              return (
                i +
                s(d ? '\u2514' : '\u251C') +
                s('\u2500') +
                s(m ? '\u252C' : '\u2500') +
                ' ' +
                n(u, y, o).slice(i.length + 2)
              );
            })
            .join('')
        );
      };
    },
  }),
  XF = nn({
    '../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js'(
      e,
      t
    ) {
      (function () {
        function n(p, h) {
          document.addEventListener
            ? p.addEventListener('scroll', h, !1)
            : p.attachEvent('scroll', h);
        }
        function r(p) {
          document.body
            ? p()
            : document.addEventListener
            ? document.addEventListener('DOMContentLoaded', function h() {
                document.removeEventListener('DOMContentLoaded', h), p();
              })
            : document.attachEvent('onreadystatechange', function h() {
                (document.readyState == 'interactive' ||
                  document.readyState == 'complete') &&
                  (document.detachEvent('onreadystatechange', h), p());
              });
        }
        function i(p) {
          (this.a = document.createElement('div')),
            this.a.setAttribute('aria-hidden', 'true'),
            this.a.appendChild(document.createTextNode(p)),
            (this.b = document.createElement('span')),
            (this.c = document.createElement('span')),
            (this.h = document.createElement('span')),
            (this.f = document.createElement('span')),
            (this.g = -1),
            (this.b.style.cssText =
              'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.c.style.cssText =
              'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.f.style.cssText =
              'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
            (this.h.style.cssText =
              'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;'),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(p, h) {
          p.a.style.cssText =
            'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' +
            h +
            ';';
        }
        function s(p) {
          var h = p.a.offsetWidth,
            g = h + 100;
          return (
            (p.f.style.width = g + 'px'),
            (p.c.scrollLeft = g),
            (p.b.scrollLeft = p.b.scrollWidth + 100),
            p.g !== h ? ((p.g = h), !0) : !1
          );
        }
        function a(p, h) {
          function g() {
            var k = x;
            s(k) && k.a.parentNode && h(k.g);
          }
          var x = p;
          n(p.b, g), n(p.c, g), s(p);
        }
        function l(p, h) {
          var g = h || {};
          (this.family = p),
            (this.style = g.style || 'normal'),
            (this.weight = g.weight || 'normal'),
            (this.stretch = g.stretch || 'normal');
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function m() {
          if (u === null)
            if (y() && /Apple/.test(window.navigator.vendor)) {
              var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              );
              u = !!p && 603 > parseInt(p[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return d === null && (d = !!document.fonts), d;
        }
        function v() {
          if (f === null) {
            var p = document.createElement('div');
            try {
              p.style.font = 'condensed 100px sans-serif';
            } catch {}
            f = p.style.font !== '';
          }
          return f;
        }
        function S(p, h) {
          return [p.style, p.weight, v() ? p.stretch : '', '100px', h].join(
            ' '
          );
        }
        (l.prototype.load = function (p, h) {
          var g = this,
            x = p || 'BESbswy',
            k = 0,
            w = h || 3e3,
            T = new Date().getTime();
          return new Promise(function (E, I) {
            if (y() && !m()) {
              var F = new Promise(function (V, Z) {
                  function te() {
                    new Date().getTime() - T >= w
                      ? Z(Error('' + w + 'ms timeout exceeded'))
                      : document.fonts
                          .load(S(g, '"' + g.family + '"'), x)
                          .then(function (j) {
                            1 <= j.length ? V() : setTimeout(te, 25);
                          }, Z);
                  }
                  te();
                }),
                B = new Promise(function (V, Z) {
                  k = setTimeout(function () {
                    Z(Error('' + w + 'ms timeout exceeded'));
                  }, w);
                });
              Promise.race([B, F]).then(function () {
                clearTimeout(k), E(g);
              }, I);
            } else
              r(function () {
                function V() {
                  var re;
                  (re =
                    (U != -1 && X != -1) ||
                    (U != -1 && N != -1) ||
                    (X != -1 && N != -1)) &&
                    ((re = U != X && U != N && X != N) ||
                      (c === null &&
                        ((re = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                        (c =
                          !!re &&
                          (536 > parseInt(re[1], 10) ||
                            (parseInt(re[1], 10) === 536 &&
                              11 >= parseInt(re[2], 10))))),
                      (re =
                        c &&
                        ((U == J && X == J && N == J) ||
                          (U == he && X == he && N == he) ||
                          (U == ue && X == ue && N == ue)))),
                    (re = !re)),
                    re &&
                      (ne.parentNode && ne.parentNode.removeChild(ne),
                      clearTimeout(k),
                      E(g));
                }
                function Z() {
                  if (new Date().getTime() - T >= w)
                    ne.parentNode && ne.parentNode.removeChild(ne),
                      I(Error('' + w + 'ms timeout exceeded'));
                  else {
                    var re = document.hidden;
                    (re === !0 || re === void 0) &&
                      ((U = te.a.offsetWidth),
                      (X = j.a.offsetWidth),
                      (N = ie.a.offsetWidth),
                      V()),
                      (k = setTimeout(Z, 50));
                  }
                }
                var te = new i(x),
                  j = new i(x),
                  ie = new i(x),
                  U = -1,
                  X = -1,
                  N = -1,
                  J = -1,
                  he = -1,
                  ue = -1,
                  ne = document.createElement('div');
                (ne.dir = 'ltr'),
                  o(te, S(g, 'sans-serif')),
                  o(j, S(g, 'serif')),
                  o(ie, S(g, 'monospace')),
                  ne.appendChild(te.a),
                  ne.appendChild(j.a),
                  ne.appendChild(ie.a),
                  document.body.appendChild(ne),
                  (J = te.a.offsetWidth),
                  (he = j.a.offsetWidth),
                  (ue = ie.a.offsetWidth),
                  Z(),
                  a(te, function (re) {
                    (U = re), V();
                  }),
                  o(te, S(g, '"' + g.family + '",sans-serif')),
                  a(j, function (re) {
                    (X = re), V();
                  }),
                  o(j, S(g, '"' + g.family + '",serif')),
                  a(ie, function (re) {
                    (N = re), V();
                  }),
                  o(ie, S(g, '"' + g.family + '",monospace'));
              });
          });
        }),
          typeof t == 'object'
            ? (t.exports = l)
            : ((window.FontFaceObserver = l),
              (window.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function Op(e, t) {
  let n = { style: t };
  return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n);
}
var YF = class extends Error {},
  BS = class extends Error {},
  GF = class extends ye {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof YF)) {
        let n = new BS();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return Op(e, t);
    }
  },
  KF = ':([a-z]\\w*)',
  Pi = new RegExp(KF, 'gi');
function zS(e, t) {
  return e.replace(Pi, (n, r) => {
    let i = t[r];
    return typeof i != 'string' || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function $S(e, t) {
  if (!e.startsWith('/') || !t.startsWith('/'))
    throw new Error('from/to paths are expected to be absolute');
  let [n] = y1(e),
    [r, i] = y1(t),
    o = qF(n, r);
  return (
    o === '' && (o = '.'),
    !o.startsWith('.') && !o.startsWith('/') && (o = './' + o),
    o + '/' + i
  );
}
function y1(e) {
  let t = e.lastIndexOf('/');
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var pp = 46,
  Lo = 47,
  Kr = (e, t) => e.charCodeAt(t),
  b1 = (e, t) => e.lastIndexOf(t),
  Oo = (e, t, n) => e.slice(t, n);
function qF(e, t) {
  if (e === t || ((e = '/' + S1(e)), (t = '/' + S1(t)), e === t)) return '';
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = Kr(e, n + c);
    if (f !== Kr(t, o + c)) break;
    f === Lo && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (Kr(t, o + c) === Lo) return Oo(t, o + c + 1);
      if (c === 0) return Oo(t, o + c);
    } else i > a && (Kr(e, n + c) === Lo ? (l = c) : c === 0 && (l = 0));
  let u = '';
  for (c = n + l + 1; c <= r; ++c)
    (c === r || Kr(e, c) === Lo) && (u += u.length === 0 ? '..' : '/..');
  return `${u}${Oo(t, o + l)}`;
}
var QF = !1,
  Ic = '/',
  x1 = (e) => e === Lo;
function S1(e) {
  let t = '',
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = Kr(e, s);
    else {
      if (x1(o)) break;
      o = Lo;
    }
    if (x1(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Kr(t, t.length - 1) !== pp ||
            Kr(t, t.length - 2) !== pp
          ) {
            if (t.length > 2) {
              let a = b1(t, Ic);
              a === -1
                ? ((t = ''), (n = 0))
                : ((t = Oo(t, 0, a)), (n = t.length - 1 - b1(t, Ic))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ''), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          QF && ((t += t.length > 0 ? `${Ic}..` : '..'), (n = 2));
        } else
          t.length > 0
            ? (t += `${Ic}${Oo(e, r + 1, s)}`)
            : (t = Oo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === pp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function NS(e) {
  let t = typeof window < 'u' ? window.location.search : '';
  return t ? ZF(t, e) : e;
}
function ZF(e, t) {
  let n = t.indexOf('#'),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? '' : t.substring(n),
    o = r.indexOf('?');
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function Kc(e) {
  return typeof e == 'object' && e !== null && !Array.isArray(e);
}
function sa(e) {
  return typeof e == 'string';
}
var JF = 'preload';
function HS(e) {
  return typeof e == 'object' && e !== null && !b.isValidElement(e) && JF in e;
}
function hz(e) {
  let t = b.lazy(e),
    n,
    r,
    i = b.forwardRef(function (s, a) {
      return b.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function su(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function eI(e) {
  return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/iu.test(
    e
  );
}
function tI(e) {
  if ('scheduler' in window) {
    let t = { priority: e ? 'user-blocking' : 'user-visible' };
    if ('yield' in scheduler) return scheduler.yield(t);
    if ('postTask' in scheduler) return scheduler.postTask(() => {}, t);
  }
  return e
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t, 0);
      });
}
async function nI(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    m = Array.from(u.matchAll(Pi)),
    y = await Promise.all(
      m.map(async (h) => {
        var g;
        let x = h?.[0],
          k = h?.[1];
        if (!x || !k)
          throw new Error(
            'Failed to replace path variables: unexpected regex match group'
          );
        let w = o[k];
        if (!w || !sa(w))
          throw new Error(`No slug found for path variable ${k}`);
        let T = await ((g = s?.[i]) === null || g === void 0
          ? void 0
          : g.call(s));
        if (!T || !t) return w;
        let E = await T.getRecordIdBySlug(w, t);
        if (!E) return w;
        let I = await T.getSlugByRecordId(E, n);
        if (!I) {
          f = !0;
          let F = await T.getSlugByRecordId(E, r);
          return F && (d[k] = F), F ?? w;
        }
        return (d[k] = I), I;
      })
    ),
    v = 0,
    S = '',
    p = !1;
  for (let h = 0; h < m.length; h++) {
    let g = m[h],
      x = y[h];
    !g ||
      !x ||
      ((S += u.substring(v, g.index)),
      (v =
        ((a = g.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = g[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (S += y[h]),
      (p = !0));
  }
  return p && (u = S), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function rI({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await nI(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = '/' + t.slug + l.path),
    s && l.path && (l.path = NS(l.path)),
    l
  );
}
function iI(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var oI = { global: void 0, routes: {} },
  jS = b.createContext(oI);
function gz({ children: e, value: t }) {
  return C(jS.Provider, { value: t, children: e });
}
function sI() {
  return b.useContext(jS);
}
var mp = 10,
  aI = 1e4;
function lI(e) {
  let t = mp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < aI; ) (n = e.next(t)), r.push(n.value), (t += mp);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(',')})`, duration: t - mp }
  );
}
var pr = (e) => `--view-transition-${e}`;
function Dp(e) {
  return [parseFloat(e), e.endsWith('px') ? 'px' : '%'];
}
function WS(e) {
  let { innerWidth: t, innerHeight: n } = window,
    [r, i] = Dp(e.x),
    [o, s] = Dp(e.y);
  return {
    x: i === 'px' ? r : t * (r / 100),
    y: s === 'px' ? o : n * (o / 100),
  };
}
var cI = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === 'exit' &&
          e.angularDirection === 'clockwise' &&
          t === 'start') ||
          (n === 'exit' &&
            e.angularDirection === 'counter-clockwise' &&
            t === 'end') ||
          (n === 'enter' &&
            e.angularDirection === 'counter-clockwise' &&
            t === 'start') ||
          (n === 'enter' &&
            e.angularDirection === 'clockwise' &&
            t === 'end')) &&
          (r = (e.sweepAngle / 360) * 100),
        `${pr('conic-offset')}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${pr('conic-offset')})`,
        r =
          (t === 'exit' && e.angularDirection === 'clockwise') ||
          (t === 'enter' && e.angularDirection === 'counter-clockwise'),
        i = r ? 'transparent' : 'black',
        o = r ? 'black' : 'transparent',
        s = 'conic-gradient(from ';
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${pr('conic-offset')} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  uI = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = WS(e);
      return t === 'start'
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, window.innerWidth - n),
            Math.max(r, window.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  fI = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = WS(e),
        i = window.innerHeight - r,
        o = window.innerWidth - n;
      return t === 'start'
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : 'clip-path: inset(0 round 0);';
    },
  },
  dI = {
    makeKeyframe: (e, t, n) => {
      let [, r] = Dp(e.width),
        i = `0${r}`;
      return (
        ((t === 'start' && n === 'exit') || (t === 'end' && n === 'enter')) &&
          (i = e.width),
        `${pr('blinds-width')}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${pr('blinds-width')})`,
        r = t === 'exit' ? 'transparent' : 'black',
        i = t === 'exit' ? 'black' : 'transparent',
        o = 'repeating-linear-gradient(';
      return (
        (o += e.angle + 90 + 'deg, '),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${pr('blinds-width')} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  hI = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === 'start' && n === 'exit') || (t === 'end' && n === 'enter')
          ? 1
          : 0;
      return `${pr('wipe-offset')}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${pr('wipe-offset')})`,
        r = t === 'exit' ? 'transparent' : 'black',
        i = t === 'exit' ? 'black' : 'transparent',
        o = 'linear-gradient(';
      return (
        (o += e.angle + 90 + 'deg, '),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${pr('wipe-offset')} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  pI = { circle: uI, conic: cI, inset: fI, blinds: dI, wipe: hI },
  mI = {
    opacity: 1,
    x: '0px',
    y: '0px',
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function w1(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ''),
    o
  );
}
function vI(e) {
  return e ? pI[e] : void 0;
}
function k1(e, { transition: t, ...n }) {
  var r;
  let i = 'view-transition-' + e,
    o = { duration: '0s', easing: 'linear' };
  if (t.type === 'tween')
    (o.duration = t.duration + 's'),
      (o.easing = `cubic-bezier(${t.ease.join(',')})`);
  else if (t.type === 'spring') {
    let { easing: c, duration: u } = lI(
      us({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + 'ms'), (o.easing = c);
  }
  let s = vI((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = w1(n, 'start', e, s),
    l = w1({ ...mI, mask: n.mask }, 'end', e, s);
  return (
    e === 'exit' && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ''}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === 'enter' ? 'new' : 'old'}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ''}
        }
    `
  );
}
var US = 'view-transition-styles',
  gI = {
    x: '0px',
    y: '0px',
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: 'tween',
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function yI({ exit: e = gI, enter: t }) {
  let n = document.createElement('style');
  n.id = US;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += k1('exit', e)),
    (r += k1('enter', t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function bI() {
  Y.render(() => {
    let e = document.getElementById(US);
    e && document.head.removeChild(e);
  });
}
function xI() {
  return !!document.startViewTransition;
}
function SI(e, t) {
  if (!xI()) return void e();
  yI(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then(bI)
      .catch(() => {}),
    n
  );
}
function XS() {
  let e = sI(),
    t = D(void 0);
  return (
    $(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    ge(
      (n, r, i) => {
        let o = iI(n, r, e);
        if (o) {
          let s = new Promise((l) => {
            t.current = l;
          });
          return SI(async () => {
            i(), await s;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function C1(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  }
) {
  let { path: l } = t;
  if (l)
    try {
      let c = au(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: o,
        preserveQueryParams: a,
      });
      YS({ routeId: e, hash: i, pathVariables: o, localeId: s }, c);
    } catch {}
}
function wI(e, t) {
  window.history.replaceState(e, '', t);
}
function YS(e, t) {
  window.history.pushState(e, '', t);
}
function kI({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  b.useLayoutEffect(() => {
    e || wI({ routeId: t, pathVariables: n, localeId: r });
  }, []);
}
function CI(e, t) {
  let n = XS(),
    r = b.useRef(void 0),
    i = b.useCallback(
      ({ state: s }) => {
        var a, l, c;
        if (!Kc(s)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: m } = s;
        if (!sa(u)) return;
        let y = () => {
            t(
              u,
              sa(m) ? m : void 0,
              sa(f) ? f : void 0,
              Kc(d) ? d : void 0,
              !1,
              !0
            );
          },
          v = n(e.current, u, y);
        v
          ? v.updateCallbackDone
              .then(
                (a = r.current) === null || a === void 0 ? void 0 : a.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = ge((s) => {
      s.navigationType === 'traverse' &&
        s.intercept({
          async handler() {
            await new Promise((a, l) => {
              r.current = { resolve: a, reject: l };
            });
          },
          scroll: 'after-transition',
        });
    }, []);
  b.useEffect(() => {
    var s;
    return (
      window.addEventListener('popstate', i),
      (s = window.navigation) === null ||
        s === void 0 ||
        s.addEventListener('navigate', o),
      () => {
        var a;
        window.removeEventListener('popstate', i),
          (a = window.navigation) === null ||
            a === void 0 ||
            a.removeEventListener('navigate', o);
      }
    );
  }, [i, o]);
}
function TI(e, t, n) {
  let r = su(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Pi, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function au(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? '/';
  n && (c = c.replace(Pi, (y, v) => String(n[v] || y)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : '/';
  i && (f = f.replace(Pi, (y, v) => String(i[v] || y)));
  let d = TI(r, e, o),
    m = c === f && d;
  return (
    s && (f = $S(c, f)), (a || m) && (f = NS(f)), d && (f = `${f}#${d}`), f
  );
}
async function EI(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ''}${zS(e.path, t)}`;
  return (await fetch(i, { method: 'HEAD', redirect: 'manual' })).type ===
    'opaqueredirect'
    ? ((window.location.href = window.location.origin + i), !0)
    : !1;
}
async function RI(e) {
  let t = await rI(e);
  if (t) {
    try {
      localStorage.setItem('preferredLocale', e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != 'string')
        throw new Error('Expected result.path to be a string');
      if (
        t.isMissingInLocale &&
        (await EI(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      YS(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
          paginationInfo: window.history.state.paginationInfo,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function PI(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
var aa = [
    'mousedown',
    'mouseup',
    'touchcancel',
    'touchend',
    'touchstart',
    'auxclick',
    'dblclick',
    'pointercancel',
    'pointerdown',
    'pointerup',
    'dragend',
    'dragstart',
    'drop',
    'compositionend',
    'compositionstart',
    'keydown',
    'keypress',
    'keyup',
    'input',
    'textInput',
    'copy',
    'cut',
    'paste',
    'click',
    'change',
    'contextmenu',
    'reset',
  ],
  GS = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, '#main') &&
      (e.stopPropagation(),
      performance.mark('framer-react-event-handling-prevented'));
  };
typeof window < 'u' &&
  (window.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = function () {
    if (!aa) return;
    let e = { capture: !0 };
    aa.forEach((t) => document.body.addEventListener(t, GS, e)),
      (window.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = void 0);
  });
function T1() {
  if (!aa) return;
  let e = { capture: !0 };
  aa.forEach((t) => document.body.removeEventListener(t, GS, e)), (aa = void 0);
}
function Po(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var E1 = !1,
  R1 = !1,
  P1 = !1;
function _I({ addHydrationMarkers: e, turnOffEventHandlerHack: t }) {
  let n = 'framer-hydration-',
    r = `${n}start`,
    i = `${n}render-end`,
    o = `${n}layout-effects-end`,
    s = `${n}effects-end`,
    a = `${n}first-paint`;
  return (
    ot(() => {
      R1 || ((R1 = !0), e && (performance.mark(i), Po(`${n}render`, r, i)));
    }, []),
    Rn(() => {
      P1 ||
        ((P1 = !0),
        e && (performance.mark(o), Po(`${n}layout-effects`, i, o)),
        requestAnimationFrame(() => {
          var l, c, u;
          let f = `${n}browser-render-start`;
          e &&
            (performance.mark(f),
            Po(
              `${n}uho`,
              (c =
                (l = performance.getEntriesByName(s)[0]) === null ||
                l === void 0
                  ? void 0
                  : l.name) !== null && c !== void 0
                ? c
                : (u = performance.getEntriesByName(o)[0]) === null ||
                  u === void 0
                ? void 0
                : u.name,
              f
            )),
            setTimeout(() => {
              t && T1(),
                e &&
                  (performance.mark(a),
                  Po(`${n}time-to-first-paint`, r, a),
                  Po(`${n}browser-render`, f, a));
            }, 0);
        }));
    }, []),
    $(() => {
      var l, c, u;
      E1 ||
        ((E1 = !0),
        t && T1(),
        e &&
          (performance.mark(s),
          Po(
            `${n}effects`,
            (c =
              (l = performance.getEntriesByName(a)[0]) === null || l === void 0
                ? void 0
                : l.name) !== null && c !== void 0
              ? c
              : (u = performance.getEntriesByName(o)[0]) === null ||
                u === void 0
              ? void 0
              : u.name,
            s
          )));
    }, []),
    null
  );
}
function KS(e) {
  return b.useCallback((t) => e[t], [e]);
}
var Gp = (() => b.createContext({}))();
function FI({ api: e, children: t }) {
  return C(Gp.Provider, { value: e, children: t });
}
function No() {
  return b.useContext(Gp);
}
function II({ routes: e, children: t }) {
  let n = KS(e);
  return C(Gp.Provider, { value: { getRoute: n }, children: t });
}
var LI = class extends ye {
    constructor() {
      super(...arguments), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        console.error('Derived error in SuspenseErrorBoundary', e), { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      console.error('Caught error in SuspenseErrorBoundary', e, t),
        (n = window.__framer_events) === null ||
          n === void 0 ||
          n.push([
            'published_site_load_recoverable_error',
            { message: String(e), componentStack: t?.componentStack },
          ]);
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof BS) throw this.state.error.cause;
      return C(Uo, { children: this.props.fallbackChildren });
    }
  },
  MI = (() => (typeof window < 'u' ? new Promise(() => {}) : null))();
function OI() {
  if (typeof window > 'u') return null;
  throw MI;
}
function DI({ children: e }) {
  return C(LI, {
    fallbackChildren: e,
    children: C(Uo, { fallback: C(OI, {}), children: e }),
  });
}
var _1 = 'default';
function AI() {
  let [e, t] = b.useState(0);
  return [e, b.useCallback(() => t((n) => n + 1), [])];
}
var VI = async () => {},
  BI = { activeLocale: null, locales: [], setLocale: VI },
  qS = b.createContext(BI);
function QS() {
  return b.useContext(qS);
}
function zI(e) {
  let t = `start-${e}`,
    n = `end-${e}`,
    r = D(void 0);
  return (
    $(() => {
      r.current && (r.current(), (r.current = void 0));
    }),
    ge(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      performance.mark(t),
        i
          .then(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch(() => {});
    }, [e, t, n])
  );
}
function F1(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    HI(r, t);
    return;
  }
  n || window.scrollTo(0, 0);
}
function $I(e) {
  let t = b.useRef([]);
  return (
    b.useLayoutEffect(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    b.useCallback((n) => {
      t.current.push(n);
    }, [])
  );
}
function NI({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
  enableImproveInpDuringHydration: u = !1,
  addHydrationMarkers: f = !1,
}) {
  kI({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a });
  let d = XS(),
    m = zI('route-change'),
    y = b.useRef(r),
    v = b.useRef(n),
    S = b.useRef(a),
    p = S.current,
    h = b.useMemo(() => {
      var U;
      return (U = l.find(({ id: X }) => (p ? X === p : X === _1))) !== null &&
        U !== void 0
        ? U
        : null;
    }, [p, l]),
    [g, x] = AI(),
    k = b.useMemo(
      () => ({
        activeLocale: h,
        locales: l,
        setLocale: async (U) => {
          let X;
          sa(U) ? (X = U) : Kc(U) && (X = U.id);
          let N = l.find(({ id: ne }) => ne === _1),
            J = l.find(({ id: ne }) => ne === X);
          if (!J) return;
          let he = y.current,
            ue = s[he];
          if (ue)
            try {
              let ne = await RI({
                currentLocale: h,
                nextLocale: J,
                route: ue,
                routeId: he,
                defaultLocale: N,
                pathVariables: v.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!ne) return;
              (v.current = ne.pathVariables),
                (S.current = J.id),
                d(y.current, he, () => Ai(x)),
                m();
            } catch {}
        },
      }),
      [h, o, x, l, m, c, s, d]
    ),
    w = $I(g),
    T = b.useCallback(
      (U, X, N, J, he = !1, ue = !1) => {
        (y.current = U),
          (v.current = J),
          (S.current = X),
          w(() => {
            F1(N, he, ue);
          }),
          Ai(x),
          m();
      },
      [x, m, w]
    );
  CI(y, T);
  let E = b.useCallback(
      (U, X, N, J) => {
        var he, ue;
        let ne = s[U];
        if (N) {
          let fe = new Set(),
            Ct = (he = ne?.path) !== null && he !== void 0 ? he : '/';
          for (let Q of Ct.matchAll(Pi)) {
            let Qt = Q[1];
            if (Qt === void 0)
              throw new Error(
                'A matching path variable should not be undefined'
              );
            fe.add(Qt);
          }
          N = Object.fromEntries(Object.entries(N).filter(([Q]) => fe.has(Q)));
        }
        let re = su(ne, X);
        if (
          PI(
            { routeId: y.current, pathVariables: v.current },
            { routeId: U, pathVariables: N }
          )
        ) {
          if (
            ((ue = window.history.state) === null || ue === void 0
              ? void 0
              : ue.hash) !== X &&
            !t
          ) {
            let fe = s[U];
            fe &&
              C1(U, fe, {
                currentRoutePath: fe.path,
                currentPathVariables: v.current,
                pathVariables: N,
                hash: X,
                localeId: S.current,
                preserveQueryParams: c,
              });
          }
          F1(re, J, !1);
          return;
        }
        if (!ne) return;
        if (!t) {
          let fe = s[y.current];
          C1(U, ne, {
            currentRoutePath: fe?.path,
            currentPathVariables: v.current,
            hash: X,
            pathVariables: N,
            localeId: S.current,
            preserveQueryParams: c,
          });
        }
        let qt = () => T(U, S.current, re, N, J, !1);
        d(y.current, U, qt);
      },
      [s, t, T, d, c]
    ),
    I = KS(s),
    F = y.current,
    B = v.current,
    V = b.useMemo(
      () => ({
        navigate: E,
        getRoute: I,
        currentRouteId: F,
        currentPathVariables: B,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [E, I, F, B, s, o, c]
    ),
    Z = s[y.current];
  if (!Z) throw new Error(`Router cannot find route for ${y.current}`);
  let te = !h || !Z.includedLocales || Z.includedLocales.includes(h.id),
    j = Z.path && B ? zS(Z.path, B) : Z.path,
    ie = String(p) + j;
  return C(FI, {
    api: V,
    children: C(qS.Provider, {
      value: k,
      children: ae(DI, {
        children: [
          C(GF, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: g,
            children: C(
              b.Fragment,
              { children: te ? Op(Z.page, e) : i && Op(i, e) },
              ie
            ),
          }),
          C(_I, { addHydrationMarkers: f, turnOffEventHandlerHack: u }),
        ],
      }),
    }),
  });
}
function HI(e, t) {
  let n = t
    ? { behavior: 'smooth', block: 'start', inline: 'nearest' }
    : void 0;
  e.scrollIntoView(n);
}
var Lc, vp, I1;
function jI(e) {
  if (I1 !== e) {
    Lc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Lc[n] = { path: n, depth: WI(n), routeId: t });
    (vp = Object.values(Lc)),
      vp.sort(({ depth: t }, { depth: n }) => n - t),
      (I1 = e);
  }
  return [Lc, vp];
}
function ZS(e, t, n = !0, r = []) {
  let [i, o] = jI(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split('/').find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: m }) => m === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let m = r.find(({ slug: y }) => y === '');
      m && (a = m.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = L1(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: m } of o) {
    let y = L1(l, d);
    if (y.isMatch)
      return { routeId: m, localeId: a, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error('No exact match found for path');
  let u = i['/'];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error('Router should not have undefined routes');
  return { routeId: f, localeId: a };
}
function WI(e) {
  let t = e.replace(/^\/|\/$/gu, '');
  return t === '' ? 0 : t.split('/').length;
}
function L1(e, t) {
  let n = [],
    i = UI(t).replace(Pi, (c, u) => (n.push(u), '([^/]+)')),
    o = new RegExp(i + '$'),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error('Path variable values cannot be undefined');
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function UI(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, '\\$&').replace(/-/gu, '\\x2d');
}
var XI = 'page';
function M1(e) {
  return Kc(e) && XI in e && e.page !== void 0;
}
var YI = (() => b.createContext(void 0))();
function lu() {
  var e;
  let t = No(),
    n = O(YI),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function GI(e) {
  var t;
  let n = No();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var Kp = (() => typeof window < 'u' && !eI(navigator.userAgent))();
function KI(e, t = !0) {
  let { getRoute: n } = No();
  $(() => {
    if (!(!n || !t || !Kp)) for (let r of e) JS(n(r));
  }, [e, n, t]);
}
async function JS(e) {
  if (!Kp || !e) return;
  let t = e.page;
  if (!(!t || !HS(t))) {
    await tI();
    try {
      await t.preload();
    } catch {}
  }
}
function Dz(e, t) {
  var n;
  let r = lu(),
    i = (n = GI(t)) !== null && n !== void 0 ? n : r;
  return b.useMemo(() => (i ? su(i, e) : e), [e, i]);
}
var O1 = new Set();
function ca(e, ...t) {
  O1.has(e) || (O1.add(e), console.warn(e, ...t));
}
function qI(e, t, n) {
  let r = n ? `, use ${n} instead` : '',
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ca(i);
}
var ew = class {
    constructor() {
      R(this, 'observers', new Set()), R(this, 'transactions', {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == 'function' ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Ye = (() => {
    function e(t) {
      return (
        qI(
          'Animatable()',
          '2.0.0',
          'the new animation API (https://www.framer.com/api/animation/)'
        ),
        Cn(t) ? t : new ZI(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Cn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Cn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  D1 = 'onUpdate',
  A1 = 'finishTransaction';
function Cn(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    D1 in e &&
    e[D1] instanceof Function &&
    A1 in e &&
    e[A1] instanceof Function
  );
}
function QI(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Ye(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var ZI = class {
  constructor(e) {
    (this.value = e), R(this, 'observers', new ew());
  }
  static interpolationFor(e, t) {
    if (Cn(e)) return QI(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Cn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Mc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function V1(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Yt(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: V1(i.x, o.x),
      y: V1(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != 'number' && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(Yt || (Yt = {}));
var Ap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '0ff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '00f',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  burntsienna: 'ea7e5d',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '0ff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'f0f',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '663399',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function jr(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function Do(e) {
  return !isNaN(e) && isFinite(e);
}
function Wr(e) {
  let t = Vp(e);
  return t !== void 0 ? (e.includes('%') ? t / 100 : t) : 0;
}
function Vp(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var JI = (() => $F().Hsluv)(),
  Mt = new JI();
function eL(e, t, n) {
  return (
    (Mt.rgb_r = e / 255),
    (Mt.rgb_g = t / 255),
    (Mt.rgb_b = n / 255),
    Mt.rgbToHsluv(),
    { h: Mt.hsluv_h, s: Mt.hsluv_s, l: Mt.hsluv_l }
  );
}
function tL(e, t, n, r = 1) {
  return (
    (Mt.hsluv_h = e),
    (Mt.hsluv_s = t),
    (Mt.hsluv_l = n),
    Mt.hsluvToRgb(),
    { r: Mt.rgb_r * 255, g: Mt.rgb_g * 255, b: Mt.rgb_b * 255, a: r }
  );
}
function Oc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? 'hsv(' + i + ', ' + o + '%, ' + s + '%)'
    : 'hsva(' + i + ', ' + o + '%, ' + s + '%, ' + r + ')';
}
function nL(e, t, n) {
  return {
    r: Do(e) ? wt(e, 255) * 255 : 0,
    g: Do(t) ? wt(t, 255) * 255 : 0,
    b: Do(n) ? wt(n, 255) * 255 : 0,
  };
}
function B1(e, t, n, r) {
  let i = [
    yp(Math.round(e).toString(16)),
    yp(Math.round(t).toString(16)),
    yp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('');
}
function qp(e, t, n) {
  let r,
    i,
    o = wt(e, 255),
    s = wt(t, 255),
    a = wt(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function gp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function rL(e, t, n) {
  let r, i, o;
  if (
    ((e = wt(e, 360)), (t = wt(t * 100, 100)), (n = wt(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = gp(a, s, e + 1 / 3)), (i = gp(a, s, e)), (o = gp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function z1(e, t, n) {
  (e = wt(e, 255)), (t = wt(t, 255)), (n = wt(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function iL(e, t, n) {
  (e = wt(e, 360) * 6), (t = wt(t * 100, 100)), (n = wt(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function wt(e, t) {
  let n, r;
  if (
    (typeof t == 'string' ? (n = parseFloat(t)) : (n = t), typeof e == 'string')
  ) {
    oL(e) && (e = '100%');
    let i = sL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function oL(e) {
  return typeof e == 'string' && e.includes('.') && parseFloat(e) === 1;
}
function sL(e) {
  return typeof e == 'string' && e.includes('%');
}
function yp(e) {
  return e.length === 1 ? '0' + e : '' + e;
}
var Hn = (() => {
  let e = '[-\\+]?\\d+%?',
    n = '(?:' + '[-\\+]?\\d*\\.\\d+%?' + ')|(?:' + e + ')',
    r = '[\\s|\\(]+(' + n + ')[,|\\s]+(' + n + ')[,|\\s]+(' + n + ')\\s*\\)?',
    i =
      '[\\s|\\(]+(' +
      n +
      ')[,|\\s]+(' +
      n +
      ')[,|\\s]+(' +
      n +
      ')[,|\\s]+(' +
      n +
      ')\\s*\\)?';
  return {
    rgb: new RegExp('rgb' + r),
    rgba: new RegExp('rgba' + i),
    hsl: new RegExp('hsl' + r),
    hsla: new RegExp('hsla' + i),
    hsv: new RegExp('hsv' + r),
    hsva: new RegExp('hsva' + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function Qp(e) {
  if (e.includes('gradient(') || e.includes('var(')) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, '').trimEnd().toLowerCase(),
    r = Ap[n];
  if ((r && (n = r), n === 'transparent'))
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  let i;
  return (i = Hn.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ''),
        g: parseInt(i[2] ?? ''),
        b: parseInt(i[3] ?? ''),
        a: 1,
        format: 'rgb',
      }
    : (i = Hn.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ''),
        g: parseInt(i[2] ?? ''),
        b: parseInt(i[3] ?? ''),
        a: parseFloat(i[4] ?? ''),
        format: 'rgb',
      }
    : (i = Hn.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ''),
        s: Wr(i[2] ?? ''),
        l: Wr(i[3] ?? ''),
        a: 1,
        format: 'hsl',
      }
    : (i = Hn.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ''),
        s: Wr(i[2] ?? ''),
        l: Wr(i[3] ?? ''),
        a: parseFloat(i[4] ?? ''),
        format: 'hsl',
      }
    : (i = Hn.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ''),
        s: Wr(i[2] ?? ''),
        v: Wr(i[3] ?? ''),
        a: 1,
        format: 'hsv',
      }
    : (i = Hn.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ''),
        s: Wr(i[2] ?? ''),
        v: Wr(i[3] ?? ''),
        a: parseFloat(i[4] ?? ''),
        format: 'hsv',
      }
    : (i = Hn.hex8.exec(n))
    ? {
        r: Xt(i[1] ?? ''),
        g: Xt(i[2] ?? ''),
        b: Xt(i[3] ?? ''),
        a: $1(i[4] ?? ''),
        format: r ? 'name' : 'hex',
      }
    : (i = Hn.hex6.exec(n))
    ? {
        r: Xt(i[1] ?? ''),
        g: Xt(i[2] ?? ''),
        b: Xt(i[3] ?? ''),
        a: 1,
        format: r ? 'name' : 'hex',
      }
    : (i = Hn.hex4.exec(n))
    ? {
        r: Xt(`${i[1]}${i[1]}`),
        g: Xt(`${i[2]}${i[2]}`),
        b: Xt(`${i[3]}${i[3]}`),
        a: $1(i[4] + '' + i[4]),
        format: r ? 'name' : 'hex',
      }
    : (i = Hn.hex3.exec(n))
    ? {
        r: Xt(`${i[1]}${i[1]}`),
        g: Xt(`${i[2]}${i[2]}`),
        b: Xt(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? 'name' : 'hex',
      }
    : !1;
}
function Xt(e) {
  return parseInt(e, 16);
}
function $1(e) {
  return Xt(e) / 255;
}
var N1 = new Map(),
  H = (() => {
    function e(o, s, a, l) {
      if (typeof o == 'string') {
        let u = N1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e('black'), isValid: !1 } : (N1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e('black'), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === '') return;
      let c = aL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == 'string' && c.format !== 'hsv' ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === 'rgb' || o === 'rgba';
      },
      isHSL(o) {
        return o === 'hsl' || o === 'hsla';
      },
    };
    (e.inspect = (o, s) =>
      o.format === 'hsl'
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === 'hex' || o.format === 'name'
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == 'string' ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == 'string' ? Qp(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != 'string' &&
        typeof o.r == 'number' &&
        typeof o.g == 'number' &&
        typeof o.b == 'number' &&
        typeof o.h == 'number' &&
        typeof o.s == 'number' &&
        typeof o.l == 'number' &&
        typeof o.a == 'number' &&
        typeof o.roundA == 'number' &&
        typeof o.format == 'string'),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => B1(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? 'rgb(' +
            Math.round(o.r) +
            ', ' +
            Math.round(o.g) +
            ', ' +
            Math.round(o.b) +
            ')'
          : 'rgba(' +
            Math.round(o.r) +
            ', ' +
            Math.round(o.g) +
            ', ' +
            Math.round(o.b) +
            ', ' +
            o.roundA +
            ')'),
      (e.toHusl = (o) => ({ ...eL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? 'hsl(' + a + ', ' + l + '%, ' + c + '%)'
          : 'hsla(' + a + ', ' + l + '%, ' + c + '%, ' + o.roundA + ')';
      }),
      (e.toHsv = (o) => {
        let s = z1(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = z1(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? 'hsv(' + a + ', ' + l + '%, ' + c + '%)'
          : 'hsva(' + a + ', ' + l + '%, ' + c + '%, ' + o.roundA + ')';
      }),
      (e.toName = (o) => {
        if (o.a === 0) return 'transparent';
        if (o.a < 1) return !1;
        let s = B1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Ap)) if (Ap[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = 'rgb') => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            'Both arguments for Color.interpolate must be Color objects'
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = 'rgb' } = {}) => {
        let l = typeof o == 'string' ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = 'rgb') => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: jr(a, [0, 1], [o.r, s.r], l),
            g: jr(a, [0, 1], [o.g, s.g], l),
            b: jr(a, [0, 1], [o.b, s.b], l),
            a: jr(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let m = f.h,
            y = d.h,
            v = y - m;
          v > 180 ? (v = y - 360 - m) : v < -180 && (v = y + 360 - m);
          let S = {
            h: jr(a, [0, 1], [m, m + v], l),
            s: jr(a, [0, 1], [f.s, d.s], l),
            l: jr(a, [0, 1], [f.l, d.l], l),
            a: jr(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(S)) : (u = e(tL(S.h, S.s, S.l, S.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e('rgba(' + s() + ', ' + s() + ', ' + s() + ', ' + o + ')');
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e('rgba(' + o + ', ' + o + ', ' + o + ', ' + s + ')')
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => qp(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === 'color' ||
            o === 'fill' ||
            o === 'stroke') &&
          typeof s == 'string' &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          m = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * m + (a * (f - m)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = Ki([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function aL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == 'number' &&
    !Number.isNaN(e) &&
    typeof t == 'number' &&
    !Number.isNaN(t) &&
    typeof n == 'number' &&
    !Number.isNaN(n)
      ? (i = Bp({ r: e, g: t, b: n, a: r }))
      : typeof e == 'string'
      ? (i = lL(e))
      : typeof e == 'object' &&
        (e.hasOwnProperty('r') && e.hasOwnProperty('g') && e.hasOwnProperty('b')
          ? (i = Bp(e))
          : (i = tw(e))),
    i
  );
}
function lL(e) {
  let t = Qp(e);
  if (t) return t.format === 'hsl' ? tw(t) : t.format === 'hsv' ? cL(t) : Bp(t);
}
function cL(e) {
  let t = iL(e.h, e.s, e.v);
  return {
    ...qp(t.r, t.g, t.b),
    ...t,
    format: 'rgb',
    a: e.a !== void 0 ? nw(e.a) : 1,
  };
}
function Bp(e) {
  let t = nL(e.r, e.g, e.b);
  return {
    ...qp(t.r, t.g, t.b),
    ...t,
    format: 'rgb',
    a: e.a !== void 0 ? nw(e.a) : 1,
  };
}
function tw(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = Do(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Do(e.s) ? e.s : 1),
    typeof e.s == 'string' && (n = Vp(e.s)),
    (r = Do(e.l) ? e.l : 0.5),
    typeof e.l == 'string' && (r = Vp(e.l)),
    (i = rL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: 'hsl' }
  );
}
function nw(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var H1 = (e) => e instanceof al;
var uL = (() => NF().EventEmitter)(),
  fL = class {
    constructor() {
      R(this, '_emitter', new uL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  dL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: '' },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  Ot = typeof window > 'u' ? dL : window,
  hL = (e) => {
    setTimeout(e, 1 / 60);
  },
  pL = (() => Ot.requestAnimationFrame || hL)(),
  j1 = (e) => pL(e),
  ra = (() => 1 / 60)(),
  mL = class extends fL {
    constructor(e = !1) {
      super(),
        R(this, '_started', !1),
        R(this, '_frame', 0),
        R(this, '_frameTasks', []),
        R(this, 'tick', () => {
          this._started &&
            (j1(this.tick),
            this.emit('update', this._frame, ra),
            this.emit('render', this._frame, ra),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      ra = e;
    }
    static get TimeStep() {
      return ra;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), j1(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * ra;
    }
  },
  rw = new mL(),
  qc = { target: 'PREVIEW', zoom: 1 };
var oe = {
  canvas: 'CANVAS',
  export: 'EXPORT',
  thumbnail: 'THUMBNAIL',
  preview: 'PREVIEW',
  current: () => qc.target,
  hasRestrictions: () => {
    let e = qc.target;
    return e === 'CANVAS' || e === 'EXPORT';
  },
};
var Dc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == 'string' && (t = parseFloat(t)), t === 0)) return '0px';
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + 'px'
    );
  },
});
mf({
  borderTopWidth: Dc('y'),
  borderLeftWidth: Dc('x'),
  borderRightWidth: Dc('x'),
  borderBottomWidth: Dc('y'),
});
function de(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error('Assertion Error' + (t.length > 0 ? ': ' + t.join(' ') : ''));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes('assert')
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes('assert') &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function St(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : 'Application entered invalid state'
    )
  );
}
var Ao = b.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function vL({ children: e }) {
  if (O(Ao).top) return C(Ie, { children: e });
  let n = D({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = D({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = D(new Set()).current,
    o = ge(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? 'byName' : 'byId',
        d = n.current[f][l];
      if (d) return d;
      let m = c || l;
      if (
        !u &&
        !i.has(m) &&
        (!n.current.byLayoutId[m] || n.current.byLayoutId[m] === m)
      )
        return (
          n.current.count[f][m] === void 0 &&
            ((n.current.count[f][m] = 0),
            (n.current.byLayoutId[m] = m),
            (r.current[f][l] = m)),
          i.add(m),
          m
        );
      let y;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let T = u[w];
          de(!!T, 'duplicatedId must be defined');
          let E = n.current[f][T],
            I = n.current.byLastId[T];
          if (I && !y) {
            let V = n.current.byLayoutId[I],
              Z = !V || V === c;
            I && !i.has(I) && (!c || Z) && (y = [I, T]);
          }
          let F = E ? n.current.byLayoutId[E] : void 0,
            B = !F || F === c;
          if (E && !i.has(E) && (!c || B))
            return (
              (r.current[f][l] = E), (r.current.byLastId[T] = E), i.add(E), E
            );
        }
      let v = n.current.byLastId[l];
      if (v && !i.has(v)) return i.add(v), (r.current.byId[l] = v), v;
      if (y) {
        let [w, T] = y;
        return (r.current[f][l] = w), (r.current.byLastId[T] = w), i.add(w), w;
      }
      let S = n.current.byPossibleId[l];
      if (S && !i.has(S)) return i.add(S), (r.current.byId[l] = S), S;
      let p = u?.[0],
        h = c || p || l,
        g = (n.current.count[f][h] ?? -1) + 1,
        { layoutId: x, value: k } = gL(h, g, i);
      if (
        ((n.current.count[f][h] = k), (r.current[f][l] = x), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = x), u.length > 1))
          for (let T = 0; T < u.length - 1; T++) {
            let E = u[T];
            E !== void 0 &&
              (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = x));
          }
      }
      return (r.current.byLayoutId[x] = m), i.add(x), x;
    }, []),
    s = ge(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = D({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return C(Ao.Provider, { value: a, children: e });
}
function gL(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function yL({ enabled: e = !0, ...t }) {
  let n = O(Ao),
    r = pe(() => ({ ...n, enabled: e }), [e]);
  return C(Ao.Provider, { ...t, value: r });
}
function Kt(e) {
  let t = D(null);
  return t.current === null && (t.current = e()), t.current;
}
var bL = {
    background: void 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1.4em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    minHeight: 0,
    width: '100%',
    height: '100%',
  },
  xL = (() => ({
    ...bL,
    border: '1px solid rgba(149, 149, 149, 0.15)',
    borderRadius: 6,
    fontSize: '12px',
    backgroundColor: 'rgba(149, 149, 149, 0.1)',
    color: '#a5a5a5',
  }))(),
  iw = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    flexShrink: 0,
    padding: '0 10px',
  },
  SL = (() => ({ ...iw, fontWeight: 500 }))(),
  wL = (() => ({
    ...iw,
    whiteSpace: 'pre',
    maxHeight:
      'calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  }))();
function jz(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${kL(n)}` : 'Error',
    i = t instanceof Error ? t.message : '' + t;
  return ae('div', {
    style: xL,
    children: [
      C('div', { className: 'text', style: SL, children: r }),
      i && C('div', { className: 'text', style: wL, children: i }),
    ],
  });
}
function kL(e) {
  return e.startsWith('./') ? e.replace('./', '') : e;
}
function q(e) {
  return typeof e == 'number' && isFinite(e);
}
function CL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Nc(e) {
  return typeof e != 'string' && typeof e != 'number';
}
function Hc(e) {
  return e !== null && typeof e < 'u' && typeof e != 'boolean' && !CL(e);
}
function TL(e) {
  return e * (Math.PI / 180);
}
var fn = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = Yt.angleFromX(t.a, t.b),
          i = TL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          m = (u - l) * (a - o) - (f - c) * (s - i),
          y = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && m === 0) || m === 0) return null;
        let v = d / m,
          S = y / m;
        return r && (v < 0 || v > 1 || S < 0 || S > 1)
          ? null
          : { x: i + v * (s - i), y: o + v * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = Yt(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => Yt.distance(t.a, t.b)),
      e
    );
  })(),
  K = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => K.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == 'number' ? t.x : 0,
        r = typeof t.y == 'number' ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Mc(e.x, t),
        r = Mc(e.y, t),
        i = Mc(e.width, t),
        o = Mc(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: K.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: K.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = Yt.distance(t, n),
        l = Yt.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(K.minX)), y: Math.min(...e.map(K.minY)) },
        n = { x: Math.max(...e.map(K.maxX)), y: Math.max(...e.map(K.maxY)) };
      return K.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: K.minX(e), y: K.minY(e) },
      { x: K.minX(e), y: K.maxY(e) },
      { x: K.maxX(e), y: K.minY(e) },
      { x: K.maxX(e), y: K.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        m = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: m };
    },
    containsPoint: (e, t) =>
      !(
        t.x < K.minX(e) ||
        t.x > K.maxX(e) ||
        t.y < K.minY(e) ||
        t.y > K.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of K.points(t)) if (!K.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: 'block',
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= K.maxX(e) ||
        K.maxX(t) <= e.x ||
        t.y >= K.maxY(e) ||
        K.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = K.maxX(e),
        r = K.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = K.maxY(e),
        r = K.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => K.intersects(n, e)) === void 0,
    isEqual: (e, t) => K.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > K.maxX(e) && (n = t.x - K.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > K.maxY(e) && (r = t.y - K.maxY(e)),
        Yt.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: K.minX(e), y: K.minY(e) },
        r = { x: K.minX(t), y: K.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = K.minX(e),
        r = K.minY(e),
        i = K.maxX(e),
        o = K.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = K.cornerPoints(e);
      return [fn(t, n), fn(n, r), fn(r, i), fn(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case 'bottom':
        case 'top':
          switch (r) {
            case 'start':
              i.x = t.x;
              break;
            case 'center':
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case 'end':
              i.x = t.x + t.width - e.width;
              break;
            default:
              St(r);
          }
          break;
        case 'left':
          i.x = t.x - e.width;
          break;
        case 'right':
          i.x = t.x + t.width;
          break;
        default:
          St(n);
      }
      switch (n) {
        case 'left':
        case 'right':
          switch (r) {
            case 'start':
              i.y = t.y;
              break;
            case 'center':
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case 'end':
              i.y = t.y + t.height - e.height;
              break;
            default:
              St(r);
          }
          break;
        case 'top':
          i.y = t.y - e.height;
          break;
        case 'bottom':
          i.y = t.y + t.height;
          break;
        default:
          St(n);
      }
      return i;
    },
  };
var ow = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    q(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || q(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || q(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function Qc(e) {
  if (typeof e == 'string') {
    let t = e.trim();
    if (t === 'auto') return 2;
    if (t.endsWith('fr')) return 3;
    if (t.endsWith('%')) return 1;
    if (t.endsWith('vw') || t.endsWith('vh')) return 4;
  }
  return 0;
}
var sw = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = ow.quickfix({
          left: q(t) || Cn(t),
          right: q(n) || Cn(n),
          top: q(r) || Cn(r),
          bottom: q(i) || Cn(i),
          widthType: Qc(o),
          heightType: Qc(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        m = null,
        y = 0,
        v = 0;
      if (f.widthType !== 0 && typeof o == 'string') {
        let h = parseFloat(o);
        o.endsWith('fr')
          ? ((y = 3), (d = h))
          : o === 'auto'
          ? (y = 2)
          : ((y = 1), (d = h / 100));
      } else o !== void 0 && typeof o != 'string' && (d = Ye.getNumber(o));
      if (f.heightType !== 0 && typeof s == 'string') {
        let h = parseFloat(s);
        s.endsWith('fr')
          ? ((v = 3), (m = h))
          : s === 'auto'
          ? (v = 2)
          : ((v = 1), (m = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != 'string' && (m = Ye.getNumber(s));
      let S = 0.5,
        p = 0.5;
      return (
        a && (S = parseFloat(a) / 100),
        l && (p = parseFloat(l) / 100),
        {
          left: f.left ? Ye.getNumber(t) : null,
          right: f.right ? Ye.getNumber(n) : null,
          top: f.top ? Ye.getNumber(r) : null,
          bottom: f.bottom ? Ye.getNumber(i) : null,
          widthType: y,
          heightType: v,
          width: d,
          height: m,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: S,
          centerAnchorY: p,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? Ye.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? Ye.getNumber(t?.sizing.height) : null,
        l = W1(e.left, e.right);
      if (s && q(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (q(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            St(e.widthType);
        }
      let c = W1(e.top, e.bottom);
      if (a && q(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (q(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            St(e.heightType);
        }
      return FL(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = sw.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? Ye.getNumber(c.width) : null,
        f = c ? Ye.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? K.pixelAligned(d) : d;
    },
  },
  EL = 200,
  RL = 200;
function Zc(e, t, n, r) {
  if (typeof t == 'string') {
    if (t.endsWith('%') && n)
      switch (e) {
        case 'maxWidth':
        case 'minWidth':
          return (parseFloat(t) / 100) * n.width;
        case 'maxHeight':
        case 'minHeight':
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith('vh') && r)
      switch (e) {
        case 'maxWidth':
        case 'minWidth':
          return (parseFloat(t) / 100) * r.width;
        case 'maxHeight':
        case 'minHeight':
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function PL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Zc('minHeight', t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Zc('maxHeight', t.maxHeight, n, r), e)),
    e
  );
}
function _L(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Zc('minWidth', t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Zc('maxWidth', t.maxWidth, n, r), e)),
    e
  );
}
function FL(e, t, n, r, i) {
  let o = _L(q(e) ? e : EL, n, r, i),
    s = PL(q(t) ? t : RL, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (s = o / n.aspectRatio)
        : q(n.top) && q(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function W1(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function IL(e) {
  return (
    typeof e.right == 'string' ||
    typeof e.bottom == 'string' ||
    (typeof e.left == 'string' && (!e.center || e.center === 'y')) ||
    (typeof e.top == 'string' && (!e.center || e.center === 'x'))
  );
}
function Sa(e) {
  return !e._constraints || IL(e) ? !1 : e._constraints.enabled;
}
function LL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function ML(e) {
  let t = LL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function ua(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Sa(e) || r) return ML(e);
  let i = OL(e),
    o = DL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return sw.toRect(i, s, null, n, null);
}
function OL(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = ow.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: Qc(l),
      heightType: Qc(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    m = null,
    y = null,
    v = 0,
    S = 0;
  if (d.widthType !== 0 && typeof l == 'string') {
    let g = parseFloat(l);
    l.endsWith('fr')
      ? ((v = 3), (m = g))
      : l === 'auto'
      ? (v = 2)
      : ((v = 1), (m = g / 100));
  } else l !== void 0 && typeof l != 'string' && (m = l);
  if (d.heightType !== 0 && typeof c == 'string') {
    let g = parseFloat(c);
    c.endsWith('fr')
      ? ((S = 3), (y = g))
      : c === 'auto'
      ? (S = 2)
      : ((S = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != 'string' && (y = c);
  let p = 0.5,
    h = 0.5;
  return (
    (o === !0 || o === 'x') &&
      ((d.left = !1), typeof t == 'string' && (p = parseFloat(t) / 100)),
    (o === !0 || o === 'y') &&
      ((d.top = !1), typeof r == 'string' && (h = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: v,
      heightType: S,
      width: m,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: p,
      centerAnchorY: h,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var aw = b.createContext({ parentSize: 0 });
function DL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function wa() {
  return b.useContext(aw).parentSize;
}
function lw(e) {
  return typeof e == 'object';
}
var AL = (e) => {
  let t = wa(),
    { parentSize: n, children: r } = e,
    i = b.useMemo(() => ({ parentSize: n }), [VL(n), BL(n)]);
  return t === 1
    ? r
      ? C(Ie, { children: r })
      : null
    : C(aw.Provider, { value: i, children: r });
};
function VL(e) {
  return lw(e) ? e.width : e;
}
function BL(e) {
  return lw(e) ? e.height : e;
}
function zL(e, t) {
  return C(AL, { parentSize: t, children: e });
}
function $L(e) {
  let t = wa();
  return ua(e, t, !0);
}
var NL = ((e) => (
    (e.Boolean = 'boolean'),
    (e.Number = 'number'),
    (e.String = 'string'),
    (e.RichText = 'richtext'),
    (e.FusedNumber = 'fusednumber'),
    (e.Enum = 'enum'),
    (e.SegmentedEnum = 'segmentedenum'),
    (e.Color = 'color'),
    (e.Image = 'image'),
    (e.ResponsiveImage = 'responsiveimage'),
    (e.File = 'file'),
    (e.ComponentInstance = 'componentinstance'),
    (e.Array = 'array'),
    (e.EventHandler = 'eventhandler'),
    (e.Transition = 'transition'),
    (e.BoxShadow = 'boxshadow'),
    (e.Link = 'link'),
    (e.Date = 'date'),
    (e.Object = 'object'),
    (e.Font = 'font'),
    (e.PageScope = 'pagescope'),
    (e.ScrollSectionRef = 'scrollsectionref'),
    (e.CustomCursor = 'customcursor'),
    (e.Border = 'border'),
    (e.Cursor = 'cursor'),
    (e.Padding = 'padding'),
    (e.BorderRadius = 'borderradius'),
    e
  ))(NL || {}),
  bp;
function HL() {
  if (bp !== void 0) return bp;
  let e = document.createElement('div');
  Object.assign(e.style, {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '1px',
  }),
    e.appendChild(document.createElement('div')),
    e.appendChild(document.createElement('div')),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (bp = t), t;
}
var _i = 'flexbox-gap-not-supported',
  U1 = !1;
function Gz() {
  U1 || ((U1 = !0), !HL() && document.body.classList.add(_i));
}
var jL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  WL = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  UL = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  XL = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  YL = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  GL = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  KL = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  qL = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  QL = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  ZL = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  JL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  eM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`,
  tM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  nM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  rM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  iM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  oM = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    eM,
    JL,
    jL,
    WL,
    UL,
    XL,
    YL,
    GL,
    KL,
    qL,
    QL,
    ZL,
    tM,
    nM,
    rM,
    iM,
  ],
  sM = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-font-family-bold);
            font-style: var(--framer-font-style-bold);
            font-weight: var(--framer-font-weight-bold, bolder);
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-font-family-italic);
            font-style: var(--framer-font-style-italic, italic);
            font-weight: var(--framer-font-weight-italic);
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-font-family-bold-italic);
            font-style: var(--framer-font-style-bold-italic, italic);
            font-weight: var(--framer-font-weight-bold-italic, bolder);
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  aM = new Set(),
  xp;
function cw(e, t, n = aM) {
  if (!(!e || n.has(e) || typeof document > 'u')) {
    if ((n.add(e), !t)) {
      if (!xp) {
        let r = document.createElement('style');
        if (
          (r.setAttribute('type', 'text/css'),
          r.setAttribute('data-framer-css', 'true'),
          !document.head)
        ) {
          console.warn(
            'not injecting CSS: the document is missing a <head> element'
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) xp = r.sheet;
        else {
          console.warn(
            'not injecting CSS: injected <style> element does not have a sheet',
            r
          );
          return;
        }
      }
      t = xp;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var lM = ['[data-framer-component-type] { position: absolute; }'],
  cM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  uM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  fM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  dM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  hM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  pM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  mM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  vM = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  gM = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    '[data-framer-component-text-autosized] * { white-space: pre; }',
    cM,
    uM,
    fM,
    dM,
    hM,
    pM,
    mM,
    vM,
  ],
  yM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  bM = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${_i} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  xM = (() => `
.${_i} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  SM = (() => `
.${_i}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${_i}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  wM = (() => `
.${_i}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${_i}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  kM = (() => [yM, xM, ...bM, SM, wM])(),
  CM = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  TM = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  EM = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  RM = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  PM = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  _M = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  FM = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  IM = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    '[data-framer-generated] * { pointer-events: unset }',
  ],
  LM = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  MM = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  OM = (e) => (e ? IM : []),
  DM = ['.svgContainer svg { display: block; }'],
  uw = (e) => [
    ...lM,
    ...gM,
    ...sM,
    ...oM,
    ...kM,
    ...CM,
    ...TM,
    ...EM,
    ...PM,
    ...RM,
    ..._M,
    ...FM,
    ...OM(e),
    ...DM,
    ...LM,
    ...MM,
  ],
  AM = uw(!1),
  VM = uw(!0),
  X1 = !1;
function ka() {
  if (X1) return;
  X1 = !0;
  let e = oe.current() === oe.preview ? VM : AM;
  for (let t of e) cw(t, void 0, void 0);
}
function Vo(e) {
  return typeof e == 'function';
}
function fw(e) {
  return typeof e == 'boolean';
}
function Ce(e) {
  return typeof e == 'string';
}
function Tn(e) {
  return Number.isFinite(e);
}
function Zp(e) {
  return Array.isArray(e);
}
function Ve(e) {
  return e !== null && typeof e == 'object' && !Zp(e);
}
function kt(e) {
  return typeof e > 'u';
}
function Ae(e) {
  return e === null;
}
function Bo(e) {
  return kt(e) || Ae(e);
}
function dw(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function BM(e) {
  return Ve(e) || Vo(e);
}
var Y1 = 'optional';
function zM(e) {
  return !!e && Y1 in e && e[Y1] === !0;
}
function $M(e) {
  try {
    switch (e.type) {
      case 'string':
      case 'color':
      case 'date':
      case 'link':
      case 'boxshadow':
      case 'padding':
      case 'borderradius':
        return Ce(e.defaultValue) ? e.defaultValue : void 0;
      case 'boolean':
        return fw(e.defaultValue) ? e.defaultValue : void 0;
      case 'enum':
        return kt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case 'fusednumber':
      case 'number':
        return Tn(e.defaultValue) ? e.defaultValue : void 0;
      case 'transition':
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case 'border':
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case 'font':
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case 'object': {
        let t = Ve(e.defaultValue) ? e.defaultValue : {};
        return Ve(e.controls) && hw(t, e.controls), t;
      }
      case 'array':
        return Zp(e.defaultValue) ? e.defaultValue : void 0;
      case 'file':
      case 'image':
      case 'richtext':
      case 'pagescope':
      case 'eventhandler':
      case 'segmentedenum':
      case 'responsiveimage':
      case 'componentinstance':
      case 'scrollsectionref':
      case 'customcursor':
      case 'cursor':
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function hw(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!kt(i) || zM(r)) continue;
    let o = $M(r);
    kt(o) || (e[n] = o);
  }
}
function NM(e) {
  if (Ve(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function HM(e, t) {
  if (!BM(e)) return;
  let n = NM(e);
  hw(n, t);
}
function Kz(e, t) {
  Object.assign(e, { propertyControls: t }), HM(e, t);
}
function pw(e) {
  return e.propertyControls;
}
var Be = (e) => e;
function jM(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var WM =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  UM = jM(
    (e) =>
      WM.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  mw = b.createContext(void 0),
  n$ = (() => mw.Provider)(),
  XM = () => b.useContext(mw) ?? {},
  YM = On(Yp(), 1),
  Wn = typeof navigator < 'u' ? navigator : void 0,
  Ii = () => typeof document == 'object';
var GM = () =>
    Wn && /Chrome/.test(Wn.userAgent) && /Google Inc/.test(Wn.vendor) && !QM(),
  KM = () =>
    Wn && /Safari/.test(Wn.userAgent) && /Apple Computer/.test(Wn.vendor);
var qM = () => Wn && /FramerX/.test(Wn.userAgent),
  QM = () => Wn && /Edg\//.test(Wn.userAgent);
var vw = () => YM.default.env.NODE_ENV === 'test';
var G1 = (e) => () => {
    ca(e);
  },
  ZM = () => () => {},
  JM = {
    useImageSource(e) {
      return e.src ?? '';
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = Qe.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  eO = !1,
  tO = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ['getLogger'].includes(String(t))
        ? ZM()
        : G1(
            eO
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  Qe = new Proxy(JM, tO);
function nO(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  (r *= n), (i *= n);
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case 'fill':
      return l > a ? s / i : o / r;
    case 'fit':
    case 'stretch':
      return Math.max(o / r, s / i);
  }
}
function K1(e, t) {
  return t && Math.max(1, e) > t ? 'pixelated' : 'auto';
}
var q1 = {
    position: 'absolute',
    borderRadius: 'inherit',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  rO = {
    backgroundSize: '16px 16px',
    backgroundImage:
      'repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)',
    border: '1px solid #c4c4c4',
  };
function iO(e) {
  switch (e) {
    case 'fit':
      return 'contain';
    case 'stretch':
      return 'fill';
    default:
      return 'cover';
  }
}
function gw(e, t) {
  let n = e ?? 'center',
    r = t ?? 'center';
  return n === 'center' && r === 'center' ? 'center' : n + ' ' + r;
}
function oO(e, t) {
  if (!t) return 'auto';
  let n = oe.current() === oe.canvas ? Ot.devicePixelRatio : 1,
    r = nO(e, t, n);
  return oe.current() === oe.canvas ? K1(1, r) : K1(qc.zoom, r);
}
function Jp(e, t) {
  return {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    objectPosition: gw(e.positionX, e.positionY),
    objectFit: iO(e.fit),
    imageRendering: oO(e, t),
  };
}
function sO({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = Qe.useImageSource(e, t, n),
    o = Jp(e, t),
    [s, a] = b.useState(),
    l = b.useRef(null),
    c = XM();
  return (
    b.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || vw() || !e.sizes || !u.closest('[data-framer-name]')) return;
      let d = u.clientWidth,
        m = Number(e.sizes.replace('px', ''));
      (!isNaN(m) && d < m) || a(d + 'px');
    }, [e.sizes]),
    C('img', {
      ref: l,
      decoding: 'async',
      loading: e.loading,
      sizes: s ?? e.sizes,
      srcSet: e.srcSet,
      src: i,
      alt: r ?? e.alt,
      style: o,
    })
  );
}
function aO({ image: e, containerSize: t, nodeId: n }) {
  let r = b.useRef(null),
    i = Qe.useImageElement(e, t, n),
    o = Jp(e, t);
  return (
    b.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    C('div', {
      ref: r,
      style: { display: 'contents', borderRadius: 'inherit' },
    })
  );
}
function lO({ nodeId: e, image: t, containerSize: n }) {
  let r = b.useRef(null),
    i = Qe.useImageSource(t, n, e);
  return (
    b.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = Jp(t, n);
      Qe.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    C('div', {
      ref: r,
      style: { display: 'contents', borderRadius: 'inherit' },
    })
  );
}
function yw({ layoutId: e, image: t, ...n }) {
  e && (e = e + '-background');
  let r = { ...q1, ...rO },
    i = null;
  if (Ce(t.src))
    if (t.fit === 'tile' && t.pixelWidth && t.pixelHeight) {
      let o = Tn(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = Qe.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = 'repeat'),
        (r.backgroundPosition = gw(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      oe.current() !== oe.canvas
        ? (i = C(sO, { image: t, ...n }))
        : Qe.canRenderOptimizedCanvasImage(Qe.useImageSource(t))
        ? (i = C(lO, { image: t, ...n }))
        : (i = C(aO, { image: t, ...n }));
  return C(Bt.div, {
    layoutId: e,
    style: i ? q1 : r,
    'data-framer-background-image-wrapper': !0,
    children: i,
  });
}
var cO = 'src',
  Ti = {
    isImageObject: function (e) {
      return !e || typeof e == 'string' ? !1 : cO in e;
    },
  };
function uO(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == 'string' && (e = { ...e, src: s }), e;
}
function fO(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Ti.isImageObject(t)) return;
  let r = null;
  if (
    (Ce(n) ? (r = { alt: '', src: n }) : (r = Ye.get(t, null)),
    !!Ti.isImageObject(r))
  )
    return uO(r, e);
}
function dO(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == 'number'
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function hO(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
  };
  return e.border
    ? ((n.border = e.border), C(Bt.div, { style: n }))
    : (dO(e, n, !1),
      C(Bt.div, { 'data-frame-border': !0, style: n, layoutId: t }));
}
function cu(e) {
  return e && e !== 'search' && e !== 'slot' && e !== 'template'
    ? Bt(e)
    : Bt.div;
}
var pO = GM();
function bw(e) {
  let t = {};
  return (
    !pO ||
      oe.current() !== oe.canvas ||
      ((e === !0 || e === 'x') && (t['data-framer-layout-hint-center-x'] = !0),
      (e === !0 || e === 'y') && (t['data-framer-layout-hint-center-y'] = !0)),
    t
  );
}
function em(e) {
  return e.replace(/^id_/, '').replace(/\\/g, '');
}
function mO(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides,
    r = e._overrideForwardingDescription;
  if (r) {
    n = void 0;
    for (let i in r) {
      let o = r[i];
      e[o] !== void 0 &&
        (n || ((n = {}), (e = { ...e })), (n[i] = e[o]), delete e[o]);
    }
  }
  return n
    ? ((t = b.Children.map(t, (i) =>
        b.isValidElement(i) ? b.cloneElement(i, { _forwardedOverrides: n }) : i
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function uu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === 'x'
      ? `translateX(-50%) ${n}`
      : e === 'y'
      ? `translateY(-50%) ${n}`
      : n || 'none';
}
function Ca(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = O(Ao);
  return pe(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var xw = typeof document < 'u' ? Rn : $,
  Ho = b.createContext(!1);
function fu() {
  let [e, t] = b.useState(0);
  return b.useCallback(() => t((n) => n + 1), []);
}
var vO = (() => HF().ResizeObserver)();
var gO = class {
    constructor() {
      R(this, 'sharedResizeObserver'), R(this, 'callbacks', new WeakMap());
      let e = Ot.ResizeObserver ?? vO;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
    }
    unobserve(e) {
      this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
    }
  },
  Ac = (() => (Ii() ? new gO() : void 0))();
function yO(e) {
  let t = fu();
  $(() => {
    let n = e?.current;
    if (n)
      return (
        Ac?.observeElementWithCallback(e.current, t),
        () => {
          Ac?.unobserve(n);
        }
      );
  }, [e, t]);
}
var bO = 'data-framer-size-compatibility-wrapper';
function xO(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(bO)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Sw)
    .map(ww);
}
function Sw(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ww(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== 'contents'
  )
    return e;
  let t = [...e.children].find(Sw);
  return t ? ww(t) : e;
}
function du(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!O(Ho),
    c = oe.current() === oe.canvas;
  xw(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        Qe.queueMeasureRequest(em(i), t.current, n(t.current)));
  });
}
function SO(e) {
  let t = e.closest('[data-framer-component-container]');
  t && Qe.queueMeasureRequest(em(t.id), t, xO(t));
}
var Fi = Object.keys;
function fa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Q1(e) {
  return fa(e, 'equals') ? typeof e.equals == 'function' : !1;
}
function tm(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function wO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!tm(e[r], t[r])) return !1;
  return !0;
}
function kO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!hu(e[r], t[r], !0)) return !1;
  return !0;
}
function CO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!tm(r, t.get(n))) return !1;
  return !0;
}
function TO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!hu(r, t.get(n), !0)) return !1;
  return !0;
}
function EO(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function RO(e, t) {
  let n = Fi(e);
  if (n.length !== Fi(t).length) return !1;
  for (let r of n) {
    if (!fa(t, r)) return !1;
    if (!(r === '_owner' && fa(e, '$$typeof') && e.$$typeof) && !tm(e[r], t[r]))
      return !1;
  }
  return !0;
}
function PO(e, t) {
  let n = Fi(e);
  if (n.length !== Fi(t).length) return !1;
  for (let r of n) {
    if (!fa(t, r)) return !1;
    if (
      !(r === '_owner' && fa(e, '$$typeof') && e.$$typeof) &&
      !hu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function hu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== 'object') return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? kO(e, t) : wO(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? TO(e, t) : CO(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return EO(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let m = e instanceof RegExp,
    y = t instanceof RegExp;
  return m && y
    ? e.toString() === t.toString()
    : m !== y
    ? !1
    : Q1(e) && Q1(t)
    ? e.equals(t)
    : n
    ? PO(e, t)
    : RO(e, t);
}
function je(e, t, n = !0) {
  try {
    return hu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          'Warning: isEqual does not handle circular references.',
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var kw = '0.000001px',
  Sp = (() => ` translateZ(${kw})`)(),
  Cw = (() => qM() || KM() || vw())();
function _O(e) {
  e.willChange = 'transform';
  let t = oe.current() === oe.canvas;
  Cw && t && (e.translateZ = kw);
}
function nm(e) {
  (e.willChange = 'transform'), FO(e, !0);
}
function FO(e, t) {
  let n = oe.current() === oe.canvas;
  if (!Cw || !n) return;
  let r = (Ce(e.transform) && e.transform) || '';
  t
    ? r.includes(Sp) || (e.transform = r + Sp)
    : (e.transform = r.replace(Sp, ''));
}
function Tw(e, t, n, r = !0) {
  if (!e) return;
  let i = Be(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var jc = (() => {
  class e extends ye {
    constructor() {
      super(...arguments),
        R(this, 'layerElement', null),
        R(this, 'setLayerElement', (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? _O(r) : nm(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !je(this.props, n);
    }
    componentDidUpdate(n) {
      Be(this.props).clip &&
        Be(this.props).radius === 0 &&
        Be(n).radius !== 0 &&
        Tw(this.layerElement, 'overflow', 'hidden', !1);
    }
  }
  return R(e, 'defaultProps', {}), e;
})();
function IO(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function LO(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  IO(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var Ew = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  rm = {
    hueRotate: (e, t) => H.toHslString(H.hueRotate(H(e), t)),
    setAlpha: (e, t) => H.toRgbString(H.alpha(H(e), t)),
    getAlpha: (e) => {
      let t = Qp(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => H.toRgbString(H.multiplyAlpha(H(e), t)),
    toHex: (e) => H.toHexString(H(e)).toUpperCase(),
    toRgb: (e) => H.toRgb(H(e)),
    toRgbString: (e) => H.toRgbString(H(e)),
    toHSV: (e) => H.toHsv(H(e)),
    toHSL: (e) => H.toHsl(H(e)),
    toHslString: (e) => H.toHslString(H(e)),
    toHsvString: (e) => H.toHsvString(H(e)),
    hsvToHSLString: (e) => H.toHslString(H(Oc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => H.toHexString(H(Oc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => H.toRgbString(H(Oc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Oc(e.h, e.s, e.v),
    rgbaToString: (e) => H.toRgbString(H(e)),
    rgbToHexString: (e) => H.toHexString(H(e)),
    hslToString: (e) => H.toHslString(H(e)),
    hslToRgbString: (e) => H.toRgbString(H(e)),
    toColorPickerSquare: (e) => H.toRgbString(H({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => H(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == 'string' && (e = H(e)),
      typeof t == 'string' && (t = H(t)),
      H.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = H(e);
      return t.a !== 1 ? H.toRgbString(t) : H.toHexString(t);
    },
  },
  MO = /var\(.+\)/,
  OO = new Map();
function DO(e, t) {
  let n = [e, t];
  return MO.test(e) ? e : LO(1e3, OO, n, () => rm.multiplyAlpha(e, t));
}
function Ta(e, t = 1) {
  let n;
  return (
    'stops' in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: DO(r.value, t) }))
  );
}
function Rw(e, t) {
  let n = 0;
  return (
    Ta(e, t).forEach((r) => {
      n ^= Ew(r.value) ^ r.position;
    }),
    n
  );
}
var AO = ['stops'];
function Pw(e) {
  return e && AO.every((t) => t in e);
}
var VO = ['start', 'end'];
function _w(e) {
  return e && VO.every((t) => t in e);
}
var BO = ['angle', 'alpha'],
  da = {
    isLinearGradient: (e) => e && BO.every((t) => t in e) && (_w(e) || Pw(e)),
    hash: (e) => e.angle ^ Rw(e, e.alpha),
    toCSS: (e, t) => {
      let n = Ta(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(', ')})`;
    },
  },
  zO = [
    'widthFactor',
    'heightFactor',
    'centerAnchorX',
    'centerAnchorY',
    'alpha',
  ],
  ha = {
    isRadialGradient: (e) => e && zO.every((t) => t in e) && (_w(e) || Pw(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      Rw(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Ta(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(', ')})`;
    },
  };
function $O({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == 'string' || H1(t)
      ? (n.backgroundColor = t)
      : H.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || H.toRgbString(e))
    : e &&
      ((e = Ye.get(e, null)),
      typeof e == 'string' || H1(e)
        ? (n.background = e)
        : da.isLinearGradient(e)
        ? (n.background = da.toCSS(e))
        : ha.isRadialGradient(e)
        ? (n.background = ha.toCSS(e))
        : H.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || H.toRgbString(e)));
}
function ce(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function NO(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function HO(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function jO(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = 'preserve-3d')
      : e.preserve3d === !1 && (t.transformStyle = 'flat'),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = 'visible')
      : e.backfaceVisible === !1 && (t.backfaceVisibility = 'hidden'),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = '50%'), (t.top = '50%'))
        : e.center === 'x'
        ? (t.left = '50%')
        : e.center === 'y' && (t.top = '50%')),
    ce(e, 'size', t),
    ce(e, 'width', t),
    ce(e, 'height', t),
    ce(e, 'minWidth', t),
    ce(e, 'minHeight', t),
    ce(e, 'top', t),
    ce(e, 'right', t),
    ce(e, 'bottom', t),
    ce(e, 'left', t),
    ce(e, 'position', t),
    ce(e, 'overflow', t),
    ce(e, 'opacity', t),
    (!e._border || !e._border.borderWidth) && ce(e, 'border', t),
    ce(e, 'borderRadius', t),
    ce(e, 'radius', t, 'borderRadius'),
    ce(e, 'color', t),
    ce(e, 'shadow', t, 'boxShadow'),
    ce(e, 'x', t),
    ce(e, 'y', t),
    ce(e, 'z', t),
    ce(e, 'rotate', t),
    ce(e, 'rotateX', t),
    ce(e, 'rotateY', t),
    ce(e, 'rotateZ', t),
    ce(e, 'scale', t),
    ce(e, 'scaleX', t),
    ce(e, 'scaleY', t),
    ce(e, 'skew', t),
    ce(e, 'skewX', t),
    ce(e, 'skewY', t),
    ce(e, 'originX', t),
    ce(e, 'originY', t),
    ce(e, 'originZ', t),
    $O(e, t),
    t
  );
}
function WO(e) {
  for (let t in e)
    if (
      t === 'drag' ||
      t.startsWith('while') ||
      (typeof Be(e)[t] == 'function' &&
        t.startsWith('on') &&
        !t.includes('Animation'))
    )
      return !0;
  return !1;
}
var Z1 = [
    'onClick',
    'onDoubleClick',
    'onMouse',
    'onMouseDown',
    'onMouseUp',
    'onTapDown',
    'onTap',
    'onTapUp',
    'onPointer',
    'onPointerDown',
    'onPointerUp',
    'onTouch',
    'onTouchDown',
    'onTouchUp',
  ],
  UO = (() => new Set([...Z1, ...Z1.map((e) => `${e}Capture`)]))();
function XO(e) {
  if (e.drag) return 'grab';
  for (let t in e) if (UO.has(t)) return 'pointer';
}
var wp = 'overflow';
function YO(e) {
  return J1(e) ? !0 : e.style ? !!J1(e.style) : !1;
}
function J1(e) {
  return wp in e && (e[wp] === 'scroll' || e[wp] === 'auto');
}
function Fw(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: m,
    } = e,
    y = st(e.minWidth),
    v = st(e.minHeight),
    S = st(e.maxWidth),
    p = st(e.maxHeight);
  return {
    top: st(n),
    left: st(t),
    bottom: st(r),
    right: st(i),
    width: st(o),
    height: st(s),
    size: st(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: m,
    minWidth: y,
    minHeight: v,
    maxWidth: S,
    maxHeight: p,
  };
}
var eS = { x: 0, y: 0, width: 200, height: 200 };
function GO(e) {
  b.useInsertionEffect(() => {
    ka();
  }, []);
  let t = !!O(Ho),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = Fw(e),
    a = $L(s),
    l = {
      display: 'block',
      flex: n?.flex ?? '0 0 auto',
      userSelect: oe.current() !== oe.preview ? 'none' : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? 'rgba(0, 170, 255, 0.3)' : void 0);
  let c = !WO(e) && !e.__fromCanvasComponent && !YO(e),
    u = e.style ? !('pointerEvents' in e.style) : !0;
  c && u && (l.pointerEvents = 'none');
  let d = b.Children.count(e.children) > 0 &&
      b.Children.toArray(e.children).every(
        (p) => typeof p == 'string' || typeof p == 'number'
      ) && {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
    m = jO(e);
  o === void 0 &&
    !i &&
    (NO(m) || (l.width = eS.width), HO(m) || (l.height = eS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let y = {};
  Sa(s) &&
    a &&
    !Iw(e) &&
    (y = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, m, y, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    jc.applyWillChange(e, l, !0);
  let v = l;
  l.transform || (v = { x: 0, y: 0, ...l });
  let S = oe.current() === oe.canvas;
  return (
    e.positionSticky
      ? (!S || t) &&
        ((v.position = 'sticky'),
        (v.willChange = 'transform'),
        (v.zIndex = 1),
        (v.top = e.positionStickyTop),
        (v.right = e.positionStickyRight),
        (v.bottom = e.positionStickyBottom),
        (v.left = e.positionStickyLeft))
      : S &&
        (e.positionFixed || e.positionAbsolute) &&
        (v.position = 'absolute'),
    'rotate' in v && v.rotate === void 0 && delete v.rotate,
    [v, a]
  );
}
var KO = new Set([
  'width',
  'height',
  'opacity',
  'overflow',
  'radius',
  'background',
  'color',
  'x',
  'y',
  'z',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'skew',
  'skewX',
  'skewY',
  'originX',
  'originY',
  'originZ',
]);
function qO(e) {
  let t = {};
  for (let n in e)
    (Hi(n) || UM(n)) && !KO.has(n)
      ? (t[n] = Be(e)[n])
      : (n === 'positionTransition' || n === 'layoutTransition') &&
        ((t.layout = !0),
        typeof Be(e)[n] != 'boolean' &&
          !e.transition &&
          (t.transition = Be(e)[n]));
  return t;
}
function QO(e) {
  return 'data-framer-name' in e;
}
var ZO = $e(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = mO(t),
      u = qO(l),
      f = Ca(t),
      d = XO(t),
      m = D(null),
      y = n ?? m,
      v = {
        'data-framer-component-type': t.componentType ?? 'Frame',
        'data-framer-cursor': d,
        'data-framer-highlight': d === 'pointer' ? !0 : void 0,
        'data-layoutid': f,
        'data-framer-offset-parent-id': Be(t)['data-framer-offset-parent-id'],
      };
    !QO(t) && r && (Be(v)['data-framer-name'] = r);
    let [S, p] = GO(l),
      h = Fw(l),
      g = Iw(h);
    i && !(p && !g && Sa(h))
      ? (u.transformTemplate || (u.transformTemplate = uu(i)),
        Object.assign(v, bw(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      du(t, y);
    let x = fO(t),
      k = !!O(Ho),
      w = JO(l, h, p, k),
      T = zL(
        ae(Ie, {
          children: [
            x
              ? C(yw, {
                  alt: t.alt ?? '',
                  image: x,
                  containerSize: p ?? void 0,
                  nodeId: t.id && em(t.id),
                  layoutId: f,
                })
              : null,
            c,
            C(hO, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      E = cu(t.as),
      { size: I, radius: F, shadow: B } = S;
    return (
      I !== void 0 &&
        (delete S.size,
        S.height === void 0 && (S.height = I),
        S.width === void 0 && (S.width = I)),
      F !== void 0 && (delete S.radius, (S.borderRadius = F)),
      B !== void 0 && (delete S.shadow, (S.boxShadow = B)),
      ae(E, { ...v, ...u, layoutId: f, style: S, ref: y, children: [T, a] })
    );
  }),
  Wc = $e(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? C(ZO, { ...t, ref: n }) : null;
  });
function JO(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == 'number' && typeof l == 'number'
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
function Iw({ width: e, height: t }) {
  return (
    e === 'auto' || e === 'min-content' || t === 'auto' || t === 'min-content'
  );
}
var im = '__LAYOUT_TREE_ROOT',
  Lw = b.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  eD = class extends ye {
    constructor() {
      super(...arguments),
        R(this, 'shouldAnimate', !1),
        R(this, 'transition'),
        R(this, 'lead'),
        R(this, 'follow'),
        R(this, 'scheduledPromotion', !1),
        R(this, 'scheduledDidUpdate', !1),
        R(this, 'scheduleProjectionDidUpdate', () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, 'schedulePromoteTree', (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        R(this, 'initLead', (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        R(this, 'sharedLayoutContext', {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === im &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return C(Lw.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  tD = { width: '100%', height: '100%', backgroundColor: 'none' };
function nD(e) {
  return C(Bt.div, { layoutId: im, style: tD, children: e.children });
}
var rD = class {
    constructor(e) {
      R(this, 'sharedIntersectionObserver'),
        R(this, 'callbacks', new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e
          ));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  iD = b.createContext(new Map());
function oD(e, t, n) {
  if (typeof IntersectionObserver > 'u') return;
  let r = Kt(() => `${n.rootMargin}`),
    i = b.useContext(iD),
    { enabled: o } = n;
  b.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      (l = new rD({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(a, t), () => l?.unobserve(a);
  }, [o]);
}
var sD = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  aD = b.createContext(null);
function lD(e, t, n) {
  let r = b.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = '0px 0px 0px 0px',
    } = n,
    l = b.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = uD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  oD(e, l, { threshold: sD, rootMargin: a, enabled: i ?? !0 });
}
function cD(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Ot.innerHeight);
}
function uD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && cD(t, e) >= r;
}
var E$ = On(ou(), 1);
var P$ = On(ou(), 1);
var tS = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  dr = Symbol('private'),
  kp = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [dr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new ew(),
            reset() {
              for (let s in o)
                if (tS(o, s)) {
                  let a = tS(t, s) ? Be(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, dD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[dr].reset()),
      (e.addObserver = (t, n) => t[dr].observers.add(n)),
      e
    );
  })(),
  fD = class {
    constructor() {
      R(this, 'set', (e, t, n, r) => {
        if (t === dr) return !1;
        let i = e[dr],
          o,
          s;
        if (
          (Cn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != 'function' &&
            typeof n != 'object' &&
            !o &&
            (o = Ye(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = Be(e)[t];
        if (c !== void 0) {
          Cn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (Be(e)[t] = s));
          let u = s !== null && typeof s == 'object';
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        R(this, 'get', (e, t, n) => {
          if (t === dr) return Be(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == 'function' ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[dr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(dr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== dr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  dD = new fD();
var hD = 'opacity';
function pD(e) {
  return hD in e;
}
function mD(e, t) {
  if (!pD(e)) return;
  let n = Ye.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function vD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function Mw(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(', ');
  n && (t.textShadow = n);
}
function gD(e, t) {
  let n = [];
  q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...vD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(' '));
}
function yD(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function om(e, t) {
  yD(e, t), gD(e, t);
}
var bD = class extends ye {
    constructor() {
      super(...arguments),
        R(this, 'layoutMaybeMutated'),
        R(this, 'projectionNodes', new Map()),
        R(this, 'rootProjectionNode'),
        R(this, 'isExiting'),
        R(
          this,
          'shouldPreserveFollowOpacity',
          (e) => e.options.layoutId === im && !this.props.isExiting
        ),
        R(this, 'switchLayoutGroupContext', {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return C(Qa.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  xD = (e) => {
    let t = b.useContext(Lw);
    return C(bD, { ...e, sharedLayoutContext: t });
  },
  Ow = b.createContext(!0);
function z$() {
  return O(Ow);
}
function SD() {
  return new Map();
}
function wD() {
  return Kt(SD);
}
var Dw = xe({ register: () => {}, deregister: () => {} }),
  kD = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = wD(),
      i = ge(
        (a) => {
          if (r.has(a)) {
            console.warn('NavigationTargetWrapper: already registered');
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = ge(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = D({ register: i, deregister: o }).current;
    return (
      $(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, Vo(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      C(Dw.Provider, { value: s, children: n })
    );
  };
function Aw(e, t = []) {
  let { register: n, deregister: r } = O(Dw);
  $(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var Cp = b.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: m,
  instant: y,
  initialProps: v,
  exitProps: S,
  position: p = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: h,
  index: g,
  areMagicMotionLayersPresent: x,
  id: k,
  isInitial: w,
}) {
  let T = qy(),
    E = O(Ui),
    { persistLayoutIdCache: I } = O(Ao),
    F = D({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: nS({}, v, s),
    }),
    B = D(null),
    V = E !== null && !E.isPresent;
  n && F.current.wasCurrent === void 0 && I(),
    $(() => {
      if (t || !T) return;
      if (V) {
        F.current = { ...F.current, wasBeingRemoved: V };
        return;
      }
      let { wasPrevious: ne, wasCurrent: re } = F.current,
        qt = (n && !re) || (!V && F.current.wasBeingRemoved && n),
        fe = r && !ne,
        Ct = nS(F.current.origins, v, s),
        Q = F.current.wasReset;
      qt || fe
        ? (T.stop(), T.start({ zIndex: g, ...Ct, ...s }), (Q = !1))
        : Q === !1 &&
          (T.stop(), T.set({ zIndex: g, ...Ei, opacity: 0 }), (Q = !0)),
        (F.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: Q,
          origins: Ct,
        });
    }, [n, r, V]);
  let Z = y ? { type: !1 } : 'velocity' in d ? { ...d, velocity: 0 } : d,
    te = y ? { type: !1 } : m || d,
    j = { ...p };
  (j.left === void 0 || j.right === void 0) && (j.width = 'auto'),
    (j.top === void 0 || j.bottom === void 0) && (j.height = 'auto');
  let U = (rS(s) || rS(v)) && (t || n || r) ? 1200 : void 0,
    X = { ...Ei, ...F.current.origins },
    N = t
      ? {
          initial: { ...X, ...v },
          animate: { ...X, ...s, transition: Z },
          exit: { ...X, ...S, transition: d },
        }
      : { animate: T, exit: { ...X, ...S, transition: te } },
    J = !(V || x === !1),
    he = !!n && J;
  return ae(Wc, {
    'data-framer-component-type': 'NavigationContainerWrapper',
    width: '100%',
    height: '100%',
    style: {
      position: 'absolute',
      transformStyle: 'flat',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      zIndex: t || V || (n && h) ? g : void 0,
      pointerEvents: void 0,
      visibility: o ? 'visible' : 'hidden',
      perspective: U,
    },
    children: [
      t &&
        C(Wc, {
          width: '100%',
          height: '100%',
          'data-framer-component-type': 'NavigationContainerBackdrop',
          transition: d,
          initial: { opacity: y && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || 'transparent',
          onTap: V ? void 0 : c,
        }),
      C(Wc, {
        ...j,
        ...N,
        transition: {
          default: Z,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: 'transparent',
        backfaceVisible: V ? f : u,
        'data-framer-component-type': 'NavigationContainer',
        'data-framer-is-current-navigation-target': !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && h) ? 1 : 0,
        },
        'data-is-present': J ? void 0 : !1,
        ref: B,
        children: C(aD.Provider, {
          value: B,
          children: C(Ow.Provider, {
            value: he,
            children: C(kD, {
              isCurrent: he,
              isOverlayed: i,
              children: C(xD, {
                isLead: n,
                animatesLayout: !!h,
                transition: Z,
                isExiting: !J,
                isOverlayed: i,
                id: k,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
CD);
function CD(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function nS(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function rS(e) {
  var t, n, r;
  if (!e || !('rotateX' in e || 'rotateY' in e || 'z' in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Ei = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  TD = class {
    constructor() {
      R(this, 'warning', () => {
        ca(
          'The Navigator API is only available inside of Framer: https://www.framer.com/'
        );
      }),
        R(this, 'goBack', () => this.warning()),
        R(this, 'instant', () => this.warning()),
        R(this, 'fade', () => this.warning()),
        R(this, 'push', () => this.warning()),
        R(this, 'modal', () => this.warning()),
        R(this, 'overlay', () => this.warning()),
        R(this, 'flip', () => this.warning()),
        R(this, 'customTransition', () => this.warning()),
        R(this, 'magicMotion', () => this.warning());
    }
  },
  ED = new TD(),
  RD = xe(ED),
  qe = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: '-30%' }, enter: { x: '100%' } },
    PushRight: { exit: { x: '30%' }, enter: { x: '-100%' } },
    PushUp: { exit: { y: '-30%' }, enter: { y: '100%' } },
    PushDown: { exit: { y: '30%' }, enter: { y: '-100%' } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: '100%' },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: '-100%' },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: '100%' },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: '-100%' },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function PD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : 'right') {
    case 'right':
      return qe.PushLeft;
    case 'left':
      return qe.PushRight;
    case 'bottom':
      return qe.PushUp;
    case 'top':
      return qe.PushDown;
  }
}
function _D(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : 'bottom') {
    case 'right':
      return qe.OverlayLeft;
    case 'left':
      return qe.OverlayRight;
    case 'bottom':
      return qe.OverlayUp;
    case 'top':
      return qe.OverlayDown;
  }
}
function FD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : 'bottom') {
    case 'right':
      return qe.FlipLeft;
    case 'left':
      return qe.FlipRight;
    case 'bottom':
      return qe.FlipUp;
    case 'top':
      return qe.FlipDown;
  }
}
var ID = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function iS(e, t) {
  switch (t.type) {
    case 'addOverlay':
      return MD(e, t.transition, t.component);
    case 'removeOverlay':
      return OD(e);
    case 'add':
      return Vw(e, t.key, t.transition, t.component);
    case 'remove':
      return Bw(e);
    case 'update':
      return LD(e, t.key, t.component);
    case 'back':
      return DD(e);
    case 'forward':
      return AD(e);
    default:
      return;
  }
}
function LD(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function MD(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function OD(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Vw(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? $D(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = zD(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = VD(e, t, l),
    m = zw(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: m,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function DD(e) {
  let t = { ...e.containers },
    n = Bw(e);
  if (n) return (n.containers = t), n;
}
function AD(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = Vw(e, n, r, i);
  if (s) return (s.history = o), s;
}
function Bw(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  de(r, 'The navigation history must have at least one component'),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = BD(e, r, n),
    f = zw(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function VD(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function BD(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function zD(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function zw(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = ND(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function $D(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function ND(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return Vc('enter', o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return Vc('exit', o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return Vc('enter', o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return Vc('exit', o?.transition.enter, o?.transition.animation);
    }
  }
}
var HD = Fi(Ei);
function Vc(e, t, n) {
  let r = {},
    i = {};
  return (
    HD.forEach((o) => {
      (r[o] = Ei[o]), (i[o] = { ...n, from: Ei[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == 'string' ? `${Be(Ei)[o]}%` : Be(Ei)[o];
        (Be(r)[o] = e === 'enter' ? a : s),
          (i[o] = { ...n, from: e === 'enter' ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var jD = b.createContext(void 0);
var $w = b.createContext(void 0),
  WD = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends ye {
        constructor(c) {
          var u;
          super(c),
            Wi(this, n),
            Wi(this, i),
            Wi(this, a),
            Wi(this, e, null),
            R(this, 'state', ID()),
            Wi(this, s, (S) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let p = iS(this.state, S);
              if (!p) return;
              let { skipLayoutAnimation: h } = this.props,
                g = p.history[p.current],
                x =
                  (S.type === 'add' && S.transition.withMagicMotion) ||
                  (S.type === 'forward' && g?.transition.withMagicMotion) ||
                  (S.type === 'remove' && !!p.previousTransition),
                k = () => {
                  var w;
                  this.setState(p),
                    g?.key &&
                      ((w = this.context) == null || w.call(this, g.key));
                };
              h && !x ? h(k) : k();
            }),
            R(this, 'goBack', () => {
              var S;
              if (!Rt(this, i, o).call(this))
                return (
                  cf(
                    this,
                    e,
                    ((S = globalThis.event) == null ? void 0 : S.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? ai(this, s).call(this, { type: 'removeOverlay' })
                    : ai(this, s).call(this, { type: 'remove' })
                );
            });
          let f = this.props.children;
          if (!f || !Hc(f) || !Nc(f)) return;
          let d = { ...qe.Instant },
            y = {
              type: 'add',
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            v = iS(this.state, y);
          v && (this.state = v);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!Hc(f) || !Nc(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? Rt(this, a, l).call(this, f, qe.Instant)
              : ai(this, s).call(this, {
                  type: 'update',
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          Rt(this, a, l).call(this, c, qe.Instant, void 0);
        }
        fade(c, u) {
          Rt(this, a, l).call(this, c, qe.Fade, u);
        }
        push(c, u) {
          Rt(this, a, l).call(this, c, PD(u), u);
        }
        modal(c, u) {
          Rt(this, a, l).call(this, c, qe.Modal, u);
        }
        overlay(c, u) {
          Rt(this, a, l).call(this, c, _D(u), u);
        }
        flip(c, u) {
          Rt(this, a, l).call(this, c, FD(u), u);
        }
        magicMotion(c, u) {
          Rt(this, a, l).call(this, c, qe.MagicMotion, u);
        }
        customTransition(c, u) {
          Rt(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, m;
          let y = Rt(this, n, r).call(this, { overCurrentContext: !1 }),
            v = Rt(this, n, r).call(this, { overCurrentContext: !0 }),
            S = UD(v),
            p = v.current > -1,
            h = this.state.history.length === 1,
            g = [];
          for (let [k, w] of Object.entries(this.state.containers)) {
            let T = this.state.containerIndex[k];
            de(T !== void 0, "Container's index must be registered");
            let E = this.state.containerVisualIndex[k];
            de(E !== void 0, "Container's visual index must be registered");
            let I = this.state.containerIsRemoved[k],
              F = this.state.history[T],
              B = this.state.transitionForContainer[k],
              V = T === this.state.current,
              Z = T === this.state.previous,
              te = V ? !1 : I,
              j =
                ((c = F?.transition) == null ? void 0 : c.withMagicMotion) ||
                (V && !!this.state.previousTransition);
            g.push(
              C(
                Cp,
                {
                  id: k,
                  index: E,
                  isInitial: h,
                  isCurrent: V,
                  isPrevious: Z,
                  isOverlayed: p,
                  visible: V || Z,
                  position: (u = F?.transition) == null ? void 0 : u.position,
                  instant: sS(T, y),
                  transitionProps: B,
                  animation: oS(T, y),
                  backfaceVisible: ZD(T, y),
                  exitAnimation:
                    (f = F?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = F?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (m = F?.transition) == null ? void 0 : m.enter,
                  withMagicMotion: j,
                  areMagicMotionLayersPresent: te ? !1 : void 0,
                  children: C(nD, {
                    children: aS({ component: w, transition: F?.transition }),
                  }),
                },
                k
              )
            );
          }
          let x = this.state.overlayStack.map((k, w) =>
            C(
              Cp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: QD(w, v),
                transitionProps: JD(w, v),
                instant: sS(w, v, !0),
                animation: oS(w, v),
                exitProps: k.transition.enter,
                visible: eA(w, v),
                backdropColor: KD(k.transition),
                backfaceVisible: qD(w, v),
                onTapBackdrop: tA(k.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: aS({
                  component: k.component,
                  transition: k.transition,
                }),
              },
              k.key
            )
          );
          return C(Wc, {
            'data-framer-component-type': 'NavigationRoot',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'relative',
            style: {
              overflow: 'hidden',
              backgroundColor: 'unset',
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: C(RD.Provider, {
              value: this,
              children: ae($w.Provider, {
                value: h,
                children: [
                  C(Cp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: XD(S),
                    animation: YD(S),
                    backfaceVisible: GD(S),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: C(vL, {
                      children: C(eD, {
                        children: C(Zf, {
                          presenceAffectsLayout: !1,
                          children: g,
                        }),
                      }),
                    }),
                  }),
                  C(Zf, { children: x }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: m,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: m, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? ai(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, m;
        if (
          Rt(this, i, o).call(this) ||
          (cf(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !Hc(c) || !Nc(c))
        )
          return;
        let y = { ...u, ...f };
        if (!!y.overCurrentContext)
          return ai(this, s).call(this, {
            type: 'addOverlay',
            transition: y,
            component: c,
          });
        let S =
          ((m = c.key) == null ? void 0 : m.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        ai(this, s).call(this, {
          type: 'add',
          key: S,
          transition: y,
          component: c,
        });
      }),
      R(t, 'defaultProps', { enabled: !0 }),
      R(t, 'contextType', jD),
      t
    );
  })(),
  Nw = { stiffness: 500, damping: 50, restDelta: 1, type: 'spring' };
function UD(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function XD({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function YD({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : Nw;
}
function GD({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function KD(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return 'rgba(4,4,15,.4)';
}
function qD(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function QD(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ZD(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function JD(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function oS(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return Nw;
}
function sS(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function eA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function aS(e) {
  return b.Children.map(e.component, (n) => {
    var r;
    if (!Hc(n) || !Nc(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = 'style' in n.props ? Ve(n.props.style) : !0;
    return (
      s &&
        ('width' in n.props && (i.width = '100%'),
        l && (i.style.width = '100%')),
      a &&
        ('height' in n.props && (i.height = '100%'),
        l && (i.style.height = '100%')),
      b.cloneElement(n, i)
    );
  });
}
function tA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function nA(e) {
  let t = e0(),
    n = td();
  return (
    b.useInsertionEffect(() => {
      ka();
    }, []),
    C(WD, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var U$ = On(ou(), 1);
var q$ = On(Yp(), 1);
function sm(...e) {
  return e.filter(Boolean).join(' ');
}
var rA = (() => {
    function e(t = {}) {
      let n = kp(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => kp.resetObject(t));
      }),
      (e.addObserver = (t, n) => kp.addObserver(t, n)),
      e
    );
  })(),
  Tp = rA;
var iA = { update: 0 },
  oA = b.createContext({ update: NaN });
var sA = class extends ye {
    constructor() {
      super(...arguments),
        R(this, 'observers', []),
        R(this, 'state', iA),
        R(this, 'taskAdded', !1),
        R(this, 'frameTask', () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        R(this, 'observer', () => {
          this.taskAdded ||
            ((this.taskAdded = !0), rw.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), Tp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        Tp._stores.forEach((t) => {
          let n = Tp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        C(oA.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  w6 = On(ou(), 1);
var Hw = '__framer__',
  aA = (() => Hw.length)();
function lA(e) {
  if (e.startsWith(Hw)) return e.substr(aA);
}
var Un = [
    'opacity',
    'x',
    'y',
    'scale',
    'rotate',
    'rotateX',
    'rotateY',
    'skewX',
    'skewY',
    'transformPerspective',
  ],
  Jc = (e) => ({
    x: Oe(e?.x ?? 0),
    y: Oe(e?.y ?? 0),
    opacity: Oe(e?.opacity ?? 1),
    scale: Oe(e?.scale ?? 1),
    rotate: Oe(e?.rotate ?? 0),
    rotateX: Oe(e?.rotateX ?? 0),
    rotateY: Oe(e?.rotateY ?? 0),
    skewX: Oe(e?.skewX ?? 0),
    skewY: Oe(e?.skewY ?? 0),
    transformPerspective: Oe(e?.transformPerspective ?? 0),
  }),
  He = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function jw(e) {
  return e in He;
}
function Ww(e, t) {
  let n = Kt(() => ({ values: Jc(t ? e : void 0) }));
  return (
    b.useEffect(() => {
      if (!t)
        for (let r of Un) {
          let i = He[r];
          kt(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var cA = new Set([
    'loopEffectEnabled',
    'loopTransition',
    'loop',
    'loopRepeatType',
    'loopRepeatDelay',
  ]),
  uA = () => {
    let e = D();
    return (
      $(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function fA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = ci(),
    s = Kt(() => ({ values: Jc() })),
    a = b.useRef(!1),
    l = uA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        m = a.current && r === 'mirror',
        y = m ? He : i,
        v = m ? i : He;
      return (
        (a.current = !a.current),
        Promise.all(
          Un.map((S) => {
            if (!(o && S !== 'opacity'))
              return (
                s.values[S].set(v[S] ?? He[S]),
                new Promise((p) => {
                  let h = { ...d, onComplete: () => p() };
                  Qi(s.values[S], y[S] ?? v[S], h);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = ge(() => {
      Un.forEach((d) => {
        s.values[d].stop();
      }),
        Un.forEach((d) => {
          s.values[d].set(He[d]);
        }),
        (a.current = !1);
    }, [s]);
  return b.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s;
}
function dA(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var hA = new Set([
  'speed',
  'adjustPosition',
  'offset',
  'parallaxTransformEnabled',
]);
function pA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = b.useRef(null),
    l = ci(),
    c = b.useCallback(
      (y) => (a.current === null || r === 100 ? 0 : dA(y, a.current, r, i, o)),
      [a, r, i, o]
    );
  b.useLayoutEffect(() => {
    Y.read(() => {
      var y, v;
      a.current =
        ((v = (y = t.current) == null ? void 0 : y.getBoundingClientRect()) ==
        null
          ? void 0
          : v.top) ?? 0;
    }),
      Y.update(() => {
        f.set(c(u.get())), o && d.set(n ?? 'initial');
      });
  }, [t, a, o]);
  let { scrollY: u } = jy(),
    f = vt(u, c),
    d = Dn(o && a.current === null ? 'hidden' : n),
    m = Dn(0);
  return {
    values: { y: l || !s ? m : f },
    style: s ? { visibility: d } : void 0,
  };
}
function mA(e) {
  if (!(Ce(e) || !Ve(e))) return e?.transition;
}
async function Ep(e, t, n, r, i, o) {
  let s = mA(e);
  return Promise.all(
    Un.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== 'opacity') return l();
          let c = t.values[a];
          c.stop();
          let u = Ve(e) ? e?.[a] ?? He[a] : He[a];
          if ((Te(u) && (u = u.get()), !Tn(u))) return l();
          let f = er.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
            Ce(i) && !c?.hasAnimated && Ot.HandoffAppearAnimations
              ? { elapsed: Ot.HandoffAppearAnimations(i, a, c, Y) }
              : void 0;
          o
            ? c.set(u)
            : Qi(c, u, {
                ...s,
                velocity: 0,
                elapsed: 0,
                ...d,
                onComplete: () => l(),
              });
        })
    )
  );
}
var vA = new Set(['presenceInitial', 'presenceAnimate', 'presenceExit']);
function gA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    m = D(!1),
    y = D(f),
    [v, S] = jf(),
    p = D(!1),
    h = Kt(() => {
      var x;
      let k = u ?? l;
      if (!Ve(k)) return { values: Jc() };
      let w = {};
      for (let T in k) {
        let E = Ve(k) ? ((x = Be(k)) == null ? void 0 : x[T]) : void 0;
        Tn(E) && (w[T] = E);
      }
      return { values: Jc(w) };
    });
  Rn(() => {
    if (m.current && f) return;
    let x = er.get(s.current);
    if (x) {
      m.current = !0;
      for (let k in h.values) {
        if (!jw(k)) continue;
        let w = l?.[k];
        x.setBaseTarget(k, Tn(w) ? w : He[k]);
      }
    }
  }, [f]);
  let g = ci();
  return (
    Rn(() => {
      if (!a) {
        S?.();
        return;
      }
      if (v !== p.current)
        (p.current = v),
          v
            ? u && f && Ep(f, h, g, s, c)
            : d
            ? Ep(d, h, g, s, c).then(() => S())
            : S();
      else {
        if (!!je(f, y.current) || !f) return;
        (y.current = f), Ep(f, h, g, s, c, !0);
      }
    }),
    h
  );
}
function yA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var bA = 1;
function Uw(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = yA(a.current, document.documentElement) - bA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      m = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? m : Math.min(m, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function xA(e, t = 0) {
  return e < t ? 'up' : 'down';
}
var SA = 4;
function wA(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  b.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return qi(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = xA(f.current, a);
      a = f.current;
      let m = d !== c;
      if (((c = d), m)) l = f.current;
      else {
        if (Math.abs(f.current - l) < SA) return;
        let v = d === r ? i : void 0;
        v !== u && t(v), (u = v);
      }
    });
  }, [r, o, i, s, t]);
}
var kA = new Set([
    'threshold',
    'animateOnce',
    'opacity',
    'targetOpacity',
    'x',
    'y',
    'scale',
    'transition',
    'rotate',
    'rotateX',
    'rotateY',
    'perspective',
    'enter',
    'exit',
    'animate',
    'styleAppearEffectEnabled',
    'targets',
    'scrollDirection',
  ]),
  CA = ['animate', 'animate'],
  lS = { inputRange: [], outputRange: [] };
function TA(e, t, n) {
  let r = Uw(e, t),
    i = [...CA],
    o = r[0];
  if (!Tn(o)) return lS;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift('initial', 'initial')), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!Tn(a)) return lS;
    r.push(a + 1), i.push('exit');
  }
  return { inputRange: r, outputRange: i };
}
function Rp(e) {
  return {
    x: e?.x ?? He.x,
    y: e?.y ?? He.y,
    scale: e?.scale ?? He.scale,
    opacity: e?.opacity ?? He.opacity,
    transformPerspective: e?.transformPerspective ?? He.transformPerspective,
    rotate: e?.rotate ?? He.rotate,
    rotateX: e?.rotateX ?? He.rotateX,
    rotateY: e?.rotateY ?? He.rotateY,
    skewX: e?.skewX ?? He.skewX,
    skewY: e?.skewY ?? He.skewY,
    transition: e?.transition ?? void 0,
  };
}
function EA({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return b.useMemo(
    () => ({
      initial: r ?? Rp({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Rp({ opacity: t }),
      exit: i ?? Rp(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function RA(e, t) {
  let n = ci(),
    r = EA(e),
    i = e.styleAppearEffectEnabled,
    o = Ww(i ? r.initial : r.animate, i),
    s = b.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = b.useRef(),
    l = b.useCallback(async ({ transition: d, ...m }, y) => {
      let v = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          Un.map((S) => {
            y && o.values[S].set(r.initial[S] ?? He[S]);
            let p = m[S] ?? He[S],
              h = er.get(t.current);
            return (
              h && typeof p != 'object' && h.setBaseTarget(S, p),
              new Promise((g) => {
                if (n && S !== 'opacity') g();
                else {
                  let x = {
                    restDelta: S === 'scale' ? 0.001 : void 0,
                    ...v,
                    onComplete: () => g(),
                  };
                  Qi(o.values[S], p, x);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  lD(
    t,
    (d) => {
      let { isPlaying: m, lastAppearState: y } = s.current;
      if (m) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    b.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        m = 'initial';
      return qi(({ y }) => {
        let { targets: v } = e;
        if (!v || !v[0] || (v[0].ref && !v[0].ref.current)) return;
        let { inputRange: S, outputRange: p } = TA(
          v,
          (e.threshold ?? 0) * y.containerLength,
          !!e.exit
        );
        if (S.length === 0 || S.length !== p.length) return;
        let h = fs(y.current, S, p);
        if ((e.animateOnce && d[h]) || ((d[h] = !0), m === h)) return;
        m = h;
        let g = Be(r)[h];
        g && l(g);
      });
    }, [f]),
    wA(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var PA = new Set([
    'transformViewportThreshold',
    'styleTransformEffectEnabled',
    'transformTargets',
    'spring',
    'transformTrigger',
  ]),
  _A = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  Xw = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function FA(e, t) {
  let n = b.useRef({});
  b.useEffect(() => {
    if (t !== void 0)
      for (let r of Fi(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = If({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Me.isProcessing)
          ) {
            let l = performance.now() - Me.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function IA(e, t) {
  let n = Xw();
  return {
    inputRange: Uw(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of Un)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function LA(e) {
  var t;
  let n = Xw();
  for (let { target: r } of e)
    for (let i of Un) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var cS = [0, 1];
function MA(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = ci(),
    a = Ww(_A(n, s), t);
  return (
    b.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== 'onScrollTarget') {
          let l = LA(n);
          return qi(
            ({ y: c }) => {
              for (let u of Un)
                (s && u !== 'opacity') ||
                  (cS.length === l[u].length &&
                    l[u][0] !== void 0 &&
                    a.values[u].set(fs(c.progress, cS, l[u])));
            },
            e === 'onInView'
              ? {
                  target: o.current ?? void 0,
                  offset: ['start end', 'end end'],
                }
              : void 0
          );
        } else
          return qi(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = IA(
              n,
              i * l.containerLength
            );
            if (c.length !== 0)
              for (let f of Un)
                (s && f !== 'opacity') ||
                  (c.length === u[f].length &&
                    u[f][0] !== void 0 &&
                    a.values[f].set(fs(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    FA(a.values, r),
    a
  );
}
var Yw = {
    parallax: hA,
    styleAppear: kA,
    styleTransform: PA,
    loop: cA,
    presence: vA,
  },
  OA = Fi(Yw);
function uS(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function DA(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = lA(n);
    if (r)
      for (let i of OA) {
        let o = Yw[i];
        if (o?.has(r)) {
          t[i][r] = Be(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = Be(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = uS(
      'parallaxTransformEnabled',
      'speed',
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = uS(
      'styleAppearEffectEnabled',
      'animateOnce',
      t.styleAppear
    )),
    t
  );
}
var Ur = (e) => e.reduce((t, n) => (t += n), 0),
  fS = (e) => e.reduce((t, n) => (t = t * n), 1),
  AA = 'current';
function VA(e) {
  return Ve(e) && AA in e;
}
function BA(e, t) {
  if (!e || !Ve(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !jw(n) || (Tn(r.get()) && t[n].push(r));
  }
}
function ia(e) {
  return Ce(e) || Array.isArray(e);
}
var O6 = (e) =>
  b.forwardRef((t, n) => {
    if (t.__withFX)
      return C(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (oe.current() === oe.canvas) {
      let ne = ia(t.animate) ? t.animate : void 0,
        re = ia(t.initial) ? t.initial : void 0;
      return C(e, { ...t, animate: ne, initial: re, exit: void 0, ref: n });
    }
    let r = b.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = DA(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: m = !1,
      } = t,
      y = Dn(f ?? 1),
      { values: v } = gA(l, i, m, t.style, t[Ka]),
      { values: S, style: p } = pA(o, i),
      { values: h } = MA(a, i),
      { values: g } = RA(s, i),
      { values: x } = fA(c),
      k = b.useMemo(
        () => ({
          scale: [g.scale, x.scale, v.scale, h.scale],
          opacity: [g.opacity, x.opacity, v.opacity, y, h.opacity],
          x: [g.x, x.x, v.x, h.x],
          y: [g.y, x.y, S.y, v.y, h.y],
          rotate: [g.rotate, x.rotate, v.rotate, h.rotate],
          rotateX: [g.rotateX, x.rotateX, v.rotateX, h.rotateX],
          rotateY: [g.rotateY, x.rotateY, v.rotateY, h.rotateY],
          skewX: [g.skewX, x.skewX, v.skewX, h.skewX],
          skewY: [g.skewY, x.skewY, v.skewY, h.skewY],
          transformPerspective: [
            h.transformPerspective,
            g.transformPerspective,
          ],
        }),
        [y, h, S, g, x, v]
      );
    BA(t.style, k);
    let w = vt(k.scale, fS),
      T = vt(k.opacity, fS),
      E = vt(k.x, Ur),
      I = vt(k.y, Ur),
      F = vt(k.rotate, Ur),
      B = vt(k.rotateX, Ur),
      V = vt(k.rotateY, Ur),
      Z = vt(k.skewX, Ur),
      te = vt(k.skewY, Ur),
      j = vt(k.transformPerspective, Ur),
      { drag: ie, dragConstraints: U } = u;
    yO(ie && VA(U) ? U : void 0);
    let X = {
      opacity: T,
      scale: w,
      x: E,
      y: I,
      rotate: F,
      rotateX: B,
      rotateY: V,
      skewX: Z,
      skewY: te,
    };
    kt(d) && (X.transformPerspective = j);
    let N = ia(t.animate) ? t.animate : void 0,
      J = ia(t.initial) ? t.initial : void 0,
      he = ia(t.exit) ? t.exit : void 0,
      ue = m && !l.presenceInitial ? { initial: J, animate: N, exit: he } : {};
    return C(e, {
      ...u,
      ...ue,
      __withFX: !0,
      style: { ...t.style, ...p, ...X },
      values: v,
      ref: i,
    });
  });
function zp(e, t) {
  Vo(e) ? e(t) : Gw(e) && (e.current = t);
}
function Gw(e) {
  return Ve(e) && 'current' in e;
}
function dS(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      (e.current = n), t(n);
    },
  };
}
function zA(...e) {
  return (t) => e.forEach((n) => zp(n, t));
}
function pu(e) {
  let t = Kt(() => $A(e));
  return t.useSetup(e), t.cloneAsElement;
}
function $A(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = hS(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = hS(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        'useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.'
      );
    return (
      (r = !0),
      En.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      En.map(s, (l) => {
        if (Jt(l)) {
          let c = 'ref' in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return mn(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return C(Ie, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function hS(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    zp(n, r), zp(t, r);
  };
}
var Kw = b.createContext({});
function $6() {
  return b.useContext(Kw);
}
var N6 = b.forwardRef(({ width: e, children: t, ...n }, r) => {
    let i = b.useMemo(() => ({ width: e }), [e]),
      o = pu(r);
    return C(Kw.Provider, { value: i, children: o(t, n) });
  }),
  NA = (e) =>
    b.forwardRef((t, n) => {
      let r = Ca(t);
      return C(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  HA = class extends ye {
    constructor() {
      super(...arguments), R(this, 'state', { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return (
        console.error(
          'Error in component (see previous error log). This component has been hidden.'
        ),
        { hasError: !0 }
      );
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  jA = b.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = Kt(() => (t ? `${t}-container` : void 0));
    return C(Bt.div, {
      layoutId: i,
      ...n,
      ref: r,
      children: C(Ho.Provider, {
        value: !0,
        children: C(yL, {
          enabled: !1,
          children: C(zy, {
            id: t ?? '',
            inherit: 'id',
            children: C(HA, {
              children: b.Children.map(e, (o) =>
                b.isValidElement(o) ? b.cloneElement(o, { layoutId: t }) : o
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Y6 = NA(jA),
  WA = b.createContext(void 0),
  UA = (() => {
    var e;
    if (!Ii()) return new Set();
    let t =
      (e = document.querySelector('style[data-framer-css-ssr-minified]')) ==
      null
        ? void 0
        : e.getAttribute('data-framer-components');
    return t ? new Set(t.split(' ')) : new Set();
  })(),
  qw = 'data-framer-css-ssr',
  XA = (e, t, n) =>
    b.forwardRef((r, i) => {
      let { sheet: o, cache: s } = b.useContext(WA) ?? {};
      if (!Ii()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return ae(Ie, {
          children: [
            C('style', {
              [qw]: !0,
              'data-framer-component': n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            C(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        b.useInsertionEffect(() => {
          if (n && UA.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && cw(l, o, s));
        }, []),
        C(e, { ...r, ref: i })
      );
    }),
  am = b.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  eu = 'framer-cursor-none',
  $p = 'framer-pointer-events-none',
  YA = b.memo(function ({ children: t }) {
    let n = Kt(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = ci();
    return ae(am.Provider, { value: n, children: [t, !r && C(JA, {})] });
  }),
  GA = (() =>
    XA(YA, [
      `.${eu}, .${eu} * { cursor: none !important; }`,
      `.${$p}, .${$p} * { pointer-events: none !important; }`,
    ]))(),
  KA = (() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: 'none',
  }))();
function qA(e) {
  return !(!e || e.placement || e.alignment);
}
function Bc(e) {
  switch (e) {
    case 'start':
      return '0%';
    case 'center':
      return '-50%';
    case 'end':
      return '-100%';
    default:
      St(e);
  }
}
function QA(e, t = 'center') {
  switch (e) {
    case 'top':
      return `${Bc(t)}, -100%`;
    case 'right':
      return `0%, ${Bc(t)}`;
    case 'bottom':
      return `${Bc(t)}, 0%`;
    case 'left':
      return `-100%, ${Bc(t)}`;
    default:
      return '-50%, -50%';
  }
}
var pS = 'data-framer-portal-id';
function mS(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute('data-framer-cursor');
    if (r) return r;
    if (n.hasAttribute(pS)) {
      let i = n.getAttribute(pS);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function ZA(e) {
  for (let t in e) return !1;
  return !0;
}
var JA = b.memo(function () {
  let { onRegisterCursors: t } = O(am),
    n = Dn(0),
    r = Dn(0),
    i = Dn(0),
    o = b.useRef(null),
    s = b.useRef({ cursors: {}, cursorHash: void 0 }),
    a = fu(),
    l = !ZA(s.current.cursors);
  b.useEffect(() => {
    let w = 0,
      T = 0;
    function E() {
      n.set(w), r.set(T), Qi(i, 1, { type: 'tween', duration: 0.2 });
    }
    function I(V) {
      V.pointerType !== 'touch' &&
        ((w = V.clientX), (T = V.clientY), Y.update(E));
    }
    let F = () => {
      if (!l) return;
      let V = mS(w, T);
      V !== s.current.cursorHash &&
        ((s.current.cursorHash = V), Y.update(() => a()));
    };
    Y.read(F, !0);
    function B(V) {
      if (V.target === o.current || !o.current) return;
      let Z = new PointerEvent(V.type, {
        bubbles: !0,
        cancelable: V.cancelable,
        pointerType: V.pointerType,
        pointerId: V.pointerId,
        composed: V.composed,
        isPrimary: V.isPrimary,
        buttons: V.buttons,
        button: V.button,
      });
      Y.update(() => {
        var te;
        (te = o.current) == null || te.dispatchEvent(Z);
      });
    }
    return (
      Ot.addEventListener('pointermove', I),
      document.addEventListener('pointerdown', B),
      document.addEventListener('pointerup', B),
      () => {
        Ot.removeEventListener('pointermove', I),
          document.removeEventListener('pointerdown', B),
          document.removeEventListener('pointerup', B),
          mt(F);
      }
    );
  }, [i, n, r, l, a]),
    b.useEffect(() => {
      function w() {
        Qi(i, 0, { type: 'tween', duration: 0.2 });
      }
      return (
        document.addEventListener('mouseleave', w),
        Ot.addEventListener('blur', w),
        () => {
          document.removeEventListener('mouseleave', w),
            Ot.removeEventListener('blur', w);
        }
      );
    }, [i]),
    b.useLayoutEffect(() => {
      function w(E) {
        (s.current.cursors = E),
          (s.current.cursorHash = mS(n.get(), r.get())),
          a();
      }
      let T = t(w);
      return () => {
        T(), document.body.classList.toggle(eu, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = qA(f);
  b.useLayoutEffect(() => {
    document.body.classList.toggle(eu, d);
  }, [d]);
  let m = f?.component,
    y = f?.transition ?? { duration: 0 },
    v = Jf(n, y),
    S = Jf(r, y),
    p = vt(() => {
      var w;
      return v.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    h = vt(() => {
      var w;
      return S.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    g = f?.alignment,
    x = f?.placement,
    k = b.useCallback((w, T) => `translate(${QA(x, g)}) ${T}`, [g, x]);
  return !f || !m
    ? null
    : C(m, {
        transformTemplate: k,
        style: { ...KA, x: p, y: h, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: $p,
      });
});
function J6(e) {
  let { registerCursors: t } = O(am),
    n = Kt(() => e);
  b.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var eV = b.createContext(void 0),
  lm = class {
    constructor(e) {
      (this.resolver = e), R(this, 'status');
    }
    static is(e) {
      return e instanceof lm;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== 'pending' ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: 'fulfilled', value: t };
        },
        (t) => {
          this.status = { type: 'rejected', error: t };
        }
      );
      return (this.status = { type: 'pending', promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error('Need to call preload() before read()');
      switch (e.type) {
        case 'pending':
          throw new Error('Need to wait for preload() to resolve');
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw e.error;
        default:
          St(e);
      }
    }
  };
function cm(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : cm(e.parentElement, t)
    : null;
}
var vS = 'element',
  tV = 'collection',
  nV = 'collectionItemId',
  rV = 'pathVariables',
  Qw = 'framer/page-link,';
function Zw(e) {
  return Ce(e) && e.startsWith(`data:${Qw}`);
}
function um(e) {
  if (Zw(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Qw.length),
        r = t.searchParams,
        i = r.has(vS) ? r.get(vS) : void 0,
        o,
        s = r.get(tV),
        a = r.get(nV),
        l = r.get(rV);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === 'none' ? null : n,
        element: i === 'none' ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function iV(e, t, n) {
  var r;
  let i = t.getAttribute('data-framer-page-link-target'),
    o,
    s;
  if (i) {
    o = t.getAttribute('data-framer-page-link-element') ?? void 0;
    let l = t.getAttribute('data-framer-page-link-path-variables');
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute('href');
    if (!l) return !1;
    let c = um(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var oV = 500,
  sV = 0.9,
  aV = 1.7,
  lV = 4,
  cV = 1 / 0,
  _o = new WeakMap(),
  zc = new Set(),
  Fo = new Map();
function uV() {
  var e;
  let t =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection ||
      {},
    n = navigator.deviceMemory && navigator.deviceMemory > aV,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ''),
      (i = t.saveData || r.includes('2g')),
      (o = r === '3g' || n ? lV : cV);
  }
  (e = t.addEventListener) == null || e.call(t, 'change', s), s();
  let a = new IntersectionObserver(u, { threshold: sV }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let m = Fo.get(f);
    if (!m?.size || zc.has(f)) return;
    ++l, zc.add(f);
    let y = JS(f).catch(() => {});
    a.unobserve(d), _o.delete(d);
    for (let v of m) a.unobserve(v), _o.delete(v);
    m.clear(), Fo.delete(f), await y, --l;
  }
  function u(f) {
    var d;
    for (let m of f) {
      let y = m.target,
        v = _o.get(y);
      if (!v || zc.has(v)) {
        a.unobserve(y), _o.delete(y);
        continue;
      }
      let S = Fo.get(v),
        p = ((d = Fo.get(v)) == null ? void 0 : d.size) ?? 0;
      if (m.isIntersecting) {
        if (l >= o) continue;
        S ? S.add(y) : Fo.set(v, new Set([y])),
          setTimeout(c.bind(void 0, v, y), oV);
      } else S && S.delete(y), p <= 1 && Fo.delete(v);
    }
  }
  return (f, d) => {
    if (!zc.has(f))
      return (
        _o.set(d, f),
        a.observe(d),
        () => {
          _o.delete(d), a.unobserve(d);
        }
      );
  };
}
var fV = !Kp || typeof IntersectionObserver > 'u' ? null : uV(),
  Pp = {},
  $c = new WeakMap();
function Jw(e, t, n) {
  var r, i;
  let o =
    (i = (r = $c?.get(n ?? Pp)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = $c.get(n ?? Pp) ?? new Map();
  $c.set(n ?? Pp, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new lm(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error('Collection does not contain utility functions');
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : 'Unknown error'
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var dV = 'webPageId';
function tu(e) {
  return !!(e && typeof e == 'object' && dV in e);
}
function hV(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function nu(e) {
  if (!Zw(e)) return e;
  let t = um(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: hV(i) };
}
var ek = /:([a-z]\w*)/gi,
  pV = xe(void 0);
function tk() {
  var e;
  let t = O(pV),
    n = (e = lu()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function nk(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(ek))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function fm(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith('#') || e.startsWith('/') || e.startsWith('.'));
}
function mV(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function dm(e, t) {
  return e !== void 0 ? (e ? '_blank' : void 0) : t ? void 0 : '_blank';
}
function Np(e, t = void 0) {
  let n = fm(e),
    r = dm(t, n);
  return {
    href: mV(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : 'noopener',
  };
}
function rk(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = cm(o.target);
    if (!l || l.getAttribute('target') === '_blank') return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && HS(c?.page) && (await c.page.preload()),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function vV(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      de(u, 'unresolvedSlug should be defined');
      let f = Jw(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let m = f.read();
        m && (l[c] = m);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function gV(e, t, n, r, i, o) {
  let s = fm(e);
  if (!n.routes || !n.getRoute || !r || !s) return Np(e, t);
  try {
    let [a, l] = e.split('#', 2);
    de(a !== void 0, 'A href must have a defined pathname.');
    let [c] = a.split('?', 2);
    de(c !== void 0, 'A href must have a defined pathname.');
    let { routeId: u, pathVariables: f } = ZS(n.routes, c),
      d = n.getRoute(u);
    if (d) {
      let m = Object.assign({}, i, f),
        y = au(d, {
          currentRoutePath: r.path,
          currentPathVariables: r.pathVariables,
          hash: l || void 0,
          pathVariables: m,
          preserveQueryParams: n.preserveQueryParams,
        }),
        v = dm(t, !0);
      return { href: y, target: v, onClick: rk(n, u, l || void 0, m, o) };
    }
  } catch {}
  return Np(e, t);
}
function yV(e, t, n) {
  var r;
  if (Ce(e)) {
    let o = fm(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split('#', 2);
    if (s === void 0) return;
    let [a] = s.split('?', 2);
    if (a === void 0) return;
    let { routeId: l } = ZS(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var oN = $e(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = No(),
      a = lu(),
      l = tk(),
      { activeLocale: c } = QS(),
      u = D(null),
      f = pe(() => {
        let y,
          v = (p) => {
            var h;
            if (p === null) {
              y?.(), (y = void 0);
              return;
            }
            let g = tu(t) ? t : nu(t);
            if (!g) return;
            let x = yV(g, s, a);
            x && (y = (h = fV) == null ? void 0 : h(x, p));
          },
          S = Jt(e) && 'ref' in e;
        return S && Gw(e.ref)
          ? dS(e.ref, v)
          : S && Vo(e.ref)
          ? zA(e.ref, v)
          : dS(u, v);
      }, [t, s, a, e]),
      d = pu(o),
      m = pe(() => {
        var y;
        if (!t) return {};
        let v = tu(t) ? t : nu(t);
        if (!v) return {};
        if (Ce(v)) return gV(v, n, s, a, l, r);
        let {
            webPageId: S,
            hash: p,
            pathVariables: h,
            hashVariables: g,
            unresolvedHashSlugs: x,
            unresolvedPathSlugs: k,
          } = v,
          w = vV(k, x, s.collectionUtils, c),
          T = { ...l, ...h, ...w?.path },
          E = { ...l, ...g, ...w?.hash },
          I = dm(n, !0),
          F = (y = s.getRoute) == null ? void 0 : y.call(s, S),
          B = au(F, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: p,
            pathVariables: T,
            hashVariables: E,
            preserveQueryParams: s.preserveQueryParams,
          }),
          V = B.split('#', 2)[1];
        return {
          href: B,
          target: I,
          onClick: rk(s, S, V, T, r),
          'data-framer-page-link-current': (a && nk(a, v, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...m, ref: f });
  }
);
function bV(e, t, n, r) {
  let i = tu(e) ? e : nu(e);
  if (!tu(i)) return Ce(e) ? Np(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let o = t.getRoute(t.currentRouteId),
    {
      webPageId: s,
      hash: a,
      pathVariables: l,
      hashVariables: c,
      unresolvedHashSlugs: u,
      unresolvedPathSlugs: f,
    } = i,
    d = t.getRoute(s),
    m = f || u ? r?.(f, u) : void 0,
    y = Object.assign({}, t.currentPathVariables, n, l, m?.path),
    v = Object.assign({}, t.currentPathVariables, n, c, m?.hash);
  return au(d, {
    currentRoutePath: o?.path,
    currentPathVariables: t.currentPathVariables,
    hash: a,
    pathVariables: y,
    hashVariables: v,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
  });
}
function lN({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  pathVariables: r,
  routes: i,
  collectionUtils: o,
  notFoundPage: s,
  isReducedMotion: a = !1,
  includeDataObserver: l = !1,
  localeId: c,
  locales: u,
  preserveQueryParams: f,
  enableImproveInpDuringHydration: d,
  addHydrationMarkers: m = !1,
}) {
  if (
    (b.useEffect(() => {
      t || rw.start();
    }, []),
    t)
  )
    return C(Ay, {
      reducedMotion: a ? 'user' : 'never',
      children: C(GA, {
        children: C(NI, {
          initialRoute: n,
          initialPathVariables: r,
          initialLocaleId: c,
          routes: i,
          collectionUtils: o,
          notFoundPage: s,
          locales: u,
          defaultPageStyle: { minHeight: '100vh', width: 'auto' },
          preserveQueryParams: f,
          enableImproveInpDuringHydration: d,
          addHydrationMarkers: m,
        }),
      }),
    });
  {
    let y = l ? sA : b.Fragment;
    return C(y, {
      children: C(II, {
        routes: i,
        children: C(nA, {
          children: b.isValidElement(e) ? e : b.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function xV(e, t, n) {
  let r = En.map(e, (i) => (Jt(i) ? mn(i, t) : i));
  return n ? r : C(Ie, { children: r });
}
var ik = b.createContext(void 0),
  gS = 'ssr-variant';
function yS(e, t, n, r, i, o, s, a) {
  let l = b.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !b.isValidElement(c))
    return (
      console.warn(
        'PropertyOverrides: expected exactly one React element for a child',
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [S] of Object.entries(r)) {
    if (S === i) continue;
    let p = e[S];
    if (!p || !wV(c.props, p)) {
      f.push(S);
      continue;
    }
    let h = bS([S], o);
    h.length && u.push({ variants: h, propOverrides: p });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    m = bS(d, o);
  m.length && u.unshift({ variants: m });
  let y = `.${gS} { display: contents }`,
    v = [];
  for (let { variants: S, propOverrides: p } of u) {
    if (a && !S.includes(a)) continue;
    let h = S.join('+'),
      g = C(
        ik.Provider,
        { value: new Set(S), children: s(c, p ? { ...n, ...p } : n) },
        h
      ),
      x = SV(S, o, r);
    x.length
      ? (de(u.length > 1, 'Must branch out when there are hiddenClassNames'),
        (g = C('div', { className: `${gS} ${x.join(' ')}`, children: g }, h)))
      : de(u.length === 1, 'Cannot branch out when hiddenClassNames is empty'),
      v.push(g);
  }
  return (
    de(
      !a || v.length === 1,
      'Must render exactly one branch when activeVariantId is given'
    ),
    ae(Ie, {
      children: [!o && !Ii() && C('style', { [qw]: !0, children: y }), v],
    })
  );
}
function SV(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    if (e.includes(i) || s) continue;
    let a = o.split('-')[2];
    r.push(`hidden-${a}`);
  }
  return r;
}
function bS(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function wV(e, t) {
  for (let n of Object.keys(t)) if (!je(e[n], t[n], !0)) return !0;
  return !1;
}
function kV(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var CV = () => () => {},
  TV = () => !0,
  EV = () => !1,
  dN = b.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = pu(o),
      a = b.useContext(ik),
      l = b.useSyncExternalStore(CV, EV, TV),
      c = Kt(() => (l ? (Ii() ? 1 : 2) : 0)),
      u = b.useContext(eV);
    if (!u)
      return (
        console.warn('PropertyOverrides is missing GeneratedComponentContext'),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, kV(t, i, n));
      case 1:
        return yS(n, r, i, d, f, a, s, t);
      case 2:
        return yS(n, r, i, d, f, a, xV, void 0);
      default:
        St(c);
    }
  }),
  hN = $e(function ({ links: t, children: n, ...r }, i) {
    let o = No(),
      { activeLocale: s } = QS(),
      a = pu(i),
      l = [],
      c = t.map((f) =>
        bV(f.href, o, f.implicitPathVariables, (d, m) => {
          function y(v) {
            let S = {};
            for (let p in v) {
              let h = v[p];
              de(o.collectionUtils, 'collectionUtils should be defined'),
                de(h, 'unresolvedSlug be defined');
              let g = Jw(h, o.collectionUtils, s),
                x = g.preload();
              if (x) l.push(x);
              else {
                let k = g.read();
                k && (S[p] = k);
              }
            }
            return S;
          }
          return { path: y(d), hash: y(m) };
        })
      );
    if (l.length > 0) throw Promise.allSettled(l);
    let u = n(c);
    return a(u, r);
  });
var RV = On(UF(), 1);
function PV(e) {
  return {
    trace(...t) {
      var n;
      return (n = Qe.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = Qe.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = Qe.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = Qe.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = Qe.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function _V(e) {
  return Zp(e) && e.every(Ve);
}
function ok(e) {
  return Ve(e) && Vo(e.read) && Vo(e.preload);
}
function FV(e) {
  return _V(e) || ok(e);
}
function IV(e) {
  return Ve(e) && Ve(e.schema);
}
function hm(e) {
  return Ve(e) && Ve(e.collectionByLocaleId);
}
async function xS(e, t) {
  return ok(e) ? (await e.preload(t), e.read(t)) : e;
}
var LV = class {
    constructor(e, t) {
      (this.collection = e),
        (this.locale = t),
        R(this, 'schema'),
        R(this, 'indexes', []);
      let n = pw(e);
      de(n, 'Collection does not have properties');
      let r = { id: { type: 'string', isNullable: !1 } },
        i = Object.entries(n);
      for (let [o, s] of i) s && (r[o] = { type: s.type, isNullable: !0 });
      this.schema = r;
    }
    getDatabaseItem(e, t) {
      let n = {};
      for (let r in this.schema) {
        let i = e[r];
        if (Bo(i)) continue;
        let o = this.schema[r];
        kt(o) || (n[r] = { type: o.type, value: i });
      }
      return { pointer: t, data: n };
    }
    async resolveRichText(e) {
      if (lm.is(e)) {
        let t = e.preload();
        return t && (await t), e.read();
      }
      return e;
    }
    async scanItems() {
      return (await xS(this.collection, this.locale)).map((t, n) => {
        let r = String(n);
        return this.getDatabaseItem(t, r);
      });
    }
    async resolveItems(e) {
      let t = await xS(this.collection, this.locale);
      return e.map((n) => {
        let r = Number(n),
          i = t[r];
        return de(i, "Can't find collection item"), this.getDatabaseItem(i, n);
      });
    }
    compareItems(e, t) {
      return Number(e.pointer) - Number(t.pointer);
    }
  },
  dn = {
    equal(e, t, n) {
      return e?.type !== t?.type ? !1 : oa(e, t, n) === 0;
    },
    lessThan(e, t, n) {
      return e?.type !== t?.type ? !1 : oa(e, t, n) < 0;
    },
    lessThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : oa(e, t, n) <= 0;
    },
    greaterThan(e, t, n) {
      return e?.type !== t?.type ? !1 : oa(e, t, n) > 0;
    },
    greaterThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : oa(e, t, n) >= 0;
    },
    stringify(e) {
      if (e === null) return 'null';
      switch (e.type) {
        case 'boolean':
        case 'number':
          return String(e.value);
        case 'string':
          return `'${e.value}'`;
        case 'enum':
          return `'${e.value}' /* Enum */`;
        case 'color':
          return `'${e.value}' /* Color */`;
        case 'date':
          return `'${e.value}' /* Date */`;
        case 'richtext':
          return 'RichText';
        case 'responsiveimage':
          return 'ResponsiveImage';
        case 'file':
          return 'File';
        case 'link':
          return Ce(e.value) ? `'${e.value}' /* Link */` : 'Link';
        default:
          St(e);
      }
    },
  };
function oa(e, t, n) {
  if (Ae(e) || Ae(t)) return de(e === t), 0;
  switch (e.type) {
    case 'boolean':
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case 'color':
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case 'date': {
      de(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case 'enum':
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case 'file':
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case 'responsiveimage': {
      de(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case 'link': {
      de(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case 'number':
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case 'richtext': {
      de(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case 'string': {
      de(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      St(e);
  }
}
var Hp = 'index',
  xt = class {
    static from(e, t) {
      return jn(e, t, void 0);
    }
  },
  it = class extends xt {
    constructor(e, t) {
      super(),
        (this.schema = e),
        (this.name = t),
        R(this, 'definition'),
        t === Hp
          ? (this.definition = { type: 'number', isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof it &&
        je(this.definition, e.definition) &&
        je(e.name, this.name)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (kt(e) || t === Hp) throw new Error(`Can't evaluate identifier: ${t}`);
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  Fe = class extends xt {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return dn.stringify(this.value);
    }
    static fromNull() {
      return new Fe(null, null);
    }
    static fromBoolean(e) {
      return new Fe(
        { type: 'boolean', isNullable: Ae(e) },
        Ae(e) ? null : { type: 'boolean', value: e }
      );
    }
    static fromDate(e) {
      return new Fe(
        { type: 'date', isNullable: Ae(e) },
        Ae(e) ? null : { type: 'date', value: e.toISOString() }
      );
    }
    static fromEnum(e) {
      return new Fe(
        { type: 'enum', isNullable: Ae(e) },
        Ae(e) ? null : { type: 'enum', value: e }
      );
    }
    static fromNumber(e) {
      return new Fe(
        { type: 'number', isNullable: Ae(e) },
        Ae(e) ? null : { type: 'number', value: e }
      );
    }
    static fromString(e) {
      return new Fe(
        { type: 'string', isNullable: Ae(e) },
        Ae(e) ? null : { type: 'string', value: e }
      );
    }
    equals(e) {
      return (
        e instanceof Fe &&
        je(this.definition, e.definition) &&
        je(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  Ea = class extends xt {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        R(this, 'collation', { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (kt(t)) throw new Error('Missing argument in function call');
      return t;
    }
    equals(e) {
      return (
        e instanceof Ea &&
        je(this.constructor, e.constructor) &&
        je(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  mu = class extends Ea {
    constructor() {
      super(...arguments),
        R(this, 'definition', mu.getDefinition()),
        R(this, 'sourceExpression', this.getArgumentExpression(0)),
        R(this, 'targetExpression', this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ae(e) || e.type !== 'string' || Ae(t) || t.type !== 'string')
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: 'boolean', value: this.getValue(t, n) };
    }
  },
  vu = class extends Ea {
    constructor() {
      super(...arguments),
        R(this, 'definition', vu.getDefinition()),
        R(this, 'sourceExpression', this.getArgumentExpression(0)),
        R(this, 'targetExpression', this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ae(e) || e.type !== 'string' || Ae(t) || t.type !== 'string')
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: 'boolean', value: this.getValue(t, n) };
    }
  },
  gu = class extends Ea {
    constructor() {
      super(...arguments),
        R(this, 'definition', gu.getDefinition()),
        R(this, 'sourceExpression', this.getArgumentExpression(0)),
        R(this, 'targetExpression', this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ae(e) || e.type !== 'string' || Ae(t) || t.type !== 'string')
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: 'boolean', value: this.getValue(t, n) };
    }
  },
  ru = class extends xt {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, 'definition'),
        R(this, 'collation', { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = ru.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error('Incompatible types in CASE expression');
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = 'CASE';
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += ' END'),
        e
      );
    }
    equals(e) {
      return (
        e instanceof ru &&
        je(this.valueExpression, e.valueExpression) &&
        je(this.conditions, e.conditions) &&
        je(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? dn.equal(s, r, this.collation) : Li(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  MV = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  sk = class extends xt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof sk &&
        je(this.constructor, e.constructor) &&
        je(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  pa = class extends sk {
    constructor() {
      super(...arguments), R(this, 'definition', pa.getDefinition());
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: 'boolean', value: !Li(t) };
    }
  },
  ma = class extends xt {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        R(this, 'definition', ma.getDefinition());
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(' AND ');
    }
    equals(e) {
      return (
        e instanceof ma &&
        je(this.constructor, e.constructor) &&
        je(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  Ri = class extends ma {
    constructor() {
      super(...arguments), R(this, 'operator', 'AND');
    }
    evaluate(e) {
      return {
        type: 'boolean',
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Li(r);
        }),
      };
    }
  },
  la = class extends ma {
    constructor() {
      super(...arguments), R(this, 'operator', 'OR');
    }
    evaluate(e) {
      return {
        type: 'boolean',
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Li(r);
        }),
      };
    }
  },
  Xn = class extends xt {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, 'definition', Xn.getDefinition()),
        R(this, 'collation', { type: 0 });
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof Xn &&
        je(this.constructor, e.constructor) &&
        je(this.leftExpression, e.leftExpression) &&
        je(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  zo = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '=');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: 'boolean', value: dn.equal(t, n, this.collation) };
    }
  },
  $o = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '!=');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: 'boolean', value: !dn.equal(t, n, this.collation) };
    }
  },
  va = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '<');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: 'boolean', value: dn.lessThan(t, n, this.collation) };
    }
  },
  ga = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '<=');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: 'boolean',
        value: dn.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  ya = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '>');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: 'boolean', value: dn.greaterThan(t, n, this.collation) };
    }
  },
  ba = class extends Xn {
    constructor() {
      super(...arguments), R(this, 'operator', '>=');
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: 'boolean',
        value: dn.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  Ra = class extends xt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Ra &&
        je(this.constructor, e.constructor) &&
        je(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  yu = class extends Ra {
    constructor() {
      super(...arguments),
        R(this, 'dataType', 'BOOLEAN'),
        R(this, 'definition', yu.getDefinition());
    }
    static getDefinition() {
      return { type: 'boolean', isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: 'boolean', value: Li(t) };
    }
  };
function Li(e) {
  switch (e?.type) {
    case 'boolean':
    case 'number':
    case 'string':
      return !!e.value;
  }
  return !1;
}
var pm = class extends Ra {
  constructor() {
    super(...arguments),
      R(this, 'dataType', 'DATE'),
      R(this, 'definition', pm.getDefinition());
  }
  static getDefinition() {
    return { type: 'date', isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = ak(t);
    return Ae(n) ? null : { type: 'date', value: n.toISOString() };
  }
};
function ak(e) {
  switch (e?.type) {
    case 'date':
    case 'number':
    case 'string': {
      let t = new Date(e.value);
      return dw(t) ? t : null;
    }
  }
  return null;
}
var mm = class extends Ra {
  constructor() {
    super(...arguments),
      R(this, 'dataType', 'NUMBER'),
      R(this, 'definition', mm.getDefinition());
  }
  static getDefinition() {
    return { type: 'number', isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = lk(t);
    return Ae(n) ? null : { type: 'number', value: n };
  }
};
function lk(e) {
  switch (e?.type) {
    case 'number':
    case 'string': {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var vm = class extends Ra {
  constructor() {
    super(...arguments),
      R(this, 'dataType', 'STRING'),
      R(this, 'definition', vm.getDefinition());
  }
  static getDefinition() {
    return { type: 'string', isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = ck(t);
    return Ae(n) ? null : { type: 'string', value: n };
  }
};
function ck(e) {
  switch (e?.type) {
    case 'string':
    case 'number':
      return String(e.value);
  }
  return null;
}
function jn(e, t, n) {
  let r = OV(e, t, n),
    i = r instanceof Fe;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new Fe(r.definition, o);
  }
  return r;
}
function OV(e, t, n) {
  switch (e.type) {
    case 'Identifier':
      return DV(e, t);
    case 'LiteralValue':
      return AV(e, n);
    case 'FunctionCall':
      return BV(e, t);
    case 'Case':
      return zV(e, t, n);
    case 'UnaryOperation':
      return $V(e, t);
    case 'BinaryOperation':
      return NV(e, t);
    case 'TypeCast':
      return qV(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function DV(e, t) {
  return new it(t, e.name);
}
function AV(e, t) {
  var n;
  let r = VV(e.value);
  switch (t?.type) {
    case 'boolean': {
      let i = Li(r.value);
      return Fe.fromBoolean(i);
    }
    case 'date': {
      let i = ak(r.value);
      return Fe.fromDate(i);
    }
    case 'enum':
      return ((n = r.value) == null ? void 0 : n.type) === 'string'
        ? Fe.fromEnum(r.value.value)
        : r;
    case 'number': {
      let i = lk(r.value);
      return Fe.fromNumber(i);
    }
    case 'string': {
      let i = ck(r.value);
      return Fe.fromString(i);
    }
  }
  return r;
}
function VV(e) {
  return fw(e)
    ? Fe.fromBoolean(e)
    : dw(e)
    ? Fe.fromDate(e)
    : Tn(e)
    ? Fe.fromNumber(e)
    : Ce(e)
    ? Fe.fromString(e)
    : Fe.fromNull();
}
function BV(e, t) {
  let n = e.arguments.map((r) => jn(r, t, void 0));
  switch (e.functionName) {
    case 'CONTAINS':
      return new mu(n);
    case 'STARTS_WITH':
      return new vu(n);
    case 'ENDS_WITH':
      return new gu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function zV(e, t, n) {
  let r = e.value && jn(e.value, t, void 0),
    i = e.value && xa(e.value, t),
    o = e.conditions.map((a) => {
      let l = jn(a.when, t, i),
        c = jn(a.then, t, n);
      return new MV(l, c);
    }),
    s = e.else && jn(e.else, t, n);
  return new ru(r, o, s);
}
function $V(e, t) {
  let n = jn(e.value, t, void 0);
  switch (e.operator) {
    case 'not':
      return jp(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function jp(e) {
  var t;
  if (e instanceof pa) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === 'boolean'
      ? n
      : new yu(n);
  }
  if (e instanceof zo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new $o(n, r);
  }
  if (e instanceof $o) {
    let { leftExpression: n, rightExpression: r } = e;
    return new zo(n, r);
  }
  if (e instanceof va) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ba(n, r);
  }
  if (e instanceof ga) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ya(n, r);
  }
  if (e instanceof ya) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ga(n, r);
  }
  if (e instanceof ba) {
    let { leftExpression: n, rightExpression: r } = e;
    return new va(n, r);
  }
  if (e instanceof Ri) {
    let { operandExpressions: n } = e,
      r = n.map(jp);
    return new la(r);
  }
  if (e instanceof Ri) {
    let { operandExpressions: n } = e,
      r = n.map(jp);
    return new Ri(r);
  }
  return new pa(e);
}
function NV(e, t) {
  let n =
      e.operator !== 'and' && e.operator !== 'or'
        ? xa(e.left, t) || xa(e.right, t)
        : void 0,
    r = jn(e.left, t, n),
    i = jn(e.right, t, n);
  switch (e.operator) {
    case 'and':
      return HV(r, i);
    case 'or':
      return jV(r, i);
    case '==':
      return WV(r, i);
    case '!=':
      return UV(r, i);
    case '<':
      return XV(r, i);
    case '<=':
      return YV(r, i);
    case '>':
      return GV(r, i);
    case '>=':
      return KV(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function HV(e, t) {
  let n = [];
  return (
    e instanceof Ri ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Ri ? n.push(...t.operandExpressions) : n.push(t),
    new Ri(n)
  );
}
function jV(e, t) {
  let n = [];
  return (
    e instanceof la ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof la ? n.push(...t.operandExpressions) : n.push(t),
    new la(n)
  );
}
function WV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new zo(t, e) : new zo(e, t);
}
function UV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new $o(t, e) : new $o(e, t);
}
function XV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new ya(t, e) : new va(e, t);
}
function YV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new ba(t, e) : new ga(e, t);
}
function GV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new va(t, e) : new ya(e, t);
}
function KV(e, t) {
  let n = e instanceof it;
  return t instanceof it && !n ? new ga(t, e) : new ba(e, t);
}
function qV(e, t) {
  let n = jn(e.value, t, void 0);
  switch (e.dataType) {
    case 'BOOLEAN':
      return QV(n);
    case 'DATE':
      return ZV(n);
    case 'NUMBER':
      return JV(n);
    case 'STRING':
      return e3(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function QV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === 'boolean'
    ? e
    : new yu(e);
}
function ZV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === 'date'
    ? e
    : new pm(e);
}
function JV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === 'number'
    ? e
    : new mm(e);
}
function e3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === 'string'
    ? e
    : new vm(e);
}
function xa(e, t) {
  switch (e.type) {
    case 'Identifier':
      return t3(e, t);
    case 'LiteralValue':
      return;
    case 'FunctionCall':
      return n3(e);
    case 'Case':
      return r3(e, t);
    case 'UnaryOperation':
      return i3(e);
    case 'BinaryOperation':
      return o3(e);
    case 'TypeCast':
      return s3(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function t3(e, t) {
  return t[e.name];
}
function n3(e) {
  switch (e.functionName) {
    case 'CONTAINS':
      return mu.getDefinition();
    case 'STARTS_WITH':
      return vu.getDefinition();
    case 'ENDS_WITH':
      return gu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function r3(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = xa(r.then, t);
    kt(i) || n.push(i);
  }
  if (e.else) {
    let r = xa(e.else, t);
    kt(r) || n.push(r);
  }
  return ru.getDefinition(n) ?? void 0;
}
function i3(e) {
  switch (e.operator) {
    case 'not':
      return pa.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function o3(e) {
  switch (e.operator) {
    case 'and':
    case 'or':
      return ma.getDefinition();
    case '==':
    case '!=':
    case '<':
    case '<=':
    case '>':
    case '>=':
      return Xn.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function s3(e) {
  switch (e.dataType) {
    case 'BOOLEAN':
      return yu.getDefinition();
    case 'DATE':
      return pm.getDefinition();
    case 'NUMBER':
      return mm.getDefinition();
    case 'STRING':
      return vm.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function qr(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ''})`;
}
function Yn(e) {
  return `(items: ${e})`;
}
var Qr = class {
    constructor() {
      R(this, 'executionTime', 0), R(this, 'itemCount', 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  uk = class extends Qr {
    constructor(e) {
      super(), (this.collection = e);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${qr(this.executionTime)} ${Yn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.collection.scanItems();
    }
  },
  hr = class extends Qr {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case 'All':
              return n.type;
            case 'Equals':
            case 'NotEquals':
            case 'LessThan':
            case 'GreaterThan':
            case 'Contains':
            case 'StartsWith':
            case 'EndsWith':
              return `${n.type} ${dn.stringify(n.value)}`;
            default:
              St(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== 'Identifier' ||
          !i ||
          i.type === 'All' ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(', ')}) ${qr(this.executionTime)} ${Yn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  a3 = class extends Qr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${qr(
          this.executionTime - e,
          this.executionTime
        )} ${Yn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new iu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  l3 = class extends Qr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${qr(
          this.executionTime - e,
          this.executionTime
        )} ${Yn(this.itemCount)} ${Yn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new iu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  c3 = class extends Qr {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${qr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Yn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== 'Identifier') continue;
          let i = n.data[r.name];
          i?.type === 'richtext' && this.richTextResolver.resolve(i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  u3 = class extends Qr {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${qr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Yn(this.itemCount)} ${Yn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Li(n);
      });
    }
  },
  f3 = class extends Qr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(', ')}) ${qr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Yn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === 'asc';
          if (r instanceof it && r.name === Hp) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!dn.equal(a, l, o)) {
            if (dn.lessThan(a, l, o) || Bo(a)) return s ? -1 : 1;
            if (dn.greaterThan(a, l, o) || Bo(l)) return s ? 1 : -1;
            throw new Error('Invalid comparison result.');
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  d3 = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  h3 = class extends Qr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          'Infinity'
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? '0'
        }) ${qr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Yn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Bo(t) || t.type !== 'number')) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Bo(t) || t.type !== 'number')) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  iu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new iu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new iu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  p3 = class {
    constructor(e) {
      (this.collection = e), R(this, 'cache', new Map());
    }
    resolve(e) {
      let t = this.cache.get(e);
      if (t) return t;
      let n = this.collection.resolveRichText(e);
      return this.cache.set(e, n), n;
    }
  };
function m3(e, t) {
  var n;
  if (hm(e)) {
    let r = pw(e),
      i = (n = r?.[t.name]) == null ? void 0 : n.title;
    if (i) return `"${t.name}" /* ${i} */`;
  }
  return `"${t.name}"`;
}
function v3(e) {
  return typeof e.value == 'string' ? `'${e.value}'` : e.value;
}
function g3(e, t) {
  return `${t.functionName}(${t.arguments.map((n) => Gt(e, n)).join(', ')})`;
}
function y3(e, t) {
  let n = 'CASE';
  t.value && (n += ` ${Gt(e, t.value)}`);
  for (let r of t.conditions)
    n += ` WHEN ${Gt(e, r.when)} THEN ${Gt(e, r.then)}`;
  return t.else && (n += ` ELSE ${t.else}`), (n += ' END'), n;
}
function b3(e, t) {
  let n = Gt(e, t.value);
  return `${t.operator.toUpperCase()} ${n}`;
}
function x3(e, t) {
  let n = Gt(e, t.left),
    r = Gt(e, t.right),
    i = t.operator.toUpperCase();
  return `${n} ${i} ${r}`;
}
function S3(e, t) {
  return `CAST(${Gt(e, t.value)} as ${t.dataType})`;
}
function Gt(e, t) {
  switch (t.type) {
    case 'Identifier':
      return m3(e, t);
    case 'LiteralValue':
      return v3(t);
    case 'FunctionCall':
      return g3(e, t);
    case 'Case':
      return y3(e, t);
    case 'UnaryOperation':
      return b3(e, t);
    case 'BinaryOperation':
      return x3(e, t);
    case 'TypeCast':
      return S3(e, t);
    default:
      St(t);
  }
}
function w3(e) {
  let t = '';
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== '' &&
        (['SELECT', 'FROM', 'WHERE', 'ORDER', 'LIMIT', 'OFFSET'].includes(r)
          ? (t += `
${r}`)
          : ['AND', 'OR'].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function k3(e) {
  let t = '';
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = Gt(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(', ')}`),
    hm(e.from.data)
      ? (t += ` FROM ${e.from.data.displayName}`)
      : (t += ` FROM ${e.from.data.displayName}`),
    e.where && (t += ` WHERE ${Gt(e.from.data, e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${Gt(e.from.data, n)} ${n.direction ?? 'asc'}`)
        .join(', ')}`),
    e.limit && (t += ` LIMIT ${Gt(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${Gt(e.from.data, e.offset)}`),
    w3(t)
  );
}
var C3 = PV('query-engine');
function T3({ data: e }, t) {
  if (FV(e)) return new LV(e, t);
  if (IV(e)) return e;
  if (hm(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  St(e, 'Unsupported collection type');
}
var pN = class {
  async query(e, t) {
    let n = T3(e.from, t),
      r = new p3(n),
      i = this.createQueryPlan(n, r, e),
      o = await this.executeQueryPlan(n, r, e, i);
    return (
      C3.debug(`Query:
${k3(e)}

${(0, RV.default)(i.inspect())}`),
      o
    );
  }
  createQueryPlan(e, t, n) {
    var r;
    let i = new uk(e);
    if (n.where) {
      let l = xt.from(n.where, e.schema);
      i = Wp(e, l);
    }
    let o =
      (r = n.orderBy) == null
        ? void 0
        : r.map(
            (l) =>
              new d3(xt.from(l, e.schema), l.direction ?? 'asc', { type: 0 })
          );
    i = new f3(i, o ?? [], e);
    let s;
    n.offset && (s = xt.from(n.offset, e.schema));
    let a;
    return (
      n.limit && (a = xt.from(n.limit, e.schema)),
      (s || a) && (i = new h3(i, s, a)),
      n.select.length > 0 && (i = new c3(i, e, t, n.select)),
      i
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = xt.from(a, e.schema),
            c = E3(a),
            u = l.evaluate(o);
          s[c] = await R3(t, u);
        }
        return s;
      })
    );
  }
};
function E3(e) {
  if (e.alias) return e.alias;
  if (e.type === 'Identifier') return e.name;
  throw new Error("Can't serialize expression");
}
async function R3(e, t) {
  return Bo(t) ? null : t.type === 'richtext' ? e.resolve(t.value) : t.value;
}
function Wp(e, t) {
  if (t instanceof Ri) {
    let n = t.operandExpressions.map((r) => Wp(e, r));
    return new l3(n);
  }
  if (t instanceof la) {
    let n = t.operandExpressions.map((r) => Wp(e, r));
    return new a3(n);
  }
  return P3(e, t) ?? F3(e, t);
}
function P3(e, t) {
  var n, r;
  if (t instanceof Xn) return _p(e, t);
  if (t instanceof Ea) return _3(e, t);
  if (
    t instanceof it &&
    ((n = t.definition) == null ? void 0 : n.type) === 'boolean'
  ) {
    let i = Fe.fromBoolean(!0),
      o = new zo(t, i);
    return _p(e, o);
  }
  if (
    t instanceof pa &&
    t.valueExpression instanceof it &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === 'boolean'
  ) {
    let i = Fe.fromBoolean(!0),
      o = new $o(t.valueExpression, i);
    return _p(e, o);
  }
}
function _p(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof Fe)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (kt(o)) continue;
      let s = xt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: 'All' });
      if (t instanceof zo && i.supportedLookupTypes.includes('Equals'))
        return new hr(i, [{ type: 'Equals', value: r.evaluate() }, ...a]);
      if (t instanceof $o && i.supportedLookupTypes.includes('NotEquals'))
        return new hr(i, [{ type: 'NotEquals', value: r.evaluate() }, ...a]);
      if (t instanceof va && i.supportedLookupTypes.includes('LessThan'))
        return new hr(i, [
          { type: 'LessThan', value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof ga && i.supportedLookupTypes.includes('LessThan'))
        return new hr(i, [
          { type: 'LessThan', value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof ya && i.supportedLookupTypes.includes('GreaterThan'))
        return new hr(i, [
          { type: 'GreaterThan', value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof ba && i.supportedLookupTypes.includes('GreaterThan'))
        return new hr(i, [
          { type: 'GreaterThan', value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function _3(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!kt(n) && !kt(r) && r instanceof Fe)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (kt(o)) continue;
      let s = xt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: 'All' });
      if (t instanceof mu && i.supportedLookupTypes.includes('Contains'))
        return new hr(i, [{ type: 'Contains', value: r.evaluate() }, ...a]);
      if (t instanceof vu && i.supportedLookupTypes.includes('StartsWith'))
        return new hr(i, [{ type: 'StartsWith', value: r.evaluate() }, ...a]);
      if (t instanceof gu && i.supportedLookupTypes.includes('EndsWith'))
        return new hr(i, [{ type: 'EndsWith', value: r.evaluate() }, ...a]);
    }
}
function F3(e, t) {
  let n = new uk(e);
  return new u3(n, t);
}
var I3 = class {
    constructor() {
      R(this, 'entries', new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case 'transformTemplate': {
          de(
            typeof n == 'string',
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case 'initial':
        case 'animate': {
          de(
            typeof n == 'object',
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  mN = new I3();
var vN = '__Appear_Animation_Transform__';
var gN = 'data-framer-appear-id',
  yN = 'data-framer-appear-animation';
function Fp(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n('Callback cancelled by variant change')),
    t.clear();
}
function SS() {
  return new Set();
}
function xN(e) {
  let t = Kt(SS),
    n = Kt(SS);
  return (
    Aw(() => () => Fp(n, t)),
    b.useEffect(() => () => Fp(n, t), [t, n]),
    b.useEffect(() => {
      Fp(n, t);
    }, [e, t, n]),
    b.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            t.add(s), r(...i).then(o);
          }).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function L3(e, t, n) {
  return b.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function M3(e) {
  for (let [t, n] of Object.entries(e)) if (Ot.matchMedia(n).matches) return t;
}
function O3(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if (Ot.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function kN(e, t, n = !0) {
  let r = O($w),
    i = D(Ii() ? M3(t) ?? e : e),
    o = D(n && r ? e : i.current),
    s = fu(),
    a = Jy(),
    l = ge(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              Ai(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    xw(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    $(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = Ot.matchMedia(f),
          m = (y) => {
            y.matches && l(u);
          };
        D3(d, m), c.push([d, m]);
      }
      return () => c.forEach(([u, f]) => A3(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function D3(e, t) {
  e.addEventListener ? e.addEventListener('change', t) : e.addListener(t);
}
function A3(e, t) {
  e.removeEventListener
    ? e.removeEventListener('change', t)
    : e.removeListener(t);
}
function CN(e) {
  var t, n;
  let r = O3(e);
  if (r)
    for (let i of document.querySelectorAll('.hidden-' + r))
      (t = i.parentNode) == null || t.removeChild(i);
  for (let i of document.querySelectorAll('.ssr-variant:empty'))
    (n = i.parentNode) == null || n.removeChild(i);
}
function gm() {
  return oe.current() === oe.canvas;
}
function wS(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function FN(e, t) {
  if (gm()) return;
  let r = b.useRef(!0),
    i = b.useRef(t);
  Aw((o, s) => {
    let a = o && !s;
    if (!r.current && a) {
      let l = wS(i.current, e);
      l && l();
    }
    r.current = a;
  }, []),
    b.useEffect(() => {
      if (r.current) {
        let o = wS(i.current, e);
        o && o();
      }
    }, [e]);
}
function V3(e, t) {
  return `${e}-${t}`;
}
function B3(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return de(i !== void 0, 'nextVariant should be defined'), i;
}
function z3(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function kS(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return 'pressed';
  if (r && t) return 'hover';
}
function $3(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function CS(e, t, n) {
  return e && n.has(e) ? e : t;
}
var N3 = Symbol('cycle');
function DN({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = fu(),
    l = Kt(() => new Set(i)),
    c = b.useRef({
      isHovered: !1,
      isPressed: !1,
      hasPressedVariants: !0,
      baseVariant: CS(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = b.useCallback(
      (x) => {
        let {
            isHovered: k,
            isPressed: w,
            enabledGestures: T,
            defaultVariant: E,
          } = c.current,
          I = CS(x, E, l),
          F = kS(T?.[I], k, w),
          B = F ? V3(I, F) : void 0;
        return [I, B];
      },
      [l]
    ),
    f = b.useCallback(
      ({ isHovered: x, isPressed: k }) => {
        x !== void 0 && (c.current.isHovered = x),
          k !== void 0 && (c.current.isPressed = k);
        let {
            baseVariant: w,
            gestureVariant: T,
            defaultVariant: E,
          } = c.current,
          [I, F] = u(w);
        (I !== w || F !== T) &&
          ((c.current.baseVariant = I || E),
          (c.current.gestureVariant = F),
          a());
      },
      [u, a]
    ),
    d = b.useCallback(
      (x) => {
        let {
            defaultVariant: k,
            cycleOrder: w,
            baseVariant: T,
            gestureVariant: E,
          } = c.current,
          I = x === N3 ? B3(w || [], T || k) : x,
          [F, B] = u(I);
        (F !== T || B !== E) &&
          ((c.current.baseVariant = F || k),
          (c.current.gestureVariant = B),
          a());
      },
      [u, a]
    );
  if (e !== c.current.lastVariant) {
    let [x, k] = u(e);
    (c.current.lastVariant = x),
      (x !== c.current.baseVariant || k !== c.current.gestureVariant) &&
        ((c.current.baseVariant = x), (c.current.gestureVariant = k));
  }
  let {
      baseVariant: m,
      gestureVariant: y,
      defaultVariant: v,
      enabledGestures: S,
      isHovered: p,
      isPressed: h,
    } = c.current,
    g = L3(c.current.baseVariant, c.current.gestureVariant, o);
  return b.useMemo(() => {
    let x = [];
    m !== v && x.push(m), y && x.push(y);
    let k = S?.[m],
      w = {};
    return (
      k?.hover &&
        Object.assign(w, {
          onMouseEnter: () => f({ isHovered: !0 }),
          onMouseLeave: () => f({ isHovered: !1 }),
        }),
      k?.pressed &&
        Object.assign(w, {
          onTapStart: () => f({ isPressed: !0 }),
          onTapCancel: () => f({ isPressed: !1 }),
          onTap: () => f({ isPressed: !1 }),
        }),
      {
        variants: x,
        baseVariant: m,
        gestureVariant: y,
        transition: z3(c.current.transitions, m),
        setVariant: d,
        setGestureState: f,
        addVariantProps: g,
        gestureHandlers: w,
        classNames: sm($3(m, s), kS(k, p, h)),
      }
    );
  }, [m, y, p, h, g, d, v, S, f, s]);
}
function H3(e) {
  var t;
  let n =
    (t = e.__FramerMetadata__.exports.default.annotations) == null
      ? void 0
      : t.framerVariables;
  if (n)
    try {
      return JSON.parse(n);
    } catch {
      return;
    }
}
function VN(e, t) {
  return (n) => {
    let r = {},
      i = H3(t);
    for (let o in n) Be(r)[i?.[o] ?? o] = n[o];
    return C(e, { ...r });
  };
}
var j3 = b.createContext(void 0),
  W3 = () => b.useContext(j3);
var U3 = {
    Arial: {
      Regular: { selector: 'Arial', weight: void 0 },
      Black: { selector: 'Arial-Black', weight: void 0 },
      Narrow: { selector: 'Arial Narrow', weight: void 0 },
      'Rounded Bold': { selector: 'Arial Rounded MT Bold', weight: void 0 },
    },
    Avenir: {
      Book: { selector: 'Avenir', weight: void 0 },
      Light: { selector: 'Avenir-Light', weight: void 0 },
      Medium: { selector: 'Avenir-Medium', weight: void 0 },
      Heavy: { selector: 'Avenir-Heavy', weight: void 0 },
      Black: { selector: 'Avenir-Black', weight: void 0 },
    },
    'Avenir Next': {
      Regular: { selector: 'Avenir Next', weight: void 0 },
      'Ultra Light': { selector: 'AvenirNext-UltraLight', weight: void 0 },
      Medium: { selector: 'AvenirNext-Medium', weight: void 0 },
      'Demi Bold': { selector: 'AvenirNext-DemiBold', weight: void 0 },
      Heavy: { selector: 'AvenirNext-Heavy', weight: void 0 },
    },
    'Avenir Next Condensed': {
      Regular: { selector: 'Avenir Next Condensed', weight: void 0 },
      'Ultra Light': {
        selector: 'AvenirNextCondensed-UltraLight',
        weight: void 0,
      },
      Medium: { selector: 'AvenirNextCondensed-Medium', weight: void 0 },
      'Demi Bold': { selector: 'AvenirNextCondensed-DemiBold', weight: void 0 },
      Heavy: { selector: 'AvenirNextCondensed-Heavy', weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: 'Baskerville', weight: void 0 },
      'Semi Bold': { selector: 'Baskerville-SemiBold', weight: void 0 },
    },
    'Bodoni 72': {
      Book: { selector: 'Bodoni 72', weight: void 0 },
      Oldstyle: { selector: 'Bodoni 72 Oldstyle', weight: void 0 },
      Smallcaps: { selector: 'Bodoni 72 Smallcaps', weight: void 0 },
    },
    Courier: { Regular: { selector: 'Courier', weight: void 0 } },
    'Courier New': { Regular: { selector: 'Courier New', weight: void 0 } },
    Futura: {
      Medium: { selector: 'Futura', weight: void 0 },
      Condensed: { selector: 'Futura-CondensedMedium', weight: void 0 },
      'Condensed ExtraBold': {
        selector: 'Futura-CondensedExtraBold',
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: 'Georgia', weight: void 0 } },
    'Gill Sans': {
      Regular: { selector: 'Gill Sans', weight: void 0 },
      Light: { selector: 'GillSans-Light', weight: void 0 },
      SemiBold: { selector: 'GillSans-SemiBold', weight: void 0 },
      UltraBold: { selector: 'GillSans-UltraBold', weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: 'Helvetica', weight: void 0 },
      Light: { selector: 'Helvetica-Light', weight: void 0 },
      Bold: { selector: 'Helvetica-Bold', weight: void 0 },
      Oblique: { selector: 'Helvetica-Oblique', weight: void 0 },
      'Light Oblique': { selector: 'Helvetica-LightOblique', weight: void 0 },
      'Bold Oblique': { selector: 'Helvetica-BoldOblique', weight: void 0 },
    },
    'Helvetica Neue': {
      Regular: { selector: 'Helvetica Neue', weight: void 0 },
      UltraLight: { selector: 'HelveticaNeue-UltraLight', weight: void 0 },
      Thin: { selector: 'HelveticaNeue-Thin', weight: void 0 },
      Light: { selector: 'HelveticaNeue-Light', weight: void 0 },
      Medium: { selector: 'HelveticaNeue-Medium', weight: void 0 },
      Bold: { selector: 'HelveticaNeue-Bold', weight: void 0 },
      Italic: { selector: 'HelveticaNeue-Italic', weight: void 0 },
      'UltraLight Italic': {
        selector: 'HelveticaNeue-UltraLightItalic',
        weight: void 0,
      },
      'Thin Italic': { selector: 'HelveticaNeue-ThinItalic', weight: void 0 },
      'Light Italic': { selector: 'HelveticaNeue-LightItalic', weight: void 0 },
      'Medium Italic': {
        selector: 'HelveticaNeue-MediumItalic',
        weight: void 0,
      },
      'Bold Italic': { selector: 'HelveticaNeue-BoldItalic', weight: void 0 },
      'Condensed Bold': {
        selector: 'HelveticaNeue-CondensedBold',
        weight: void 0,
      },
      'Condensed Black': {
        selector: 'HelveticaNeue-CondensedBlack',
        weight: void 0,
      },
    },
    'Hoefler Text': { Regular: { selector: 'Hoefler Text', weight: void 0 } },
    Impact: { Regular: { selector: 'Impact', weight: void 0 } },
    'Lucida Grande': { Regular: { selector: 'Lucida Grande', weight: void 0 } },
    Menlo: { Regular: { selector: 'Menlo', weight: void 0 } },
    Monaco: { Regular: { selector: 'Monaco', weight: void 0 } },
    Optima: {
      Regular: { selector: 'Optima', weight: void 0 },
      ExtraBlack: { selector: 'Optima-ExtraBlack', weight: void 0 },
    },
    Palatino: { Regular: { selector: 'Palatino', weight: void 0 } },
    'SF Pro Display': {
      Regular: { selector: '__SF-UI-Display-Regular__', weight: 400 },
      Ultralight: { selector: '__SF-UI-Display-Ultralight__', weight: 100 },
      Thin: { selector: '__SF-UI-Display-Thin__', weight: 200 },
      Light: { selector: '__SF-UI-Display-Light__', weight: 300 },
      Medium: { selector: '__SF-UI-Display-Medium__', weight: 500 },
      Semibold: { selector: '__SF-UI-Display-Semibold__', weight: 600 },
      Bold: { selector: '__SF-UI-Display-Bold__', weight: 700 },
      Heavy: { selector: '__SF-UI-Display-Heavy__', weight: 800 },
      Black: { selector: '__SF-UI-Display-Black__', weight: 900 },
      Italic: { selector: '__SF-UI-Display-Italic__', weight: 400 },
      'Ultralight Italic': {
        selector: '__SF-UI-Display-Ultralight-Italic__',
        weight: 100,
      },
      'Thin Italic': { selector: '__SF-UI-Display-Thin-Italic__', weight: 200 },
      'Light Italic': {
        selector: '__SF-UI-Display-Light-Italic__',
        weight: 300,
      },
      'Medium Italic': {
        selector: '__SF-UI-Display-Medium-Italic__',
        weight: 500,
      },
      'Semibold Italic': {
        selector: '__SF-UI-Display-Semibold-Italic__',
        weight: 600,
      },
      'Bold Italic': { selector: '__SF-UI-Display-Bold-Italic__', weight: 700 },
      'Heavy Italic': {
        selector: '__SF-UI-Display-Heavy-Italic__',
        weight: 800,
      },
      'Black Italic': {
        selector: '__SF-UI-Display-Black-Italic__',
        weight: 900,
      },
    },
    'SF Pro Display Condensed': {
      Regular: { selector: '__SF-UI-Display-Condensed-Regular__', weight: 400 },
      Ultralight: {
        selector: '__SF-UI-Display-Condensed-Ultralight__',
        weight: 100,
      },
      Thin: { selector: '__SF-UI-Display-Condensed-Thin__', weight: 200 },
      Light: { selector: '__SF-UI-Display-Condensed-Light__', weight: 300 },
      Medium: { selector: '__SF-UI-Display-Condensed-Medium__', weight: 500 },
      Semibold: {
        selector: '__SF-UI-Display-Condensed-Semibold__',
        weight: 600,
      },
      Bold: { selector: '__SF-UI-Display-Condensed-Bold__', weight: 700 },
      Heavy: { selector: '__SF-UI-Display-Condensed-Heavy__', weight: 800 },
      Black: { selector: '__SF-UI-Display-Condensed-Black__', weight: 900 },
    },
    'SF Pro Text': {
      Regular: { selector: '__SF-UI-Text-Regular__', weight: 400 },
      Light: { selector: '__SF-UI-Text-Light__', weight: 200 },
      Medium: { selector: '__SF-UI-Text-Medium__', weight: 500 },
      Semibold: { selector: '__SF-UI-Text-Semibold__', weight: 600 },
      Bold: { selector: '__SF-UI-Text-Bold__', weight: 700 },
      Heavy: { selector: '__SF-UI-Text-Heavy__', weight: 800 },
      Italic: { selector: '__SF-UI-Text-Italic__', weight: 400 },
      'Light Italic': { selector: '__SF-UI-Text-Light-Italic__', weight: 200 },
      'Medium Italic': {
        selector: '__SF-UI-Text-Medium-Italic__',
        weight: 500,
      },
      'Semibold Italic': {
        selector: '__SF-UI-Text-Semibold-Italic__',
        weight: 600,
      },
      'Bold Italic': { selector: '__SF-UI-Text-Bold-Italic__', weight: 700 },
      'Heavy Italic': { selector: '__SF-UI-Text-Heavy-Italic__', weight: 800 },
    },
    'SF Pro Text Condensed': {
      Regular: { selector: '__SF-UI-Text-Condensed-Regular__', weight: 400 },
      Light: { selector: '__SF-UI-Text-Condensed-Light__', weight: 200 },
      Medium: { selector: '__SF-UI-Text-Condensed-Medium__', weight: 500 },
      Semibold: { selector: '__SF-UI-Text-Condensed-Semibold__', weight: 600 },
      Bold: { selector: '__SF-UI-Text-Condensed-Bold__', weight: 700 },
      Heavy: { selector: '__SF-UI-Text-Condensed-Heavy__', weight: 800 },
    },
    Tahoma: { Regular: { selector: 'Tahoma', weight: void 0 } },
    Times: { Regular: { selector: 'Times', weight: void 0 } },
    'Times New Roman': {
      Regular: { selector: 'Times New Roman', weight: void 0 },
    },
    Trebuchet: { Regular: { selector: 'Trebuchet MS', weight: void 0 } },
    Verdana: { Regular: { selector: 'Verdana', weight: void 0 } },
  },
  X3 = {
    '__SF-Compact-Display-Regular__':
      'SFCompactDisplay-Regular|.SFCompactDisplay-Regular',
    '__SF-Compact-Display-Ultralight__':
      'SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight',
    '__SF-Compact-Display-Thin__':
      'SFCompactDisplay-Thin|.SFCompactDisplay-Thin',
    '__SF-Compact-Display-Light__':
      'SFCompactDisplay-Light|.SFCompactDisplay-Light',
    '__SF-Compact-Display-Medium__':
      'SFCompactDisplay-Medium|.SFCompactDisplay-Medium',
    '__SF-Compact-Display-Semibold__':
      'SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold',
    '__SF-Compact-Display-Heavy__':
      'SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy',
    '__SF-Compact-Display-Black__':
      'SFCompactDisplay-Black|.SFCompactDisplay-Black',
    '__SF-Compact-Display-Bold__':
      'SFCompactDisplay-Bold|.SFCompactDisplay-Bold',
    '__SF-UI-Text-Regular__':
      '.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText',
    '__SF-UI-Text-Light__':
      '.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light',
    '__SF-UI-Text-Medium__':
      '.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium',
    '__SF-UI-Text-Semibold__':
      '.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold',
    '__SF-UI-Text-Bold__':
      '.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold',
    '__SF-UI-Text-Heavy__': '.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy',
    '__SF-UI-Text-Italic__':
      '.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic',
    '__SF-UI-Text-Light-Italic__':
      '.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic',
    '__SF-UI-Text-Medium-Italic__':
      '.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic',
    '__SF-UI-Text-Semibold-Italic__':
      '.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic',
    '__SF-UI-Text-Bold-Italic__':
      '.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic',
    '__SF-UI-Text-Heavy-Italic__':
      '.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic',
    '__SF-Compact-Text-Regular__':
      'SFCompactText-Regular|.SFCompactText-Regular',
    '__SF-Compact-Text-Light__': 'SFCompactText-Light|.SFCompactText-Light',
    '__SF-Compact-Text-Medium__': 'SFCompactText-Medium|.SFCompactText-Medium',
    '__SF-Compact-Text-Semibold__':
      'SFCompactText-Semibold|.SFCompactText-Semibold',
    '__SF-Compact-Text-Bold__': 'SFCompactText-Bold|.SFCompactText-Bold',
    '__SF-Compact-Text-Heavy__': 'SFCompactText-Heavy|.SFCompactText-Heavy',
    '__SF-Compact-Text-Italic__': 'SFCompactText-Italic|.SFCompactText-Italic',
    '__SF-Compact-Text-Light-Italic__':
      'SFCompactText-LightItalic|.SFCompactText-LightItalic',
    '__SF-Compact-Text-Medium-Italic__':
      'SFCompactText-MediumItalic|.SFCompactText-MediumItalic',
    '__SF-Compact-Text-Semibold-Italic__':
      'SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic',
    '__SF-Compact-Text-Bold-Italic__':
      'SFCompactText-BoldItalic|.SFCompactText-BoldItalic',
    '__SF-Compact-Text-Heavy-Italic__':
      'SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic',
    '__SF-UI-Display-Condensed-Regular__':
      '.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular',
    '__SF-UI-Display-Condensed-Ultralight__':
      '.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight',
    '__SF-UI-Display-Condensed-Thin__':
      '.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin',
    '__SF-UI-Display-Condensed-Light__':
      '.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light',
    '__SF-UI-Display-Condensed-Medium__':
      '.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium',
    '__SF-UI-Display-Condensed-Semibold__':
      '.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold',
    '__SF-UI-Display-Condensed-Bold__':
      '.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold',
    '__SF-UI-Display-Condensed-Heavy__':
      '.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy',
    '__SF-UI-Display-Condensed-Black__':
      '.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black',
    '__SF-UI-Display-Regular__':
      '.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay',
    '__SF-UI-Display-Ultralight__':
      '.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight',
    '__SF-UI-Display-Thin__':
      '.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin',
    '__SF-UI-Display-Light__':
      '.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light',
    '__SF-UI-Display-Medium__':
      '.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium',
    '__SF-UI-Display-Semibold__':
      '.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold',
    '__SF-UI-Display-Bold__':
      '.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold',
    '__SF-UI-Display-Heavy__':
      '.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy',
    '__SF-UI-Display-Black__':
      '.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black',
    '__SF-UI-Display-Italic__':
      '.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic',
    '__SF-UI-Display-Ultralight-Italic__':
      '.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic',
    '__SF-UI-Display-Thin-Italic__':
      '.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic',
    '__SF-UI-Display-Light-Italic__':
      '.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic',
    '__SF-UI-Display-Medium-Italic__':
      '.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic',
    '__SF-UI-Display-Semibold-Italic__':
      '.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic',
    '__SF-UI-Display-Bold-Italic__':
      '.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic',
    '__SF-UI-Display-Heavy-Italic__':
      '.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic',
    '__SF-UI-Display-Black-Italic__':
      '.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic',
    '__SF-UI-Text-Condensed-Regular__':
      '.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular',
    '__SF-UI-Text-Condensed-Light__':
      '.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light',
    '__SF-UI-Text-Condensed-Medium__':
      '.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium',
    '__SF-UI-Text-Condensed-Semibold__':
      '.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold',
    '__SF-UI-Text-Condensed-Bold__':
      '.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold',
    '__SF-UI-Text-Condensed-Heavy__':
      '.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy',
    '__SF-Compact-Rounded-Regular__':
      'SFCompactRounded-Regular|.SFCompactRounded-Regular',
    '__SF-Compact-Rounded-Ultralight__':
      'SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight',
    '__SF-Compact-Rounded-Thin__':
      'SFCompactRounded-Thin|.SFCompactRounded-Thin',
    '__SF-Compact-Rounded-Light__':
      'SFCompactRounded-Light|.SFCompactRounded-Light',
    '__SF-Compact-Rounded-Medium__':
      'SFCompactRounded-Medium|.SFCompactRounded-Medium',
    '__SF-Compact-Rounded-Semibold__':
      'SFCompactRounded-Semibold|.SFCompactRounded-Semibold',
    '__SF-Compact-Rounded-Bold__':
      'SFCompactRounded-Bold|.SFCompactRounded-Bold',
    '__SF-Compact-Rounded-Heavy__':
      'SFCompactRounded-Heavy|.SFCompactRounded-Heavy',
    '__SF-Compact-Rounded-Black__':
      'SFCompactRounded-Black|.SFCompactRounded-Black',
  },
  TS = U3;
var Y3 = 'System Default',
  G3 = class {
    constructor() {
      R(this, 'name', 'local'),
        R(this, 'fontFamilies', []),
        R(this, 'byFamilyName', new Map()),
        R(this, 'fontAliasBySelector', new Map()),
        R(this, 'fontAliases', new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(TS)) {
        let i = TS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(X3)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          'system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif',
        t = { name: Y3, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ['normal', 'italic'];
      for (let o of i)
        for (let s of r) {
          let a = K3(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  ES = {
    100: 'Thin',
    200: 'Extra Light',
    300: 'Light',
    400: 'Normal',
    500: 'Medium',
    600: 'Semi Bold',
    700: 'Bold',
    800: 'Extra Bold',
    900: 'Black',
  };
function K3(e, t) {
  let n = t === 'normal' ? 'Regular' : 'Italic';
  return e === 400 ? n : t !== 'normal' ? `${ES[e]} ${n}` : `${ES[e]}`;
}
var q3 = On(Yp(), 1),
  Mo = 'CUSTOM;';
function Q3(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf('.'));
  let n =
      t.font.preferredFamily === ''
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ''
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var Z3 = class {
  constructor() {
    R(this, 'name', 'custom'),
      R(this, 'fontFamilies', []),
      R(this, 'byFamilyName', new Map()),
      R(this, 'assetsByFamily', new Map());
  }
  importFonts(e) {
    var t;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let n = [];
    for (let r of e) {
      if (!this.isValidCustomFontAsset(r)) continue;
      let i = Q3(r.name, r.properties),
        o = this.createFontFamily(i),
        s = {
          family: o,
          selector: `${Mo}${i}`,
          variant: this.inferVariantName(i),
          postscriptName:
            (t = r.properties) == null ? void 0 : t.font.postscriptName,
          file: r.url,
        };
      o.fonts.push(s),
        (o.owner = r.ownerType === 'team' ? 'team' : 'project'),
        this.assetsByFamily.set(i, r),
        n.push(...o.fonts);
    }
    return n;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith('font/') ||
      ((t = e.properties) == null ? void 0 : t.kind) !== 'font' ||
      !e.properties.font
      ? !1
      : 'fontFamily' in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        'thin',
        'ultra light',
        'extra light',
        'light',
        'normal',
        'medium',
        'semi bold',
        'bold',
        'extra bold',
        'black',
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(' '), ...r.split('-'), ...r.split('_')],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, '')));
    return o ? o.replace(/^\w|\s\w/g, (s) => s.toUpperCase()) : 'Regular';
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(Mo)) return null;
    let t = e.split(Mo);
    return t[1] === void 0 ? null : { source: 'custom', name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith('.woff2');
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: 'custom', name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Mo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function fk(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = Ce(f) ? f : f.name.toLocaleLowerCase(),
      m = n(d);
    m &&
      (s.set(`${m.weight}-${m.style}`, d),
      !(m.weight <= i) && (a.has(m.style) || a.set(m.style, d)));
  });
  let l = a.get(o),
    c = a.get('italic') ?? a.get('oblique');
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get('400-italic') ?? s.get('400-oblique') ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get('700-italic') ?? s.get('700-oblique') ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get('900-italic') ?? s.get('900-oblique') ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var J3 = ['display', 'sans', 'serif', 'slab', 'handwritten', 'script'];
function e4(e) {
  return e
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(t4);
}
function t4(e) {
  return J3.includes(e);
}
var Uc = 'FS;',
  dk = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  hk = Object.keys(dk),
  n4 = (() => new RegExp(`^(?:${[...hk, 'italic'].join('|')})`, 'u'))(),
  Yr = class {
    constructor() {
      R(this, 'name', 'fontshare'),
        R(this, 'fontFamilies', []),
        R(this, 'byFamilyName', new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(' '),
        n = hk.find((s) => t.includes(s)),
        r = e.includes('italic') ? 'italic' : 'normal';
      return {
        weight: (n && dk[n]) || 400,
        style: r === 'italic' ? r : 'normal',
      };
    }
    parseSelector(e) {
      if (!e.startsWith(Uc)) return null;
      let t = e.split('-');
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(Uc, ''), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${Uc}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!n4.exec(o) || o.endsWith('wide'));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = Yr.createSelector(o, s),
            c = Yr.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: m,
              variantItalic: y,
            } = fk(s, r, Yr.parseVariant),
            v = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? Yr.createSelector(o, d) : void 0,
              selectorBoldItalic: m ? Yr.createSelector(o, m) : void 0,
              selectorItalic: y ? Yr.createSelector(o, y) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: r4(n.category),
            };
          a.fonts.push(v), t.push(v);
        }
      }
      return t;
    }
  };
function r4(e) {
  let t = {
      serif: 'serif',
      sans: 'sans-serif',
      slab: 'slab',
      display: 'display',
      handwritten: 'handwriting',
      script: 'handwriting',
    },
    n = e4(e)[0];
  return n && t[n];
}
var i4 = 'Inter',
  o4 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    '': 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  RS = class {
    constructor() {
      R(this, 'name', 'framer'),
        R(this, 'fontFamilies', []),
        R(this, 'byFamilyName', new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(i4)) return null;
      let t = e.split('-'),
        [n, r = ''] = t;
      if (!n) return null;
      let i = r.includes('Italic') ? 'italic' : 'normal',
        o = r.replace('Italic', ''),
        s = (o && o4[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: 'framer',
        variant: void 0,
        category: 'sans-serif',
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  Xc = 'GF;',
  Gr = class {
    constructor() {
      R(this, 'name', 'google'),
        R(this, 'fontFamilies', []),
        R(this, 'byFamilyName', new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === 'regular') return { style: 'normal', weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || '400'),
        r = t[2] === 'italic' ? 'italic' : 'normal';
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(Xc)) return null;
      let t = e.split('-');
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(Xc, ''), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${Xc}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = Gr.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = Gr.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: m,
              } = fk(r, n.variants, Gr.parseVariant),
              y = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? Gr.createSelector(o, f) : void 0,
                selectorBoldItalic: m ? Gr.createSelector(o, m) : void 0,
                selectorItalic: d ? Gr.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: s4(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace('http://', 'https://'),
              };
            s.fonts.push(y), t.push(y);
          });
        }),
        t
      );
    }
  };
function s4(e) {
  let t = {
    serif: 'serif',
    'sans-serif': 'sans-serif',
    display: 'display',
    handwriting: 'handwriting',
    monospace: 'monospace',
  };
  if (e) return t[e];
}
var a4 = On(XF(), 1),
  PS = 5e3,
  l4 = 3,
  pk = class extends Error {
    constructor(e) {
      super(e), (this.name = 'FontLoadingError');
    }
  },
  Ip = new Map(),
  Lp = new Map(),
  c4 = (e, t) => mk(e, t);
async function mk(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || 'normal',
    c = `${r}-${l}-${a}-${i}`;
  if (!Ip.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: Ce(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), vk(r, l, a)))
        .catch((d) => {
          if (d.name !== 'NetworkError') throw d;
          if (n < l4) return mk(e, t, n + 1);
          throw new pk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    Ip.set(c, f);
  }
  await Ip.get(c);
}
async function vk(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!Lp.has(r)) {
    let o = new a4.default(e, { style: t, weight: n }).load(null, PS);
    Lp.set(r, o);
  }
  try {
    await Lp.get(r);
  } catch {
    throw new pk(
      `Failed to check if font is ready (${PS}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var u4 = class {
    constructor() {
      R(this, 'enabled', !1),
        R(this, 'bySelector', new Map()),
        R(this, 'getGoogleFontsListPromise'),
        R(this, 'getFontshareFontsListPromise'),
        R(this, 'loadedSelectors', new Set()),
        R(this, 'googleFamilyNames', new Set()),
        R(this, 'local'),
        R(this, 'google'),
        R(this, 'fontshare'),
        R(this, 'framer'),
        R(this, 'custom'),
        (this.local = new G3()),
        (this.google = new Gr()),
        (this.fontshare = new Yr()),
        (this.framer = new RS()),
        (this.custom = new Z3()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = Qe.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e))
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = Qe.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e))
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Mo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      return e.startsWith(Mo)
        ? this.custom.getFontBySelector(e, t)
        : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = Gr.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: 'google',
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = Yr.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: 'fontshare',
            category: void 0,
          };
      }
      let i = RS.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case 'local':
          return this.loadedSelectors.add(e.selector), 1;
        case 'framer':
          return (
            q3.default.env.NODE_ENV !== 'test' &&
              (await vk(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case 'google':
        case 'fontshare':
        case 'custom':
          return e.file
            ? (await c4(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          St(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(Xc)),
        n = e.some((i) => i.startsWith(Uc));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          ca('Failed to load Google fonts:', i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          ca('Failed to load Fontshare fonts:', i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === 'fulfilled' && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !Yc.isSelectorLoaded(i));
      if (n.length === 0) return;
      await Yc.loadWebFontsFromSelectors(n),
        n.every((i) => Yc.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector('Inter');
      return de(e, 'Can\u2019t find Inter font'), e;
    }
  },
  Yc = new u4();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: 'fulfilled', value: n }))
          .catch((n) => ({ status: 'rejected', reason: n }))
      )
    ));
var gk = ((e) => (
    (e.Padding = '--framer-input-padding'),
    (e.BorderRadiusTopLeft = '--framer-input-border-radius-top-left'),
    (e.BorderRadiusTopRight = '--framer-input-border-radius-top-right'),
    (e.BorderRadiusBottomRight = '--framer-input-border-radius-bottom-right'),
    (e.BorderRadiusBottomLeft = '--framer-input-border-radius-bottom-left'),
    (e.BorderColor = '--framer-input-border-color'),
    (e.BorderTopWidth = '--framer-input-border-top-width'),
    (e.BorderRightWidth = '--framer-input-border-right-width'),
    (e.BorderBottomWidth = '--framer-input-border-bottom-width'),
    (e.BorderLeftWidth = '--framer-input-border-left-width'),
    (e.BorderStyle = '--framer-input-border-style'),
    (e.Background = '--framer-input-background'),
    (e.FontFamily = '--framer-input-font-family'),
    (e.FontWeight = '--framer-input-font-weight'),
    (e.FontSize = '--framer-input-font-size'),
    (e.FontColor = '--framer-input-font-color'),
    (e.FontLetterSpacing = '--framer-input-font-letter-spacing'),
    (e.FontTextAlignment = '--framer-input-font-text-alignment'),
    (e.FontLineHeight = '--framer-input-font-line-height'),
    (e.PlaceholderColor = '--framer-input-placeholder-color'),
    (e.BoxShadow = '--framer-input-box-shadow'),
    (e.FocusedBorderColor = '--framer-input-focused-border-color'),
    (e.FocusedBorderWidth = '--framer-input-focused-border-width'),
    (e.FocusedBorderStyle = '--framer-input-focused-border-style'),
    (e.FocusedBackground = '--framer-input-focused-background'),
    (e.FocusedBoxShadow = '--framer-input-focused-box-shadow'),
    (e.FocusedTransition = '--framer-input-focused-transition'),
    (e.BooleanCheckedIconURL = '--framer-input-boolean-icon'),
    (e.BooleanCheckedBackground = '--framer-input-boolean-checked-background'),
    (e.BooleanCheckedBorderColor =
      '--framer-input-boolean-checked-border-color'),
    (e.BooleanCheckedBorderWidth =
      '--framer-input-boolean-checked-border-width'),
    (e.BooleanCheckedBorderStyle =
      '--framer-input-boolean-checked-border-style'),
    (e.BooleanCheckedBoxShadow = '--framer-input-boolean-checked-box-shadow'),
    (e.BooleanCheckedTransition = '--framer-input-boolean-checked-transition'),
    e
  ))(gk || {}),
  ee = gk,
  Up = 'framer-form-input',
  Xp = 'framer-form-input-wrapper';
function f4(e) {
  return typeof e == 'number'
    ? e
    : e.startsWith('--')
    ? ve.variable(e)
    : e === ''
    ? '""'
    : e;
}
function ve(e, t) {
  let n = ' ';
  for (let r in t)
    n += `${r.replace(/([A-Z])/gu, '-$1').toLowerCase()}: ${f4(t[r])}; `;
  return e + ' {' + n + '}';
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith('--') ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(ve || (ve = {}));
var KN = [
    `.${Up} {
        padding: var(${ee.Padding});
        background: var(${ee.Background});
        font-family: var(${ee.FontFamily});
        font-weight: var(${ee.FontWeight});
        font-size: var(${ee.FontSize});
        color: var(${ee.FontColor});
        box-shadow: var(${ee.BoxShadow});
        border: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${ee.BorderRadiusTopLeft});
        border-top-right-radius: var(${ee.BorderRadiusTopRight});
        border-bottom-right-radius: var(${ee.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${ee.BorderRadiusBottomLeft});
        letter-spacing: var(${ee.FontLetterSpacing});
        text-align: var(${ee.FontTextAlignment});
        line-height: var(${ee.FontLineHeight});
        transition: var(${ee.FocusedTransition});
        transition-property: background, box-shadow;
    }`,
  ],
  qN = [
    `.${Up}:focus-visible { outline: none; }`,
    `.${Up}:focus {
        background: ${ve.variable(ee.FocusedBackground, ee.Background)};
        box-shadow: ${ve.variable(ee.FocusedBoxShadow, ee.BoxShadow)};
    }`,
    `.${Xp}:focus-within::after {
        border-color: ${ve.variable(ee.FocusedBorderColor, ee.BorderColor)};
        border-style: ${ve.variable(ee.FocusedBorderStyle, ee.BorderStyle)};
        border-top-width: ${ve.variable(
          ee.FocusedBorderWidth,
          ee.BorderTopWidth
        )};
        border-right-width: ${ve.variable(
          ee.FocusedBorderWidth,
          ee.BorderRightWidth
        )};
        border-bottom-width: ${ve.variable(
          ee.FocusedBorderWidth,
          ee.BorderBottomWidth
        )};
        border-left-width: ${ve.variable(
          ee.FocusedBorderWidth,
          ee.BorderLeftWidth
        )};
    }`,
  ],
  QN = [
    `.${Xp} {
        position: relative;
    }`,
    `.${Xp}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${ee.BorderRadiusTopLeft});
        border-top-right-radius: var(${ee.BorderRadiusTopRight});
        border-bottom-right-radius: var(${ee.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${ee.BorderRadiusBottomLeft});
        border-color: var(${ee.BorderColor});
        border-top-width: var(${ee.BorderTopWidth});
        border-right-width: var(${ee.BorderRightWidth});
        border-bottom-width: var(${ee.BorderBottomWidth});
        border-left-width: var(${ee.BorderLeftWidth});
        border-style: var(${ee.BorderStyle});
        transition: var(${ee.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var Xr = 'framer-form-boolean-input';
var d4 =
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M 4 8 L 6.5 10.5 L 11.5 5.5" fill="transparent" stroke-width="2" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  Mp =
    'var(--framer-input-border-top-width) var(--framer-input-border-right-width) var(--framer-input-border-bottom-width) var(--framer-input-border-left-width)',
  _S =
    'var(--framer-input-border-radius-top-left) var(--framer-input-border-radius-top-right) var(--framer-input-border-radius-bottom-right) var(--framer-input-border-radius-bottom-left)',
  t8 = [
    ve(`.${Xr}`, {
      '-webkit-appearance': 'none',
      alignItems: 'center',
      appearance: 'none',
      background: '--framer-input-background',
      backgroundColor: '#fff',
      borderRadius: _S,
      boxShadow: '--framer-input-box-shadow',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      overflow: 'hidden',
      position: 'relative',
      transition: '--framer-input-boolean-checked-transition',
      transitionProperty: 'box-shadow, background',
    }),
    ve(`.${Xr}::after`, {
      background: 'transparent',
      borderColor: ve.variable('--framer-input-border-color', 'transparent'),
      borderRadius: _S,
      borderStyle: '--framer-input-border-style',
      borderWidth: Mp,
      boxSizing: 'border-box',
      content: '',
      display: 'block',
      inset: 0,
      position: 'absolute',
      transition: '--framer-input-boolean-checked-transition',
      transitionProperty: 'border-color, border-width, border-style',
    }),
    ve(`.${Xr}::before`, {
      backgroundImage: ve.variable(
        '--framer-input-boolean-icon',
        `url('${d4}')`
      ),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      content: '',
      display: 'block',
      height: '100%',
      opacity: 0,
      transition: '--framer-input-boolean-checked-transition',
      transitionProperty: 'opacity',
      width: '100%',
    }),
    ve(`.${Xr}:checked`, {
      backgroundColor: ve.variable(
        '--framer-input-boolean-checked-background',
        '--framer-input-background'
      ),
      boxShadow: ve.variable(
        '--framer-input-boolean-checked-box-shadow',
        '--framer-input-box-shadow'
      ),
    }),
    ve(`.${Xr}:checked::before`, { opacity: 1 }),
    ve(`.${Xr}:checked::after`, {
      borderColor: ve.variable(
        '--framer-input-boolean-checked-border-color',
        '--framer-input-border-color',
        'transparent'
      ),
      borderStyle: ve.variable(
        '--framer-input-boolean-checked-border-style',
        '--framer-input-border-style',
        'solid'
      ),
      borderWidth: ve.variable(
        '--framer-input-boolean-checked-border-width',
        Mp
      ),
    }),
    ve(`.${Xr}:focus-visible`, { outline: 'none' }),
    ve(`.${Xr}:focus::after`, {
      borderColor: ve.variable(
        '--framer-input-focused-border-color',
        '--framer-input-boolean-checked-border-color',
        '--framer-input-border-color',
        'transparent'
      ),
      borderStyle: ve.variable(
        '--framer-input-focused-border-style',
        '--framer-input-boolean-checked-border-style',
        '--framer-input-border-style',
        'solid'
      ),
      borderWidth: ve.variable(
        '--framer-input-focused-border-width',
        '--framer-input-boolean-checked-border-width',
        Mp
      ),
    }),
  ];
var s8 = b.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...s } = t,
    a = { ...s.style };
  r && delete a.background;
  let l = cu(t.as);
  return ae(l, {
    ...s,
    style: a,
    ref: n,
    children: [r && C(yw, { image: r, alt: o }), i],
  });
});
function h4(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var p4 = /[&<>'"]/g,
  m4 = (e) =>
    e.replace(
      p4,
      (t) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;',
        }[t] || t)
    ),
  v4 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function g4(e, t, n, r) {
  return e.replace(v4, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== 'a') return i;
    let m = l || c,
      y = um(m.replace(/&amp;/g, '&'));
    if (!y || !y.target) return i;
    let v = t(y.target);
    if (!M1(v) || !M1(n)) return i;
    let S = v.path,
      p = n.path;
    if (!S || !p) return i;
    let h = ` data-framer-page-link-target="${y.target}"`,
      g = su(v, y.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${y.element}"`);
    let x = nu(m);
    if (!x || Ce(x)) return i;
    nk(n, x, r) && (h += ' data-framer-page-link-current');
    let k = S,
      w = Object.assign(
        {},
        r,
        (f = y.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (k = k.replace(ek, (T, E) => '' + w[E])),
      (d = y.collectionItem) != null && d.pathVariables)
    ) {
      let T = new URLSearchParams(y.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${T}"`;
    }
    return (k = $S(p, k)), o + a + `"${m4(k + (g ? `#${g}` : ''))}"` + h + u;
  });
}
var y4 = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  },
  yk = /[&<>"']/gu,
  b4 = (() => new RegExp(yk.source))();
function FS(e) {
  return e && b4.test(e) ? e.replace(yk, (t) => y4[t] ?? '') : e || '';
}
var IS = '{{ text-placeholder }}',
  x4 = 'rich-text-wrapper',
  S4 = $e(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: m,
        top: y,
        bottom: v,
        center: S,
        className: p,
        stylesPresetsClassName: h,
        visible: g = !0,
        opacity: x,
        rotation: k = 0,
        verticalAlignment: w = 'top',
        isEditable: T = !1,
        willChangeTransform: E,
        environment: I = oe.current,
        withExternalLayout: F = !1,
        positionSticky: B,
        positionStickyTop: V,
        positionStickyRight: Z,
        positionStickyBottom: te,
        positionStickyLeft: j,
        __htmlStructure: ie,
        __fromCanvasComponent: U = !1,
        _forwardedOverrideId: X,
        _forwardedOverrides: N,
        _usesDOMRect: J,
        children: he,
        ...ue
      } = t,
      ne = wa(),
      re = Ca(t),
      qt = D(null),
      fe = n ?? qt,
      { navigate: Ct, getRoute: Q } = No(),
      Qt = lu();
    KI(t.preload ?? []), du(t, fe);
    let hn = O(Ho),
      Gn = gm(),
      Mi = a,
      pn = X ?? r;
    if (pn && N) {
      let ze = N[pn];
      typeof ze == 'string' && (Mi = ze);
    }
    let Dt = '';
    if (Mi) {
      let ze = FS(Mi);
      Dt = ie ? ie.replace(IS, ze) : `<p>${ze}</p>`;
    } else if (o) Dt = o;
    else if (l) {
      let ze = FS(l);
      Dt = ie ? ie.replace(IS, ze) : `<p>${ze}</p>`;
    } else s && (Dt = s);
    let Kn = tk(),
      bu = pe(
        () => (Gn || !Q || !Qt ? Dt : g4(Dt, Q, Qt, Kn)),
        [Gn, Dt, Q, Qt, Kn]
      );
    if (
      ($(() => {
        let ze = fe.current;
        if (ze === null) return;
        function qn(At) {
          let Zr = cm(At.target, fe.current);
          if (
            At.metaKey ||
            !Ct ||
            !Zr ||
            Zr.getAttribute('target') === '_blank'
          )
            return;
          iV(Ct, Zr, Kn) && At.preventDefault();
        }
        return (
          ze.addEventListener('click', qn),
          () => {
            ze.removeEventListener('click', qn);
          }
        );
      }, [Ct, Kn]),
      xk(c, U, fe),
      ot(() => {
        ka();
      }, []),
      !g)
    )
      return null;
    let P = T && I() === oe.canvas,
      _ = {
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: bk(w),
        opacity: P ? 0 : x,
        flexShrink: 0,
      },
      M = oe.hasRestrictions(),
      z = ua(t, ne || 0, !1),
      se = J && (u === 'auto' || f === 'auto'),
      Ze =
        !!t.transformTemplate || !z || !M || U || se
          ? t.transformTemplate ?? uu(S)
          : void 0;
    if (!F) {
      if (z && M && !se) {
        let ze = Ye.getNumber(k).toFixed(4);
        (_.transform = `translate(${z.x}px, ${z.y}px) rotate(${ze}deg)`),
          (_.width = z.width),
          (_.minWidth = z.width),
          (_.height = z.height);
      } else
        (_.left = d),
          (_.right = m),
          (_.top = y),
          (_.bottom = v),
          (_.width = u),
          (_.height = f),
          (_.rotate = k);
      B
        ? (!Gn || hn) &&
          ((_.position = 'sticky'),
          (_.willChange = 'transform'),
          (_.zIndex = 1),
          (_.top = V),
          (_.right = Z),
          (_.bottom = te),
          (_.left = j))
        : Gn &&
          (t.positionFixed || t.positionAbsolute) &&
          (_.position = 'absolute');
    }
    return (
      om(t, _),
      Mw(t, _),
      E && nm(_),
      Object.assign(_, t.style),
      C(Bt.div, {
        id: r,
        ref: fe,
        ...ue,
        style: _,
        layoutId: re,
        'data-framer-name': i,
        'data-framer-component-type': 'DeprecatedRichText',
        'data-center': S,
        className: sm(p, h, x4),
        transformTemplate: Ze,
        dangerouslySetInnerHTML: { __html: bu },
      })
    );
  });
function bk(e) {
  switch (e) {
    case 'top':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'bottom':
      return 'flex-end';
  }
}
function xk(e, t, n) {
  let r = D([]);
  h4(r.current, e) ||
    ((r.current = e),
    Yc.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        oe.current() !== oe.canvas ||
        (i > 0 && SO(n.current));
    }));
}
var LS = $e(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    C(Bt.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: C(Bt.foreignObject, {
        width: '100%',
        height: '100%',
        className: 'framer-fit-text',
        transform: `scale(${e})`,
        style: { overflow: 'visible', transformOrigin: 'center center' },
        children: n,
      }),
    })
  ),
  w4 = $e((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        as: s,
        bottom: a,
        center: l,
        children: c,
        environment: u = oe.current,
        fonts: f = [],
        height: d,
        isEditable: m = !1,
        left: y,
        name: v,
        opacity: S,
        positionSticky: p,
        positionStickyBottom: h,
        positionStickyLeft: g,
        positionStickyRight: x,
        positionStickyTop: k,
        right: w,
        rotation: T = 0,
        style: E,
        _initialStyle: I,
        stylesPresetsClassNames: F,
        text: B,
        top: V,
        verticalAlignment: Z = 'top',
        visible: te = !0,
        width: j,
        willChangeTransform: ie,
        withExternalLayout: U = !1,
        viewBox: X,
        viewBoxScale: N = 1,
        ...J
      } = e,
      he = wa(),
      ue = gm(),
      ne = O(Ho),
      re = Ca(e),
      qt = D(null),
      fe = t ?? qt;
    if (
      (du(e, fe),
      xk(f, n, fe),
      ot(() => {
        ka();
      }, []),
      !te)
    )
      return null;
    let Ct = m && u() === oe.canvas,
      Q = {
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: bk(Z),
        opacity: Ct ? 0 : S,
        flexShrink: 0,
      },
      Qt = oe.hasRestrictions(),
      hn = ua(e, he || 0, !1),
      Gn = o && (j === 'auto' || d === 'auto'),
      pn =
        !!e.transformTemplate || !hn || !Qt || n || Gn
          ? e.transformTemplate ?? uu(l)
          : void 0;
    U ||
      (hn && Qt && !Gn
        ? ((Q.x = hn.x),
          (Q.y = hn.y),
          (Q.rotate = Ye.getNumber(T)),
          (Q.width = hn.width),
          (Q.minWidth = hn.width),
          (Q.height = hn.height))
        : ((Q.left = y),
          (Q.right = w),
          (Q.top = V),
          (Q.bottom = a),
          (Q.width = j),
          (Q.height = d),
          (Q.rotate = T)),
      p
        ? (!ue || ne) &&
          ((Q.position = 'sticky'),
          (Q.willChange = 'transform'),
          (Q.zIndex = 1),
          (Q.top = k),
          (Q.right = x),
          (Q.bottom = h),
          (Q.left = g))
        : ue &&
          (e.positionFixed || e.positionAbsolute) &&
          (Q.position = 'absolute')),
      om(e, Q),
      Mw(e, Q),
      ie && nm(Q),
      Object.assign(Q, I, E),
      re && (J.layout = 'preserve-aspect');
    let Dt = cu(e.as);
    return Ce(e.viewBox)
      ? e.as !== void 0
        ? C(Dt, {
            ...J,
            ref: fe,
            style: Q,
            layoutId: re,
            transformTemplate: pn,
            'data-framer-name': v,
            'data-framer-component-type': 'RichTextContainer',
            children: C(LS, {
              viewBox: X,
              viewBoxScale: N,
              style: { width: '100%', height: '100%' },
              children: c && Gc(c, F, B),
            }),
          })
        : C(LS, {
            ...J,
            ref: fe,
            style: Q,
            layoutId: re,
            viewBox: X,
            viewBoxScale: N,
            transformTemplate: pn,
            'data-framer-name': v,
            'data-framer-component-type': 'RichTextContainer',
            children: c && Gc(c, F, B),
          })
      : C(Dt, {
          ...J,
          ref: fe,
          style: Q,
          layoutId: re,
          transformTemplate: pn,
          'data-framer-name': v,
          'data-framer-component-type': 'RichTextContainer',
          children: c && Gc(c, F, B),
        });
  });
function Gc(e, t, n) {
  let r = En.toArray(e.props.children);
  Ce(n) && (r = r.slice(0, 1)),
    (r = r.map((s) => (Jt(s) ? Gc(s, t, n) : Ce(n) ? n : s)));
  let { ['data-preset-tag']: i, ...o } = e.props;
  if (Ce(e.type) || ed(e.type)) {
    let s = i || Zy(e.type) || e.type,
      a = Ce(s) ? t?.[s] : void 0;
    o.className = sm('framer-text', o.className, a);
  }
  return mn(e, o, ...r);
}
var f8 = $e(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (Ce(o)) {
    !r.stylesPresetsClassName &&
      Ve(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        ' '
      ));
    let s = { [Ce(t) ? 'html' : 'htmlFromDesign']: o };
    return C(S4, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && Ce(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(' ');
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return C(w4, { ...r, ref: i, children: Jt(o) ? o : void 0 });
});
function k4(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = Yt(i.x, i.y),
    s = fn(Yt(0.5, 0.5), o),
    a = K.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((v) => ({ point: v, distance: Yt.distance(o, v) }))
      .sort((v, S) => v.distance - S.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  de(c && u, 'linearGradientLine: Must have 2 closest points.');
  let [f, d] = a.filter((v) => !Yt.isEqual(v, c) && !Yt.isEqual(v, u));
  de(f && d, 'linearGradientLine: Must have 2 opposing points.');
  let m = fn.intersection(s, fn(c, u)),
    y = fn.intersection(s, fn(f, d));
  return (
    de(m && y, 'linearGradientLine: Must have a start and end point.'), fn(m, y)
  );
}
function C4(e, t) {
  var n, r;
  let i = k4(e.angle),
    o = Ta(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = fn.pointAtPercentDistance(i, s),
    c = fn.pointAtPercentDistance(i, a),
    u = Ki([s, a], [0, 1]);
  return {
    id: `id${t}g${da.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: rm.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function T4(e, t) {
  return {
    id: `id${t}g${ha.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ta(e).map((n) => ({
      color: n.value,
      alpha: rm.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function Sk(e) {
  if (!Ce(e) || e.charAt(e.length - 1) !== '%') return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return Tn(r);
}
function wk(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Tn(n) ? n : 50;
}
function MS(e) {
  return Sk(e) ? wk(e) / 100 : e === 'left' ? 0 : e === 'right' ? 1 : 0.5;
}
function OS(e) {
  return Sk(e) ? wk(e) / 100 : e === 'top' ? 0 : e === 'bottom' ? 1 : 0.5;
}
function E4(e, t, n, r) {
  if (
    ((e = Ye.get(e, '#09F')),
    !Ti.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === 'fill' || a === 'fit' || a === 'tile' || !a) {
    let m = 1,
      y = 1,
      v = i / o,
      S = t.height * v,
      p = t.width / v,
      h = S / t.width,
      g = p / t.height;
    if (a === 'tile') {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let x = t.x ?? 0,
        k = t.y ?? 0,
        w = 0,
        T = 0;
      r && ((w = x), (T = k)),
        (u = (t.width - l) * MS(e.positionX) + w),
        (f = (t.height - c) * OS(e.positionY) + T),
        (s = `translate(${u + x}, ${f + k})`);
    } else
      (a === 'fill' || !a ? g > h : g < h)
        ? ((y = g), (f = (1 - g) * OS(e.positionY)))
        : ((m = h), (u = (1 - h) * MS(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${m}, ${y})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? '',
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var R4 = 'framer/asset-reference,';
function P4(e) {
  return e.startsWith(`data:${R4}`);
}
function _4(e, t) {
  if (/^\w+:/.test(e) && !P4(e)) return e;
  typeof t != 'number'
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = oe.current() === oe.export;
  return Qe.assetResolver(e, { pixelSize: t, isExport: n }) ?? '';
}
var F4 = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = _4(t);
    return C('pattern', {
      id: e,
      width: r ? i : '100%',
      height: r ? o : '100%',
      patternContentUnits: r ? void 0 : 'objectBoundingBox',
      patternUnits: r ? 'userSpaceOnUse' : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: C(
        'image',
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: 'none',
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l
      ),
    });
  },
  DS = Ii(),
  I4 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  L4 = class {
    constructor() {
      R(this, 'entries', new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === '') return '';
      let r = this.entries.get(e);
      if (!r) {
        n || (n = 'svg' + String(Ew(e)) + '_' + String(e.length));
        let i = e,
          o,
          s = M4(e);
        s && (t && O4(s, n), (s.id = n), (o = B4(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === '') return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === '') return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = 'container_' + e.id;
      if (DS) {
        let n = document?.querySelector('#' + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = 'container_' + t;
      if (DS) {
        let a = document.querySelector('#svg-templates');
        if (
          (a ||
            ((a = document.createElement('div')),
            (a.id = 'svg-templates'),
            (a.style.position = 'absolute'),
            (a.style.top = '0'),
            (a.style.left = '0'),
            (a.style.width = '0'),
            (a.style.height = '0'),
            (a.style.overflow = 'hidden'),
            document.body.appendChild(a)),
          !document.querySelector('#' + r))
        ) {
          let l = document.createElement('div');
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ''
        }><use href="#${t}"></use></svg>`;
      return new I4(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          'position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0';
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = 'container_' + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push('  </div>');
      }
      return (
        e.push('</div>'),
        e.join(`
`)
      );
    }
  },
  Io = new L4();
function M4(e) {
  if (typeof DOMParser > 'u') {
    console.warn('unable to find DOMParser');
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, 'text/html')
      .getElementsByTagName('svg')[0];
    if (!r) throw Error('no svg element found');
    return r;
  } catch {
    return;
  }
}
function O4(e, t) {
  let n = D4(t);
  kk(e, n);
}
function D4(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, '');
}
function kk(e, t) {
  A4(e, t),
    Array.from(e.children).forEach((r) => {
      kk(r, t);
    });
}
function A4(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === 'id' && e.setAttribute(r, `${t}_${i}`),
      r === 'href' || r === 'xlink:href')
    ) {
      let [s, a] = i.split('#');
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = 'url(#';
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var V4 = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function AS(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith('%'))
  )
    return Math.round(parseFloat(n[1]) * (V4[n[2]] || 1));
}
function B4(e) {
  let t = AS(e.getAttribute('width')),
    n = AS(e.getAttribute('height'));
  if (!(typeof t != 'number' || typeof n != 'number') && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function m8(e) {
  let t = wa(),
    n = Ca(e),
    r = b.useRef(null),
    i = W3();
  return (
    du(e, r),
    C(W4, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var z4 = 5e4;
function $4(e) {
  return e.indexOf('image') >= 0;
}
function N4(e) {
  return e.indexOf('var(--') >= 0;
}
function H4(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function VS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? Ot,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute('viewBox')) {
    let m = Io.getViewBox(t.svg);
    m && s.setAttribute('viewBox', m);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && Sa(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    q(u) &&
    q(f) &&
    s.setAttribute('viewBox', `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute('preserveAspectRatio', '')
      : s.setAttribute('preserveAspectRatio', 'none'),
    s.setAttribute('width', '100%'),
    s.setAttribute('height', '100%');
}
function j4() {
  return (
    b.useInsertionEffect(() => {
      ka();
    }, []),
    null
  );
}
var W4 = (() => {
  var e;
  return (
    (e = class extends jc {
      constructor() {
        super(...arguments),
          R(this, 'container', b.createRef()),
          R(this, 'svgElement', null),
          R(this, 'setSVGElement', (t) => {
            (this.svgElement = t), this.setLayerElement(t);
          }),
          R(this, 'previouslyRenderedSVG', ''),
          R(this, 'unmountedSVG', '');
      }
      static frame(t) {
        return ua(t, t.parentSize || 0);
      }
      get frame() {
        return ua(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? 'svg' + t : null;
          Io.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG);
        }
        this.props.svgContentId || VS(this.container, this.props);
      }
      componentWillUnmount() {
        Io.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = '');
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        Ti.isImageObject(n) &&
          Ti.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          Tw(this.svgElement, 'fill', null, !1),
          VS(this.container, this.props);
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          (n.width = '100%'), (n.height = '100%'), (n.aspectRatio = 'inherit');
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = Ye.getNumber(i);
        if (
          ((t.opacity = q(this.props.opacity) ? this.props.opacity : 1),
          oe.hasRestrictions() && r)
        ) {
          Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
              4
            )}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            Sa(this.props) && (t.position = 'absolute');
          let u = r.width / (o || 1),
            f = r.height / (s || 1);
          n.transformOrigin = 'top left';
          let { zoom: d, target: m } = qc;
          if (m === oe.export) {
            let y = d > 1 ? d : 1;
            (n.transform = `scale(${u * y}, ${f * y})`), (n.zoom = 1 / y);
          } else n.transform = `scale(${u}, ${f})`;
          o && s && ((n.width = o), (n.height = s));
        } else {
          let { left: u, right: f, top: d, bottom: m } = this.props;
          Object.assign(t, {
            left: u,
            right: f,
            top: d,
            bottom: m,
            width: a,
            height: l,
            rotate: c,
          }),
            Object.assign(n, {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
            });
        }
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: m,
          innerRef: y,
          svgContentId: v,
          height: S,
          opacity: p,
          width: h,
          ...g
        } = this.props;
        if (!m && (!n || !t)) return null;
        let x = t ?? u ?? 'svg',
          k = this.frame,
          w = k || { width: a || 100, height: s || 100 },
          T = { ...r, imageRendering: 'pixelated', flexShrink: 0 },
          E = {};
        this.collectLayout(T, E),
          mD(this.props, T),
          om(this.props, T),
          jc.applyWillChange(this.props, T, !1);
        let I = null;
        if (typeof i == 'string' || H.isColorObject(i)) {
          let N = H.isColorObject(i) ? i.initialValue || H.toRgbString(i) : i;
          (T.fill = N), (T.color = N);
        } else if (da.isLinearGradient(i)) {
          let N = i,
            J = `${encodeURI(t || '')}g${da.hash(N)}`;
          T.fill = `url(#${J})`;
          let { stops: he, x1: ue, x2: ne, y1: re, y2: qt } = C4(N, x);
          I = C('svg', {
            ref: this.setSVGElement,
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100%',
            height: '100%',
            style: { position: 'absolute' },
            children: C('linearGradient', {
              id: J,
              x1: ue,
              x2: ne,
              y1: re,
              y2: qt,
              children: he.map((fe, Ct) =>
                C(
                  'stop',
                  {
                    offset: fe.position,
                    stopColor: fe.color,
                    stopOpacity: fe.alpha,
                  },
                  Ct
                )
              ),
            }),
          });
        } else if (ha.isRadialGradient(i)) {
          let N = i,
            J = `${encodeURI(t || '')}g${ha.hash(N)}`;
          T.fill = `url(#${J})`;
          let he = T4(N, x);
          I = C('svg', {
            ref: this.setSVGElement,
            xmlns: 'http://www.w3.org/2000/svg',
            width: '100%',
            height: '100%',
            style: { position: 'absolute' },
            children: C('radialGradient', {
              id: J,
              cy: N.centerAnchorY,
              cx: N.centerAnchorX,
              r: N.widthFactor,
              children: he.stops.map((ue, ne) =>
                C(
                  'stop',
                  {
                    offset: ue.position,
                    stopColor: ue.color,
                    stopOpacity: ue.alpha,
                  },
                  ne
                )
              ),
            }),
          });
        } else if (Ti.isImageObject(i)) {
          let N = E4(i, w, x);
          N &&
            ((T.fill = `url(#${N.id})`),
            (I = C('svg', {
              ref: this.setSVGElement,
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              width: '100%',
              height: '100%',
              style: { position: 'absolute' },
              children: C('defs', { children: C(F4, { ...N }) }),
            })));
        }
        let F = { 'data-framer-component-type': 'SVG' },
          B = !k;
        B && Object.assign(F, bw(this.props.center));
        let V =
            !I &&
            !T.fill &&
            !T.background &&
            !T.backgroundImage &&
            o.length < z4 &&
            !$4(o) &&
            !N4(o),
          Z = null;
        if (V)
          (T.backgroundSize = '100% 100%'),
            (T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
              o
            )}')`),
            Io.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = '');
        else {
          let N = v ? 'svg' + v : null,
            J = Io.subscribe(o, !v, N);
          Io.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            H4(T) && (T.overflow = 'hidden'),
            (Z = ae(Ie, {
              children: [
                I,
                C(
                  'div',
                  {
                    className: 'svgContainer',
                    style: E,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: J },
                  },
                  Ti.isImageObject(i) ? i.src : ''
                ),
              ],
            }));
        }
        let te = cu(this.props.as),
          { href: j, target: ie, rel: U, onClick: X } = this.props;
        return ae(te, {
          ...F,
          ...g,
          layoutId: u,
          transformTemplate: B ? uu(this.props.center) : void 0,
          id: t,
          ref: y,
          style: T,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: l || c ? 'img' : void 0,
          'aria-label': l,
          'aria-description': c,
          href: j,
          target: ie,
          rel: U,
          onClick: X,
          children: [Z, C(j4, {})],
        });
      }
    }),
    R(e, 'supportsConstraints', !0),
    R(e, 'defaultSVGProps', {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: '',
      shadows: [],
    }),
    R(e, 'defaultProps', { ...jc.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
function T8(e, t, n) {
  let r = Ck(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function E8(e) {
  return e.fonts ?? [];
}
function R8(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ck(e);
}
function Ck(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) X4(r) ? n.push(r) : t.fonts.push(Y4(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var U4 = 'explicitInter';
function X4(e) {
  return U4 in e;
}
function Y4(e) {
  let t;
  return (
    e.url.startsWith('https://fonts.gstatic.com/s/')
      ? (t = 'google')
      : e.url.startsWith('./third-party-assets/fontshare/')
      ? (t = 'fontshare')
      : (t = 'custom'),
    { ...e, source: t }
  );
}
al.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Oe(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  qw as $,
  vt as A,
  R8 as Aa,
  VP as B,
  Wy as C,
  Xy as D,
  Qi as E,
  n_ as F,
  g1 as G,
  zF as H,
  hz as I,
  gz as J,
  No as K,
  QS as L,
  ZS as M,
  Dz as N,
  oe as O,
  jz as P,
  NL as Q,
  Gz as R,
  VM as S,
  Kz as T,
  n$ as U,
  z$ as V,
  sm as W,
  O6 as X,
  $6 as Y,
  N6 as Z,
  Y6 as _,
  b as a,
  XA as aa,
  En as b,
  J6 as ba,
  Wo as c,
  eV as ca,
  mn as d,
  oN as da,
  Pu as e,
  lN as ea,
  Mm as f,
  dN as fa,
  $e as g,
  hN as ga,
  eC as h,
  pN as ha,
  Ai as i,
  mN as ia,
  ge as j,
  vN as ja,
  O as k,
  gN as ka,
  $ as l,
  yN as la,
  Jr as m,
  xN as ma,
  ot as n,
  kN as na,
  Rn as o,
  CN as oa,
  pe as p,
  FN as pa,
  D as q,
  N3 as qa,
  pt as r,
  DN as ra,
  Tt as s,
  VN as sa,
  C as t,
  Yc as ta,
  ae as u,
  s8 as ua,
  Mn as v,
  f8 as va,
  Te as w,
  Io as wa,
  Bt as x,
  m8 as xa,
  zy as y,
  T8 as ya,
  Dn as z,
  E8 as za,
};
//# sourceMappingURL=chunk-6PKFGRF7.mjs.map
