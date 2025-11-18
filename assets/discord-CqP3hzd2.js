import{B as Ra,j as Y,C as Wa,D as Ua,e as Ba,h as Ya,d as j,c as ne,y as Ha,q as Ga}from"./index-scA6enA4.js";import{_ as Ka,V as xe}from"./VImg-Bgq6lCDv.js";function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function Va(e){if(Array.isArray(e))return e}function Xa(e){if(Array.isArray(e))return Fe(e)}function Ja(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qa(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$t(r.key),r)}}function Qa(e,t,a){return t&&qa(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=He(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=$t(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Za(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function er(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=i.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(a),!0).forEach(function(r){g(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):rt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ve(e,t){return Va(e)||er(e,t)||He(e,t)||tr()}function C(e){return Xa(e)||Za(e)||He(e)||ar()}function rr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function $t(e){var t=rr(e,"string");return typeof t=="symbol"?t:t+""}function ue(e){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(e)}function He(e,t){if(e){if(typeof e=="string")return Fe(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Fe(e,t):void 0}}var nt=function(){},Ge={},Mt={},zt=null,Dt={mark:nt,measure:nt};try{typeof window<"u"&&(Ge=window),typeof document<"u"&&(Mt=document),typeof MutationObserver<"u"&&(zt=MutationObserver),typeof performance<"u"&&(Dt=performance)}catch{}var nr=Ge.navigator||{},it=nr.userAgent,ot=it===void 0?"":it,z=Ge,x=Mt,st=zt,ie=Dt;z.document;var M=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Lt=~ot.indexOf("MSIE")||~ot.indexOf("Trident/"),we,ir=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,or=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Rt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},sr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Wt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],k="classic",te="duotone",Ut="sharp",Bt="sharp-duotone",Yt="chisel",Ht="etch",Gt="jelly",Kt="jelly-duo",Vt="jelly-fill",Xt="notdog",Jt="notdog-duo",qt="slab",Qt="slab-press",Zt="thumbprint",ea="utility",ta="utility-duo",aa="utility-fill",ra="whiteboard",lr="Classic",fr="Duotone",ur="Sharp",cr="Sharp Duotone",dr="Chisel",mr="Etch",vr="Jelly",hr="Jelly Duo",gr="Jelly Fill",pr="Notdog",br="Notdog Duo",yr="Slab",xr="Slab Press",wr="Thumbprint",Sr="Utility",Ar="Utility Duo",kr="Utility Fill",Pr="Whiteboard",na=[k,te,Ut,Bt,Yt,Ht,Gt,Kt,Vt,Xt,Jt,qt,Qt,Zt,ea,ta,aa,ra];we={},g(g(g(g(g(g(g(g(g(g(we,k,lr),te,fr),Ut,ur),Bt,cr),Yt,dr),Ht,mr),Gt,vr),Kt,hr),Vt,gr),Xt,pr),g(g(g(g(g(g(g(g(we,Jt,br),qt,yr),Qt,xr),Zt,wr),ea,Sr),ta,Ar),aa,kr),ra,Pr);var Ir={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Or={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Er=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ia=["fak","fa-kit","fakd","fa-kit-duotone"],lt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Cr=["kit"],_r="kit",jr="kit-duotone",Nr="Kit",Tr="Kit Duotone";g(g({},_r,Nr),jr,Tr);var $r={kit:{"fa-kit":"fak"}},Mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zr={kit:{fak:"fa-kit"}},ft={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Se,oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Lr="classic",Rr="duotone",Wr="sharp",Ur="sharp-duotone",Br="chisel",Yr="etch",Hr="jelly",Gr="jelly-duo",Kr="jelly-fill",Vr="notdog",Xr="notdog-duo",Jr="slab",qr="slab-press",Qr="thumbprint",Zr="utility",en="utility-duo",tn="utility-fill",an="whiteboard",rn="Classic",nn="Duotone",on="Sharp",sn="Sharp Duotone",ln="Chisel",fn="Etch",un="Jelly",cn="Jelly Duo",dn="Jelly Fill",mn="Notdog",vn="Notdog Duo",hn="Slab",gn="Slab Press",pn="Thumbprint",bn="Utility",yn="Utility Duo",xn="Utility Fill",wn="Whiteboard";Se={},g(g(g(g(g(g(g(g(g(g(Se,Lr,rn),Rr,nn),Wr,on),Ur,sn),Br,ln),Yr,fn),Hr,un),Gr,cn),Kr,dn),Vr,mn),g(g(g(g(g(g(g(g(Se,Xr,vn),Jr,hn),qr,gn),Qr,pn),Zr,bn),en,yn),tn,xn),an,wn);var Sn="kit",An="kit-duotone",kn="Kit",Pn="Kit Duotone";g(g({},Sn,kn),An,Pn);var In={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},On={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ce={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},En=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],oa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Dr,En),Fn=["solid","regular","light","thin","duotone","brands","semibold"],sa=[1,2,3,4,5,6,7,8,9,10],Cn=sa.concat([11,12,13,14,15,16,17,18,19,20]),_n=["aw","fw","pull-left","pull-right"],jn=[].concat(C(Object.keys(On)),Fn,_n,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(sa.map(function(e){return"".concat(e,"x")})).concat(Cn.map(function(e){return"w-".concat(e)})),Nn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",_e=16,la="fa",fa="svg-inline--fa",W="data-fa-i2svg",je="data-fa-pseudo-element",Tn="data-fa-pseudo-element-pending",Ke="data-prefix",Ve="data-icon",ut="fontawesome-i2svg",$n="async",Mn=["HTML","HEAD","STYLE","SCRIPT"],ua=["::before","::after",":before",":after"],ca=(function(){try{return!0}catch{return!1}})();function ae(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[k]}})}var da=f({},Rt);da[k]=f(f(f(f({},{"fa-duotone":"duotone"}),Rt[k]),lt.kit),lt["kit-duotone"]);var zn=ae(da),Ne=f({},Fr);Ne[k]=f(f(f(f({},{duotone:"fad"}),Ne[k]),ft.kit),ft["kit-duotone"]);var ct=ae(Ne),Te=f({},Ce);Te[k]=f(f({},Te[k]),zr.kit);var Xe=ae(Te),$e=f({},In);$e[k]=f(f({},$e[k]),$r.kit);ae($e);var Dn=ir,ma="fa-layers-text",Ln=or,Rn=f({},Ir);ae(Rn);var Wn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=sr,Un=[].concat(C(Cr),C(jn)),Q=z.FontAwesomeConfig||{};function Bn(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Hn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hn.forEach(function(e){var t=ve(e,2),a=t[0],r=t[1],n=Yn(Bn(a));n!=null&&(Q[r]=n)})}var va={styleDefault:"solid",familyDefault:k,cssPrefix:la,replacementClass:fa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var V=f(f({},va),Q);V.autoReplaceSvg||(V.observeMutations=!1);var v={};Object.keys(va).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){V[e]=a,Z.forEach(function(r){return r(v)})},get:function(){return V[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Z.forEach(function(a){return a(v)})},get:function(){return V.cssPrefix}});z.FontAwesomeConfig=v;var Z=[];function Gn(e){return Z.push(e),function(){Z.splice(Z.indexOf(e),1)}}var H=_e,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kn(e){if(!(!e||!M)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return x.head.insertBefore(t,r),e}}var Vn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var e=12,t="";e-- >0;)t+=Vn[Math.random()*62|0];return t}function X(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Je(e){return e.classList?X(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ha(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(ha(e[a]),'" ')},"").trim()}function he(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function qe(e){return e.size!==_.size||e.x!==_.x||e.y!==_.y||e.rotate!==_.rotate||e.flipX||e.flipY}function Jn(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function qn(e){var t=e.transform,a=e.width,r=a===void 0?_e:a,n=e.height,i=n===void 0?_e:n,o="";return Lt?o+="translate(".concat(t.x/H-r/2,"em, ").concat(t.y/H-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "),o+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var Qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ga(){var e=la,t=fa,a=v.cssPrefix,r=v.replacementClass,n=Qn;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var mt=!1;function ke(){v.autoAddCss&&!mt&&(Kn(ga()),mt=!0)}var Zn={mixout:function(){return{dom:{css:ga,insertCss:ke}}},hooks:function(){return{beforeDOMElementCreation:function(){ke()},beforeI2svg:function(){ke()}}}},$=z||{};$[T]||($[T]={});$[T].styles||($[T].styles={});$[T].hooks||($[T].hooks={});$[T].shims||($[T].shims=[]);var F=$[T],pa=[],ba=function(){x.removeEventListener("DOMContentLoaded",ba),ce=1,pa.map(function(t){return t()})},ce=!1;M&&(ce=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ce||x.addEventListener("DOMContentLoaded",ba));function ei(e){M&&(ce?setTimeout(e,0):pa.push(e))}function re(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?ha(e):"<".concat(t," ").concat(Xn(r),">").concat(i.map(re).join(""),"</").concat(t,">")}function vt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Pe=function(t,a,r,n){var i=Object.keys(t),o=i.length,s=a,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function ya(e){return C(e).length!==1?null:e.codePointAt(0).toString(16)}function ht(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Me(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=ht(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,ht(t)):F.styles[e]=f(f({},F.styles[e]||{}),i),e==="fas"&&Me("fa",t)}var ee=F.styles,ti=F.shims,xa=Object.keys(Xe),ai=xa.reduce(function(e,t){return e[t]=Object.keys(Xe[t]),e},{}),Qe=null,wa={},Sa={},Aa={},ka={},Pa={};function ri(e){return~Un.indexOf(e)}function ni(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!ri(n)?n:null}var Ia=function(){var t=function(i){return Pe(ee,function(o,s,l){return o[l]=Pe(s,i,{}),o},{})};wa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Sa=t(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Pa=t(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var a="far"in ee||v.autoFetchSvg,r=Pe(ti,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Aa=r.names,ka=r.unicodes,Qe=ge(v.styleDefault,{family:v.familyDefault})};Gn(function(e){Qe=ge(e.styleDefault,{family:v.familyDefault})});Ia();function Ze(e,t){return(wa[e]||{})[t]}function ii(e,t){return(Sa[e]||{})[t]}function R(e,t){return(Pa[e]||{})[t]}function Oa(e){return Aa[e]||{prefix:null,iconName:null}}function oi(e){var t=ka[e],a=Ze("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return Qe}var Ea=function(){return{prefix:null,iconName:null,rest:[]}};function si(e){var t=k,a=xa.reduce(function(r,n){return r[n]="".concat(v.cssPrefix,"-").concat(n),r},{});return na.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ai[r].includes(n)}))&&(t=r)}),t}function ge(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?k:a,n=zn[r][e];if(r===te&&!e)return"fad";var i=ct[r][e]||ct[r][n],o=e in F.styles?e:null,s=i||o||null;return s}function li(e){var t=[],a=null;return e.forEach(function(r){var n=ni(v.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function gt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var pt=oa.concat(ia);function pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=gt(e.filter(function(p){return pt.includes(p)})),o=gt(e.filter(function(p){return!pt.includes(p)})),s=i.filter(function(p){return n=p,!Wt.includes(p)}),l=ve(s,1),u=l[0],c=u===void 0?null:u,m=si(i),b=f(f({},li(o)),{},{prefix:ge(c,{family:m})});return f(f(f({},b),di({values:e,family:m,styles:ee,config:v,canonical:b,givenPrefix:n})),fi(r,n,b))}function fi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?Oa(n):{},o=R(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ee.far&&ee.fas&&!v.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ui=na.filter(function(e){return e!==k||e!==te}),ci=Object.keys(Ce).filter(function(e){return e!==k}).map(function(e){return Object.keys(Ce[e])}).flat();function di(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=a===te,m=t.includes("fa-duotone")||t.includes("fad"),b=u.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(m||b||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ui.includes(a)){var S=Object.keys(s).find(function(A){return ci.includes(A)});if(S||u.autoFetchSvg){var y=Er.get(a).defaultShortPrefixId;r.prefix=y,r.iconName=R(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=D()||"fas"),r}var mi=(function(){function e(){Ja(this,e),this.definitions={}}return Qa(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Me(s,o[s]);var l=Xe[k][s];l&&Me(l,o[s]),Ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(a[s][m]=u)}),a[s][l]=u}),a}}])})(),bt=[],G={},K={},vi=Object.keys(K);function hi(e,t){var a=t.mixoutsTo;return bt=e,G={},Object.keys(K).forEach(function(r){vi.indexOf(r)===-1&&delete K[r]}),bt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ue(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){G[o]||(G[o]=[]),G[o].push(i[o])})}r.provides&&r.provides(K)}),a}function ze(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=G[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function U(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=G[e]||[];n.forEach(function(i){i.apply(null,a)})}function L(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||D();if(t)return t=R(a,t)||t,vt(Fa.definitions,a,t)||vt(F.styles,a,t)}var Fa=new mi,gi=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,U("noAuto")},pi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(U("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ei(function(){yi({autoReplaceSvgRoot:a}),U("watch",t)})}},bi={icon:function(t){if(t===null)return null;if(ue(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:R(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ge(t[0]);return{prefix:r,iconName:R(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Dn))){var n=pe(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||D(),iconName:R(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=D();return{prefix:i,iconName:R(i,t)||t}}}},E={noAuto:gi,config:v,dom:pi,parse:bi,library:Fa,findIconDefinition:De,toHtml:re},yi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?x:a;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&M&&v.autoReplaceSvg&&E.dom.i2svg({node:r})};function be(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return re(r)})}}),Object.defineProperty(e,"node",{get:function(){if(M){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(qe(o)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=he(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function wi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function Si(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function et(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,m=c===void 0?!1:c,b=r.found?r:a,p=b.width,S=b.height,y=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(O){return u.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(u.classes).join(" "),A={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(S)})};!Si(u.attributes)&&!u.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),m&&(A.attributes[W]="");var d=f(f({},A),{},{prefix:n,iconName:i,main:a,mask:r,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),h=r.found&&a.found?L("generateAbstractMask",d)||{children:[],attributes:{}}:L("generateAbstractIcon",d)||{children:[],attributes:{}},w=h.children,P=h.attributes;return d.children=w,d.attributes=P,s?wi(d):xi(d)}function yt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[W]="");var u=f({},i.styles);qe(n)&&(u.transform=qn({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var c=he(u);c.length>0&&(l.style=c);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),m}function Ai(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=he(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ie=F.styles;function Le(e){var t=e[0],a=e[1],r=e.slice(4),n=ve(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var ki={found:!1,width:512,height:512};function Pi(e,t){!ca&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Re(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=D()),new Promise(function(r,n){if(a==="fa"){var i=Oa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ie[t]&&Ie[t][e]){var o=Ie[t][e];return r(Le(o))}Pi(e,t),r(f(f({},ki),{},{icon:v.showMissingIcons&&e?L("missingIconAbstract")||{}:{}}))})}var xt=function(){},We=v.measurePerformance&&ie&&ie.mark&&ie.measure?ie:{mark:xt,measure:xt},q='FA "7.1.0"',Ii=function(t){return We.mark("".concat(q," ").concat(t," begins")),function(){return Ca(t)}},Ca=function(t){We.mark("".concat(q," ").concat(t," ends")),We.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))},tt={begin:Ii,end:Ca},le=function(){};function wt(e){var t=e.getAttribute?e.getAttribute(W):null;return typeof t=="string"}function Oi(e){var t=e.getAttribute?e.getAttribute(Ke):null,a=e.getAttribute?e.getAttribute(Ve):null;return t&&a}function Ei(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Fi(){if(v.autoReplaceSvg===!0)return fe.replace;var e=fe[v.autoReplaceSvg];return e||fe.replace}function Ci(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function _i(e){return x.createElement(e)}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Ci:_i:a;if(typeof e=="string")return x.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(_a(o,{ceFn:r}))}),n}function ji(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var fe={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(_a(n),a)}),a.getAttribute(W)===null&&v.keepOriginalSource){var r=x.createComment(ji(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Je(a).indexOf(v.replacementClass))return fe.replace(t);var n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return re(s)}).join(`
`);a.setAttribute(W,""),a.innerHTML=o}};function St(e){e()}function ja(e,t){var a=typeof t=="function"?t:le;if(e.length===0)a();else{var r=St;v.mutateApproach===$n&&(r=z.requestAnimationFrame||St),r(function(){var n=Fi(),i=tt.begin("mutate");e.map(n),i(),a()})}}var at=!1;function Na(){at=!0}function Ue(){at=!1}var de=null;function At(e){if(st&&v.observeMutations){var t=e.treeCallback,a=t===void 0?le:t,r=e.nodeCallback,n=r===void 0?le:r,i=e.pseudoElementsCallback,o=i===void 0?le:i,s=e.observeMutationsRoot,l=s===void 0?x:s;de=new st(function(u){if(!at){var c=D();X(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wt(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&wt(m.target)&&~Wn.indexOf(m.attributeName))if(m.attributeName==="class"&&Oi(m.target)){var b=pe(Je(m.target)),p=b.prefix,S=b.iconName;m.target.setAttribute(Ke,p||c),S&&m.target.setAttribute(Ve,S)}else Ei(m.target)&&n(m.target)})}}),M&&de.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ni(){de&&de.disconnect()}function Ti(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),a}function $i(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=pe(Je(e));return n.prefix||(n.prefix=D()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ii(n.prefix,e.innerText)||Ze(n.prefix,ya(e.innerText))),!n.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Mi(e){var t=X(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function zi(){return{iconName:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=$i(e),r=a.iconName,n=a.prefix,i=a.rest,o=Mi(e),s=ze("parseNodeAttributes",{},e),l=t.styleParser?Ti(e):[];return f({iconName:r,prefix:n,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Di=F.styles;function Ta(e){var t=v.autoReplaceSvg==="nest"?kt(e,{styleParser:!1}):kt(e);return~t.extra.classes.indexOf(ma)?L("generateLayersText",e,t):L("generateSvgReplacementMutation",e,t)}function Li(){return[].concat(C(ia),C(oa))}function Pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var a=x.documentElement.classList,r=function(m){return a.add("".concat(ut,"-").concat(m))},n=function(m){return a.remove("".concat(ut,"-").concat(m))},i=v.autoFetchSvg?Li():Wt.concat(Object.keys(Di));i.includes("fa")||i.push("fa");var o=[".".concat(ma,":not([").concat(W,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(W,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=X(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=tt.begin("onTree"),u=s.reduce(function(c,m){try{var b=Ta(m);b&&c.push(b)}catch(p){ca||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(b){ja(b,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(b){l(),m(b)})})}function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ta(e).then(function(a){a&&ja([a],t)})}function Wi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:De(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:De(n||{})),e(r,f(f({},a),{},{mask:n}))}}var Ui=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?_:r,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,m=a.classes,b=m===void 0?[]:m,p=a.attributes,S=p===void 0?{}:p,y=a.styles,A=y===void 0?{}:y;if(t){var d=t.prefix,h=t.iconName,w=t.icon;return be(f({type:"icon"},t),function(){return U("beforeDOMElementCreation",{iconDefinition:t,params:a}),et({icons:{main:Le(w),mask:l?Le(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:f(f({},_),n),symbol:o,maskId:c,extra:{attributes:S,styles:A,classes:b}})})}},Bi={mixout:function(){return{icon:Wi(Ui)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Pt,a.nodeCallback=Ri,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?x:r,i=a.callback,o=i===void 0?function(){}:i;return Pt(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(m,b){Promise.all([Re(n,i),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var S=ve(p,2),y=S[0],A=S[1];m([a,et({icons:{main:y,mask:A},prefix:i,iconName:n,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,s=a.styles,l=he(s);l.length>0&&(n.style=l);var u;return qe(o)&&(u=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:n}}}},Yi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return be({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},Hi={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return be({type:"counter",content:a},function(){return U("beforeDOMElementCreation",{content:a,params:r}),Ai({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},Gi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?_:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return be({type:"text",content:a},function(){return U("beforeDOMElementCreation",{content:a,params:r}),yt({content:a,transform:f(f({},_),i),extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,s=null;if(Lt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,yt({content:a.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},$a=new RegExp('"',"ug"),It=[1105920,1112319],Ot=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Or),Nn),Mr),Be=Object.keys(Ot).reduce(function(e,t){return e[t.toLowerCase()]=Ot[t],e},{}),Ki=Object.keys(Be).reduce(function(e,t){var a=Be[t];return e[t]=a[900]||C(Object.entries(a))[0][1],e},{});function Vi(e){var t=e.replace($a,"");return ya(C(t)[0]||"")}function Xi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace($a,""),n=r.codePointAt(0),i=n>=It[0]&&n<=It[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function Ji(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Be[a]||{})[n]||Ki[a]}function Et(e,t){var a="".concat(Tn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=X(e.children),o=i.filter(function(B){return B.getAttribute(je)===t})[0],s=z.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(Ln),c=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&m!=="none"&&m!==""){var b=s.getPropertyValue("content"),p=Ji(l,c),S=Vi(b),y=u[0].startsWith("FontAwesome"),A=Xi(s),d=Ze(p,S),h=d;if(y){var w=oi(S);w.iconName&&w.prefix&&(d=w.iconName,p=w.prefix)}if(d&&!A&&(!o||o.getAttribute(Ke)!==p||o.getAttribute(Ve)!==h)){e.setAttribute(a,h),o&&e.removeChild(o);var P=zi(),O=P.extra;O.attributes[je]=t,Re(d,p).then(function(B){var J=et(f(f({},P),{},{icons:{main:B,mask:Ea()},prefix:p,iconName:h,extra:O,watchable:!0})),ye=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=J.map(function(La){return re(La)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function qi(e){return Promise.all([Et(e,"::before"),Et(e,"::after")])}function Qi(e){return e.parentNode!==document.head&&!~Mn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(je)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Zi=function(t){return!!t&&ua.some(function(a){return t.includes(a)})},eo=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=se(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Zi(o)){var s=ua.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=se(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=se(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=eo(u.selectorText),m=se(c),b;try{for(m.s();!(b=m.n()).done;){var p=b.value;r.add(p)}}catch(y){m.e(y)}finally{m.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){n.e(y)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(y,A){var d=X(a).filter(Qi).map(qi),h=tt.begin("searchPseudoElements");Na(),Promise.all(d).then(function(){h(),Ue(),y()}).catch(function(){h(),Ue(),A()})})}}var to={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ft,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?x:r;v.searchPseudoElements&&Ft(n)}}},Ct=!1,ao={mixout:function(){return{dom:{unwatch:function(){Na(),Ct=!0}}}},hooks:function(){return{bootstrap:function(){At(ze("mutationObserverCallbacks",{}))},noAuto:function(){Ni()},watch:function(a){var r=a.observeMutationsRoot;Ct?Ue():At(ze("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_t=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},ro={mixout:function(){return{parse:{transform:function(a){return _t(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=_t(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},b={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:b};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),p.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function no(e){return e.tag==="g"?e.children:[e]}var io={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?pe(n.split(" ").map(function(o){return o.trim()})):Ea();return i.prefix||(i.prefix=D()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,m=o.width,b=o.icon,p=Jn({transform:l,containerWidth:m,iconWidth:u}),S={tag:"rect",attributes:f(f({},Oe),{},{fill:"white"})},y=c.children?{children:c.children.map(jt)}:{},A={tag:"g",attributes:f({},p.inner),children:[jt(f({tag:c.tag,attributes:f(f({},c.attributes),p.path)},y))]},d={tag:"g",attributes:f({},p.outer),children:[A]},h="mask-".concat(s||dt()),w="clip-".concat(s||dt()),P={tag:"mask",attributes:f(f({},Oe),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,d]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:no(b)},P]};return r.push(O,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(h,")")},Oe)}),{children:r,attributes:n}}}},oo={provides:function(t){var a=!1;z.matchMedia&&(a=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},so={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},lo=[Zn,Bi,Yi,Hi,Gi,to,ao,ro,io,oo,so];hi(lo,{mixoutsTo:E});E.noAuto;E.config;var fo=E.library;E.dom;var Ye=E.parse;E.findIconDefinition;E.toHtml;var uo=E.icon;E.layer;E.text;E.counter;function I(e,t,a){return(t=ho(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Nt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Nt(Object(a),!0).forEach(function(r){I(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Nt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function co(e,t){if(e==null)return{};var a,r,n=mo(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function mo(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function vo(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ho(e){var t=vo(e,"string");return typeof t=="symbol"?t:t+""}function me(e){"@babel/helpers - typeof";return me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(e)}function Ee(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function go(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(I(I(I(I(I(I(I(I(I(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),I(I(I(I(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(r){return a[r]?r:null}).filter(function(r){return r})}var po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ma={exports:{}};(function(e){(function(t){var a=function(d,h,w){if(!u(h)||m(h)||b(h)||p(h)||l(h))return h;var P,O=0,B=0;if(c(h))for(P=[],B=h.length;O<B;O++)P.push(a(d,h[O],w));else{P={};for(var J in h)Object.prototype.hasOwnProperty.call(h,J)&&(P[d(J,w)]=a(d,h[J],w))}return P},r=function(d,h){h=h||{};var w=h.separator||"_",P=h.split||/(?=[A-Z])/;return d.split(P).join(w)},n=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(h,w){return w?w.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var h=n(d);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(d,h){return r(d,h).toLowerCase()},s=Object.prototype.toString,l=function(d){return typeof d=="function"},u=function(d){return d===Object(d)},c=function(d){return s.call(d)=="[object Array]"},m=function(d){return s.call(d)=="[object Date]"},b=function(d){return s.call(d)=="[object RegExp]"},p=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},y=function(d,h){var w=h&&"process"in h?h.process:h;return typeof w!="function"?d:function(P,O){return w(P,d,O)}},A={camelize:n,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,h){return a(y(n,h),d)},decamelizeKeys:function(d,h){return a(y(o,h),d,h)},pascalizeKeys:function(d,h){return a(y(i,h),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(po)})(Ma);var bo=Ma.exports,yo=["class","style"];function xo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=bo.camelize(a.slice(0,r)),i=a.slice(r+1).trim();return t[n]=i,t},{})}function wo(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return za(l)}),n=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=wo(c);break;case"style":l.style=xo(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=co(a,yo);return Ua(e.tag,N(N(N({},t),{},{class:n.class,style:N(N({},n.style),o)},n.attrs),s),r)}var Da=!1;try{Da=!0}catch{}function So(){if(!Da&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tt(e){if(e&&me(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ye.icon)return Ye.icon(e);if(e===null)return null;if(me(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ao=Ra({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var r=a.attrs,n=Y(function(){return Tt(t.icon)}),i=Y(function(){return Ee("classes",go(t))}),o=Y(function(){return Ee("transform",typeof t.transform=="string"?Ye.transform(t.transform):t.transform)}),s=Y(function(){return Ee("mask",Tt(t.mask))}),l=Y(function(){var c=N(N(N(N({},i.value),o.value),s.value),{},{symbol:t.symbol,maskId:t.maskId});return c.title=t.title,c.titleId=t.titleId,uo(n.value,c)});Wa(l,function(c){if(!c)return So("Could not find one or more icon(s)",n.value,s.value)},{immediate:!0});var u=Y(function(){return l.value?za(l.value.abstract[0],{},r):null});return function(){return u.value}}});var ko={prefix:"fab",iconName:"discord",icon:[576,512,[],"f392","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]},No={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},To={prefix:"fab",iconName:"steam",icon:[512,512,[],"f1b6","M504 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5l0 1.2-59.2 85.7c-15.5-.9-30.7 3.4-43.5 12.1L8 236.1C18.2 108.4 125.1 8 255.6 8 392.8 8 504 119 504 256zM163.7 384.3l-30.5-12.6c5.6 11.6 15.3 20.8 27.2 25.8 26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3S214 305.6 201 300.2c-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zM337.5 129.8a62.3 62.3 0 1 1 0 124.6 62.3 62.3 0 1 1 0-124.6zm.1 109a46.8 46.8 0 1 0 0-93.6 46.8 46.8 0 1 0 0 93.6z"]},$o={prefix:"fab",iconName:"telegram",icon:[512,512,[62462,"telegram-plane"],"f2c6","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"]};var Mo={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]};const Po={class:"discord-panel"},Io={class:"banner"},Oo={class:"user-info"},Eo={class:"avatar"},Fo={class:"discordClaim"},Co={__name:"discord",setup(e){return fo.add(ko),(t,a)=>(Ya(),Ba("div",Po,[j("div",Io,[ne(xe)]),j("div",null,[j("div",Oo,[j("div",Eo,[ne(xe,{"aspect-ratio":"1/1",cover:"",src:"https://cdn.discordapp.com/avatars/428170232029511680/f0f0f6f9530f33ea8d8786e5d1a1244b?size=512",style:{"border-radius":"50%"},width:"60"}),ne(xe,{"aspect-ratio":"1/1",cover:"",src:"https://cdn.discordapp.com/avatar-decoration-presets/a_c3cffc19e9784f7d0b005eecdf1b566e.png?size=160&passthrough=true",width:"60"})]),a[1]||(a[1]=j("video",{class:"nameplate",autoplay:"",loop:"",muted:"",playsinline:""},[j("source",{src:"https://cdn.discordapp.com/assets/collectibles/nameplates/nameplates/cat_beans/asset.webm",type:"video/webm"})],-1)),a[2]||(a[2]=j("strong",null,"pieta",-1)),a[3]||(a[3]=j("p",null,"pieta_madz",-1)),j("div",Fo,[ne(Ga(Ao),{icon:["fab","fa-discord"]}),a[0]||(a[0]=Ha(" Discord ",-1))])])])]))}},zo=Ka(Co,[["__scopeId","data-v-2010e9dc"]]);export{zo as D,Ao as F,No as a,$o as b,To as c,Mo as d,ko as f,fo as l};
