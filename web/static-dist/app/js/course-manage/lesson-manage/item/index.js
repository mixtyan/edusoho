!function(e){function s(s){for(var a,o,r=s[0],l=s[1],c=s[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(s);d.length;)d.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,s=0;s<i.length;s++){for(var t=i[s],a=!0,r=1;r<t.length;r++){var l=t[r];0!==n[l]&&(a=!1)}a&&(i.splice(s--,1),e=o(o.s=t[0]))}return e}var a={},n={189:0},i=[];function o(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)o.d(t,a,function(s){return e[s]}.bind(null,a));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var u=l;i.push([1184,0]),t()}({1184:function(e,s,t){"use strict";t.r(s);var a=t(8),n=t.n(a),i=t(5),o=t.n(i),r=t(6),l=t.n(r),c=t(16),u=t.n(c),h=t(17),d=t.n(h),m=t(12),g=t.n(m),p=t(250),f=t(378),k=t(223);function b(e){var s=function(){if("undefined"==typeof Reflect||!n.a)return!1;if(n.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=g()(e);if(s){var i=g()(this).constructor;t=n()(a,arguments,i)}else t=a.apply(this,arguments);return d()(this,t)}}new(function(e){u()(t,e);var s=b(t);function t(e){var a;return o()(this,t),(a=s.call(this,e)).closeNum=$(".js-task-manage-close-num"),a.$batchPublishBtn=$(".js-task-all-published"),a.$batchCancelPublishBtn=$(".js-task-all-unpublished"),a.$element=$(e),a.batchOperate={chosenItems:[]},a._defaultEvent(),a}return l()(t,[{key:"_defaultEvent",value:function(){this._showLesson(),this.onClickCheckbox(),this.batchPublish(),this.chooseAllItem(),this.batchAllPublish(),this.batchAllunPublish(),this.taskManageClear()}},{key:"_sortRules",value:function(e,s){return!1}},{key:"_showLesson",value:function(){this.$element.find(".js-task-manage-item").first().addClass("active").find(".js-settings-list").stop().slideDown(500),this.$element.on("click",".js-item-content",(function(e){var s=$(e.currentTarget).closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())}))}},{key:"afterAddItem",value:function(e){e.find(".js-item-content").length>0&&e.find(".js-item-content").trigger("click"),$('[data-toggle="popover"]').popover({html:!0})}},{key:"verifyExist",value:function(e,s){var t=this.batchOperate.chosenItems.findIndex((function(e){return e===s}));t>-1?this.batchOperate.chosenItems.splice(t,1):-1===t&&this.batchOperate.chosenItems.push(e.data("id"))}},{key:"judgeCheckBoxClass",value:function(e,s,t){e.hasClass("checked")&&!s.hasClass("checked")?(e.removeClass("checked"),this.verifyExist(e,t)):!e.hasClass("checked")&&s.hasClass("checked")&&(e.addClass("checked"),this.verifyExist(e,t))}},{key:"onClickCheckbox",value:function(){var e=this,s=this.$element.find(".js-task-manage-items").length,t=$(".js-chapter-all"),a=this.$element.find(".js-chapter-operation");$(".js-chapter-operation").on("click",(function(n){var i=$(n.target);if(i.hasClass("js-chapter-operation")){i.toggleClass("checked");var o=i.data().id,r=i.data("id");a.each((function(s,t){var n=$(t),o=n.data("id"),l=n.data().parentid;r===l&&0!==r&&(e.judgeCheckBoxClass(n,i,o),a.each((function(s,t){var a=$(t,o);o===a.data("parentid")&&e.judgeCheckBoxClass(a,n,a.data("id"))})))}));var l=i.hasClass("checked"),c=e.batchOperate.chosenItems.findIndex((function(e){return e===o}));c>-1&&!l?e.batchOperate.chosenItems.splice(c,1):-1===c&&l&&e.batchOperate.chosenItems.push(o),s===e.batchOperate.chosenItems.length?t.toggleClass("checked"):t.hasClass("checked")&&t.removeClass("checked"),e.closeNum[0].innerHTML=e.batchOperate.chosenItems.length,e.batchOperate.chosenItems.length>0?$(".js-task-manage-clear").removeClass("hidden"):$(".js-task-manage-clear").addClass("hidden"),e.$batchPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0)),e.$batchCancelPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0))}}))}},{key:"batchPublish",value:function(){$(".js-item-publish").on("click",(function(e){var s=$(e.target).data(),t=s.id,a=s.publishurl,n=s.status;$.post(a,{ids:t.toString().split(",")}).then((function(e){"unpublished"===n&&!0===e.success?cd.message({type:"success",message:Translator.trans("course.manage.task_publish_success_hint")}):"published"===n&&!0===e.success&&cd.message({type:"success",message:Translator.trans("course.manage.item_task_unpublish_success_hint")}),!1===e.success&&cd.message({type:"warning",message:e.message}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"chooseAllItem",value:function(){var e=this;$(".js-chapter-all").on("click",(function(s){var t=$(s.target);e.$element.find(".js-task-manage-items").each((function(s,a){var n=$(a),i=n.data().id,o=e.batchOperate.chosenItems.findIndex((function(e){return e===i}));t.hasClass("checked")||-1!==o||(e.batchOperate.chosenItems.push(i),e.closeNum[0].innerHTML=e.batchOperate.chosenItems.length),n.addClass("active")})),t.hasClass("checked")?(e.closeNum[0].innerHTML=0,e.batchOperate={chosenItems:[]},$(".js-task-manage-items .js-item-contents").removeClass("checked"),$(".js-task-manage-items .js-item-contents .js-chapter-operation").removeClass("checked")):($(".js-task-manage-items .js-item-contents").addClass("checked"),$(".js-task-manage-items .js-item-contents .js-chapter-operation").addClass("checked")),e.batchOperate.chosenItems.length>0?$(".js-task-manage-clear").removeClass("hidden"):$(".js-task-manage-clear").addClass("hidden"),e.$batchPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0)),e.$batchCancelPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0)),t.toggleClass("checked")}))}},{key:"batchAllPublish",value:function(){var e=this;$(".js-task-all-published").on("click",(function(s){var t=$('input[name="exercise_publish"]').val();console.log(e.batchOperate.chosenItems),$.post(t,{ids:e.batchOperate.chosenItems}).then((function(e){cd.message({type:"success",message:Translator.trans("course.manage.task_publish_success_hint")}),!1===e.success&&cd.message({type:"warning",message:e.message}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"batchAllunPublish",value:function(){var e=this;$(".js-task-all-unpublished").on("click",(function(s){var t=$('input[name="exercise_unpublish"]').val();$.post(t,{ids:e.batchOperate.chosenItems}).then((function(e){cd.message({type:"success",message:Translator.trans("course.manage.item_task_unpublish_success_hint")}),!1===e.success&&cd.message({type:"warning",message:e.message}),setTimeout((function(){window.location.reload()}),1e3)})).catch((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"taskManageClear",value:function(){var e=this;$(".js-task-manage-clear").on("click",(function(){$(".js-chapter-all").removeClass("checked"),$(".js-task-manage-items .js-item-contents").removeClass("checked"),$(".js-task-manage-items .js-item-contents .js-chapter-operation").removeClass("checked"),e.batchOperate={chosenItems:[]},$(".js-task-manage-clear").addClass("hidden"),e.closeNum[0].innerHTML=0,e.$batchPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0)),e.$batchCancelPublishBtn.attr("disabled",!(e.batchOperate.chosenItems.length>0))}))}}]),t}(f.a))("#sortable-list"),Object(p.b)(),Object(p.a)(),Object(k.a)()},223:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"c",(function(){return o})),t.d(s,"d",(function(){return r})),t.d(s,"a",(function(){return l}));var a=t(231),n=function(){$("body").on("click",".js-close-course",(function(e){var s=$(e.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post(s.data("checkUrl"),(function(e){e.warn?cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(e.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){i(s)})):i(s)}))}))}))},i=function(e){$.post(e.data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+e.message})}))},o=function(){$("body").on("click",".js-delete-course",(function(e){var s="course.manage.delete_hint",t=null;$.ajax({type:"post",url:$(e.currentTarget).data("check-url"),async:!1,success:function(e){"should_delete_mall_goods"===(t=e.status)&&(s="course.manage.mall_goods_exist.delete_hint",e.redirect&&(window.location.href=e.redirect)),"cannot_delete"===t&&cd.message({type:"danger",message:Translator.trans("mall.goods.exist.delete_fail_hint")})}}),"cannot_delete"!==t&&cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans(s),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post($(e.currentTarget).data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),e.redirect?window.location.href=e.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+e.message})}))}))}))},r=function(){Object(a.a)(".js-publish-course",{title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"})},l=function(){var e=$(".js-task-list-header"),s=$(".js-task-list-header__slot");if(e.length){var t=e.offset().top;$(window).scroll((function(a){$(window).scrollTop()>=t?(e.addClass("fixed"),s.removeClass("hidden")):(e.removeClass("fixed"),s.addClass("hidden"))}))}}},250:function(e,s,t){"use strict";t.d(s,"b",(function(){return a})),t.d(s,"a",(function(){return n}));var a=function(){cd.onoff({el:".js-switch"}).on("change",(function(e){var s=$(".js-switch"),t=s.data("url"),a=s.parent().hasClass("checked")?1:0,n=s.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+n),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",(function(){$.post(t,{status:a}).success((function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()})).error((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))})).on("cancel",(function(e,t){s[0].checked=!s[0].checked,s.parent().toggleClass("checked")}))}))},n=function(){$("body").on("click",".js-lesson-create-btn",(function(e){var s=$(e.currentTarget).data("url");$.get(s,{}).success((function(e){$("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})})).error((function(e){cd.message({type:"danger",message:Translator.trans(e.responseJSON.error.message)})}))}))}},26:function(e,s){e.exports=jQuery},378:function(e,s,t){"use strict";t.d(s,"a",(function(){return c}));var a=t(5),n=t.n(a),i=t(6),o=t.n(i),r=t(95),l=t(10),c=function(){function e(s){n()(this,e),this.$element=$(s),this._sort(),this._event()}return o()(e,[{key:"_event",value:function(){var e=this,s=this;this.$element.on("addItem",(function(e,t){s.addItem(t),s.sortList()})),this.$element.on("removeItem",(function(s){e.sortList()})),$("body").on("click","[data-position]",(function(e){var t=$(this);s.position=t.data("position"),s.type=t.data("type")})),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var e=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",(function(s){var t=$(s.currentTarget),a=t.closest(".task-manage-item"),n=a.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=a.nextUntil(n),o=t.hasClass("toogle-hide");t.hasClass("js-toggle-unit")?o?i.removeClass("unit-hide"):i.addClass("unit-hide"):t.hasClass("js-toggle-chapter")&&(i=i.not(".unit-hide")),(i=i.filter((function(e,s){var t="none"===$(s).css("display");return o===t}))).stop().animate({height:"toggle",opacity:"toggle"},"fast"),t.toggleClass("toogle-hide").hasClass("toogle-hide")?t.html(e[0]):t.html(e[1])}))}},{key:"addItem",value:function(e){var s=$(e),t=$("#"+s.attr("id"));if(t.length>0)return t.replaceWith(s),void this.afterAddItem(s);switch(this.type){case"chapter":var a=this.$element.find("#chapter-"+this.position),n=a.nextUntil(".js-task-manage-chapter").last();0==n.length?a.after(s):n.after(s);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(s);var i=s.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(i);break;case"lesson":var o=this.$element.find("#chapter-"+this.position),r=o.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==r.length?o.after(s):r.after(s);break;default:this.$element.append(s)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(s)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var e=this;this.$element.on("click",".js-delete",(function(s){var t=$(this),a=t.closest(".task-manage-item"),n=e._getDeleteText(t);cd.confirm({title:Translator.trans("site.delete"),content:n,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){"task"==t.data("type")&&0==a.siblings().length&&a.closest(".js-task-manage-lesson").remove();var s=a.parents(".js-lesson-container");a.remove(),e._triggerAsTaskNumUpdated(s),e.handleEmptyShow(),e._flushTaskNumber(),e._flushPublishLessonNum(),$.post(t.data("url"),(function(s){Object(l.a)("success",Translator.trans("site.delete_success_hint")),e.sortList()}))}))}))}},{key:"_getDeleteText",value:function(e){return"task"==e.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:e.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:e.data("name")})}},{key:"_sort",value:function(){var e,s=this,t=null;Object(r.a)({element:s.$element,ajax:!1,group:"nested",exclude:".drag_cancel",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(e,t){return s._sortRules(e,t)},onDragStart:function(a,n,i){var o=a.offset(),r=n.rootGroup.pointer;e={left:r.left-o.left,top:r.top-o.top},t=s.getChildrens(a),i(a,n)},onDrag:function(s,t){var a=s.height();$(".task-dragged-placeholder").css({height:a,"background-color":"#eee"}),s.css({left:t.left-e.left,top:t.top-e.top})},onDrop:function(e,a,n){n(e,a);for(var i=e;"none"===i.next().css("display");)i=i.next();i.after(e),t&&(e.after(t),t=null),s.sortList()}})}},{key:"getChildrens",value:function(e){if(!(e.find(".js-toggle-show.toogle-hide").length>0))return null;var s=null;return e.hasClass("js-task-manage-chapter")?s=e.nextUntil(".js-task-manage-chapter"):e.hasClass("js-task-manage-unit")&&(s=e.nextUntil(".js-task-manage-unit,.js-task-manage-chapter")),s&&(s=s.filter((function(e){return"none"===s.eq(e).css("display")}))),s}},{key:"_sortRules",value:function(e,s){return(!e.hasClass("js-task-manage-item")||s.target.closest(".js-task-manage-lesson").attr("id")==e.closest(".js-task-manage-lesson").attr("id"))&&(!((e.hasClass("js-task-manage-unit")||e.hasClass("js-task-manage-chapter"))&&!s.target.hasClass("sortable-list"))&&(!e.hasClass("js-task-manage-lesson")||!s.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var e=[],s=this;this.$element.find(".task-manage-item").each((function(){e.push($(this).attr("id"))})),$.post(this.$element.data("sortUrl"),{ids:e},(function(e){s.$element.data("multiClass")&&window.location.reload()})),this.sortablelist()}},{key:"setShowNum",value:function(e){0==e.attr("show-num")?e.attr("show-num",1):e.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],s=0;s<e.length;s++)this._sortNumberByClassName(e[s]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(e){var s=1;this.$element.find(e).each((function(){$(this).find(".number").text(s++)}))}},{key:"_sortUnitNumber",value:function(){var e;this.$element.find(".js-task-manage-chapter").each((function(){var s=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,s.each((function(){$(this).find(".number").text(e++)}))}))}},{key:"_publish",value:function(){var e=this,s=this,t={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",(function(a){var n=$(a.target);t.success=Translator.trans("course.manage.task_unpublish_success_hint"),t.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",e.toggleOptional(n,s,t)})),this.$element.on("click",".js-publish-item",(function(a){var n=$(a.target);t.success=Translator.trans("course.manage.task_publish_success_hint"),t.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",e.toggleOptional(n,s,t)}))}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-settings-item.active").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-settings-item.active").length,s=$(".js-lesson-unpublish-status.hidden").length,t=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:s,unpublishedNum:e-s});$(".js-lessons-publish-status").attr("data-content",t)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",(function(e){var s=$(this).data("url");$.get(s,(function(e){e.code?($("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(e.message)})})).fail((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"_optional",value:function(){var e=this,s={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",(function(t){var a=$(t.target);e.toggleOptional(a,e,s)})),this.$element.on("click",".js-unset-optional",(function(t){var a=$(t.target);e.toggleOptional(a,e,s)}))}},{key:"_initLessonTaskAction",value:function(){var e={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"},s=function(s){var t=e[s];$("#sortable-list").on("click","."+s,(function(){var e=$(this).parents(".js-lesson-container"),s=e.find(".js-task-manage-item").attr("id").split("-")[1],a=e.find("."+t),n=a.data("url").replace("%7BtaskId%7D",s);a.data("url",n),a.data("toggle")?a.click():window.open(a.data("url"),"_blank")}))};for(var t in e)s(t)}},{key:"toggleOptional",value:function(e,s,t){var a=this,n=e.closest(".task-manage-item"),i=n.find(t.class),o=n.find(t.oppositeClas),r=$("#isHideUnPublish").hasClass("checked");$.post(e.data("url"),(function(l){var c=!0;(r&&(c=s.checkShouldSetProperty(e,n)),l.success&&(i.toggleClass("hidden"),o.toggleClass("hidden")),r&&c||!r&&t.flag)&&(n.find(".display-text").toggleClass("hidden"),s.setShowNum(n),s.sortList());l.success?(a._flushPublishLessonNum(),cd.message({type:"success",message:t.success})):cd.message({type:"danger",message:t.danger+l.message})})).fail((function(e){cd.message({type:"danger",message:t.danger+e.responseJSON.error.message})}))}},{key:"checkShouldSetProperty",value:function(e,s){var t=s.find(".js-publish-item"),a=s.find(".js-set-optional"),n=t.hasClass("hidden"),i=a.hasClass("hidden"),o=!0;return e.hasClass("js-unpublish-item")||e.hasClass("js-publish-item")?i&&(o=!1):(e.hasClass("js-set-optional")||e.hasClass("js-unset-optional"))&&(n||(o=!1)),o}},{key:"afterAddItem",value:function(e){console.log("afterAddItem")}},{key:"_triggerAsTaskNumUpdated",value:function(e){var s=e.find(".js-lesson-box"),t=s.find(".js-task-manage-item").length>1;t?(s.removeClass("hidden"),e.find(".js-display-when-mul-tasks").removeClass("hidden"),e.find(".js-display-when-single-task").addClass("hidden")):(s.addClass("hidden"),e.find(".js-display-when-mul-tasks").addClass("hidden"),e.find(".js-display-when-single-task").removeClass("hidden"),e.find(".js-task-title").html(e.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(e,t)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,s){var t=e.find(".js-lesson-icon"),a="";s?a=t[0].classList:a=0==e.find(".js-lesson-box").find(".es-icon").length?[]:e.find(".js-lesson-box").find(".es-icon")[0].classList;for(var n=0;n<a.length;n++){var i=a[n];i.startsWith("es-icon-")&&(s?t.removeClass(i):t.addClass(i))}}}]),e}()}});