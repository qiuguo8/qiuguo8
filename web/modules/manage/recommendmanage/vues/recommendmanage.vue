<template>
    <div class="recommend-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-9">产品类型</label>
                <el-select class="el-col-15" v-model="status" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
            <div class="form-control el-col-12">
                <label class="el-col-9">推荐类型</label>
                <el-select class="el-col-15" v-model="status" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
            <div class="form-control el-col-19">
                <label class="el-col-6">推荐时间</label>
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
                <el-button >重置</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="index" label="发单日期" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="userName" label="推荐编号" min-width="80" align="center" head-align="center" > </el-table-column>
                <el-table-column prop="realName" label="推荐用户" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="mobileNo" label="赛事" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="mail" label="比赛时间" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column prop="registerDate" label="主队" min-width="70" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="客队" min-width="60" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="产品类型" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="推荐类型" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="盘口" min-width="60" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="主队赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="平局赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="客队赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="status" label="价格" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column prop="status" label="购买数量" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column label="操作" min-width="120" align="center" head-align="center"  fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">隐藏</el-button>
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
                startDate:'',
                endDate:'',
                protype:"",
                recommendtype:''
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
