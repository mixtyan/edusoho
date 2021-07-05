!function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={128:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([1184,0]),n()}({1184:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(3),o=n.n(i),c=n(398),s=n(14),u=n.n(s),l=n(5),d=n.n(l),f=n(12),h=n.n(f),p=n(13),v=n.n(p),y=n(9),m=n.n(y),g=n(32),w=n.n(g),b=n(46),k=n.n(b),C=n(47),P=(n(104),n(8)),S=function(){function t(){a()(this,t),this.$container=$("body"),this.modalID="cashier-confirm-modal",this.tradeSn="";var e='\n      <div id="'.concat(this.modalID,'" class="modal">\n        <div class="modal-dialog cd-modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n                <i class="cd-icon cd-icon-close"></i>\n              </button>\n              <h4 class="modal-title">').concat(Translator.trans("cashier.confirm.title"),'</h4>\n            </div>\n            <div class="modal-body">\n              <p>\n              ').concat(Translator.trans("cashier.confirm.desc"),'\n              </p>\n            </div>\n            <div class="modal-footer">\n              <a class="btn cd-btn cd-btn-flat-default cd-btn-lg" data-dismiss="modal">').concat(Translator.trans("cashier.confirm.pick_again"),'</a>\n              <a class="btn cd-btn cd-btn-primary cd-btn-lg js-confirm-btn">').concat(Translator.trans("cashier.confirm.success"),"</a>\n            </div>\n          </div>\n        <div>  \n      </div>\n    ");0===this.$container.find("#"+this.modalID).length&&this.$container.append(e),$("body").on("click",".js-confirm-btn",this.checkIsPaid.bind(this))}return o()(t,[{key:"checkIsPaid",value:function(){var t=this;A.getTrade(this.tradeSn).then((function(e){e.isPaid?location.href=e.paidSuccessUrl:(Object(P.a)("danger",Translator.trans("cashier.confirm.fail_message")),$("#"+t.modalID).modal("hide"))}))}},{key:"show",value:function(t){$("#"+this.modalID).modal("show"),this.tradeSn=t}}]),t}();n(466);var A=function(){function t(){a()(this,t)}return o()(t,[{key:"setOptions",value:function(t){this.options=t}},{key:"getOptions",value:function(){return this.options}},{key:"showConfirmModal",value:function(t){this.confirmModal||(this.confirmModal=new S),this.confirmModal.show(t)}},{key:"pay",value:function(t){var e=this.createTrade(t);null!=e&&(e.paidSuccessUrl?location.href=e.paidSuccessUrl:(store.set("trade_"+this.getURLParameter("sn"),e.tradeSn),this.afterTradeCreated(e)))}},{key:"afterTradeCreated",value:function(t){}},{key:"customParams",value:function(t){return t}},{key:"checkOrderStatus",value:function(){this.startInterval()&&(window.intervalCheckOrderId=setInterval(this.checkIsPaid.bind(this),2e3))}},{key:"cancelCheckOrder",value:function(){clearInterval(window.intervalCheckOrderId)}},{key:"startInterval",value:function(){return!1}},{key:"checkIsPaid",value:function(){var e=this,n=store.get("trade_"+this.getURLParameter("sn"));t.getTrade(n).then((function(t){t.isPaid&&(store.remove("payment_gateway"),store.remove("trade_"+e.getURLParameter("sn")),location.href=t.paidSuccessUrl)}))}},{key:"getURLParameter",value:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null}},{key:"filterParams",value:function(t){var e={gateway:t.gateway,type:t.type,orderSn:t.orderSn,coinAmount:t.coinAmount,amount:t.amount,openid:t.openid,payPassword:window.XXTEA.encryptToBase64(t.payPassword,"EduSoho")};return e=this.customParams(e),k()(e).forEach((function(t){return!e[t]&&void 0!==e[t]&&delete e[t]})),e}},{key:"createTrade",value:function(t){var e=this.filterParams(t),n=null;return C.a.trade.create({data:e,async:!1,promise:!1}).done((function(t){n=t})).error((function(t){var e=JSON.parse(t.responseText);2==e.error.code?Object(P.a)("danger",e.error.message):Object(P.a)("danger",Translator.trans("cashier.pay.error_message"))})),n}}],[{key:"getTrade",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={};return null==t||""==t?new w.a((function(t,e){t({isPaid:!1})})):(t&&(n.tradeSn=t),e&&(n.orderSn=e),C.a.trade.get({params:n}))}}]),t}();function x(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var j=function(t){h()(n,t);var e=x(n);function n(){var t;a()(this,n),(t=e.call(this)).$container=$("body"),t.modalID="wechat-qrcode-modal";var r='\n      <div id="'.concat(t.modalID,'" class="modal">\n        <div class="modal-dialog cd-modal-dialog cd-modal-dialog-sm">\n          <div class="modal-content">\n          \n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n                <i class="cd-icon cd-icon-close"></i>\n              </button>\n              <h4 class="modal-title">').concat(Translator.trans("cashier.wechat_pay"),'</h4>\n            </div>\n            \n            <div class="modal-body text-center">\n              <div style="height: 270px; width: 270px; margin: 0 auto;">\n                <img class="cd-mb16 js-qrcode-img" src="">\n              </div>\n              <div class="cd-mb16">\n                ').concat(Translator.trans("cashier.wechat_pay.scan_qcode_pay_tips"),'\n              </div>\n              <div class="cd-text-danger cd-mb32 js-pay-amount" style="font-size:16px;"></div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    ');return 0===t.$container.find("#"+t.modalID).length&&t.$container.append(r),t.$container.find("#"+t.modalID).on("hidden.bs.modal",(function(){clearInterval(window.intervalWechatId)})),t}return o()(n,[{key:"afterTradeCreated",value:function(t){this.checkOrderStatus();var e=this.$container.find("#"+this.modalID);e.find(".js-qrcode-img").attr("src",t.qrcodeUrl),e.find(".js-pay-amount").text("￥"+t.cash_amount),e.modal("show")}},{key:"startInterval",value:function(){return!0}}]),n}(A);function T(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var _=function(t){h()(n,t);var e=T(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"afterTradeCreated",value:function(t){this.checkOrderStatus(),this.getOptions().showConfirmModal?(window.open(t.payUrl,"_blank"),this.showConfirmModal(t.tradeSn)):location.href=t.payUrl}}]),n}(A);function I(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var O=function(t){h()(n,t);var e=I(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"afterTradeCreated",value:function(t){location.href=t.payUrl}},{key:"customParams",value:function(t){return this.isQQBuildInBrowser()||(t.app_pay="Y",t.wap_pay=!0),t}},{key:"isQQBuildInBrowser",value:function(){return!!navigator.userAgent.match(/QQ\//i)}}]),n}(A);function U(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var D=function(t){h()(n,t);var e=U(n);function n(){return a()(this,n),e.apply(this,arguments)}return n}(O);function E(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var F=function(t){h()(n,t);var e=E(n);function n(){return a()(this,n),e.apply(this,arguments)}return n}(_);function M(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var R=function(t){h()(n,t);var e=M(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"pay",value:function(t){location.href="/pay/center/wxpay?"+$.param(t)}}]),n}(A);function W(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var L=function(t){h()(n,t);var e=W(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"afterTradeCreated",value:function(t){this.checkOrderStatus(),location.href=t.mwebUrl}},{key:"startInterval",value:function(){return!0}}]),n}(A);function q(t){var e=function(){if("undefined"==typeof Reflect||!d.a)return!1;if(d.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(d()(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var a=m()(this).constructor;n=d()(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var B=function(t){h()(n,t);var e=q(n);function n(){return a()(this,n),e.apply(this,arguments)}return o()(n,[{key:"afterTradeCreated",value:function(t){location.href=t.payUrl}}]),n}(A),Q=function(){function t(){a()(this,t)}return o()(t,[{key:"pay",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getGateway(t.payment,t.isMobile,t.isWechat);t.gateway=n;var r=this.initPaySdk(n);return r.options=u()({showConfirmModal:1},e),r.pay(t),r}},{key:"checkOrderStatus",value:function(){var t=this.initPaySdk();null!=t&&t.checkOrderStatus()}},{key:"cancelCheckOrder",value:function(){var t=this.initPaySdk();null!=t&&t.cancelCheckOrder()}},{key:"initPaySdk",value:function(t){var e=null;switch(t=void 0===t?store.get("payment_gateway"):t){case"WechatPay_Native":e=this.wpn?this.wpn:this.wpn=new j;break;case"WechatPay_MWeb":e=this.wpm?this.wpm:this.wpm=new L;break;case"WechatPay_Js":e=this.wpj?this.wpj:this.wpj=new R;break;case"Alipay_LegacyExpress":e=this.ale?this.ale:this.ale=new _;break;case"Alipay_LegacyWap":e=this.alw?this.alw:this.alw=new O;break;case"Lianlian_Wap":e=this.llwp?this.llwp:this.llwp=new D;break;case"Lianlian_Web":e=this.llwb?this.llwb:this.llwb=new F;break;case"Coin":e=this.coin?this.coin:this.coin=new B}return e}},{key:"getGateway",value:function(t,e,n){var r="";switch(t){case"wechat":r=n?"WechatPay_Js":e?"WechatPay_MWeb":"WechatPay_Native";break;case"alipay":r=e?"Alipay_LegacyWap":"Alipay_LegacyExpress";break;case"lianlianpay":r=e?"Lianlian_Wap":"Lianlian_Web";break;case"coin":r="Coin"}return store.set("payment_gateway",r),r}}]),t}();new(function(){function t(e){a()(this,t),this.$form=$(e.element),this.$priceList=this.$form.find("#order-center-price-list"),this.validator=this.$form.validate(),this.initEvent(),this.initCoin(),this.paySdk=new Q,this.paySdk.checkOrderStatus()}return o()(t,[{key:"initCoin",value:function(){var t=$("#coin-use-section");t.length>0&&(this.coin=new c.a({$coinContainer:t,cashierForm:this,$form:this.$form}))}},{key:"initEvent",value:function(){var t=this,e=this.$form;e.on("click",".js-pay-type",(function(e){return t.switchPayType(e)})),e.on("click",".js-pay-btn",(function(e){return t.payOrder(e)})),e.on("addPriceItem",(function(e,n,r,a){return t.addPriceItem(e,n,r,a)})),e.on("removePriceItem",(function(e,n){return t.removePriceItem(e,n)})),e.on("changeCoinPrice",(function(e,n){return t.changeCoinPrice(e,n)}))}},{key:"payOrder",value:function(t){var e=this.$form;if(e.valid()){var n=$(t.currentTarget);n.button("loading");var r=this.formDataToObject(e);r.payAmount=e.find(".js-pay-price").text(),this.paySdk.cancelCheckOrder(),this.paySdk.pay(r),n.button("reset")}}},{key:"switchPayType",value:function(t){var e=$(t.currentTarget);e.hasClass("active")||(e.addClass("active").siblings().removeClass("active"),$("input[name='payment']").val(e.attr("id")))}},{key:"calcPayPrice",value:function(t){var e=this;$.post(this.$form.data("priceUrl"),{coinAmount:t}).done((function(t){if(e.$form.find(".js-pay-price").text(t.data),!$(".js-no-payment").length)return null;"￥0.00"==t.data&&($(".js-no-payment").removeAttr("disabled"),$(".js-no-payment").removeClass("cd-btn-default"),$(".js-no-payment").addClass("cd-btn-primary"))}))}},{key:"formDataToObject",value:function(t){var e={},n=t.serializeArray();for(var r in n)e[n[r].name]=n[r].value;return e}},{key:"hasPriceItem",value:function(t,e){return!!$("#".concat(e)).length}},{key:"addPriceItem",value:function(t,e,n,r){var a=$("#".concat(e));this.hasPriceItem(t,e)&&a.remove();var i='\n      <div class="order-center-price" id="'.concat(e,'">\n        <div class="order-center-price__title">').concat(n,'</div>\n        <div class="order-center-price__content">-').concat(r,"</div>\n      </div>\n    ");this.$priceList.append(i)}},{key:"removePriceItem",value:function(t,e){var n=$("#".concat(e));this.hasPriceItem(t,e)&&n.remove()}},{key:"changeCoinPrice",value:function(t,e){this.$form.find(".js-pay-coin").text(e)}}]),t}())({element:"#cashier-form"})},21:function(t,e){t.exports=jQuery},398:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(16),a=n.n(r),i=n(1),o=n.n(i),c=n(3),s=n.n(c),u=function(){function t(e){o()(this,t),this.$container=e.$coinContainer,this.cashierForm=e.cashierForm,this.$form=e.$form,this.priceType=this.$container.data("priceType"),this.coinRate=this.$container.data("coinRate"),this.maxCoinInput=this.$container.data("maxAllowCoin")>this.$container.data("coinBalance")?this.$container.data("coinBalance"):this.$container.data("maxAllowCoin"),this.init()}return s()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.$form.on("change",".js-coin-amount",(function(e){return t.changeAmount(e)}))}},{key:"changeAmount",value:function(t){var e=$(t.currentTarget),n=e.val();if(a()(n)>a()(this.maxCoinInput)&&(n=this.maxCoinInput),isNaN(a()(n))||a()(n)<=0)return n=0,e.val(""),this.removePasswordValidate(),this.$form.trigger("removePriceItem",["coin-price"]),$(".js-no-payment").length&&($(".js-no-payment").attr("disabled","disabled"),$(".js-no-payment").addClass("cd-btn-default"),$(".js-no-payment").removeClass("cd-btn-primary")),void this.cashierForm.calcPayPrice(n);e.val(a()(n).toFixed(2)),this.addPasswordValidate();var r=this.$form.data("coin-name"),i=0;if("coin"===this.priceType){i=a()(n).toFixed(2)+" "+r;var o=a()(this.$container.data("maxAllowCoin")),c=a()(o-n).toFixed(2)+" "+r;this.$form.trigger("changeCoinPrice",[c])}else i="￥"+a()(n/this.coinRate).toFixed(2);this.$form.trigger("addPriceItem",["coin-price",r+Translator.trans("order.create.minus"),i]),$(".js-no-payment").length&&($(".js-no-payment").attr("disabled","disabled"),$(".js-no-payment").addClass("cd-btn-default"),$(".js-no-payment").removeClass("cd-btn-primary")),this.cashierForm.calcPayPrice(n)}},{key:"addPasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("add","required es_remote")}},{key:"removePasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("remove","required es_remote")}}]),t}()},466:function(t,e){!function(t){"use strict";var e,n;void 0===t.btoa&&(t.btoa=(e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(t){var n,r,a,i,o,c,s;for(r=a=0,i=t.length,c=(i-=o=i%3)/3<<2,o>0&&(c+=4),n=new Array(c);r<i;)s=t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>18]+e[s>>12&63]+e[s>>6&63]+e[63&s];return 1==o?(s=t.charCodeAt(r++),n[a++]=e[s>>2]+e[(3&s)<<4]+"=="):2==o&&(s=t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>10]+e[s>>4&63]+e[(15&s)<<2]+"="),n.join("")})),void 0===t.atob&&(t.atob=(n=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(t){var e,r,a,i,o,c,s,u,l,d;if((s=t.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))return"";for(l=s,(u="="==t.charAt(s-2)?1:"="==t.charAt(s-1)?2:0)>0&&(l-=4),l=3*(l>>2)+u,d=new Array(l),o=c=0;o<s&&-1!=(e=n[t.charCodeAt(o++)])&&-1!=(r=n[t.charCodeAt(o++)])&&(d[c++]=String.fromCharCode(e<<2|(48&r)>>4),-1!=(a=n[t.charCodeAt(o++)]))&&(d[c++]=String.fromCharCode((15&r)<<4|(60&a)>>2),-1!=(i=n[t.charCodeAt(o++)]));)d[c++]=String.fromCharCode((3&a)<<6|i);return d.join("")}));var r=2654435769;function a(t,e){var n=t.length,r=n<<2;if(e){var a=t[n-1];if(a<(r-=4)-3||a>r)return null;r=a}for(var i=0;i<n;i++)t[i]=String.fromCharCode(255&t[i],t[i]>>>8&255,t[i]>>>16&255,t[i]>>>24&255);var o=t.join("");return e?o.substring(0,r):o}function i(t,e){var n,r=t.length,a=r>>2;0!=(3&r)&&++a,e?(n=new Array(a+1))[a]=r:n=new Array(a);for(var i=0;i<r;++i)n[i>>2]|=t.charCodeAt(i)<<((3&i)<<3);return n}function o(t){return 4294967295&t}function c(t,e,n,r,a,i){return(n>>>5^e<<2)+(e>>>3^n<<4)^(t^e)+(i[3&r^a]^n)}function s(t){return t.length<4&&(t.length=4),t}function u(t){if(/^[\x00-\x7f]*$/.test(t))return t;for(var e=[],n=t.length,r=0,a=0;r<n;++r,++a){var i=t.charCodeAt(r);if(i<128)e[a]=t.charAt(r);else if(i<2048)e[a]=String.fromCharCode(192|i>>6,128|63&i);else{if(!(i<55296||i>57343)){if(r+1<n){var o=t.charCodeAt(r+1);if(i<56320&&56320<=o&&o<=57343){var c=65536+((1023&i)<<10|1023&o);e[a]=String.fromCharCode(240|c>>18&63,128|c>>12&63,128|c>>6&63,128|63&c),++r;continue}}throw new Error("Malformed string")}e[a]=String.fromCharCode(224|i>>12,128|i>>6&63,128|63&i)}}return e.join("")}function l(t,e){return(null==e||e<0)&&(e=t.length),0===e?"":/^[\x00-\x7f]*$/.test(t)||!/^[\x00-\xff]*$/.test(t)?e===t.length?t:t.substr(0,e):e<65535?function(t,e){for(var n=new Array(e),r=0,a=0,i=t.length;r<e&&a<i;r++){var o=t.charCodeAt(a++);switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[r]=o;break;case 12:case 13:if(!(a<i))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(31&o)<<6|63&t.charCodeAt(a++);break;case 14:if(!(a+1<i))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(15&o)<<12|(63&t.charCodeAt(a++))<<6|63&t.charCodeAt(a++);break;case 15:if(!(a+2<i))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&o)<<18|(63&t.charCodeAt(a++))<<12|(63&t.charCodeAt(a++))<<6|63&t.charCodeAt(a++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));n[r++]=c>>10&1023|55296,n[r]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+o.toString(16))}}return r<e&&(n.length=r),String.fromCharCode.apply(String,n)}(t,e):function(t,e){for(var n=[],r=new Array(32768),a=0,i=0,o=t.length;a<e&&i<o;a++){var c=t.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[a]=c;break;case 12:case 13:if(!(i<o))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(31&c)<<6|63&t.charCodeAt(i++);break;case 14:if(!(i+1<o))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(15&c)<<12|(63&t.charCodeAt(i++))<<6|63&t.charCodeAt(i++);break;case 15:if(!(i+2<o))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&c)<<18|(63&t.charCodeAt(i++))<<12|(63&t.charCodeAt(i++))<<6|63&t.charCodeAt(i++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));r[a++]=s>>10&1023|55296,r[a]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}if(a>=32766){var u=a+1;r.length=u,n[n.length]=String.fromCharCode.apply(String,r),e-=u,a=-1}}return a>0&&(r.length=a,n[n.length]=String.fromCharCode.apply(String,r)),n.join("")}(t,e)}function d(t,e){return null==t||0===t.length?t:(t=u(t),e=u(e),a(function(t,e){var n,a,i,s,u,l,d=t.length,f=d-1;for(a=t[f],i=0,l=0|Math.floor(6+52/d);l>0;--l){for(s=(i=o(i+r))>>>2&3,u=0;u<f;++u)n=t[u+1],a=t[u]=o(t[u]+c(i,n,a,u,s,e));n=t[0],a=t[f]=o(t[f]+c(i,n,a,f,s,e))}return t}(i(t,!0),s(i(e,!1))),!1))}function f(t,e){return null==t||0===t.length?t:(e=u(e),l(a(function(t,e){var n,a,i,s,u,l=t.length,d=l-1;for(n=t[0],i=o(Math.floor(6+52/l)*r);0!==i;i=o(i-r)){for(s=i>>>2&3,u=d;u>0;--u)a=t[u-1],n=t[u]=o(t[u]-c(i,n,a,u,s,e));a=t[d],n=t[0]=o(t[0]-c(i,n,a,0,s,e))}return t}(i(t,!1),s(i(e,!1))),!0)))}t.XXTEA={utf8Encode:u,utf8Decode:l,encrypt:d,encryptToBase64:function(e,n){return t.btoa(d(e,n))},decrypt:f,decryptFromBase64:function(e,n){return null==e||0===e.length?e:f(t.atob(e),n)}}}(window)}});