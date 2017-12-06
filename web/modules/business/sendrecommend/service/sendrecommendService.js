import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getLeagueInfo(league){
        return Vue.http.post(pathUtil.getBasePath()+'/publishRecomm/listDataLeagueInfo',league);
    },
    getMatchesInfo(match){
        return Vue.http.post(pathUtil.getBasePath()+'/publishRecomm/listMatchInfo',match);
    }

}