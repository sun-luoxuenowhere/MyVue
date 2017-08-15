import Vue from "vue";
import App from "./App.vue";

import '../statics/mui/css/mui.css';


import  mintui from 'mint-ui';
Vue.use(mintui);
import 'mint-ui/lib/style.css'
import '../statics/mui/css/icons-extra.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import vueresource from 'vue-resource';
Vue.use(vueresource);

import home from './component/home.vue'
import car from './component/shopcar/car.vue'
import newslist from './component/news/newslist.vue'
import newsinfo from './component/news/newsinfo.vue'
import photolist from './component/photo/photolist.vue'

import '../statics/css/site.css'
var router1 = new VueRouter({
	linkActiveClass:"mui-active",
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:id',component:newsinfo},
		{path:'/photo/photolist',component:photolist}
		
	]
})
new Vue({
	el:"#app",
	// render:function(create){
	// 	create(App)
	// }
	router : router1,
	render:c=>c(App)

})

