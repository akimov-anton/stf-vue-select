webpackJsonp([1],{101:function(e,t){},104:function(e,t,s){s(101);var n=s(29)(s(54),s(107),null,null);e.exports=n.exports},105:function(e,t,s){var n=s(29)(s(55),s(108),null,null);e.exports=n.exports},107:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stf-select stf-select_sm",class:{"stf-select_has-value":null!==e.value&&void 0!==e.value,"stf-select_opened":e.isOpened,"stf-select_empty":!e.options||!e.options.length},on:{keydown:e.keyDown,keypress:e.keyPress,click:function(t){t.stopPropagation(),e.open(t)},unblur:e.onUnblur}},[s("div",{staticClass:"stf-select__container"},[s("div",{staticClass:"stf-select__inner-wrapper"},[s("div",{staticClass:"stf-select__value"},[e._t("value")],2),e._v(" "),s("div",{staticClass:"stf-select__placeholder"},[e._t("label")],2)]),e._v(" "),s("div",{staticClass:"stf-select__search-input",attrs:{tabindex:e.isOpened?-1:0},on:{focus:e.onSelectFocus}},[e._t("search-input")],2),e._v(" "),s("div",{staticClass:"stf-select__options-wraped",class:{"stf-select_opened":e.isOpened,"stf-select_empty":!e.options||!e.options.length},attrs:{"select-id":e.idSelect},on:{keydown:e.keyDown}},[e.isNeedHideOption?e._e():s("div",{staticClass:"stf-select__options stf-select-options",attrs:{role:"combobox","aria-haspopup":"true","aria-expanded":"false"},on:{mousewheel:e.onMouseWheal,scroll:e.loadMore}},[s("div",{staticClass:"stf-select__options-container"},[e._t("default")],2)])])])])},staticRenderFns:[]}},108:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"stf-select-option",attrs:{tabindex:"0"},on:{click:e.selectValue,keydown:e.keyDown}},[e._t("default")],2)},staticRenderFns:[]}},30:function(e,t,s){"use strict";var n=s(104),i=(s.n(n),s(105));s.n(i);s.d(t,"a",function(){return i}),s.d(t,"b",function(){return n})},31:function(e,t,s){"use strict";function n(e){var t=0,s=0;if(e.offsetParent){do{t+=e.offsetLeft,s+=e.offsetTop}while(e=e.offsetParent);return{left:t,top:s}}}function i(e,t){if("function"==typeof e.closest)return e.closest(t)||null;for(;e;){if(e.matches(t))return e;e=e.parentElement}return null}function o(e){for(;e;){if("fixed"===window.getComputedStyle(e,null).getPropertyValue("position"))return!0;e=e.parentElement}return!1}function l(){return console.log(navigator.userAgent),!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}function c(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function r(e,t){e.classList?e.classList.add(t):c(e,t)||(e.className+=" "+t)}t.d=n,t.e=i,t.c=o,t.a=l,t.b=r,Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),s=t.length;--s>=0&&t.item(s)!==this;);return s>-1})},32:function(e,t,s){"use strict";function n(e){this.message=e,this.name="Argument exception"}s.d(t,"a",function(){return f});var i=s(64),o=s.n(i),l=s(57),c=s.n(l),r=s(61),a=s.n(r),u=s(62),d=s.n(u),p=function(){function e(){a()(this,e),this.eventsCollection={}}return d()(e,[{key:"$emit",value:function(e,t){if(this.eventsCollection[e]&&this.eventsCollection[e][0]){var s=!0,n=!1,i=void 0;try{for(var o,l=c()(this.eventsCollection[e]);!(s=(o=l.next()).done);s=!0){var r=o.value;!function(e){setTimeout(function(){return e(t)},0)}(r)}}catch(e){n=!0,i=e}finally{try{!s&&l.return&&l.return()}finally{if(n)throw i}}}}},{key:"$on",value:function(e,t){if("function"!=typeof t)throw new n("Callback can not be "+(void 0===t?"undefined":o()(t))+" event "+e);if(this.eventsCollection[e]||(this.eventsCollection[e]=[]),-1!==this.eventsCollection[e].indexOf(this.eventsCollection[e]))throw new n("Callback can not be used twice");this.eventsCollection[e].push(t)}},{key:"$off",value:function(e,t){if("function"!=typeof t)throw new n("Callback can not be "+(void 0===t?"undefined":o()(t))+" event "+e);if(!this.eventsCollection[e])throw new n("You don't have callback on "+e+" event "+e);var s=this.eventsCollection[e].indexOf(t);this.eventsCollection[e].splice(s,1)}}]),e}(),f=new p},52:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(30);s.d(t,"StfSelectOption",function(){return n.a}),s.d(t,"StfSelect",function(){return n.b})},54:function(e,t,s){"use strict";function n(){!this.pending&&this.more&&this.__selectOptionsEl.scrollTop>.66*(this.__selectOptionsEl.scrollHeight-this.__selectOptionsEl.offsetHeight)&&this.$emit("loadMore",{})}Object.defineProperty(t,"__esModule",{value:!0});var i=s(63),o=s.n(i),l=s(32),c=s(31),r=s(102),a=s.n(r);t.default={name:"stf-select",created:function(){var e=this;this.idSelect="s"+(Date.now()*Math.random()).toString().replace(".","_"),this._optionSelectedCallback=function(t){if(t.selectId===e.idSelect){e._close(),e.$emit("input",t.value);var s=e.$el.querySelector(".stf-select__search-input");e._beforeSetValueFocus=!0,s&&s.focus(),e._beforeSetValueFocus=!1}t.selectId!==e.idSelect&&e._close()},this._onOptionMounted=function(t){t.selectId===e.idSelect&&e.options.push(t.option)},this._onOptionDestroyed=function(t){if(t.selectId===e.idSelect){var s=e.options.indexOf(t.option);-1!==s&&e.options.splice(s,1)}},this._onOpenedSelect=function(t){t.idSelect!==e.idSelect&&e._close()},l.a.$on("stf-select-option.selected",this._optionSelectedCallback),l.a.$on("stf-select-option.mounted",this._onOptionMounted),l.a.$on("stf-select-option.destroyed",this._onOptionDestroyed),l.a.$on("stf-select.opened",this._onOpenedSelect)},data:function(){return{message:"Hello Vue!",isOpened:!1,idSelect:"",isNeedHideOption:!1,hasAncesroFixed:!1,options:[]}},beforeDestroy:function(){document.body.removeChild(this.__selectOptionsWrapEl),window.removeEventListener("scroll",this._runOnScroll),window.removeEventListener("resize",this._runOnResize),window.removeEventListener("click",this._runOnWindowClick),l.a.$off("stf-select-option.selected",this._optionSelectedCallback),l.a.$off("stf-select-option.mounted",this._onOptionsMounted),l.a.$off("stf-select-option.destroyed",this._onOptionDestroyed),l.a.$off("stf-select.opened",this._onOpenedSelect)},mounted:function(){this.__selectOptionsWrapEl=this.$el.querySelector(".stf-select__options-wraped"),this.__selectOptionsEl=this.$el.querySelector(".stf-select__options"),document.body.appendChild(this.__selectOptionsWrapEl),this.__selectContainerEl=this.$el.querySelector(".stf-select__container"),this._addwidowResizeListener(),this._addOutClickListener(),this._isMob=s.i(c.a)(),this._inputEl=this.$el.querySelector("input")},methods:{keyDown:function(e){var t=this;switch(e.keyCode){case 40:this._keyArrowDown(e);break;case 38:this._keyArrowUp(e);break;case 27:this._close();var s=this.$el.querySelector(".stf-select__search-input");s&&s.focus();break;case 13:if(this.isOpened)if(this.value)this._close();else{var n=document.querySelector('.stf-select__options-wraped[select-id="'+this.idSelect+'"] .stf-select-option');n&&n.click()}else this._open();break;case 9:setTimeout(function(){return t._close()},100);break;default:this._inputEl&&(this._inputEl,document.activeElement)}},keyPress:function(e){var t=this;if(40!==e.keyCode&&38!==e.keyCode&&27!==e.keyCode&&13!==e.keyCode&&9!==e.keyCode&&this._inputEl&&this._inputEl!==document.activeElement){this.isOpened=!0,s.i(c.b)(this.$el,"stf-select_opened"),this.hasAncesroFixed=s.i(c.c)(this.$el),l.a.$emit("stf-select-option.opened",{selectId:this.idSelect}),setTimeout(function(){t._inputEl&&t._inputEl.focus()},100),this._calculatePositionAnsSize(),e=e||window.event;var n=e.which||e.keyCode,i=String.fromCharCode(n);/[\wА-Яа-яїєЇЄь]/.test(i)?this._inputEl.value=i:this._inputEl.value="";var o=new Event("input");this._inputEl.dispatchEvent(o),l.a.$emit("stf-select.opened",{idSelect:this.idSelect})}},onUnblur:function(){},onMouseWheal:function(e){(this.__selectOptionsEl.scrollTop>=this.__selectOptionsEl.scrollHeight-this.__selectOptionsEl.offsetHeight&&e.deltaY>0||0===this.__selectOptionsEl.scrollTop&&e.deltaY<0)&&e.preventDefault(),this.loadMore()},onSelectFocus:function(e){this.needFocusInpOnTab&&!this._beforeSetValueFocus&&this._open()},open:function(e){this._open(),e.preventDefault(),e.stopPropagation()},openClose:function(){this.isOpened=!this.isOpened,this.isOpened?this._open():this._close()},loadMore:a()(n,100),_calculatePositionAnsSize:function(){if(this.isOpened){this.hasAncesroFixed=s.i(c.c)(this.$el),this.__selectOptionsEl.style.position=this.hasAncesroFixed?"fixed":"absolute";var e=s.i(c.d)(this.__selectContainerEl);this.__selectOptionsEl.style.top=e.top+this.__selectContainerEl.offsetHeight+"px",this.__selectOptionsEl.style.left=e.left+"px",this.__selectOptionsEl.style.width=this.__selectContainerEl.offsetWidth+"px"}},_addwidowResizeListener:function(){var e=this;this._runOnResize=function(t){e._isMob||e._close()},window.addEventListener("resize",this._runOnResize)},_addOutClickListener:function(){var e=this;this._runOnWindowClick=function(t){e._close()},window.addEventListener("click",this._runOnWindowClick)},_open:function(){this.isOpened=!0,l.a.$emit("stf-select-option.opened",{selectId:this.idSelect}),s.i(c.b)(this.$el,"stf-select_opened");var e=this.$el.querySelector("input");if(e!==document.activeElement)if(e)e.focus(),e.select();else{var t=this.$el.querySelector(".stf-select__search-input");t&&t!==document.activeElement&&t.focus()}this._calculatePositionAnsSize(),this._inputEl=this.$el.querySelector("input"),l.a.$emit("stf-select.opened",{idSelect:this.idSelect})},_close:function(){this.isOpened=!1,this._inputEl=this.$el.querySelector("input")},_keyArrowDown:function(e){var t=this._getArrayElementForFocus(),s=this._getCurentFocuseIndex(t),n=void 0===s?0:s+1;n>=(t&&t.length)&&(n=0),setTimeout(function(){return t[n]&&t[n].focus()},100),e.stopPropagation(),e.preventDefault()},_keyArrowUp:function(e){var t=this._getArrayElementForFocus(),s=this._getCurentFocuseIndex(t),n=void 0===s?-1:s-1;n<0&&t.length&&(n=t.length-1),setTimeout(function(){return t[n]&&t[n].focus()},100),e.stopPropagation(),e.preventDefault()},_getArrayElementForFocus:function(){var e=[];return e.push.apply(e,o()(this.$el.querySelectorAll("input"))),e.push.apply(e,o()(document.querySelectorAll('[select-id="'+this.idSelect+'"] .stf-select-option'))),e},_getCurentFocuseIndex:function(e){for(var t in e)if(e[t]===document.activeElement)return+t}},props:{value:[Object,Number,String,Array,Boolean],more:Boolean,pending:Boolean,optionsWrapClass:String,needFocusInpOnTab:{type:Boolean,default:!1}}}},55:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(32),i=s(31);t.default={name:"stf-select-option",data:function(){return{selectId:"",isSelected:!1}},beforeDestroy:function(){n.a.$emit("stf-select-option.destroyed",{option:this,selectId:this.selectId})},methods:{selectValue:function(){n.a.$emit("stf-select-option.selected",{value:this.value,selectId:this.selectId}),this.isSelected=!0},keyDown:function(e){switch(e.keyCode){case 13:this.selectValue(),e.preventDefault(),e.stopPropagation()}}},mounted:function(){var e=s.i(i.e)(this.$el,".stf-select__options-wraped");e&&(this.selectId=e.getAttribute("select-id")),n.a.$emit("stf-select-option.mounted",{option:this,selectId:this.selectId})},props:["value"]}}},[52]);
//# sourceMappingURL=stf-vue-select.95a1090d5d6c54644629.js.map