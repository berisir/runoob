<template>
  <div class="login-main">
    <div class="login-inputs">
      <input type="tel" placeholder="手机号或邮箱" id="phone" v-model="phone"><span class="hint" v-show="isable">手机号不存在</span>
      <input type="password" placeholder="密码" id="pass" v-model="pass">
    </div>
    <div class="login-register" @click="loginCode">登录</div>
    <div class="login-agreement">
      <a href="javascript:;" class="code">手机验证码登录</a>
      <a href="javascript:;">无法登录？</a>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      phone:"",
      pass:"",
      isable:false
    }
  },
  methods:{
    loginCode:function(){
      var that=this;
      if(this.phone.length == 11 && this.pass.length >= 6){
        this.$http.jsonp('http://169.254.180.40:3366/select?phone='+that.phone+'&pass='+that.pass+'&type=logined',{
        }).then(function(opt){
          var newOpt=JSON.parse(opt.bodyText);
          if(newOpt.status == 1){
            this.isable=true;
          }else{
            this.$router.push("/My");
          }
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
    height:1rem;
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
    display: flex;
    justify-content: space-around;
    .code{
      color: #698ebf;
    }
  }
}
</style>