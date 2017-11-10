<template>
    <div class="">
        <div class="my-bitcon"><span>我的球果：000</span></div>
        <div class="search-input content-25-to-100 content-wrap">
            <!-- <input type="text" placeholder=""/> -->
            <el-input placeholder="搜索分析师" v-model="input6" maxlength="20">
                <template slot="append"><button class="el-button el-button--primary">搜索</button></template>
            </el-input>
        </div>
        <div class="select-types types-select float-left content-75-to-100 content-wrap">
            <label class="types-label">类型</label>
            <ul class="types-list">
                <li>亚盘</li>
                <li>大小球</li>
                <li>竞彩足球</li>
                <li>北京单场</li>
            </ul>
        </div>
        <br class="clear-fix"/>
        <div class="select-types sort-types">
            <label class="types-label">筛选、排序</label>
            <ul class="types-list">
                <li>综合</li>
                <li>3天准确率</li>
                <li>7天准确率</li>
                <li>30天准确率</li>
                <li>30天盈利率</li>
                <li>我的关注</li>
                <li>指定赛事</li>
            </ul>
        </div>
        <div class="clear-fix"></div>
        <div class="intros-wrap content-wrap content-75-to-100">
            <div class="intro-wrap transition-ones">
                <div class="match-name">曼城VS曼联</div>
                <div class="intro-info">
                    <img src="/web/resources/img/index/logo.jpg"/>
                    <el-button type="success">关注</el-button>
                </div>
                <div class="intro-text">
                    xxxxxxx
                </div>
                <el-button type="danger">200</el-button>
            </div>
            <div class="intro-wrap transition-ones">
                <div class="match-name">曼城VS曼联</div>
                <div class="intro-info">
                    <img src="/web/resources/img/index/logo.jpg"/>
                    <el-button type="success">关注</el-button>
                </div>
                <div class="intro-text">
                    xxxxxxx
                </div>
                <el-button type="danger">200</el-button>
            </div>
            <div class="intro-wrap transition-halfs">
                <div class="match-name">曼城VS曼联</div>
                <div class="intro-info">
                    <img src="/web/resources/img/index/logo.jpg"/>
                    <el-button type="success">关注</el-button>
                </div>
                <div class="intro-text">
                    xxxxxxx
                </div>
                <el-button type="danger">200</el-button>
            </div>
            <div class="intro-wrap transition-halfs">
                <div class="match-name">曼城VS曼联</div>
                <div class="intro-info">
                    <img src="/web/resources/img/index/logo.jpg"/>
                    <el-button type="success">关注</el-button>
                </div>
                <div class="intro-text">
                    xxxxxxx
                </div>
                <el-button type="danger">200</el-button>
            </div>
        </div>
        <div class="content-wrap rank-list intro-rank-list content-25-to-100">
            <div class="list-name">七天胜率排行</div>
            <el-table :default-sort="{prop:'index',order:'ascending'}" :data="tableData3" border style="width: 100%">
                <el-table-column prop="index" label="排行" min-width="40" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column  prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="achivement" label="当周成绩" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="winpercent" label="胜率" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
            </el-table>
        </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Table,TableColumn} from 'element-ui'
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
export default {
    data(){
        return{
            tableData3:[{index:'1',userName:'xx',achivement:'7胜3负',winpercent:'80%'},
                        {index:'2',userName:'xx',achivement:'7胜3负',winpercent:'80%'},
                        {index:'3',userName:'xx',achivement:'7胜3负',winpercent:'80%'},
                        {index:'4',userName:'xx',achivement:'7胜3负',winpercent:'80%'},
                        {index:'5',userName:'xx',achivement:'7胜3负',winpercent:'80%'}]
        }
    }
}
</script>
