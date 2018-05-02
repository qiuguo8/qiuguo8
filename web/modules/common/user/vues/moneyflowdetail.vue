<template>
    <div class="money-flow-detail">
        <div class="row-new">
            <div class="form-control el-col-18 text-center">
                <label class="el-col-6">交易时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="startChangeTime" hintText="开始时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="endChangeTime" hintText="结束时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control el-col-12">
                <label class="el-col-9 text-center">交易类型</label>
                <el-select class="el-col-15" v-model="changeType" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>   
            <div class="form-control el-col-12 text-center">
                <el-button type="primary" @click="submitForm()">查询</el-button>
                <el-button  @click="resetForm()">重置</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column type="index" label="序号" width="50"  align="center" head-align="center"></el-table-column>
                <el-table-column prop="changeTime" label="时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="changeId" label="资金流水号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="totalAmount" label="金额" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="jylx"  label="交易类型" min-width="60" align="center" head-align="center" class-name="table-fixed">
                     <template slot-scope="scope">
                        <span v-if="scope.row.changeType=== '01'" style="color: red">充值收入</span>
                        <span v-if="scope.row.changeType=== '04'" style="color: red">佣金收入</span>
                        <span v-if="scope.row.changeType=== '05'" style="color: red">退款收入</span>
                        <span v-if="scope.row.changeType=== '02'">提现支出</span>
                        <span v-if="scope.row.changeType=== '03'">消费支出</span>
                    </template>
                </el-table-column>
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
import {Table,TableColumn,Pagination,Select,Option} from 'element-ui'
import moneyflowService from 'web/modules/common/user/service/moneyflowService'
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

export default {
    data(){
        return {
            datatable:[],
            options:[
                {value: '', label: '全部' }, 
                {value: '01', label: '充值收入' },
                {value: '04',label: '佣金收入'},
                {value: '05',label: '退款收入'},
                {value: '02',label: '提现支出'}, 
                {value: '03',label: '消费支出'} 
                ],
            startChangeTime:null,
            endChangeTime:null,
            changeType:'',
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    methods:{
        submitForm(){
            this.query();
        },
        resetForm(){
            this.startChangeTime='';
            this.endChangeTime='';
            this.changeType='';
        },
        query(){
            var sform= {'startChangeTime':this.startChangeTime,'endChangeTime':this.endChangeTime,'changeType':this.changeType,'pageNum':this.currentPage,'pageSize':this.pagesize}
            moneyflowService.queryChangeDetails(sform).then((ret)=>{
                        this.datatable = ret.body.list;
                        this.totalCount = ret.body.total;
                    })
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.query();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.query();
        }, 
        changeTypeFormat(row,column){
            switch (row.changeType) {
                case '01':return '充值收入';break;
                case '02':return '提现支出';break;
                case '03':return '消费支出';break;
                case '04':return '消费支出';break;
                case '05':return '退款收入';break;
            };
        },           
    },
   created:function () {
        this.query();
    },
    
  
}
</script>
