!function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],u=0,p=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={68:0},o=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;o.push([1623,0]),a()}({1623:function(e,t,a){"use strict";a.r(t);var r=a(35),n=a.n(r),o=a(11);a(118),a(973),a(558);$(".selected-form-item-list").sortable({distance:20}),$(".selected-form-item-list").on("click",".js-item-required",(function(e){var t=$(e.currentTarget),a=$(t.data("targetLabel")),r=$(t.data("targetItem"));$(e.currentTarget).is(":checked")?(!a.hasClass("control-label-required")&&a.addClass("control-label-required"),r.data("required",!0)):(a.hasClass("control-label-required")&&a.removeClass("control-label-required"),r.data("required",!1))})),$(".js-selecte-form-items").on("click",".js-add-item-btn",(function(e){var t=$($(e.currentTarget).data("targetItem")),a=$('input[name="items"]').val()?JSON.parse($('input[name="items"]').val()):[];a.push(t.data("code")),t.insertAfter($(".selected-form-item-list").children(".list-group-item:last-child")),t.hasClass("hidden")&&t.removeClass("hidden"),t.data("selected",!0),!$(e.currentTarget).hasClass("disabled")&&$(e.currentTarget).addClass("disabled"),$('input[name="items"]').val(n()(a))})),$(".selected-form-item-list").on("click",".js-delete-item-btn",(function(e){var t=$($(e.currentTarget).data("targetItem")),a=$($(e.currentTarget).data("targetButton")),r=$('input[name="items"]').val()?JSON.parse($('input[name="items"]').val()):[];!(r.indexOf(t.data("code"))<0)&&r.splice(r.indexOf(t.data("code")),1),!t.hasClass("hidden")&&t.addClass("hidden"),t.data("selected",!1),a.hasClass("disabled")&&a.removeClass("disabled"),r.length>0?$('input[name="items"]').val(n()(r)):$('input[name="items"]').val(null)})),$.each($('input[name="action"]'),(function(e,t){$.each($('input[name="targetTypes[]"]'),(function(e,a){var r=$(t).val(),n=$(a).val();store.get("information_collect_"+r+"_"+n+"_ids",[])&&store.set("information_collect_"+r+"_"+n+"_ids",[]),store.get("information_collect_selected_"+r+"_"+n+"_ids",[])&&store.set("information_collect_selected_"+r+"_"+n+"_ids",[]),$('input[name="'+r+"_"+n+'_ids"]').val()&&(store.set("information_collect_"+r+"_"+n+"_ids",JSON.parse($('input[name="'+r+"_"+n+'_ids"]').val())),store.set("information_collect_selected_"+r+"_"+n+"_ids",JSON.parse($('input[name="'+r+"_"+n+'_ids"]').val())))}))}));var c=$("#information-collect-form"),s=c.validate({rules:{title:{required:!0,byte_maxlength:100},action:{required:!0},allowSkip:{required:!0},status:{required:!0},formTitle:{required:!0,byte_maxlength:30},selectedTargetTypes:{checkoutTargetTypes:!0},courseIds:{checkSelectedCourseIds:!0},classroomIds:{checkSelectedClassroomIds:!0},items:{required:!0}},messages:{items:{required:Translator.trans("admin_v2.information_collect.chooser.items.hint")}}});$.validator.addMethod("checkoutTargetTypes",(function(e,t){if(void 0===$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val())return!1;if("all"==$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val()&&!$("[name='action']:checked").parents(".js-action-radio").find(".target-types-all:checked").length)return!1;if("part"==$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val()&&!$("[name='action']:checked").parents(".js-action-radio").find(".target-types-part:checked").length)return!1;return!0}),$.validator.format(Translator.trans("admin_v2.information_collect.chooser.target_hint"))),$.validator.addMethod("checkSelectedCourseIds",(function(e,t){if("all"==$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val())return!0;var a=$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").parents(".action-type-group").find(".target-course:checked");return!a.length||a.length&&store.get("information_collect_selected_"+$("[name='action']:checked").val()+"_course_ids").length>0}),$.validator.format(Translator.trans("admin_v2.information_collect.chooser.target_course_hint"))),$.validator.addMethod("checkSelectedClassroomIds",(function(e,t){if("all"==$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val())return!0;var a=$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").parents(".action-type-group").find(".target-classroom:checked");return!a.length||a.length&&store.get("information_collect_selected_"+$("[name='action']:checked").val()+"_classroom_ids").length>0}),$.validator.format(Translator.trans("admin_v2.information_collect.chooser.target_classroom_hint"))),$(".js-save-btn").on("click",(function(e){s&&s.form()&&$.post(c.data("url"),function(){var e={};$.each(c.serializeArray(),(function(t,a){"targetTypes[]"!=a.name&&(e[a.name]=a.value)})),"all"==$("[name='action']:checked").parents(".js-action-radio").find(".js-location-type:checked").val()?(e.targetTypes=[$(".js-checkbox-group .action-type-group-all").find(".target-course:checked").length?"course":null,$(".js-checkbox-group .action-type-group-all").find(".target-classroom:checked").length?"classroom":null],e.courseIds=n()(["0"]),e.classroomIds=n()(["0"])):(e.targetTypes=[$(".js-checkbox-group .action-type-group-part").find(".target-course:checked").length?"course":null,$(".js-checkbox-group .action-type-group-part").find(".target-classroom:checked").length?"classroom":null],e.courseIds=store.get("information_collect_selected_"+e.action+"_course_ids"),e.classroomIds=store.get("information_collect_selected_"+e.action+"_classroom_ids"));e.items=[];var t=1;return $.each($(".list-group-item"),(function(a,r){$(r).data("selected")&&(e.items.push({code:$(r).data("code"),labelName:$(r).data("labelName"),required:$(r).data("required")?1:0,seq:t}),t++)})),e}()).success((function(t){Object(o.a)("success",Translator.trans("site.save_success_hint")),window.location.href=$(e.currentTarget).data("redirectUrl")})).fail((function(e,t,a){Object(o.a)("danger",e.responseJSON.error.message)}))})),$('input[name="action"]').length&&$('input[name="action"]').on("click",(function(e){var t=$(e.currentTarget).parents(".js-action-radio").find(".js-checkbox-group"),a=$(e.currentTarget).parents(".js-action-radio").siblings(".js-action-radio").find(".js-checkbox-group");t.hasClass("hidden")&&t.removeClass("hidden"),!a.hasClass("hidden")&&a.addClass("hidden"),"buy_after"==$(e.currentTarget).val()?($(".allow-skip-help-block").hasClass("hidden")&&$(".allow-skip-help-block").removeClass("hidden"),$('input[name="allowSkip"]').eq("0").prop("checked",!0),$('input[name="allowSkip"]').eq("1").prop("disabled",!0)):(!$(".allow-skip-help-block").hasClass("hidden")&&$(".allow-skip-help-block").addClass("hidden"),$('input[name="allowSkip"]').eq("1").removeProp("disabled"),$('input[name="allowSkip"]').eq("1").prop("checked",!0))}))},30:function(e,t){e.exports=jQuery},973:function(e,t){$(".js-checkbox-group").length&&$(".js-checkbox-group").on("click",".js-location-type",(function(e){var t=$(e.currentTarget).parent().find(".js-target-type-checkbox-group");t.hasClass("hidden")&&t.removeClass("hidden");var a=$(e.currentTarget).parents(".action-type-group").siblings(".action-type-group").find(".js-target-type-checkbox-group");a.hasClass("hidden")||a.addClass("hidden")}))}});