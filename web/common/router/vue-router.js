

const routes = [
    {
        path:'/',
        name:'index',
        components:{
            default:resolve => require(['modules/business/index/vues/index.vue'],resolve),
            header:resolve => require(['modules/business/index/vues/header.vue'],resolve),
            footer:resolve => require(['modules/business/index/vues/footer.vue'],resolve),
        },
        children:[{
            path:'/',
            name:'visitor-index',
            redirect:'/business-index'
        },
        {
            path:'/register',
            name:'register',
            component:resolve => require(['modules/common/user/vues/register.vue'],resolve)
        },
        {
            path:'/business-index',
            name:'business-index',
            meta:{
                aliasName:'首页'
            },
            component:resolve => require(['modules/business/index/vues/businessIndex.vue'],resolve)
        },
        {
            path:'/buy-recommend',
            name:'buy-recommend',
            meta:{
                aliasName:'买推荐'
            },
            component:resolve => require(['modules/business/buyrecommend/vues/buyrecommend.vue'],resolve)
        },
        {
            path:'/recommend-rank',
            name:'recommend-rank',
            meta:{
                aliasName:'排行榜'
            },
            component:resolve => require(['modules/business/recommendrank/vues/recommendrank.vue'],resolve)
        },
        {
            path:'/send-recommend',
            name:'send-recommend',
            meta:{
                aliasName:'发推荐'
            },
            component:resolve => require(['modules/business/sendrecommend/vues/sendrecommend.vue'],resolve)
        },
        {
            path:'/in-time-goal',
            name:'in-time-goal',
            meta:{
                aliasName:'即时比分'
            },
            component:resolve => require(['modules/business/intimegoal/vues/intimegoal.vue'],resolve)
        },
        {
            path:'/person-center',
            name:'person-center',
            component:resolve => require(['modules/common/user/vues/personcenter.vue'],resolve),
            children:[
                {
                    path:'/',
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
                    path:'/money-flow-detail',
                    name:'money-flow-detail',
                    meta:{
                        aliasName:'资金明细'
                    },
                    component:resolve => require(['modules/common/user/vues/moneyflowdetail.vue'],resolve),
                }
            ]
        }
        ]
    }
];


export default routes