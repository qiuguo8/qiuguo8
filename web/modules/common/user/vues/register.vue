<template>
    <div class="register">
        <div class="register-wrap content-wrap content-75-to-100 text-left">
            <div class="label-tip row-new">
                <h2 class="text-center">欢迎注册球果吧账号</h2>
            </div>
            <div class="clear-fix"></div>
            <div class="edit-form">
                <el-form :model="regisForm" status-icon :rules="rules" ref="regisForm" label-width="100px">
                    <el-form-item label="用户名" prop="userName">
                        <el-input type="primary" v-model="regisForm.userName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="regisForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="regisForm.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="phone">
                        <el-input type="primary" v-model="regisForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="短信验证码" prop="phoneCode" label-width="100px">
                        <div class="el-col-12" style="margin-bottom:5px;margin-right:10px">
                            <el-input type="text" v-model="regisForm.phoneCode" auto-complete="off"></el-input>
                        </div>
                        <el-button  :disabled="!isCountOver" @click="getMessCode()">{{countTxt}}</el-button>
                    </el-form-item>
                    <el-form-item prop="signed">
                        <el-checkbox v-model="regisForm.signed">我已满18岁并同意<router-link target="_blank" style="color:#387EF5" :to="{name:'register=protocol'}">《球果吧服务条款》</router-link></el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()" style="margin-left:50px;margin-bottom:10px">重置</el-button>
                        <span @click="showLogin()" style="cursor:pointer;margin-left:50px;color:#e90304">已是用户，马上登录</span>
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
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);

export default {
    data(){
        var SamePass = (rule,value,callback)=>{
            var password = this.regisForm.password;
            if(!validationUtil.isNull(password)){
                if(password!=value){
                    this.isCheckPassValid = false;
                    callback(new Error('两次输入的密码不正确'));
                }else{
                    if(!this.isCheckPassValid){
                        this.isCheckPassValid = true;
                        this.$refs.regisForm.validateField('password');
                    }
                    callback();
                }
            }
            callback();
        }

        var SameCheckPass = (rule,value,callback)=>{
            var checkPass = this.regisForm.checkPass;
            if(!validationUtil.isNull(checkPass)){
                if(checkPass!=value){
                    this.isPassValid = false;
                    this.$refs.regisForm.validateField('checkPass');
                }else{
                    if(!this.isPassValid){
                        this.isPassValid = true;
                        this.$refs.regisForm.validateField('checkPass');
                    }
                    callback();
                }
            }
            callback();
        }

        return {
            isPassValid:true,
            isCheckPassValid:true,
            regisForm:{
                userName:'',
                password:'',
                checkPass:'',
                checkCode:'',
                signed:'',
                phone:'',
                phoneCode:''
            },
            rules:{
                userName:[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                    {max:20,message:'长度不能超过20个字符',trigger:'blur'},
                    {validator:formUtil.isLegalName('用户名只能由英文、数字和中文组成'),trigger:'change'},
                    {validator:formUtil.checkUserNameRepeat('用户名已被注册'),trigger:'blur'}
                ],
                phone:[
                    {required:true,message:'手机号码不能为空',trigger:'change blur'},
                    {validator:formUtil.isMobileNo("手机号码格式不正确"),trigger:'change blur'},
                    {validator:formUtil.checkPhoneRepeat('手机号码已被注册'),trigger:'blur'}
                ],
                phoneCode:[
                    {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                    {validator:formUtil.isNumber('验证码必须为数字'),trigger:'change blur'},
                    {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:6,max:20,message:'密码长度在6～20个字符之间',trigger:'blur'},
                    {validator:SameCheckPass,trigger:'blur'}
                ],
                checkPass:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min:6,max:20,message:'密码长度在6～20个字符之间',trigger:'blur'},
                    {validator:SamePass,trigger:'blur'}
                ],
                checkCode:[
                    {required:true,message:'请输入验证码'},
                    {validator:formUtil.maxSize(6,'长度不能超过6个字符'),trigger:'blur'},
                    {type:'number',message:'验证码必须是数字'},
                ],
                signed:[
                    {type:'boolean',validator:formUtil.isChecked('请勾选协议'),trigger:'change'},
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
            isCountOver:true
        }
    },
    mounted(){
    },
    methods:{
        submitForm(){
            this.$refs.regisForm.validate((valid)=>{
                if(valid){
                    registerService.register(this.regisForm).then((ret)=>{
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
        resetForm(){
            this.$refs.regisForm.resetFields();
        },
        showLogin(){
            sysUtil.showLogin();
        },
        getMessCode(){
            let info = {'phone':this.regisForm.phone,'type':'REGISTER'}
            messCodeUtil.createPhoneCode(info)
            this.countSeconds();
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
