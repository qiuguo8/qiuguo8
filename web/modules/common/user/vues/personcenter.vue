<template>
    <div class="person-center">
        <ul class="left-menu float-left" v-spin>
            <router-link tag="li" :to="{name:'person-info'}" active-class="active" class="transition-halfs">个人主页</router-link>
            <router-link tag="li" :to="{name:'person-focus'}" active-class="active" class="transition-halfs">我的关注</router-link>
            <router-link tag="li" :to="{name:'person-message'}" active-class="active" class="transition-halfs">我的消息</router-link>
            <router-link tag="li" :to="{name:'recommend-record'}" active-class="active" class="transition-halfs">推荐记录</router-link>
            <router-link tag="li" :to="{name:'buy-record'}" active-class="active" class="transition-halfs">购买记录</router-link>
            <router-link tag="li" :to="{name:'recharge'}" active-class="active" class="transition-halfs">我要充值</router-link>
            <router-link tag="li" :to="{name:'withdraw'}" active-class="active" class="transition-halfs">我要提现</router-link>
            <router-link tag="li" :to="{name:'user-announce'}" active-class="active" class="transition-halfs">我要推广</router-link>
            <router-link tag="li" :to="{name:'money-flow-detail'}" active-class="active" class="transition-halfs">资金明细</router-link>
            <router-link tag="li" :to="{name:'manager-index'}" active-class="active" class="transition-halfs" v-if="isManager">后台管理</router-link>
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
import 'web/common/directives/uiDirective.js'

export default {
    data(){
        return {
            showHeader:true,
            isManager:false
        }
    },
    created(){
        comVue.$on('is-show-header',(data)=>{
            this.showHeader = data;
        });
        //监听是否具有管理员权限从而是否显示管理入口
        comVue.$on('is-manage-for-menu',(data)=>{
            this.isManager = comVue.$data.userInfo&&comVue.$data.userInfo.userJurisdictionType == '02';
        });
        if(comVue.$data.userInfo){
            this.isManager = comVue.$data.userInfo.userJurisdictionType == '02';
        }
    },
    mounted(){
    },
    components:{
        personInfoHeader:personInfoHeader
    }
}
</script>
