var DLL=function(){"use strict";var u={};(function(n){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const m="aria-checked",g="aria-description",k="aria-describedby",E="aria-expanded",h="aria-haspopup",N="aria-hidden",L="aria-label",V="aria-labelledby",Tn="aria-modal",Cn="aria-pressed",Dn="aria-selected",In="aria-valuemin",zn="aria-valuemax",Hn="aria-valuenow",Pn="aria-valuetext",te="abort",ae="beforeunload",ie="blur",oe="change",ce="contextmenu",$="DOMContentLoaded",ue="DOMMouseScroll",le="error",re="focus",se="focusin",de="focusout",me="gesturechange",ge="gestureend",ve="gesturestart",be="keydown",Ee="keypress",he="keyup",fe="load",ye="click",we="dblclick",Ae="mousedown",Se="mouseup",ke="hover",Ne="mouseenter",Le="mouseleave",Me="mousein",Oe="mouseout",Te="mouseover",Ce="mousemove",De="mousewheel",Ie="move",ze="orientationchange",He="pointercancel",Pe="pointerdown",Be="pointerleave",Fe="pointermove",Re="pointerup",Ve="readystatechange",je="reset",We="resize",Ue="select",Qe="selectend",qe="selectstart",Ge="scroll",$e="submit",Je="touchstart",Ke="touchmove",Ze="touchcancel",Xe="touchend",Ye="unload",Bn={DOMContentLoaded:$,DOMMouseScroll:ue,abort:te,beforeunload:ae,blur:ie,change:oe,click:ye,contextmenu:ce,dblclick:we,error:le,focus:re,focusin:se,focusout:de,gesturechange:me,gestureend:ge,gesturestart:ve,hover:ke,keydown:be,keypress:Ee,keyup:he,load:fe,mousedown:Ae,mousemove:Ce,mousein:Me,mouseout:Oe,mouseenter:Ne,mouseleave:Le,mouseover:Te,mouseup:Se,mousewheel:De,move:Ie,orientationchange:ze,pointercancel:He,pointerdown:Pe,pointerleave:Be,pointermove:Fe,pointerup:Re,readystatechange:Ve,reset:je,resize:We,scroll:Ge,select:Ue,selectend:Qe,selectstart:qe,submit:$e,touchcancel:Ze,touchend:Xe,touchmove:Ke,touchstart:Je,unload:Ye},Fn="drag",Rn="dragstart",Vn="dragenter",jn="dragleave",Wn="dragover",Un="dragend",Qn="loadstart",qn={start:"mousedown",end:"mouseup",move:"mousemove",cancel:"mouseleave"},Gn={down:"mousedown",up:"mouseup"},$n="onmouseleave"in document?["mouseenter","mouseleave"]:["mouseover","mouseout"],Jn={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},Kn={in:"focusin",out:"focusout"},Zn={Backspace:"Backspace",Tab:"Tab",Enter:"Enter",Shift:"Shift",Control:"Control",Alt:"Alt",Pause:"Pause",CapsLock:"CapsLock",Escape:"Escape",Scape:"Space",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Insert:"Insert",Delete:"Delete",Meta:"Meta",ContextMenu:"ContextMenu",ScrollLock:"ScrollLock"},Xn="Alt",Yn="ArrowDown",_n="ArrowUp",pn="ArrowLeft",xn="ArrowRight",et="Backspace",nt="CapsLock",tt="Control",at="Delete",it="Enter",ot="Escape",ct="Insert",ut="Meta",lt="Pause",rt="ScrollLock",st="Shift",dt="Space",mt="Tab",_e="animationDuration",pe="animationDelay",J="animationName",j="animationend",xe="transitionDuration",en="transitionDelay",W="transitionend",K="transitionProperty",gt="addEventListener",vt="removeEventListener",bt={linear:"linear",easingSinusoidalIn:"cubic-bezier(0.47,0,0.745,0.715)",easingSinusoidalOut:"cubic-bezier(0.39,0.575,0.565,1)",easingSinusoidalInOut:"cubic-bezier(0.445,0.05,0.55,0.95)",easingQuadraticIn:"cubic-bezier(0.550,0.085,0.680,0.530)",easingQuadraticOut:"cubic-bezier(0.250,0.460,0.450,0.940)",easingQuadraticInOut:"cubic-bezier(0.455,0.030,0.515,0.955)",easingCubicIn:"cubic-bezier(0.55,0.055,0.675,0.19)",easingCubicOut:"cubic-bezier(0.215,0.61,0.355,1)",easingCubicInOut:"cubic-bezier(0.645,0.045,0.355,1)",easingQuarticIn:"cubic-bezier(0.895,0.03,0.685,0.22)",easingQuarticOut:"cubic-bezier(0.165,0.84,0.44,1)",easingQuarticInOut:"cubic-bezier(0.77,0,0.175,1)",easingQuinticIn:"cubic-bezier(0.755,0.05,0.855,0.06)",easingQuinticOut:"cubic-bezier(0.23,1,0.32,1)",easingQuinticInOut:"cubic-bezier(0.86,0,0.07,1)",easingExponentialIn:"cubic-bezier(0.95,0.05,0.795,0.035)",easingExponentialOut:"cubic-bezier(0.19,1,0.22,1)",easingExponentialInOut:"cubic-bezier(1,0,0,1)",easingCircularIn:"cubic-bezier(0.6,0.04,0.98,0.335)",easingCircularOut:"cubic-bezier(0.075,0.82,0.165,1)",easingCircularInOut:"cubic-bezier(0.785,0.135,0.15,0.86)",easingBackIn:"cubic-bezier(0.6,-0.28,0.735,0.045)",easingBackOut:"cubic-bezier(0.175,0.885,0.32,1.275)",easingBackInOut:"cubic-bezier(0.68,-0.55,0.265,1.55)"},Et="offsetHeight",ht="offsetWidth",ft="scrollHeight",yt="scrollWidth",wt="tabindex",At=navigator.userAgentData,C=At,{userAgent:St}=navigator,D=St,nn=/iPhone|iPad|iPod|Android/i;let Z=!1;C?Z=C.brands.some(e=>nn.test(e.brand)):Z=nn.test(D);const kt=Z,tn=/(iPhone|iPod|iPad)/,Nt=C?C.brands.some(e=>tn.test(e.brand)):tn.test(D),Lt=D?D.includes("Firefox"):!1,{head:I}=document,Mt=["webkitPerspective","perspective"].some(e=>e in I.style),an=(e,t,a,i)=>{const o=i||!1;e.addEventListener(t,a,o)},on=(e,t,a,i)=>{const o=i||!1;e.removeEventListener(t,a,o)},cn=(e,t,a,i)=>{const o=r=>{(r.target===e||r.currentTarget===e)&&(a.apply(e,[r]),on(e,t,o,i))};an(e,t,o,i)},un=()=>{},Ot=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,e)});cn(document,$,un,t)}catch{}return e})(),Tt=["webkitTransform","transform"].some(e=>e in I.style),Ct="ontouchstart"in window||"msMaxTouchPoints"in navigator,Dt=["webkitAnimation","animation"].some(e=>e in I.style),It=["webkitTransition","transition"].some(e=>e in I.style),ln=(e,t)=>e.getAttribute(t),zt=(e,t,a)=>t.getAttributeNS(e,a),Ht=(e,t)=>e.hasAttribute(t),Pt=(e,t,a)=>t.hasAttributeNS(e,a),Bt=(e,t,a)=>e.setAttribute(t,a),Ft=(e,t,a,i)=>t.setAttributeNS(e,a,i),Rt=(e,t)=>e.removeAttribute(t),Vt=(e,t,a)=>t.removeAttributeNS(e,a),jt=(e,...t)=>{e.classList.add(...t)},Wt=(e,...t)=>{e.classList.remove(...t)},Ut=(e,t)=>e.classList.contains(t),{body:Qt}=document,{documentElement:qt}=document,Gt=e=>Array.from(e),f=e=>e!=null&&typeof e=="object"||!1,l=e=>f(e)&&typeof e.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(t=>e.nodeType===t)||!1,d=e=>l(e)&&e.nodeType===1||!1,z=new Map,U={set:(e,t,a)=>{d(e)&&(z.has(t)||z.set(t,new Map),z.get(t).set(e,a))},getAllFor:e=>z.get(e)||null,get:(e,t)=>{if(!d(e)||!t)return null;const a=U.getAllFor(t);return e&&a&&a.get(e)||null},remove:(e,t)=>{const a=U.getAllFor(t);!a||!d(e)||(a.delete(e),a.size===0&&z.delete(t))}},$t=(e,t)=>U.get(e,t),H=e=>typeof e=="string"||!1,X=e=>f(e)&&e.constructor.name==="Window"||!1,Y=e=>l(e)&&e.nodeType===9||!1,b=e=>X(e)?e.document:Y(e)?e:l(e)?e.ownerDocument:window.document,P=(e,...t)=>Object.assign(e,...t),rn=e=>{if(!e)return;if(H(e))return b().createElement(e);const{tagName:t}=e,a=rn(t);if(!a)return;const i={...e};return delete i.tagName,P(a,i)},sn=(e,t)=>{if(!e||!t)return;if(H(t))return b().createElementNS(e,t);const{tagName:a}=t,i=sn(e,a);if(!i)return;const o={...t};return delete o.tagName,P(i,o)},_=(e,t)=>e.dispatchEvent(t),Jt=(e,t,a)=>a.indexOf(e)===t,y=(e,t)=>{const a=getComputedStyle(e),i=t.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return a.getPropertyValue(i)},dn=e=>{const t=y(e,J),a=y(e,pe),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},mn=e=>{const t=y(e,J),a=y(e,_e),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},Kt=(e,t)=>{let a=0;const i=new Event(j),o=mn(e),r=dn(e);if(o){const s=v=>{v.target===e&&(t.apply(e,[v]),e.removeEventListener(j,s),a=1)};e.addEventListener(j,s),setTimeout(()=>{a||_(e,i)},o+r+17)}else t.apply(e,[i])},gn=e=>{const t=y(e,K),a=y(e,en),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},vn=e=>{const t=y(e,K),a=y(e,xe),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},Zt=(e,t)=>{let a=0;const i=new Event(W),o=vn(e),r=gn(e);if(o){const s=v=>{v.target===e&&(t.apply(e,[v]),e.removeEventListener(W,s),a=1)};e.addEventListener(W,s),setTimeout(()=>{a||_(e,i)},o+r+17)}else t.apply(e,[i])},Xt=e=>Float32Array.from(Array.from(e)),Yt=e=>Float64Array.from(Array.from(e)),_t=(e,t)=>e.focus(t),p=e=>["true",!0].includes(e)?!0:["false",!1].includes(e)?!1:["null","",null,void 0].includes(e)?null:e!==""&&!Number.isNaN(+e)?+e:e,B=e=>Object.entries(e),bn=e=>e.toLowerCase(),pt=(e,t,a,i)=>{const o={...a},r={...e.dataset},s={...t},v={},A="title";return B(r).forEach(([c,S])=>{const q=i&&typeof c=="string"&&c.includes(i)?c.replace(i,"").replace(/[A-Z]/g,Fa=>bn(Fa)):c;v[q]=p(S)}),B(o).forEach(([c,S])=>{o[c]=p(S)}),B(t).forEach(([c,S])=>{c in o?s[c]=o[c]:c in v?s[c]=v[c]:s[c]=c===A?ln(e,A):S}),s},xt=(e,t)=>f(e)&&(Object.hasOwn(e,t)||t in e),ea=e=>Object.keys(e),na=e=>Object.values(e),ta=(e,t)=>{const a=new CustomEvent(e,{cancelable:!0,bubbles:!0});return f(t)&&P(a,t),a},aa={passive:!0},ia=e=>e.offsetHeight,oa=(e,t)=>{B(t).forEach(([a,i])=>{if(i&&H(a)&&a.includes("--"))e.style.setProperty(a,i);else{const o={};o[a]=i,P(e.style,o)}})},Q=e=>f(e)&&e.constructor.name==="Map"||!1,En=e=>typeof e=="number"||!1,w=new Map,ca={set:(e,t,a,i)=>{d(e)&&(i&&i.length?(w.has(e)||w.set(e,new Map),w.get(e).set(i,setTimeout(t,a))):w.set(e,setTimeout(t,a)))},get:(e,t)=>{if(!d(e))return null;const a=w.get(e);return t&&a&&Q(a)?a.get(t)||null:En(a)?a:null},clear:(e,t)=>{if(!d(e))return;const a=w.get(e);t&&t.length&&Q(a)?(clearTimeout(a.get(t)),a.delete(t),a.size===0&&w.delete(e)):(clearTimeout(a),w.delete(e))}},ua=e=>e.toUpperCase(),M=(e,t)=>{const{width:a,height:i,top:o,right:r,bottom:s,left:v}=e.getBoundingClientRect();let A=1,c=1;if(t&&d(e)){const{offsetWidth:S,offsetHeight:q}=e;A=S>0?Math.round(a)/S:1,c=q>0?Math.round(i)/q:1}return{width:a/A,height:i/c,top:o/c,right:r/A,bottom:s/c,left:v/A,x:v/A,y:o/c}},la=e=>b(e).body,F=e=>b(e).documentElement,ra=e=>b(e).head,sa=e=>{const t=X(e),a=t?e.scrollX:e.scrollLeft,i=t?e.scrollY:e.scrollTop;return{x:a,y:i}},hn=e=>l(e)&&e.constructor.name==="ShadowRoot"||!1,da=e=>e.nodeName==="HTML"?e:d(e)&&e.assignedSlot||l(e)&&e.parentNode||hn(e)&&e.host||F(e),fn=e=>{if(!d(e))return!1;const{width:t,height:a}=M(e),{offsetWidth:i,offsetHeight:o}=e;return Math.round(t)!==i||Math.round(a)!==o},ma=(e,t,a)=>{const i=d(t),o=M(e,i&&fn(t)),r={x:0,y:0};if(i){const s=M(t,!0);r.x=s.x+t.clientLeft,r.y=s.y+t.clientTop}return{x:o.left+a.x-r.x,y:o.top+a.y-r.y,width:o.width,height:o.height}};let yn=0,wn=0;const O=new Map,An=(e,t)=>{let a=t?yn:wn;if(t){const i=An(e),o=O.get(i)||new Map;O.has(i)||O.set(i,o),Q(o)&&!o.has(t)?(o.set(t,a),yn+=1):a=o.get(t)}else{const i=e.id||e;O.has(i)?a=O.get(i):(O.set(i,a),wn+=1)}return a},ga=e=>e?Y(e)?e.defaultView:l(e)?e?.ownerDocument?.defaultView:e:window,Sn=e=>Array.isArray(e)||!1,va=e=>l(e)&&e.nodeName==="CANVAS"||!1,kn=e=>d(e)&&!!e.shadowRoot||!1,ba=e=>l(e)&&[1,2,3,4,5,6,7,8].some(t=>e.nodeType===t)||!1,Ea=e=>{if(!l(e))return!1;const{top:t,bottom:a}=M(e),{clientHeight:i}=F(e);return t<=i&&a>=0},ha=e=>{if(!l(e))return!1;const{clientWidth:t,clientHeight:a}=F(e),{top:i,left:o,bottom:r,right:s}=M(e,!0);return i>=0&&o>=0&&r<=a&&s<=t},fa=e=>Sn(e)&&e.every(d)||!1,ya=e=>typeof e=="function"||!1,wa=e=>f(e)&&e.constructor.name==="HTMLCollection"||!1,Aa=e=>d(e)&&e.tagName==="IMG"||!1,Sa=e=>{if(!H(e))return!1;try{JSON.parse(e)}catch{return!1}return!0},ka=e=>f(e)&&e.constructor.name==="WeakMap"||!1,Na=e=>l(e)&&["SVG","Image","Video","Canvas"].some(t=>e.constructor.name.includes(t))||!1,La=e=>f(e)&&e.constructor.name==="NodeList"||!1,Ma=e=>F(e).dir==="rtl",Oa=e=>l(e)&&e.constructor.name.includes("SVG")||!1,Ta=e=>l(e)&&["TABLE","TD","TH"].includes(e.nodeName)||!1,Nn=(e,t)=>e?e.closest(t)||Nn(e.getRootNode().host,t):null,Ca=(e,t)=>d(e)?e:(l(t)?t:b()).querySelector(e),Ln=(e,t)=>(l(t)?t:b()).getElementsByTagName(e),Da=e=>[...Ln("*",e)].filter(kn),Ia=(e,t)=>b(t).getElementById(e)||null,za=(e,t)=>(l(t)?t:b()).querySelectorAll(e),Ha=(e,t)=>(t&&l(t)?t:b()).getElementsByClassName(e),Pa=(e,t)=>e.matches(t),Ba="2.0.0alpha12";n.ArrayFrom=Gt,n.DOMContentLoadedEvent=$,n.DOMMouseScrollEvent=ue,n.Data=U,n.Float32ArrayFrom=Xt,n.Float64ArrayFrom=Yt,n.ObjectAssign=P,n.ObjectEntries=B,n.ObjectHasOwn=xt,n.ObjectKeys=ea,n.ObjectValues=na,n.Timer=ca,n.abortEvent=te,n.addClass=jt,n.addEventListener=gt,n.animationDelay=pe,n.animationDuration=_e,n.animationEndEvent=j,n.animationName=J,n.ariaChecked=m,n.ariaDescribedBy=k,n.ariaDescription=g,n.ariaExpanded=E,n.ariaHasPopup=h,n.ariaHidden=N,n.ariaLabel=L,n.ariaLabelledBy=V,n.ariaModal=Tn,n.ariaPressed=Cn,n.ariaSelected=Dn,n.ariaValueMax=zn,n.ariaValueMin=In,n.ariaValueNow=Hn,n.ariaValueText=Pn,n.beforeunloadEvent=ae,n.bezierEasings=bt,n.blurEvent=ie,n.changeEvent=oe,n.closest=Nn,n.contextmenuEvent=ce,n.createCustomEvent=ta,n.createElement=rn,n.createElementNS=sn,n.dispatchEvent=_,n.distinct=Jt,n.documentBody=Qt,n.documentElement=qt,n.documentHead=I,n.dragEvent=Fn,n.dragendEvent=Un,n.dragenterEvent=Vn,n.dragleaveEvent=jn,n.dragoverEvent=Wn,n.dragstartEvent=Rn,n.emulateAnimationEnd=Kt,n.emulateTransitionEnd=Zt,n.errorEvent=le,n.focus=_t,n.focusEvent=re,n.focusEvents=Kn,n.focusinEvent=se,n.focusoutEvent=de,n.gesturechangeEvent=me,n.gestureendEvent=ge,n.gesturestartEvent=ve,n.getAttribute=ln,n.getAttributeNS=zt,n.getBoundingClientRect=M,n.getCustomElements=Da,n.getDocument=b,n.getDocumentBody=la,n.getDocumentElement=F,n.getDocumentHead=ra,n.getElementAnimationDelay=dn,n.getElementAnimationDuration=mn,n.getElementById=Ia,n.getElementStyle=y,n.getElementTransitionDelay=gn,n.getElementTransitionDuration=vn,n.getElementsByClassName=Ha,n.getElementsByTagName=Ln,n.getInstance=$t,n.getNodeScroll=sa,n.getParentNode=da,n.getRectRelativeToOffsetParent=ma,n.getUID=An,n.getWindow=ga,n.hasAttribute=Ht,n.hasAttributeNS=Pt,n.hasClass=Ut,n.isApple=Nt,n.isArray=Sn,n.isCanvas=va,n.isCustomElement=kn,n.isDocument=Y,n.isElement=ba,n.isElementInScrollRange=Ea,n.isElementInViewport=ha,n.isElementsArray=fa,n.isFirefox=Lt,n.isFunction=ya,n.isHTMLCollection=wa,n.isHTMLElement=d,n.isHTMLImageElement=Aa,n.isJSON=Sa,n.isMap=Q,n.isMedia=Na,n.isMobile=kt,n.isNode=l,n.isNodeList=La,n.isNumber=En,n.isObject=f,n.isRTL=Ma,n.isSVGElement=Oa,n.isScaledElement=fn,n.isShadowRoot=hn,n.isString=H,n.isTableElement=Ta,n.isWeakMap=ka,n.isWindow=X,n.keyAlt=Xn,n.keyArrowDown=Yn,n.keyArrowLeft=pn,n.keyArrowRight=xn,n.keyArrowUp=_n,n.keyBackspace=et,n.keyCapsLock=nt,n.keyControl=tt,n.keyDelete=at,n.keyEnter=it,n.keyEscape=ot,n.keyInsert=ct,n.keyMeta=ut,n.keyPause=lt,n.keyScrollLock=rt,n.keyShift=st,n.keySpace=dt,n.keyTab=mt,n.keyboardEventKeys=Zn,n.keydownEvent=be,n.keypressEvent=Ee,n.keyupEvent=he,n.loadEvent=fe,n.loadstartEvent=Qn,n.matches=Pa,n.mouseClickEvents=Gn,n.mouseHoverEvents=$n,n.mouseSwipeEvents=qn,n.mouseclickEvent=ye,n.mousedblclickEvent=we,n.mousedownEvent=Ae,n.mouseenterEvent=Ne,n.mousehoverEvent=ke,n.mouseinEvent=Me,n.mouseleaveEvent=Le,n.mousemoveEvent=Ce,n.mouseoutEvent=Oe,n.mouseoverEvent=Te,n.mouseupEvent=Se,n.mousewheelEvent=De,n.moveEvent=Ie,n.nativeEvents=Bn,n.noop=un,n.normalizeOptions=pt,n.normalizeValue=p,n.off=on,n.offsetHeight=Et,n.offsetWidth=ht,n.on=an,n.one=cn,n.orientationchangeEvent=ze,n.passiveHandler=aa,n.pointercancelEvent=He,n.pointerdownEvent=Pe,n.pointerleaveEvent=Be,n.pointermoveEvent=Fe,n.pointerupEvent=Re,n.querySelector=Ca,n.querySelectorAll=za,n.readystatechangeEvent=Ve,n.reflow=ia,n.removeAttribute=Rt,n.removeAttributeNS=Vt,n.removeClass=Wt,n.removeEventListener=vt,n.resetEvent=je,n.resizeEvent=We,n.scrollEvent=Ge,n.scrollHeight=ft,n.scrollWidth=yt,n.selectEvent=Ue,n.selectendEvent=Qe,n.selectstartEvent=qe,n.setAttribute=Bt,n.setAttributeNS=Ft,n.setElementStyle=oa,n.submitEvent=$e,n.support3DTransform=Mt,n.supportAnimation=Dt,n.supportPassive=Ot,n.supportTouch=Ct,n.supportTransform=Tt,n.supportTransition=It,n.tabindex=wt,n.toLowerCase=bn,n.toUpperCase=ua,n.touchEvents=Jn,n.touchcancelEvent=Ze,n.touchendEvent=Xe,n.touchmoveEvent=Ke,n.touchstartEvent=Je,n.transitionDelay=en,n.transitionDuration=xe,n.transitionEndEvent=W,n.transitionProperty=K,n.unloadEvent=Ye,n.userAgent=D,n.userAgentData=C,n.version=Ba})(u);const T="data-src",Mn=n=>u.isHTMLElement(n)&&n.tagName==="VIDEO",R=n=>u.isHTMLElement(n)&&n.tagName==="SOURCE",x=n=>u.isHTMLElement(n)&&n.tagName==="IMG",G=(n,m)=>{const g=R(n),k=g?u.loadstartEvent:u.loadEvent,E=g?u.createElement("VIDEO"):null,h=u.createElement(g?"SOURCE":"IMG"),N=g?E:h,L=u.getAttribute(n,T);if(!N||!L)return;const V=()=>{x(n)||R(n)?(n.src=L,R(n)&&Mn(n.parentElement)&&n.parentElement.load()):u.setElementStyle(n,{backgroundImage:`url("${L}")`}),u.removeAttribute(n,T),u.isFunction(m)&&m(),u.off(N,k,V)};u.on(N,k,V),(x(h)||R(h))&&(h.src=L,E&&E.append(h))},ee=n=>{const m=u.querySelectorAll(`[${T}]`,n),g=n&&u.getAttribute(n,T);return g&&!m?[n]:!g&&m?[...m]:g&&m?[n,...m]:!g&&!m?[...u.querySelectorAll(`[${T}]`)]:null},On="1.0.4",ne=(n,m)=>{const g=u.querySelector(n);if(!g)return;const k=u.isFunction(m)?m:null,E=ee(g);E&&E.length&&E.forEach((h,N)=>{N===E.length-1&&k?G(h,k):G(h)})};return u.ObjectAssign(ne,{version:On,getMediaElements:ee,loadMedia:G}),ne}();
//# sourceMappingURL=dll.js.map
