<template>
    <div class="person-info text-center">
        <div class="common-info row-new">
            <div class="short-info-wrap">
                <img :src="avatarUrl"/>
                <div class="short-info">
                    <span class="name">{{base.baseInfo.userName}}</span>
                    <i class="fa fa-mars" v-if="base.baseInfo.sex == '1'"></i>
                    <i class="fa fa-venus" v-if="base.baseInfo.sex == '0'"></i>
                   <!-- <span class="rank">VIP3</span>-->
                </div>
                <div class="other-info">
                    <i class="fa fa-clock-o"></i>
                    <span>{{base.baseInfo.registTime}}</span>
                    
                </div>
                <div class="bottom-list">
                    <el-button type="primary" size="small" @click="isShowImgMd=true">修改头像</el-button>
                </div>
            </div>
            <div class="content-55-to-55 text-left two-colums-to-one achive-info transition-halfs">
                <div class="float-left info-bar">
                    球果余额：{{base.qgAvailableBalance}}
                </div>
                <div class="float-left info-bar">
                    关注我的：{{base.focusNum}}
                </div>
                <div class="float-left info-bar">
                    我的关注：{{base.myFocus}}
                </div>
                <div class="btn-list">
                    <router-link tag="span" :to="{name:'recharge'}"><el-button type="primary">充值</el-button></router-link>
                    <router-link tag="span" :to="{name:'withdraw'}"><el-button type="primary">提现</el-button></router-link>
                </div>
                <div class="bottom-list">
                    <p class="info-text">{{base.baseInfo.personalSign}}</p>
                    <el-button type="primary" @click="isShowDeclare=true">修改宣言</el-button>
                </div>
            </div>
        </div>
        <div class="clear-fix"></div>
        <el-dialog title="修改宣言" :visible.sync="isShowDeclare" width="300px">
            <el-input type="textarea" rows="5" v-model="tempSign"></el-input>
            <div slot="footer">
                <el-button @click="isShowDeclare=false">取消</el-button>
                <el-button type="primary" @click="changePersonalSign()">确定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改头像" :visible.sync="isShowImgMd" width="300px">
            <el-upload
                class="avatar-uploader"
                :action="uploadAction"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div slot="footer">
                <el-button @click="isShowImgMd=false">取消</el-button>
                <el-button type="primary" @click="modifyAvatar()">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button,Dialog,Input,Upload} from 'element-ui'
import personInfoHeaderService from "web/modules/common/user/service/personInfoHeaderService.js"
import pathUtil from 'web/common/utils/pathUtil.js'
Vue.component(Button.name,Button);
Vue.component(Dialog.name,Dialog);
Vue.component(Input.name,Input);
Vue.component(Upload.name,Upload);
export default {
    data(){
        return {
            isShowDeclare:false,
            isShowImgMd:false,
            base:{baseInfo:''},
            tempSign:'',
            avatarUrl:'',
            newFaceUrl:'',
            uploadAction:'',
            imageUrl:'',
        }
    },
    mounted(){
        this.uploadAction=pathUtil.getBasePath()+'/upload/uploadAvatar';
        personInfoHeaderService.getQgAvailableBalance().then((data)=>{
            this.base = data;
            this.base.baseInfo.registTime = this.base.baseInfo.registTime.substr(0,10);
            if(!this.base.baseInfo.faceUrl){
                this.base.baseInfo.faceUrl="avatar/default.jpg"
            };
            this.avatarUrl=pathUtil.getStaticPath()+this.base.baseInfo.faceUrl;
        })
    },
    methods:{
        handleAvatarSuccess(){
            console.log(arguments[0].status);
            this.newFaceUrl=arguments[0].newFaceUrl;
            this.imageUrl=pathUtil.getStaticPath()+this.newFaceUrl;
        },
        changePersonalSign(){
            personInfoHeaderService.submitPersonalSign({personSign:this.tempSign}).then((data)=>{
                console.log(data);
                this.isShowDeclare = false;
                if(data.status){
                    this.base.baseInfo.personalSign = this.tempSign;
                }
            })
        },
        modifyAvatar(){
            personInfoHeaderService.modifyAvatar({faceUrl:this.newFaceUrl}).then((data)=>{
                this.isShowImgMd = false;
                if(data.status){
                    this.base.baseInfo.faceUrl=this.newFaceUrl;
                    this.avatarUrl=pathUtil.getStaticPath()+this.newFaceUrl;
                }
            })
        }
    }
}
</script>