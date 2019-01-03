import { ADD_NEW_QUESTION, EDIT_QUESTION_NAME } from '../actions/actionTypes'

const initialState = {
	questions: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_QUESTION:
			return {
				...state,
				questions: [
                    ...state.questions,
					{
						id: action.questionId,
						answerId: action.answerId,
						nameOfQuestion: action.nameOfQuestion,
						answerName: action.nameOfAnswer
					}
				]
            }
        case EDIT_QUESTION_NAME:
            return{
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id:action.questionId,
                        answerId: action.answerId,
                    }
                ]
            }
		default:
			return state
	}
}
