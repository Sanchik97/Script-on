import {
	ADD_NEW_SCRIPT_NAME,
	ADD_NEW_SCRIPT_ID,
	ADD_NEW_SCRIPT_QUESTION,
	ADD_NEW_SCRIPT_ANSWER
} from '../actions/actionTypes'

const initialState = {
	id: null,
	newScriptName: 'Новый скрипт',
	questions: [
		{
			id: '0',
			answerId: '0',
			nameOfQuestion: 'Ваша первая приветственная реплика'
		}
	],
	answers: [
		{
			id: '1',
			questionId: '0',
			nameOfAnswer: 'Да'
		},
		{
			id: '2',
			questionId: '0',
			nameOfAnswer: 'Нет'
		}
	]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_SCRIPT_NAME:
			return {
				id: state.id,
				newScriptName: action.payload,
				questions: state.questions,
				answers: state.answers
			}
		case ADD_NEW_SCRIPT_ID:
			return {
				id: action.payload,
				newScriptName: state.newScriptName,
				questions: state.questions,
				answers: state.answers
			}
		case ADD_NEW_SCRIPT_QUESTION:
			return {
				id: state.id,
				newScriptName: state.newScriptName,
				questions: [],
				answers: state.answers
			}
		case ADD_NEW_SCRIPT_ANSWER:
			return {
				id: state.id,
				newScriptName: state.newScriptName,
				questions: state.questions,
				answers: []
			}
		default:
			return state
	}
}
