<template>
    <div class="person-info text-center">
        <div class="common-info row">
            <div class="short-info-wrap">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">用户名</span>
                    <i class="fa fa-mars"></i>
                    <i class="fa fa-venus"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="other-info">
                    <i class="fa fa-clock-o"></i>
                    <span>2017-11-12加入</span>
                    <i class="fa fa-map-marker"></i>
                    <span>来自惠州</span>
                </div>
                <p class="status">存在感强</p>
                <div class="btn-list">
                    <el-button type="primary">修改头像</el-button>
                    <el-button type="primary">修改宣言</el-button>
                </div>
            </div>
            <div class="content-60-to-60 text-left two-colums-to-one achive-info transition-halfs">
                <div class="float-left">
                    当前级别：专家级
                </div>
                <div class="">
                    当前星级：一星
                </div>
                <div class="">
                    球果余额：16554984.12
                </div>
                <div class="btn-list">
                    <el-button type="primary">充值</el-button>
                    <el-button type="primary">提现</el-button>
                </div>
            </div>
        </div>
        <div class="clear-fix"></div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button} from 'element-ui'
Vue.component(Button.name,Button);

export default {
  
}
</script>
