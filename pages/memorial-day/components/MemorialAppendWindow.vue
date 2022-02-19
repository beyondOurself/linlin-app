<template>
	<view class="memorial-append-window-wrap">
		<lg-base-popup ref="popupRef" type="bottom">
			<lg-base-card topRadius="25" @onClose="closeWindow">
				<view class="window_container">
					<uni-forms border ref="formRef" v-model="formData" validate-trigger="bind" err-show-type="toast">
						<uni-forms-item label="名称" name="name" required><uni-easyinput type="textarea" v-model="formData.name" placeholder="请输入纪念日名称" /></uni-forms-item>
						<uni-forms-item
							label="岁数"
							name="age"
							required
							error-message="纪名称不能为空"
						>
						  <template #label>
							   愚蠢的地球人
						  </template>
							<uni-easyinput type="text" v-model="formData.age" placeholder="请输入名称" />
						</uni-forms-item>
					</uni-forms>
				</view>
				<template #footer>
					<view class="window_footer">
						
						<view class="footer__reset-btn_wrap">
							<u-button  plain color='#7bdfc2' icon="pushpin"  @click="reset">重置</u-button>
						</view>
						<view class="footer__confirm-btn_wrap">
							<u-button plain color='#7bdfc2' icon="checkbox-mark" @click="confirm">完成</u-button>
						</view>
					</view>
				</template>
			</lg-base-card>
		</lg-base-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			rules: {
				name: {
					
					rules: [
						{
							required: true,
							errorMessage: '请选择兴趣'
						},
						{
							validateFunction: function(rule, value, data, callback) {
								console.log(value);
								if (value.length < 2) {
									callback('请至少勾选两个兴趣爱好');
								}
								return true;
							}
						}
					]
				}
			}
		};
	},
	onReady() {
		this.$refs.formRef.setRules(this.rules);
	}
};
</script>

<script setup>
import { ref, watch, toRefs, nextTick } from 'vue';
// > 弹窗打开关闭
const popupRef = ref(null);
const open = () => {
	popupRef.value.open();
};
const close = () => {
	popupRef.value.close();
};

// > 弹窗表单

const formData = ref({
	name: '111',
	age: '0'
});

const submitForm = val => {
	console.log(val);
};

const closeWindow = () => {
	console.log('关闭弹窗');
	close();
};

// 表单

const formRef = ref(null);

const rules = ref([
	{
		name: {
			rules: [],
			validateFunction: function(rule, value, data, callback) {
				console.log('>>>', value);
			}
		},
		age: {
			rules: []
		}
	}
]);

const onMounted = () => {
	console.log('执行');
};
const confirm = () => {
	formRef.value
		.validate()
		.then(res => {
			console.log('表单数据信息：', res);
		})
		.catch(err => {
			console.log('表单错误信息：', err);
		});
};

const reset = () => {
	formRef.value.resetFields();
};

// > expose
defineExpose({
	open,
	close
});
</script>

<style lang="scss" scoped>
.window_wrap {
	background-color: #fff;
	padding: 25px;
}
.window_container {
}
.window_footer{
	display: flex;
	justify-content: space-around;
}
.footer__confirm-btn_wrap,.footer__reset-btn_wrap{
}
</style>
