<template>
    <div class="order-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-8">订单状态</label>
                <el-select class="el-col-16" v-model="query.orderStatus" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
            <div class="form-control el-col-12">
                <label class="el-col-8">订单编号</label>
                <div class="el-col-16">
                    <el-input v-model="query.orderId" placeholeder="请输入订单编号"></el-input>
                </div>
            </div> 
            <div class="form-control content-60-to-60-full float-left">
                <label class="el-col-6">创建时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.createTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.createTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div> 
            <div class="form-control content-40-to-40-full float-left">
                <label class="el-col-8">冻结流水号</label>
                <div class="el-col-16">
                    <el-input v-model="query.freezeId" placeholeder="请输入冻结流水号"></el-input>
                </div>
            </div> 
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button @click="clearQuery">重置</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="list" border>
                <el-table-column prop="orderId" label="订单编号" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="createTime" label="订单时间" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="goodsId" label="商品编号" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="userName" label="购买用户" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="payAmt" label="订单金额" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="freezeId" label="支付冻结ID" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="orderStatus" :formatter="orderStatusForma" label="订单状态" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
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
import service from 'web/modules/manage/ordermanage/service/orderManageService'
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
                orderStatus:'',
                createTimeStart:'',
                createTimeEnd:'',
                orderId:'',
                freezeId:'',
            },
            list:[],
            options:[
                {value: '', label: '全部' },
                {value: '01', label: '已支付' },
                {value: '02',label: '已成功'},
                {value: '03', label: '已退款' },
                {value: '04',label: '订单无效'},
            ],
            list:[],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    created:function () {
        this.getList();
    },
    methods:{
        getList(){
            let orderInfo = this.query;
            orderInfo.pageNum = this.currentPage;
            orderInfo.pageSize = this.pagesize;
            service.listAllOrderInfo(orderInfo).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.list = ret.body.list;
                    this.totalCount = ret.body.total;
                }
            })
        },
        clearQuery(){
            this.query = {
                orderStatus:'',
                createTimeStart:'',
                createTimeEnd:'',
                orderId:'',
                freezeId:'',
            }
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.getList();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.getList();
        },
        orderStatusForma(row,column){
            switch (row.orderStatus) {
                case '01':return '已支付';break;
                case '02':return '已成功';break;
                case '03':return '已退款';break;
                case '04':return '订单无效';break;
            };
        },
    }
}
</script>
