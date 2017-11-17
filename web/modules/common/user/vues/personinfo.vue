<template>
    <div class="achive-detail">
        <div class="achive-list">
            <p class="select-name"><span>战绩</span></p>
            <ul class="select-list content-wrap text-center">
                <li>亚盘</li>
                <li>大小球</li>
                <li>竞彩足球</li>
                <li>北京单场</li>
            </ul>
            <div class="left-menu-table">
                <ul>
                    <li>近3天</li>
                    <li>近7天</li>
                    <li>近30天</li>
                    <li>上周</li>
                    <li>上月</li>
                </ul>
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="count" label="推荐数量" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="win" label="赢" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="winhalf" label="赢半" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="water" label="走水" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="losehalf" label="输半" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="lose" label="输" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="right" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profit" label="盈利率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="15"
                    layout=" prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="achive-list">
            <p class="select-name"><span>战绩</span></p>
            <ul class="select-list content-wrap text-center">
                <li>亚盘</li>
                <li>大小球</li>
                <li>竞彩足球</li>
                <li>北京单场</li>
            </ul>
            <div class="left-menu-table">
                <ul>
                    <li>近3天</li>
                    <li>近7天</li>
                    <li>近30天</li>
                    <li>上周</li>
                    <li>上月</li>
                </ul>
                <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData4" border>
                    <el-table-column prop="count" label="推荐数量" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="win" label="赢" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="lose" label="输" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="right" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="profit" label="盈利率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                </el-table>
                <div class="block text-right">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 15, 20, 25]"
                    :page-size="15"
                    layout=" prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
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
import {Input,Button,Table,TableColumn,Pagination} from 'element-ui'
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)

export default {
    data(){
        return {
            tableData3:[{count:'1',win:'xx',winhalf:'7胜3负',water:'80%',losehalf:'xxxxxx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',winhalf:'7胜3负',water:'80%',losehalf:'xxxxxx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',winhalf:'7胜3负',water:'80%',losehalf:'xxxxxx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',winhalf:'7胜3负',water:'80%',losehalf:'xxxxxx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',winhalf:'7胜3负',water:'80%',losehalf:'xxxxxx',lose:'xxx',right:'70%',profit:'50%'},],
            tableData4:[{count:'1',win:'xx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',lose:'xxx',right:'70%',profit:'50%'},
                        {count:'1',win:'xx',lose:'xxx',right:'70%',profit:'50%'},],
        }
    }
}
</script>