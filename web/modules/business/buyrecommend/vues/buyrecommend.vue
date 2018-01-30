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
                <el-radio-group v-model="productCode" class="radio-list" @change="changeProductCode">
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
                <el-radio-group v-model="radioVal" class="radio-list" @change="changeProductCode">
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
                    <a class="recommender-content" :key="item.userId" target="_blank" @click="goInfo(item)" >
                        <img  v-if="item.faceUrl" :src="staticPath+item.faceUrl"/>
                        <img  v-if="!item.faceUrl" :src="staticPath+'avatar/default.jpg'">
                    </a>
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
                <a  v-if="item.buyStatus >= 1 || item.userId==item.lookerId" target="_blank" @click="forFree(item)">
                    <el-button type="success">查看</el-button>
                </a>
                <a  v-if="item.price == '0' && item.userId!=item.lookerId" target="_blank" @click="forFree(item)">
                    <el-button type="success">免费</el-button>
                </a>
                <el-button type="danger" v-if="item.buyStatus=='0' && item.price != '0' && item.userId!=item.lookerId " @click="showOrderDetail(item)">{{item.price}}球果</el-button>
            </div>
            <div class="el-col-24 text-center infinite-scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <span v-show="busy && !loaded"><i class="keepRotate fa fa-circle-o-notch"></i>加载中</span>
                <span v-show="!busy && !loaded">加载更多</span>
                <span v-show="loaded" style="color: rgb(204, 204, 204); cursor: no-drop;">没有更多</span>
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
                pageNum:1,
                pageSize:8,
                loaded:false,
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
                this.pageNum = 1;
                this.isShowMatches = false;
                this.listRecomm();
            },
            changeProductCode(){ //每次改变种类的时候，页码数设置为1
                this.pageNum = 1;
                this.listRecomm();
            },
            listRecomm(flag) {
                let buyRecommInfo = {
                    'productCode': this.productCode,
                    'userName': this.sendName,
                    'matchIds': this.matchesVal.join(','),
                    'sortRule': this.radioVal,
                    'pageNum':this.pageNum,
                    'pageSize':this.pageSize,
                }
                if (this.radioVal == '5') {
                    buyService.listMyAttion(buyRecommInfo).then((res) => {
                        if (res.data.status == 'success') {
                            if(flag){
                                this.list = this.list.concat(res.data.list); // 多次加载数据
                            }else{
                                this.list = res.data.list;// 第一次加载数据
                            }
                            if(res.data.list.length == 0){ //如果数据返回的列表长度为0，证明全部查询出来了
                                this.loaded = true;
                            }else{
                                this.busy = false;
                            }
                            this.matches = res.data.listMatch
                        }
                    })
                } else {
                    buyService.listRecom(buyRecommInfo).then((res) => {
                        if (res.data.status == 'success') {
                            if(flag){
                                this.list = this.list.concat(res.data.list); // 多次加载数据
                            }else{
                                this.list = res.data.list;// 第一次加载数据
                            }
                            if(res.data.list.length == 0){ //如果数据返回的列表长度为0，证明全部查询出来了
                                this.loaded = true;
                            }else{
                                this.busy = false;
                            }
                            this.matches = res.data.listMatch
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
            showOrderDetail(item){
                sysUtil.checkLoginForBiz(this.showOrderDetailFn.bind(this,item));
            },
            showOrderDetailFn(item) {
                this.orderData = item;
                this.$refs.orderBuy.show();
            },
            loadMore: function() {
                if(!this.loaded){
                    this.busy = true;
                    // 多次加载数据
                    setTimeout(() => {
                        this.pageNum ++;
                        this.listRecomm(true);
                    }, 1000);
                }
            },
            goInfo(item){
                if(sysUtil.checkLoginForBiz()){
                    //this.$router.push({name:'recommender-info', query: { userName: rankItem.userName }});
                    window.open(location.origin+"/recommender-info?userName="+item.userName,'_blank');
                    return true;
                }else{
                    return false;
                }
            },
            forFree(item){
                if(sysUtil.checkLoginForBiz()){
                    window.open(location.origin+"/order-detail?recommendNo="+item.recommendNo,'_blank');
                    return true;
                }else{
                    return false;
                }
            },
        }
    }
</script>
