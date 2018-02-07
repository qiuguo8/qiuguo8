<template>
    <div class="send-recommend">
        <!-- <ul class="select-list">
            <li>亚盘</li>
            <li>大小球</li>
            <li>竞彩足球</li>
            <li>北京单场</li>
        </ul> -->
        <div class="select-list content-wrap">
            <el-radio-group v-model="productCode" class="radio-list" @change="productChange">
                <el-radio-button label="01" class="danger-radio small-checkbox">亚盘/大小球</el-radio-button>
                <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>
            </el-radio-group>
        </div>
        <div class="match-list content-wrap content-75-to-100">
            <div class="match-time select-list" style="height:70px">
                <!-- <el-radio-group v-model="isWhole" v-show="false">
                    <el-radio-button label="true">全场</el-radio-button>
                    <el-radio-button label="false">半场</el-radio-button>
                </el-radio-group> -->
                <button class="btn btn-padding btn-orange float-right" @click="showCheckList()"><i :class="isShowCheckList?'fa fa-chevron-circle-down rotate-180 transition-halfs':'transition-halfs fa fa-chevron-circle-down'"></i>赛事选择</button>
            </div>
            <div class="match-select" v-if="isShowCheckList">
                <el-checkbox-group v-model="checkedLeague" @change="handleCheckedLeaguesChange">
                    <el-checkbox v-for="league in leagues" :label="league.leagueId" :key="league.leagueId">{{league.leagueName}}</el-checkbox>
                </el-checkbox-group>
                <div class="check-all-btn text-center">
                    <el-checkbox-button v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox-button>
                    <el-checkbox-button @change="handleAlterCheckChange">反选</el-checkbox-button>
                </div>
            </div>
            <el-table v-if="productCode=='01'" :data="matchsTable" border style="width: 100%">
                <el-table-column prop="leagueName" label="联赛" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="matchStartTimeToStr" label="比赛时间" min-width="50" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="亚盘" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <div class="two-one">
                            <el-button v-if="scope.row.handiCapYa" :disabled="scope.row.usedFlag=='1'" class="table-btn left-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0101','home')">选主</el-button>
                            <span class="table-span">{{scope.row.handiCapYa}}</span>
                            <el-button v-if="scope.row.handiCapYa" :disabled="scope.row.usedFlag=='1'" class="table-btn right-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0101','visit')">选客</el-button>
                            <el-tag v-if="!scope.row.handiCapYa" :disabled="scope.row.usedFlag=='1'" @click="void (0)" type="warning">暂未出售</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="fullSizeBall" label="大小球" min-width="190" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <div class="two-one">
                            <el-button v-if="scope.row.handiCapDaXiao" :disabled="scope.row.usedFlagDaXiao=='1'" class="table-btn left-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0201','home')">大球</el-button>
                            <span class="table-span">{{scope.row.handiCapDaXiao}}</span>
                            <el-button v-if="scope.row.handiCapDaXiao" :disabled="scope.row.usedFlagDaXiao=='1'" class="table-btn right-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0201','visit')">小球</el-button>
                            <el-tag v-if="!scope.row.handiCapDaXiao" type="primary" @click="void (0)" size="small">暂未出售</el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-table v-if="productCode=='03'" :data="matchsTable" border style="width: 100%">
                <el-table-column prop="leagueName" label="联赛" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="matchStartTimeToStr" label="比赛时间" min-width="50" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="不让球" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <div>
                            <el-button v-if="scope.row.winJC && scope.row.drawJC && scope.row.lostJC " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0301','home')">{{scope.row.winJC}}</el-button>
                            <el-button v-if="scope.row.winJC && scope.row.drawJC && scope.row.lostJC " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0301','draw')">{{scope.row.drawJC}}</el-button>
                            <el-button v-if="scope.row.winJC && scope.row.drawJC && scope.row.lostJC " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0301','visit')">{{scope.row.lostJC}}</el-button>
                            <el-tag v-if="!scope.row.winJC || !scope.row.drawJC || !scope.row.lostJC " @click="void (0)" type="warning" >暂未出售</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="让球" min-width="190" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <div>
                            <span class="table-span">{{scope.row.letBallHandiCap}}</span>
                            <el-button v-if="scope.row.letBallHandiCap" :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0302','home')">{{scope.row.letBallWin}}</el-button>
                            <el-button v-if="scope.row.letBallHandiCap" :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0302','draw')">{{scope.row.letBallDraw}}</el-button>
                            <el-button v-if="scope.row.letBallHandiCap" :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0302','visit')">{{scope.row.letBallLost}}</el-button>
                            <el-tag v-if="!scope.row.letBallHandiCap" type="primary" @click="void (0)" size="small">暂未出售</el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-table v-if="productCode=='04'" :data="matchsTable" border style="width: 100%">
                <el-table-column prop="leagueName" label="联赛" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column  prop="matchStartTimeToStr" label="比赛时间" min-width="50" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="赔率" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <div>
                            <span class="table-span">{{scope.row.handiCapBD}}</span>
                            <el-button v-if="scope.row.winBD && scope.row.drawBD && scope.row.lostBD " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0401','home')">{{scope.row.winBD}}</el-button>
                            <el-button v-if="scope.row.winBD && scope.row.drawBD && scope.row.lostBD " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0401','draw')">{{scope.row.drawBD}}</el-button>
                            <el-button v-if="scope.row.winBD && scope.row.drawBD && scope.row.lostBD " :disabled="scope.row.usedFlag=='1'" class="table-btn" type="primary" size="small" @click="showInfoDialog(scope.row,'0401','visit')">{{scope.row.lostBD}}</el-button>
                            <el-tag v-if="!scope.row.winBD || !scope.row.drawBD || !scope.row.lostBD " @click="void (0)" type="warning" >暂未出售</el-tag>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="content-25-to-100 float-left content-wrap">
            <div class="send-rule rank-text">
                <div class="list-name text-center"><span>推荐规则</span></div>
                <div class="rule-text">
                    <p>推荐模式</p>
                    <p>准确率计算：准确率 = [胜*1+胜半*0.5] / [胜*1+胜半*0.5+负*1+负半*0.5]*100% </p>
                </div>
                <div class="rule-text">
                    <p>排行榜规则</p>
                    <p>周榜：每周一12：00时统计前一个自然周成绩；<br>月榜：每月1号12：00时统计前一个自然月成绩。</p>
                </div>
            </div>
            <div class="rank-common content-wrap content-100-to-50">
                <div class="list-name text-center" style="margin-bottom:10px"><span>周榜奖励</span></div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                    <el-table-column prop="index" label="名次" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column  prop="reward" label="奖励" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                </el-table>
            </div>
            <div class="rank-common content-100-to-50 content-wrap">
                <div class="list-name text-center" style="margin-bottom:10px"><span>月榜奖励</span></div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData5" border style="width: 100%">
                    <el-table-column prop="index" label="名次" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column  prop="reward" label="奖励" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog title="发布推荐" :visible.sync="showInfo" width="360px" :lock-scroll="false">
            <div class="commend-info">
                <p class="row-new"><span class="el-col-8">赛事：</span><span class="el-col-16">{{infoObj.homeTeamName}}-{{infoObj.visitTeamName}}</span></p>
                <p class="row-new"><span class="el-col-8">推荐：</span><span class="el-col-16">{{recommendInfo.recommendTeamName}}</span></p>
                <div class="form-control row-new">
                    <label class="el-col-8 text-center">价格：</label>
                    <div class="el-col-16">
                        <el-input type="number" :placeholder="priceRange.lowestPrice+'-'+ priceRange.highestPrice" :min="priceRange.lowestPrice" :max="priceRange.highestPrice" v-model="price" >
                            <template slot="append">球果</template>
                        </el-input>
                    </div>
                </div>
                <div class="form-control row-new">

                    <label class="el-col-8 text-center">推荐分析：</label>
                    <div class="el-col-16">
                        <el-input type="textarea" v-model="recommendContent"  rows="4" placeholder="请限制在500字内" maxlength="500"></el-input>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <el-button type="primary"  @click="publishRecom()">发布推荐</el-button>
                <el-button @click="close()">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
