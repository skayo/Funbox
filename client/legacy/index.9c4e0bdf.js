import{_ as t,a as n,b as e,c,i as r,s as i,d as a,S as o,e as u,f as s,t as l,g as f,h,j as d,k as p,l as v,m,n as g,o as k,p as y,q as $,r as b,v as w,w as x,x as E,y as D,z as I,H as R,A as T,B as A,C as S,D as V,E as z,F as P,G as N,I as M,J as O,K as C,L,M as j,N as _,O as B,P as H,Q as U,R as F,T as G,V as J,W as K,X as q}from"./client.28b19721.js";function Q(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function W(t,n,e){var c=t.slice();return c[14]=n[e],c}function X(t,n,e){var c=t.slice();return c[11]=n[e],c[13]=e,c}function Y(t){for(var n,e,c,r,i,a,o,b,w,x,E,D,I,R,T,A=t[3]&&Z(t),S=t[2],V=[],z=0;z<S.length;z+=1)V[z]=at(X(t,S,z));return{c:function(){n=u("a"),c=s(),r=u("div"),i=u("div"),a=u("button"),o=s(),b=u("div"),w=u("h2"),x=l(t[0]),E=l(" - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),A&&A.c(),D=s(),I=u("div"),R=u("div");for(var e=0;e<V.length;e+=1)V[e].c();this.h()},l:function(e){n=f(e,"A",{"uk-toggle":!0,"uk-tooltip":!0,"uk-icon":!0,href:!0,class:!0,title:!0}),h(n).forEach(d),c=p(e),r=f(e,"DIV",{"uk-modal":!0,id:!0});var u=h(r);i=f(u,"DIV",{class:!0});var s=h(i);a=f(s,"BUTTON",{class:!0,type:!0,"uk-close":!0,"uk-tooltip":!0,title:!0}),h(a).forEach(d),o=p(s),b=f(s,"DIV",{class:!0});var l=h(b);w=f(l,"H2",{class:!0});var m=h(w);x=v(m,t[0]),E=v(m," - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),A&&A.l(m),m.forEach(d),l.forEach(d),D=p(s),I=f(s,"DIV",{class:!0,"uk-overflow-auto":!0});var g=h(I);R=f(g,"DIV",{class:!0});for(var k=h(R),y=0;y<V.length;y+=1)V[y].l(k);k.forEach(d),g.forEach(d),s.forEach(d),u.forEach(d),this.h()},h:function(){m(n,"uk-toggle",e="#"+t[4]+"-modal"),m(n,"uk-tooltip",""),m(n,"uk-icon","cog"),m(n,"href",""),m(n,"class","uk-icon-link uk-margin-small-right"),m(n,"title","Settings"),m(a,"class","uk-modal-close-default"),m(a,"type","button"),m(a,"uk-close",""),m(a,"uk-tooltip","pos: left"),m(a,"title","Close"),m(w,"class","uk-modal-title uk-text-middle"),m(b,"class","uk-modal-header"),m(R,"class","uk-form-stacked uk-text-left"),m(I,"class","uk-modal-body"),m(I,"uk-overflow-auto",""),m(i,"class","uk-modal-dialog uk-margin-auto-vertical"),m(r,"uk-modal",""),m(r,"id",T=t[4]+"-modal")},m:function(t,e){g(t,n,e),g(t,c,e),g(t,r,e),k(r,i),k(i,a),k(i,o),k(i,b),k(b,w),k(w,x),k(w,E),A&&A.m(w,null),k(i,D),k(i,I),k(I,R);for(var u=0;u<V.length;u+=1)V[u].m(R,null)},p:function(t,c){if(16&c&&e!==(e="#"+t[4]+"-modal")&&m(n,"uk-toggle",e),1&c&&y(x,t[0]),t[3]?A?A.p(t,c):((A=Z(t)).c(),A.m(w,null)):A&&(A.d(1),A=null),4&c){var i;for(S=t[2],i=0;i<S.length;i+=1){var a=X(t,S,i);V[i]?V[i].p(a,c):(V[i]=at(a),V[i].c(),V[i].m(R,null))}for(;i<V.length;i+=1)V[i].d(1);V.length=S.length}16&c&&T!==(T=t[4]+"-modal")&&m(r,"id",T)},d:function(t){t&&d(n),t&&d(c),t&&d(r),A&&A.d(),$(V,t)}}}function Z(t){var n;return{c:function(){n=u("a"),this.h()},l:function(t){n=f(t,"A",{href:!0,target:!0,"uk-icon":!0,"uk-tooltip":!0,title:!0}),h(n).forEach(d),this.h()},h:function(){m(n,"href",t[3]),m(n,"target","_blank"),m(n,"uk-icon","info"),m(n,"uk-tooltip","pos: right"),m(n,"title","More Info")},m:function(t,e){g(t,n,e)},p:function(t,e){8&e&&m(n,"href",t[3])},d:function(t){t&&d(n)}}}function tt(t){var n,e=t[11].name+"";return{c:function(){n=u("label"),this.h()},l:function(t){n=f(t,"LABEL",{class:!0}),h(n).forEach(d),this.h()},h:function(){m(n,"class","uk-form-label")},m:function(t,c){g(t,n,c),n.innerHTML=e},p:function(t,c){4&c&&e!==(e=t[11].name+"")&&(n.innerHTML=e)},d:function(t){t&&d(n)}}}function nt(t){var n,e,c,r,i,a,o,l,v=t[11].name+"";function y(){for(var n,e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(n=t)[10].apply(n,[t[11]].concat(c))}return{c:function(){n=u("div"),e=u("label"),c=u("input"),i=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var r=h(n);e=f(r,"LABEL",{});var a=h(e);c=f(a,"INPUT",{class:!0,type:!0,checked:!0}),i=p(a),a.forEach(d),r.forEach(d),this.h()},h:function(){m(c,"class","uk-checkbox"),m(c,"type","checkbox"),c.checked=r=I(t[11].bind),a=new R(null),m(n,"class","uk-form-controls")},m:function(t,r){g(t,n,r),k(n,e),k(e,c),k(e,i),a.m(v,e),o||(l=T(c,"change",y),o=!0)},p:function(n,e){t=n,4&e&&r!==(r=I(t[11].bind))&&(c.checked=r),4&e&&v!==(v=t[11].name+"")&&a.p(v)},d:function(t){t&&d(n),o=!1,l()}}}function et(t){for(var n,e,c,r,i=t[11].options,a=[],o=0;o<i.length;o+=1)a[o]=it(W(t,i,o));function s(){for(var n,e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(n=t)[9].apply(n,[t[11]].concat(c))}return{c:function(){n=u("div"),e=u("select");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=h(n);e=f(c,"SELECT",{class:!0});for(var r=h(e),i=0;i<a.length;i+=1)a[i].l(r);r.forEach(d),c.forEach(d),this.h()},h:function(){m(e,"class","uk-select"),m(n,"class","uk-form-controls")},m:function(t,i){g(t,n,i),k(n,e);for(var o=0;o<a.length;o+=1)a[o].m(e,null);c||(r=T(e,"change",s),c=!0)},p:function(n,c){if(t=n,4&c){var r;for(i=t[11].options,r=0;r<i.length;r+=1){var o=W(t,i,r);a[r]?a[r].p(o,c):(a[r]=it(o),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=i.length}},d:function(t){t&&d(n),$(a,t),c=!1,r()}}}function ct(t){var n,e,c,r,i,a,o,s;function l(){for(var n,e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(n=t)[8].apply(n,[t[11]].concat(c))}return{c:function(){n=u("div"),e=u("input"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=h(n);e=f(c,"INPUT",{value:!0,type:!0,class:!0,min:!0,max:!0,placeholder:!0}),c.forEach(d),this.h()},h:function(){e.value=c=I(t[11].bind),m(e,"type","number"),m(e,"class","uk-input"),m(e,"min",r=t[11].min),m(e,"max",i=t[11].max),m(e,"placeholder",a=t[11].placeholder),m(n,"class","uk-form-controls")},m:function(t,c){g(t,n,c),k(n,e),o||(s=T(e,"input",l),o=!0)},p:function(n,o){t=n,4&o&&c!==(c=I(t[11].bind))&&(e.value=c),4&o&&r!==(r=t[11].min)&&m(e,"min",r),4&o&&i!==(i=t[11].max)&&m(e,"max",i),4&o&&a!==(a=t[11].placeholder)&&m(e,"placeholder",a)},d:function(t){t&&d(n),o=!1,s()}}}function rt(t){var n,e,c,r,i,a;function o(){for(var n,e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(n=t)[7].apply(n,[t[11]].concat(c))}return{c:function(){n=u("div"),e=u("input"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=h(n);e=f(c,"INPUT",{value:!0,type:!0,class:!0,placeholder:!0}),c.forEach(d),this.h()},h:function(){e.value=c=I(t[11].bind),m(e,"type","text"),m(e,"class","uk-input"),m(e,"placeholder",r=t[11].placeholder),m(n,"class","uk-form-controls")},m:function(t,c){g(t,n,c),k(n,e),i||(a=T(e,"input",o),i=!0)},p:function(n,i){t=n,4&i&&c!==(c=I(t[11].bind))&&e.value!==c&&(e.value=c),4&i&&r!==(r=t[11].placeholder)&&m(e,"placeholder",r)},d:function(t){t&&d(n),i=!1,a()}}}function it(t){var n,e,c,r,i=t[14].name+"";return{c:function(){n=u("option"),e=l(i),this.h()},l:function(t){n=f(t,"OPTION",{value:!0,selected:!0});var c=h(n);e=v(c,i),c.forEach(d),this.h()},h:function(){n.__value=c=t[14].value,n.value=n.__value,n.selected=r=t[14].value==I(t[11].bind)},m:function(t,c){g(t,n,c),k(n,e)},p:function(t,a){4&a&&i!==(i=t[14].name+"")&&y(e,i),4&a&&c!==(c=t[14].value)&&(n.__value=c,n.value=n.__value),4&a&&r!==(r=t[14].value==I(t[11].bind))&&(n.selected=r)},d:function(t){t&&d(n)}}}function at(t){var n,e,c,r="checkbox"!==t[11].type&&tt(t);function i(t,n){return"text"===t[11].type?rt:"number"===t[11].type?ct:"select"===t[11].type?et:"checkbox"===t[11].type?nt:void 0}var a=i(t),o=a&&a(t);return{c:function(){n=u("div"),r&&r.c(),e=s(),o&&o.c(),c=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=h(n);r&&r.l(i),e=p(i),o&&o.l(i),c=p(i),i.forEach(d),this.h()},h:function(){m(n,"class","uk-margin")},m:function(t,i){g(t,n,i),r&&r.m(n,null),k(n,e),o&&o.m(n,null),k(n,c)},p:function(t,u){"checkbox"!==t[11].type?r?r.p(t,u):((r=tt(t)).c(),r.m(n,e)):r&&(r.d(1),r=null),a===(a=i(t))&&o?o.p(t,u):(o&&o.d(1),(o=a&&a(t))&&(o.c(),o.m(n,c)))},d:function(t){t&&d(n),r&&r.d(),o&&o.d()}}}function ot(t){var n,e,c,r,i,a,o,$,I,R,T,A,S,V,z,P=t[2]&&Y(t),N=t[6].default,M=b(N,t,t[5],null);return{c:function(){n=u("div"),e=u("div"),c=u("div"),r=u("div"),i=u("div"),a=u("h4"),o=l(t[0]),$=s(),I=u("div"),P&&P.c(),R=s(),T=u("a"),A=s(),S=u("div"),M&&M.c(),this.h()},l:function(u){n=f(u,"DIV",{id:!0,class:!0});var s=h(n);e=f(s,"DIV",{class:!0});var l=h(e);c=f(l,"DIV",{class:!0});var m=h(c);r=f(m,"DIV",{class:!0});var g=h(r);i=f(g,"DIV",{class:!0});var k=h(i);a=f(k,"H4",{});var y=h(a);o=v(y,t[0]),y.forEach(d),k.forEach(d),$=p(g),I=f(g,"DIV",{class:!0});var b=h(I);P&&P.l(b),R=p(b),T=f(b,"A",{href:!0,class:!0,title:!0,"uk-tooltip":!0,"uk-icon":!0}),h(T).forEach(d),b.forEach(d),g.forEach(d),m.forEach(d),A=p(l),S=f(l,"DIV",{class:!0});var w=h(S);M&&M.l(w),w.forEach(d),l.forEach(d),s.forEach(d),this.h()},h:function(){m(i,"class","uk-width-expand"),m(T,"href",""),m(T,"class","uk-sortable-handle uk-icon-link uk-visible@m"),m(T,"title","Move"),m(T,"uk-tooltip",""),m(T,"uk-icon","move"),m(I,"class","uk-width-auto uk-text-right"),m(r,"class","uk-grid uk-grid-medium"),m(c,"class","uk-card-header"),m(S,"class","uk-card-body"),m(e,"class","uk-card uk-card-default uk-card-small uk-card-hover"),m(n,"id",t[4]),m(n,"class",V="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l")},m:function(t,u){g(t,n,u),k(n,e),k(e,c),k(c,r),k(r,i),k(i,a),k(a,o),k(r,$),k(r,I),P&&P.m(I,null),k(I,R),k(I,T),k(e,A),k(e,S),M&&M.m(S,null),z=!0},p:function(t,e){var c=w(e,1)[0];(!z||1&c)&&y(o,t[0]),t[2]?P?P.p(t,c):((P=Y(t)).c(),P.m(I,R)):P&&(P.d(1),P=null),M&&M.p&&32&c&&x(M,N,t,t[5],c,null,null),(!z||16&c)&&m(n,"id",t[4]),(!z||2&c&&V!==(V="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l"))&&m(n,"class",V)},i:function(t){z||(E(M,t),z=!0)},o:function(t){D(M,t),z=!1},d:function(t){t&&d(n),P&&P.d(),M&&M.d(t)}}}function ut(t,n,e){var c,r=n.$$slots,i=void 0===r?{}:r,a=n.$$scope,o=n.title,u=void 0===o?"":o,s=n.size,l=void 0===s?"large":s,f=n.settings,h=void 0!==f&&f,d=n.settingsInfo,p=void 0!==d&&d;return t.$$set=function(t){"title"in t&&e(0,u=t.title),"size"in t&&e(1,l=t.size),"settings"in t&&e(2,h=t.settings),"settingsInfo"in t&&e(3,p=t.settingsInfo),"$$scope"in t&&e(5,a=t.$$scope)},t.$$.update=function(){1&t.$$.dirty&&e(4,c=u.toLowerCase().replace(/[^\s\w\-]+/g,"").replace(/\s+/g,"-"))},[u,l,h,p,c,a,i,function(t,n){return t.bind.set(n.target.value)},function(t,n){return t.bind.set(parseInt(n.target.value))},function(t,n){return t.bind.set(n.target.options[n.target.selectedIndex].value)},function(t,n){return t.bind.set(n.target.checked)}]}var st=function(n){t(u,o);var e=Q(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,ut,ot,i,{title:0,size:1,settings:2,settingsInfo:3}),n}return u}();function lt(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function ft(t){var n,e,c,r;return{c:function(){n=u("div"),this.h()},l:function(t){n=f(t,"DIV",{id:!0,class:!0}),h(n).forEach(d),this.h()},h:function(){m(n,"id","coin"),m(n,"class",e=P(t[0])+" svelte-mzj0qe")},m:function(e,i){g(e,n,i),t[4](n),c||(r=T(n,"click",t[3]),c=!0)},p:function(t,c){1&c&&e!==(e=P(t[0])+" svelte-mzj0qe")&&m(n,"class",e)},d:function(e){e&&d(n),t[4](null),c=!1,r()}}}function ht(t){var n,e=t[1]&&ft(t);return{c:function(){e&&e.c(),n=N()},l:function(t){e&&e.l(t),n=N()},m:function(t,c){e&&e.m(t,c),g(t,n,c)},p:function(t,c){t[1]?e?e.p(t,c):((e=ft(t)).c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d:function(t){e&&e.d(t),t&&d(n)}}}function dt(t){var n,e;return n=new st({props:{title:"Coin Flip",size:"small",$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c:function(){A(n.$$.fragment)},l:function(t){S(n.$$.fragment,t)},m:function(t,c){V(n,t,c),e=!0},p:function(t,e){var c=w(e,1)[0],r={};39&c&&(r.$$scope={dirty:c,ctx:t}),n.$set(r)},i:function(t){e||(E(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}function pt(t,n,e){var c,r="",i=!0;function a(){return(a=M(O.mark((function t(){var n;return O.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(0,r=""),e(1,i=!1),t.next=4,C();case 4:e(1,i=!0),n=Math.random(),e(0,r=n<=.5?"heads":"tails");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[r,i,c,function(){return a.apply(this,arguments)},function(t){L[t?"unshift":"push"]((function(){e(2,c=t)}))}]}var vt=function(n){t(u,o);var e=lt(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,pt,dt,i,{}),n}return u}(),mt={Ja:"",Gut:"",Okay:"","Deine Mama":"LittleFreakBe","Schöne Schuhe hast du":"dingusbread44","normal ist das nicht":"Klirrkopf","warum ist meine TL voll davon":"underthepancake","Das muss ich mir jetzt echt nicht geben":"dingusbread44","Willst du mich eigentlich komplett verarschen":"dingusbread44","kmdd.de":"1kescher","Pisse aus meinem Arsch":"Klirrkopf","Das ist mir jetzt bisschen unangenehm":"dingusbread44","Lustige Katzen 2020 #24":"fischtisch","schon okay.":"dingusbread44","Oh Junge":"dingusbread44","eigentlich heiße ich Peter Müller":"dingusbread44","das gabs mal im Happy meal":"fischtisch","ich habe gepupst":"MeInAnUsBrEnNt_","achso, nein":"fischtisch","was erlaubst du dir eigentlich":"fischtisch","wir vermuten es schon seit Jahren":"fischtisch","Bist du nicht etwas zu alt dafür":"OrNotTobey","das ist ein zeichen patrick":"fischtisch","nimmst du mich überhaupt ernst":"fischtisch","hä":"fischtisch","Ich bin ein großer Fan von dir":"dingusbread44","Ich werde bald schwanger":"dingusbread44","achso ich dachte die drehen ein tik tok":"fischtisch","hättest du airpods wär dir das nicht passiert":"fischtisch","jetzt hab ich hunger":"fischtisch","wenn du verstehst was ich meine":"fischtisch","Musst du nicht lernen?":"regenleben","Gibt es das auch in besserer Qualität":"OrNotTobey","Moment, ich muss erst Skayo's Funbox fragen":"OrNotTobey","Das wäre dir mit Erdnuss nicht passiert":"dingusbread44","Ich blocke Sie jetzt!":"1kescher","hab gehört das is recht ungesund":"Skayo","Das auch besser so, du":"dingusbread44","da hilft nur noch onlyfans":"1kescher","Das hast du letztes Mal auch gesagt":"Skayo","Interessant, danke für die Info!":"Skayo","Dann fick ihn doch":"dingusbread44","hast du mich gerade wichser genannt":"dingusbread44","Ups, besser nochmal drehen!":"OrNotTobey","Deine Ausreden kannst du dir sonst wohin stecken":"dingusbread44","Happy Birthday!":"astralkoerper","tut mir leid schatz":"MoodChip"};function gt(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function kt(t,n,e){var c=t.slice();return c[12]=n[e],c}function yt(t){var n,e,c,r,i=t[12]+"";return{c:function(){n=u("div"),e=u("h1"),c=l(i),r=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=h(n);e=f(a,"H1",{class:!0});var o=h(e);c=v(o,i),o.forEach(d),r=p(a),a.forEach(d),this.h()},h:function(){m(e,"class","slot-machine-item-title svelte-kaby32"),m(n,"class","slot-machine-item svelte-kaby32")},m:function(t,i){g(t,n,i),k(n,e),k(e,c),k(n,r)},p:function(t,n){2&n&&i!==(i=t[12]+"")&&y(c,i)},d:function(t){t&&d(n)}}}function $t(t){var n,e,c,r,i,a,o,y,$,b,w,x=""!==mt[t[4]]&&bt(t);return{c:function(){n=u("div"),e=u("span"),c=s(),r=u("div"),i=u("input"),a=s(),x&&x.c(),o=s(),y=u("button"),$=l("Copy"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var u=h(n);e=f(u,"SPAN",{class:!0,"data-uk-icon":!0,"data-uk-tooltip":!0,title:!0}),h(e).forEach(d),u.forEach(d),c=p(t),r=f(t,"DIV",{class:!0});var s=h(r);i=f(s,"INPUT",{class:!0,type:!0,readonly:!0,value:!0}),a=p(s),x&&x.l(s),s.forEach(d),o=p(t),y=f(t,"BUTTON",{class:!0});var l=h(y);$=v(l,"Copy"),l.forEach(d),this.h()},h:function(){m(e,"class","uk-width-auto"),m(e,"data-uk-icon","icon: arrow-down; ratio: 3"),m(e,"data-uk-tooltip","pos: left"),m(e,"title","Result"),m(n,"class","uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom"),m(i,"class","uk-input uk-form-large"),m(i,"type","text"),i.readOnly=!0,i.value=t[4],m(r,"class","uk-text-center"),m(y,"class","uk-button uk-button-primary uk-width-1-1 uk-margin-small-top")},m:function(u,s){g(u,n,s),k(n,e),g(u,c,s),g(u,r,s),k(r,i),t[8](i),k(r,a),x&&x.m(r,null),g(u,o,s),g(u,y,s),k(y,$),b||(w=[T(i,"click",(function(){j(Et(t[5]))&&Et(t[5]).apply(this,arguments)})),T(y,"click",(function(){j(t[0](t[4]))&&t[0](t[4]).apply(this,arguments)}))],b=!0)},p:function(n,e){t=n,16&e&&i.value!==t[4]&&(i.value=t[4]),""!==mt[t[4]]?x?x.p(t,e):((x=bt(t)).c(),x.m(r,null)):x&&(x.d(1),x=null)},d:function(e){e&&d(n),e&&d(c),e&&d(r),t[8](null),x&&x.d(),e&&d(o),e&&d(y),b=!1,_(w)}}}function bt(t){var n,e,c,r,i=mt[t[4]]+"";return{c:function(){n=u("a"),e=l("by @"),c=l(i),this.h()},l:function(t){n=f(t,"A",{class:!0,href:!0});var r=h(n);e=v(r,"by @"),c=v(r,i),r.forEach(d),this.h()},h:function(){m(n,"class","uk-text-meta"),m(n,"href",r="https://twitter.com/"+mt[t[4]])},m:function(t,r){g(t,n,r),k(n,e),k(n,c)},p:function(t,e){16&e&&i!==(i=mt[t[4]]+"")&&y(c,i),16&e&&r!==(r="https://twitter.com/"+mt[t[4]])&&m(n,"href",r)},d:function(t){t&&d(n)}}}function wt(t){for(var n,e,c,r,i,a,o=t[1],l=[],v=0;v<o.length;v+=1)l[v]=yt(kt(t,o,v));var y=!t[3]&&""!==t[4]&&$t(t);return{c:function(){n=u("div"),e=u("div");for(var t=0;t<l.length;t+=1)l[t].c();c=s(),y&&y.c(),r=N(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=h(n);e=f(i,"DIV",{class:!0});for(var a=h(e),o=0;o<l.length;o+=1)l[o].l(a);a.forEach(d),i.forEach(d),c=p(t),y&&y.l(t),r=N(),this.h()},h:function(){m(e,"class","slot-machine-container svelte-kaby32"),m(n,"class","slot-machine svelte-kaby32")},m:function(o,u){g(o,n,u),k(n,e);for(var s=0;s<l.length;s+=1)l[s].m(e,null);t[7](e),g(o,c,u),y&&y.m(o,u),g(o,r,u),i||(a=T(n,"click",t[6]),i=!0)},p:function(t,n){if(2&n){var c;for(o=t[1],c=0;c<o.length;c+=1){var i=kt(t,o,c);l[c]?l[c].p(i,n):(l[c]=yt(i),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}t[3]||""===t[4]?y&&(y.d(1),y=null):y?y.p(t,n):((y=$t(t)).c(),y.m(r.parentNode,r))},d:function(e){e&&d(n),$(l,e),t[7](null),e&&d(c),y&&y.d(e),e&&d(r),i=!1,a()}}}function xt(t){var n,e;return n=new st({props:{title:"Answer Chooser (German)",size:"large",$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c:function(){A(n.$$.fragment)},l:function(t){S(n.$$.fragment,t)},m:function(t,c){V(n,t,c),e=!0},p:function(t,e){var c=w(e,1)[0],r={};32831&c&&(r.$$scope={dirty:c,ctx:t}),n.$set(r)},i:function(t){e||(E(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}function Et(t){t.select(),t.setSelectionRange(0,t.value.length)}function Dt(t,n,e){var c,r,i=["Click here to spin!"],a=!0,o="",u=0,s=n.copyText;function l(){e(1,i=[]);for(var t=0;t<=5;t++)e(1,i=[].concat(B(i),B(Object.keys(mt))))}function f(){var t=c.children,n=0;do{n=Math.floor(Math.random()*t.length)}while((n>u?n-u:u-n)<5);return u=n,t[n]}function h(){return(h=M(O.mark((function t(){var n;return O.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a&&(e(3,a=!1),l()),e(4,o=""),t.next=4,C();case 4:n=f(),e(2,c.style.top=-n.offsetTop+"px",c),setTimeout((function(){e(4,o=n.innerText.trim())}),1100);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return t.$$set=function(t){"copyText"in t&&e(0,s=t.copyText)},[s,i,c,a,o,r,function(){return h.apply(this,arguments)},function(t){L[t?"unshift":"push"]((function(){e(2,c=t)}))},function(t){L[t?"unshift":"push"]((function(){e(5,r=t)}))}]}var It=function(n){t(u,o);var e=gt(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,Dt,xt,i,{copyText:0}),n}return u}();function Rt(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function Tt(t){var n;return{c:function(){n=u("textarea"),this.h()},l:function(t){n=f(t,"TEXTAREA",{readonly:!0,style:!0}),h(n).forEach(d),this.h()},h:function(){n.readOnly="readonly",U(n,"position","absolute"),U(n,"left","-9999px")},m:function(e,c){g(e,n,c),t[2](n)},p:F,i:F,o:F,d:function(e){e&&d(n),t[2](null)}}}function At(t,n,e){var c;return[c,function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);e(0,c.value=t,c);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);c.select();var r=!1;try{r=document.execCommand("copy")}catch(t){}return n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),r?Promise.resolve():Promise.reject()},function(t){L[t?"unshift":"push"]((function(){e(0,c=t)}))}]}var St=function(n){t(u,o);var e=Rt(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,At,Tt,i,{copyText:1}),n}return H(u,[{key:"copyText",get:function(){return this.$$.ctx[1]}}]),u}();function Vt(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function zt(t,n,e){var c=n.showAlert,r=void 0===c?function(t){return alert(t)}:c;return G(M(O.mark((function t(){var n;return O.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,import("./uikit.056590c3.js");case 2:n=t.sent.default,e(0,r=n.modal.alert);case 4:case"end":return t.stop()}}),t)})))),t.$$set=function(t){"showAlert"in t&&e(0,r=t.showAlert)},[r]}var Pt=function(n){t(u,o);var e=Vt(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,zt,null,i,{showAlert:0}),n}return u}();function Nt(t){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=n(t);if(c){var a=n(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return e(this,r)}}function Mt(t){var n,e,c,r,i,a,o,l,v,y,$,b;function x(n){t[2].call(null,n)}c=new It({props:{copyText:t[0]}}),i=new vt({});var I={};function R(n){t[3].call(null,n)}void 0!==t[0]&&(I.copyText=t[0]),o=new St({props:I}),L.push((function(){return K(o,"copyText",x)}));var T={};return void 0!==t[1]&&(T.showAlert=t[1]),y=new Pt({props:T}),L.push((function(){return K(y,"showAlert",R)})),{c:function(){n=s(),e=u("div"),A(c.$$.fragment),r=s(),A(i.$$.fragment),a=s(),A(o.$$.fragment),v=s(),A(y.$$.fragment),this.h()},l:function(t){J('[data-svelte="svelte-s63nxz"]',document.head).forEach(d),n=p(t),e=f(t,"DIV",{class:!0,"uk-grid":!0,"uk-sortable":!0});var u=h(e);S(c.$$.fragment,u),r=p(u),S(i.$$.fragment,u),u.forEach(d),a=p(t),S(o.$$.fragment,t),v=p(t),S(y.$$.fragment,t),this.h()},h:function(){document.title="Skayo's Funbox",m(e,"class","uk-grid-medium"),m(e,"uk-grid",""),m(e,"uk-sortable","handle: .uk-sortable-handle")},m:function(t,u){g(t,n,u),g(t,e,u),V(c,e,null),k(e,r),V(i,e,null),g(t,a,u),V(o,t,u),g(t,v,u),V(y,t,u),b=!0},p:function(t,n){var e=w(n,1)[0],r={};1&e&&(r.copyText=t[0]),c.$set(r);var i={};!l&&1&e&&(l=!0,i.copyText=t[0],q((function(){return l=!1}))),o.$set(i);var a={};!$&&2&e&&($=!0,a.showAlert=t[1],q((function(){return $=!1}))),y.$set(a)},i:function(t){b||(E(c.$$.fragment,t),E(i.$$.fragment,t),E(o.$$.fragment,t),E(y.$$.fragment,t),b=!0)},o:function(t){D(c.$$.fragment,t),D(i.$$.fragment,t),D(o.$$.fragment,t),D(y.$$.fragment,t),b=!1},d:function(t){t&&d(n),t&&d(e),z(c),z(i),t&&d(a),z(o,t),t&&d(v),z(y,t)}}}function Ot(t,n,e){var c,r;return[c,r,function(t){e(0,c=t)},function(t){e(1,r=t)}]}var Ct=function(n){t(u,o);var e=Nt(u);function u(t){var n;return c(this,u),n=e.call(this),r(a(n),t,Ot,Mt,i,{}),n}return u}();export default Ct;
