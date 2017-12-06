<template>
    <div class="umeditor-wrap"  style="position:relative">
        <script type="text/plain" id="content" style="width:100%;height:400px;overflow:hidden"></script>
    </div>
</template>
<script>
import Vue from 'vue'
import config from 'web/common/components/umeditorConfig.js'
import umeditor from 'web/resources/lib/umeditor/umeditor.js'
import 'web/resources/lib/umeditor/lang/zh-cn/zh-cn.js'
import 'web/resources/lib/umeditor/themes/default/css/umeditor.css'
export default {
    data(){
        return {
            isShowBackdrop:false,
            editor:null
        }
    },
    mounted(){
        this.editor = UM.getEditor('content',config);
    },
    destroyed(){
        this.editor.destroy();
    },
    methods:{
    }
}
</script>
