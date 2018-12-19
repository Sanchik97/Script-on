import request from 'superagent'
import * as R from 'ramda'

//Данные с сервера в формате json

const scripts = request.get('https://demo8799291.mockable.io')

export const fetchScriptsApi = async () => {
	try {
		const { body } = await scripts
		return body.scripts
	} catch (error) {
		console.log(error)
	}
}

// Находим скрипт и выбираем по ID
export const fetchScriptByIdApi = async id => {
	try {
		const { body } = await scripts
		const script = R.find(R.propEq('id', id), body.scripts)
		return script
	} catch (error) {
		console.log(error)
	}
}
