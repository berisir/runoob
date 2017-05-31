<template>
  <div class="padding">
  	  <div class="res-nav">
  	  	<router-link to="/Home/Resource/Prospect" active-class="res-active">就业案例</router-link>
  	  	<router-link to="/Home/Resource/Trends" active-class="res-active">行业动态</router-link>
  	  	<router-link to="/Home/Resource/Vista" active-class="res-active">就业前景</router-link>
  	  </div>
      <router-view></router-view>
      <!-- <Textwrap></Textwrap> -->
      <!-- <Prospect></Prospect> -->
  </div>
</template>
<script>
import Textwrap from '@/view/Home/component/Textwrap'

export default {
  components: {
  	Textwrap
    // Prospect
  }	
}	
</script>
<style lang="less">
.padding{
  padding:.4rem 0;
  box-sizing:border-box;
  .res-nav{
  	line-height: .3rem;
  	display:-webkit-flex;
  	text-align: center;
  	border-bottom:solid #ccc 1px;
  	margin-top: .1rem;
  	a{
  		flex:1;
  	}
  	.res-active{
  		background: #2ccbb9;
  		color:#fff;
  	}
  }
}		
</style>