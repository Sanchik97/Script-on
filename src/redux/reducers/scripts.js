import { FETCH_SCRIPTS_SUCCESS, FETCH_SCRIPT_BY_ID_SUCCESS } from '../actions/actionTypes'
import * as R from 'ramda'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SCRIPTS_SUCCESS:
			const newValues = R.indexBy(R.prop('id'), action.payload)
			return R.merge(state, newValues)
		case FETCH_SCRIPT_BY_ID_SUCCESS:
			return R.assoc(action.payload.id, action.payload, state)
		default:
			return state
	}
}
