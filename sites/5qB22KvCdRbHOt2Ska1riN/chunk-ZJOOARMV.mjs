import {
  Y as A,
  m as B,
  W as D,
  aa as E,
  ya as F,
  q as I,
  g as M,
  pa as N,
  L as O,
  T as P,
  y as R,
  u as S,
  k as T,
  c as U,
  da as W,
  p as Z,
  qa as _,
  ra as j,
  ma as k,
  Q as l,
  x as n,
  t as r,
  v as w,
  va as z,
} from './chunk-6PKFGRF7.mjs';
import { f as v } from './chunk-ENK4YSX5.mjs';
v();
v();
var J = { bwlXmKOxT: { hover: !0 } },
  ee = ['bwlXmKOxT'],
  te = 'framer-bZULM',
  re = { bwlXmKOxT: 'framer-v-w0f2ge' };
function ae(t, ...e) {
  let a = {};
  return e?.forEach((i) => i && Object.assign(a, t[i])), a;
}
var oe = {
    delay: 0,
    duration: 0.15,
    ease: [0.5, 0, 0.88, 0.77],
    type: 'tween',
  },
  ne = ({ value: t, children: e }) => {
    let a = T(w),
      i = t ?? a.transition,
      y = Z(() => ({ ...a, transition: i }), [JSON.stringify(i)]);
    return r(w.Provider, { value: y, children: e });
  },
  ie = n(U),
  se = ({
    backgroundColor: t,
    buttonFill: e,
    buttonText: a,
    height: i,
    id: y,
    link: d,
    textColor: s,
    textSize: u,
    width: L,
    ...o
  }) => {
    var m, c, f, p, g;
    return {
      ...o,
      BrUi5h7tU:
        (m = s ?? o.BrUi5h7tU) !== null && m !== void 0
          ? m
          : 'rgb(255, 255, 255)',
      bZsnTBIZu:
        (c = t ?? o.bZsnTBIZu) !== null && c !== void 0
          ? c
          : 'rgb(255, 124, 119)',
      CiWo9qyo0: d ?? o.CiWo9qyo0,
      ofLqZhEO8: (f = a ?? o.ofLqZhEO8) !== null && f !== void 0 ? f : '$BUY',
      PPM8eZNfR:
        (p = e ?? o.PPM8eZNfR) !== null && p !== void 0
          ? p
          : 'rgb(255, 167, 34)',
      Rb5OgUSWE: (g = u ?? o.Rb5OgUSWE) !== null && g !== void 0 ? g : 24,
    };
  },
  le = (t, e) => e.join('-') + t.layoutDependency,
  de = M(function (t, e) {
    let { activeLocale: a, setLocale: i } = O(),
      {
        style: y,
        className: d,
        layoutId: s,
        variant: u,
        ofLqZhEO8: L,
        Rb5OgUSWE: o,
        BrUi5h7tU: m,
        PPM8eZNfR: c,
        bZsnTBIZu: f,
        CiWo9qyo0: p,
        ...g
      } = se(t),
      {
        baseVariant: C,
        classNames: G,
        gestureVariant: q,
        setGestureState: b,
        setVariant: H,
        variants: V,
      } = j({
        cycleOrder: ee,
        defaultVariant: 'bwlXmKOxT',
        enabledGestures: J,
        variant: u,
        variantClassNames: re,
      }),
      x = le(t, V),
      { activeVariantCallback: X, delay: me } = k(C),
      K = X(async (...fe) => {
        H(_);
      });
    N(C, { default: K });
    let Q = I(null),
      Y = B(),
      $ = [],
      ce = A();
    return r(R, {
      id: s ?? Y,
      children: r(ie, {
        animate: V,
        initial: !1,
        children: r(ne, {
          value: oe,
          children: r(W, {
            href: p,
            openInNewTab: !0,
            children: S(n.a, {
              ...g,
              className: `${D(te, ...$, 'framer-w0f2ge', d, G)} framer-1eh24fm`,
              'data-framer-name': 'Top',
              'data-highlight': !0,
              layoutDependency: x,
              layoutId: 'bwlXmKOxT',
              onHoverEnd: () => b({ isHovered: !1 }),
              onHoverStart: () => b({ isHovered: !0 }),
              onTap: () => b({ isPressed: !1 }),
              onTapCancel: () => b({ isPressed: !1 }),
              onTapStart: () => b({ isPressed: !0 }),
              ref: e ?? Q,
              style: {
                borderBottomLeftRadius: 118,
                borderBottomRightRadius: 118,
                borderTopLeftRadius: 118,
                borderTopRightRadius: 118,
                ...y,
              },
              ...ae(
                { 'bwlXmKOxT-hover': { 'data-framer-name': void 0 } },
                C,
                q
              ),
              children: [
                r(n.div, {
                  className: 'framer-1h539zj',
                  'data-framer-name': 'BG',
                  layoutDependency: x,
                  layoutId: 'b_0gLQPMN',
                  style: {
                    backgroundColor: f,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    boxShadow:
                      '0px 4px 2px 0px rgba(0,0,0,0.25), inset 0px -2px 2px 0px rgba(0, 0, 0, 0.1)',
                  },
                }),
                r(n.div, {
                  className: 'framer-xyg35s',
                  'data-framer-name': 'Stroke',
                  layoutDependency: x,
                  layoutId: 'hXYyChyiX',
                  style: {
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgb(255, 175, 55) 100.80000000000001deg, rgb(255, 184, 79) 117.66317831503379deg, rgb(255, 184, 79) 180deg, rgba(255, 184, 79, 1) 235.13513513513513deg, rgb(255, 175, 55) 262.8deg)',
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }),
                r(n.div, {
                  className: 'framer-us2wk',
                  'data-framer-name': 'Fill',
                  layoutDependency: x,
                  layoutId: 'Sh9B4DDV0',
                  style: {
                    backgroundColor: c,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
                r(z, {
                  __fromCanvasComponent: !0,
                  children: r(U, {
                    children: r(n.p, {
                      style: {
                        '--font-selector':
                          'Q1VTVE9NO0R1cGVyV2ViVzAzLUJvbGQgUmVndWxhcg==',
                        '--framer-font-family':
                          '"DuperWebW03-Bold Regular", "DuperWebW03-Bold Regular Placeholder", sans-serif',
                        '--framer-font-size':
                          'calc(var(--variable-reference-Rb5OgUSWE-aAUx10pec) * 1px)',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--variable-reference-BrUi5h7tU-aAUx10pec))',
                      },
                      children: '$BUY',
                    }),
                  }),
                  className: 'framer-p5vdjv',
                  'data-framer-name': 'Text',
                  fonts: ['CUSTOM;DuperWebW03-Bold Regular'],
                  layoutDependency: x,
                  layoutId: 'wH7xWBheH',
                  style: {
                    '--extracted-r6o4lv':
                      'var(--variable-reference-BrUi5h7tU-aAUx10pec)',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    '--framer-paragraph-spacing': '0px',
                    '--variable-reference-BrUi5h7tU-aAUx10pec': m,
                    '--variable-reference-Rb5OgUSWE-aAUx10pec': o,
                  },
                  text: L,
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
  ue = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-bZULM.framer-1eh24fm, .framer-bZULM .framer-1eh24fm { display: block; }',
    '.framer-bZULM.framer-w0f2ge { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 10px 24px 20px 24px; position: relative; text-decoration: none; width: auto; }',
    '.framer-bZULM .framer-1h539zj { flex: none; height: 45px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 14px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-bZULM .framer-xyg35s { bottom: 10px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-bZULM .framer-us2wk { bottom: 12px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-bZULM .framer-p5vdjv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-bZULM.framer-w0f2ge { gap: 0px; } .framer-bZULM.framer-w0f2ge > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-bZULM.framer-w0f2ge > :first-child { margin-top: 0px; } .framer-bZULM.framer-w0f2ge > :last-child { margin-bottom: 0px; } }',
    '.framer-bZULM.framer-v-w0f2ge.hover.framer-w0f2ge { padding: 16px 24px 14px 24px; }',
    '.framer-bZULM.framer-v-w0f2ge.hover .framer-1h539zj { bottom: 0px; height: unset; }',
    '.framer-bZULM.framer-v-w0f2ge.hover .framer-xyg35s { bottom: 4px; top: 4px; }',
    '.framer-bZULM.framer-v-w0f2ge.hover .framer-us2wk { bottom: 6px; top: 6px; }',
  ],
  h = E(de, ue, 'framer-bZULM'),
  Zr = h;
h.displayName = 'CTA Orange';
h.defaultProps = { height: 59, width: 96 };
P(h, {
  ofLqZhEO8: {
    defaultValue: '$BUY',
    displayTextArea: !1,
    title: 'Button text',
    type: l.String,
  },
  Rb5OgUSWE: { defaultValue: 24, title: 'Text size', type: l.Number },
  BrUi5h7tU: {
    defaultValue: 'rgb(255, 255, 255)',
    title: 'Text color',
    type: l.Color,
  },
  PPM8eZNfR: {
    defaultValue: 'rgb(255, 167, 34)',
    title: 'Button fill',
    type: l.Color,
  },
  bZsnTBIZu: {
    defaultValue: 'rgb(255, 124, 119)',
    title: 'Background Color',
    type: l.Color,
  },
  CiWo9qyo0: { title: 'Link', type: l.Link },
});
F(
  h,
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
export { Zr as a };
//# sourceMappingURL=chunk-ZJOOARMV.mjs.map
