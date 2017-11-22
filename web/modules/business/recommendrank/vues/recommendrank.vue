<template>
    <div class="recommend-rank index-center">
        <!-- <ul class="select-list content-wrap text-center">
            <li>亚盘</li>
            <li>大小球</li>
            <li>竞彩足球</li>
            <li>北京单场</li>
        </ul> -->
        <div class="select-list content-wrap text-center">
            <el-radio-group v-model="radioVal" class="radio-list">
                <el-radio-button label="1" class="danger-radio small-checkbox">亚盘</el-radio-button>
                <el-radio-button label="2" class="danger-radio small-checkbox">大小球</el-radio-button>
                <el-radio-button label="3" class="danger-radio small-checkbox">竞彩足球</el-radio-button>
                <el-radio-button label="4" class="danger-radio small-checkbox">北京单场</el-radio-button>
            </el-radio-group>
        </div>
        <div class="">
            <div class="content-wrap types-news type-rank-list content-50-to-100" style="display:inline-block">
                <!-- <ul class="select-list date-list text-left">
                    <li>3天</li>
                    <li>7天</li>
                    <li>30天</li>
                </ul> -->
                <div class="select-list date-list text-left">
                    <el-radio-group v-model="radioVal" class="radio-list">
                        <el-radio-button label="1" class="danger-radio small-checkbox">3天</el-radio-button>
                        <el-radio-button label="2" class="danger-radio small-checkbox">7天</el-radio-button>
                        <el-radio-button label="3" class="danger-radio small-checkbox">30天</el-radio-button>
                    </el-radio-group>
                </div>
                <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData3" border style="width: 100%">
                    <el-table-column prop="index" label="排行" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="recommender" label="推荐师" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="number" label="场次" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="winpercent" label="胜率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="recommend" label="正在推荐" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="page-block text-center">
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
            <div class="content-wrap rank-common float-right rank-rule content-25-to-100">
                <div class="list-name"><span>排行规则</span></div>
                <div class="rule-text text-left">

                </div>
            </div>
            <div class="content-wrap float-left last-rank content-25-to-100 text-center">
                <div class="content-wrap rank-common content-100-to-50">
                    <div class="list-name"><span>上周周榜</span></div>
                    <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                        <el-table-column prop="index" label="排行" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column  prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                        <el-table-column prop="userType" label="用户类型" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column prop="achivement" label="胜/负/平" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column prop="winpercent" label="准确率" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    </el-table>
                </div>
                <div class="content-wrap rank-common content-100-to-50 text-center">
                    <div class="list-name"><span>9月月榜</span></div>
                    <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData4" border style="width: 100%">
                        <el-table-column prop="index" label="排行" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column  prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                        <el-table-column prop="userType" label="用户类型" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column prop="achivement" label="胜/负/平" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                        <el-table-column prop="winpercent" label="准确率" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Table,TableColumn,Pagination,RadioButton,RadioGroup} from 'element-ui'
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
            tableData3:[{index:'1',recommender:'xx',number:'7胜3负',winpercent:'80%',recommend:'xxxxxx'},
                        {index:'2',recommender:'xx',number:'7胜3负',winpercent:'80%',recommend:'xxxxxx'},
                        {index:'3',recommender:'xx',number:'7胜3负',winpercent:'80%',recommend:'xxxxxx'},
                        {index:'4',recommender:'xx',number:'7胜3负',winpercent:'80%',recommend:'xxxxxx'},
                        {index:'5',recommender:'xx',number:'7胜3负',winpercent:'80%',recommend:'xxxxxx'}],
            tableData4:[{index:'1',userName:'xx',userType:'7胜3负',achivement:'8/0/1',winpercent:'80%'},
                        {index:'2',userName:'xx',userType:'7胜3负',achivement:'8/0/1',winpercent:'80%'},
                        {index:'3',userName:'xx',userType:'7胜3负',achivement:'8/0/1',winpercent:'80%'},
                        {index:'4',userName:'xx',userType:'7胜3负',achivement:'8/0/1',winpercent:'80%'},
                        {index:'5',userName:'xx',userType:'7胜3负',achivement:'8/0/1',winpercent:'80%'}],
            radioVal:'1'
        }
    }
}
</script>
