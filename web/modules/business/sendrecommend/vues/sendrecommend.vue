<template>
    <div class="send-recommend">
        <ul class="select-list">
            <li>亚盘</li>
            <li>大小球</li>
            <li>竞彩足球</li>
            <li>北京单场</li>
        </ul>
        <div class="match-list content-wrap content-75-to-100">
            <div class="match-time select-list">
               <el-radio-group v-model="isWhole">
                    <el-radio-button label="true">全场</el-radio-button>
                    <el-radio-button label="false">半场</el-radio-button>
                </el-radio-group>
            </div>
            <div class="match-select">
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
                <div class="check-all-btn text-center">
                    <el-checkbox-button v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox-button>
                    <el-checkbox-button @change="handleAlterCheckChange">反选</el-checkbox-button>
                </div>
            </div>
            <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData3" border style="width: 100%">
                <el-table-column prop="match" label="比赛" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column  prop="matchTime" label="比赛时间" min-width="50" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="hostTeam" label="主队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="customTeam" label="客队" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="wholeGoal" label="全场让球" min-width="170" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                            <el-checkbox-button border="true" v-model="scope.row.host" @change="handleOpposit(scope.row.host,'custom',scope)">主11.11</el-checkbox-button>
                            <el-checkbox-button border="true" v-model="scope.row.custom" @change="handleOpposit(scope.row.custom,'host',scope)">客11.11</el-checkbox-button>
                    </template>
                </el-table-column>
                <el-table-column prop="wholeSize" label="全场大小" min-width="170" align="center" head-align="center" class-name="table-fixed">
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
Vue.component(Checkbox.name,Checkbox);
Vue.component(CheckboxGroup.name,CheckboxGroup);
Vue.component(Button.name,Button);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(CheckboxButton.name,CheckboxButton);
Vue.component(RadioGroup.name,RadioGroup);
Vue.component(RadioButton.name,RadioButton);

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
export default {
    data(){
        return{
            alterCheck:false,
            checkAll: false,
            isWhole:true,
            checkedCities: ['Shanghai', 'Beijing'],
            cities: cityOptions,
            tableData3:[{match:'1',matchTime:'10-26 23:00',hostTeam:'7胜3负',customTeam:'80%',wholeGoal:'',wholeSize:'',host:false,custom:false,big:false,small:false},
                        {match:'2',matchTime:'xx',hostTeam:'7胜3负',customTeam:'80%',wholeGoal:'',wholeSize:'',host:false,custom:false,big:false,small:false},
                        {match:'3',matchTime:'xx',hostTeam:'7胜3负',customTeam:'80%',wholeGoal:'',wholeSize:'',host:false,custom:false,big:false,small:false},
                        {match:'4',matchTime:'xx',hostTeam:'7胜3负',customTeam:'80%',wholeGoal:'',wholeSize:'',host:false,custom:false,big:false,small:false},
                        {match:'5',matchTime:'xx',hostTeam:'7胜3负',customTeam:'80%',wholeGoal:'',wholeSize:'',host:false,custom:false,big:false,small:false}],
            tableData4:[{index:'1',reward:'xx'},
                        {index:'2',reward:'xx'},
                        {index:'3',reward:'xx'},
                        {index:'4',reward:'xx'},
                        {index:'5',reward:'xx'}]
        }
    },
    methods: {
        handleAlterCheckChange(val){
            var alter = [];
            var tmp = this.checkedCities;
            if(tmp && tmp.length==0){
                this.checkedCities = cityOptions;
                this.checkAll = true;
                return;
            }
            if(tmp && tmp.length==cityOptions.length){
                this.checkedCities = [];
                this.checkAll = false;
                return;
            }
            for(var i = 0,len=cityOptions.length;i<len;i++){
                if(tmp.indexOf(cityOptions[i])<0){
                    alter.push(cityOptions[i]);
                }
            }
            // console.log(alter);
            this.checkedCities = alter;
        },
        handleCheckAllChange(val) {
            console.log(val);
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            console.log(value);
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        handleOpposit(val,oppo,scope){
            console.log(oppo,val,scope);
            if(val){
                for(var i=0,len=this.tableData3;len=this.tableData3.length;i++){
                    if(scope.row.match == this.tableData3[i].match){
                        this.tableData3[i][oppo] = false;
                        break;
                    }
                }
                //scope.row[oppo] = false;
            }
            //console.log(scope.row[oppo],val);
        }
    }
}
</script>
