<template>
    <header class="header-container">
        <nav class="el-col el-col-18 el-col-offset-3">
            <div class="header-logo-wrap">
                <img src="/web/resources/img/index/logo.jpg"/>
            </div>
            <div class="user-info" v-if="false">
                <span class="msg-tip">11</span>
                <div class="user-img-wrap" ref="usericon">
                    <img src="/web/resources/img/index/user-img.png">
                </div>
                <ul class="user-menu-list" ref="userlist">
                    <li class="transition-halfs">个人中心</li>
                    <li class="transition-halfs">我的关注</li>
                    <li class="transition-halfs">关注发单</li>
                    <li class="transition-halfs">我的消息</li>
                    <li class="transition-halfs">充值</li>
                    <li class="transition-halfs">提现</li>
                    <li class="transition-halfs">退出</li>
                </ul>
            </div>
            <div class="header-menu">
                <div class="el-icon-menu header-menu-icon" ref="menuicon"></div>
                <ul class="header-menu-list" ref="menu">
                    <router-link tag="li" :to="{name:'business-index'}" active-class="active" class="transition-halfs">首页</router-link>
                    <router-link tag="li" :to="{name:'buy-recommend'}" active-class="active" class="transition-halfs">买推荐</router-link>
                    <router-link tag="li" :to="{name:'recommend-rank'}" active-class="active" class="transition-halfs">排行榜</router-link>
                    <router-link tag="li" :to="{name:'send-recommend'}" active-class="active" class="transition-halfs">发推荐</router-link>
                    <router-link tag="li" :to="{name:'in-time-goal'}" active-class="active" class="transition-halfs">即时比分</router-link>
                    <!-- <li>优惠活动</li> -->
                    <li class="transition-halfs">使用帮助</li>
                    <li class="transition-halfs">登录</li>
                    <router-link tag="li" :to="{name:'register'}" class="transition-halfs">注册</router-link>
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
export default {
    data(){
        return {
        }
    },
    mounted(){
        var that = this;
        $(document).on('click touchend',function(e){
            that.showMenu(e,that.$refs.menuicon,that.$refs.menu);
            that.showMenu(e,that.$refs.usericon,that.$refs.userlist);
        });
    },
    methods:{
        showMenu(e,clickObj,showObj){
            // console.log(e,e.target != clickObj,e.target,showObj,clickObj);
            var $menu = $(showObj);
            var path = e.path || e.originalEvent.path
            if(e.target != clickObj&&path.indexOf(clickObj)<0){
                $menu.removeClass('menu-show');
                return;
            }
            if($menu.hasClass('menu-show')){
                $menu.removeClass('menu-show');
            }else{
                $menu.addClass('menu-show');
            }
        },
        showUserMenu(e){
             this.showMenu(e,this.$refs.usericon,this.$refs.userlist);
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
