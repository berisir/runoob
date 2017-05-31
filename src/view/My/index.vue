<template>
  <div class="my-box">
    <div class="my-box-head p1">
      <div class="pic">
        <span>
          头像
        </span> 
        <input type="file" class="file">
      </div>
    	<p>
    	  菜鸟学堂
    	</p>
    </div>
    <div class="my-box-content">
      <router-link to="/MyCollect">
        <div class="my-box-lists-item p1">
          <p>我的收藏</p>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="/MyQuestion">
        <div class="my-box-lists-item p1">
            <p>我的提问</p>
            <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="/MyDiscuss">
        <div class="my-box-lists-item p1">
          <p>我的评论</p>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
      <router-link to="/MyToolCase">
        <div class="my-box-lists-item p1">
          <p>我的工具箱</p>
          <i class="fa fa-angle-right"></i>
        </div>
      </router-link>
    </div>
  </div>	
</template>
<script>

export default {
  name:"MyIndex",
  data () {
    return {

    }
  },
  methods: {

  }
}	
</script>
<style scoped lang="less">
.my-box{
  width:100%;
  background:#eee;
  .my-box-head{
  	width:100%;
  	box-sizing:border-box;
  	background:#0f88ed;
  	border-bottom: 0.01rem solid #eee;
    text-align: center;
    position:relative;
  	.pic{
      position:absolute;
      left:0.1rem;
      top:0.05rem;
  	  span{
  	    display: inline-block;
  	    width: 0.3rem;
  	    height: 0.3rem;
        border-radius: 0.3rem;
  	    border: 0.01rem solid #eee;
  	    text-align: center;
  	    background: #eee;
  	    line-height: 0.3rem;
  	    z-index: 800;
  	  }
  	  .file{
  	  	width: 10%;
	      height: 0.2rem;
	      position: absolute;
	      top: 0.3rem;
        opacity: 0;
  	  }
  	}
	  p{
      font-size:0.16rem;
      color:#fff;
      text-align: center;
	  }
  	
  }
  .my-box-content{
    background:#fff;
    .my-box-lists-item{
      display:-webkit-flex;
      justify-content: space-between;
      border-bottom: 0.01rem solid #eee;
      p{
        font-size:0.14rem;
      }

    }
  }
}
</style>