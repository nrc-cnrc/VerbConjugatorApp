"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3804],{4147:(B,j,u)=>{u.d(j,{a:()=>M,b:()=>l,p:()=>A});const A=(E,...h)=>console.warn(`[Ionic Warning]: ${E}`,...h),l=(E,...h)=>console.error(`[Ionic Error]: ${E}`,...h),M=(E,...h)=>console.error(`<${E.tagName.toLowerCase()}> must be used inside ${h.join(" or ")}.`)},3804:(B,j,u)=>{u.r(j),u.d(j,{ion_popover:()=>ee});var A=u(5861),l=u(1308),M=u(5179),E=u(7626),h=u(5730),F=u(4147),C=u(3539),m=u(2854),g=u(1843),p=u(181);u(3457);const R=(t,e,r)=>{const o=e.getBoundingClientRect(),n=o.height;let i=o.width;return"cover"===t&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},ne=(t,e,r)=>{let o=[];switch(e){case"hover":let n;o=[{eventName:"mouseenter",callback:(i=(0,A.Z)(function*(s){s.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{(0,h.r)(()=>{r.presentFromTrigger(s),n=void 0})},100)}),function(a){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);const s=i.relatedTarget;!s||s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;case"context-menu":o=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),r.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;default:o=[{eventName:"click",callback:i=>r.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}]}var i;return o.forEach(({eventName:n,callback:i})=>t.addEventListener(n,i)),t.setAttribute("data-ion-popover-trigger","true"),()=>{o.forEach(({eventName:n,callback:i})=>t.removeEventListener(n,i)),t.removeAttribute("data-ion-popover-trigger")}},G=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(r=>r===e):-1,X=t=>{const r=(0,h.g)(t).querySelector("button");r&&(0,h.r)(()=>r.focus())},ce=t=>{const e=function(){var r=(0,A.Z)(function*(o){var n;const i=document.activeElement;let s=[];const a=null===(n=o.target)||void 0===n?void 0:n.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(c){}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();const f=((t,e)=>t[G(t,e)+1])(s,i);void 0!==f&&X(f);break;case"ArrowUp":o.preventDefault();const y=((t,e)=>t[G(t,e)-1])(s,i);void 0!==y&&X(y);break;case"Home":o.preventDefault();const v=s[0];void 0!==v&&X(v);break;case"End":o.preventDefault();const b=s[s.length-1];void 0!==b&&X(b);break;case"ArrowRight":case" ":case"Enter":if(i&&(t=>t.hasAttribute("data-ion-popover-trigger"))(i)){const x=new CustomEvent("ionPopoverActivateTrigger");i.dispatchEvent(x)}}}});return function(n){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},H=(t,e,r,o,n,i,s,a,c,f,y)=>{var v;let b={top:0,left:0,width:0,height:0};if("event"===i){if(!y)return c;b={top:y.clientY,left:y.clientX,width:1,height:1}}else{const d=y,S=f||(null===(v=null==d?void 0:d.detail)||void 0===v?void 0:v.ionShadowTarget)||(null==d?void 0:d.target);if(!S)return c;const D=S.getBoundingClientRect();b={top:D.top,left:D.left,width:D.width,height:D.height}}const x=de(s,b,e,r,o,n,t),P=fe(a,s,b,e,r),k=x.top+P.top,T=x.left+P.left,{arrowTop:w,arrowLeft:I}=le(s,o,n,k,T,e,r,t),{originX:_,originY:O}=pe(s,a,t);return{top:k,left:T,referenceCoordinates:b,arrowTop:w,arrowLeft:I,originX:_,originY:O}},pe=(t,e,r)=>{switch(t){case"top":return{originX:J(e),originY:"bottom"};case"bottom":return{originX:J(e),originY:"top"};case"left":return{originX:"right",originY:U(e)};case"right":return{originX:"left",originY:U(e)};case"start":return{originX:r?"left":"right",originY:U(e)};case"end":return{originX:r?"right":"left",originY:U(e)}}},J=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},U=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},le=(t,e,r,o,n,i,s,a)=>{const c={arrowTop:o+s/2-e/2,arrowLeft:n+i-e/2},f={arrowTop:o+s/2-e/2,arrowLeft:n-1.5*e};switch(t){case"top":return{arrowTop:o+s,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-e/2};case"left":return c;case"right":return f;case"start":return a?f:c;case"end":return a?c:f;default:return{arrowTop:0,arrowLeft:0}}},de=(t,e,r,o,n,i,s)=>{const a={top:e.top,left:e.left-r-n},c={top:e.top,left:e.left+e.width+n};switch(t){case"top":return{top:e.top-o-i,left:e.left};case"right":return c;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return a;case"start":return s?c:a;case"end":return s?a:c}},fe=(t,e,r,o,n)=>{switch(t){case"center":return ue(e,r,o,n);case"end":return he(e,r,o,n);default:return{top:0,left:0}}},he=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},ue=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},Q=(t,e,r,o,n,i,s,a,c,f,y,v,b=0,x=0,P=0)=>{let k=b;const T=x;let _,w=r,I=e,O=f,L=y,d=!1,S=!1;const D=v?v.top+v.height:i/2-a/2,$=v?v.height:0;let N=!1;return w<o+c?(w=o,d=!0,O="left"):s+o+w+c>n&&(S=!0,w=n-s-o,O="right"),D+$+a>i&&("top"===t||"bottom"===t)&&(D-a>0?(I=Math.max(12,D-a-$-(P-1)),k=I+a,L="bottom",N=!0):_=o),{top:I,left:w,bottom:_,originX:O,originY:L,checkSafeAreaLeft:d,checkSafeAreaRight:S,arrowTop:k,arrowLeft:T,addPopoverBottomClass:N}},ge=(t,e)=>{var r;const{event:o,size:n,trigger:i,reference:s,side:a,align:c}=e,f=t.ownerDocument,y="rtl"===f.dir,v=f.defaultView.innerWidth,b=f.defaultView.innerHeight,x=(0,h.g)(t),P=x.querySelector(".popover-content"),k=x.querySelector(".popover-arrow"),T=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:w,contentHeight:I}=R(n,P,T),{arrowWidth:_,arrowHeight:O}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(k),d=H(y,w,I,_,O,s,a,c,{top:b/2-I/2,left:v/2-w/2,originX:y?"right":"left",originY:"top"},i,o),S="cover"===n?0:5,D="cover"===n?0:25,{originX:$,originY:N,top:Y,left:W,bottom:K,checkSafeAreaLeft:V,checkSafeAreaRight:Ae,arrowTop:Ee,arrowLeft:Te,addPopoverBottomClass:Ie}=Q(a,d.top,d.left,S,v,b,w,I,D,d.originX,d.originY,d.referenceCoordinates,d.arrowTop,d.arrowLeft,O),Oe=(0,p.c)(),te=(0,p.c)(),oe=(0,p.c)();return te.addElement(x.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),oe.addElement(x.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Oe.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${w}px`),Ie&&t.classList.add("popover-bottom"),void 0!==K&&P.style.setProperty("bottom",`${K}px`);let q=`${W}px`;V&&(q=`${W}px + var(--ion-safe-area-left, 0)`),Ae&&(q=`${W}px - var(--ion-safe-area-right, 0)`),P.style.setProperty("top",`calc(${Y}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),P.style.setProperty("transform-origin",`${N} ${$}`),null!==k&&(((t,e=!1,r,o)=>!(!r&&!o||"top"!==t&&"bottom"!==t&&e))(a,d.top!==Y||d.left!==W,o,i)?(k.style.setProperty("top",`calc(${Ee}px + var(--offset-y, 0))`),k.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):k.style.setProperty("display","none"))}).addAnimation([te,oe])},be=t=>{const e=(0,h.g)(t),r=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),n=(0,p.c)(),i=(0,p.c)(),s=(0,p.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([i,s])},we=(t,e)=>{var r;const{event:o,size:n,trigger:i,reference:s,side:a,align:c}=e,f=t.ownerDocument,y="rtl"===f.dir,v=f.defaultView.innerWidth,b=f.defaultView.innerHeight,x=(0,h.g)(t),P=x.querySelector(".popover-content"),k=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:T,contentHeight:w}=R(n,P,k),_=H(y,T,w,0,0,s,a,c,{top:b/2-w/2,left:v/2-T/2,originX:y?"right":"left",originY:"top"},i,o),O="cover"===n?0:12,{originX:L,originY:d,top:S,left:D,bottom:$}=Q(a,_.top,_.left,O,v,b,T,w,0,_.originX,_.originY,_.referenceCoordinates),N=(0,p.c)(),Y=(0,p.c)(),W=(0,p.c)(),K=(0,p.c)(),V=(0,p.c)();return Y.addElement(x.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),W.addElement(x.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),K.addElement(P).beforeStyles({top:`calc(${S}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${d} ${L}`}).beforeAddWrite(()=>{void 0!==$&&P.style.setProperty("bottom",`${$}px`)}).fromTo("transform","scale(0.8)","scale(1)"),V.addElement(x.querySelector(".popover-viewport")).fromTo("opacity",.01,1),N.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&t.style.setProperty("--width",`${T}px`),"bottom"===d&&t.classList.add("popover-bottom")}).addAnimation([Y,W,K,V])},ye=t=>{const e=(0,h.g)(t),r=e.querySelector(".popover-content"),o=(0,p.c)(),n=(0,p.c)(),i=(0,p.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},ee=class{constructor(t){(0,l.r)(this,t),this.didPresent=(0,l.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,l.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,l.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,l.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,l.e)(this,"didPresent",7),this.willPresentShorthand=(0,l.e)(this,"willPresent",7),this.willDismissShorthand=(0,l.e)(this,"willDismiss",7),this.didDismissShorthand=(0,l.e)(this,"didDismiss",7),this.ionMount=(0,l.e)(this,"ionMount",7),this.parentPopover=null,this.popoverIndex=De++,this.coreDelegate=(0,E.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=()=>{this.dismiss(void 0,C.B)},this.onLifecycle=e=>{const r=this.usersElement,o=_e[e.type];if(r&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:o,destroyTriggerInteraction:n}=this;if(n&&n(),void 0===e)return;const i=this.triggerEl=void 0!==e?document.getElementById(e):null;i?this.destroyTriggerInteraction=ne(i,r,o):(0,F.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ce(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:o,triggerEl:n,el:i}=this;!r||!n||(e&&e(),this.destroyDismissInteraction=((t,e,r,o)=>{let n=[];const s=(0,h.g)(o).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],n.forEach(({eventName:a,callback:c})=>s.addEventListener(a,c)),()=>{n.forEach(({eventName:a,callback:c})=>s.removeEventListener(a,c))}})(n,o,i,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,C.e)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,M.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,h.r)(()=>this.present()),t&&(0,h.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var r=this;return(0,A.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(t),r.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,A.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const{inline:r,delegate:o}=e.getDelegate(!0);return e.usersElement=yield(0,E.a)(o,e.el,e.component,["popover-viewport"],e.componentProps,r),yield(0,g.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.ionMount.emit(),new Promise(n=>{(0,h.r)(()=>{(0,h.r)((0,A.Z)(function*(){e.currentTransition=(0,C.d)(e,"popoverEnter",ge,we,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,C.j)(e.el,e.el),n()}))})})})()}dismiss(t,e,r=!0){var o=this;return(0,A.Z)(function*(){void 0!==o.currentTransition&&(yield o.currentTransition);const{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=o;r&&o.parentPopover&&o.parentPopover.dismiss(t,e,r),o.currentTransition=(0,C.f)(o,t,e,"popoverLeave",be,ye,o.event);const s=yield o.currentTransition;if(s){n&&(n(),o.destroyKeyboardInteraction=void 0),i&&(i(),o.destroyDismissInteraction=void 0);const{delegate:a}=o.getDelegate();yield(0,E.d)(a,o.usersElement)}return o.currentTransition=void 0,s})()}getParentPopover(){var t=this;return(0,A.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,C.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,C.g)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,M.b)(this),{onLifecycle:e,popoverId:r,parentPopover:o,dismissOnSelect:n,side:i,arrow:s,htmlAttributes:a}=this,c=(0,M.a)("desktop"),f=s&&!o;return(0,l.h)(l.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,m.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":c,[`popover-side-${i}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,l.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,l.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:n?()=>this.dismiss():void 0},f&&(0,l.h)("div",{class:"popover-arrow",part:"arrow"}),(0,l.h)("div",{class:"popover-content",part:"content"},(0,l.h)("slot",null))))}get el(){return(0,l.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},_e={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let De=0;ee.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:(B,j,u)=>{u.d(j,{c:()=>M,g:()=>h,h:()=>l,o:()=>C});var A=u(5861);const l=(m,g)=>null!==g.closest(m),M=(m,g)=>"string"==typeof m&&m.length>0?Object.assign({"ion-color":!0,[`ion-color-${m}`]:!0},g):g,h=m=>{const g={};return(m=>void 0!==m?(Array.isArray(m)?m:m.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(m).forEach(p=>g[p]=!0),g},F=/^[a-z][a-z0-9+\-.]*:/,C=function(){var m=(0,A.Z)(function*(g,p,Z,z){if(null!=g&&"#"!==g[0]&&!F.test(g)){const R=document.querySelector("ion-router");if(R)return null!=p&&p.preventDefault(),R.push(g,Z,z)}return!1});return function(p,Z,z,R){return m.apply(this,arguments)}}()}}]);