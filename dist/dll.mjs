const I = "DOMContentLoaded", N = "load", R = "loadstart", k = navigator.userAgentData, l = k, { userAgent: E } = navigator, f = E, v = /iPhone|iPad|iPod|Android/i;
l ? l.brands.some((e) => v.test(e.brand)) : v.test(f);
const S = /(iPhone|iPod|iPad)/;
l ? l.brands.some((e) => S.test(e.brand)) : (
  /* istanbul ignore next */
  S.test(f)
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
    L(document, I, V, t);
  } catch {
  }
  return e;
})();
["webkitTransform", "transform"].some((e) => e in p.style);
["webkitAnimation", "animation"].some((e) => e in p.style);
["webkitTransition", "transition"].some((e) => e in p.style);
const A = (e, t) => e.getAttribute(t), $ = (e, t) => e.removeAttribute(t), M = (e) => e != null && typeof e == "object" || !1, a = (e) => M(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, y = (e) => a(e) && e.nodeType === 1 || !1, j = (e) => typeof e == "string" || !1, q = (e) => M(e) && e.constructor.name === "Window" || !1, x = (e) => a(e) && e.nodeType === 9 || !1, m = (e) => q(e) ? e.document : x(e) ? e : a(e) ? e.ownerDocument : window.document, C = (e, ...t) => Object.assign(e, ...t), g = (e) => {
  if (!e)
    return;
  if (j(e))
    return m().createElement(e);
  const { tagName: t } = e, n = g(t);
  if (!n)
    return;
  const o = { ...e };
  return delete o.tagName, C(n, o);
}, G = (e) => Object.entries(e), U = (e, t) => {
  G(t).forEach(([n, o]) => {
    if (o && j(n) && n.includes("--"))
      e.style.setProperty(n, o);
    else {
      const s = {};
      s[n] = o, C(e.style, s);
    }
  });
}, D = (e) => typeof e == "function" || !1, W = (e, t) => y(e) ? e : (a(t) ? t : m()).querySelector(e), w = (e, t) => (a(t) ? t : m()).querySelectorAll(e), c = "data-src", F = (e) => y(e) && e.tagName === "VIDEO", u = (e) => y(e) && e.tagName === "SOURCE", O = (e) => y(e) && e.tagName === "IMG", P = (e, t) => {
  const n = u(e), o = n ? R : N, s = n ? g("VIDEO") : null, r = g(n ? "SOURCE" : "IMG"), i = n ? s : r, d = A(e, c);
  if (!i || !d) return;
  const b = () => {
    O(e) || u(e) ? (e.src = d, u(e) && F(e.parentElement) && e.parentElement.load()) : U(e, { backgroundImage: `url("${d}")` }), $(e, c), D(t) && t(), T(i, o, b);
  };
  h(i, o, b), (O(r) || u(r)) && (r.src = d, s && s.append(r));
}, z = (e) => {
  const t = w(`[${c}]`, e), n = e && A(e, c);
  return n && !t ? [e] : !n && t ? [...t] : n && t ? [e, ...t] : !n && !t ? [...w(`[${c}]`)] : null;
}, J = (e, t) => {
  const n = W(e);
  if (!n) return;
  const o = D(t) ? t : null, s = z(n);
  s && s.length && s.forEach((r, i) => {
    i === s.length - 1 && o ? P(r, o) : P(r);
  });
};
export {
  J as default
};
//# sourceMappingURL=dll.mjs.map
