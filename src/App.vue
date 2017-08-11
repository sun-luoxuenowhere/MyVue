<template>
	<div>
		<span   class = "red">{{msg}} </span>
		<router-link to="/login">登录</router-link>
		<router-link to="/register">注册</router-link>
		<button @click = "add">点击惊喜</button>
		<router-view></router-view>
		<mt-button type="default" size="large">default</mt-button>
		<mt-button type="danger" size="large">danger</mt-button>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
		<div class="mui-content">
			<div class="mui-content-padded">
				<h5>简单说明</h5>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们为 “登录模板” 制作了一独立的 “演示应用”，包括 “账号密码登录、第三方账号登录、账号注册、手势锁屏、分享” 等功能演示。
				</p>
				<h5>体验方式</h5>
				<ol>
					<li>在 HBuilder 中新建“移动App”工程，选择 “mui登录模板” ；</li>
					<li>在 GitHub 上查看或下载 <a _src='https://github.com/dcloudio/mui/tree/master/examples/login'>登录模板源码</a> 。
					</li>
				</ol>
				<h5>演示截图</h5>
				<p style="text-align: center;">
					<img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3891651213,3448723531&fm=175&s=63D033C44A120455DA68B5A90300E091&w=549&h=520&img.JPEG" />
				</p>
			</div>
		</div>
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