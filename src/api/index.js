import scriptData from '../script'
import request from 'superagent'
import * as R from 'ramda'

export const fetchScriptsApi = async () => {

    //Данные с сервера в формате json

	try {
		const { body } = await request.get(
			'http://www.mocky.io/v2/5c18924d2f00006b00af0ff5'
		)
		return body.scripts
	} catch (error) {
		console.log(error)
    }
    
}

export const fetchScriptByIdApi = async id => {
	return new Promise((resolve, reject) => {
		const script = R.find(R.propEq('id', id), scriptData)
		resolve(script)
	})
}

