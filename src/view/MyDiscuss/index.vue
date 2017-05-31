<template>
  <div class="my-discuss">
    <div class="my-discuss-head p1">
      <router-link to="/My"> 
        <i class="backLeft fa fa-angle-left"></i>
      </router-link> 
      <p>我的评论</p>
    </div>
    <div class="my-discuss-lists">
      <ul>
        <li class="my-discuss-item p1">
          <p>ndkdshnoidshoidshoi</p>
          <span>2017-2-1</span>
        </li>
      </ul>
    </div>
  </div>	
</template>
<script>
export default {
  name:"MyQuestion",
  data () {
    return {

    }
  },
  methods: {

  }
}	
</script>
<style scoped lang="less">
.my-discuss{
  width:100%;
  .my-discuss-head{
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
  .my-discuss-lists{
    ul{
      .my-discuss-item{
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