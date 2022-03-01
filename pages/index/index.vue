<template>
    <view>
        <Search :banner="banner"></Search>
        <Ticket></Ticket>
        <Classify></Classify>
        <Content id="boxFixed" :class="{'is_fixed' : isFixed}" :tab="tab"></Content>
        <view style="height: 140upx;"></view>
        <!-- tab切换的loading -->
        <loader-list v-if="loadinglist"></loader-list>
        <Article :Articleend="Articleend" v-if="!loadinglist"></Article>
        <!-- 单页面的loading -->
        <home-load v-if="homeload"></home-load>
        <!-- 没有数据的提示 -->
        <none-data v-if="nonedata"></none-data>
        <!-- 上拉加载的loading -->
        <view class="load-more" v-if="loadmore">
            <uni-load-more :status="uniload" color="#ffcc99"></uni-load-more>
        </view>
    </view>
</template>

<script>
    const {log} = console
    import Search from './components/search'
    import Ticket from './components/ticket'
    import Classify from './components/classify'
    import Content from './components/content'
    import Article from './components/article'
    // 引入并发请求
    import { home,homelist} from '../../common/cloudfun.js'
    import {mapState} from 'vuex'
    // 引入上拉加载插件
    import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
    export default {
        components: {
          	Search,
            Ticket,
            Classify,
            Content,
        	Article,
        	uniLoadMore
        },
        data() {
            return {
                isFixed: false,
                rect: '',
                menuTop: '',
                // 轮播
                banner: [],
                // tab切换
                tab: [],
                Articleend: [],
                // tab切换的loading
                loadinglist: true,
                // 单页面的loading
                homeload: true,
                nonedata: false, //没有数据的提示
                //上拉加载的值
                pageid: 0,
                // 点击tab相应的集合值
                nav: '',
                uniload: 'loading',
                fresh: {
                	   contentrefresh: "正在加载..."
                },
                loadmore: false
            }
        },

        // 吸顶
        onLoad: function() {
            var that = this;
            var query = wx.createSelectorQuery()
            query.select('#boxFixed').boundingClientRect()
            query.exec((res) => {
                this.menuTop = res[0].top
            });
        },
        // 2.监听页面滚动距离scrollTop
        onPageScroll(e) {
            this.rect = e.scrollTop
        },

        methods: {
            listend() {
                let banner = 'banner'; //轮播
                let tab = 'tab' //tab切换
                let listing = 'Commodity' //进入页面展示的列表数据
                let typedatas = '推荐'
                Promise.all([home(banner), home(tab), homelist(listing, typedatas, this.pageid)])
                .then(res => {
                    log(res)
                    // 轮播的
                    this.banner = res[0].data
                    // tab切换
                    this.tab = res[1].data
                    // 列表的第一条数据
                    this.Articleend = res[2].data
                    // 所有数据出来消除loading
                    this.homeload = false
                })
                .catch(err => {
                    log(err)
                })
            },
            
            // 上拉加载
            pullon(){
            	let listing = 'Commodity'//进入页面展示的列表数据
            	let typedatas = this.nav //查询切换哪个tab
            	homelist(listing,typedatas,this.pageid)
            	.then((res)=>{
            		// 如果没有数据了，改变loading状态
            		if(res.data.length == 0){
            			this.uniload = 'noMore'
            		}else{
            		this.Articleend = [...this.Articleend,...res.data]	
            		}
            	})
            	.catch((err)=>{
            		console.log(err)
            	})
            }
        },

        mounted() {
            this.listend()
        },
        
        // 上拉加载
        onReachBottom() {
        	// 出现loading加载
        	this.loadmore = true
        	this.uniload = 'loading'
        	this.pageid++
        	this.pullon()
        },

        computed: {
            ...mapState(['list', 'load', 'navmin', 'nonemin']),
            // 响应列表值
        	   count() {
                return this.Articleend = this.list.listing
            },
            // 响应loading值
         	  countload() {
         		     return this.loadinglist = this.load.loading
            },
            // 响应nav值
            navdata() {
                this.loadinglist = this.navmin.loading
                this.nav = this.navmin.naving
                this.pageid = this.navmin.pageid
            	this.loadmore = this.navmin.uniload
                this.nonedata = this.navmin.nonedata
                this.uniload = this.navmin.stateload
          	 },
            // 如果tab切换没有数据，显示提示
            noneted() {
                return this.nonedata = this.nonemin.nonedata
            },
            name() {
                // 吸顶
                if (this.rect > this.menuTop) {
                    this.isFixed = true
                } else {
                    this.isFixed = false
                }
            }
        },
    }
</script>

<style scoped>
    page {
        height: 100%;
        overflow: auto;
        margin: 0;
    }

    /* // 导航 */
    .is_fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
        transform: translateZ(0);

    }

    /* 上拉加载的样式 */
    .load-more {
        height: 160upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>