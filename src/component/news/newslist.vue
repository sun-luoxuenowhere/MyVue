<template>
	<div id="temp">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list">
					<router-link v-bind="{to:'/news/newsinfo/'+item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						</div>
					</router-link>
				</li>

			</ul>

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
			this.getnewslist();
		},
		methods:{
			getnewslist(){
				var url = 'http://182.254.146.100:8899/api/getnewslist';
				this.$http.get(url).then(function(res){
					console.log(res)
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

</style>