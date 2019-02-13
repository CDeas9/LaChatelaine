(window._vfP=window._vfP||[]).push([[90],{439:function(t,e,n){},440:function(t,e,n){},451:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(74),n(488);var a=n(489),i=n.n(a),s=n(37),l=n(423),o=n(184),r=l.a.extend({template:i.a,data:function(){return{id:this.setting.id||Object(o.a)(this.setting.name)(),localValue:this.setting.hasOwnProperty("value")?!0===Boolean(this.setting.value):!0===Boolean(this.value)}},methods:{toggleSetting:function(){this.setting.isDisabled||(this.$emit("toggle",this.localValue),this.$emit("update",{key:this.setting.key,value:this.localValue}))},updateSetting:function(t){t.hasOwnProperty("value")&&this.updateValue(t.value),Object(s.a)('input[type="checkbox"]',this.$el).indeterminate=t.indeterminate||!1},updateValue:function(t){this.localValue=!0===Boolean(t)}}})},455:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(497),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"twitter",graphics:i.a,viewBox:"0 0 33 27"}}})},460:function(t,e,n){"use strict";n(4),n(9),n(24),n(74),n(397);var a={props:["tab","isSelected"],computed:{isFocusable:function(){return this.isSelected?0:-1}}},i=n(117),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"vf-flex-nav vf-nav-button vf-accent-border-colour vf-expanding-hover-light",class:this.tab.classes,attrs:{id:this.tab.buttonId,tabindex:this.isFocusable,"aria-label":this.tab.ariaLabel}},[this._t("default")],2)},[],!1,null,null,null);s.options.__file="tab-button.vue";var l=s.exports,o={props:{tabs:{type:Array,validator:function(t){return t&&t.length>0}},initialTab:String,showActive:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!1}},data:function(){return{selectedTab:this.initialTab||this.tabs&&this.tabs[0]&&this.tabs[0].name}},computed:{parentClasses:function(){return{"vf-inactive":!this.showActive}}},methods:{activateTab:function(t){this.selectedTab=t,this.focusTab(t),this.$emit("tab-to",t)},leftPressed:function(){this.activateTab(this.getNextTab(-1))},rightPressed:function(){this.activateTab(this.getNextTab(1))},getNextTab:function(t){var e=(this.getTabIndex(this.selectedTab)+t+this.tabs.length)%this.tabs.length;return this.tabs[e].name},getTabIndex:function(t){return this.tabs.findIndex(function(e){return e.name===t})},isSelectedTab:function(t){return t===this.selectedTab},tabClasses:function(t){return{"vf-active":this.isSelectedTab(t)&&this.showActive,"vf-flex-nav-grow":this.fullWidth}},focusTab:function(t){this.$refs.tabButtons[this.getTabIndex(t)].$el.focus()}},watch:{initialTab:function(){var t=this;this.tabs.some(function(e){return e.name===t.initialTab})&&(this.selectedTab=this.initialTab,this.focusTab(this.selectedTab))}},components:{tabButton:l}},r=(n(539),Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"vf-tabbed-nav vf-horiz-list",class:t.parentClasses},[t._t("left"),t._v(" "),n("ul",{staticClass:"vf-horiz-list",class:{"vf-flex-grow":t.fullWidth},attrs:{role:"tablist"}},t._l(t.tabs,function(e){return n("li",{key:e.name,staticClass:"vf-flex-nav",class:{"vf-flex-grow":t.fullWidth},attrs:{role:"tab","aria-selected":t.isSelectedTab(e.name).toString(),"aria-controls":e.panelId}},[n("tab-button",{ref:"tabButtons",refInFor:!0,class:t.tabClasses(e.name),attrs:{"is-selected":t.isSelectedTab(e.name),tab:e},nativeOn:{click:function(n){t.activateTab(e.name)},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:(e.stopPropagation(),e.preventDefault(),t.leftPressed(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?"button"in e&&2!==e.button?null:(e.stopPropagation(),e.preventDefault(),t.rightPressed(e)):null}]}},[t._t("button",null,{tab:e})],2)],1)}),0),t._v(" "),t._t("right")],2)},[],!1,null,null,null));r.options.__file="tabs.vue";var c=r.exports,u=n(184);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=Object(u.a)(),v={props:{tabs:{type:Array,validator:function(t){return t&&t.length>0}},initialTab:String,showActive:{type:Boolean,default:!0},fullWidthNav:{type:Boolean,default:!1}},data:function(){return{selectedTabName:this.initialTab||this.tabs[0].name}},beforeCreate:function(){this.uid=d()},methods:{selectTab:function(t){this.selectedTabName=t,this.$emit("tab-to",this.selectedTabName)}},computed:{computedTabs:function(){var t=this;return this.tabs.map(function(e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){f(t,e,n[e])})}return t}({},e,{panelId:"".concat(e.name,"__panel_").concat(t.uid),buttonId:"".concat(e.name,"__button_").concat(t.uid)})})}},watch:{initialTab:function(){var t=this;this.tabs.some(function(e){return e.name===t.initialTab})&&(this.selectedTabName=this.initialTab)}},components:{tabbedNav:c}},p=(n(540),Object(i.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"vf-tabbed-views"},[n("tabbed-nav",{attrs:{tabs:t.computedTabs,"initial-tab":t.selectedTabName,"show-active":t.showActive,"full-width":t.fullWidthNav},on:{"tab-to":t.selectTab},scopedSlots:t._u([{key:"button",fn:function(e){var n=e.tab;return[t._t("button",null,{tab:n})]}}])},[t._t("nav-left",null,{slot:"left"}),t._v(" "),t._t("nav-right",null,{slot:"right"})],2),t._v(" "),t._l(t.computedTabs,function(e){return n("section",{directives:[{name:"show",rawName:"v-show",value:e.name===t.selectedTabName,expression:"tab.name === selectedTabName"}],key:e.name,attrs:{id:e.panelId,"aria-labelledby":e.buttonId,role:"tabpanel"}},[t._t(e.name)],2)})],2)},[],!1,null,"16336c5c",null));p.options.__file="tabbed-view.vue";e.a=p.exports},482:function(t,e,n){},483:function(t,e){t.exports="<article class=vf-container :class=classes> <div class=vf-container__header :class=headerClasses :title=description> <div class=vf-container__title> <span class=h3>{{ title }}</span> <slot name=subtitle> <span class=h4 v-if=subtitle>{{ subtitle }}</span> </slot> </div> <vf-plus-minus-button class=vf-container__pm-button v-if=expandable :type=getType :a11y-desc=buttonA11yDescription @clicked=\"$emit('click')\"> </vf-plus-minus-button> </div> <transition name=height-collapse @enter=enter @leave=leave> <div v-show=expanded class=vf-container__content> <slot></slot> </div> </transition> </article> "},484:function(t,e,n){},485:function(t,e){t.exports="<vf-button @click.native=onClick class=vf-button--plus-minus> <vf-plus-minus-icon class=vf-icon-medium v-bind=iconProps></vf-plus-minus-icon> <span v-if=a11yDesc class=vf-offscreen-text>{{ a11yDesc }}</span> </vf-button> "},486:function(t,e,n){},487:function(t,e){t.exports="<line class=vf-icon_plus-minus__vertical x1=50 y1=80 x2=50 y2=20 /> <line class=vf-icon_plus-minus__horizontal x1=20 y1=50 x2=80 y2=50 /> "},488:function(t,e,n){},489:function(t,e){t.exports=' <label tabindex=0 class="vf-input-label vf-toggle vf-toggle-input" :for=id @click.stop.prevent=toggleSetting @keydown.space.stop.prevent=toggleSetting> <slot> <span> {{ description }} </span> </slot> <input tabindex=-1 class=vf-offscreen-text type=checkbox v-model=localValue :id=id :name=setting.name :disabled=setting.isDisabled> <div tabindex=-1 class=vf-slider></div> </label> '},492:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(74),n(548);var a=n(549),i=n.n(a),s=n(423),l=n(465),o=n(184),r=s.a.extend({template:i.a,data:function(){return{localValue:this.setting.hasOwnProperty("value")?this.setting.value:this.value,buttonProps:{class:"vf-label vf-label-upper"},id:this.setting.id||Object(o.a)(this.setting.name)()}},computed:{items:function(){return this.setting.enums||[]}},methods:{setValue:function(t){var e=t.key;this.localValue=e,this.$emit("item-selected",this.localValue),this.$emit("update",{key:this.setting.key,value:this.localValue})}},components:{vfListDropdown:l.a}})},497:function(t,e){t.exports='<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 33 27"> <path d="M33 3.36c-1.212.54-2.52.903-3.89 1.067A6.787 6.787 0 0 0 32.09.683a13.478 13.478 0 0 1-4.3 1.642A6.772 6.772 0 0 0 16.254 8.5 19.23 19.23 0 0 1 2.295 1.425a6.767 6.767 0 0 0-.914 3.403 6.756 6.756 0 0 0 3.011 5.635 6.748 6.748 0 0 1-3.069-.845v.086a6.775 6.775 0 0 0 5.432 6.638 6.93 6.93 0 0 1-3.057.116 6.777 6.777 0 0 0 6.324 4.698 13.589 13.589 0 0 1-8.407 2.898c-.548 0-1.088-.031-1.616-.094A19.171 19.171 0 0 0 10.379 27c12.454 0 19.264-10.312 19.264-19.26 0-.291-.01-.585-.02-.874A13.662 13.662 0 0 0 33 3.36" fill-rule=evenodd /> </svg> '},510:function(t,e,n){"use strict";n(482);var a,i=n(483),s=n.n(i),l=(n(484),n(485)),o=n.n(l),r=(n(74),n(486),n(487)),c=n.n(r),u=n(369);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="plus",v="minus",p=Object(u.c)("plus-minus",c.a),h=(f(a={},d,"vf-icon_plus-minus--plus"),f(a,v,"vf-icon_plus-minus--minus"),a),b={props:{type:{default:d,type:String}},extends:p,computed:{getClasses:function(){var t;return f(t={},h[this.type],!0),f(t,"vf-icon",!0),f(t,"vf-icon-circle-outline",this.circle===u.a.outline),f(t,"vf-icon-circle-filled",this.circle===u.a.filled),f(t,"vf-icon_".concat(this.name),this.name),t}}},m=n(371),g={props:{type:String,a11yDesc:String},template:o.a,computed:{iconProps:function(){return{circle:u.a.outline,type:this.type}}},methods:{onClick:function(){this.$emit("clicked")}},components:{vfButton:m.a,vfPlusMinusIcon:b}},w=(n(8),n(4),n(9),function(t,e){t.style.height=e}),x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;return function(n,a){return function(i){return function(t,e){return Promise.race([t,new Promise(function(t){return setTimeout(t,e)})])}(new Promise(function(e){return window.requestAnimationFrame(function(){var s=n(i),l=a(i);if(s!==l){w(i,s);i.addEventListener(t,function n(){i.removeEventListener(t,n),e()}),window.requestAnimationFrame(function(){return w(i,l)})}else e()})}),e).then(function(){return w(i,null)})}}},y=x("transitionend");x("animationend");n.d(e,"a",function(){return _});var _={template:s.a,props:{title:String,description:String,subtitle:String,expanded:{type:Boolean,default:!0},expandable:{type:Boolean,default:!1},reduced:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},buttonA11yDescription:String},methods:{enter:function(t,e){return y(function(){return"0px"},function(t){return"".concat(t.offsetHeight,"px")})(t).then(e)},leave:function(t,e){return y(function(t){return"".concat(t.offsetHeight,"px")},function(){return"0px"})(t).then(e)}},computed:{getType:function(){return this.expanded?v:d},classes:function(){return{"vf-container__reduced":this.reduced,"vf-container__no-border":this.noBorder}},headerClasses:function(){return{"vf-container__header--collapsed":!this.expanded}}},components:{vfPlusMinusButton:g}}},518:function(t,e,n){"use strict";n(243)("link",function(t){return function(e){return t(this,"a","href",e)}})},539:function(t,e,n){"use strict";var a=n(439);n.n(a).a},540:function(t,e,n){"use strict";var a=n(440);n.n(a).a},541:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(862),i=n.n(a),s=(n(863),n(369)),l=Object(s.c)("author",i.a)},548:function(t,e,n){},549:function(t,e){t.exports='<label role=listbox class=vf-input-label :for=id> <slot> <span class="vf-label vf-label-upper"> {{ description }} </span> </slot> <vf-list-dropdown :selection=localValue :items=items :button-properties=buttonProps @item-selected=setValue :has-scroll-bar=true></vf-list-dropdown> <input type=hidden :name=setting.name :value=localValue :id=id /> </label> '},555:function(t,e,n){"use strict";n.d(e,"a",function(){return u});n(74);var a=n(556),i=n.n(a),s=n(423),l=n(454),o=n.n(l),r=n(37),c=n(184),u=(n(557),s.a.extend({template:i.a,data:function(){return{localValue:this.setting.hasOwnProperty("value")?this.setting.value:this.value,id:this.setting.id||Object(c.a)(this.setting.name)()}},mounted:function(){var t=Object(r.a)("textarea",this.$el);this.setting.isAutosizable&&o()(t)},methods:{updateLocalValue:function(t){this.$emit("input",t),this.$emit("update",{key:this.setting.key,value:t})},onEnter:function(){this.$emit("textarea-enter-pressed",this.localValue)},updateSetting:function(t){t.hasOwnProperty("value")&&(this.localValue=t.value)},updateValue:function(t){this.localValue=t}}}))},556:function(t,e){t.exports='<label class=vf-input-label :for=id> <slot> <span class="vf-label vf-label-upper vf-input-description"> {{ description }} </span> </slot> <textarea class=vf-textarea-input v-model=localValue :id=id :name=setting.name :placeholder=setting.placeholder :disabled=setting.isDisabled @input=updateLocalValue($event.target.value) @keydown.enter=onEnter>\n    </textarea> </label> '},557:function(t,e,n){},562:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(563),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"facebook",graphics:i.a,viewBox:"0 0 18 34"}}})},563:function(t,e){t.exports='<path d="M17.322.007L13.005 0C8.155 0 5.02 3.216 5.02 8.193v3.778H.679a.679.679 0 0 0-.679.68v5.473c0 .375.304.679.679.679h4.34v13.811c0 .375.305.68.68.68h5.663a.679.679 0 0 0 .68-.68V18.803h5.075a.679.679 0 0 0 .679-.679l.002-5.474a.68.68 0 0 0-.68-.679h-5.077V8.77c0-1.54.367-2.32 2.372-2.32l2.908-.002A.679.679 0 0 0 18 5.768V.686a.68.68 0 0 0-.678-.68z" fill-rule=evenodd /> '},862:function(t,e){t.exports='<path class=vf-icon_author__bg d="M0 0h100v100H0z"/> <path class=vf-icon_author__author fill-rule=nonzero d="M88.48 92.179c-2.24-4.924-13.182-8.183-20.454-11.244-7.272-3.058-6.279-4.915-6.54-7.45a22.31 22.31 0 0 1-.092-2.295c2.125-1.724 3.96-3.82 5.09-6.668 0 0 .07-.168.09-.22.277-.721.396-2.816.607-3.586 1.666-.322 2.636-2.05 3.009-3.648.376-.648 1.155-2.243.973-4.051-.23-2.33-1.214-3.406-2.323-3.858.004-.141.004-.273.004-.402 0-.41-.007-.819-.017-1.225.314-2.153.588-4.286.588-5.501 0-1.592-.35-4.74-1.459-7.635l.02.02-1.452-3.026-.254-1.219-1.247-.344a5.164 5.164 0 0 0-.204-.171c.151-.297-1.066-1.16-.02-1.508-.449-.61-2.663-.258-2.663-.258s-.333-2.101-.87-2.385c-.28.384-1.386.268-2.293.197-3.428-.439-1.31-3.29-4.84-3.606.013-1.35-.014-2.43-.014-2.43s-1.794 1.47-2.458.892c-.402-1.353.542-3.058.542-3.058s-2.587.029-3.204 2.543c-.544-.725.086-1.844.515-2.401-3.283 1.086-4.332 3.496-5.645 5.037-.175.203-.657-.716-.594-1.283-1.28.587-2.059 3.96-2.633 4.203-.574.238-1.752-.716-1.834-1.103-1.204.084-4.042 5.75-4.042 5.75l-2.794 2.73s1.415-.104 1.484.396c.073.5-2.071 4.202-2.071 4.202s1.16-.65 1.28-.277c.118.374-.023.126-.033.19l-1.69 4.399 1.178-.442a53.188 53.188 0 0 0-.21 4.609c0 1.366.055 2.423.14 3.284-.956.528-1.76 1.608-1.965 3.686-.179 1.808.6 3.404.973 4.051.376 1.628 1.376 3.387 3.095 3.665.214.773.564 2.665.844 3.393l.056.142.027.061c1.148 2.89 2.906 4.989 5.005 6.72.01.83-.014 1.685-.09 2.439-.26 2.536.505 4.392-6.766 7.45-7.268 3.052-18.211 6.31-20.455 11.235-2.245 4.924-1.347 7.821-1.347 7.821h78.396c-.004 0 .9-2.897-1.343-7.821z"/> '},863:function(t,e,n){},893:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(894);var a=n(895),i=n.n(a),s=n(16),l=function(){return{type:String,default:function(){return""}}},o=n.n(s).a.extend({template:i.a,props:{title:l(),description:l(),columns:{type:Array,default:function(){return[]}},rows:{type:Array,default:function(){return[]}},lineNumbers:{type:Boolean,default:function(){return!1}},rowKey:l(),transitionName:l()},computed:{classes:function(){return{"vf-table-numbered":this.lineNumbers}}},methods:{getKey:function(t,e){return this.rowKey?t[this.rowKey]:e},getColSlot:function(t){return"column-".concat(t)},getRowSlot:function(t){return"row-".concat(t)}}})},894:function(t,e,n){},895:function(t,e){t.exports='<table role=table class=vf-table :class=classes :title=title :aria-label=title> <caption class=vf-offscreen-text> {{ description }} </caption> <thead class=vf-table-head> <tr class=vf-table-tr> <td v-if=lineNumbers class=vf-table-td align=middle></td> <th v-for="column in columns" scope=col role=columnheader class=vf-table-th :class=column.class :title=column.title :aria-label=column.title> <slot slot-scope=column :name=getColSlot(column.field) :data=column> {{ column.header }} </slot> </th> </tr> </thead> <transition-group tag=tbody :name=transitionName class=vf-table-body> <tr v-for="(row, index) in rows" class=vf-table-tr :key="getKey(row, index)" @click="$emit(\'row-clicked\', row)"> <td v-if=lineNumbers class="vf-table-td vf-table-linenumbers"> {{ index + 1 }} </td> <template v-for="column in columns"> <template v-if=column.isRowHeader> <th scope=row role=rowheader class=vf-table-th :class=row[column.field].class :title=row[column.field].title :aria-label=row[column.field].title> <slot slot-scope=row :name=getRowSlot(column.field) :data=row> {{ row[column.field].value }} </slot> </th> </template> <template v-else> <td class=vf-table-td :class=row[column.field].class :title=row[column.field].title :aria-label=row[column.field].title> <slot slot-scope=row :name=getRowSlot(column.field) :data=row> {{ row[column.field].value }} </slot> </td> </template> </template> </tr> </transition-group> </table> '},925:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(926),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"googleplus",graphics:i.a,viewBox:"0 0 39 28"}}})},926:function(t,e){t.exports='<path d="M28 12.444H14.933V16.8h7.972A9.336 9.336 0 0 1 14 23.333a9.333 9.333 0 1 1 6.635-15.896L23.797 4A13.953 13.953 0 0 0 14 0C6.268 0 0 6.268 0 14s6.268 14 14 14c6.773 0 12.703-4.81 14-11.2v-4.356zM39 12h-3V9h-2v3h-3v2h3v3h2v-3h3v-2z" fill-rule=evenodd /> '},927:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(928),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"linkedin",graphics:i.a,viewBox:"0 0 29 28"}}})},928:function(t,e){t.exports='<path d="M3.545 6.59c2.21 0 3.585-1.466 3.585-3.296C7.089 1.424 5.755 0 3.585 0 1.418 0 0 1.424 0 3.294 0 5.124 1.374 6.59 3.503 6.59h.042zM.51 28h6.117V9.682H.51V28zM21.76 9.176c-3.42 0-4.613 1.8-5.448 3.102V9.21h-6.117v18.318h6.159l-.042-11.215a3.06 3.06 0 0 1 6.117 0v11.215h6.117v-9.88c0-5.858-2.616-8.472-6.786-8.472z" fill-rule=evenodd /> '},929:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(930),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"microsoft",graphics:i.a,viewBox:"0 0 31 31"}}})},930:function(t,e){t.exports='<path d="M30.697 14.332V0L14 2.402v11.93h16.697zM12.126 3L0 4.745v10.017h12.126V3zM0 16v10.145l12.126 1.763V16H0zm14 12.08l16.697 2.43V16H14v12.08z" fill-rule=evenodd /> '},931:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(932),i=n.n(a),s=n(369).b.extend({data:function(){return{name:"yahoo",graphics:i.a,viewBox:"130.352 177.434 30 19.041"}}})},932:function(t,e){t.exports='<path d="M159.462 181.417c-.522.052-2.695.539-3.426.695-.782.208-7.928 5.73-8.397 7.085-.104.469-.157 1.19-.157 1.87l-.052 1.095c0 .782.217 2.042.321 2.72.47.105 3.87.014 4.496.118l-.077 1.402c-.611-.045-4.93-.034-7.396-.034-1.252 0-5.277.138-6.514.1l.234-1.333c.678-.053 3.486.121 4.103-.53.307-.324.209-.67.209-2.548v-.886c0-.417 0-1.2-.105-1.93-.26-.783-6.554-8.642-8.171-9.894-.47-.156-3.412-.45-4.142-.607l-.036-1.201c.364-.183 3.635.044 6.81-.073 2.087-.077 6.847 0 7.435.07l-.15 1.058c-.627.157-3.641.215-4.424.423 2.035 3.026 5.251 6.92 6.295 8.433.574-.834 5.616-4.303 5.772-5.503-.782-.157-3.373-.53-3.79-.53l-.248-1.366c.71-.11 4.444 0 6.3 0 1.603 0 5.027 0 6 .08l-.89 1.286"/> '}}]);