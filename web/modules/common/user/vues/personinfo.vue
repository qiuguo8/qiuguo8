<template>
    <div class="achive-detail">
       
        <div class="achive-list">
            <p class="select-name"><span>战绩</span></p>
            
            <div class="select-list content-wrap">
                <el-radio-group v-model="productCode3" class="radio-list" @change = "changeProductCode3()">
                    <el-radio-button label="01" class="danger-radio small-checkbox">亚盘</el-radio-button>
                    <el-radio-button label="02" class="danger-radio small-checkbox">大小球</el-radio-button>
                    <el-radio-button label="03" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                    <el-radio-button label="04" class="danger-radio small-checkbox">北京单场</el-radio-button>
                </el-radio-group>
            </div> 
            <div class="left-menu-table">
               
                
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border >
                    <el-table-column prop="title" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="recommTotal" label="推荐数量" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="winTotal" label="赢" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="loseTotal" label="输" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accuracyRate" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profitRate" label="盈利率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
            </div>
        </div>
        <div class="el-col-24 rank-common">
            <div class="left-name" style="margin-bottom:10px"><span>近期推荐</span></div>
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData4" border>
                <el-table-column prop="productCode" label="比赛类型" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="leagueName" label="联赛类型" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="price" label="价格" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="viewTimes" label="购买人数" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="profit" label="成交总价" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                                <span>{{Number(parseInt(scope.row.price))*Number(parseInt(scope.row.viewTimes))}}</span>
                            </template>
                </el-table-column>
                <el-table-column prop="profit" label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
            <div class="page-block text-center">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange4()"
                :current-page="currentPage4"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="15"
                layout=" prev, pager, next"
                :total="400">
                </el-pagination>
            </div>
        </div>
        <div class="achive-list">
            <p class="select-name"><span>账户安全</span></p>
            <div class="text-left two-colums-to-one transition-halfs">
                <div class="float-left">
                    <span class="el-col-14">登录密码：已完成</span>
                    <el-button type="primary">修改</el-button>
                </div>
                <div class="float-left">
                    <span class="el-col-14">手机认证：已完成</span>
                    <el-button type="primary">修改</el-button>
                </div>
                <div class="float-left">
                    <span class="el-col-14">交易密码：已完成</span>
                    <el-button type="primary">修改/去设置</el-button>
                </div>
                <div class="">
                    <span class="el-col-14">身份认证：已完成</span>
                    <el-button type="primary">修改</el-button>
                </div>
                <div class="">
                    <span class="el-col-14">银行卡绑定：未完成</span>
                    <el-button type="primary">去绑定</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Table,TableColumn,Pagination,CheckboxButton,RadioButton,RadioGroup} from 'element-ui'
import personinfoService from "web/modules/common/user/service/personinService.js"
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(RadioButton.name, RadioButton)
Vue.component(RadioGroup.name, RadioGroup)
export default {
    data(){
        return {
            tableData3:[],
            tableData4:[],
            testVal:false,
            productCode3:'01',
            currentPage4:1
        }
    },
     mounted(){
         personinfoService.getRecordList({userId:"20171207401163948706",productCode:this.productCode3}).then((data)=>{
            this.tableData3 = [];
            data.map.lastThreeDayList.title = "3天战绩";
            this.tableData3.push(data.map.lastThreeDayList);
            data.map.lastSevenDayList.title = "7天战绩";
            this.tableData3.push(data.map.lastSevenDayList);
            data.map.lastThirtyDayList.title = "30天战绩";
            this.tableData3.push(data.map.lastThirtyDayList);
            data.map.lastWeekList.title = "上周战绩";
            this.tableData3.push(data.map.lastWeekList);
            data.map.lastMonthList.title = "上月战绩";
            this.tableData3.push(data.map.lastMonthList);
          
        }),
        personinfoService.getRecommendRecord({userId:"20171207401163948706"}).then((data)=>{
            console.log(data);
            this.tableData4 = data.list.list;
        }),
        personinfoService.getSecurityInformation({userId:"20171207401163948706"}).then((data)=>{
            console.log(data);
        })
     },
     methods:{
         changeProductCode3(){
            this.tableData3 = [];
            personinfoService.getRecordList({userId:"20171207401163948706",productCode:this.productCode3}).then((data)=>{
            data.map.lastThreeDayList.title = "3天战绩";
            this.tableData3.push(data.map.lastThreeDayList);
            data.map.lastSevenDayList.title = "7天战绩";
            this.tableData3.push(data.map.lastSevenDayList);
            data.map.lastThirtyDayList.title = "30天战绩";
            this.tableData3.push(data.map.lastThirtyDayList);
            data.map.lastWeekList.title = "上周战绩";
            this.tableData3.push(data.map.lastWeekList);
            data.map.lastMonthList.title = "上月战绩";
            this.tableData3.push(data.map.lastMonthList);
            })
         },
         handleCurrentChange4(){
            personinfoService.getRecommendRecord({userId:"20171207401163948706",pageNum:this.currentPage4}).then((data)=>{
            console.log(data);
            this.tableData4 = data.list.list;
        })
         }
     }
}

</script>