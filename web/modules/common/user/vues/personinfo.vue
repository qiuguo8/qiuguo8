<template>
    <div class="achive-detail">
       
        <div class="achive-list">
            <p class="select-name"><span>战绩</span></p>
            
            <div class="select-list content-wrap">
                <el-radio-group v-model="productCode3" class="radio-list" @change = "changeProductCode3()">
                    <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                    <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                    <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                    <el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>
                </el-radio-group>
            </div> 
            <div class="left-menu-table">
               
                
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border >
                    <el-table-column prop="title" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="recommTotal" label="推荐数量" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="winTotal" label="赢" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="loseTotal" label="输" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accuracyRate" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profitRate" label="盈利率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
            </div>
        </div>
        <div class="el-col-24 rank-common">
            <div class="left-name" style="margin-bottom:10px"><span>近期推荐</span></div>
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData4" border>
                <el-table-column label="比赛类型" min-width="50" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.productCode" constant-type="Product"></span>
                    </template>
                </el-table-column>
                <el-table-column prop="leagueName" label="联赛类型" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="price" label="价格" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="viewTimes" label="购买人数" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="profit" label="成交总价" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span>{{Number(parseInt(scope.row.price))*Number(parseInt(scope.row.viewTimes))}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="profit" label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
            <div class="page-block text-center">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange4()"
                :current-page.sync="currentPage4"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="10"
                layout=" prev, pager, next"
                :total="tableData4Total">
                </el-pagination>
            </div>
        </div>
        <div class="achive-list">
            <p class="select-name"><span>账户安全</span></p>
            <div class="text-left two-colums-to-one transition-halfs">
                <div class="float-left">
                    <span class="el-col-14">登录密码：<span v-if="securityInformation.password == '1'">已设置</span><span v-if="securityInformation.password == '0'">未设置</span></span>
                    <el-button type="primary" @click = "loginpwdset = true">修改</el-button>
                </div>
                <div class="float-left">
                    <span class="el-col-14">手机认证：<span v-if="securityInformation.mobilePhone == '1'">已设置</span><span v-if="securityInformation.mobilePhone == '0'">未设置</span></span>
                    <el-button type="primary" @click="phoneset = true">修改</el-button>
                </div>
                <div class="float-left">
                    <span class="el-col-14">交易密码：<span v-if="securityInformation.tradePassword == '1'">已设置</span><span v-if="securityInformation.tradePassword == '0'">未设置</span></span>
                    <el-button type="primary" @click="tradepwdset = true">修改/去设置</el-button>
                </div>
                <div class="">
                    <span class="el-col-14">身份认证：<span v-if="securityInformation.userCertificate == '1'">已设置</span><span v-if="securityInformation.userCertificate == '0'">未设置</span></span>
                    <el-button type="primary">修改</el-button>
                </div>
                <div class="">
                    <span class="el-col-14">银行卡绑定：<span v-if="securityInformation.userAuthCard == '1'">已设置</span><span v-if="securityInformation.userAuthCard == '0'">未设置</span></span>
                    <el-button type="primary" @click="bindcardset = true">去绑定</el-button>
                </div>
            </div>
        </div>
        <el-dialog @close="closeDialog()" title="设置登录密码" :lock-scroll="false" :visible.sync="loginpwdset" width="340px">
             <el-form :model="loginPwdForm" status-icon :rules="pwdRules" ref="loginPwdForm">
                <el-form-item label="旧密码" prop="oldPassword" label-width="100px">
                    <el-input type="password" v-model="loginPwdForm.oldPassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword" label-width="100px">
                    <el-input type="password" v-model="loginPwdForm.newPassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="confirmPassword" label-width="100px">
                    <el-input type="password" v-model="loginPwdForm.confirmPassword" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="loginpwdset = false" style="margin-right:30px">取 消</el-button>
                <el-button type="primary" @click="modifyPwd()">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog @close="closeDialog()" title="设置交易密码" :lock-scroll="false" :visible.sync="tradepwdset" width="340px">
             <el-form :model="tradePwdForm" status-icon :rules="tradePwdRules" ref="tradePwdForm">
                <el-form-item label="旧密码" prop="oldPassword" label-width="100px">
                    <el-input type="password" v-model="tradePwdForm.oldPassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword" label-width="100px">
                    <el-input type="password" v-model="tradePwdForm.newPassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="confirmPassword" label-width="100px">
                    <el-input type="password" v-model="tradePwdForm.confirmPassword" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="tradepwdset = false" style="margin-right:30px">取 消</el-button>
                <el-button type="primary" @click="modifyTradePwd()">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="绑定银行卡" :lock-scroll="false" :visible.sync="bindcardset" width="340px">
             <el-form :model="bindCardForm" status-icon :rules="bindCardRules" ref="bindCardForm">
                <el-form-item label="银行卡号码" prop="cardNo" label-width="100px">
                    <el-input type="text" v-model="bindCardForm.cardNo" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phone" label-width="100px">
                    <el-input type="text" v-model="bindCardForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="短信验证码" prop="phoneCode" label-width="100px">
                    <div>
                        <el-input type="text" v-model="bindCardForm.phoneCode" auto-complete="off"></el-input>
                    </div>
                    <el-button style="margin-top:10px"  :disabled="!isCountOver||!canSendSms" @click="getMessCode(bindCardForm.phone)">{{countTxt}}</el-button>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="bindcardset = false" style="margin-right:30px">取 消</el-button>
                <el-button type="primary" @click="bindCard()">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog @close="closeDialog()" title="手机认证" :lock-scroll="false" :visible.sync="phoneset" width="340px">
             <el-form :model="phoneForm" status-icon :rules="phoneRules" ref="phoneForm">
                <el-form-item label="手机号码" prop="phone" label-width="100px">
                    <el-input type="text" v-model="phoneForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="短信验证码" prop="phoneCode" label-width="100px">
                    <div>
                        <el-input type="text" v-model="phoneForm.phoneCode" auto-complete="off"></el-input>
                    </div>
                    <el-button style="margin-top:10px"  :disabled="!isCountOver||!canSendSms" @click="getMessCode(phoneForm.phone)">{{countTxt}}</el-button>
                </el-form-item>
            </el-form>
            <div class="btn-login text-right">
                <el-button @click="phoneset = false" style="margin-right:30px">取 消</el-button>
                <el-button type="primary" @click="setPhone()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Vue from "vue";
import {
  Input,
  Button,
  Table,
  TableColumn,
  Pagination,
  CheckboxButton,
  RadioButton,
  RadioGroup,
  Dialog,
  Form,
  FormItem
} from "element-ui";
import personinfoService from "web/modules/common/user/service/personinfoService.js";
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Pagination.name, Pagination);
Vue.component(CheckboxButton.name, CheckboxButton);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
import formUtil from 'web/common/utils/formUtil.js'

