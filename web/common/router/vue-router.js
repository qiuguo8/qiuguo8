

const routes = [
    {
        path:'/index.html',
        name:'index',
        components:{
            default:resolve => require(['modules/business/index/vues/index.vue'],resolve),
            header:resolve => require(['modules/business/index/vues/header.vue'],resolve),
            footer:resolve => require(['modules/business/index/vues/footer.vue'],resolve),
        },
        children:[{
            path:'/',
            redirect:'/index'
        },
        {
            path:'/register',
            name:'register',
            component:resolve => require(['modules/common/user/vues/register.vue'],resolve)
        },
        {
            path:'/help',
            name:'help',
            meta:{
                aliasName:'使用帮助'
            },
            component:resolve => require(['modules/business/common/vues/userguide.vue'],resolve)
        },
        {
            path:'/about-us',
            name:'about-us',
            meta:{
                aliasName:'关于我们'
            },
            component:resolve => require(['modules/business/common/vues/about-us.vue'],resolve)
        },
        {
            path:'/recruit',
            name:'recruit',
            meta:{
                aliasName:'网站招聘'
            },
            component:resolve => require(['modules/business/common/vues/recruit.vue'],resolve)
        },
        {
            path:'/index',
            name:'index',
            meta:{
                aliasName:'首页'
            },
            component:resolve => require(['modules/business/index/vues/businessIndex.vue'],resolve)
        },
        {
            path:'/buy',
            name:'buy',
            meta:{
                aliasName:'买推荐'
            },
            component:resolve => require(['modules/business/buyrecommend/vues/buyrecommend.vue'],resolve)
        },
        {
            path:'/rank',
            name:'rank',
            meta:{
                aliasName:'排行榜'
            },
            component:resolve => require(['modules/business/recommendrank/vues/recommendrank.vue'],resolve)
        },
        {
            path:'/publish',
            name:'publish',
            meta:{
                aliasName:'发推荐'
            },
            component:resolve => require(['modules/business/sendrecommend/vues/sendrecommend.vue'],resolve)
        },
        {
            path:'/score',
            name:'score',
            meta:{
                aliasName:'即时比分'
            },
            component:resolve => require(['modules/business/intimegoal/vues/intimegoal.vue'],resolve)
        },
        {
            path:'/order-detail',
            name:'order-detail',
            meta:{
                aliasName:'订单详情'
            },
            component:resolve => require(['modules/business/trade/vues/order-detail.vue'],resolve)
        },
        {
            path:'/recommender-info',
            name:'recommender-info',
            meta:{
                aliasName:'推荐师主页'
            },
            component:resolve => require(['modules/common/user/vues/recommender-info.vue'],resolve)
        },
        {
            path:'/manager-center',
            name:'manager-center',
            component:resolve => require(['modules/manage/managercenter/vues/managercenter.vue'],resolve),
            children:[
                {
                    path:'/',
                    redirect:'/manager-index'
                },
                {
                    path:'/manager-index',
                    name:'manager-index',
                    meta:{
                        aliasName:'管理员首页'
                    },
                    component:resolve => require(['modules/manage/managerIndex/vues/managerIndex.vue'],resolve),
                },
                {
                    path:'/user-manage',
                    name:'user-manage',
                    meta:{
                        aliasName:'用户管理'
                    },
                    component:resolve => require(['modules/manage/usermanage/vues/usermanage.vue'],resolve),
                },
                {
                    path:'/account-manage',
                    name:'account-manage',
                    meta:{
                        aliasName:'账户管理'
                    },
                    component:resolve => require(['modules/manage/accountmanage/vues/accountmanage.vue'],resolve),
                },
                {
                    path:'/fund-manage',
                    name:'fund-manage',
                    meta:{
                        aliasName:'资金变动管理'
                    },
                    component:resolve => require(['modules/manage/fundmanage/vues/fundmanage.vue'],resolve),
                },
                {
                    path:'/freeze-manage',
                    name:'freeze-manage',
                    meta:{
                        aliasName:'冻结管理'
                    },
                    component:resolve => require(['modules/manage/fundmanage/vues/freezemanage.vue'],resolve),
                },
                {
                    path:'/withdraw-manage',
                    name:'withdraw-manage',
                    meta:{
                        aliasName:'提现管理'
                    },
                    component:resolve => require(['modules/manage/fundmanage/vues/withdrawmanage.vue'],resolve),
                },
                {
                    path:'/recharge-manage',
                    name:'recharge-manage',
                    meta:{
                        aliasName:'充值管理'
                    },
                    component:resolve => require(['modules/manage/fundmanage/vues/rechargemanage.vue'],resolve),
                },
                {
                    path:'/match-manage',
                    name:'match-manage',
                    meta:{
                        aliasName:'比赛管理'
                    },
                    component:resolve => require(['modules/manage/matchmanage/vues/matchmanage.vue'],resolve),
                },
                {
                    path:'/recommend-manage',
                    name:'recommend-manage',
                    meta:{
                        aliasName:'推荐管理'
                    },
                    component:resolve => require(['modules/manage/recommendmanage/vues/recommendmanage.vue'],resolve),
                },
                {
                    path:'/order-manage',
                    name:'order-manage',
                    meta:{
                        aliasName:'订单管理'
                    },
                    component:resolve => require(['modules/manage/ordermanage/vues/ordermanage.vue'],resolve),
                },
                {
                    path:'/advertise-manage',
                    name:'advertise-manage',
                    meta:{
                        aliasName:'广告配置'
                    },
                    component:resolve => require(['modules/manage/advertisemanage/vues/advertisemanage.vue'],resolve),
                },
                {
                    path:'/advertise-edit',
                    name:'advertise-edit',
                    meta:{
                        aliasName:'广告编辑'
                    },
                    component:resolve => require(['modules/manage/advertisemanage/vues/advertise-edit.vue'],resolve),
                },
                {
                    path:'/article-manage',
                    name:'article-manage',
                    meta:{
                        aliasName:'文章管理'
                    },
                    component:resolve => require(['modules/manage/articlemanage/vues/articlemanage.vue'],resolve),
                },
                {
                    path:'/article-edit',
                    name:'article-edit',
                    meta:{
                        aliasName:'文章编辑'
                    },
                    component:resolve => require(['modules/manage/articlemanage/vues/article-edit.vue'],resolve),
                },
                {
                    path:'/rules-manage',
                    name:'rules-manage',
                    meta:{
                        aliasName:'规则管理'
                    },
                    component:resolve => require(['modules/manage/rulesmanage/vues/rulesmanage.vue'],resolve),
                },
            ]
        },
        {
            path:'/person-center',
            name:'person-center',
            component:resolve => require(['modules/common/user/vues/personcenter.vue'],resolve),
            children:[
                {
                    path:'/',
                    redirect:'/person-info'
                },
                {
                    path:'/person-info',
                    name:'person-info',
                    meta:{
                        aliasName:'个人中心'
                    },
                    component:resolve => require(['modules/common/user/vues/personinfo.vue'],resolve),
                },
                {
                    path:'/person-focus',
                    name:'person-focus',
                    meta:{
                        aliasName:'我的关注'
                    },
                    component:resolve => require(['modules/common/user/vues/personfocus.vue'],resolve),
                },
                {
                    path:'/person-message',
                    name:'person-message',
                    meta:{
                        aliasName:'我的消息'
                    },
                    component:resolve => require(['modules/common/user/vues/personmessage.vue'],resolve),
                },
                {
                    path:'/recommend-record',
                    name:'recommend-record',
                    meta:{
                        aliasName:'推荐记录'
                    },
                    component:resolve => require(['modules/common/user/vues/recommendrecord.vue'],resolve),
                },
                {
                    path:'/buy-record',
                    name:'buy-record',
                    meta:{
                        aliasName:'购买记录'
                    },
                    component:resolve => require(['modules/common/user/vues/buyrecord.vue'],resolve),
                },
                {
                    path:'/recharge',
                    name:'recharge',
                    meta:{
                        aliasName:'我要充值'
                    },
                    component:resolve => require(['modules/business/trade/vues/recharge.vue'],resolve),
                },
                {
                    path:'/withdraw',
                    name:'withdraw',
                    meta:{
                        aliasName:'我要提现'
                    },
                    component:resolve => require(['modules/business/trade/vues/withdraw.vue'],resolve),
                },
                {
                    path:'/money-flow-detail',
                    name:'money-flow-detail',
                    meta:{
                        aliasName:'资金明细'
                    },
                    component:resolve => require(['modules/common/user/vues/moneyflowdetail.vue'],resolve),
                },
                {
                    path:'/user-announce',
                    name:'user-announce',
                    meta:{
                        aliasName:'我要推广'
                    },
                    component:resolve => require(['modules/common/user/vues/announce.vue'],resolve),
                }
            ]
        }
        ]
    },
    { 
        path: '*', 
        redirect:'/index.html'
    }
];


export default routes