<template>
    <div class="advertise-edit page-header">
        <div class="rank-common el-col-20">
            <div class="left-name"><span>新增广告</span></div>
            <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px">
                <el-form-item label="标题" prop="bannerName">
                    <el-input type="primary" v-model="editForm.bannerName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="图片" prop="bannerUrl">
                    <el-upload
                        :action="importFileUrl"
                        name="file"
                         :show-file-list="false"
                        :onSuccess="uploadSuccess">
                        <el-input type="text" v-model="editForm.bannerUrl" auto-complete="off"></el-input>
                    </el-upload>
                </el-form-item>
                <el-form-item label="正文编号" prop="bannerLinkUrl">
                    <el-input type="text" v-model="editForm.bannerLinkUrl" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否启用" prop="enabled">
                    <el-radio-group v-model="editForm.enabled">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitBanner()">提交</el-button>
                    <el-button @click="resetForm()">重置</el-button>
                    <el-button @click="$root.goBack()">返回</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Form,FormItem,Input,Button,Radio,RadioGroup} from 'element-ui'
import advertisemanageService from 'web/modules/manage/advertisemanage/service/advertisemanageService.js'
import pathUtil from 'web/common/utils/pathUtil.js'
import validationUtil from 'web/common/utils/validationUtil.js'
import formUtil from 'web/common/utils/formUtil.js'
import sysUtil from 'web/common/utils/sysUtil.js'
import 'web/common/utils/pVerify.js'
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Radio.name,Radio);
Vue.component(RadioGroup.name,RadioGroup);

export default {
    data(){
        return{
            editForm:{
                bannerName:'',
                bannerLinkUrl:'',
                bannerUrl:'',
                enabled:'1',
            },
            importFileUrl:'',

            rules:{
                bannerName:[
                    {required:true,message:'请输入标题',trigger:'blur'},
                    {max:20,message:'长度不能超过30个字符',trigger:'blur'},
                ],
                bannerLinkUrl:[
                    {required:true,message:'请输入正文链接',trigger:'blur'},
                ],
                bannerUrl:[
                    {required:true,message:'请上传图片',trigger:'blur'},
                ],
                enabled:[
                    {required:true,message:'请选择使用状态',trigger:'change'},
                ],
            }
        }
    },
    mounted(){
        this.importFileUrl=pathUtil.getBasePath()+'/upload/uploadBanner';
    },
    methods:{
        uploadSuccess(){
            this.editForm.bannerUrl=arguments[0].bannerUrl;
        },
        resetForm(){
            this.editForm.bannerName='';
            this.editForm.bannerLinkUrl='';
            this.editForm.bannerUrl='';
            this.editForm.enabled='1';
        },
        submitBanner(){
            advertisemanageService.addBanner(this.editForm).then((data)=>{
                if(data.status){
                    $root.goBack();
                }else{
                    alert('上传失败!');
                }
            })
        }
    }
}
</script>
