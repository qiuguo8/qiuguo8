import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryBizData(){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryBizData');
    }

}