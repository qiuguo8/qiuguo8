<template>
    <div class="article-manage">
        <div class="row-new text-center">
            <div class="form-control content-60-to-60 float-left">
                <label class="el-col-7">注册时间</label>
                <div class="el-col-17">
                    <span class="el-col-11">
                        <mu-date-picker v-model="registerDate" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="registerDate" hintText="选择时间"/>
                    </span>
                </div>
            </div> 
            <div class="form-control content-40-to-40 float-left">
                <label class="el-col-7">标题</label>
                <div class="el-col-17">
                    <el-input v-model="title" placeholder="请输入标题"></el-input>
                </div>
            </div> 
            <div class="form-control el-col-24 text-center">
                <el-button type="primary">查询</el-button>
                <el-button >重置</el-button>
                <el-button type="danger">新增</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="index" label="标题" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="userName" label="发布人" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="account" label="文章类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mobileNo" label="是否启用" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mail" label="创建时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="registerDate" label="修改时间" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="修改人" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="操作" min-width="90" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" size="small">启用</el-button>
                        <el-button type="text" size="small">禁用</el-button>
                        <el-button type="text" size="small">修改</el-button>
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
