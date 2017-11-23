<template>
    <div class="register">
        <div class="register-wrap content-wrap content-75-to-100 text-left">
            <div class="label-tip row-new">
                <h2 class="float-left">欢迎注册球果吧账号</h2>
                <p class="float-right" @click="showLogin()">已是用户，马上登录</p>
            </div>
            <div class="clear-fix"></div>
            <div class="edit-form">
                <el-form :model="regisForm" status-icon :rules="rules" ref="regisForm" label-width="100px">
                    <el-form-item label="用户名" prop="loginName">
                        <el-input type="primary" v-model="regisForm.loginName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="regisForm.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="regisForm.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="checkCode">
                        <div class="el-col-12">
                            <el-input v-model.number="regisForm.checkCode" auto-complete="off"></el-input>
                        </div>
                        <div id="vPic" style="float:left;width:80px;height:40px;margin-left:10px"></div>
                    </el-form-item>
                    <el-form-item prop="isSigned">
                        <el-checkbox v-model="regisForm.isSigned">我已满18岁并同意《球果吧服务条款》</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">提交</el-button>
                        <el-button @click="resetForm()">重置</el-button>
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
import {Form,FormItem,Input,Button,Checkbox} from 'element-ui'
import validationUtil from 'web/common/utils/validationUtil.js'
import formUtil from 'web/common/utils/formUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import 'web/common/utils/pVerify.js'
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);

export default {
    data(){
        var SamePass = (rule,value,callback)=>{
            var pass = this.regisForm.pass;
            if(!validationUtil.isNull(pass)){
                if(pass!=value){
                    this.isCheckPassValid = false;
                    callback(new Error('两次输入的密码不正确'));
                }else{
                    if(!this.isCheckPassValid){
                        this.isCheckPassValid = true;
                        this.$refs.regisForm.validateField('pass');
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
                loginName:'',
                pass:'',
                checkPass:'',
                checkCode:'',
                isSigned:''
            },
            rules:{
                loginName:[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                    {max:20,message:'长度不能超过20个字符',trigger:'blur'},
                    {validator:formUtil.isLegalName('用户名只能由英文、数字和中文组成'),trigger:'change'}
                ],
                pass:[
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
                isSigned:[
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
            }
        }
    },
    mounted(){
        this.picVerifyObj.createVPic();
    },
    methods:{
        submitForm(){
            this.$refs.regisForm.validate((valid)=>{
                if(valid){
                    console.log(valid);
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
        }
    }
}
</script>
