<template>
  <div class="login-main">
    <div class="login-inputs">
      <input type="tel" placeholder="手机号或邮箱" id="phone">
      <input type="password" placeholder="密码" id="pass">
    </div>
    <div class="login-register">登录</div>
    <div class="login-agreement">
      <a href="javascript:;" class="code">手机验证码登录</a>
      <a href="javascript:;">无法登录？</a>
    </div>
  </div>
</template>
<script>
export default {

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