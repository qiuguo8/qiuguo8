<template>
    <div class="recomment-record">
        <div class="row-new">
            <div class="form-control el-col-12 text-center">
                <label class="el-col-9">推荐状态</label>
                <el-select class="el-col-15" v-model="RecommendStatusValue" filterable placeholder="请选择">
                    <el-option
                    v-for="item in RecommendStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>   
            <div class="form-control el-col-12 text-center">
                <label class="el-col-9">推荐类型</label>
                <el-select class="el-col-15" v-model="ProductValue" filterable placeholder="请选择">
                    <el-option
                    v-for="item in Product"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>   
            <div class="form-control el-col-18 text-center">
                <label class="el-col-6">推荐时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="recommendTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="recommendTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control el-col-6 text-center">
                <el-button type="primary" @click="query()">查询</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                <el-table-column prop="publishTime" label="推荐时间" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="recommendNo" label="推荐单号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="productCode" label="推荐类型" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.productCode" constant-type="Product"></span>
                    </template>
                </el-table-column>
                <el-table-column prop="leagueNameCn" label="联赛类型" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="recommendContent" label="标题" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="price" label="价格" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="viewTimes" label="购买人数" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="money" label="成交金额" min-width="80" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span>{{Number(parseInt(scope.row.price))*Number(parseInt(scope.row.viewTimes))}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="开奖状态" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.recommendStatus" constant-type="RecommendStatus"></span>
                    </template>
                </el-table-column>
                <el-table-column prop="commission" label="佣金" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
            <div class="page-block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange()"
                :current-page.sync="currentPage4"
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
import {Table,TableColumn,Pagination,Select,Option} from 'element-ui'
import recommendService from "web/modules/common/user/service/recommendrecord.js"
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
                {value: '01', label: '亚盘' }, 
                {value: '02', label: '大小球' }, 
                {value: '03',label: '竞彩'}, 
                {value: '04',label: '北单'}, 
                {value: '',label: '全部'}, 
            ],
            RecommendStatus:[
                {value: '01', label: '发布中' }, 
                {value: '02', label: '已开奖' }, 
                {value: '03',label: '违规'}, 
                {value: '',label: '全部'}, 
                ],
            value8:'2017-11-15',
            currentPage4: 1,
            RecommendStatusValue:'',
            ProductValue:'',
            recommendTimeStart:'',
            recommendTimeEnd:''
        }
    },
    mounted(){
        recommendService.getRecommendList({userId:'20171206201103946446'}).then((data)=>{
            console.log(data);
            this.tableData3 = data.list.list;
        })
    },
    methods:{
        valChange(val){
            console.log(val);
        },
        handleCurrentChange(){
            recommendService.getRecommendList({userId:'20171206201103946446',pageNum:this.currentPage4}).then((data)=>{
            console.log(data);
            this.tableData3 = data.list.list;
            })
        },
        query(){
            recommendService.getRecommendList({userId:'20171206201103946446',productCode:this.ProductValue,recommendStatus:this.RecommendStatusValue,recommendTimeStart:this.recommendTimeStart,recommendTimeEnd:this.recommendTimeEnd}).then((data)=>{
            console.log(data);
            this.tableData3 = data.list.list;
        })
        }
    },
    components:{
        //datePickerModal:datePickerModal
    }
}
</script>
