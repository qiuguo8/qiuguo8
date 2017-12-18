import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getUnReadMessageList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/myMessages',obj)
                .then((ret)=>{
                return ret.data;
                });
                },

}