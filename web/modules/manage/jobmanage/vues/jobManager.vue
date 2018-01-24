<template>
    <div class="manager-index">
        <div class="websit-run-info rank-common">
            <div class="left-name" style="margin-bottom:10px"><span>调度管理</span></div>
            <div class="el-col-24 text-left two-colums-to-one achive-info transition-halfs">
                 <div class="float-left info-bar">
                   <el-button type="primary" @click="refreshTrigger()">刷新所有调度</el-button>
                </div>
                <div class="float-left info-bar">
                   <el-button type="primary" @click="runLotteryJob()">开奖调度</el-button>
                </div>
                <div class="float-left info-bar">
                    <el-button type="primary" @click="runWeekRankJob()">周榜调度</el-button>
                </div>
                 <div class="float-left info-bar">
                    <el-button type="primary" @click="runMonthRankJob()">月榜调度</el-button>
                </div>
                <div class="float-left info-bar">
                    <el-button type="primary" @click="runThreeDaysJob()">3天排行榜调度</el-button>
                </div>
                <div class="float-left info-bar">
                    <el-button type="primary" @click="runSevenDaysJob()">7天排行榜调度</el-button>
                </div>
                <div class="float-left info-bar">
                    <el-button type="primary" @click="runThrityDaysJob()">30天排行榜调度</el-button>
                </div>
                   <div class="float-left info-bar">
                    <el-button type="primary" @click="runFiveRecordsJob()">五场记录调度</el-button>
                </div>
                   <div class="float-left info-bar">
                    <el-button type="primary" @click="runSerialHitJob()">连中记录调度</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button,Message} from 'element-ui'
import jobManageService from 'web/modules/manage/jobmanage/service/jobManageService'
export default {
   data(){
        return {
        }
   },
   methods:{
        refreshTrigger(){
            jobManageService.refreshTrigger().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runLotteryJob(){
            jobManageService.runLotteryJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runThreeDaysJob(){
            jobManageService.runThreeDaysJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runSevenDaysJob(){
            jobManageService.runSevenDaysJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runThrityDaysJob(){
            jobManageService.runThrityDaysJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runWeekRankJob(){
            jobManageService.runWeekRankJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runMonthRankJob(){
            jobManageService.runMonthRankJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runFiveRecordsJob(){
            jobManageService.runFiveRecordsJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
        runSerialHitJob(){
            jobManageService.runSerialHitJob().then((ret)=>{
                    if(ret.body.status){
                        Message({
                            message:'执行成功' ,
                            type: 'success'
                        })
                    }else{
                        Message({
                            message:'执行失败' ,
                            type: 'error'
                        })
                    }            
            })
        },
   }
}
</script>
