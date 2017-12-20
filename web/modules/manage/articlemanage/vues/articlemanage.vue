<template>
    <div class="article-manage">
        <div class="row-new text-center">
            <div class="form-control content-40-to-40 float-left">
                <label class="el-col-7">标题</label>
                <div class="el-col-17">
                    <el-input v-model="contentTitle" placeholder="请输入标题"></el-input>
                </div>
            </div> 
            <div class="form-control content-40-to-40 float-left">
                <label class="el-col-9 text-center">启用</label>
                <el-select class="el-col-15" v-model="enabled" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-control el-col-24 text-center">
                <el-button type="primary"  @click="submitForm()">查询</el-button>
                <el-button >重置</el-button>
                <el-button type="danger" @click="add()">新增</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="datatable" border>
                <el-table-column prop="contentTitle" label="标题" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="createUsername" label="发布人" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="contentType" label="文章类型" :formatter="contentTypeFormat" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="enabled" :formatter="enabledFormat" label="是否启用" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column label="操作" min-width="90" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text"  v-show="scope.row.enabled=='0'" size="small" @click="updateContent(scope.row,'1')">启用</el-button>
                        <el-button type="text"  v-show="scope.row.enabled=='1'" size="small" @click="updateContent(scope.row,'0')">禁用</el-button>
                        <el-button type="text"  v-show="scope.row.enabled=='0'" size="small" @click="toUpdate(scope.row)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
           <div class="page-block text-right">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 15, 20, 25]"
                :page-size="pagesize"
                layout=" prev, pager, next"
                :total="totalCount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
import articlemanageService from 'web/modules/manage/articlemanage/service/articlemanageService.js'
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        return {
            datatable:[],
            options:[
                {value: '', label: '全部' }, 
                {value: '1', label: '启用' }, 
                {value: '0',label: '禁用'}],
            contentTitle:null,
            enabled:null, 
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
     methods:{
        add(){
            this.$router.push({name:'article-edit'});
        },
        submitForm(){
            this.query();
        },
        query(){
            var sform= {'contentTitle':this.contentTitle,'enabled':this.enabled,'pageNum':this.currentPage,'pageSize':this.pagesize}
            articlemanageService.queryAllContent(sform).then((ret)=>{
                        this.datatable = ret.body.list;
                        this.totalCount = ret.body.total;
                    })
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.query();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.query();
        }, 
        updateContent(obj,status){
            obj.enabled=status;
            articlemanageService.updateContent(obj).then((ret)=>{
                        alert( ret.body.status);
                    })
        }, 
        enabledFormat(row,column){
            switch (row.enabled) {
                case '1':return '是';break;
                case '0':return '否';break;
            };
        },
        contentTypeFormat(row,column){
            switch (row.contentType) {
                case '01':return '头条';break;
                case '02':return '新闻';break;
                case '03':return '预测';break;
            };
        },            

    },
    created:function () {
        this.query();
    },
}
</script>
