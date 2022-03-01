(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/business/components/banner"],{"01ab":function(n,t,a){"use strict";var e=a("a1e7"),r=a.n(e);r.a},"2abf":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("d97e"),r={name:"details",props:{detaildata:Object,leaveword:Array},data:function(){return{imgArray:[],navDatas:"",bannerindex:0,num:1}},methods:{bannerfun:function(n){this.bannerindex=n.detail.current},previmg:function(n){var t=this.imgArray;(0,e.preview)(n,t).then((function(n){})).catch((function(n){console.log(n)}))}},watch:{detaildata:function(n,t){this.imgArray=n.Banner}}};t.default=r},4922:function(n,t,a){"use strict";a.r(t);var e=a("2abf"),r=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=r.a},"4a3f":function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}));var r=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"8ab5":function(n,t,a){"use strict";a.r(t);var e=a("4a3f"),r=a("4922");for(var u in r)"default"!==u&&function(n){a.d(t,n,(function(){return r[n]}))}(u);a("01ab");var i,c=a("f0c5"),o=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,"7017b455",null,!1,e["a"],i);t["default"]=o.exports},a1e7:function(n,t,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/business/components/banner-create-component',
    {
        'pages/business/components/banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8ab5"))
        })
    },
    [['pages/business/components/banner-create-component']]
]);
