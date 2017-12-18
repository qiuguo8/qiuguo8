import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';


export default {
    logout(){
        return Vue.http.post(pathUtil.getBasePath()+'/login/logout').then(function(ret){
            return ret.body;
        })
    },
    queryHotRank(){
        return Vue.http.post(pathUtil.getBasePath()+'/index/getHotRank');
    },
    queryLongHuRank(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/index/getLongHuRank',obj);
    },
    queryBanner(){
        return Vue.http.post(pathUtil.getBasePath()+'/index/getBanners');
    },
    queryContent(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/index/getContents',obj);
    },


}