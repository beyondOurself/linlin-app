<template>
	<movable-view  direction="all" >
		<slot></slot>
	</movable-view>
</template>

<script setup>
	const props = defineProps({
		slotName:{
			type:String,
			default:''
		}
	})
</script>

<style lang="scss" scoped>
</style>
