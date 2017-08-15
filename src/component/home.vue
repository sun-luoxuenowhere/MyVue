<template>
	<div id="temp">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in list">
		  	<img :src="item.img" alt=""> 
		  </mt-swipe-item>
		</mt-swipe>
			<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/news/newslist'>
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/photo/photolist'>
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a to='/news/newslist'>
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
	</div>
</template>
<script>
	export default {

		data:function(){
			return {
				list:[]
			}
		},
		created(){
			this.getlun();
		},
		methods:{
			getlun(){
				var url = 'http://182.254.146.100:8899/api/getlunbo';
				this.$http.get(url).then(function(res){
					// if(res.body.status !=0){
					// 	Toast(res.body.message)
					// 	return;
					// }
					this.list  = res.body.message;
				})
			}
		}
		
	}
</script>
<style scoped>
.mint-swipe-item{
	height: 300px;
}
.mint-swipe,.mint-swipe-items-wrap{
	height: 300px;
}
.mint-swipe img{
	height: 100%;
	width: 100%;
}
</style>