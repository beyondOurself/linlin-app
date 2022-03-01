import {
	isArray,
	isObject,
	makeResult,
	updateTime
} from '@/utils/common/tool.js'
import ResultModel from '@/models/result.model.js'
const resultInstance = new ResultModel()
const db = uniCloud.database()
const dbCmd = db.command
const memorialColl = db.collection("lg-memorial-day")

export async function memorialItemsAddFetch(memorialModel = []) {
	try {
		let readyArr = []
		if (isArray(memorialModel) && memorialModel.length) {
			readyArr = memorialModel
		}
		if (isObject(memorialModel)) {
			readyArr = [memorialModel]
		}
		const {
			result
		} = await memorialColl.add(readyArr)
		return resultInstance.recast(result)
	} catch (e) {
		// {code ,message } = e
		let message = ''
		if (e.code == 'DUPLICATE_KEY') {
			message = '纪念日已存在'
		}
		return resultInstance.error(message)
	}

}

export async function memorialItemsListFetch() {
	try {

		const {
			result
		} = await memorialColl.field(
			'name,displayModeName,displayModeCode,calendarTypeName,calendarTypeCode,reminderTimeName,reminderTimeCode,memorialDatetime'
			).limit(10).get()
		return resultInstance.recast(result)

	} catch (e) {
		return resultInstance.error()
	}
}


export async function memorialItemUpdateByIdFetch(id = '', updateModel = {}) {
	try {
		// 更新时间
		updateTime(updateModel)
		const {
			result
		} = await memorialColl.doc(id).update(updateModel)
		return resultInstance.recast(result)

	} catch (e) {
		return resultInstance.error(e.message)
	}
}

export async function memorialItemsLoadMoreFetch(id = '') {
	try {
		let result = {}
		if (id) {
			({
				result
			} = await memorialColl.where(`_id > "${id}"`).field(
				'name,displayModeName,displayModeCode,calendarTypeName,calendarTypeCode,reminderTimeName,reminderTimeCode,memorialDatetime'
				).limit(10).get())
		}

		return resultInstance.recast(result)

	} catch (e) {
		return resultInstance.error(e.message)
	}

}
