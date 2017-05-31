<template>	
  <ul class="text-list">
  	<li v-for="item in list">
  		<div class="text-img">
  			<img :src="item.imgs">
		  	<div></div>	
  		</div>
  		<div class="text-msg">
  			<h3>{{item.title}}</h3>
  			<p>{{item.con}}</p>
  		</div>
  	</li>
  </ul>	

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
    'list|20':[
       {
        'name':'@cname',
        'title':'@ctitle(6)',
        "con":'@cparagraph(50)',
        'time':'@time',
        'imgs':"@image('200x100', '#ffcc33', '#FFF', 'png', '!')"
          }
        ]
      })
      this.list = data.list;
  }	
}
</script>

<style lang="less">
.text-list{
  padding:0 .1rem;
  li{
  	padding:.1rem 0;
  	border-bottom:solid #ccc 1px;
    display:flex;
    .text-img{
      width:30%;
      position: relative;
      border:solid #ccc 1px;
      overflow: hidden;
      text-align: center;
      div{
      	padding-top: 100%;
      }
      img{
      	display: block;
      	width:100%;
      	position: absolute;
      }
    }
    .text-msg{
      width:70%;
      padding-left: .1rem;
      h3{
      	white-space: nowrap;
      	text-overflow: ellipsis;
      	overflow: hidden;
      	padding-bottom:.1rem;
      }
	  p{
	  	height:.3rem;
      	display: -webkit-box;
      	text-overflow: ellipsis;
      	overflow: hidden;
		-webkit-box-orient:vertical;
		-webkit-line-clamp: 2;
	  }	
    }
  }
}	
	

</style>
