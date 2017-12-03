<template>
    <el-dialog title="确定要购买该推荐吗？" :lock-scroll="false" width="400px" :visible.sync="showDialog">
        <div class="order-detail">
            <p><span>赛事：</span><span></span></p>
            <p><span>分析师：</span><span></span></p>
            <p><span>价格：</span><span></span></p>
        </div>
        <div slot="footer">
            <el-button type="primary" @click="confirm()">确定</el-button>
            <el-button @click="close()">取消</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    data(){
        return {
            showDialog:false,
        }
    },
    methods:{
        show(){
            this.showDialog = true;
        },
        close(){
            this.showDialog = false;
        },
        confirm(){
            this.$router.push({name:'order-detail'})
        }
    }
}
</script>
