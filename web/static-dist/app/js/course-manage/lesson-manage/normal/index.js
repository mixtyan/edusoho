!function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={183:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([1261,0]),s()}({1261:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s.n(a),i=s(2),o=s.n(i),r=s(3),l=s.n(r),c=s(12),u=s.n(c),h=s(13),d=s.n(h),f=s(9),p=s.n(f),m=s(203),g=(s(105),function(){function e(){o()(this,e),this._defaultEvent()}return l()(e,[{key:"_defaultEvent",value:function(){void 0===store.get("NormalLessonIntro")&&(this.showAdImage(),store.set("NormalLessonIntro","1")),this.closeModal()}},{key:"closeModal",value:function(){$("#js-intro").on("click",(function(e){$("#js-intro").modal("hide")}))}},{key:"showAdImage",value:function(){var e=$("#js-intro"),t=new Image,s=$(".js-data-local").data("local");t.src="en"===s?"/assets/img/lessonintro/lessonintro-en.jpg":"/assets/img/lessonintro/lessonintro.jpg";var a=$(t);e.find(".modal-body").append(a),e.modal("show")}}]),e}()),b=s(324),v=s(428),k=s(180);function j(e){var t=function(){if("undefined"==typeof Reflect||!n.a)return!1;if(n.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,a=p()(e);if(t){var i=p()(this).constructor;s=n()(a,arguments,i)}else s=a.apply(this,arguments);return d()(this,s)}}new(function(e){u()(s,e);var t=j(s);function s(e){var a;return o()(this,s),a=t.call(this,e),new g,a}return l()(s,[{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-task-manage-item:not(.drag)").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-task-manage-item:not(.drag)").length,t=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:t,unpublishedNum:e-t});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_triggerAsTaskNumUpdated",value:function(e){var t=e.find(".js-lesson-box"),s=t.find(".js-task-manage-item").length>1;s?t.removeClass("hidden"):t.addClass("hidden"),this._triggerLessonIconAsTaskNumUpdated(e,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,t){}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter"],t=0;t<e.length;t++)this._sortNumberByClassName(e[t]);this._sortUnitNumber(),this._sortTaskNumber()}},{key:"_sortTaskNumber",value:function(){var e;this.$element.find(".js-lesson-box").each((function(){var t=$(this).find(".js-task-manage-item");e=0,t.each((function(){$(this).find(".number").text(e++)}))}))}}]),s}(b.a))("#sortable-list"),new v.a(".js-lesson-manage"),Object(m.b)(),Object(m.a)(),Object(k.a)()},180:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return o})),s.d(t,"d",(function(){return r})),s.d(t,"a",(function(){return l}));var a=s(188),n=function(){$("body").on("click",".js-close-course",(function(e){var t=$(e.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post(t.data("checkUrl"),(function(e){e.warn?cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(e.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){i(t)})):i(t)}))}))}))},i=function(e){$.post(e.data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+e.message})}))},o=function(){$("body").on("click",".js-delete-course",(function(e){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post($(e.currentTarget).data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),e.redirect?window.location.href=e.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+e.message})}))}))}))},r=function(){Object(a.a)(".js-publish-course",{title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"})},l=function(){var e=$(".js-task-list-header"),t=$(".js-task-list-header__slot");if(e.length){var s=e.offset().top;$(window).scroll((function(a){$(window).scrollTop()>=s?(e.addClass("fixed"),t.removeClass("hidden")):(e.removeClass("fixed"),t.addClass("hidden"))}))}}},203:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));var a=function(){cd.onoff({el:".js-switch"}).on("change",(function(e){var t=$(".js-switch"),s=t.data("url"),a=t.parent().hasClass("checked")?1:0,n=t.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+n),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",(function(){$.post(s,{status:a}).success((function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()})).error((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))})).on("cancel",(function(e,s){t[0].checked=!t[0].checked,t.parent().toggleClass("checked")}))}))},n=function(){$("body").on("click",".js-lesson-create-btn",(function(e){var t=$(e.currentTarget).data("url");$.get(t,{}).success((function(e){$("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})})).error((function(e){cd.message({type:"danger",message:Translator.trans(e.responseJSON.error.message)})}))}))}},22:function(e,t){e.exports=jQuery},324:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(2),n=s.n(a),i=s(3),o=s.n(i),r=s(67),l=s(8),c=function(){function e(t){n()(this,e),this.$element=$(t),this._sort(),this._event()}return o()(e,[{key:"_event",value:function(){var e=this;this.$element.on("addItem",(function(t,s){e.addItem(s),e.sortList()})),$("body").on("click","[data-position]",(function(t){var s=$(this);e.position=s.data("position"),e.type=s.data("type")})),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var e=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",(function(t){var s=$(t.currentTarget),a=s.closest(".task-manage-item"),n=a.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=a.nextUntil(n),o=s.hasClass("toogle-hide");s.hasClass("js-toggle-unit")?o?i.removeClass("unit-hide"):i.addClass("unit-hide"):s.hasClass("js-toggle-chapter")&&(i=i.not(".unit-hide")),(i=i.filter((function(e,t){var s="none"===$(t).css("display");return o===s}))).stop().animate({height:"toggle",opacity:"toggle"},"fast"),s.toggleClass("toogle-hide").hasClass("toogle-hide")?s.html(e[0]):s.html(e[1])}))}},{key:"addItem",value:function(e){var t=$(e),s=$("#"+t.attr("id"));if(s.length>0)return s.replaceWith(t),void this.afterAddItem(t);switch(this.type){case"chapter":var a=this.$element.find("#chapter-"+this.position),n=a.nextUntil(".js-task-manage-chapter").last();0==n.length?a.after(t):n.after(t);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(t);var i=t.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(i);break;case"lesson":var o=this.$element.find("#chapter-"+this.position),r=o.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==r.length?o.after(t):r.after(t);break;default:this.$element.append(t)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(t)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var e=this;this.$element.on("click",".js-delete",(function(t){var s=$(this),a=s.closest(".task-manage-item"),n=e._getDeleteText(s);cd.confirm({title:Translator.trans("site.delete"),content:n,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){"task"==s.data("type")&&0==a.siblings().length&&a.closest(".js-task-manage-lesson").remove();var t=a.parents(".js-lesson-container");a.remove(),e._triggerAsTaskNumUpdated(t),e.handleEmptyShow(),e._flushTaskNumber(),e._flushPublishLessonNum(),$.post(s.data("url"),(function(t){Object(l.a)("success",Translator.trans("site.delete_success_hint")),e.sortList()}))}))}))}},{key:"_getDeleteText",value:function(e){return"task"==e.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:e.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:e.data("name")})}},{key:"_sort",value:function(){var e,t=this,s=null;Object(r.a)({element:t.$element,ajax:!1,group:"nested",exclude:".drag_cancel",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(e,s){return t._sortRules(e,s)},onDragStart:function(a,n,i){var o=a.offset(),r=n.rootGroup.pointer;e={left:r.left-o.left,top:r.top-o.top},s=t.getChildrens(a),i(a,n)},onDrag:function(t,s){var a=t.height();$(".task-dragged-placeholder").css({height:a,"background-color":"#eee"}),t.css({left:s.left-e.left,top:s.top-e.top})},onDrop:function(e,a,n){n(e,a);for(var i=e;"none"===i.next().css("display");)i=i.next();i.after(e),s&&(e.after(s),s=null),t.sortList()}})}},{key:"getChildrens",value:function(e){if(!(e.find(".js-toggle-show.toogle-hide").length>0))return null;var t=null;return e.hasClass("js-task-manage-chapter")?t=e.nextUntil(".js-task-manage-chapter"):e.hasClass("js-task-manage-unit")&&(t=e.nextUntil(".js-task-manage-unit,.js-task-manage-chapter")),t&&(t=t.filter((function(e){return"none"===t.eq(e).css("display")}))),t}},{key:"_sortRules",value:function(e,t){return(!e.hasClass("js-task-manage-item")||t.target.closest(".js-task-manage-lesson").attr("id")==e.closest(".js-task-manage-lesson").attr("id"))&&(!((e.hasClass("js-task-manage-unit")||e.hasClass("js-task-manage-chapter"))&&!t.target.hasClass("sortable-list"))&&(!e.hasClass("js-task-manage-lesson")||!t.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var e=[],t=this;this.$element.find(".task-manage-item").each((function(){e.push($(this).attr("id"))})),$.post(this.$element.data("sortUrl"),{ids:e},(function(e){t.$element.data("multiClass")&&window.location.reload()})),this.sortablelist()}},{key:"setShowNum",value:function(e){0==e.attr("show-num")?e.attr("show-num",1):e.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],t=0;t<e.length;t++)this._sortNumberByClassName(e[t]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(e){var t=1;this.$element.find(e).each((function(){$(this).find(".number").text(t++)}))}},{key:"_sortUnitNumber",value:function(){var e;this.$element.find(".js-task-manage-chapter").each((function(){var t=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,t.each((function(){$(this).find(".number").text(e++)}))}))}},{key:"_publish",value:function(){var e=this,t=this,s={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",(function(a){var n=$(a.target);s.success=Translator.trans("course.manage.task_unpublish_success_hint"),s.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",e.toggleOptional(n,t,s)})),this.$element.on("click",".js-publish-item",(function(a){var n=$(a.target);s.success=Translator.trans("course.manage.task_publish_success_hint"),s.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",e.toggleOptional(n,t,s)}))}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-settings-item.active").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-settings-item.active").length,t=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:t,unpublishedNum:e-t});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",(function(e){var t=$(this).data("url");$.get(t,(function(e){e.code?($("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(e.message)})})).fail((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"_optional",value:function(){var e=this,t={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",(function(s){var a=$(s.target);e.toggleOptional(a,e,t)})),this.$element.on("click",".js-unset-optional",(function(s){var a=$(s.target);e.toggleOptional(a,e,t)}))}},{key:"_initLessonTaskAction",value:function(){var e={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"},t=function(t){var s=e[t];$("#sortable-list").on("click","."+t,(function(){var e=$(this).parents(".js-lesson-container"),t=e.find(".js-task-manage-item").attr("id").split("-")[1],a=e.find("."+s),n=a.data("url").replace("%7BtaskId%7D",t);a.data("url",n),a.data("toggle")?a.click():window.open(a.data("url"),"_blank")}))};for(var s in e)t(s)}},{key:"toggleOptional",value:function(e,t,s){var a=this,n=e.closest(".task-manage-item"),i=n.find(s.class),o=n.find(s.oppositeClas),r=$("#isHideUnPublish").hasClass("checked");$.post(e.data("url"),(function(l){var c=!0;(r&&(c=t.checkShouldSetProperty(e,n)),l.success&&(i.toggleClass("hidden"),o.toggleClass("hidden")),r&&c||!r&&s.flag)&&(n.find(".display-text").toggleClass("hidden"),t.setShowNum(n),t.sortList());l.success?(a._flushPublishLessonNum(),cd.message({type:"success",message:s.success})):cd.message({type:"danger",message:s.danger+l.message})})).fail((function(e){cd.message({type:"danger",message:s.danger+e.responseJSON.error.message})}))}},{key:"checkShouldSetProperty",value:function(e,t){var s=t.find(".js-publish-item"),a=t.find(".js-set-optional"),n=s.hasClass("hidden"),i=a.hasClass("hidden"),o=!0;return e.hasClass("js-unpublish-item")||e.hasClass("js-publish-item")?i&&(o=!1):(e.hasClass("js-set-optional")||e.hasClass("js-unset-optional"))&&(n||(o=!1)),o}},{key:"afterAddItem",value:function(e){console.log("afterAddItem")}},{key:"_triggerAsTaskNumUpdated",value:function(e){var t=e.find(".js-lesson-box"),s=t.find(".js-task-manage-item").length>1;s?(t.removeClass("hidden"),e.find(".js-display-when-mul-tasks").removeClass("hidden"),e.find(".js-display-when-single-task").addClass("hidden")):(t.addClass("hidden"),e.find(".js-display-when-mul-tasks").addClass("hidden"),e.find(".js-display-when-single-task").removeClass("hidden"),e.find(".js-task-title").html(e.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(e,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,t){var s=e.find(".js-lesson-icon"),a="";t?a=s[0].classList:a=0==e.find(".js-lesson-box").find(".es-icon").length?[]:e.find(".js-lesson-box").find(".es-icon")[0].classList;for(var n=0;n<a.length;n++){var i=a[n];i.startsWith("es-icon-")&&(t?s.removeClass(i):s.addClass(i))}}}]),e}()},428:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a=s(82),n=s.n(a),i=s(2),o=s.n(i),r=s(3),l=s.n(r),c=s(383),u=function(){function e(t){o()(this,e),this.$element=$(t),this.batchOperate={status:"none",permission:[],chosenItems:[]},this._defaultEvent()}return l()(e,[{key:"_defaultEvent",value:function(){this.calcOperatePanelPosition(),this.toggleBatchOperate(),this.singleChooseItem(),this.batchChooseItem(),this.batchDelete(),this.batchCancelPublish(),this.batchPublish()}},{key:"calcOperatePanelPosition",value:function(){var e=$(".cd-main__body"),t=($(".js-task-list-header"),$(".js-batch-operate-panel")),s=$(".js-batch-operate-panel__slot");$(window).on("resize scroll",Object(c.throttle)((function(){var a=window.pageYOffset;document.documentElement.clientHeight+a-e[0].getBoundingClientRect().height-e.offset().top<=0?(t.addClass("fixed"),s.removeClass("hidden")):(t.removeClass("fixed"),s.addClass("hidden"))}),300))}},{key:"toggleBatchOperate",value:function(){var e=this,t=$(".js-task-list-header .js-batch-operate-switch");t.on("click",(function(s){e.batchOperate.status="none"===e.batchOperate.status?"editing":"none",t.toggleClass("hidden"),"editing"===e.batchOperate.status?e.startBatchOperate():e.endBatchOperate()}))}},{key:"startBatchOperate",value:function(){this.$element.find(".js-chapter-operation").removeClass("hidden"),$(".js-batch-operate-panel").removeClass("hidden"),this.batchOperate.chosenItems=[],$(".js-task-list-header").find(".js-lesson-create-btn,.js-batch-add,.js-add-chapter-unit").attr("disabled",!0),$(".js-task-list-header").find(".js-add-chapter-unit .caret").hide()}},{key:"endBatchOperate",value:function(){this.$element.find(".js-chapter-operation").addClass("hidden").removeClass("checked"),$(".js-batch-operate-panel").addClass("hidden"),this.batchOperate.chosenItems=[],$(".js-task-list-header").find(".js-lesson-create-btn,.js-batch-add,.js-add-chapter-unit").attr("disabled",!1),$(".js-task-list-header").find(".js-add-chapter-unit .caret").show()}},{key:"singleChooseItem",value:function(e){var t=this;this.$element.on("click",".js-chapter-operation",(function(e){e.stopPropagation();var s=$(e.target);if(s.hasClass("js-chapter-operation")){s.toggleClass("checked");var a=s.data(),n=a.id,i=a.type,o=s.hasClass("checked"),r=t.batchOperate.chosenItems.findIndex((function(e){return e.id===n}));r>-1&&!o?t.batchOperate.chosenItems.splice(r,1):-1===r&&o&&t.batchOperate.chosenItems.push({id:n,type:i}),t.updateBatchBtnStatus()}}))}},{key:"batchChooseItem",value:function(e){var t=this,s=["chapter","unit","lesson"];this.$element.on("click",".js-batch-choose",(function(e){var a=$(e.target),n=a.data("types").split(","),i=s.filter((function(e){return-1===n.indexOf(e)}));t.toggleChooseAllItemByType(n),a.toggleClass("active"),i.forEach((function(e){return t.cancelChooseAllItemByType(e)})),t.$element.find('.js-batch-choose[data-types="'.concat(i.join(","),'"]')).removeClass("active"),t.updateBatchBtnStatus()}))}},{key:"toggleChooseAllItemByType",value:function(e){var t=this,s=!0;this.batchOperate.chosenItems;e.forEach((function(e){var a=t.$element.find(".js-chapter-operation.checked[data-type=".concat(e,"]")),n=t.$element.find(".js-chapter-operation[data-type=".concat(e,"]"));a.length!==n.length&&(s=!1)})),e.forEach((function(e){s?t.cancelChooseAllItemByType(e):t.chooseAllItemByType(e)})),this.updateBatchBtnStatus()}},{key:"chooseAllItemByType",value:function(e){var t=this;this.$element.find(".js-chapter-operation[data-type=".concat(e,"]")).each((function(s,a){var n=$(a),i=n.data().id;-1===t.batchOperate.chosenItems.findIndex((function(e){return e.id===i}))&&(t.batchOperate.chosenItems.push({id:i,type:e}),n.addClass("checked"))}))}},{key:"cancelChooseAllItemByType",value:function(e){var t=this;this.$element.find(".js-chapter-operation[data-type=".concat(e,"]")).each((function(e,s){var a=$(s),n=a.data().id,i=t.batchOperate.chosenItems.findIndex((function(e){return e.id===n}));i>-1&&(t.batchOperate.chosenItems.splice(i,1),a.removeClass("checked"))}))}},{key:"batchDelete",value:function(){var e=this,t=$("#course_manage_lesson_batch_delete").val();this.$element.on("click",".js-batch-delete",(function(){var s=e.batchOperate,a=s.status,i=s.permission,o=$(event.target),r=e.batchOperate.chosenItems;if("none"!==a&&-1!==i.indexOf("delete")){var l=r.every((function(e){return"lesson"===e.type}));l&&(r=(r=e.clearDeletedLessons()).filter((function(t){return!e.getPublishStatusById(t.id)}))),cd.confirm({title:Translator.trans("site.delete"),content:e.getDeleteText(l,r.length),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel"),className:"task-manage-batch-delete"}).on("ok",(function(){var s=r.map((function(e){return e.id}));o.button("loading"),$.post(t,{lessonIds:s}).then((function(t){n()(t)&&t.forEach((function(e){return $("#chapter-".concat(e)).remove()})),e.clearChosenItems(),o.button("reset"),cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),setTimeout((function(){return e.updateBatchBtnStatus()}))})).catch((function(e){var t=Translator.trans("site.delete_fail_hint: Delete failed")+":";o.button("reset"),cd.message({type:"danger",message:t+":"+e.responseJSON.error.message})}))}))}}))}},{key:"getDeleteText",value:function(e,t){return e?Translator.trans("course.manage.task_batch_delete_hint",{length:t}):Translator.trans("course.manage.chapter_batch_delete_hint",{length:t})}},{key:"clearDeletedLessons",value:function(){var e=this.batchOperate.chosenItems,t=e.filter((function(e){return $("#chapter-".concat(e.id)).length>0}));return t.length!==e.length&&(this.batchOperate.chosenItems=t,this.updateBatchBtnStatus()),this.batchOperate.chosenItems}},{key:"batchPublish",value:function(){var e=this,t=$("#course_manage_lesson_batch_publish").val();this.$element.on("click",".js-batch-publish",(function(s){var a=e.batchOperate,i=a.status,o=a.permission,r=a.chosenItems;if("none"!==i&&-1!==o.indexOf("publish")){var l=r.map((function(e){return e.id})),c=$(s.target);c.button("loading"),$.post(t,{lessonIds:l}).then((function(t){n()(t)&&t.forEach((function(e){var t=$("#chapter-".concat(e));t.find(".js-publish-item, .js-delete, .js-lesson-unpublish-status").addClass("hidden"),t.find(".js-unpublish-item").removeClass("hidden")})),cd.message({type:"success",message:Translator.trans("course.manage.task_publish_success_hint")}),c.button("reset"),setTimeout((function(){return e.updateBatchBtnStatus()}))})).catch((function(e){var t=Translator.trans("course.manage.task_unpublish_fail_hint")+":";c.button("reset"),cd.message({type:"danger",message:t+e.responseJSON.error.message})}))}}))}},{key:"batchCancelPublish",value:function(){var e=this,t=$("#course_manage_lesson_batch_unpublish").val();this.$element.on("click",".js-batch-cancel-publish",(function(){var s=e.batchOperate,a=s.status,i=s.permission,o=s.chosenItems;if("none"!==a&&-1!==i.indexOf("cancelPublish")){var r=o.map((function(e){return e.id})),l=$(event.target);l.button("loading"),$.post(t,{lessonIds:r}).then((function(t){n()(t)&&t.forEach((function(e){var t=$("#chapter-".concat(e));t.find(".js-publish-item, .js-delete, .js-lesson-unpublish-status").removeClass("hidden"),t.find(".js-unpublish-item").addClass("hidden")})),cd.message({type:"success",message:Translator.trans("course.manage.task_unpublish_success_hint")}),l.button("reset"),setTimeout((function(){return e.updateBatchBtnStatus()}))})).catch((function(e){var t=Translator.trans("course.manage.task_unpublish_fail_hint")+":";l.button("reset"),cd.message({type:"danger",message:t+e.responseJSON.error.message})}))}}))}},{key:"updateBatchBtnStatus",value:function(){var e=this,t=this.$element.find(".js-chosen-number"),s=this.batchOperate.chosenItems,a=s.findIndex((function(e){return"chapter"===e.type}))>-1,n=s.findIndex((function(e){return"lesson"===e.type}))>-1,i=s.findIndex((function(e){return"unit"===e.type}))>-1,o=this.$element.find(".js-batch-publish"),r=this.$element.find(".js-batch-cancel-publish"),l=this.$element.find(".js-batch-delete"),c=!(a||n||i);if(t.text(s.length),o.attr("disabled",c),r.attr("disabled",c),l.attr("disabled",c),this.batchOperate.permission=c?[]:["publish","cancelPublish","delete"],n&&(a||i)&&(o.attr("disabled",!0),r.attr("disabled",!0),l.attr("disabled",!0),this.batchOperate.permission=[]),n||!a&&!i||(this.batchOperate.permission=["delete"],o.attr("disabled",!0),r.attr("disabled",!0)),n&&!a&&!i){var u=s.every((function(t){var s=t.id;return e.getPublishStatusById(s)})),h=s.every((function(t){var s=t.id;return!e.getPublishStatusById(s)}));u?(l.attr("disabled",!0),o.attr("disabled",!0),this.batchOperate.permission=["cancelPublish"]):h&&(r.attr("disabled",!0),this.batchOperate.permission=["publish","delete"])}}},{key:"clearChosenItems",value:function(){this.batchOperate.chosenItems=[]}},{key:"getPublishStatusById",value:function(e){return $("#chapter-".concat(e)).find(".js-lesson-unpublish-status.hidden").length>0}}]),e}()}});