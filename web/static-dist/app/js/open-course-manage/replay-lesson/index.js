!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/static-dist/",t(t.s=1348)}({1348:function(e,r){$(".js-generate-replay").on("click",(function(e){var r=$(e.currentTarget),t=Translator.trans("confirm.replay_lesson.message"),n=r.data("url");t&&$.post(n,(function(e){if(e.error)10019==e.code?cd.message({type:"danger",message:Translator.trans("notify.not_record.message")}):1403==e.code?cd.message({type:"danger",message:Translator.trans("notify.no_replay_file.message")}):cd.message({type:"danger",message:Translator.trans("notify.record_error.message")});else{var r="#"+$(e).attr("id");$(r).replaceWith(e),cd.message({type:"success",message:Translator.trans("notify.lesson_recorded.message")})}}))})),$(".js-tip-show").tooltip()}});