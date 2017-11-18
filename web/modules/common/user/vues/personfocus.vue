<template>
    <div class="person-focus">
        <div class="focus-wrap el-col-24 text-center transition-halfs">
            <div class="short-info-wrap float-left-to-none">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">用户名</span>
                    <i class="fa fa-mars"></i>
                    <i class="fa fa-venus"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="focus-info">
                    <div>
                        <p>关注：1450</p>
                        <p>2017-11-10加入</p>
                    </div>
                    <el-button type="warning">取消关注</el-button>
                </div>
            </div>
            <div class="achive-text text-left float-left-to-100">
                <p>等级：专家</p>
                <p>星级：
                    <el-rate style="display:inline-block" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </p>
                <p>3天战绩：</p>
                <p>7天战绩：</p>
                <p>30天战绩：</p>
            </div>
            <div class="recommends content-mid-100">
                <p>当前推荐</p>
                <ul>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                </ul>
            </div>
        </div>
        <div class="focus-wrap el-col-24 text-center">
            <div class="short-info-wrap focus-wrap float-left-to-none">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">用户名</span>
                    <i class="fa fa-mars"></i>
                    <i class="fa fa-venus"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="focus-info">
                    <div>
                        <p>关注：1450</p>
                        <p>2017-11-10加入</p>
                    </div>
                    <el-button type="warning">取消关注</el-button>
                </div>
            </div>
            <div class="achive-text text-left float-left-to-100">
                <p>等级：专家</p>
                <p>星级：
                    <el-rate style="display:inline-block" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </p>
                <p>3天战绩：</p>
                <p>7天战绩：</p>
                <p>30天战绩：</p>
            </div>
            <div class="recommends content-mid-100">
                <p>当前推荐</p>
                <ul>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                </ul>
            </div>
        </div>
        <div class="focus-wrap el-col-24 text-center">
            <div class="short-info-wrap focus-wrap float-left-to-none">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">用户名</span>
                    <i class="fa fa-mars"></i>
                    <i class="fa fa-venus"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="focus-info">
                    <div>
                        <p>关注：1450</p>
                        <p>2017-11-10加入</p>
                    </div>
                    <el-button type="warning">取消关注</el-button>
                </div>
            </div>
            <div class="achive-text text-left float-left-to-100">
                <p>等级：专家</p>
                <p>星级：
                    <el-rate style="display:inline-block" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </p>
                <p>3天战绩：</p>
                <p>7天战绩：</p>
                <p>30天战绩：</p>
            </div>
            <div class="recommends content-mid-100">
                <p>当前推荐</p>
                <ul>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                    <li class="row-new"><span class="el-col-4">亚盘</span><span class="el-col-12 text-elipse">曼联VS热刺</span><span class="el-col-8"><el-button type="danger">200球果</el-button></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button,Rate} from 'element-ui'
Vue.component(Button.name,Button);
Vue.component(Rate.name,Rate);
import comVue from 'web/modules/commonVue.js'

export default {
    data(){
        return{
            value5:3.8
        }
    },
    beforeRouteLeave(to,from,next){
        comVue.$emit('is-show-header',true);
        next();
    },
    created(){
        comVue.$emit('is-show-header',false);
    }
  
}
</script>
