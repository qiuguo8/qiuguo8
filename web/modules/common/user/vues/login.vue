<template>
    <el-dialog @open="commonLogin()" @close="close()" title="用户登录" :lock-scroll="false" custom-class="login-dialog" :visible.sync="dialogFormVisible" width="340px">
        <div class="login-form" v-show="isCommon" @keyup.enter="loginByUserName()">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
                <el-form-item label="用户名" prop="userName" label-width="80px">
                    <el-input v-model="loginForm.userName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" label-width="80px">
                    <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="checkCode" label-width="80px">
                    <div class="el-col-12">
                        <el-input v-model="loginForm.checkCode" auto-complete="off"></el-input>
                    </div>
                    <img @click="getImgCode()" :src="'data:image/jpg;base64,'+imgCode" style="cursor:pointer;float:left;width:85px;height:40px;margin-left:10px"/>
                </el-form-item>
                <el-form-item label-width="80px" prop="isAuto">
                    <a class="miss-pass" @click="updatePass()">忘记密码?</a>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="dialogFormVisible = false" style="margin-right:30px">取 消</el-button>
                <el-button type="primary" @click="loginByUserName()">确 定</el-button>
            </div>
        </div>
        <div class="login-form" v-if="isMobile" @keyup.enter="loginByPhone()">
            <el-form :model="mloginForm" status-icon :rules="rules2" ref="mloginForm">
                <el-form-item label="手机号码" prop="phone" label-width="100px">
                    <el-input v-model="mloginForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="checkCode" label-width="100px">
                    <div class="el-col-12">
                        <el-input v-model="mloginForm.checkCode" auto-complete="off"></el-input>
                    </div>
                    <img @click="getImgCode()" :src="'data:image/jpg;base64,'+imgCode" style="cursor:pointer;float:left;width:80px;height:40px;margin-left:5px"/>
                </el-form-item>
                <el-form-item label="短信验证码" prop="phoneCode" label-width="100px">
                    <div>
                        <el-input type="text" v-model="mloginForm.phoneCode" auto-complete="off"></el-input>
                    </div>
                    <el-button style="margin-top:10px"  :disabled="!isCountOver||!isMobileValid||!isCheckCodeValid" @click="getMessCode()">{{countTxt}}</el-button>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="dialogFormVisible = false" style="margin-right:5px">取 消</el-button>
                <el-button type="primary" @click="loginByPhone()">确 定</el-button>
            </div>
        </div>
        <div class="weixin-login-code login-img" v-if="isWXlogin">
            <img src=""/>
        </div>
        <div slot="footer" class="dialog-footer">
            <div class="other-login">
                <label>登录方式:</label>
                
                <el-tooltip class="item" effect="dark" content="微信登录" placement="top">
                    <span @click="wxLogin()"><i class="fa fa-weixin"></i></span>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="手机登录" placement="top">
                    <span @click="mobileLogin()" style="font-size:25px;position:relative;top:3px"><i class="fa fa-mobile-phone"></i></span>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="账号登录" placement="top">
                    <span @click="commonLogin()"><i class="fa fa-edit"></i></span>
                </el-tooltip>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import Vue from 'vue'
import 'web/common/utils/pVerify.js'
import {Dialog,Form,Input,FormItem,Button,Checkbox,Tooltip,Message} from 'element-ui'
import formUtil from 'web/common/utils/formUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import comVue from 'web/modules/commonVue.js'
import loginService from 'web/modules/common/user/service/loginService'
import messCodeUtil from 'web/common/utils/messCodeUtil'
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(Input.name,Input);
Vue.component(FormItem.name,FormItem);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);
Vue.component(Tooltip.name,Tooltip);

