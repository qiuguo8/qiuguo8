
import validationUtil from './validationUtil.js'
const HORIZONTAL = 'horizontal';
const VERTICAL = 'vertical';
const events = ['onmouse'];
var touches;    //缓存touchstart的touches对象


const scrollBarDefaults = {
    direction:VERTICAL,     //滚动方向
    thickness:10,           //滚动条厚度
    parentDelta:50,         //PC端滚动内容每次滚动距离
    scrollDelta:10          //PC端每次滚动条滚动距离
}

$.fn.scrollBar = function(options){
    options = options || {};
    options = $.extend({},scrollBarDefaults,options);
    return this.each(function(){
        new scrollBar(this,options);
    });
}

function scrollBar(el,option){
    this.$el = el instanceof window.jquery ===true|| $(el);     //当前绑定元素
    this.option = option;                                       
    this.scrollDiv = this.$el.find('[scroll-content]');         //要滚动的内容
    this.scrollBar = this.$el.find('.scroll-bar');              //滚动条
    this.isVertical = option.direction == VERTICAL;             //滚动方向
    this.diff = 0;                                              //滚动距离
    this.diffRatio = 0;                                         //滚动内容的长度和滚动条滚动距离的比例
    this.init();
    this.initEvent();
}

scrollBar.prototype.init = function(){
    if(!this.$el||!this.scrollBar)return;
    if(!this.isScroll())return;
    this.$el.css({'overflow':'hidden','position':'relative'});
    if(this.isVertical){
        this.scrollBar.height(this.getScrollBarHeightForHor());
        this.scrollBar.width(this.option.thickness).css({top:'0px',right:'0px'});
    }else{
        this.scrollBar.width(this.getScrollBarWidthForHor());
        this.scrollBar.height(this.option.thickness).css({left:'0px','bottom':'0px'});
    }
    this.diffRatio = this.scrollDiff/this.diff;
}

scrollBar.prototype.initEvent = function(){
    //监听PC端滚轮事件
    this.$el.on('DOMMouseScroll mousewheel',(e)=>{
        // console.log(e);
        e = e || window.event;
        var delta = e.originalEvent.wheelDelta || e.originalEvent.delta || -e.originalEvent.detail;
        this.scrolling(delta,e);
        e.preventDefault();
    });

    this.$el.on('mouseover',(e)=>{
        e.preventDefault();
        this.scrollBar.css('opacity','1');
    });
    this.$el.on('mouseleave',(e=>{
        e.preventDefault();
        this.scrollBar.css('opacity','0');
    }))
    //监听移动端触摸事件
    this.$el.on('touchstart',(e)=>{
        e.stopPropagation();
        touches = e.touches[0];
        this.scrollBar.css('opacity','1');
        // console.log(e);
    });
    this.$el.on('touchmove',(e)=>{
        e.preventDefault();
        var delta = 0;
        var touchend = e.originalEvent.changedTouches[0];
        if(this.isVertical){
            delta = touchend.pageY - touches.pageY;
        }else{
            delta = touchend.pageX - touches.pageX;
        }
        delta = delta /2;
        this.scrolling(delta,e);
    });
    this.$el.on('touchend',(e)=>{
        this.scrollBar.css('opacity','0');
    })
    //监听浏览器窗口大小的变化
    $(window).on('resize',()=>{
        this.init();
    })
}

//判断当前元素是否需要滚动
scrollBar.prototype.isScroll = function(){
    var scrollLong,clientLong;
    if(this.isVertical){
        scrollLong = this.$el[0].scrollHeight;
        clientLong = this.$el[0].clientHeight;
    }else{
        scrollLong = this.$el[0].scrollWidth;
        clientLong = this.$el[0].clientWidth;
    }
    this.diff = scrollLong - clientLong;
    if(this.diff<0){
        this.scrollBar.hide();
        return false;
    }
    return true;
}

//获取上下滚动时的滚动条的高度
scrollBar.prototype.getScrollBarHeightForHor = function(){
    if(!validationUtil.isNumber(this.option.parentDelta)||!validationUtil.isNumber(this.option.scrollDelta))return 0;
    var scrollLong = this.diff*this.option.scrollDelta;
    scrollLong = scrollLong/this.option.parentDelta;
    this.scrollDiff = scrollLong;
    scrollLong = this.$el[0].clientHeight - scrollLong;
    return scrollLong;
}
//获取上下滚动式的滚动条的宽度
scrollBar.prototype.getScrollBarWidthForHor = function(){
    if(!validationUtil.isNumber(this.option.parentDelta)||!validationUtil.isNumber(this.option.scrollDelta))return 0;
    var scrollLong = this.diff*this.option.scrollDelta;
    scrollLong = scrollLong/this.option.parentDelta;
    this.scrollDiff = scrollLong;
    scrollLong = this.$el[0].clientWidth - scrollLong;
    return scrollLong;
}

//滚轮事件函数
scrollBar.prototype.scrolling = function(delta,e){
    var offset=0, barOffset = 0;
    //根据元素滚动方向获取当前元素的位置
    if(!this.isVertical){
        var left = this.scrollDiv.css('left');
        left = left=='auto'?0:left;
        offset = parseInt(left);
        var barLeft = this.scrollBar.css('left');
        barLeft = barLeft == 'auto' ? 0 : barLeft;
        barOffset = parseInt(barLeft);
    }else{
        var top = this.scrollDiv.css('top');
        top = top == 'auto'?0:top;
        offset = parseInt(top);
        var barTop = this.scrollBar.css('top');
        barTop = barTop == 'auto' ? 0 : barTop;
        barOffset = parseInt(barTop);
    }
    //根据滚轮滚动方向获取当前元素和滑动条滚动距离
    if(delta<0){
        if(e.type == 'touchmove'){
            offset += delta;
            barOffset -= (delta*this.diffRatio);
        }else{
            offset -= this.option.parentDelta;
            barOffset += this.option.scrollDelta;
        }
        if(Math.abs(offset)>this.diff){
            offset = -this.diff;
            barOffset = this.scrollDiff;
        }
    }else{
        if(e.type == 'touchmove'){
            offset += delta;
            barOffset -= (delta*this.diffRatio);
        }else{
            offset += this.option.parentDelta;
            barOffset -= this.option.scrollDelta;
        }
        if(offset>0){
            offset = 0;
            barOffset = 0;
        }
    }

    if(Math.abs(offset)<=this.diff&&offset<=0){
        if(!this.isVertical){
            this.scrollDiv.css({left:offset});
            this.scrollBar.css({left:barOffset});
        }else{
            this.scrollDiv.css({top:offset});
            this.scrollBar.css({top:barOffset});
        }
    }
}

