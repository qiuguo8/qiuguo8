import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAccount(){
        return Vue.http.post(pathUtil.getBasePath()+'/account/queryAccount');
    },
    initWithdraw(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/account/initWithdraw',obj);
    }
}