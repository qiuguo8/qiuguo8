import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    queryAllBanner(banner){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/queryAllBanner',banner);
    },
    updateBanner(banner){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/updateBanner',banner);
    },
    addBanner(banner){
        return Vue.http.post(pathUtil.getBasePath()+'/admin/addBanner',banner);
    }

}