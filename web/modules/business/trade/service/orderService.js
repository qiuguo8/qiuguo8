import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    orderUnder(buyRecommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/order/orderUnder',buyRecommInfo);
    },
    pageRecentRecomm(item){
        return Vue.http.post(pathUtil.getBasePath()+'/buyRecomm/pageRecentRecomm',item);
    },
    buyRecommDetails(item){
        return Vue.http.post(pathUtil.getBasePath()+'/buyRecomm/buyRecommDetails',item);
    },
    listSameFieldRecomm(item) {
        return Vue.http.post(pathUtil.getBasePath() + '/buyRecomm/listSameFieldRecomm', item);
    },
    userInfo(item){
        return Vue.http.post(pathUtil.getBasePath() + '/buyRecomm/recommUserInfo', item);
    }
}