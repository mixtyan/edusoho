!function(u){function t(t){for(var e,n,i=t[0],s=t[1],a=t[2],r=0,o=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&o.push(c[n][0]),c[n]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(u[e]=s[e]);for(v&&v(t);o.length;)o.shift()();return h.push.apply(h,a||[]),l()}function l(){for(var t,e=0;e<h.length;e++){for(var n=h[e],i=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(i=!1)}i&&(h.splice(e--,1),t=r(r.s=n[0]))}return t}var n={},c={218:0},h=[];function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=u,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var s=0;s<e.length;s++)t(e[s]);var v=i;h.push([690,0]),l()}({282:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n(0),s=n.n(i),a=n(1),r=n.n(a),o=n(26),u=n.n(o),l=(n(289),n(290),function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;s()(this,e),this.$element=null===t?$(".all-wrapper"):t,this.mask='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                    <div class="continue-studying">\n                        <button class="btn btn-primary js-continue-studying">'.concat(Translator.trans("course.task.out_focus_mask.continue_studying"),"</button>\n                    </div>\n                </div>\n            </div>"),this.mask1='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                </div>\n            </div>',this.initEvent()}return r()(e,[{key:"initEvent",value:function(){this._registerChannel()}},{key:"validateMask",value:function(){return 0<this.$element.find(".out-focus-mask").length}},{key:"initLearStopTips",value:function(){this.validateMask()||(this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.stop.tips")),this.popAfter())}},{key:"initAntiBrushTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"initBanTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask1),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"continueStudying",value:function(){this.destroyMask(),this._publishResponse("play")}},{key:"destroyMask",value:function(){this.$element.find(".out-focus-mask").remove()}},{key:"popAfter",value:function(){this._publishResponse("pause")}},{key:"_registerChannel",value:function(){return u.a.instanceId("task"),u.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"out"}]),this}},{key:"_publishResponse",value:function(t){u.a.publish({channel:"task-events",topic:"monitoringEvent",data:t})}}]),e}()),c=n(14),h=n(54),v=n.n(h),d=function(){function e(t){s()(this,e),this.maskElement=t.maskElement||null,this.OutFocusMask=new l(this.maskElement),this.activityTimer=null,this.ACTIVITY_TIME=1200,this.eventMaskElement=null,this.eventMaskTimer=null,this.EVENT_MASK_TIME=30,this.videoPlayRule=t.videoPlayRule,this.taskType=t.taskType,this.taskPipe=t.taskPipe,this.lastFullScreenState=v.a.isFullscreen,this.fullScreenTimer=null,this.initEvent()}return r()(e,[{key:"initEvent",value:function(){var t=this;$("body").off("click",".js-continue-studying"),$("body").on("click",".js-continue-studying",function(){t.OutFocusMask.continueStudying(),t.taskPipe._flush({reActive:1}),t.taskPipe.absorbedChange(0)}),Object(c.f)()||"auto_pause"===this.videoPlayRule&&"video"===this.taskType&&(c.a.safari&&this.safariResetFullScreenState(),this.initMaskElement(),this.initVisibilitychange(),this.initActivity())}},{key:"initMaskElement",value:function(){$("body").append('\n      <div class="monitor-event-mask" style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; opacity: 0; display: none;"></div>\n    '),this.eventMaskElement=$(".monitor-event-mask"),this.maskElementShow()}},{key:"ineffectiveEvent",value:function(){this.OutFocusMask.initLearStopTips(),this.taskPipe.absorbedChange(1),this.taskPipe._flush()}},{key:"triggerEvent",value:function(t){this.taskPipe.absorbedChange(1),"reject_current"!==t?"kick_previous"!==t||this.OutFocusMask.initAntiBrushTips():this.OutFocusMask.initBanTips()}},{key:"initVisibilitychange",value:function(){var t=this;document.addEventListener("visibilitychange",function(){if("hidden"===document.visibilityState){if(c.a.safari&&!t.lastFullScreenState&&v.a.isFullscreen)return void(t.lastFullScreenState=v.a.isFullscreen);t.ineffectiveEvent()}})}},{key:"safariResetFullScreenState",value:function(){var t=this;window.addEventListener("resize",function(){!t.fullScreenTimer&&t.lastFullScreenState&&(t.fullScreenTimer=setTimeout(function(){t.lastFullScreenState=v.a.isFullscreen,clearTimeout(t.fullScreenTimer),t.fullScreenTimer=null},66))})}},{key:"initActivity",value:function(){this.afterActivity(),document.onmousedown=this.afterActivity.bind(this),document.onscroll=this.afterActivity.bind(this),document.onkeypress=this.afterActivity.bind(this),document.onmousemove=this.afterActivity.bind(this)}},{key:"afterActivity",value:function(){var t=this;this.maskElementHide(),clearTimeout(this.activityTimer),this.activityTimer=null,this.activityTimer=setTimeout(function(){t.ineffectiveEvent()},1e3*this.ACTIVITY_TIME)}},{key:"maskElementShow",value:function(){var t=this;clearTimeout(this.eventMaskTimer),this.eventMaskTimer=null,this.eventMaskTimer=setTimeout(function(){t.eventMaskElement.show()},1e3*this.EVENT_MASK_TIME)}},{key:"maskElementHide",value:function(){this.eventMaskElement.hide(),this.maskElementShow()}}]),e}()},58:function(t,e,n){"use strict";var i=n(10),a=n.n(i),s=n(0),r=n.n(s),o=n(1),u=n.n(o),l=(n(95),function(){function t(){r()(this,t)}return u()(t,null,[{key:"set",value:function(t,e,n){var i=store.get("durations",{});i&&i instanceof Array||(i=new Array);var s=t+"-"+e+":"+n;0<i.length&&-1<i.slice(i.length-1,i.length)[0].indexOf(t+"-"+e)&&i.splice(i.length-1,i.length),20<=i.length&&i.shift(),i.push(s),store.set("durations",i)}},{key:"get",value:function(t,e){var n=store.get("durations",{});if(n)for(var i=0;i<n.length;i++){if(-1<n[i].indexOf(t+"-"+e)){var s=n[i];return a()(s.split(":")[1])}}return 0}},{key:"del",value:function(t,e){var n=store.get("durations");if(n){for(var i=0;i<n.length;i++){-1<n[i].indexOf(t+"-"+e)&&n.splice(i,1)}store.set("durations",n)}}}]),t}());e.a=l},690:function(t,e,n){"use strict";n.r(e);var i=n(12),a=n.n(i),s=n(0),r=n.n(s),o=n(1),u=n.n(o),l=n(31),c=n(58),h=n(282),v=n(14);new(function(){function t(){r()(this,t),this.taskId=$("#entry").data("taskId"),this.courseId=$("#entry").data("courseId"),this.taskPipeCounter=0,this.pushing=!1,this.sign="",this.absorbed=0,this.TASK_PIPE_INTERNAL=60,this.intervalId=null,this.lastTimestamp=0,this.init()}return u()(t,[{key:"init",value:function(){"student"===$("#entry").data("role")&&0!=this.taskId&&this.triggerLiveEvent()}},{key:"triggerLiveEvent",value:function(){this._initInterval(),v.a.safari&&!Object(v.f)()&&this.safariVisibilitychange()}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_initInterval",value:function(){var t=this;this._flush(),window.onbeforeunload=function(){t._clearInterval(),t._flush(),0<t.sign.length&&localStorage.setItem("flowSign",t.sign)},this._clearInterval(),this.intervalId=setInterval(function(){return t._addPipeCounter()},1e3)}},{key:"_flush",value:function(t){var e,n,i=this,s=0<arguments.length&&void 0!==t?t:{};this.pushing||(""===this.sign?(e={},(n=localStorage.getItem("flowSign"))&&(this.lastSign=n,e.lastSign=n,localStorage.removeItem("flowSign")),l.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"start"},data:a()({client:"pc"},e)}).then(function(t){if(i.MonitoringEvents=new h.a({videoPlayRule:i.videoPlayRule,taskType:"live",taskPipe:i,maskElement:$("body")}),t.learnControl.allowLearn||"kick_previous"!==t.learnControl.denyReason){if(!t.learnControl.allowLearn&&"reject_current"===t.learnControl.denyReason)return i.MonitoringEvents.triggerEvent("reject_current"),i._clearInterval(),void $("[name=classroom]").attr("src","");i.sign=t.record.flowSign,i.record=t.record,i._doing(s)}else i.MonitoringEvents.triggerEvent("kick_previous")})):this._doing(s))}},{key:"_doing",value:function(t){var e,n,i=this,s=0<arguments.length&&void 0!==t?t:{};0!==this.sign.length&&(n={client:"pc",sign:this.sign,duration:this.taskPipeCounter,status:this.absorbed,lastLearnTime:c.a.get(this.userId,this.fileId)},s.watchTime&&(e={watchData:{duration:s.watchTime}},n=a()(n,e)),s.reActive&&(n.reActive=s.reActive),this.pushing=!0,l.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"doing"},data:n}).then(function(t){i.pushing=!1,i.record=t.record,i.taskPipeCounter=0,i.lastTimestamp=(new Date).getTime(),t.learnControl.allowLearn||"kick_previous"!==t.learnControl.denyReason?t.learnControl.allowLearn||"reject_current"!==t.learnControl.denyReason||i.MonitoringEvents.triggerEvent("reject_current"):i.MonitoringEvents.triggerEvent("kick_previous")}).catch(function(t){i.pushing=!1,i._clearInterval(),cd.message({type:"danger",message:Translator.trans("task_show.user_login_protect_tip")})}))}},{key:"absorbedChange",value:function(t){this.absorbed=t}},{key:"_addPipeCounter",value:function(){this.taskPipeCounter++,this.taskPipeCounter>=this.TASK_PIPE_INTERNAL&&this._flush()}},{key:"safariVisibilitychange",value:function(){var e=this;document.addEventListener("visibilitychange",function(){var t=document.visibilityState;"hidden"===t?e._clearInterval():"visible"===t&&(e.taskPipeCounter=Math.round(((new Date).getTime()-e.lastTimestamp)/1e3),e.intervalId=setInterval(function(){return e._addPipeCounter()},1e3))})}}]),t}())}});