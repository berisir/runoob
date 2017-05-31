<template>
  <div class="my-watercourse">
    <h2 class="calculator-title">流水生成器</h2>
    <table cellpadding="18">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>SerialNumber</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in list">
          <td>{{i.id}}</td>
          <td>{{i.name}}</td>
          <td>{{i.num}}</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>
<script>

export default {
  name:"MyWatercourse",
  data () {
    return {

    }
  },
  created() {
    var Mock=require('mockjs');
    var data=Mock.mock({
      'list|1-5':[{
        'id|+1':1,
        'name':'@name',
        'num':'@natural(0,100000000000)'
        
      }]
    })
    this.list=data.list
    console.log(this.list)

  },
  components:{
  }
} 
</script>
<style scoped lang="less">
.my-watercourse{
  width:100%;
  h2.calculator-title {
    font-size: 0.14rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -15px;
    margin-right: -15px;
    margin-top: 0;
    padding: 10px 15px;
    background: #eee;
    box-shadow: 0 1px 5px rgba(0,0,0,0.24);
  }
  table{
    margin:auto;
    border:0.01rem solid #ccc;

    tr,th,td{
      border:0.01rem solid #ccc;
    }
  }
}
</style>