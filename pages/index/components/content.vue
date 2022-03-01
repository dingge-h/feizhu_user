<template>
    <view class="theme">
        <scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
            <view>
                <block v-for="(item, index) in tab" :key="index">
                    <view @click="tabs(index,item.name)" class="list-cont" :class="{ active: index == num }">
                        <view>
                            <text :class="{ activea: index == num }" class="con-text-a">{{ item.name }}</text>
                        </view>
                        <view>
                            <text :class="{ activeb: index == num }" class="con-text-b">{{ item.title }}</text>
                        </view>
                    </view>
                </block>
            </view>
        </scroll-view>
    </view>
</template>

<script>
    import {
        homelist
    } from "../../../common/cloudfun.js"
    export default {
        name: 'cont',
        props: {
            tab: Array
        },
        data() {
            return {
                num: '',
                contentdata: [{
                        title: '推荐',
                        labei: '猜你喜欢'
                    },
                    {
                        title: '好景点',
                        labei: '周末放空'
                    },
                    {
                        title: '人文',
                        labei: '文化之旅'
                    },
                    {
                        title: '海岛',
                        labei: '阳光与沙滩'
                    },
                    {
                        title: '自由行',
                        labei: '超值精选'
                    },
                    {
                        title: '情侣',
                        labei: '别样的浪漫'
                    },
                    {
                        title: '网红',
                        labei: '最火打卡地'
                    }
                ]
            };
        },

        methods: {
            tabs(index, nav) {
                this.num = index;

                // tab切换改变tab切换loading状态
                let loading = true
                // this.$store.commit('loadmuta', loading)

                // tab切换把上拉加载的pageid值置为0
                let pageid = 0
                // 隐藏上拉加载的loading
                let uniload = false

                // tab切换隐藏没有数据的提示
                let nonedata = false

                // 把上拉加载的状态设为正在加载中
                let stateload = 'loading'

                // 传nav值到index页面执行上拉加载
                // 以对象形式传值
                let pullobj = {
                    loading: loading,
                    pageid: pageid,
                    nav: nav,
                    uniload: uniload,
                    nonedata: nonedata,
                    stateload: stateload
                }
                this.$store.commit('navmuta', pullobj)

                // 请求数据库数据
                let listing = 'Commodity' //进入页面展示的列表数据
                let typedatas = nav
                let listid = 0
                homelist(listing, typedatas, listid)
                    .then((res) => {
                        // 如果没有数据给予提示
                        if (res.data.length === 0) {
                            let nonedata = true
                            this.$store.commit('nonemuta', nonedata)
                        } else {
                            let nonedata = false
                            this.$store.commit('nonemuta', nonedata)
                        }
                        let listdata = res.data
                        // vuex传值
                        this.$store.commit('listmuta', listdata)
                        // 改变tab切换loading状态
                        let loading = false
                        this.$store.commit('loadmuta', loading)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    };
</script>

<style scoped>
    .activea {
        color: #292c33 !important;
        font-size: 31upx !important;
    }

    .activeb {
        color: #292c33 !important;
        font-size: 23upx !important;
    }

    .active {
        background-image: linear-gradient(to right, #ccffff 0%, #ffcc00 100%);
        border-top-right-radius: 50upx;
    }

    .scroll {
        white-space: nowrap;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        background: #FFFFFF;
        padding: 20upx 0;
    }

    .con-text-a {
        color: #292c33;
        font-size: 30upx;
        font-weight: bold;
    }

    .con-text-b {
        color: #9ea0a5;
        font-size: 23upx;
    }

    .list-cont {
        width: 180upx;
        display: inline-block;
        text-align: center;
    }
</style>
