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
            <ul class="achive-rank-list">
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name text-elipse">对对对点</span>
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
                <li class="content-wrap content-100-to-50">
                    <img class="el-col-4" src="/web/resources/img/index/u170.jpg"/>
                    <span class="el-col-12 user-name">对对对点</span>
                    <span class="el-col-8 achive">100/110/100</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="intros-wrap intros-wrap-index content-wrap">
        <div class="left-aside">
            最热推荐
        </div>
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
            <el-button type="danger">200</el-button>
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
            <el-button type="danger">200</el-button>
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
            <el-button type="danger">200</el-button>
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
            <el-button type="danger">200</el-button>
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
    <!-- <div class="el-col-24 index-center content-wrap">
        <div class="min-max-640 text-center">
            <div class="content-wrap rank-list rank-common content-25-to-50">
                <div class="list-name"><span>七天胜率排行</span></div>
                <ul class="list-detail">
                    <li>亚盘</li>
                    <li>大小球</li>
                    <li>竞彩足球</li>
                    <li>北单</li>
                </ul>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData3" border style="width: 100%">
                    <el-table-column prop="index" label="排行" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column  prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="rank" label="级别" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="winpercent" label="胜率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
            </div>
            <div class="content-wrap other-thing rank-common content-25-to-50">
                <div class="list-name"><span>名家专访</span></div>
                <div class="thing-btn text-left">
                    <button class="el-button el-button--primary">发布推荐</button>
                    <button class="el-button el-button--danger float-right">有奖投稿</button>
                </div>
                <div class="good-interview">
                    <div class="img-wrap text-center">
                        <img src="/web/resources/img/index/user-img.png"/>
                    </div>
                    <div class="interview-content">
                        xxxxxxxxxxxxxxxx<br/>
                        xxxxxxxxxxxxxxxxxxxxx<br/>
                    </div>
                </div>
            </div>
            <div class="content-wrap types-news content-50-to-100" style="display:inline-block">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="新闻">
                        <ul class="normal-news-list">
                            <li class="transition-halfs">xxxxxxxyyxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="行业">
                        <ul class="normal-news-list">
                            <li class="transition-halfs">xxxxxxxxggxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="活动">
                        <ul class="normal-news-list">
                            <li class="transition-halfs">xxxxxxxxxuuuxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                            <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div> -->
</div>
</template>
<script>
import Vue from 'vue';
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
                        {index:'4',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'5',userName:'xx',rank:'菜鸟',winpercent:'80%'}],
            radioVal:'1'
        }
    },
}
</script>
