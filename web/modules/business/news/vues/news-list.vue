<template>
    <div class="news-list text-center el-col-24">
        <div class="news">
            <div class="head">
                <span>网站头条</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs" v-for="ttItem in ttList" :key="ttItem.contentId">
                    <router-link :to="{name:'news-detail',query:{contentId:ttItem.contentId}}" class="transition-halfs"><p class="text-elipse">{{ttItem.contentTitle}}</p><p>{{ttItem.createTime.slice(0,11)}}</p></router-link>
                </li>
            </ul>
            <div class="page-block text-center">
                <el-pagination
                @current-change="handleCurrentChange1"
                :current-page="currentPage1"
                :page-size="pagesize1"
                layout=" prev, pager, next"
                :total="totalCount1">
                </el-pagination>
            </div>
        </div>
        <div class="news">
            <div class="head">
                <span>足球新闻</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs" v-for="xwItem in xwList" :key="xwItem.contentId">
                    <router-link :to="{name:'news-detail',query:{contentId:xwItem.contentId}}" class="transition-halfs"><p class="text-elipse">{{xwItem.contentTitle}}</p><p>{{xwItem.createTime.slice(0,11)}}</p></router-link>
                </li>
            </ul>
            <div class="page-block text-center">
                 <el-pagination
                @current-change="handleCurrentChange2"
                :current-page="currentPage2"
                :page-size="pagesize2"
                layout=" prev, pager, next"
                :total="totalCount2">
                </el-pagination>
            </div>
        </div>
       
        <div class="news">
            <div class="head">
                <span>足彩预测</span>
            </div>
            <ul class="normal-news-list">
                <li class="transition-halfs" v-for="ycItem in ycList" :key="ycItem.contentId">
                    <router-link :to="{name:'news-detail',query: {contentId:ycItem.contentId}}" class="transition-halfs text-elipse"><p class="text-elipse">{{ycItem.contentTitle}}</p><p>{{ycItem.createTime.slice(0,11)}}</p></router-link>
                </li>
            </ul>
            <div class="page-block text-center">
                <el-pagination
                @current-change="handleCurrentChange3"
                :current-page="currentPage3"
                :page-size="pagesize3"
                layout=" prev, pager, next"
                :total="totalCount3">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import service from 'web/modules/business/news/service/newsService'
import {Pagination} from 'element-ui'
Vue.component(Pagination.name,Pagination);

export default {
  data(){
        return {
            ttList:[],
            currentPage1:1,
            pagesize1: 10,
            totalCount1: 0,
            xwList:[],
            currentPage2:1,
            pagesize2: 10,
            totalCount2: 0,
            ycList:[],
            currentPage3:1,
            pagesize3: 10,
            totalCount3: 0,
        }
    },
    methods:{
       queryTtList(){
            let params = {contentType:'01',pageNum:this.currentPage1,pageSize:this.pagesize1};
            service.pageContentList(params).then((ret)=>{
                if(ret.status == 'success'){
                    this.ttList = ret.list;
                    this.totalCount1 = ret.total;
                }
            })
        },
        queryXwList(){
            let params = {contentType:'02',pageNum:this.currentPage2,pageSize:this.pagesize2};
            service.pageContentList(params).then((ret)=>{
                if(ret.status == 'success'){
                    this.xwList = ret.list;
                    this.totalCount2 = ret.total;
                }
            })
        },
        queryYcList(){
            let params = {contentType:'03',pageNum:this.currentPage3,pageSize:this.pagesize3};
            service.pageContentList(params).then((ret)=>{
                if(ret.status == 'success'){
                    this.ycList = ret.list;
                    this.totalCount3 = ret.total;
                }
            })
        },
         //页码变更
        handleCurrentChange1: function(val) {
            this.currentPage1 = val;
            this.queryTtList();
        },
          //页码变更
        handleCurrentChange2: function(val) {
            this.currentPage2 = val;
            this.queryXwList();
        },
          //页码变更
        handleCurrentChange3: function(val) {
            this.currentPage3 = val;
            this.queryYcList();
        }, 
    },
    mounted:function () {
        this.queryTtList();
        this.queryXwList();
        this.queryYcList();
    },
}
</script>
