import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryChangeDetail(detail){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryChangeDetail',detail);
    }

}