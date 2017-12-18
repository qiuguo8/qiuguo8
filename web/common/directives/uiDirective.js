import Vue from 'vue';

//左右滑动播放指令
Vue.directive('slipping',{
    inserted(el,binding,VNode){
        var attrs = VNode.data.attrs,option={};
        if(attrs){
            option = {
                interval:attrs.interval&&parseInt(attrs.interval),
                speed:attrs.speed&&parseInt(attrs.speed)
            }
        }
        slipping(el,option);
    }
})

slipping.default = {
    interval:1000,
    speed:20
}

function slipping(el,option){
    if(this instanceof slipping !==true){
        return new slipping(el,option);
    }
    this.$el = $(el);
    this.option = $.extend({},slipping.default,option);
    this.diff = 0;
    this.isLeft = true;
    this.timer = null;
    this.init();
}

slipping.prototype.init = function(){
    if(!this.$el)return;
    this.runInterval();
    window.onresize = (e)=>{
        this.runInterval();
    }
}

slipping.prototype.runInterval = function(){
    this.diff = this.$el[0].scrollWidth-this.$el.parent()[0].clientWidth;
    if(this.diff<=0)return;
    if(this.timer){
        clearInterval(this.timer);
    }
    this.timer = setInterval(()=>{
        this.run();
    },this.option.interval);
    this.run();
}

slipping.prototype.run = function(){
    var left = parseInt(this.$el.css('left'));
    if(Math.abs(left)>=this.diff){
        this.isLeft = false;
    }else if(left>=0){
        this.isLeft = true;
    }
    if(!this.isLeft){
        left += this.option.speed;
    }else{
        left -= this.option.speed;
    }
    this.$el.css('left',left); 
}

//左边菜单随滚动条滚动，直到达到右边内容底部
Vue.directive('spin',{
    inserted(el,binding,VNode){
        spin(el);
    },
    unbind(){
        $(window).off('scroll');
    }
});

function spin(el){
    if(this instanceof spin !== true){
        return new spin(el);
    }
    this.$el = $(el);
    this.lastTop = 0;
    this.$sibling = this.$el.siblings();
    this.$window = $(window);
    this.init();
}

spin.prototype = {
    init(){
        if(!this.$el)return;
        this.scroll();
        this.$window.on('scroll',(e)=>{
            this.scroll(e);
        });
        window.onresize = (e)=>{
            this.scroll(e);
            if(window.innerWidth<1120){
                this.$window.off('scroll');
            }else{
                this.$window.on('scroll',(e)=>{
                    this.scroll(e);
                })
            }
        }
    },
    scroll(e){
        var scrollTop = this.$window.scrollTop();
        var scrollHeight = this.$sibling[0].scrollHeight;
        var elHeight = this.$el.innerHeight();
        if(window.innerWidth<1120){
            this.$el.css('top',70);
            this.lastTop = scrollTop;
            return;
        };
        if(!this.lastTop || scrollTop == 0){
            this.$el.css('top',0);
            this.lastTop = scrollTop;
            return;
        }
        var top = parseInt(this.$el.css('top'));
        top = scrollTop;
        if(top+elHeight>=scrollHeight){
            scrollTop = top = scrollHeight - elHeight;
        }
        this.lastTop = scrollTop;
        this.$el.css('top',top);
    }
}