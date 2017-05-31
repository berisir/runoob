<template>
  <div class="my-collect">
    <div class="my-collect-head p1">
      <router-link to="/My"> 
        <i class="backLeft fa fa-angle-left"></i>
      </router-link> 
      <p>我的收藏</p>
    </div>
    <div class="my-collect-lists">
      <ul>
        <li class="my-collect-item p1">
          <p>艰苦奋斗编辑看不见看不见?</p>
          <span>2017-2-1</span>
        </li>
      </ul>
    </div>
  </div>	
</template>
<script>
export default {
  name:"MyCollect",
  data () {
    return {

    }
  },
  methods: {

  }
}	
</script>
<style scoped lang="less">
.my-collect{
  width:100%;
  .my-collect-head{
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
  .my-collect-lists{
    ul{
      .my-collect-item{
        border-bottom:0.01rem solid #eee;
        display:-webkit-flex;
        justify-content: space-between;
        p{
          font-size: 0.14rem;
        }
        span{
          display:inline-block;
          font-size:0.12rem;
          color:#ccc;
        }
      }
    }
  }
}
</style>