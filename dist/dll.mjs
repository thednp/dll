var u = {};
(function(n) {
  Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
  const m = "aria-checked", g = "aria-description", k = "aria-describedby", E = "aria-expanded", h = "aria-haspopup", N = "aria-hidden", M = "aria-label", R = "aria-labelledby", Mn = "aria-modal", Ln = "aria-pressed", On = "aria-selected", Tn = "aria-valuemin", Cn = "aria-valuemax", Dn = "aria-valuenow", In = "aria-valuetext", x = "abort", ee = "beforeunload", ne = "blur", te = "change", ae = "contextmenu", G = "DOMContentLoaded", ie = "DOMMouseScroll", oe = "error", ce = "focus", ue = "focusin", le = "focusout", re = "gesturechange", se = "gestureend", de = "gesturestart", me = "keydown", ge = "keypress", ve = "keyup", be = "load", Ee = "click", he = "dblclick", fe = "mousedown", ye = "mouseup", we = "hover", Ae = "mouseenter", Se = "mouseleave", ke = "mousein", Ne = "mouseout", Me = "mouseover", Le = "mousemove", Oe = "mousewheel", Te = "move", Ce = "orientationchange", De = "pointercancel", Ie = "pointerdown", ze = "pointerleave", He = "pointermove", Pe = "pointerup", Be = "readystatechange", Fe = "reset", Re = "resize", Ve = "select", je = "selectend", We = "selectstart", Ue = "scroll", Qe = "submit", qe = "touchstart", Ge = "touchmove", $e = "touchcancel", Je = "touchend", Ke = "unload", zn = { DOMContentLoaded: G, DOMMouseScroll: ie, abort: x, beforeunload: ee, blur: ne, change: te, click: Ee, contextmenu: ae, dblclick: he, error: oe, focus: ce, focusin: ue, focusout: le, gesturechange: re, gestureend: se, gesturestart: de, hover: we, keydown: me, keypress: ge, keyup: ve, load: be, mousedown: fe, mousemove: Le, mousein: ke, mouseout: Ne, mouseenter: Ae, mouseleave: Se, mouseover: Me, mouseup: ye, mousewheel: Oe, move: Te, orientationchange: Ce, pointercancel: De, pointerdown: Ie, pointerleave: ze, pointermove: He, pointerup: Pe, readystatechange: Be, reset: Fe, resize: Re, scroll: Ue, select: Ve, selectend: je, selectstart: We, submit: Qe, touchcancel: $e, touchend: Je, touchmove: Ge, touchstart: qe, unload: Ke }, Hn = "drag", Pn = "dragstart", Bn = "dragenter", Fn = "dragleave", Rn = "dragover", Vn = "dragend", jn = "loadstart", Wn = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" }, Un = { down: "mousedown", up: "mouseup" }, Qn = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], qn = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" }, Gn = { in: "focusin", out: "focusout" }, $n = { Backspace: "Backspace", Tab: "Tab", Enter: "Enter", Shift: "Shift", Control: "Control", Alt: "Alt", Pause: "Pause", CapsLock: "CapsLock", Escape: "Escape", Scape: "Space", ArrowLeft: "ArrowLeft", ArrowUp: "ArrowUp", ArrowRight: "ArrowRight", ArrowDown: "ArrowDown", Insert: "Insert", Delete: "Delete", Meta: "Meta", ContextMenu: "ContextMenu", ScrollLock: "ScrollLock" }, Jn = "Alt", Kn = "ArrowDown", Zn = "ArrowUp", Xn = "ArrowLeft", Yn = "ArrowRight", _n = "Backspace", pn = "CapsLock", xn = "Control", et = "Delete", nt = "Enter", tt = "Escape", at = "Insert", it = "Meta", ot = "Pause", ct = "ScrollLock", ut = "Shift", lt = "Space", rt = "Tab", Ze = "animationDuration", Xe = "animationDelay", $ = "animationName", V = "animationend", Ye = "transitionDuration", _e = "transitionDelay", j = "transitionend", J = "transitionProperty", st = "addEventListener", dt = "removeEventListener", mt = { linear: "linear", easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)", easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)", easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)", easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)", easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)", easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)", easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)", easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)", easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)", easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)", easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)", easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)", easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)", easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)", easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)", easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)", easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)", easingExponentialInOut: "cubic-bezier(1,0,0,1)", easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)", easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)", easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)", easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)", easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)", easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)" }, gt = "offsetHeight", vt = "offsetWidth", bt = "scrollHeight", Et = "scrollWidth", ht = "tabindex", ft = navigator.userAgentData, T = ft, { userAgent: yt } = navigator, C = yt, pe = /iPhone|iPad|iPod|Android/i;
  let K = !1;
  T ? K = T.brands.some((e) => pe.test(e.brand)) : K = pe.test(C);
  const wt = K, xe = /(iPhone|iPod|iPad)/, At = T ? T.brands.some((e) => xe.test(e.brand)) : xe.test(C), St = C ? C.includes("Firefox") : !1, { head: D } = document, kt = ["webkitPerspective", "perspective"].some((e) => e in D.style), en = (e, t, a, i) => {
    const o = i || !1;
    e.addEventListener(t, a, o);
  }, nn = (e, t, a, i) => {
    const o = i || !1;
    e.removeEventListener(t, a, o);
  }, tn = (e, t, a, i) => {
    const o = (r) => {
      (r.target === e || r.currentTarget === e) && (a.apply(e, [r]), nn(e, t, o, i));
    };
    en(e, t, o, i);
  }, an = () => {
  }, Nt = (() => {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", { get: () => (e = !0, e) });
      tn(document, G, an, t);
    } catch {
    }
    return e;
  })(), Mt = ["webkitTransform", "transform"].some((e) => e in D.style), Lt = "ontouchstart" in window || "msMaxTouchPoints" in navigator, Ot = ["webkitAnimation", "animation"].some((e) => e in D.style), Tt = ["webkitTransition", "transition"].some((e) => e in D.style), on = (e, t) => e.getAttribute(t), Ct = (e, t, a) => t.getAttributeNS(e, a), Dt = (e, t) => e.hasAttribute(t), It = (e, t, a) => t.hasAttributeNS(e, a), zt = (e, t, a) => e.setAttribute(t, a), Ht = (e, t, a, i) => t.setAttributeNS(e, a, i), Pt = (e, t) => e.removeAttribute(t), Bt = (e, t, a) => t.removeAttributeNS(e, a), Ft = (e, ...t) => {
    e.classList.add(...t);
  }, Rt = (e, ...t) => {
    e.classList.remove(...t);
  }, Vt = (e, t) => e.classList.contains(t), { body: jt } = document, { documentElement: Wt } = document, Ut = (e) => Array.from(e), f = (e) => e != null && typeof e == "object" || !1, l = (e) => f(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, d = (e) => l(e) && e.nodeType === 1 || !1, I = /* @__PURE__ */ new Map(), W = { set: (e, t, a) => {
    d(e) && (I.has(t) || I.set(t, /* @__PURE__ */ new Map()), I.get(t).set(e, a));
  }, getAllFor: (e) => I.get(e) || null, get: (e, t) => {
    if (!d(e) || !t)
      return null;
    const a = W.getAllFor(t);
    return e && a && a.get(e) || null;
  }, remove: (e, t) => {
    const a = W.getAllFor(t);
    !a || !d(e) || (a.delete(e), a.size === 0 && I.delete(t));
  } }, Qt = (e, t) => W.get(e, t), z = (e) => typeof e == "string" || !1, Z = (e) => f(e) && e.constructor.name === "Window" || !1, X = (e) => l(e) && e.nodeType === 9 || !1, b = (e) => Z(e) ? e.document : X(e) ? e : l(e) ? e.ownerDocument : window.document, H = (e, ...t) => Object.assign(e, ...t), cn = (e) => {
    if (!e)
      return;
    if (z(e))
      return b().createElement(e);
    const { tagName: t } = e, a = cn(t);
    if (!a)
      return;
    const i = { ...e };
    return delete i.tagName, H(a, i);
  }, un = (e, t) => {
    if (!e || !t)
      return;
    if (z(t))
      return b().createElementNS(e, t);
    const { tagName: a } = t, i = un(e, a);
    if (!i)
      return;
    const o = { ...t };
    return delete o.tagName, H(i, o);
  }, Y = (e, t) => e.dispatchEvent(t), qt = (e, t, a) => a.indexOf(e) === t, y = (e, t) => {
    const a = getComputedStyle(e), i = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
    return a.getPropertyValue(i);
  }, ln = (e) => {
    const t = y(e, $), a = y(e, Xe), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, rn = (e) => {
    const t = y(e, $), a = y(e, Ze), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, Gt = (e, t) => {
    let a = 0;
    const i = new Event(V), o = rn(e), r = ln(e);
    if (o) {
      const s = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(V, s), a = 1);
      };
      e.addEventListener(V, s), setTimeout(() => {
        a || Y(e, i);
      }, o + r + 17);
    } else
      t.apply(e, [i]);
  }, sn = (e) => {
    const t = y(e, J), a = y(e, _e), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, dn = (e) => {
    const t = y(e, J), a = y(e, Ye), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, $t = (e, t) => {
    let a = 0;
    const i = new Event(j), o = dn(e), r = sn(e);
    if (o) {
      const s = (v) => {
        v.target === e && (t.apply(e, [v]), e.removeEventListener(j, s), a = 1);
      };
      e.addEventListener(j, s), setTimeout(() => {
        a || Y(e, i);
      }, o + r + 17);
    } else
      t.apply(e, [i]);
  }, Jt = (e) => Float32Array.from(Array.from(e)), Kt = (e) => Float64Array.from(Array.from(e)), Zt = (e, t) => e.focus(t), _ = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, P = (e) => Object.entries(e), mn = (e) => e.toLowerCase(), Xt = (e, t, a, i) => {
    const o = { ...a }, r = { ...e.dataset }, s = { ...t }, v = {}, A = "title";
    return P(r).forEach(([c, S]) => {
      const Q = i && typeof c == "string" && c.includes(i) ? c.replace(i, "").replace(/[A-Z]/g, (Ha) => mn(Ha)) : c;
      v[Q] = _(S);
    }), P(o).forEach(([c, S]) => {
      o[c] = _(S);
    }), P(t).forEach(([c, S]) => {
      c in o ? s[c] = o[c] : c in v ? s[c] = v[c] : s[c] = c === A ? on(e, A) : S;
    }), s;
  }, Yt = (e, t) => f(e) && (Object.hasOwn(e, t) || t in e), _t = (e) => Object.keys(e), pt = (e) => Object.values(e), xt = (e, t) => {
    const a = new CustomEvent(e, { cancelable: !0, bubbles: !0 });
    return f(t) && H(a, t), a;
  }, ea = { passive: !0 }, na = (e) => e.offsetHeight, ta = (e, t) => {
    P(t).forEach(([a, i]) => {
      if (i && z(a) && a.includes("--"))
        e.style.setProperty(a, i);
      else {
        const o = {};
        o[a] = i, H(e.style, o);
      }
    });
  }, U = (e) => f(e) && e.constructor.name === "Map" || !1, gn = (e) => typeof e == "number" || !1, w = /* @__PURE__ */ new Map(), aa = { set: (e, t, a, i) => {
    d(e) && (i && i.length ? (w.has(e) || w.set(e, /* @__PURE__ */ new Map()), w.get(e).set(i, setTimeout(t, a))) : w.set(e, setTimeout(t, a)));
  }, get: (e, t) => {
    if (!d(e))
      return null;
    const a = w.get(e);
    return t && a && U(a) ? a.get(t) || null : gn(a) ? a : null;
  }, clear: (e, t) => {
    if (!d(e))
      return;
    const a = w.get(e);
    t && t.length && U(a) ? (clearTimeout(a.get(t)), a.delete(t), a.size === 0 && w.delete(e)) : (clearTimeout(a), w.delete(e));
  } }, ia = (e) => e.toUpperCase(), L = (e, t) => {
    const { width: a, height: i, top: o, right: r, bottom: s, left: v } = e.getBoundingClientRect();
    let A = 1, c = 1;
    if (t && d(e)) {
      const { offsetWidth: S, offsetHeight: Q } = e;
      A = S > 0 ? Math.round(a) / S : 1, c = Q > 0 ? Math.round(i) / Q : 1;
    }
    return { width: a / A, height: i / c, top: o / c, right: r / A, bottom: s / c, left: v / A, x: v / A, y: o / c };
  }, oa = (e) => b(e).body, B = (e) => b(e).documentElement, ca = (e) => b(e).head, ua = (e) => {
    const t = Z(e), a = t ? e.scrollX : e.scrollLeft, i = t ? e.scrollY : e.scrollTop;
    return { x: a, y: i };
  }, vn = (e) => l(e) && e.constructor.name === "ShadowRoot" || !1, la = (e) => e.nodeName === "HTML" ? e : d(e) && e.assignedSlot || l(e) && e.parentNode || vn(e) && e.host || B(e), bn = (e) => {
    if (!d(e))
      return !1;
    const { width: t, height: a } = L(e), { offsetWidth: i, offsetHeight: o } = e;
    return Math.round(t) !== i || Math.round(a) !== o;
  }, ra = (e, t, a) => {
    const i = d(t), o = L(e, i && bn(t)), r = { x: 0, y: 0 };
    if (i) {
      const s = L(t, !0);
      r.x = s.x + t.clientLeft, r.y = s.y + t.clientTop;
    }
    return { x: o.left + a.x - r.x, y: o.top + a.y - r.y, width: o.width, height: o.height };
  };
  let En = 0, hn = 0;
  const O = /* @__PURE__ */ new Map(), fn = (e, t) => {
    let a = t ? En : hn;
    if (t) {
      const i = fn(e), o = O.get(i) || /* @__PURE__ */ new Map();
      O.has(i) || O.set(i, o), U(o) && !o.has(t) ? (o.set(t, a), En += 1) : a = o.get(t);
    } else {
      const i = e.id || e;
      O.has(i) ? a = O.get(i) : (O.set(i, a), hn += 1);
    }
    return a;
  }, sa = (e) => {
    var t;
    return e ? X(e) ? e.defaultView : l(e) ? (t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView : e : window;
  }, yn = (e) => Array.isArray(e) || !1, da = (e) => l(e) && e.nodeName === "CANVAS" || !1, wn = (e) => d(e) && !!e.shadowRoot || !1, ma = (e) => l(e) && [1, 2, 3, 4, 5, 6, 7, 8].some((t) => e.nodeType === t) || !1, ga = (e) => {
    if (!l(e))
      return !1;
    const { top: t, bottom: a } = L(e), { clientHeight: i } = B(e);
    return t <= i && a >= 0;
  }, va = (e) => {
    if (!l(e))
      return !1;
    const { clientWidth: t, clientHeight: a } = B(e), { top: i, left: o, bottom: r, right: s } = L(e, !0);
    return i >= 0 && o >= 0 && r <= a && s <= t;
  }, ba = (e) => yn(e) && e.every(d) || !1, Ea = (e) => typeof e == "function" || !1, ha = (e) => f(e) && e.constructor.name === "HTMLCollection" || !1, fa = (e) => d(e) && e.tagName === "IMG" || !1, ya = (e) => {
    if (!z(e))
      return !1;
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }, wa = (e) => f(e) && e.constructor.name === "WeakMap" || !1, Aa = (e) => l(e) && ["SVG", "Image", "Video", "Canvas"].some((t) => e.constructor.name.includes(t)) || !1, Sa = (e) => f(e) && e.constructor.name === "NodeList" || !1, ka = (e) => B(e).dir === "rtl", Na = (e) => l(e) && e.constructor.name.includes("SVG") || !1, Ma = (e) => l(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, An = (e, t) => e ? e.closest(t) || An(e.getRootNode().host, t) : null, La = (e, t) => d(e) ? e : (l(t) ? t : b()).querySelector(e), Sn = (e, t) => (l(t) ? t : b()).getElementsByTagName(e), Oa = (e) => [...Sn("*", e)].filter(wn), Ta = (e, t) => b(t).getElementById(e) || null, Ca = (e, t) => (l(t) ? t : b()).querySelectorAll(e), Da = (e, t) => (t && l(t) ? t : b()).getElementsByClassName(e), Ia = (e, t) => e.matches(t), za = "2.0.0alpha12";
  n.ArrayFrom = Ut, n.DOMContentLoadedEvent = G, n.DOMMouseScrollEvent = ie, n.Data = W, n.Float32ArrayFrom = Jt, n.Float64ArrayFrom = Kt, n.ObjectAssign = H, n.ObjectEntries = P, n.ObjectHasOwn = Yt, n.ObjectKeys = _t, n.ObjectValues = pt, n.Timer = aa, n.abortEvent = x, n.addClass = Ft, n.addEventListener = st, n.animationDelay = Xe, n.animationDuration = Ze, n.animationEndEvent = V, n.animationName = $, n.ariaChecked = m, n.ariaDescribedBy = k, n.ariaDescription = g, n.ariaExpanded = E, n.ariaHasPopup = h, n.ariaHidden = N, n.ariaLabel = M, n.ariaLabelledBy = R, n.ariaModal = Mn, n.ariaPressed = Ln, n.ariaSelected = On, n.ariaValueMax = Cn, n.ariaValueMin = Tn, n.ariaValueNow = Dn, n.ariaValueText = In, n.beforeunloadEvent = ee, n.bezierEasings = mt, n.blurEvent = ne, n.changeEvent = te, n.closest = An, n.contextmenuEvent = ae, n.createCustomEvent = xt, n.createElement = cn, n.createElementNS = un, n.dispatchEvent = Y, n.distinct = qt, n.documentBody = jt, n.documentElement = Wt, n.documentHead = D, n.dragEvent = Hn, n.dragendEvent = Vn, n.dragenterEvent = Bn, n.dragleaveEvent = Fn, n.dragoverEvent = Rn, n.dragstartEvent = Pn, n.emulateAnimationEnd = Gt, n.emulateTransitionEnd = $t, n.errorEvent = oe, n.focus = Zt, n.focusEvent = ce, n.focusEvents = Gn, n.focusinEvent = ue, n.focusoutEvent = le, n.gesturechangeEvent = re, n.gestureendEvent = se, n.gesturestartEvent = de, n.getAttribute = on, n.getAttributeNS = Ct, n.getBoundingClientRect = L, n.getCustomElements = Oa, n.getDocument = b, n.getDocumentBody = oa, n.getDocumentElement = B, n.getDocumentHead = ca, n.getElementAnimationDelay = ln, n.getElementAnimationDuration = rn, n.getElementById = Ta, n.getElementStyle = y, n.getElementTransitionDelay = sn, n.getElementTransitionDuration = dn, n.getElementsByClassName = Da, n.getElementsByTagName = Sn, n.getInstance = Qt, n.getNodeScroll = ua, n.getParentNode = la, n.getRectRelativeToOffsetParent = ra, n.getUID = fn, n.getWindow = sa, n.hasAttribute = Dt, n.hasAttributeNS = It, n.hasClass = Vt, n.isApple = At, n.isArray = yn, n.isCanvas = da, n.isCustomElement = wn, n.isDocument = X, n.isElement = ma, n.isElementInScrollRange = ga, n.isElementInViewport = va, n.isElementsArray = ba, n.isFirefox = St, n.isFunction = Ea, n.isHTMLCollection = ha, n.isHTMLElement = d, n.isHTMLImageElement = fa, n.isJSON = ya, n.isMap = U, n.isMedia = Aa, n.isMobile = wt, n.isNode = l, n.isNodeList = Sa, n.isNumber = gn, n.isObject = f, n.isRTL = ka, n.isSVGElement = Na, n.isScaledElement = bn, n.isShadowRoot = vn, n.isString = z, n.isTableElement = Ma, n.isWeakMap = wa, n.isWindow = Z, n.keyAlt = Jn, n.keyArrowDown = Kn, n.keyArrowLeft = Xn, n.keyArrowRight = Yn, n.keyArrowUp = Zn, n.keyBackspace = _n, n.keyCapsLock = pn, n.keyControl = xn, n.keyDelete = et, n.keyEnter = nt, n.keyEscape = tt, n.keyInsert = at, n.keyMeta = it, n.keyPause = ot, n.keyScrollLock = ct, n.keyShift = ut, n.keySpace = lt, n.keyTab = rt, n.keyboardEventKeys = $n, n.keydownEvent = me, n.keypressEvent = ge, n.keyupEvent = ve, n.loadEvent = be, n.loadstartEvent = jn, n.matches = Ia, n.mouseClickEvents = Un, n.mouseHoverEvents = Qn, n.mouseSwipeEvents = Wn, n.mouseclickEvent = Ee, n.mousedblclickEvent = he, n.mousedownEvent = fe, n.mouseenterEvent = Ae, n.mousehoverEvent = we, n.mouseinEvent = ke, n.mouseleaveEvent = Se, n.mousemoveEvent = Le, n.mouseoutEvent = Ne, n.mouseoverEvent = Me, n.mouseupEvent = ye, n.mousewheelEvent = Oe, n.moveEvent = Te, n.nativeEvents = zn, n.noop = an, n.normalizeOptions = Xt, n.normalizeValue = _, n.off = nn, n.offsetHeight = gt, n.offsetWidth = vt, n.on = en, n.one = tn, n.orientationchangeEvent = Ce, n.passiveHandler = ea, n.pointercancelEvent = De, n.pointerdownEvent = Ie, n.pointerleaveEvent = ze, n.pointermoveEvent = He, n.pointerupEvent = Pe, n.querySelector = La, n.querySelectorAll = Ca, n.readystatechangeEvent = Be, n.reflow = na, n.removeAttribute = Pt, n.removeAttributeNS = Bt, n.removeClass = Rt, n.removeEventListener = dt, n.resetEvent = Fe, n.resizeEvent = Re, n.scrollEvent = Ue, n.scrollHeight = bt, n.scrollWidth = Et, n.selectEvent = Ve, n.selectendEvent = je, n.selectstartEvent = We, n.setAttribute = zt, n.setAttributeNS = Ht, n.setElementStyle = ta, n.submitEvent = Qe, n.support3DTransform = kt, n.supportAnimation = Ot, n.supportPassive = Nt, n.supportTouch = Lt, n.supportTransform = Mt, n.supportTransition = Tt, n.tabindex = ht, n.toLowerCase = mn, n.toUpperCase = ia, n.touchEvents = qn, n.touchcancelEvent = $e, n.touchendEvent = Je, n.touchmoveEvent = Ge, n.touchstartEvent = qe, n.transitionDelay = _e, n.transitionDuration = Ye, n.transitionEndEvent = j, n.transitionProperty = J, n.unloadEvent = Ke, n.userAgent = C, n.userAgentData = T, n.version = za;
})(u);
const F = "data-src", Pa = (n) => u.isHTMLElement(n) && n.tagName === "VIDEO", q = (n) => u.isHTMLElement(n) && n.tagName === "SOURCE", kn = (n) => u.isHTMLElement(n) && n.tagName === "IMG", p = (n, m) => {
  const g = q(n), k = g ? u.loadstartEvent : u.loadEvent, E = g ? u.createElement("VIDEO") : null, h = u.createElement(g ? "SOURCE" : "IMG"), N = g ? E : h, M = u.getAttribute(n, F);
  if (!N || !M)
    return;
  const R = () => {
    kn(n) || q(n) ? (n.src = M, q(n) && Pa(n.parentElement) && n.parentElement.load()) : u.setElementStyle(n, { backgroundImage: `url("${M}")` }), u.removeAttribute(n, F), u.isFunction(m) && m(), u.off(N, k, R);
  };
  u.on(N, k, R), (kn(h) || q(h)) && (h.src = M, E && E.append(h));
}, Nn = (n) => {
  const m = u.querySelectorAll(`[${F}]`, n), g = n && u.getAttribute(n, F);
  return g && !m ? [n] : !g && m ? [...m] : g && m ? [n, ...m] : !g && !m ? [...u.querySelectorAll(`[${F}]`)] : null;
}, Ba = "1.0.5", Fa = (n, m) => {
  const g = u.querySelector(n);
  if (!g)
    return;
  const k = u.isFunction(m) ? m : null, E = Nn(g);
  E && E.length && E.forEach((h, N) => {
    N === E.length - 1 && k ? p(h, k) : p(h);
  });
};
u.ObjectAssign(Fa, { version: Ba, getMediaElements: Nn, loadMedia: p });
export {
  Fa as default
};
//# sourceMappingURL=dll.mjs.map
