!function(l){function t(t){for(var e,o,n=t[0],i=t[1],r=t[2],a=0,s=[];a<n.length;a++)o=n[a],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&s.push(u[o][0]),u[o]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(l[e]=i[e]);for(f&&f(t);s.length;)s.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,i=1;i<o.length;i++){var r=o[i];0!==u[r]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=o[0]))}return t}var o={},u={236:0},d=[];function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=l,a.c=o,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var f=n;d.push([828,0]),c()}({828:function(t,e,o){"use strict";o.r(e);var v,m,y,x,b,w,k,S,C,z,j,R,T,H,P,_,p,O,W,n,i,r=o(6),L=o.n(r),a=o(10),l=o.n(a);function c(t,e,o,n){var i,r=e[o],a=l()(r),s=r.split(/\d/)[0];return n=null!==n?n:/%|em/.test(s)&&t.parentElement?c(t.parentElement,t.parentElement.currentStyle,"fontSize",null):16,i="fontSize"===o?n:/width/i.test(o)?t.clientWidth:t.clientHeight,"em"===s?a*n:"in"===s?96*a:"pt"===s?96*a/72:"%"===s?a/100*i:a}function s(t,e){var o="border"===e?"Width":"",n=e+"Top"+o,i=e+"Right"+o,r=e+"Bottom"+o,a=e+"Left"+o;t[e]=(t[n]===t[i]===t[r]===t[a]?[t[n]]:t[n]===t[r]&&t[a]===t[i]?[t[n],t[i]]:t[a]===t[i]?[t[n],t[i],t[r]]:[t[n],t[i],t[r],t[a]]).join(" ")}function u(t){var e,o=t.currentStyle,n=this,i=c(t,o,"fontSize",null);for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(/width|height|margin.|padding.|border.+W/.test(e)&&"auto"!==n[e]?n[e]=c(t,o,e,i)+"px":"styleFloat"===e?n.float=o[e]:n[e]=o[e]);return s(n,"margin"),s(n,"padding"),s(n,"border"),n.fontSize=i+"px",n}function g(t){if(!t)return"";for(var e="",o=0;o<t.length;o+=1)e+=i[t.charAt(o)]||t.charAt(o);return e}function A(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function K(t){return void 0!==t}function d(t,e,o,n){return K(t)&&!v.isArray(t)?v.isFunction(t)?t.apply(this,e):n:K(o)?d.call(this,o,e):n}function F(t,e,o,n){return d.call(this,K(this.source[e])&&Object.prototype.hasOwnProperty.call(this.source[e],t)?this.source[e][t]:void 0,o,function(){return d.call(this,K(this[t][e])?this[t][e]:K(this[t][0])?this[t][0]:Object.prototype.hasOwnProperty.call(this,t)?this[t]:void 0,o,p[t][e]||p[t][0]||p[t],n)},n)}function q(t,e){for(var o,n=0;n<t.length;n+=1)if(o=F.call(this,"findRight",n,[t[n],e,n]))return{right:o,source:n};return!1}function V(t,e){var o;for(function(t,e){for(var o=0;o<t.length;o++)t[o]=F.call(this,"preparse",o,[t[o],e],t[o])}.call(this,t,e),o=0;o<t.length;o+=1)t[o]=F.call(this,"filter",o,[t[o],e,o],t[o])}function B(r,a,s){var t,l,c=this;if(v.isFunction(c.source))c.source.apply(c,[r,function(t){a=[t],d.call(c,s,[r])},a,0]);else for(t=0;t<c.source.length;t+=1)if(v.isArray(c.source[t]))a[t]=c.source[t];else if(v.isFunction(c.source[t]))!function(e){c.source[e].apply(c,[r,function(t){if(a[e]||(a[e]=[]),t&&v.isArray(t))switch(c.appendMethod){case"replace":a[e]=t;break;default:a[e]=a[e].concat(t)}d.call(c,s,[r])},a,e])}(t);else switch(c.source[t].type){case"remote":K(c.source[t].url)&&(!K(c.source[t].minLength)||r.length>=c.source[t].minLength)&&(l=F.call(c,"replace",t,[c.source[t].url,r],""),a[t]||(a[t]=[]),function(e){var t,o,n,i;t=l,o=c.source[e],n=function(t){a[e]=t,d.call(c,s,[r])},i=c.debug,o.xhr&&o.xhr.abort(),o.xhr=v.ajax(v.extend(!0,{url:t,type:"GET",async:!0,cache:!1,dataType:"json"},o.ajax)).done(function(t){n&&n.apply(this,v.makeArray(arguments))}).fail(function(t,e){i&&console.log("Request failed: "+e)})}(t));break;default:K(c.source[t].data)?a[t]=c.source[t].data:a[t]=c.source[t]}d.call(c,s,[r])}function I(t,e){return!!(K(t.data("source"))&&K(t.data("pid"))&&K(e[t.data("source")])&&K(e[t.data("source")][t.data("pid")]))&&e[t.data("source")][t.data("pid")]}function f(t,r){var e,a,s,l,c,u,d,f,h,p,o,n;function i(){l.val()!=f&&((f=l.val()).length<r.minLength?l.trigger("close.xdsoft"):B.call(r,f,c,function(t){var e,o;t==f&&(V.call(r,c,t),l.trigger("updateContent.xdsoft"),r.showHint&&f.length&&f.length<=l.prop("size")&&(e=q.call(r,c,f))?(o=t+(o=F.call(r,"getTitle",e.source,[e.right,e.source])).substr(t.length),s.val(o)):s.val(""))}))}function g(t){var e,o=t.keyCode;switch(o){case R:case T:case H:case P:case _:if(t.shiftKey||t.ctrlKey)return!0;break;case C:case S:return!0;case x:case y:return O||W||t.shiftKey||t.ctrlKey?!0:(d=l.val(),p=function(t){if(t){if(t.selectionStart)return t.selectionStart;if(document.selection){t.focus();var e=document.selection.createRange(),o=document.selection.createRange().text.length;return e.moveStart("character",-t.value.length),e.text.length-o}}}(l[0]),o!==x||p!==d.length||((e=q.call(r,c,d))?l.trigger("pick.xdsoft",[F.call(r,"getValue",e.source,[e.right,e.source])]):l.trigger("pick.xdsoft"),t.preventDefault(),!1));case k:return!0;case z:return!u||(l.trigger("pick.xdsoft"),t.preventDefault(),!1);case j:return l.val(f).trigger("close.xdsoft"),t.preventDefault(),!1;case w:case b:if(!u)return l.trigger("open.xdsoft"),l.trigger("updateContent.xdsoft"),t.preventDefault(),!1;h=a.find("div.active");var n=o==w?"next":"prev",i=!0;return h.length?(h.removeClass("active"),h[n]().length?h[n]().addClass("active"):(l.val(f),i=!1)):a.children().eq(o==w?0:-1).addClass("active"),i&&l.trigger("timepick.xdsoft"),a.trigger("updatescroll.xdsoft"),t.preventDefault(),!1}}v(t).hasClass("xdsoft_input")||(e=v('<div class="xdsoft_autocomplete"></div>'),a=v('<div class="xdsoft_autocomplete_dropdown"></div>'),s=v('<input readonly class="xdsoft_autocomplete_hint"/>'),l=v(t),u=!(c=[]),f=d="",h=null,p=0,l.data("autocomplete_options",r),a.on("mousedown",function(t){t.preventDefault(),t.stopPropagation()}).on("updatescroll.xdsoft",function(){var t,e,o,n,i=a.find(".active");i.length&&(t=i.position().top,e=i.outerHeight(!0),o=a.scrollTop(),n=a.height(),t<0?a.scrollTop(o-Math.abs(t)):n<t+e&&a.scrollTop(o+t+e-n))}),e.css({display:l.css("display"),width:l.css("width")}),r.style&&e.css(r.style),l.addClass("xdsoft_input").attr("autocomplete","off"),a.on("mousemove","div",function(){return!!v(this).hasClass("active")||(a.find("div").removeClass("active"),void v(this).addClass("active"))}).on("mousedown touchstart","div",function(){a.find("div").removeClass("active"),v(this).addClass("active"),l.trigger("pick.xdsoft")}),l.data("xdsoft_autocomplete",c).after(e).on("pick.xdsoft",function(t,e){l.trigger("timepick.xdsoft",e),f=l.val(),l.trigger("close.xdsoft"),(h=a.find("div.active").eq(0)).length||(h=a.children().first()),l.trigger("selected.xdsoft",[I(h,c)])}).on("timepick.xdsoft",function(t,e){var o,n,i;(h=a.find("div.active")).length||(h=a.children().first()),h.length&&(K(e)?l.val(e):l.val(function(t,e){var o=I(t,e);return o?F.call(this,"getValue",t.data("source"),[o,t.data("source")]):K(t.data("value"))?decodeURIComponent(t.data("value")):t.html()}.call(r,h,c)),l.trigger("autocompleted.xdsoft",[I(h,c)]),s.val(""),o=l[0],n=l.val().length,o.setSelectionRange?(o.focus(),o.setSelectionRange(n,n)):o.createTextRange&&((i=o.createTextRange()).collapse(!0),i.moveEnd("character",n),i.moveStart("character",n),i.select()))}).on("keydown.xdsoft input.xdsoft cut.xdsoft paste.xdsoft",function(t){var e=g(t);if(!1===e||!0===e)return e;setTimeout(function(){i()},1),i()}).on("change.xdsoft",function(t){f=l.val()}),f=l.val(),B.call(r,l.val(),c,function(t){V.call(r,c,t)}),r.openOnFocus&&l.on("focusin.xdsoft",function(){l.trigger("open.xdsoft"),l.trigger("updateContent.xdsoft")}),r.closeOnBlur&&l.on("focusout.xdsoft",function(){l.trigger("close.xdsoft")}),e.append(l).append(a),o=!1,n=0,l.on("updateHelperPosition.xdsoft",function(){clearTimeout(n),n=setTimeout(function(){if(e.css({display:l.css("display"),width:l.css("width")}),a.css(v.extend(!0,{left:l.position().left,top:l.position().top+L()(l.css("marginTop"))+L()(l[0].offsetHeight),marginLeft:l.css("marginLeft"),marginRight:l.css("marginRight"),width:"100%"==r.dropdownWidth?l[0].offsetWidth:r.dropdownWidth},r.dropdownStyle)),r.showHint){var t=getComputedStyle(l[0],"");s[0].style.cssText=t.cssText,s.css({"box-sizing":t.boxSizing,borderStyle:"solid",borderCollapse:t.borderCollapse,borderLeftWidth:t.borderLeftWidth,borderRightWidth:t.borderRightWidth,borderTopWidth:t.borderTopWidth,borderBottomWidth:t.borderBottomWidth,paddingBottom:t.paddingBottom,marginBottom:t.marginBottom,paddingTop:t.paddingTop,marginTop:t.marginTop,paddingLeft:t.paddingLeft,marginLeft:t.marginLeft,paddingRight:t.paddingRight,marginRight:t.marginRight,maxHeight:t.maxHeight,minHeight:t.minHeight,maxWidth:t.maxWidth,minWidth:t.minWidth,width:t.width,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,outlineWidth:t.outlineWidth,fontFamily:t.fontFamily,fontVariant:t.fontVariant,fontStyle:l.css("fontStyle"),fontSize:l.css("fontSize"),fontWeight:l.css("fontWeight"),flex:t.flex,justifyContent:t.justifyContent,borderRadius:t.borderRadius,"-webkit-box-shadow":"none","box-shadow":"none"}),l.css("font-size",l.css("fontSize")),s.innerHeight(l.innerHeight()),s.css(v.extend(!0,{position:"absolute",zIndex:"1",borderColor:"transparent",outlineColor:"transparent",left:l.position().left,top:l.position().top,background:l.css("background")},r.hintStyle)),!1!==o?s.css("background",o):o=l.css("background");try{l[0].style.setProperty("background","transparent","important")}catch(t){l.css("background","transparent")}e.append(s)}},r.timeoutUpdate||1)}),l.is(":visible")?l.trigger("updateHelperPosition.xdsoft"):m=setInterval(function(){l.is(":visible")&&(l.trigger("updateHelperPosition.xdsoft"),clearInterval(m))},100),v(window).on("resize",function(){e.css({width:"auto"}),l.trigger("updateHelperPosition.xdsoft")}),l.on("close.xdsoft",function(){u&&(a.hide(),s.val(""),r.autoselect||l.val(f),u=!1)}).on("updateContent.xdsoft",function(){var t=function(t,e){for(var o,n,i=[],r=0;r<t.length;r+=1)for(o=0;o<t[r].length&&!(i.length>=this.limit);o+=1)(n=v(F.call(this,"render",r,[t[r][o],r,o,e],""))).data("source",r),n.data("pid",o),n.data("item",t[r][o]),i.push(n);return i}.call(r,c,l.val()),e=10;t.length?(l.trigger("open.xdsoft"),v(t).each(function(){this.css(v.extend(!0,{paddingLeft:l.css("paddingLeft"),paddingRight:l.css("paddingRight")},r.itemStyle))}),a.html(t),e=r.visibleHeight?r.visibleHeight:r.visibleLimit*((t[0]?t[0].outerHeight(!0):0)||r.defaultHeightItem)+5,a.css("maxHeight",e+"px")):l.trigger("close.xdsoft")}).on("open.xdsoft",function(){u||(a.show(),u=!0)}).on("destroy.xdsoft",function(){l.removeClass("xdsoft"),e.after(l),e.remove(),clearTimeout(0),l.data("xdsoft_autocomplete",null),l.off(".xdsoft")}))}
/**
 * @preserve jQuery Autocomplete plugin v1.2.6
 * @homepage http://xdsoft.net/jqplugins/autocomplete/
 * @license MIT - MIT-LICENSE.txt
 * (c) 2014, Chupurnov Valeriy <chupurnov@gmail.com>
 */
v=jQuery,y=37,x=39,b=38,w=40,k=9,S=17,C=16,z=13,j=27,R=65,T=67,H=86,P=90,_=89,W=O=!(p={}),n={},i={"ẚ":"a","Á":"a","á":"a","À":"a","à":"a","Ă":"a","ă":"a","Ắ":"a","ắ":"a","Ằ":"a","ằ":"a","Ẵ":"a","ẵ":"a","Ẳ":"a","Ẫ":"a","ẫ":"a","Ẩ":"a","ẩ":"a","Ǎ":"a","ǎ":"a","Å":"a","å":"a","Ǻ":"a","ǻ":"a","Ä":"a","ä":"a","Ǟ":"a","ǟ":"a","Ã":"a","ã":"a","Ȧ":"a","ȧ":"a","Ǡ":"a","ǡ":"a","Ą":"a","ą":"a","Ā":"a","ā":"a","Ả":"a","ả":"a","Ȁ":"a","ȁ":"a","Ȃ":"a","ȃ":"a","Ạ":"a","ạ":"a","Ặ":"a","ặ":"a","Ậ":"a","ậ":"a","Ḁ":"a","ḁ":"a","Ⱥ":"a","ⱥ":"a","Ǽ":"a","ǽ":"a","Ǣ":"a","ǣ":"a","Ḃ":"b","ḃ":"b","Ḅ":"b","ḅ":"b","Ḇ":"b","ḇ":"b","Ƀ":"b","ƀ":"b","ᵬ":"b","Ɓ":"b","ɓ":"b","Ƃ":"b","ƃ":"b","Ć":"c","ć":"c","Ĉ":"c","ĉ":"c","Č":"c","č":"c","Ċ":"c","ċ":"c","Ç":"c","ç":"c","Ḉ":"c","ḉ":"c","Ȼ":"c","ȼ":"c","Ƈ":"c","ƈ":"c","ɕ":"c","Ď":"d","ď":"d","Ḋ":"d","ḋ":"d","Ḑ":"d","ḑ":"d","Ḍ":"d","ḍ":"d","Ḓ":"d","ḓ":"d","Ḏ":"d","ḏ":"d","Đ":"d","đ":"d","ᵭ":"d","Ɖ":"d","ɖ":"d","Ɗ":"d","ɗ":"d","Ƌ":"d","ƌ":"d","ȡ":"d","ð":"d","É":"e","Ə":"e","Ǝ":"e","ǝ":"e","é":"e","È":"e","è":"e","Ĕ":"e","ĕ":"e","Ê":"e","ê":"e","Ế":"e","ế":"e","Ề":"e","ề":"e","Ễ":"e","ễ":"e","Ể":"e","ể":"e","Ě":"e","ě":"e","Ë":"e","ë":"e","Ẽ":"e","ẽ":"e","Ė":"e","ė":"e","Ȩ":"e","ȩ":"e","Ḝ":"e","ḝ":"e","Ę":"e","ę":"e","Ē":"e","ē":"e","Ḗ":"e","ḗ":"e","Ḕ":"e","ḕ":"e","Ẻ":"e","ẻ":"e","Ȅ":"e","ȅ":"e","Ȇ":"e","ȇ":"e","Ẹ":"e","ẹ":"e","Ệ":"e","ệ":"e","Ḙ":"e","ḙ":"e","Ḛ":"e","ḛ":"e","Ɇ":"e","ɇ":"e","ɚ":"e","ɝ":"e","Ḟ":"f","ḟ":"f","ᵮ":"f","Ƒ":"f","ƒ":"f","Ǵ":"g","ǵ":"g","Ğ":"g","ğ":"g","Ĝ":"g","ĝ":"g","Ǧ":"g","ǧ":"g","Ġ":"g","ġ":"g","Ģ":"g","ģ":"g","Ḡ":"g","ḡ":"g","Ǥ":"g","ǥ":"g","Ɠ":"g","ɠ":"g","Ĥ":"h","ĥ":"h","Ȟ":"h","ȟ":"h","Ḧ":"h","ḧ":"h","Ḣ":"h","ḣ":"h","Ḩ":"h","ḩ":"h","Ḥ":"h","ḥ":"h","Ḫ":"h","ḫ":"h",H:"h","̱":"h","ẖ":"h","Ħ":"h","ħ":"h","Ⱨ":"h","ⱨ":"h","Í":"i","í":"i","Ì":"i","ì":"i","Ĭ":"i","ĭ":"i","Î":"i","î":"i","Ǐ":"i","ǐ":"i","Ï":"i","ï":"i","Ḯ":"i","ḯ":"i","Ĩ":"i","ĩ":"i","İ":"i",i:"i","Į":"i","į":"i","Ī":"i","ī":"i","Ỉ":"i","ỉ":"i","Ȉ":"i","ȉ":"i","Ȋ":"i","ȋ":"i","Ị":"i","ị":"i","Ḭ":"i","ḭ":"i",I:"i","ı":"i","Ɨ":"i","ɨ":"i","Ĵ":"j","ĵ":"j",J:"j","̌":"j","ǰ":"j","ȷ":"j","Ɉ":"j","ɉ":"j","ʝ":"j","ɟ":"j","ʄ":"j","Ḱ":"k","ḱ":"k","Ǩ":"k","ǩ":"k","Ķ":"k","ķ":"k","Ḳ":"k","ḳ":"k","Ḵ":"k","ḵ":"k","Ƙ":"k","ƙ":"k","Ⱪ":"k","ⱪ":"k","Ĺ":"a","ĺ":"l","Ľ":"l","ľ":"l","Ļ":"l","ļ":"l","Ḷ":"l","ḷ":"l","Ḹ":"l","ḹ":"l","Ḽ":"l","ḽ":"l","Ḻ":"l","ḻ":"l","Ł":"l","ł":"l","̣":"l","Ŀ":"l","ŀ":"l","Ƚ":"l","ƚ":"l","Ⱡ":"l","ⱡ":"l","Ɫ":"l","ɫ":"l","ɬ":"l","ɭ":"l","ȴ":"l","Ḿ":"m","ḿ":"m","Ṁ":"m","ṁ":"m","Ṃ":"m","ṃ":"m","ɱ":"m","Ń":"n","ń":"n","Ǹ":"n","ǹ":"n","Ň":"n","ň":"n","Ñ":"n","ñ":"n","Ṅ":"n","ṅ":"n","Ņ":"n","ņ":"n","Ṇ":"n","ṇ":"n","Ṋ":"n","ṋ":"n","Ṉ":"n","ṉ":"n","Ɲ":"n","ɲ":"n","Ƞ":"n","ƞ":"n","ɳ":"n","ȵ":"n",N:"n","̈":"n",n:"n","Ó":"o","ó":"o","Ò":"o","ò":"o","Ŏ":"o","ŏ":"o","Ô":"o","ô":"o","Ố":"o","ố":"o","Ồ":"o","ồ":"o","Ỗ":"o","ỗ":"o","Ổ":"o","ổ":"o","Ǒ":"o","ǒ":"o","Ö":"o","ö":"o","Ȫ":"o","ȫ":"o","Ő":"o","ő":"o","Õ":"o","õ":"o","Ṍ":"o","ṍ":"o","Ṏ":"o","ṏ":"o","Ȭ":"o","ȭ":"o","Ȯ":"o","ȯ":"o","Ȱ":"o","ȱ":"o","Ø":"o","ø":"o","Ǿ":"o","ǿ":"o","Ǫ":"o","ǫ":"o","Ǭ":"o","ǭ":"o","Ō":"o","ō":"o","Ṓ":"o","ṓ":"o","Ṑ":"o","ṑ":"o","Ỏ":"o","ỏ":"o","Ȍ":"o","ȍ":"o","Ȏ":"o","ȏ":"o","Ơ":"o","ơ":"o","Ớ":"o","ớ":"o","Ờ":"o","ờ":"o","Ỡ":"o","ỡ":"o","Ở":"o","ở":"o","Ợ":"o","ợ":"o","Ọ":"o","ọ":"o","Ộ":"o","ộ":"o","Ɵ":"o","ɵ":"o","Ṕ":"p","ṕ":"p","Ṗ":"p","ṗ":"p","Ᵽ":"p","Ƥ":"p","ƥ":"p",P:"p","̃":"p",p:"p","ʠ":"q","Ɋ":"q","ɋ":"q","Ŕ":"r","ŕ":"r","Ř":"r","ř":"r","Ṙ":"r","ṙ":"r","Ŗ":"r","ŗ":"r","Ȑ":"r","ȑ":"r","Ȓ":"r","ȓ":"r","Ṛ":"r","ṛ":"r","Ṝ":"r","ṝ":"r","Ṟ":"r","ṟ":"r","Ɍ":"r","ɍ":"r","ᵲ":"r","ɼ":"r","Ɽ":"r","ɽ":"r","ɾ":"r","ᵳ":"r","ß":"s","Ś":"s","ś":"s","Ṥ":"s","ṥ":"s","Ŝ":"s","ŝ":"s","Š":"s","š":"s","Ṧ":"s","ṧ":"s","Ṡ":"s","ṡ":"s","ẛ":"s","Ş":"s","ş":"s","Ṣ":"s","ṣ":"s","Ṩ":"s","ṩ":"s","Ș":"s","ș":"s","ʂ":"s",S:"s","̩":"s",s:"s","Þ":"t","þ":"t","Ť":"t","ť":"t",T:"t","ẗ":"t","Ṫ":"t","ṫ":"t","Ţ":"t","ţ":"t","Ṭ":"t","ṭ":"t","Ț":"t","ț":"t","Ṱ":"t","ṱ":"t","Ṯ":"t","ṯ":"t","Ŧ":"t","ŧ":"t","Ⱦ":"t","ⱦ":"t","ᵵ":"t","ƫ":"t","Ƭ":"t","ƭ":"t","Ʈ":"t","ʈ":"t","ȶ":"t","Ú":"u","ú":"u","Ù":"u","ù":"u","Ŭ":"u","ŭ":"u","Û":"u","û":"u","Ǔ":"u","ǔ":"u","Ů":"u","ů":"u","Ü":"u","ü":"u","Ǘ":"u","ǘ":"u","Ǜ":"u","ǜ":"u","Ǚ":"u","ǚ":"u","Ǖ":"u","ǖ":"u","Ű":"u","ű":"u","Ũ":"u","ũ":"u","Ṹ":"u","ṹ":"u","Ų":"u","ų":"u","Ū":"u","ū":"u","Ṻ":"u","ṻ":"u","Ủ":"u","ủ":"u","Ȕ":"u","ȕ":"u","Ȗ":"u","ȗ":"u","Ư":"u","ư":"u","Ứ":"u","ứ":"u","Ừ":"u","ừ":"u","Ữ":"u","ữ":"u","Ử":"u","ử":"u","Ự":"u","ự":"u","Ụ":"u","ụ":"u","Ṳ":"u","ṳ":"u","Ṷ":"u","ṷ":"u","Ṵ":"u","ṵ":"u","Ʉ":"u","ʉ":"u","Ṽ":"v","ṽ":"v","Ṿ":"v","ṿ":"v","Ʋ":"v","ʋ":"v","Ẃ":"w","ẃ":"w","Ẁ":"w","ẁ":"w","Ŵ":"w","ŵ":"w",W:"w","̊":"w","ẘ":"w","Ẅ":"w","ẅ":"w","Ẇ":"w","ẇ":"w","Ẉ":"w","ẉ":"w","Ẍ":"x","ẍ":"x","Ẋ":"x","ẋ":"x","Ý":"y","ý":"y","Ỳ":"y","ỳ":"y","Ŷ":"y","ŷ":"y",Y:"y","ẙ":"y","Ÿ":"y","ÿ":"y","Ỹ":"y","ỹ":"y","Ẏ":"y","ẏ":"y","Ȳ":"y","ȳ":"y","Ỷ":"y","ỷ":"y","Ỵ":"y","ỵ":"y","ʏ":"y","Ɏ":"y","ɏ":"y","Ƴ":"y","ƴ":"y","Ź":"z","ź":"z","Ẑ":"z","ẑ":"z","Ž":"z","ž":"z","Ż":"z","ż":"z","Ẓ":"z","ẓ":"z","Ẕ":"z","ẕ":"z","Ƶ":"z","ƶ":"z","Ȥ":"z","ȥ":"z","ʐ":"z","ʑ":"z","Ⱬ":"z","ⱬ":"z","Ǯ":"z","ǯ":"z","ƺ":"z","２":"2","６":"6","Ｂ":"B","Ｆ":"F","Ｊ":"J","Ｎ":"N","Ｒ":"R","Ｖ":"V","Ｚ":"Z","ｂ":"b","ｆ":"f","ｊ":"j","ｎ":"n","ｒ":"r","ｖ":"v","ｚ":"z","１":"1","５":"5","９":"9","Ａ":"A","Ｅ":"E","Ｉ":"I","Ｍ":"M","Ｑ":"Q","Ｕ":"U","Ｙ":"Y","ａ":"a","ｅ":"e","ｉ":"i","ｍ":"m","ｑ":"q","ｕ":"u","ｙ":"y","０":"0","４":"4","８":"8","Ｄ":"D","Ｈ":"H","Ｌ":"L","Ｐ":"P","Ｔ":"T","Ｘ":"X","ｄ":"d","ｈ":"h","ｌ":"l","ｐ":"p","ｔ":"t","ｘ":"x","３":"3","７":"7","Ｃ":"C","Ｇ":"G","Ｋ":"K","Ｏ":"O","Ｓ":"S","Ｗ":"W","ｃ":"c","ｇ":"g","ｋ":"k","ｏ":"o","ｓ":"s","ｗ":"w","ẳ":"a","Â":"a","â":"a","Ấ":"a","ấ":"a","Ầ":"a","ầ":"a"},void 0===window.getComputedStyle&&(window.getComputedStyle=(u.prototype={constructor:u,getPropertyPriority:function(){},getPropertyValue:function(t){return this[t]||""},item:function(){},removeProperty:function(){},setProperty:function(){},getPropertyCSSValue:function(){}},function(t){return new u(t)})),v(document).on("keydown.xdsoftctrl",function(t){t.keyCode===S&&(O=!0),t.keyCode===C&&(O=!0)}).on("keyup.xdsoftctrl",function(t){t.keyCode===S&&(O=!1),t.keyCode===C&&(O=!1)}),p={minLength:0,valueKey:"value",titleKey:"title",highlight:!0,showHint:!0,dropdownWidth:"100%",dropdownStyle:{},itemStyle:{},hintStyle:!1,style:!1,debug:!0,openOnFocus:!1,closeOnBlur:!0,autoselect:!1,accents:!0,replaceAccentsForRemote:!0,limit:20,visibleLimit:20,visibleHeight:0,defaultHeightItem:30,timeoutUpdate:10,get:function(t,e){return function(t,e){return K(e)||(e=0),v.isArray(this.source)&&K(this.source[e])&&K(this.source[e][t])?this.source[e][t]:K(this[t])?v.isArray(this[t])?K(this[t][e])?this[t][e]:K(this[t][0])?this[t][0]:null:this[t]:null}.call(this,t,e)},replace:[function(t,e){return this.replaceAccentsForRemote&&(e=g(e)),t.replace("%QUERY%",encodeURIComponent(e))}],equal:function(t,e){return e.toLowerCase()==t.substr(0,e.length).toLowerCase()},findRight:[function(t,e,o){var n,i;if(t)for(i=0;i<t.length;i+=1)if(n=F.call(this,"getValue",o,[t[i],o]),F.call(this,"equal",o,[n,e,o],!1))return t[i];return!1}],valid:[function(t,e){return this.accents&&(t=g(t),e=g(e)),-1!=t.toLowerCase().indexOf(e.toLowerCase())}],filter:[function(t,e,o){var n,i,r=[];if(t)for(i=0;i<t.length;i+=1)n=K(t[i][this.get("valueKey",o)])?t[i][this.get("valueKey",o)]:t[i].toString(),F.call(this,"valid",o,[n,e])&&r.push(t[i]);return r}],preparse:function(t){return t},getValue:[function(t,e){return K(t[this.get("valueKey",e)])?t[this.get("valueKey",e)]:t.toString()}],getTitle:[function(t,e){return K(t[this.get("titleKey",e)])?t[this.get("titleKey",e)]:t.toString()}],render:[function(t,e,o,n){var i,r,a,s,l=F.call(this,"getValue",e,[t,e],p.getValue[0].call(this,t,e)),c=F.call(this,"getTitle",e,[t,e],p.getTitle[0].call(this,t,e)),u="",d="",f="",h=0;if(this.highlight)if(this.accents){for(u=g(c).toLowerCase().replace(/[<>]+/g,""),i=g(n).toLowerCase().replace(/[<>]+/g,""),d=u.replace(new RegExp(A(i),"g"),"<"+i+">"),s=0;s<d.length;s+=1)r=c.charAt(h),"<"===(a=d.charAt(s))?f+="<b>":">"===a?f+="</b>":(h+=1,f+=r);c=f}else c=c.replace(new RegExp("("+A(n)+")","i"),"<b>$1</b>");return"<div "+(l==n?'class="active"':"")+' data-value="'+encodeURIComponent(l)+'">'+c+"</div>"}],appendMethod:"concat",source:[]},n={destroy:function(){return this.trigger("destroy.xdsoft")},update:function(){return this.trigger("updateHelperPosition.xdsoft")},options:function(t){return this.data("autocomplete_options")&&v.isPlainObject(t)&&this.data("autocomplete_options",v.extend(!0,this.data("autocomplete_options"),t)),this},setSource:function(t,e){var o,n,i;return this.data("autocomplete_options")&&(v.isPlainObject(t)||v.isFunction(t)||v.isArray(t))&&(o=this.data("autocomplete_options"),n=this.data("xdsoft_autocomplete"),i=o.source,void 0===e||isNaN(e)?v.isFunction(t)?this.data("autocomplete_options").source=t:v.extend(!0,i,t):v.isPlainObject(t)||v.isArray(t)?i[e]=v.extend(!0,v.isArray(t)?[]:{},t):i[e]=t,B.call(o,this.val(),n,function(t){V.call(o,n,t)})),this},getSource:function(t){if(this.data("autocomplete_options")){var e=this.data("autocomplete_options").source;return void 0!==t&&!isNaN(t)&&e[t]?e[t]:e}return null}},v.fn.autocomplete=function(t,e,o){return"string"===v.type(t)&&n[t]?n[t].call(this,e,o):this.each(function(){f(this,v.extend(!0,{},p,t))})};var h=function(t){var e=t.element,o=t.valueKey,r=t.url,a=$(e);a.autocomplete({appendMethod:"replace",valueKey:o||"nickname",source:[function(t,e){var o,n,i=this;t&&(o=[],n=r||a.data("auto-url"),$.get("".concat(n,"?q=").concat(t),function(t){t&&t.map(function(t){o.push(t[i.valueKey])}),e(o)}))}]})};$("#message-create-form").validate({rules:{"message[receiver]":{required:!0,es_remote:{}},"message[content]":{required:!0,maxlength:500}}});h({element:"#message_receiver"})}});