export default {
  data() {
    return {
        tableData3: [],
        tableData4: [],
        securityInformation:[],
        testVal: false,
        productCode3: "01",
        currentPage4: 1,
        tableData4Total:0,

        countSec:60,
        counter:null,
        countTxt:'发送短信验证码',
        isCountOver:true,

        loginpwdset:false,
        isNewPwdValid:false,
        isConfirmPwdValid:false,
        loginPwdForm:{
            oldPassword:'',
            newPassword:'',
            confirmPassword:''
        },
        pwdRules:{
            oldPassword:[
                {required:true,message:'旧密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'}
            ],
            newPassword:[
                {required:true,message:'新密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'},
                {validator:formUtil.SamePassCheck(this,'loginPwdForm','confirmPassword','isNewPwdValid','',true),trigger:'change blur'}
            ],
            confirmPassword:[
                {required:true,message:'二次输入的密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'},
                {validator:formUtil.SamePassCheck(this,'loginPwdForm','newPassword','isConfirmPwdValid','两次输入的密码不一致',false),trigger:'change blur'}
            ]
        },

        tradepwdset:false,
        tradePwdForm:{
            oldPassword:'',
            newPassword:'',
            confirmPassword:''
        },
        tradePwdRules:{
            oldPassword:[
                {required:true,message:'旧密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'}
            ],
            newPassword:[
                {required:true,message:'新密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'},
                {validator:formUtil.SamePassCheck(this,'loginPwdForm','confirmPassword','isNewPwdValid','',true),trigger:'change blur'}
            ],
            confirmPassword:[
                {required:true,message:'二次输入的密码不能为空',trigger:'change blur'},
                {min: 6, max: 20, message: '密码长度要在6～20个之间', trigger: 'change blur'},
                {validator:formUtil.SamePassCheck(this,'loginPwdForm','newPassword','isConfirmPwdValid','两次输入的密码不一致',false),trigger:'change blur'}
            ],
        },
        
        canSendSms:false,
        bindcardset:false,
        bindCardForm:{
            cardNo:'',
            phone:'',
            phoneCode:''
        },
        bindCardRules:{
            cardNo:[
                {required:true,message:'银行卡号码不能为空',trigger:'change blur'},
            ],
            phone:[
                {required:true,message:'手机号码不能为空',trigger:'change blur'},
                {validator:formUtil.isMobileNo("手机号码格式不正确",this.canSendSmsFn),trigger:'change blur'},
                // {validator:formUtil.checkPhoneRepeat('手机号码已被注册',this.canSendSms),trigger:'blur'}
            ],
            phoneCode:[
                {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                {validator:formUtil.isNumber('验证码必须为数字'),trigger:'change blur'},
                {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
            ]
        },

        phoneset:false,
        phoneForm:{
            phone:'',
            phoneCode:''
        },
        phoneRules:{
            phone:[
                {required:true,message:'手机号码不能为空',trigger:'change blur'},
                {validator:formUtil.isMobileNo("手机号码格式不正确",this.canSendSmsFn),trigger:'change blur'},
                // {validator:formUtil.checkPhoneRepeat('手机号码已被注册',this.canSendSms),trigger:'blur'}
            ],
            phoneCode:[
                {required:true,message:'短信验证码不能为空',trigger:'change blur'},
                {validator:formUtil.isNumber('验证码必须为数字'),trigger:'change blur'},
                {type:'number',validator:formUtil.maxSize(6,'验证码长度不大于6'),trigger:'blur change'}
            ]
        }
    }
  },
  mounted() {
    personinfoService
      .getRecordList({
        productCode: this.productCode3
      })
      .then(data => {
        this.tableData3 = [];
        data.map.lastThreeDayList.title = "3天战绩";
        this.tableData3.push(data.map.lastThreeDayList);
        data.map.lastSevenDayList.title = "7天战绩";
        this.tableData3.push(data.map.lastSevenDayList);
        data.map.lastThirtyDayList.title = "30天战绩";
        this.tableData3.push(data.map.lastThirtyDayList);
        data.map.lastWeekList.title = "上周战绩";
        this.tableData3.push(data.map.lastWeekList);
        data.map.lastMonthList.title = "上月战绩";
        this.tableData3.push(data.map.lastMonthList);
      }),
      personinfoService
        .getRecommendRecord()
        .then(data => {
          console.log(data);
          this.tableData4 = data.list.list;
          this.tableData4Total = data.list.total;
        }),
      personinfoService
        .getSecurityInformation()
        .then(data => {
          console.log(data);
          this.securityInformation = data;
        });
  },
  methods: {
    modifyPwd(){
        this.$refs.loginPwdForm.validate((valid)=>{

        })
    },
    modifyTradePwd(){
        this.$refs.tradePwdForm.validate((valid)=>{

        })
    },
    canSendSmsFn(err){
        this.canSendSms = err ? false : true;
    },
    bindCard(){
        this.$refs.bindCardForm.validate((valid)=>{

        })
    },
    setPhone(){
        this.$refs.phoneForm.validate((valid)=>{

        })
    },
    closeDialog(){
        this.isNewPwdValid = false;
        this.isConfirmPwdValid = false;
        this.countSec = 60;
        this.counter && clearTimeout(this.counter);
        this.counter = null;
        this.countTxt = '发送短信验证码';
        this.isCountOver = true;
    },
    changeProductCode3() {
      this.tableData3 = [];
      personinfoService
        .getRecordList({
          productCode: this.productCode3
        })
        .then(data => {
          data.map.lastThreeDayList.title = "3天战绩";
          this.tableData3.push(data.map.lastThreeDayList);
          data.map.lastSevenDayList.title = "7天战绩";
          this.tableData3.push(data.map.lastSevenDayList);
          data.map.lastThirtyDayList.title = "30天战绩";
          this.tableData3.push(data.map.lastThirtyDayList);
          data.map.lastWeekList.title = "上周战绩";
          this.tableData3.push(data.map.lastWeekList);
          data.map.lastMonthList.title = "上月战绩";
          this.tableData3.push(data.map.lastMonthList);
        });
    },
    handleCurrentChange4() {
      personinfoService.getRecommendRecord({
          pageNum: this.currentPage4
        })
        .then(data => {
          console.log(data);
          this.tableData4 = data.list.list;
          this.tableData4Total = data.list.total;
        });
    },
    getMessCode(phoneNo){
        let info = {'phone':code,'type':'REGISTER'}
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
};
</script>