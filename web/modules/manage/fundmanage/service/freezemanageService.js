import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAllFreezeDetail(detail){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAllFreezeDetail',detail);
    },
    unFreeze(detail){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/unFreeze',detail);
    }

}