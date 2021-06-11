(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{1403:function(t,e,a){},1419:function(t,e,a){"use strict";var i=a(1403);a.n(i).a},938:function(t,e,a){"use strict";a.r(e);var i=a(29),s=a.n(i),r=a(43),n=a.n(r),l=a(1388),c=a.n(l),o=a(553),u=a(1389),d=a(1413),h={name:"MultiClassCreate",components:{AsideLayout:u.a,Schedule:d.a},data:function(){return{ajaxLoading:!1,form:this.$form.createForm(this,{name:"multi_class_create"}),selectedCourseId:0,selectedCourseSetId:0,multiClassId:0,mode:"create",course:{list:[],title:"",flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},product:{list:[],flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},teacher:{list:[],title:"",flag:!0,initialValue:void 0,paging:{pageSize:10,current:0}},assistant:{list:[],title:"",flag:!0,initialValue:[],paging:{pageSize:10,current:0}}}},computed:{breadcrumbName:function(){return{create:"新建班课",editor:"编辑班课"}[this.mode]}},created:function(){var t=this.$route.query.id;t?(this.multiClassId=t,this.mode="editor",this.fetchEditorMultiClass()):this.initFetch();var e=this.$route.query.course;e&&(e=JSON.parse(e),this.course.list.push(e),this.$set(this.course,"initialValue",e.id))},methods:{initFetch:function(){this.fetchCourse(),this.fetchAssistants(),this.fetchProducts(),this.fetchTeacher()},duplicateRemoval:function(t,e){c.a.forEach(t,(function(a,i){if(a.id==e)return t.splice(i,1),!1}))},disabledTeacher:function(t){var e=t||this.form.getFieldValue("assistantIds")||this.assistant.initialValue;c.a.forEach(this.teacher.list,(function(t){c.a.includes(e,t.id)||(t.disabled=!1),c.a.forEach(e,(function(e){t.id==e&&(t.disabled=!0)}))}))},disabledAssistant:function(t){var e=t||this.form.getFieldValue("teacherId")||this.teacher.initialValue;c.a.forEach(this.assistant.list,(function(t){t.id==e?t.disabled=!0:t.disabled=!1}))},fetchEditorMultiClass:function(){var t=this;o.i.get(this.multiClassId).then((function(e){var a=e.title,i=e.course,s=e.courseId,r=e.product,n=e.productId,l=e.teachers,c=e.teacherIds,o=e.assistants,u=e.assistantIds;t.form.setFieldsValue({title:a}),t.selectedCourseId=s,t.selectedCourseSetId=i.courseSetId,t.course.list=[i],t.course.initialValue=s,t.product.list=[r],t.product.initialValue=n,t.teacher.list=l,t.teacher.initialValue=c[0],t.assistant.list=o,t.assistant.initialValue=u,t.initFetch()}))},fetchCourse:function(){var t=this,e=this.course,a=e.title,i=e.paging,s=i.pageSize,r={isDefault:1,limit:s,offset:s*i.current};a&&(r.titleLike=a),o.h.get("teach_courses",{params:r}).then((function(e){t.course.paging.current++,t.course.initialValue&&t.duplicateRemoval(e.data,t.course.initialValue),t.course.list=c.a.concat(t.course.list,e.data),c.a.size(t.course.list)>=e.paging.total&&(t.course.flag=!1)}))},handleSearchCourse:c.a.debounce((function(t){this.course={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchCourse()}),300),courseScroll:c.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.course.flag&&this.fetchCourse()}),300),fetchProducts:function(){var t=this,e=this.product.paging,a=e.pageSize,i={limit:a,offset:a*e.current};o.k.search(i).then((function(e){t.product.paging.current++,t.product.initialValue&&t.duplicateRemoval(e.data,t.product.initialValue),t.product.list=c.a.concat(t.product.list,e.data),c.a.size(t.product.list)>=e.paging.total&&(t.product.flag=!1)}))},productScroll:c.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.product.flag&&this.fetchProducts()}),300),fetchTeacher:function(){var t=this,e=this.teacher,a=e.title,i=e.paging,s=i.pageSize,r={limit:s,offset:s*i.current};a&&(r.nickname=a),o.n.search(r).then((function(e){t.teacher.paging.current++,t.teacher.initialValue&&t.duplicateRemoval(e.data,t.teacher.initialValue),t.teacher.list=c.a.concat(t.teacher.list,e.data),c.a.size(t.teacher.list)>=e.paging.total&&(t.teacher.flag=!1),t.disabledTeacher()}))},handleSearchTeacher:c.a.debounce((function(t){this.teacher={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchTeacher()}),300),teacherScroll:c.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.teacher.flag&&this.fetchTeacher()}),300),fetchAssistants:function(){var t=this,e=this.assistant,a=e.title,i=e.paging,s=i.pageSize,r={limit:s,offset:s*i.current};a&&(r.nickname=a),o.a.search(r).then((function(e){t.assistant.paging.current++,c.a.forEach(t.assistant.initialValue,(function(a){t.duplicateRemoval(e.data,a)})),t.assistant.list=c.a.concat(t.assistant.list,e.data),c.a.size(t.assistant.list)>=e.paging.total&&(t.assistant.flag=!1),t.disabledAssistant()}))},handleSearchAssistant:c.a.debounce((function(t){this.assistant={list:[],title:t,flag:!0,paging:{pageSize:10,current:0}},this.fetchAssistants()}),300),assistantScroll:c.a.debounce((function(t){var e=t.target;e.scrollHeight-e.offsetHeight-20<e.scrollTop&&this.assistant.flag&&this.fetchAssistants()}),300),handleChangeCourse:function(t){var e=this;this.selectedCourseId=t,c.a.forEach(this.course.list,(function(a){if(a.id==t)return e.selectedCourseSetId=a.courseSetId,!1}))},handleChange:function(t,e){"teacher"!==e?"assistant"===e&&this.disabledTeacher(t):this.disabledAssistant(t)},validatorTitle:c.a.debounce(function(){var t=n()(s.a.mark((function t(e,a,i){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.q.search({type:"multiClass",title:a,exceptId:this.multiClassId});case 2:r=t.sent,r.result?i():i("班课名称不能与已创建的相同");case 5:case"end":return t.stop()}}),t,this)})));return function(e,a,i){return t.apply(this,arguments)}}(),300),validatorAssistant:function(t,e,a){e.length>20?a("最多选择20个助教"):a()},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){t||("create"!==e.mode?"editor"===e.mode&&e.editorMultiClass(a):e.createMultiClass(a))}))},createMultiClass:function(t){var e=this;this.ajaxLoading=!0,o.i.add(t).then((function(){e.clickCancelCreate()})).finally((function(){e.ajaxLoading=!1}))},editorMultiClass:function(t){var e=this;this.ajaxLoading=!0,o.i.editorMultiClass(this.multiClassId,t).then((function(){e.clickCancelCreate()})).finally((function(){e.ajaxLoading=!1}))},clickCancelCreate:function(){this.$router.push({path:"/"})}}},f=(a(1419),a(30)),p=Object(f.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside-layout",{staticStyle:{"padding-bottom":"88px"},attrs:{breadcrumbs:[{name:t.breadcrumbName}]}},[a("a-form",{staticStyle:{"max-width":"1000px"},attrs:{form:t.form,"label-col":{span:3},"wrapper-col":{span:21}}},[a("a-form-item",{attrs:{label:"班课名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请填写班课名称"},{max:40,message:"班课名称不能超过40个字"},{validator:t.validatorTitle}]}],expression:"['title', { rules: [\n          { required: true, message: '请填写班课名称' },\n          { max: 40, message: '班课名称不能超过40个字' },\n          { validator: validatorTitle }\n        ]}]"}],attrs:{placeholder:"请输入班课名称"}})],1),t._v(" "),a("a-form-item",{attrs:{label:"选择课程"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:"editor"===t.mode?24:20}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["courseId",{initialValue:t.course.initialValue,rules:[{required:!0,message:"请选择课程"}]}],expression:"['courseId', {\n              initialValue: course.initialValue,\n              rules: [\n                { required: true, message: '请选择课程' }\n              ]\n            }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择课程",disabled:"editor"===t.mode},on:{popupScroll:t.courseScroll,search:t.handleSearchCourse,change:t.handleChangeCourse}},t._l(t.course.list,(function(e){return a("a-select-option",{key:e.id},[t._v("\n              "+t._s(e.courseSetTitle)+"\n            ")])})),1)],1),t._v(" "),"editor"!==t.mode?a("a-col",{attrs:{span:4}},[a("a-button",{attrs:{type:"primary",block:!0},on:{click:function(e){return t.$router.push({name:"MultiClassCreateCourse"})}}},[a("a-icon",{attrs:{type:"plus"}}),t._v("\n            创建新课程\n          ")],1)],1):t._e()],1)],1),t._v(" "),a("a-form-item",{attrs:{label:"所属产品"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["productId",{initialValue:t.product.initialValue,rules:[{required:!0,message:"请选择归属产品"}]}],expression:"['productId', {\n          initialValue: product.initialValue,\n          rules: [\n            { required: true, message: '请选择归属产品' }\n          ]\n        }]"}],attrs:{placeholder:"请选择归属产品"},on:{popupScroll:t.productScroll}},t._l(t.product.list,(function(e){return a("a-select-option",{key:e.id},[t._v("\n          "+t._s(e.title)+"\n        ")])})),1)],1),t._v(" "),a("a-form-item",{attrs:{label:"授课老师"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["teacherId",{initialValue:t.teacher.initialValue,rules:[{required:!0,message:"请选择授课老师"}]}],expression:"['teacherId', {\n          initialValue: teacher.initialValue,\n          rules: [\n            { required: true, message: '请选择授课老师' }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,placeholder:"请选择授课教师"},on:{popupScroll:t.teacherScroll,change:function(e){return t.handleChange(e,"teacher")},search:t.handleSearchTeacher}},t._l(t.teacher.list,(function(e){return a("a-select-option",{key:e.id,attrs:{disabled:e.disabled}},[t._v("\n          "+t._s(e.nickname)+"\n        ")])})),1)],1),t._v(" "),a("a-form-item",{attrs:{label:"助教"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assistantIds",{initialValue:t.assistant.initialValue,rules:[{required:!0,message:"至少选择一位助教"},{validator:t.validatorAssistant}]}],expression:"['assistantIds', {\n          initialValue: assistant.initialValue,\n          rules: [\n            { required: true, message: '至少选择一位助教' },\n            { validator: validatorAssistant }\n          ]\n        }]"}],attrs:{"show-search":"","filter-option":!1,mode:"multiple",placeholder:"请选择助教"},on:{popupScroll:t.assistantScroll,search:t.handleSearchAssistant,change:function(e){return t.handleChange(e,"assistant")}}},t._l(t.assistant.list,(function(e){return a("a-select-option",{key:e.id,attrs:{disabled:e.disabled}},[t._v("\n          "+t._s(e.nickname)+"\n        ")])})),1)],1),t._v(" "),a("a-form-item",{attrs:{label:"排课"}},[a("Schedule",{attrs:{"course-id":t.selectedCourseId,"course-set-id":t.selectedCourseSetId}})],1)],1),t._v(" "),a("div",{staticClass:"create-multi-class-btn-group"},[a("a-space",{attrs:{size:"large"}},[a("a-button",{attrs:{type:"primary",loading:t.ajaxLoading},on:{click:t.handleSubmit}},[t._v("\n        "+t._s("editor"===t.mode?"确定":"立即创建")+"\n      ")]),t._v(" "),a("a-button",{on:{click:t.clickCancelCreate}},[t._v("\n        取消\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);