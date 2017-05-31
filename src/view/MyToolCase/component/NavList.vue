<template>
  <nav class="nav-box" v-positionStatic>
    <div class="nav-list">
      <router-link to="/MyToolCase/Resume" class="nav-item" active-class="bot">
        <p class="plr">个人简历模版</p>
      </router-link>
      <router-link to="/MyToolCase/LeavingCertificate" class="nav-item" active-class="bot">
        <p class="plr">离职证明模版</p>
      </router-link>
      <router-link to="/MyToolCase/Compensation" class="nav-item" active-class="bot">
        <p class="plr">薪资计算器</p>
      </router-link>
      <router-link to="/MyToolCase/Watercourse" class="nav-item" active-class="bot">
        <p class="plr">流水生成器</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavList',
  props:["navData"],
  directives: {
    positionStatic: {
      bind (ele) {
        window.onscroll = function(){
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          if(scrollTop>ele.offsetTop){
            ele.className = 'nav-box pos';
          }else{
            ele.className = 'nav-box';
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.nav-box{
  width:100%;
  overflow-x:auto;
  border-bottom : 1px solid #eee;
  .nav-list{
    width : 100%;
    height : 100%;
    display:-webkit-flex;
    box-sizing:border-box;
    .nav-item{
      display:block;
      color:#000;
      position:relative;
      p{
        flex:1;
      }
      &.bot:after{
        content:"";
        display:block;
        width : 70%;
        height: 0.03rem;
        background:#ccc;
        position:absolute;
        bottom:0;
        left:15%;
      }
      
    }
  }
}
</style>
