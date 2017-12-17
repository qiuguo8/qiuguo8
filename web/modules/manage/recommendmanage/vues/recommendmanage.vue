<template>
    <div class="recommend-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-9">产品类型</label>
                <el-select class="el-col-15" v-model="query.productCode" filterable placeholder="请选择">
                    <el-option
                    v-for="item in productOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div> 
            <div class="form-control el-col-12">
                <label class="el-col-9">推荐类型</label>
                <el-select class="el-col-15" v-model="query.categoryCode" filterable placeholder="请选择">
                    <el-option
                    v-for="item in categoryOptions"
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
                        <mu-date-picker v-model="query.publishTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.publishTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div> 
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="getList">查询</el-button>
                <el-button @click="clearQuery">重置</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="list" border>
                <el-table-column prop="publishTime" label="发单日期" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="recommendNo" label="推荐编号" min-width="80" align="center" head-align="center" > </el-table-column>
                <el-table-column prop="userName" label="推荐用户" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="leagueName" label="赛事" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="matchStartTime" label="比赛时间" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="70" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="60" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="productCode" label="产品类型" :formatter="productCodeForma" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="categoryCode" label="推荐类型" :formatter="categoryCodeForma" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="handicap" label="盘口" min-width="60" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="homeTeamSp" label="主队赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="tieSp" label="平局赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="visitTeamSp" label="客队赔率" min-width="80" align="center" head-align="center" ></el-table-column>
                <el-table-column prop="price" label="价格" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column prop="viewTimes" label="购买数量" min-width="80" align="center" head-align="center"></el-table-column>
                <el-table-column label="操作" min-width="120" align="center" head-align="center"  fixed="right">
                     <template slot-scope="scope">
                         <el-button type="text" v-show="scope.row.recommendStatus=='01'" size="small" @click="updateRecommByAdmin(scope.row.recommendNo,'03')">不合法</el-button>
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
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
import service from 'web/modules/manage/recommendmanage/service/recommManageService'
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
                publishTimeStart:'',
                publishTimeEnd:'',
                productCode:"",
                categoryCode:''
            },
            productOptions:[
                {value: '', label: '全部' },
                {value: '01', label: '亚盘' },
                {value: '02',label: '大小球'},
                {value: '03', label: '竞彩' },
                {value: '04',label: '北单'},
            ],
            categoryOptions:[
                {value: '', label: '全部' },
                {value: '0101', label: '亚盘全场' },
                {value: '0102',label: '亚盘半场'},
                {value: '0201', label: '大小球全场' },
                {value: '0202',label: '大小球半场'},
                {value: '0301', label: '竞彩混合' },
                {value: '0401',label: '北京单场'},
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
            let recomInfo = this.query;
            recomInfo.pageNum = this.currentPage;
            recomInfo.pageSize = this.pagesize;
            service.listAllRecomm(recomInfo).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.list = ret.body.list;
                    this.totalCount = ret.body.total;
                }
            })
        },
        clearQuery(){
            this.query = {
                publishTimeStart:'',
                publishTimeEnd:'',
                productCode:'',
                categoryCode:''
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
        updateRecommByAdmin(id,status){
            let item = {'recommendNo':id,'recommendStatus':status}
            service.updateRecommByAdmin(item).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.getList();
                }
            })
        },
        productCodeForma(row,column){
            switch (row.productCode) {
                case '01':return '亚盘';break;
                case '02':return '大小球';break;
                case '03':return '竞彩足球';break;
                case '04':return '北京单场';break;
            };
        },
        categoryCodeForma(row,column){
            switch (row.categoryCode) {
                case '0101':return '亚盘全场';break;
                case '0102':return '亚盘半场';break;
                case '0201':return '大小球全场';break;
                case '0202':return '大小球半场';break;
                case '0301':return '竞彩混合';break;
                case '0303':return '竞彩混合(让球)';break;
                case '0401':return '北京单场';break;
            };
        },
    }
}
</script>
