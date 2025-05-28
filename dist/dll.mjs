const I = "load", N = "loadstart", j = (e, n, s, t) => {
  e.addEventListener(
    n,
    s,
    !1
  );
}, R = (e, n, s, t) => {
  e.removeEventListener(
    n,
    s,
    !1
  );
}, T = (e, n) => e.getAttribute(n), C = (e, n) => e.removeAttribute(n), h = (e) => e != null && typeof e == "object" || !1, i = (e) => h(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some(
  (n) => e.nodeType === n
) || !1, u = (e) => i(e) && e.nodeType === 1 || !1, m = (e) => typeof e == "string" || !1, D = (e) => h(e) && e.constructor.name === "Window" || !1, L = (e) => i(e) && e.nodeType === 9 || !1, p = (e) => L(e) ? e : i(e) ? e.ownerDocument : D(e) ? e.document : globalThis.document, v = (e, ...n) => Object.assign(e, ...n), d = (e) => {
  if (!e) return;
  if (m(e))
    return p().createElement(e);
  const { tagName: n } = e, s = d(n);
  if (!s) return;
  const t = { ...e };
  return delete t.tagName, v(s, t);
}, M = (e) => Object.entries(e), V = (e, n) => {
  M(n).forEach(([s, t]) => {
    if (t && m(s) && s.includes("--"))
      e.style.setProperty(s, t);
    else {
      const o = {};
      o[s] = t, v(e.style, o);
    }
  });
}, S = (e, n) => (i(n) ? n : p()).querySelectorAll(e), g = (e) => u(e) && "offsetWidth" in e || !1, E = (e) => typeof e == "function" || !1, W = (e, n) => u(e) ? e : (u(n) ? n : p()).querySelector(e), a = "data-src", q = (e) => g(e) && e.tagName === "VIDEO", l = (e) => g(e) && e.tagName === "SOURCE", b = (e) => g(e) && e.tagName === "IMG", O = (e, n) => {
  const s = l(e), t = s ? N : I, o = s ? d("VIDEO") : null, r = d(s ? "SOURCE" : "IMG"), c = s ? o : r, f = T(e, a);
  if (!c || !f) return;
  const y = () => {
    b(e) || l(e) ? (e.src = f, l(e) && q(e.parentElement) && e.parentElement.load()) : V(e, { backgroundImage: `url("${f}")` }), C(e, a), E(n) && n(), R(c, t, y);
  };
  j(c, t, y), (b(r) || l(r)) && (r.src = f, o && o.append(r));
}, w = (e) => {
  const n = S(
    `[${a}]`,
    e
  ), s = e && T(e, a);
  return s && !n ? [e] : !s && n ? [...n] : s && n ? [e, ...n] : !s && !n ? [...S(`[${a}]`)] : null;
}, A = (e, n) => {
  const s = W(e);
  if (!s) return;
  const t = E(n) ? n : null, o = w(s);
  o && o.length && o.forEach((r, c) => {
    c === o.length - 1 && t ? O(r, t) : O(r);
  });
};
export {
  A as default
};
//# sourceMappingURL=dll.mjs.map
