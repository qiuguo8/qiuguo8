
function routerUtil(router){
    if(!router || typeof router != 'object' || router instanceof VueRouter !== true)return;
    window.VueRouter = null; 
    var title = '球果吧-';
    router.afterEach((to,from)=>{
        if(to.meta.aliasName){
            document.title = title+to.meta.aliasName;
        }else{
            document.title = "球果吧";
        }
    })
}


export default routerUtil;