!function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);for(d&&d(e);h.length;)h.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={315:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([943,0]),i()}({943:function(t,e,i){"use strict";i.r(e);var s=i(27),a=i.n(s),n=i(17),r=i.n(n),o=i(2),c=i.n(o),l=i(3),d=i.n(l),u=i(175);i(466);new(function(){function t(e){c()(this,t),this.$form=e,this.$description=this.$form.find('[name="description"]'),this.$questionForm=$("#testpaper-items-manager"),this.validator=null,this.difficultySlider=null,this.scoreSlider=null,this.$scoreModal=$(".js-score-modal"),this.$modal=$("#testpaper-confirm-modal"),this.sections=[],this.questionsCount=0,this.$typeNav=this.$form.find("#testpaper-question-nav"),new u.a(this.$questionForm),this._initEvent(),this._initValidate(),this._initScoreValidator(),this._initTypeSort()}return d()(t,[{key:"_initEvent",value:function(){var t=this;this.$form.on("click",".js-request-save",(function(e){return t._confirmSave(e)})),this.$modal.on("click",".js-confirm-submit",(function(e){return t._submitSave(e)})),this.$typeNav.on("click","li",(function(e){return t._changeNav(e)})),this.$form.on("click",'[data-role="item-delete-btn"]',(function(e){return t.deleteQuestion(e)})),this.$form.on("click",'[data-role="batch-delete-btn"]',(function(e){return t.batchDelete(e)})),this.$form.on("click",'[data-role="set-score-btn"]',(function(e){return t.showScoreModal(e)})),this.$form.on("click",".js-pick-modal",(function(e){return t.showPickModal(e)})),this.$form.on("lengthChange",'[data-role="question-body"]',(function(e){return t.changeQuestionCount(e)})),this.$scoreModal.on("click",".js-batch-score-confirm",(function(e){return t.batchSetScore(e)})),$(".modal").on("selectQuestion",(function(e,i){return t.selectQuestion(e,i)})),this.initSortList()}},{key:"_confirmSave",value:function(){var t=this._validateScore();if(this.validator.form()&&t){this.questionsCount=0,this.questions=[],this.sections=[];var e=this._calTestpaperStats(),i="";$.each(e,(function(t,e){var s="<tr>";s+="<td>".concat(e.name,"</td>"),s+="<td>".concat(e.count,"</td>"),s+="<td>".concat(e.score.toFixed(1),"</td>"),i+=s+="</tr>"})),this.$modal.find(".detail-tbody").html(i),this.$modal.modal("show")}}},{key:"_calTestpaperStats",value:function(){var t={},e=this,i=1;this.$typeNav.find("li").each((function(){var s=$(this).find("a").data("type"),a=$(this).find("a").data("name"),n=1,r=[];t[s]={name:a,count:0,score:0,missScore:0},e.$questionForm.find("#testpaper-table-"+s).find(".js-item").each((function(){var i=$(this).data("type"),a={id:$(this).data("id"),seq:n++},o=[];if("material"==i)$(this).nextUntil(".js-item").each((function(){var i=e.getItemQuestion(this);o.push(i),t[s].count++,t[s].score+=i.score}));else{var c=e.getItemQuestion(this);o.push(c),t[s].score+=c.score,t[s].count++}a.questions=o,r.push(a)})),r.length>0&&e.sections.push({name:a,seq:i++,items:r})}));var s={name:Translator.trans("activity.testpaper_manage.question_total_score"),count:0,score:0};return $.each(t,(function(t,e){s.count+=e.count,s.score+=e.score})),t.total=s,e.questionsCount=s.count,t}},{key:"getItemQuestion",value:function(t){var e=r()($(t).find(".js-question-score").attr("data-score")),i={id:$(t).data("questionId"),score:e};return $(t).find(".js-miss-score").length>0&&(i.miss_score=r()($(t).find(".js-miss-score").data("missScore"))),i}},{key:"_validateScore",value:function(){var t=!0;return 0===this.$form.find(".js-question-score").length&&(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_required_error_hint")}),t=!1),this.$form.find(".js-question-score").each((function(){var e=$(this).closest("tr").data("type"),i=$(this).data("score");"0"==i&&"material"!==e&&(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_score_empty_hint")}),t=!1),/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(i)||"material"===e||(cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.question_score_error_hint")}),t=!1)})),t}},{key:"_changeNav",value:function(t){var e=$(t.currentTarget),i=e.children().data("type");this.currentType=i,this.$typeNav.find("li").removeClass("active"),e.addClass("active"),this.$form.find(".js-question-table").addClass("hide"),this.$form.find("#testpaper-table-"+i).removeClass("hide"),this.$form.find('[data-role="batch-select"]').prop("checked",!1),this.$form.find('[data-role="batch-item"]').prop("checked",!1)}},{key:"deleteQuestion",value:function(t){t.stopPropagation();var e=$(t.currentTarget),i=e.closest("tr").data("id"),s=e.closest("tbody");s.find('[data-id="'+i+'"]').remove(),e.closest("tr").remove(),s.trigger("lengthChange"),this.refreshSeqs(s.data("type"))}},{key:"batchDelete",value:function(t){var e=$(t.currentTarget).parents(".js-question-table").find("tbody"),i=this;this.$form.find('[data-role="batch-item"]:checked').each((function(){var t=$(this).val();"material"===$(this).closest("tr").data("type")&&i.$form.find('[data-parent-id="'+t+'"]').remove(),$(this).closest("tr").remove()})),e.trigger("lengthChange")}},{key:"showScoreModal",value:function(t){var e=this.$form.find('[data-role="batch-item"]:checked');if(e.length>0){var i=this,s=["choice","uncertain_choice","material"];e.each((function(){var t=i.$scoreModal.find(".js-miss-score-field");-1!==$.inArray($(this).closest("tr").data("type"),s)?t.removeClass("hidden"):t.addClass("hidden")})),this.$scoreModal.modal("show")}}},{key:"batchSetScore",value:function(t){if(this.scoreValidator.form()){var e=this.$scoreModal.find('input[name="score"]'),i=this.$scoreModal.find('input[name="missScore"]'),s={score:r()(e.val()),missScore:""==i.val()?0:r()(i.val())},a=this;this.$form.find('[data-role="batch-item"]:checked').each((function(){a.setScore($(this).parents("tr"),s)})),cd.message({type:"success",message:Translator.trans("subject.score_update_success")}),this.$scoreModal.modal("hide"),e.val(""),i.val("")}}},{key:"setScore",value:function(t,e){var i=t.find(".js-question-score");if(i.text(e.score),i.attr("data-score",e.score),t.find(".js-miss-score").length>0){var s=t.find(".js-miss-score");s.text(e.missScore),s.attr("data-miss-score",e.missScore)}}},{key:"refreshSeqs",value:function(t){var e=1,i=this.$form.find("#testpaper-table-"+t);i.find("tbody tr").each((function(t,i){var s=$(i);s.hasClass("is-sub-question")||(s.find("td.seq").html(e),e++)})),i.find('[name="questionLength"]').val(e-1>0?e-1:null)}},{key:"changeQuestionCount",value:function(t){var e=$(t.currentTarget),i=e.data("type"),s=0;s="material"===i?e.find("tr.is-sub-question").length:e.find("tr").length,$(".js-count-"+i).html("("+s+")")}},{key:"showPickModal",value:function(t){var e=[],i=$(t.currentTarget);this.$form.find('[name="itemIds[]"]').each((function(){e.push($(this).val())}));var s=$("#modal").modal();$.get(i.data("url"),{exclude_ids:e.join(",")},(function(t){s.html(t)}))}},{key:"selectQuestion",value:function(t,e){var i=this.$form.find(".js-pick-modal").data("pickUrl"),s=this;$.post(i,{typeQuestions:e},(function(t){t&&$.each(t,(function(t,e){var i=s.$questionForm.find("#testpaper-table-"+t).find(".testpaper-table-tbody");i.append(e),i.trigger("lengthChange"),s.refreshSeqs(t)}))}))}},{key:"_initEditor",value:function(t){var e=this;if(this.$description.length>0){var i=CKEDITOR.replace(this.$description.attr("id"),{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$description.data("imageUploadUrl"),height:100});i.on("change",(function(){e.$description.val(i.getData())})),i.on("blur",(function(){e.$description.val(i.getData()),t.form()}))}}},{key:"_initValidate",value:function(){this.validator=this.$form.validate({rules:{name:{required:!0,maxlength:50,trim:!0},description:{maxlength:500,trim:!0}},messages:{name:{required:Translator.trans("activity.testpaper_manage.input_title_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:50})},description:{required:Translator.trans("activity.testpaper_manage.input_description_hint"),maxlength:Translator.trans("site.maxlength_hint",{length:500})}}}),this._initEditor(this.validator)}},{key:"_initScoreValidator",value:function(){this.scoreValidator=$("#batch-set-score-form").validate({onkeyup:!1,rules:{score:{required:!0,max:999,min:0,es_score:!0},missScore:{required:!1,max:999,min:0,noMoreThan:"#score",es_score:!0}},messages:{missScore:{noMoreThan:Translator.trans("subject.miss_score_no_more_than_score")}}}),$.validator.addMethod("noMoreThan",(function(t,e,i){return""==t||r()(t)<=r()($(i).val())}),"Please enter a lesser value.")}},{key:"_submitSave",value:function(t){var e=$(t.currentTarget);if(this.questionsCount>2e3)cd.message({type:"danger",message:Translator.trans("activity.testpaper_manage.questions_length_hint")});else{e.button("loading").addClass("disabled");var i={name:this.$form.find("#name-field").val(),description:this.$form.find("#description-field").val()},s=a()(this.sections);$.post(this.$form.data("url"),{baseInfo:i,sections:s},(function(t){t.goto&&(window.location.href=t.goto)}))}}},{key:"_initTypeSort",value:function(){var t;$("#testpaper-question-nav").sortable({handle:".js-move-icon",itemSelector:".question-type-table",placeholder:'<li class="question-type-table question-type-placehoder"></li>',onDrop:function(t,e,i,s){t.removeClass("dragged").removeAttr("style"),$("body").removeClass("dragging")},onDragStart:function(e,i,s){var a=e.offset(),n=i.rootGroup.pointer;t={left:n.left-a.left,top:n.top-a.top},s(e,i)},onDrag:function(e,i){var s=e.height(),a=e.width();e.css({left:i.left-t.left,top:i.top-t.top}),$(".question-type-placehoder").css({height:s,width:a})}})}},{key:"initSortList",value:function(){var t,e=this,i=this.$form.find("tbody"),s=i.hasClass("js-homework-table")?"":"<td></td>",a='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'.concat(s,"</tr>");i.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:a,exclude:".notMoveHandle",onDragStart:function(e,i,s){e.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var a=e.offset(),n=i.rootGroup.pointer;t={left:n.left-a.left,top:n.top-a.top},s(e,i)},onDrag:function(e,i){var s=e.height();e.css({left:i.left-t.left,top:i.top-t.top}),$(".js-placehoder").css({height:s})},onDrop:function(t,i,s){if(s(t,i),t.hasClass("have-sub-questions")){var a=t.parents("tbody");a.find("tr.is-question").each((function(){var t=$(this);a.find("[data-id="+t.data("id")+"].is-sub-question").detach().insertAfter(t)}))}else $(".js-have-sub").addClass("is-question");e.refreshSeqs(t.data("type"))}})}}]),t}())($("#testpaper-form"))}});