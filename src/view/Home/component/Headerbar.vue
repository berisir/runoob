<template>
  <div class="header-title">
	<router-link to="/Home/HomeIndex" active-class="header-active">技术</router-link>
  	<router-link to="/Home/Resource" active-class="header-active">人资</router-link>
  </div>	
</template>
<script>
  export default {
}
</script>
<style lang="less">
.header-title{
	position: fixed;
	z-index:5;
	width:100%;
	line-height: .4rem;
	text-align: right;
	border-bottom: solid 1px #ccc; 
	background:#fff url(../../../images/logo.jpg) no-repeat .1rem center;
	background-size:.4rem auto;
	a{
		padding:.05rem .1rem;
		border:solid skyblue 1px;
		margin-right: .15rem;
		border-radius: .1rem; 		
	}
	.header-active{
		background:skyblue;
		color:white;
	}
}	
</style>