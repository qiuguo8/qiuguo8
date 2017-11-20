<template>
    <div class="announce">
        <div class="get-url-wrap">
            <label class="el-col-3" style="min-width:80px">代理链接：</label>
            <span class="el-col-8">
                <el-input></el-input>
            </span>
            <el-button>复制</el-button>
        </div>
        <div class="user-list">
            <div class="label-wrap">
                <label>代理用户</label>
            </div>
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="money" label="余额" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="registerTime" label="注册时间" min-width="100" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="lastLoginTime" label="最近登录时间" min-width="100" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
            <div class="block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="15"
                layout=" prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Table,TableColumn,Pagination} from 'element-ui'
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        return {
            tableData3:[{userName:'1',money:'xx',registerTime:'7胜3负',lastLoginTime:'80%'},
                        {userName:'1',money:'xx',registerTime:'7胜3负',lastLoginTime:'80%'},
                        {userName:'1',money:'xx',registerTime:'7胜3负',lastLoginTime:'80%'},
                        {userName:'1',money:'xx',registerTime:'7胜3负',lastLoginTime:'80%'},
                        {userName:'1',money:'xx',registerTime:'7胜3负',lastLoginTime:'80%'},],
        }
    }
}
</script>
