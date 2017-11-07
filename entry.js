import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import routes from "web/common/router/vue-router"
import vueLoadingBar from 'vue2-loading-bar'
import comVue from 'web/modules/commonVue'
import jquery from 'jquery'
window.$ = jquery;
window.jquery = jquery;

Vue.use(VueRouter);
Vue.use(VueResource); 
Vue.use(Vuex);

var loadingTimer;

var router =  new VueRouter({
	routes:routes
});

var vue = new Vue({
	router:router,
	data:{
		errorDone:function(){

		},
		progressDone:function(){
			if(this.progress != 100){
				loadEnd();
			}
		},
		progress:0,
		error:false
	},
	components:{
		LoadingBar:vueLoadingBar
	}
}).$mount("#vue-app");
console.log(vue);
comVue.$on("on-progress-start",function(data){
	startLoad();
});

comVue.$on("on-progress-end",function(data){
	loadEnd();
});

Vue.http.interceptors.push(function(request, next){
	if(request){
		vue.$data.progress = 0;
		startLoad();
	}
	next(function(res){
		if(res){
			loadEnd();
		}
		if(!res || !res.ok){

		}else{

		}
	});
});

function startLoad() {
	vue.$data.progress = 0;
	loadingTimer=setTimeout(function(){
		vue.$data.progress = Math.random()*3+1;
		loading();
	},100);
}

function loading(){
	if(loadingTimer){
		clearTimeout(loadingTimer);
	}
	var curSize = vue.$data.progress || 0;
	loadingTimer = setTimeout(function(){
		if(curSize < 60){
			curSize += Math.random()*2+1;
		}else if(curSize >= 60 && curSize < 80){
			curSize += Math.random()*1.5+1;
		}else if(curSize >= 80 && curSize < 90){
			curSize += Math.random()+1;
		}else if(curSize >= 90 && curSize < 99){
			curSize += Math.random()+0.25;
		}
		vue.$data.progress = curSize;
		loading();
	},250);
};

function loadEnd(){
	clearTimeout(loadingTimer);
	setTimeout(function(){
		vue.$data.progress = 100;
	},0);
};

