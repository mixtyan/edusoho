!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/",i(i.s=977)}({977:function(e,t){var i=$("#finish-type");i.length&&i.on("change",(function(){$("#conditions").children().hide();var e=$(this).val();switch("time"==e?$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}):$("#watchTime").rules("remove"),e){case"time":if($("#conditions-time").show(),!$("#watchTime").val()){var t=$("#finish-type option:selected");$("#watchTime").val(t.data("value")),$("#finish-data").val(t.data("value"))}$("#timeLabel").hasClass("hidden")&&$("#timeLabel").removeClass("hidden"),!$("#watchTimeLabel").hasClass("hidden")&&$("#watchTimeLabel").addClass("hidden");break;case"watchTime":if($("#conditions-time").show(),!$("#watchTime").val()){var a=$("#finish-type option:selected");$("#watchTime").val(a.data("value")),$("#finish-data").val(a.data("value"))}$("#watchTimeLabel").hasClass("hidden")&&$("#watchTimeLabel").removeClass("hidden"),!$("#timeLabel").hasClass("hidden")&&$("#timeLabel").addClass("hidden");break;case"end":break;default:i.trigger("selectChange",e)}}));var a=$("#step3-form").validate({groups:{nameGroup:"minute second"},rules:{watchTime:{positive_integer:!0}}});$("#conditions-time").is(":hidden")||$("#watchTime").rules("add",{required:!0,positive_integer:!0,messages:{required:Translator.trans("activity.video_manage.length_required_error_hint")}}),$("#watchTime").on("change",(function(){$("#finish-data").val($(this).val())})),window.ltc.on("getCondition",(function(e){$("#finish-type-select").length>0?window.ltc.emit("returnCondition",{valid:a.form(),data:{finishType:$("#finish-type-select:checked").val()}}):window.ltc.emit("returnCondition",{valid:a.form(),data:{finishType:$("#finish-type").val(),finishData:$("#finish-data").val()}})}))}});