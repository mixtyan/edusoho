(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{130:function(t,e,r){t.exports=r(593)},1677:function(t,e,r){"use strict";r.r(e);var a=r(12),i=r.n(a),n=r(20),s=r.n(n),o=r(1705),u=r(1733),l=r(93),c=r(28),d="/api/timeout_review",v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(t.query,t.params),r=void 0===e?{}:e;t.data;return c.a.get("".concat(d),{params:r})},_=r(75),f=r.n(_),p=[{title:"学员",dataIndex:"userInfo",width:"15%",ellipsis:!0,scopedSlots:{customRender:"userInfo"}},{title:"课时名称",dataIndex:"activity.title",ellipsis:!0},{title:"所属班课",dataIndex:"multiClass",ellipsis:!0,scopedSlots:{customRender:"multiClass"}},{title:"助教老师",width:"15%",dataIndex:"assistantInfo.nickname"},{title:"作业/考试",dataIndex:"activity",width:"10%",ellipsis:!0,scopedSlots:{customRender:"activity"}},{title:"题量",dataIndex:"assessment.item_count",width:"8%",ellipsis:!0},{title:"提交时间",dataIndex:"end_time",width:"160px",scopedSlots:{customRender:"end_time"}}],m={name:"index",components:{AsideLayout:o.a,userInfoTable:u.a},data:function(){return{columns:p,overTimeTaskList:[],getListLoading:!1,paging:{total:0,offset:0,pageSize:10},modalShowUser:{},viewStudentInfoVisible:!1}},computed:{},created:function(){this.getOverTimeList(this.paging)},methods:{getOverTimeList:function(){var t=arguments,e=this;return s()(i.a.mark((function r(){var a,n,s,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(a=t.length>0&&void 0!==t[0]?t[0]:{}).limit=a.pageSize||10,a.offset=a.offset||0,e.getListLoading=!0,r.prev=4,r.next=7,v({params:a});case 7:n=r.sent,s=n.data,(o=n.paging).page=o.offset/o.limit+1,o.pageSize=Number(o.limit),o.current=a.current||1,e.overTimeTaskList=s,e.paging=o;case 15:return r.prev=15,e.getListLoading=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[4,,15,18]])})))()},viewStudentInfo:function(t){var e=this;return s()(i.a.mark((function r(){return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.K.get(t);case 2:e.modalShowUser=r.sent,e.viewStudentInfoVisible=!0;case 4:case"end":return r.stop()}}),r)})))()},close:function(){this.viewStudentInfoVisible=!1},change:function(t,e,r){var a={};t&&(a.offset=t.pageSize*(t.current-1),a.pageSize=t.pageSize,a.current=t.current),f.a.keys(a).length>0&&this.getOverTimeList(a)}}},h=r(34),g=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside-layout",{attrs:{breadcrumbs:[{name:"超时未批阅作业"}]}},[r("a-spin",{attrs:{spinning:t.getListLoading}},[r("a-table",{attrs:{columns:t.columns,"data-source":t.overTimeTaskList,pagination:t.paging,rowKey:"id"},on:{change:t.change},scopedSlots:t._u([{key:"userInfo",fn:function(e){return[r("a",{attrs:{href:"javascript:;",title:e.nickname},on:{click:function(r){return t.viewStudentInfo(e.id)}}},[t._v(t._s(e.nickname))])]}},{key:"multiClass",fn:function(e){return[r("a",{attrs:{href:"/admin/v2/multi_class/index#/manage/"+e.id+"/class_info",title:e.title}},[t._v(t._s(e.title))])]}},{key:"activity",fn:function(e){return["testpaper"===e.mediaType?r("span",[t._v("考试")]):t._e(),t._v(" "),"homework"===e.mediaType?r("span",[t._v("作业")]):t._e()]}},{key:"end_time",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}}])}),t._v(" "),r("a-modal",{attrs:{title:"学员详细信息",visible:t.viewStudentInfoVisible},on:{cancel:t.close}},[r("userInfoTable",{attrs:{user:t.modalShowUser}}),t._v(" "),r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2)],1)],1)}),[],!1,null,"a018d4c4",null);e.default=g.exports},1704:function(t,e,r){},1705:function(t,e,r){"use strict";var a={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""},titleTip:{type:String,default:""}}},i=(r(1706),r(34)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside-layout"},[r("div",{staticClass:"aside-layout-header"},[r("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,a){return r("a-breadcrumb-item",{key:a},[e.href?[r("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1),t._v(" "),t.headerTip?r("a-popover",{attrs:{placement:"bottomLeft"}},[r("template",{slot:"content"},[r("div",{staticClass:"aside-header-tip",domProps:{innerHTML:t._s(t.headerTip)}})]),t._v(" "),r("span",{staticClass:"aside-header-title-icon"},[r("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),r("span",{staticClass:"icon-circle"},[t._v(t._s(t.headerTitle))])],1)],2):t._e(),t._v(" "),t.titleTip?r("span",{staticClass:"aside-header-title-icon"},[t._v(t._s(t.titleTip))]):t._e()],1),t._v(" "),r("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=n.exports},1706:function(t,e,r){"use strict";var a=r(1704);r.n(a).a},1733:function(t,e,r){"use strict";var a={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var r="";return r+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(r+=" / "+e+" 本机IP"),r},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},i=r(34),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table table-striped table-condenseda table-bordered"},[r("tbody",[r("tr",[r("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),r("td",{attrs:{width:"70%"}},[r("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.uuid)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user?t.user.user.nickname:"")+"\n      ")])]),t._v(" "),r("tr",[r("th",[t._v("Email")]),t._v(" "),r("td",[t._v(t._s(t.user.profile?t.user.profile.email:"- -"))])]),t._v(" "),r("tr",[r("th",[t._v("用户组")]),t._v(" "),r("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),r("tr",[r("th",[t._v("注册时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),r("tr",[r("th",[t._v("最近登录时间/IP")]),t._v(" "),r("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),r("tr",[r("th",[t._v("姓名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),r("tr",[r("th",[t._v("性别")]),t._v(" "),r("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),r("tr",[r("th",[t._v("身份证号")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),r("tr",[r("th",[t._v("手机号码")]),t._v(" "),r("td",[r("mobile-ice",{attrs:{mobile:t.formatStr(t.user.profile.mobile),encryptedMobile:t.user.profile.encryptedMobile}})],1)]),t._v(" "),r("tr",[r("th",[t._v("公司")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),r("tr",[r("th",[t._v("职业")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),r("tr",[r("th",[t._v("头衔")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),r("tr",[r("th",[t._v("个人签名")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),r("tr",[r("th",[t._v("自我介绍")]),t._v(" "),r("td",{staticClass:"editor-text",domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),r("tr",[r("th",[t._v("个人网站")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),r("tr",[r("th",[t._v("微博")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),r("tr",[r("th",[t._v("微信")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),r("tr",[r("th",[t._v("QQ")]),t._v(" "),r("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=n.exports},4:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},483:function(t,e,r){t.exports=r(726)},5:function(t,e,r){var a=r(130);function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),a(t,i.key,i)}}t.exports=function(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}},726:function(t,e,r){r(727),t.exports=r(85).Reflect.deleteProperty},727:function(t,e,r){var a=r(124),i=r(398).f,n=r(173);a(a.S,"Reflect",{deleteProperty:function(t,e){var r=i(n(t),e);return!(r&&!r.configurable)&&delete t[e]}})}}]);