import * as R from 'ramda'

export const getScriptById = (state, id) => R.prop(id, state.scripts)

export const getScripts = state => {
	const phones = R.map(id => getScriptById(state, id), state.scriptsPage.ids)
	return phones
}

export const randomId = () =>
	Math.random()
		.toString(36)
		.substring(2, 15) +
	Math.random()
		.toString(36)
		.substring(2, 15)
