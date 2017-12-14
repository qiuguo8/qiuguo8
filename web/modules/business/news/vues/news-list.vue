<template>
    <div class="news-list text-center el-col-24">
        <div class="news">
            <div class="head">
                <span>新闻</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
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
        <div class="news">
            <div class="head">
                <span>头条</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
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
        <div class="news">
            <div class="head">
                <span>足球预测</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs">xxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
                <li class="transition-halfs">xxxxxxxxxxxxxxxxxxxxx</li>
            </ul>
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
    </div>
</template>
<script>
import Vue from 'vue';
import {Pagination} from 'element-ui'
Vue.component(Pagination.name,Pagination);

export default {
  
}
</script>
