<template>
    <dvi class="match-manage">
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
                <label class="el-col-7">状态</label>
                <el-select class="el-col-17" v-model="status" filterable placeholder="请选择">
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
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="index" label="日期" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="userName" label="产品类型" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="realName" label="赛事" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mobileNo" label="比赛时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="mail" label="主队" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="registerDate" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="状态" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="全场主队进球" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="全场客队进球" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="半场主队进球" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="半场客队进球" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="是否隐藏" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
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
    </dvi>
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
                status:'',
                registerDate:''
            },
            tableData3:[
                {index:'1',userName:'xx',realName:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',realName:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',realName:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',realName:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',realName:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'}
            ]
        }
    }
}
</script>
