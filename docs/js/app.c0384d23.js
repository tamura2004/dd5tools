(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],f=0,v=[];f<c.length;f++)i=c[f],a[i]&&v.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dd5tools/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2b0a":function(t,e,n){},"41ad":function(t,e,n){"use strict";var r=n("ce80"),a=n.n(r);a.a},"7b18":function(t,e,n){"use strict";var r=n("a378"),a=n.n(r);a.a},"7faf":function(t,e,n){"use strict";var r=n("882c"),a=n.n(r);a.a},"882c":function(t,e,n){},8886:function(t,e,n){},a378:function(t,e,n){},c8b1:function(t,e,n){"use strict";var r=n("8886"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("ce5b"),o=n.n(a);n("da64");r["default"].use(o.a,{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-btn",{attrs:{flat:"",icon:""},on:{click:t.home}},[n("v-icon",[t._v("home")])],1),n("v-toolbar-title",{staticClass:"headline"},[n("span",[t._v("D&D5eツール")])]),n("v-spacer")],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-start":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("transition",{attrs:{name:"router",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)],1),n("v-footer")],1)},c=[],s=n("d4ec"),l=n("bee2"),u=n("99de"),f=n("7e84"),v=n("262e"),b=n("9ab4"),d=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MenuButton",{attrs:{to:"/monsters",label:"モンスター"}}),n("MenuButton",{attrs:{to:"/treasures",label:"財宝"}}),n("MenuButton",{attrs:{to:"/dungeons",label:"ダンジョン"}})],1)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:t.to}},[n("v-btn",{staticClass:"menu my-4",attrs:{round:"",dark:"",block:"",large:"",color:"primary"}},[t._v(t._s(t.label))])],1)},y=[],j=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(d["c"]);b["a"]([Object(d["b"])()],j.prototype,"to",void 0),b["a"]([Object(d["b"])()],j.prototype,"label",void 0),j=b["a"]([d["a"]],j);var O=j,_=O,x=(n("7b18"),n("2877")),g=n("6544"),w=n.n(g),k=n("8336"),V=Object(x["a"])(_,m,y,!1,null,null,null);V.options.__file="MenuButton.vue";var C=V.exports;w()(V,{VBtn:k["a"]});var M=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(d["c"]);M=b["a"]([Object(d["a"])({components:{MenuButton:C}})],M);var E=M,T=E,N=Object(x["a"])(T,p,h,!1,null,null,null);N.options.__file="Menu.vue";var $=N.exports,B=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(l["a"])(e,[{key:"home",value:function(){this.$router.push("/")}}]),e}(d["c"]);B=b["a"]([Object(d["a"])({components:{Menu:$}})],B);var L=B,S=L,F=(n("7faf"),n("7496")),A=n("a523"),D=n("549c"),P=n("0e8f"),H=n("553a"),I=n("132d"),J=n("a722"),q=n("9910"),z=n("71d9"),G=n("2a7f"),K=Object(x["a"])(S,i,c,!1,null,null,null);K.options.__file="App.vue";var Q=K.exports;w()(K,{VApp:F["a"],VBtn:k["a"],VContainer:A["a"],VContent:D["a"],VFlex:P["a"],VFooter:H["a"],VIcon:I["a"],VLayout:J["a"],VSpacer:q["a"],VToolbar:z["a"],VToolbarTitle:G["a"]});var R=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},t._l(t.floors,function(t,e){return n("FloorCard",{key:t.key,class:"card"+e,attrs:{row:e,floor:t}})}),1)},W=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-4 elevation-12"},[n("v-toolbar",{class:t.color,attrs:{dark:""}},[n("h1",{staticClass:"mb-0"},[t._v(t._s(t.floor.name))])]),n("v-card-text",[n("div",[t._v(t._s(t.floor.description))])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"blue darken-2",attrs:{dark:""},on:{click:t.inspect}},[t._v("調べる")]),n("v-btn",{staticClass:"blue darken-2",attrs:{dark:""},on:{click:t.go}},[t._v("進む")])],1)],1)},Y=[],Z=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments)),t.color="blue darken-2",t}return Object(v["a"])(e,t),Object(l["a"])(e,[{key:"go",value:function(){this.$store.commit("nextFloor",this.floor)}},{key:"inspect",value:function(){this.color="red"===this.color?"blue darken-2":"red"}},{key:"floor",get:function(){return this.$store.state.floors[this.row][0]}}]),e}(d["c"]);b["a"]([Object(d["b"])()],Z.prototype,"row",void 0),Z=b["a"]([d["a"]],Z);var tt=Z,et=tt,nt=(n("feb3"),n("b0af")),rt=n("99d9"),at=Object(x["a"])(et,X,Y,!1,null,null,null);at.options.__file="FloorCard.vue";var ot=at.exports;w()(at,{VBtn:k["a"],VCard:nt["a"],VCardActions:rt["a"],VCardText:rt["b"],VSpacer:q["a"],VToolbar:z["a"]});var it=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(l["a"])(e,[{key:"floors",get:function(){return this.$store.state.floors[0]}}]),e}(d["c"]);it=b["a"]([Object(d["a"])({components:{FloorCard:ot}})],it);var ct=it,st=ct,lt=(n("c8b1"),Object(x["a"])(st,U,W,!1,null,null,null));lt.options.__file="Dungeons.vue";var ut,ft=lt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",[n("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("ワンダリングモンスター")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("refresh")])],1)],1),n("v-list",{attrs:{"two-line":""}},t._l(6,function(t){return n("MonsterList",{key:t,attrs:{row:t}})}),1)],1)},bt=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-tile",{staticClass:"my-1 elevation-4"},[n("v-list-tile-avatar",[n("v-btn",{staticClass:"font-weight-bold",attrs:{fab:"",dark:"",small:"",color:t.color}},[t._v(t._s(t.difficulty))])],1),n("v-list-tile-content",[n("v-list-tile-title",[n("v-layout",[n("v-flex",{attrs:{xs12:""}},[t._v(t._s(t.monster.name))])],1)],1),n("v-list-tile-sub-title",[n("v-layout",[n("v-flex",{attrs:{xs3:""}},[t._v(t._s(t.monster.num)+" 体")]),n("v-flex",{attrs:{xs3:""}},[t._v("AC: "+t._s(t.monster.ac))]),n("v-flex",{attrs:{xs3:""}},[t._v("hp: "+t._s(t.monster.hp))]),n("v-flex",{attrs:{xs3:""}},[t._v("exp:"+t._s(t.monster.exp))])],1)],1)],1)],1)],1)},pt=[],ht=n("3835"),mt=function t(e,n,r){Object(s["a"])(this,t);var a=Object(ht["a"])(n,10),o=a[0],i=a[1],c=a[2],l=a[3],u=a[4],f=a[5],v=a[6],b=a[7],d=a[8],p=a[9];this.name=e,this.num=r,this.ac=o,this.hp=i,this.mv=c,this.ability=[l,u,f,v,b,d],this.exp=p};n("7514");(function(t){t[t["Easy"]=0]="Easy",t[t["Normal"]=1]="Normal",t[t["Hard"]=2]="Hard",t[t["Deadly"]=3]="Deadly"})(ut||(ut={}));var yt=[[25,50,75,100],[50,100,150,200],[75,150,225,400],[125,250,375,500],[250,500,750,1100],[300,600,900,1400],[350,750,1100,1700],[450,900,1400,2100],[550,1100,1600,2400],[600,1200,1900,2800]],jt=function(t,e){if(t<1||10<t)throw new Error("index out of range lelvel=".concat(t));if(e<0||3<e)throw new Error("index out of range diff=".concat(e));return yt[t-1][e]},Ot=[[5900,"10"],[5e3,"9"],[3900,"8"],[2900,"7"],[2300,"6"],[1800,"5"],[1100,"4"],[700,"3"],[450,"2"],[200,"1"],[100,"1/2"],[50,"1/4"],[25,"1/8"],[10,"0"]],_t=function(t){var e=Ot.find(function(e){return e[0]<=t});if(void 0===e)throw new Error("bad unit exp: ".concat(t));return e[0]},xt=[[1,1],[2,1.5],[6,2],[10,2.5],[16,3],[99,4]];function gt(t){var e=xt.find(function(e){return t<=e[0]});if(void 0===e)throw new Error("bad modify num: ".concat(t));return e[1]}function wt(t){var e=kt.filter(function(e){return e[1][9]===t});return e[Math.floor(Math.random()*e.length)]}var kt=[["アース・エレメンタル",[17,126,30,20,8,20,5,10,5,1800]],["アウェイクンド・シュラブ",[9,10,20,3,8,11,10,10,6,10]],["アウェイクンド・ツリー",[13,59,20,19,6,15,10,10,7,450]],["アウル",[11,1,5,3,13,8,2,12,7,10]],["アウルベア",[13,59,40,20,12,17,3,12,7,700]],["アダルト・レッド・ドラゴン",[19,256,40,27,10,25,16,13,21,18e3]],["アックスビーク",[11,19,50,14,12,12,2,10,5,50]],["アニメイテッド・アーマー",[18,33,25,14,11,13,1,3,1,200]],["アロサウルス",[13,51,60,19,13,17,2,12,5,450]],["アンキロサウルス",[15,68,30,19,11,15,2,12,5,700]],["イーグル",[12,3,10,6,15,10,2,14,7,10]],["イェティ",[12,51,40,18,13,16,8,12,7,700]],["ヴァルチャー",[10,5,10,7,10,13,2,12,4,10]],["ウィーゼル",[13,1,30,3,16,8,2,12,3,10]],["ウィンター・ウルフ",[13,75,50,18,13,14,7,12,8,700]],["ウォーグ",[13,26,50,16,13,13,7,11,8,100]],["ウォーター・エレメンタル",[14,114,30,18,14,18,5,10,8,1800]],["ウォーホース",[11,19,60,18,12,13,2,12,7,100]],["ウルフ",[13,11,40,12,15,12,3,12,6,50]],["エア・エレメンタル",[15,90,90,14,20,14,6,10,6,1800]],["エイプ",[12,19,30,16,14,14,6,12,7,100]],["エルク",[10,13,50,16,10,12,2,10,6,50]],["エレファント",[12,76,40,22,9,17,3,11,6,1100]],["オーガ",[11,59,40,19,8,16,5,7,7,450]],["オーカー・ジェリー",[8,45,10,15,6,14,2,6,1,450]],["オーク",[13,15,30,16,12,16,7,11,10,100]],["オクトパス",[12,3,5,4,15,11,3,10,4,10]],["ガーゴイル",[15,52,30,15,11,16,6,11,7,450]],["キマイラ",[14,114,30,19,11,19,3,14,10,2300]],["キャット",[12,2,40,3,15,10,3,12,7,10]],["キャメル",[9,15,50,16,8,14,2,8,5,25]],["キュクロプス",[14,138,30,22,11,20,8,6,10,2300]],["キラー・ホエール",[12,90,60,19,10,13,3,12,7,700]],["クィッパー",[13,1,40,2,16,9,1,7,2,10]],["グール",[12,22,30,13,15,10,7,10,6,200]],["クラブ",[11,2,20,2,11,10,1,8,2,10]],["グリック",[14,27,30,14,14,11,3,14,5,450]],["グリフィン",[12,59,80,18,15,16,2,13,8,450]],["クロコダイル",[12,19,30,15,10,13,2,10,5,100]],["ケンタウロス",[12,45,50,18,14,14,9,13,11,450]],["ゴースト",[11,45,40,7,13,10,10,12,17,1100]],["ゴート",[10,4,40,12,10,11,2,10,5,10]],["コッカトリス",[11,27,40,6,12,12,2,13,5,100]],["ゴブリン",[15,7,30,8,14,10,10,8,8,50]],["コボルド",[12,5,30,7,15,9,8,7,8,25]],["コンストリクター・スネーク",[12,13,30,15,14,12,1,10,3,50]],["サテュロス",[14,31,40,12,16,11,12,10,14,100]],["シー・ホース",[11,1,20,1,12,8,1,10,2,10]],["ジャイアント・アウル",[12,19,60,13,15,12,8,13,10,50]],["ジャイアント・イーグル",[13,26,80,16,17,13,8,14,10,200]],["ジャイアント・ヴァルチャー",[10,22,60,15,10,15,6,12,7,200]],["ジャイアント・ウィーゼル",[13,9,40,11,16,10,4,12,5,25]],["ジャイアント・ウルフ・スパイダー",[13,11,40,12,16,13,3,12,4,50]],["ジャイアント・エイプ",[12,157,40,23,14,18,7,12,7,2900]],["ジャイアント・エルク",[14,42,60,19,16,14,7,14,10,450]],["ジャイアント・オクトパス",[11,52,60,17,13,13,4,10,4,200]],["ジャイアント・クラブ",[15,13,30,13,15,11,1,9,3,25]],["ジャイアント・クロコダイル",[14,85,50,21,9,17,2,10,7,1800]],["ジャイアント・ゴート",[11,19,40,17,11,12,3,12,6,100]],["ジャイアント・コンストリクター・スネーク",[12,60,30,19,14,12,1,10,3,450]],["ジャイアント・シー・ホース",[13,16,40,12,15,11,2,12,5,100]],["ジャイアント・シャーク",[13,126,50,23,11,21,1,10,5,1800]],["ジャイアント・スコーピオン",[15,52,40,15,13,15,1,9,3,700]],["ジャイアント・スパイダー",[14,26,30,14,16,12,2,11,4,200]],["ジャンアント・センチピード",[13,4,30,5,14,12,1,7,3,50]],["ジャイアント・トード",[11,39,40,15,13,13,2,10,3,200]],["ジャイアント・ハイエナ",[12,45,50,16,14,14,2,12,7,200]]],Vt=function(){function t(e,n){Object(s["a"])(this,t),this.party=e,this.diff=n}return Object(l["a"])(t,[{key:"monster",value:function(){var t=this.monsterNum(),e=gt(t),n=this.party.totalExp(this.diff)/e/t,r=_t(n),a=wt(r),o=Object(ht["a"])(a,2),i=o[0],c=o[1];return new mt(i,c,t)}},{key:"maxNumber",value:function(){return Math.floor(this.party.totalExp(this.diff)/100)}},{key:"monsterNum",value:function(){return Math.floor(Math.random()*this.maxNumber()+1)}}]),t}(),Ct=(n("ac4d"),n("8a81"),n("ac6a"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[2,4]];Object(s["a"])(this,t),this.levelNums=e}return Object(l["a"])(t,[{key:"totalExp",value:function(t){var e=0,n=!0,r=!1,a=void 0;try{for(var o,i=this.levelNums[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value,s=Object(ht["a"])(c,2),l=s[0],u=s[1],f=jt(l,t);e+=f*u}}catch(v){r=!0,a=v}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return e}}]),t}()),Mt=[ut.Easy,ut.Normal,ut.Normal,ut.Normal,ut.Hard,ut.Deadly],Et=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(l["a"])(e,[{key:"monster",get:function(){var t=new Vt(new Ct,Mt[this.row-1]);return t.monster()}},{key:"color",get:function(){var t=["green","blue","blue","blue","red","black"];return t[this.row-1]||"error"}},{key:"difficulty",get:function(){var t=["簡単","通常","通常","通常","困難","死地"];return t[this.row-1]||"error"}}]),e}(d["c"]);b["a"]([Object(d["b"])()],Et.prototype,"row",void 0),Et=b["a"]([d["a"]],Et);var Tt=Et,Nt=Tt,$t=(n("41ad"),n("ba95")),Bt=n("c954"),Lt=n("5d23"),St=Object(x["a"])(Nt,dt,pt,!1,null,null,null);St.options.__file="MonsterList.vue";var Ft=St.exports;w()(St,{VBtn:k["a"],VFlex:P["a"],VLayout:J["a"],VListTile:$t["a"],VListTileAvatar:Bt["a"],VListTileContent:Lt["a"],VListTileSubTitle:Lt["b"],VListTileTitle:Lt["c"]});var At=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(f["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(d["c"]);At=b["a"]([Object(d["a"])({components:{MonsterList:Ft}})],At);var Dt=At,Pt=Dt,Ht=(n("dd96"),n("8860")),It=Object(x["a"])(Pt,vt,bt,!1,null,null,null);It.options.__file="Monsters.vue";var Jt=It.exports;w()(It,{VBtn:k["a"],VCard:nt["a"],VIcon:I["a"],VList:Ht["a"],VSpacer:q["a"],VToolbar:z["a"],VToolbarTitle:G["a"]}),r["default"].use(R["a"]);var qt=new R["a"]({base:"/dd5tools/",routes:[{path:"/",name:"menu",component:$},{path:"/dungeons",name:"dungeons",component:ft},{path:"/monsters",name:"monsters",component:Jt}]}),zt=qt,Gt=n("2f62"),Kt=function t(){Object(s["a"])(this,t)};r["default"].use(Gt["a"]);var Qt=new Gt["a"].Store({state:new Kt,getters:{},mutations:{},actions:{}}),Rt=n("9483");Object(Rt["a"])("".concat("/dd5tools/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].config.productionTip=!1,new r["default"]({router:zt,store:Qt,render:function(t){return t(Q)}}).$mount("#app")},ce80:function(t,e,n){},d6dc:function(t,e,n){},dd96:function(t,e,n){"use strict";var r=n("d6dc"),a=n.n(r);a.a},feb3:function(t,e,n){"use strict";var r=n("2b0a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c0384d23.js.map