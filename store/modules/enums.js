import {
	dictionaryItemsFetch
} from '@/services/enums/enum.js'

import {convertEnumMap } from "@/utils/common/tool.js"

let state = {
		displayModeList: [],
		remindWayList: [],
		calendarTypeList: [],
	},

	getters = {
		displayModeListGet({displayModeList}) {
			return displayModeList
		},
		remindWayListGet({remindWayList}) {
			return remindWayList
		},
		calendarTypeListGet({calendarTypeList}) {
			return calendarTypeList
		},
		displayModeMapGet({displayModeList}) {
			return  convertEnumMap(displayModeList) 
		},
		remindWayMapGet({remindWayList}) {
			return  convertEnumMap(remindWayList)
		},
		calendarTypeMapGet({calendarTypeList}) {
			return  convertEnumMap(calendarTypeList)
		},
	},


	mutations = {
		injectEnumsMutation(state, payload) {
			if (Array.isArray(payload) && payload.length) {
				for (let {
						code,
						name,
						items
					} of payload) {

					state[`${code}List`] = items

				}
			}


		}
	},

	actions = {

		async initEnumsAction({
			commit,
			state
		}) {
			const {
				status,
				data
			} = await dictionaryItemsFetch()
			if (status) {
				commit('injectEnumsMutation', data)
			}
		}

	}


export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
