import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    register(userBase){
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/register',userBase);
    },
    userNameRepeat(param){
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/nameRepeatFlag',param);
    },
    phoneRepeat(param){
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/phoneRepeatFlag',param);
    },
    phoneExist(param){
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/phoneExistFlag',param);
    },
    updatePass(param){
        return Vue.http.post(pathUtil.getBasePath()+'/userInfo/updataPass',param);
    },

}