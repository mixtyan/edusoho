!function(e){function t(t){for(var r,o,u=t[0],s=t[1],l=t[2],c=0,f=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={460:0},a={460:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{451:1}[e]&&t.push(o[e]=new Promise((function(t,n){for(var r=e+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=(p=i[s]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===r||l===a))return t()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var p;if((l=(p=c[s]).getAttribute("data-href"))===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=function(e){return u.p+""+({1:"vendors~app/vue/dist/AppSetting~app/vue/dist/Assistant~app/vue/dist/ClassroomManageLiveStatistics~ap~efbc9a34",2:"app/vue/dist/AppSetting~app/vue/dist/Assistant~app/vue/dist/ClassroomManageLiveStatistics~app/vue/di~f3fd0033",451:"app/vue/dist/WrongQuestionBook"}[e]||e)+".js"}(e);var l=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static-dist/",u.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;i.push([1548,0]),n()}({1548:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n(64),a=n(65),i=[{path:"/",component:function(){return Promise.all([n.e(1),n.e(2),n.e(451)]).then(n.bind(null,1686))},children:[{path:"",name:"CourseWrongQuestion",meta:{current:"course"},component:function(){return Promise.all([n.e(1),n.e(2),n.e(451)]).then(n.bind(null,1687))}},{path:"classroom",name:"ClassroomWrongQuestion",meta:{current:"classroom"},component:function(){return Promise.all([n.e(1),n.e(2),n.e(451)]).then(n.bind(null,1688))}},{path:"question_bank",name:"QuestionBankWrongQuestion",meta:{current:"question-bank"},component:function(){return Promise.all([n.e(1),n.e(2),n.e(451)]).then(n.bind(null,1689))}}]}],u=new o.a({mode:"hash",routes:i});new r.a({el:"#app",components:{AntConfigProvider:a.a},router:u,template:"<ant-config-provider />"})}});