
import validationUtil from './validationUtil.js'
import comVue from 'web/modules/commonVue.js'
import loginService from 'web/modules/common/user/service/loginService.js'

var userInfo; //判断是否登录的标识
//监听是否登录
comVue.$on('login-for-menu',(data)=>{
    userInfo = data;
})
comVue.$on('login-for-sysUtil',(data)=>{
    userInfo = data;
})

const sysUtil = {
    checkLoginForBiz(fn){
        if(userInfo){
            var result = fn && fn();
            // if(result && (typeof result === 'Promise' || typeof result.then === 'function')){
            //     return result;
            // }
        }else{
            comVue.$emit('show-login-form');
        }
        return !!userInfo;
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