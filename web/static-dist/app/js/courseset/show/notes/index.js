!function(t){function e(e){for(var n,l,a=e[0],c=e[1],u=e[2],f=0,p=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},o={223:0},i=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var s=c;i.push([1045,0]),r()}({1045:function(t,e,r){"use strict";r.r(e);var n=r(11),o=r.n(n);$(".js-like").on("click",(function(t){var e,r=$(t.currentTarget),n=r.find(".js-like-num"),i=o()(n.text()),l=r.hasClass("color-primary");e=l?r.data("cancelLikeUrl"):r.data("likeUrl"),$.post(e).done((function(t){l?(r.removeClass("color-primary"),n.text(i-1)):(r.addClass("color-primary"),n.text(i+1))}))})),$("#note-list .content").each((function(){$(this).find(".editor-text").height()>90&&$(this).next().show()})),$("#note-list").on("click",".js-more-show",(function(){$(this).find(".js-change-btn").toggle(),$(this).prev().toggleClass("active")}))}});