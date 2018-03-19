<template>
    <footer class="footer-container">
        <div class="foot-content">
            <!-- <div class="footer-logo-wrap">
                <img src="/web/resources/img/index/logo.jpg"/>
            </div> -->
            <div class="footer-menu">
                <ul class="footer-menu-list">
                    <router-link :to="{name:'about-us'}" tag="li" class="transition-halfs">关于我们</router-link>
                    <li class="transition-halfs" @click="showgzh = true">公众号</li>
                    <li class="transition-halfs" @click="showContacts = true">商务合作</li>
                    <!-- <li class="transition-halfs">网站地图</li> -->
                    <!-- <li class="transition-halfs">友情链接</li> -->
                    <!--<router-link :to="{name:'recruit'}" tag="li" class="transition-halfs">网站招聘</router-link>-->
                </ul>
            </div>
            <el-dialog title="公众号" width="300px" :lock-scroll="false" append-to-body="true" :visible.sync="showgzh">
                <img :src="ewmUrl"/>
            </el-dialog>
            <el-dialog title="商务合作" width="300px" style="text-align:left" :lock-scroll="false" :visible.sync="showContacts">
                <p>电子邮箱：szqiuguo8@163.com</p>
                <p>QQ：497247881</p>
                <p>微信：15960067065</p>
                <p>手机号：15960067065</p>
            </el-dialog>
        </div>
        <div class="footer-web-alert">
            <p>深圳市球果科技有限公司版权所有 <a href="http://www.miitbeian.gov.cn/" target="_blank" style="color:#fff" >ICP备案：粤ICP备18005676号</a> </p>
            <p>声明：球果吧是中立的第三方推荐平台，任何推荐信息均由网站用户发表，球果吧不对发布者及所发布的推荐信息负责、不对彩民任何购买行为负责。
本网资讯仅供体育爱好者浏览、购买中国体育彩票竞彩参考之用。任何人不得用于非法用途，否则责任自负。
本网所登载广告均为广告客户的个人意见及表达方式，和本网无任何关系。本网站拒绝为任何具有赌博性质的组织进行广告链接和服务。链接的广告不得违反国家法律规定，如有违者，本网有权随时予以删除，并保留与有关部门合作追究的权利。
            </p>
        </div>
    </footer>
</template>
<script>

import Vue from 'vue'
import {Dialog} from 'element-ui'
import pathUtil from 'web/common/utils/pathUtil.js'

export default {
    data(){
        return{
            showgzh:false,
            showContacts:false,
            ewmUrl:pathUtil.getStaticPath()+"system/ewm.jpg",
        }
    }
}
</script>
