const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

var curEnv = DEVELOPMENT;
var origin = location.origin;
var basePath = origin;

if(curEnv === DEVELOPMENT){
    basePath += '/qiuguo8'; 
}

export default {
    getBasePath(){
        return basePath;
    },
    getOriginPath(){
        return origin;
    }
};