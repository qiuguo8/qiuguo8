import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    listAllMatchInfo(matchInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/listAllMatchInfo',matchInfo);
    },
    updateMatchInfoByAdmin(matchInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateMatchInfoByAdmin',matchInfo);
    },

}