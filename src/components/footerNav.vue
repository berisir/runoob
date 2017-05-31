<template>
	<div class="footer">
		<div><i class="fa fa-info"></i><router-link active-class="footer-active" to="/Special">专题</router-link></div>
		<div><i class="fa fa-mortar-board"></i><router-link active-class="footer-active" to="/Course">教程</router-link></div>	
		<div><i class="fa fa-map-o"></i><router-link active-class="footer-active" to="/Interview">面试</router-link></div>	
		<div><i class="fa fa-user-circle-o"></i><router-link active-class="footer-active" to="/Mine">我的</router-link></div>	
	</div>
</template>
<style lang="less">
.footer{
	width:100%;
	display: flex;
	position:fixed;
	bottom:0;
	background:#fff;
	border-top:solid #ccc 1px;
	line-height: .4rem;
	div{
		flex:1;
		text-align: center;
	}
	.footer-active{
		color:#f00;
	}
}	
</style>