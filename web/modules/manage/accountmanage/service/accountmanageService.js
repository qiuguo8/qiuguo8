import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAccountInfos(accountInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAccountInfos',accountInfo);
    }

}