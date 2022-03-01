import Base from './base.model.js'
export default class Result extends Base {

	constructor({
		status = false,
		data = null,
		type = 'sucess',
		message = ''
	} = {}) {
		super()
		this.status = status // 请求状态
		this.data = data // 返回数据
		this.type = type // 类型
		this.message = message // 提示消息
		this._types = ['success', 'error', 'fail', 'exception', 'loading', 'none', ]
	}

	recast(result = {}) {
		const {
			code,
			data
		} = result
		const model = this.skeleton()
			
		if (code === 0) {
			model.status = true
			model.data = data
			model.type = 'success'
			model.message = '请求成功.'
		} else {
			model.status = false
			model.type = 'error'
			model.message = '请求失败.'
		}

		return model
	}

	error(message = '发生错误') {

		const model = this.skeleton()
		model.status = false
		model.type = 'error'
		model.message = message
		return model
	}

}
