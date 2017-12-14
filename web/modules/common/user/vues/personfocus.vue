<template>
    <div class="person-focus">
        <div class="select-list content-wrap text-left">
            <el-radio-group v-model="productCode" class="radio-list">
                <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>
            </el-radio-group>
        </div>
        <div class="focus-wrap el-col-24 text-center transition-halfs" v-for="data in list">
            <div class="short-info-wrap float-left-to-none">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">{{data.userName}}</span>
                    <i class="fa fa-mars" v-if="data.sex == '1'"></i>
                    <i class="fa fa-venus" v-if="data.sex == '2'"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="focus-info">
                    <div>
                        <p>关注：{{data.followNum}}</p>
                        <p>{{data.createdTime}}加入</p>
                    </div>
                    <el-button type="warning">取消关注</el-button>
                </div>
            </div>
            <div class="achive-text text-left float-left-to-100">
                <p>等级：{{data.assessLevel}}</p>
                <p>星级：
                    <el-rate style="display:inline-block" v-model="data.starLevel" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </p>
                <p>3天战绩：{{data.winTotalThree}}胜{{data.tieTotalThree}}平{{data.loseTotalThree}}负</p>
                <p>7天战绩：{{data.winTotalSeven}}胜{{data.tieTotalSeven}}平{{data.loseTotalSeven}}负</p>
                <p>30天战绩：{{data.winTotalThirty}}胜{{data.tieTotalThirty}}平{{data.loseTotalThirty}}负</p>
            </div>
            <div class="recommends content-mid-100">
                <p>当前推荐</p>
                <ul v-for="data in data.recommendList"> 
                    <li class="row-new"><span class="el-col-4">{{data.categoryCode}}</span><span class="el-col-12 text-elipse">{{data.homeTeamName}}VS{{data.visitTeamName}}</span><span class="el-col-8"><el-button type="danger">{{data.price}}球果</el-button></span></li>
                </ul>
            </div>
        </div>
        <div class="el-col-24 text-center infinite-scroll" v-infinite-scroll="void 0" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <span v-show="busy"><i class="keepRotate fa fa-circle-o-notch"></i>加载中</span>
            <span v-show="!busy">加载更多</span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button,Rate,RadioButton,RadioGroup} from 'element-ui'
import personForcusService from "web/modules/common/user/service/personFocusService.js";
Vue.component(Button.name,Button);
Vue.component(Rate.name,Rate);
Vue.component(RadioButton.name,RadioButton);
Vue.component(RadioGroup.name,RadioGroup);
import comVue from 'web/modules/commonVue.js'

export default {
    data(){
        return{
            value5:3.8,
            productCode:'01',
            list:[]
        }
    },
    mounted(){
        personForcusService.getUnReadMessageList({userId:"20171206201103946446",productCode:this.productCode}).then((data)=>{
            console.log(data);
            this.list = data.list.list;
        })
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
