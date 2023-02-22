var c = {};
(function(n) {
  Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
  const d = "aria-checked", m = "aria-description", k = "aria-describedby", E = "aria-expanded", h = "aria-haspopup", N = "aria-hidden", M = "aria-label", R = "aria-labelledby", Ln = "aria-modal", On = "aria-pressed", Cn = "aria-selected", Tn = "aria-valuemin", Dn = "aria-valuemax", In = "aria-valuenow", zn = "aria-valuetext", p = "abort", x = "beforeunload", ee = "blur", ne = "change", te = "contextmenu", G = "DOMContentLoaded", ae = "DOMMouseScroll", ie = "error", oe = "focus", ce = "focusin", ue = "focusout", le = "gesturechange", re = "gestureend", se = "gesturestart", de = "keydown", me = "keypress", ge = "keyup", ve = "load", be = "click", Ee = "dblclick", he = "mousedown", fe = "mouseup", ye = "hover", we = "mouseenter", Ae = "mouseleave", Se = "mousein", ke = "mouseout", Ne = "mouseover", Me = "mousemove", Le = "mousewheel", Oe = "move", Ce = "orientationchange", Te = "pointercancel", De = "pointerdown", Ie = "pointerleave", ze = "pointermove", He = "pointerup", Pe = "readystatechange", Be = "reset", Fe = "resize", Re = "select", Ve = "selectend", je = "selectstart", We = "scroll", Ue = "submit", Qe = "touchstart", qe = "touchmove", Ge = "touchcancel", $e = "touchend", Je = "unload", Hn = { DOMContentLoaded: G, DOMMouseScroll: ae, abort: p, beforeunload: x, blur: ee, change: ne, click: be, contextmenu: te, dblclick: Ee, error: ie, focus: oe, focusin: ce, focusout: ue, gesturechange: le, gestureend: re, gesturestart: se, hover: ye, keydown: de, keypress: me, keyup: ge, load: ve, mousedown: he, mousemove: Me, mousein: Se, mouseout: ke, mouseenter: we, mouseleave: Ae, mouseover: Ne, mouseup: fe, mousewheel: Le, move: Oe, orientationchange: Ce, pointercancel: Te, pointerdown: De, pointerleave: Ie, pointermove: ze, pointerup: He, readystatechange: Pe, reset: Be, resize: Fe, scroll: We, select: Re, selectend: Ve, selectstart: je, submit: Ue, touchcancel: Ge, touchend: $e, touchmove: qe, touchstart: Qe, unload: Je }, Pn = "drag", Bn = "dragstart", Fn = "dragenter", Rn = "dragleave", Vn = "dragover", jn = "dragend", Wn = "loadstart", Un = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" }, Qn = { down: "mousedown", up: "mouseup" }, qn = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], Gn = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" }, $n = { in: "focusin", out: "focusout" }, Jn = { Backspace: "Backspace", Tab: "Tab", Enter: "Enter", Shift: "Shift", Control: "Control", Alt: "Alt", Pause: "Pause", CapsLock: "CapsLock", Escape: "Escape", Scape: "Space", ArrowLeft: "ArrowLeft", ArrowUp: "ArrowUp", ArrowRight: "ArrowRight", ArrowDown: "ArrowDown", Insert: "Insert", Delete: "Delete", Meta: "Meta", ContextMenu: "ContextMenu", ScrollLock: "ScrollLock" }, Kn = "Alt", Zn = "ArrowDown", Xn = "ArrowUp", Yn = "ArrowLeft", _n = "ArrowRight", pn = "Backspace", xn = "CapsLock", et = "Control", nt = "Delete", tt = "Enter", at = "Escape", it = "Insert", ot = "Meta", ct = "Pause", ut = "ScrollLock", lt = "Shift", rt = "Space", st = "Tab", Ke = "animationDuration", Ze = "animationDelay", $ = "animationName", V = "animationend", Xe = "transitionDuration", Ye = "transitionDelay", j = "transitionend", J = "transitionProperty", dt = "addEventListener", mt = "removeEventListener", gt = { linear: "linear", easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)", easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)", easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)", easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)", easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)", easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)", easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)", easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)", easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)", easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)", easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)", easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)", easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)", easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)", easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)", easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)", easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)", easingExponentialInOut: "cubic-bezier(1,0,0,1)", easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)", easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)", easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)", easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)", easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)", easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)" }, vt = "offsetHeight", bt = "offsetWidth", Et = "scrollHeight", ht = "scrollWidth", ft = "tabindex", yt = navigator.userAgentData, T = yt, { userAgent: wt } = navigator, D = wt, _e = /iPhone|iPad|iPod|Android/i;
  let K = !1;
  T ? K = T.brands.some((e) => _e.test(e.brand)) : K = _e.test(D);
  const At = K, pe = /(iPhone|iPod|iPad)/, St = T ? T.brands.some((e) => pe.test(e.brand)) : pe.test(D), kt = D ? D.includes("Firefox") : !1, { head: I } = document, Nt = ["webkitPerspective", "perspective"].some((e) => e in I.style), xe = (e, t, a, i) => {
    const o = i || !1;
    e.addEventListener(t, a, o);
  }, en = (e, t, a, i) => {
    const o = i || !1;
    e.removeEventListener(t, a, o);
  }, nn = (e, t, a, i) => {
    const o = (r) => {
      (r.target === e || r.currentTarget === e) && (a.apply(e, [r]), en(e, t, o, i));
    };
    xe(e, t, o, i);
  }, tn = () => {
  }, Mt = (() => {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", { get: () => (e = !0, e) });
      nn(document, G, tn, t);
    } catch {
    }
    return e;
  })(), Lt = ["webkitTransform", "transform"].some((e) => e in I.style), Ot = "ontouchstart" in window || "msMaxTouchPoints" in navigator, Ct = ["webkitAnimation", "animation"].some((e) => e in I.style), Tt = ["webkitTransition", "transition"].some((e) => e in I.style), an = (e, t) => e.getAttribute(t), Dt = (e, t, a) => t.getAttributeNS(e, a), It = (e, t) => e.hasAttribute(t), zt = (e, t, a) => t.hasAttributeNS(e, a), Ht = (e, t, a) => e.setAttribute(t, a), Pt = (e, t, a, i) => t.setAttributeNS(e, a, i), Bt = (e, t) => e.removeAttribute(t), Ft = (e, t, a) => t.removeAttributeNS(e, a), Rt = (e, ...t) => {
    e.classList.add(...t);
  }, Vt = (e, ...t) => {
    e.classList.remove(...t);
  }, jt = (e, t) => e.classList.contains(t), { body: Wt } = document, { documentElement: Ut } = document, Qt = (e) => Array.from(e), f = (e) => e != null && typeof e == "object" || !1, l = (e) => f(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, g = (e) => l(e) && e.nodeType === 1 || !1, z = /* @__PURE__ */ new Map(), W = { set: (e, t, a) => {
    g(e) && (z.has(t) || z.set(t, /* @__PURE__ */ new Map()), z.get(t).set(e, a));
  }, getAllFor: (e) => z.get(e) || null, get: (e, t) => {
    if (!g(e) || !t)
      return null;
    const a = W.getAllFor(t);
    return e && a && a.get(e) || null;
  }, remove: (e, t) => {
    const a = W.getAllFor(t);
    !a || !g(e) || (a.delete(e), a.size === 0 && z.delete(t));
  } }, qt = (e, t) => W.get(e, t), H = (e) => typeof e == "string" || !1, Z = (e) => f(e) && e.constructor.name === "Window" || !1, X = (e) => l(e) && e.nodeType === 9 || !1, b = (e) => Z(e) ? e.document : X(e) ? e : l(e) ? e.ownerDocument : window.document, P = (e, ...t) => Object.assign(e, ...t), on = (e) => {
    if (!e)
      return;
    if (H(e))
      return b().createElement(e);
    const { tagName: t } = e, a = on(t);
    if (!a)
      return;
    const i = { ...e };
    return delete i.tagName, P(a, i);
  }, cn = (e, t) => {
    if (!e || !t)
      return;
    if (H(t))
      return b().createElementNS(e, t);
    const { tagName: a } = t, i = cn(e, a);
    if (!i)
      return;
    const o = { ...t };
    return delete o.tagName, P(i, o);
  }, Y = (e, t) => e.dispatchEvent(t), Gt = (e, t, a) => a.indexOf(e) === t, y = (e, t) => {
    const a = getComputedStyle(e), i = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
    return a.getPropertyValue(i);
  }, un = (e) => {
    const t = y(e, $), a = y(e, Ze), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, ln = (e) => {
    const t = y(e, $), a = y(e, Ke), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, $t = (e, t) => {
    let a = 0;
    const i = new Event(V), o = ln(e), r = un(e);
    if (o) {
      const s = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(V, s), a = 1);
      };
      e.addEventListener(V, s), setTimeout(() => {
        a || Y(e, i);
      }, o + r + 17);
    } else
      t.apply(e, [i]);
  }, rn = (e) => {
    const t = y(e, J), a = y(e, Ye), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, sn = (e) => {
    const t = y(e, J), a = y(e, Xe), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, Jt = (e, t) => {
    let a = 0;
    const i = new Event(j), o = sn(e), r = rn(e);
    if (o) {
      const s = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(j, s), a = 1);
      };
      e.addEventListener(j, s), setTimeout(() => {
        a || Y(e, i);
      }, o + r + 17);
    } else
      t.apply(e, [i]);
  }, Kt = (e) => Float32Array.from(Array.from(e)), Zt = (e) => Float64Array.from(Array.from(e)), Xt = (e, t) => e.focus(t), _ = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, B = (e) => Object.entries(e), dn = (e) => e.toLowerCase(), Yt = (e, t, a, i) => {
    const o = { ...a }, r = { ...e.dataset }, s = { ...t }, v = {}, A = "title";
    return B(r).forEach(([u, S]) => {
      const Q = i && typeof u == "string" && u.includes(i) ? u.replace(i, "").replace(/[A-Z]/g, (Pa) => dn(Pa)) : u;
      v[Q] = _(S);
    }), B(o).forEach(([u, S]) => {
      o[u] = _(S);
    }), B(t).forEach(([u, S]) => {
      u in o ? s[u] = o[u] : u in v ? s[u] = v[u] : s[u] = u === A ? an(e, A) : S;
    }), s;
  }, _t = (e, t) => f(e) && (Object.hasOwn(e, t) || t in e), pt = (e) => Object.keys(e), xt = (e) => Object.values(e), ea = (e, t) => {
    const a = new CustomEvent(e, { cancelable: !0, bubbles: !0 });
    return f(t) && P(a, t), a;
  }, na = { passive: !0 }, ta = (e) => e.offsetHeight, aa = (e, t) => {
    B(t).forEach(([a, i]) => {
      if (i && H(a) && a.includes("--"))
        e.style.setProperty(a, i);
      else {
        const o = {};
        o[a] = i, P(e.style, o);
      }
    });
  }, U = (e) => f(e) && e.constructor.name === "Map" || !1, mn = (e) => typeof e == "number" || !1, w = /* @__PURE__ */ new Map(), ia = { set: (e, t, a, i) => {
    g(e) && (i && i.length ? (w.has(e) || w.set(e, /* @__PURE__ */ new Map()), w.get(e).set(i, setTimeout(t, a))) : w.set(e, setTimeout(t, a)));
  }, get: (e, t) => {
    if (!g(e))
      return null;
    const a = w.get(e);
    return t && a && U(a) ? a.get(t) || null : mn(a) ? a : null;
  }, clear: (e, t) => {
    if (!g(e))
      return;
    const a = w.get(e);
    t && t.length && U(a) ? (clearTimeout(a.get(t)), a.delete(t), a.size === 0 && w.delete(e)) : (clearTimeout(a), w.delete(e));
  } }, oa = (e) => e.toUpperCase(), L = (e, t) => {
    const { width: a, height: i, top: o, right: r, bottom: s, left: v } = e.getBoundingClientRect();
    let A = 1, u = 1;
    if (t && g(e)) {
      const { offsetWidth: S, offsetHeight: Q } = e;
      A = S > 0 ? Math.round(a) / S : 1, u = Q > 0 ? Math.round(i) / Q : 1;
    }
    return { width: a / A, height: i / u, top: o / u, right: r / A, bottom: s / u, left: v / A, x: v / A, y: o / u };
  }, ca = (e) => b(e).body, F = (e) => b(e).documentElement, ua = (e) => b(e).head, la = (e) => {
    const t = Z(e), a = t ? e.scrollX : e.scrollLeft, i = t ? e.scrollY : e.scrollTop;
    return { x: a, y: i };
  }, gn = (e) => l(e) && e.constructor.name === "ShadowRoot" || !1, ra = (e) => e.nodeName === "HTML" ? e : g(e) && e.assignedSlot || l(e) && e.parentNode || gn(e) && e.host || F(e), vn = (e) => {
    if (!g(e))
      return !1;
    const { width: t, height: a } = L(e), { offsetWidth: i, offsetHeight: o } = e;
    return Math.round(t) !== i || Math.round(a) !== o;
  }, sa = (e, t, a) => {
    const i = g(t), o = L(e, i && vn(t)), r = { x: 0, y: 0 };
    if (i) {
      const s = L(t, !0);
      r.x = s.x + t.clientLeft, r.y = s.y + t.clientTop;
    }
    return { x: o.left + a.x - r.x, y: o.top + a.y - r.y, width: o.width, height: o.height };
  };
  let bn = 0, En = 0;
  const O = /* @__PURE__ */ new Map(), hn = (e, t) => {
    let a = t ? bn : En;
    if (t) {
      const i = hn(e), o = O.get(i) || /* @__PURE__ */ new Map();
      O.has(i) || O.set(i, o), U(o) && !o.has(t) ? (o.set(t, a), bn += 1) : a = o.get(t);
    } else {
      const i = e.id || e;
      O.has(i) ? a = O.get(i) : (O.set(i, a), En += 1);
    }
    return a;
  }, da = (e) => e ? X(e) ? e.defaultView : l(e) ? e?.ownerDocument?.defaultView : e : window, fn = (e) => Array.isArray(e) || !1, ma = (e) => l(e) && e.nodeName === "CANVAS" || !1, yn = (e) => g(e) && !!e.shadowRoot || !1, ga = (e) => l(e) && [1, 2, 3, 4, 5, 6, 7, 8].some((t) => e.nodeType === t) || !1, va = (e) => {
    if (!l(e))
      return !1;
    const { top: t, bottom: a } = L(e), { clientHeight: i } = F(e);
    return t <= i && a >= 0;
  }, ba = (e) => {
    if (!l(e))
      return !1;
    const { clientWidth: t, clientHeight: a } = F(e), { top: i, left: o, bottom: r, right: s } = L(e, !0);
    return i >= 0 && o >= 0 && r <= a && s <= t;
  }, Ea = (e) => fn(e) && e.every(g) || !1, ha = (e) => typeof e == "function" || !1, fa = (e) => f(e) && e.constructor.name === "HTMLCollection" || !1, ya = (e) => g(e) && e.tagName === "IMG" || !1, wa = (e) => {
    if (!H(e))
      return !1;
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }, Aa = (e) => f(e) && e.constructor.name === "WeakMap" || !1, Sa = (e) => l(e) && ["SVG", "Image", "Video", "Canvas"].some((t) => e.constructor.name.includes(t)) || !1, ka = (e) => f(e) && e.constructor.name === "NodeList" || !1, Na = (e) => F(e).dir === "rtl", Ma = (e) => l(e) && e.constructor.name.includes("SVG") || !1, La = (e) => l(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, wn = (e, t) => e ? e.closest(t) || wn(e.getRootNode().host, t) : null, Oa = (e, t) => g(e) ? e : (l(t) ? t : b()).querySelector(e), An = (e, t) => (l(t) ? t : b()).getElementsByTagName(e), Ca = (e) => [...An("*", e)].filter(yn), Ta = (e, t) => b(t).getElementById(e) || null, Da = (e, t) => (l(t) ? t : b()).querySelectorAll(e), Ia = (e, t) => (t && l(t) ? t : b()).getElementsByClassName(e), za = (e, t) => e.matches(t), Ha = "2.0.0alpha12";
  n.ArrayFrom = Qt, n.DOMContentLoadedEvent = G, n.DOMMouseScrollEvent = ae, n.Data = W, n.Float32ArrayFrom = Kt, n.Float64ArrayFrom = Zt, n.ObjectAssign = P, n.ObjectEntries = B, n.ObjectHasOwn = _t, n.ObjectKeys = pt, n.ObjectValues = xt, n.Timer = ia, n.abortEvent = p, n.addClass = Rt, n.addEventListener = dt, n.animationDelay = Ze, n.animationDuration = Ke, n.animationEndEvent = V, n.animationName = $, n.ariaChecked = d, n.ariaDescribedBy = k, n.ariaDescription = m, n.ariaExpanded = E, n.ariaHasPopup = h, n.ariaHidden = N, n.ariaLabel = M, n.ariaLabelledBy = R, n.ariaModal = Ln, n.ariaPressed = On, n.ariaSelected = Cn, n.ariaValueMax = Dn, n.ariaValueMin = Tn, n.ariaValueNow = In, n.ariaValueText = zn, n.beforeunloadEvent = x, n.bezierEasings = gt, n.blurEvent = ee, n.changeEvent = ne, n.closest = wn, n.contextmenuEvent = te, n.createCustomEvent = ea, n.createElement = on, n.createElementNS = cn, n.dispatchEvent = Y, n.distinct = Gt, n.documentBody = Wt, n.documentElement = Ut, n.documentHead = I, n.dragEvent = Pn, n.dragendEvent = jn, n.dragenterEvent = Fn, n.dragleaveEvent = Rn, n.dragoverEvent = Vn, n.dragstartEvent = Bn, n.emulateAnimationEnd = $t, n.emulateTransitionEnd = Jt, n.errorEvent = ie, n.focus = Xt, n.focusEvent = oe, n.focusEvents = $n, n.focusinEvent = ce, n.focusoutEvent = ue, n.gesturechangeEvent = le, n.gestureendEvent = re, n.gesturestartEvent = se, n.getAttribute = an, n.getAttributeNS = Dt, n.getBoundingClientRect = L, n.getCustomElements = Ca, n.getDocument = b, n.getDocumentBody = ca, n.getDocumentElement = F, n.getDocumentHead = ua, n.getElementAnimationDelay = un, n.getElementAnimationDuration = ln, n.getElementById = Ta, n.getElementStyle = y, n.getElementTransitionDelay = rn, n.getElementTransitionDuration = sn, n.getElementsByClassName = Ia, n.getElementsByTagName = An, n.getInstance = qt, n.getNodeScroll = la, n.getParentNode = ra, n.getRectRelativeToOffsetParent = sa, n.getUID = hn, n.getWindow = da, n.hasAttribute = It, n.hasAttributeNS = zt, n.hasClass = jt, n.isApple = St, n.isArray = fn, n.isCanvas = ma, n.isCustomElement = yn, n.isDocument = X, n.isElement = ga, n.isElementInScrollRange = va, n.isElementInViewport = ba, n.isElementsArray = Ea, n.isFirefox = kt, n.isFunction = ha, n.isHTMLCollection = fa, n.isHTMLElement = g, n.isHTMLImageElement = ya, n.isJSON = wa, n.isMap = U, n.isMedia = Sa, n.isMobile = At, n.isNode = l, n.isNodeList = ka, n.isNumber = mn, n.isObject = f, n.isRTL = Na, n.isSVGElement = Ma, n.isScaledElement = vn, n.isShadowRoot = gn, n.isString = H, n.isTableElement = La, n.isWeakMap = Aa, n.isWindow = Z, n.keyAlt = Kn, n.keyArrowDown = Zn, n.keyArrowLeft = Yn, n.keyArrowRight = _n, n.keyArrowUp = Xn, n.keyBackspace = pn, n.keyCapsLock = xn, n.keyControl = et, n.keyDelete = nt, n.keyEnter = tt, n.keyEscape = at, n.keyInsert = it, n.keyMeta = ot, n.keyPause = ct, n.keyScrollLock = ut, n.keyShift = lt, n.keySpace = rt, n.keyTab = st, n.keyboardEventKeys = Jn, n.keydownEvent = de, n.keypressEvent = me, n.keyupEvent = ge, n.loadEvent = ve, n.loadstartEvent = Wn, n.matches = za, n.mouseClickEvents = Qn, n.mouseHoverEvents = qn, n.mouseSwipeEvents = Un, n.mouseclickEvent = be, n.mousedblclickEvent = Ee, n.mousedownEvent = he, n.mouseenterEvent = we, n.mousehoverEvent = ye, n.mouseinEvent = Se, n.mouseleaveEvent = Ae, n.mousemoveEvent = Me, n.mouseoutEvent = ke, n.mouseoverEvent = Ne, n.mouseupEvent = fe, n.mousewheelEvent = Le, n.moveEvent = Oe, n.nativeEvents = Hn, n.noop = tn, n.normalizeOptions = Yt, n.normalizeValue = _, n.off = en, n.offsetHeight = vt, n.offsetWidth = bt, n.on = xe, n.one = nn, n.orientationchangeEvent = Ce, n.passiveHandler = na, n.pointercancelEvent = Te, n.pointerdownEvent = De, n.pointerleaveEvent = Ie, n.pointermoveEvent = ze, n.pointerupEvent = He, n.querySelector = Oa, n.querySelectorAll = Da, n.readystatechangeEvent = Pe, n.reflow = ta, n.removeAttribute = Bt, n.removeAttributeNS = Ft, n.removeClass = Vt, n.removeEventListener = mt, n.resetEvent = Be, n.resizeEvent = Fe, n.scrollEvent = We, n.scrollHeight = Et, n.scrollWidth = ht, n.selectEvent = Re, n.selectendEvent = Ve, n.selectstartEvent = je, n.setAttribute = Ht, n.setAttributeNS = Pt, n.setElementStyle = aa, n.submitEvent = Ue, n.support3DTransform = Nt, n.supportAnimation = Ct, n.supportPassive = Mt, n.supportTouch = Ot, n.supportTransform = Lt, n.supportTransition = Tt, n.tabindex = ft, n.toLowerCase = dn, n.toUpperCase = oa, n.touchEvents = Gn, n.touchcancelEvent = Ge, n.touchendEvent = $e, n.touchmoveEvent = qe, n.touchstartEvent = Qe, n.transitionDelay = Ye, n.transitionDuration = Xe, n.transitionEndEvent = j, n.transitionProperty = J, n.unloadEvent = Je, n.userAgent = D, n.userAgentData = T, n.version = Ha;
})(c);
const Ba = "1.0.0-alpha3", C = "data-src", Fa = (n) => c.isHTMLElement(n) && n.tagName === "VIDEO", q = (n) => c.isHTMLElement(n) && n.tagName === "SOURCE", Sn = (n) => c.isHTMLElement(n) && n.tagName === "IMG", kn = (n, d) => {
  const m = q(n), k = m ? c.loadstartEvent : c.loadEvent, E = m ? c.createElement("VIDEO") : null, h = c.createElement(m ? "SOURCE" : "IMG"), N = m ? E : h, M = c.getAttribute(n, C);
  if (!N || !M)
    return;
  const R = () => {
    Sn(n) || q(n) ? (n.src = M, q(n) && Fa(n.parentElement) && n.parentElement.load()) : c.setElementStyle(n, { backgroundImage: `url("${M}")` }), c.removeAttribute(n, C), c.isFunction(d) && d(), c.off(N, k, R);
  };
  c.on(N, k, R), (Sn(h) || q(h)) && (h.src = M, E && E.append(h));
}, Ra = (n) => {
  const d = c.querySelectorAll(`[${C}]`, n), m = n && c.getAttribute(n, C);
  return m && !d ? [n] : !m && d ? [...d] : m && d ? [n, ...d] : !m && !d ? [...c.querySelectorAll(`[${C}]`)] : null;
}, Mn = (n, d) => {
  const m = c.querySelector(n);
  if (!m)
    return;
  const k = c.isFunction(d) ? d : null, E = Ra(m);
  E && E.length && E.forEach((h, N) => {
    N === E.length - 1 && k ? kn(h, k) : kn(h);
  });
};
c.ObjectAssign(Mn, { version: Ba });
const Nn = (n) => {
  const d = c.isNode(n) ? n : document;
  [...c.querySelectorAll(`[${C}]`, d)].forEach((m) => Mn(m));
};
document.body ? Nn() : c.on(document, c.DOMContentLoadedEvent, () => Nn(), { once: !0 });
export {
  Mn as default
};
//# sourceMappingURL=dll.mjs.map
