import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    listAllOrderInfo(orderInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/listAllOrderInfo',orderInfo);
    },
    updateOrderInfoByAdmin(orderInfo){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateTcOrderInfoByAdmin',orderInfo);
    },

}