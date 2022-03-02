<template>
	<view class="lg-container_wrap">
	   <lg-status-bar v-if='statusBarActivated'>
		     <slot name='statusBar'>
			 </slot>
	   </lg-status-bar>
	   <lg-navbar v-if='navBarActivated && !isCustom' :title='title'>
		      <slot name='navBar'>
			  </slot>
	   </lg-navbar>
	   <view class="lg-container_box" :style="boxStyleComputed" >
		   <slot></slot>
	   </view>
	   <lg-tabbar v-if='tabBarActivated'>
		     <slot name='tabBar'></slot>
	   </lg-tabbar>
	</view>
</template>

<script setup >
	import { computed ,toRefs } from 'vue'
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

const {isCustom} = toRefs(props)
const { height: menuHeight, width: menuWidth , top:menuTop , bottom:menuBottom } = uni.getMenuButtonBoundingClientRect();	
const padHeight = getApp().globalData.padHeight;
const boxStyleComputed = computed( () => ({
	top: isCustom.value ? `${menuTop}px` : `${menuBottom + padHeight}px`
}))
</script>


<style lang="scss" scoped>
 $top : var(--window-top) ;
	 
  .lg-container_box{
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  right: 0;
  }
  
</style>
