!function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={212:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;a.push([1013,0]),n()}({1013:function(t,e,n){"use strict";n.r(e);var r=new(n(105).a)({drag:{limitType:"thread",bar:"#drag-btn",target:".js-jigsaw"}}),o=$("#thread-post-form"),a=null;1==$("input[name=enable_anti_brush_captcha]").val()&&(a={captchaClass:r,isShowCaptcha:0});var i=o.find(".js-btn-thread-save"),u=o.validate({captcha:a,rules:{"post[content]":{required:!0}},submitSuccess:function(t){r.hideDrag()},submitError:function(t){r.hideDrag(),i.button("reset")}});o.on("submitHandler",(function(){r.setType("replyEdit")})),r.on("success",(function(t){"replyEdit"==t.type&&(u.settings.captcha.isShowCaptcha=0,o.find("input[name=_dragCaptchaToken]").val(t.token),o.submit())})),$(".js-btn-thread-save").click((function(t){u.form()&&($(t.currentTarget).button("loading"),o.submit())}));var c=CKEDITOR.replace("post_content",{toolbar:"Thread",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#post_content").data("imageUploadUrl"),height:300});c.on("change",(function(){$("#post_content").val(c.getData()),u.form()})),c.on("blur",(function(){$("#post_content").val(c.getData()),u.form()}))}});