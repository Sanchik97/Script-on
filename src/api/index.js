import scriptData from '../script'
import * as R from 'ramda'

export const fetchScriptsApi = async () => {
	return new Promise(resolve => {
		resolve(scriptData)
	})
}

export const fetchScriptByIdApi = async id => {
    return new Promise((resolve, reject) =>{
        const script = R.find(R.propEq('id', id), scriptData)
        resolve(script)
    })
}
