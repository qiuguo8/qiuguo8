<template>
    <div class="order-detail">
        <div class="rank-common intro-rank-list content-25-to-100 content-wrap">
            <div class="list-name"><span>同场推荐</span></div>
            <div class="el-col-24">
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="sameFieldList" border>
                    <el-table-column prop="userName" label="推荐人" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="hitResult" label="结果" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column label="查看" min-width="60" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button v-if="scope.row.price==0 || scope.row.buyStatus=='1' || scope.row.recommendStatus=='02'" type="warning" @click="forFree(scope.row)">查看</el-button>
                            <el-button v-if="scope.row.buyStatus=='0' && scope.row.price>0 && scope.row.recommendStatus=='01'" type="warning" @click="showOrderDetail(scope.row)">{{scope.row.price}}</el-button>
                        </template>
                    </el-table-column>
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
                    <p>3天战绩:<span>{{recommDetail.gainsRate3}}</span></p>
                    <p>7天战绩:<span>{{recommDetail.gainsRate7}}</span></p>
                    <p>30天战绩:<span>{{recommDetail.gainsRate30}}</span></p>
                </div>
            </div>
            <div class="order-detail-info el-col-24 rank-common row-new">
                <div class="left-name" style="margin-bottom:10px"><span>推荐内容</span></div>
                <div class="el-col-24">
                    <div class="el-col-8">
                        <p>{{rDetails.leagueName}}{{rDetails.matchStartTime}}</p>
                        <p>{{rDetails.homeTeamName}} VS {{rDetails.visitTeamName}}</p>
                    </div>
                    <div class="el-col-8">
                        <span> 玩法：{{product[rDetails.productCode]}}</span><br>
                        <span>盘口：{{rDetails.handicap}}</span>
                    </div>
                    <div class="el-col-8">
                        <span>价格：{{rDetails.price}}</span>
                    </div>
                    <div class="el-col-24">
                        推荐：{{null==rDetails.recommendTeamName?'平局':rDetails.recommendTeamName}}
                    </div>
                    <div class="el-col-24">
                        <span>推荐说明：{{rDetails.recommendContent}}</span>
                    </div>
                </div>
            </div>
            <div class="order-result el-col-24 rank-common row-new">
                <div class="left-name" style="margin-bottom:10px"><span>开奖结果</span></div>
                <div class="el-col-24">
                    <span v-if="rDetails.homeScore">比分：{{rDetails.homeScore}}-{{rDetails.homeScore}}</span>
                    <span v-if="!rDetails.homeScore">比分：暂无</span>
                    <span v-if="rDetails.hitResult">结果：{{rDetails.hitResult}}</span>
                    <span v-if="!rDetails.hitResult">结果：暂无</span>
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
                                    <p class="match-type">{{scope.row.leageName}}</p>
                                    <p class="match-date">{{scope.row.matchStartTimeToStr}}</p>
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
                                玩法：{{product[scope.row.productCode]}}<br>
                                盘口：{{scope.row.handicap}}
                                <router-link style="margin-top:10px" class="btn btn-orange btn-padding" target="_blank" :to="{name:'order-detail',query:{buyDetail:JSON.stringify(recommDetail),recommDetail:JSON.stringify(scope.row)}}">免费查看</router-link>
                                <!-- <el-button v-if="scope.row.price==0 || scope.row.buyStatus=='1' || scope.row.recommendStatus=='02'" type="warning" @click="forFree(scope.row)">免费查看</el-button> -->
                                <el-button v-if="scope.row.buyStatus=='0' && scope.row.price>0 && scope.row.recommendStatus=='01'" type="warning" @click="showOrderDetail(scope.row)">{{scope.row.price}}</el-button>
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
        <order-buy-tip ref="orderBuy" :order-data="orderData"></order-buy-tip>
    </div>
</template>
<script>
import Vue from 'vue'
import {RadioButton,RadioGroup,Rate,Table,TableColumn,Pagination} from 'element-ui'
import service from 'web/modules/business/trade/service/orderService'
import orderBuyTip from 'web/modules/business/trade/vues/order-buy-tip.vue'
Vue.component(RadioButton.name,RadioButton);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(Rate.name,Rate);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        var buyDetail = JSON.parse(this.$route.query.buyDetail);
        return {
            radioVal:'1',
            starLevel:buyDetail.starLevel,
            recentRecommList:[],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
            recommDetail:buyDetail,
            rDetails:JSON.parse(this.$route.query.recommDetail),
            product:{'01':'亚盘','02':'大小球','03':'竞彩足球','04':'北京单场'},
            orderData:'',
            sameFieldList:''
        }
    },
    methods:{
        listRecentRecomm(){
            let recomm = {pageNum:this.currentPage,pageSize:this.pagesize,userId:this.recommDetail.userId,recommendNo:this.recommDetail.recommendNo};
            service.pageRecentRecomm(recomm).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.recentRecommList = ret.body.list;
                    this.totalCount = ret.body.total;
                }
            })
        },
        listSameFieldRecomm(){
            let recomm = {recommendNo:this.recommDetail.recommendNo,matchId:this.recommDetail.matchId,productCode:this.recommDetail.productCode};
            service.listSameFieldRecomm(recomm).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.sameFieldList = ret.body.list;
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
        forFree(item){
            service.buyRecommDetails(item).then((ret) => {
                if(ret.body.status=='success'){
                    this.recommDetail = ret.body.details;
                    this.rDetails = ret.body.rdetails;
                    this.listRecentRecomm();
                    this.listSameFieldRecomm();
                };
            })
        },
        showOrderDetail(item) {
            this.orderData = item;
            this.$refs.orderBuy.show();
        },
    },
    mounted:function () {
        this.listRecentRecomm();
        this.listSameFieldRecomm();
    },
    components:{
        orderBuyTip:orderBuyTip
    },

}
</script>
