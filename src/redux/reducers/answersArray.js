import { ADD_NEW_ANSWER } from '../actions/actionTypes'

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_ANSWER:
			return [
				...state,
				{
					id: action.payload.id,
					nameOfAnswer: action.payload.nameOfAnswer,
					questionId: action.payload.questionId
				}
			]
		default:
			return state
	}
}
