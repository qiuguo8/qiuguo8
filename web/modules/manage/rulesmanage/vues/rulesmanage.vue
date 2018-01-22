<template>
    <div class="rules-manage">
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>等级规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable1" border>
                    <el-table-column prop="productCode"  :formatter="productFormat" label="产品名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="level" :formatter="levelFormat" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="recommTotal" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accuracyRate" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profitRate" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="page-block text-right">
                    <el-pagination
                    @size-change="handleSizeChange1"
                    @current-change="handleCurrentChange1"
                    :current-page="currentPage1"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="pagesize1"
                    layout=" prev, pager, next"
                    :total="totalCount1">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>星级规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable2" border>
                    <el-table-column prop="productCode" :formatter="productFormat" label="产品名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="starLevel" :formatter="starLevelFormat" label="星级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="recommTotal" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accuracyRate" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profitRate" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="page-block text-right">
                    <el-pagination
                    @size-change="handleSizeChange2"
                    @current-change="handleCurrentChange2"
                    :current-page="currentPage2"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="pagesize2"
                    layout=" prev, pager, next"
                    :total="totalCount2">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>价格规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable3" border>
                    <el-table-column prop="assessLevel" :formatter="assessLevelFormat" label="等级" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="starLevel" :formatter="starLevelFormat" label="星级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="serialHitTotal" label="连中数" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="highestPrice" label="最高价格" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="lowestPrice" label="最低价格" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="page-block text-right">
                    <el-pagination
                    @size-change="handleSizeChange3"
                    @current-change="handleCurrentChange3"
                    :current-page="currentPage3"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="pagesize3"
                    layout=" prev, pager, next"
                    :total="totalCount3">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>发单规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable4" border>
                    <el-table-column prop="productCode" :formatter="productFormat" label="产品名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accessLevel" :formatter="accessLevelFormat" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="maxQuantity" label="最高数量" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="page-block text-right">
                    <el-pagination
                    @size-change="handleSizeChange4"
                    @current-change="handleCurrentChange4"
                    :current-page="currentPage4"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="pagesize4"
                    layout=" prev, pager, next"
                    :total="totalCount4">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
import rulesmanageService from 'web/modules/manage/rulesmanage/service/rulesmanageService.js'
Vue.component(Button.name,Button);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        return {
            datatable1:[],
            //当前页码
            currentPage1: 1,
            //默认每页数据量
            pagesize1: 10,
            //默认数据总数
            totalCount1: 0,
            datatable2:[],
            //当前页码
            currentPage2: 1,
            //默认每页数据量
            pagesize2: 10,
            //默认数据总数
            totalCount2: 0,
            datatable3:[],
            //当前页码
            currentPage3: 1,
            //默认每页数据量
            pagesize3: 10,
            //默认数据总数
            totalCount3: 0,
            datatable4:[],
            //当前页码
            currentPage4: 1,
            //默认每页数据量
            pagesize4: 10,
            //默认数据总数
            totalCount4: 0,
        }
    },
    methods:{
        query1(){
            var sform= {'pageNum':this.currentPage1,'pageSize':this.pagesize1}
            rulesmanageService.queryLevelRules(sform).then((ret)=>{
                        this.datatable1 = ret.body.list;
                        this.totalCount1 = ret.body.total;
                    })
        },
        handleSizeChange1(val){
            this.pagesize1 = val;
            this.query1();
        },
        //页码变更
        handleCurrentChange1: function(val) {
            this.currentPage1 = val;
            this.query1();
        }, 

        query2(){
            var sform= {'pageNum':this.currentPage2,'pageSize':this.pagesize2}
            rulesmanageService.queryStarLevelRules(sform).then((ret)=>{
                        this.datatable2 = ret.body.list;
                        this.totalCount2 = ret.body.total;
                    })
        },
        handleSizeChange2(val){
            this.pagesize2 = val;
            this.query2();
        },
        //页码变更
        handleCurrentChange2: function(val) {
            this.currentPage2 = val;
            this.query2();
        }, 

        query3(){
            var sform= {'pageNum':this.currentPage3,'pageSize':this.pagesize3}
            rulesmanageService.queryPriceRules(sform).then((ret)=>{
                        this.datatable3 = ret.body.list;
                        this.totalCount3 = ret.body.total;
                    })
        },
        handleSizeChange3(val){
            this.pagesize3 = val;
            this.query3();
        },
        //页码变更
        handleCurrentChange3: function(val) {
            this.currentPage3 = val;
            this.query3();
        }, 

        query4(){
            var sform= {'pageNum':this.currentPage4,'pageSize':this.pagesize4}
            rulesmanageService.queryReceiptRules(sform).then((ret)=>{
                        this.datatable4 = ret.body.list;
                        this.totalCount4 = ret.body.total;
                    })
        },
        handleSizeChange4(val){
            this.pagesize4 = val;
            this.query4();
        },
        //页码变更
        handleCurrentChange4: function(val) {
            this.currentPage4 = val;
            this.query4();
        }, 
        productFormat(row,column){
            switch (row.productCode) {
                case '01':return '亚盘';break;
                case '02':return '大小球';break;
                case '03':return '竞彩足球';break;
                case '04':return '北京单场';break;
        };
        },
        accessLevelFormat(row,column){
            switch (row.accessLevel) {
                case '01':return '初级';break;
                case '02':return '中级';break;
                case '03':return '高级';break;
                case '04':return '资深级';break;
                case '05':return '专家级';break;
        };
         },
        levelFormat(row,column){
            switch (row.level) {
                case '01':return '初级';break;
                case '02':return '中级';break;
                case '03':return '高级';break;
                case '04':return '资深级';break;
                case '05':return '专家级';break;
        };
         },
        assessLevelFormat(row,column){
            switch (row.assessLevel) {
                case '01':return '初级';break;
                case '02':return '中级';break;
                case '03':return '高级';break;
                case '04':return '资深级';break;
                case '05':return '专家级';break;
        };
         },
       starLevelFormat(row,column){
            switch (row.starLevel) {
                case '00':return '零星';break;
                case '01':return '一星';break;
                case '02':return '二星';break;
                case '03':return '三星';break;
                case '04':return '四星';break;
                case '05':return '五星';break;
        };
         },
    },
    created:function () {
        this.query1();
        this.query2();
        this.query3();
        this.query4();
    },
}
</script>
