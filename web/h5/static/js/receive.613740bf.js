(window.webpackJsonp=window.webpackJsonp||[]).push([["receive"],{1527:function(e,t,s){"use strict";s("e7e5");var i=s("d399"),n=s("7185");t.a={data:function(){return{count:{showCount:!1,num:60,codeBtnDisable:!1}}},methods:{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.userinfo[e],s=n.a[e];0===t.length&&(this.errorMessage[e]=""),this.errorMessage[e]=s.validator(t)?"":s.message},validatedChecker:function(){this.userinfo.mobile.length>11&&(this.userinfo.mobile=this.userinfo.mobile.substring(0,11));var e=this.userinfo.mobile,t=n.a.mobile;this.validated.mobile=t.validator(e)},countDown:function(){var e=this;this.$nextTick((function(){e.$refs.smsCode.$refs.input.focus()})),this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=60;var t=setInterval((function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num-=1}),1e3)},handleSubmit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.btnDisable||this.fastLogin({mobile:this.userinfo.mobile,smsToken:this.userinfo.smsToken,smsCode:this.userinfo.smsCode,loginType:"sms",client:"h5"}).then((function(t){return e(t)})).catch((function(e){t&&t(e.message),i.a.fail(e.message)}))},handleSendSms:function(){var e=this;this.sendSmsSend(this.userinfo).then((function(t){e.userinfo.smsToken=t.smsToken,e.countDown(),e.dragEnable=!1,e.userinfo.dragCaptchaToken=""})).catch((function(t){switch(t.code){case 4030301:case 4030302:e.dragKey+=1,e.userinfo.dragCaptchaToken="",e.userinfo.smsToken="",i.a.fail(t.message);break;case 4030303:e.dragEnable?i.a.fail(t.message):e.dragEnable=!0;break;default:i.a.fail(t.message)}}))},clickSmsBtn:function(){!this.count.codeBtnDisable&&this.validated.mobile&&(this.dragEnable?this.$refs.dragComponent.dragToEnd?this.$refs.dragComponent.initDragCaptcha():Object(i.a)("请先完成拼图验证"):this.handleSendSms())}}}},4637:function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("e17f");var i=s("2241"),n=(s("96cf"),s("3b8d")),o=(s("6b54"),s("a481"),s("7f7f"),s("bd86")),r=(s("6762"),s("2fdb"),s("e7e5"),s("d399")),a=s("f13d"),c=s("1527"),d=s("2f62"),u=s("a262"),l=s("d863");function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var g={name:"Login",components:{EDrag:a.a},props:{show:{type:Boolean,default:!1},processIsDone:{type:Boolean,default:!1}},data:function(){return{visible:this.show,userinfo:{mobile:"",dragCaptchaToken:void 0,smsCode:"",smsToken:"",type:"sms_login"},dragEnable:!1,dragKey:0,errorMessage:{mobile:"",password:""},validated:{mobile:!1},loginMode:"fastLoginMode",currentLoginMode:{},fastLoginMode:{accountPlaceholder:"请输入手机号",passwordPlaceholder:"请输入验证码"},normalLoginMode:{accountPlaceholder:"请输入手机号/邮箱号/用户名",passwordPlaceholder:"请输入密码"}}},computed:f(f({},Object(d.e)({isLogin:function(e){return!!e.token}})),{},{btnDisable:function(){return"fastLoginMode"===this.loginMode?!(/^1\d{10}$/.test(this.userinfo.mobile)&&this.userinfo.smsCode):!(this.userinfo.mobile&&this.userinfo.smsCode&&this.validateEmail())},cansentCode:function(){return!(this.count.codeBtnDisable||!this.validated.mobile)}}),watch:{show:function(){this.visible=this.show}},mixins:[u.a,l.a,c.a],created:function(){this.currentLoginMode=this[this.loginMode]},methods:f(f({},Object(d.c)(["addUser","setMobile","sendSmsSend","fastLogin","userLogin"])),{},{jump2register:function(){this.$router.push({name:"register",query:{redirect:this.$route.fullPath}})},onSubmit:function(){var e=this;this.btnDisable||("fastLoginMode"!==this.loginMode?this.userLogin({username:this.userinfo.mobile,password:this.userinfo.smsCode}).then((function(t){e.updateShow(),e.$emit("submit")})).catch((function(t){r.a.fail(t.message),4040104===t.code&&(e.errorMessage.mobile=t.message,e.errorMessage.password=""),5000116===t.code&&(e.errorMessage.mobile="",e.errorMessage.password=t.message),e.userinfo.smsCode=""})):this.handleSubmit(this.handleSubmitSuccess,this.handleSubmitFail))},updateShow:function(){this.$emit("update:show",!1)},updateProcessIsDone:function(){this.$emit("update:processIsDone",!0)},handleSmsSuccess:function(e){this.userinfo.dragCaptchaToken=e,this.handleSendSms()},handleSubmitSuccess:function(){this.updateShow(),this.$emit("submit")},handleSubmitFail:function(e){this.errorMessage.password=e},changeLoginMode:function(){this.loginMode="fastLoginMode"===this.loginMode?"normalLoginMode":"fastLoginMode",this.currentLoginMode=this[this.loginMode],this.userinfo.mobile="",this.userinfo.smsCode="",this.errorMessage.mobile="",this.errorMessage.password=""},validateEmail:function(){if(this.userinfo.mobile.includes("@")){var e=/^\w+@\w+(\.\w+)+$/;return e.test(this.userinfo.mobile)?this.errorMessage.mobile="":this.errorMessage.mobile="邮箱输入错误",e.test(this.userinfo.mobile)}return!0}})},m=s("a6c2"),v=Object(m.a)(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("van-action-sheet",{attrs:{title:" "},on:{close:function(t){return e.updateShow(e.show)}},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("div",{staticClass:"login__container"},[s("div",{staticClass:"receive-login-input"},[s("van-field",{attrs:{placeholder:e.currentLoginMode.accountPlaceholder,border:!1,"error-message":e.errorMessage.mobile,type:"text",clearable:""},on:{focus:function(t){e.errorMessage.mobile=""},blur:function(t){"fastLoginMode"===e.loginMode?e.validateMobileOrPsw("mobile"):e.validateEmail()},input:function(t){"fastLoginMode"===e.loginMode&&e.validatedChecker()}},model:{value:e.userinfo.mobile,callback:function(t){e.$set(e.userinfo,"mobile",t)},expression:"userinfo.mobile"}})],1),s("div",{staticClass:"receive-login-input"},[s("van-field",{ref:"smsCode",attrs:{type:"fastLoginMode"===e.loginMode?"text":"password",border:!1,maxlength:"fastLoginMode"===e.loginMode?6:64,placeholder:e.currentLoginMode.passwordPlaceholder,"error-message":e.errorMessage.password,clearable:""},on:{focus:function(t){e.errorMessage.password=""}},model:{value:e.userinfo.smsCode,callback:function(t){e.$set(e.userinfo,"smsCode",t)},expression:"userinfo.smsCode"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"fastLoginMode"===e.loginMode,expression:"loginMode === 'fastLoginMode'"}],class:["code-btn",e.cansentCode?"":"code-btn--disabled"],attrs:{slot:"button"},on:{click:e.clickSmsBtn},slot:"button"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.count.showCount,expression:"!count.showCount"}]},[e._v("发送验证码")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v(e._s(e.count.num)+" s")])])]),s("router-link",{staticClass:"reset-password",attrs:{to:"/setting/password/reset",tag:"div"}},[e._v("忘记密码？\n        ")])],1),e.dragEnable?s("div",{staticClass:"mobile-drag"},[s("div",{staticClass:"mobile-drag-content"},[e.dragEnable?s("e-drag",{key:e.dragKey,ref:"dragComponent",attrs:{"limit-type":"receive_coupon"},on:{success:e.handleSmsSuccess}}):e._e()],1)]):e._e(),s("div",{class:["receive-login__btn",e.btnDisable?"disabled__btn":""],on:{click:e.onSubmit}},[e._v("\n        登录并领取\n      ")]),s("div",{staticClass:"choice-bar"},[s("div",{staticClass:"left"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],on:{click:e.jump2register}},[e._v("注册账号")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"fastLoginMode"===e.loginMode,expression:"loginMode === 'fastLoginMode'"}],staticClass:"right",on:{click:e.changeLoginMode}},[e._v("\n          使用其他方式登录 >>\n        ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:"normalLoginMode"===e.loginMode,expression:"loginMode === 'normalLoginMode'"}],staticClass:"right",on:{click:e.changeLoginMode}},[e._v("\n          使用手机快捷登录 >>\n        ")])]),s("div",{staticClass:"receive-login__text"},[s("span",{directives:[{name:"show",rawName:"v-show",value:"fastLoginMode"===e.loginMode,expression:"loginMode === 'fastLoginMode'"}],staticClass:"receive-login-tools"},[e._v("新用户领取将为您自动注册")]),s("div",{directives:[{name:"show",rawName:"v-show",value:"normalLoginMode"===e.loginMode,expression:"loginMode === 'normalLoginMode'"}],staticClass:"third-part-login"})])])])],1)}),[],!1,null,"412b58d8",null).exports,p=s("3ce7");function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function w(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var y={name:"ValidCard",components:{eLogin:v},data:function(){return{coin:"",date:"",money:0,password:"",show:!1,invalidCard:!1,initProcess:!1,processIsDone:!1,message:"",isECard:void 0,token:"",cash:0,cardStatusList:{expired:"卡已过期，去看看其他精品吧～",invalid:"卡已失效，去看看其他精品吧～",recharged:"",usedByOther:"卡已被其他人充值，去看看其他精品吧～",empty:"卡已被抢完，去看看其他精品吧～"},isLoading:0}},computed:w(w({},Object(d.e)({account:function(e){return e.user.verifiedMobile||e.user.nickname},isLogin:function(e){return!!e.token},settingsName:function(e){return e.settings.name},userToken:function(e){return e.token},userId:function(e){return e.user.id}})),{},{formattedPassword:function(){return this.password.toString().replace(/\W/g,"").replace(/....(?!$)/g,"$& ")}}),created:function(){document.title="学习卡充值",this.token=this.$route.params.token||"",this.password=this.$route.params.password||"",this.isECard=!!this.token.length,this.init()},methods:{init:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCoin();case 2:return t.next=4,e.getCash();case 4:!0===e.isECard?e.getMoneyCardByToken():e.getMoneyCardByPassword();case 5:case"end":return t.stop()}}),t)})))()},getCoin:function(){var e=this;return p.a.getCoin().then((function(t){e.coin=t.name,e.isLoading+=1})).catch((function(e){}))},switchCharge:function(e,t){var s=this;this.isLoading-=1,p.a[e]({query:Object(o.a)({},t,this[t]),headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Token":this.userToken}}).then((function(e){s.isLoading+=1,e.cardPassword&&(s.password=e.cardPassword),!0===e.success?(s.invalidCard=!1,s.message=e.message,s.cash=e.cash):(s.invalidCard=!0,s.message=e.error.message,"recharged"===e.error.status&&(s.message=s.cardStatusList.recharged)),s.processIsDone=!0})).catch((function(e){}))},switchSubmit:function(){this.initProcess?this.initStatus():this.submit()},switchUser2charge:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCash();case 2:!0===e.isECard?e.chargeMoneyCardByToken():e.chargeMoneyCardByPassword();case 3:case"end":return t.stop()}}),t)})))()},initStatus:function(){this.initProcess=!1,this.invalidCard?this.processIsDone=!0:!this.isLogin&&this.jump2login()},getCash:function(){var e=this;return p.a.getCash({query:{userId:this.userId}}).then((function(t){e.cash=t.cash,e.cardStatusList.recharged="之前已充值，当前账户余额："+t.cash+e.coin+"<br/>尽情去购物啦～"})).catch((function(e){}))},getMoneyCardByToken:function(){var e=this;p.a.getMoneyCardByToken({query:{token:this.token}}).then((function(t){e.isLoading+=1,e.date=t.deadline,e.money=t.coin,"normal"!==t.batchStatus&&(e.message=e.cardStatusList[t.batchStatus],e.initProcess=!1,e.invalidCard=!0,e.processIsDone=!0)})).catch((function(t){e.$router.push("/")}))},getMoneyCardByPassword:function(){var e=this;p.a.getMoneyCardByPassword({query:{password:this.password}}).then((function(t){e.isLoading+=1,e.date=t.deadline,e.money=t.coin,e.code=t.password,"normal"===t.cardStatus||t.rechargeUserId===e.userId&&"receive"===t.cardStatus||(t.cardStatus=t.rechargeUserId===e.userId||"recharged"!==t.cardStatus&&"receive"!==t.cardStatus?t.cardStatus:"usedByOther",e.message=e.cardStatusList[t.cardStatus],e.initProcess=!1,e.invalidCard=!0,e.processIsDone=!0)})).catch((function(t){e.$router.push("/")}))},submit:function(){var e=this;!this.invalidCard&&this.isLogin&&i.a.confirm({title:"将充值到当前登录账户",message:this.account,cancelButtonText:"充值其他账户"}).then((function(){!0===e.isECard?e.chargeMoneyCardByToken():e.chargeMoneyCardByPassword()})).catch((function(){e.jump2login()})),this.invalidCard||this.isLogin||this.jump2login()},jump2login:function(){this.show=!0},chargeMoneyCardByToken:function(){this.switchCharge("chargeMoneyCardByToken","token")},chargeMoneyCardByPassword:function(){this.switchCharge("chargeMoneyCardByPassword","password")}}},C=Object(m.a)(y,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"valid-card"},[2!==e.isLoading?s("e-loading"):e._e(),s("div",{staticClass:"container"},[s("div",{staticClass:"top text-overflow"},[e._v("\n      "+e._s(e.settingsName)+"\n    ")]),s("div",{staticClass:"middle"},[s("div",{staticClass:"card"},[s("div",{staticClass:"valid-date"},[e._v("学习卡充值有效期至："+e._s(e.date))]),s("div",{staticClass:"money"},[e._v("\n          "+e._s(e.money)+"\n          "),s("span",[e._v(e._s(e.coin))])]),s("div",{staticClass:"password"},[e._v(e._s(e.formattedPassword))])]),s("div",{staticClass:"result-box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.initProcess&&!e.invalidCard&&this.isLogin&&!e.processIsDone,expression:"\n            !initProcess && !invalidCard && this.isLogin && !processIsDone\n          "}],staticClass:"result-box__valid-card"},[s("div",[e._v("将充值到当前账户："+e._s(e.account))]),s("a",{staticClass:"link",attrs:{href:"javascript: void(0)"},on:{click:e.jump2login}},[e._v("是否放入其他账户")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.invalidCard,expression:"invalidCard"}],staticClass:"result-box__invalid-card--process-is-done"},[e._m(0),s("div",{staticClass:"res-msg",domProps:{innerHTML:e._s(e.message)}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.processIsDone&&!e.invalidCard,expression:"processIsDone && !invalidCard"}],staticClass:"result-box__valid-card--process-is-done"},[e._m(1),s("div",{staticClass:"result-box__account"},[e._v("\n            当前账户余额："+e._s(e.cash)+e._s(e.coin)+"\n          ")]),s("div",[e._v("尽情去购物啦～")])])])]),s("div",{staticClass:"bottom"},[s("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.processIsDone,expression:"!processIsDone"}],attrs:{type:"primary",block:""},on:{click:e.switchSubmit}},[e._v("立即充值")]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.initProcess&&e.processIsDone,expression:"!initProcess && processIsDone"}],attrs:{type:"primary",block:"",to:"/"}},[e._v("去首页")])],1)]),s("e-login",{attrs:{show:e.show},on:{"update:show":function(t){e.show=t},submit:e.switchUser2charge}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"iconfont icon-Fail"}),t("span",[this._v("充值失败")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"result-box__icon-Success"}),t("span",[this._v("充值成功")])])}],!1,null,null,null);t.default=C.exports},7067:function(e,t,s){"use strict";s("e17f");var i=s("2241"),n=(s("e7e5"),s("d399")),o=s("a026"),r=s("3ce7"),a=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||s&&!t)n.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};r.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var r=-1!==e.url.indexOf("?")?"&":"?",c=s?"".concat(t).concat(r,"ticket=").concat(e.ticket):e.url;a?window.location.href=c:i.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{o.default.prototype.$copyText(c).then((function(){n.a.success("复制成功")}),(function(){n.a.fail("请更换浏览器复制")}))}catch(e){n.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){n.a.fail(e.message)}))}}},a262:function(e,t,s){"use strict";var i=s("7067");t.a={methods:{activityHandle:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(i.a)(e,t,s)}}}},d863:function(e,t,s){"use strict";s("8e6e"),s("ac6a"),s("456d"),s("a481");var i=s("bd86"),n=s("7067"),o=s("3ce7"),r=s("faa5"),a=s("2f62");function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){Object(i.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:d({},Object(a.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:d(d({},Object(a.d)([r.u])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var s=t.is_bind_mobile,i=t.mobile_bind_mode;e[r.u]({is_bind_mobile:s,mobile_bind_mode:i}),s||"closed"===i?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(t){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",s=this.$route.query.callbackType,i=this.$route.query.activityId,o=decodeURIComponent(this.$route.query.callback);if(s)switch(s){case"marketing":Object(n.a)(i,o)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return o.a.mobileBindCheck({query:{userId:this.user.id}})}})}},f13d:function(e,t,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var i=s("75fc"),n=(s("e7e5"),s("d399")),o=s("bd86"),r=(s("c5f6"),s("3ce7"));function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}var c={props:{tips:{type:String,default:"placeholder.dragTheSliderToCompleteThePuzzle"},limitType:{type:String,default:""}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,s=e.getBoundingClientRect();Object.assign(this.dragState,{left:Number(s.left.toFixed(2)),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this,t={};this.limitType&&(t={limitType:this.limitType}),r.a.dragCaptcha({data:t}).then((function(t){e.imgInfo=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},t),Object.assign(e.dragState,{currentLeft:0,maskWidth:0}),e.dragToEnd=!1})).catch((function(e){n.a.fail(e.message)}))},handletTouchEnd:function(){var e=this;if(!this.dragToEnd&&this.dragState.currentLeft){var t=this.getToken();this.dragToEnd=!0,r.a.dragValidate({query:{token:t}}).then((function(s){n.a.success(e.$t("e.verificationSuccess")),e.$emit("success",t)})).catch((function(t){n.a.fail(t.message),e.initDragCaptcha()}))}},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,s=this.dragState,i=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2)-this.$refs.drag.offsetLeft,n=(i-s.left-s.btnWidth).toFixed(2);n<0&&(n=0),i>s.width+this.$refs.drag.offsetLeft&&(n=s.width-this.$refs.dragImg.width),Object.assign(this.dragState,{currentLeft:n,maskWidth:(Number(n)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return Object(i.a)(btoa(JSON.stringify(e))).reverse().join("")}}},d=s("a6c2"),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"drag",staticClass:"e-drag"},[s("div",{staticClass:"e-drag-section"},[s("div",{staticClass:"e-drag-img"},[s("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),s("img",{ref:"dragImg",staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),s("div",{ref:"bar",staticClass:"e-drag-bar"},[s("span",[e._v(e._s(e.$t(e.tips)))]),s("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),s("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[s("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])}),[],!1,null,null,null);t.a=u.exports}}]);