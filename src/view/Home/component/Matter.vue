<template>
  <div class="matter-box">
  	<div class="matter-title"><span>菜鸟说</span></div>
  	<div class="matter-list">
  	  <dl>
  	  	<dt><img src="https://img3.doubanio.com/icon/g241320-13.jpg"></dt>
  	  	<dd>来自javascript<time>2017-05-28</time>  </dd>
  	  </dl>
  	  <div class="matter-msg">
        <span class="reply">回答</span>
  	  	<h3>div块元素怎么清除浮动</h3>       
  	  </div>
  	</div>
    <div class="matter-list">
      <dl>
        <dt><img src="https://img3.doubanio.com/icon/g241320-13.jpg"></dt>
        <dd>来自javascript<time>2017-05-28</time>  </dd>
      </dl>
      <div class="matter-msg">
        <span class="reply">回答</span>
        <h3>div块元素怎么清除浮动</h3>       
      </div>
    </div>
    <div class="matter-list">
      <dl>
        <dt><img src="https://img3.doubanio.com/icon/g241320-13.jpg"></dt>
        <dd>来自javascript<time>2017-05-28</time>  </dd>
      </dl>
      <div class="matter-msg">
        <span class="reply">回答</span>
        <h3>div块元素怎么清除浮动</h3>       
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .matter-title{
  	line-height: .35rem;
  	border-bottom: 1px solid #ccc;
  	padding-left: .2rem;
  	font-weight: bold;
  	font-size: .14rem;
  	color:#000;
  	span{
  		position: relative;
  		overflow: hidden;
  	&:before{
  	  content:"";
  	  display: block;
  	  position: absolute;
  	  left:-.1rem;
  	  top:.05rem;
  	  width:.05rem;
  	  height:.1rem;
  	  background: #f00;      
  	};
  	}
  }
.reply{
  font-weight: normal;
  position: absolute;
  background:#0ff;
  padding:.05rem .1rem;
  border-radius:3px;
  color:#fff;
  right:.1rem;
}  
.matter-list{
	  padding: 0 .1rem;
    padding-bottom: .1rem;
  	border-bottom: 1px solid #ccc;  
  dl{
  	padding-top:.1rem;
  	display:flex;
  	dt{
  	  width:.3rem;
  	  height:.3rem;
  	  border-radius:100%;
  	  overflow: hidden;
  	  img{
  	  	display: block;
  	  	width: 100%;
  	  }
  	}
  	dd{
  		flex:1;
      padding-left: .1rem;
  		line-height: .3rem;
      time{
        float: right;
      }
  	}
  }
  .matter-msg{
  	h3{
  	  line-height: .3rem;

  	}
  }
}  	
</style>