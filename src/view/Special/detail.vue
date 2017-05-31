<template>
	<div>
		<div class='wrap'>
			<dl>
				<dt>
					<img :src="imgs" alt="">
				</dt>
				<dd>
					<h2>想学vue那就来八维!</h2>
					<p>
						{{content}}
					</p>
				</dd>
				
			</dl>
		</div>	
		<p>评论:</p>
		<textarea></textarea>
		<input type="submit">

	</div>
</template>
<script>
export default {
	data () {
		return{
			imgs:'',
			content:''
		}
	},
	created () {
		this.content=this.$route.params.date
		this.imgs=this.$route.params.imgs
	}

}

</script>
<style scoped lang='less'>
textarea{
	width:100%;
	height:60px;
	box-sizing: border-box;
}
.wrap{
	width:100%;
	border-bottom:1px solid #f5f5f5;
	padding-bottom: .1rem;
	p{
		width:100%;
		margin-bottom: .1rem;
		margin-top: .1rem;
		height:26px;

		img{
			width:26px;
			height:26px;
			float: left;

		}
		span{
			line-height: 26px;
			float: left;
			padding-left:.1rem;
		}
		b{
			line-height: 26px;
			float: right;
			color:orange;
			height:100%;
			padding-right:0.05rem;
			border-right:5px solid orange;
		}
	}
	dl{
		width:100%;
		display:flex;
		dt{
			width: .75rem;
			height:.56rem;
			img{
				width:100%;
				height:100%;
			}
		}
		dd{
			flex:1;
			h2{	
				width:100%;
				margin-bottom: .1rem;
				text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
	        	-webkit-line-clamp: 2;
	        	overflow: hidden;
			}
			p{
				height:16px;
				overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
	        	-webkit-line-clamp: 1; 
	        	color:#757575;
			}
		}
	}
}
</style>