<template>
    <div class="order-detail">
        <div class="rank-common intro-rank-list content-25-to-100 content-wrap">
            <div class="list-name"><span>同场推荐</span></div>
            <div class="el-col-24">
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="date" label="推荐人" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="code" label="类型" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="recommender" label="金币" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="type" label="结果" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="matchType" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="price" label="查看" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
            </div>
        </div>
        <div class="content-75-to-100 content-wrap">
            <div class="info-list row-new">
                <div class="content-25-to-all-50 content-wrap text-center">
                    <img src="/web/resources/img/index/u170.jpg"/>
                    <p class="user-name">{{recommDetail.userName}}</p>
                </div>
                <div class="content-25-to-all-50 content-wrap">
                    <p>等级:<span>{{recommDetail.assessLevel}}</span></p>
                    <p>星级:
                        <el-rate style="display:inline-block" v-model="starLevel" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                    </p>
                    <p>关注人数:<span>{{recommDetail.attentionNum}}</span></p>
                </div>
                <div class="content-25-to-all-50 content-wrap">
                    <p>3天准确率:<span>{{recommDetail.accuracyRate3}}</span></p>
                    <p>7天准确率:<span>{{recommDetail.accuracyRate7}}</span></p>
                    <p>30天准确率:<span>{{recommDetail.accuracyRate30}}</span></p>
                </div>
                <div class="content-25-to-all-50 content-wrap">
                    <p>3天战绩:<span>000</span></p>
                    <p>7天战绩:<span>000</span></p>
                    <p>30天战绩:<span>000</span></p>
                </div>
            </div>
            <div class="order-detail-info el-col-24 rank-common row-new">
                <div class="left-name" style="margin-bottom:10px"><span>推荐内容</span></div>
                <div class="el-col-24">
                    <div class="el-col-8">
                        <p>{{recommDetail.leageName}}{{recommDetail.matchStartTime}}</p>
                        <p>{{recommDetail.homeTeamName}} VS {{recommDetail.visitTeamName}}</p>
                    </div>
                    <div class="el-col-8">
                        <span>盘口：000</span>
                    </div>
                    <div class="el-col-8">
                        <span>价格：{{recommDetail.price}}</span>
                    </div>
                    <div class="el-col-24">
                        推荐：000
                    </div>
                </div>
            </div>
            <div class="order-result el-col-24 rank-common row-new">
                <div class="left-name" style="margin-bottom:10px"><span>开奖结果</span></div>
                <div class="el-col-24">
                    <span>比分：000</span>
                    <span>结果：000</span>
                    <p class="el-col-24">本推介仅代表作者观点，不代表球果吧立场。信息仅供竞彩参考，请勿用于非法博彩</p>
                </div>
            </div>
            <div class="recent-recommend rank-common">
                <div class="left-name" style="margin-bottom:10px"><span>近期推荐</span></div>
                <div class="el-col-24">
                    <el-table :data="recentRecommList" border>
                        <el-table-column label="赛事" min-width="160" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <div class="match-wrap">
                                    <p class="match-type">{{scope.row.productCode}}</p>
                                    <p class="match-date">{{scope.row.matchStartTime}}</p>
                                    <p>推荐时间：</p>
                                    <p class="recommend-time">{{scope.row.publishTime}}</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="对阵" min-width="350" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <div class="match-wrap">
                                    <span>{{scope.row.homeTeamName}}</span>
                                    <span>VS</span>
                                    <span>{{scope.row.visitTeamName}}</span>
                                    <p class="match-predit">{{scope.row.recommendContent}}</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="盘口" min-width="120" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                {{scope.row.handicap}}
                                <el-button type="warning">免费查看</el-button>
                                <el-button type="warning">购买</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="结果" min-width="120" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <div class="match-wrap">
                                    <p class="result">{{scope.row.hitResult}}</p>
                                </div>
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
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {RadioButton,RadioGroup,Rate,Table,TableColumn,Pagination} from 'element-ui'
import service from 'web/modules/business/trade/service/orderService'
Vue.component(RadioButton.name,RadioButton);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(Rate.name,Rate);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        return {
            radioVal:'1',
            starLevel:this.$route.params.detail.starLevel,
            recentRecommList:[],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
            recommDetail:this.$route.params.detail
        }
    },
    methods:{
        listRecentRecomm(){
            let recomm = {pageNum:this.currentPage,pageSize:this.pagesize};
            service.pageRecentRecomm(recomm).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.recentRecommList = ret.body.list;
                    this.totalCount = ret.body.total;
                }
            })
        },

        handleSizeChange(val){
            this.pagesize = val;
            this.listRecentRecomm();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.listRecentRecomm();
        },
    },
    mounted:function () {
        this.listRecentRecomm();
        console.log(this.buyRecommInfo)
    }
}
</script>
