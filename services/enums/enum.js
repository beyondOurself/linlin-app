import {  makeResult} from '@/utils/common/tool.js'
const db = uniCloud.database()
const dictionaryColl = db.collection("lg-data-dictionary")
export async function dictionaryItemsFetch() {
	const {result} = await dictionaryColl.field('code,name,items').get()
	return makeResult(result)
}
