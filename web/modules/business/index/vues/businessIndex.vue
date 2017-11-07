<template>
    <div class="el-col-24 index-center">
        <div class="carousel-wrap">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in testlist" :key="item">
                    <img style="width:100%;height:100%" :src="item"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="normal-news">
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
</template>
<script>
import Vue from 'vue';
import {Carousel,CarouselItem} from 'element-ui'
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
export default {
    data(){
        return {
            testlist:['/web/resources/img/index/u170.jpg','/web/resources/img/index/u172.jpg','/web/resources/img/index/u174.jpg']
        }
    },
}
</script>
<style lang="stylus" scoped>
.full-half>.el-carousel>.el-carousel__container{height:360px}
</style>
