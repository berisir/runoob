<template>
  <div>
	<Headerbar></Headerbar>	
		<router-view></router-view>
    <footerNav></footerNav>
  </div>	
</template>
<script>
import Headerbar from './component/Headerbar'
import footerNav from '@/components/footerNav'
export default {
  components:{
  	Headerbar,
  	footerNav
  }
}	

</script>	