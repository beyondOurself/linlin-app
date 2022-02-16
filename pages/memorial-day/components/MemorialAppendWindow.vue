<template>
	<u-popup :show="show" mode="center" @close="$emit(onClose)" @open="$emit(onOpen)">
		<view><text>人生若只如初见，何事秋风悲画扇</text></view>
	</u-popup>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	show:{
		type:Boolean,
		defalut:false
	}
})

</script>

<style lang="scss" scoped></style>
