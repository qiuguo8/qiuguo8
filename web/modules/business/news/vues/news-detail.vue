<template>
    <div class="news-detail">
        <div class="content-wrap content-75-to-100 news-content float-left">
            <h2 class="text-center">{{contentTitle}}</h2>
            <div v-html="contentValue"></div>
        </div>
        <div class="content-wrap content-25-to-100 rank-common">
            <div  v-if="this.contentType=='01'" class="list-name"><span>网站头条</span></div>
            <div  v-if="this.contentType=='02'" class="list-name"><span>足球新闻</span></div>
            <div  v-if="this.contentType=='03'" class="list-name"><span>足彩预测</span></div>
            <ul class="normal-news-list">
                <li class="transition-halfs" v-for="item in contentList" :key="item.contentId">
                    <a @click="changeDetail(item.contentId)"   class="transition-halfs text-elipse">{{item.contentTitle}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import service from 'web/modules/business/news/service/newsService'
export default {
     data(){
        return {
            contentId: this.$route.query.contentId,
            contentType:'01',
            contentValue:'',
            contentTitle:'',
            contentList:[],
        }
    },
    methods:{
       queryContentDetail(){
            let params = {contentId:this.contentId};
            service.queryContent(params).then((ret)=>{
                if(ret.status == 'success'){
                    this.contentType = ret.systemContent.contentType;
                    this.contentValue = ret.systemContent.content;
                    this.contentTitle = ret.systemContent.contentTitle;
                      this.querContentList();
                }
            })
        },
        querContentList(){
             let params = {contentType:this.contentType};
             service.queryContentList(params).then((ret)=>{
                if(ret.status == 'success'){
                    this.contentList = ret.contentList;
                }
            })
        },
        changeDetail(newcontentId){
            this.contentId=newcontentId;
            this.queryContentDetail();
        }

    },
    mounted:function () {
        this.queryContentDetail();
    },
}
</script>
