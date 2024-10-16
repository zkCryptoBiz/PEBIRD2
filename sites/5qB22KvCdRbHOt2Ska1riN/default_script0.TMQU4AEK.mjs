import {
  R as E,
  M as F,
  ea as I,
  oa as P,
  e as a,
  U as b,
  G as g,
  i as h,
  J as k,
  I as s,
  H as u,
  P as v,
} from './chunk-6PKFGRF7.mjs';
import { f as n, d as window } from './chunk-ENK4YSX5.mjs';
n();
n();
var S = 'default' in u ? g : u,
  i = {},
  D = S;
i.createRoot = D.createRoot;
i.hydrateRoot = D.hydrateRoot;
var V = i.createRoot,
  w = i.hydrateRoot;
window.__framer_importFromPackage = (e, c) => () =>
  a(v, {
    error: 'Package component not supported: "' + c + '" in "' + e + '"',
  });
window.process = {
  ...window.process,
  env: {
    ...(window.process ? window.process.env : void 0),
    NODE_ENV: 'production',
  },
};
E();
window.__framer_events = window.__framer_events || [];
function O() {
  window.__framer_events.push(arguments);
}
function z(e) {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? e()
    : document.addEventListener('readystatechange', () => {
        document.readyState === 'interactive' && e();
      });
}
z(async function () {
  try {
    let e = {
        augiA20Il: {
          elements: {
            au0M8PfE2: 'footer',
            FjgU2e_Wz: 'header',
            L0tvevm_c: 'memes',
            P2_fKbVen: 'tokenomics',
            PrMLfEEJL: 'tokenomics',
            s5SlUrkfV: 'roadmap',
          },
          page: s(() =>
            import('./HV-OWO2CXanys9sdJCvEp8Q-KKCXopd6nvFVHcEx98.OYNF4GRM.mjs')
          ),
          path: '/',
        },
        RSpFzxa7K: {
          elements: {},
          page: s(() =>
            import('./kfvq654nKRMr_aVKDUHraNIfdF2UhTW4IRtuKms-Li8.UGCZXWNQ.mjs')
          ),
          path: '/404',
        },
      },
      c = {},
      f = [{ code: 'en', id: 'default', name: 'English', slug: '' }],
      M = s(() =>
        import('./kfvq654nKRMr_aVKDUHraNIfdF2UhTW4IRtuKms-Li8.UGCZXWNQ.mjs')
      ),
      o = document.getElementById('main'),
      t,
      m,
      d,
      l,
      p = !1;
    if ('framerHydrateV2' in o.dataset) {
      let r = JSON.parse(o.dataset.framerHydrateV2);
      (t = r.routeId),
        (m = r.localeId),
        (d = r.pathVariables),
        (l = r.breakpoints),
        (p = !0);
    } else {
      let r = F(e, decodeURIComponent(location.pathname), !0, f);
      (t = r.routeId), (m = r.localeId), (d = r.pathVariables);
    }
    let R = await e[t].page.preload();
    e[t].page = R;
    let _ = !0,
      H = a(I, {
        RootComponent: R,
        isWebsite: !0,
        routeId: t,
        pathVariables: d,
        routes: e,
        collectionUtils: c,
        notFoundPage: M,
        isReducedMotion: void 0,
        localeId: m,
        locales: f,
        preserveQueryParams: void 0,
        enableImproveInpDuringHydration: _,
        addHydrationMarkers: p,
      }),
      N = a(b, { children: H, value: { imgSizesWorkaroundEnabled: !1 } }),
      y = a(k, { children: N, value: { routes: {} } });
    p
      ? (performance.mark('framer-rewrite-breakpoints-start'),
        P(l),
        window.__framer_onRewriteBreakpoints?.(l),
        performance.mark('framer-rewrite-breakpoints-end'),
        performance.measure(
          'framer-rewrite-breakpoints',
          'framer-rewrite-breakpoints-start',
          'framer-rewrite-breakpoints-end'
        ),
        h(() => {
          performance.mark('framer-hydration-start'),
            _ && window.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(),
            w(o, y);
        }))
      : V(o).render(y);
  } catch (e) {
    throw (
      (O('published_site_load_error', {
        message: String(e),
        stack:
          e instanceof Error && typeof e.stack == 'string' ? e.stack : null,
      }),
      e)
    );
  }
});
//# sourceMappingURL=default_script0.TMQU4AEK.mjs.map
