const R = "load", j = "loadstart", m = (e, n, t, o) => {
  e.addEventListener(
    n,
    t,
    !1
  );
}, C = (e, n, t, o) => {
  e.removeEventListener(
    n,
    t,
    !1
  );
}, h = (e, n) => e.getAttribute(n), E = (e, n) => e.removeAttribute(n), v = (e) => e != null && typeof e == "object" || !1, l = (e) => v(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some(
  (n) => e.nodeType === n
) || !1, u = (e) => l(e) && e.nodeType === 1 || !1, T = (e) => typeof e == "string" || !1, L = (e) => v(e) && e.constructor.name === "Window" || !1, D = (e) => l(e) && e.nodeType === 9 || !1, p = (e) => D(e) ? e : l(e) ? e.ownerDocument : L(e) ? e.document : globalThis.document, I = (e, ...n) => Object.assign(e, ...n), d = (e) => {
  if (!e) return;
  if (T(e))
    return p().createElement(e);
  const { tagName: n } = e, t = d(n);
  if (!t) return;
  const o = { ...e };
  return delete o.tagName, I(t, o);
}, M = (e) => Object.entries(e), V = (e, n) => {
  M(n).forEach(([t, o]) => {
    if (o && T(t) && t.includes("--"))
      e.style.setProperty(t, o);
    else {
      const s = {};
      s[t] = o, I(e.style, s);
    }
  });
}, S = (e, n) => (l(n) ? n : p()).querySelectorAll(e), g = (e) => u(e) && "offsetWidth" in e || !1, N = (e) => typeof e == "function" || !1, q = (e, n) => u(e) ? e : (u(n) ? n : p()).querySelector(e), i = "data-src", w = (e) => g(e) && e.tagName === "VIDEO", f = (e) => g(e) && e.tagName === "SOURCE", b = (e) => g(e) && e.tagName === "IMG", O = (e, n) => {
  const t = f(e), o = t ? j : R, s = t ? d("VIDEO") : null, r = d(t ? "SOURCE" : "IMG"), c = t ? s : r, a = h(e, i);
  if (!c || !a) return;
  const y = () => {
    b(e) || f(e) ? (e.src = a, f(e) && w(e.parentElement) && e.parentElement.load()) : V(e, { backgroundImage: `url("${a}")` }), E(e, i), N(n) && n(), C(c, o, y);
  };
  m(c, o, y), (b(r) || f(r)) && (r.src = a, s && s.append(r));
}, A = (e) => {
  const n = S(
    `[${i}]`,
    e
  ), t = e && h(e, i);
  return t && !n ? [e] : !t && n ? [...n] : t && n ? [e, ...n] : !t && !n ? [...S(`[${i}]`)] : null;
}, G = (e, n) => {
  const t = q(e);
  if (!t) return;
  const o = N(n) ? n : null, s = A(t);
  s && s.length && s.forEach((r, c) => {
    c === s.length - 1 && o ? O(r, o) : O(r);
  });
};
export {
  G as default
};
//# sourceMappingURL=dll.mjs.map
