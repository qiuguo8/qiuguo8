import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    getRecordList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/recordList',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    getRecommendRecord(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/recommendRecord',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    getSecurityInformation(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/securityInformation',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    modifyPassWord(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/modifyPassWord',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
    modifyTradePassWord(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/userCenter/modifyTradePassWord',obj)
                .then((ret)=>{
                return ret.data;
                });
                },
}