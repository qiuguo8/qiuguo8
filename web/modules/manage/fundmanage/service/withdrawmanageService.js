import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAllWithDrawDetails(detail){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAllWithdrawDetail',detail);
    },
    approve(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/approveWithdraw',obj);
    }

}