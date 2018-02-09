<template>
    <div class="register">
        <div class="register-wrap content-wrap content-75-to-100 text-left">
            <div class="label-tip row-new">
                <h2 class="text-center">修改用户密码</h2>
            </div>
            <div class="clear-fix"></div>
            <div class="edit-form">
                <el-form :model="regisForm" status-icon :rules="rules" ref="regisForm" label-width="100px">
                    <el-form-item label="手机号码" prop="phone">
                        <el-input type="primary" v-model="regisForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="checkCode" label-width="100px">
                        <div class="el-col-12">
                            <el-input v-model="regisForm.checkCode" auto-complete="off"></el-input>
                        </div>
                        <img @click="getImgCode()" :src="'data:image/jpg;base64,'+imgCode" style="cursor:pointer;float:left;width:80px;height:40px;margin-left:5px"/>
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="phoneCode" label-width="100px">
                        <div class="el-col-12" style="margin-bottom:5px;margin-right:10px">
                            <el-input type="text" v-model="regisForm.phoneCode" auto-complete="off"></el-input>
                        </div>
                        <el-button  :disabled="!isCountOver||!canSend||!isCheckCodeValid" @click="getMessCode()">{{countTxt}}</el-button>
                    </el-form-item>
                    <el-form-item label="新密码" prop="password">
                        <el-input type="password" v-model="regisForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="checkPass">
                        <el-input type="password" v-model="regisForm.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()" style="margin-left:50px;margin-bottom:10px">重置</el-button>
                        <span @click="showLogin()" style="cursor:pointer;margin-left:50px;color:#e90304">想起密码，马上登录</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <!-- <div class="register-img float-left content-wrap content-40-to-100">
            <img src="/web/resources/img/index/u170.jpg"/>
        </div> -->
    </div>
</template>
<script>
import Vue from 'vue'
import {Form,FormItem,Input,Button,Checkbox,Message} from 'element-ui'
import validationUtil from 'web/common/utils/validationUtil.js'
import formUtil from 'web/common/utils/formUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import 'web/common/utils/pVerify.js'
import messCodeUtil from 'web/common/utils/messCodeUtil'
import registerService from 'web/modules/common/user/service/registerService'
import loginService from 'web/modules/common/user/service/loginService'
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);

export default {
    data(){
        return {
            isPassValid:true,
            isCheckPassValid:true,
            regisForm:{
                userName:'',
                password:'',
                checkPass:'',
                checkCode:'',
                phone:'',
                phoneCode:'',
                type:'RESET'
            },
            rules:{
                phone:[
                    {required:true,message:'手机号码不能为空',trigger:'change blur'},
                    {validator:formUtil.isMobileNo("手机号码格式不正确",this.canSendSms),trigger:'change blur'},
                    {validator:formUtil.checkPhoneExist('手机号码不存在',this.canSendSms),trigger:'blur'}
                ],
                phoneCode:[
                    {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                    {validator:formUtil.isNumber('验证码必须为数字'),trigger:'change blur'},
                    {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:6,max:20,message:'密码长度在6～20个字符之间',trigger:'blur'},
                    {validator:formUtil.SamePassCheck(this,'regisForm','checkPass','isPassValid','',true),trigger:'blur'}
                ],
                checkPass:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:6,max:20,message:'密码长度在6～20个字符之间',trigger:'blur'},
                    {validator:formUtil.SamePassCheck(this,'regisForm','password','isCheckPassValid','两次输入的密码不正确',false),trigger:'blur'}
                ],
                checkCode: [
                    {required: true, message: '验证码不能为空', trigger: 'change blur'},
                    {validator: formUtil.isNumber('验证码必须为数字'), trigger: 'change blur'},
                    {type: 'number', validator: formUtil.maxSize(4, '验证码长度等于4'), trigger: 'blur change'},
                    {validator: this.validateCode('regisForm'), trigger: 'change'},
                ],
            },
            picVerifyObj:{
                verify:null,
                createVPic:function(){
                    this.verify = new GVerify({
                        id:'vPic',
                        type:"number",
                        isOnclick:false
                    });
                },
                refresh:function(){
                    this.verify.refresh();
                },
                validate:function(){
                    if(this.verifyCode){
                        return this.verify.validate(this.verifyCode);
                    }
                }
            },
            countSec:60,
            counter:null,
            countTxt:'发送短信验证码',
            isCountOver:true,
            canSend:false,
            imgCode:'',
            isCheckCodeValid:false
        }
    },
    mounted(){
        this.getImgCode()
    },
    methods:{
        submitForm(){
            this.$refs.regisForm.validate((valid)=>{
                if(valid){
                    registerService.updatePass(this.regisForm).then((ret)=>{
                        Message({
                            message:ret.body.info,
                            type:ret.body.status || 'info'
                        });
                        if(ret.body.status == 'success'){
                            this.$router.push({'name':'index'});
                        }
                    })
                    return true;
                }else{
                    return false;
                }
            })
        },
        canSendSms(err){
            this.canSend = err ? false : true;
        },
        resetForm(){
            this.$refs.regisForm.resetFields();
        },
        showLogin(){
            sysUtil.showLogin();
        },
        getImgCode(){
            loginService.getImgCode().then((ret)=>{
                this.imgCode = ret.status;
            })
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
        getMessCode(){
            messCodeUtil.createPhoneCode(this.regisForm).then((ret)=>{
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
        }
    }
}
</script>
