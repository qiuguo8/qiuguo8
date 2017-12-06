import Vue from "vue";
import pathUtil from "web/common/utils/pathUtil";


export default {
    createPhoneCode(info){ //info对象包括手机号码和短信类型REGISTER-注册，LOGIN-登录，RESET-找回密码，WITHDRAWALS-提现
        return Vue.http.post(pathUtil.getBasePath()+'/registerUser/createPhoneCode',info);
    }

}