!function(t){function e(e){for(var r,o,l=e[0],s=e[1],u=e[2],f=0,d=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(c&&c(e);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={303:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;i.push([1627,0]),n()}({1627:function(t,e,n){"use strict";n.r(e);var r=n(120),a=n.n(r),i=n(31),o=n.n(i),l=n(5),s=n.n(l),u=n(6),c=n.n(u),f=n(115),d=n(10),v=n(24),m=n(171);new(function(){function t(){s()(this,t),this.$form=$("#course-material-form"),this.initForm(),this.bindEvent(),this.initFileChooser()}return c()(t,[{key:"initForm",value:function(){var t=this,e=this.$form.validate({currentDom:".js-add-file-list",ajax:!0,rules:{link:"url",fileId:"required"},messages:{link:Translator.trans("activity.download_manage.link_error_hint"),fileId:Translator.trans("activity.download_manage.materials_error_hint")},submitHandler:function(t){var e=$(t),n=this.settings,r=$(n.currentDom);r.button("loading"),$.post(e.attr("action"),e.serializeArray()).done((function(t){Object(d.a)("success",Translator.trans("activity.download_manage.materials_or_link_success")),$("#material-list").append(t),r.button("reset"),e.find("#materials").val(""),e.find("#link").val(""),e.find("#verifyLink").val(""),e.find("#media").val(""),e.find("#file-summary").val(""),e.find(".js-current-file").text("")})).fail((function(){r.button("reset"),Object(d.a)("warning",Translator.trans("activity.download_manage.materials_or_link_fail"))}))}});$(".js-add-file-list").click((function(){e.form()?t.$form.submit():($("#link").val(""),$("#materials-error").remove(),Object(d.a)("danger",Translator.trans("activity.download_manage.materials_or_link_error_hint")))})),this.$form.data("validator",e)}},{key:"bindEvent",value:function(){var t=this;this.$form.on("click",".js-btn-delete",(function(e){return t.deleteItem(e)})),this.$form.on("click",".js-video-import",(function(){return t.addLink()}))}},{key:"deleteItem",value:function(t){var e=$(t.currentTarget),n=e.closest("li");confirm(Translator.trans("activity.download_manage.materials_or_link_confirm_delete"))&&$.post(e.data("url"),(function(){n.remove(),Object(d.a)("success",Translator.trans("activity.download_manage.materials_or_link_delete"))}))}},{key:"addLink",value:function(){var t=$("#verifyLink"),e=$("#link").val(),n=$("#materials");this.$form.data("validator").valid()&&e?(n.val(0),t.val(e)):($("#link").val(""),t.val(""),n.val("")),$(".js-current-file").text(t.val()),n.submit()}},{key:"initFileChooser",value:function(){(new f.a).on("select",(function(t){var e=$("#media"),n=$("#materials");e.val(o()(t)),Object(m.b)(),$(".js-current-file").text(t.name);var r=Object(v.e)(e.val())?a()(null):JSON.parse(e.val());n.val(r.id),n.submit()}))}}]),t}())},26:function(t,e){t.exports=jQuery}});