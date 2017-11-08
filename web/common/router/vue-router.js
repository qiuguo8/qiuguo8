

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
        }]
    }
];


export default routes;