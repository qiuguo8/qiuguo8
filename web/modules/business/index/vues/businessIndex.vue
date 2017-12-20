<template>
    <div>
        <div class="el-col-24 index-center content-wrap">
            <div class="carousel-wrap content-wrap">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in bannerList" :key="item.bannerId">
                        <img style="width:100%;height:100%" :src="item.bannerUrl"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="achive-rank rank-common content-wrap">
                <div class="list-name"><span>龙虎榜</span></div>
                <div class="rank-types text-center">
                    <el-radio-group v-model="productType"  @change="rankQuery()" class="radio-list small-radio">
                        <el-radio-button label="1" class="danger-radio small-checkbox">亚盘</el-radio-button>
                        <el-radio-button label="2" class="danger-radio small-checkbox">大小球</el-radio-button>
                        <el-radio-button label="3" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                        <el-radio-button label="4" class="danger-radio small-checkbox">北京单场</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="achive-rank-list" ref="achiveRank">
                    <div class="scroll-bar"></div>
                    <ul scroll-content style="position:relative;margin:0px;padding:0px">
                        <router-link v-for="rankItem in rankList"  :key="rankItem.userId" tag="li" :to="{name:'recommender-info'}" class="content-wrap content-100-to-50">
                            <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                            <span class="el-col-12 user-name text-elipse">{{rankItem.userName}}</span>
                            <span class="el-col-8 achive">{{rankItem.winCount}}胜{{rankItem.tieTotal}}平{{rankItem.loseCount}}负</span>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
        <div class="intros-wrap intros-wrap-index content-wrap">
            <div class="left-aside">
                最热推荐
            </div>
            <div ref="introWrap" style="width:100%;overflow:hidden;height:100%">
                <div class="transition-ones"  v-slipping v-if="hotList.length>0" :style="{width:(250*hotList.length)+'px',height:'100%',position:'relative',left:'0px'}">
                    <div class="intro-wrap intro-wrap-index transition-halfs" v-for="item in hotList" :key="item.recommendNo">
                        <div class="match-name text-elipse">{{item.homeTeamName}}VS{{item.visitTeamName}}</div>
                        <div class="intro-info">
                            <img src="/web/resources/img/index/logo.jpg"/>
                        </div>
                        <div class="intro-text">
                            <p class="text-elipse">{{item.userName}}</p>
                            <p class="text-elipse">{{item.assessLevel}}</p>
                            <p class="text-elipse">{{item.starLevel}}</p>
                            <p class="text-elipse">{{item.recordsValue}}</p>
                        </div>
                        <div class="recomd-info text-elipse">
                            <span>{{item.recommendContent}}</span>
                        </div>
                        <el-button type="warning"  @click="showOrderDetail()">{{item.price}}球果</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="el-col-24 content-wrap text-center transition-halfs">
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">头条</span><router-link tag="span" :to="{name:'news-list'}" class="more-btn">更多</router-link></div>
                <ul class="normal-news-list">
                    <router-link tag="li" v-for="ttItem in ttList" :key="ttItem.contentId" :to="{name:'news-detail'}" class="transition-halfs">{{ttItem.contentTitle}}</router-link>
                </ul>
            </div>
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">新闻</span><span class="more-btn">更多</span></div>
                <ul class="normal-news-list">
                    <router-link tag="li" v-for="xwItem in xwList" :key="xwItem.contentId" :to="{name:'news-detail'}" class="transition-halfs">{{xwItem.contentTitle}}</router-link>
                </ul>
            </div>
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">足球预测</span><span class="more-btn">更多</span></div>
                <ul class="normal-news-list">
                    <router-link tag="li" v-for="ycItem in ycList" :key="ycItem.contentId" :to="{name:'news-detail'}" class="transition-halfs">{{ycItem.contentTitle}}</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import scrollBar from 'web/common/utils/scrollUtil.js';
    import indexService from 'web/modules/business/index/services/indexService.js'
    import orderBuyTip from 'web/modules/business/trade/vues/order-buy-tip.vue'
    import 'web/common/directives/uiDirective.js'
    import {Carousel,CarouselItem,Table,TableColumn,Tabs,TabPane,RadioButton,RadioGroup} from 'element-ui'
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(RadioGroup.name, RadioGroup)
    export default {
        data(){
            return {
                bannerList:[],
                rankList:[],
                hotList:[],
                productType:'1',
                ttList:[],
                xwList:[],
                ycList:[],
            }
        },
        mounted(){
            $(this.$refs.achiveRank).scrollBar();
        },
        components:{
            orderBuyTip:orderBuyTip
        },
        methods:{
            showOrderDetail(){
                this.$refs.orderDetail.show();;
            },
            rankQuery(){
                var sform= {'productType':this.productType}
                indexService.queryLongHuRank(sform).then((ret)=>{
                    this.rankList = ret.body.rankList;
                })
            },
            hotQuery(){
                indexService.queryHotRank().then((ret)=>{
                    this.hotList = ret.body.hotList;
                })
            },
            contentQuery(){
                indexService.queryContent().then((ret)=>{
                    this.ttList = ret.body.ttList;
                    this.xwList = ret.body.xwList;
                    this.ycList = ret.body.ycList;
                })
            },
            bannerQuery(){
                indexService.queryBanner().then((ret)=>{
                    this.bannerList = ret.body.bannerList;
                })
            },
        },
        created:function(){
            this.bannerQuery();
            this.rankQuery();
            this.hotQuery();
            this.contentQuery();
        },
    }
</script>
