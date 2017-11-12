<template>
    <div class="person-center">
        <div class="common-info">
            <div class="short-info-wrap">
                <img src="web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <p>用户名</p>
                    <p></p>
                </div>
            </div>
            <div class="btn-list">
                <el-button type="primary">充值</el-button>
                <el-button type="primary">提现</el-button>
            </div>
        </div>
        <div class="clear-fix"></div>
        <ul class="left-menu transition-halfs">
            <li class="transition-halfs">个人主页</li>
            <li class="transition-halfs">我的关注</li>
            <li class="transition-halfs">我的订单</li>
            <li class="transition-halfs">推荐记录</li>
            <li class="transition-halfs">购买记录</li>
            <li class="transition-halfs">我要充值</li>
            <li class="transition-halfs">我要提现</li>
            <li class="transition-halfs">我要推广</li>
            <div class="left-side-btn hor-ver-mid">个人中心菜单</div>
        </ul>
        <div class="content-wrap content-75-to-100">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {Button} from 'element-ui'
Vue.component(Button.name,Button);

export default {
  
}
</script>
