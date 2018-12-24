import { EDITOR_VALUE } from '../actions/actionTypes'

const initialState = {
	editorState:''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case EDITOR_VALUE:
			return {
				editorValue: action.payload
			}
		default:
			return state
	}
}
