<template>
    <div>
        <div class="el-col-24 index-center content-wrap" style="margin-bottom:10px">
            <div class="carousel-wrap content-wrap">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in bannerList" :key="item.bannerId">
                      <router-link target="_blank" :to="{name:'news-detail',query:{contentId:item.bannerLinkUrl}}" > <img style="width:100%;height:100%" :src="staticPath+item.bannerUrl"/></router-link>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="achive-rank rank-common content-wrap">
                <div class="list-name"><span>龙虎榜</span></div>
                <div class="rank-types text-center">
                    <el-radio-group v-model="productCode"  @change="rankQuery()" class="radio-list small-radio">
                        <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                        <!--<el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>-->
                        <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                        <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="achive-rank-list" ref="achiveRank">
                    <div v-for="rankItem in rankList" :key="rankItem.userId"  class="content-wrap el-col-24" >
                        <span class="el-col-3  text-elipse">{{rankItem.index}}</span>
                        <img class="el-col-3" v-if="rankItem.faceUrl" :src="staticPath+rankItem.faceUrl"/>
                        <img class="el-col-3" v-if="!rankItem.faceUrl" :src="staticPath+'avatar/default.jpg'" />
                        <span class="el-col-6 user-name text-elipse"><a target="_blank" @click="goInfo(rankItem)" style="cursor:pointer;color:#409eff;">{{rankItem.userName}}</a></span>
                        <span class="el-col-4  text-elipse"><span>{{(rankItem.accuracyRate*100).toFixed(2)}}</span>%</span>
                        <span class="el-col-8 text-elipse">{{rankItem.recordValue}}</span>
                       
                    </div>
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
                        <div v-if="item.productCode =='01'" class="match-name text-elipse"><span style="color: #F56C6C;font-size: 14px">亚盘:</span><span style="font-size: 12px">{{item.homeTeamName}}VS{{item.visitTeamName}}</span></div>
                        <div v-if="item.productCode =='02'" class="match-name text-elipse"><span style="color: #F56C6C;font-size: 14px">大小球:</span><span style="font-size: 12px">{{item.homeTeamName}}VS{{item.visitTeamName}}</span></div>
                        <div v-if="item.productCode =='03'" class="match-name text-elipse"><span style="color: #F56C6C;font-size: 14px">竞彩:</span><span style="font-size: 12px">{{item.homeTeamName}}VS{{item.visitTeamName}}</span></div>
                        <div v-if="item.productCode =='04'" class="match-name text-elipse"><span style="color: #F56C6C;font-size: 14px">北单:</span><span style="font-size: 12px">{{item.homeTeamName}}VS{{item.visitTeamName}}</span></div>
                        <div class="intro-info">
                            <div class="recommender-content" :key="item.userId"  >
                                <img  v-if="item.faceUrl" :src="staticPath+item.faceUrl"/>
                                <img  v-if="!item.faceUrl" :src="staticPath+'avatar/default.jpg'">
                            </div>
                        </div>
                        <div class="intro-text">
                            <p class="text-elipse"><a target="_blank" @click="goInfo(item)" style="cursor:pointer;color:#409eff;">{{item.userName}}</a></p>
                            <p class="text-elipse">{{assessLevelForm[item.assessLevel]}}</p>
                            <el-rate style="display:inline-block" v-model="item.starLevel" disabled show-score text-color="#ff9900" score-template=""></el-rate>
                            <p class="text-elipse">{{item.recordsValue}}</p>
                        </div>
                        <div class="recomd-info text-elipse">
                            <span>{{item.recommendContent}}</span>
                        </div>
                         <a  v-if="item.buyStatus!='0' || item.userId==item.lookerId" target="_blank" @click="forFree(item)">
                             <el-button type="success">查看</el-button>
                         </a>
                         <a  v-if="item.price == '0'" target="_blank" @click="forFree(item)">
                             <el-button type="success">免费</el-button>
                         </a>
                         <el-button type="danger" v-if="item.buyStatus=='0' && item.price != '0' && item.userId!=item.lookerId " @click="showOrderDetail(item)">{{item.price}}球果</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="el-col-24 content-wrap text-center transition-halfs">
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">网站头条</span><router-link target="_blank"  :to="{name:'news-list'}" class="more-btn">更多</router-link></div>
                <ul class="normal-news-list">
                    <li  v-for="ttItem in ttList" :key="ttItem.contentId" >
                        <router-link target="_blank" :to="{name:'news-detail',query:{contentId:ttItem.contentId}}"><p class="text-elipse">{{ttItem.contentTitle}}</p><p>{{ttItem.createTime.slice(0,11)}}</p></router-link>
                    </li>
                </ul>

               <!-- @click="contentDetail(ttItem)"-->
            </div>
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">足球新闻</span><router-link target="_blank"  :to="{name:'news-list'}" class="more-btn">更多</router-link></div>
                <ul class="normal-news-list">
                    <li v-for="xwItem in xwList" :key="xwItem.contentId">
                        <router-link target="_blank" :to="{name:'news-detail',query:{contentId:xwItem.contentId}}"><p class="text-elipse">{{xwItem.contentTitle}}</p><p>{{xwItem.createTime.slice(0,11)}}</p></router-link>
                    </li>
                </ul>
            </div>
            <div class="text-left min-max-640 content-wrap content-30-to-100">
                <div class="normal-news-title"><span class="list-name">足彩预测</span><router-link target="_blank"  :to="{name:'news-list'}" class="more-btn">更多</router-link></div>
                <ul class="normal-news-list">
                    <li v-for="ycItem in ycList" :key="ycItem.contentId">
                        <router-link  :to="{name:'news-detail',query: {contentId:ycItem.contentId}}"><p class="text-elipse">{{ycItem.contentTitle}}</p><p>{{ycItem.createTime.slice(0,11)}}</p></router-link>
                    </li>
                </ul>
            </div>
             <order-buy-tip ref="orderBuy" :order-data="orderData"></order-buy-tip>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import comVue from 'web/modules/commonVue.js'
    import scrollBar from 'web/common/utils/scrollUtil.js';
    import indexService from 'web/modules/business/index/services/indexService.js'
    import pathUtil from 'web/common/utils/pathUtil.js'
    import sysUtil from 'web/common/utils/sysUtil.js'
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
                productCode:'03',
                ttList:[],
                xwList:[],
                ycList:[],
                orderData:null,
                staticPath:pathUtil.getStaticPath(),
                assessLevelForm:{'01':'初级','02':'中级','03':'高级','04':'资深级','05':'专家级'},
            }
        },
        mounted(){
            comVue.$on('reload-recom-list',()=>{
                this.hotQuery();
            })
        },
        components:{
            orderBuyTip:orderBuyTip,
        },
        methods:{
            goInfo(item){
                if(sysUtil.checkLoginForBiz()){
                    //this.$router.push({name:'recommender-info', query: { userName: rankItem.userName }});
                    window.open(location.origin+"/recommender-info?userName="+item.userName,'_blank');
                    return true;
                }else{
                    return false;
                }
            },
            forFree(item){
                if(sysUtil.checkLoginForBiz()){
                    window.open(location.origin+"/order-detail?recommendNo="+item.recommendNo,'_blank');
                    return true;
                }else{
                    return false;
                }
            },
            showOrderDetail(item) {
                sysUtil.checkLoginForBiz(this.showOrderDetailFn.bind(this,item));
            },
            showOrderDetailFn(item) {
                this.orderData = item;
                this.$refs.orderBuy.show();
            },
            rankQuery(){
                var sform= {'productCode':this.productCode}
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
            contentDetail(item){
                this.$router.push({name:'news-detail',query: {recommendNo:item.recommendNo}})

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
