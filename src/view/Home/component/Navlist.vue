<template>
  <div>
  	<div class="nav-list">
      <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/57b2d0d2000136e702400240-100-100.jpg"></div>
      	<div class="nav-tag">Vue</div>
      </a>
	  <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/565ec2220001272802400240-100-100.jpg"></div>
      	<div class="nav-tag">angular</div>
      </a>
      <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/579f2dbd000130cc02400240-100-100.jpg"></div>
      	<div class="nav-tag">react</div>
      </a>
      <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/565ec25a0001094402400240-100-100.jpg"></div>
      	<div class="nav-tag">Nodejs</div>
      </a>
      <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/565ec1d4000103f702400240-100-100.jpg"></div>
      	<div class="nav-tag">工具</div>
      </a>
      <a href="#">
      	<div class="nav-imgs"><img src="http://img.mukewang.com/565ec27d0001738602400240-100-100.jpg"></div>
      	<div class="nav-tag">优化</div>
      </a>	
    </div>	
  </div>	
</template>
<style lang="less">
  .nav-list{
  	width: 100%;
  	padding: .1rem ;
  	box-sizing: border-box;
  	display:-webkit-box;
    overflow-x: auto;
    border-bottom: 1px solid #ccc;

  	a{
  	  display: block;
	    width: 15%;
	    height: 15%;
	    margin-right: .18rem;	  
      text-align: center;
	  .nav-imgs{
	    border-radius:100%;
		  overflow: hidden;
	  	img{
	  	  width:100%;
	  	
	  	}
	  }
    .nav-tag{
       
    }
	  
  	}

  }  
</style>