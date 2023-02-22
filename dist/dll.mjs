var u = {};
(function(n) {
  Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
  const m = "aria-checked", g = "aria-description", k = "aria-describedby", E = "aria-expanded", h = "aria-haspopup", N = "aria-hidden", M = "aria-label", R = "aria-labelledby", Nn = "aria-modal", Mn = "aria-pressed", Ln = "aria-selected", Tn = "aria-valuemin", On = "aria-valuemax", Cn = "aria-valuenow", Dn = "aria-valuetext", p = "abort", x = "beforeunload", ee = "blur", ne = "change", te = "contextmenu", G = "DOMContentLoaded", ae = "DOMMouseScroll", ie = "error", oe = "focus", ce = "focusin", ue = "focusout", le = "gesturechange", re = "gestureend", se = "gesturestart", de = "keydown", me = "keypress", ge = "keyup", ve = "load", be = "click", Ee = "dblclick", he = "mousedown", fe = "mouseup", ye = "hover", we = "mouseenter", Ae = "mouseleave", Se = "mousein", ke = "mouseout", Ne = "mouseover", Me = "mousemove", Le = "mousewheel", Te = "move", Oe = "orientationchange", Ce = "pointercancel", De = "pointerdown", Ie = "pointerleave", ze = "pointermove", He = "pointerup", Pe = "readystatechange", Be = "reset", Fe = "resize", Re = "select", Ve = "selectend", je = "selectstart", We = "scroll", Ue = "submit", Qe = "touchstart", qe = "touchmove", Ge = "touchcancel", $e = "touchend", Je = "unload", In = { DOMContentLoaded: G, DOMMouseScroll: ae, abort: p, beforeunload: x, blur: ee, change: ne, click: be, contextmenu: te, dblclick: Ee, error: ie, focus: oe, focusin: ce, focusout: ue, gesturechange: le, gestureend: re, gesturestart: se, hover: ye, keydown: de, keypress: me, keyup: ge, load: ve, mousedown: he, mousemove: Me, mousein: Se, mouseout: ke, mouseenter: we, mouseleave: Ae, mouseover: Ne, mouseup: fe, mousewheel: Le, move: Te, orientationchange: Oe, pointercancel: Ce, pointerdown: De, pointerleave: Ie, pointermove: ze, pointerup: He, readystatechange: Pe, reset: Be, resize: Fe, scroll: We, select: Re, selectend: Ve, selectstart: je, submit: Ue, touchcancel: Ge, touchend: $e, touchmove: qe, touchstart: Qe, unload: Je }, zn = "drag", Hn = "dragstart", Pn = "dragenter", Bn = "dragleave", Fn = "dragover", Rn = "dragend", Vn = "loadstart", jn = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" }, Wn = { down: "mousedown", up: "mouseup" }, Un = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], Qn = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" }, qn = { in: "focusin", out: "focusout" }, Gn = { Backspace: "Backspace", Tab: "Tab", Enter: "Enter", Shift: "Shift", Control: "Control", Alt: "Alt", Pause: "Pause", CapsLock: "CapsLock", Escape: "Escape", Scape: "Space", ArrowLeft: "ArrowLeft", ArrowUp: "ArrowUp", ArrowRight: "ArrowRight", ArrowDown: "ArrowDown", Insert: "Insert", Delete: "Delete", Meta: "Meta", ContextMenu: "ContextMenu", ScrollLock: "ScrollLock" }, $n = "Alt", Jn = "ArrowDown", Kn = "ArrowUp", Zn = "ArrowLeft", Xn = "ArrowRight", Yn = "Backspace", _n = "CapsLock", pn = "Control", xn = "Delete", et = "Enter", nt = "Escape", tt = "Insert", at = "Meta", it = "Pause", ot = "ScrollLock", ct = "Shift", ut = "Space", lt = "Tab", Ke = "animationDuration", Ze = "animationDelay", $ = "animationName", V = "animationend", Xe = "transitionDuration", Ye = "transitionDelay", j = "transitionend", J = "transitionProperty", rt = "addEventListener", st = "removeEventListener", dt = { linear: "linear", easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)", easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)", easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)", easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)", easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)", easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)", easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)", easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)", easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)", easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)", easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)", easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)", easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)", easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)", easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)", easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)", easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)", easingExponentialInOut: "cubic-bezier(1,0,0,1)", easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)", easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)", easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)", easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)", easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)", easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)" }, mt = "offsetHeight", gt = "offsetWidth", vt = "scrollHeight", bt = "scrollWidth", Et = "tabindex", ht = navigator.userAgentData, O = ht, { userAgent: ft } = navigator, C = ft, _e = /iPhone|iPad|iPod|Android/i;
  let K = !1;
  O ? K = O.brands.some((e) => _e.test(e.brand)) : K = _e.test(C);
  const yt = K, pe = /(iPhone|iPod|iPad)/, wt = O ? O.brands.some((e) => pe.test(e.brand)) : pe.test(C), At = C ? C.includes("Firefox") : !1, { head: D } = document, St = ["webkitPerspective", "perspective"].some((e) => e in D.style), xe = (e, t, a, i) => {
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
  }, kt = (() => {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", { get: () => (e = !0, e) });
      nn(document, G, tn, t);
    } catch {
    }
    return e;
  })(), Nt = ["webkitTransform", "transform"].some((e) => e in D.style), Mt = "ontouchstart" in window || "msMaxTouchPoints" in navigator, Lt = ["webkitAnimation", "animation"].some((e) => e in D.style), Tt = ["webkitTransition", "transition"].some((e) => e in D.style), an = (e, t) => e.getAttribute(t), Ot = (e, t, a) => t.getAttributeNS(e, a), Ct = (e, t) => e.hasAttribute(t), Dt = (e, t, a) => t.hasAttributeNS(e, a), It = (e, t, a) => e.setAttribute(t, a), zt = (e, t, a, i) => t.setAttributeNS(e, a, i), Ht = (e, t) => e.removeAttribute(t), Pt = (e, t, a) => t.removeAttributeNS(e, a), Bt = (e, ...t) => {
    e.classList.add(...t);
  }, Ft = (e, ...t) => {
    e.classList.remove(...t);
  }, Rt = (e, t) => e.classList.contains(t), { body: Vt } = document, { documentElement: jt } = document, Wt = (e) => Array.from(e), f = (e) => e != null && typeof e == "object" || !1, l = (e) => f(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, d = (e) => l(e) && e.nodeType === 1 || !1, I = /* @__PURE__ */ new Map(), W = { set: (e, t, a) => {
    d(e) && (I.has(t) || I.set(t, /* @__PURE__ */ new Map()), I.get(t).set(e, a));
  }, getAllFor: (e) => I.get(e) || null, get: (e, t) => {
    if (!d(e) || !t)
      return null;
    const a = W.getAllFor(t);
    return e && a && a.get(e) || null;
  }, remove: (e, t) => {
    const a = W.getAllFor(t);
    !a || !d(e) || (a.delete(e), a.size === 0 && I.delete(t));
  } }, Ut = (e, t) => W.get(e, t), z = (e) => typeof e == "string" || !1, Z = (e) => f(e) && e.constructor.name === "Window" || !1, X = (e) => l(e) && e.nodeType === 9 || !1, b = (e) => Z(e) ? e.document : X(e) ? e : l(e) ? e.ownerDocument : window.document, H = (e, ...t) => Object.assign(e, ...t), on = (e) => {
    if (!e)
      return;
    if (z(e))
      return b().createElement(e);
    const { tagName: t } = e, a = on(t);
    if (!a)
      return;
    const i = { ...e };
    return delete i.tagName, H(a, i);
  }, cn = (e, t) => {
    if (!e || !t)
      return;
    if (z(t))
      return b().createElementNS(e, t);
    const { tagName: a } = t, i = cn(e, a);
    if (!i)
      return;
    const o = { ...t };
    return delete o.tagName, H(i, o);
  }, Y = (e, t) => e.dispatchEvent(t), Qt = (e, t, a) => a.indexOf(e) === t, y = (e, t) => {
    const a = getComputedStyle(e), i = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
    return a.getPropertyValue(i);
  }, un = (e) => {
    const t = y(e, $), a = y(e, Ze), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, ln = (e) => {
    const t = y(e, $), a = y(e, Ke), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, qt = (e, t) => {
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
  }, Gt = (e, t) => {
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
  }, $t = (e) => Float32Array.from(Array.from(e)), Jt = (e) => Float64Array.from(Array.from(e)), Kt = (e, t) => e.focus(t), _ = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, P = (e) => Object.entries(e), dn = (e) => e.toLowerCase(), Zt = (e, t, a, i) => {
    const o = { ...a }, r = { ...e.dataset }, s = { ...t }, v = {}, A = "title";
    return P(r).forEach(([c, S]) => {
      const Q = i && typeof c == "string" && c.includes(i) ? c.replace(i, "").replace(/[A-Z]/g, (za) => dn(za)) : c;
      v[Q] = _(S);
    }), P(o).forEach(([c, S]) => {
      o[c] = _(S);
    }), P(t).forEach(([c, S]) => {
      c in o ? s[c] = o[c] : c in v ? s[c] = v[c] : s[c] = c === A ? an(e, A) : S;
    }), s;
  }, Xt = (e, t) => f(e) && (Object.hasOwn(e, t) || t in e), Yt = (e) => Object.keys(e), _t = (e) => Object.values(e), pt = (e, t) => {
    const a = new CustomEvent(e, { cancelable: !0, bubbles: !0 });
    return f(t) && H(a, t), a;
  }, xt = { passive: !0 }, ea = (e) => e.offsetHeight, na = (e, t) => {
    P(t).forEach(([a, i]) => {
      if (i && z(a) && a.includes("--"))
        e.style.setProperty(a, i);
      else {
        const o = {};
        o[a] = i, H(e.style, o);
      }
    });
  }, U = (e) => f(e) && e.constructor.name === "Map" || !1, mn = (e) => typeof e == "number" || !1, w = /* @__PURE__ */ new Map(), ta = { set: (e, t, a, i) => {
    d(e) && (i && i.length ? (w.has(e) || w.set(e, /* @__PURE__ */ new Map()), w.get(e).set(i, setTimeout(t, a))) : w.set(e, setTimeout(t, a)));
  }, get: (e, t) => {
    if (!d(e))
      return null;
    const a = w.get(e);
    return t && a && U(a) ? a.get(t) || null : mn(a) ? a : null;
  }, clear: (e, t) => {
    if (!d(e))
      return;
    const a = w.get(e);
    t && t.length && U(a) ? (clearTimeout(a.get(t)), a.delete(t), a.size === 0 && w.delete(e)) : (clearTimeout(a), w.delete(e));
  } }, aa = (e) => e.toUpperCase(), L = (e, t) => {
    const { width: a, height: i, top: o, right: r, bottom: s, left: v } = e.getBoundingClientRect();
    let A = 1, c = 1;
    if (t && d(e)) {
      const { offsetWidth: S, offsetHeight: Q } = e;
      A = S > 0 ? Math.round(a) / S : 1, c = Q > 0 ? Math.round(i) / Q : 1;
    }
    return { width: a / A, height: i / c, top: o / c, right: r / A, bottom: s / c, left: v / A, x: v / A, y: o / c };
  }, ia = (e) => b(e).body, B = (e) => b(e).documentElement, oa = (e) => b(e).head, ca = (e) => {
    const t = Z(e), a = t ? e.scrollX : e.scrollLeft, i = t ? e.scrollY : e.scrollTop;
    return { x: a, y: i };
  }, gn = (e) => l(e) && e.constructor.name === "ShadowRoot" || !1, ua = (e) => e.nodeName === "HTML" ? e : d(e) && e.assignedSlot || l(e) && e.parentNode || gn(e) && e.host || B(e), vn = (e) => {
    if (!d(e))
      return !1;
    const { width: t, height: a } = L(e), { offsetWidth: i, offsetHeight: o } = e;
    return Math.round(t) !== i || Math.round(a) !== o;
  }, la = (e, t, a) => {
    const i = d(t), o = L(e, i && vn(t)), r = { x: 0, y: 0 };
    if (i) {
      const s = L(t, !0);
      r.x = s.x + t.clientLeft, r.y = s.y + t.clientTop;
    }
    return { x: o.left + a.x - r.x, y: o.top + a.y - r.y, width: o.width, height: o.height };
  };
  let bn = 0, En = 0;
  const T = /* @__PURE__ */ new Map(), hn = (e, t) => {
    let a = t ? bn : En;
    if (t) {
      const i = hn(e), o = T.get(i) || /* @__PURE__ */ new Map();
      T.has(i) || T.set(i, o), U(o) && !o.has(t) ? (o.set(t, a), bn += 1) : a = o.get(t);
    } else {
      const i = e.id || e;
      T.has(i) ? a = T.get(i) : (T.set(i, a), En += 1);
    }
    return a;
  }, ra = (e) => e ? X(e) ? e.defaultView : l(e) ? e?.ownerDocument?.defaultView : e : window, fn = (e) => Array.isArray(e) || !1, sa = (e) => l(e) && e.nodeName === "CANVAS" || !1, yn = (e) => d(e) && !!e.shadowRoot || !1, da = (e) => l(e) && [1, 2, 3, 4, 5, 6, 7, 8].some((t) => e.nodeType === t) || !1, ma = (e) => {
    if (!l(e))
      return !1;
    const { top: t, bottom: a } = L(e), { clientHeight: i } = B(e);
    return t <= i && a >= 0;
  }, ga = (e) => {
    if (!l(e))
      return !1;
    const { clientWidth: t, clientHeight: a } = B(e), { top: i, left: o, bottom: r, right: s } = L(e, !0);
    return i >= 0 && o >= 0 && r <= a && s <= t;
  }, va = (e) => fn(e) && e.every(d) || !1, ba = (e) => typeof e == "function" || !1, Ea = (e) => f(e) && e.constructor.name === "HTMLCollection" || !1, ha = (e) => d(e) && e.tagName === "IMG" || !1, fa = (e) => {
    if (!z(e))
      return !1;
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }, ya = (e) => f(e) && e.constructor.name === "WeakMap" || !1, wa = (e) => l(e) && ["SVG", "Image", "Video", "Canvas"].some((t) => e.constructor.name.includes(t)) || !1, Aa = (e) => f(e) && e.constructor.name === "NodeList" || !1, Sa = (e) => B(e).dir === "rtl", ka = (e) => l(e) && e.constructor.name.includes("SVG") || !1, Na = (e) => l(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, wn = (e, t) => e ? e.closest(t) || wn(e.getRootNode().host, t) : null, Ma = (e, t) => d(e) ? e : (l(t) ? t : b()).querySelector(e), An = (e, t) => (l(t) ? t : b()).getElementsByTagName(e), La = (e) => [...An("*", e)].filter(yn), Ta = (e, t) => b(t).getElementById(e) || null, Oa = (e, t) => (l(t) ? t : b()).querySelectorAll(e), Ca = (e, t) => (t && l(t) ? t : b()).getElementsByClassName(e), Da = (e, t) => e.matches(t), Ia = "2.0.0alpha12";
  n.ArrayFrom = Wt, n.DOMContentLoadedEvent = G, n.DOMMouseScrollEvent = ae, n.Data = W, n.Float32ArrayFrom = $t, n.Float64ArrayFrom = Jt, n.ObjectAssign = H, n.ObjectEntries = P, n.ObjectHasOwn = Xt, n.ObjectKeys = Yt, n.ObjectValues = _t, n.Timer = ta, n.abortEvent = p, n.addClass = Bt, n.addEventListener = rt, n.animationDelay = Ze, n.animationDuration = Ke, n.animationEndEvent = V, n.animationName = $, n.ariaChecked = m, n.ariaDescribedBy = k, n.ariaDescription = g, n.ariaExpanded = E, n.ariaHasPopup = h, n.ariaHidden = N, n.ariaLabel = M, n.ariaLabelledBy = R, n.ariaModal = Nn, n.ariaPressed = Mn, n.ariaSelected = Ln, n.ariaValueMax = On, n.ariaValueMin = Tn, n.ariaValueNow = Cn, n.ariaValueText = Dn, n.beforeunloadEvent = x, n.bezierEasings = dt, n.blurEvent = ee, n.changeEvent = ne, n.closest = wn, n.contextmenuEvent = te, n.createCustomEvent = pt, n.createElement = on, n.createElementNS = cn, n.dispatchEvent = Y, n.distinct = Qt, n.documentBody = Vt, n.documentElement = jt, n.documentHead = D, n.dragEvent = zn, n.dragendEvent = Rn, n.dragenterEvent = Pn, n.dragleaveEvent = Bn, n.dragoverEvent = Fn, n.dragstartEvent = Hn, n.emulateAnimationEnd = qt, n.emulateTransitionEnd = Gt, n.errorEvent = ie, n.focus = Kt, n.focusEvent = oe, n.focusEvents = qn, n.focusinEvent = ce, n.focusoutEvent = ue, n.gesturechangeEvent = le, n.gestureendEvent = re, n.gesturestartEvent = se, n.getAttribute = an, n.getAttributeNS = Ot, n.getBoundingClientRect = L, n.getCustomElements = La, n.getDocument = b, n.getDocumentBody = ia, n.getDocumentElement = B, n.getDocumentHead = oa, n.getElementAnimationDelay = un, n.getElementAnimationDuration = ln, n.getElementById = Ta, n.getElementStyle = y, n.getElementTransitionDelay = rn, n.getElementTransitionDuration = sn, n.getElementsByClassName = Ca, n.getElementsByTagName = An, n.getInstance = Ut, n.getNodeScroll = ca, n.getParentNode = ua, n.getRectRelativeToOffsetParent = la, n.getUID = hn, n.getWindow = ra, n.hasAttribute = Ct, n.hasAttributeNS = Dt, n.hasClass = Rt, n.isApple = wt, n.isArray = fn, n.isCanvas = sa, n.isCustomElement = yn, n.isDocument = X, n.isElement = da, n.isElementInScrollRange = ma, n.isElementInViewport = ga, n.isElementsArray = va, n.isFirefox = At, n.isFunction = ba, n.isHTMLCollection = Ea, n.isHTMLElement = d, n.isHTMLImageElement = ha, n.isJSON = fa, n.isMap = U, n.isMedia = wa, n.isMobile = yt, n.isNode = l, n.isNodeList = Aa, n.isNumber = mn, n.isObject = f, n.isRTL = Sa, n.isSVGElement = ka, n.isScaledElement = vn, n.isShadowRoot = gn, n.isString = z, n.isTableElement = Na, n.isWeakMap = ya, n.isWindow = Z, n.keyAlt = $n, n.keyArrowDown = Jn, n.keyArrowLeft = Zn, n.keyArrowRight = Xn, n.keyArrowUp = Kn, n.keyBackspace = Yn, n.keyCapsLock = _n, n.keyControl = pn, n.keyDelete = xn, n.keyEnter = et, n.keyEscape = nt, n.keyInsert = tt, n.keyMeta = at, n.keyPause = it, n.keyScrollLock = ot, n.keyShift = ct, n.keySpace = ut, n.keyTab = lt, n.keyboardEventKeys = Gn, n.keydownEvent = de, n.keypressEvent = me, n.keyupEvent = ge, n.loadEvent = ve, n.loadstartEvent = Vn, n.matches = Da, n.mouseClickEvents = Wn, n.mouseHoverEvents = Un, n.mouseSwipeEvents = jn, n.mouseclickEvent = be, n.mousedblclickEvent = Ee, n.mousedownEvent = he, n.mouseenterEvent = we, n.mousehoverEvent = ye, n.mouseinEvent = Se, n.mouseleaveEvent = Ae, n.mousemoveEvent = Me, n.mouseoutEvent = ke, n.mouseoverEvent = Ne, n.mouseupEvent = fe, n.mousewheelEvent = Le, n.moveEvent = Te, n.nativeEvents = In, n.noop = tn, n.normalizeOptions = Zt, n.normalizeValue = _, n.off = en, n.offsetHeight = mt, n.offsetWidth = gt, n.on = xe, n.one = nn, n.orientationchangeEvent = Oe, n.passiveHandler = xt, n.pointercancelEvent = Ce, n.pointerdownEvent = De, n.pointerleaveEvent = Ie, n.pointermoveEvent = ze, n.pointerupEvent = He, n.querySelector = Ma, n.querySelectorAll = Oa, n.readystatechangeEvent = Pe, n.reflow = ea, n.removeAttribute = Ht, n.removeAttributeNS = Pt, n.removeClass = Ft, n.removeEventListener = st, n.resetEvent = Be, n.resizeEvent = Fe, n.scrollEvent = We, n.scrollHeight = vt, n.scrollWidth = bt, n.selectEvent = Re, n.selectendEvent = Ve, n.selectstartEvent = je, n.setAttribute = It, n.setAttributeNS = zt, n.setElementStyle = na, n.submitEvent = Ue, n.support3DTransform = St, n.supportAnimation = Lt, n.supportPassive = kt, n.supportTouch = Mt, n.supportTransform = Nt, n.supportTransition = Tt, n.tabindex = Et, n.toLowerCase = dn, n.toUpperCase = aa, n.touchEvents = Qn, n.touchcancelEvent = Ge, n.touchendEvent = $e, n.touchmoveEvent = qe, n.touchstartEvent = Qe, n.transitionDelay = Ye, n.transitionDuration = Xe, n.transitionEndEvent = j, n.transitionProperty = J, n.unloadEvent = Je, n.userAgent = C, n.userAgentData = O, n.version = Ia;
})(u);
const F = "data-src", Ha = (n) => u.isHTMLElement(n) && n.tagName === "VIDEO", q = (n) => u.isHTMLElement(n) && n.tagName === "SOURCE", Sn = (n) => u.isHTMLElement(n) && n.tagName === "IMG", kn = (n, m) => {
  const g = q(n), k = g ? u.loadstartEvent : u.loadEvent, E = g ? u.createElement("VIDEO") : null, h = u.createElement(g ? "SOURCE" : "IMG"), N = g ? E : h, M = u.getAttribute(n, F);
  if (!N || !M)
    return;
  const R = () => {
    Sn(n) || q(n) ? (n.src = M, q(n) && Ha(n.parentElement) && n.parentElement.load()) : u.setElementStyle(n, { backgroundImage: `url("${M}")` }), u.removeAttribute(n, F), u.isFunction(m) && m(), u.off(N, k, R);
  };
  u.on(N, k, R), (Sn(h) || q(h)) && (h.src = M, E && E.append(h));
}, Pa = (n) => {
  const m = u.querySelectorAll(`[${F}]`, n), g = n && u.getAttribute(n, F);
  return g && !m ? [n] : !g && m ? [...m] : g && m ? [n, ...m] : !g && !m ? [...u.querySelectorAll(`[${F}]`)] : null;
}, Ba = (n, m) => {
  const g = u.querySelector(n);
  if (!g)
    return;
  const k = u.isFunction(m) ? m : null, E = Pa(g);
  E && E.length && E.forEach((h, N) => {
    N === E.length - 1 && k ? kn(h, k) : kn(h);
  });
};
export {
  Ba as default
};
//# sourceMappingURL=dll.mjs.map
