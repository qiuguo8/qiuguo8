<template>
    <div class="recharge-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-8">用户名</label>
                <div class="el-col-16">
                    <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                </div>
            </div> 
            <div class="form-control el-col-12">
                <label class="el-col-9">手机号</label>
                <div class="el-col-15">
                    <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                </div>
            </div>
            <div class="form-control content-60-to-60-all float-left">
                <label class="el-col-6">充值时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="startRechargeDate" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="endRechargeDate" hintText="选择时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control content-40-to-40-all float-left">
                <label class="el-col-9 text-center">支付状态</label>
                <el-select class="el-col-15" v-model="paymentStatus" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>    
            <div class="form-control el-col-24 text-center">
                <el-button type="primary">查询</el-button>
                <el-button >重置</el-button>
            </div>
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column prop="index" label="序号" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="rechargeId" label="充值流水号" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="rechargeAmount" label="充值金额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="rechargeType" label="充值类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="rechargeTime" label="充值时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="paymentType" label="支付类型" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="paymentStatus" label="支付状态" min-width="100" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
            <div class="page-block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="pagesize"
                layout=" prev, pager, next"
                :total="totalCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
import rechargemanageService from 'web/modules/manage/fundmanage/service/rechargemanageService'
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
   data(){
        return {
            datatable:[],
            options:[
                {value: '', label: '全部' }, 
                {value: '01', label: '支付成功' }, 
                {value: '02',label: '支付失败'},
                {value: '03', label: '支付已发起' }],
            startRechargeDate:null,
            endRechargeDate:null,
            paymentType:null,
            userName:null,
            phone:null,
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    methods:{
        submitForm(){
            this.query();
        },
        query(){
            var sform= {'userName':this.userName,'phone':this.phone,'startRechargeDate':this.startRechargeDate,'endRechargeDate':this.endRechargeDate,'paymentType':this.paymentType,'pageNum':this.currentPage,'pageSize':this.pagesize}
            rechargemanageService.queryAllRechargeDetails(sform).then((ret)=>{
                        this.datatable = ret.body.list;
                        this.totalCount = ret.body.total;
                    })
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.query();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.query();
        },                
    },
   created:function () {
        this.query();
    },
}
</script>
