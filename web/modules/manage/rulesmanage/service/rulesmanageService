import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryLevelRules(rule){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryLevelRules',rule);
    },
    queryStarLevelRules(rule){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryStarLevelRules',rule);
    },
    queryPriceRules(rule){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryPriceRules',rule);
    },
    queryReceiptRules(rule){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryReceiptRules',rule);
    },

}