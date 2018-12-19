import { ADD_NEW_SCRIPT_NAME } from '../actions/actionTypes'

const initialState = {
	newScriptName: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_SCRIPT_NAME:
			return {
				newScriptName: action.payload
			}
		default:
			return state
	}
}
