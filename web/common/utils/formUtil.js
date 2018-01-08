import validationUtil from './validationUtil'
import registerService from 'web/modules/common/user/service/registerService'

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
    isMobileNo(mess,callbackFn){
        return (rule,value,callback)=>{
            var error;
            if(!validationUtil.isNull(value)){
                if(!validationUtil.isMobileNo(value)){
                    error = new Error(mess)
                    callback(error);
                }
            }
            callback();
            callbackFn && callbackFn(error);
        }
    },
    checkUserNameRepeat(mess){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                var param = {'userName':value};
                registerService.userNameRepeat(param).then((ret)=>{
                    if(ret.body.result){
                        callback(new Error(mess));
                    }
                    callback();
                })
            }
        }
    },
    checkPhoneRepeat(mess,successCb,notRegis){
        return (rule,value,callback)=>{
            if(!validationUtil.isNull(value)){
                var error;
                var param = {'phone':value};
                registerService.phoneRepeat(param).then((ret)=>{
                    error = new Error(mess);
                    if(ret.body.result){
                        callback(!notRegis ? error : '');
                        notRegis && successCb && successCb(error);
                    }
                    !notRegis && successCb && successCb(error);
                    callback(notRegis ? error : '');
                })
            }
        }
    },
    SamePassCheck(scope,formName,propName,flagPropName,mess,isFirst){
        return (rule,value,callback)=>{
            var prop = scope[formName][propName];
            if(!validationUtil.isNull(prop)){
                if(prop!=value){
                    scope[flagPropName] = false;
                    !isFirst ? callback(new Error(mess)) : scope.$refs[formName].validateField(propName);
                }else{
                    if(!scope[flagPropName]){
                        scope[flagPropName] = true;
                        scope.$refs[formName].validateField(propName);
                    }
                    callback();
                }
            }
            callback();
        }
    },
}

export default formUtil;