!function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={356:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([1129,0]),n()}({1129:function(t,e,n){"use strict";n.r(e);n(109);var r="WECHAT_BIND_INTRO";$(".js-unbind-btn").on("click",(function(){var t=$(this).data("url");cd.confirm({title:Translator.trans("user.settings.unbind_title"),content:Translator.trans("user.settings.unbind_content"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",(function(){$.post(t,(function(t){cd.message({type:"success",message:Translator.trans(t.message)}),setTimeout((function(){window.location.reload()}),3e3)}))}))}));var o,i,a=$("#wechat_notification_enabled").val();!store.get(r)&&"bind"!==$("#wechat_notification_enabled").data("status")&&a&&(store.set(r,!0),o='<i class="es-icon es-icon-close01"></i>',i="messageSubscribe"==$("#wechat_notification_type").val()?"wechat.notification.wechat_subscribe_bind_hover":"wechat.notification.wechat_bind_hover",introJs().setOptions({steps:[{element:".js-wechat-btn",intro:Translator.trans(i)}],skipLabel:o,doneLabel:o,showBullets:!1,tooltipPosition:"down",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:"wechat-intro-intro"}).start());var s=$("#wechat-login-qrcode");void 0!==s.data("url")&&$.get(s.data("url"),(function(t){s.attr("src",t.img)}))}});