!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=1286)}({1286:function(e,t,r){"use strict";r.r(t);var n=r(242),a=$("#third-party-login-form"),i=$(".js-submit-btn"),o={mobile:{rules:{account:{required:!0,phone:!0}},messages:{required:Translator.trans("validate.phone.message")}},email:{rules:{account:{required:!0,maxlength:32,email:!0}},messages:{required:Translator.trans("validate.valid_email_input.message")}},email_or_mobile:{rules:{account:{required:!0,maxlength:32,email_or_mobile_check:!0}},messages:{required:Translator.trans("validate.phone_and_email_input.message")}}},u=$(".js-third-party-type").data("type"),s=a.validate(o[u]);Object(n.a)(a,i),i.click((function(e){if(s.form()){$(e.target).button("loading");var t=(r=$("input[name=account]").val(),/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(r)?"email":"mobile");$("#accountType").val(t),$.post(i.data("tryBindUrl"),a.serialize(),(function(e){e.success?a.submit():(i.button("reset"),s.showErrors({account:e.message}))}))}var r}))},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){e.keypress((function(e){13==e.which&&(t.trigger("click"),e.preventDefault())}))}}});