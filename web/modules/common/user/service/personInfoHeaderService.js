import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getQgAvailableBalance(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/qgAvailableBalance',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    submitPersonalSign(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/changePersonSign',obj)
                .then((ret)=>{
                return ret.data;
                });
    },
    modifyAvatar(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/modifyAvatar',obj)
                .then((ret)=>{
                return ret.data;
                });
    }

}