(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1483:function(t,e,s){"use strict";s.r(e);var a=s(1498),o=s(1658),r={name:"EditorLesson",components:{AsideLayout:a.a,Schedule:o.a},data:function(){return{form:this.$form.createForm(this,{name:"multi_class_editor_lesson"}),courseId:this.$route.params.id,courseSetId:this.$route.query.courseSetId,multiClassId:this.$route.query.multiClassId}},methods:{onClickGoToCourseManage:function(){this.$router.push({name:"MultiClassCourseManage",params:{id:this.multiClassId}})}}},n=(s(1802),s(30)),u=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside-layout",{staticStyle:{"padding-bottom":"88px"},attrs:{breadcrumbs:[{name:"课时设置"}]}},[s("a-form",{staticStyle:{"max-width":"1000px"},attrs:{form:t.form,"label-col":{span:4},"wrapper-col":{span:20}}},[s("a-form-item",{attrs:{label:"排课"}},[s("Schedule",{attrs:{"course-id":t.courseId,courseSetId:t.courseSetId}})],1)],1),t._v(" "),s("div",{staticClass:"create-multi-class-btn-group"},[s("a-space",{attrs:{size:"large"}},[s("a-button",{attrs:{type:"primary"},on:{click:t.onClickGoToCourseManage}},[t._v("\n        确定\n      ")]),t._v(" "),s("a-button",{on:{click:t.onClickGoToCourseManage}},[t._v("\n        取消\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},1631:function(t,e,s){},1802:function(t,e,s){"use strict";var a=s(1631);s.n(a).a}}]);