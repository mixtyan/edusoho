!function(t){function e(e){for(var r,c,u=e[0],a=e[1],f=e[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={68:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var s=a;i.push([1024,0]),n()}({1024:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(4),o=n.n(r),i=n(5),c=n.n(i),u=n(14),a=function(){function t(){o()(this,t),this.init()}return c()(t,[{key:"init",value:function(){var t=$("#audit-form");$("#certificate-audit").on("click",(function(){$.post(t.data("saveUrl"),t.serialize(),(function(t){Object(u.a)("success",Translator.trans("admin_v2.certificate.record.audit.success_hint")),window.location.reload()})).error((function(){Object(u.a)("success",Translator.trans("admin_v2.certificate.record.audit.failure_hint"))}))}));var e=$("#audit-pass"),n=$("#audit-reject"),r=$("#audit-todo"),o=$("#reject-reason");n.on("click",(function(){o.show()})),e.on("click",(function(){o.hide()})),r.on("click",(function(){o.hide()}))}}]),t}();new a},39:function(t,e){t.exports=jQuery}});