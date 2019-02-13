(window._vfP=window._vfP||[]).push([[3],{369:function(t,e,n){"use strict";n(74),n(403);var i=n(404),o=n.n(i),a=n(16),s=n.n(a).a.extend({template:o.a,data:function(){return{viewBox:"0 0 0 0",defs:"",graphics:""}},computed:{getClasses:function(){return{}},getTransform:function(){return""},getGraphics:function(){return this.graphics},hasCircle:function(){return!1}}});n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c});var r={outline:"outline",filled:"filled",none:"none",default:"none"},u=s.extend({props:{circle:{type:String,default:r.none},title:String,description:String},data:function(){return{viewBox:"0 0 100 100",iconClass:null}},computed:{getClasses:function(){return function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({"vf-icon":!0,"vf-icon-circle-outline":this.circle===r.outline,"vf-icon-circle-filled":this.circle===r.filled},"vf-icon_".concat(this.name),this.name)}}}),c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0 0 100 100",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{data:function(){return{name:t,graphics:e,viewBox:n,iconClass:i}},extends:u}}},371:function(t,e,n){"use strict";n.d(e,"d",function(){return f}),n.d(e,"b",function(){return d}),n.d(e,"c",function(){return p});n(415);var i=n(416),o=n.n(i),a=n(417),s=n.n(a),r=n(418),u=n.n(r),c=n(378),l=n(382);n.d(e,"a",function(){return l.a});var f={props:["text"],template:s.a,components:{vfButton:l.a}},d=function(t){return{props:["text","size"],template:o.a,components:{vfButton:l.a,icon:t}}},p={props:{status:String,size:String,iconSize:String,isCta:Boolean,palette:String},template:u.a,components:{vfButton:l.a,vfInlineLoader:c.b}}},378:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return f});n(4),n(9),n(81),n(36),n(39);var i=n(369),o=n(379),a=n(419),s=n.n(a),r=n(395),u=n(385),c=n(410),l={PENDING:"pending",SUCCESS:"success",ERROR:"error",NONE:"none"},f={template:s.a,props:{status:{type:String,default:""},size:{type:String,default:o.b.SMALL}},computed:{showStatus:function(){return this.status!==l.NONE&&Object.values(l).includes(this.status)},classes:function(){return"vf-icon-".concat(this.size)},iconProps:function(){switch(this.status){case l.PENDING:return{is:c.a};case l.SUCCESS:return{class:"vf-success",is:r.a};case l.ERROR:return{class:"vf-error",is:u.a,circle:i.a.outline};default:return{}}}}}},379:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o});var i={NONE:"none",INLINE:"inline",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large"},o={NONE:void 0,ACCENT:"accent",MENTION:"mention",SUCCESS:"success",DANGER:"danger"}},382:function(t,e,n){"use strict";var i=n(371),o=n(379);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={props:{palette:{default:o.a.NONE,type:String},"is-cta":{default:!1,type:Boolean},"is-round":{default:!1,type:Boolean},"is-inverted":{default:!1,type:Boolean},"is-link":{default:!1,type:Boolean},size:{default:o.b.LARGE,type:String}},computed:{classes:function(){var t;return a(t={"vf-button":!0,"is-cta":this.isCta,"is-link":this.isLink,"is-inverted":this.isInverted,"is-round":this.isRound},this.paletteClass,this.hasPalette),a(t,this.sizeClass,!0),t},hasPalette:function(){return this.palette!==o.a.NONE},paletteClass:function(){return"is-".concat(this.palette,"-color")},sizeClass:function(){return"is-size-".concat(this.size)}},components:{vfButton:i.a}},r=n(117),u=Object(r.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.classes,attrs:{type:"button"}},[this._t("default")],2)},[],!1,null,null,null);u.options.__file="vf-button.vue";e.a=u.exports},385:function(t,e,n){"use strict";n.d(e,"a",function(){return s});n(401);var i=n(402),o=n.n(i),a=n(369),s=Object(a.c)("exclamation-mark",o.a)},387:function(t,e,n){},389:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(537),o=n.n(i),a=n(369),s=(n(538),Object(a.c)("close",o.a))},395:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n(420),o=n.n(i),a=(n(421),n(369)),s=Object(a.c)("checkmark",o.a)},401:function(t,e,n){},402:function(t,e){t.exports='<g fill-rule=evenodd> <polygon points="45.6 59.835 54.4 59.835 54.4 23.6 45.6 23.6"/> <polygon points="45.6 76.4 54.4 76.4 54.4 67.6 45.6 67.6"/> </g> '},403:function(t,e,n){},404:function(t,e){t.exports="<svg :class=getClasses :viewBox=viewBox xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink version=1.1> <title v-if=title>{{ title }}</title> <desc v-if=description>{{ description }}</desc> <defs v-html=defs></defs> <g v-html=getGraphics></g> </svg> "},410:function(t,e,n){"use strict";var i={name:"VfSpinningLoader",props:{size:{type:String,default:"small"}}},o=(n(422),n(117)),a=Object(o.a)(i,function(t,e){return(0,e._c)("div",e._b({staticClass:"vf-spinning-loader vf-icon",class:"vf-icon-"+e.props.size+" "+e.data.staticClass},"div",e.data.attrs,!1))},[],!0,null,null,null);a.options.__file="spinning-loader.vue";e.a=a.exports},414:function(t,e,n){"use strict";var i;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var a={NONE:"none",MICRO:"micro",TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large"},s=(o(i={},a.NONE,""),o(i,a.MICRO,"vf-icon-micro"),o(i,a.TINY,"vf-icon-tiny"),o(i,a.SMALL,"vf-icon-small"),o(i,a.MEDIUM,"vf-icon-medium"),o(i,a.LARGE,"vf-icon-medium"),i)},415:function(t,e,n){},416:function(t,e){t.exports="<vf-button class=vf-icon-button> <icon :class=\"size || 'vf-icon-medium'\"></icon> <slot>{{ text }}</slot> </vf-button> "},417:function(t,e){t.exports="<vf-button><slot>{{ text }}</slot></vf-button> "},418:function(t,e){t.exports="<vf-button :is-cta=isCta :palette=palette :size=size class=vf-loader-button> <vf-inline-loader :status=status :size=iconSize> <slot></slot> </vf-inline-loader> </vf-button> "},419:function(t,e){t.exports='<transition name=fade-fast mode=out-in> <component v-if=showStatus class="vf-inline-loader vf-icon" :size=size :class=classes v-bind=iconProps></component> <slot v-else></slot> </transition> '},420:function(t,e){t.exports='<path fill-rule=evenodd d="M89.47 17.29L34.078 72.44 9.535 48.01a4.414 4.414 0 0 0-6.239 0 4.372 4.372 0 0 0 0 6.214l27.662 27.545a4.42 4.42 0 0 0 3.12 1.29c1.17 0 2.29-.463 3.11-1.29l58.523-58.266a4.387 4.387 0 0 0 0-6.212 4.417 4.417 0 0 0-6.24 0z"/> '},421:function(t,e,n){},422:function(t,e,n){"use strict";var i=n(387);n.n(i).a},453:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FocusTrap=void 0;var i=n(5),o=function(t){return t&&t.__esModule?t:{default:t}}(i),a={install:function(t){t.component("wv-focus-trap",o.default)}};"undefined"!=typeof window&&window.Vue&&window.Vue.component("wv-focus-trap",o.default),e.default=a,e.FocusTrap=o.default},function(t,e,n){"use strict";function i(t){t&&t.focus&&(t.focus(),"input"===t.tagName.toLowerCase()&&t.select())}var o=n(3),a=null;t.exports=function(t,e){function n(t){var e={returnFocus:t&&void 0!=t.returnFocus?t.returnFocus:g.returnFocusOnDeactivate,onDeactivate:t&&void 0!==t.onDeactivate?t.onDeactivate:g.onDeactivate};return r(),e.onDeactivate&&e.onDeactivate(),e.returnFocus&&setTimeout(function(){i(v)},0),m=!1,this}function s(){if(m)return a&&a.pause(),a=b,d(),i(function(){var t;if(!g.initialFocus){if(!(t=p[0]))throw new Error("You can't have a focus-trap without at least one focusable element");return t}if(!(t="string"==typeof g.initialFocus?document.querySelector(g.initialFocus):g.initialFocus))throw new Error("`initialFocus` refers to no known node");return t}()),document.addEventListener("focus",l,!0),document.addEventListener("click",c,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("keydown",f,!0),b}function r(){if(m&&a)return document.removeEventListener("focus",l,!0),document.removeEventListener("click",c,!0),document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u,!0),document.removeEventListener("keydown",f,!0),a=null,b}function u(t){g.clickOutsideDeactivates&&!h.contains(t.target)&&n({returnFocus:!1})}function c(t){g.clickOutsideDeactivates||h.contains(t.target)||(t.preventDefault(),t.stopImmediatePropagation())}function l(t){h.contains(t.target)||t.target===document||(t.preventDefault(),t.stopImmediatePropagation(),t.target.blur())}function f(t){"Tab"!==t.key&&9!==t.keyCode||function(t){t.preventDefault(),d();var e=p.indexOf(t.target),n=p[p.length-1],o=p[0];t.shiftKey?i(t.target===o||-1===p.indexOf(t.target)?n:p[e-1]):t.target===n?i(o):i(p[e+1])}(t),!1!==g.escapeDeactivates&&function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&n()}function d(){p=o(h)}var p=[],v=null,m=!1,h="string"==typeof t?document.querySelector(t):t,g=e||{};g.returnFocusOnDeactivate=!e||void 0==e.returnFocusOnDeactivate||e.returnFocusOnDeactivate,g.escapeDeactivates=!e||void 0==e.escapeDeactivates||e.escapeDeactivates;var b={activate:function(t){var e={onActivate:t&&void 0!==t.onActivate?t.onActivate:g.onActivate};return m=!0,v=document.activeElement,e.onActivate&&e.onActivate(),s(),b},deactivate:n,pause:r,unpause:s};return b}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{active:{type:Boolean,default:!0},paused:{type:Boolean,default:!1},initialFocus:{default:null},deactivateOnEsc:{type:Boolean,default:!0},deactivateOnOutsideClick:{type:Boolean,default:!1},returnFocusOnDeactivate:{type:Boolean,default:!0}},data:function(){return{focusTrap:null}},mounted:function(){this.initFocusTrap()},beforeDestroy:function(){this.focusTrap.deactivate()},methods:{initFocusTrap:function(){this.setFocusTrap(),this.active&&this.focusTrap.activate(),this.paused&&this.focusTrap.pause()},setFocusTrap:function(){this.$set(this,"focusTrap",(0,o.default)(this.$el,{onActivate:this.onActivate,onDeactivate:this.onDeactivate,initialFocus:this.initialFocus,escapeDeactivates:this.deactivateOnEsc,clickOutsideDeactivates:this.deactivateOnOutsideClick,returnFocusOnDeactivate:this.returnFocusOnDeactivate}))},onActivate:function(){this.$emit("activated")},onDeactivate:function(){this.$emit("deactivated")}},watch:{active:function(t,e){e&&!t?this.focusTrap.deactivate():!e&&t&&this.focusTrap.activate()},paused:function(t,e){e&&!t?this.focusTrap.unpause():!e&&t&&this.focusTrap.pause()}}}},function(t,e){t.exports=function(t,e){e=e||{};var n=t.ownerDocument||t,i=[],o=[],a=function(t){function e(i,o){if(i===t.documentElement)return!1;for(var a=0,s=n.length;a<s;a++)if(n[a][0]===i)return n[a][1];var r=!1;return"none"===(o=o||t.defaultView.getComputedStyle(i)).display?r=!0:i.parentNode&&(r=e(i.parentNode)),n.push([i,r]),r}var n=[];return function(n){if(n===t.documentElement)return!1;var i=t.defaultView.getComputedStyle(n);return!!e(n,i)||"hidden"===i.visibility}}(n),s=["input","select","a[href]","textarea","button","[tabindex]"],r=t.querySelectorAll(s.join(","));if(e.includeContainer){var u=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;s.some(function(e){return u.call(t,e)})&&(r=Array.prototype.slice.apply(r)).unshift(t)}for(var c,l,f,d=0,p=r.length;d<p;d++)c=r[d],l=parseInt(c.getAttribute("tabindex"),10),(f=isNaN(l)?c.tabIndex:l)<0||"INPUT"===c.tagName&&"hidden"===c.type||c.disabled||a(c,n)||(0===f?i.push(c):o.push({index:d,tabIndex:f,node:c}));var v=o.sort(function(t,e){return t.tabIndex===e.tabIndex?t.index-e.index:t.tabIndex-e.tabIndex}).map(function(t){return t.node});return Array.prototype.push.apply(v,i),v}},function(t,e){t.exports=" <div> <slot></slot> </div> "},function(t,e,n){var i,o,a={};i=n(2),o=n(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})}])},537:function(t,e){t.exports='<g fill-rule=evenodd> <path d="M93.898 97.891a3.458 3.458 0 0 1-2.488-1L4.188 9.594C.91 6.318 5.83 1.394 9.105 4.674l87.222 87.295c2.274 2.157.716 5.995-2.43 5.922z"/> <path d="M6.615 97.891c-3.134.061-4.704-3.765-2.43-5.922L91.41 4.674c3.274-3.28 8.194 1.644 4.917 4.92L9.102 96.89a3.41 3.41 0 0 1-2.487 1.001z"/> </g> '},538:function(t,e,n){}}]);