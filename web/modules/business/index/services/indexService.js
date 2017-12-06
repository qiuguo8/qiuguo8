import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';


export default {
    getRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastThreeDayRankList',obj);
    }
}