!function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={279:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([1074,0]),r()}({1074:function(e,t,r){"use strict";r.r(t);var n=r(8),a=$("#course-reply-btn");$("#message-reply-form").on("click","#course-reply-btn",(function(e){return a.addClass("disabled").attr("disabled",!0),$("#message_reply_content").val().length>=500?(Object(n.a)("danger",Translator.trans("notify.private_message_maxlength.message")),a.removeClass("disabled").attr("disabled",!1),!1):0==$.trim($("#message_reply_content").val()).length?(Object(n.a)("danger",Translator.trans("validate.empty_content_hint")),a.removeClass("disabled").attr("disabled",!1),!1):($.post($("#message-reply-form").attr("action"),$("#message-reply-form").serialize()).success((function(e){$(".message-list").prepend(e.html),$("#message_reply_content").val(""),a.removeClass("disabled").attr("disabled",!1)})).error((function(e){a.removeClass("disabled").attr("disabled",!1)})),!1)})),$(".message-list").on("click",".delete-message",(function(e){if(1==$(".message-list").find(".message-me").length){if(!confirm(Translator.trans("confirm.last_private_message_delete.message")))return!1}else if(!confirm(Translator.trans("confirm.private_message_delete.message")))return!1;var t=$(this).parents(".media");$.post($(this).data("url"),(function(){1==$(".message-list").find(".message-me").length&&(window.location.href=t.attr("parent-url")),t.remove()}))})),$("textarea").bind("input propertychange",(function(){$("#message_reply_content").val().length>0?$("#course-reply-btn").removeClass("disabled"):$("#course-reply-btn").addClass("disabled")}))},22:function(e,t){e.exports=jQuery}});