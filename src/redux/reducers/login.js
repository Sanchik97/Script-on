import { LOGIN } from '../actions/actionTypes'

const initialState = {
	username: 'admin',
	password: '12345',
	login: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				username: state.username,
				password: state.password,
				login: !state.login
			}
		default:
			return state
	}
}
