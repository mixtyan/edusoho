/*! For license information please see Settings.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{1578:function(t,r,e){"use strict";e.r(r);var n=e(23),o=e.n(n),i=e(29),a=e.n(i),u=e(13),c=e.n(u),s=e(39),f=e.n(s),l=e(18),h=e.n(l),p=e(15),v=e.n(p),y=e(22),d=e.n(y),g=e(27),w=e.n(g),m=e(85);function L(){L=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,i=d.a||function(t,r,e){t[r]=e.value},u="function"==typeof v.a?v.a:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",p=u.toStringTag||"@@toStringTag";function y(t,r,e){return d()(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{y({},"")}catch(t){y=function(t,r,e){return t[r]=e}}function g(t,r,e,n){var o=r&&r.prototype instanceof _?r:_,a=h()(o.prototype),u=new Y(n||[]);return i(a,"_invoke",{value:O(t,e,u)}),a}function w(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=g;var m="suspendedStart",x="executing",E="completed",b={};function _(){}function k(){}function G(){}var N={};y(N,s,(function(){return this}));var j=f.a,I=j&&j(j($([])));I&&I!==e&&n.call(I,s)&&(N=I);var T=G.prototype=_.prototype=h()(N);function F(t){["next","throw","return"].forEach((function(r){y(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,a,u){var s=w(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==c()(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function O(r,e,n){var o=m;return function(i,a){if(o===x)throw Error("Generator is already running");if(o===E){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=A(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=E,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=x;var s=w(r,e,n);if("normal"===s.type){if(o=n.done?E:"suspendedYield",s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=E,n.method="throw",n.arg=s.arg)}}}function A(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,A(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=w(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function J(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Q(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(J,this),this.reset(!0)}function $(r){if(r||""===r){var e=r[s];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(c()(r)+" is not iterable")}return k.prototype=G,i(T,"constructor",{value:G,configurable:!0}),i(G,"constructor",{value:k,configurable:!0}),k.displayName=y(G,p,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===k||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return a.a?a()(t,G):(t.__proto__=G,y(t,p,"GeneratorFunction")),t.prototype=h()(T),t},r.awrap=function(t){return{__await:t}},F(S.prototype),y(S.prototype,l,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,i,a){void 0===a&&(a=o.a);var u=new S(g(t,e,n,i),a);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},F(T),y(T,p,"Generator"),y(T,s,(function(){return this})),y(T,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=$,Y.prototype={constructor:Y,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Q),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Q(e),b}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Q(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:$(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),b}},r}var x={name:"SettingQualification",components:{EditorQualification:e(1788).a},data:function(){return{userId:$(".js-user-id").val(),info:{}}},created:function(){var t=this;return w()(L().mark((function r(){return L().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.H.get({user_id:t.userId});case 2:t.info=r.sent;case 3:case"end":return r.stop()}}),r)})))()}},E=e(38),b=Object(E.a)(x,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("editor-qualification",{attrs:{"user-id":t.userId,"edit-info":t.info}})}),[],!1,null,null,null);r.default=b.exports}}]);