!function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],d=0,c=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);c.length;)c.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={278:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=u;o.push([1423,0]),n()}({1423:function(e,t,n){"use strict";n.r(t);var r=n(137),a=n.n(r),o=n(476),i=n(158),l=$("#global-player"),u=function(){var e=new QiQiuYun.Player({id:"global-player",sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:l.data("resNo"),token:l.data("token"),user:{id:l.data("userId"),name:l.data("userName")},playbackRates:l.data("enablePlaybackRates")?["0.5","1.0","1.25","1.5","2.0"]:0}),t=new i.a({name:"parent",project:"PlayerProject",type:"child"});e.on("video.timeupdate",(function(e){t.sendToParent("video.timeupdate",e)}))};"video"===l.data("fileType")&&"flash"===Object(o.a)()?function(){if(a.a.hasFlashPlayerVersion("11"))u();else{var e='\n    <div class="alert alert-warning alert-dismissible fade in" role="alert">\n      <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">×</span>\n      </button>\n      '.concat(Translator.trans("site.flash_not_install_hint"),"\n    </div>");l.html(e).show()}}():u()},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return e=document.createElement("video"),["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some((function(t){return/maybe|probably/i.test(e.canPlayType(t))}))?"native":window.MediaSource?"hls":!!function(){var e={};if(e.ie9=/MSIE\s+9.0/i.test(navigator.userAgent),e.ie10=/MSIE\s+10.0/i.test(navigator.userAgent),e.ie11=/Trident\/7\./.test(navigator.userAgent),e.edge=/Edge\/13./i.test(navigator.userAgent),e.ie9||e.ie10||e.ie11||e.edge)return!0}()&&"flash";var e}}});