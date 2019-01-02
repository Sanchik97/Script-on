import request from 'superagent'
import * as R from 'ramda'

const scripts = request.get('https://demo8799291.mockable.io')

//Данные с сервера в формате json
export const fetchScriptsApi = async () => {
	try {
		const { body } = await scripts
		return body.scripts
	} catch (error) {
		console.log(error)
	}
}

// Находим скрипт и выбираем его по ID
export const fetchScriptByIdApi = async id => {
	try {
		const { body } = await scripts
		const script = R.find(R.propEq('id', id), body.scripts)
		return script
	} catch (error) {
		console.log(error)
	}
}

export const addNewScript = (
	id,
	nameOfScript,
	questions = [],
	answers = []
) => {
	console.log(id, nameOfScript, questions, answers)
}
