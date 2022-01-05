(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{107:function(t,e,s){t.exports=s(340)},127:function(t,e,s){t.exports=s(516)},1299:function(t,e,s){"use strict";s.r(e);var a=s(127),n=s.n(a),r=s(107),i=s.n(r),o=s(79),l=s.n(o),u=s(69),c=s.n(u),d=s(80),p=s.n(d),f=s(43),m=s.n(f),h=s(37),v=s.n(h),g=s(16),_=s.n(g),b=s(338),k=s.n(b),w=s(442),y=s.n(w),S=s(17),C=s.n(S),x=s(383),I=s.n(x),R=s(1337),M={props:{visible:{type:Boolean,required:!0,default:!1},multiClass:{type:Object,required:!0,default:{}}},data:function(){return{form:this.$form.createForm(this,{name:"add_student"})}},methods:{handleCancel:function(){this.$emit("handle-cancel"),this.form.resetFields()},handleSubmit:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.validateFields((function(e,s){console.log(e),e||R.w.add({id:t.multiClass.id,userInfo:s.name,price:s.price,remark:s.remark}).then((function(e){t.$message.success("学员添加成功！",2),t.visible=!1,window.location.reload()})).catch((function(e){t.$message.warning("学员添加失败！",2)}))}));case 1:case"end":return e.stop()}}),e)})))()},validatorName:I.a.debounce(function(){var t=y()(k.a.mark((function t(e,s,a){var n,r,i;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.h.checkStudentName(this.multiClass?this.multiClass.courseId:0,{title:s});case 2:if(n=t.sent,r=n.result,i=n.message,r){t.next=8;break}return this.form.setFields({name:{value:s,errors:[new Error(i)]}}),t.abrupt("return");case 8:a();case 9:case"end":return t.stop()}}),t,this)})));return function(e,s,a){return t.apply(this,arguments)}}(),300),validatorPrice:function(t,e,s){/^[0-9]{0,8}(\.\d{0,2})?$/.test(e)?s():s(new Error(Translator.trans("validate.positive_currency.message")))},maxPrice:function(t,e,s){C()(e)>this.multiClass.course.price?s(new Error(Translator.trans("course_manage.student_create.price_max_error_hint"))):s()}}},T=s(30),P=Object(T.a)(M,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:"添加学员",visible:t.visible},on:{cancel:t.handleCancel}},[s("a-form",{attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:20}}},[s("a-form-item",{attrs:{label:"学员",extra:"只能添加系统中已经注册的用户"}},[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入学员"},{validator:t.validatorName}]}],expression:"['name', { rules: [\n          { required: true, message: '请输入学员' },\n          { validator: validatorName }\n        ]}]"}],attrs:{placeholder:"邮箱／手机／用户名"}})],1),t._v(" "),t.multiClass.course.price?s("a-form-item",{attrs:{label:"购买价格",extra:"本课程的价格为 "+t.multiClass.course.price+" 元"}},[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{initialValue:t.multiClass.course.price,rules:[{validator:t.validatorPrice},{validator:t.maxPrice}]}],expression:"['price',\n        {\n          initialValue: multiClass.course.price,\n          rules: [\n            { validator: validatorPrice },\n            { validator: maxPrice }\n          ]\n        }]"}],attrs:{type:"text",suffix:"元"}})],1):t._e(),t._v(" "),s("a-form-item",{attrs:{label:"备注",extra:"选填"}},[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"['remark']"}]})],1)],1),t._v(" "),s("template",{slot:"footer"},[s("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("\n      取消\n    ")]),t._v(" "),s("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      确认\n    ")])],1)],2)}),[],!1,null,null,null).exports,$={props:{visible:{type:Boolean,required:!0,default:!1}},methods:{handleCancel:function(){this.$emit("handle-cancel")}}},V=Object(T.a)($,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:"学员信息",visible:t.visible,footer:null},on:{cancel:t.handleCancel}},[s("a-descriptions",{attrs:{bordered:"",column:1}},[s("a-descriptions-item",{attrs:{label:"用户名"}},[t._v("\n      Zhou Maomao\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"Email"}},[t._v("\n      1810000000\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"用户组"}},[t._v("\n      Hangzhou, Zhejiang\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"用户名"}},[t._v("\n      Zhou Maomao\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"Email"}},[t._v("\n      1810000000\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"用户组"}},[t._v("\n      Hangzhou, Zhejiang\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"Address"}},[t._v("\n      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China\n    ")]),t._v(" "),s("a-descriptions-item",{attrs:{label:"Remark"}},[t._v("\n      empty\n    ")])],1)],1)}),[],!1,null,null,null).exports,H={props:{visible:{type:Boolean,required:!0,default:!1},multiClass:{type:Object,required:!0,default:{}},selectedStudentIds:{type:Array,required:!0,default:{}},multiClassId:{required:!0,default:0}},data:function(){return{form:this.$form.createForm(this),assistant:{list:[],title:"",initialValue:[]}}},created:function(){this.fetchAssistants()},methods:{fetchAssistants:function(){var t=this,e=this.assistant.title,s={id:this.multiClassId};e&&(s.nickname=e),R.s.search(s).then((function(e){t.assistant.list=I.a.concat(t.assistant.list,e)}))},handleSearchAssistant:I.a.debounce((function(t){this.assistant={list:[],title:t},this.fetchAssistants()}),200),handleCancel:function(){this.$emit("handle-cancel"),this.form.resetFields()},handleSubmit:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.validateFields((function(e,s){console.log(e),e||R.a.add({assistantId:s.assistantId,multiClassId:t.multiClass.id,studentIds:t.selectedStudentIds}).then((function(e){t.$message.success("助教修改成功！",2),t.$emit("handle-cancel"),window.location.reload()})).catch((function(e){t.$message.warning("助教修改失败",2)}))}));case 1:case"end":return e.stop()}}),e)})))()}}},j=Object(T.a)(H,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:"批量修改助教",visible:t.visible},on:{cancel:t.handleCancel}},[s("a-form",{attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:20}}},[s("a-form-item",{attrs:{label:"选择助教"}},[s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assistantId",{initialValue:t.assistant.initialValue,rules:[{required:!0,message:"请选择助教"}]}],expression:"['assistantId', {\n          initialValue: assistant.initialValue,\n          rules: [\n            { required: true, message: '请选择助教' }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择助教"},on:{search:t.handleSearchAssistant}},t._l(t.assistant.list,(function(e){return s("a-select-option",{key:e.id},[t._v("\n          "+t._s(e.nickname)+"\n        ")])})),1)],1)],1),t._v(" "),s("template",{slot:"footer"},[s("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("\n      取消\n    ")]),t._v(" "),s("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      确认\n    ")])],1)],2)}),[],!1,null,null,null).exports,O=s(1371),q={name:"ChangeGroupModal",components:{},props:{visible:{type:Boolean,required:!0,default:!1},groupList:{type:Array,require:!0,default:{}},selectedStudentIds:{type:Array,required:!0,default:{}},multiClassId:{required:!0,default:0}},data:function(){return{form:{group:void 0},rules:{group:[{required:!0,message:"请选择分组",trigger:"change"}]}}},computed:{},created:function(){},methods:{handleCancel:function(){this.$emit("handle-cancel"),this.$refs.form.resetFields()},handleOk:function(){var t=this;this.$refs.form.validate().then(y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.w.editGroup(t.multiClassId,t.form.group,{studentIds:t.selectedStudentIds});case 2:t.$message.success("分组修改成功！"),t.handleCancel();case 4:case"end":return e.stop()}}),e)})))).catch((function(e){t.$message.warning("分组修改失败")}))}}},A=Object(T.a)(q,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{visible:t.visible,title:"批量变更分组"},on:{cancel:t.handleCancel,ok:t.handleOk}},[s("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:4},"wrapper-col":{span:20},rules:t.rules}},[s("a-form-model-item",{attrs:{label:"选择分组",prop:"group"}},[s("a-select",{attrs:{"show-search":"",placeholder:"请选择分组"},model:{value:t.form.group,callback:function(e){t.$set(t.form,"group",e)},expression:"form.group"}},t._l(t.groupList,(function(e){return s("a-select-option",{key:e.id},[t._v("\n          "+t._s(e.name)+"\n        ")])})),1)],1)],1)],1)}),[],!1,null,"1a316ba7",null).exports,E=s(1338),L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.query,s=void 0===e?{}:e,a=(t.params,t.data),n=void 0===a?{}:a;return E.a.patch("/api/multi_class/".concat(s.multiClassId,"/group_assistant/").concat(s.assistantId),n)},z={name:"EditAssistantModal",props:{visible:{type:Boolean,required:!0,default:!1},multiClass:{type:Object,required:!0,default:{}},groupId:{required:!0,default:0},multiClassId:{required:!0,default:0}},data:function(){return{form:this.$form.createForm(this),assistant:{list:[],title:"",initialValue:[]}}},created:function(){this.fetchAssistants()},methods:{fetchAssistants:function(){var t=this;return y()(k.a.mark((function e(){var s,a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.assistant.title,a={id:t.multiClassId},s&&(a.nickname=s),e.next=5,R.s.search(a);case 5:n=e.sent,t.assistant.list=I.a.concat(t.assistant.list,n);case 7:case"end":return e.stop()}}),e)})))()},handleSearchAssistant:I.a.debounce((function(t){this.assistant={list:[],title:t},this.fetchAssistants()}),200),handleCancel:function(){this.$emit("handle-cancel"),this.form.resetFields()},handleSubmit:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.validateFields(function(){var e=y()(k.a.mark((function e(s,a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=11;break}return e.prev=1,e.next=4,L({query:{multiClassId:t.multiClassId,assistantId:a.assistantId},data:{groupIds:[t.groupId]}});case 4:t.$message.success("助教修改成功！",2),t.$emit("handle-cancel"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$message.warning("助教修改失败",2);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()}}},F=Object(T.a)(z,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-modal",{attrs:{title:"修改助教",visible:t.visible},on:{cancel:t.handleCancel}},[s("a-form",{attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:20}}},[s("a-form-item",{attrs:{label:"选择助教"}},[s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assistantId",{initialValue:t.assistant.initialValue,rules:[{required:!0,message:"请选择助教"}]}],expression:"['assistantId', {\n          initialValue: assistant.initialValue,\n          rules: [\n            { required: true, message: '请选择助教' }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择助教"},on:{search:t.handleSearchAssistant}},t._l(t.assistant.list,(function(e){return s("a-select-option",{key:e.id},[t._v("\n          "+t._s(e.nickname)+"\n        ")])})),1)],1)],1),t._v(" "),s("template",{slot:"footer"},[s("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("\n      取消\n    ")]),t._v(" "),s("a-button",{key:"submit",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      确认\n    ")])],1)],2)}),[],!1,null,null,null).exports;function G(t,e){var s=m()(t);if(p.a){var a=p()(t);e&&(a=a.filter((function(e){return c()(t,e).enumerable}))),s.push.apply(s,a)}return s}function K(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?G(Object(s),!0).forEach((function(e){v()(t,e,s[e])})):l.a?i()(t,l()(s)):G(Object(s)).forEach((function(e){n()(t,e,c()(s,e))}))}return t}var U=[{title:"学员",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"手机号",dataIndex:"phone",scopedSlots:{customRender:"phone"}},{title:"学习进度",dataIndex:"learningProgressPercent",scopedSlots:{customRender:"learningProgressPercent"}},{title:"助教老师",dataIndex:"assistant",width:"10%",ellipsis:!0,scopedSlots:{customRender:"assistant"}},{title:"提问",dataIndex:"threadCount",scopedSlots:{customRender:"threadCount"}},{title:"作业提交",dataIndex:"finishedHomeworkCount",scopedSlots:{customRender:"finishedHomeworkCount"}},{title:"试卷提交",dataIndex:"finishedTestpaperCount",scopedSlots:{customRender:"finishedTestpaperCount"}},{title:"分组",dataIndex:"group.name"},{title:"有效期",dataIndex:"deadline",scopedSlots:{customRender:"deadline"}},{title:"报名时间",dataIndex:"createdTime",scopedSlots:{customRender:"createdTime"}},{title:"操作",dataIndex:"actions",scopedSlots:{customRender:"actions"}}],Y=[{title:"课时",dataIndex:"activity",scopedSlots:{customRender:"lesson"},width:"15%",ellipsis:!0},{title:"作业/考试",dataIndex:"answerScene",scopedSlots:{customRender:"exam"},width:"15%",ellipsis:!0},{title:"提交时间",dataIndex:"end_time",scopedSlots:{customRender:"end_time"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"批阅人",dataIndex:"teacherInfo",scopedSlots:{customRender:"teacherInfo"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],D={all:{total:0,offset:0,pageSize:5},reviewing:{total:0,offset:0,pageSize:5},doing:{total:0,offset:0,pageSize:5},finished:{total:0,offset:0,pageSize:5}},B={components:{AddStudentModal:P,StudentInfoModal:V,AssistantListModal:j,userInfoTable:O.a,ChangeGroupModal:A,EditAssistantModal:F},data:function(){return{groupList:[],resultColumns:Y,students:[],modalShowUser:{},selectedUser:{},multiClass:{course:{id:0}},columns:U,selectedRowKeys:[],selectedRowKeysStr:"",selectedUserIds:[],loading:!1,addStudentVisible:!1,viewStudentInfoVisible:!1,changeGroupVisible:!1,assistantListModalVisible:!1,editAssistantVisible:!1,selectedStudentIds:[],id:this.$route.params.id,getListLoading:!1,keyword:"",groupId:"",paging:{total:0,offset:0,pageSize:10},testpaperPaging:D,homeworkPaging:D,status:["all","reviewing","doing","finished"],statusMap:{doing:"进行中",paused:"暂停",reviewing:"未批阅",finished:"已批阅"},gradeMap:{excellent:"优秀",good:"良好",passed:"合格",unpassed:"不合格"},homeworkResultList:{type:Object,required:!0,default:{}},testpaperResultList:{type:Object,required:!0,default:{}},currentHomeworkTab:0,currentTestpaperTab:0,homeworkModalVisible:!1,testpaperModalVisible:!1}},computed:{hasSelected:function(){return this.selectedRowKeys.length>0},testpaperResults:function(){var t=this.status[this.currentTestpaperTab];return this.testpaperResultList[t]},homeworkResults:function(){var t=this.status[this.currentHomeworkTab];return this.homeworkResultList[t]}},watch:{currentTestpaperTab:function(t){this.getTestpaperResults(t)},currentHomeworkTab:function(t){this.getHomeworkResults(t)}},created:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getMultiClassStudents(),e.next=3,t.getMultiClass();case 3:return e.next=5,t.getMultiClassStudentsGroup();case 5:case"end":return e.stop()}}),e)})))()},befeoreRouteUpdate:function(t,e,s){this.id=t.params.id,s()},methods:{onHomeworkModalCancel:function(){this.homeworkModalVisible=!1,this.currentHomeworkTab=0,this.homeworkPaging=D,this.homeworkResultList={}},onTestpaperModalCancel:function(){this.testpaperModalVisible=!1,this.currentTestpaperTab=0,this.testpaperPaging=D,this.testpaperResultList={}},getMultiClassStudentsGroup:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.w.getGroup(t.multiClass.id);case 2:t.groupList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},updateStudentList:function(){this.editAssistantVisible=!1,this.changeGroupVisible=!1,this.getMultiClassStudents(),this.getMultiClassStudentsGroup()},getMultiClassStudents:function(){var t=arguments,e=this;return y()(k.a.mark((function s(){var a,n,r,i;return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:{},s.next=3,R.w.search({id:e.id,keyword:a.keyword||e.keyword||"",groupId:a.groupId||e.groupId||"",offset:a.offset||e.paging.offset||0,limit:a.limit||e.paging.pageSize||10});case 3:n=s.sent,r=n.data,i=n.paging,e.students=r,i.page=i.offset/i.limit+1,e.paging=_()(e.paging,i);case 9:case"end":return s.stop()}}),s)})))()},handleTestpaperTableChange:function(t){var e=this.status[this.currentTestpaperTab],s=K({},this.testpaperPaging[e]);s.current=t.current,s.offset=(t.current-1)*t.pageSize,this.testpaperPaging[e]=s;var a={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.getTestpaperResults(this.currentTestpaperTab,a)},handleHomeworkTableChange:function(t){var e=this.status[this.currentHomeworkTab],s=K({},this.homeworkPaging[e]);s.current=t.current,s.offset=(t.current-1)*t.pageSize,this.homeworkPaging[e]=s;var a={limit:t.pageSize,offset:(t.current-1)*t.pageSize};console.log(this.homeworkPaging),console.log(a),this.getHomeworkResults(this.currentHomeworkTab,a)},handleStudentTableChange:function(t){var e=K({},this.paging);e.current=t.current,e.offset=(t.current-1)*t.pageSize,this.paging=e;var s={limit:t.pageSize,offset:(t.current-1)*t.pageSize};this.getMultiClassStudents(s)},getMultiClass:function(){var t=this;return y()(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.r.get(t.id);case 2:t.multiClass=e.sent;case 3:case"end":return e.stop()}}),e)})))()},onRemoveStudent:function(t){var e=this;R.w.deleteMultiClassMember(this.multiClass.id,t).then((function(t){e.getMultiClassStudents(),e.getMultiClassStudentsGroup(),e.$message.success("移除学员成功！")})).catch((function(t){e.$message.warning("移除学员失败！")}))},onSearch:function(t){this.keyword=t,this.getMultiClassStudents({keyword:t})},onClickHomeworkModal:function(t){this.selectedUser=t,this.getHomeworkResults(),this.homeworkModalVisible=!0},onClickTestpaperModal:function(t){this.selectedUser=t,this.getTestpaperResults(),this.testpaperModalVisible=!0},start:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.selectedRowKeys=[]}),1e3)},onSelectChange:function(t){this.selectedRowKeys=t,this.getSelectedRowKeysQueryStr()},getHomeworkResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.status[e];R.x.searchStudentExamResults(this.$route.params.id,this.selectedUser.id,{status:a,type:"homework",offset:s.offset||this.homeworkPaging[a].offset||D[a].offset,limit:s.limit||this.homeworkPaging[a].pageSize||D[a].pageSize}).then((function(e){e.paging.page=e.paging.offset/e.paging.limit+1,t.homeworkPaging[a]=_()(t.homeworkPaging[a],e.paging),console.log(t.homeworkPaging[a]),t.$set(t.homeworkResultList,a,e)}))},getTestpaperResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.status[e];R.x.searchStudentExamResults(this.$route.params.id,this.selectedUser.id,{status:a,type:"testpaper",offset:s.offset||this.testpaperPaging[a].offset||D[a].offset,limit:s.limit||this.testpaperPaging[a].pageSize||D[a].pageSize}).then((function(e){e.paging.page=e.paging.offset/e.paging.limit+1,t.testpaperPaging[a]=_()(t.testpaperPaging[a],e.paging),t.$set(t.testpaperResultList,a,e)}))},addStudent:function(){this.addStudentVisible=!0},close:function(){this.viewStudentInfoVisible=!1},viewStudentInfo:function(t){var e=this;return y()(k.a.mark((function s(){return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,R.F.get(t.id);case 2:e.modalShowUser=s.sent,e.viewStudentInfoVisible=!0;case 5:case"end":return s.stop()}}),s)})))()},clickBatchUpdateAssistantModal:function(){0!==this.selectedRowKeys.length?(this.assistantListModalVisible=!0,this.selectedStudentIds=this.selectedUserIds):this.$message.error("请至少选中一项后修改",1)},clickBatchStudentGroupModal:function(){0!==this.selectedRowKeys.length?(this.changeGroupVisible=!0,this.selectedStudentIds=this.selectedUserIds):this.$message.error("请至少选中一项后修改",1)},clickAssistantGroupModal:function(){this.editAssistantVisible=!0},onBatchRemoveStudent:function(){if(0!==this.selectedRowKeys.length){var t=this;this.$confirm({title:"是否移除这些学员？",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){R.w.batchDeleteClassMember(t.multiClass.id,{userIds:t.selectedUserIds}).then((function(e){t.getMultiClassStudents(),t.getMultiClassStudentsGroup(),t.$message.success("移除学员成功！"),t.selectedRowKeys=[]})).catch((function(e){t.$message.warning("移除学员失败！")}))},onCancel:function(){console.log("Cancel")}})}else this.$message.error("请至少选中一项后移除",1)},onGroupClick:function(t){var e=t.key;this.groupId=e,this.getMultiClassStudents({groupId:e})},onSelectEmpty:function(){this.$message.error("请至少选中一项后进行修改！",1)},confirm:function(t){this.onRemoveStudent(t)},getSelectedRowKeysQueryStr:function(){var t=this,e="",s=[];this.selectedRowKeys&&this.selectedRowKeys.forEach((function(a,n){t.students.forEach((function(t,n){t.id==a&&(e="".concat(e,"&ids[]=").concat(t.user.id),s.push(t.user.id))}))})),this.selectedRowKeysStr=e,this.selectedUserIds=s}}},N=(s(1639),Object(T.a)(B,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"student-manage"},[s("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"24px"}},[s("a-input-search",{staticClass:"pull-left",staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名或手机号搜索"},on:{search:t.onSearch}}),t._v(" "),s("a-space",{staticClass:"pull-left cd-ml16",attrs:{size:"middle"}},[s("a-button",{attrs:{icon:"plus",type:"primary"},on:{click:function(e){return t.addStudent()}}},[t._v("\n        添加学员\n      ")]),t._v(" "),s("a-button",{attrs:{type:"primary","data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/importer/course-member/index?courseId="+t.multiClass.course.id}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-import"}}),t._v("\n          批量导入\n        ")],1)],1),t._v(" "),"normal"===t.multiClass.type?s("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.clickBatchUpdateAssistantModal()}}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-edit"}}),t._v("\n          修改助教\n        ")],1)],1):t._e(),t._v(" "),s("a-button",{attrs:{type:"primary"},on:{click:t.onBatchRemoveStudent}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-remove"}}),t._v("\n          批量移除\n        ")],1)],1),t._v(" "),0===t.selectedRowKeys.length?s("a-button",{attrs:{type:"primary"},on:{click:t.onSelectEmpty}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-edit"}}),t._v("\n          批量修改有效期\n        ")],1)],1):t._e(),t._v(" "),t.selectedRowKeys.length>0?s("a-button",{attrs:{type:"primary","data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/course_set/"+t.multiClass.course.courseSetId+"/manage/course/"+t.multiClass.course.id+"/student/deadline?"+t.selectedRowKeysStr}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-edit"}}),t._v("\n          批量修改有效期\n        ")],1)],1):t._e(),t._v(" "),"group"===t.multiClass.type?s("a-button",{attrs:{type:"primary"},on:{click:t.clickBatchStudentGroupModal}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-change"}}),t._v("\n          变更分组\n        ")],1)],1):t._e()],1),t._v(" "),s("a-space",{staticClass:"right-export",attrs:{size:"middle"}},[s("a-button",{staticClass:"js-export-btn",attrs:{type:"primary",href:"javascript:;","data-try-url":"/try/export/course-students","data-url":"/export/course-students","data-pre-url":"/pre/export/course-students","data-loading-text":"正在导出...","data-target-form":"#course-students-export","data-file-names":'["course-students"]'}},[s("a-space",[s("svg-icon",{attrs:{icon:"icon-export"}}),t._v("\n          批量导出\n        ")],1)],1)],1)],1),t._v(" "),s("a-modal",{attrs:{title:"学员详细信息",visible:t.viewStudentInfoVisible},on:{cancel:t.close}},[s("userInfoTable",{attrs:{user:t.modalShowUser}}),t._v(" "),s("template",{slot:"footer"},[s("a-button",{key:"back",on:{click:t.close}},[t._v(" 关闭 ")])],1)],2),t._v(" "),s("div",[s("a-row",["group"===t.multiClass.type?s("a-col",{attrs:{span:3}},[s("div",{staticClass:"student-group"},[t._v("学员分布")]),t._v(" "),s("a-menu",{attrs:{mode:"inline"},on:{select:t.onGroupClick}},[s("a-menu-item",{key:""},[s("span",[t._v("全部学员")])]),t._v(" "),t._l(t.groupList,(function(e){return s("a-menu-item",{key:e.id,staticClass:"menu-group"},[s("a-button",{staticClass:"edit-group-assistant",staticStyle:{width:"0px"},attrs:{type:"link"},on:{click:t.clickAssistantGroupModal}},[s("a-space",[s("svg-icon",{staticStyle:{color:"#46C37B"},attrs:{icon:"icon-edit"}})],1)],1),t._v(" "),s("span",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v("("+t._s(e.student_num)+")")]),t._v(" "),s("span",{staticStyle:{"margin-left":"4px"}},[t._v(t._s(e.assistant.nickname))])],1)}))],2)],1):t._e(),t._v(" "),s("a-col",{attrs:{span:"group"===t.multiClass.type?21:24}},[s("a-table",{attrs:{"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},columns:t.columns,"row-key":function(t){return t.id},pagination:t.paging,"data-source":t.students},on:{change:t.handleStudentTableChange},scopedSlots:t._u([{key:"name",fn:function(e,a){return s("a",{on:{click:function(e){return t.viewStudentInfo(a.user)}}},[t._v(t._s(a.user.nickname)),a.user.truename?s("span",[t._v("("+t._s(a.user.truename)+")")]):t._e()])}},{key:"phone",fn:function(e,s){return[t._v(t._s(s.user.verifiedMobile||"--"))]}},{key:"learningProgressPercent",fn:function(e,a){return s("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-url":"/course_set/"+t.multiClass.course.courseSetId+"/manage/course/"+t.multiClass.course.id+"/students/"+a.user.id+"/process"}},[t._v(t._s(e)+"%")])}},{key:"assistant",fn:function(e){return[t._v(t._s(e.nickname))]}},{key:"threadCount",fn:function(e){return[t._v(t._s(e))]}},{key:"finishedHomeworkCount",fn:function(e,a){return s("a",{on:{click:function(e){return t.onClickHomeworkModal(a.user)}}},[t._v(t._s(e)+"/"+t._s(a.homeworkCount))])}},{key:"finishedTestpaperCount",fn:function(e,a){return s("a",{on:{click:function(e){return t.onClickTestpaperModal(a.user)}}},[t._v(t._s(e)+"/"+t._s(a.testpaperCount))])}},{key:"deadline",fn:function(e){return[t._v(t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm")||"--"))]}},{key:"createdTime",fn:function(e){return[t._v(t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm")||"--"))]}},{key:"actions",fn:function(e,a){return[s("a-space",{attrs:{size:"middle"}},[s("a",{staticClass:"ant-dropdown-link",on:{click:function(e){return t.viewStudentInfo(a.user)}}},[t._v("查看")]),t._v(" "),s("a-popconfirm",{attrs:{title:"确定移除?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(e){return t.confirm(a.user.id)}}},[s("span",{staticStyle:{color:"#fe4040",cursor:"pointer"}},[t._v("移除")])])],1)]}}])})],1)],1)],1),t._v(" "),s("assistant-list-modal",{attrs:{visible:t.assistantListModalVisible,"multi-class-id":t.id,"multi-class":t.multiClass,"selected-student-ids":t.selectedStudentIds},on:{"handle-cancel":function(e){t.assistantListModalVisible=!1}}}),t._v(" "),s("add-student-modal",{attrs:{visible:t.addStudentVisible,"multi-class":t.multiClass},on:{"handle-cancel":function(e){t.addStudentVisible=!1}}}),t._v(" "),s("change-group-modal",{attrs:{visible:t.changeGroupVisible,groupList:t.groupList,"multi-class-id":t.id,"multi-class":t.multiClass,"selected-student-ids":t.selectedStudentIds},on:{"handle-cancel":t.updateStudentList}}),t._v(" "),s("edit-assistant-modal",{attrs:{visible:t.editAssistantVisible,"multi-class-id":t.id,"multi-class":t.multiClass,groupId:t.groupId},on:{"handle-cancel":t.updateStudentList}}),t._v(" "),s("form",{staticClass:"hide",attrs:{id:"course-students-export"}},[s("input",{attrs:{type:"hidden",name:"courseSetId"},domProps:{value:t.multiClass.course.courseSetId}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"courseId"},domProps:{value:t.multiClass.course.id}})]),t._v(" "),s("a-modal",{attrs:{visible:t.homeworkModalVisible,footer:null,title:t.selectedUser.nickname+" - 作业",width:920},on:{cancel:t.onHomeworkModalCancel}},[s("a-tabs",{model:{value:t.currentHomeworkTab,callback:function(e){t.currentHomeworkTab=e},expression:"currentHomeworkTab"}},[s("a-tab-pane",{key:0,attrs:{tab:"全部"}}),t._v(" "),s("a-tab-pane",{key:1,attrs:{tab:"未批阅"}}),t._v(" "),s("a-tab-pane",{key:2,attrs:{tab:"进行中"}}),t._v(" "),s("a-tab-pane",{key:3,attrs:{tab:"已批阅"}})],1),t._v(" "),t.homeworkResults?s("a-table",{attrs:{columns:t.resultColumns,"data-source":t.homeworkResults.data,pagination:t.homeworkPaging[t.status[t.currentHomeworkTab]]},on:{change:t.handleHomeworkTableChange},scopedSlots:t._u([{key:"lesson",fn:function(e,s){return[t._v(t._s(e.title||"--"))]}},{key:"exam",fn:function(e,s){return[t._v(t._s(e.name||"--"))]}},{key:"teacherInfo",fn:function(e,s){return[t._v(t._s(s.teacherInfo.nickname||"--"))]}},{key:"status",fn:function(e){return[t._v("\n        "+t._s(t.statusMap[e])+"\n      ")]}},{key:"end_time",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,a){return["reviewing"===a.status?s("a",{attrs:{href:"testpaper"===a.activity.mediaType?"/course/"+t.multiClass.course.id+"/manage/testpaper/"+a.id+"/check?action=check":"/course/"+t.multiClass.course.id+"/manage/homework/"+a.id+"/check?action=check",target:"_blank"}},[t._v("去批阅")]):"finished"===a.status?s("a",{attrs:{href:"/testpaper/result/"+a.id+"/show?action=check",target:"_blank"}},[t._v("查看结果")]):["doing","paused"].includes(a.status)?s("span",[t._v("--")]):t._e()]}}],null,!1,4202466841)}):t._e()],1),t._v(" "),s("a-modal",{attrs:{visible:t.testpaperModalVisible,footer:null,title:t.selectedUser.nickname+" - 试卷",width:920},on:{cancel:t.onTestpaperModalCancel}},[s("a-tabs",{model:{value:t.currentTestpaperTab,callback:function(e){t.currentTestpaperTab=e},expression:"currentTestpaperTab"}},[s("a-tab-pane",{key:0,attrs:{tab:"全部"}}),t._v(" "),s("a-tab-pane",{key:1,attrs:{tab:"未批阅"}}),t._v(" "),s("a-tab-pane",{key:2,attrs:{tab:"进行中"}}),t._v(" "),s("a-tab-pane",{key:3,attrs:{tab:"已批阅"}})],1),t._v(" "),t.testpaperResults?s("a-table",{attrs:{columns:t.resultColumns,"data-source":t.testpaperResults.data,pagination:t.testpaperPaging[t.status[t.currentTestpaperTab]]},on:{change:t.handleTestpaperTableChange},scopedSlots:t._u([{key:"lesson",fn:function(e,s){return[t._v(t._s(e.title||"--"))]}},{key:"exam",fn:function(e,s){return[t._v(t._s(e.name||"--"))]}},{key:"teacherInfo",fn:function(e,s){return[t._v(t._s(s.teacherInfo.nickname||"--"))]}},{key:"status",fn:function(e){return[t._v("\n        "+t._s(t.statusMap[e])+"\n      ")]}},{key:"end_time",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,a){return["reviewing"===a.status?s("a",{attrs:{href:"/course/"+t.multiClass.course.id+"/manage/testpaper/"+a.id+"/check?action=check",target:"_blank"}},[t._v("去批阅")]):"finished"===a.status?s("a",{attrs:{href:"/testpaper/result/"+a.id+"/show?action=check",target:"_blank"}},[t._v("查看结果")]):["doing","paused"].includes(a.status)?s("span",[t._v("--")]):t._e()]}}],null,!1,3025023754)}):t._e()],1)],1)}),[],!1,null,null,null));e.default=N.exports},1340:function(t,e,s){s(1341),t.exports=s(51).Reflect.deleteProperty},1341:function(t,e,s){var a=s(78),n=s(181).f,r=s(132);a(a.S,"Reflect",{deleteProperty:function(t,e){var s=n(r(t),e);return!(s&&!s.configurable)&&delete t[e]}})},1346:function(t,e,s){t.exports=s(1340)},1371:function(t,e,s){"use strict";var a={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(t){window.open("/user/"+t+"/about","_blank")},formatTimeIp:function(t,e){var s="";return s+=0!=t?this.$dateFormat(t,"YYYY-MM-DD HH:mm"):" -- ",""!=e&&(s+=" / "+e+" 本机IP"),s},formatStr:function(t){return void 0===t||""==t||null==t?"暂无":t},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},n=s(30),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"table table-striped table-condenseda table-bordered"},[s("tbody",[s("tr",[s("th",{attrs:{width:"30%"}},[t._v("用户名")]),t._v(" "),s("td",{attrs:{width:"70%"}},[s("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.toPersonalHomepage(t.user.user.id)}}},[t._v("个人主页")]),t._v("\n        "+t._s(t.user.user.nickname)+"\n      ")])]),t._v(" "),s("tr",[s("th",[t._v("Email")]),t._v(" "),s("td",[t._v(t._s(t.user.profile.email||"- -"))])]),t._v(" "),s("tr",[s("th",[t._v("用户组")]),t._v(" "),s("td",[t._v(t._s(t.getUserRoles))])]),t._v(" "),s("tr",[s("th",[t._v("注册时间/IP")]),t._v(" "),s("td",[t._v(t._s(t.formatTimeIp(t.user.user.createdTime,t.user.user.createdIp)))])]),t._v(" "),s("tr",[s("th",[t._v("最近登录时间/IP")]),t._v(" "),s("td",[t._v(t._s(t.formatTimeIp(t.user.user.loginTime,t.user.user.loginIp)))])]),t._v(" "),s("tr",[s("th",[t._v("姓名")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.truename)))])]),t._v(" "),s("tr",[s("th",[t._v("性别")]),t._v(" "),s("td",[t._v(t._s(t.formatGender()))])]),t._v(" "),s("tr",[s("th",[t._v("身份证号")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.idcard)))])]),t._v(" "),s("tr",[s("th",[t._v("手机号码")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.mobile)))])]),t._v(" "),s("tr",[s("th",[t._v("公司")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.company)))])]),t._v(" "),s("tr",[s("th",[t._v("职业")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.job)))])]),t._v(" "),s("tr",[s("th",[t._v("头衔")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.user.title)))])]),t._v(" "),s("tr",[s("th",[t._v("个人签名")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.signature)))])]),t._v(" "),s("tr",[s("th",[t._v("自我介绍")]),t._v(" "),s("td",{domProps:{innerHTML:t._s(t.user.profile.about||"暂无")}})]),t._v(" "),s("tr",[s("th",[t._v("个人网站")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.site)))])]),t._v(" "),s("tr",[s("th",[t._v("微博")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.weibo)))])]),t._v(" "),s("tr",[s("th",[t._v("微信")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.weixin)))])]),t._v(" "),s("tr",[s("th",[t._v("QQ")]),t._v(" "),s("td",[t._v(t._s(t.formatStr(t.user.profile.qq)))])])])])}),[],!1,null,null,null);e.a=r.exports},1471:function(t,e,s){},16:function(t,e,s){t.exports=s(518)},1639:function(t,e,s){"use strict";var a=s(1471);s.n(a).a},17:function(t,e,s){t.exports=s(609)},2:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},208:function(t,e,s){s(209);var a=s(51).Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},209:function(t,e,s){var a=s(133),n=s(181).f;s(339)("getOwnPropertyDescriptor",(function(){return function(t,e){return n(a(t),e)}}))},3:function(t,e,s){var a=s(127);function n(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),a(t,n.key,n)}}t.exports=function(t,e,s){return e&&n(t.prototype,e),s&&n(t,s),t}},339:function(t,e,s){var a=s(78),n=s(51),r=s(307);t.exports=function(t,e){var s=(n.Object||{})[t]||Object[t],i={};i[t]=e(s),a(a.S+a.F*r((function(){s(1)})),"Object",i)}},340:function(t,e,s){s(341);var a=s(51).Object;t.exports=function(t,e){return a.defineProperties(t,e)}},341:function(t,e,s){var a=s(78);a(a.S+a.F*!s(138),"Object",{defineProperties:s(384)})},342:function(t,e,s){s(343),t.exports=s(51).Object.getOwnPropertyDescriptors},343:function(t,e,s){var a=s(78),n=s(344),r=s(133),i=s(181),o=s(386);a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,s,a=r(t),l=i.f,u=n(a),c={},d=0;u.length>d;)void 0!==(s=l(a,e=u[d++]))&&o(c,e,s);return c}})},344:function(t,e,s){var a=s(362),n=s(346),r=s(132),i=s(100).Reflect;t.exports=i&&i.ownKeys||function(t){var e=a.f(r(t)),s=n.f;return s?e.concat(s(t)):e}},345:function(t,e,s){s(385),t.exports=s(51).Object.getOwnPropertySymbols},37:function(t,e,s){var a=s(127);t.exports=function(t,e,s){return e in t?a(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},43:function(t,e,s){t.exports=s(598)},474:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},523:function(t,e,s){var a=s(78),n=s(443),r=s(307),i=s(474),o="["+i+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,s){var n={},o=r((function(){return!!i[t]()||"​"!="​"[t]()})),l=n[t]=o?e(d):i[t];s&&(n[s]=l),a(a.P+a.F*o,"String",n)},d=c.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},598:function(t,e,s){s(599),t.exports=s(51).Object.keys},599:function(t,e,s){var a=s(361),n=s(360);s(339)("keys",(function(){return function(t){return n(a(t))}}))},609:function(t,e,s){s(610),t.exports=s(51).parseFloat},610:function(t,e,s){var a=s(78),n=s(611);a(a.G+a.F*(parseFloat!=n),{parseFloat:n})},611:function(t,e,s){var a=s(100).parseFloat,n=s(523).trim;t.exports=1/a(s(474)+"-0")!=-1/0?function(t){var e=n(String(t),3),s=a(e);return 0===s&&"-"==e.charAt(0)?-0:s}:a},69:function(t,e,s){t.exports=s(208)},79:function(t,e,s){t.exports=s(342)},80:function(t,e,s){t.exports=s(345)}}]);