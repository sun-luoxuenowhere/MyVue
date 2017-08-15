<template>
	<div id="temp">
		<h4>{{list.title}}</h4>
		<p> {{list.add_time}}  {{list.click}}浏览量</p>
		<div class="content" v-html="list.content"></div>
		<comment :id = "id"></comment>
	</div>
</template>
<script>
	import comment from '../subcom/comment.vue'
	export default {
		components:{
			comment
		},
		data(){
			return {
				id:0,
				list:[]
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getnewsinfo();
		},
		methods:{
			getnewsinfo(){
				var url = 'http://182.254.146.100:8899/api/getnew/'+ this.id;
				this.$http.get(url).then(function(res){
					console.log(res)
					// if(res.body.status !=0){
					// 	Toast(res.body.message)
					// 	return;
					// }
					this.list  = res.body.message[0];
				})
			}
		}
		
	}
</script>
<style scoped>

</style>