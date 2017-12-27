
import validationUtil from './validationUtil.js'
import comVue from 'web/modules/commonVue.js'
import loginService from 'web/modules/common/user/service/loginService.js'

const sysUtil = {
    checkLoginForBiz(fn){
        loginService.isLogined().then((ret)=>{
            if(ret.status == 'success'){
                var result = fn && fn();
                comVue.$emit('login-for-menu',ret.user);
                if(result && (typeof result === 'Promise' || typeof result.then === 'function')){
                    return result;
                }else{
                    return ret;
                }
            }else{
                comVue.$emit('show-login-form');
                comVue.$emit('login-for-menu',false);
                comVue.$data.userInfo = null;
                return ret;
            }
        })
    },
    showLogin(){
        comVue.$emit('show-login-form');
    },
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
    saveCookie(name,value,expires){
        name = encodeURIComponent(name);
        value = encodeURIComponent(value);
        expires = 60*60*24*(expires||1);
        document.cookie = name+'='+value+';expires='+(new Date()+expires);
    },
    getCookie(name){
        name = name || '';
        var regTmp = '(\\\s)?'+name+'\={1}([^;]*)(\\\s|;)?';
        var reg = new RegExp(regTmp,'g');
        var result = reg.exec(document.cookie);
        return result && result[2];
    },
    param(){
        
    }
}

export default sysUtil;