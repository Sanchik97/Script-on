import {FETCH_SCRIPTS_SUCCESS} from '../actions/actionTypes'
import * as R from 'ramda'

const initialState = {
	ids: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SCRIPTS_SUCCESS:
			R.pluck('id', action.payload)
			return R.merge(state, {
				ids: R.pluck('id', action.payload)
			})

		default:
			return state
	}
}
