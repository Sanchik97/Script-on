import { LOGIN } from '../actions/actionTypes'

const initialState = {
	username: 'Admin',
	password: 'Admin_12345',
	login: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				login: !state.login
			}
		default:
			return state
	}
}
