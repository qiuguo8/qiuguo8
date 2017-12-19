<template>
    <div class="in-time-goal">
        <div class="row-new">
            <div class="form-control el-col-19 text-center">
                <label class="el-col-6">比赛时间</label>
                <div class="el-col-18">
                    <span class="el-col-11">
                        <mu-date-picker v-model="matchDate" @input="submitForm()" hintText="选择时间"/>
                    </span>
                    <!-- <el-button type="primary" @click="submitForm()">查询</el-button> -->
                </div>

            </div>

        </div>
        <div class="el-col-24 common-container">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column prop="leagueName" label="赛事" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="matchStartTime" label="比赛时间" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="overFlag" label="状态" :formatter="matchStatusFormat" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="homeTeamName" label="主队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="qcScore" label="比分" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="visitTeamName" label="客队" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="bcScore" label="半场" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {Table,TableColumn,Select,Option} from 'element-ui'
    import intimegoalService from 'web/modules/business/intimegoal/service/intimegoalService'
    import DateUtil from 'web/common/utils/DateUtil.js'
    Vue.component(Table.name,Table);
    Vue.component(TableColumn.name,TableColumn);
    Vue.component(Select.name,Select);
    Vue.component(Option.name,Option);
    export default {
        data(){
            return {
                datatable:[],
                matchDate:DateUtil(new Date()).format('YYYY-MM-DD'),
            }
        },
        methods:{
            submitForm(){
                this.query();
            },
            query(){
                var sform= {'matchDate':this.matchDate}
                intimegoalService.queryMatch(sform).then((ret)=>{
                    this.datatable = ret.body.list;
                })
            },
            matchStatusFormat(row,column){
                switch (row.overFlag) {
                    case '0':return '未开始';break;
                    case '1':return '进行中';break;
                    case '2':return '已结束';break;
                    case '6':return '待定';break;
                    case '7':return '改期';break;
                    case '8':return '腰斩';break;
                };
            },
        },
        created:function () {
            this.query();
        },

    }
</script>
