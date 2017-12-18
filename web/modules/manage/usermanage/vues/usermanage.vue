<template>
    <div class="user-manage">
        <div class="row-new text-center">
            <div class="form-control el-col-12">
                <label class="el-col-8">用户名</label>
                <div class="el-col-16">
                    <el-input v-model="query.userName" maxlength="20" placeholder="请输入用户名"></el-input>
                </div>
            </div>   
            <div class="form-control el-col-12">
                <label class="el-col-8">手机号</label>
                <div class="el-col-16">
                    <el-input v-model="query.phone"  maxlength="11" placeholder="请输入手机号"></el-input>
                </div>
            </div>   
            <div class="form-control el-col-12">
                <label class="el-col-8">邮箱</label>
                <div class="el-col-16">
                    <el-input v-model="query.email"  maxlength="30" placeholder="请输入邮箱"></el-input>
                </div>
            </div>   
            <div class="form-control el-col-12">
                <label class="el-col-8">状态</label>
                <el-select class="el-col-16" v-model="query.status" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="form-control el-col-19">
                <label class="el-col-5">注册时间</label>
                <div class="el-col-19">
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.registTimeStart" hintText="选择时间"/>
                    </span>
                    <span class="el-col-2 mid-word">至</span>
                    <span class="el-col-11">
                        <mu-date-picker v-model="query.registTimeEnd" hintText="选择时间"/>
                    </span>
                </div>
            </div>  
            <div class="form-control el-col-24 text-center">
                <el-button type="primary" @click="getUserList">查询</el-button>
                <el-button @click="clearQuery">重置</el-button>
            </div>  
        </div>
        <div class="el-col-24">
            <el-table :default-sort="{prop:'count',order:'ascending'}" :data="userList" border>
                <el-table-column prop="userName" label="用户名" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                <el-table-column prop="realName" label="真实姓名" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="phone" label="手机号" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="email" label="邮箱" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="registTime" label="注册时间" min-width="70" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                <el-table-column prop="status" label="状态" :formatter="statusForma" min-width="60" align="center" head-align="center" class-name="table-fixed">
                    <template slot-scope="scope">
                        <span v-constant-tranlate="scope.row.status" constant-type="UserStatus"></span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed" fixed="right">
                     <template slot-scope="scope">
                        <el-button type="text" v-show="scope.row.status=='01'" size="small" @click="updateUserInfo(scope.row.userId,'02')">锁定</el-button>
                        <el-button type="text" v-show="scope.row.status=='02'" size="small" @click="updateUserInfo(scope.row.userId,'01')">解锁</el-button>
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
import userService from 'web/modules/manage/usermanage/service/userManage'
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
            query:{
                userName:'',
                registTimeStart:'',
                registTimeEnd:'',
                phone:'',
                status:'',
                email:''
            },
            userList:[],
            options:[
                {value: '', label: '全部' },
                {value: '01', label: '正常' },
                {value: '02',label: '锁定'},
                {value: '03',label: '注销'}],
            //当前页码
            currentPage: 1,
            //默认每页数据量
            pagesize: 10,
            //默认数据总数
            totalCount: 0,
        }
    },
    created:function () {
        this.getUserList();
    },
    methods:{
        getUserList(){
            let userInfo = this.query;
            userInfo.pageNum = this.currentPage;
            userInfo.pageSize = this.pagesize;
            userService.listAllUser(userInfo).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.userList = ret.body.list
                    this.totalCount = ret.body.total;
                }
            })
        },
        handleSizeChange(val){
            this.pagesize = val;
            this.getUserList();
        },
        //页码变更
        handleCurrentChange: function(val) {
            this.currentPage = val;
            this.getUserList();
        },
        clearQuery(){
            this.query = {
                userName:'',
                registTimeStart:'',
                registTimeEnd:'',
                phone:'',
                status:'',
                email:''
            }
        },
        updateUserInfo(id,status){
            let item = {'userId':id,'status':status}
            userService.updateUser(item).then((ret)=>{
                if(ret.body.status == 'success'){
                    this.getUserList();
                }
            })
        },
        statusForma(row,column){
            switch (row.status) {
                case '01':return '正常';break;
                case '02':return '锁定';break;
                case '03':return '注销';break;
            };
        },
    }
}
</script>
