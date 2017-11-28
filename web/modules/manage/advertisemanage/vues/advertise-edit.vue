<template>
    <div class="advertise-edit page-header">
        <div class="rank-common el-col-20">
            <div class="left-name"><span>新增广告</span></div>
            <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px">
                <el-form-item label="标题" prop="title">
                    <el-input type="primary" v-model="editForm.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="图片" prop="img">
                    <el-input type="text" v-model="editForm.img" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="正文链接" prop="content">
                    <el-input type="text" v-model="editForm.content" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否启用" prop="isUsed">
                    <el-radio-group v-model="editForm.isUsed">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
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
                title:'',
                content:'',
                img:'',
                isUsed:'1',
            },
            rules:{
                title:[
                    {required:true,message:'请输入标题',trigger:'blur'},
                    {max:20,message:'长度不能超过30个字符',trigger:'blur'},
                ],
                content:[
                    {required:true,message:'请输入正文',trigger:'blur'},
                ],
                img:[
                    {required:true,message:'请上传图片',trigger:'blur'},
                ],
                isUsed:[
                    {required:true,message:'请选择使用状态',trigger:'change'},
                ],
            }
        }
    },
    mounted(){
    }
}
</script>
