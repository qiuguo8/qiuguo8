import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';


export default {
    queryMatch(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/match/listDataMatchInfo',obj);
    }
}