import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';


export default {
    logout(){
        return Vue.http.post(pathUtil.getBasePath()+'/login/logout').then(function(ret){
            return ret.body;
        })
    }
}