import Vue from 'vue'
import Constants from 'web/common/directives/Constant.js'

//操作常量对象的工具类
const utils = {
    getTextByCode(type,code){
        if(type == null || code == null)return '';
        var obj = Constants[type];
        if(obj == null)return '';
        for(var i in obj){
            if(obj[i].code == code)return obj[i].value;
        }
    }
}

/**
 * 常量值转化成对应的文字
 */
Vue.directive("constantTranlate",function(el,binding,VNode){
    var key = binding.value;
    var attrs =  VNode.data.attrs;
    var type = attrs['constant-type'];
    if(!el || !attrs || type == null || key == null)return;
    el.innerHTML = utils.getTextByCode(type,key);
})

export default utils;