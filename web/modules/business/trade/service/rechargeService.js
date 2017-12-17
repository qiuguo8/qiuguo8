import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryUserName(){
        return Vue.http.post(pathUtil.getBasePath()+'/account/queryUserName');
    },
    initRecharge(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/account/initRecharge',obj);
    }
}