const N = "DOMContentLoaded", R = "load", k = "loadstart", C = navigator.userAgentData, u = C, { userAgent: E } = navigator, f = E, v = /iPhone|iPad|iPod|Android/i;
u ? u.brands.some((e) => v.test(e.brand)) : v.test(f);
const w = /(iPhone|iPod|iPad)/;
u ? u.brands.some((e) => w.test(e.brand)) : (
  /* istanbul ignore next */
  w.test(f)
);
f && f.includes("Firefox");
const { head: p } = document;
["webkitPerspective", "perspective"].some((e) => e in p.style);
const h = (e, t, n, o) => {
  const s = o || !1;
  e.addEventListener(t, n, s);
}, T = (e, t, n, o) => {
  const s = o || !1;
  e.removeEventListener(t, n, s);
}, L = (e, t, n, o) => {
  const s = (r) => {
    (r.target === e || r.currentTarget === e) && (n.apply(e, [r]), T(e, t, s, o));
  };
  h(e, t, s, o);
}, V = () => {
};
(() => {
  let e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: () => (e = !0, e)
    });
    L(document, N, V, t);
  } catch {
  }
  return e;
})();
["webkitTransform", "transform"].some((e) => e in p.style);
["webkitAnimation", "animation"].some((e) => e in p.style);
["webkitTransition", "transition"].some((e) => e in p.style);
const A = (e, t) => e.getAttribute(t), q = (e, t) => e.removeAttribute(t), D = (e) => e != null && typeof e == "object" || !1, a = (e) => D(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, y = (e) => a(e) && e.nodeType === 1 || !1, M = (e) => typeof e == "string" || !1, x = (e) => D(e) && e.constructor.name === "Window" || !1, G = (e) => a(e) && e.nodeType === 9 || !1, m = (e) => x(e) ? e.document : G(e) ? e : a(e) ? e.ownerDocument : window.document, j = (e, ...t) => Object.assign(e, ...t), g = (e) => {
  if (!e)
    return;
  if (M(e))
    return m().createElement(e);
  const { tagName: t } = e, n = g(t);
  if (!n)
    return;
  const o = { ...e };
  return delete o.tagName, j(n, o);
}, U = (e) => Object.entries(e), W = (e, t) => {
  U(t).forEach(([n, o]) => {
    if (o && M(n) && n.includes("--"))
      e.style.setProperty(n, o);
    else {
      const s = {};
      s[n] = o, j(e.style, s);
    }
  });
}, I = (e) => typeof e == "function" || !1, $ = (e, t) => y(e) ? e : (a(t) ? t : m()).querySelector(e), O = (e, t) => (a(t) ? t : m()).querySelectorAll(e), c = "data-src", F = (e) => y(e) && e.tagName === "VIDEO", l = (e) => y(e) && e.tagName === "SOURCE", P = (e) => y(e) && e.tagName === "IMG", S = (e, t) => {
  const n = l(e), o = n ? k : R, s = n ? g("VIDEO") : null, r = g(n ? "SOURCE" : "IMG"), i = n ? s : r, d = A(e, c);
  if (!i || !d)
    return;
  const b = () => {
    P(e) || l(e) ? (e.src = d, l(e) && F(e.parentElement) && e.parentElement.load()) : W(e, { backgroundImage: `url("${d}")` }), q(e, c), I(t) && t(), T(i, o, b);
  };
  h(i, o, b), (P(r) || l(r)) && (r.src = d, s && s.append(r));
}, Y = (e) => {
  const t = O(`[${c}]`, e), n = e && A(e, c);
  return n && !t ? [e] : !n && t ? [...t] : n && t ? [e, ...t] : !n && !t ? [...O(`[${c}]`)] : null;
}, z = (e, t) => {
  const n = $(e);
  if (!n)
    return;
  const o = I(t) ? t : null, s = Y(n);
  s && s.length && s.forEach((r, i) => {
    i === s.length - 1 && o ? S(r, o) : S(r);
  });
};
export {
  z as default
};
//# sourceMappingURL=dll.mjs.map
