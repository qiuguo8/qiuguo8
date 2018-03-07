<template>
    <div class="article-edit page-header">
        <div class="rank-common el-col-20">
            <div class="left-name"><span>{{$route.meta.aliasName}}</span></div>
            <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px">
                <el-form-item label="标题" prop="contentTitle">
                    <el-input type="primary" v-model="editForm.contentTitle" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="文章类型" prop="contentType">
                    <el-select class="el-col-16" v-model="editForm.contentType" filterable placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否启用" prop="enabled">
                    <el-radio-group v-model="editForm.enabled">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文章内容" prop="content">
                    <umeditor ref="editor" :content="editForm.content"></umeditor>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button @click="$root.goBack()">返回</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Form,FormItem,Input,Button,Radio,RadioGroup,Select,Option,Message} from 'element-ui'
import articlemanageService from 'web/modules/manage/articlemanage/service/articlemanageService.js'
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
            editOrAdd:this.$route.query.article?'edit':'add',
            editForm : this.$route.query.article?this.$route.query.article:{contentTitle:'',
                content:'',
                enabled:'1',
                contentType:'01',},
            options: [
                {value: '01', label: '头条'},
                {value: '02', label: '新闻'},
                {value: '03', label: '预测'}],
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
    mounted(){
    },
    methods:{
        submitForm(){
            console.log(this.$refs.editor.editor.getContent());
            console.log(this.editForm)
            this.editForm.content = this.$refs.editor.editor.getContent()
            if (this.editOrAdd == 'edit') {
                articlemanageService.updateContent(this.editForm).then((ret)=>{
                    if (ret.body.status == 'success') {
                        Message({
                            message:'更新成功！',
                            type:'success'
                        })
                        this.$root.goBack()
                    }
                })
            } else if (this.editOrAdd == 'add') {
                articlemanageService.addContent(this.editForm).then((ret)=>{
                    if (ret.body.status == 'success') {
                        Message({
                            message:'添加成功！',
                            type:'success'
                        })
                        this.$root.goBack()
                    }
                })
            }

        }
    },
    components:{
        umeditor:umeditor
    }
}
</script>
