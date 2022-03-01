<template>
	<view>
		{{ $store.getters['nums/displayModeGet'] }} =======
		<lg-button @onClick="testClick">测试</lg-button>
	</view>
</template>

<script setup>
	 import {memorialItemUpdateByIdFetch} from '@/services/memorial/memorial.js'
  const testClick =  async () => {
	   console.log( await memorialItemUpdateByIdFetch('621cfd2343537b0001068ff2',{name:'修改'}))
  }
 
</script>
