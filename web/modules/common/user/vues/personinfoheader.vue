<template>
    <div class="person-info text-center">
        <div class="common-info row-new">
            <div class="short-info-wrap">
                <img src="/web/resources/img/index/u170.jpg"/>
                <div class="short-info">
                    <span class="name">用户名</span>
                    <i class="fa fa-mars"></i>
                    <i class="fa fa-venus"></i>
                    <span class="rank">VIP3</span>
                </div>
                <div class="other-info">
                    <i class="fa fa-clock-o"></i>
                    <span>2017-11-12加入</span>
                    <i class="fa fa-map-marker"></i>
                    <span>来自惠州</span>
                </div>
                <div class="bottom-list">
                    <p class="info-text">存在感强</p>
                    <el-button type="primary" size="small" @click="isShowImgMd=true">修改头像</el-button>
                </div>
            </div>
            <div class="content-55-to-55 text-left two-colums-to-one achive-info transition-halfs">
                <div class="float-left info-bar">
                    当前级别：专家级
                </div>
                <div class="float-left info-bar">
                    当前星级：一星
                </div>
                <div class="float-left info-bar">
                    球果余额：16554984.12
                </div>
                <div class="btn-list">
                    <router-link tag="span" :to="{name:'recharge'}"><el-button type="primary">充值</el-button></router-link>
                    <router-link tag="span" :to="{name:'withdraw'}"><el-button type="primary">提现</el-button></router-link>
                </div>
                <div class="bottom-list">
                    <p class="info-text">存在感强</p>
                    <el-button type="primary" @click="isShowDeclare=true">修改宣言</el-button>
                </div>
            </div>
        </div>
        <div class="clear-fix"></div>
        <el-dialog title="修改宣言" :visible.sync="isShowDeclare" width="300px">
            <el-input type="textarea" rows="5"></el-input>
            <div slot="footer">
                <el-button @click="isShowDeclare=false">取消</el-button>
                <el-button type="primary">确定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改头像" :visible.sync="isShowImgMd" width="300px">
            <el-upload
                class="avatar-uploader"
                action="http://localhost:9090/qiuguo8/upload/uploadImg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div slot="footer">
                <el-button @click="isShowImgMd=false">取消</el-button>
                <el-button type="primary">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button,Dialog,Input,Upload} from 'element-ui'
Vue.component(Button.name,Button);
Vue.component(Dialog.name,Dialog);
Vue.component(Input.name,Input);
Vue.component(Upload.name,Upload);
export default {
    data(){
        return {
            isShowDeclare:false,
            isShowImgMd:false,
        }
    },
    methods:{
        handleAvatarSuccess(){
            console.log(arguments);
        }
    }
}
</script>