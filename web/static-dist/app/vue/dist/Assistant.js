(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{107:function(t,e,n){t.exports=n(358)},1387:function(t,e,n){},1388:function(t,e,n){"use strict";var r={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0}}},a=(n(1389),n(30)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside-layout"},[n("div",{staticClass:"aside-layout-header"},[n("a-breadcrumb",{staticClass:"pull-left",attrs:{separator:"/"}},t._l(t.breadcrumbs,(function(e,r){return n("a-breadcrumb-item",{key:r},[e.href?[n("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])]:e.pathName?[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.$router.push({name:e.pathName})}}},[t._v(t._s(e.name))])]:[t._v("\n          "+t._s(e.name)+"\n        ")]],2)})),1)],1),t._v(" "),n("div",{staticClass:"aside-layout-main"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=s.exports},1389:function(t,e,n){"use strict";var r=n(1387);n.n(r).a},1393:function(t,e,n){"use strict";var r={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var n="";return n+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(n+=" / "+e+" 本机IP"),n},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},a=n(30),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped table-condenseda table-bordered"},[n("tbody",[n("tr",[n("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),n("td",{attrs:{width:"70%"}},[n("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.id)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user.nickname)+"\n      ")])]),t._v(" "),n("tr",[n("th",[t._v("Email")]),t._v(" "),n("td",[t._v(t._s(t.user.profile.email||"- -"))])]),t._v(" "),n("tr",[n("th",[t._v("用户组")]),t._v(" "),n("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),n("tr",[n("th",[t._v("注册时间/IP")]),t._v(" "),n("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),n("tr",[n("th",[t._v("最近登录时间/IP")]),t._v(" "),n("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),n("tr",[n("th",[t._v("姓名")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),n("tr",[n("th",[t._v("性别")]),t._v(" "),n("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),n("tr",[n("th",[t._v("身份证号")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),n("tr",[n("th",[t._v("手机号码")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.mobile)))])]),t._v(" "),n("tr",[n("th",[t._v("公司")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),n("tr",[n("th",[t._v("职业")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),n("tr",[n("th",[t._v("头衔")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),n("tr",[n("th",[t._v("个人签名")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),n("tr",[n("th",[t._v("自我介绍")]),t._v(" "),n("td",{domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),n("tr",[n("th",[t._v("个人网站")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),n("tr",[n("th",[t._v("微博")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),n("tr",[n("th",[t._v("微信")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),n("tr",[n("th",[t._v("QQ")]),t._v(" "),n("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=s.exports},1395:function(t,e,n){},1412:function(t,e,n){"use strict";var r=n(1395);n.n(r).a},224:function(t,e,n){n(225);var r=n(51).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},225:function(t,e,n){var r=n(137),a=n(185).f;n(357)("getOwnPropertyDescriptor",(function(){return function(t,e){return a(r(t),e)}}))},357:function(t,e,n){var r=n(76),a=n(51),s=n(326);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*s((function(){n(1)})),"Object",i)}},358:function(t,e,n){n(359);var r=n(51).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},359:function(t,e,n){var r=n(76);r(r.S+r.F*!n(143),"Object",{defineProperties:n(408)})},360:function(t,e,n){n(361),t.exports=n(51).Object.getOwnPropertyDescriptors},361:function(t,e,n){var r=n(76),a=n(362),s=n(137),i=n(185),o=n(410);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=s(t),c=i.f,u=a(r),l={},f=0;u.length>f;)void 0!==(n=c(r,e=u[f++]))&&o(l,e,n);return l}})},362:function(t,e,n){var r=n(380),a=n(364),s=n(135),i=n(100).Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(s(t)),n=a.f;return n?e.concat(n(t)):e}},363:function(t,e,n){n(409),t.exports=n(51).Object.getOwnPropertySymbols},39:function(t,e,n){var r=n(130);t.exports=function(t,e,n){return e in t?r(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},47:function(t,e,n){t.exports=n(667)},667:function(t,e,n){n(668),t.exports=n(51).Object.keys},668:function(t,e,n){var r=n(378),a=n(379);n(357)("keys",(function(){return function(t){return a(r(t))}}))},74:function(t,e,n){t.exports=n(224)},81:function(t,e,n){t.exports=n(360)},82:function(t,e,n){t.exports=n(363)},931:function(t,e,n){"use strict";n.r(e);var r=n(130),a=n.n(r),s=n(107),i=n.n(s),o=n(81),c=n.n(o),u=n(74),l=n.n(u),f=n(82),d=n.n(f),v=n(47),p=n.n(v),_=n(29),m=n.n(_),h=n(43),b=n.n(h),g=n(39),k=n.n(g),y=n(1388),w=n(553),x=n(1393),O=n(68),S=n.n(O),P={name:"PermissionModal",props:{visible:{type:Boolean,required:!0}},data:function(){return{replaceFields:{title:"title",key:"code"},checkedKeys:[],treeData:[],permissions:[]}},created:function(){this.getAssistantPermission()},methods:{getAssistantPermission:function(){var t=this;w.b.search().then((function(e){var n=e.menu,r=e.permissions;!function t(e){S.a.forEach(e,(function(e){e.disabled=!!e.disabled,e.children&&t(e.children)}))}(n),t.treeData=n,t.permissions=r,t.checkedKeys=r}))},handleOk:function(){var t=this;w.b.add({permissions:this.checkedKeys}).then((function(e){t.$message.success("更新成功"),t.handleCancel()}))},handleCancel:function(){this.getAssistantPermission(),this.$emit("cancel-permission-modal")},onCheck:function(t){this.checkedKeys=t.checked}}},j=(n(1412),n(30)),C=Object(j.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{staticClass:"permission-modal",attrs:{title:"助教权限管理",visible:t.visible,okText:"保存",cancelText:"取消",destroyOnClose:!0},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("a-tree",{attrs:{checkable:"","default-expand-all":!0,checkStrictly:!0,"tree-data":t.treeData,"default-checked-keys":t.permissions,"replace-fields":t.replaceFields},on:{check:t.onCheck}})],1)}),[],!1,null,"4f2ecae4",null).exports;function M(t,e){var n=p()(t);if(d.a){var r=d()(t);e&&(r=r.filter((function(e){return l()(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){k()(t,e,n[e])})):c.a?i()(t,c()(n)):M(Object(n)).forEach((function(e){a()(t,e,l()(n,e))}))}return t}var I=[{title:"用户名",dataIndex:"nickname"},{title:"最近登录",scopedSlots:{customRender:"loginInfo"}},{title:"操作",scopedSlots:{customRender:"action"}}],T={name:"assistants",components:{userInfoTable:x.a,AsideLayout:y.a,PermissionModal:C},data:function(){return{visible:!1,user:{},columns:I,pageData:[],loading:!1,pagination:{},keyWord:"",permissionModalVisible:!1}},created:function(){this.fetchAssistant()},methods:{handleTableChange:function(t){var e=D({},this.pagination);e.current=t.current,this.pagination=e;var n={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.fetchAssistant(n)},fetchAssistant:function(t){var e=this;return b()(m.a.mark((function n(){var r,a,s,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,w.a.search(D({limit:10,nickname:e.keyWord},t));case 3:r=n.sent,a=r.data,s=r.paging,(i=D({},e.pagination)).total=s.total,e.loading=!1,e.pageData=a,e.pagination=i;case 11:case"end":return n.stop()}}),n)})))()},onSearch:function(t){var e=this;return b()(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.keyWord=t,e.pagination.current=1,e.fetchAssistant();case 3:case"end":return n.stop()}}),n)})))()},edit:function(t){var e=this;return b()(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.p.get(t);case 2:e.user=n.sent,e.visible=!0;case 4:case"end":return n.stop()}}),n)})))()},close:function(){this.visible=!1},showPermissionModal:function(){this.permissionModalVisible=!0},hidePermissionModal:function(){this.permissionModalVisible=!1}}},A=Object(j.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside-layout",{attrs:{breadcrumbs:[{name:"助教管理"}]}},[n("div",{staticClass:"clearfix cd-mb24"},[n("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:t.onSearch}}),t._v(" "),n("a-button",{staticClass:"pull-right",attrs:{type:"primary"},on:{click:t.showPermissionModal}},[t._v("助教权限设置")])],1),t._v(" "),n("a-table",{attrs:{columns:t.columns,"data-source":t.pageData,rowKey:"id",pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"loginInfo",fn:function(e){return n("div",{},[n("div",[t._v(t._s(t.$dateFormat(e.loginTime,"YYYY-MM-DD HH:mm")))]),t._v(" "),n("div",{staticClass:"color-gray text-sm"},[t._v(t._s(e.loginIp))])])}},{key:"action",fn:function(e){return n("a-button",{attrs:{type:"link"},on:{click:function(n){return t.edit(e.id)}}},[t._v("查看")])}}])}),t._v(" "),n("a-modal",{attrs:{title:"助教详细信息",visible:t.visible},on:{cancel:t.close}},[n("userInfoTable",{attrs:{user:t.user}}),t._v(" "),n("template",{slot:"footer"},[n("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2),t._v(" "),n("permission-modal",{attrs:{visible:t.permissionModalVisible},on:{"cancel-permission-modal":t.hidePermissionModal}})],1)}),[],!1,null,null,null);e.default=A.exports}}]);