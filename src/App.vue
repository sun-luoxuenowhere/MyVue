<template>
	<div>
	<!-- 	<span   class = "red">{{msg}} </span>
		<router-link to="/login">登录</router-link>
		<router-link to="/register">注册</router-link>
		<button @click = "add">点击惊喜</button> -->
		<mt-header fixed title="道君商城" style="font-size:20px"></mt-header>
		<router-view></router-view>
<!-- 		<mt-button type="default" size="large">default</mt-button>
		<mt-button type="danger" size="large">danger</mt-button> -->
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	export default {
		data:function(){
			return {
				msg:"hello,daojun"

			}
		},
		methods:{
			add:function(){
				Toast({
					message: 'hello,道君',
					position: 'center',
					duration: 5000
				});
			}
		}
		
	}
</script>
<style scoped>
	.red{
		color:red;
	}
</style>