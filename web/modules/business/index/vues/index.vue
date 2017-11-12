<template>
    <div class="index-container container">
        <router-view></router-view>
        <login-form></login-form>
    </div>
</template>
<script>
import loginForm from 'web/modules/common/user/vues/login.vue'


export default{
    components:{
        loginForm:loginForm
    }
}
</script>
<style lang="stylus" scoped>

</style>
