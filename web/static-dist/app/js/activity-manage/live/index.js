!function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={40:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([1620,0]),n()}({1620:function(e,t,n){"use strict";n.r(t);var r=n(89),a=n.n(r),i=n(4),o=n.n(i),l=n(5),u=n.n(l),c=n(357);new(function(){function e(t){o()(this,e),this.$startTime=$("#startTime"),this._init()}return u()(e,[{key:"_init",value:function(){this.initStep2Form(),this._timePickerHide()}},{key:"initStep2Form",value:function(){jQuery.validator.addMethod("show_overlap_time_error",(function(e,t){return this.optional(t)||!$(t).data("showError")}),Translator.trans("activity.live.overlap_time_notice"));var e=$("#step2-form");this.validator2=e.validate({onkeyup:!1,rules:{title:{required:!0,maxlength:50,trim:!0,open_live_course_title:!0},startTime:{required:!0,DateAndTime:!0,after_now:!0,es_remote:{type:"post",data:{clientTime:function(){return $("[name=startTime]").val()}}}},length:{required:!0,digits:!0,max:300,min:1,show_overlap_time_error:!0},remark:{maxlength:1e3}},messages:{startTime:{es_remote:Translator.trans("validate.after_now.message")}}}),Object(c.a)($('[name="remark"]'),this.validator2),e.data("validator",this.validator2),this.dateTimePicker(this.validator2);var t=this;e.find("#startTime").change((function(){t.checkOverlapTime(e)})),e.find("#length").change((function(){t.checkOverlapTime(e)}))}},{key:"checkOverlapTime",value:function(e){if(e.find("#startTime").val()&&e.find("#length").val()){var t=1,n={startTime:e.find("#startTime").val(),length:e.find("#length").val(),mediaType:"live"};$.ajax({url:e.find("#length").data("url"),async:!1,type:"POST",data:n,dataType:"json",success:function(e){t=0===e.success}}),e.find("#length").data("showError",t)}}},{key:"dateTimePicker",value:function(e){var t=this.$startTime;t.datetimepicker({format:"yyyy-mm-dd hh:ii",language:document.documentElement.lang,autoclose:!0,endDate:new Date(a()()+31536e7)}).on("hide",(function(){e.form()})),t.datetimepicker("setStartDate",new Date)}},{key:"_timePickerHide",value:function(){var e=this.$startTime;parent.$("#modal",window.parent.document).on("afterNext",(function(){e.datetimepicker("hide")}))}}]),e}())},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){var n=CKEDITOR.replace("text-content-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#text-content-field").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#text-content-field").data("flashUploadUrl"),allowedContent:!0,height:300});return n.on("change",(function(){console.log("change"),e.val(n.getData()),t&&t.form()})),n.on("blur",(function(){console.log("blur"),e.val(n.getData()),t&&t.form()})),n}}});