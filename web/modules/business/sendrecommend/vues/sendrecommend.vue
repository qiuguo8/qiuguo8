<template>
    <div class="send-recommend">
        <ul class="select-list">
            <li>亚盘</li>
            <li>大小球</li>
            <li>竞彩足球</li>
            <li>北京单场</li>
        </ul>
        <div class="match-list">
            <ul class="match-time select-list">
                <li><el-button type="primary">全场</el-button></li>
                <li><el-button type="primary">半场</el-button></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Checkbox,Button} from 'element-ui'
Vue.component(Checkbox.name,Checkbox);
Vue.component(Button.name,Button);
export default {
  
}
</script>
