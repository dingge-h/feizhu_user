(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"107d":function(n,t,e){"use strict";e.r(t);var o=e("c8c0"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=i.a},"27fe":function(n,t,e){"use strict";var o=e("7beb"),i=e.n(o);i.a},"5e53":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}));var o={uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"ddf6"))}},i=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"7beb":function(n,t,e){},aaa2:function(n,t,e){"use strict";(function(n){e("5b8f");o(e("66fd"));var t=o(e("d018"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},c8c0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("d493"),i=e("26cb");function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){c(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n){return f(n)||d(n)||s(n)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(n,t){if(n){if("string"===typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}function d(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function f(n){if(Array.isArray(n))return h(n)}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var m=console,p=m.log,b=function(){e.e("pages/index/components/search").then(function(){return resolve(e("6130"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("pages/index/components/ticket").then(function(){return resolve(e("0693"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("pages/index/components/classify").then(function(){return resolve(e("e37b"))}.bind(null,e)).catch(e.oe)},y=function(){e.e("pages/index/components/content").then(function(){return resolve(e("7758"))}.bind(null,e)).catch(e.oe)},O=function(){e.e("pages/index/components/article").then(function(){return resolve(e("dcbb"))}.bind(null,e)).catch(e.oe)},j=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("ddf6"))}.bind(null,e)).catch(e.oe)},x={components:{Search:b,Ticket:v,Classify:g,Content:y,Article:O,uniLoadMore:j},data:function(){return{isFixed:!1,rect:"",menuTop:"",banner:[],tab:[],Articleend:[],loadinglist:!0,homeload:!0,nonedata:!1,pageid:0,nav:"",uniload:"loading",fresh:{contentrefresh:"正在加载..."},loadmore:!1}},onLoad:function(){var n=this,t=wx.createSelectorQuery();t.select("#boxFixed").boundingClientRect(),t.exec((function(t){n.menuTop=t[0].top}))},onPageScroll:function(n){this.rect=n.scrollTop},methods:{listend:function(){var n=this,t="banner",e="tab",i="Commodity",r="推荐";Promise.all([(0,o.home)(t),(0,o.home)(e),(0,o.homelist)(i,r,this.pageid)]).then((function(t){p(t),n.banner=t[0].data,n.tab=t[1].data,n.Articleend=t[2].data,n.homeload=!1})).catch((function(n){p(n)}))},pullon:function(){var n=this,t="Commodity",e=this.nav;(0,o.homelist)(t,e,this.pageid).then((function(t){0==t.data.length?n.uniload="noMore":n.Articleend=[].concat(u(n.Articleend),u(t.data))})).catch((function(n){console.log(n)}))}},mounted:function(){this.listend()},onReachBottom:function(){this.loadmore=!0,this.uniload="loading",this.pageid++,this.pullon()},computed:a(a({},(0,i.mapState)(["list","load","navmin","nonemin"])),{},{count:function(){return this.Articleend=this.list.listing},countload:function(){return this.loadinglist=this.load.loading},navdata:function(){this.loadinglist=this.navmin.loading,this.nav=this.navmin.naving,this.pageid=this.navmin.pageid,this.loadmore=this.navmin.uniload,this.nonedata=this.navmin.nonedata,this.uniload=this.navmin.stateload},noneted:function(){return this.nonedata=this.nonemin.nonedata},name:function(){this.rect>this.menuTop?this.isFixed=!0:this.isFixed=!1}})};t.default=x},d018:function(n,t,e){"use strict";e.r(t);var o=e("5e53"),i=e("107d");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("27fe");var a,c=e("f0c5"),u=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"38537220",null,!1,o["a"],a);t["default"]=u.exports}},[["aaa2","common/runtime","common/vendor"]]]);