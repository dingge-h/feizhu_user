<template>
    <view>
        <Address :address="address"></Address>
        <Locality></Locality>
        <Content :localdata="localdata" v-if="!loadinglist"></Content>
        <!-- 发表 -->
        <view class="publish animated fadeInUp">
            <image src="../../static/tab/fab.png" mode="widthFix" @click="travels()"></image>
        </view>
        <!-- tab切换的loading -->
        <loader-list v-if="loadinglist"></loader-list>

        <!-- 没有数据的提示 -->
        <none-data v-if="nonedata"></none-data>

        <!-- 单页面的loading -->
        <home-load v-if="homeload"></home-load>
        <!-- 上拉加载的loading -->
        <view class="load-more" v-if="loadmore">
            <uni-load-more :status="uniload" color="#ffcc99"></uni-load-more>
        </view>
    </view>
</template>

<script>
    const {log} = console
    import Address from './components/address.vue'
    import Locality from './components/locality.vue'
    import Content from './components/content.vue'
    import {mapState} from 'vuex'
    // 引入定位
    import {addressdata} from '../../common/list.js'
    // 引入上拉加载插件
    import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
    // 引入数据库
    var db = wx.cloud.database()
    var listdata = db.collection('userdata')
    export default {
        components: {
            Address,
         	Locality,
            Content,
            uniLoadMore
        },
        data() {
            return {
                address: '',
                // 筛选到的数据
                localdata: [],
                // loading加载
                homeload: false,
                loadmore: false, //上拉加载是否显示
                uniload: 'loading',
                //上拉加载的值
                pageid: 0,
                loadinglist: false,
                nonedata: false,
                // watch监听选择城市的页面
                addressData: ''
            }
        },
        methods: {
            // 被父组件调用
            fatherMethod(name) {
               // 点击tab出现loading,隐藏列表页,隐藏没有数据的提示
               this.loadinglist = true
               this.nonedata = false
               if(name == '全部'){
            	   let name = this.address
            	   this.cityData(name)
               }else{
            	   let city = this.address
            	   this.tabCity(city,name)
               }
            },
            // 定位
            addRess(){
                addressdata()
                .then(res=>{
                    let city = res.result.ad_info.city
                    this.address = city
                    // 定位成功查询数据库取出该城市的数据
                    this.cityData(this.address)
                })
                .catch(err=>{
                    this.address = '武汉市'
                    let city = '武汉市'
                    this.cityData(this.address)
                })
            },
            
            // 查询当前定位城市的数据
            cityData(city){
            	listdata.where({
            	  datainfo:{ 
            		address:city
            	  }
            	})
            	.orderBy('datainfo.time','desc')
            	.get()
            	.then((res)=>{ 
            		// 赋值筛选到的数据
            		let citydata = res.data
            		this.resultCity(citydata)			
            	})
            	.catch((err)=>{
            		console.log(err)
            	})
            },
            
            // tab切换筛选的数据
            tabCity(city,name){
            	listdata.where({
                    datainfo:{
                        address:city,  
                        classdata:name
                    }
            	})
            	.get()
            	.then((res)=>{
            		// 赋值筛选到的数据
            		let citydata = res.data
            		this.resultCity(citydata)			
            	})
            	.catch((err)=>{
            		console.log(err)
            	})
            },
            
            // 赋值筛选到的数据
            resultCity(citydata){
            	var adddata = citydata.map((item)=>{
            		let id = item._id
            		let datainfo = item.datainfo
            		return{
            			id,
            			datainfo
            		}
            	})
            	this.localdata = adddata
            	// 消失loading加载
            	this.homeload = false
            	// 数据出来，tab loading消失
            	this.loadinglist = false
            	// 如果没有数据，给予用户提示
            	if(adddata.length === 0){
            		this.nonedata = true
            	}else{
            		this.nonedata = false
            	}
            },
            
            travels(){
            	uni.navigateTo({
            		url:'../travels/travels'
            	})
            },
        },
        
        created() {
            this.addRess()
        },
        
        computed:{
            ...mapState(['city','roturn']),
            count(){
            	var address = this.city.citying
            	this.addressData = address
            },
            
            // 如果接收值为ture，表示用户发表游记成功，此刻刷新页面
            routing(){
            	if(this.roturn.pagesid == true){
            		this.addRess()
            	}
            }
        },
        
        watch:{
            addressData(newValue, oldValue) {
            	this.address = newValue
                // 定位成功查询数据库取出该城市的数据
                this.cityData(newValue)
            }
        }
    }
</script>

<style scoped>
    .publish image {
        width: 120upx !important;
        height: 100upx !important;
        border-radius: 40upx;
    }

    .publish {
        position: fixed;
        bottom: 20upx;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }

    /* 上拉加载的样式 */
    .load-more {
        margin-bottom: 120upx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>  