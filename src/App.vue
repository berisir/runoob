<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/css/common.css'
import '@/static/css/swiper.css'
import '@/static/css/animate.css'
import '@/static/font-awesome/css/font-awesome.css'
export default {
  name: 'app',
  created (){
  
  }
}
</script>

<style lang="less">
html,body{
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.p1{
  	padding:0.1rem;
}
.plr{
padding:0.1rem 0.07rem;
}
.mleft1{
	margin-left:0.1rem;
}
</style>
