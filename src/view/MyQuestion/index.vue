<template>
  <div class="my-question">
    <div class="my-question-head p1">
      <router-link to="/My"> 
        <i class="backLeft fa fa-angle-left"></i>
      </router-link> 
      <p>我的提问</p>
    </div>
    <div class="my-question-lists">
      <ul>
        <li class="my-question-item p1">
          <p>艰苦奋斗编辑看不见看不见?</p>
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
.my-question{
  width:100%;
  .my-question-head{
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
  .my-question-lists{
    ul{
      .my-question-item{
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