var c = {};
(function(n) {
  Object.defineProperty(n, Symbol.toStringTag, { value: "Module" });
  const d = "aria-checked", m = "aria-description", k = "aria-describedby", E = "aria-expanded", h = "aria-haspopup", N = "aria-hidden", M = "aria-label", R = "aria-labelledby", On = "aria-modal", Cn = "aria-pressed", Tn = "aria-selected", Dn = "aria-valuemin", In = "aria-valuemax", zn = "aria-valuenow", Hn = "aria-valuetext", x = "abort", ee = "beforeunload", ne = "blur", te = "change", ae = "contextmenu", G = "DOMContentLoaded", ie = "DOMMouseScroll", oe = "error", ce = "focus", ue = "focusin", le = "focusout", re = "gesturechange", se = "gestureend", de = "gesturestart", me = "keydown", ge = "keypress", ve = "keyup", be = "load", Ee = "click", he = "dblclick", fe = "mousedown", ye = "mouseup", we = "hover", Ae = "mouseenter", Se = "mouseleave", ke = "mousein", Ne = "mouseout", Me = "mouseover", Le = "mousemove", Oe = "mousewheel", Ce = "move", Te = "orientationchange", De = "pointercancel", Ie = "pointerdown", ze = "pointerleave", He = "pointermove", Pe = "pointerup", Be = "readystatechange", Fe = "reset", Re = "resize", Ve = "select", je = "selectend", We = "selectstart", Ue = "scroll", Qe = "submit", qe = "touchstart", Ge = "touchmove", $e = "touchcancel", Je = "touchend", Ke = "unload", Pn = { DOMContentLoaded: G, DOMMouseScroll: ie, abort: x, beforeunload: ee, blur: ne, change: te, click: Ee, contextmenu: ae, dblclick: he, error: oe, focus: ce, focusin: ue, focusout: le, gesturechange: re, gestureend: se, gesturestart: de, hover: we, keydown: me, keypress: ge, keyup: ve, load: be, mousedown: fe, mousemove: Le, mousein: ke, mouseout: Ne, mouseenter: Ae, mouseleave: Se, mouseover: Me, mouseup: ye, mousewheel: Oe, move: Ce, orientationchange: Te, pointercancel: De, pointerdown: Ie, pointerleave: ze, pointermove: He, pointerup: Pe, readystatechange: Be, reset: Fe, resize: Re, scroll: Ue, select: Ve, selectend: je, selectstart: We, submit: Qe, touchcancel: $e, touchend: Je, touchmove: Ge, touchstart: qe, unload: Ke }, Bn = "drag", Fn = "dragstart", Rn = "dragenter", Vn = "dragleave", jn = "dragover", Wn = "dragend", Un = "loadstart", Qn = { start: "mousedown", end: "mouseup", move: "mousemove", cancel: "mouseleave" }, qn = { down: "mousedown", up: "mouseup" }, Gn = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], $n = { start: "touchstart", end: "touchend", move: "touchmove", cancel: "touchcancel" }, Jn = { in: "focusin", out: "focusout" }, Kn = { Backspace: "Backspace", Tab: "Tab", Enter: "Enter", Shift: "Shift", Control: "Control", Alt: "Alt", Pause: "Pause", CapsLock: "CapsLock", Escape: "Escape", Scape: "Space", ArrowLeft: "ArrowLeft", ArrowUp: "ArrowUp", ArrowRight: "ArrowRight", ArrowDown: "ArrowDown", Insert: "Insert", Delete: "Delete", Meta: "Meta", ContextMenu: "ContextMenu", ScrollLock: "ScrollLock" }, Zn = "Alt", Xn = "ArrowDown", Yn = "ArrowUp", _n = "ArrowLeft", pn = "ArrowRight", xn = "Backspace", et = "CapsLock", nt = "Control", tt = "Delete", at = "Enter", it = "Escape", ot = "Insert", ct = "Meta", ut = "Pause", lt = "ScrollLock", rt = "Shift", st = "Space", dt = "Tab", Ze = "animationDuration", Xe = "animationDelay", $ = "animationName", V = "animationend", Ye = "transitionDuration", _e = "transitionDelay", j = "transitionend", J = "transitionProperty", mt = "addEventListener", gt = "removeEventListener", vt = { linear: "linear", easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)", easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)", easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)", easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)", easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)", easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)", easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)", easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)", easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)", easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)", easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)", easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)", easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)", easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)", easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)", easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)", easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)", easingExponentialInOut: "cubic-bezier(1,0,0,1)", easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)", easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)", easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)", easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)", easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)", easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)" }, bt = "offsetHeight", Et = "offsetWidth", ht = "scrollHeight", ft = "scrollWidth", yt = "tabindex", wt = navigator.userAgentData, T = wt, { userAgent: At } = navigator, D = At, pe = /iPhone|iPad|iPod|Android/i;
  let K = !1;
  T ? K = T.brands.some((e) => pe.test(e.brand)) : K = pe.test(D);
  const St = K, xe = /(iPhone|iPod|iPad)/, kt = T ? T.brands.some((e) => xe.test(e.brand)) : xe.test(D), Nt = D ? D.includes("Firefox") : !1, { head: I } = document, Mt = ["webkitPerspective", "perspective"].some((e) => e in I.style), en = (e, t, a, i) => {
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
  }, Lt = (() => {
    let e = !1;
    try {
      const t = Object.defineProperty({}, "passive", { get: () => (e = !0, e) });
      tn(document, G, an, t);
    } catch {
    }
    return e;
  })(), Ot = ["webkitTransform", "transform"].some((e) => e in I.style), Ct = "ontouchstart" in window || "msMaxTouchPoints" in navigator, Tt = ["webkitAnimation", "animation"].some((e) => e in I.style), Dt = ["webkitTransition", "transition"].some((e) => e in I.style), on = (e, t) => e.getAttribute(t), It = (e, t, a) => t.getAttributeNS(e, a), zt = (e, t) => e.hasAttribute(t), Ht = (e, t, a) => t.hasAttributeNS(e, a), Pt = (e, t, a) => e.setAttribute(t, a), Bt = (e, t, a, i) => t.setAttributeNS(e, a, i), Ft = (e, t) => e.removeAttribute(t), Rt = (e, t, a) => t.removeAttributeNS(e, a), Vt = (e, ...t) => {
    e.classList.add(...t);
  }, jt = (e, ...t) => {
    e.classList.remove(...t);
  }, Wt = (e, t) => e.classList.contains(t), { body: Ut } = document, { documentElement: Qt } = document, qt = (e) => Array.from(e), f = (e) => e != null && typeof e == "object" || !1, l = (e) => f(e) && typeof e.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((t) => e.nodeType === t) || !1, g = (e) => l(e) && e.nodeType === 1 || !1, z = /* @__PURE__ */ new Map(), W = { set: (e, t, a) => {
    g(e) && (z.has(t) || z.set(t, /* @__PURE__ */ new Map()), z.get(t).set(e, a));
  }, getAllFor: (e) => z.get(e) || null, get: (e, t) => {
    if (!g(e) || !t)
      return null;
    const a = W.getAllFor(t);
    return e && a && a.get(e) || null;
  }, remove: (e, t) => {
    const a = W.getAllFor(t);
    !a || !g(e) || (a.delete(e), a.size === 0 && z.delete(t));
  } }, Gt = (e, t) => W.get(e, t), H = (e) => typeof e == "string" || !1, Z = (e) => f(e) && e.constructor.name === "Window" || !1, X = (e) => l(e) && e.nodeType === 9 || !1, b = (e) => Z(e) ? e.document : X(e) ? e : l(e) ? e.ownerDocument : window.document, P = (e, ...t) => Object.assign(e, ...t), cn = (e) => {
    if (!e)
      return;
    if (H(e))
      return b().createElement(e);
    const { tagName: t } = e, a = cn(t);
    if (!a)
      return;
    const i = { ...e };
    return delete i.tagName, P(a, i);
  }, un = (e, t) => {
    if (!e || !t)
      return;
    if (H(t))
      return b().createElementNS(e, t);
    const { tagName: a } = t, i = un(e, a);
    if (!i)
      return;
    const o = { ...t };
    return delete o.tagName, P(i, o);
  }, Y = (e, t) => e.dispatchEvent(t), $t = (e, t, a) => a.indexOf(e) === t, y = (e, t) => {
    const a = getComputedStyle(e), i = t.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
    return a.getPropertyValue(i);
  }, ln = (e) => {
    const t = y(e, $), a = y(e, Xe), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, rn = (e) => {
    const t = y(e, $), a = y(e, Ze), i = a.includes("ms") ? 1 : 1e3, o = t && t !== "none" ? parseFloat(a) * i : 0;
    return Number.isNaN(o) ? 0 : o;
  }, Jt = (e, t) => {
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
  }, Kt = (e, t) => {
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
  }, Zt = (e) => Float32Array.from(Array.from(e)), Xt = (e) => Float64Array.from(Array.from(e)), Yt = (e, t) => e.focus(t), _ = (e) => ["true", !0].includes(e) ? !0 : ["false", !1].includes(e) ? !1 : ["null", "", null, void 0].includes(e) ? null : e !== "" && !Number.isNaN(+e) ? +e : e, B = (e) => Object.entries(e), mn = (e) => e.toLowerCase(), _t = (e, t, a, i) => {
    const o = { ...a }, r = { ...e.dataset }, s = { ...t }, v = {}, A = "title";
    return B(r).forEach(([u, S]) => {
      const Q = i && typeof u == "string" && u.includes(i) ? u.replace(i, "").replace(/[A-Z]/g, (Ba) => mn(Ba)) : u;
      v[Q] = _(S);
    }), B(o).forEach(([u, S]) => {
      o[u] = _(S);
    }), B(t).forEach(([u, S]) => {
      u in o ? s[u] = o[u] : u in v ? s[u] = v[u] : s[u] = u === A ? on(e, A) : S;
    }), s;
  }, pt = (e, t) => f(e) && (Object.hasOwn(e, t) || t in e), xt = (e) => Object.keys(e), ea = (e) => Object.values(e), na = (e, t) => {
    const a = new CustomEvent(e, { cancelable: !0, bubbles: !0 });
    return f(t) && P(a, t), a;
  }, ta = { passive: !0 }, aa = (e) => e.offsetHeight, ia = (e, t) => {
    B(t).forEach(([a, i]) => {
      if (i && H(a) && a.includes("--"))
        e.style.setProperty(a, i);
      else {
        const o = {};
        o[a] = i, P(e.style, o);
      }
    });
  }, U = (e) => f(e) && e.constructor.name === "Map" || !1, gn = (e) => typeof e == "number" || !1, w = /* @__PURE__ */ new Map(), oa = { set: (e, t, a, i) => {
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
  } }, ca = (e) => e.toUpperCase(), L = (e, t) => {
    const { width: a, height: i, top: o, right: r, bottom: s, left: v } = e.getBoundingClientRect();
    let A = 1, u = 1;
    if (t && g(e)) {
      const { offsetWidth: S, offsetHeight: Q } = e;
      A = S > 0 ? Math.round(a) / S : 1, u = Q > 0 ? Math.round(i) / Q : 1;
    }
    return { width: a / A, height: i / u, top: o / u, right: r / A, bottom: s / u, left: v / A, x: v / A, y: o / u };
  }, ua = (e) => b(e).body, F = (e) => b(e).documentElement, la = (e) => b(e).head, ra = (e) => {
    const t = Z(e), a = t ? e.scrollX : e.scrollLeft, i = t ? e.scrollY : e.scrollTop;
    return { x: a, y: i };
  }, vn = (e) => l(e) && e.constructor.name === "ShadowRoot" || !1, sa = (e) => e.nodeName === "HTML" ? e : g(e) && e.assignedSlot || l(e) && e.parentNode || vn(e) && e.host || F(e), bn = (e) => {
    if (!g(e))
      return !1;
    const { width: t, height: a } = L(e), { offsetWidth: i, offsetHeight: o } = e;
    return Math.round(t) !== i || Math.round(a) !== o;
  }, da = (e, t, a) => {
    const i = g(t), o = L(e, i && bn(t)), r = { x: 0, y: 0 };
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
  }, ma = (e) => e ? X(e) ? e.defaultView : l(e) ? e?.ownerDocument?.defaultView : e : window, yn = (e) => Array.isArray(e) || !1, ga = (e) => l(e) && e.nodeName === "CANVAS" || !1, wn = (e) => g(e) && !!e.shadowRoot || !1, va = (e) => l(e) && [1, 2, 3, 4, 5, 6, 7, 8].some((t) => e.nodeType === t) || !1, ba = (e) => {
    if (!l(e))
      return !1;
    const { top: t, bottom: a } = L(e), { clientHeight: i } = F(e);
    return t <= i && a >= 0;
  }, Ea = (e) => {
    if (!l(e))
      return !1;
    const { clientWidth: t, clientHeight: a } = F(e), { top: i, left: o, bottom: r, right: s } = L(e, !0);
    return i >= 0 && o >= 0 && r <= a && s <= t;
  }, ha = (e) => yn(e) && e.every(g) || !1, fa = (e) => typeof e == "function" || !1, ya = (e) => f(e) && e.constructor.name === "HTMLCollection" || !1, wa = (e) => g(e) && e.tagName === "IMG" || !1, Aa = (e) => {
    if (!H(e))
      return !1;
    try {
      JSON.parse(e);
    } catch {
      return !1;
    }
    return !0;
  }, Sa = (e) => f(e) && e.constructor.name === "WeakMap" || !1, ka = (e) => l(e) && ["SVG", "Image", "Video", "Canvas"].some((t) => e.constructor.name.includes(t)) || !1, Na = (e) => f(e) && e.constructor.name === "NodeList" || !1, Ma = (e) => F(e).dir === "rtl", La = (e) => l(e) && e.constructor.name.includes("SVG") || !1, Oa = (e) => l(e) && ["TABLE", "TD", "TH"].includes(e.nodeName) || !1, An = (e, t) => e ? e.closest(t) || An(e.getRootNode().host, t) : null, Ca = (e, t) => g(e) ? e : (l(t) ? t : b()).querySelector(e), Sn = (e, t) => (l(t) ? t : b()).getElementsByTagName(e), Ta = (e) => [...Sn("*", e)].filter(wn), Da = (e, t) => b(t).getElementById(e) || null, Ia = (e, t) => (l(t) ? t : b()).querySelectorAll(e), za = (e, t) => (t && l(t) ? t : b()).getElementsByClassName(e), Ha = (e, t) => e.matches(t), Pa = "2.0.0alpha12";
  n.ArrayFrom = qt, n.DOMContentLoadedEvent = G, n.DOMMouseScrollEvent = ie, n.Data = W, n.Float32ArrayFrom = Zt, n.Float64ArrayFrom = Xt, n.ObjectAssign = P, n.ObjectEntries = B, n.ObjectHasOwn = pt, n.ObjectKeys = xt, n.ObjectValues = ea, n.Timer = oa, n.abortEvent = x, n.addClass = Vt, n.addEventListener = mt, n.animationDelay = Xe, n.animationDuration = Ze, n.animationEndEvent = V, n.animationName = $, n.ariaChecked = d, n.ariaDescribedBy = k, n.ariaDescription = m, n.ariaExpanded = E, n.ariaHasPopup = h, n.ariaHidden = N, n.ariaLabel = M, n.ariaLabelledBy = R, n.ariaModal = On, n.ariaPressed = Cn, n.ariaSelected = Tn, n.ariaValueMax = In, n.ariaValueMin = Dn, n.ariaValueNow = zn, n.ariaValueText = Hn, n.beforeunloadEvent = ee, n.bezierEasings = vt, n.blurEvent = ne, n.changeEvent = te, n.closest = An, n.contextmenuEvent = ae, n.createCustomEvent = na, n.createElement = cn, n.createElementNS = un, n.dispatchEvent = Y, n.distinct = $t, n.documentBody = Ut, n.documentElement = Qt, n.documentHead = I, n.dragEvent = Bn, n.dragendEvent = Wn, n.dragenterEvent = Rn, n.dragleaveEvent = Vn, n.dragoverEvent = jn, n.dragstartEvent = Fn, n.emulateAnimationEnd = Jt, n.emulateTransitionEnd = Kt, n.errorEvent = oe, n.focus = Yt, n.focusEvent = ce, n.focusEvents = Jn, n.focusinEvent = ue, n.focusoutEvent = le, n.gesturechangeEvent = re, n.gestureendEvent = se, n.gesturestartEvent = de, n.getAttribute = on, n.getAttributeNS = It, n.getBoundingClientRect = L, n.getCustomElements = Ta, n.getDocument = b, n.getDocumentBody = ua, n.getDocumentElement = F, n.getDocumentHead = la, n.getElementAnimationDelay = ln, n.getElementAnimationDuration = rn, n.getElementById = Da, n.getElementStyle = y, n.getElementTransitionDelay = sn, n.getElementTransitionDuration = dn, n.getElementsByClassName = za, n.getElementsByTagName = Sn, n.getInstance = Gt, n.getNodeScroll = ra, n.getParentNode = sa, n.getRectRelativeToOffsetParent = da, n.getUID = fn, n.getWindow = ma, n.hasAttribute = zt, n.hasAttributeNS = Ht, n.hasClass = Wt, n.isApple = kt, n.isArray = yn, n.isCanvas = ga, n.isCustomElement = wn, n.isDocument = X, n.isElement = va, n.isElementInScrollRange = ba, n.isElementInViewport = Ea, n.isElementsArray = ha, n.isFirefox = Nt, n.isFunction = fa, n.isHTMLCollection = ya, n.isHTMLElement = g, n.isHTMLImageElement = wa, n.isJSON = Aa, n.isMap = U, n.isMedia = ka, n.isMobile = St, n.isNode = l, n.isNodeList = Na, n.isNumber = gn, n.isObject = f, n.isRTL = Ma, n.isSVGElement = La, n.isScaledElement = bn, n.isShadowRoot = vn, n.isString = H, n.isTableElement = Oa, n.isWeakMap = Sa, n.isWindow = Z, n.keyAlt = Zn, n.keyArrowDown = Xn, n.keyArrowLeft = _n, n.keyArrowRight = pn, n.keyArrowUp = Yn, n.keyBackspace = xn, n.keyCapsLock = et, n.keyControl = nt, n.keyDelete = tt, n.keyEnter = at, n.keyEscape = it, n.keyInsert = ot, n.keyMeta = ct, n.keyPause = ut, n.keyScrollLock = lt, n.keyShift = rt, n.keySpace = st, n.keyTab = dt, n.keyboardEventKeys = Kn, n.keydownEvent = me, n.keypressEvent = ge, n.keyupEvent = ve, n.loadEvent = be, n.loadstartEvent = Un, n.matches = Ha, n.mouseClickEvents = qn, n.mouseHoverEvents = Gn, n.mouseSwipeEvents = Qn, n.mouseclickEvent = Ee, n.mousedblclickEvent = he, n.mousedownEvent = fe, n.mouseenterEvent = Ae, n.mousehoverEvent = we, n.mouseinEvent = ke, n.mouseleaveEvent = Se, n.mousemoveEvent = Le, n.mouseoutEvent = Ne, n.mouseoverEvent = Me, n.mouseupEvent = ye, n.mousewheelEvent = Oe, n.moveEvent = Ce, n.nativeEvents = Pn, n.noop = an, n.normalizeOptions = _t, n.normalizeValue = _, n.off = nn, n.offsetHeight = bt, n.offsetWidth = Et, n.on = en, n.one = tn, n.orientationchangeEvent = Te, n.passiveHandler = ta, n.pointercancelEvent = De, n.pointerdownEvent = Ie, n.pointerleaveEvent = ze, n.pointermoveEvent = He, n.pointerupEvent = Pe, n.querySelector = Ca, n.querySelectorAll = Ia, n.readystatechangeEvent = Be, n.reflow = aa, n.removeAttribute = Ft, n.removeAttributeNS = Rt, n.removeClass = jt, n.removeEventListener = gt, n.resetEvent = Fe, n.resizeEvent = Re, n.scrollEvent = Ue, n.scrollHeight = ht, n.scrollWidth = ft, n.selectEvent = Ve, n.selectendEvent = je, n.selectstartEvent = We, n.setAttribute = Pt, n.setAttributeNS = Bt, n.setElementStyle = ia, n.submitEvent = Qe, n.support3DTransform = Mt, n.supportAnimation = Tt, n.supportPassive = Lt, n.supportTouch = Ct, n.supportTransform = Ot, n.supportTransition = Dt, n.tabindex = yt, n.toLowerCase = mn, n.toUpperCase = ca, n.touchEvents = $n, n.touchcancelEvent = $e, n.touchendEvent = Je, n.touchmoveEvent = Ge, n.touchstartEvent = qe, n.transitionDelay = _e, n.transitionDuration = Ye, n.transitionEndEvent = j, n.transitionProperty = J, n.unloadEvent = Ke, n.userAgent = D, n.userAgentData = T, n.version = Pa;
})(c);
const Fa = "1.0.0", C = "data-src", Ra = (n) => c.isHTMLElement(n) && n.tagName === "VIDEO", q = (n) => c.isHTMLElement(n) && n.tagName === "SOURCE", kn = (n) => c.isHTMLElement(n) && n.tagName === "IMG", p = (n, d) => {
  const m = q(n), k = m ? c.loadstartEvent : c.loadEvent, E = m ? c.createElement("VIDEO") : null, h = c.createElement(m ? "SOURCE" : "IMG"), N = m ? E : h, M = c.getAttribute(n, C);
  if (!N || !M)
    return;
  const R = () => {
    kn(n) || q(n) ? (n.src = M, q(n) && Ra(n.parentElement) && n.parentElement.load()) : c.setElementStyle(n, { backgroundImage: `url("${M}")` }), c.removeAttribute(n, C), c.isFunction(d) && d(), c.off(N, k, R);
  };
  c.on(N, k, R), (kn(h) || q(h)) && (h.src = M, E && E.append(h));
}, Mn = (n) => {
  const d = c.querySelectorAll(`[${C}]`, n), m = n && c.getAttribute(n, C);
  return m && !d ? [n] : !m && d ? [...d] : m && d ? [n, ...d] : !m && !d ? [...c.querySelectorAll(`[${C}]`)] : null;
}, Ln = (n, d) => {
  const m = c.querySelector(n);
  if (!m)
    return;
  const k = c.isFunction(d) ? d : null, E = Mn(m);
  E && E.length && E.forEach((h, N) => {
    N === E.length - 1 && k ? p(h, k) : p(h);
  });
};
c.ObjectAssign(Ln, { version: Fa, loadMedia: p, getMediaElements: Mn });
const Nn = (n) => {
  const d = c.isNode(n) ? n : document;
  [...c.querySelectorAll(`[${C}]`, d)].forEach((m) => Ln(m));
};
document.body ? Nn() : c.on(document, c.DOMContentLoadedEvent, () => Nn(), { once: !0 });
export {
  Ln as default
};
//# sourceMappingURL=dll.mjs.map
