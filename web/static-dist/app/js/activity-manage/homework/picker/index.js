!function(e){function t(t){for(var i,a,s=t[0],c=t[1],u=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(l&&l(t);h.length;)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={39:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([1406,0]),n()}({1406:function(e,t,n){"use strict";n.r(t);var i=n(10),o=n.n(i),r=n(2),a=n.n(r),s=n(3),c=n.n(s),u=n(375),l=function(){function e(t,n){a()(this,e),this.$questionPickerBody=t,this.$questionPickerModal=this.$questionPickerBody.closest(".modal"),this.$questionAppendForm=n,this._initEvent()}return c()(e,[{key:"_initEvent",value:function(){var e=this;this.$questionPickerBody.find('[data-role="search-btn"]').on("click",(function(t){return e.searchQuestion(t)})),this.$questionPickerBody.find('[data-role="picked-item"]').on("click",(function(t){return e.pickItem(t)})),this.$questionPickerBody.find('[data-role="preview-btn"]').on("click",(function(t){return e.questionPreview(t)})),this.$questionPickerBody.find(".pagination a").on("click",(function(t){return e.pagination(t)})),$('[data-role="batch-select-save"]',window.parent.document).on("click",(function(t){return e.batchSelectSave(t)}))}},{key:"pagination",value:function(e){var t=this,n=$(e.currentTarget);return $.get(n.attr("href"),(function(e){t.$questionPickerModal.html(e)})),!1}},{key:"searchQuestion",value:function(e){var t=this;e.preventDefault();var n=$(e.currentTarget).closest("form");$.get(n.attr("action"),n.serialize(),(function(e){t.$questionPickerModal.html(e)}))}},{key:"pickItem",value:function(e){var t=$(e.currentTarget),n=o()(t.data("replace")),i=t.data("questionId"),r=[];r.push(i),t.attr("disabled",!0),this.pickItemPost(t.data("url"),r,n)}},{key:"pickItemPost",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;$.post(e,{questionIds:t},(function(e){if(i)n.$questionAppendForm.find('tr[data-id="'+i+'"]').replaceWith(e),n.$questionAppendForm.find('tr[data-parent-id="'+i+'"]').remove();else{var t=n.$questionAppendForm.find("tbody:visible");t.length<=0&&(t=n.$questionAppendForm.find("tbody")),t.append(e).removeClass("hide"),t.trigger("lengthChange")}n._refreshSeqs(),Object(u.a)(n.$questionAppendForm),n.$questionPickerModal.modal("hide"),$(".js-close-modal").trigger("click")}))}},{key:"questionPreview",value:function(e){window.open($(e.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"batchSelectSave",value:function(e){var t=$(e.currentTarget),n=[],i=t.data("url");0!=this.$questionPickerBody.find('[data-role="batch-item"]:checked').length?(this.$questionPickerBody.find('[data-role="batch-item"]:checked').each((function(e,t){var i=$(this).data("questionId");n.push(i)})),t.attr("disabled",!0),this.pickItemPost(i,n,null)):$(".js-choice-notice",window.parent.document).show()}},{key:"_refreshSeqs",value:function(){var e=1;this.$questionAppendForm.find("tbody tr").each((function(t,n){var i=$(n);i.hasClass("have-sub-questions")||(i.find("td.seq").html(e),e++)})),this.$questionAppendForm.find('[name="questionLength"]').val(e-1>0?e-1:null)}}]),e}(),d=n(175),h=n(321),f=$("#question-picker-body",window.parent.document);new l(f,$("#task-create-content-iframe").contents().find("#step2-form")),new d.a(f),new h.a($('[name="courseId"]',window.parent.document),$('[name="lessonId"]',window.parent.document))},321:function(e,t,n){"use strict";var i=n(2),o=n.n(i),r=n(3),a=n.n(r),s=function(){function e(t,n){o()(this,e),this.select1=t,this.select2=n,this._initEvent()}return a()(e,[{key:"_initEvent",value:function(){var e=this;this.select1.on("change",(function(t){return e._selectChange(t)}))}},{key:"_selectChange",value:function(e){var t=this.select1.data("url"),n=this.select1.val(),i=this;i.select2.text(""),0!=n?$.post(t,{courseId:n},(function(e){if(""!=e){var t='<option value="0">'+Translator.trans("site.choose_hint")+"</option>";$.each(e,(function(e,n){t+='<option value="'+n.id+'">'+n.title+"</option>"})),i.select2.append(t),i.select2.show()}else i.select2.hide()})):this.select2.hide()}}]),e}();t.a=s},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){var t=!1,n="",i=$("#task-create-content-iframe").contents().find(".js-subjective-remask");e.find("tbody tr").each((function(){var e=$(this).data("type");console.log(e),"essay"==e&&(t=!0)})),console.log(t),t||0==e.find("tbody tr").length?i.html(""):(console.log(i),n="homework"==i.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),i.html(n).removeClass("hidden"))}}});