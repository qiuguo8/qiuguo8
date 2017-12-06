<template>
    <div class="article-edit page-header">
        <div class="rank-common el-col-20">
            <div class="left-name"><span>{{$route.meta.aliasName}}</span></div>
            <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px">
                <el-form-item label="标题" prop="title">
                    <el-input type="primary" v-model="editForm.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="文章类型" prop="type">
                    <el-select class="el-col-16" v-model="editForm.type" filterable placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否启用" prop="isUsed">
                    <el-radio-group v-model="editForm.isUsed">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文章内容" prop="isUsed">
                    <umeditor></umeditor>
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
import {Form,FormItem,Input,Button,Radio,RadioGroup,Select,Option} from 'element-ui'
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
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);
import umeditor from 'web/common/components/umeditor.vue'

export default {
    data(){
        return{
            editForm:{
                title:'',
                content:'',
                img:'',
                isUsed:'1',
            },
            options:[1,5,10],
            rules:{
                title:[
                    {required:true,message:'请输入标题',trigger:'blur'},
                    {max:20,message:'长度不能超过30个字符',trigger:'blur'},
                ],
                type:[
                    {required:true,message:'请选择类型',trigger:'change'},
                ],
                isUsed:[
                    {required:true,message:'请选择使用状态',trigger:'change'},
                ],
            }
        }
    },
    methods:{
    },
    components:{
        umeditor:umeditor
    }
}
</script>
