!function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],f=0,p=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={345:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([1221,0]),n()}({1221:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(3),o=n.n(i),a=n(8);new(function(){function e(t){s()(this,e),this.element=t.element,this.saveBtn=t.saveBtn,this.$q1=$("[name=question-1]"),this.$q2=$("[name=question-2]"),this.$q3=$("[name=question-3]"),this.selectOptions=[],this.init()}return o()(e,[{key:"init",value:function(){this.validator(),this.initEvent()}},{key:"initEvent",value:function(){var e=this;$(this.element);this.changeOptions(),cd.select({el:".js-cd-select"}).on("beforeChange",(function(t,n){if(e.selectOptions.includes(t))throw Object(a.a)("danger",Translator.trans("user.settings.security.security_questions.type_duplicate_hint")),new Error(Translator.trans("user.settings.security.security_questions.type_duplicate_hint"))})).on("change",(function(t,n){e.changeOptions()}))}},{key:"changeOptions",value:function(){var e=this;this.selectOptions=[],[this.$q1,this.$q2,this.$q3].forEach((function(t){e.selectOptions.push(t.val())}))}},{key:"validator",value:function(){var e=this.saveBtn;$(this.element).validate({currentDom:e,ajax:!0,rules:{"answer-1":{required:!0,maxlength:20},"answer-2":{required:!0,maxlength:20},"answer-3":{required:!0,maxlength:20},userLoginPassword:"required"},submitSuccess:function(e){Object(a.a)("success",Translator.trans(e.message)),$(".modal").modal("hide"),window.location.reload()},submitError:function(e){Object(a.a)("danger",Translator.trans(e.responseJSON.message))}})}}]),e}())({element:"#settings-security-questions-form",saveBtn:"#password-save-btn"})},21:function(e,t){e.exports=jQuery}});