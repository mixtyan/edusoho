!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={362:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([1649,0]),n()}({1649:function(t,e,n){"use strict";n.r(e);var r=n(41),a=n.n(r),o=n(4),i=n.n(o),s=n(5),u=n.n(s),c=n(228);new(function(){function t(e){i()(this,t),this.cropImg=e.cropImg,this.saveBtn=e.saveBtn,this.selectBtn=e.selectBtn,this.imgs=e.imgs,this.group=e.group,this.lastFile={},this.uploadInput=".js-qrcode-upload-input",this.modal=e.modal||"#modal",this.init()}return u()(t,[{key:"init",value:function(){this.initImage();var t=this.imageCrop();this.initEvent(t)}},{key:"initImage",value:function(t){var e=JSON.parse(localStorage.getItem("crop_image_attr"));$(this.cropImg).attr({src:e.src,width:e.width,height:e.height,"data-natural-width":e["natural-width"],"data-natural-height":e["natural-height"]}),localStorage.removeItem("crop_image_attr")}},{key:"initEvent",value:function(t){var e=this;$(this.saveBtn).on("click",(function(n){return e.saveEvent(n,t)})),$(this.selectBtn).on("click",(function(t){return e.selectEvent(t)}))}},{key:"saveEvent",value:function(t,e){t.stopPropagation();var n=$(t.currentTarget);console.log("start crop"),e.crop({imgs:this.imgs,post:!1}),n.button("loading")}},{key:"selectEvent",value:function(t){$(this.uploadInput).click()}},{key:"imageCrop",value:function(){var t=this,e=new c.a({element:this.cropImg,cropedWidth:this.imgs.large[0],cropedHeight:this.imgs.large[1],group:this.group});return this.lastFile=$(this.uploadInput)[0].files[0],e.afterCrop=function(e){t.afterCrop(e)},e}},{key:"afterCrop",value:function(t){var e=new FormData,n=$(this.modal),r=$(this.uploadInput);e.append("token",r.data("token"));var o=r[0].files[0]?r[0].files[0]:this.lastFile;e.append("qrcode",o);new a.a((function(t,n){$.ajax({url:r.data("fileUpload"),type:"POST",cache:!1,data:e,processData:!1,contentType:!1}).done((function(e){t(e)}))})).then((function(e){return new a.a((function(e,n){$.post(r.data("crop"),t,(function(t){e(t)}))}))})).then((function(t){return function(t){return new a.a((function(e,a){$.post(r.data("saveUrl"),{images:t},(function(t){t.image&&($(r.data("targetImg")).attr("src",t.image),cd.message({type:"success",message:Translator.trans("site.upload_success_hint")}))})).error((function(){cd.message({type:"danger",message:Translator.trans("site.upload_fail_retry_hint")})})).always((function(){r.val(""),n.modal("hide")}))}))}(t)})).catch((function(t){console.log(t)}))}}]),t}())({cropImg:"#qrcode-crop",saveBtn:"#qrcode-save-btn",selectBtn:"#qrcode-select-btn",group:"user",imgs:{large:[200,200]}})}});