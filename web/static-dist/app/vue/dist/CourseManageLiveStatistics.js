(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{130:function(t,a,e){t.exports=e(593)},1670:function(t,a,e){"use strict";e.r(a);var s=e(12),i=e.n(s),n=e(20),l=e.n(n),r=e(1903),c=e(75),o=e.n(c),u=e(93),d=[{title:Translator.trans("live_statistics.user_name"),dataIndex:"nickname"},{title:Translator.trans("live_statistics.true_name"),dataIndex:"truename"},{title:Translator.trans("live_statistics.mobile"),dataIndex:"mobile",scopedSlots:{customRender:"mobile"}},{title:Translator.trans("live_statistics.email"),dataIndex:"email"},{title:Translator.trans("live_statistics.enter_theLlive_room_time"),dataIndex:"firstEnterTime"},{title:Translator.trans("live_statistics.watching_time"),dataIndex:"watchDuration"},{title:Translator.trans("live_statistics.check_in_number"),dataIndex:"checkinNum"},{title:Translator.trans("live_statistics.chat_number"),dataIndex:"chatNumber"},{title:Translator.trans("live_statistics.answers_number"),dataIndex:"answerNum"}],_={props:{taskId:{type:String,required:!0}},data:function(){return{data:[],columns:d,pagination:{hideOnSinglePage:!0,current:1,pageSize:10,total:0},loading:!1,keyword:""}},mounted:function(){this.fetchLiveMembers()},methods:{onSearch:function(t){(t=o.a.trim(t))!==this.keyword&&(this.keyword=t,this.pagination.current=1,this.fetchLiveMembers())},handleTableChange:function(t){this.pagination.current=t.current,this.fetchLiveMembers()},fetchLiveMembers:function(){var t=this;return l()(i.a.mark((function a(){var e,s,n,l,r,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,e=t.pagination,s=e.current,n=e.pageSize,l={query:{taskId:t.taskId},params:{nameOrMobile:t.keyword,offset:(s-1)*n,limit:n}},a.next=5,u.r.getLiveMembers(l);case 5:r=a.sent,c=r.data,o=r.paging,t.loading=!1,t.pagination.total=o.total,t.data=c;case 11:case"end":return a.stop()}}),a)})))()},handleClickExport:function(){window.open("/task/".concat(this.taskId,"/live_statistic/export?nameOrMobile=").concat(this.keyword))}}},v=e(34),p=Object(v.a)(_,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"clearfix"},[e("a-input-search",{staticClass:"pull-left",staticStyle:{width:"200px"},attrs:{placeholder:t._f("trans")("live_statistics.user_name_or_mobile_number")},on:{search:t.onSearch}}),t._v(" "),e("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.handleClickExport}},[t._v("\n      "+t._s(t._f("trans")("site.btn.export"))+"\n    ")])],1),t._v(" "),e("a-table",{staticClass:"mt24",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.id},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"mobile",fn:function(t,a){return[e("mobile-ice",{attrs:{mobile:a.mobile,encryptedMobile:a.encryptedMobile}})]}}])})],1)}),[],!1,null,null,null).exports,f=[{title:Translator.trans("live_statistics.user_name"),dataIndex:"nickname"},{title:Translator.trans("live_statistics.mobile"),dataIndex:"mobile",scopedSlots:{customRender:"mobile"}},{title:Translator.trans("live_statistics.email"),dataIndex:"email"},{title:Translator.trans("live_statistics.checkin_status"),dataIndex:"checkin",scopedSlots:{customRender:"checkin"}}],h={props:{taskId:{type:String,required:!0}},data:function(){return{data:[],columns:f,pagination:{hideOnSinglePage:!0,current:1,pageSize:10,total:0},loading:!1,status:""}},mounted:function(){this.fetchLiveRollCall()},methods:{handleSelectChange:function(t){this.status=t,this.pagination.current=1,this.fetchLiveRollCall()},handleTableChange:function(t){this.pagination.current=t.current,this.fetchLiveRollCall()},fetchLiveRollCall:function(){var t=this;return l()(i.a.mark((function a(){var e,s,n,l,r,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,e=t.pagination,s=e.current,n=e.pageSize,l={query:{taskId:t.taskId},params:{status:t.status,offset:(s-1)*n,limit:n}},a.next=5,u.r.getLiveRollCall(l);case 5:r=a.sent,c=r.data,o=r.paging,t.loading=!1,t.pagination.total=o.total,t.data=c;case 11:case"end":return a.stop()}}),a)})))()},handleClickExport:function(){window.open("/task/".concat(this.taskId,"/live_statistic/roll_call/export?status=").concat(this.status))}}},m=Object(v.a)(h,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"clearfix"},[e("a-select",{staticClass:"pull-left",staticStyle:{width:"120px"},attrs:{"default-value":""},on:{change:t.handleSelectChange}},[e("a-select-option",{attrs:{value:""}},[t._v(t._s(t._f("trans")("live_statistics.checkin_status.all")))]),t._v(" "),e("a-select-option",{attrs:{value:"checked"}},[t._v(t._s(t._f("trans")("live_statistics.checkin_status.checked")))]),t._v(" "),e("a-select-option",{attrs:{value:"unchecked"}},[t._v(t._s(t._f("trans")("live_statistics.checkin_status.not_checked")))])],1),t._v(" "),e("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.handleClickExport}},[t._v(t._s(t._f("trans")("site.btn.export")))])],1),t._v(" "),e("a-table",{staticClass:"mt24",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.id},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"mobile",fn:function(t,a){return[e("mobile-ice",{attrs:{mobile:a.mobile,encryptedMobile:a.encryptedMobile}})]}},{key:"checkin",fn:function(a){return e("span",{},[t._v("\n      "+t._s(t._f("trans")("1"==a?"site.yes":"site.no"))+"\n    ")])}}])})],1)}),[],!1,null,null,null).exports,g={name:"CourseManageLiveStatisticsDetails",components:{Layout:r.a,LearningDuration:p,RollCall:m},data:function(){return{taskId:this.$route.query.taskId,liveData:{course:{},task:{}}}},mounted:function(){this.fetchLiveDetails()},methods:{fetchLiveDetails:function(){var t=this;return l()(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.r.getLiveDetails({query:{taskId:t.taskId}});case 2:t.liveData=a.sent;case 3:case"end":return a.stop()}}),a)})))()}}},k=(e(1936),Object(v.a)(g,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"pull-left"},[t._v(t._s(t.liveData.course.title)+" / "+t._s(t.liveData.task.title))]),t._v(" "),e("div",{staticClass:"pull-right tips"},[t._v(t._s(t._f("trans")("live_statistics.detail_notice")))])])]},proxy:!0}])},[t._v(" "),e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value text-overflow"},[t._v(t._s(t.liveData.teacher))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.presenter")))])])]),t._v(" "),e("a-col",{attrs:{span:12}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v("\n          "+t._s(t.$dateFormat(t.liveData.startTime,"YYYY-MM-DD HH:mm"))+"\n          "+t._s(t._f("trans")("live_statistics.to"))+"\n          "+t._s(t.$dateFormat(t.liveData.endTime,"YYYY-MM-DD HH:mm"))+"\n        ")]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.live_time")))])])]),t._v(" "),e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v(t._s(t.liveData.length)+t._s(t._f("trans")("site.date.minute")))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.actual_live_time")))])])])],1),t._v(" "),e("a-row",{staticClass:"mt16",attrs:{gutter:16}},[e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v(t._s(t.liveData.maxOnlineNumber)+t._s(t._f("trans")("live_statistics.people")))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.online_number")))])])]),t._v(" "),e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v(t._s(t.liveData.memberNumber)+t._s(t._f("trans")("live_statistics.people")))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.number_of_visitors")))])])]),t._v(" "),e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v(t._s(t.liveData.chatNumber)+t._s(t._f("trans")("live_statistics.strip")))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.all_chat_number")))])])]),t._v(" "),e("a-col",{attrs:{span:6}},[e("div",{staticClass:"live-data"},[e("div",{staticClass:"live-data__value"},[t._v(t._s(t.liveData.avgWatchTime)+t._s(t._f("trans")("site.date.minute")))]),t._v(" "),e("div",{staticClass:"live-data__label"},[t._v(t._s(t._f("trans")("live_statistics.per_capita_viewing_time")))])])])],1),t._v(" "),e("a-tabs",{staticClass:"mt16",attrs:{"default-active-key":"1"}},[e("a-tab-pane",{key:"1",attrs:{tab:t._f("trans")("live_statistics.detail.total_learn_time")}},[e("learning-duration",{attrs:{"task-id":t.taskId}})],1),t._v(" "),e("a-tab-pane",{key:"2",attrs:{tab:t._f("trans")("live_statistics.detail.checkin")}},[e("roll-call",{attrs:{"task-id":t.taskId}})],1)],1)],1)}),[],!1,null,"d6535976",null));a.default=k.exports},1679:function(t,a,e){"use strict";e.r(a);var s=e(12),i=e.n(s),n=e(20),l=e.n(n),r=e(75),c=e.n(r),o=e(1903),u=e(93),d=[{title:Translator.trans("course.task"),dataIndex:"title",scopedSlots:{customRender:"customTitle"},width:240},{title:Translator.trans("live_statistics.live_start_time"),dataIndex:"startTime",scopedSlots:{customRender:"startTime"}},{title:Translator.trans("live_statistics.live_type"),dataIndex:"liveType",scopedSlots:{customRender:"liveType"}},{title:Translator.trans("live_statistics.live_time_long"),dataIndex:"length"},{title:Translator.trans("live_statistics.max_participate_count"),dataIndex:"maxStudentNum"},{title:Translator.trans("live_statistics.live_status"),dataIndex:"status",scopedSlots:{customRender:"status"}},{title:Translator.trans("live_statistics.operation"),scopedSlots:{customRender:"action"}}],_={name:"CourseManageLiveStatistics",components:{Layout:o.a},data:function(){return{courseId:$(".js-course-id").val(),data:[],columns:d,pagination:{hideOnSinglePage:!0,current:1,pageSize:10,total:0},loading:!1,keyword:""}},mounted:function(){this.fetchLiveStatistics()},methods:{onSearch:function(t){(t=c.a.trim(t))!==this.keyword&&(this.keyword=t,this.pagination.current=1,this.fetchLiveStatistics())},handleTableChange:function(t){this.pagination.current=t.current,this.fetchLiveStatistics()},fetchLiveStatistics:function(){var t=this;return l()(i.a.mark((function a(){var e,s,n,l,r,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,e=t.pagination,s=e.current,n=e.pageSize,l={params:{courseId:t.courseId,title:t.keyword,offset:(s-1)*n,limit:n}},a.next=5,u.r.get(l);case 5:r=a.sent,c=r.data,o=r.paging,t.loading=!1,t.pagination.total=o.total,t.data=c;case 11:case"end":return a.stop()}}),a)})))()},handleClickViewTask:function(t){window.open("/course/".concat(this.courseId,"/task/").concat(t,"/show"))},handleClickViewDetail:function(t){this.$router.push({name:"CourseManageLiveStatisticsDetails",query:{taskId:t}})},getTaskStatus:function(t){return{coming:"live_statistics.live_coming",playing:"live_statistics.live_playing",finished:"live_statistics.live_finished"}[t]},getLiveType:function(t){return{default:"live_type.default",pseudo:"live_type.pseudo"}[t]},handleClickExport:function(){window.open("/course/".concat(this.courseId,"/live_statistic/export?title=").concat(this.keyword))}}},v=(e(1935),e(34)),p=Object(v.a)(_,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t._f("trans")("live_statistics")))]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"clearfix"},[e("a-input-search",{staticClass:"pull-left",staticStyle:{width:"200px"},attrs:{placeholder:t._f("trans")("live_statistics.task_name_placeholder")},on:{search:t.onSearch}}),t._v(" "),e("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.handleClickExport}},[t._v("\n      "+t._s(t._f("trans")("site.btn.export"))+"\n    ")])],1),t._v(" "),e("a-table",{staticClass:"mt24",attrs:{columns:t.columns,"data-source":t.data,"row-key":function(t){return t.id},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"customTitle",fn:function(a,s){return[e("a-button",{staticStyle:{"max-width":"240px","white-space":"pre-wrap"},attrs:{type:"link"},on:{click:function(a){return t.handleClickViewTask(s.id)}}},[t._v(t._s(a))])]}},{key:"startTime",fn:function(a){return[t._v("\n      "+t._s(t.$dateFormat(a,"YYYY-MM-DD HH:mm"))+"\n    ")]}},{key:"liveType",fn:function(a){return[t._v("\n      "+t._s(t._f("trans")(t.getLiveType(a)))+"\n    ")]}},{key:"status",fn:function(a){return[e("span",{class:"task-status task-status--"+a},[t._v(t._s(t._f("trans")(t.getTaskStatus(a))))])]}},{key:"action",fn:function(a){return e("span",{},[e("a-button",{attrs:{type:"link"},on:{click:function(e){return t.handleClickViewDetail(a.id)}}},[t._v(t._s(t._f("trans")("site.btn.detail")))])],1)}}])})],1)}),[],!1,null,"12deff96",null);a.default=p.exports},1766:function(t,a,e){},1767:function(t,a,e){},1768:function(t,a,e){},1903:function(t,a,e){"use strict";var s={name:"CourseManageLayout"},i=(e(1934),e(34)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"course-manage"},[e("div",{staticClass:"course-manage__header"},[e("div",{staticClass:"course-manage__title"},[t._t("title")],2)]),t._v(" "),e("div",{staticClass:"course-manage__body"},[t._t("default")],2)])}),[],!1,null,"18594388",null);a.a=n.exports},1934:function(t,a,e){"use strict";var s=e(1766);e.n(s).a},1935:function(t,a,e){"use strict";var s=e(1767);e.n(s).a},1936:function(t,a,e){"use strict";var s=e(1768);e.n(s).a},4:function(t,a){t.exports=function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}},483:function(t,a,e){t.exports=e(726)},5:function(t,a,e){var s=e(130);function i(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),s(t,i.key,i)}}t.exports=function(t,a,e){return a&&i(t.prototype,a),e&&i(t,e),t}},726:function(t,a,e){e(727),t.exports=e(85).Reflect.deleteProperty},727:function(t,a,e){var s=e(124),i=e(398).f,n=e(173);s(s.S,"Reflect",{deleteProperty:function(t,a){var e=i(n(t),a);return!(e&&!e.configurable)&&delete t[a]}})}}]);