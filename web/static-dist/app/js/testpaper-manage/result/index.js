!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=1523)}({1523:function(e,t){var r=echarts.init(document.getElementById("line-data")),a=$.parseJSON($("#data").val());r.setOption({color:["#0E4D93","#687F92"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"5%",containLabel:!0},xAxis:[{type:"category",name:Translator.trans("testpaper_manage.result_graph.score_distribution"),nameLocation:"middle",nameGap:25,data:a.xScore,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:Translator.trans("testpaper_manage.result_graph.person_num"),minInterval:1}],series:[{name:Translator.trans("testpaper_manage.result_graph.first_score_num"),type:"bar",data:a.yFirstNum},{name:Translator.trans("testpaper_manage.result_graph.max_score_num"),type:"bar",data:a.yMaxNum}]})}});