!function(t){function e(e){for(var o,a,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);for(u&&u(e);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={54:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([881,0]),n()}({29:function(t,e){t.exports=jQuery},364:function(t,e,n){var o,r,i;r=[t,n(467),n(469),n(470)],void 0===(i="function"==typeof(o=function(t,e,n,o){"use strict";var r=l(e),i=l(n),a=l(o);function l(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var h=function(t){function e(t,n){s(this,e);var o=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return d(e,t),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return p("action",t)}},{key:"defaultTarget",value:function(t){var e=p("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return p("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(i.default);function p(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=h})?o.apply(e,r):o)||(t.exports=i)},467:function(t,e,n){var o,r,i;r=[t,n(468)],void 0===(i="function"==typeof(o=function(t,e){"use strict";var n=o(e);function o(t){return t&&t.__esModule?t:{default:t}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=function(){function t(e){i(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l})?o.apply(e,r):o)||(t.exports=i)},468:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},469:function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},470:function(t,e,n){var o=n(471),r=n(472);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},471:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},472:function(t,e,n){var o=n(473);function r(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},473:function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},881:function(t,e,n){"use strict";n.r(e);var o=n(171),r=n.n(o),i=n(113),a=n.n(i),l=n(128),c=n.n(l),s=n(364),u=n.n(s),f=n(11),d=window.localStorage.getItem("upgradeNotice")?window.localStorage.getItem("upgradeNotice"):"";1==$(".js-notice").val()&&1!=d&&(window.localStorage.setItem("upgradeNotice","1"),$(".js-upgrade-notice").removeClass("hidden")),$(".js-show-toggle").on("click",(function(t){var e=$(t.currentTarget);$(".js-steps").slideToggle();var n=$(".js-toggle-text").text()===Translator.trans("site.data.collapse")?Translator.trans("site.data.expand"):Translator.trans("site.data.collapse");$(".js-toggle-text").text(n),e.find("i").toggleClass("es-icon-keyboardarrowup es-icon-keyboardarrowdown")}));var h=function(t,e,n){var o=$(e),r=t.find(".modal-dialog"),i=r.width()?r.width():$(window).width()-20,a=$(window).height(),l=e.width,c=e.height,s=0;l/c>=4/3?s=(a-(c=l>i?c/(l/i):c*(i/l)))/2:(c=a>600?600:.9*a,o.height(c),o.width("auto"),s=(a-c)/2),t.find("a").attr("href",n.urlOfImage).append(o).css({"margin-top":s}),t.modal("show")};!function(){var t=$(".js-steps");t.length&&$.get(t.data("url"),(function(e){t.html(e)}));var e=$(".js-data-overview");e.length&&$.get(e.data("url"),(function(t){e.html(t)}));var n=$(".js-quick-entrance");n.length&&$.get(n.data("url"),(function(t){n.html(t)}));var o=$(".js-admin-info");o.length&&o.data("url")&&$.get(o.data("url"),(function(t){o.html(t);var e=$(".js-mini-program").data("src");$("#js-marketing-qrcode3").attr("src","/common/qrcode?"+c.a.stringify({text:window.location.origin+"/h5/index.html"})),$(".js-copy-school_link").attr("data-clipboard-text",window.location.origin+"/h5/index.html"),new u.a(".js-copy-school_link").on("success",(function(t){Object(f.a)("success",Translator.trans("admin_v2.homepage.school_info.enter.copy_success"))})),$(".js-mini-program").popover({trigger:"hover",placement:"bottom",title:Translator.trans("admin_v2.homepage.mini_program.title"),template:'<div class="popover mini-program-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',html:!0,content:'<img src="'.concat(e,'" width="200px">')})}));var r=$(".js-announcement");r.length&&r.data("url")&&$.get(r.data("url"),(function(t){r.html(t)}))}(),setTimeout((function(){!function(){var t=$(".application-intro");t.length&&t.data("url")&&$.get(t.data("url"),(function(e){t.html(e)}));var e=$(".js-admin-advice");e.length&&e.data("url")&&$.get(e.data("url"),(function(t){e.html(t)}));var n=$(".js-admin-changelog");n.length&&n.data("url")&&$.get(n.data("url"),(function(t){n.html(t)}));var o=$(".js-admin-qrcode");o.length&&o.data("url")&&$.get(o.data("url"),(function(t){o.html(t)}))}()}),1e3),window.onload=function(){var t;t=$("#cloud-ad"),$.get(t.data("url"),(function(e){if(!e.error){var n=new Image;a.a.get("cloud-ad")!=e.image&&(n.src=e.image,n.complete?h(t,n,e):n.onload=function(){h(t,n,e),n.onload=null})}})),t.on("hide.bs.modal",(function(){a.a.set("cloud-ad",t.find("img").attr("src"),{expires:3600})})),$(".js-steps").delegate($(".task-left"),"click",(function(t){r()(t.target.classList).includes("task-left")&&($(".task-ul").animate({scrollLeft:0},400),$(".task-left").css("opacity",0),$(".task-left").hide(),$(".task-right").css("opacity",1),$(".task-right").show())})),$(".js-steps").delegate($(".task-right"),"click",(function(t){var e;r()(t.target.classList).includes("task-right")&&(e=$(".task-ul")[0].scrollWidth,$(".task-ul").animate({scrollLeft:e},400),$(".task-left").css("opacity",1),$(".task-left").show(),$(".task-right").css("opacity",0),$(".task-right").hide())}))},$(".js-no-network").click((function(){cd.message({type:"danger",message:Translator.trans("admin.can_not_link_data")})}))}});