(window.webpackJsonp=window.webpackJsonp||[]).push([["classroom~course~courseTry"],{"50ad":function(t,e,s){"use strict";var i=s("8171");s.n(i).a},7067:function(t,e,s){"use strict";s("e17f");var i=s("2241"),n=(s("e7e5"),s("d399")),a=s("a026"),r=s("3ce7"),o=/micromessenger/.test(navigator.userAgent.toLowerCase());e.a=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||s&&!e)n.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};r.a.marketingActivities({query:{activityId:t},data:c}).then((function(t){var r=-1!==t.url.indexOf("?")?"&":"?",c=s?"".concat(e).concat(r,"ticket=").concat(t.ticket):t.url;o?window.location.href=c:i.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{a.default.prototype.$copyText(c).then((function(){n.a.success("复制成功")}),(function(){n.a.fail("请更换浏览器复制")}))}catch(t){n.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(t){n.a.fail(t.message)}))}}},8171:function(t,e,s){},b127:function(t,e,s){"use strict";s("8e6e"),s("456d"),s("e7e5");var i=s("d399"),n=(s("6762"),s("2fdb"),s("ac6a"),s("c5f6"),s("bd86")),a=s("2f62"),r=s("0d25"),o=s("faa5");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(n.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={mixins:[s("d863").a],props:{hiddeTitle:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data:function(){return{directoryArray:[],chapters:[],tasks:[],unit:[],optionalMap:[],unitShow:{},firstLesson:""}},computed:l(l(l({},Object(a.e)("course",{details:function(t){return t.details},joinStatus:function(t){return t.joinStatus},courseLessons:function(t){return t.courseLessons},selectedPlanId:function(t){return t.selectedPlanId}})),Object(a.e)(["courseSettings","user"])),{},{currentCourseType:function(){return Number(this.details.parentId)?this.$t("courseLearning.classroom"):this.$t("courseLearning.course")},liveClass:function(){return function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?"grey-medium":e>i?"ungenerated"===t.activity.replayStatus?"live-done":"live-replay":"living"}}}),watch:{selectedPlanId:{deep:!0,immediate:!0,handler:function(t){var e=this;if(this.courseLessons.length){var s=0,i=0,n=0;this.directoryArray=this.courseLessons.map((function(t){if(e.firstLesson||(e.firstLesson=t.type),s++,e.$set(t,"show",!0),"chapter"===t.type&&(n++,s=0),"unit"===t.type&&(i=s-1),"lesson"===t.type){var a="chapter"===e.firstLesson?Math.max(n-1,0):Math.max(n,0),r=i;e.$set(t,"show","".concat(a,"-").concat(r))}return t})),this.getTasks(this.directoryArray)}}}},methods:l(l({},Object(a.d)("course",{setSourceType:o.y})),{},{lessonToggle:function(t,e){var s="".concat(t,"-").concat(e);this.$set(this.unitShow,s,!this.unitShow[s])},filterNumber:function(t,e,s){return s?"":"1"===t.isOptional?this.$t("courseLearning.optional"):e+1},getTasks:function(t){var e=this,s=[],i=0,n=0;this.chapters=[],this.tasks=[],this.unit=[],this.optionalMap=[],t.forEach((function(t){if("lesson"==t.type&&(n++,i=Number(t.isOptional)?++i:i,e.optionalMap[n]=i,t.tasks.forEach((function(t){t.tagStatus=e.getCurrentStatus(t)}))),"chapter"!==t.type){if("unit"===t.type){var a="chapter"===e.firstLesson?e.chapters.length-1:e.chapters.length,r=s.length;e.$set(e.unitShow,"".concat(a,"-").concat(r),!0),e.unit.push(t)}s.push(t)}else s.length>0?(e.tasks.push([].concat(s)),s=[]):e.chapters.length>0&&e.tasks.push([]),e.chapters.push(t)})),this.unit.length&&"chapter"===this.firstLesson||this.$set(this.unitShow,"".concat(0,"-",0),!0),"chapter"!==t[t.length-1].type&&this.tasks.push(s),"chapter"!==t[0].type&&this.chapters.unshift({show:!0})},getCurrentStatus:function(t){return Number(t.isFree)?"is-free":Number(this.details.tryLookable)&&"video"===t.type&&t.activity.mediaStorage?"is-tryLook":""},filterTaskStatus:function(t){return this.details.member||"is-free"!==t.tagStatus?this.details.member||"is-tryLook"!==t.tagStatus?"":this.$t("courseLearning.preview"):this.$t("courseLearning.free")},lessonCellClick:function(t){if(this.errorMsg||"create"===t.status)this.$emit("showDialog");else if(!this.details.allowAnonymousPreview&&this.$router.push({name:"login",query:{redirect:this.redirect}}),!this.joinStatus&&["is-tryLook","is-free"].includes(t.tagStatus))switch(t.type){case"video":case"audio":this.$router.push({name:"course_try"}),this.setSourceType({sourceType:t.type,taskId:t.id});break;case"doc":case"text":case"ppt":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,preview:1}});break;default:return Object(i.a)("".concat(this.$t("courseLearning.pleaseJoinFirst")).concat(this.currentCourseType))}else this.joinStatus?this.showTypeDetail(t):Object(i.a)("".concat(this.$t("courseLearning.pleaseJoinFirst")).concat(this.currentCourseType))},showTypeDetail:function(t){if("published"===t.status)switch(t.type){case"video":"self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)(this.$t("courseLearning.doesNotSupportThisType"));break;case"audio":this.setSourceType({sourceType:"audio",taskId:t.id});break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type}});break;case"live":var e=!1;if(new Date>new Date(1e3*t.endTime)){if("videoGenerated"==t.activity.replayStatus)return void("self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)(this.$t("courseLearning.doesNotSupportThisType")));if("ungenerated"==t.activity.replayStatus)return void Object(i.a)(this.$t("courseLearning.noReplay"));e=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,title:t.title,replay:e}});break;default:Object(i.a)(this.$t("courseLearning.doesNotSupportThisType"))}else Object(i.a)(this.$t("courseLearning.stayTuned"))}}),filters:{liveStatusText:function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?Object(r.formatCompleteTime)(s):e>i?"ungenerated"===t.activity.replayStatus?"已结束":"回放":"直播中"}}},h=s("a6c2"),p=Object(h.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("e-panel",{staticClass:"directory",attrs:{"hidde-title":t.hiddeTitle,title:t.$t("courseLearning.catalogue")}},[0==t.courseLessons.length?s("div",{staticClass:"empty"},[t._v(t._s(t.$t("courseLearning.noLearningTasks")))]):s("div",{staticClass:"directory-list"},t._l(t.chapters,(function(e,i){return s("div",{key:i,staticClass:"directory-list__item"},["chapter"===e.type?s("div",{staticClass:"directory-list__item-chapter",on:{click:function(t){e.show=!e.show}}},[s("span",{staticClass:"text-overflow"},[t._v("第"+t._s(e.number)+t._s(t.courseSettings.chapter_name)+"："+t._s(e.title))]),s("i",{class:[e.show?"icon-packup":"icon-unfold"]})]):t._e(),t._l(t.tasks[i],(function(n,a){return s("div",{key:a,class:["directory-list__item-unit",{"unit-show":e.show||e.show&&"lesson"===t.tasks[i][0].type}]},["unit"===n.type?s("div",{staticClass:"lesson-cell__unit"},[s("span",{staticClass:"lesson-cell__unit-title text-overflow"},[t._v("第"+t._s(n.number)+t._s(t.courseSettings.part_name)+"："+t._s(n.title))]),s("i",{class:[t.unitShow[i+"-"+a]?"icon-packup":"icon-unfold"],on:{click:function(e){return t.lessonToggle(i,a)}}})]):t._e(),"lesson"===n.type?s("div",{staticClass:"lesson-cell__hour text-overflow",class:{"lesson-show":t.unitShow[n.show]||"lesson"===t.tasks[i][0].type}},[n.tasks.length>1?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow"},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),s("span",[t._v(t._s(Number(n.isOptional)?t.$t("courseLearning.optional"):t.$t("courseLearning.lesson"))+"\n                "+t._s(Number(n.isOptional)?" ":n.number-t.optionalMap[n.number]+"：")+t._s(n.title))])]),t._l(n.tasks,(function(e,i){return s("div",{key:i,class:["box","show-box"]},[s("div",{staticClass:"lesson-cell"},[Number(n.isOptional)?t._e():s("span",{staticClass:"lesson-cell__number pull-left"},[t._v(t._s(t.filterNumber(e,i)))]),s("div",{class:["lesson-cell__content","live"===n.tasks[i].type?"pr10":""],on:{click:function(s){return t.lessonCellClick(e)}}},[s("div",{staticClass:"lesson-cell__text"},[s("span",{staticClass:"text-overflow"},[t._v(t._s(e.title))]),"live"===n.tasks[i].type&&"published"===n.tasks[i].status?s("span",{class:[t.liveClass(n.tasks[i]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(n.tasks[i])))]):t._e()]),s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(e))+t._s(t._f("filterTask")(e)))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":e.tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(e))+"\n                ")])])])}))],2):t._e(),1===n.tasks.length?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow",on:{click:function(e){return t.lessonCellClick(n.tasks[0])}}},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18 pull-left"}),s("div",{staticClass:"lesson-cell__text "},[s("span",{staticClass:"pl3 text-overflow"},[t._v(t._s(Number(n.isOptional)?t.$t("courseLearning.optional"):t.$t("courseLearning.lesson"))+"\n                  "+t._s(Number(n.isOptional)?" ":n.number-t.optionalMap[n.number]+"：")+t._s(n.tasks[0].title))]),"published"===n.tasks[0].status&&"live"===n.tasks[0].type?s("span",{class:[t.liveClass(n.tasks[0]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(n.tasks[0])))]):t._e()]),s("div",{staticClass:"lesson-cell"},[s("span",{staticClass:"lesson-cell__number"},[t._v(t._s(t.filterNumber(n.tasks[0],0,!0)))]),s("div",{staticClass:"lesson-cell__content pl3"},[s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(n.tasks[0]))+t._s(t._f("filterTask")(n.tasks[0])))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":n.tasks[0].tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(n.tasks[0]))+"\n                ")])])])]):t._e()]):t._e()])}))],2)})),0)])}),[],!1,null,null,null);e.a=p.exports},bced:function(t,e,s){"use strict";var i={name:"ETagLink",props:{tagData:{type:Object,default:{earnings:0,isShow:!1,link:"",className:"",minDirectRewardRatio:0}}}},n=s("a6c2"),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return this.tagData.isShow?e("div",{staticClass:"e-tag-link",class:this.tagData.className},[e("a",{attrs:{href:this.tagData.link}},[e("span",[this._v("赚"+this._s(this.tagData.earnings)+"元")])])]):this._e()}),[],!1,null,null,null);e.a=a.exports},d863:function(t,e,s){"use strict";s("8e6e"),s("ac6a"),s("456d"),s("a481");var i=s("bd86"),n=s("7067"),a=s("3ce7"),r=s("faa5"),o=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(i.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}e.a={data:function(){return{redirect:""}},computed:l({},Object(o.e)({user:function(t){return t.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:l(l({},Object(o.d)([r.u])),{},{afterLogin:function(){var t=this;this.checkMobileBind().then((function(e){var s=e.is_bind_mobile,i=e.mobile_bind_mode;t[r.u]({is_bind_mobile:s,mobile_bind_mode:i}),s||"closed"===i?setTimeout(t.jumpAction,1e3):t.$router.replace({name:"binding",query:{redirect:t.$route.query.redirect}})})).catch((function(e){setTimeout(t.jumpAction,1e3)}))},jumpAction:function(){var t=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",e=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",s=this.$route.query.callbackType,i=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);if(s)switch(s){case"marketing":Object(n.a)(i,a)}else e?this.$router.replace({path:t,query:{backUrl:e}}):this.$router.replace({path:t})},checkMobileBind:function(){return a.a.mobileBindCheck({query:{userId:this.user.id}})}})}},fd23:function(t,e,s){"use strict";s("6b54");var i=s("0d25"),n={props:{activity:{type:Object,default:{}}},data:function(){return{timer:null,counting:!0,seckillClass:"seckill-unstart",seckilling:!1,buyCountDownText:"",endCountDownText:""}},computed:{statusTitle:{get:function(){var t=this.activity.status;if("unstart"===t)return this.counting=!1,"秒杀未开始";if("closed"===t)return this.counting=!1,this.seckillClass="seckill-closed","秒杀已结束";if("ongoing"===t){if(!this.counting)return"秒杀已结束";if(0==this.activity.productRemaind)return this.counting=!1,this.seckillClass="seckill-closed",this.$emit("sellOut",!0),"商品已售空";var e=(new Date).getTime();if(this.startStamp<e&&e<this.endStamp)return this.seckilling=!0,this.counting=!0,this.seckillClass="seckill-ongoing",'距离结束仅剩<span class="ml10 mlm">'.concat(this.endCountDownText,"</span>");if(this.startStamp>e)return this.seckilling=!1,this.counting=!0,this.seckillClass="seckill-unstart",'距离开抢<span class="ml10 mlm">'.concat(this.buyCountDownText,"</span>")}},set:function(){}},startStamp:function(){return new Date(this.activity.startTime).getTime()},endStamp:function(){return new Date(this.activity.endTime).getTime()}},created:function(){this.countDownTime()},beforeDestroy:function(){this.clearInterval()},methods:{countDownTime:function(){var t=this;this.timer=setInterval((function(){t.endCountDownText=Object(i.dateTimeDown)(t.endStamp),t.buyCountDownText=Object(i.dateTimeDown)(t.startStamp),"已到期"==t.endCountDownText&&(t.seckillClass="seckill-closed",t.counting=!1,t.clearInterval(),t.$emit("timesUp"))}),1e3)},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.timer),this.timer=null}))}},a=(s("50ad"),s("a6c2")),r=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["seckill-countdown-container clearfix",this.seckillClass]},[e("span",{staticClass:"pull-left status-title"},[this._v("秒杀"+this._s("ongoing"===this.activity.status&&this.seckilling?"中":""))]),e("div",{staticClass:"pull-right text-12",domProps:{innerHTML:this._s(this.statusTitle)}})])}),[],!1,null,null,null);e.a=r.exports}}]);