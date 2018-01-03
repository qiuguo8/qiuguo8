
/**
 * 日期格式化工具
 * 1）格式化日期
 * 2）以范围内某个格式生成日期
 */
var dateSep = "-/";
var timeSep = ":";
var dateRegStr = "^(\\\d{3,4})(["+dateSep+"]?)(\\\d{2})(["+dateSep+"]?)(\\\d{2})$";         //解析日期字符串
var timeRegStr = "^(\\\d{2})?(?:(?::(\\\d{2}))?(?::(\\\d{2}))?)?$";                         //解析时间字符串
var datePatRegStr = "^[y|Y]{4}(["+dateSep+"]?)[m|M]{2}(["+dateSep+"]?)[d|D]{2}$";           //解析日期模板字符串
var timePatRegStr = "^H{2}:m{2}:s{2}$";                                                     //解析时间模板字符串

var bigMonth = [1,3,5,7,8,10,12,32];
var smallMonth = [4,6,9,11,31];

function DateFormat(str){
    this.dateReg = new RegExp(dateRegStr,'g');
    this.timeReg = new RegExp(timeRegStr,'g');
    this.datePatReg = new RegExp(datePatRegStr,'g');
    this.timePatReg = new RegExp(timePatRegStr,'g');
    this.dateObj = {
        year:null,
        month:null,
        day:null,
        hour:null,
        minute:null,
        second:null
    };
    this.resolve(str);
}

/**
 * 是否是合法的日期值
 * @param {String or Number} num 
 * @param {String} type 
 */
function isValidRange(num,type){
    if(!num)throw new Error('日期格式不正确');
    var tmp = num;
    num = parseInt(num);
    switch (type){
        case 'month':
            if(num<0 || num > 12)return '01';
            break;
        case 'day':
            if(num<0 || num>31)return '01';
            break;
        case 'hour':
            if(num<0||num>24)return '00';
            break;
        case 'minute':
        case 'second':
            if(num<0 || num>60) return '00';
            break;
        default : break;
    }
    return tmp;
}

/**
 * 检查day值是否符合规范
 * @param {String or Number} year 
 * @param {String or Number} month 
 * @param {String or Number} day 
 */
function isDayValid(year,month,day){
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    if(isNaN(year) || isNaN(month) || isNaN(day))return false;
    if(bigMonth.indexOf(month)>-1&&day<bigMonth[bigMonth.length-1])return true;
    if(smallMonth.indexOf(month)>-1&&day<smallMonth[smallMonth.length-1])return true;
    if(month == 2){
        if((year % 4 == 0 || year % 400 == 0 )&&day<30)return true;
        if(day<29)return true;
    }
    return false;
}

DateFormat.prototype = {
    /**
     * 解析字符串日期值或者Date对象
     * @param {String or Date} str 
     */
    resolve(str){
        if(str instanceof Date === true){
            this.resolveForDate(str);
            return;
        }
        if(!str || typeof str != 'string' || str.length == 0)return;
        var parts = str.trim().split(' ');
        //如果只有一个数组元素，使用日期和时间正则表达式解析
        if(parts.length==1){
            var dateStr = this.resolveForDateStr(parts[0]);
            var timeStr = this.resolveForTimeStr(parts[0]);
            if(!dateStr && !timeStr)throw new Error('日期格式不正确');
            return;
        }
        if(parts.length==2){
            var dateStr = this.resolveForDateStr(parts[0]);
            var timeStr = this.resolveForTimeStr(parts[1]);
            if(!dateStr && !timeStr)throw new Error('日期格式不正确');
        }
    },
    /**
     * 解析Date对象
     * @param {Date} date 
     */
    resolveForDate(date){
        if(date instanceof Date !== true)return;
        this.dateObj['year'] = date.getFullYear();
        this.dateObj['month'] = date.getMonth()+1;
        this.dateObj['day'] = date.getDate();
        this.dateObj['hour'] = date.getHours();
        this.dateObj['minute'] = (date.getMinutes()+"").length>1?(date.getMinutes()+""): ('0'+date.getMinutes());
        this.dateObj['second'] = (date.getSeconds()+"").length>1?(date.getSeconds()+""): ('0'+date.getSeconds());
    },
    /**
     * 解析日期字符串
     * @param {String} dateStr 
     */
    resolveForDateStr(dateStr){
        if(!dateStr || dateStr.length == 0)return;
        var dateRes = this.dateReg.exec(dateStr);
        if(!dateRes || dateRes.length == 0)return;
        this.dateObj['year'] = dateRes[1];
        this.dateObj['month'] = isValidRange(dateRes[3],'month');
        this.dateObj['day'] = isDayValid(dateRes[1],dateRes[3],dateRes[5]) ? dateRes[5] :'01';
        this.dateObj['separator'] = dateRes[2];
        return true;
    },
    /**
     * 解析时间字符串
     * @param {String} timeStr 
     */
    resolveForTimeStr(timeStr){
        if(!timeStr || timeStr.length == 0)return;
        var timeRes = this.timeReg.exec(timeStr);
        if(!timeRes || timeRes.length == 0)return;
        this.dateObj['hour'] = isValidRange(timeRes[1],'hour');
        this.dateObj['minute'] = isValidRange(timeRes[2],'minute');
        this.dateObj['second'] = isValidRange(timeRes[3],'second');
    },
    /**
     * 解析模板并格式化字符串
     * @param {String} pattern 
     */
    format(pattern){
        if(!pattern || typeof pattern != 'string'){
            return this.combine();
        }
        var parts = pattern.split(' ');
        var datePat = parts[0];
        if(!datePat || datePat.length == 0)return;
        var datePatRes = this.datePatReg.exec(datePat);
        if(!datePatRes || datePatRes.length == 0)throw new Error('日期格式不正确');
        var dateSep = datePatRes[1];

        var timePat = parts[1];
        var withTime = false;
        if(timePat && timePat.length > 0){
            var timePatRes = this.timePatReg.exec(timePat);
            if(!timePatRes || timePatRes.length == 0)throw new Error('日期格式不正确');
            withTime = true;
        }
        return this.combine(withTime,dateSep);
    },
    /**
     * 拼接字符串
     * @param {Boolean} withTime 
     * @param {String} separator 
     */
    combine(withTime,separator){
        var date = this.dateObj;
        if(Object.keys(date).length == 0)return '';
        if(!separator)separator = this.dateObj['separator']||'';
        var dateStr = "";
        for(var i in date){
            switch (i){
                case 'year':
                    dateStr += date[i];
                    break;
                case 'month':
                    dateStr += (separator + (date[i].length>1 ? date[i] : "0"+date[i]));
                    break;
                case 'day':
                    dateStr += (separator + (date[i].length>1 ? date[i] : "0"+date[i]));
                    break;
                case 'hour':
                    if(!withTime)break;
                    dateStr += ((dateStr.length>0? ' ' : '')+(date[i]||'00'));
                    break;
                case 'minute':
                    if(!withTime)break;
                    dateStr += (timeSep + (date[i]||'00'));
                    break;
                case 'second':
                    if(!withTime)break;
                    dateStr += (timeSep + (date[i]||'00'));
                    break;
                default: break;
            }
        }
        return dateStr;
    }
}

export default function DateUtil(str){
    return new DateFormat(str);
}