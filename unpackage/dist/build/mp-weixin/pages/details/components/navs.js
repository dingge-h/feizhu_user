(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/components/navs"],{"4c59":function(n,t,a){"use strict";var e=a("fd20"),c=a.n(e);c.a},d69c:function(n,t,a){"use strict";a.r(t);var e=a("ec87"),c=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},ec87:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"navs",data:function(){return{num:0,navalue:[{name:"宝贝"},{name:"详情"},{name:"评价"}]}},methods:{navbtn:function(n){this.num=n,0===n&&this.backTop(),0!=n&&this.$store.dispatch("navdata",n)},backTop:function(){wx.pageScrollTo&&wx.pageScrollTo({scrollTop:0})}}};t.default=e},f583:function(n,t,a){"use strict";a.r(t);var e=a("fccd"),c=a("d69c");for(var u in c)"default"!==u&&function(n){a.d(t,n,(function(){return c[n]}))}(u);a("4c59");var o,r=a("f0c5"),f=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"5d05def3",null,!1,e["a"],o);t["default"]=f.exports},fccd:function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}));var c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},fd20:function(n,t,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/details/components/navs-create-component',
    {
        'pages/details/components/navs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f583"))
        })
    },
    [['pages/details/components/navs-create-component']]
]);
