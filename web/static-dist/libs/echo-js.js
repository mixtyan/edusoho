/*! For license information please see echo-js.js.LICENSE.txt */
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static-dist/",n(n.s=521)}({521:function(t,e,n){t.exports=n(522)},522:function(t,e){(function(){(function(){(function(){(function(){(function(){(function(){(function(){(function(){var t,e;e=function(t){"use strict";var e,n,o,r,c,u={},i=function(){},l=function(t,e){if(function(t){return null===t.offsetParent}(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},a=function(){!r&&n||(clearTimeout(n),n=setTimeout((function(){u.render(),n=null}),o))};return u.init=function(n){var l=(n=n||{}).offset||0,d=n.offsetVertical||l,f=n.offsetHorizontal||l,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,d),b:s(n.offsetBottom,d),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=!1!==n.debounce,c=!!n.unload,i=n.callback||i,u.render(),document.addEventListener?(t.addEventListener("scroll",a,!1),t.addEventListener("load",a,!1)):(t.attachEvent("onscroll",a),t.attachEvent("onload",a))},u.render=function(){for(var n,o,r=document.querySelectorAll("img[data-echo], [data-echo-background]"),a=r.length,d={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},f=0;f<a;f++)o=r[f],l(o,d)?(c&&o.setAttribute("data-echo-placeholder",o.src),null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+o.getAttribute("data-echo-background")+")":o.src=o.getAttribute("data-echo"),c||(o.removeAttribute("data-echo"),o.removeAttribute("data-echo-background")),i(o,"load")):c&&(n=o.getAttribute("data-echo-placeholder"))&&(null!==o.getAttribute("data-echo-background")?o.style.backgroundImage="url("+n+")":o.src=n,o.removeAttribute("data-echo-placeholder"),i(o,"unload"));a||u.detach()},u.detach=function(){document.removeEventListener?t.removeEventListener("scroll",a):t.detachEvent("onscroll",a),clearTimeout(n)},u},(t=this).echo=e(t)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}).call(window)}});