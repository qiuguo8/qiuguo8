import pathUtil from "../../../../common/utils/pathUtil";
import Vue from 'vue';

export default {
    queryContent(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/index/getContent',obj)
            .then((ret)=>{
          return ret.data;
        });
    },
    queryContentList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/index/listContents',obj).then((ret)=>{
                return ret.data;
            });
    },
    pageContentList(obj){
        return Vue.http.post(pathUtil.getBasePath()+'/index/pageContents',obj).then((ret)=>{
                return ret.data;
            });
    },
}