<template>
	<lg-container title="经期">
	<u-popup :show="show" mode="center"  @close="close" @open="open" closeable>
        <view>
            <text>人生若只如初见，何事秋风悲画扇
			生若只如初见，何事秋风悲画扇生若只如初见，何事秋风悲画扇生若只如初见，何事秋风悲画扇
			生若只如初见，何事秋风悲画扇
			</text>
        </view>
	</u-popup>
	<u-button @click="show = true">点击触发</u-button>
	</lg-container>
</template>
<script setup>
	import {  ref } from 'vue'
	const show = ref(false)
	const close = () => {
		show.value = false
	}
</script>