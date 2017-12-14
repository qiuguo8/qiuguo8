import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAllRechargeDetails(detail){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAllRechargeDetail',detail);
    }

}