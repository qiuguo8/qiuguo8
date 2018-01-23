<template>
    <div class="account-manage">
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
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="submitForm()">查询</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </div>
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData" border>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="accountNo" label="账号" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="availableBalance" label="可用余额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="qgAvailableBalance" label="可用球果余额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="freezeAmount" label="冻结金额" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="freezeQgAmount" label="冻结球果金额" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
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
import accountmanageService from 'web/modules/manage/accountmanage/service/accountmanageService'
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
            userName:null,
            phone:null,
            tableData:[ ],
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
        resetForm(){
            this.userName='';
            this.phone='';
        },
        query(){
            var sform= {'userName':this.userName,'phone':this.phone,'pageNum':this.currentPage,'pageSize':this.pagesize}
            accountmanageService.queryAccountInfos(sform).then((ret)=>{
                        this.tableData = ret.body.list;
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
