!function(t){function e(e){for(var n,r,i=e[0],c=e[1],d=e[2],s=0,p=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(u&&u(e);p.length;)p.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={339:0},l=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=c;l.push([1377,0]),a()}({1377:function(t,e,a){"use strict";a.r(e);var n=a(33),o=a.n(n),l=a(26),r=a.n(l),i=a(560),c=a.n(i),d={data:function(){var t=$("[name=mode]").val(),e={};return"edit"===t&&((e=JSON.parse($("[name=item]").val())).questions=c()(e.questions)),{bank_id:$("[name=bank_id]").val(),mode:t,category:JSON.parse($("[name=category]").val()),subject:e,type:$("[name=type]").val(),showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),uploadSDKInitData:{ui:"batch",multiple:!0,multitaskNum:3,fileNumLimit:3,sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:$("[name=upload_init_url]").val(),finishUrl:$("[name=upload_finish_url]").val(),accept:JSON.parse($("[name=upload_accept]").val()),fileSingleSizeLimit:$("[name=upload_size_limit]").val(),locale:document.documentElement.lang},fileId:0,isDownload:!1}},provide:function(){return{modeOrigin:"create"}},methods:{getData:function(t){var e=t.isAgain?"continue":"";(t=t.data).submission=e,t.type=$("[name=type]").val();var a=$("[name=mode]").val();$.ajax({url:"create"===a?$("[name=create_url]").val():$("[name=update_url]").val(),contentType:"application/json;charset=utf-8",type:"post",data:r()(t),beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(t){t.goto&&(window.location.href=t.goto)}))},goBack:function(){window.location.href=$("[name=back_url]").val()},deleteAttachment:function(t,e){e&&(this.fileId=t)},previewAttachment:function(t){this.fileId=t},downloadAttachment:function(t){this.fileId=t},previewAttachmentCallback:function(){var t=this,e=this;return new o.a((function(a){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:t.fileId},beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(t){t.data.sdkBaseUri=app.cloudSdkBaseUri,t.data.disableDataUpload=app.cloudDisableLogReport,t.data.disableSentry=app.cloudDisableLogReport,a(t),e.fileId=0}))}))},downloadAttachmentCallback:function(){var t=this,e=this;return new o.a((function(a){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:t.fileId},beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(t){a(t),e.fileId=0}))}))},deleteAttachmentCallback:function(){var t=this,e=this;return new o.a((function(a){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:t.fileId},beforeSend:function(t){t.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done((function(t){a(t),e.fileId=0}))}))}}},u=a(30),s=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ibs-vue",attrs:{id:"app"}},["create"===t.mode?a("item-manage",{attrs:{bank_id:t.bank_id,mode:t.mode,category:t.category,type:t.type,showCKEditorData:t.showCKEditorData,showAttachment:t.showAttachment,cdnHost:t.cdnHost,isDownload:t.isDownload,uploadSDKInitData:t.uploadSDKInitData,deleteAttachmentCallback:t.deleteAttachmentCallback,previewAttachmentCallback:t.previewAttachmentCallback,downloadAttachmentCallback:t.downloadAttachmentCallback},on:{getData:t.getData,goBack:t.goBack,deleteAttachment:t.deleteAttachment,previewAttachment:t.previewAttachment,downloadAttachment:t.downloadAttachment}}):t._e(),t._v(" "),"edit"===t.mode?a("item-manage",{attrs:{bank_id:t.bank_id,mode:t.mode,category:t.category,subject:t.subject,type:t.type,showCKEditorData:t.showCKEditorData,showAttachment:t.showAttachment,cdnHost:t.cdnHost,isDownload:t.isDownload,uploadSDKInitData:t.uploadSDKInitData,deleteAttachmentCallback:t.deleteAttachmentCallback,previewAttachmentCallback:t.previewAttachmentCallback,downloadAttachmentCallback:t.downloadAttachmentCallback},on:{getData:t.getData,goBack:t.goBack,deleteAttachment:t.deleteAttachment,previewAttachment:t.previewAttachment,downloadAttachment:t.downloadAttachment}}):t._e()],1)}),[],!1,null,null,null).exports;if(Vue.config.productionTip=!1,"en"==app.lang){var p=local.default;itemBank.default.install(Vue,{locale:p})}new Vue({render:function(t){return t(s)}}).$mount("#app")},560:function(t,e,a){t.exports=a(669)},655:function(t,e,a){var n=a(140),o=a(370),l=a(182),r=a(401).f;t.exports=function(t){return function(e){for(var a,i=l(e),c=o(i),d=c.length,u=0,s=[];d>u;)a=c[u++],n&&!r.call(i,a)||s.push(t?[a,i[a]]:i[a]);return s}}},669:function(t,e,a){a(670),t.exports=a(53).Object.values},670:function(t,e,a){var n=a(72),o=a(655)(!1);n(n.S,"Object",{values:function(t){return o(t)}})}});