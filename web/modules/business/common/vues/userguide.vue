<template>
    <div class="user-guides common-container">
        <h3 class="com-title"><span class="zn-name">使用帮助</span><span class="eng-name">HELP</span></h3>
        <div>
            <div class="problems-case clearfix">
                <h3 style="text-align:center">关于球果吧</h3>
                <h4>1、球果吧是什么平台？</h4>
                <div><p>
                    球果吧是一个中国体育彩票推荐性平台网站，致力于为广大彩友提供便捷高效的推荐平台，旨在打造成为集彩票推荐、咨询顾问、体育理财为一体的综合性服务平台。同时，球果吧运用领先的信息技术为广大彩友提供最新、最精准的足球资讯，为用户提供资讯查阅、赛事分析、推荐分享等服务，以辅助彩友竞彩投资优化，提高竞彩盈利。
                </p>
                <p>球果吧汇聚大量国内外最顶尖的足彩分析师，为彩友提供最专业、最精准的竞彩分析、推荐方案。球果吧以竞猜体育赛事的擂台角逐模式，从推荐玩家中甄选出高准确率玩家，进行周、月排名，并以第三方身份，以完善的监督机制为彩友提供公平公正公开的比赛咨询交易平台。</p>
                 <p>我们的愿景是将球果吧打造成为最具公信力的体育竞彩投资指引平台，竭力提升产品与服务，向更全面、更专业、更权威的目标发展，成为中国最大的竞彩投资指引平台、体育资讯平台、球迷交流社区。</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>2、用户须知</h4>
                <div><p>任何站内机构、推荐师都不是球果吧官方组织或成员，站内对这些合作机构以及推荐师进行归类以及宣传，只是出于他们的赛事消息渠道更庞大，对比赛结果预测把握度较高命中率有较好保证的缘故；对于推荐发布的多少、推荐的内容以及选择，网站本身都不干涉。站内普通玩家可参加周榜、月榜评比获得晋升，以获得更好的宣传以及分成利益。</p></div>
            </div>
            <div class="problems-case clearfix">
                <h4>3、发单规则</h4>
                <div>
                    <p>玩家可以在比赛开始前15分钟发布该场对阵的推荐，只能发起单场推荐且推荐场次不能重复，投注选项只能是一项。</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>4、如何参加周、月排行榜？</h4>
                <div>
                    <p>本网站的所有用户，只要发布推介，都可以参与周、月排行榜。每个用户仅允许一个账号参与竞猜评比，如发现一人拥有多个账号，网站有权取消相关账号的参与资格。参加周榜排名，自然周推荐场次不得低于12场；一周内无推荐时间不得超过2自然日；参加月榜排名，自然月场次不得低于36场。</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>5、等级晋升规则</h4>
                <div>
                     <p>周胜率≥65%评定为1星；周胜率≥70%评定为2星；周胜率≥75%评定为3星；周胜率≥80%评定为4星；周胜率≥85%评定为5星；</p>
                    <p>月胜率≥65%晋升为中级玩家；月胜率≥70%晋升为高级玩家；月胜率≥75%晋升为资深玩家；月胜率≥80%晋升为专家级玩家；</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>6、奖励规则</h4>
                <div>
                    <p>周榜第一名奖励200球果；周榜第二名奖励150球果；周榜第三名奖励100球果；周榜第四至十名奖励50球果；</p>
                    <p>月榜第一名奖励500球果；月榜第二名奖励400球果；月榜第三名奖励300球果；月榜第四至十名奖励200球果；</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>7、等级和发布价格、分成比例</h4>
                <div>
                    <p>所有玩家采取统一分成比例50%。</p>
                </div>
            </div>
             <div class="problems-case clearfix">
                <h3 style="text-align:center">个人中心</h3>
                <h4>1、安全中心</h4>
                <div>
                <p>
                <a @click="goPersonInfo()"  class="transition-halfs" style="cursor:pointer">我要绑定身份证、修改密码、修改手机、修改银行卡等信息</a></p>
                <p><a  @click="goRechargeInfo()"   :to="{name:'recharge'}"  class="transition-halfs" style="cursor:pointer">我要充值</a></p>
                <p><a  @click="goWithDrawInfo()"   :to="{name:'withdraw'}"  class="transition-halfs" style="cursor:pointer">我要提款</a></p>
                <p><a  @click="goReRecordInfo()"  :to="{name:'recommend-record'}"  class="transition-halfs" style="cursor:pointer">我的推荐记录</a></p>
                <p><a  @click="goBuyRecordInfo()"   :to="{name:'buy-record'}"  class="transition-halfs" style="cursor:pointer">我的购买方案</a></p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h3 style="text-align:center">我是分析师</h3>
                <h4>1、如何成为分析师</h4>
                <div><p>
                    本网站的所有用户，只要完成身份验证都可以发布推荐，成为分析师，每日推荐场次不得超过5场。
                </p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>2、如何发推荐</h4>
                <div>
                    <p>只需注册球果吧账号便可免费发布推荐分析，在比赛开始前15分钟暂停该场对阵的推荐发布。</p>
                </div>
            </div>
             <div class="problems-case clearfix">
                <h4>3、已发布的推荐可以修改吗？</h4>
                <div>
                    <p>不能修改，不能取消，直至该场赛事开赛为止任何用户都可购买您的该场推介。</p>
                </div>
            </div>
             <div class="problems-case clearfix">
                <h4>4、什么是连胜</h4>
                <div>
                    <p>用户最近发布推荐并连续胜利的累计数目为连胜，赢或赢半都会计算入连胜场次当中，结果为平的场次不会令连胜断链，但也不会累计入连胜场次当中。</p>
                </div>
            </div>

            <div class="problems-case clearfix">
                 <h3 style="text-align:center">我要买推荐</h3>
                <h4>1、怎么查看推荐</h4>
                <div>
                    <p>进入推荐市场，可选择相关赛事，根据推荐系数筛选你所需要的推荐单，也可以根据分析师来选择比赛。</p>
                </div>
            </div>
            <div class="problems-case clearfix">
                <h4>2、怎么筛选推荐</h4>
                <div>
                    <p>网站上发布的推荐方案丰富多彩，不同分析师的分析角度、能力、水平或消息来源的不同，所以结果的准确率会有所不同，建议用户尝试以下方法去筛选好的推荐方案：</p>
                    <p>①准确率排名筛选：准确率排名分三个子排名榜，3天、7天及30天准确率排名，当前首页准确率榜显示的是每天更新调整的7天准确率，通过7天准确率排名，您可以了解到最近的高准确率推荐人有哪些， 而在此基础上可结合30天准确率排名，您可以看到该名推荐人的胜负走势的稳定程度，综合因素则可为自己选到不错的跟进对象。</p>
                    <p>②销售榜筛选：销售榜排行的机制是谁的推荐卖出得多就谁排前，这也意味着这个推荐者多人跟进，可信性更高；但为减少短期状态起伏对推荐准确度的影响，建议买家参考7天准确率排名，排除最近状态较差的人，再确定跟进对象。 </p>
                    <p>③连胜榜筛选：连胜统计的是用户最近发布推荐的连续胜利场次累计数目，排行优先级，即时最高连胜，通常这个都是比较有实力的推球用户占取首位，建议买家看好时机，哪位高手是连续3天之内都 在连胜榜上的，可确定跟进对象。 </p>
                    <p>④其他筛选方式：根据分析师的等级、星级选择，高等级、星级的分析师，通常拥有比普通推荐者更为稳定的准确率，可关注为长期跟进对象。</p>
                </div>
            </div>
             <div class="problems-case clearfix">
                <h4>3、不中返还规则</h4>
                <div>
                    <p>任何用户购买站内推荐方案，如果该场比赛出现错/错半/平三种结果的其中一种，系统将会把用户购买该推荐方案的所有球果全部返还，相应地该推荐方案的发布者将不会获得收益。</p>
                    <p>不中返还条款的推出，将充分保障用户的利益，也进一步提高了分析师发布推荐方案的质量。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import sysUtil from 'web/common/utils/sysUtil.js'
export default {
      methods:{
           goPersonInfo(){
                if(sysUtil.checkLoginForBiz()){
                    this.$router.push({
                        path:"/person-info",
                    })
                    return true;
                }else{
                    return false;
                }
            },
            goRechargeInfo(){
                if(sysUtil.checkLoginForBiz()){
                    this.$router.push({
                        path:"/recharge",
                    })
                    return true;
                }else{
                    return false;
                }
            },
            goWithDrawInfo(){
                if(sysUtil.checkLoginForBiz()){
                    this.$router.push({
                        path:"/withdraw",
                    })
                    return true;
                }else{
                    return false;
                }
            },
            goReRecordInfo(){
                if(sysUtil.checkLoginForBiz()){
                    this.$router.push({
                        path:"/recommend-record",
                    })
                    return true;
                }else{
                    return false;
                }
            },
            goBuyRecordInfo(){
                if(sysUtil.checkLoginForBiz()){
                    this.$router.push({
                        path:"/buy-record",
                    })
                    return true;
                }else{
                    return false;
                }
            },
      }
}
</script>
