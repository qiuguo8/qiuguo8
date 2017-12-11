import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    listAllUser(userInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/listAllUser',userInfo);
    },
    updateUser(userInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateUserInfoByAdmin',userInfo);
    },

}