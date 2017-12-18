<template>
    <div class="person-messages">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="fa fa-envelope"></i>未读</span>
                <div class="message-wrap row-new" v-for="data in unreadList">
                    <span class="let-aside-icon float-left"><i class="fa fa-bell"></i></span>
                    <div class="mess-content el-col-20">
                        <p class="mess-type">{{data.subject}}</p>
                        <p class="mess-body">{{data.body}}</p>
                        <p class="mess-date">{{data.createTime}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="fa fa-envelope-open"></i>已读</span>
                <div class="message-wrap row-new" v-for="data in readList">
                    <span class="let-aside-icon float-left"><i class="fa fa-bell"></i></span>
                    <div class="mess-content el-col-20">
                        <p class="mess-type">{{data.subject}}</p>
                        <p class="mess-body">{{data.body}}</p>
                        <p class="mess-date">{{data.createTime}}</p>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Vue from 'vue'
import {Tabs,TabPane} from 'element-ui'
import messageService from "web/modules/common/user/service/personMessageService.js"
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);

export default {
  data(){
    return{
        unreadList:[],
        readList:[]
    }
  },
  mounted(){
      messageService.getUnReadMessageList({readStatus:'0'}).then((data)=>{
          console.log(data);
          this.unreadList = data.list.list;
      }),
      messageService.getUnReadMessageList({readStatus:'1'}).then((data)=>{
          console.log(data);
          this.readList = data.list.list;
      })
  }
}
</script>
