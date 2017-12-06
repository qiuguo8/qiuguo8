import Vue from 'vue'
import validateUtil from 'web/common/utils/validationUtil.js'

Vue.filter('currency',function(value,symbol){
    if(validateUtil.isNull(value)||!validateUtil.isNumber(value))return symbol||'￥'+ 0;
    var val = parseFloat(value).toFixed(2);
    return symbol||'￥'+val;
})