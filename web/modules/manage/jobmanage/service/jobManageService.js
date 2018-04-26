import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    refreshTrigger(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/refreshTrigger');
    },
    runLotteryJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runLotteryJob');
    },
    runThreeDaysJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runThreeDaysJob');
    },
    runSevenDaysJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runSevenDaysJob');
    },
    runThrityDaysJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runThrityDaysJob');
    },
    runWeekRankJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runWeekRankJob');
    },
    runMonthRankJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runMonthRankJob');
    },
    runFiveRecordsJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runFiveRecordsJob');
    },
    runSerialHitJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runSerialHitJob');
    },
    runUnFreezeJob(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/runUnFreezeJob');
    },
}