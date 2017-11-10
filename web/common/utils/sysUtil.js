
import validationUtil from './validationUtil.js'

const sysUtil = {
    setNotNullAttrToObj(from,to){
        if(!from || !to)return;
        for(var i in from){
            if(!validationUtil.isNull(from[i])){
                to[i] = from[i];
            }
        }
    },
    setAllAttrToObj(from,to){
        if(!from || !to)return;
        for(var i in from){
            if(from[i]){
                to[i] = from[i];
            }
        }
    },
}

export default sysUtil;