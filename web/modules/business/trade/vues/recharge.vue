<template>
    <div class="recharge">
        <div class="charge-wrap el-col-24">
            <div class="head">
                <span>球果充值</span>
                <span></span>
            </div>
            <div class="type-list">
                <p class="user-name">用户名：<span>{{userName}}</span><span></span></p>
                <p class="charge-tip">请输入充值球果数量及选择支付方式进行充值（注：充值部分的球果不能提现）</p>
                <div class="el-col-24">
                    <el-form v-if="!showPic" :model="chargeForm" :rules="rules" ref="chargeForm" label-width="80px">
                        <el-form-item label="充值金额" prop="money">
                            <el-input type="primary" v-model="chargeForm.money" auto-complete="off">
                                <label slot="append">
                                    元
                                </label>
                            </el-input>
                            <span class="fill-tip">（金额格式：100.00，请务必完善邮箱认证和身份认证）</span>
                        </el-form-item>
                        <el-form-item required label="选择银行" prop="bank">
                            <el-radio-group v-model="chargeForm.bank"  size="normal">
                                <div class="weixin-pay">
                                    <el-radio label="01" border>微信支付</el-radio>
                                </div>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <button class="btn btn-padding btn-danger charge-btn" @click="initRecharge()" >立即充值</button>
                        </el-form-item>
                    </el-form>
                      <el-form v-if="showPic"  ref="chargeForm" label-width="80px">
                         <img :src="qrCodePath"/>
                     </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import formUtil from 'web/common/utils/formUtil.js'
import pathUtil from 'web/common/utils/pathUtil.js'
import {RadioGroup,Radio,Form,FormItem,Input,Button} from 'element-ui'
import rechargeService from 'web/modules/business/trade/service/rechargeService.js'
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(Radio.name,Radio);
export default {
    data(){
        return {
            userName:'',
            qrCodePath:'',
            showPic:false,
            chargeForm:{
                money:'0',
                bank:'01'
            },
            rules:{
                money:[
                    {required:true,message:'金额不能为空',trigger:'change blur'},
                    {validator:formUtil.isMoney('输入的金额格式不正确'),trigger:'change blur'}
                ]
            }
        }
    },
    methods:{
        queryUserName(){
            rechargeService.queryUserName().then((ret)=>{
                        this.userName = ret.body.userName;
                    })
        },
        initRecharge(){
            var sform= {'rechargeAmount':this.chargeForm.money,'rechargeType':this.chargeForm.bank}
            rechargeService.initRecharge(sform).then((ret)=>{
                        if('success'== ret.body.status){
                            this.qrCodePath=pathUtil.getStaticPath()+ret.body.qrCodePath;
                            this.showPic=true;
                        }
                        
                    })
        },
    },
    created:function () {
        this.queryUserName();
    },
    
}
</script>
