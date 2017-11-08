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
        <div class="normal-news content-wrap">
            <div class="normal-news-title"><span>最热推荐</span></div>
            <ul class="normal-news-list">
                <li>xxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
        </div>
    </div>
    <div class="el-col-24 index-center content-wrap text-center">
        <div class="min-max-640 text-left">
            <div class="content-wrap rank-list content-25-to-50">
                <div class="list-name">七天胜率排行</div>
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
            <div class="content-wrap other-thing content-25-to-50">
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
                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="新闻">新闻</el-tab-pane>
                    <el-tab-pane label="行业">行业</el-tab-pane>
                    <el-tab-pane label="活动">活动</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import {Carousel,CarouselItem,Table,TableColumn,Tabs,TabPane} from 'element-ui'
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
export default {
    data(){
        return {
            testlist:['/web/resources/img/index/u170.jpg','/web/resources/img/index/u172.jpg','/web/resources/img/index/u174.jpg'],
            tableData3:[{index:'1',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'2',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'3',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'4',userName:'xx',rank:'菜鸟',winpercent:'80%'},
                        {index:'5',userName:'xx',rank:'菜鸟',winpercent:'80%'}]

        }
    },
}
</script>
<style lang="stylus" scoped>
.full-half>.el-carousel>.el-carousel__container{height:360px}
</style>
