const R = "DOMContentLoaded", k = "load", C = "loadstart", E = navigator.userAgentData, u = E, { userAgent: L } = navigator, f = L, O = /iPhone|iPad|iPod|Android/i;
u ? u.brands.some((e) => O.test(e.brand)) : O.test(f);
const P = /(iPhone|iPod|iPad)/;
u ? u.brands.some((e) => P.test(e.brand)) : (
  /* istanbul ignore next */
  P.test(f)
);
f && f.includes("Firefox");
const { head: p } = document;
["webkitPerspective", "perspective"].some((e) => e in p.style);
const T = (e, t, n, o) => {
  const s = o || !1;
  e.addEventListener(t, n, s);
}, A = (e, t, n, o) => {
  const s = o || !1;
  e.removeEventListener(t, n, s);
}, V = (e, t, n, o) => {
  const s = (r) => {
    (r.target === e || r.currentTarget === e) && (n.apply(e, [r]), A(e, t, s, o));
  };
  T(e, t, s, o);
}, q = () => {
};
(() => {
  let e = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: () => (e = !0, e)
    });
    V(document, R, q, t);
  } catch {
  }
  return e;
})();
["webkitTransform", "transform"].some((e) => e in p.style);
["webkitAnimation", "animation"].some((e) => e in p.style);
["webkitTransition", "transition"].some((e) => e in p.style);
const D = (e, t) => e.getAttribute(t), x = (e, t) => e.removeAttribute(t), M = (e) => e != null && typeof e == "object" || !1, a = (e) => M(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, y = (e) => a(e) && e.nodeType === 1 || !1, j = (e) => typeof e == "string" || !1, G = (e) => M(e) && e.constructor.name === "Window" || !1, U = (e) => a(e) && e.nodeType === 9 || !1, b = (e) => G(e) ? e.document : U(e) ? e : a(e) ? e.ownerDocument : window.document, v = (e, ...t) => Object.assign(e, ...t), g = (e) => {
  if (!e)
    return;
  if (j(e))
    return b().createElement(e);
  const { tagName: t } = e, n = g(t);
  if (!n)
    return;
  const o = { ...e };
  return delete o.tagName, v(n, o);
}, W = (e) => Object.entries(e), $ = (e, t) => {
  W(t).forEach(([n, o]) => {
    if (o && j(n) && n.includes("--"))
      e.style.setProperty(n, o);
    else {
      const s = {};
      s[n] = o, v(e.style, s);
    }
  });
}, I = (e) => typeof e == "function" || !1, F = (e, t) => y(e) ? e : (a(t) ? t : b()).querySelector(e), S = (e, t) => (a(t) ? t : b()).querySelectorAll(e), c = "data-src", Y = (e) => y(e) && e.tagName === "VIDEO", l = (e) => y(e) && e.tagName === "SOURCE", h = (e) => y(e) && e.tagName === "IMG", m = (e, t) => {
  const n = l(e), o = n ? C : k, s = n ? g("VIDEO") : null, r = g(n ? "SOURCE" : "IMG"), i = n ? s : r, d = D(e, c);
  if (!i || !d)
    return;
  const w = () => {
    h(e) || l(e) ? (e.src = d, l(e) && Y(e.parentElement) && e.parentElement.load()) : $(e, { backgroundImage: `url("${d}")` }), x(e, c), I(t) && t(), A(i, o, w);
  };
  T(i, o, w), (h(r) || l(r)) && (r.src = d, s && s.append(r));
}, N = (e) => {
  const t = S(`[${c}]`, e), n = e && D(e, c);
  return n && !t ? [e] : !n && t ? [...t] : n && t ? [e, ...t] : !n && !t ? [...S(`[${c}]`)] : null;
}, z = "1.0.6", J = (e, t) => {
  const n = F(e);
  if (!n)
    return;
  const o = I(t) ? t : null, s = N(n);
  s && s.length && s.forEach((r, i) => {
    i === s.length - 1 && o ? m(r, o) : m(r);
  });
};
v(J, { version: z, getMediaElements: N, loadMedia: m });
export {
  J as default
};
//# sourceMappingURL=dll.mjs.map
