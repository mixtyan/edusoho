!function(l){function e(e){for(var n,t,s=e[0],i=e[1],o=e[2],a=0,r=[];a<s.length;a++)t=s[a],Object.prototype.hasOwnProperty.call(c,t)&&c[t]&&r.push(c[t][0]),c[t]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(l[n]=i[n]);for(h&&h(e);r.length;)r.shift()();return u.push.apply(u,o||[]),d()}function d(){for(var e,n=0;n<u.length;n++){for(var t=u[n],s=!0,i=1;i<t.length;i++){var o=t[i];0!==c[o]&&(s=!1)}s&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var t={},c={99:0},u=[];function a(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return l[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=l,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)a.d(t,s,function(e){return n[e]}.bind(null,s));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/static-dist/";var n=window.webpackJsonp=window.webpackJsonp||[],s=n.push.bind(n);n.push=e,n=n.slice();for(var i=0;i<n.length;i++)e(n[i]);var h=s;u.push([581,0]),d()}({350:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var s=t(0),i=t.n(s),o=t(1),a=t.n(o),r=function(){function n(e){i()(this,n),this.options=e,this.$element=this.options.element,this.$loginDom=$(".js-sts-login"),this.init()}return a()(n,[{key:"init",value:function(){this.bindEvent(),this.closeModal()}},{key:"bindEvent",value:function(){var e=this;this.$loginDom.on("click",".js-login-back",function(){return e.back()}),this.$loginDom.on("click",".js-invalid-btn",function(){return e.refresh()}),this.$loginDom.on("click",".js-approve-again-btn",function(){return e.approveAgain()}),this.$element.on("click",".js-sts-login-link",function(){return e.showQrcode()})}},{key:"back",value:function(){$(".js-approve-ing, .js-feedback, .js-sts-login").addClass("hidden"),this.options.target?this.$element.find(this.options.target).removeClass("hidden"):this.$element.removeClass("hidden")}},{key:"showQrcode",value:function(){var n=this;$.ajax({type:"post",url:this.$loginDom.data("url"),dataType:"json",success:function(e){console.log(e),n.$loginDom.find(".js-sts-login-qrcode img").attr("src",e.qrcode),n.onlyShow(),n.token=e.token,n.pollStatus()}})}},{key:"approveAgain",value:function(){$(".js-feedback").addClass("hidden"),$(".js-login-section, .js-sts-tip").removeClass("hidden"),this.refresh()}},{key:"refresh",value:function(){$(".js-approve-ing").addClass("hidden"),this.showQrcode()}},{key:"pollStatus",value:function(){var n=this,e=this.token,t=this.$loginDom.data("goto"),s=$(".js-fail-feedback"),i=$(".js-success-feedback"),o=$(".js-fail-tip"),a=$(".js-approve-again-btn");this.$loginDom.hasClass("hidden")||this.flag||$.get("/login/face_token/".concat(e),{goto:t},function(e){switch(e.status){case"created":setTimeout(function(){n.pollStatus()},2e3);break;case"processing":$(".js-invalid-btn").addClass("hidden"),$(".js-approve-ing, .js-approve-ing-tip").removeClass("hidden"),setTimeout(function(){n.pollStatus()},2e3);break;case"expired":$(".js-approve-ing-tip").addClass("hidden"),$(".js-approve-ing, .js-invalid-btn").removeClass("hidden");break;case"successed":n.statusShow(),i.removeClass("hidden").siblings().addClass("hidden"),window.location.href=e.url;break;case"failed":n.feedbackShow(s,a,o);break;case"failures":n.feedbackShow(s,o,a)}})}},{key:"closeModal",value:function(){var e=this;$("#login-modal").on("hide.bs.modal",function(){e.flag=!0})}},{key:"onlyShow",value:function(){$(".js-sts-login, .js-login-section, .js-sts-tip").removeClass("hidden"),this.options.target?this.$element.find(this.options.target).addClass("hidden"):this.$element.addClass("hidden")}},{key:"statusShow",value:function(){$(".js-login-section, .js-sts-tip").addClass("hidden"),$(".js-feedback").removeClass("hidden")}},{key:"feedbackShow",value:function(e,n,t){this.statusShow(),e.removeClass("hidden").siblings().addClass("hidden"),n.removeClass("hidden"),t.addClass("hidden")}}]),n}()},581:function(e,n,t){"use strict";t.r(n);var s=t(350),i=t(72),o=$("#login-form"),a=($("#drag-btn").length&&new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"user_login"}),o.validate({rules:{_username:{required:!0},_password:{required:!0},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}}));$("#login-form").keypress(function(e){13==e.which&&($(".js-btn-login").trigger("click"),e.preventDefault())}),$(".js-btn-login").click(function(e){a.form()&&($(e.currentTarget).button("loadding"),o.submit())}),$(".receive-modal").click(),$(".js-sts-login-link").length&&new s.a({element:$(".js-login-main")})}});