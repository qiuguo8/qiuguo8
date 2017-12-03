<template>
    <div class="in-time-goal">
        <div class="row-new">
            <div class="form-control el-col-19 text-center">
                <label class="el-col-6">注册时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="registerDate" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="registerDate" hintText="选择时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control el-col-24 text-center">
                <el-button type="primary">查询</el-button>
            </div> 
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="date" label="联赛名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="code" label="联赛时间" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="type" label="状态" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="matchType" label="主队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="title" label="比分" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="price" label="客队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="buynumber" label="半场" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="money" label="滚球" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="盘口" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="profit" label="数据" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Table,TableColumn,Select,Option} from 'element-ui'
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
export default {
    data(){
        return {
            tableData3:[{date:'1',code:'xx',type:'7胜3负',matchType:'80%',title:'xxxxxx',price:'xxx',buynumber:'70%',money:'50%',status:'xx',profit:'112'},
                        {date:'1',code:'xx',type:'7胜3负',matchType:'80%',title:'xxxxxx',price:'xxx',buynumber:'70%',money:'50%',status:'xx',profit:'112'},
                        {date:'1',code:'xx',type:'7胜3负',matchType:'80%',title:'xxxxxx',price:'xxx',buynumber:'70%',money:'50%',status:'xx',profit:'112'},
                        {date:'1',code:'xx',type:'7胜3负',matchType:'80%',title:'xxxxxx',price:'xxx',buynumber:'70%',money:'50%',status:'xx',profit:'112'},
                        {date:'1',code:'xx',type:'7胜3负',matchType:'80%',title:'xxxxxx',price:'xxx',buynumber:'70%',money:'50%',status:'xx',profit:'112'},],
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
