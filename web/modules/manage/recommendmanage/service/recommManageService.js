import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    listAllRecomm(recommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/listAllRecomm',recommInfo);
    },
    updateRecommByAdmin(recommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateRecommByAdmin',recommInfo);
    },

}