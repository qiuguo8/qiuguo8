<template>
    <el-dialog @open="commonLogin()" title="用户登录" custom-class="login-dialog" :visible.sync="dialogFormVisible">
        <div class="login-form" v-if="isCommon">
            <el-form :model="loginForm" status-icon :rules="rules" ref="form">
                <el-form-item label="用户名" prop="loginName" label-width="100px">
                    <el-input v-model="loginForm.loginName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" label-width="100px">
                    <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="checkCode" label-width="100px">
                    <el-input v-model="loginForm.checkCode" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label-width="120px" prop="isAuto">
                    <el-checkbox v-model="loginForm.isAuto">自动登录</el-checkbox>
                    <a class="miss-pass">忘记密码?</a>
                </el-form-item>
            </el-form>
        </div>
        <div class="qq-login-code login-img" v-if="isQQlogin">
            <img src=""/>
        </div>
        <div class="weixin-login-code login-img" v-if="isWXlogin">
            <img src=""/>
        </div>
        <div slot="footer" class="dialog-footer">
            <div class="other-login">
                <label>其它登录方式:</label>
                <el-tooltip class="item" effect="dark" content="QQ登录" placement="top">
                    <span @click="qqLogin()"><i class="fa fa-qq"></i></span>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="微信登录" placement="top">
                    <span @click="wxLogin()"><i class="fa fa-weixin"></i></span>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="账号登录" placement="top">
                    <span v-show="!isCommon" @click="commonLogin()"><i class="fa fa-edit"></i></span>
                </el-tooltip>
            </div>
            <div class="btn-login" v-if="isCommon">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="login()">确 定</el-button>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import Vue from 'vue'
import {Dialog,Form,Input,FormItem,Button,Checkbox,Tooltip} from 'element-ui'
import formUtil from 'web/common/utils/formUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import comVue from 'web/modules/commonVue.js'
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
            loginForm:{
                loginName:'',
                pass:'',
                checkCode:'',
                isAuto:false
            },
            rules:{
                loginName:[
                    {required:true,message:'用户名不能为空',trigger:'blur change'},
                    {validator:formUtil.maxSize(20,'用户名长度不能超过20'),trigger:'blur change'},
                    {validator:formUtil.isLegalName('用户名只能由英文、数字和中文组成'),trigger:'blur change'}
                ],
                pass:[
                    {required:true,message:'密码不能为空',trigger:'change blur'},
                    {min:6,max:20,message:'密码长度要在6～20个之间',trigger:'change blur'}
                ],
                checkCode:[
                    {required:true,message:'验证码不能为空',trigger:'change blur'},
                    {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
                ],
                isAuto:[
                    {type:'boolean', trigger:'change'}
                ]
            }
        }
    },
    mounted(){
        comVue.$on('show-login-form',(data)=>{
            this.dialogFormVisible=true;
        })
    },
    methods:{
        login(){
            this.$refs.form.validate((valid)=>{
                console.log(valid,this.loginForm);
                if(valid){
                    if(this.loginForm.isAuto){
                        sysUtil.saveCookie('loginName',this.loginForm.loginName);
                    }
                    return true;
                }else{
                    return false;
                }
            })
        },
        commonLogin(){
            this.isCommon = true;
            this.isQQlogin = this.isWXlogin = false;
        },
        qqLogin(){
            this.isCommon = this.isWXlogin = false;
            this.isQQlogin = true;
        },
        wxLogin(){
            this.isCommon = this.isQQlogin = false;
            this.isWXlogin = true;
        }
    }
}
</script>
