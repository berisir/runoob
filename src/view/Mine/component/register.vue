<template>
  <div class="login-main">
    <div class="login-inputs">
      <input type="text" placeholder="姓名" id="name" v-model="name"><span class="hint" v-show="isable">用户名已存在</span>
      <input type="tel" placeholder="手机号" id="phone" v-model="phone"><span class="phone" v-show="isphone">手机号已注册</span>
      <input type="password" placeholder="密码(不少于6位)" id="pass" v-model="pass">
    </div>
    <div class="login-register" @click="loginCode">注册菜鸟</div>
    <div class="login-agreement">
      <p>点击「注册」按钮，即代表你同意<a href="javascript:;">《菜鸟协议》</a></p>
    </div>
  </div>
</template>
<script>
import axios from 'jsonp'
export default {
  data:function(){
    return{
      name:"",
      phone:"",
      pass:"",
      isable:false,
      isphone:false
    }
  },
  methods:{
    loginCode:function(){
      var that=this;
      if(this.name != "" && this.phone.length == 11 && this.pass.length >= 6){
        this.$http.jsonp('http://169.254.180.40:3366/select?name='+that.name+'&phone='+that.phone+'&pass='+that.pass+'&type=register',{
        },{
          jsonp:"callback"
        }).then(function(opt){
          if(opt.bodyText == 1){
            this.isable=true;
            this.isphone=true;
          }
        },function(err){
          console.log(err);
        })
      }
    }
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
    .hint{
      position: absolute;
      right: .2rem;
      line-height: .5rem;
      color: #ff4136;
    }
    .phone{
      position: absolute;
      right: .2rem;
      line-height: .5rem;
      color: #ff4136;
      top: 2.6rem;
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