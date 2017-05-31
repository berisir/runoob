<template>
  <div class="swiper-container">
  		<div class="swiper-wrapper">
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/591d3df9000120b607500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/5927d42f000129ff07500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/5927d42f000129ff07500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/592253770001a74307500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/590d367a0001675007500250.jpg"></div>
  		</div>
  	  <div class="swiper-pagination"></div>	
  	</div>	
  <!-- <div>
  	<el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="http://img.mukewang.com/591d3df9000120b607500250.jpg">
      </el-carousel-item>
    </el-carousel>
  </div> -->
</template>
<script>
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
export default {
  data () {
  	return {
  	  objSwiper:''	
  	}
  },
  mounted () {
    this.objSwiper = new Swiper(this.$el,{
      autoplay: 1500,
      pagination: '.swiper-pagination',
      paginationClickable: true
    })	
  },
  updated () {
    this.objSwiper.update()
  }
}	
</script>
<style lang="less">
  .swiper-container{
  	img{
  	  width:100%;	
  	  display: block;
  	}
  }	
</style>