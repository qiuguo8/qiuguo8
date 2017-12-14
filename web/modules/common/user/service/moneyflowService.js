import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryChangeDetails(changeDetail){
        return Vue.http.post(pathUtil.getBasePath()+'/account/queryChangeDetails',changeDetail);
    }

}