<template>
    <div class="withdraw">
        <div class="withdraw-wrap el-col-24">
            <p style="color:red">（提款前请先完善身份信息和支付宝信息，首次绑定身份信息后不能更改。支付宝收款账号需要和身份信息一致）</p>
            <div class="head">
                <span>提款</span>
            </div>
            
            <div class="form-wrap">
                <el-form :model="withDrawForm" :rules="rules" ref="withDrawForm" label-width="110px">
                    <el-form-item label="可提金额:">
                        <span style="color:#e90304">{{withDrawForm.availableBalance}}</span>元，
                    </el-form-item>
                    <el-form-item required label="提现金额:" prop="money" label-width="110px">
                        <div class="el-col-8" style="min-width:160px;">
                            <el-input type="primary" v-model="withDrawForm.money" auto-complete="off">
                                <label slot="append">
                                    元
                                </label>
                            </el-input>
                        </div>
                        <span class="fill-tip">（提现金额至少100元）</span>
                    </el-form-item>
                    <el-form-item required label="支付宝账号:" prop="alipayNo" label-width="110px">
                       <div class="el-col-8" style="min-width:160px">
                            <el-input type="primary" v-model="withDrawForm.alipayNo" auto-complete="off">
                            </el-input>
                        </div>
                    </el-form-item>
                    <el-form-item required label="核对真实姓名:" prop="realName" label-width="110px">
                        <div class="el-col-8" style="min-width:160px">
                            <el-input type="primary" v-model="withDrawForm.realName" auto-complete="off">
                            </el-input>
                        </div>
                        <span class="fill-tip">（首次绑定真实姓名后不能更改）</span>
                    </el-form-item>
                    <el-form-item required label="短信验证码:" prop="code" label-width="110px">
                        <div class="el-col-8" style="min-width:160px;margin-right:10px;margin-bottom:5px">
                            <el-input type="primary" v-model="withDrawForm.code" auto-complete="off">
                            </el-input>
                        </div>
                        <el-button :disabled="!isCountOver" @click="getMessCode()">{{countTxt}}</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="initWithdraw()">立即提现</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import formUtil from 'web/common/utils/formUtil.js'
import {Dialog,Form,FormItem,Input,Button,Checkbox} from 'element-ui'
import withdrawService from 'web/modules/business/trade/service/withdrawService.js'
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);

export default {
    data(){
        return {
            dialogFormVisible:false,
            withDrawForm:{
                money:'0',
                alipayNo:'',
                realName:'',
                code:'',
                availableBalance:0
            },
            isFull:false,
            rules:{
                money:[
                    {required:true,message:'金额不能为空',trigger:'change blur'},
                    {validator:formUtil.isMoney('输入的金额格式不正确'),trigger:'change blur'}
                ],
                alipayNo:[
                    {required:true,message:'支付宝账号不能为空',trigger:'change blur'}
                ],
                realName:[
                    {required:true,message:'真实姓名不能为空',trigger:'change blur'},
                    {max:20,message:'输入的字符长度不能超过20',trigger:'change blur'},
                    {validator:formUtil.isLegalName('输入的姓名存在非法字符'),trigger:'change blur'}
                ],
                code:[
                    {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                    {validator:formUtil.isNumber('输入的必须是数字'),trigger:'change blur'},
                    {validator:formUtil.maxSize(6,'输入的验证码长度不超过6个字符'),trigger:'change blur'}
                ]
            },
            countSec:60,
            counter:null,
            countTxt:'发送短信验证码',
            isCountOver:true
        }
    },
    methods:{
        getMessCode(){
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
                this.getMessCode();
                return;
            }
            this.counter = setTimeout(()=>{
                this.countSec--;
                this.countTxt = this.countSec+'秒后重新获取验证码';
                this.getMessCode();
            },1000)
        },
        queryAccount(){
            withdrawService.queryAccount().then((ret)=>{
                        this.withDrawForm.availableBalance = ret.body.account.availableBalance;
                    })
        },
        initWithdraw(){
            var sform= {'withdrawAmount':this.withDrawForm.money,'withdrawRecvNo':this.withDrawForm.recvNo}
            withdrawService.initWithdraw(sform).then((ret)=>{
                        alert( ret.body.msg);
                    })
        },
    },
    created:function () {
        this.queryAccount();
    },
}
</script>
