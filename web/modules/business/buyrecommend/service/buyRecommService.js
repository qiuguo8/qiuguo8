import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    listRecom(buyRecommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/buyRecomm/listBuyRecommDetails',buyRecommInfo);
    },
    listMyAttion(buyRecommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/buyRecomm/listBuyRecommDetailsMyAttion',buyRecommInfo);
    },
    addUserSubscribe(item){
        return Vue.http.post(pathUtil.getBasePath()+'/userInfo/addUserSubscribe',item);
    },
    buyRecommDetails(item){
        return Vue.http.post(pathUtil.getBasePath()+'/buyRecomm/buyRecommDetails',item);
    },
    cancelUserSubscribe(item){
        return Vue.http.post(pathUtil.getBasePath()+'/userInfo/cancelUserSubscribe',item);
    },
}