!function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={183:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([1179,0]),n()}({1179:function(e,t,n){"use strict";n.r(t),new(n(511).a)({element:"#uploader-container"})},26:function(e,t){e.exports=jQuery},511:function(e,t,n){"use strict";var a=n(5),i=n.n(a),r=n(6),o=n.n(r),s=n(10),l=n(8),c=n.n(l),u=n(16),d=n.n(u),f=n(17),h=n.n(f),p=n(12),v=n.n(p),m=n(50),g=n.n(m),y=n(83),b=n.n(y);function k(e){var t=function(){if("undefined"==typeof Reflect||!c.a)return!1;if(c.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(c()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var i=v()(this).constructor;n=c()(a,arguments,i)}else n=a.apply(this,arguments);return h()(this,n)}}var _=function(e){d()(n,e);var t=k(n);function n(){return i()(this,n),t.call(this)}return o()(n,[{key:"_open",value:function(){$(".file-chooser-bar").addClass("hidden"),$(".file-chooser-main").removeClass("hidden")}},{key:"_close",value:function(){$(".file-chooser-main").addClass("hidden"),$(".file-chooser-bar").removeClass("hidden")}},{key:"_getUrlParameter",value:function(e,t){var n=e.split("?");if(n&&2==n.length)for(var a=decodeURIComponent(n[1]).split("&"),i=0;i<a.length;i++){var r=a[i].split("=");if(r[0]===t)return void 0===r[1]?null:r[1]}return null}}]),n}(b.a);function j(e){var t=function(){if("undefined"==typeof Reflect||!c.a)return!1;if(c.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(c()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var i=v()(this).constructor;n=c()(a,arguments,i)}else n=a.apply(this,arguments);return h()(this,n)}}var w=function(e){d()(n,e);var t=j(n);function n(e){var a;return i()(this,n),(a=t.call(this)).container=e,a.loadShareingContacts=!1,a._init(),a._initEvent(),a}return o()(n,[{key:"_init",value:function(){this._initTagSelect(),this._loadList()}},{key:"_initTagSelect",value:function(){var e=$(this.container).find("#materialTags");e.select2({ajax:{url:e.data("url")+"#",dataType:"json",quietMillis:100,data:function(e,t){return{q:e,page_limit:100}},results:function(e){var t=[{id:"0",name:"--选择标签--"}];return $.each(e,(function(e,n){t.push({id:n.id,name:n.name})})),{results:t}}},formatSelection:function(e){return e.name},formatResult:function(e){return e.name},width:"off",multiple:!1,locked:!0,placeholder:Translator.trans("--选择标签--"),maximumSelectionSize:100})}},{key:"_initEvent",value:function(){$(this.container).on("change","#materialType",this._switchFileSourceSelect.bind(this)),$(this.container).on("click","#materialTags",this._switchTags.bind(this)),$(this.container).on("click",".js-material-type",this._switchFileSource.bind(this)),$(this.container).on("click",".js-browser-search",this._filterByFileName.bind(this)),$(this.container).on("click",".pagination a",this._paginationList.bind(this))}},{key:"_loadList",value:function(){var e=this,t=$(".js-browser-search").data("url");$.get(t,this._getParams(),(function(t){e.container.find(".js-material-list").html(t)}))}},{key:"_getParams",value:function(){var e={};return $(".js-material-lib-search-form input[type=hidden]").each((function(t){e[$(this).attr("name")]=$(this).val()})),e}},{key:"_paginationList",value:function(e){e.stopImmediatePropagation(),e.preventDefault();var t=this._getUrlParameter($(e.currentTarget).attr("href"),"page");$("input[name=page]").val(t),this._loadList()}},{key:"_switchTags",value:function(e){var t=e.currentTarget;$("input[name=tagId]").val($(t).val()),this._loadList()}},{key:"_switchFileSourceSelect",value:function(e){var t=e.currentTarget;switch($("input[name=sourceFrom]").val($(t).val()),$("input[name=page]").val(1),$(t).val()){case"upload":$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;case"shared":this._loadSharingContacts.call(this,$(t).data("sharingContactsUrl")),$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;default:$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden")}this._loadList()}},{key:"_switchFileSource",value:function(e){var t=e.currentTarget,n=$(t).data("type");switch($(t).addClass("active").siblings().removeClass("active"),$("input[name=sourceFrom]").val(n),$("input[name=page]").val(1),n){case"my":$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;case"sharing":this._loadSharingContacts.call(this,$(t).data("sharingContactsUrl")),$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;default:$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden")}this._loadList()}},{key:"_loadSharingContacts",value:function(e){1!=this.loadShareingContacts?($.get(e,(function(e){if(g()(e).length>0){var t="<option value=''>".concat(Translator.trans("activity.manage.choose_teacher_hint"),"</option>");$.each(e,(function(e,n){t+="<option value='".concat(n.id,"'>").concat(n.nickname," </option>")})),$(".js-file-owner",self.element).html(t)}}),"json"),this.loadShareingContacts=!0):console.error("teacher list has been loaded")}},{key:"_filterByFileName",value:function(){$("input[name=keyword]").val($(".js-file-name").val()),this._loadList()}}]),n}(_);function C(e){var t=function(){if("undefined"==typeof Reflect||!c.a)return!1;if(c.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(c()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var i=v()(this).constructor;n=c()(a,arguments,i)}else n=a.apply(this,arguments);return h()(this,n)}}var S=function(e){d()(n,e);var t=C(n);function n(e){var a;return i()(this,n),(a=t.call(this)).container=e,a._init(),a._initEvent(),a}return o()(n,[{key:"_init",value:function(){this._loadList()}},{key:"_initEvent",value:function(){$(this.container).on("click",".pagination a",this._paginationList.bind(this)),$(this.container).on("click",".js-course-browser-search",this._filterByFileName.bind(this))}},{key:"_loadList",value:function(){var e=$(".course-file-browser"),t=e.data("url");$.get(t,this._getParams(),(function(t){e.html(t)}))}},{key:"_getParams",value:function(){var e={};return $(".js-course-file-search-form").find("input[type=hidden]").each((function(){e[$(this).attr("name")]=$(this).val()})),e}},{key:"_paginationList",value:function(e){e.stopImmediatePropagation(),e.preventDefault();var t=this._getUrlParameter($(e.currentTarget).attr("href"),"page");$(".js-course-file-search-form").find("input[name=page]").val(t),this._loadList()}},{key:"_filterByFileName",value:function(){$(".js-course-file-search-form").find("input[name=keyword]").val($(".js-course-file-name").val()),$(".js-course-file-search-form").find("input[name=page]").val(1),this._loadList()}}]),n}(_);function L(e){var t=function(){if("undefined"==typeof Reflect||!c.a)return!1;if(c.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(c()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var i=v()(this).constructor;n=c()(a,arguments,i)}else n=a.apply(this,arguments);return h()(this,n)}}var T=function(e){d()(n,e);var t=L(n);function n(e){var a;return i()(this,n),(a=t.call(this)).init(),a}return o()(n,[{key:"init",value:function(){this.initTab(),this.initFileChooser()}},{key:"initTab",value:function(){$("#material a").click((function(e){e.preventDefault();var t=$(this);t.find('[type="radio"]').prop("checked","checked"),$(".js-batch-create-content").find("[data-role=batch-item],[data-role=batch-select]").prop("checked",!1),t.closest("li").siblings("li").find('[type="radio"]').prop("checked",!1),t.tab("show")}))}},{key:"initFileChooser",value:function(){new w($("#chooser-material-panel")),new S($("#chooser-course-panel"))}},{key:"fileSelect",value:function(e){this.fillTitle(e),this.emit("select",e)}},{key:"fillTitle",value:function(e){var t=$("#title");if(t.length>0&&""==t.val()){var n=e.name.substring(0,e.name.lastIndexOf("."));t.val(n)}}}],[{key:"openUI",value:function(){$(".file-chooser-bar").addClass("hidden"),$(".file-chooser-main").removeClass("hidden")}},{key:"closeUI",value:function(){$(".file-chooser-main").addClass("hidden"),$(".file-chooser-bar").removeClass("hidden")}}]),n}(b.a),U=function(){function e(t){i()(this,e),this.element=$(t.element),this.uploader=null,this.files=[],this.$sortable=$("#sortable-list"),this.fileIds=[],this.init()}return o()(e,[{key:"init",value:function(){this.initUploader(),this.initEvent();new T}},{key:"initUploader",value:function(){var e=this,t=this.element;this.uploader=new UploaderSDK({id:t.attr("id"),sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),accept:t.data("accept"),process:this.getUploadProcess(),ui:"batch",multitaskNum:void 0!==t.data("multitaskNum")?t.data("multitaskNum"):null,fileNumLimit:void 0!==t.data("numLimit")?t.data("numLimit"):null,locale:document.documentElement.lang}),this.uploader.on("file.finish",(function(t){e.files.push(t),e.fileIds.push(t.fileId)})),this.uploader.on("error",(function(e){var t={F_DUPLICATE:Translator.trans("uploader.file.exist")};e.message||(e.message=t[e.error]),Object(s.a)("danger",e.message)}))}},{key:"initEvent",value:function(){var e=this,t=this;$(".js-upload-params").on("change",(function(t){e.uploader.setProcess(e.getUploadProcess())})),$(".js-batch-create-lesson-btn").on("click",(function(n){var a=$(".js-batch-create-content").find('input[data-role="batch-item"]:checked').length;if(!e.files.length&&a<1)Object(s.a)("danger",Translator.trans("uploader.select_one_file"));else{var i=$(n.currentTarget);if(i.button("loading"),e.validLessonNum(i)){$(".js-batch-create-content").find('input[data-role="batch-item"]:checked').map((function(t,n,a){var i=$(n).parents(".file-browser-item").data("id");e.fileIds.push(i)}));var r=e.validLessonType(i,e.fileIds);if(r.status)a>0?(console.log("files",a),t.submitSelectFile(i,a)):t.submitUploaderFile(i);else{for(var o=0;o<r.invalidFileIds.length;o++)$(".active").find("#material-table-tr-"+r.invalidFileIds[o]).css("color","red");Object(s.a)("danger",Translator.trans("uploader.file.unsupported.type"))}}else console.log(e.validLessonNum(i))}})),$('[data-toggle="popover"]').popover({html:!0}),$(".js-batch-create-content").on("click","[data-role=batch-select]",(function(){1==$(this).is(":checked")?$(this).parents(".js-table-list").find("[data-role=batch-item]").prop("checked",!0):$(this).parents(".js-table-list").find("[data-role=batch-item]").prop("checked",!1)})),$(".js-batch-create-content").on("click","[data-role=batch-item]",(function(){1!=$(this).is(":checked")&&$(".js-batch-create-content").find("[data-role=batch-select]").prop("checked",!1)}))}},{key:"submitSelectFile",value:function(e,t){var n=this;$(".js-batch-create-content").find('input[data-role="batch-item"]:checked').map((function(a,i,r){var o=!1;a+1==t&&(o=!0,console.log("isLast",o));var s=$(i).parents(".file-browser-item").data("id");console.log("fileId",s),n.createLesson(e,s,o)}))}},{key:"submitUploaderFile",value:function(e){var t=this;console.log("files",this.files),this.files.map((function(n,a){var i=!1;a+1==t.files.length&&(i=!0),console.log("file",n),t.createLesson(e,n.fileId,i)}))}},{key:"getUploadProcess",value:function(){var e={video:$(".js-upload-params").get().reduce((function(e,t){return e[$(t).attr("name")]=$(t).find("option:selected").val(),e}),{}),document:{type:"html"}};return $("[name=support_mobile]").length>0&&(e.common={supportMobile:$("[name=support_mobile]").val()}),e}},{key:"validLessonNum",value:function(e){var t=!0;return $.ajax({type:"post",url:e.data("validUrl"),async:!1,data:{number:this.files.length},success:function(n){n&&n.error&&(Object(s.a)("danger",n.error),e.button("reset"),t=!1),t=!0}}),t}},{key:"validLessonType",value:function(e,t){return $.ajax({type:"post",url:e.data("typeUrl"),dataType:"json",async:!1,data:{fileIds:t},success:function(t){e.button("reset"),self.response=t}}),this.fileIds=[],self.response}},{key:"createLesson",value:function(e,t,n){var a=this;$.ajax({type:"post",url:e.data("url"),async:!1,data:{fileId:t},success:function(e){e&&e.error?Object(s.a)("danger",e.error):a.$sortable.trigger("addItem",e)},error:function(e){console.log("error",e),Object(s.a)("danger",Translator.trans("uploader.status.error"))},complete:function(e){console.log("complete",e),n&&$("#modal").modal("hide")}})}}]),e}();t.a=U}});