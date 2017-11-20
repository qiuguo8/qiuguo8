<template>
    <div class="recharge">
        <div class="charge-wrap el-col-24">
            <div class="head"><span>账户充值</span><span>收支明细</span></div>
            <div class="type-list">
                <p class="user-name">用户名：<span>百万财神</span><span>（充值满百即送100%积分）</span></p>
                <p class="charge-tip">请输入充值金额及选择网上银行进行充值（注：资金一经充值成功，则充值部分资金将不能体现。）</p>
                <div class="el-col-24">
                    <el-form :model="chargeForm" :rules="rules" ref="chargeForm" label-width="80px">
                        <el-form-item label="充值金额" prop="money">
                            <el-input type="primary" v-model="chargeForm.money" auto-complete="off">
                                <label slot="append">
                                    元
                                </label>
                            </el-input>
                            <span class="fill-tip">（金额格式：100.00，请务必完善手机、邮箱、身份证且手机号已经经过验证）</span>
                        </el-form-item>
                        <el-form-item required label="选择银行" prop="bank">
                            <el-radio-group v-model="chargeForm.bank" size="normal">
                                <el-radio label="1" border>
                                    选项1
                                    <!-- <img src="/web/resources/img/index/user-img.png"/> -->
                                </el-radio>
                                <el-radio label="2" border>备选项2</el-radio>
                                <div class="weixin-pay">
                                    <el-radio label="weixin" border>微信支付</el-radio>
                                </div>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <button class="btn btn-padding btn-danger charge-btn">立即充值</button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import formUtil from 'web/common/utils/formUtil.js'
import {RadioGroup,Radio,Form,FormItem,Input,Button} from 'element-ui'
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(Radio.name,Radio);
export default {
    data(){
        return {
            chargeForm:{
                money:'0',
                bank:'1'
            },
            rules:{
                money:[
                    {required:true,message:'金额不能为空',trigger:'change blur'},
                    {validator:formUtil.isMoney('输入的金额格式不正确'),trigger:'change blur'}
                ]
            }
        }
    }
}
</script>
