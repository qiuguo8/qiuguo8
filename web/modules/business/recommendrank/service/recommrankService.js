import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';


export default {
    getLastThreeDayRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastThreeDayRankList',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    lastSevenDayRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastSevenDayRankList',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    lastThirtyDayRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastThirtyDayRankList',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    getLastWeekRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastWeekRankList',obj)
                .then((ret)=>{
                return ret.data;
                });
                },      
    getLastMonthRankList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/rankList/lastMonthRankList',obj)
        .then((ret)=>{
        return ret.data;
        });
    }      
}