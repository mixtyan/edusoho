!function(e){function t(t){for(var n,o,u=t[0],l=t[1],d=t[2],c=0,f=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var l=r[u];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={32:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var s=l;a.push([1614,0]),r()}({1614:function(e,t,r){"use strict";r.r(t);var n=r(32),i=r.n(n),a=r(14),o=r.n(a),u=r(4),l=r.n(u),d=r(5),s=r.n(d),c=r(123),f=r(166);new(function(){function e(){l()(this,e),Object(f.c)($('[name="ext[mediaId]"]')),this.initStep2Form(),this.autoValidatorLength(),this.initFileChooser()}return s()(e,[{key:"initStep2Form",value:function(){var e=$("#step2-form");e.data("validator");e.validate({groups:{nameGroup:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer unsigned_integer",second:"required second_range unsigned_integer","ext[mediaId]":"required"},messages:{minute:{required:Translator.trans("activity.audio_manage.length_required_error_hint"),unsigned_integer:Translator.trans("activity.audio_manage.length_required_error_hint")},second:{required:Translator.trans("activity.audio_manage.length_required_error_hint"),second_range:Translator.trans("activity.audio_manage.length_required_error_hint"),unsigned_integer:Translator.trans("activity.audio_manage.length_required_error_hint")},"ext[mediaId]":Translator.trans("activity.audio_manage.media_error_hint")}})}},{key:"autoValidatorLength",value:function(){$(".js-length").blur((function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var t=0|o()($("#minute").val()),r=0|o()($("#second").val());$("#length").val(60*t+r)}}))}},{key:"initFileChooser",value:function(){var e=new c.a;console.log(e);e.on("select",(function(e){Object(f.a)();!function(e){if(0!==e.length&&void 0!==e.length){var t=$("#minute"),r=$("#second"),n=$("#length"),a=o()(e.length),u=o()(a/60),l=a%60;t.val(u),r.val(l),n.val(a),e.minute=u,e.second=l}$('[name="media"]').val(i()(e))}(e),$('[name="ext[mediaId]"]').val(e.source),$("#step2-form").valid(),"self"==e.source?($("#ext_mediaId").val(e.id),$("#ext_mediaUri").val("")):($("#ext_mediaId").val(""),$("#ext_mediaUri").val(e.uri))}))}}]),e}())},29:function(e,t){e.exports=jQuery}});