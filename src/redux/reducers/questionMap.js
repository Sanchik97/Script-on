import { EDIT_QUESTION_ID } from '../actions/actionTypes'

const initialState = {
	questionId: '0'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case EDIT_QUESTION_ID:
			return {
				questionId: action.payload
			}
		default:
			return state
	}
}
