!function(t){function e(e){for(var i,l,s=e[0],o=e[1],c=e[2],m=0,u=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);for(d&&d(e);u.length;)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={35:0},r=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=o;r.push([1596,0]),a()}({1596:function(t,e,a){"use strict";a.r(e);var i=a(31),n=a.n(i),r=a(119),l=a.n(r),s=a(4),o=a.n(s),c=a(5),d=a.n(c),m=a(117),u=(a(11),a(26)),h=a(158);new(function(){function t(){o()(this,t),this.$form=$("#step2-form"),this.firstName=$("#title").val(),this.media=l()(null),this.materials=l()(null),this.initStep2Form(),this.bindEvent(),this.initFileChooser()}return d()(t,[{key:"initStep2Form",value:function(){this.$form.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},link:"url",materials:"required"},messages:{link:Translator.trans("activity.download_manage.link_error_hint"),materials:Translator.trans("activity.download_manage.materials_error_hint")}})}},{key:"bindEvent",value:function(){var t=this;this.$form.on("click",".js-btn-delete",(function(e){return t.deleteItem(e)})),this.$form.on("click",".js-video-import",(function(){return t.importLink()})),this.$form.on("click",".js-add-file-list",(function(){return t.addFile()})),this.$form.on("blur","#title",(function(e){return t.changeTitle(e)}))}},{key:"deleteItem",value:function(t){var e=$(t.currentTarget).closest("li"),a=e.data("id"),i=$("#materials");this.materials=Object(u.e)(i.val())?l()(null):JSON.parse(i.val()),this.materials&&this.materials[a]&&(delete this.materials[a],i.val(n()(this.materials))),e.siblings("li").length||i.val(""),e.remove()}},{key:"initFileChooser",value:function(){var t=this;(new m.a).on("select",(function(e){$("#media").val(n()(e)),Object(h.b)(),$("#title").val(t.firstName),$(".js-current-file").text(e.name)}))}},{key:"changeTitle",value:function(t){var e=$(t.currentTarget);this.firstName=e.val()}},{key:"importLink",value:function(){var t=$("#link"),e=$("#verifyLink");this.$form.data("validator").valid()&&t.val()?e.val(t.val()):(t.val(""),e.val("")),$(".js-current-file").text(e.val())}},{key:"addLink",value:function(){var t=$("#verifyLink").val(),e={source:"link",id:t,name:t,link:t,summary:$("#file-summary").val(),size:0};$("#media").val(n()(e))}},{key:"addFile",value:function(){var t=$("#media"),e=$("#materials"),a=$(".js-success-redmine"),i=$(".js-danger-redmine");$("#verifyLink").val()&&this.addLink(),this.media=Object(u.e)(t.val())?l()(null):JSON.parse(t.val()),this.materials=Object(u.e)(e.val())?l()(null):JSON.parse(e.val()),Object(u.e)(this.media)?this.showTip(a,i,"activity.download_manage.materials_error_hint"):Object(u.e)(this.materials)||!this.checkExisted()?(this.media.summary=$("#file-summary").val(),this.materials[this.media.id]=this.media,e.val(n()(this.materials)),this.firstName||(this.firstName=this.media.name,$("#title").val(this.firstName)),this.showFile(),this.showTip(i,a,"activity.download_manage.materials_add_success_hint"),$(".jq-validate-error:visible").length&&this.$form.data("validator").form()):this.showTip(a,i,"activity.download_manage.materials_exist_error_hint")}},{key:"checkExisted",value:function(){for(var t in this.materials){var e=this.materials[t],a=e.name===this.media.name,i=e.link&&e.link===this.media.id;if(a||i)return!0}return!1}},{key:"showFile",value:function(){var t="";t=this.media.link?'\n        <li class="download-item" data-id="'.concat(this.media.link,'">\n          <a class="gray-primary" href="').concat(this.media.link,'" target="_blank">').concat(this.media.summary?this.media.summary:this.media.name,'<span class="glyphicon glyphicon-new-window text-muted text-sm mlm" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"></span></a>\n         \n          <a class="js-btn-delete" href="javascript:;" data-url="" data-toggle="tooltip" data-placement="top" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"><i class="cd-icon cd-icon-close"></i></a>\n        </li>\n      '):'\n        <li class="download-item" data-id="'.concat(this.media.id,'">\n          <a class="gray-primary" href="/materiallib/').concat(this.media.id,'/download">').concat(this.media.name,'</a>\n          <a class="js-btn-delete" href="javascript:;" data-url="" data-toggle="tooltip" data-placement="top" title="').concat(Translator.trans("activity.download_manage.materials_delete_btn"),'"><i class="cd-icon cd-icon-close"></i></a>\n        </li>\n      '),$("#material-list").append(t),$('[data-toggle="tooltip"]').tooltip()}},{key:"showTip",value:function(t,e,a){t.hide(),$(".js-current-file").text(""),$("#link").val(""),$("#verifyLink").val(""),$("#file-summary").val(""),$("#media").val(""),e.text(Translator.trans(a)).show(),setTimeout((function(){e.slideUp()}),3e3)}}]),t}())},27:function(t,e){t.exports=jQuery}});