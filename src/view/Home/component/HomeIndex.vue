<template>
  <div class="padding">
  	<swiper></swiper>
  	<Navlist></Navlist>
  	<Matter></Matter>	
  </div>
</template>

<script>
import swiper from '@/components/swiperBar'
import Navlist from './Navlist'
import Matter from './Matter'
export default {
  components: {
  	swiper,
  	Navlist,
  	Matter
  }	
}
</script>	
<style>
.padding{
  padding:.4rem 0;
  box-sizing:border-box;
}	
</style>