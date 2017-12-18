import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getBuyRecordList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/buyRecord',obj)
                .then((ret)=>{
                return ret.data;
                });
                },

}