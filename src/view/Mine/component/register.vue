<template>
  <div class="login-main">
    <div class="login-inputs">
      <input type="text" placeholder="姓名" id="name" v-model="name">
      <input type="tel" placeholder="手机号" id="phone" v-model="phone">
      <input type="password" placeholder="密码(不少于6位)" id="pass" v-model="pass">
    </div>
    <div class="login-register" @click="loginCode">注册菜鸟</div>
    <div class="login-agreement">
      <p>点击「注册」按钮，即代表你同意<a href="javascript:;">《菜鸟协议》</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      name:"",
      phone:"",
      pass:""
    }
  },
  methods:{
    loginCode:function(){
      var that=this;
      var data=JSON.parse(localStorage.getItem("list"));
      var listData=[];
      if(this.name != "" && this.phone.length == 11 && this.pass.length >= 6 ){
        data.forEach(function(v,i){
          if(that.name == v.name){
            console.log("用户名已存在");
          }else{
            var obj={name:that.name,phone:that.phone,pass:that.pass};
            listData.push(obj);
            localStorage.setItem("list",JSON.stringify(newData));
          }
        })
      }
    }
  },
  mounted:function(){
  }
}
</script>

<style lang="less" scoped>
.login-main{
  .login-inputs{
    margin: 0 .1rem;
    height:1.5rem;
    border-radius: 100px;
    margin-top: .2rem;
    display: flex;
    flex-direction: column;
    input{
      flex:1;
      padding:0 .1rem;
      border: 0;
    }
  }
  .login-register{
    color: #fff;
    background-color: #0f88eb;
    margin: .3rem .1rem;
    height:.4rem;
    text-align: center;
    font-size: .16rem;
    line-height: .4rem;
    border-radius: 2px;
  }
  .login-agreement{
    text-align: center;
    p{
      a{
        color: #698ebf;
      }
    }
  }
}
</style>