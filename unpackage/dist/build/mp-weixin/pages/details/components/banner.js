(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/components/banner"],{"08bf":function(n,t,e){},3453:function(n,t,e){"use strict";e.r(t);var a=e("a7b5"),r=e("d5cd");for(var i in r)"default"!==i&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("d40b");var c,u=e("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"836e3c64",null,!1,a["a"],c);t["default"]=o.exports},6102:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("d97e"),r={name:"details",props:{detaildata:Object,leaveword:Array},data:function(){return{imgArray:[],navDatas:"",bannerindex:0,num:1}},methods:{bannerfun:function(n){this.bannerindex=n.detail.current},previmg:function(n){var t=this.imgArray;(0,a.preview)(n,t).then((function(n){})).catch((function(n){console.log(n)}))}},watch:{detaildata:function(n,t){var e=n.staticimg.slice(0,3);this.imgArray=e}}};t.default=r},a7b5:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return a}));var r=function(){var n=this,t=n.$createElement;n._self._c},i=[]},d40b:function(n,t,e){"use strict";var a=e("08bf"),r=e.n(a);r.a},d5cd:function(n,t,e){"use strict";e.r(t);var a=e("6102"),r=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/details/components/banner-create-component',
    {
        'pages/details/components/banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3453"))
        })
    },
    [['pages/details/components/banner-create-component']]
]);
