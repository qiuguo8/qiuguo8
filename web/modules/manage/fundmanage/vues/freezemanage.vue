<template>
    <div class="freeze-manage">
    <div class="row-new text-center">
            <div class="form-control el-col-12">
            <label class="el-col-8">用户名</label>
            <div class="el-col-16">
                <el-input v-model="userName" placeholder="请输入用户名"></el-input>
            </div>
        </div>   
        <div class="form-control el-col-12">
            <label class="el-col-8">手机号</label>
            <div class="el-col-16">
                <el-input v-model="phone" placeholder="请输入手机号"></el-input>
            </div>
        </div> 
         <div class="form-control content-60-to-60-all float-left text-center">
                <label class="el-col-6">冻结时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="startFreezeTime" hintText="开始时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="endFreezeTime" hintText="结束时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control content-40-to-40-all float-left">
                <label class="el-col-9 text-center">冻结类型</label>
                <el-select class="el-col-15" v-model="freezeType" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="submitForm()">查询</el-button>
                 <el-button  @click="resetForm()">重置</el-button>
            </div>    
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column prop="freezeId" label="冻结编号" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                 <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="freezeTime" label="冻结时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="freezeAmount" label="冻结金额" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="freezeQgAmount" label="冻结球果金额" min-width="60" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="freezeStatus" :formatter="freezeStatusFormat" label="冻结状态" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="freezeType" label="冻结类型" :formatter="freezeTypeFormat" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>               
                <el-table-column label="操作" min-width="90" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" v-show="scope.row.freezeStatus=='01'" size="small" @click="unFreeze(scope.row)">解冻</el-button>
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
import freezemanageService from 'web/modules/manage/fundmanage/service/freezemanageService'
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
                {value: '01', label: '提现' }, 
                {value: '02',label: '支付'}],
            startFreezeTime:null,
            endFreezeTime:null,
            freezeType:null,
            userName:null,
            phone:null,
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
            this.startFreezeTime='';
            this.endFreezeTime='';
            this.freezeType='';
            this.userName='';
            this.phone='';
        },
        query(){
            var sform= {'userName':this.userName,'phone':this.phone,'startFreezeTime':this.startFreezeTime,'endFreezeTime':this.endFreezeTime,'freezeType':this.freezeType,'pageNum':this.currentPage,'pageSize':this.pagesize}
            freezemanageService.queryAllFreezeDetail(sform).then((ret)=>{
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
        unFreeze(obj){
            freezemanageService.unFreeze(obj).then((ret)=>{
                        alert( ret.body.status);
                    })
        }, 
        freezeTypeFormat(row,column){
            switch (row.freezeType) {
                case '01':return '提现冻结';break;
                case '02':return '支付冻结';break;
            };
        },
        freezeStatusFormat(row,column){
            switch (row.freezeStatus) {
                case '01':return '成功';break;
                case '02':return '失败';break;
                case '03':return '已解冻';break;
                case '04':return '已结算';break;
            };
        },                 
    },
   created:function () {
        this.query();
    },
    
  
}
</script>
