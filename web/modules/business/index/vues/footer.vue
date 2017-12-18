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
                    <li class="transition-halfs" @click="showContacts = true">加盟合作</li>
                    <!-- <li class="transition-halfs">网站地图</li> -->
                    <!-- <li class="transition-halfs">友情链接</li> -->
                    <router-link :to="{name:'recruit'}" tag="li" class="transition-halfs">网站招聘</router-link>
                </ul>
            </div>
            <el-dialog title="公众号" width="250px" :lock-scroll="false" append-to-body="true" :visible.sync="showgzh">
                <img/>
            </el-dialog>
            <el-dialog title="加盟合作" width="300px" :lock-scroll="false" :visible.sync="showContacts">
                <p>电子邮箱：</p>
                <p>QQ：</p>
                <p>微信：</p>
                <p>手机号：</p>
            </el-dialog>
        </div>
        <div class="footer-web-alert">
            <p>深圳市XXXXX网络技术有限公司      版权所有 球果吧Copyright © 2006-2016</p>
            <p>公网安备：XXXXXXXXXXXX号   ICP备案：粤ICP备XXXXXXX号</p>
            <p>声明：本网资讯仅供体育爱好者浏览、购买中国足彩参考之用。任何人不得用于非法用途，否则责任自负。
                本网所登载广告均为广告客户的个人意见及表达方式，和本网无任何 关系。链接的广告不得违反国家法律规定，
                如有违者，本网有权随时予以删除，并保留与有关部门合作追究的权利。
            </p>
        </div>
    </footer>
</template>
<script>
import Vue from 'vue'
import {Dialog} from 'element-ui'

export default {
    data(){
        return{
            showgzh:false,
            showContacts:false
        }
    }
}
</script>
