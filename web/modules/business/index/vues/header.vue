<template>
    <header class="header-container">
        <nav class="el-col el-col-18 el-col-offset-3">
            <div class="header-logo-wrap">
                <router-link tag="a" :to="{name:'index'}"><img :src="logoUrl"/></router-link>
            </div>
            <div class="not-for-icon header-menu" v-if="!isLogined">
                <ul class="header-menu-list">
                    <li class="transition-halfs" @click="showLogin()" v-if="!isLogined">登录</li>
                    <router-link tag="li" :to="{name:'register'}" class="transition-halfs" v-if="!isLogined">注册</router-link>
                </ul>
            </div>
            <div class="user-info" v-if="isLogined">
                <span class="msg-tip">1</span>
                <div class="user-img-wrap" ref="usericon">
                     <img :src="avatarUrl"/>
                </div>
                <ul class="user-menu-list" ref="userlist">
                    <router-link tag="li" :to="{name:'person-info'}" active-class="active" class="transition-halfs">个人中心</router-link>
                    <router-link tag="li" :to="{name:'person-focus'}" active-class="active" class="transition-halfs">我的关注</router-link>
                    <router-link tag="li" :to="{name:'recommend-record'}" active-class="active" class="transition-halfs">推荐记录</router-link>
                    <router-link tag="li" :to="{name:'person-message'}" active-class="active" class="transition-halfs">我的消息</router-link>
                    <router-link tag="li" :to="{name:'recharge'}" active-class="active" class="transition-halfs">充值</router-link>
                    <router-link tag="li" :to="{name:'withdraw'}" active-class="active" class="transition-halfs">提现</router-link>
                    <li @click="isLogout()" class="transition-halfs">退出</li>
                </ul>
            </div>
            <div class="header-menu">
                <div class="fa fa-bars header-menu-icon" ref="menuicon"></div>
                <ul class="header-menu-list" ref="menu">
                    <router-link tag="li" :to="{name:'index'}" active-class="active" class="transition-halfs">首页</router-link>
                    <router-link tag="li" :to="{name:'buy'}" active-class="active" class="transition-halfs">买推荐</router-link>
                    <router-link tag="li" :to="{name:'rank'}" active-class="active" class="transition-halfs">排行榜</router-link>
                    <router-link tag="li" :to="{name:'publish'}" active-class="active" class="transition-halfs">发推荐</router-link>
                    <router-link tag="li" :to="{name:'score'}" active-class="active" class="transition-halfs">比分</router-link>
                    <!-- <li>优惠活动</li> -->
                    <router-link tag="li" :to="{name:'help'}" active-class="active" class="transition-halfs">使用帮助</router-link>
                    <li class="transition-halfs for-icon" @click="showLogin()" v-if="!isLogined">登录</li>
                    <router-link tag="li" :to="{name:'register'}" class="transition-halfs for-icon" v-if="!isLogined">注册</router-link>
                </ul>
            </div>
            <!-- <div class="visitor-operation">
                <p>登录</p>
                <p>注册</p>
            </div> -->
        </nav>
    </header>
</template>
<script>
import Vue from 'vue'
import sysUtil from 'web/common/utils/sysUtil.js'
import pathUtil from 'web/common/utils/pathUtil.js'
import { MessageBox } from 'element-ui';
import comVue from 'web/modules/commonVue.js'
import service from 'web/modules/business/index/services/indexService.js'

export default {
    data(){
        return {
            isLogined:false,
            logoUrl:pathUtil.getStaticPath()+"system/logo.jpg",
            avatarUrl:'',
        }
    },
    mounted(){
        var that = this;
        $(document).on('click touchend',function(e){
            that.showMenu(e,that.$refs.menuicon,that.$refs.menu);
            that.showMenu(e,that.$refs.usericon,that.$refs.userlist);
        });
        //监听是否已登录
        comVue.$on('login-for-menu',(data)=>{
            this.isLogined = data;
            if(this.isLogined){
                if( !data.faceUrl ){
                    data.faceUrl="avatar/default.jpg";
                }
                this.avatarUrl=pathUtil.getStaticPath()+data.faceUrl;
            };
        })
    },
    methods:{
        showMenu(e,clickObj,showObj){
            e.stopPropagation();
            if(!clickObj || !showObj)return;
            var $menu = $(showObj);
            var path = e.path || e.originalEvent.path;
            if(e.target != clickObj&&$menu.find(e.target).length<1){
                $menu.removeClass('menu-show');
                return;
            }else{
                if($menu.find(e.target).length>0)return;
            }
            if($menu.hasClass('menu-show')){
                $menu.removeClass('menu-show');
            }else{
                $menu.addClass('menu-show');
            }
            e.preventDefault();
        },
        showUserMenu(e){
             this.showMenu(e,this.$refs.usericon,this.$refs.userlist);
        },
        showLogin(){
            sysUtil.showLogin();
        },
        isLogout(){
            MessageBox.confirm('是否退出登录','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning',
                center:true,
                lockScroll:false
            }).then(()=>{
                return service.logout();
            }).then((ret)=>{
                // console.log(ret);
                if(ret.status=='success'){
                    comVue.$data.userInfo = null;
                    this.isLogined = false;
                    comVue.$emit('is-manage-for-menu');
                    comVue.$emit('login-for-sysUtil',false);
                    this.$router.push({name:'index'});
                }else{
                    alert("退出登录失败！")
                }
            }).catch(()=>{});
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
