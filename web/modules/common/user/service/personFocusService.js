import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getUnReadMessageList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/myFollows',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    cancleFocus(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userInfo/cancelUserSubscribe',obj)
                .then((ret)=>{
                return ret.data;
                });
                },

}