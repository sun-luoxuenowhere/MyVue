import Vue from "vue";
import App from "./App.vue";

import '../statics/mui/css/mui.css';


import  mintui from 'mint-ui';
Vue.use(mintui);
import 'mint-ui/lib/style.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import login from './component/login.vue'
import register from './component/register.vue'
var router1 = new VueRouter({
	routes:[
		{path:'/login',component:login},
		{path:'/register',component:register}
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

