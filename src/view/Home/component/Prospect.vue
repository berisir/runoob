<template>
  <div class="pro-box">
    <div class="pro-list" v-for="item in list">
      <p>{{item.title}}</p>
      <div class="pro-banner"><img src="../../../images/bar2.png"></div>	
      <p><mark>{{item.num}}</mark>人已阅读<time>{{item.time}}</time></p>
    </div>
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
        'title':'@ctitle(6,20)',
        "con":'@cparagraph(1,5)',
        'time':'@time',
         'num':'1-6' 
          }
        ]
      })
      this.list = data.list;
  } 
}   
</script>
<style lang="less"> 
.pro-box{
  background: #eee;
}
.pro-list{
  padding:0 .1rem;
  background: #fff;
  margin-bottom:.1rem;
  p{
  	line-height: .3rem;
  	mark{
	  background: none;
	  color: #f00;	
  	}
  	time{
  	  float: right;
  	}
  }
  img{
  	display: block;
  	width: 100%;
  }
}	
</style>