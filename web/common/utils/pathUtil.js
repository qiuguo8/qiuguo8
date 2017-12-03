const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

var curEnv = DEVELOPMENT;
var basePath = location.origin;

if(curEnv === DEVELOPMENT){
    basePath += '/qiuguo8'; 
}

export default {
    getBasePath(){
        return basePath;
    }
};