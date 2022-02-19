<template>
		<uni-popup ref="popup" :type="type"
		> 
		    <template v-if="!['message','dialog','share'].includes(type)">
				<slot></slot>
			</template>
			<uni-popup-message v-if="type=='message'" type="warn"><slot></slot></uni-popup-message>
			<uni-popup-dialog v-if="type=='dialog'"><slot></slot></uni-popup-dialog>
			<uni-popup-share v-if="type=='share'"><slot></slot></uni-popup-share>
		</uni-popup>
</template>


<script setup>
import { ref , watch,toRefs} from 'vue';
 
const props = defineProps({
	show:{
		type:Boolean,
		defalut:false
	},
	type:{
		type:String, 
		default:'center',
		validator: v => (['top','center','bottom','left','right','message','dialog','share'].includes(v))
	}
})
 const {} = toRefs(props)
 
 
const popup = ref(null)

const open = () => {
	 popup.value.open()
}

const close = () => {
	 popup.value.close()
}


defineExpose({
	open,
	close
})

</script>

<style lang="scss" scoped></style>
