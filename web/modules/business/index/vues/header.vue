<template>
    <header class="header-container">
        <nav class="el-col el-col-18 el-col-offset-3">
            <div class="header-logo-wrap">
                <img src="/web/resources/img/index/logo.jpg"/>
            </div>
            <div class="user-info" v-show="false">
                <span class="msg-tip">11</span>
                <div class="user-img-wrap">
                    <img src="/web/resources/img/index/user-img.png">
                </div>
                <ul></ul>
            </div>
            <!-- <div class="visitor-operation">
                <p>登录</p>
                <p>注册</p>
            </div> -->
            <div class="header-menu">
                <div class="el-icon-menu header-menu-icon" ref="menuicon"></div>
                <ul class="header-menu-list" ref="menu">
                    <router-link tag="li" :to="{name:'business-index'}" class="transition-halfs">首页</router-link>
                    <li class="transition-halfs">发推荐</li>
                    <li class="transition-halfs">排行榜</li>
                    <li class="transition-halfs">买推荐</li>
                    <li class="transition-halfs">即时比分</li>
                    <!-- <li>优惠活动</li> -->
                    <li class="transition-halfs">使用帮助</li>
                    <li class="transition-halfs">登录</li>
                    <li class="transition-halfs">注册</li>
                </ul>
            </div>
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
        $(document).on('click',function(e){
            that.showMenu(e);
        });
    },
    methods:{
        showMenu(e){
            var $menu = $(this.$refs.menu);
            if(e.target != this.$refs.menuicon){
                $menu.removeClass('menu-show');
                return;
            }
            if($menu.hasClass('menu-show')){
                $menu.removeClass('menu-show');
            }else{
                $menu.addClass('menu-show');
            }
        },
    }
}
</script>
<style lang="stylus" scoped>

</style>