import sysUtil from 'web/common/utils/sysUtil.js'
import {Checkbox,CheckboxGroup,Button,Table,TableColumn,CheckboxButton,RadioGroup,RadioButton,Dialog,Input,Message} from 'element-ui'
import service from 'web/modules/business/sendrecommend/service/sendrecommendService'
Vue.component(Checkbox.name,Checkbox);
Vue.component(CheckboxGroup.name,CheckboxGroup);
Vue.component(Button.name,Button);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(CheckboxButton.name,CheckboxButton);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(RadioButton.name,RadioButton);
Vue.component(Dialog.name,Dialog);
Vue.component(Input.name,Input);


export default {
    data(){
        return{
            alterCheck:false,
            checkAll: false,
            isWhole:true,
            checkedLeague: [],
            leagues: [],
            matchsTable:[],
            tableData4:[{index:'1',reward:'200球果'},
                        {index:'2',reward:'150球果'},
                        {index:'3',reward:'100球果'},
                        {index:'4',reward:'88球果'},
                        {index:'5',reward:'66球果'}],
            tableData5:[{index:'1',reward:'800球果'},
                        {index:'2',reward:'600球果'},
                        {index:'3',reward:'400球果'},
                        {index:'4',reward:'200球果'},
                        {index:'5',reward:'100球果'},
                        {index:'6-10',reward:'88球果'},
                        ],
            productCode:'01',
            isShowCheckList:false,
            showInfo:false,
            infoObj:{homeTeamName:null,visitTeamName:null},
            priceRange:{lowestPrice:null, highestPrice:null},
            recommendInfo:{recommendTeamId:null, recommendTeamName:null, categoryCode:null, productCode:null},
            recommendContent:null,
            price:null,
        }
    },
    created:function () {
        let param = {'productCode':this.productCode};
        this.getLeagueInfo(param);
        this.getMatchesInfo(param);
    },
    methods: {
        showInfoDialog(obj,category,team){
            sysUtil.checkLoginForBiz(this.showInfoDialogFn.bind(this,obj,category,team));
        },
        showInfoDialogFn(obj,category,team){
            obj.productCode=category.substring(0,2);
            return service.goPublishRecommend(obj).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.infoObj = obj;
                    let recommendTeamId;
                    let recommendTeamName;
                    if(team == 'home'){
                        recommendTeamId = obj.homeTeamId;
                        recommendTeamName = obj.homeTeamName;
                    }else if (team == 'visit'){
                        recommendTeamId = obj.visitTeamId;
                        recommendTeamName = obj.visitTeamName;
                    }else {
                        recommendTeamId = 0;
                        recommendTeamName = "平局";
                    }

                    this.recommendInfo = {
                        'recommendTeamId':recommendTeamId,
                        'recommendTeamName':recommendTeamName,
                        'categoryCode':category,
                        'productCode':category.substring(0,2)}
                    this.priceRange = ret.body.priceRange;
                    this.open();
                }else{
                    Message({
                        message:ret.body.info,
                        type:ret.body.status || 'info'
                    })
                }
            })
        },
        open(){
            this.showInfo = true;
        },
        close(){
            this.showInfo = false;
        },
        showCheckList(){
            this.isShowCheckList = !this.isShowCheckList;
        },
        handleAlterCheckChange(val){
            var alter = [];
            var tmp = this.checkedLeague;
            if(tmp && tmp.length==0){//如果本来为空，反选之后就变成全选
                for(let i=0;i<this.leagues.length;i++){
                    let item = this.leagues[i]
                    this.checkedLeague.push(item.leagueId)
                }
                this.checkAll = true;
                return;
            }
            if(tmp && tmp.length==this.leagues.length){//如果本来为全选，反选之后就变成0选
                this.checkedLeague = [];
                this.checkAll = false;
                return;
            }
            for(let i = 0,len=this.leagues.length;i<len;i++){
                if(tmp.indexOf(this.leagues[i].leagueId)<0){
                    alter.push(this.leagues[i].leagueId);
                }
            }
            this.checkedLeague = alter;
            let param = {'productCode':this.productCode,'leagueIds':this.checkedLeague.join(",")};
            this.getMatchesInfo(param);

        },
        handleCheckAllChange(val) {
            if(val){//点击全选之后将leagues里面的id属性加到选中数组中
                for(let i=0;i<this.leagues.length;i++){
                    let item = this.leagues[i]
                    this.checkedLeague.push(item.leagueId)
                }
            }else{
                this.checkedLeague = [];//取消选中则清空
            }
            this.isIndeterminate = false;
            let param = {'productCode':this.productCode,'leagueIds':this.checkedLeague.join(",")};
            this.getMatchesInfo(param);
        },
        handleCheckedLeaguesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.leagues.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.leagues.length;
            let param = {'productCode':this.productCode,'leagueIds':value.join(",")};
            this.getMatchesInfo(param);
        },
        handleOpposit(val,oppo,scope){
            if(val){
                for(var i=0,len=this.matchsTable;len=this.matchsTable.length;i++){
                    if(scope.row.matchId == this.matchsTable[i].matchId){
                        this.matchsTable[i][oppo] = false;
                        break;
                    }
                }
                //scope.row[oppo] = false;
            }``
        },
        productChange(){
            let param = {'productCode':this.productCode};
            this.getLeagueInfo(param);
            this.getMatchesInfo(param);
        },
        getLeagueInfo(param){
            service.getLeagueInfo(param).then((ret)=>{ //查询相关的联赛信息
                if(ret.body.status == 'success'){
                    this.leagues = ret.body.list
                }
            })
        },
        getMatchesInfo(param){
            service.getMatchesInfo(param).then((ret)=>{ //查询相关的比赛信息
                if(ret.body.status == 'success'){
                    this.matchsTable = ret.body.list;
                }
            })
        },
        publishRecom(){
            let recommendDetails = this.infoObj;
            if(this.recommendInfo.categoryCode == '0101'){
                recommendDetails.handicap = this.infoObj.handiCapYa;
                recommendDetails.homeTeamSp = this.infoObj.winYa;
                recommendDetails.tieSp = '0';//亚盘没有平局说法
                recommendDetails.visitTeamSp = this.infoObj.lostYa;
            }else if(this.recommendInfo.categoryCode == '0201'){
                recommendDetails.handicap = this.infoObj.handiCapDaXiao;
                recommendDetails.homeTeamSp = this.infoObj.daXiaoWin;
                recommendDetails.tieSp = '0';//大小球没有平局说法
                recommendDetails.visitTeamSp = this.infoObj.daXiaoLost;
            }else if(this.recommendInfo.categoryCode == '0301'){
                recommendDetails.handicap = '无';
                recommendDetails.homeTeamSp = this.infoObj.winJC;
                recommendDetails.tieSp = this.infoObj.drawJC;
                recommendDetails.visitTeamSp = this.infoObj.lostJC;
            }else if(this.recommendInfo.categoryCode == '0302'){
                recommendDetails.handicap = this.infoObj.letBallHandiCap;
                recommendDetails.homeTeamSp = this.infoObj.letBallWin;
                recommendDetails.tieSp = this.infoObj.letBallDraw;
                recommendDetails.visitTeamSp = this.infoObj.letBallLost;
            }else if(this.recommendInfo.categoryCode == '0401'){
                recommendDetails.handicap = this.infoObj.handiCapBD;
                recommendDetails.homeTeamSp = this.infoObj.winBD;
                recommendDetails.tieSp = this.infoObj.drawBD;
                recommendDetails.visitTeamSp = this.infoObj.lostBD;
            }

            recommendDetails.productCode = this.recommendInfo.productCode;
            recommendDetails.categoryCode = this.recommendInfo.categoryCode;
            recommendDetails.recommendTeamId = this.recommendInfo.recommendTeamId;
            recommendDetails.recommendContent = this.recommendContent;
            recommendDetails.price = this.price;

            service.publishRecommend(recommendDetails).then((ret)=>{
                if(ret.body.status == 'failure'){
                    Message({
                        message:ret.body.info,
                        type:ret.body.status || 'info'
                    })
                }else{
                    Message({
                        message:"发布成功！",
                        type:ret.body.status || 'info'
                    })
                    let param = {'productCode':this.productCode};
                    this.getLeagueInfo(param);
                    this.getMatchesInfo(param);
                    this.showInfo = false;//关闭弹层
                    this.price = '';
                    this.recommendContent='';
                }
            })
        }
    }
}
</script>