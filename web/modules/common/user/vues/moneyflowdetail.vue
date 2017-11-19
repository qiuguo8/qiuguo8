<template>
    <div class="money-flow-detail">
        <div class="row-new">
            <div class="form-control el-col-12">
                <label class="el-col-8 text-center">类型</label>
                <el-select class="el-col-16" v-model="value7" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>   
            <div class="form-control el-col-12">
                <label class="el-col-8 text-center">时间</label>
                <div class="el-col-16">
                    <mu-date-picker v-model="selectDate" hintText="选择时间"/>
                </div>
            </div> 
            <div class="form-control el-col-24 text-center">
                <el-button type="primary">查询</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="date" label="时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="code" label="资金流水号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="type" label="类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="bizCode" label="业务流水号" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="money" label="金额" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="状态" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
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
import {Table,TableColumn,Pagination,Select,Option} from 'element-ui'
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

export default {
    data(){
        return {
            tableData3:[{date:'1',code:'xx',type:'7胜3负',bizCode:'xxx',money:'50%',status:'xx',},
                        {date:'1',code:'xx',type:'7胜3负',bizCode:'xxx',money:'50%',status:'xx'},
                        {date:'1',code:'xx',type:'7胜3负',bizCode:'xxx',money:'50%',status:'xx'},
                        {date:'1',code:'xx',type:'7胜3负',bizCode:'xxx',money:'50%',status:'xx'},
                        {date:'1',code:'xx',type:'7胜3负',bizCode:'xxx',money:'50%',status:'xx'},],
            options:[
                {value: '选项1', label: '黄金糕' }, 
                {value: '选项2', label: '双皮奶' }, 
                {value: '选项3',label: '蚵仔煎'}, 
                {value: '选项4',label: '龙须面'}, 
                {value: '选项5',label: '北京烤鸭'}],
            value8:'2017-11-15'
        }
    }
  
}
</script>
