

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
            name:'business-index',
            component:resolve => require(['modules/business/index/vues/businessIndex.vue'],resolve)
        },
        {
            path:'/buy-recommend',
            name:'buy-recommend',
            component:resolve => require(['modules/business/buyrecommend/vues/buyrecommend.vue'],resolve)
        },
        {
            path:'/recommend-rank',
            name:'recommend-rank',
            component:resolve => require(['modules/business/recommendrank/vues/recommendrank.vue'],resolve)
        },
        {
            path:'/send-recommend',
            name:'send-recommend',
            component:resolve => require(['modules/business/sendrecommend/vues/sendrecommend.vue'],resolve)
        }
        ]
    }
];


export default routes;