
/**
 * 常量文件
 * 1）与com.qiuguo8.enums下的枚举对象一一对应
 * 2）用于常量指令文件中各个指令的调用（或者其他用途）
 * 3）如要使用其中的属性对象，请保持该对象里的值与com.qiuguo8.enums下的枚举对象一致
 * 4）如其中有一些是前端不需要的枚举对象，可删除之，但尽量保留并保持一致
 */

function EnumObj(value,code){
    this.value = value;
    this.code = code;
}


export default {
    //变动类型
    ChangeType:{
        "CZ":new EnumObj("充值", "01"),
        "TX":new EnumObj("提现", "02"),
        "XF":new EnumObj("消费", "03"),
        "YJ":new EnumObj("佣金", "04")
    },
    //文章类型
    ContentType:{
        "TOUTIAO":new EnumObj("头条", "01"),
        "XINWEN":new EnumObj("新闻", "02"),
        "YUCHE":new EnumObj("预测", "03")
    },
    //冻结状态
    FreezeStates:{
        "SUCCESS":new EnumObj("成功","01"),
        "FAILURE":new EnumObj("失败","02"),
        "UNFREEZE":new EnumObj("已解冻","03"),
        "FINISH":new EnumObj("已结算","04")
    },
    //冻结类型
    FreezeType:{
        "WITHDRAW":new EnumObj("提现", "01"),
        "PAY":new EnumObj("支付", "02")
    },
    //推荐命中结果
    HitResult:{
        "INFULL":new EnumObj("赢", "01"),
        "INHALF":new EnumObj("赢半", "02"),
        "TIE":new EnumObj("走水", "03"),
        "OUTHALF":new EnumObj("输半", "04"),
        "OUTFULL":new EnumObj("输", "05")
    },
    //语言类型
    LangType:{
        "LANG_CN":new EnumObj("简体中文", "CN"),
        "LANG_HK":new EnumObj("繁体中文", "HK"),
        "LANG_EN":new EnumObj("英文", "EN")
    },
    //登录方式类型
    LoginChannel:{
        "ByUserName":new EnumObj("用户名登录", "0101"), 
        "ByPhone":new EnumObj("手机验证登录", "0102"), 
        "ByWeChat":new EnumObj("微信登录", "0201"), 
        "ByQQ":new EnumObj("QQ登录", "0202"), 
        "ByAlipay":new EnumObj("支付宝登录","0203")
    },
    //比赛状态
    MatchStatus:{
        "WKS":new EnumObj("未开始","0"),
        "JXZ":new EnumObj("进行中","1"),
        "YJS":new EnumObj("已结束","2"),
        "DD":new EnumObj("待定","6"),
        "GQ":new EnumObj("改期","7"),
        "YZ":new EnumObj("腰斩","8")
    },
    //订单状态
    OrderStatus:{
        "ALREADYPAID":new EnumObj("已支付","01"),
        "SUCCESS":new EnumObj("已成功","02"),
        "REFUND":new EnumObj("已退款","03"),
        "FAILURE":new EnumObj("订单无效","04")
    },
    //支付方式类型
    PaymentMethod:{
        "QG":new EnumObj("球果支付","01"),
        "CASH":new EnumObj("现金支付","02"),
        "WECHAT":new EnumObj("微信支付","03"),
        "ALIPAY":new EnumObj("支付宝支付","04")
    },
    //支付状态
    PaymentStatus:{
        "SUCCESS":new EnumObj("支付成功","01"),
        "FAILURE":new EnumObj("支付失败","02"),
        "PAYING":new EnumObj("支付已发起","03")
    },
    //支付类型
    PaymentType:{
        "WXPAY":new EnumObj("微信支付", "01"),
        "ALIPAY":new EnumObj("支付宝支付", "02")
    },
    //产品类型
    Product:{
        "YP":new EnumObj("亚盘", "01"),
        "DXQ":new EnumObj("大小球", "02"),
        "JC":new EnumObj("竞彩", "03"),
        "BD":new EnumObj("北单", "04")
    },
    //推荐类型
    RecommCategory:{
        "YPQC":new EnumObj("亚盘全场", "0101"),
        "YPBC":new EnumObj("亚盘半场", "0102"),
        "DXQQC":new EnumObj("大小球全场", "0201"),
        "DXQBC":new EnumObj("大小球半场", "0202"),
        "JCHH":new EnumObj("竞彩混合","0301"),
        "JCHHRQ":new EnumObj("竞彩混合让球","0302"),
        "BJDC":new EnumObj("北京单场", "0401")
    },
    //推荐状态
    RecommendStatus:{
        "InIssue":new EnumObj("发布中","01"),
        "TheLottery":new EnumObj("已开奖","02"),
        "Illegal":new EnumObj("违规","03")
    },
    //短信类型
    SmsSendType:{
        "REGISTER":new EnumObj("注册验证码", "1"),
        "LOGIN":new EnumObj("登录验证码", "2"),
        "RESET":new EnumObj("找回密码验证码", "3"),
        "WITHDRAWALS":new EnumObj("提现验证码", "4")
    },
    //成功或失败
    TwoStates:{
        "SUCCESS":new EnumObj("成功","1"),
        "FAILURE":new EnumObj("失败","0")
    },
    //用户角色类型
    UserJurisdictionType:{
        "USER":new EnumObj("user","01"),
        "ADMIN":new EnumObj("admin","02")
    },
    //用户成绩级别
    UserLevel:{
        "CJ":new EnumObj("初级", "01"),
        "ZJ":new EnumObj("中级", "02"),
        "GJ":new EnumObj("高级", "03"),
        "ZSJ":new EnumObj("资深级", "04"),
        "ZJJ":new EnumObj("专家级", "05")
    },
    //用户成绩星级
    UserStarLevel:{
        "YX":new EnumObj("一星", "01"),
        "EX":new EnumObj("二星", "02"),
        "SX":new EnumObj("三星", "03"),
        "SIX":new EnumObj("四星", "04"),
        "WX":new EnumObj("五星", "05")
    },
    //用户状态
    UserStatus:{
        "NORMAL":new EnumObj("正常", "01"),
        "LOCK":new EnumObj("锁定", "02"),
        "WRITTENOFF":new EnumObj("注销", "03")
    },
    //提现状态
    WithdrawStatus:{
        "SUCCESS":new EnumObj("提现成功","01"), 
        "FAILURE":new EnumObj("提现失败","02"),
        "WITHDRAWING":new EnumObj("审核中","03")
    },
    YesOrNo:{
        "YES":new EnumObj("真", "1"),
        "NO":new EnumObj("假", "0")
    }
}