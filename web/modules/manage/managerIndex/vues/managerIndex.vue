<template>
    <div class="manager-index">
        <div class="websit-run-info rank-common">
            <div class="left-name" style="margin-bottom:10px"><span>网站运营概况</span></div>
            <div class="el-col-24 text-left two-colums-to-one achive-info transition-halfs">
                <div class="float-left info-bar">
                    用户总数：{{userTotal}}
                </div>
                <div class="float-left info-bar">
                    昨日新增用户数：{{yesUserTotal}}
                </div>
                 <div class="float-left info-bar">
                    当前充值总金额：{{rechargeTotal}}
                </div>
                <div class="float-left info-bar">
                    昨日充值金额：{{yesRechargeTotal}}
                </div>
                <div class="float-left info-bar">
                    当前提现金额：{{withdrawTotal}}
                </div>
                <div class="float-left info-bar">
                    昨日提现金额：{{yesWithdrawTotal}}
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import managerIndexService from 'web/modules/manage/managerIndex/service/managerIndexService'
export default {
   data(){
        return {
            userTotal:0,
            yesUserTotal:0,
            rechargeTotal:0,
            yesRechargeTotal:0,
            withdrawTotal:0,
            yesWithdrawTotal:0,
        }
   },
   methods:{
       query(){
            managerIndexService.queryBizData().then((ret)=>{
                        this.userTotal = ret.body.userTotal;
                        this.yesUserTotal = ret.body.yesUserTotal;
                        this.rechargeTotal = ret.body.rechargeTotal;
                        this.yesRechargeTotal = ret.body.yesRechargeTotal;
                        this.withdrawTotal = ret.body.withdrawTotal;
                        this.yesWithdrawTotal = ret.body.yesWithdrawTotal;
                    })
       }
   },
   created:function () {
        this.query();
    },
}
</script>
