<template>
    <div class="person-center">
        <ul class="left-menu transition-halfs float-left">
            <router-link tag="li" :to="{name:'person-info'}" active-class="active" class="transition-halfs">个人主页</router-link>
            <router-link tag="li" :to="{name:'person-focus'}" active-class="active" class="transition-halfs">我的关注</router-link>
            <router-link tag="li" :to="{name:'person-message'}" active-class="active" class="transition-halfs">我的消息</router-link>
            <router-link tag="li" :to="{name:'recommend-record'}" active-class="active" class="transition-halfs">推荐记录</router-link>
            <router-link tag="li" :to="{name:'buy-record'}" active-class="active" class="transition-halfs">购买记录</router-link>
            <router-link tag="li" :to="{name:'recharge'}" active-class="active" class="transition-halfs">我要充值</router-link>
            <router-link tag="li" :to="{name:'withdraw'}" active-class="active" class="transition-halfs">我要提现</router-link>
            <router-link tag="li" :to="{name:'user-announce'}" active-class="active" class="transition-halfs">我要推广</router-link>
            <router-link tag="li" :to="{name:'money-flow-detail'}" active-class="active" class="transition-halfs">资金明细</router-link>
            <div class="left-side-btn hor-ver-mid">个人中心菜单</div>
        </ul>
        <div class="content-wrap content-75-to-100 float-left">
            <person-info-header v-if="showHeader"></person-info-header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {Button} from 'element-ui'
import comVue from 'web/modules/commonVue.js'
Vue.component(Button.name,Button);
import personInfoHeader from 'web/modules/common/user/vues/personinfoheader.vue'

export default {
    data(){
        return {
            showHeader:true
        }
    },
    created(){
        comVue.$on('is-show-header',(data)=>{
            this.showHeader = data;
        })
    },
    components:{
        personInfoHeader:personInfoHeader
    }
}
</script>
