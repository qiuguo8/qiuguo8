<template>
    <div class="fund-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-8">用户名</label>
                <div class="el-col-16">
                    <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                </div>
            </div>   
            <div class="form-control el-col-12">
                <label class="el-col-8">手机号</label>
                <div class="el-col-16">
                    <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                </div>
            </div> 
            <div class="form-control content-60-to-60-all text-center float-left">
                <label class="el-col-6">交易时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="startChangeTime" hintText="开始时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="endChangeTime" hintText="结束时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control content-40-to-40-all float-left">
                <label class="el-col-9 text-center">交易类型</label>
                <el-select class="el-col-15" v-model="changeType" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="submitForm()">查询</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column prop="changeTime" label="时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="changeId" label="资金流水号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="totalAmount" label="金额" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="changeType" label="交易类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
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
import {Table,TableColumn,Pagination,Select,Option} from 'element-ui'
import fundmanageService from 'web/modules/manage/fundmanage/service/fundmanageService'
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

export default {
    data(){
        return {
            datatable:[],
            options:[
                {value: '', label: '全部' }, 
                {value: '01', label: '充值' }, 
                {value: '02',label: '提现'}, 
                {value: '03',label: '消费'}, 
                {value: '04',label: '佣金'}],
            startChangeTime:null,
            endChangeTime:null,
            changeType:null,
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
            var sform= {'userName':this.userName,'phone':this.phone,'startChangeTime':this.startChangeTime,'endChangeTime':this.endChangeTime,'changeType':this.changeType,'pageNum':this.currentPage,'pageSize':this.pagesize}
            fundmanageService.queryChangeDetail(sform).then((ret)=>{
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
