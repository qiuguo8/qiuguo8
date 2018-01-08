<template>
    <div class="">
        <div class="search-input content-25-to-100 content-wrap">
            <!-- <input type="text" placeholder=""/> -->
            <el-input placeholder="搜索分析师" v-model="sendName" maxlength="20">
                <template slot="append"><button class="el-button el-button--primary" @click="listRecomm">搜索</button></template>
            </el-input>
        </div>
        <div class="select-types types-select float-left content-75-to-100 content-wrap">
            <label class="types-label">类型</label>
            <!-- <ul class="types-list">
                <li>亚盘</li>
                <li>大小球</li>
                <li>竞彩足球</li>
                <li>北京单场</li>
            </ul> -->
            <div class="types-list">
                <el-radio-group v-model="productCode" class="radio-list" @change="listRecomm">
                    <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                    <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                    <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                    <el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>
                </el-radio-group>
            </div>
        </div>
        <br class="clear-fix"/>
        <div class="select-types sort-types">
            <label class="types-label">筛选、排序</label>
            <!-- <ul class="types-list">
                <li>综合</li>
                <li>3天准确率</li>
                <li>7天准确率</li>
                <li>30天准确率</li>
                <li>30天盈利率</li>
                <li>我的关注</li>
                <li>指定赛事</li>
            </ul> -->
            <div class="types-list">
                <el-radio-group v-model="radioVal" class="radio-list" @change="listRecomm">
                    <el-radio-button label="1" class="danger-radio small-checkbox">综合</el-radio-button>
                    <el-radio-button label="2" class="danger-radio small-checkbox">3天准确率</el-radio-button>
                    <el-radio-button label="3" class="danger-radio small-checkbox">7天准确率</el-radio-button>
                    <el-radio-button label="4" class="danger-radio small-checkbox">30天准确率</el-radio-button>
                    <el-radio-button label="5" class="danger-radio small-checkbox">我的关注</el-radio-button>
                    <!-- <el-radio-button :label="matchesVal" @change="showMatches()" class="danger-radio small-checkbox">指定赛事</el-radio-button> -->
                    <button :class="radioVal.length>1?'btn select-matches selected':'btn select-matches'"  @click="showMatches()">指定赛事</button>
                </el-radio-group>
            </div>
        </div>
        <div class="clear-fix"></div>
        <div class="intros-wrap content-wrap el-col-24">
            <div class="intro-wrap transition-halfs" v-for="item in list" :key="item.index">
                <div class="match-name text-elipse">{{item.homeTeamName}}VS{{item.visitTeamName}}</div>
                <div class="intro-info">
                    <img  v-if="item.faceUrl" :src="staticPath+item.faceUrl"/>
                     <img  v-if="!item.faceUrl" :src="staticPath+'avatar/default.jpg'">
                    <!-- <button class="el-button btn-success" v-if="item.subscribeStatus=='1'">已关注</button>
                    <button class="el-button btn-orange" v-if="item.subscribeStatus=='0'" @click="addUserSubscribe(item)" >关注</button> -->
                </div>
                <div class="intro-text">
                    <p class="text-elipse">{{item.userName}}</p>
                    <p class="text-elipse">{{assessLevelForm[item.assessLevel]}}</p>
                    <el-rate style="display:inline-block" v-model="item.starLevel" disabled show-score text-color="#ff9900" score-template=""></el-rate>
                    <p class="text-elipse">{{item.recordsValue}}</p>
                </div>
                <div class="recomd-info text-elipse">
                    <span>{{item.recommendContent}}</span>
                </div>
                <el-button type="success" v-if="item.buyStatus=='1' || item.price == '0' || item.userId==item.lookerId" @click="forFree(item)">免费</el-button>
                <el-button type="danger" v-if="item.buyStatus=='0' && item.price != '0' && item.userId!=item.lookerId " @click="showOrderDetail(item)">{{item.price}}球果</el-button>
            </div>
            <div class="el-col-24 text-center infinite-scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <span v-show="busy"><i class="keepRotate fa fa-circle-o-notch"></i>加载中</span>
                <span v-show="!busy">加载更多</span>
            </div>
        </div>

        <el-dialog ref="matchTable" title="指定赛事选择" :visible.sync="isShowMatches" :lock-scroll="false">
            <el-checkbox-group v-model="matchesVal" size="small">
                <el-checkbox v-for="item in matches" :key="item.matchId" :label="item.matchId" border>{{item.homeTeamName}}VS{{item.visitTeamName}}</el-checkbox>
            </el-checkbox-group>
            <div slot="footer">
                <el-button @click="isShowMatches=false">取消</el-button>
                <el-button @click="selectedMatch()" type="primary">确定</el-button>
            </div>
        </el-dialog>
        <order-buy-tip ref="orderBuy" :order-data="orderData"></order-buy-tip>
    </div>
</template>
<script>
    import Vue from 'vue'
    import sysUtil from 'web/common/utils/sysUtil.js'
    import {Input,Button,Table,TableColumn,RadioButton,RadioGroup,Dialog,Checkbox,CheckboxGroup} from 'element-ui'
    import buyService from 'web/modules/business/buyrecommend/service/buyRecommService'
    import pathUtil from 'web/common/utils/pathUtil.js'
    import orderBuyTip from 'web/modules/business/trade/vues/order-buy-tip.vue'
    import orderDetail from 'web/modules/business/trade/vues/order-detail.vue'
    Vue.component(Input.name,Input);
    Vue.component(Button.name,Button);
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(RadioButton.name, RadioButton)
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(Dialog.name, Dialog)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    export default {
        data(){
            return{
                total:[],
                list:[],
                radioVal:'1',
                productCode:'01',
                matches:[],
                matchesVal:[],
                isShowMatches:false,
                sendName:null,
                orderData:null,
                staticPath:pathUtil.getStaticPath(),
                assessLevelForm:{'01':'初级','02':'中级','03':'高级','04':'资深级','05':'专家级'},
            }
        },
        created:function(){
            this.listRecomm();
        },
        components:{
            orderBuyTip:orderBuyTip
        },
        methods: {
            showMatches() {
                this.isShowMatches = true;
            },
            selectedMatch() {
                this.isShowMatches = false;
                this.listRecomm();
            },
            listRecomm() {
                let buyRecommInfo = {
                    'productCode': this.productCode,
                    'userName': this.sendName,
                    'matchIds': this.matchesVal.join(','),
                    'sortRule': this.radioVal,
                }
                if (this.radioVal == '5') {
                    buyService.listMyAttion(buyRecommInfo).then((ret) => {
                        if (ret.body.status == 'success') {
                            this.list = ret.body.list;
                            this.matches = ret.body.listMatch
                        }
                    })
                } else {
                    buyService.listRecom(buyRecommInfo).then((ret) => {
                        if (ret.body.status == 'success') {
                            this.list = ret.body.list;
                            this.matches = ret.body.listMatch
                        }
                    })
                }

            },
            addUserSubscribe(item) {
                let subsc = {'subscribeUserId': item.userId}
                buyService.addUserSubscribe(subsc).then((ret) => {
                    alert(ret.bodyText);
                    this.listRecomm();
                })
            },
            showOrderDetail(item) {
                this.orderData = item;
                this.$refs.orderBuy.show();
            },
            forFree(item){
                sysUtil.checkLoginForBiz(this.forFreeFn.bind(this,item));
            },
            forFreeFn(item){
                this.$router.push({name:'order-detail',query: {recommendNo:item.recommendNo}})

            }
        }
    }
</script>
