import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    orderUnder(buyRecommInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/order/orderUnder',buyRecommInfo);
    },

}