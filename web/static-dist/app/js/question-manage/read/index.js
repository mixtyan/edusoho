!function(e){function t(t){for(var r,s,i=t[0],l=t[1],d=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={350:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;a.push([1471,0]),n()}({1471:function(e,t,n){"use strict";n.r(t);var r=n(461),o=$("#import-testpaper-box");Object(r.a)(o)},461:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(26),o=function(e){var t=$("#import-step-form"),n=$("#upload-btn"),r=$("#form_file"),o=$("#upload-file-box"),a=document.getElementById("upload-file-box"),s=$("#old-template-btn"),i=$(".js-step1-view"),l=$(".js-step2-view"),d=$(".js-step3-view"),c=$(".js-step2-btn"),u=$(".js-step3-btn"),p=$(".js-upload-hot-spot"),f=$(".js-import-rule-btn"),v=$(".js-question-import-tips"),m=$(".js-upload-progress"),h=$(".js-tutorial-link"),g=$(".js-DOCX-link"),b=$(".js-XLSX-link"),j=$(".js-uploda-img"),C=$(".js-upload-successful-img"),y=$(".js-upload-successful-text");function k(e){if(!e)return!1;var n=t.attr("action"),o=t.attr("method");v.hide(),p.off("click"),p.addClass("modal-body-lodaing"),m.removeClass("hidden"),h.addClass("a-not-click"),g.addClass("a-not-click"),b.addClass("a-not-click"),f.attr("disabled",!0),f.addClass("import-btn-disabled"),$.ajax({type:o,url:n,data:e,cache:!1,processData:!1,contentType:!1,success:function(e){!0===e.success?function(e){var t=!1,n=setInterval((function(){t||(t=!0,$.ajax({type:"get",url:e.progressUrl,success:function(r){if(t=!1,"failed"===r.status)return clearInterval(n),void w(r.errorHtml);m.attr("value",r.progress),"finished"===r.status&&(j.addClass("hidden"),C.removeClass("hidden"),m.addClass("hidden"),y.removeClass("hidden"),clearInterval(n),setTimeout((function(){window.location.href=e.url}),1e3))},error:function(e){clearInterval(n),r.val(""),e=e.responseJSON.error,console.log("Read error:",e)}}))}),1e3)}(e):w(e)},error:function(e){r.val(""),e=e.responseJSON.error,console.log("Read error:",e)}})}function w(e){n.button("reset"),s.addClass("hidden"),i.addClass("hidden"),d.html(e).removeClass("hidden"),u.removeClass("hidden"),f.hide()}p.on("click",(function(){r.click()})),r.on("change",(function(e){var n=e.currentTarget.files;if(0===n.length)return!1;var r=n[0].name.split(".");r.pop(),r.join("."),k(new FormData(t[0]))})),o.on({dragleave:function(e){e.preventDefault(),e.stopPropagation()},drop:function(e){e.preventDefault(),e.stopPropagation()},dragenter:function(e){e.preventDefault(),e.stopPropagation()},dragover:function(e){e.preventDefault(),e.stopPropagation()}}),a.addEventListener("dragenter",(function(e){o.toggleClass("bg-primary-light")}),!1),a.addEventListener("dragleave",(function(e){o.toggleClass("bg-primary-light")}),!1),a.addEventListener("drop",(function(e){o.removeClass("bg-primary-light");var t=e.dataTransfer.files;if(0===t.length)return!1;var n=t[0].name.split(".");n.pop(),n.join(".");var r=new FormData;r.append("importFile",t[0]),k(r)}),!1),s.click((function(){if("1"==$(this).data("need-upgrade"))return $("#modal").modal("hide"),void cd.confirm({title:Translator.trans("site.tips"),content:'<div class="cd-pb24 cd-dark-major">'+Translator.trans("course.question_manage.upgrade_tips")+"</div>",okText:Translator.trans("site.close"),cancelText:Translator.trans("site.confirm"),className:""}).on("ok",(function(){$("#modal").modal("show")})).on("cancel",(function(){$("#modal").modal("show")}));$.ajax({type:"get",url:t.data("plumberUrl")}).done((function(e){$("#modal").html(e)}))})),$("#re-import-btn").click((function(){s.removeClass("hidden"),i.removeClass("hidden"),l.addClass("hidden"),d.addClass("hidden"),c.addClass("hidden"),u.addClass("hidden"),r.val(""),m.attr("value",0),f.show(),v.show(),m.addClass("hidden"),p.removeClass("modal-body-lodaing"),h.removeClass("a-not-click"),g.removeClass("a-not-click"),b.removeClass("a-not-click"),f.attr("disabled",!1),f.removeClass("import-btn-disabled"),j.removeClass("hidden"),p.on("click",(function(){r.click()}))})),$('[data-toggle="popover"]').popover()};Object(r.d)()}});