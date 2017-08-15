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
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to='/photo/photolist'>
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a to='/news/newslist'>
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
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
/*九宫格样式*/
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
	width: 40px;
	height: 40px;
	display: block;
	content: "";
	background-repeat: round;
}
.mui-icon-home:before{
	background-image: url(../../statics/imgs/1.png);
}
.mui-icon-email:before{
	background-image: url(../../statics/imgs/2.png);
}
.mui-icon-chatbubble:before{
	background-image: url(../../statics/imgs/3.png);
}
.mui-icon-location:before{
	background-image: url(../../statics/imgs/4.png);
}
.mui-icon-search:before{
	background-image: url(../../statics/imgs/5.png);
}
.mui-icon-phone:before{
	background-image: url(../../statics/imgs/6.png);
}
.mui-grid-view.mui-grid-9{
	border-top: 0;
	border-left: 0;
	background-color:white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border-right: 0;
	border-bottom: 0;
}
</style>