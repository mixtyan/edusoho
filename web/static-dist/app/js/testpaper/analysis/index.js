!function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);d.length;)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={384:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([1153,0]),n()}({1153:function(e,t,n){"use strict";n.r(t);var r=n(80),o=n(205);Object(r.a)(),Object(r.d)(),Object(r.e)(),new o.a,$(".js-analysis").click((function(){var e=$(this);e.addClass("hidden"),e.siblings(".js-analysis.hidden").removeClass("hidden"),e.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()}))},205:function(e,t,n){"use strict";var r=n(2),o=n.n(r);t.a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("html");o()(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));n(353);var r=n(21),o=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")},s=function(){if(console.log("ok"),!Object(r.f)()){var e=$(".js-testpaper-card");if(!(e.length<=0)){var t=e.offset().top;$(window).scroll((function(){$(window).scrollTop()>=t?e.addClass("affix"):e.removeClass("affix")}))}}},a=function(){$(".js-btn-index").click((function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing")}))},i=function(){$("#showWrong").change((function(e){var t=$(e.currentTarget);$(".js-answer-notwrong").each((function(e,n){var r=$($(n).data("anchor")),o=r.closest(".js-testpaper-question-block");t.prop("checked")?(r.hide(),o.find(".js-testpaper-question:visible").length<=0&&o.hide()):(r.show(),o.show())})),o()}))},c=function(){var e=$(".js-testpaper-watermark");e.length>0&&$.get(e.data("watermark-url"),(function(t){e.each((function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:t})}))}))}}});