"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(D,w,l)=>{l.d(w,{c:()=>a});var u=l(1308),v=l(7864),h=l(1898);const a=(i,o)=>{let e,t;const r=(c,p,f)=>{if("undefined"==typeof document)return;const E=document.elementFromPoint(c,p);E&&o(E)?E!==e&&(d(),s(E,f)):d()},s=(c,p)=>{e=c,t||(t=e);const f=e;(0,u.c)(()=>f.classList.add("ion-activated")),p()},d=(c=!1)=>{if(!e)return;const p=e;(0,u.c)(()=>p.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,h.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>r(c.currentX,c.currentY,v.a),onMove:c=>r(c.currentX,c.currentY,v.b),onEnd:()=>{d(!0),(0,v.h)(),t=void 0}})}},2225:(D,w,l)=>{l.d(w,{g:()=>u});const u=(o,e,t,r,s)=>h(o[1],e[1],t[1],r[1],s).map(d=>v(o[0],e[0],t[0],r[0],d)),v=(o,e,t,r,s)=>s*(3*e*Math.pow(s-1,2)+s*(-3*t*s+3*t+r*s))-o*Math.pow(s-1,3),h=(o,e,t,r,s)=>i((r-=s)-3*(t-=s)+3*(e-=s)-(o-=s),3*t-6*e+3*o,3*e-3*o,o).filter(c=>c>=0&&c<=1),i=(o,e,t,r)=>{if(0===o)return((o,e,t)=>{const r=e*e-4*o*t;return r<0?[]:[(-e+Math.sqrt(r))/(2*o),(-e-Math.sqrt(r))/(2*o)]})(e,t,r);const s=(3*(t/=o)-(e/=o)*e)/3,d=(2*e*e*e-9*e*t+27*(r/=o))/27;if(0===s)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-s),-Math.sqrt(-s)];const c=Math.pow(d/2,2)+Math.pow(s/3,3);if(0===c)return[Math.pow(d/2,.5)-e/3];if(c>0)return[Math.pow(-d/2+Math.sqrt(c),1/3)-Math.pow(d/2+Math.sqrt(c),1/3)-e/3];const p=Math.sqrt(Math.pow(-s/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-s/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(f/3)-e/3,E*Math.cos((f+2*Math.PI)/3)-e/3,E*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(D,w,l)=>{l.d(w,{i:()=>u});const u=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(D,w,l)=>{l.r(w),l.d(w,{startFocusVisible:()=>a});const u="ion-focused",h=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=i=>{let o=[],e=!0;const t=i?i.shadowRoot:document,r=i||document.body,s=_=>{o.forEach(g=>g.classList.remove(u)),_.forEach(g=>g.classList.add(u)),o=_},d=()=>{e=!1,s([])},c=_=>{e=h.includes(_.key),e||s([])},p=_=>{if(e&&void 0!==_.composedPath){const g=_.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));s(g)}},f=()=>{t.activeElement===r&&s([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",p),t.addEventListener("focusout",f),t.addEventListener("touchstart",d),t.addEventListener("mousedown",d),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",p),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",d),t.removeEventListener("mousedown",d)},setFocus:s}}},7626:(D,w,l)=>{l.d(w,{C:()=>i,a:()=>h,d:()=>a});var u=l(5861),v=l(5730);const h=function(){var o=(0,u.Z)(function*(e,t,r,s,d,c){var p;if(e)return e.attachViewToDom(t,r,d,s);if(!(c||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof r?null===(p=t.ownerDocument)||void 0===p?void 0:p.createElement(r):r;return s&&s.forEach(E=>f.classList.add(E)),d&&Object.assign(f,d),t.appendChild(f),yield new Promise(E=>(0,v.c)(f,E)),f});return function(t,r,s,d,c,p){return o.apply(this,arguments)}}(),a=(o,e)=>{if(e){if(o)return o.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},i=()=>{let o,e;return{attachViewToDom:function(){var s=(0,u.Z)(function*(d,c,p={},f=[]){var E,_;if(o=d,c){const m="string"==typeof c?null===(E=o.ownerDocument)||void 0===E?void 0:E.createElement(c):c;f.forEach(n=>m.classList.add(n)),Object.assign(m,p),o.appendChild(m),yield new Promise(n=>(0,v.c)(m,n))}else if(o.children.length>0&&!o.children[0].classList.contains("ion-delegate-host")){const n=null===(_=o.ownerDocument)||void 0===_?void 0:_.createElement("div");n.classList.add("ion-delegate-host"),f.forEach(y=>n.classList.add(y)),n.append(...o.children),o.appendChild(n)}const g=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),o.parentNode.insertBefore(e,o),g.appendChild(o),o});return function(c,p){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&e&&(e.parentNode.insertBefore(o,e),e.remove()),Promise.resolve())}}},7864:(D,w,l)=>{l.d(w,{a:()=>a,b:()=>i,c:()=>h,d:()=>e,h:()=>o});const u={getEngine(){var t;const r=window;return r.TapticEngine||(null===(t=r.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&r.Capacitor.Plugins.Haptics},available(){var t;const r=window;return!!this.getEngine()&&("web"!==(null===(t=r.Capacitor)||void 0===t?void 0:t.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const r=this.getEngine();if(!r)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;r.impact({style:s})},notification(t){const r=this.getEngine();if(!r)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;r.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},v=()=>u.available(),h=()=>{v()&&u.selection()},a=()=>{v()&&u.selectionStart()},i=()=>{v()&&u.selectionChanged()},o=()=>{v()&&u.selectionEnd()},e=t=>{v()&&u.impact(t)}},109:(D,w,l)=>{l.d(w,{a:()=>u,b:()=>c,c:()=>e,d:()=>p,e:()=>C,f:()=>o,g:()=>f,h:()=>h,i:()=>v,j:()=>n,k:()=>y,l:()=>t,m:()=>s,n:()=>E,o:()=>r,p:()=>i,q:()=>a,r:()=>m,s:()=>M,t:()=>d,u:()=>_,v:()=>g});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(D,w,l)=>{l.d(w,{I:()=>i,a:()=>s,b:()=>o,c:()=>p,d:()=>E,f:()=>d,g:()=>r,i:()=>t,p:()=>f,r:()=>_,s:()=>c});var u=l(5861),v=l(5730),h=l(4147);const i="ion-content",o=".ion-content-scroll-host",e=`${i}, ${o}`,t=g=>"ION-CONTENT"===g.tagName,r=function(){var g=(0,u.Z)(function*(m){return t(m)?(yield new Promise(n=>(0,v.c)(m,n)),m.getScrollElement()):m});return function(n){return g.apply(this,arguments)}}(),s=g=>g.querySelector(o)||g.querySelector(e),d=g=>g.closest(e),c=(g,m)=>t(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(g,m,n,y)=>t(g)?g.scrollByPoint(m,n,y):Promise.resolve(g.scrollBy({top:n,left:m,behavior:y>0?"smooth":"auto"})),f=g=>(0,h.a)(g,i),E=g=>{if(t(g)){const n=g.scrollY;return g.scrollY=!1,n}return g.style.setProperty("overflow","hidden"),!0},_=(g,m)=>{t(g)?g.scrollY=m:g.style.removeProperty("overflow")}},5234:(D,w,l)=>{l.r(w),l.d(w,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>u,copyVisualViewport:()=>m,keyboardDidClose:()=>f,keyboardDidOpen:()=>c,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>d,setKeyboardOpen:()=>s,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const u="ionKeyboardDidShow",v="ionKeyboardDidHide";let a={},i={},o=!1;const e=()=>{a={},i={},o=!1},t=n=>{r(n),n.visualViewport&&(i=m(n.visualViewport),n.visualViewport.onresize=()=>{g(n),c()||p(n)?s(n):f(n)&&d(n)})},r=n=>{n.addEventListener("keyboardDidShow",y=>s(n,y)),n.addEventListener("keyboardDidHide",()=>d(n))},s=(n,y)=>{E(n,y),o=!0},d=n=>{_(n),o=!1},c=()=>!o&&a.width===i.width&&(a.height-i.height)*i.scale>150,p=n=>o&&!f(n),f=n=>o&&i.height===n.innerHeight,E=(n,y)=>{const C=new CustomEvent(u,{detail:{keyboardHeight:y?y.keyboardHeight:n.innerHeight-i.height}});n.dispatchEvent(C)},_=n=>{const y=new CustomEvent(v);n.dispatchEvent(y)},g=n=>{a=Object.assign({},i),i=m(n.visualViewport)},m=n=>({width:Math.round(n.width),height:Math.round(n.height),offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,pageTop:n.pageTop,pageLeft:n.pageLeft,scale:n.scale})},9852:(D,w,l)=>{l.d(w,{c:()=>v});var u=l(3457);const v=h=>{let a,i,o;const e=()=>{a=()=>{o=!0,h&&h(!0)},i=()=>{o=!1,h&&h(!1)},null==u.w||u.w.addEventListener("keyboardWillShow",a),null==u.w||u.w.addEventListener("keyboardWillHide",i)};return e(),{init:e,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",a),null==u.w||u.w.removeEventListener("keyboardWillHide",i),a=i=void 0},isKeyboardVisible:()=>o}}},7741:(D,w,l)=>{l.d(w,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(h,a,i)=>{const o=h*a/i-h+"ms",e=2*Math.PI*a/i;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(h,a,i)=>{const o=a/i,e=h*o-h+"ms",t=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(h,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(h,a,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":h*a/i-h+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(h,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*a+(a<i/2?180:-180)}deg)`,"animation-delay":h*a/i-h+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(h,a,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":h*a/i-h+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(h,a,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":h*a/i-h+"ms"}})}}},6659:(D,w,l)=>{l.r(w),l.d(w,{createSwipeBackGesture:()=>i});var u=l(5730),v=l(5062),h=l(1898);l(4349);const i=(o,e,t,r,s)=>{const d=o.ownerDocument.defaultView;let c=(0,v.i)(o);const f=n=>c?-n.deltaX:n.deltaX;return(0,h.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(c=(0,v.i)(o),(n=>{const{startX:M}=n;return c?M>=d.innerWidth-50:M<=50})(n)&&e()),onStart:t,onMove:n=>{const M=f(n)/d.innerWidth;r(M)},onEnd:n=>{const y=f(n),M=d.innerWidth,C=y/M,x=(n=>c?-n.velocityX:n.velocityX)(n),L=x>=0&&(x>.2||y>M/2),O=(L?1-C:C)*M;let B=0;if(O>5){const b=O/Math.abs(x);B=Math.min(b,540)}s(L,C<=0?.01:(0,u.l)(0,C,.9999),B)}})}},217:(D,w,l)=>{l.r(w),l.d(w,{VerbTooltipPageModule:()=>r});var u=l(9808),v=l(2382),h=l(8058),a=l(6688),i=l(1189),o=l(4893);const e=[{path:"",component:i.r}];let t=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[a.Bz.forChild(e)],a.Bz]}),s})(),r=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[u.ez,v.u5,h.Pc,t]]}),s})()}}]);