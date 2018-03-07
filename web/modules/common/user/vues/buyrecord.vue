<template>
    <div class="buy-records">
        <div class="row-new">
            <div class="form-control el-col-18 text-center">
                <label class="el-col-6">购买时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="buyTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="buyTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control el-col-12 text-center">
                <label class="el-col-9">购买类型</label>
                <el-select class="el-col-15" v-model="productValue" filterable placeholder="请选择">
                    <el-option
                    v-for="item in Product"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>   
            <div class="form-control el-col-12 text-center">
                <el-button type="primary" @click="query()">查询</el-button>
                <el-button  @click="resetForm()">重置</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="createTime" label="购买时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="recommendNo" label="推荐单号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="userName" label="推荐师" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="categoryCode" label="推荐类型" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.categoryCode" constant-type="Product"></span>
                    </template>
                </el-table-column>
                <el-table-column prop="leagueName" label="联赛类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="price" label="价格" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="recommendStatus" label="开奖状态" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.recommendStatus" constant-type="RecommendStatus"></span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="page-block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange()"
                :current-page.sync="pageNum"
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
import buyRecordService from "web/modules/common/user/service/buyrecordService.js"
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

export default {
    data(){
        return {
            tableData3:[],
             Product:[
                {value: '',label: '全部'}, 
                {value: '03',label: '竞彩足球'}, 
                {value: '01', label: '亚盘' }, 
                {value: '02', label: '大小球' }, 
                
            ],
            buyTimeStart:"",
            buyTimeEnd:"",
            productValue:"",
            value8:'2017-11-15',
            //当前页码
            pageNum: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    mounted(){
        buyRecordService.getBuyRecordList().then((data)=>{
            this.tableData3 = data.list.list;
            console.log(data)
            this.totalCount = data.list.total;
        });
    },
    methods:{
        handleCurrentChange(){
            buyRecordService.getBuyRecordList({pageNum:this.pageNum,pagesize:this.pagesize}).then((data)=>{
            this.tableData3 = data.list.list;
            this.totalCount = data.list.total;
         });
        },
        resetForm(){
            this.buyTimeStart='';
            this.buyTimeEnd='';
            this.productValue='';
        },
        query(){
            buyRecordService.getBuyRecordList({productValue:this.productValue,buyTimeStart:this.buyTimeStart,buyTimeEnd:this.buyTimeEnd}).then((data)=>{
            this.tableData3 = data.list.list;
            this.totalCount = data.list.total;
        });
        }
    }
  
}
</script>
