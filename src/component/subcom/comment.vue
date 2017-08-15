<template>
	<div id="temp">
		<h4>提交评论</h4>
		<hr>
		<textarea v-model="shuru"></textarea>
		<mt-button type="primary" size="large" @click = "postmessage">primary</mt-button>
		<div class="title">
			评论列表
			</div>
			<hr>
			<ul class="mui-table-view" >
				 <li class="mui-table-view-cell" v-for="item in list">
				 	<span>{{item.user_name}}</span>
				 	<p>{{item.user_name}}</p>
				 	<p style="height:20px" v-text='item.content'></p>
				 </li>
		        
			</ul>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return {
				
				shuru:'',
				pageindex:1,
				list:[]
			}
		},
		created(){
			this.getcommentlist(this.pageindex);
		},
		methods:{
			getcommentlist(pageindex){
				pageindex = pageindex ||1;
				var url = 'http://182.254.146.100:8899/api/getcomments/'+this.id +'?pageindex='+pageindex;
				this.$http.get(url).then(function(res){
					this.list = this.list.concat(res.body.message);
				})
			},
			postmessage(){
				var url = 'http://182.254.146.100:8899/api/postcomment/'+this.id;
				this.$http.post(url,{content:this.shuru},{emulateJSON:true}).then(function(res){
					Toast(res.body.message);
					this.list = [{
						"user_name": "匿名用户",
						"add_time": new Date(),
						"content": this.shuru
					}].concat(this.list);
					this.shuru = ''
				})
			}
		},
		props:['id']
		
	}
</script>
<style scoped>
	.red{
		color:red;
		font-size:30px;
	}
</style>