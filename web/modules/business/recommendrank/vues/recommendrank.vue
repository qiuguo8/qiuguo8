<template>
    <div class="recommend-rank index-center">
        <!-- <ul class="select-list content-wrap text-center">
            <li>亚盘</li>
            <li>大小球</li>
            <li>竞彩足球</li>
            <li>北京单场</li>
        </ul> -->
        <div class="select-list content-wrap text-center" @change = "changeProductCode()">
            <el-radio-group v-model="productCode" class="radio-list" >
                <el-radio-button label="01"  class="danger-radio small-checkbox">亚盘</el-radio-button>
                <el-radio-button label="02"  class="danger-radio small-checkbox">大小球</el-radio-button>
                <el-radio-button label="03"  class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="04"  class="danger-radio small-checkbox">北京单场</el-radio-button>
            </el-radio-group>
        </div>
        <div class="">
            <div class="content-wrap float-left types-news type-rank-list content-60-to-100" style="display:inline-block">
                <!-- <ul class="select-list date-list text-left">
                    <li>3天</li>
                    <li>7天</li>
                    <li>30天</li>
                </ul> -->
                <div class="select-list date-list text-left" @change = "changeDays()">
                    <el-radio-group v-model="days" class="radio-list" >
                        <el-radio-button label="3" class="danger-radio small-checkbox">3天</el-radio-button>
                        <el-radio-button label="7" class="danger-radio small-checkbox">7天</el-radio-button>
                        <el-radio-button label="30"  class="danger-radio small-checkbox">30天</el-radio-button>
                    </el-radio-group>
                </div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData3" border style="width: 100%">
                    <el-table-column type="index" label="排行" width="50" align="center" head-align="center" ></el-table-column>
                    <el-table-column prop="userName" label="推荐师" min-width="50" align="center" head-align="center" class-name="table-fixed"> 
                        <template slot-scope="scope">
                                <a style="cursor:pointer;color:#409eff;" :key="scope.row.userId" target="_blank" @click="goInfo(scope.row)" >{{scope.row.userName}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="recommTotal" label="场次" min-width="30" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="accuracyRate" label="胜率" min-width="40" align="center" head-align="center" class-name="table-fixed">
                         <template slot-scope="scope">
                                <span>{{(scope.row.accuracyRate*100).toFixed(2)}}</span>%
                         </template>
                    </el-table-column>
                    <el-table-column prop="recomming" label="正在推荐" min-width="80" align="center" head-align="center" class-name="table-fixed">
                          <template slot-scope="scope">
                                <span v-if="scope.row.recomms && scope.row.recomms.length>0"><a style="cursor:pointer;color:#409eff;" :key="scope.row.userId" target="_blank" @click="goInfo(scope.row)" >{{scope.row.recomms[0].leagueName}}：{{scope.row.recomms[0].homeTeamName}} &nbsp;VS&nbsp; {{scope.row.recomms[0].visitTeamName}}</a></span><br/>
                          </template>  
                    </el-table-column>
                </el-table>
                <div class="el-col-24 text-center infinite-scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <span v-show="!isFull&&busy"><i class="keepRotate fa fa-circle-o-notch"></i>加载中</span>
                    <span v-show="!isFull&&!busy" @click="loadMore()">加载更多</span>
                    <span v-show="isFull" style="color:#ccc;cursor:no-drop">没有更多</span>
                </div>
                <!-- <div class="page-block text-center">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="15"
                    layout=" prev, pager, next"
                    :total="400">
                    </el-pagination>
                </div> -->
            </div>
            <!-- <div class="content-wrap rank-common float-right rank-rule content-25-to-100">
                <div class="list-name"><span>排行规则</span></div>
                <div class="rule-text text-left">

                </div>
            </div> -->
            <div class="content-wrap last-rank content-40-to-100 text-center">
                <div class="content-wrap rank-common content-100-to-50">
                    <div class="list-name"><span>第{{week}}周 周榜</span></div>
                    <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                        <el-table-column type="index" label="排行" width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column  prop="userName" label="用户名" min-width="100" align="center" head-align="center" class-name="table-fixed"> 
                            <template slot-scope="scope">
                                <a style="cursor:pointer;color:#409eff;" :key="scope.row.userId" target="_blank" @click="goInfo(scope.row)" >{{scope.row.userName}}</a>
                            </template>
                        </el-table-column>
                        <el-table-column  prop="zj" label="战绩" min-width="140" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <span>{{scope.row.winCount}}胜{{scope.row.tieTotal}}平{{scope.row.loseCount}}负</span>
                            </template>
                         </el-table-column>
                        <el-table-column prop="zql" label="准确率" min-width="70" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <span>{{(scope.row.accuracyRate*100).toFixed(2)}}</span>%
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="content-wrap rank-common content-100-to-50 text-center">
                    <div class="list-name"><span>{{month}}月 月榜</span></div>
                     <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData5" border style="width: 100%">
                        <el-table-column type="index" label="排行" width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column  prop="userName" label="用户名" min-width="120" align="center" head-align="center" class-name="table-fixed">
                             <template slot-scope="scope">
                                <a style="cursor:pointer;color:#409eff;" :key="scope.row.userId" target="_blank" @click="goInfo(scope.row)" >{{scope.row.userName}}</a>
                            </template>
                         </el-table-column>
                        <el-table-column  prop="zj" label="战绩" min-width="120" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <span>{{scope.row.winCount}}胜{{scope.row.tieTotal}}平{{scope.row.loseCount}}负</span>
                            </template>
                         </el-table-column>
                        <el-table-column prop="zql" label="准确率" min-width="70" align="center" head-align="center" class-name="table-fixed">
                            <template slot-scope="scope">
                                <span>{{(scope.row.accuracyRate*100).toFixed(2)}}</span>%
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import recommendrankService from 'web/modules/business/recommendrank/service/recommrankService.js'
import {Input,Button,Table,TableColumn,Pagination,RadioButton,RadioGroup} from 'element-ui'
import sysUtil from 'web/common/utils/sysUtil.js'
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(RadioButton.name, RadioButton)
Vue.component(RadioGroup.name, RadioGroup)
export default {
    data(){
        return {
            tableData3:[],
            tableData4:[],
            tableData5:[],
            days:'3',
            productCode:'01',
            week:'',
            month:'',
            list:[],
            currentPage:0,
            isFull:false
        }
    },
    mounted(){
        recommendrankService.getLastWeekRankList({productCode:this.productCode,pageSize:'5'}).then((ret)=>{
            this.tableData4 = ret.list.list;
            this.week = ret.week;
            this.checkIsFull(ret.list.total);
        }),
           recommendrankService.getLastMonthRankList({productCode:this.productCode,pageSize:'5'}).then((ret)=>{
            this.tableData5 = ret.list.list;
            this.month = (ret.month == 0)?12:ret.month;
            this.checkIsFull(ret.list.total);
        })
    },
    methods:{
        //检查是否已经查询完全
        checkIsFull(total){
            this.isFull = total <= this.tableData3.length;
        },
        goInfo(item){
                if(sysUtil.checkLoginForBiz()){
                    window.open(location.origin+"/recommender-info?userName="+item.userName,'_blank');
                    return true;
                }else{
                    return false;
                }
        },
        loadMore(){
            if(this.isFull)return;
                this.currentPage += 1;
               if(this.days == '3'){
                recommendrankService.getLastThreeDayRankList({productCode:this.productCode,pageNum:this.currentPage}).then((ret)=>{
                if(ret.status == "success" && (ret.list.size >0)){
                    this.tableData3 = this.tableData3.concat(ret.list.list);
                    this.checkIsFull(ret.list.total);
                }else{
                   this.currentPage -= 1; 
                }
            })}
            else if(this.days == '7'){
                recommendrankService.lastSevenDayRankList({productCode:this.productCode,pageNum:this.currentPage}).then((ret)=>{
                  if(ret.status == "success" && (ret.list.size >0)){
                    this.tableData3 = this.tableData3.concat(ret.list.list);
                    this.checkIsFull(ret.list.total);
                }else{
                   this.currentPage -= 1; 
                }
            })}
            else if(this.days == '30'){
                recommendrankService.lastThirtyDayRankList({productCode:this.productCode,pageNum:this.currentPage}).then((ret)=>{
                  if(ret.status == "success" && (ret.list.size >0)){
                    this.tableData3 = this.tableData3.concat(ret.list.list);
                    this.checkIsFull(ret.list.total);
                }else{
                   this.currentPage -= 1; 
                }
            })};
        },
        changeDays(){
            this.isFull = false;
            if(this.days == '3'){
                recommendrankService.getLastThreeDayRankList({productCode:this.productCode}).then((ret)=>{
                this.tableData3 = ret.list.list;
                this.checkIsFull(ret.list.total);
            })}
            else if(this.days == '7'){
                recommendrankService.lastSevenDayRankList({productCode:this.productCode}).then((ret)=>{
                this.tableData3 = ret.list.list;
                this.checkIsFull(ret.list.total);
            })}
            else if(this.days == '30'){
                recommendrankService.lastThirtyDayRankList({productCode:this.productCode}).then((ret)=>{
                this.tableData3 = ret.list.list;
                this.checkIsFull(ret.list.total);
            })};
                     
        },
        changeProductCode(){
            recommendrankService.getLastWeekRankList({productCode:this.productCode,pageSize:'5'}).then((ret)=>{
                this.tableData4 = ret.list.list;
            }),
            recommendrankService.getLastMonthRankList({productCode:this.productCode,pageSize:'5'}).then((ret)=>{
                this.tableData5 = ret.list.list;
            }),
             this.changeDays();
        }

    }
}
</script>
