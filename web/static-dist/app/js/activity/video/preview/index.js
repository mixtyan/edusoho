!function(e){function t(t){for(var r,a,u=t[0],i=t[1],p=t[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);s.length;)s.shift()();return l.push.apply(l,p||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={52:0},l=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var c=i;l.push([1408,0]),n()}({1408:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),l=n(3),a=n.n(l),u=n(112),i=n.n(u),p=n(133);new(function(){function e(t){o()(this,e),this.player={},this.container=t}return a()(e,[{key:"play",value:function(){$("#swf-player").length?this._playerSwf():this._playVideo()}},{key:"_playerSwf",value:function(){var e="swf-player";i.a.embedSWF($("#"+e).data("url"),e,"100%","100%","9.0.0",null,null,{wmode:"opaque",allowFullScreen:"true"})}},{key:"_playVideo",value:function(){new p.a({name:"partner",project:"PlayerProject",children:[],type:"parent"}).on("ended",(function(){$("#task-preview-player").html($(".js-time-limit-dev").html())}))}}]),e}())("#video-content").play()}});