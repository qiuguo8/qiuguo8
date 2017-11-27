import validationUtil from './validationUtil'


const formUtil = {
    isChecked(mess){
        return function(rule,value,callback){
            if(value===true){
                callback();
                return;
            }
            callback(new Error(mess))
        }
    },
    maxSize(size,mess){
        return (rule,value,callback)=>{
            var error = null;
            var str = value+'';
            if(!validationUtil.isNull(str)){
                if(str.length>size){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    },
    isLegalName(mess){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isAllLegalString(value)){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    },
    isMoney(mess){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isMoney(value)){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    },
    isNumber(mess){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isNumber(value)){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    },
    isMobileNo(mess){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isMobileNo(value)){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    }
}

export default formUtil;