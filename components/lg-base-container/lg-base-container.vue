<template>
	<view class="base__container">
	   <lg-base-status-bar v-if='statusBarActivated'>
		     <slot name='statusBar'>
			 </slot>
	   </lg-base-status-bar>
	   <lg-base-navbar v-if='navBarActivated && !isCustom'>
		      <slot name='navBar'>
				  <u-navbar :title="title" left-text="" :autoBack="true"></u-navbar>
			  </slot>
	   </lg-base-navbar>
	   <view class="container_wrap" >
		   <slot></slot>
	   </view>
	   <lg-base-tabbar v-if='tabBarActivated'>
		     <slot name='tabBar'></slot>
	   </lg-base-tabbar>
	</view>
</template>

<script setup >
	import { defineProps } from 'vue'
	const props =  defineProps({
		statusBarActivated:{
			type:Boolean, 
			default:true
		}, 
		navBarActivated:{
			type:Boolean,
			default:true
		}, 
		tabBarActivated:{
			type:Boolean,
			default:true
		},
		
		title:{
			type:String,
			default:''
		},
		isCustom:{
			type:Boolean,
			default:false
		}
	})
	
</script>


<style lang="scss" scoped>
 $top : var(--window-top) ;	
  .base__container{
	  position: absolute;
	  left: 0;
	  right: 0;
	  top: 0;
	  bottom: 0;
	  background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4439ab1f-c901-42ac-aeff-2e633f2607be/06330129-6754-44b2-804b-9fd05d4bfadb.svg);
	  background-size: 100% 100%;
  }
  .container_wrap{
  }
</style>
