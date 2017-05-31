<template>
  <div class="my-tool-case">
    <div class="my-tool-case-head p1">
      <router-link to="/My"> 
        <i class="backLeft fa fa-angle-left"></i>
      </router-link> 
      <p>我的工具箱</p>
    </div>
    <div class="my-tool-case-lists">
      <NavList></NavList>
      <router-view></router-view>
    </div>
  </div>	
</template>
<script>
import NavList from "./component/NavList"

export default {
  name:"MyQuestion",
  data () {
    return {

    }
  },
  methods: {

  },
  components:{
    NavList
  }
}	
</script>
<style scoped lang="less">
.my-tool-case{
  width:100%;
  .my-tool-case-head{
    text-align: center;
    position:relative;
    border-bottom:0.01rem solid #eee;
    background:#0f88ed;
    p{
      font-size:0.16rem;
      color:#fff;
    }
    .backLeft{
      position:absolute;
      left:0.1rem;
      top: 0.13rem;
      font-size:0.14rem;
      color:#fff;
    }
  }
  .my-tool-case-lists{
    
  }
}
</style>