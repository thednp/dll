"use strict";var u={};(function(n){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const m="aria-checked",g="aria-description",k="aria-describedby",E="aria-expanded",h="aria-haspopup",N="aria-hidden",M="aria-label",R="aria-labelledby",Ln="aria-modal",On="aria-pressed",Tn="aria-selected",Cn="aria-valuemin",Dn="aria-valuemax",In="aria-valuenow",zn="aria-valuetext",x="abort",ee="beforeunload",ne="blur",te="change",ae="contextmenu",G="DOMContentLoaded",ie="DOMMouseScroll",oe="error",ce="focus",ue="focusin",le="focusout",re="gesturechange",se="gestureend",de="gesturestart",me="keydown",ge="keypress",ve="keyup",be="load",Ee="click",he="dblclick",fe="mousedown",ye="mouseup",we="hover",Ae="mouseenter",Se="mouseleave",ke="mousein",Ne="mouseout",Me="mouseover",Le="mousemove",Oe="mousewheel",Te="move",Ce="orientationchange",De="pointercancel",Ie="pointerdown",ze="pointerleave",He="pointermove",Pe="pointerup",Be="readystatechange",Fe="reset",Re="resize",Ve="select",je="selectend",We="selectstart",Ue="scroll",Qe="submit",qe="touchstart",Ge="touchmove",$e="touchcancel",Je="touchend",Ke="unload",Hn={DOMContentLoaded:G,DOMMouseScroll:ie,abort:x,beforeunload:ee,blur:ne,change:te,click:Ee,contextmenu:ae,dblclick:he,error:oe,focus:ce,focusin:ue,focusout:le,gesturechange:re,gestureend:se,gesturestart:de,hover:we,keydown:me,keypress:ge,keyup:ve,load:be,mousedown:fe,mousemove:Le,mousein:ke,mouseout:Ne,mouseenter:Ae,mouseleave:Se,mouseover:Me,mouseup:ye,mousewheel:Oe,move:Te,orientationchange:Ce,pointercancel:De,pointerdown:Ie,pointerleave:ze,pointermove:He,pointerup:Pe,readystatechange:Be,reset:Fe,resize:Re,scroll:Ue,select:Ve,selectend:je,selectstart:We,submit:Qe,touchcancel:$e,touchend:Je,touchmove:Ge,touchstart:qe,unload:Ke},Pn="drag",Bn="dragstart",Fn="dragenter",Rn="dragleave",Vn="dragover",jn="dragend",Wn="loadstart",Un={start:"mousedown",end:"mouseup",move:"mousemove",cancel:"mouseleave"},Qn={down:"mousedown",up:"mouseup"},qn="onmouseleave"in document?["mouseenter","mouseleave"]:["mouseover","mouseout"],Gn={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},$n={in:"focusin",out:"focusout"},Jn={Backspace:"Backspace",Tab:"Tab",Enter:"Enter",Shift:"Shift",Control:"Control",Alt:"Alt",Pause:"Pause",CapsLock:"CapsLock",Escape:"Escape",Scape:"Space",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Insert:"Insert",Delete:"Delete",Meta:"Meta",ContextMenu:"ContextMenu",ScrollLock:"ScrollLock"},Kn="Alt",Zn="ArrowDown",Xn="ArrowUp",Yn="ArrowLeft",_n="ArrowRight",pn="Backspace",xn="CapsLock",et="Control",nt="Delete",tt="Enter",at="Escape",it="Insert",ot="Meta",ct="Pause",ut="ScrollLock",lt="Shift",rt="Space",st="Tab",Ze="animationDuration",Xe="animationDelay",$="animationName",V="animationend",Ye="transitionDuration",_e="transitionDelay",j="transitionend",J="transitionProperty",dt="addEventListener",mt="removeEventListener",gt={linear:"linear",easingSinusoidalIn:"cubic-bezier(0.47,0,0.745,0.715)",easingSinusoidalOut:"cubic-bezier(0.39,0.575,0.565,1)",easingSinusoidalInOut:"cubic-bezier(0.445,0.05,0.55,0.95)",easingQuadraticIn:"cubic-bezier(0.550,0.085,0.680,0.530)",easingQuadraticOut:"cubic-bezier(0.250,0.460,0.450,0.940)",easingQuadraticInOut:"cubic-bezier(0.455,0.030,0.515,0.955)",easingCubicIn:"cubic-bezier(0.55,0.055,0.675,0.19)",easingCubicOut:"cubic-bezier(0.215,0.61,0.355,1)",easingCubicInOut:"cubic-bezier(0.645,0.045,0.355,1)",easingQuarticIn:"cubic-bezier(0.895,0.03,0.685,0.22)",easingQuarticOut:"cubic-bezier(0.165,0.84,0.44,1)",easingQuarticInOut:"cubic-bezier(0.77,0,0.175,1)",easingQuinticIn:"cubic-bezier(0.755,0.05,0.855,0.06)",easingQuinticOut:"cubic-bezier(0.23,1,0.32,1)",easingQuinticInOut:"cubic-bezier(0.86,0,0.07,1)",easingExponentialIn:"cubic-bezier(0.95,0.05,0.795,0.035)",easingExponentialOut:"cubic-bezier(0.19,1,0.22,1)",easingExponentialInOut:"cubic-bezier(1,0,0,1)",easingCircularIn:"cubic-bezier(0.6,0.04,0.98,0.335)",easingCircularOut:"cubic-bezier(0.075,0.82,0.165,1)",easingCircularInOut:"cubic-bezier(0.785,0.135,0.15,0.86)",easingBackIn:"cubic-bezier(0.6,-0.28,0.735,0.045)",easingBackOut:"cubic-bezier(0.175,0.885,0.32,1.275)",easingBackInOut:"cubic-bezier(0.68,-0.55,0.265,1.55)"},vt="offsetHeight",bt="offsetWidth",Et="scrollHeight",ht="scrollWidth",ft="tabindex",yt=navigator.userAgentData,T=yt,{userAgent:wt}=navigator,C=wt,pe=/iPhone|iPad|iPod|Android/i;let K=!1;T?K=T.brands.some(e=>pe.test(e.brand)):K=pe.test(C);const At=K,xe=/(iPhone|iPod|iPad)/,St=T?T.brands.some(e=>xe.test(e.brand)):xe.test(C),kt=C?C.includes("Firefox"):!1,{head:D}=document,Nt=["webkitPerspective","perspective"].some(e=>e in D.style),en=(e,t,a,i)=>{const o=i||!1;e.addEventListener(t,a,o)},nn=(e,t,a,i)=>{const o=i||!1;e.removeEventListener(t,a,o)},tn=(e,t,a,i)=>{const o=r=>{(r.target===e||r.currentTarget===e)&&(a.apply(e,[r]),nn(e,t,o,i))};en(e,t,o,i)},an=()=>{},Mt=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,e)});tn(document,G,an,t)}catch{}return e})(),Lt=["webkitTransform","transform"].some(e=>e in D.style),Ot="ontouchstart"in window||"msMaxTouchPoints"in navigator,Tt=["webkitAnimation","animation"].some(e=>e in D.style),Ct=["webkitTransition","transition"].some(e=>e in D.style),on=(e,t)=>e.getAttribute(t),Dt=(e,t,a)=>t.getAttributeNS(e,a),It=(e,t)=>e.hasAttribute(t),zt=(e,t,a)=>t.hasAttributeNS(e,a),Ht=(e,t,a)=>e.setAttribute(t,a),Pt=(e,t,a,i)=>t.setAttributeNS(e,a,i),Bt=(e,t)=>e.removeAttribute(t),Ft=(e,t,a)=>t.removeAttributeNS(e,a),Rt=(e,...t)=>{e.classList.add(...t)},Vt=(e,...t)=>{e.classList.remove(...t)},jt=(e,t)=>e.classList.contains(t),{body:Wt}=document,{documentElement:Ut}=document,Qt=e=>Array.from(e),f=e=>e!=null&&typeof e=="object"||!1,l=e=>f(e)&&typeof e.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(t=>e.nodeType===t)||!1,d=e=>l(e)&&e.nodeType===1||!1,I=new Map,W={set:(e,t,a)=>{d(e)&&(I.has(t)||I.set(t,new Map),I.get(t).set(e,a))},getAllFor:e=>I.get(e)||null,get:(e,t)=>{if(!d(e)||!t)return null;const a=W.getAllFor(t);return e&&a&&a.get(e)||null},remove:(e,t)=>{const a=W.getAllFor(t);!a||!d(e)||(a.delete(e),a.size===0&&I.delete(t))}},qt=(e,t)=>W.get(e,t),z=e=>typeof e=="string"||!1,Z=e=>f(e)&&e.constructor.name==="Window"||!1,X=e=>l(e)&&e.nodeType===9||!1,b=e=>Z(e)?e.document:X(e)?e:l(e)?e.ownerDocument:window.document,H=(e,...t)=>Object.assign(e,...t),cn=e=>{if(!e)return;if(z(e))return b().createElement(e);const{tagName:t}=e,a=cn(t);if(!a)return;const i={...e};return delete i.tagName,H(a,i)},un=(e,t)=>{if(!e||!t)return;if(z(t))return b().createElementNS(e,t);const{tagName:a}=t,i=un(e,a);if(!i)return;const o={...t};return delete o.tagName,H(i,o)},Y=(e,t)=>e.dispatchEvent(t),Gt=(e,t,a)=>a.indexOf(e)===t,y=(e,t)=>{const a=getComputedStyle(e),i=t.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return a.getPropertyValue(i)},ln=e=>{const t=y(e,$),a=y(e,Xe),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},rn=e=>{const t=y(e,$),a=y(e,Ze),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},$t=(e,t)=>{let a=0;const i=new Event(V),o=rn(e),r=ln(e);if(o){const s=v=>{v.target===e&&(t.apply(e,[v]),e.removeEventListener(V,s),a=1)};e.addEventListener(V,s),setTimeout(()=>{a||Y(e,i)},o+r+17)}else t.apply(e,[i])},sn=e=>{const t=y(e,J),a=y(e,_e),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},dn=e=>{const t=y(e,J),a=y(e,Ye),i=a.includes("ms")?1:1e3,o=t&&t!=="none"?parseFloat(a)*i:0;return Number.isNaN(o)?0:o},Jt=(e,t)=>{let a=0;const i=new Event(j),o=dn(e),r=sn(e);if(o){const s=v=>{v.target===e&&(t.apply(e,[v]),e.removeEventListener(j,s),a=1)};e.addEventListener(j,s),setTimeout(()=>{a||Y(e,i)},o+r+17)}else t.apply(e,[i])},Kt=e=>Float32Array.from(Array.from(e)),Zt=e=>Float64Array.from(Array.from(e)),Xt=(e,t)=>e.focus(t),_=e=>["true",!0].includes(e)?!0:["false",!1].includes(e)?!1:["null","",null,void 0].includes(e)?null:e!==""&&!Number.isNaN(+e)?+e:e,P=e=>Object.entries(e),mn=e=>e.toLowerCase(),Yt=(e,t,a,i)=>{const o={...a},r={...e.dataset},s={...t},v={},A="title";return P(r).forEach(([c,S])=>{const Q=i&&typeof c=="string"&&c.includes(i)?c.replace(i,"").replace(/[A-Z]/g,Pa=>mn(Pa)):c;v[Q]=_(S)}),P(o).forEach(([c,S])=>{o[c]=_(S)}),P(t).forEach(([c,S])=>{c in o?s[c]=o[c]:c in v?s[c]=v[c]:s[c]=c===A?on(e,A):S}),s},_t=(e,t)=>f(e)&&(Object.hasOwn(e,t)||t in e),pt=e=>Object.keys(e),xt=e=>Object.values(e),ea=(e,t)=>{const a=new CustomEvent(e,{cancelable:!0,bubbles:!0});return f(t)&&H(a,t),a},na={passive:!0},ta=e=>e.offsetHeight,aa=(e,t)=>{P(t).forEach(([a,i])=>{if(i&&z(a)&&a.includes("--"))e.style.setProperty(a,i);else{const o={};o[a]=i,H(e.style,o)}})},U=e=>f(e)&&e.constructor.name==="Map"||!1,gn=e=>typeof e=="number"||!1,w=new Map,ia={set:(e,t,a,i)=>{d(e)&&(i&&i.length?(w.has(e)||w.set(e,new Map),w.get(e).set(i,setTimeout(t,a))):w.set(e,setTimeout(t,a)))},get:(e,t)=>{if(!d(e))return null;const a=w.get(e);return t&&a&&U(a)?a.get(t)||null:gn(a)?a:null},clear:(e,t)=>{if(!d(e))return;const a=w.get(e);t&&t.length&&U(a)?(clearTimeout(a.get(t)),a.delete(t),a.size===0&&w.delete(e)):(clearTimeout(a),w.delete(e))}},oa=e=>e.toUpperCase(),L=(e,t)=>{const{width:a,height:i,top:o,right:r,bottom:s,left:v}=e.getBoundingClientRect();let A=1,c=1;if(t&&d(e)){const{offsetWidth:S,offsetHeight:Q}=e;A=S>0?Math.round(a)/S:1,c=Q>0?Math.round(i)/Q:1}return{width:a/A,height:i/c,top:o/c,right:r/A,bottom:s/c,left:v/A,x:v/A,y:o/c}},ca=e=>b(e).body,B=e=>b(e).documentElement,ua=e=>b(e).head,la=e=>{const t=Z(e),a=t?e.scrollX:e.scrollLeft,i=t?e.scrollY:e.scrollTop;return{x:a,y:i}},vn=e=>l(e)&&e.constructor.name==="ShadowRoot"||!1,ra=e=>e.nodeName==="HTML"?e:d(e)&&e.assignedSlot||l(e)&&e.parentNode||vn(e)&&e.host||B(e),bn=e=>{if(!d(e))return!1;const{width:t,height:a}=L(e),{offsetWidth:i,offsetHeight:o}=e;return Math.round(t)!==i||Math.round(a)!==o},sa=(e,t,a)=>{const i=d(t),o=L(e,i&&bn(t)),r={x:0,y:0};if(i){const s=L(t,!0);r.x=s.x+t.clientLeft,r.y=s.y+t.clientTop}return{x:o.left+a.x-r.x,y:o.top+a.y-r.y,width:o.width,height:o.height}};let En=0,hn=0;const O=new Map,fn=(e,t)=>{let a=t?En:hn;if(t){const i=fn(e),o=O.get(i)||new Map;O.has(i)||O.set(i,o),U(o)&&!o.has(t)?(o.set(t,a),En+=1):a=o.get(t)}else{const i=e.id||e;O.has(i)?a=O.get(i):(O.set(i,a),hn+=1)}return a},da=e=>{var t;return e?X(e)?e.defaultView:l(e)?(t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView:e:window},yn=e=>Array.isArray(e)||!1,ma=e=>l(e)&&e.nodeName==="CANVAS"||!1,wn=e=>d(e)&&!!e.shadowRoot||!1,ga=e=>l(e)&&[1,2,3,4,5,6,7,8].some(t=>e.nodeType===t)||!1,va=e=>{if(!l(e))return!1;const{top:t,bottom:a}=L(e),{clientHeight:i}=B(e);return t<=i&&a>=0},ba=e=>{if(!l(e))return!1;const{clientWidth:t,clientHeight:a}=B(e),{top:i,left:o,bottom:r,right:s}=L(e,!0);return i>=0&&o>=0&&r<=a&&s<=t},Ea=e=>yn(e)&&e.every(d)||!1,ha=e=>typeof e=="function"||!1,fa=e=>f(e)&&e.constructor.name==="HTMLCollection"||!1,ya=e=>d(e)&&e.tagName==="IMG"||!1,wa=e=>{if(!z(e))return!1;try{JSON.parse(e)}catch{return!1}return!0},Aa=e=>f(e)&&e.constructor.name==="WeakMap"||!1,Sa=e=>l(e)&&["SVG","Image","Video","Canvas"].some(t=>e.constructor.name.includes(t))||!1,ka=e=>f(e)&&e.constructor.name==="NodeList"||!1,Na=e=>B(e).dir==="rtl",Ma=e=>l(e)&&e.constructor.name.includes("SVG")||!1,La=e=>l(e)&&["TABLE","TD","TH"].includes(e.nodeName)||!1,An=(e,t)=>e?e.closest(t)||An(e.getRootNode().host,t):null,Oa=(e,t)=>d(e)?e:(l(t)?t:b()).querySelector(e),Sn=(e,t)=>(l(t)?t:b()).getElementsByTagName(e),Ta=e=>[...Sn("*",e)].filter(wn),Ca=(e,t)=>b(t).getElementById(e)||null,Da=(e,t)=>(l(t)?t:b()).querySelectorAll(e),Ia=(e,t)=>(t&&l(t)?t:b()).getElementsByClassName(e),za=(e,t)=>e.matches(t),Ha="2.0.0alpha12";n.ArrayFrom=Qt,n.DOMContentLoadedEvent=G,n.DOMMouseScrollEvent=ie,n.Data=W,n.Float32ArrayFrom=Kt,n.Float64ArrayFrom=Zt,n.ObjectAssign=H,n.ObjectEntries=P,n.ObjectHasOwn=_t,n.ObjectKeys=pt,n.ObjectValues=xt,n.Timer=ia,n.abortEvent=x,n.addClass=Rt,n.addEventListener=dt,n.animationDelay=Xe,n.animationDuration=Ze,n.animationEndEvent=V,n.animationName=$,n.ariaChecked=m,n.ariaDescribedBy=k,n.ariaDescription=g,n.ariaExpanded=E,n.ariaHasPopup=h,n.ariaHidden=N,n.ariaLabel=M,n.ariaLabelledBy=R,n.ariaModal=Ln,n.ariaPressed=On,n.ariaSelected=Tn,n.ariaValueMax=Dn,n.ariaValueMin=Cn,n.ariaValueNow=In,n.ariaValueText=zn,n.beforeunloadEvent=ee,n.bezierEasings=gt,n.blurEvent=ne,n.changeEvent=te,n.closest=An,n.contextmenuEvent=ae,n.createCustomEvent=ea,n.createElement=cn,n.createElementNS=un,n.dispatchEvent=Y,n.distinct=Gt,n.documentBody=Wt,n.documentElement=Ut,n.documentHead=D,n.dragEvent=Pn,n.dragendEvent=jn,n.dragenterEvent=Fn,n.dragleaveEvent=Rn,n.dragoverEvent=Vn,n.dragstartEvent=Bn,n.emulateAnimationEnd=$t,n.emulateTransitionEnd=Jt,n.errorEvent=oe,n.focus=Xt,n.focusEvent=ce,n.focusEvents=$n,n.focusinEvent=ue,n.focusoutEvent=le,n.gesturechangeEvent=re,n.gestureendEvent=se,n.gesturestartEvent=de,n.getAttribute=on,n.getAttributeNS=Dt,n.getBoundingClientRect=L,n.getCustomElements=Ta,n.getDocument=b,n.getDocumentBody=ca,n.getDocumentElement=B,n.getDocumentHead=ua,n.getElementAnimationDelay=ln,n.getElementAnimationDuration=rn,n.getElementById=Ca,n.getElementStyle=y,n.getElementTransitionDelay=sn,n.getElementTransitionDuration=dn,n.getElementsByClassName=Ia,n.getElementsByTagName=Sn,n.getInstance=qt,n.getNodeScroll=la,n.getParentNode=ra,n.getRectRelativeToOffsetParent=sa,n.getUID=fn,n.getWindow=da,n.hasAttribute=It,n.hasAttributeNS=zt,n.hasClass=jt,n.isApple=St,n.isArray=yn,n.isCanvas=ma,n.isCustomElement=wn,n.isDocument=X,n.isElement=ga,n.isElementInScrollRange=va,n.isElementInViewport=ba,n.isElementsArray=Ea,n.isFirefox=kt,n.isFunction=ha,n.isHTMLCollection=fa,n.isHTMLElement=d,n.isHTMLImageElement=ya,n.isJSON=wa,n.isMap=U,n.isMedia=Sa,n.isMobile=At,n.isNode=l,n.isNodeList=ka,n.isNumber=gn,n.isObject=f,n.isRTL=Na,n.isSVGElement=Ma,n.isScaledElement=bn,n.isShadowRoot=vn,n.isString=z,n.isTableElement=La,n.isWeakMap=Aa,n.isWindow=Z,n.keyAlt=Kn,n.keyArrowDown=Zn,n.keyArrowLeft=Yn,n.keyArrowRight=_n,n.keyArrowUp=Xn,n.keyBackspace=pn,n.keyCapsLock=xn,n.keyControl=et,n.keyDelete=nt,n.keyEnter=tt,n.keyEscape=at,n.keyInsert=it,n.keyMeta=ot,n.keyPause=ct,n.keyScrollLock=ut,n.keyShift=lt,n.keySpace=rt,n.keyTab=st,n.keyboardEventKeys=Jn,n.keydownEvent=me,n.keypressEvent=ge,n.keyupEvent=ve,n.loadEvent=be,n.loadstartEvent=Wn,n.matches=za,n.mouseClickEvents=Qn,n.mouseHoverEvents=qn,n.mouseSwipeEvents=Un,n.mouseclickEvent=Ee,n.mousedblclickEvent=he,n.mousedownEvent=fe,n.mouseenterEvent=Ae,n.mousehoverEvent=we,n.mouseinEvent=ke,n.mouseleaveEvent=Se,n.mousemoveEvent=Le,n.mouseoutEvent=Ne,n.mouseoverEvent=Me,n.mouseupEvent=ye,n.mousewheelEvent=Oe,n.moveEvent=Te,n.nativeEvents=Hn,n.noop=an,n.normalizeOptions=Yt,n.normalizeValue=_,n.off=nn,n.offsetHeight=vt,n.offsetWidth=bt,n.on=en,n.one=tn,n.orientationchangeEvent=Ce,n.passiveHandler=na,n.pointercancelEvent=De,n.pointerdownEvent=Ie,n.pointerleaveEvent=ze,n.pointermoveEvent=He,n.pointerupEvent=Pe,n.querySelector=Oa,n.querySelectorAll=Da,n.readystatechangeEvent=Be,n.reflow=ta,n.removeAttribute=Bt,n.removeAttributeNS=Ft,n.removeClass=Vt,n.removeEventListener=mt,n.resetEvent=Fe,n.resizeEvent=Re,n.scrollEvent=Ue,n.scrollHeight=Et,n.scrollWidth=ht,n.selectEvent=Ve,n.selectendEvent=je,n.selectstartEvent=We,n.setAttribute=Ht,n.setAttributeNS=Pt,n.setElementStyle=aa,n.submitEvent=Qe,n.support3DTransform=Nt,n.supportAnimation=Tt,n.supportPassive=Mt,n.supportTouch=Ot,n.supportTransform=Lt,n.supportTransition=Ct,n.tabindex=ft,n.toLowerCase=mn,n.toUpperCase=oa,n.touchEvents=Gn,n.touchcancelEvent=$e,n.touchendEvent=Je,n.touchmoveEvent=Ge,n.touchstartEvent=qe,n.transitionDelay=_e,n.transitionDuration=Ye,n.transitionEndEvent=j,n.transitionProperty=J,n.unloadEvent=Ke,n.userAgent=C,n.userAgentData=T,n.version=Ha})(u);const F="data-src",Ba=n=>u.isHTMLElement(n)&&n.tagName==="VIDEO",q=n=>u.isHTMLElement(n)&&n.tagName==="SOURCE",kn=n=>u.isHTMLElement(n)&&n.tagName==="IMG",p=(n,m)=>{const g=q(n),k=g?u.loadstartEvent:u.loadEvent,E=g?u.createElement("VIDEO"):null,h=u.createElement(g?"SOURCE":"IMG"),N=g?E:h,M=u.getAttribute(n,F);if(!N||!M)return;const R=()=>{kn(n)||q(n)?(n.src=M,q(n)&&Ba(n.parentElement)&&n.parentElement.load()):u.setElementStyle(n,{backgroundImage:`url("${M}")`}),u.removeAttribute(n,F),u.isFunction(m)&&m(),u.off(N,k,R)};u.on(N,k,R),(kn(h)||q(h))&&(h.src=M,E&&E.append(h))},Nn=n=>{const m=u.querySelectorAll(`[${F}]`,n),g=n&&u.getAttribute(n,F);return g&&!m?[n]:!g&&m?[...m]:g&&m?[n,...m]:!g&&!m?[...u.querySelectorAll(`[${F}]`)]:null},Fa="1.0.4",Mn=(n,m)=>{const g=u.querySelector(n);if(!g)return;const k=u.isFunction(m)?m:null,E=Nn(g);E&&E.length&&E.forEach((h,N)=>{N===E.length-1&&k?p(h,k):p(h)})};u.ObjectAssign(Mn,{version:Fa,getMediaElements:Nn,loadMedia:p});module.exports=Mn;
//# sourceMappingURL=dll.cjs.map
