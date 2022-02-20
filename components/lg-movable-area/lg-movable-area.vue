<template>
	<movable-area>
		<slot></slot>
		<template  v-for="({name,style}, index) in slotNameListGet" :key="index">
			<view class="movable-view_wrap" :style="style">
				<movable-view direction="all"><slot :name="name"></slot></movable-view>
			</view>
		</template>
	</movable-area>
</template>

<script>
import { ref } from 'vue';
export default {
	computed: {
		slotNameListGet() {
			const filters = Object.keys(this.$slots).filter(v => !['d', 'default'].includes(v));
			const maps = filters.map(mi => {
				const cmds = mi.split('~');
				const cmdsLength = cmds.length;
				let top = '';
				let right = '';
				let bottom = '';
				let left = '';
				const pTop = parseInt(cmds[1]);
				const pRight = parseInt(cmds[2]);
				const pBottom = parseInt(cmds[3]);
				const pLeft = parseInt(cmds[4]);
				const style = {}
				let name = mi || `slot-random-${Date.now()}`;
				if (cmdsLength >= 2 &&  pTop) {
					style.top = `${pTop}rpx`;
				}
				if (cmdsLength >= 3 && pRight) {
					style.right = `${pRight}rpx`;
				}
				if (cmdsLength >= 4 && pBottom) {
					style.bottom = `${pBottom}rpx`;
				}
				if (cmdsLength >= 5 && pLeft) {
					style.left = `${pLeft}rpx`;
				}
				
				
				return {
					name,
					style
				};
			});

			this.status = true;
			return maps;
		}
	}
};
</script>

<script setup>
const status = ref(false);
</script>

<style lang="scss" scoped>
movable-area {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	// background-color: pink;
}
.movable-view_wrap {
	position: absolute;
}
</style>
