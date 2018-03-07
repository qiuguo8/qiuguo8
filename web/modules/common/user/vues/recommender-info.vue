<template>
    <div class="recommender-info">
        <div class="select-list content-wrap text-center">
            <el-radio-group v-model="productCode" class="radio-list" @change = "recommmenderInfo()">
                <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                
                
            </el-radio-group>
        </div>
        <div class="info-list row-new">
            <div class="content-25-to-all-50 content-wrap text-center">
                <img :src="avatarUrl"/>
                <p class="user-name">{{recommDetail.userName}}</p>
                <button v-if="!recommDetail.subscribeStatus || recommDetail.subscribeStatus==0 " class="btn btn-orange btn-padding" @click="addUserSubscribe()" style="margin-top:5px;padding:5px 30px">关 注</button>
                <button v-if="recommDetail.subscribeStatus==1" class="btn btn-success btn-padding" @click="cancelUserSubscribe()" style="margin-top:5px;padding:5px 30px">已关注</button>
            </div>
            <div class="content-25-to-all-50 content-wrap">
                <p>等级:<span>{{assessLevelForm[recommDetail.assessLevel]}}</span></p>
                <p>星级:
                    <el-rate style="display:inline-block" v-model="recommDetail.starLevel" disabled show-score text-color="#ff9900" score-template=""></el-rate>
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
                            <p v-if="scope.row.price==0 || scope.row.buyStatus=='1' || scope.row.recommendStatus=='02' || scope.row.userId==scope.row.lookerId">
                                <router-link  style="margin-top:10px" class="btn btn-orange btn-padding" target="_blank" :to="{name:'order-detail',query:{recommendNo:scope.row.recommendNo}}">免费查看</router-link>
                            </p>
                            <!-- <el-button v-if="scope.row.price==0 || scope.row.buyStatus=='1' || scope.row.recommendStatus=='02'" type="warning" @click="forFree(scope.row)">免费查看</el-button> -->
                            <p v-if="scope.row.buyStatus=='0' && scope.row.price>0 && scope.row.recommendStatus=='01' && scope.row.userId!=scope.row.lookerId">
                                <el-button type="warning" @click="showOrderDetail(scope.row)">{{scope.row.price}}球果</el-button>
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column label="结果" min-width="120" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <div class="match-wrap">
                                <p class="result">{{hitResult[scope.row.hitResult]}}</p>
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
        <order-buy-tip ref="orderBuy" :order-data="orderData"></order-buy-tip>
    </div>
</template>
<script>
import Vue from 'vue'
import {
    Input,
    Button,
    Table,
    TableColumn,
    Pagination,
    CheckboxButton,
    RadioButton,
    RadioGroup,
    Dialog,
    Form,
    FormItem
} from "element-ui";
import service from 'web/modules/business/trade/service/orderService'
import orderBuyTip from 'web/modules/business/trade/vues/order-buy-tip.vue'
import pathUtil from 'web/common/utils/pathUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import buyService from 'web/modules/business/buyrecommend/service/buyRecommService'
import {Message} from 'element-ui';
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Pagination.name, Pagination);
Vue.component(CheckboxButton.name, CheckboxButton);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);

export default {
    data(){
        return {
            recentRecommList:[],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
            recommDetail:{},
            product:{'01':'亚盘','02':'大小球','03':'竞彩足球','04':'北京单场'},
            orderData:'',
            assessLevelForm:{'01':'初级','02':'中级','03':'高级','04':'资深级','05':'专家级','':'暂无'},
            avatarUrl:'',
            productCode: '01',
            userName:this.$route.query.userName,
            hitResult:{'00':'待开奖','01':'赢','02':'赢半','03':'走水','04':'输半','05':'输'}
        }
    },
    methods:{
        listRecentRecomm(){
            let recomm = {pageNum:this.currentPage,pageSize:this.pagesize,userId:this.recommDetail.userId,productCode:this.productCode};
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
        showOrderDetail(item) {
            this.orderData = item;
            this.$refs.orderBuy.show();
        },
        recommmenderInfo(item){
            item = {userName:this.userName,productCode:this.productCode}
            service.userInfo(item).then((ret) => {
                if(ret.body.status=='success'){
                    this.recommDetail = ret.body.details;
                    if(!this.recommDetail.faceUrl){
                        this.recommDetail.faceUrl="avatar/default.jpg"
                    };
                    this.avatarUrl=pathUtil.getStaticPath()+this.recommDetail.faceUrl;
                    this.listRecentRecomm();
                };
            })
        },
        addUserSubscribe(){
            let item={subscribeUserId:this.recommDetail.userId}
            buyService.addUserSubscribe(item).then((ret) => {
                console.log(ret)
                if(ret.body.status=='success'){
                    this.recommmenderInfo();
                }else{
                    Message({
                        message:ret.body.errInfo,
                        type:'error'
                    })
                }
            })
        },
        cancelUserSubscribe(){
            let item={subscribeUserId:this.recommDetail.userId}
            buyService.cancelUserSubscribe(item).then((ret) => {
                console.log(ret)
                if(ret.bodyText=='success'){
                    this.recommmenderInfo();
                };
            })
        }

    },
    mounted:function () {
        this.recommmenderInfo();
    },
    components:{
        orderBuyTip:orderBuyTip
    },

}
</script>
