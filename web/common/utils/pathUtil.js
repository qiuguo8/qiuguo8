const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

var curEnv = DEVELOPMENT;
var origin = location.origin;
var basePath = origin;
var sataticPath = "http://120.79.65.250/";

if(curEnv === DEVELOPMENT){
    basePath += '/qiuguo8'; 
}

export default {
    getBasePath(){
        return basePath;
    },
    getOriginPath(){
        return origin;
    },
    getStaticPath(){
        return sataticPath;
    }
};