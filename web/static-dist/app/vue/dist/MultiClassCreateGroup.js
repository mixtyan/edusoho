(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1672:function(t,e,a){"use strict";a.r(e);var i=a(9),s=a.n(i),r=a(13),n=a.n(r),l=a(41),o=a.n(l),u=a(346),c=a(1688),d=a(1846),h={name:"MultiClassCreate",components:{AsideLayout:c.a,Schedule:d.a},data:function(){return{ajaxLoading:!1,form:this.$form.createForm(this,{name:"multi_class_create"}),selectedCourseId:0,selectedCourseSetId:0,multiClassId:0,mode:"create",notificationShow:"",maxStudentNum:1e5,course:{list:[],title:"",flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},product:{list:[],flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},teacher:{list:[],title:"",flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},assistant:{list:[],title:"",flag:!0,initialValue:[],paging:{pageSize:10,current:0}}}},computed:{breadcrumbName:function(){return{create:"新建分组大班课",editor:"编辑分组大班课"}[this.mode]}},created:function(){this.fetchNotificationSetting(),this.isEdit(),this.getMultiClassSetting()},methods:{initFetch:function(){this.fetchCourse(),this.fetchAssistants(),this.fetchProducts(),this.fetchTeacher()},isEdit:function(){var t=this.$route.query.id;if(t)return this.multiClassId=t,this.mode="editor",void this.fetchEditorMultiClass();this.afterCreateCourse()},afterCreateCourse:function(){var t=this.$route.query.course;if(t)return t=JSON.parse(t),this.selectedCourseId=t.id,this.selectedCourseSetId=t.courseSetId,this.maxStudentNum=t.maxStudentNum>0?t.maxStudentNum:1e5,this.course.list.push(t),this.$set(this.course,"initialValue",t.id),this.fetchCourse(),this.fetchProducts(),void this.fetchCourseInfo(t.id);this.initFetch()},duplicateRemoval:function(t,e){o.a.forEach(t,(function(a,i){if(a.id==e)return t.splice(i,1),!1}))},disabledTeacher:function(t){var e=t||this.form.getFieldValue("assistantIds")||this.assistant.initialValue;o.a.forEach(this.teacher.list,(function(t){o.a.includes(e,t.id)||(t.disabled=!1),o.a.forEach(e,(function(e){t.id==e&&(t.disabled=!0)}))}))},disabledAssistant:function(t){var e=t||this.form.getFieldValue("teacherId")||this.teacher.initialValue;o.a.forEach(this.assistant.list,(function(t){t.id==e?t.disabled=!0:t.disabled=!1}))},fetchNotificationSetting:function(){var t=this;u.E.get("wechat_message_subscribe").then((function(e){t.notificationShow=e.enable}))},fetchCourseInfo:function(t){var e=this;this.form.resetFields(["teacherId","assistantIds"]),u.g.getSingleCourse(t).then((function(t){var a=t.teachers,i=t.assistants,s=t.maxStudentNum,r=a[0],n=i;e.teacher={list:[r],title:"",flag:!0,initialValue:r.id,paging:{pageSize:10,current:0}};var l=[];o.a.forEach(n,(function(t){l.push(t.id)})),e.assistant={list:n,title:"",flag:!0,initialValue:l,paging:{pageSize:10,current:0}},e.form.setFieldsValue({teacherId:r.id,assistantIds:l,maxStudentNum:s}),e.fetchAssistants(),e.fetchTeacher()}))},fetchEditorMultiClass:function(){var t=this;u.t.get(this.multiClassId).then((function(e){var a=e.title,i=e.course,s=e.courseId,r=e.product,n=e.productId,l=e.teachers,o=e.teacherIds,u=e.assistants,c=e.assistantIds,d=e.maxStudentNum,h=e.service_setting_type,f=e.service_group_num,m=e.group_limit_num,p=e.isReplayShow,g=e.liveRemindTime;t.form.setFieldsValue({title:a,maxStudentNum:d,service_setting_type:h,service_group_num:f,group_limit_num:m,isReplayShow:p,liveRemindTime:Number(g)}),t.selectedCourseId=s,t.selectedCourseSetId=i.courseSetId,t.maxStudentNum=i.maxStudentNum>0?i.maxStudentNum:1e5,t.course.list=[i],t.course.initialValue=s,t.product.list=[r],t.product.initialValue=n,t.teacher.list=l,t.teacher.initialValue=o[0],t.assistant.list=u,t.assistant.initialValue=c,t.initFetch()}))},fetchCourse:function(){var t=this,e=this.course,a=e.title,i=e.paging,s=i.pageSize,r={isDefault:1,limit:s,offset:s*i.current,type:"live",excludeMultiClassCourses:!0,sort:"-createdTime"};a&&(r.courseSetTitleLike=a),u.g.searchCourses(r).then((function(e){t.course.paging.current++,t.course.initialValue&&t.duplicateRemoval(e.data,t.course.initialValue),t.course.list=o.a.concat(t.course.list,e.data),o.a.size(t.course.list)>=e.paging.total&&(t.course.flag=!1)}))},handleSearchCourse:o.a.debounce((function(t){this.course={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchCourse()}),300),courseScroll:o.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.course.flag&&this.fetchCourse()}),300),fetchProducts:function(){var t=this,e=this.product,a=e.title,i=e.paging,s=i.pageSize,r={limit:s,offset:s*i.current};a&&(r.keywords=a),u.w.search(r).then((function(e){t.product.paging.current++,t.product.initialValue&&t.duplicateRemoval(e.data,t.product.initialValue),t.product.list=o.a.concat(t.product.list,e.data),o.a.size(t.product.list)>=e.paging.total&&(t.product.flag=!1)}))},productScroll:o.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.product.flag&&this.fetchProducts()}),300),handleSearchProduct:o.a.debounce((function(t){this.product={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchProducts()}),300),fetchTeacher:function(){var t=this,e=this.teacher,a=e.title,i=e.paging,s=i.pageSize,r={limit:s,offset:s*i.current};a&&(r.nickname=a),u.F.search(r).then((function(e){t.teacher.paging.current++,t.teacher.initialValue&&t.duplicateRemoval(e.data,t.teacher.initialValue),t.teacher.list=o.a.concat(t.teacher.list,e.data),o.a.size(t.teacher.list)>=e.paging.total&&(t.teacher.flag=!1),t.disabledTeacher()}))},handleSearchTeacher:o.a.debounce((function(t){this.teacher={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchTeacher()}),300),teacherScroll:o.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.teacher.flag&&this.fetchTeacher()}),300),fetchAssistants:function(){var t=this,e=this.assistant,a=e.title,i=e.paging,s=i.pageSize,r={limit:s,offset:s*i.current};a&&(r.nickname=a),u.b.search(r).then((function(e){t.assistant.paging.current++,o.a.forEach(t.assistant.initialValue,(function(a){t.duplicateRemoval(e.data,a)})),t.assistant.list=o.a.concat(t.assistant.list,e.data),o.a.size(t.assistant.list)>=e.paging.total&&(t.assistant.flag=!1),t.disabledAssistant()}))},handleSearchAssistant:o.a.debounce((function(t){this.assistant={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchAssistants()}),300),assistantScroll:o.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.assistant.flag&&this.fetchAssistants()}),300),handleChangeCourse:function(t){var e=this;this.selectedCourseId=t,o.a.forEach(this.course.list,(function(a){if(a.id==t)return e.selectedCourseSetId=a.courseSet.id,e.maxStudentNum=a.maxStudentNum>0?a.maxStudentNum:1e5,!1})),this.fetchCourseInfo(t)},handleChange:function(t,e){"teacher"!==e?"assistant"===e&&this.disabledTeacher(t):this.disabledAssistant(t)},validatorTitle:function(t,e,a){var i=this;return n()(s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.K.search({type:"multiClass",title:e,exceptId:i.multiClassId});case 2:r=t.sent,r.result||a("班课名称不能与已创建的相同"),e&&e.replace(/[\u0391-\uFFE5]/g,"aa").length/2>40&&a("班课名称不能超过40个字符"),a();case 7:case"end":return t.stop()}}),t)})))()},validatorAssistant:function(t,e,a){e.length>20?a("最多选择20个助教"):a()},validateStudentNum:function(t,e,a){e&&!1===/^\+?[1-9][0-9]*$/.test(e)&&a("请输入正整数"),e>Number(this.maxStudentNum)&&a("人数范围在0-".concat(this.maxStudentNum,"人")),a()},validateAssistantNum:function(t,e,a){e&&!1===/^\+?[0-9][0-9]*$/.test(e)&&a("请输入整数"),a()},validateGroupNum:function(t,e,a){e&&!1===/^\+?[0-9][0-9]*$/.test(e)&&a("请输入整数"),a()},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){t||(a.type="group","create"!==e.mode?"editor"===e.mode&&e.editorMultiClass(a):e.createMultiClass(a))}))},createMultiClass:function(t){var e=this;this.ajaxLoading=!0,u.t.add(t).then((function(){e.cancelCreate()})).finally((function(){e.ajaxLoading=!1}))},editorMultiClass:function(t){var e=this;this.ajaxLoading=!0,u.t.editorMultiClass(this.multiClassId,t).then((function(){e.cancelCreate()})).finally((function(){e.ajaxLoading=!1}))},cancelCreate:function(){this.$router.push({name:"MultiClass",params:this.$route.params.paging||{}})},getMultiClassSetting:function(){var t=this;return n()(s.a.mark((function e(){var a,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("editor"!=t.mode){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u.x.search();case 4:a=e.sent,i=a.group_number_limit,r=a.assistant_group_limit,t.form.setFieldsValue({group_limit_num:i,service_group_num:r});case 8:case"end":return e.stop()}}),e)})))()}}},f=(a(1984),a(36)),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside-layout",{staticStyle:{"padding-bottom":"88px"},attrs:{breadcrumbs:[{name:t.breadcrumbName}]}},[a("a-form",{staticStyle:{"max-width":"1000px"},attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:20},autoComplete:"off"}},[a("a-form-item",{attrs:{label:"班课名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{trigger:"blur",rules:[{required:!0,message:"请填写班课名称"},{validator:t.validatorTitle}]}],expression:"['title', {\n          trigger: 'blur',\n          rules: [\n            { required: true, message: '请填写班课名称' },\n            { validator: validatorTitle }\n          ]\n        }]"}],attrs:{placeholder:"请输入班课名称"}})],1),t._v(" "),a("a-form-item",{attrs:{label:"选择课程"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:"editor"===t.mode?24:20}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseId",{initialValue:t.course.initialValue,rules:[{required:!0,message:"请选择课程"}]}],expression:"['courseId', {\n              initialValue: course.initialValue,\n              rules: [\n                { required: true, message: '请选择课程' }\n              ]\n            }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择课程",disabled:"editor"===t.mode},on:{popupScroll:t.courseScroll,search:t.handleSearchCourse,change:t.handleChangeCourse}},t._l(t.course.list,(function(e){return a("a-select-option",{key:e.id},[t._v("\n              "+t._s(e.courseSetTitle)+"\n            ")])})),1)],1),t._v(" "),"editor"!==t.mode?a("a-col",{attrs:{span:4}},[a("a-button",{attrs:{type:"primary",block:!0},on:{click:function(e){return t.$router.push({name:"MultiClassCreateCourse",query:{type:"group"}})}}},[a("a-icon",{attrs:{type:"plus"}}),t._v("\n            创建新课程\n          ")],1)],1):t._e()],1)],1),t._v(" "),a("a-form-item",{attrs:{label:"所属产品"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["productId",{initialValue:t.product.initialValue,rules:[{required:!0,message:"请选择归属产品"}]}],expression:"['productId', {\n          initialValue: product.initialValue,\n          rules: [\n            { required: true, message: '请选择归属产品' }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择归属产品"},on:{popupScroll:t.productScroll,search:t.handleSearchProduct}},t._l(t.product.list,(function(e){return a("a-select-option",{key:e.id},[t._v("\n          "+t._s(e.title)+"\n        ")])})),1)],1),t._v(" "),a("a-form-item",{attrs:{label:"授课老师"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["teacherId",{initialValue:t.teacher.initialValue,rules:[{required:!0,message:"请选择授课老师"}]}],expression:"['teacherId', {\n          initialValue: teacher.initialValue,\n          rules: [\n            { required: true, message: '请选择授课老师' }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择授课教师"},on:{popupScroll:t.teacherScroll,change:function(e){return t.handleChange(e,"teacher")},search:t.handleSearchTeacher}},t._l(t.teacher.list,(function(e){return a("a-select-option",{key:e.id,attrs:{disabled:e.disabled}},[t._v("\n          "+t._s(e.nickname)+"\n        ")])})),1)],1),t._v(" "),a("a-form-item",{attrs:{label:"助教"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assistantIds",{initialValue:t.assistant.initialValue,rules:[{required:!0,message:"至少选择一位助教"},{validator:t.validatorAssistant}]}],expression:"['assistantIds', {\n          initialValue: assistant.initialValue,\n          rules: [\n            { required: true, message: '至少选择一位助教' },\n            { validator: validatorAssistant }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,mode:"multiple",placeholder:"请选择助教","option-label-prop":"label"},on:{popupScroll:t.assistantScroll,search:t.handleSearchAssistant,blur:function(){return t.handleSearchAssistant("")},change:function(e){return t.handleChange(e,"assistant")}}},t._l(t.assistant.list,(function(e){return a("a-select-option",{key:e.id,attrs:{label:e.nickname,disabled:e.disabled}},[t._v("\n          "+t._s(e.nickname)+" "),0===Number(e.isScrmBind)?a("span",{staticClass:"assistant-tip"},[t._v("提示：该助教未绑定销客助手，可能会影响学习服务")]):t._e()])})),1),t._v(" "),a("div",{staticClass:"pull-left color-gray"},[a("a-icon",{staticStyle:{color:"#bebebe"},attrs:{type:"exclamation-circle"}}),t._v("\n        用户中心设置助教\n        "),a("a",{attrs:{href:"/admin/v2/user",target:"_blank"}},[t._v("去设置")])],1)],1),t._v(" "),a("a-form-item",{staticClass:"assistant-max-number",attrs:{label:"分组容纳学员上限","wrapper-col":{span:3}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["group_limit_num",{rules:[{required:!0,message:"请输入分组容纳学员人数"},{validator:t.validateGroupNum}]}],expression:"['group_limit_num', {\n            rules: [\n              { required: true, message: '请输入分组容纳学员人数' },\n              { validator: validateGroupNum }\n             ]\n           }]"}]},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("人")])]),t._v(" "),a("a-popover",{attrs:{placement:"right"}},[a("template",{slot:"content"},[t._v("\n          第1组学员达到上限后，将自动生成第2组添加学员，依次类推\n        ")]),t._v(" "),a("svg-icon",{staticClass:"icon-tip",attrs:{icon:"icon-tip"}})],2),t._v(" "),a("span",{staticClass:"tip-color setup-tip"},[t._v("可去【参数设置】中设置默认值")])],1),t._v(" "),a("a-form-item",{attrs:{label:"排课"}},[a("Schedule",{attrs:{"course-id":t.selectedCourseId,"course-set-id":t.selectedCourseSetId}})],1),t._v(" "),a("a-form-item",{attrs:{label:"限购人数"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["maxStudentNum",{rules:[{required:!0,message:"请输入限购人数"},{validator:t.validateStudentNum}]}],expression:"['maxStudentNum', {\n        rules: [\n          { required: true, message: '请输入限购人数' },\n          { validator: validateStudentNum }\n          ]\n        }]"}],attrs:{disabled:!t.form.getFieldValue("courseId")}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("人")])])],1),t._v(" "),a("a-form-item",{attrs:{label:"直播回放观看"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["isReplayShow",{initialValue:"1"}],expression:"['isReplayShow', { initialValue: '1'}]"}],attrs:{options:[{label:"开启",value:"1"},{label:"关闭",value:"0"}]}})],1),t._v(" "),""!==t.notificationShow?a("a-form-item",{attrs:{label:"通知设置"}},[a("a-form-item",{staticStyle:{position:"relative",left:"-7.5%","margin-top":"50px"}},[a("div",{staticClass:"pull-left mr12"},[t._v("开课提醒")]),t._v(" "),t.notificationShow?a("div",[a("div",{staticClass:"pull-left"},[t._v("开课")]),t._v(" "),a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["liveRemindTime",{initialValue:5}],expression:"['liveRemindTime', { initialValue: 5 }]"}],staticClass:"pull-left ml8",staticStyle:{width:"200px"}},t._l([0,5,15,30,60,1440],(function(e){return a("a-select-option",{key:e,attrs:{value:e}},[0===e?[t._v("不通知")]:1440===e?[t._v("1天前")]:[t._v(t._s(e)+"分钟")]],2)})),1),t._v(" "),a("div",{staticClass:"pull-left ml8"},[t._v("自动发送提醒")])],1):t._e(),t._v(" "),t.notificationShow?t._e():a("div",[a("a-icon",{staticStyle:{color:"#bebebe"},attrs:{type:"info-circle"}}),t._v("\n          尚未在系统后台配置微信通知，开启配置，才可使用该功能\n          "),a("a",{attrs:{href:"/admin/v2/wechat/notification/manage",target:"_blank"}},[t._v("去设置")])],1)])],1):t._e()],1),t._v(" "),a("div",{staticClass:"create-multi-class-btn-group"},[a("a-space",{attrs:{size:"large"}},[a("a-button",{attrs:{type:"primary",loading:t.ajaxLoading},on:{click:t.handleSubmit}},[t._v("\n        "+t._s("editor"===t.mode?"确定":"立即创建")+"\n      ")]),t._v(" "),a("a-button",{on:{click:t.cancelCreate}},[t._v("\n        取消\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports},1813:function(t,e,a){},1984:function(t,e,a){"use strict";var i=a(1813);a.n(i).a}}]);