<template>
    <div class="rules-manage">
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>等级规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="index" label="等级名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="userName" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="account" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mobileNo" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mail" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button type="text">修改</el-button>
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
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>星级规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="index" label="等级名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="userName" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="account" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mobileNo" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mail" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button type="text">修改</el-button>
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
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>价格规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="index" label="等级名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="userName" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="account" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mobileNo" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mail" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button type="text">修改</el-button>
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
        <div class="rank-common row-new">
            <div class="left-name" style="margin-bottom:10px"><span>发单规则</span></div>
            <div class="el-col-24">
                 <el-table :default-sort="{prop:'count',order:'ascending'}" :data="tableData3" border>
                    <el-table-column prop="index" label="等级名称" min-width="50" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="userName" label="等级" min-width="80" align="center" head-align="center" class-name="table-fixed"> </el-table-column>
                    <el-table-column prop="account" label="准确率" min-width="60" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mobileNo" label="推荐数量" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column prop="mail" label="盈利率" min-width="80" align="center" head-align="center" class-name="table-fixed"></el-table-column>
                    <el-table-column label="操作" min-width="60" align="center" head-align="center" class-name="table-fixed">
                        <template slot-scope="scope">
                            <el-button type="text">修改</el-button>
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
import {Input,Button,Select,Option,Table,TableColumn,Pagination} from 'element-ui'
Vue.component(Button.name,Button);
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Pagination.name,Pagination);

export default {
    data(){
        return {
            tableData3:[
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'},
                {index:'1',userName:'xx',account:'ddd',mobileNo:'1123456',mail:'xx@dd.com',registerDate:'2017-10-25',status:'xxx'}
            ]
        }
    }
}
</script>
