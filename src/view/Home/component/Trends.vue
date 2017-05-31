<template>
  <div class="trend-box">
  	<router-link class="trend-list" to="/Detail" v-for="item in list">
  		<div class="trend-imgs">
  			<img src="../../../images/bar2.png">
  			<p>{{item.con}}</p>
  			<div></div>
  		</div>
  		<div class="matter-list">
  	      <dl>
  	      	<dd>来自  {{item.name}}</dd>
  	      	<dt><img src="https://img3.doubanio.com/icon/g241320-13.jpg"></dt>
  	      </dl>
  	    </div>
  	</router-link>
  </div>	
</template>
<script>
import Mock from 'mockjs' 
export default {
  data () {
    return {
      list:[]
    }
  },
  created () {
    var data = Mock.mock({
    'list|15-25':[
       {
        'name':'@cname',
        'title':'@ctitle(6)',
        "con":'@cparagraph(1,5)',
        'time':'@time',
          }
        ]
      })
      this.list = data.list;
  } 
}	
</script>
<style lang="less">
.trend-box{
  box-sizing:border-box;
  background: #eee;
}  	
.trend-list{
  display: block;
  width:100%;
  padding:.15rem;
  background: #fff;
  box-sizing:border-box;
  margin-bottom: .1rem;
}
.trend-imgs{
	position: relative;
	overflow: hidden;
	border-radius:10px 10px 0 0;
	img{
	  position: absolute;
	  height:100%;
	}
	p{
		width:100%;
		padding:.05rem;
		position: absolute;
		bottom:0;
		background: rgba(0,0,0,.5);
		color:#fff;
		box-sizing:border-box;
		word-wrap:break-word; 
	}
	div{
		padding-top:50%; 
	}
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