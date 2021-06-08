(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1383:function(t,e,n){t.exports=function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=n(t),a=n(e);function r(...t){class e{constructor(){for(let e of t)i(this,new e)}}for(let n of t)i(e,n),i(e.prototype,n.prototype);return e}function i(t,e){for(let n of Reflect.ownKeys(e))if("constructor"!==n&&"prototype"!==n&&"name"!==n){let s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s)}}class o extends(r(s.default,a.default)){}return o}(n(44),n(1386))},1386:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",s="hour",a="day",r="week",i="month",o="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+h(s,2,"0")+":"+h(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(s,i),r=n-a<0,o=e.clone().add(s+(r?-1:1),i);return+(-(s+(n-a)/(r?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:i,y:u,w:r,d:a,D:c,h:s,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=f;var v=function(t){return t instanceof k},$=function(t,e,n){var s;if(!t)return p;if("string"==typeof t)g[t]&&(s=t),e&&(g[t]=e,s=t);else{var a=t.name;g[a]=t,s=a}return!n&&s&&(p=s),s||!n&&p},y=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},_=m;_.l=$,_.i=v,_.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function f(t){this.$L=$(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(d);if(s){var a=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return _},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,o){var d=this,l=!!_.u(o)||o,f=_.p(t),h=function(t,e){var n=_.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?n:n.endOf(a)},m=function(t,e){return _.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},p=this.$W,g=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case u:return l?h(1,0):h(31,11);case i:return l?h(1,g):h(0,g+1);case r:var y=this.$locale().weekStart||0,k=(p<y?p+7:p)-y;return h(l?v-k:v+(6-k),g);case a:case c:return m($+"Hours",0);case s:return m($+"Minutes",1);case n:return m($+"Seconds",2);case e:return m($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(r,o){var d,l=_.p(r),f="set"+(this.$u?"UTC":""),h=(d={},d[a]=f+"Date",d[c]=f+"Date",d[i]=f+"Month",d[u]=f+"FullYear",d[s]=f+"Hours",d[n]=f+"Minutes",d[e]=f+"Seconds",d[t]=f+"Milliseconds",d)[l],m=l===a?this.$D+(o-this.$W):o;if(l===i||l===u){var p=this.clone().set(c,1);p.$d[h](m),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[_.p(t)]()},h.add=function(t,o){var c,d=this;t=Number(t);var l=_.p(o),f=function(e){var n=y(d);return _.w(n.date(n.date()+Math.round(e*t)),d)};if(l===i)return this.set(i,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===a)return f(1);if(l===r)return f(7);var h=(c={},c[n]=6e4,c[s]=36e5,c[e]=1e3,c)[l]||1,m=this.$d.getTime()+t*h;return _.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=_.z(this),a=this.$locale(),r=this.$H,i=this.$m,o=this.$M,u=a.weekdays,c=a.months,d=function(t,s,a,r){return t&&(t[s]||t(e,n))||a[s].substr(0,r)},f=function(t){return _.s(r%12||12,t,"0")},h=a.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:_.s(o+1,2,"0"),MMM:d(a.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,u,2),ddd:d(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:_.s(r,2,"0"),h:f(1),hh:f(2),a:h(r,i,!0),A:h(r,i,!1),m:String(i),mm:_.s(i,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:s};return n.replace(l,(function(t,e){return e||m[t]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,d){var l,f=_.p(c),h=y(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,g=_.m(this,h);return g=(l={},l[u]=g/12,l[i]=g,l[o]=g/3,l[r]=(p-m)/6048e5,l[a]=(p-m)/864e5,l[s]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[f]||p,d?g:_.a(g)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return g[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=$(t,e,!0);return s&&(n.$L=s),n},h.clone=function(){return _.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),w=k.prototype;return y.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",s],["$W",a],["$M",i],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,k,y),t.$i=!0),y},y.locale=$,y.isDayjs=v,y.unix=function(t){return y(1e3*t)},y.en=g[p],y.Ls=g,y.p={},y}()},1403:function(t,e,n){},1406:function(t,e,n){"use strict";var s={name:"ClassName",props:{record:{type:Object,required:!0,default:function(){return{}}}},computed:{className:function(){var t=this.record,e=t.chapterTitle,n=t.unitTitle,s=t.number,a=t.title,r=t.tasks,i="";if("lesson"===r.mode)i="".concat(s,". ").concat(a);else{var o=r.number.split("-");i="".concat(s,".").concat(o[1]-1," [任务]").concat(r.title)}return n&&(i="".concat(n," ").concat(i)),e&&(i=n?"".concat(e," - ").concat(i):"".concat(e," ").concat(i)),i}}},a=n(51),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-overflow"},[n("a-tooltip",[n("template",{slot:"title"},[t._v(t._s(t.className))]),t._v("\n    "+t._s(t.className)+"\n  ")],2),t._v(" "),n("br"),t._v(" "),"published"!=t.record.tasks.status?n("a-tag",{staticStyle:{"margin-top":"4px"}},[t._v("未发布")]):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},1422:function(t,e,n){"use strict";var s=n(1403);n.n(s).a},940:function(t,e,n){"use strict";n.r(e);var s=n(15),a=n.n(s),r=n(24),i=n.n(r),o=n(320),u=n(1406),c=n(1383),d=n.n(c),l=[{title:"课时",dataIndex:"lesson",scopedSlots:{customRender:"lesson"}},{title:"作业/考试",dataIndex:"name",scopedSlots:{customRender:"name"},filters:[{text:"作业",value:"homework"},{text:"考试",value:"testpaper"}]},{title:"题量",dataIndex:"item_count",scopedSlots:{customRender:"item_count"}},{title:"已批",dataIndex:"finished",scopedSlots:{customRender:"finished"}},{title:"未批",dataIndex:"reviewing",scopedSlots:{customRender:"reviewing"}},{title:"未交",dataIndex:"doing",scopedSlots:{customRender:"doing"}},{title:"开始时间",dataIndex:"startTime",scopedSlots:{customRender:"startTime"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],f=[{title:"姓名",dataIndex:"nickname",scopedSlots:{customRender:"nickname"}},{title:"成绩",dataIndex:"grade",scopedSlots:{customRender:"grade"}},{title:"提交时间",dataIndex:"end_time",scopedSlots:{customRender:"end_time"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"批阅人",dataIndex:"teacherInfo",scopedSlots:{customRender:"teacherInfo"}},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}],h={name:"HomeWorkReview",components:{ClassName:u.a},data:function(){return{columns:l,resultColumns:f,getListLoading:!1,homeworksList:[],examResultList:{},paging:{total:0,offset:0,pageSize:10},modalVisible:!1,currentTab:0,currentTask:{},status:["all","reviewing","doing","finished"],statusMap:{doing:"进行中",paused:"暂停",reviewing:"未批阅",finished:"已批阅"},gradeMap:{excellent:"优秀",good:"良好",passed:"合格",unpassed:"不合格"}}},watch:{currentTab:function(t){this.getExamResults(t)}},computed:{examResults:function(){var t=this.status[this.currentTab];return this.examResultList[t]}},created:function(){this.getHomeworkList()},methods:{getHomeworkList:function(){var t=arguments,e=this;return i()(a.a.mark((function n(){var s,r,i,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:{},e.getListLoading=!0,n.prev=2,n.next=5,o.i.getExams({multiClassId:e.$route.params.id,types:s.types||[],offset:s.offset||0,limit:s.pageSize||10});case 5:r=n.sent,i=r.data,u=r.paging,e.homeworksList=i,e.paging=d.a.assign(u,{pageSize:Number(u.limit)});case 10:return n.prev=10,e.getListLoading=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[2,,10,13]])})))()},showResultListModal:function(t,e){this.currentTask=e,this.currentTab=this.status.indexOf(t),this.modalVisible=!0},getExamResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.status[e];o.i.getExamResults({status:n,multiClassId:this.$route.params.id,taskId:this.currentTask.id}).then((function(e){e.paging.pageSize=e.paging.limit,t.$set(t.examResultList,n,e)}))},change:function(t,e,n,s){s.currentDataSource;var a={};e&&d.a.isArray(e.name)&&(a.types=e.name),t&&(a.offset=t.pageSize*(t.current-1),a.pageSize=t.pageSize),a&&this.getHomeworkList(a)}}},m=(n(1422),n(51)),p=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-spin",{attrs:{spinning:t.getListLoading}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.homeworksList,pagination:t.paging,rowKey:function(t){return t.id}},on:{change:t.change},scopedSlots:t._u([{key:"lesson",fn:function(t,e){return n("class-name",{attrs:{record:e}})}},{key:"name",fn:function(e,n){return[t._v(t._s(n.tasks.assessment.name))]}},{key:"item_count",fn:function(e,n){return[t._v(t._s(n.tasks.assessment.item_count))]}},{key:"finished",fn:function(e,s){return n("a",{on:{click:function(e){return t.showResultListModal("finished",s.tasks)}}},[t._v("\n        "+t._s(s.tasks.assessmentStatusNum.finished||0)+"\n      ")])}},{key:"reviewing",fn:function(e,s){return n("a",{on:{click:function(e){return t.showResultListModal("reviewing",s.tasks)}}},[t._v("\n        "+t._s(s.tasks.assessmentStatusNum.reviewing||0)+"\n      ")])}},{key:"doing",fn:function(e,s){return n("a",{on:{click:function(e){return t.showResultListModal("doing",s.tasks)}}},[t._v("\n        "+t._s(s.tasks.assessmentStatusNum.doing||0)+"\n      ")])}},{key:"startTime",fn:function(e,n){return[t._v("\n        "+t._s(t.$dateFormat(n.tasks.createdTime,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,s){return[n("a-space",{attrs:{size:"large"}},[n("a-button",{attrs:{type:"link"}},[n("a",{staticClass:"ant-button-link",attrs:{href:"/course/"+s.tasks.courseId+"/manage/exam/activity/"+s.tasks.activityId+"/analysis",target:"_blank"}},[t._v("\n              答题分布\n            ")])]),t._v(" "),n("a-button",{attrs:{type:"link","data-target":"#modal","data-toggle":"modal","data-url":"/course/"+s.tasks.courseId+"/activity/"+s.tasks.activityId+"/testpaper/graph"}},[t._v("\n            成绩分布\n          ")])],1)]}}])})],1),t._v(" "),n("a-modal",{attrs:{visible:t.modalVisible,footer:null,title:t.currentTask.assessment?t.currentTask.assessment.name:"",width:920},on:{cancel:function(e){t.modalVisible=!1}}},[n("a-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("a-tab-pane",{key:0,attrs:{tab:"全部"}}),t._v(" "),n("a-tab-pane",{key:1,attrs:{tab:"未批阅"}}),t._v(" "),n("a-tab-pane",{key:2,attrs:{tab:"进行中"}}),t._v(" "),n("a-tab-pane",{key:3,attrs:{tab:"已批阅"}})],1),t._v(" "),t.examResults?n("a-table",{attrs:{columns:t.resultColumns,"data-source":t.examResults.data,pagination:t.examResults.paging},scopedSlots:t._u([{key:"nickname",fn:function(e,n){return[t._v(t._s(n.userInfo.nickname))]}},{key:"grade",fn:function(e,n){return[t._v(t._s("reviewing"===n.status?"--":t.gradeMap[n.answerReportInfo.grade]))]}},{key:"teacherInfo",fn:function(e,n){return[t._v(t._s(n.teacherInfo.nickname||"--"))]}},{key:"status",fn:function(e){return[t._v("\n        "+t._s(t.statusMap[e])+"\n      ")]}},{key:"end_time",fn:function(e){return[t._v("\n        "+t._s(t.$dateFormat(e,"YYYY-MM-DD HH:mm"))+"\n      ")]}},{key:"action",fn:function(e,s){return["reviewing"===s.status?n("a",{attrs:{href:"/course/"+t.currentTask.courseId+"/manage/testpaper/"+s.id+"/check?action=check",target:"_blank"}},[t._v("去批阅")]):"finished"===s.status?n("a",{attrs:{href:"/homework/result/"+s.id+"/show?action=check",target:"_blank"}},[t._v("查看结果")]):t._e()]}}],null,!1,2664890532)}):t._e()],1)],1)}),[],!1,null,null,null);e.default=p.exports}}]);