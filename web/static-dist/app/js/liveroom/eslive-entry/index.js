/*! For license information please see index.js.LICENSE.txt */
!function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={266:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([1412,0]),n()}({1412:function(t,e,n){"use strict";n.r(e);var r=n(12),o=n.n(r),i=n(20),a=n.n(i),s=n(743),l=n.n(s),c=$("#eslive-params"),u=new l.a;a()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.connect({container:"eslive-container",url:c.data("url"),watermark:c.data("watermark")});case 2:case"end":return t.stop()}}),t)})))()},743:function(t,e,n){t.exports=function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e={exports:{}};!function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(n)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}(e);var n=t(e.exports);function r(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){t.done?n(t.value):o(t.value).then(a,s)}l((r=r.apply(t,e||[])).next())}))}var o={exports:{}};function i(){}i.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},o.exports=i;var a=o.exports.TinyEmitter=i,s="application/x-postmate-v1+json",l=5,c=0,u=function(){return++c},d=function(t){var e=document.createElement("a");e.href=t;var n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||n+"//"+r},p={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},h=function(t,e){return!("string"==typeof e&&t.origin!==e||!t.data||"object"===n(t.data)&&!("postmate"in t.data)||t.data.type!==s||!p[t.data.postmate])},f=function(t,e){var n="function"==typeof t[e]?t[e]():t[e];return y.Promise.resolve(n)},m=function(){function t(t){var e=this;this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.events={},this.listener=function(t){if(!h(t,e.childOrigin))return!1;var n=((t||{}).data||{}).value||{},r=n.data,o=n.name;"emit"===t.data.postmate&&o in e.events&&e.events[o].call(e,r)},this.parent.addEventListener("message",this.listener,!1)}var e=t.prototype;return e.get=function(t){var e=this;return new y.Promise((function(n){var r=u(),o=function t(o){o.data.uid===r&&"reply"===o.data.postmate&&(e.parent.removeEventListener("message",t,!1),n(o.data.value))};e.parent.addEventListener("message",o,!1),e.child.postMessage({postmate:"request",type:s,property:t,uid:r},e.childOrigin)}))},e.call=function(t,e){this.child.postMessage({postmate:"call",type:s,property:t,data:e},this.childOrigin)},e.on=function(t,e){this.events[t]=e},e.destroy=function(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame)},t}(),v=function(){function t(t){var e=this;this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(function(t){if(h(t,e.parentOrigin)){var n=t.data,r=n.property,o=n.uid,i=n.data;"call"!==t.data.postmate?f(e.model,r).then((function(e){return t.source.postMessage({property:r,postmate:"reply",type:s,uid:o,value:e},t.origin)})):r in e.model&&"function"==typeof e.model[r]&&e.model[r](i)}}))}return t.prototype.emit=function(t,e){this.parent.postMessage({postmate:"emit",type:s,value:{name:t,data:e}},this.parentOrigin)},t}(),y=function(){function t(t){var e=t.container,n=void 0===e?void 0!==n?n:document.body:e,r=t.model,o=t.url,i=t.name,a=t.classListArray,s=void 0===a?[]:a;return this.parent=window,this.frame=document.createElement("iframe"),this.frame.name=i||"",this.frame.classList.add.apply(this.frame.classList,s),n.appendChild(this.frame),this.child=this.frame.contentWindow||this.frame.contentDocument.parentWindow,this.model=r||{},this.sendHandshake(o)}return t.prototype.sendHandshake=function(e){var n,r=this,o=d(e),i=0;return new t.Promise((function(t,a){var c=function e(i){return!!h(i,o)&&("handshake-reply"===i.data.postmate?(clearInterval(n),r.parent.removeEventListener("message",e,!1),r.childOrigin=i.origin,t(new m(r))):a("Failed handshake"))};r.parent.addEventListener("message",c,!1);var u=function(){i++,r.child.postMessage({postmate:"handshake",type:s,model:r.model},o),i===l&&clearInterval(n)},d=function(){u(),n=setInterval(u,500)};r.frame.attachEvent?r.frame.attachEvent("onload",d):r.frame.onload=d,r.frame.src=e}))},t}();y.debug=!1,y.Promise=function(){try{return window?window.Promise:Promise}catch(t){return null}}(),y.Model=function(){function t(t){return this.child=window,this.model=t,this.parent=this.child.parent,this.sendHandshakeReply()}return t.prototype.sendHandshakeReply=function(){var t=this;return new y.Promise((function(e,n){var r=function r(o){if(o.data.postmate){if("handshake"===o.data.postmate){t.child.removeEventListener("message",r,!1),o.source.postMessage({postmate:"handshake-reply",type:s},o.origin),t.parentOrigin=o.origin;var i=o.data.model;return i&&Object.keys(i).forEach((function(e){t.model[e]=i[e]})),e(new v(t))}return n("Handshake Reply Failed")}};t.child.addEventListener("message",r,!1)}))},t}();class g extends a{constructor(){super(...arguments),this.child=void 0}connect(t){return r(this,void 0,void 0,(function*(){return console.log("ESLiveWebSDK v1.2.3"),new Promise(((e,n)=>{const o=document.getElementById(t.container);if(!o)return void n(new Error(`container id '${t.container}' is not exist in page html`));const i=new y({container:o,url:t.url,name:"live-sdk-iframe"}),a=o.getElementsByTagName("iframe")[0];a.allowFullscreen=!0,a.allow="microphone; camera; screen-wake-lock; display-capture",a.scrolling="no",a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.right="0",a.style.bottom="0",a.style.height="100%",a.style.width="100%",a.style.border="0px",a.style.overflow="hidden",i.then((n=>r(this,void 0,void 0,(function*(){this.child=n,n.on("ScreenMode",(t=>this.emit("ScreenMode",t))),n.on("Goods.Buy",(t=>this.emit("Goods.Buy",t))),n.on("Goods.Goto",(t=>this.emit("Goods.Goto",t))),n.on("Reload",(()=>this.emit("Reload"))),n.on("Tab.Switch",(t=>this.emit("Tab.Switch",t))),t.floatButtons&&n.call("setFloatButtons",t.floatButtons),t.tabs&&n.call("setTabs",t.tabs),t.trailer&&n.call("setTrailer",t.trailer),t.watermark&&n.call("setWatermark",t.watermark),e()}))))}))}))}notify(t,e){this.child&&this.child.call(t,e)}}return g}()}});