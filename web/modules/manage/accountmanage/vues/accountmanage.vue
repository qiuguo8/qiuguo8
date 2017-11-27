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
                    <el-input v-model="account" placeholder="请输入帐号"></el-input>
                </div>
            </div>   
            <div class="form-control el-col-24 text-center">
                <el-button type="primary">查询</el-button>
                <el-button >重置</el-button>
            </div>
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="index" label="序号" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="account" label="账号" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mobileNo" label="可用现金余额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mail" label="可用球果余额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="registerDate" label="冻结现金余额" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="冻结球果余额" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="操作" min-width="90" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" size="small">锁定</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page-block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="15"
                layout=" prev, pager, next"
                :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
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
            query:{
                userName:'',
                account:"",
            },
            tableData3:[
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'}
            ]
        }
    }
}
</script>
