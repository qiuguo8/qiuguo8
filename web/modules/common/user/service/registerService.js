import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    register(userBase){
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/register',userBase);
    }

}