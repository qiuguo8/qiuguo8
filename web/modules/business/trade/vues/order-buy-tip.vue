<template>
    <el-dialog title="确定要购买该推荐吗？" :lock-scroll="false" width="400px" :visible.sync="showDialog" :close-on-click-modal="false">
        <div class="order-buy-tip">
            <p class="row-new"><span class="el-col-8">赛事：</span><span class="el-col-16"></span></p>
            <p class="row-new"><span class="el-col-8">分析师：</span><span class="el-col-16"></span></p>
            <p class="row-new"><span class="el-col-8">价格：</span><span class="el-col-16"></span></p>
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
