!function(t){function e(e){for(var r,i,u=e[0],c=e[1],l=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(s&&s(e);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={364:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=c;a.push([1489,0]),n()}({1489:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(5),i=n.n(a),u=n(228);new(function(){function t(e){o()(this,t),this.element=e.element,this.avatarCrop=e.avatarCrop,this.saveBtn=e.saveBtn,this.goBack=e.goBack,this.init()}return i()(t,[{key:"init",value:function(){var t=this.imageCrop();this.initEvent(t)}},{key:"initEvent",value:function(t){var e=this,n=$(this.element);n.on("click",this.goBack,(function(t){return e.goBackEvent(t)})),n.on("click",this.saveBtn,(function(e){e.stopPropagation(),t.crop({imgs:{large:[200,200],medium:[120,120],small:[48,48]}})}))}},{key:"goBackEvent",value:function(t){var e=$(t.currentTarget);document.location.href=e.data("gotoUrl")}},{key:"imageCrop",value:function(){var t=this,e=new u.a({element:this.avatarCrop,cropedWidth:200,cropedHeight:200});return e.afterCrop=function(e){var n=$(t.saveBtn),r=n.data("url");$.post(r,{images:e},(function(){document.location.href=n.data("gotoUrl")}))},e}}]),t}())({element:"#avatar-crop-form",avatarCrop:"#avatar-crop",saveBtn:"#upload-avatar-btn",goBack:".js-go-back"})}});