<template>
  <div class="login-box">
    <div class="login-head">
      <h1>菜鸟学堂</h1>
      <h2>与世界分享你的知识、经验和见解</h2>
    </div>
    <div class="login-sel">
      <router-link to="/Mine/register" active-class="active">注册</router-link>
      <router-link to="/Mine/logined" active-class="active">登录</router-link>
    </div>
    <router-view></router-view>
    <div class="login-relation">
      使用机构帐号登录 · 联系我们
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="less" scoped>
.login-box{
  background-color: #f7fafc;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  .login-head{
    text-align: center;
    margin-top: .3rem;
    h1,h2{
      font-weight: 400;
    }
    h1{
      font-size: .4rem;
      padding: .2rem 0;
      color:#0f88eb;
    }
    h2{
      padding-bottom: .2rem;
    }
  }
  .login-sel{
    margin: 0 .9rem;
    position: relative;
    a{
      text-align: center;
      font-size: .18rem;
      color: #000;
      font-weight: 500;
      opacity: .7;
      padding:0 .05rem .04rem;
      margin-left: .2rem;
    }
    .active{
      color:#0f88eb;
      opacity: 1;
      border-bottom: 2px solid #0f88eb;
    }
  }
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
        padding-left: .1rem;
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
  .login-relation{
    left:.85rem;
    color: #aebdc9;
    position: fixed;
    bottom: .3rem;
  }
}
</style>