<template>
  <div class="detail-box">
    <div class="detail-head"><img src="../images/banner.png"></div>
    <div class="detail-text" v-for="item in list">
       <h3>{{item.title}}</h3>
       <p>{{item.con}}</p>
    </div>
  </div>	
</template>
<script>
import Mock from 'mockjs'
export default {
  data (){
    return {
      list:[]
    }
  },

  created (){
   var data = Mock.mock({
      'list|2':[
       {
        'title':'@ctitle(6)',
        "con":'@cparagraph(22)',
        'time':'@time',
        'imgs':"@image('200x100', '#ffcc33', '#FFF', 'png', '!')"
          }
        ]
      })
      this.list = data.list;
      console.log(this.list)
  }
}  
</script>
<style lang="less">
.detail-box{
  background:#eee;
}
.detail-head{
  img{
  	width:100%;
  	display: block;
  }
}	
.detail-text{
  padding:0 .1rem;
  background:#fff;
  margin-bottom: .1rem;
  h3{
  	line-height: .35rem;
  }	
  p{
  	line-height: .18rem;
  }
}
</style>