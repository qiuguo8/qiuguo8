

function isNull(val){
    return val === undefined || val === null || val == '';
}

function isNumber(val){
    var flag = true;
    flag = !isNaN(+val);
    flag = val != Infinity || val != -Infinity;
    return flag;
}
function isAllLegalString(val){
    var reg = /^[a-zA-Z0-9\u4e00-\u9fa5]$/g;
    return reg.exec(val);
}

function hasLetter(val){
    var reg = /[a-zA-z]/g;
    return reg.test(val);
}

function hasNumber(val){
    var reg = /[0-9]/g;
    return reg.test(val);
}

function pwdSafety(val){
    var flag = 0;
    if(hasNumber(val)){
        flag++;
    }
    if(hasLetter(val)){
        flag++;
    }
    if(!isAllLegalString(val)){
        flag++;
    }
    return flag;
}

const validationUtil = {
    isNull:isNull,
    isNumber:isNumber,
    isAllLegalString:isAllLegalString,
    hasLetter:hasLetter,
    hasNumber:hasNumber,
    pwdSafety:pwdSafety
}

export default validationUtil;