import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getRecommendList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/recommendRecord',obj)
                .then((ret)=>{
                return ret.data;
                });
                },

}