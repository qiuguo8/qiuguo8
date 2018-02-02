<template>
    <div class="news-detail">
        <div class="content-wrap content-75-to-100 news-content float-left">
            <h2 class="text-center">{{contentTitle}}</h2>
            <p class="author-con"><span>{{contentAuthor}}</span><span>{{contentCtime}}</span></p>
            <div v-html="contentValue"></div>
            <div style="margin-top: 30px;font-size: 8px;color: grey;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;声明:本网站所收集文字、图片等内容均系网民撰写或程序在互联网中自动收录转载，文章著作权归原作者所有，内容为作者个人观点。
转载的目的在于非盈利传递更多信息及用于网络分享，并不代表本站赞同其观点和对其真实性负责，也不构成任何其他建议，只供参考之用。本网站
不保证信息的准确性、有效性、及时性和完整性。</div>
            <div style="font-size: 8px;color: grey;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您发现网站上有侵权您的知识产权的作品及其它问题，请与我们取得联系，我们会及时修改或删除。</div>
        </div>
        <div class="content-wrap content-25-to-100 rank-common">
            <div  v-if="this.contentType=='01'" class="list-name"><span>网站头条</span></div>
            <div  v-if="this.contentType=='02'" class="list-name"><span>24小时新闻排行榜</span></div>
            <div  v-if="this.contentType=='03'" class="list-name"><span>24小时最热推荐</span></div>
            <ul class="normal-news-list">
                <li class="transition-halfs" v-for="item in contentList" :key="item.contentId">
                    <a @click="changeDetail(item.contentId)"   class="transition-halfs"><p class="text-elipse" style="width:65%">{{item.contentTitle}}</p><p style="width:35%">{{item.createTime.slice(0,11)}}</p></a>
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
            contentAuthor:'',
            contentCtime:'',
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
                    this.contentAuthor = ret.systemContent.createUsername;
                    this.contentCtime = ret.systemContent.createTime;
                    this.querContentList();
                    console.log(ret);
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
<style type="stylus">
.author-con{border-bottom:1px solid #aaa;margin-bottom:40px;padding:10px 20px}
.author-con>span:first-child{color:#333;margin-right:50px}
.author-con>span:last-child{color:#666;font-size:13px}
</style>