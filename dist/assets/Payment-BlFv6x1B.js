import{R as Yn,p as ha,j as v,b as mn,A as ya}from"./index-CPcYxd-k.js";import{u as xa}from"./useCourseDetails-CqyATkBm.js";import{P as g}from"./index-cMHectDW.js";function dn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function u(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?dn(Object(a),!0).forEach(function(e){N(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function Ot(t){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ot(t)}function wa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function vn(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function ka(t,n,a){return n&&vn(t.prototype,n),a&&vn(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Jt(t,n){return Oa(t)||Pa(t,n)||$n(t,n)||Ca()}function ct(t){return Aa(t)||Na(t)||$n(t)||Sa()}function Aa(t){if(Array.isArray(t))return Ft(t)}function Oa(t){if(Array.isArray(t))return t}function Na(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pa(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function $n(t,n){if(t){if(typeof t=="string")return Ft(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ft(t,n)}}function Ft(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function Sa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ca(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bn=function(){},Zt={},Hn={},Un=null,Wn={mark:bn,measure:bn};try{typeof window<"u"&&(Zt=window),typeof document<"u"&&(Hn=document),typeof MutationObserver<"u"&&(Un=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}var Ea=Zt.navigator||{},gn=Ea.userAgent,pn=gn===void 0?"":gn,$=Zt,y=Hn,hn=Un,dt=Wn;$.document;var R=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Vn=~pn.indexOf("MSIE")||~pn.indexOf("Trident/"),vt,bt,gt,pt,ht,L="___FONT_AWESOME___",Dt=16,Gn="fa",Xn="svg-inline--fa",B="data-fa-i2svg",Yt="data-fa-pseudo-element",Ia="data-fa-pseudo-element-pending",tn="data-prefix",nn="data-icon",yn="fontawesome-i2svg",Ta="async",ja=["HTML","HEAD","STYLE","SCRIPT"],Bn=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",an=[h,x];function ut(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[h]}})}var it=ut((vt={},N(vt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(vt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),vt)),ot=ut((bt={},N(bt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(bt,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bt)),st=ut((gt={},N(gt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(gt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gt)),_a=ut((pt={},N(pt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(pt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pt)),La=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qn="fa-layers-text",Ma=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,za=ut((ht={},N(ht,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(ht,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ht)),Kn=[1,2,3,4,5,6,7,8,9,10],Ra=Kn.concat([11,12,13,14,15,16,17,18,19,20]),Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(ot[h]).map(ft.add.bind(ft));Object.keys(ot[x]).map(ft.add.bind(ft));var Da=[].concat(an,ct(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Kn.map(function(t){return"".concat(t,"x")})).concat(Ra.map(function(t){return"w-".concat(t)})),et=$.FontAwesomeConfig||{};function Ya(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function $a(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Ha=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ha.forEach(function(t){var n=Jt(t,2),a=n[0],e=n[1],r=$a(Ya(a));r!=null&&(et[e]=r)})}var Qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Gn,replacementClass:Xn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};et.familyPrefix&&(et.cssPrefix=et.familyPrefix);var tt=u(u({},Qn),et);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(Qn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){tt[t]=a,rt.forEach(function(e){return e(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){tt.cssPrefix=n,rt.forEach(function(a){return a(d)})},get:function(){return tt.cssPrefix}});$.FontAwesomeConfig=d;var rt=[];function Ua(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var D=Dt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wa(t){if(!(!t||!R)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=y.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return y.head.insertBefore(n,e),t}}var Va="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var t=12,n="";t-- >0;)n+=Va[Math.random()*62|0];return n}function nt(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function en(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ga(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(Jn(t[a]),'" ')},"").trim()}function Ct(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function rn(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function Xa(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ba(t){var n=t.transform,a=t.width,e=a===void 0?Dt:a,r=t.height,i=r===void 0?Dt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Vn?f+="translate(".concat(n.x/D-e/2,"em, ").concat(n.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/D,"em), calc(-50% + ").concat(n.y/D,"em)) "):f+="translate(".concat(n.x/D,"em, ").concat(n.y/D,"em) "),f+="scale(".concat(n.size/D*(n.flipX?-1:1),", ").concat(n.size/D*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var qa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zn(){var t=Gn,n=Xn,a=d.cssPrefix,e=d.replacementClass,r=qa;if(a!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var xn=!1;function _t(){d.autoAddCss&&!xn&&(Wa(Zn()),xn=!0)}var Ka={mixout:function(){return{dom:{css:Zn,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},M=$||{};M[L]||(M[L]={});M[L].styles||(M[L].styles={});M[L].hooks||(M[L].hooks={});M[L].shims||(M[L].shims=[]);var T=M[L],ta=[],Qa=function t(){y.removeEventListener("DOMContentLoaded",t),Nt=1,ta.map(function(n){return n()})},Nt=!1;R&&(Nt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Nt||y.addEventListener("DOMContentLoaded",Qa));function Ja(t){R&&(Nt?setTimeout(t,0):ta.push(t))}function mt(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Jn(t):"<".concat(n," ").concat(Ga(e),">").concat(i.map(mt).join(""),"</").concat(n,">")}function wn(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var Za=function(n,a){return function(e,r,i,o){return n.call(a,e,r,i,o)}},Lt=function(n,a,e,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Za(a,r):a,f,c,l;for(e===void 0?(f=1,l=n[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function te(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=t.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function $t(t){var n=te(t);return n.length===1?n[0].toString(16):null}function ne(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function kn(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Ht(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=kn(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,kn(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Ht("fa",n)}var yt,xt,wt,K=T.styles,ae=T.shims,ee=(yt={},N(yt,h,Object.values(st[h])),N(yt,x,Object.values(st[x])),yt),on=null,na={},aa={},ea={},ra={},ia={},re=(xt={},N(xt,h,Object.keys(it[h])),N(xt,x,Object.keys(it[x])),xt);function ie(t){return~Da.indexOf(t)}function oe(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!ie(r)?r:null}var oa=function(){var n=function(i){return Lt(K,function(o,s,f){return o[f]=Lt(s,i,{}),o},{})};na=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),aa=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ia=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in K||d.autoFetchSvg,e=Lt(ae,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ea=e.names,ra=e.unicodes,on=Et(d.styleDefault,{family:d.familyDefault})};Ua(function(t){on=Et(t.styleDefault,{family:d.familyDefault})});oa();function sn(t,n){return(na[t]||{})[n]}function se(t,n){return(aa[t]||{})[n]}function X(t,n){return(ia[t]||{})[n]}function sa(t){return ea[t]||{prefix:null,iconName:null}}function fe(t){var n=ra[t],a=sn("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return on}var fn=function(){return{prefix:null,iconName:null,rest:[]}};function Et(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?h:a,r=it[e][t],i=ot[e][t]||ot[e][r],o=t in T.styles?t:null;return i||o||null}var An=(wt={},N(wt,h,Object.keys(st[h])),N(wt,x,Object.keys(st[x])),wt);function It(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(n={},N(n,h,"".concat(d.cssPrefix,"-").concat(h)),N(n,x,"".concat(d.cssPrefix,"-").concat(x)),n),o=null,s=h;(t.includes(i[h])||t.some(function(c){return An[h].includes(c)}))&&(s=h),(t.includes(i[x])||t.some(function(c){return An[x].includes(c)}))&&(s=x);var f=t.reduce(function(c,l){var m=oe(d.cssPrefix,l);if(K[l]?(l=ee[s].includes(l)?_a[s][l]:l,o=l,c.prefix=l):re[s].indexOf(l)>-1?(o=l,c.prefix=Et(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[h]&&l!==i[x]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=o==="fa"?sa(c.iconName):{},p=X(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||p||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},fn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(K.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var le=function(){function t(){wa(this,t),this.definitions={}}return ka(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Ht(s,o[s]);var f=st[h][s];f&&Ht(f,o[s]),oa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[s][m]=c)}),a[s][f]=c}),a}}]),t}(),On=[],Q={},Z={},ce=Object.keys(Z);function ue(t,n){var a=n.mixoutsTo;return On=t,Q={},Object.keys(Z).forEach(function(e){ce.indexOf(e)===-1&&delete Z[e]}),On.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),Ot(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}e.provides&&e.provides(Z)}),a}function Ut(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function q(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=Q[t]||[];r.forEach(function(i){i.apply(null,a)})}function z(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,n):void 0}function Wt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||H();if(n)return n=X(a,n)||n,wn(fa.definitions,a,n)||wn(T.styles,a,n)}var fa=new le,me=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,q("noAuto")},de={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ja(function(){be({autoReplaceSvgRoot:a}),q("watch",n)})}},ve={icon:function(n){if(n===null)return null;if(Ot(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Et(n[0]);return{prefix:e,iconName:X(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(La))){var r=It(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:X(i,n)||n}}}},I={noAuto:me,config:d,dom:de,parse:ve,library:fa,findIconDefinition:Wt,toHtml:mt},be=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?y:a;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&I.dom.i2svg({node:e})};function Tt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return mt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(R){var e=y.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ge(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(rn(o)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=Ct(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function pe(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function ln(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,b=t.watchable,p=b===void 0?!1:b,A=e.found?e:a,S=A.width,w=A.height,C=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},E=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};p&&(O.attributes[B]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(l||lt())},children:[f]}),delete O.attributes.title);var P=u(u({},O),{},{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},E),m.styles)}),W=e.found&&a.found?z("generateAbstractMask",P)||{children:[],attributes:{}}:z("generateAbstractIcon",P)||{children:[],attributes:{}},V=W.children,jt=W.attributes;return P.children=V,P.attributes=jt,s?pe(P):ge(P)}function Nn(t){var n=t.content,a=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[B]="");var l=u({},o.styles);rn(r)&&(l.transform=Ba({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var m=Ct(l);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function he(t){var n=t.content,a=t.title,e=t.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=Ct(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Mt=T.styles;function Vt(t){var n=t[0],a=t[1],e=t.slice(4),r=Jt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:o}}var ye={found:!1,width:512,height:512};function xe(t,n){!Bn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Gt(t,n){var a=n;return n==="fa"&&d.styleDefault!==null&&(n=H()),new Promise(function(e,r){if(z("missingIconAbstract"),a==="fa"){var i=sa(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return e(Vt(o))}xe(t,n),e(u(u({},ye),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Pn=function(){},Xt=d.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:Pn,measure:Pn},at='FA "6.5.2"',we=function(n){return Xt.mark("".concat(at," ").concat(n," begins")),function(){return la(n)}},la=function(n){Xt.mark("".concat(at," ").concat(n," ends")),Xt.measure("".concat(at," ").concat(n),"".concat(at," ").concat(n," begins"),"".concat(at," ").concat(n," ends"))},cn={begin:we,end:la},kt=function(){};function Sn(t){var n=t.getAttribute?t.getAttribute(B):null;return typeof n=="string"}function ke(t){var n=t.getAttribute?t.getAttribute(tn):null,a=t.getAttribute?t.getAttribute(nn):null;return n&&a}function Ae(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Oe(){if(d.autoReplaceSvg===!0)return At.replace;var t=At[d.autoReplaceSvg];return t||At.replace}function Ne(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Pe(t){return y.createElement(t)}function ca(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?Ne:Pe:a;if(typeof t=="string")return y.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ca(o,{ceFn:e}))}),r}function Se(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var At={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(ca(r),a)}),a.getAttribute(B)===null&&d.keepOriginalSource){var e=y.createComment(Se(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~en(a).indexOf(d.replacementClass))return At.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return mt(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=o}};function Cn(t){t()}function ua(t,n){var a=typeof n=="function"?n:kt;if(t.length===0)a();else{var e=Cn;d.mutateApproach===Ta&&(e=$.requestAnimationFrame||Cn),e(function(){var r=Oe(),i=cn.begin("mutate");t.map(r),i(),a()})}}var un=!1;function ma(){un=!0}function Bt(){un=!1}var Pt=null;function En(t){if(hn&&d.observeMutations){var n=t.treeCallback,a=n===void 0?kt:n,e=t.nodeCallback,r=e===void 0?kt:e,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Pt=new hn(function(c){if(!un){var l=H();nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Sn(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Sn(m.target)&&~Fa.indexOf(m.attributeName))if(m.attributeName==="class"&&ke(m.target)){var b=It(en(m.target)),p=b.prefix,A=b.iconName;m.target.setAttribute(tn,p||l),A&&m.target.setAttribute(nn,A)}else Ae(m.target)&&r(m.target)})}}),R&&Pt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ce(){Pt&&Pt.disconnect()}function Ee(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function Ie(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=It(en(t));return r.prefix||(r.prefix=H()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=se(r.prefix,t.innerText)||sn(r.prefix,$t(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Te(t){var n=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(a?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||lt()):(n["aria-hidden"]="true",n.focusable="false")),n}function je(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function In(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Ie(t),e=a.iconName,r=a.prefix,i=a.rest,o=Te(t),s=Ut("parseNodeAttributes",{},t),f=n.styleParser?Ee(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var _e=T.styles;function da(t){var n=d.autoReplaceSvg==="nest"?In(t,{styleParser:!1}):In(t);return~n.extra.classes.indexOf(qn)?z("generateLayersText",t,n):z("generateSvgReplacementMutation",t,n)}var U=new Set;an.map(function(t){U.add("fa-".concat(t))});Object.keys(it[h]).map(U.add.bind(U));Object.keys(it[x]).map(U.add.bind(U));U=ct(U);function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=y.documentElement.classList,e=function(m){return a.add("".concat(yn,"-").concat(m))},r=function(m){return a.remove("".concat(yn,"-").concat(m))},i=d.autoFetchSvg?U:an.map(function(l){return"fa-".concat(l)}).concat(Object.keys(_e));i.includes("fa")||i.push("fa");var o=[".".concat(qn,":not([").concat(B,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(B,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=cn.begin("onTree"),c=s.reduce(function(l,m){try{var b=da(m);b&&l.push(b)}catch(p){Bn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(b){ua(b,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(b){f(),m(b)})})}function Le(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;da(t).then(function(a){a&&ua([a],n)})}function Me(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Wt(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Wt(r||{})),t(e,u(u({},a),{},{mask:r}))}}var ze=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?_:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,m=a.title,b=m===void 0?null:m,p=a.titleId,A=p===void 0?null:p,S=a.classes,w=S===void 0?[]:S,C=a.attributes,k=C===void 0?{}:C,O=a.styles,E=O===void 0?{}:O;if(n){var P=n.prefix,W=n.iconName,V=n.icon;return Tt(u({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:a}),d.autoA11y&&(b?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||lt()):(k["aria-hidden"]="true",k.focusable="false")),ln({icons:{main:Vt(V),mask:f?Vt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:W,transform:u(u({},_),r),symbol:o,title:b,maskId:l,titleId:A,extra:{attributes:k,styles:E,classes:w}})})}},Re={mixout:function(){return{icon:Me(ze)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Tn,a.nodeCallback=Le,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?y:e,i=a.callback,o=i===void 0?function(){}:i;return Tn(r,o)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,b=e.extra;return new Promise(function(p,A){Promise.all([Gt(r,s),l.iconName?Gt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=Jt(S,2),C=w[0],k=w[1];p([a,ln({icons:{main:C,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Ct(s);f.length>0&&(r.style=f);var c;return rn(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Fe={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Tt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ct(i)).join(" ")},children:o}]})}}}},De={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return Tt({type:"counter",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:e}),he({content:a.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ct(s))}})})}}}},Ye={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?_:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,b=e.styles,p=b===void 0?{}:b;return Tt({type:"text",content:a},function(){return q("beforeDOMElementCreation",{content:a,params:e}),Nn({content:a,transform:u(u({},_),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ct(c))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Vn){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,Nn({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},$e=new RegExp('"',"ug"),jn=[1105920,1112319];function He(t){var n=t.replace($e,""),a=ne(n,0),e=a>=jn[0]&&a<=jn[1],r=n.length===2?n[0]===n[1]:!1;return{value:$t(r?n[0]:n),isSecondary:e||r}}function _n(t,n){var a="".concat(Ia).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var i=nt(t.children),o=i.filter(function(V){return V.getAttribute(Yt)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ma),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?x:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ot[b][f[2].toLowerCase()]:za[b][c],A=He(m),S=A.value,w=A.isSecondary,C=f[0].startsWith("FontAwesome"),k=sn(p,S),O=k;if(C){var E=fe(S);E.iconName&&E.prefix&&(k=E.iconName,p=E.prefix)}if(k&&!w&&(!o||o.getAttribute(tn)!==p||o.getAttribute(nn)!==O)){t.setAttribute(a,O),o&&t.removeChild(o);var P=je(),W=P.extra;W.attributes[Yt]=n,Gt(k,p).then(function(V){var jt=ln(u(u({},P),{},{icons:{main:V,mask:fn()},prefix:p,iconName:O,extra:W,watchable:!0})),F=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=jt.map(function(pa){return mt(pa)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Ue(t){return Promise.all([_n(t,"::before"),_n(t,"::after")])}function We(t){return t.parentNode!==document.head&&!~ja.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ln(t){if(R)return new Promise(function(n,a){var e=nt(t.querySelectorAll("*")).filter(We).map(Ue),r=cn.begin("searchPseudoElements");ma(),Promise.all(e).then(function(){r(),Bt(),n()}).catch(function(){r(),Bt(),a()})})}var Ve={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ln,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?y:e;d.searchPseudoElements&&Ln(r)}}},Mn=!1,Ge={mixout:function(){return{dom:{unwatch:function(){ma(),Mn=!0}}}},hooks:function(){return{bootstrap:function(){En(Ut("mutationObserverCallbacks",{}))},noAuto:function(){Ce()},watch:function(a){var e=a.observeMutationsRoot;Mn?Bt():En(Ut("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},zn=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Xe={mixout:function(){return{parse:{transform:function(a){return zn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=zn(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:b};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),p.path)}]}]}}}},zt={x:0,y:0,width:"100%",height:"100%"};function Rn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Be(t){return t.tag==="g"?t.children:[t]}var qe={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?It(r.split(" ").map(function(o){return o.trim()})):fn();return i.prefix||(i.prefix=H()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,m=o.width,b=o.icon,p=Xa({transform:f,containerWidth:m,iconWidth:c}),A={tag:"rect",attributes:u(u({},zt),{},{fill:"white"})},S=l.children?{children:l.children.map(Rn)}:{},w={tag:"g",attributes:u({},p.inner),children:[Rn(u({tag:l.tag,attributes:u(u({},l.attributes),p.path)},S))]},C={tag:"g",attributes:u({},p.outer),children:[w]},k="mask-".concat(s||lt()),O="clip-".concat(s||lt()),E={tag:"mask",attributes:u(u({},zt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,C]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Be(b)},E]};return e.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(k,")")},zt)}),{children:e,attributes:r}}}},Ke={provides:function(n){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Qe={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Je=[Ka,Re,Fe,De,Ye,Ve,Ge,Xe,qe,Ke,Qe];ue(Je,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var qt=I.parse;I.findIconDefinition;I.toHtml;var Ze=I.icon;I.layer;I.text;I.counter;function Fn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function Y(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Fn(Object(a),!0).forEach(function(e){J(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Fn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function J(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function tr(t,n){if(t==null)return{};var a={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(n.indexOf(r)>=0)&&(a[r]=t[r]);return a}function nr(t,n){if(t==null)return{};var a=tr(t,n),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function Kt(t){return ar(t)||er(t)||rr(t)||ir()}function ar(t){if(Array.isArray(t))return Qt(t)}function er(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rr(t,n){if(t){if(typeof t=="string")return Qt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Qt(t,n)}}function Qt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(t){var n,a=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,b=t.fixedWidth,p=t.inverse,A=t.border,S=t.listItem,w=t.flip,C=t.size,k=t.rotation,O=t.pull,E=(n={"fa-beat":a,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":b,"fa-inverse":p,"fa-border":A,"fa-li":S,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},J(n,"fa-".concat(C),typeof C<"u"&&C!==null),J(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),J(n,"fa-pull-".concat(O),typeof O<"u"&&O!==null),J(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(E).map(function(P){return E[P]?P:null}).filter(function(P){return P})}function sr(t){return t=t-0,t===t}function va(t){return sr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fr=["style"];function lr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function cr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,a){var e=a.indexOf(":"),r=va(a.slice(0,e)),i=a.slice(e+1).trim();return r.startsWith("webkit")?n[lr(r)]=i:n[r]=i,n},{})}function ba(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return ba(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var l=n.attributes[c];switch(c){case"class":f.attrs.className=l,delete n.attributes.class;break;case"style":f.attrs.style=cr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[va(c)]=l}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=nr(a,fr);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[n.tag,Y(Y({},r.attrs),s)].concat(Kt(e)))}var ga=!1;try{ga=!0}catch{}function ur(){if(!ga&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Dn(t){if(t&&St(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qt.icon)return qt.icon(t);if(t===null)return null;if(t&&St(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Rt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?J({},t,n):{}}var j=Yn.forwardRef(function(t,n){var a=t.icon,e=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=Dn(a),l=Rt("classes",[].concat(Kt(or(t)),Kt(i.split(" ")))),m=Rt("transform",typeof t.transform=="string"?qt.transform(t.transform):t.transform),b=Rt("mask",Dn(e)),p=Ze(c,Y(Y(Y(Y({},l),m),b),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return ur("Could not find icon",c),null;var A=p.abstract,S={ref:n};return Object.keys(t).forEach(function(w){j.defaultProps.hasOwnProperty(w)||(S[w]=t[w])}),mr(A[0],S)});j.displayName="FontAwesomeIcon";j.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mr=ba.bind(null,Yn.createElement),dr={prefix:"fas",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"]},vr={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},br={prefix:"fas",iconName:"layer-group",icon:[576,512,[],"f5fd","M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"]},gr={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},pr={prefix:"fas",iconName:"chalkboard-user",icon:[640,512,["chalkboard-teacher"],"f51c","M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"]},hr=pr,yr={prefix:"fas",iconName:"infinity",icon:[640,512,[8734,9854],"f534","M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"]};const Ar=()=>{const{id:t}=ha(),{course:n}=xa(t),a=async()=>{try{const{data:e}=await mn.post("/auth/payment",{course:n});console.log(e),e.url&&(window.location.href=e.url)}catch(e){mn.isAxiosError(e)&&e.response&&ya(e.response.data.message||"Sorry, something went wrong!")}};return v.jsx("div",{children:v.jsxs("div",{className:"px-4 py-8",children:[v.jsx("h1",{className:"text-5xl font-bold text-center text-gray-800 mb-6",children:n==null?void 0:n.title}),v.jsx("h2",{className:"text-2xl text-center text-gray-700 mb-12",children:n==null?void 0:n.subTitle}),v.jsxs("div",{className:"flex flex-wrap -mx-2 justify-center",children:[v.jsx("div",{className:"w-full md:w-1/3 px-2 mb-6 md:mb-0",children:v.jsxs("div",{className:"bg-white rounded-lg p-8 shadow-xl",children:[v.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"Course Details"}),v.jsx("p",{className:"text-gray-700 mb-8",children:"Get all the details you need to join the course and start your journey."}),v.jsxs("div",{className:"flex items-center text-gray-800 mb-4",children:[v.jsx(j,{icon:hr,className:"mr-3 text-lg"}),v.jsxs("span",{className:"text-lg",children:["Instructor: ",n==null?void 0:n.tutorId.username]})]}),v.jsxs("div",{className:"flex items-center text-gray-800 mb-4",children:[v.jsx(j,{icon:br,className:"mr-3 text-lg"}),v.jsxs("span",{className:"text-lg",children:["Level: ",n==null?void 0:n.level]})]}),v.jsxs("div",{className:"flex items-center text-gray-800",children:[v.jsx(j,{icon:dr,className:"mr-3 text-lg"}),v.jsxs("span",{className:"text-lg",children:[" Tags:",n==null?void 0:n.tags]})]})]})}),v.jsx("div",{className:"w-full md:w-1/3 px-2 mb-6 md:mb-0",children:v.jsxs("div",{className:"bg-white rounded-lg p-8 shadow-xl",children:[v.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"Benefits"}),v.jsx("p",{className:"text-gray-700 mb-8",children:"Discover the advantages of enrolling in our kickboxing course."}),v.jsxs("ul",{className:"text-gray-800",children:[v.jsxs("li",{className:"flex items-center mb-4",children:[v.jsx(j,{icon:yr,className:"mr-3 text-lg text-blue-600"}),v.jsx("span",{className:"text-lg",children:"Lifetime access to the course"})]}),v.jsxs("li",{className:"flex items-center mb-4",children:[v.jsx(j,{icon:gr,className:"mr-3 text-lg text-blue-600"}),v.jsx("span",{className:"text-lg",children:"Downloadable course materials"})]}),v.jsxs("li",{className:"flex items-center",children:[v.jsx(j,{icon:vr,className:"mr-3 text-lg text-blue-600"}),v.jsx("span",{className:"text-lg",children:"Access to community forum"})]})]})]})}),v.jsx("div",{className:"w-full md:w-1/3 px-2",children:v.jsxs("div",{className:"bg-white rounded-lg p-8 shadow-xl",children:[v.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Payment Details"}),v.jsx("p",{className:"text-gray-700 mb-4",children:"Complete your purchase with our secure payment gateway."}),v.jsxs("div",{className:"text-gray-800 mb-4",children:[v.jsxs("div",{className:"flex justify-between mb-4",children:[v.jsx("span",{className:"text-lg",children:"Course Fees"}),v.jsxs("span",{className:"text-lg",children:["₹",n==null?void 0:n.price]})]}),v.jsxs("div",{className:"flex justify-between font-semibold",children:[v.jsx("span",{className:"text-lg",children:"Total Amount"}),v.jsxs("span",{className:"text-lg",children:["₹",n==null?void 0:n.price]})]})]}),v.jsx("button",{onClick:a,className:"bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition duration-300 ease-in-out",children:"Buy now"})]})})]})]})})};export{Ar as default};
