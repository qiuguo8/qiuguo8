import Vue from 'vue';

Vue.directive('slipping',{
    inserted(el,binding){
        slipping(el,{});
    }
})

slipping.default = {
    interval:1000,
    speed:20
}

function slipping(el,option){
    if(this instanceof slipping !==true){
        return new slipping(el,Option);
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