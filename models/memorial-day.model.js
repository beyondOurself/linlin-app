import {
	isObject
} from "@/utils/common/tool.js"
import Base from './base.model.js'
import {
	dictionaryItemsWitchMemorialFetch
} from '@/services/enums/enum.js'
export default class MemorialDay extends Base {


	constructor({
		name = '',
		displayModeName = '',
		displayModeCode = '',
		calendarTypeName = '',
		calendarTypeCode = '',
		reminderTimeName = '',
		reminderTimeCode = '',
		memorialDatetime = '',
	} = {}) {
		super()
		this.name = name
		this.displayModeName = displayModeName
		this.displayModeCode = displayModeCode
		this.calendarTypeName = calendarTypeName
		this.calendarTypeCode = calendarTypeCode
		this.reminderTimeName = reminderTimeName
		this.reminderTimeCode = reminderTimeCode
		this.memorialDatetime = memorialDatetime
	}

	async recast(rawObject = {}) {
		const {
			status,
			data: resultList
		} = await dictionaryItemsWitchMemorialFetch()
		const model = this.skeleton()
		const underDetectionArr = ['displayModeCode,displayMode', 'calendarTypeCode,calendarType',
			'reminderTimeCode,remindWay'
		]
		if (status) {
			if (isObject(rawObject)) {
				for (let [key, val] of Object.entries(rawObject)) {

					if (Object.keys(model).includes(key) && !!val) {
						model[key] = val
						if (underDetectionArr.find(fi => fi.includes(key))) {
							for (let {
									code = '', items = []
								} of resultList) {

								if (
									underDetectionArr.includes(`${key},${code}`)
								) {
									const finder = items.find(fi => fi.value == val)
									model[key.replace('Code', 'Name')] = finder ? finder.text : ''
								}


							}

						}

					}
				}
			}

		}

		return model

	}
}
