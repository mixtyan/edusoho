!function(e){function t(t){for(var n,o,s=t[0],l=t[1],d=t[2],c=0,v=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);v.length;)v.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={44:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;r.push([1625,0]),i()}({1625:function(e,t,i){"use strict";i.r(t);var n=i(32),a=i.n(n),r=i(14),o=i.n(r),s=i(4),l=i.n(s),d=i(5),u=i.n(d),c=i(123),v=i(461);new(function(){function e(){l()(this,e),this.showChooseContent(),this.initStep2form(),this.isInitStep3from(),this.autoValidatorLength(),this.initfileChooser(),this.hideSubtitleWidget()}return u()(e,[{key:"hideSubtitleWidget",value:function(){var e=$("#video-subtitle-form-group");$('[role="presentation"] a[href!="#import-video-panel"]').click((function(){e.show()})),$('a[href="#import-video-panel"]').click((function(){e.hide()}))}},{key:"showChooseContent",value:function(){$("#iframe-content").on("click",".js-choose-trigger",(function(e){c.a.openUI(),$('[name="ext[mediaSource]"]').val(null)}))}},{key:"displayFinishCondition",value:function(e){console.log(e),"self"===e?($("#finish-condition option[value=end]").removeAttr("disabled"),$("#finish-condition option[value=end]").text(Translator.trans("activity.video_manage.finish_detail"))):($("#finish-condition option[value=end]").text(Translator.trans("activity.video_manage.other_finish_detail")),$("#finish-condition option[value=end]").attr("disabled","disabled"),$("#finish-condition option[value=time]").attr("selected",!1),$("#finish-condition option[value=time]").attr("selected",!0),$(".viewLength").removeClass("hidden"),this.initStep3from())}},{key:"initStep2form",value:function(){var e=$("#step2-form"),t=e.data("validator");e.validate({groups:{date:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer",second:"required second_range","ext[mediaSource]":"required","ext[finishDetail]":"unsigned_integer"},messages:{minute:{required:Translator.trans("activity.video_manage.length_required_error_hint")},second:{required:Translator.trans("activity.video_manage.length_required_error_hint"),second_range:Translator.trans("activity.video_manage.length_required_error_hint")},"ext[mediaSource]":Translator.trans("activity.video_manage.media_error_hint")}}),e.data("validator",t)}},{key:"initStep3from",value:function(){var e=$("#step3-form"),t=e.data("validator");e.validate({rules:{"ext[finishDetail]":{required:!0,positive_integer:!0,max:300,min:1}},messages:{"ext[finishDetail]":{required:Translator.trans("activity.video_manage.length_required_error_hint")}}}),e.data("validator",t)}},{key:"autoValidatorLength",value:function(){$(".js-length").blur((function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var t=0|o()($("#minute").val()),i=0|o()($("#second").val());$("#length").val(60*t+i)}}))}},{key:"isInitStep3from",value:function(){var e=this;"time"===$("#finish-condition").children("option:selected").val()&&($(".viewLength").removeClass("hidden"),this.initStep3from()),$("#finish-condition").on("change",(function(t){"time"==t.target.value?($(".viewLength").removeClass("hidden"),e.initStep3from()):($(".viewLength").addClass("hidden"),$('input[name="ext[finishDetail]"]').rules("remove"))}))}},{key:"initfileChooser",value:function(){var e=this,t=new c.a,i=new v.a(".js-subtitle-list");t.on("select",(function(t){e.displayFinishCondition(t.source),c.a.closeUI();!function(e){if(0!==e.length&&void 0!==e.length){var t=$("#minute"),i=$("#second"),n=$("#length"),r=o()(e.length),s=o()(r/60),l=r%60;t.val(s),i.val(l),n.val(r),e.minute=s,e.second=l}$('[name="media"]').val(a()(e))}(t),$('[name="ext[mediaSource]"]').val(t.source),$("#step2-form").valid(),"self"==t.source?($("#ext_mediaId").val(t.id),$("#ext_mediaUri").val("")):($("#ext_mediaUri").val(t.uri),$("#ext_mediaId").val(0)),i.render(t)}))}}]),e}())},29:function(e,t){e.exports=jQuery},461:function(e,t,i){"use strict";var n=i(4),a=i.n(n),r=i(5),o=i.n(r),s=i(10),l=function(){function e(t){a()(this,e),this.element=$(t),this.upload_id="subtitle-uploader",this.inited=!1,this.element.length>0&&(this.init(),this.inited=!0);var i=this.element.closest("#video-subtitle-form-group");i.find("#ext_mediaId_for_subtitle").val()>0&&this.render({id:i.find("#ext_mediaId_for_subtitle").val()})}return o()(e,[{key:"init",value:function(){var e=this;this.element.on("click",".js-subtitle-delete",(function(){var t=$(this);$.post(t.data("subtitleDeleteUrl"),(function(i){i&&(Object(s.a)("success",Translator.trans("activity.video_manage.delete_success_hint")),t.parent().remove(),$("#"+e.upload_id).show())}))}))}},{key:"render",value:function(e){if(this.inited&&e&&"id"in e&&e.id>0){this.media=e,this.element.html(Translator.trans("activity.video_manage.subtitle_load_hint"));var t=this;$.get(this.element.data("dialogUrl"),{mediaId:this.media.id},(function(e){t.element.html(e),t.initUploader()}))}}},{key:"initUploader",value:function(){var e=this,t=$("#"+this.upload_id),i=$(".js-subtitle-dialog").data("mediaId"),n=t.data("mediaGlobalId");this.uploader&&this._destroyUploader();var a=new UploaderSDK({sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),id:this.upload_id,ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{common:{videoNo:n}},locale:document.documentElement.lang});a.on("error",(function(e){"Q_TYPE_DENIED"===e.error&&Object(s.a)("danger",Translator.trans("activity.video_manage.subtitle_upload_error_hint"))})),a.on("file.finish",(function(n){$.post(t.data("subtitleCreateUrl"),{name:n.name,subtitleId:n.fileId,mediaId:i}).success((function(t){var n={waiting:Translator.trans("activity.video_manage.convert_status_waiting"),doing:Translator.trans("activity.video_manage.convert_status_doing"),success:Translator.trans("activity.video_manage.convert_status_success"),error:Translator.trans("activity.video_manage.convert_status_error"),none:Translator.trans("activity.video_manage.convert_status_none")};$(".js-media-subtitle-list").append('<li class="pvs mtm"><span class="subtitle-name prl pull-left">'+t.name+'</span><span class="subtitle-transcode-status '+t.convertStatus+'">'+n[t.convertStatus]+'</span><a href="javascript:;" class="btn-link pll color-primary js-subtitle-delete" data-subtitle-delete-url="/media/'+i+"/subtitle/"+t.id+'/delete">'+Translator.trans("activity.video_manage.subtitle_delete_hint")+"</a></li>"),$(".js-media-subtitle-list li").length>3&&$("#"+e.upload_id).hide(),Object(s.a)("success",Translator.trans("activity.video_manage.subtitle_upload_success_hint"))})).error((function(e){Object(s.a)("danger",e.responseJSON.error.message)}))})),this.uploader=a}},{key:"show",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.removeClass("hide")}},{key:"hide",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.addClass("hide")}},{key:"_destroyUploader",value:function(){if(this.uploader){this.uploader.__events=null;try{this.uploader.destroy()}catch(e){}this.uploader=null}}},{key:"destroy",value:function(){this.inited&&this._destroyUploader()}}]),e}();t.a=l}});