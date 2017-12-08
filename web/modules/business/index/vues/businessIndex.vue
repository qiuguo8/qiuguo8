<template>
<div>
    <div class="el-col-24 index-center content-wrap">
        <div class="carousel-wrap content-wrap">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in testlist" :key="item">
                    <img style="width:100%;height:100%" :src="item"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="achive-rank rank-common content-wrap">
            <div class="list-name"><span>龙虎榜</span></div>
            <!-- <div class="rank-types">
                <span class="transition-halfs">亚盘</span>
                <span class="transition-halfs">大小球</span>
                <span class="transition-halfs">竞彩2选1</span>
                <span class="transition-halfs">北京单场</span>
            </div> -->
            <div class="rank-types text-center">
                <el-radio-group v-model="radioVal" class="radio-list small-radio">
                    <el-radio-button label="1" class="danger-radio small-checkbox">亚盘</el-radio-button>
                    <el-radio-button label="2" class="danger-radio small-checkbox">大小球</el-radio-button>
                    <el-radio-button label="3" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                    <el-radio-button label="4" class="danger-radio small-checkbox">北京单场</el-radio-button>
                </el-radio-group>
            </div>
            <div class="achive-rank-list" ref="achiveRank">
                <div class="scroll-bar"></div>
                <ul scroll-content style="position:relative;margin:0px;padding:0px">
                <router-link tag="li" :to="{name:'recommender-info'}" class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name text-elipse">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </router-link>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="intros-wrap intros-wrap-index content-wrap">
        <div class="left-aside">
            最热推荐
        </div>
        <div ref="introWrap" style="width:100%;overflow:hidden;height:100%">
            <div class="transition-ones" v-slipping :style="{width:(250*tableData3.length)+'px',height:'100%',position:'relative'}">
                <div class="intro-wrap intro-wrap-index transition-halfs">
                    <div class="match-name">曼城VS曼联</div>
                    <div class="intro-info">
                        <img src="/web/resources/img/index/logo.jpg"/>
                        <el-button type="success" v-if="false">已关注</el-button>
                        <button class="el-button btn-orange">关注</button>
                    </div>
                    <div class="intro-text">
                        xxxxxxx
                    </div>
                    <el-button type="warning">200</el-button>
                </div>
                <div class="intro-wrap intro-wrap-index transition-halfs">
                    <div class="match-name">曼城VS曼联</div>
                    <div class="intro-info">
                        <img src="/web/resources/img/index/logo.jpg"/>
                        <el-button type="success">已关注</el-button>
                    </div>
                    <div class="intro-text">
                        xxxxxxx
                    </div>
                    <el-button type="warning">200</el-button>
                </div>
                <div class="intro-wrap intro-wrap-index transition-halfs">
                    <div class="match-name">曼城VS曼联</div>
                    <div class="intro-info">
                        <img src="/web/resources/img/index/logo.jpg"/>
                        <el-button type="success">已关注</el-button>
                    </div>
                    <div class="intro-text">
                        xxxxxxx
                    </div>
                    <el-button type="warning">200</el-button>
                </div>
                <div class="intro-wrap intro-wrap-index transition-halfs">
                    <div class="match-name">曼城VS曼联</div>
                    <div class="intro-info">
                        <img src="/web/resources/img/index/logo.jpg"/>
                        <el-button type="success">已关注</el-button>
                    </div>
                    <div class="intro-text">
                        xxxxxxx
                    </div>
                    <el-button type="warning" @click="showOrderDetail()">200</el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="el-col-24 content-wrap text-center transition-halfs">
        <div class="text-left min-max-640 content-wrap content-30-to-100">
            <div class="normal-news-title"><span class="list-name">头条</span><span class="more-btn">更多</span></div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
        </div>
        <div class="text-left min-max-640 content-wrap content-30-to-100">
            <div class="normal-news-title"><span class="list-name">新闻</span><span class="more-btn">更多</span></div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
        </div>
        <div class="text-left min-max-640 content-wrap content-30-to-100">
            <div class="normal-news-title"><span class="list-name">足球预测</span><span class="more-btn">更多</span></div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
        </div>
    </div>
    <order-buy-tip ref="orderDetail" :order-data="data"></order-buy-tip>
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
            testlist:['/web/resources/img/index/u170.jpg','/web/resources/img/index/u172.jpg','/web/resources/img/index/u174.jpg'],
            tableData3:[{index:'1',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'2',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'3',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'3',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'5',userName:'xx',rank:'菜鸟',winpercent:'80%'}],
            radioVal:'1',
            data:null
        }
    },
    mounted(){
        indexService.getRankList({categoryCode:'01'}).then((ret)=>{
            console.log(ret);
        });
        $(this.$refs.achiveRank).scrollBar();
        $(this.$refs.introWrap).scrollBar({direction:'horizontal'});
    },
    components:{
        orderBuyTip:orderBuyTip
    },
    methods:{
        showOrderDetail(){
            this.$refs.orderDetail.show();;
        }
    }
}
</script>
