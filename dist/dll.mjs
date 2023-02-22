const Mn = (n) => n != null && typeof n == "object" || !1, G = (n) => Mn(n) && typeof n.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((c) => n.nodeType === c) || !1, Fa = (n) => Mn(n) && n.constructor.name === "Window" || !1, Ra = (n) => G(n) && n.nodeType === 9 || !1, Va = (n) => Fa(n) ? n.document : Ra(n) ? n : G(n) ? n.ownerDocument : window.document, Wa = (n) => G(n) && n.nodeType === 1 || !1, ja = (n, c) => Wa(n) ? n : (G(c) ? c : Va()).querySelector(n), Ua = (n) => typeof n == "function" || !1;
var l = {};
(function(n) {
  Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
  const c = "aria-checked", d = "aria-description", k = "aria-describedby", b = "aria-expanded", f = "aria-haspopup", N = "aria-hidden", T = "aria-label", R = "aria-labelledby", Ln = "aria-modal", On = "aria-pressed", Cn = "aria-selected", Dn = "aria-valuemin", In = "aria-valuemax", zn = "aria-valuenow", Hn = "aria-valuetext", x = "abort", ee = "beforeunload", ne = "blur", te = "change", ae = "contextmenu", $ = "DOMContentLoaded", ie = "DOMMouseScroll", oe = "error", ce = "focus", ue = "focusin", le = "focusout", re = "gesturechange", se = "gestureend", de = "gesturestart", me = "keydown", ge = "keypress", ve = "keyup", Ee = "load", be = "click", fe = "dblclick", ye = "mousedown", he = "mouseup", we = "hover", Ae = "mouseenter", Se = "mouseleave", ke = "mousein", Ne = "mouseout", Te = "mouseover", Me = "mousemove", Le = "mousewheel", Oe = "move", Ce = "orientationchange", De = "pointercancel", Ie = "pointerdown", ze = "pointerleave", He = "pointermove", Pe = "pointerup", Be = "readystatechange", Fe = "reset", Re = "resize", Ve = "select", We = "selectend", je = "selectstart", Ue = "scroll", qe = "submit", Qe = "touchstart", Ge = "touchmove", $e = "touchcancel", Je = "touchend", Ke = "unload", Pn = { DOMContentLoaded: $, DOMMouseScroll: ie, abort: x, beforeunload: ee, blur: ne, change: te, click: be, contextmenu: ae, dblclick: fe, error: oe, focus: ce, focusin: ue, focusout: le, gesturechange: re, gestureend: se, gesturestart: de, hover: we, keydown: me, keypress: ge, keyup: ve, load: Ee, mousedown: ye, mousemove: Me, mousein: ke, mouseout: Ne, mouseenter: Ae, mouseleave: Se, mouseover: Te, mouseup: he, mousewheel: Le, move: Oe, orientationchange: Ce, pointercancel: De, pointerdown: Ie, pointerleave: ze, pointermove: He, pointerup: Pe, readystatechange: Be, reset: Fe, resize: Re, scroll: Ue, select: Ve, selectend: We, selectstart: je, submit: qe, touchcancel: $e, touchend: Je, touchmove: Ge, touchstart: Qe, unload: Ke }, Bn = "drag", Fn = "dragstart", Rn = "dragenter", Vn = "dragleave", Wn = "dragover", jn = "dragend", Un = "loadstart", qn = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" }, Qn = { down: "mousedown", up: "mouseup" }, Gn = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], $n = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" }, Jn = { in: "focusin", out: "focusout" }, Kn = { Backspace: "Backspace", Tab: "Tab", Enter: "Enter", Shift: "Shift", Control: "Control", Alt: "Alt", Pause: "Pause", CapsLock: "CapsLock", Escape: "Escape", Scape: "Space", ArrowLeft: "ArrowLeft", ArrowUp: "ArrowUp", ArrowRight: "ArrowRight", ArrowDown: "ArrowDown", Insert: "Insert", Delete: "Delete", Meta: "Meta", ContextMenu: "ContextMenu", ScrollLock: "ScrollLock" }, Zn = "Alt", Xn = "ArrowDown", Yn = "ArrowUp", _n = "ArrowLeft", pn = "ArrowRight", xn = "Backspace", et = "CapsLock", nt = "Control", tt = "Delete", at = "Enter", it = "Escape", ot = "Insert", ct = "Meta", ut = "Pause", lt = "ScrollLock", rt = "Shift", st = "Space", dt = "Tab", Ze = "animationDuration", Xe = "animationDelay", J = "animationName", V = "animationend", Ye = "transitionDuration", _e = "transitionDelay", W = "transitionend", K = "transitionProperty", mt = "addEventListener", gt = "removeEventListener", vt = { linear: "linear", easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)", easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)", easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)", easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)", easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)", easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)", easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)", easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)", easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)", easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)", easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)", easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)", easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)", easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)", easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)", easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)", easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)", easingExponentialInOut: "cubic-bezier(1,0,0,1)", easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)", easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)", easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)", easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)", easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)", easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)" }, Et = "offsetHeight", bt = "offsetWidth", ft = "scrollHeight", yt = "scrollWidth", ht = "tabindex", wt = navigator.userAgentData, C = wt, { userAgent: At } = navigator, D = At, pe = /iPhone|iPad|iPod|Android/i;
  let Z = !1;
  C ? Z = C.brands.some((e) => pe.test(e.brand)) : Z = pe.test(D);
  const St = Z, xe = /(iPhone|iPod|iPad)/, kt = C ? C.brands.some((e) => xe.test(e.brand)) : xe.test(D), Nt = D ? D.includes("Firefox") : !1, { head: I } = document, Tt = ["webkitPerspective", "perspective"].some((e) => e in I.style), en = (e, t, a, i) => {
    const o = i || !1;
    e.addEventListener(t, a, o);
  }, nn = (e, t, a, i) => {
    const o = i || !1;
    e.removeEventListener(t, a, o);
  }, tn = (e, t, a, i) => {
    const o = (s) => {
      (s.target === e || s.currentTarget === e) && (a.apply(e, [s]), nn(e, t, o, i));
    };
    en(e, t, o, i);
  }, an = () => {
  }, Mt = (() => {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", { get: () => (e = !0, e) });
      tn(document, $, an, t);
    } catch {
    }
    return e;
  })(), Lt = ["webkitTransform", "transform"].some((e) => e in I.style), Ot = "ontouchstart" in window || "msMaxTouchPoints" in navigator, Ct = ["webkitAnimation", "animation"].some((e) => e in I.style), Dt = ["webkitTransition", "transition"].some((e) => e in I.style), on = (e, t) => e.getAttribute(t), It = (e, t, a) => t.getAttributeNS(e, a), zt = (e, t) => e.hasAttribute(t), Ht = (e, t, a) => t.hasAttributeNS(e, a), Pt = (e, t, a) => e.setAttribute(t, a), Bt = (e, t, a, i) => t.setAttributeNS(e, a, i), Ft = (e, t) => e.removeAttribute(t), Rt = (e, t, a) => t.removeAttributeNS(e, a), Vt = (e, ...t) => {
    e.classList.add(...t);
  }, Wt = (e, ...t) => {
    e.classList.remove(...t);
  }, jt = (e, t) => e.classList.contains(t), { body: Ut } = document, { documentElement: qt } = document, Qt = (e) => Array.from(e), y = (e) => e != null && typeof e == "object" || !1, r = (e) => y(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, g = (e) => r(e) && e.nodeType === 1 || !1, z = /* @__PURE__ */ new Map(), j = { set: (e, t, a) => {
    g(e) && (z.has(t) || z.set(t, /* @__PURE__ */ new Map()), z.get(t).set(e, a));
  }, getAllFor: (e) => z.get(e) || null, get: (e, t) => {
    if (!g(e) || !t)
      return null;
    const a = j.getAllFor(t);
    return e && a && a.get(e) || null;
  }, remove: (e, t) => {
    const a = j.getAllFor(t);
    !a || !g(e) || (a.delete(e), a.size === 0 && z.delete(t));
  } }, Gt = (e, t) => j.get(e, t), H = (e) => typeof e == "string" || !1, X = (e) => y(e) && e.constructor.name === "Window" || !1, Y = (e) => r(e) && e.nodeType === 9 || !1, E = (e) => X(e) ? e.document : Y(e) ? e : r(e) ? e.ownerDocument : window.document, P = (e, ...t) => Object.assign(e, ...t), cn = (e) => {
    if (!e)
      return;
    if (H(e))
      return E().createElement(e);
    const { tagName: t } = e, a = cn(t);
    if (!a)
      return;
    const i = { ...e };
    return delete i.tagName, P(a, i);
  }, un = (e, t) => {
    if (!e || !t)
      return;
    if (H(t))
      return E().createElementNS(e, t);
    const { tagName: a } = t, i = un(e, a);
    if (!i)
      return;
    const o = { ...t };
    return delete o.tagName, P(i, o);
  }, _ = (e, t) => e.dispatchEvent(t), $t = (e, t, a) => a.indexOf(e) === t, h = (e, t) => {
    const a = getComputedStyle(e), i = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
    return a.getPropertyValue(i);
  }, ln = (e) => {
    const t = h(e, J), a = h(e, Xe), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, rn = (e) => {
    const t = h(e, J), a = h(e, Ze), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, Jt = (e, t) => {
    let a = 0;
    const i = new Event(V), o = rn(e), s = ln(e);
    if (o) {
      const m = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(V, m), a = 1);
      };
      e.addEventListener(V, m), setTimeout(() => {
        a || _(e, i);
      }, o + s + 17);
    } else
      t.apply(e, [i]);
  }, sn = (e) => {
    const t = h(e, K), a = h(e, _e), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, dn = (e) => {
    const t = h(e, K), a = h(e, Ye), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, Kt = (e, t) => {
    let a = 0;
    const i = new Event(W), o = dn(e), s = sn(e);
    if (o) {
      const m = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(W, m), a = 1);
      };
      e.addEventListener(W, m), setTimeout(() => {
        a || _(e, i);
      }, o + s + 17);
    } else
      t.apply(e, [i]);
  }, Zt = (e) => Float32Array.from(Array.from(e)), Xt = (e) => Float64Array.from(Array.from(e)), Yt = (e, t) => e.focus(t), p = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, B = (e) => Object.entries(e), mn = (e) => e.toLowerCase(), _t = (e, t, a, i) => {
    const o = { ...a }, s = { ...e.dataset }, m = { ...t }, v = {}, A = "title";
    return B(s).forEach(([u, S]) => {
      const q = i && typeof u == "string" && u.includes(i) ? u.replace(i, "").replace(/[A-Z]/g, (Ba) => mn(Ba)) : u;
      v[q] = p(S);
    }), B(o).forEach(([u, S]) => {
      o[u] = p(S);
    }), B(t).forEach(([u, S]) => {
      u in o ? m[u] = o[u] : u in v ? m[u] = v[u] : m[u] = u === A ? on(e, A) : S;
    }), m;
  }, pt = (e, t) => y(e) && (Object.hasOwn(e, t) || t in e), xt = (e) => Object.keys(e), ea = (e) => Object.values(e), na = (e, t) => {
    const a = new CustomEvent(e, { cancelable: !0, bubbles: !0 });
    return y(t) && P(a, t), a;
  }, ta = { passive: !0 }, aa = (e) => e.offsetHeight, ia = (e, t) => {
    B(t).forEach(([a, i]) => {
      if (i && H(a) && a.includes("--"))
        e.style.setProperty(a, i);
      else {
        const o = {};
        o[a] = i, P(e.style, o);
      }
    });
  }, U = (e) => y(e) && e.constructor.name === "Map" || !1, gn = (e) => typeof e == "number" || !1, w = /* @__PURE__ */ new Map(), oa = { set: (e, t, a, i) => {
    g(e) && (i && i.length ? (w.has(e) || w.set(e, /* @__PURE__ */ new Map()), w.get(e).set(i, setTimeout(t, a))) : w.set(e, setTimeout(t, a)));
  }, get: (e, t) => {
    if (!g(e))
      return null;
    const a = w.get(e);
    return t && a && U(a) ? a.get(t) || null : gn(a) ? a : null;
  }, clear: (e, t) => {
    if (!g(e))
      return;
    const a = w.get(e);
    t && t.length && U(a) ? (clearTimeout(a.get(t)), a.delete(t), a.size === 0 && w.delete(e)) : (clearTimeout(a), w.delete(e));
  } }, ca = (e) => e.toUpperCase(), M = (e, t) => {
    const { width: a, height: i, top: o, right: s, bottom: m, left: v } = e.getBoundingClientRect();
    let A = 1, u = 1;
    if (t && g(e)) {
      const { offsetWidth: S, offsetHeight: q } = e;
      A = S > 0 ? Math.round(a) / S : 1, u = q > 0 ? Math.round(i) / q : 1;
    }
    return { width: a / A, height: i / u, top: o / u, right: s / A, bottom: m / u, left: v / A, x: v / A, y: o / u };
  }, ua = (e) => E(e).body, F = (e) => E(e).documentElement, la = (e) => E(e).head, ra = (e) => {
    const t = X(e), a = t ? e.scrollX : e.scrollLeft, i = t ? e.scrollY : e.scrollTop;
    return { x: a, y: i };
  }, vn = (e) => r(e) && e.constructor.name === "ShadowRoot" || !1, sa = (e) => e.nodeName === "HTML" ? e : g(e) && e.assignedSlot || r(e) && e.parentNode || vn(e) && e.host || F(e), En = (e) => {
    if (!g(e))
      return !1;
    const { width: t, height: a } = M(e), { offsetWidth: i, offsetHeight: o } = e;
    return Math.round(t) !== i || Math.round(a) !== o;
  }, da = (e, t, a) => {
    const i = g(t), o = M(e, i && En(t)), s = { x: 0, y: 0 };
    if (i) {
      const m = M(t, !0);
      s.x = m.x + t.clientLeft, s.y = m.y + t.clientTop;
    }
    return { x: o.left + a.x - s.x, y: o.top + a.y - s.y, width: o.width, height: o.height };
  };
  let bn = 0, fn = 0;
  const L = /* @__PURE__ */ new Map(), yn = (e, t) => {
    let a = t ? bn : fn;
    if (t) {
      const i = yn(e), o = L.get(i) || /* @__PURE__ */ new Map();
      L.has(i) || L.set(i, o), U(o) && !o.has(t) ? (o.set(t, a), bn += 1) : a = o.get(t);
    } else {
      const i = e.id || e;
      L.has(i) ? a = L.get(i) : (L.set(i, a), fn += 1);
    }
    return a;
  }, ma = (e) => e ? Y(e) ? e.defaultView : r(e) ? e?.ownerDocument?.defaultView : e : window, hn = (e) => Array.isArray(e) || !1, ga = (e) => r(e) && e.nodeName === "CANVAS" || !1, wn = (e) => g(e) && !!e.shadowRoot || !1, va = (e) => r(e) && [1, 2, 3, 4, 5, 6, 7, 8].some((t) => e.nodeType === t) || !1, Ea = (e) => {
    if (!r(e))
      return !1;
    const { top: t, bottom: a } = M(e), { clientHeight: i } = F(e);
    return t <= i && a >= 0;
  }, ba = (e) => {
    if (!r(e))
      return !1;
    const { clientWidth: t, clientHeight: a } = F(e), { top: i, left: o, bottom: s, right: m } = M(e, !0);
    return i >= 0 && o >= 0 && s <= a && m <= t;
  }, fa = (e) => hn(e) && e.every(g) || !1, ya = (e) => typeof e == "function" || !1, ha = (e) => y(e) && e.constructor.name === "HTMLCollection" || !1, wa = (e) => g(e) && e.tagName === "IMG" || !1, Aa = (e) => {
    if (!H(e))
      return !1;
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }, Sa = (e) => y(e) && e.constructor.name === "WeakMap" || !1, ka = (e) => r(e) && ["SVG", "Image", "Video", "Canvas"].some((t) => e.constructor.name.includes(t)) || !1, Na = (e) => y(e) && e.constructor.name === "NodeList" || !1, Ta = (e) => F(e).dir === "rtl", Ma = (e) => r(e) && e.constructor.name.includes("SVG") || !1, La = (e) => r(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, An = (e, t) => e ? e.closest(t) || An(e.getRootNode().host, t) : null, Oa = (e, t) => g(e) ? e : (r(t) ? t : E()).querySelector(e), Sn = (e, t) => (r(t) ? t : E()).getElementsByTagName(e), Ca = (e) => [...Sn("*", e)].filter(wn), Da = (e, t) => E(t).getElementById(e) || null, Ia = (e, t) => (r(t) ? t : E()).querySelectorAll(e), za = (e, t) => (t && r(t) ? t : E()).getElementsByClassName(e), Ha = (e, t) => e.matches(t), Pa = "2.0.0alpha12";
  n.ArrayFrom = Qt, n.DOMContentLoadedEvent = $, n.DOMMouseScrollEvent = ie, n.Data = j, n.Float32ArrayFrom = Zt, n.Float64ArrayFrom = Xt, n.ObjectAssign = P, n.ObjectEntries = B, n.ObjectHasOwn = pt, n.ObjectKeys = xt, n.ObjectValues = ea, n.Timer = oa, n.abortEvent = x, n.addClass = Vt, n.addEventListener = mt, n.animationDelay = Xe, n.animationDuration = Ze, n.animationEndEvent = V, n.animationName = J, n.ariaChecked = c, n.ariaDescribedBy = k, n.ariaDescription = d, n.ariaExpanded = b, n.ariaHasPopup = f, n.ariaHidden = N, n.ariaLabel = T, n.ariaLabelledBy = R, n.ariaModal = Ln, n.ariaPressed = On, n.ariaSelected = Cn, n.ariaValueMax = In, n.ariaValueMin = Dn, n.ariaValueNow = zn, n.ariaValueText = Hn, n.beforeunloadEvent = ee, n.bezierEasings = vt, n.blurEvent = ne, n.changeEvent = te, n.closest = An, n.contextmenuEvent = ae, n.createCustomEvent = na, n.createElement = cn, n.createElementNS = un, n.dispatchEvent = _, n.distinct = $t, n.documentBody = Ut, n.documentElement = qt, n.documentHead = I, n.dragEvent = Bn, n.dragendEvent = jn, n.dragenterEvent = Rn, n.dragleaveEvent = Vn, n.dragoverEvent = Wn, n.dragstartEvent = Fn, n.emulateAnimationEnd = Jt, n.emulateTransitionEnd = Kt, n.errorEvent = oe, n.focus = Yt, n.focusEvent = ce, n.focusEvents = Jn, n.focusinEvent = ue, n.focusoutEvent = le, n.gesturechangeEvent = re, n.gestureendEvent = se, n.gesturestartEvent = de, n.getAttribute = on, n.getAttributeNS = It, n.getBoundingClientRect = M, n.getCustomElements = Ca, n.getDocument = E, n.getDocumentBody = ua, n.getDocumentElement = F, n.getDocumentHead = la, n.getElementAnimationDelay = ln, n.getElementAnimationDuration = rn, n.getElementById = Da, n.getElementStyle = h, n.getElementTransitionDelay = sn, n.getElementTransitionDuration = dn, n.getElementsByClassName = za, n.getElementsByTagName = Sn, n.getInstance = Gt, n.getNodeScroll = ra, n.getParentNode = sa, n.getRectRelativeToOffsetParent = da, n.getUID = yn, n.getWindow = ma, n.hasAttribute = zt, n.hasAttributeNS = Ht, n.hasClass = jt, n.isApple = kt, n.isArray = hn, n.isCanvas = ga, n.isCustomElement = wn, n.isDocument = Y, n.isElement = va, n.isElementInScrollRange = Ea, n.isElementInViewport = ba, n.isElementsArray = fa, n.isFirefox = Nt, n.isFunction = ya, n.isHTMLCollection = ha, n.isHTMLElement = g, n.isHTMLImageElement = wa, n.isJSON = Aa, n.isMap = U, n.isMedia = ka, n.isMobile = St, n.isNode = r, n.isNodeList = Na, n.isNumber = gn, n.isObject = y, n.isRTL = Ta, n.isSVGElement = Ma, n.isScaledElement = En, n.isShadowRoot = vn, n.isString = H, n.isTableElement = La, n.isWeakMap = Sa, n.isWindow = X, n.keyAlt = Zn, n.keyArrowDown = Xn, n.keyArrowLeft = _n, n.keyArrowRight = pn, n.keyArrowUp = Yn, n.keyBackspace = xn, n.keyCapsLock = et, n.keyControl = nt, n.keyDelete = tt, n.keyEnter = at, n.keyEscape = it, n.keyInsert = ot, n.keyMeta = ct, n.keyPause = ut, n.keyScrollLock = lt, n.keyShift = rt, n.keySpace = st, n.keyTab = dt, n.keyboardEventKeys = Kn, n.keydownEvent = me, n.keypressEvent = ge, n.keyupEvent = ve, n.loadEvent = Ee, n.loadstartEvent = Un, n.matches = Ha, n.mouseClickEvents = Qn, n.mouseHoverEvents = Gn, n.mouseSwipeEvents = qn, n.mouseclickEvent = be, n.mousedblclickEvent = fe, n.mousedownEvent = ye, n.mouseenterEvent = Ae, n.mousehoverEvent = we, n.mouseinEvent = ke, n.mouseleaveEvent = Se, n.mousemoveEvent = Me, n.mouseoutEvent = Ne, n.mouseoverEvent = Te, n.mouseupEvent = he, n.mousewheelEvent = Le, n.moveEvent = Oe, n.nativeEvents = Pn, n.noop = an, n.normalizeOptions = _t, n.normalizeValue = p, n.off = nn, n.offsetHeight = Et, n.offsetWidth = bt, n.on = en, n.one = tn, n.orientationchangeEvent = Ce, n.passiveHandler = ta, n.pointercancelEvent = De, n.pointerdownEvent = Ie, n.pointerleaveEvent = ze, n.pointermoveEvent = He, n.pointerupEvent = Pe, n.querySelector = Oa, n.querySelectorAll = Ia, n.readystatechangeEvent = Be, n.reflow = aa, n.removeAttribute = Ft, n.removeAttributeNS = Rt, n.removeClass = Wt, n.removeEventListener = gt, n.resetEvent = Fe, n.resizeEvent = Re, n.scrollEvent = Ue, n.scrollHeight = ft, n.scrollWidth = yt, n.selectEvent = Ve, n.selectendEvent = We, n.selectstartEvent = je, n.setAttribute = Pt, n.setAttributeNS = Bt, n.setElementStyle = ia, n.submitEvent = qe, n.support3DTransform = Tt, n.supportAnimation = Ct, n.supportPassive = Mt, n.supportTouch = Ot, n.supportTransform = Lt, n.supportTransition = Dt, n.tabindex = ht, n.toLowerCase = mn, n.toUpperCase = ca, n.touchEvents = $n, n.touchcancelEvent = $e, n.touchendEvent = Je, n.touchmoveEvent = Ge, n.touchstartEvent = Qe, n.transitionDelay = _e, n.transitionDuration = Ye, n.transitionEndEvent = W, n.transitionProperty = K, n.unloadEvent = Ke, n.userAgent = D, n.userAgentData = C, n.version = Pa;
})(l);
const O = "data-src", qa = (n) => l.isHTMLElement(n) && n.tagName === "VIDEO", Q = (n) => l.isHTMLElement(n) && n.tagName === "SOURCE", kn = (n) => l.isHTMLElement(n) && n.tagName === "IMG", Nn = (n, c) => {
  const d = Q(n), k = d ? l.loadstartEvent : l.loadEvent, b = d ? l.createElement("VIDEO") : null, f = l.createElement(d ? "SOURCE" : "IMG"), N = d ? b : f, T = l.getAttribute(n, O);
  if (!N || !T)
    return;
  const R = () => {
    kn(n) || Q(n) ? (n.src = T, Q(n) && qa(n.parentElement) && n.parentElement.load()) : l.setElementStyle(n, { backgroundImage: `url("${T}")` }), l.removeAttribute(n, O), l.isFunction(c) && c(), l.off(N, k, R);
  };
  l.on(N, k, R), (kn(f) || Q(f)) && (f.src = T, b && b.append(f));
}, Qa = (n) => {
  const c = l.querySelectorAll(`[${O}]`, n), d = n && l.getAttribute(n, O);
  return d && !c ? [n] : !d && c ? [...c] : d && c ? [n, ...c] : !d && !c ? [...l.querySelectorAll(`[${O}]`)] : null;
}, Ga = (n, c) => {
  const d = ja(n);
  if (!d)
    return;
  const k = Ua(c) ? c : null, b = Qa(d);
  b && b.length && b.forEach((f, N) => {
    N === b.length - 1 && k ? Nn(f, k) : Nn(f);
  });
}, Tn = (n) => {
  const c = l.isNode(n) ? n : document;
  [...l.querySelectorAll(`[${O}]`, c)].forEach((d) => Ga(d));
};
document.body ? Tn() : l.on(document, l.DOMContentLoadedEvent, () => Tn(), { once: !0 });
export {
  Ga as default
};
//# sourceMappingURL=dll.mjs.map
