(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{132:function(e,t,n){e.exports=n(618)},1680:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n.n(a),o=n(20),s=n.n(o),r=n(95),l=[{title:Translator.trans("live_name"),dataIndex:"title"},{title:Translator.trans("live_statistics.presenter"),dataIndex:"anchor"},{title:Translator.trans("live_playback_duration"),dataIndex:"liveTime"},{title:Translator.trans("live_statistics.live_time"),dataIndex:"liveStartTime"},{title:Translator.trans("live_statistics.operation"),scopedSlots:{customRender:"actions"}}],c={name:"CoursesetManageLivePlayback",data:function(){return{data:[],columns:l,pagination:{hideOnSinglePage:!0,current:1,pageSize:10,total:0},selectedRowKeys:[],loading:!1,visible:!1,btnLoading:!1,currentId:void 0,courseId:$(".js-course-id").val()}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0}},mounted:function(){this.fetchLiveReplay()},methods:{fetchLiveReplay:function(){var e=this;return s()(i.a.mark((function t(){var n,a,o,s,l,c,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.pagination,a=n.current,o=n.pageSize,s={params:{offset:(a-1)*o,limit:o,courseId:e.courseId}},t.next=5,r.q.get(s);case 5:l=t.sent,c=l.data,d=l.paging,e.loading=!1,e.pagination.total=d.total,e.data=c;case 11:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e){this.pagination.current=e.current,this.fetchLiveReplay()},onSelectChange:function(e){this.selectedRowKeys=e},showModal:function(e){this.currentId=[e],this.visible=!0},hiddenModal:function(){this.visible=!1},handleClickRemove:function(){this.currentId=this.selectedRowKeys,this.visible=!0},handleClickRemoveLivePlayback:function(){var e=this;return s()(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.btnLoading=!0,n={data:{ids:e.currentId}},t.next=4,r.q.delete(n);case 4:a=t.sent,a.success&&(e.$message.success(Translator.trans("message.removal_succeeded")),e.btnLoading=!1,e.visible=!1,e.pagination.current=1,e.fetchLiveReplay());case 7:case"end":return t.stop()}}),t)})))()},handleClickViewLivePlayback:function(e){window.open(e)}}},d=n(34),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mb16",staticStyle:{padding:"12px 20px",background:"#f4f4f4"}},[n("a-button",{attrs:{type:"danger",disabled:!e.hasSelected},on:{click:e.handleClickRemove}},[e._v("\n      "+e._s(e._f("trans")("site.btn.remove_playback"))+"\n    ")])],1),e._v(" "),n("a-table",{attrs:{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"row-key":function(e){return e.id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"actions",fn:function(t){return[n("a-button-group",[n("a-button",{staticStyle:{padding:"0 8px"},attrs:{type:"primary"},on:{click:function(n){return e.handleClickViewLivePlayback(t.url)}}},[e._v("\n          "+e._s(e._f("trans")("site.btn.view_playback"))+"\n        ")]),e._v(" "),n("a-dropdown",{attrs:{placement:"bottomRight"}},[n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",{on:{click:function(n){return e.showModal(t.id)}}},[e._v("\n              "+e._s(e._f("trans")("site.btn.remove_playback"))+"\n            ")])],1),e._v(" "),n("a-button",{staticStyle:{padding:"0 8px"},attrs:{type:"primary"}},[n("a-icon",{attrs:{type:"down"}})],1)],1)],1)]}}])}),e._v(" "),n("a-modal",{attrs:{title:e._f("trans")("site.btn.remove_playback"),visible:e.visible},on:{cancel:e.hiddenModal}},[e._v("\n    "+e._s(e._f("trans")("modal.content.remove_playback_resources"))+"\n    "),n("template",{slot:"footer"},[n("div",{staticClass:"clearfix"},[n("span",{staticClass:"pull-left",staticStyle:{color:"#fe4040","margin-top":"7px"}},[e._v("\n          "+e._s(e._f("trans")("live.playback.tip.cannot_be_used_normally"))+"\n        ")]),e._v(" "),n("a-button",{attrs:{type:"danger",loading:e.btnLoading},on:{click:e.handleClickRemoveLivePlayback}},[e._v("\n          "+e._s(e._f("trans")("site.btn.confirm"))+"\n        ")])],1)])],2)],1)}),[],!1,null,null,null);t.default=u.exports},4:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},5:function(e,t,n){var a=n(132);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),a(e,i.key,i)}}e.exports=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},510:function(e,t,n){e.exports=n(747)},747:function(e,t,n){n(748),e.exports=n(85).Reflect.deleteProperty},748:function(e,t,n){var a=n(126),i=n(425).f,o=n(175);a(a.S,"Reflect",{deleteProperty:function(e,t){var n=i(o(e),t);return!(n&&!n.configurable)&&delete e[t]}})}}]);