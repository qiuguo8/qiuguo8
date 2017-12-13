
import comVue from 'web/modules/commonVue.js'

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

        $(window).scrollTop(0);
    });
    router.beforeEach((to, from, next) => {
        var userInfo = comVue.$data.userInfo;
        //权限管理，如果没登录或者是普通用户不能访问相关管理页面
        //如果没有登录，则不能访问个人中心相关页面
        if(!userInfo||userInfo == '01'){
            var matched = to.matched;
            for(var i = 0,len=matched.length;i<len;i++){
                if(matched[i].name == 'manager-center'){
                    next({name:'index'});
                    return;
                }
            }
        }
        if(!userInfo){
            for(var i = 0,len=matched.length;i<len;i++){
                if(matched[i].name == 'person-center'){
                    next({name:'index'});
                    return;
                }
            } 
        }
        next();
    })
}


export default routerUtil;