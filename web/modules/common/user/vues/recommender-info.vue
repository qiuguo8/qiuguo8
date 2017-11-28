<template>
    <div class="recommender-info">
        <div class="select-list content-wrap text-center">
            <el-radio-group v-model="radioVal" class="radio-list">
                <el-radio-button label="1" class="danger-radio small-checkbox">亚盘</el-radio-button>
                <el-radio-button label="2" class="danger-radio small-checkbox">大小球</el-radio-button>
                <el-radio-button label="3" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="4" class="danger-radio small-checkbox">北京单场</el-radio-button>
            </el-radio-group>
        </div>
        <div class="info-list row-new">
            <div class="content-25-to-all-50 content-wrap text-center">
                <img src="/web/resources/img/index/u170.jpg"/>
                <p class="user-name">小财神</p>
            </div>
            <div class="content-25-to-all-50 content-wrap">
                <p>等级:<span>专家</span></p>
                <p>星级:
                    <el-rate style="display:inline-block" v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </p>
                <p>关注人数:<span>1234</span></p>
            </div>
            <div class="content-25-to-all-50 content-wrap">
                <p>3天准确率:<span>58%</span></p>
                <p>7天准确率:<span>50%</span></p>
                <p>30天准确率:<span>45%</span></p>
            </div>
            <div class="content-25-to-all-50 content-wrap">
                <p>3天战绩:<span>10发8</span></p>
                <p>7天战绩:<span>20发15</span></p>
                <p>30天战绩:<span>50发20</span></p>
            </div>
        </div>
        <div class="recent-recommend rank-common">
            <div class="left-name" style="margin-bottom:10px"><span>近期推荐</span></div>
            <div class="el-col-24">
                <el-table :data="tableData3" border>
                    <el-table-column label="赛事" min-width="160" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <div class="match-wrap">
                                <p class="match-type" @click="console(scope)">{{scope.row.matchType}}</p>
                                <p class="match-date">{{scope.row.matchTime}}</p>
                                <p>推荐时间：</p>
                                <p class="recommend-time">{{scope.row.recommendTime}}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="对阵" min-width="350" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <div class="match-wrap">
                                <span>{{scope.row.host}}</span>
                                <span>VS</span>
                                <span>{{scope.row.custom}}</span>
                                <p class="match-predit">{{scope.row.matchInfo}}</p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="盘口" min-width="120" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button type="warning">免费查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="结果" min-width="120" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <div class="match-wrap">
                                <p class="result">{{scope.row.result}}</p>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="page-block text-right">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="15"
                    layout=" prev, pager, next"
                    :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {RadioButton,RadioGroup,Rate,Table,TableColumn,Pagination} from 'element-ui'
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
            value5:'4',
            tableData3:[
                {matchType:'英足总杯',matchTime:'11-07 03:45',recommendTime:'2017-11-10 20:23',host:'切奥尔雷',custom:'弗利特伍德',result:'输半',matchInfo:'xxxxxxxx'},
                {matchType:'阿甲',matchTime:'11-07 03:45',recommendTime:'2017-11-10 20:23',host:'萨斯菲尔德',custom:'圣塔菲联',result:'输半',matchInfo:'xxxxxxxx'},
                {matchType:'德乙',matchTime:'11-07 03:45',recommendTime:'2017-11-10 20:23',host:'纽伦堡',custom:'因戈尔施塔特',result:'输半',matchInfo:'xxxxxxxx'},
            ]
        }
    },
    methods:{
        console(scope){
            console.log(scope);
        }
    }
}
</script>
