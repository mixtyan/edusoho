!function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={240:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([1524,0]),n()}({1524:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(5),i=n.n(a);new(function(){function t(){o()(this,t),this.$header=$(".js-group-header"),this.init()}return i()(t,[{key:"init",value:function(){this.bindEvent()}},{key:"bindEvent",value:function(){var t=this;this.$header.on("click","#add-btn",(function(e){return t.addGroup(e)})),this.$header.on("click","#exit-btn",(function(e){return t.exitGroup(e)}))}},{key:"addGroup",value:function(t){$(t.target).addClass("disabled"),this.btnOperated(t)}},{key:"exitGroup",value:function(t){var e=this;cd.confirm({title:Translator.trans("group.manage.member_exit"),content:Translator.trans("group.manage.member_exit_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){e.btnOperated(t)}))}},{key:"btnOperated",value:function(t){var e=$(t.target).data("url");$.post(e,(function(t){"success"===t.status?window.location.reload():cd.message({type:"danger",message:Translator.trans(t.message)})}))}}]),t}())}});