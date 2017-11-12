<template>
        <el-dialog title="充值" custom-class="login-dialog" :visible.sync="dialogFormVisible">
        <div class="login-form">
            <el-form :model="form" status-icon :rules="rules" ref="form">
                <el-form-item label="充值金额" prop="money" label-width="100px">
                    <el-input v-model="form.money" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary">充 值</el-button>
        </div>
    </el-dialog>
</template>
<script>
import Vue from 'vue'
import {Dialog,Form,FormItem,Input,Button} from 'element-ui'
Vue.component(Dialog.name,Dialog);
Vue.component(Form.name,Form);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);

export default {
    data(){
        return {
            dialogFormVisible:false
        }
    }
}
</script>
