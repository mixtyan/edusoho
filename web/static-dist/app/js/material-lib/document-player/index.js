!function(e){function t(t){for(var r,l,o=t[0],s=t[1],u=t[2],c=0,d=[];c<o.length;c++)l=o[c],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={273:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var f=s;a.push([1418,0]),n()}({1418:function(e,t,n){"use strict";n.r(t);var r=n(458),i=$("#document-player").data("params");new r.a({element:"#document-player",swfUrl:i.swf,pdfUrl:i.pdf})},458:function(e,t,n){"use strict";var r=n(4),i=n.n(r),a=n(5),l=n.n(a),o=n(137),s=n.n(o),u=(n(380),function(){function e(t){var n=t.element,r=t.swfUrl,a=t.pdfUrl,l=t.watermarkOptions,o=t.canCopy;i()(this,e),this.element=$(n),this.swfUrl=r||"",this.pdfUrl=a||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=l||"",this.canCopy=o||!1,this.init(),console.log(l)}return l()(e,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer(),this.onFullScreen()}},{key:"onFullScreen",value:function(e){window.onmessage=function(e){if(console.log(e.data),null!=e&&null!=e){var t=e.data;if("boolean"==typeof t){var n=$("#task-content-iframe",window.parent.document);t?(n.removeClass("screen-full"),n.width("100%")):(n.addClass("screen-full"),n.width(window.document.body.offsetWidth+"px"))}}}}},{key:"isIE9",value:function(){return-1!=navigator.appVersion.indexOf("MSIE 9.")}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var e=app.cloudOldDocumentSdkUrl+"#"+this.pdfUrl;this.canCopy||(e+="#false");var t='<iframe id="doc-pdf-player" class="task-content-iframe" \n     src="'.concat(e,'" style="width:100%;height:100%;border:0px" \n     allowfullscreen="" webkitallowfullscreen="">\n      </iframe>');this.element.append(t),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'.concat(Translator.trans("site.flash_not_install_hint"),"</p></div>"));var e={doc_url:decodeURI(this.swfUrl.value)};s.a.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,e,{bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},{id:"website"}),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),e}());t.a=u}});