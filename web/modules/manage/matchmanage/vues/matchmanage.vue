<template>
    <dvi class="match-manage">
        <div class="row-new text-center">
            <div class="form-control content-60-to-60 float-left">
                <label class="el-col-7">比赛时间</label>
                <div class="el-col-17">
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.matchTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.matchTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div> 
            <div class="form-control content-40-to-40 float-left">
                <label class="el-col-7">开奖状态</label>
                <el-select class="el-col-17" v-model="query.overFlag" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="getMatchList">查询</el-button>
                <el-button @click="clearQuery">重置</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="matchList" border>
                <el-table-column prop="productCode" label="产品类型" :formatter="productCodeForma" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="leagueName" label="联赛" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="matchStartTime" label="比赛时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="overFlag" label="开奖状态" :formatter="overFlagForma" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="handiCap" label="盘口" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="disabled" label="是否隐藏":formatter="disabledForma" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="操作" min-width="90" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" size="small" @click="updateMatch(scope.row)">修改</el-button>
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
    </dvi>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
import service from 'web/modules/manage/matchmanage/service/matchManageService'
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
                overFlag:'',
                matchTimeStart:'',
                matchTimeEnd:'',
            },
            matchList:[],
            options:[
                {value: '', label: '全部' },
                {value: '0', label: '未开奖' },
                {value: '1',label: '已开奖'}],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    created:function () {
        this.getMatchList();
    },
    methods:{
        getMatchList(){
            let matchInfo = this.query;
            matchInfo.pageNum = this.currentPage;
            matchInfo.pageSize = this.pagesize;
            service.listAllMatchInfo(matchInfo).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.matchList = ret.body.list;
                    this.totalCount = ret.body.total;
                }
            })
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.getMatchList();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.getMatchList();
        },
        clearQuery(){
            this.query = {
                overFlag:'',
                matchTimeStart:'',
                matchTimeEnd:'',
            }
        },
        updateMatch(id,status){
            let item = {'matchId':id,'disabled':status}
            service.updateMatchInfoByAdmin(item).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.getMatchList();
                }
            })
        },
        overFlagForma(row,column){
            switch (row.overFlag) {
                case '0':return '比赛未结束';break;
                case '1':return '比赛已结束';break;
            };
        },
        disabledForma(row,column){
            switch (row.disabled) {
                case '0':return '比赛正常';break;
                case '1':return '比赛隐藏';break;
            };
        },
        productCodeForma(row,column){
            switch (row.productCode) {
                case '01':return '亚盘/大小球';break;
                case '02':return '亚盘/大小球';break;
                case '03':return '竞彩足球';break;
                case '04':return '北京单场';break;
            };
        },
    }
}
</script>
