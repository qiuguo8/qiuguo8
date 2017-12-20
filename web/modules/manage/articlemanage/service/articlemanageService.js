import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAllContent(content){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAllContent',content);
    },
    updateContent(content){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateContent',content);
    },
    addContent(content){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/addContent',content);
    }

}