!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/static-dist/",t(t.s=756)}({756:function(e,n){$("html").on("shown.bs.modal","#functionModal",(function(e){$("html").css("overflow","hidden")})).on("hidden.bs.modal","#functionModal",(function(e){$("html").css("overflow","scroll")})),$(".js-quick-entrance").on("click",".js-function-choose",(function(e){var n=$(e.currentTarget);!n.hasClass("active")&&$(".js-function-choose.active").length>=8?cd.message({type:"warning",message:Translator.trans("admin_v2.homepage.quick_entrance.hint")}):n.toggleClass("active")})),$(".js-quick-entrance").on("click",".js-save-btn",(function(e){if($(".js-function-choose.active").length>8)cd.message({type:"warning",message:Translator.trans("admin_v2.homepage.quick_entrance.hint")});else{var n=$(e.target);n.button("loading");var t=[];$(".js-function-choose.active").each((function(e,n){t.push($(n).data("code"))})),$.post($("#quick-entrance-form").attr("action"),{_csrf_token:$("meta[name=csrf-token]").attr("content"),data:t},(function(e){n.button("reset"),$("#functionModal").modal("hide"),$(".js-quick-entrance").html(e)}))}}))}});