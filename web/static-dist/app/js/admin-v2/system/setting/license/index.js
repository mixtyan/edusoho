!function(e){function t(t){for(var r,s,o=t[0],d=t[1],c=t[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var d=n[o];0!==i[d]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={102:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=d;a.push([1006,0]),n()}({1006:function(e,t,n){"use strict";n.r(t);var r=n(41),i=n.n(r);cd.upload({el:"#license_picture"}).on("success",(function(e,t,n){var r=$(e.currentTarget),i=$(r.data("target")),a=new FormData;a.append("token",r.data("token")),a.append("file",t),s(a).then((function(e){i.attr("src",e.url),$('input[name="license_picture"]').val(e.url)}))})).on("error",(function(e){$el.val(""),"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):5006201===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})})),function(){$("#license-form"),$(".setting_permit").length;$(".setting_permit").last().find(".addSettingPermitBtn").show()}(),function(){for(var e=$(".setting_permit").length-1,t=0;t<=e;t++)d(t)}();var a=$("#license-form").validate({rules:{license_url:{url:!0}},ajax:!0,submitSuccess:function(e){console.log(e),cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),$("#save_license").button("reset")}});function s(e){return new i.a((function(t,n){$.ajax({url:app.uploadUrl,type:"POST",cache:!1,data:e,processData:!1,contentType:!1}).done((function(e){t(e)}))}))}function o(e,t){$(e[t]).on("click",(function(){$(this).hide(),$(".setting_permit").length<10?function(e,t){var n=$("#permit_area"),r=$(".setting_permit").prop("outerHTML"),i="permits["+t+"][name]",a="permits["+t+"][record_number]",s="permits["+t+"][picture]";n.append(r);var o=$(".setting_permit").last();o.find(".permit_picture_remove").hide(),o.find(".removeSettingPermitBtn").show(),o.find(".addSettingPermitBtn").show(),o.find(".permit_name").attr("name",i),o.find(".permit_record_number").attr("name",a),o.find(".permit_picture").attr("name",s),o.attr("id",(function(){return"settingPermit_"+t})),c(".permit_picture",t),c(".cd-image-upload",t),c(".removeSettingPermitBtn",t),c(".addSettingPermitBtn",t),o.find(".permit_name").attr("value",""),o.find(".permit_record_number").attr("value",""),o.find(".permit_picture").attr("value",""),o.find("img").attr("src","/assets/img/default/gif.png"),o.find(".cd-hide").attr("id","permits"+t),o.find(".cd-hide").attr("data-target","#permits-qrcode"+t),o.find(".cd-avatar-square").attr("id","permits-qrcode"+t),o.find(".image-delete-tip").attr("id","js-image-delete-"+t),d($(".setting_permit").last().attr("id").replace(/[^0-9]/gi,""))}(0,++t):cd.message({type:"danger",message:Translator.trans("admin.setting.delete_permit_setting_max_number")})}))}function d(e){var t=[],n=[],r=[];0===e&&$("#removeSettingPermitBtn_0").hide(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;cd.upload({el:"#permits"+e}).on("success",(function(t,n,r){var i=$(t.currentTarget),a=$(i.data("target")),o=new FormData;o.append("token",i.data("token")),o.append("file",n),s(o).then((function(t){a.attr("src",t.url),$('input[name="permits['+e+'][picture]"]').val(t.url),$("#js-image-delete-"+e).removeClass("hidden")}))})).on("error",(function(e){$el.val(""),"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):5006201===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})}))}(e),t[e]="#js-image-delete-"+e,n[e]="#removeSettingPermitBtn_"+e,r[e]="#addSettingPermitBtn_"+e,function(e,t){$(e[t]).on("click",(function(){var e=$(this),n=e.closest(".cd-image-upload").find(".js-uploaded-image");if(!confirm(Translator.trans("admin.site.delete_hint")))return!1;$('input[name="permits['+t+'][picture]"]').val(""),n.attr("src","/assets/img/default/gif.png"),e.addClass("hidden"),cd.message({type:"success",message:Translator.trans("admin.setting.delete_permit_picture_success_hint")})})).error((function(){cd.message({type:"danger",message:Translator.trans("admin.setting.delete_permit_picture_fail_hint")})}))}(t,e),function(e,t){$(e[t]).on("click",(function(){var e="#settingPermit_"+t;confirm(Translator.trans("admin.setting.delete_permit_setting_delete_confirom"))&&($(e).remove(),$(".setting_permit").last().find(".addSettingPermitBtn").show())}))}(n,e),o(r,e)}function c(e,t){$(".setting_permit").last().find(e).attr("id",(function(){return e=(e+"_"+t).replace(/\./,"")}))}$("#save_license").on("click",(function(e){var t=$(e.currentTarget);a.form()&&(t.button("loading"),$("#license-form").submit())})),cd.upload({el:"#license-picture"}).on("success",(function(e,t,n){var r=$(e.currentTarget),i=$(r.data("target")),a=new FormData;a.append("token",r.data("token")),a.append("file",t),s(a).then((function(e){i.attr("src",e.url),$('input[name="license_picture"]').val(e.url),$(".js-image-delete").removeClass("hidden")}))})).on("error",(function(e){$el.val(""),"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):5006201===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})})),$(".js-image-delete").on("click",(function(){if(!confirm(Translator.trans("admin.site.delete_hint")))return!1;var e=$(this);e.closest(".cd-image-upload").find(".js-uploaded-image").attr("src","/assets/img/default/gif.png"),$('[name="license_picture"]').val(""),e.addClass("hidden")}))}});