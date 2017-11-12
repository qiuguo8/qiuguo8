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
            console.log(value);
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isAllLegalString(value)){
                    callback(new Error(mess));
                }
            }
            callback();
        }
    }
}

export default formUtil;