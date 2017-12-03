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
            <el-table :default-sort="{prop:'index',order:'ascending'}" :data="matchsTable" border style="width: 100%">
                <el-table-column prop="leagueName" label="联赛" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column  prop="matchStartTimeToStr" label="比赛时间" min-width="50" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="fullLetBall" label="全场让球" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                            <el-checkbox-button border="true" v-model="scope.row.host" @change="handleOpposit(scope.row.host,'custom',scope)">主11.11</el-checkbox-button>
                            <el-checkbox-button border="true" v-model="scope.row.custom" @change="handleOpposit(scope.row.custom,'host',scope)">客11.11</el-checkbox-button>
                    </template>
                </el-table-column>
                <el-table-column prop="fullSizeBall" label="全场大小" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <el-checkbox-button border="true" v-model="scope.row.big" @change="handleOpposit(scope.row.big,'small',scope)">大11.11</el-checkbox-button>
                        <el-checkbox-button border="true" v-model="scope.row.small" @change="handleOpposit(scope.row.small,'big',scope)">小11.11</el-checkbox-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="content-25-to-100 float-left content-wrap">
            <div class="send-rule rank-text">
                <div class="list-name text-center"><span>推荐规则</span></div>
                <div class="rule-text">
                    <p>推荐模式</p>
                    <p>xxxxx</p>
                </div>
                <div class="rule-text">
                    <p>擂台规则</p>
                    <p>xxxxx</p>
                </div>
            </div>
            <div class="rank-common content-wrap content-100-to-50">
                <div class="list-name text-center" style="margin-bottom:10px"><span>擂台周榜奖励</span></div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                    <el-table-column prop="index" label="名次" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column  prop="reward" label="奖励" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                </el-table>
            </div>
            <div class="rank-common content-100-to-50 content-wrap">
                <div class="list-name text-center" style="margin-bottom:10px"><span>擂台月榜奖励</span></div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                    <el-table-column prop="index" label="名次" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column  prop="reward" label="奖励" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Checkbox,CheckboxGroup,Button,Table,TableColumn,CheckboxButton,RadioGroup,RadioButton} from 'element-ui'
import service from 'web/modules/business/sendrecommend/service/sendrecommendService'
Vue.component(Checkbox.name,Checkbox);
Vue.component(CheckboxGroup.name,CheckboxGroup);
Vue.component(Button.name,Button);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(CheckboxButton.name,CheckboxButton);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(RadioButton.name,RadioButton);


export default {
    data(){
        return{
            alterCheck:false,
            checkAll: false,
            isWhole:true,
            checkedLeague: [],
            leagues: [],
            matchsTable:[],
            tableData4:[{index:'1',reward:'xx'},
                        {index:'2',reward:'xx'},
                        {index:'3',reward:'xx'},
                        {index:'4',reward:'xx'},
                        {index:'5',reward:'xx'}],
            productCode:'01',
            isShowCheckList:false
        }
    },
    created:function () {
        let param = {'productCode':this.productCode};
        this.getLeagueInfo(param);
        this.getMatchesInfo(param);
    },
    methods: {
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
            console.log(this.checkedLeague)
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
            console.log(this.checkedLeague);
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.leagues.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.leagues.length;
            let param = {'productCode':this.productCode,'leagueIds':value.join(",")};
            this.getMatchesInfo(param);
        },
        handleOpposit(val,oppo,scope){
            console.log(oppo,val,scope);
            if(val){
                for(var i=0,len=this.matchsTable;len=this.matchsTable.length;i++){
                    if(scope.row.matchId == this.matchsTable[i].matchId){
                        this.matchsTable[i][oppo] = false;
                        break;
                    }
                }
                //scope.row[oppo] = false;
            }
            //console.log(scope.row[oppo],val);
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
                    this.matchsTable = ret.body.list
                }
            })
        }
    }
}
</script>
