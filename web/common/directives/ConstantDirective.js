import Vue from 'vue'
import Constants from 'web/common/directives/Constant.js'

//操作常量对象的工具类
const utils = {
    /**
     * 根据类型和code值获取对应的value值
     * @param {String} type 
     * @param {String} code 
     */
    getTextByCode(type,code){
        if(type == null || code == null)return '';
        var obj = Constants[type];
        if(obj == null)return '';
        for(var i in obj){
            if(obj[i].code == code)return obj[i].value;
        }
    },
    /**
     * 根据类型从常量中获取并生成具有输入的属性名的对象数组
     * valAttr: value属性对应的属性名，默认是text
     * codeAttr: code属性对应的属性名，默认是value
     * @param {String} type 
     * @param {String} valAttr 
     * @param {String} codeAttr 
     */
    getArrayByType(type,valAttr,codeAttr){
        if(type == null)return {};
        var obj = Constants[type];
        if(obj == null)return {};
        var arr = [];
        valAttr = valAttr || 'text';
        codeAttr = codeAttr || 'value'
        for(var i in obj){
            var tmp = {};
            tmp[valAttr] = obj[i].value;
            tmp[codeAttr] = obj[i].code;
            arr.push(tmp);
        }
        return arr;
    },

    /**
     * 根据类型和要添加的对象或者数组从常量中生成对象数据
     * @param {String} type 
     * @param {Object or Array} addObj 
     */
    getArrayByTypeWithOther(type,addObj){
        var arr = this.getArrayByType(type);
        if(arrOrObject){
            return arr.concat(addObj);
        }
        return arr;
    },
    
    /**
     * 根据类型从常量中获取并生成数组，并根据属性名删除与delObj具有相同值的数组元素
     * @param {String} type 
     * @param {Object or Array} delObj 
     * @param {String} attrName 
     */
    getArrayByTypeWithDelObj(type,delObj,attrName){
        var arr = this.getArrayByType(type);
        var objType = Object.prototype.toString.call(delObj);
        if(delObj && typeof attrName == 'string'){
            if(objType === '[object Obejct]'){
                for(var i = 0;i<arr.length;i++){
                    if(arr[i][attrName] == delObj[attrName]){
                        arr.splice(i,1);
                    }
                }
            }
            if(objType === '[object Array]'){
                for(var i = 0;i<arr.length;i++){
                    for(var j = 0,len=delObj.length;j<len;j++){
                        if(arr[i][attrName] == delObj[j][attrName]){
                            arr.splice(i,1);
                        }
                    }
                }
            }
        }
        return arr;
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