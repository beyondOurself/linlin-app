export default class ResultModel {

	static make({
		data = "",
		code = -1
	} = {}) {

		const resultModel = {
			status: code === 0,
			data
		}

		return resultModel
	}

}


