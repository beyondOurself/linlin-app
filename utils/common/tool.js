import {
	unref,
	toRaw
} from 'vue'

export function typeOf(raw) {

	const toString = Object.prototype.toString
	const map = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regExp',
		'[object Undefined]': 'undefined',
		'[object Null]': 'null',
		'[object Object]': 'object',
	}
	return map[toString.call(raw)]
}

export function isBoolean(detectedToTarget) {
	return typeOf(detectedToTarget) === 'boolean'
}
export function isNumber(detectedToTarget) {
	return typeOf(detectedToTarget) === 'number'
}
export function isString(detectedToTarget) {
	return typeOf(detectedToTarget) === 'string'
}
export function isFunction(detectedToTarget) {
	return typeOf(detectedToTarget) === 'function'
}
export function isArray(detectedToTarget) {
	return typeOf(detectedToTarget) === 'array'
}
export function isDate(detectedToTarget) {
	return typeOf(detectedToTarget) === 'date'
}
export function isRegExp(detectedToTarget) {
	return typeOf(detectedToTarget) === 'regExp'
}
export function isUndefined(detectedToTarget) {
	return typeOf(detectedToTarget) === 'undefined'
}
export function isNull(detectedToTarget) {
	return typeOf(detectedToTarget) === 'null'
}
export function isObject(detectedToTarget) {
	return typeOf(detectedToTarget) === 'object'
}

/**
 * @param {object} 枚举数组转换成键值映射对象
 * @return {Object} {[text] : [value],[value] : [text] }  
 */

export function convertEnumMap(source = []) {
	const rawArr = toRaw(source)
	const defaultArr = {}
	if (isArray(rawArr)) {
		for (let {
				text,
				value
			} of rawArr) {
			defaultArr[text] = value
			defaultArr[value] = text
		}
	}

	return defaultArr

}

export function updateTime(updater = {},prop = 'update_date'){
	updater[prop] = Date.now()
}

export function makeResult({
	data = "",
	code = -1
} = {}) {

	const resultModel = {
		status: code === 0,
		data,
		type: code === 0 ? 'success' : 'error'
	}

	return resultModel
}