export default {
    data(){
        return {
            dialogFormVisible:false,
            isCommon:true,
            isQQlogin:false,
            isWXlogin:false,
            isMobile:false,
            loginForm:{
                userName:'',
                password:'',
                checkCode:'',
                isAuto:false,
            },
            mloginForm:{
                phoneCode:'',
                phone:'',
                checkCode:'',
                type:'LOGIN'
            },
            rules: {
                userName: [
                    {required: true, message: '用户名不能为空', trigger: 'blur change'},
                    {validator: formUtil.maxSize(20, '用户名长度不能超过20'), trigger: 'blur change'},
                    {validator: formUtil.isLegalName('用户名只能由英文、数字和中文组成'), trigger: 'blur change'}
                ],
                password: [
                    {required: true, message: '密码不能为空', trigger: 'change blur'},
                    {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'}
                ],
                checkCode: [
                    {required: true, message: '验证码不能为空', trigger: 'change blur'},
                    {validator: formUtil.isNumber('验证码必须为数字'), trigger: 'change blur'},
                    {type: 'number', validator: formUtil.maxSize(4, '验证码长度等于4'), trigger: 'blur change'},
                    {validator: this.validateCode('loginForm'), trigger: 'change'},
                ],
                isAuto: [
                    {type: 'boolean', trigger: 'change'}
                ]
            },
            rules2:{
                phone:[
                    {required:true,message:'手机号码不能为空',trigger:'change blur'},
                    {validator:formUtil.isMobileNo("手机号码格式不正确",this.canClickSend),trigger:'change blur'}
                ],
                phoneCode:[
                    {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                    {validator:formUtil.isNumber('验证码必须为数字'),trigger:'change blur'},
                    {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
                ],
                checkCode: [
                    {required: true, message: '验证码不能为空', trigger: 'change blur'},
                    {validator: formUtil.isNumber('验证码必须为数字'), trigger: 'change blur'},
                    {type: 'number', validator: formUtil.maxSize(4, '验证码长度等于4'), trigger: 'blur change'},
                    {validator: this.validateCode('mloginForm'), trigger: 'change'},
                ],
            },
            imgCode:'',
            countSec:60,
            counter:null,
            countTxt:'发送短信验证码',
            isCountOver:true,
            isMobileValid:false,
            isCheckCodeValid:false
        }
    },
    created(){
        loginService.isLogined().then((ret)=>{
            if(ret.status == 'success' && this.$route.name == 'register')this.$router.push({name:'index'});
            comVue.$emit('login-for-menu',ret.status=='success' && ret.user);
            comVue.$data.userInfo = ret.user;
            comVue.$emit('is-manage-for-menu');
        })
        this.getImgCode();
    },
    mounted(){
        comVue.$on('show-login-form',(data)=>{
            this.open();
        });
        this.getCookie();
    },
    methods:{
        open(){
            this.dialogFormVisible = true;
            this.$refs.loginForm && this.$refs.loginForm.resetFields();
            this.$refs.mloginForm && this.$refs.mloginForm.resetFields();
        },
        close(){
            this.dialogFormVisible = false;
        },
        getCookie(){
            this.loginForm.userName = sysUtil.getCookie('loginName');
        },
        canClickSend(error){
            this.isMobileValid = error ? false : true;
        },
        validateCode(form){
            return (rule,val,callback)=>{
                var error;
                if(val && val.length==4){
                    loginService.validateImgCode({checkCode:this[form].checkCode}).then((ret)=>{
                        if(ret === true){
                            callback();
                        }else{
                            error = new Error("输入的验证码不正确");
                            callback(error);
                        }
                        this.isCheckCodeValid = error ? false : true;
                    })
                }else{
                    error = new Error("验证码长度等于4");
                    this.isCheckCodeValid = false;
                    callback(error);
                }
            }
        },
        getImgCode(){
            loginService.getImgCode().then((ret)=>{
                this.imgCode = ret.status;
            })
        },
        loginByUserName(){
            this.$refs.loginForm.validate((valid)=>{
                if(valid){
                    loginService.loginByUserName(this.loginForm).then((ret)=>{
                        Message({
                            message:ret.body.info ,
                            //message:ret.body.status == 'success' ? '登录成功' : '登陆失败',
                            type:(ret.body.status=='success' ? 'success' : 'error')
                        })
                        if(ret.body.status=='success'){
                            if(this.loginForm.isAuto){
                                sysUtil.saveCookie('loginName',this.loginForm.userName);
                                sysUtil.saveCookie('autotLogin',true);
                            }
                            // comVue.$emit('login-for-menu',ret.body.user); 
                            // comVue.$data.userInfo = ret.body.user;
                            // this.close();
                            // if(this.$route.name == 'register')this.$router.push({name:'index'});
                            location.reload();
                            return;
                        }else{
                            this.getImgCode();
                            this.$refs.loginForm.validateField('checkCode');
                        }
                    })
                    return true;
                }else{
                    return false;
                }
            })
        },
        loginByPhone(){
            this.$refs.mloginForm.validate((valid)=>{
                if(valid){
                    loginService.loginByPhone(this.mloginForm).then((ret)=>{
                        Message({
                            message:ret.body.info,
                            type:(ret.body.status=='success' ? 'success' : 'error')
                        })
                        if(ret.body.status=='success'){
                            comVue.$emit('login-for-menu',ret.body.user);
                            comVue.$data.userInfo = ret.body.user;
                            this.close();
                        }else{
                            this.getImgCode();
                        }
                        // alert(ret.body.loginInfo);
                    })
                    return true;
                }else{
                    return false;
                }
            })
        },
        commonLogin(){
            this.isCommon = true;
            this.isQQlogin = this.isWXlogin = this.isMobile = false;
            this.getImgCode();
        },
        qqLogin(){
            this.isCommon = this.isWXlogin = this.isMobile = false;
            this.isQQlogin = true;
        },
        wxLogin(){
            this.isCommon = this.isQQlogin = this.isMobile = false;
            this.isWXlogin = true;
        },
        mobileLogin(){
            this.isMobile = true;
            this.isQQlogin = this.isWXlogin = this.isCommon = false;
        },
        getMessCode(){
            messCodeUtil.createPhoneCode(this.mloginForm).then((ret)=>{
                if(ret.body.status=='success'){
                    this.countSeconds();
                }else{
                    Message({
                        message:ret.body.status,
                        type:(ret.body.status=='success' ? 'success' : 'error')
                    })
                }
                // alert(ret.body.loginInfo);
            })
        },
        countSeconds(){
            var counter = this.counter;
            if(counter){
                clearTimeout(counter);
            }
            if(this.countSec==0){
                this.isCountOver = true;
                this.countTxt = '发送短信验证码';
                this.countSec = 60;
                return;
            }
            if(this.isCountOver){
                this.isCountOver = false;
                this.countSec--;
                this.countTxt = this.countSec+'秒后重新获取验证码';
                this.countSeconds();
                return;
            }
            this.counter = setTimeout(()=>{
                this.countSec--;
                this.countTxt = this.countSec+'秒后重新获取验证码';
                this.countSeconds();
            },1000)
        },
        updatePass() {
            this.$router.push({name:'update-password'})
            this.close();
        },
    }
}
</script>
