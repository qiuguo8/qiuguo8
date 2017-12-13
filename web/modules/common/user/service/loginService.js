import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    loginByUserName(userBase){
        return Vue.http.post(pathUtil.getBasePath()+'/login/loginByUserName',userBase);
    },
    loginByPhone(param){
        return Vue.http.post(pathUtil.getBasePath()+'/login/loginByPhone',param);
    },
    isLogined(){
        return Vue.http.post(pathUtil.getBasePath()+'/login/checkLogin').then(function(ret){
            return ret.data;
        });
    }
}