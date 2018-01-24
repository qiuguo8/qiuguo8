<template>
    <div class="manager-center">
        <ul class="left-menu transition-halfs float-left">
            <router-link tag="li" :to="{name:'manager-index'}" active-class="active" class="transition-halfs">管理员首页</router-link>
            <router-link tag="li" :to="{name:'user-manage'}" active-class="active" class="transition-halfs">用户管理</router-link>
            <router-link tag="li" :to="{name:'account-manage'}" active-class="active" class="transition-halfs">账户管理</router-link>
            <router-link tag="li" :to="{name:'fund-manage'}" active-class="active" class="transition-halfs">资金变动管理</router-link>
            <router-link tag="li" :to="{name:'freeze-manage'}" active-class="active" class="transition-halfs">冻结管理</router-link>
            <router-link tag="li" :to="{name:'recharge-manage'}" active-class="active" class="transition-halfs">充值管理</router-link>
            <router-link tag="li" :to="{name:'withdraw-manage'}" active-class="active" class="transition-halfs">提现管理</router-link>
            <router-link tag="li" :to="{name:'match-manage'}" active-class="active" class="transition-halfs">比赛管理</router-link>
            <router-link tag="li" :to="{name:'recommend-manage'}" active-class="active" class="transition-halfs">推荐管理</router-link>
            <router-link tag="li" :to="{name:'order-manage'}" active-class="active" class="transition-halfs">订单管理</router-link>
            <router-link tag="li" :to="{name:'advertise-manage'}" active-class="active" class="transition-halfs">广告配置</router-link>
            <router-link tag="li" :to="{name:'article-manage'}" active-class="active" class="transition-halfs">文章管理</router-link>
            <router-link tag="li" :to="{name:'job-manage'}" active-class="active" class="transition-halfs">调度任务管理</router-link>
            <router-link tag="li" :to="{name:'rules-manage'}" active-class="active" class="transition-halfs">规则管理</router-link>
            <div class="left-side-btn hor-ver-mid">后台管理菜单</div>
        </ul>
        <div class="content-wrap content-75-to-100 float-left">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
