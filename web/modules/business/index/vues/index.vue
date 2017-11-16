<template>
    <div class="index-container container">
        <router-view></router-view>
        <login-form></login-form>
        <div class="goTop hide" @click="goTop()" ref="goTop"><i class="fa fa-chevron-up"></i></div>
    </div>
</template>
<script>
import loginForm from 'web/modules/common/user/vues/login.vue'


export default{
    components:{
        loginForm:loginForm
    },
    mounted(){
        var $goTop = $(this.$refs.goTop);
        $(window).on('scroll',function(){
            if($(window).scrollTop()>100){
                $goTop.removeClass('hide');
            }else{
                $goTop.addClass('hide');
            }
        })
    },
    methods:{
        goTop(){
            $(window).scrollTop(0);
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
