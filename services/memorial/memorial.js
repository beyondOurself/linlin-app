import {
	isArray,
	isObject,
	makeResult
} from '@/utils/common/tool.js'
const db = uniCloud.database()
const memorialColl = db.collection("lg-memorial-day")
export async function memorialItemsAddFetch(memorialModel = []) {
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
	return makeResult(result)
}
