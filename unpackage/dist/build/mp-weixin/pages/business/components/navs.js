(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/business/components/navs"],{5823:function(n,t,a){"use strict";a.r(t);var e=a("c908"),c=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=c.a},"85f3":function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}));var c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},ac37:function(n,t,a){"use strict";var e=a("c09a"),c=a.n(e);c.a},c09a:function(n,t,a){},c908:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={name:"navs",data:function(){return{num:0,navalue:[{name:"宝贝"},{name:"详情"},{name:"评价"}]}},methods:{navbtn:function(n){this.num=n,0===n&&this.backTop(),0!=n&&this.$store.dispatch("navdata",n)},backTop:function(){wx.pageScrollTo&&wx.pageScrollTo({scrollTop:0})}}};t.default=e},cad2:function(n,t,a){"use strict";a.r(t);var e=a("85f3"),c=a("5823");for(var u in c)"default"!==u&&function(n){a.d(t,n,(function(){return c[n]}))}(u);a("ac37");var o,r=a("f0c5"),f=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,"6f018b53",null,!1,e["a"],o);t["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/business/components/navs-create-component',
    {
        'pages/business/components/navs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cad2"))
        })
    },
    [['pages/business/components/navs-create-component']]
]);
