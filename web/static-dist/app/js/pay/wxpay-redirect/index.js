!function(i){function e(e){for(var r,t,s=e[0],b=e[1],w=e[2],d=0,c=[];d<s.length;d++)t=s[d],Object.prototype.hasOwnProperty.call(a,t)&&a[t]&&c.push(a[t][0]),a[t]=0;for(r in b)Object.prototype.hasOwnProperty.call(b,r)&&(i[r]=b[r]);for(l&&l(e);c.length;)c.shift()();return n.push.apply(n,w||[]),o()}function o(){for(var i,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var b=o[s];0!==a[b]&&(r=!1)}r&&(n.splice(e--,1),i=t(t.s=o[0]))}return i}var r={},a={331:0},n=[];function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return i[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=i,t.c=r,t.d=function(i,e,o){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:o})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)t.d(o,r,function(e){return i[e]}.bind(null,r));return o},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},t.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],b=s.push.bind(s);s.push=e,s=s.slice();for(var w=0;w<s.length;w++)e(s[w]);var l=b;n.push([1357,0]),o()}({1357:function(i,e,o){"use strict";o.r(e);var r=o(179),a=new(o.n(r).a)(navigator.userAgent),n=a.getBrowser();"iOS"===a.getOS().name&&"Mobile Safari"===n.name?document.getElementById("openApp").click():window.location.href=$("#jsWebViewPay").data("goto")},179:function(i,e,o){var r;!function(a,n){"use strict";var t="function",s="undefined",b="object",w="string",l="major",d="model",c="name",u="type",p="vendor",m="version",f="architecture",h="console",v="mobile",g="tablet",x="smarttv",k="wearable",y="embedded",_="Amazon",S="Apple",O="ASUS",T="BlackBerry",j="Firefox",q="Google",A="Huawei",z="LG",N="Microsoft",P="Motorola",B="Opera",C="Samsung",E="Sharp",M="Sony",U="Xiaomi",R="Zebra",V="Facebook",I="Chromium OS",D="Mac OS",F=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},L=function(i,e){return typeof i===w&&-1!==G(e).indexOf(G(i))},G=function(i){return i.toLowerCase()},H=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,500)},W=function(i,e){for(var o,r,a,s,w,l,d=0;d<e.length&&!w;){var c=e[d],u=e[d+1];for(o=r=0;o<c.length&&!w&&c[o];)if(w=c[o++].exec(i))for(a=0;a<u.length;a++)l=w[++r],typeof(s=u[a])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):n:this[s[0]]=l?s[1].call(this,l,s[2]):n:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):n):this[s]=l||n;d+=2}},Z=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var r=0;r<e[o].length;r++)if(L(e[o][r],i))return"?"===o?n:o}else if(L(e[o],i))return"?"===o?n:o;return i},$={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},X={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,m],[/opios[\/ ]+([\w\.]+)/i],[m,[c,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[c,B]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[c,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[c,"Smart Lenovo Browser"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[c,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[c,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[c,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[c,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[c,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 Browser"]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 Browser"],m],[/samsungbrowser\/([\w\.]+)/i],[m,[c,"Samsung Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],m],[/metasr[\/ ]?([\d\.]+)/i],[m,[c,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,m],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,V],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[c,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[m,Z,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[c,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,m],[/(cobalt)\/([\w\.]+)/i],[c,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,G]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,C],[u,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,C],[u,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,S],[u,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,S],[u,g]],[/(macintosh);/i],[d,[p,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,E],[u,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,A],[u,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,A],[u,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,U],[u,v]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,U],[u,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[u,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[u,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[u,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,P],[u,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,P],[u,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,z],[u,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,z],[u,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,"Lenovo"],[u,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[u,v]],[/(pixel c)\b/i],[d,[p,q],[u,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,q],[u,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,M],[u,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,M],[u,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[u,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,_],[u,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,_],[u,v]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[u,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,T],[u,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,O],[u,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,O],[u,v]],[/(nexus 9)/i],[d,[p,"HTC"],[u,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[u,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[u,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[u,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[p,"Ulefone"],[u,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[u,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,d,[u,g]],[/(surface duo)/i],[d,[p,N],[u,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[u,v]],[/(u304aa)/i],[d,[p,"AT&T"],[u,v]],[/\bsie-(\w*)/i],[d,[p,"Siemens"],[u,v]],[/\b(rct\w+) b/i],[d,[p,"RCA"],[u,g]],[/\b(venue[\d ]{2,7}) b/i],[d,[p,"Dell"],[u,g]],[/\b(q(?:mv|ta)\w+) b/i],[d,[p,"Verizon"],[u,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[p,"Barnes & Noble"],[u,g]],[/\b(tm\d{3}\w+) b/i],[d,[p,"NuVision"],[u,g]],[/\b(k88) b/i],[d,[p,"ZTE"],[u,g]],[/\b(nx\d{3}j) b/i],[d,[p,"ZTE"],[u,v]],[/\b(gen\d{3}) b.+49h/i],[d,[p,"Swiss"],[u,v]],[/\b(zur\d{3}) b/i],[d,[p,"Swiss"],[u,g]],[/\b((zeki)?tb.*\b) b/i],[d,[p,"Zeki"],[u,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],d,[u,g]],[/\b(ns-?\w{0,9}) b/i],[d,[p,"Insignia"],[u,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[p,"NextBook"],[u,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],d,[u,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],d,[u,v]],[/\b(ph-1) /i],[d,[p,"Essential"],[u,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[p,"Envizen"],[u,g]],[/\b(trio[-\w\. ]+) b/i],[d,[p,"MachSpeed"],[u,g]],[/\btu_(1491) b/i],[d,[p,"Rotor"],[u,g]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[u,g]],[/(sprint) (\w+)/i],[p,d,[u,v]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,N],[u,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,R],[u,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,R],[u,v]],[/smart-tv.+(samsung)/i],[p,[u,x]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,C],[u,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,z],[u,x]],[/(apple) ?tv/i],[p,[d,"Apple TV"],[u,x]],[/crkey/i],[[d,"Chromecast"],[p,q],[u,x]],[/droid.+aft(\w+)( bui|\))/i],[d,[p,_],[u,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,E],[u,x]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,M],[u,x]],[/(mitv-\w{5}) bui/i],[d,[p,U],[u,x]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[u,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[d,H],[u,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,d,[u,h]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[u,h]],[/(playstation [345portablevi]+)/i],[d,[p,M],[u,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,N],[u,h]],[/((pebble))app/i],[p,d,[u,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,S],[u,k]],[/droid.+; (glass) \d/i],[d,[p,q],[u,k]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,R],[u,k]],[/(quest( 2| pro)?)/i],[d,[p,V],[u,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[u,y]],[/(aeobc)\b/i],[d,[p,_],[u,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[u,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[u,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,v]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[m,Z,$]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,Z,$],[c,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,D],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,m],[/\(bb(10);/i],[m,[c,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[c,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[c,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,I],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,m],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,m]]},J=function(i,e){if(typeof i===b&&(e=i,i=n),!(this instanceof J))return new J(i,e).getResult();var o=typeof a!==s&&a.navigator?a.navigator:n,r=i||(o&&o.userAgent?o.userAgent:""),l=o&&o.userAgentData?o.userAgentData:n,d=e?function(i,e){var o={};for(var r in i)e[r]&&e[r].length%2==0?o[r]=e[r].concat(i[r]):o[r]=i[r];return o}(X,e):X,c=o&&o.userAgent==r;return this.getBrowser=function(){var i,e={};return e.name=n,e.version=n,W.call(e,r,d.browser),e.major=typeof(i=e.version)===w?i.replace(/[^\d\.]/g,"").split(".")[0]:n,c&&o&&o.brave&&typeof o.brave.isBrave==t&&(e.name="Brave"),e},this.getCPU=function(){var i={};return i.architecture=n,W.call(i,r,d.cpu),i},this.getDevice=function(){var i={};return i.vendor=n,i.model=n,i.type=n,W.call(i,r,d.device),c&&!i.type&&l&&l.mobile&&(i.type=v),c&&"Macintosh"==i.model&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(i.model="iPad",i.type=g),i},this.getEngine=function(){var i={};return i.name=n,i.version=n,W.call(i,r,d.engine),i},this.getOS=function(){var i={};return i.name=n,i.version=n,W.call(i,r,d.os),c&&!i.name&&l&&"Unknown"!=l.platform&&(i.name=l.platform.replace(/chrome os/i,I).replace(/macos/i,D)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(i){return r=typeof i===w&&i.length>500?H(i,500):i,this},this.setUA(r),this};J.VERSION="0.7.37",J.BROWSER=F([c,m,l]),J.CPU=F([f]),J.DEVICE=F([d,p,u,h,v,x,g,k,y]),J.ENGINE=J.OS=F([c,m]),typeof e!==s?(typeof i!==s&&i.exports&&(e=i.exports=J),e.UAParser=J):o(170)?(r=function(){return J}.call(e,o,e,i))===n||(i.exports=r):typeof a!==s&&(a.UAParser=J);var K=typeof a!==s&&(a.jQuery||a.Zepto);if(K&&!K.ua){var Q=new J;K.ua=Q.getResult(),K.ua.get=function(){return Q.getUA()},K.ua.set=function(i){Q.setUA(i);var e=Q.getResult();for(var o in e)K.ua[o]=e[o]}}}("object"==typeof window?window:this)}});