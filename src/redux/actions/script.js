import {
	FETCH_SCRIPTS_START,
	FETCH_SCRIPTS_SUCCESS,
	FETCH_SCRIPTS_FAILURE,
	FETCH_SCRIPT_BY_ID_START,
	FETCH_SCRIPT_BY_ID_FAILURE,
	FETCH_SCRIPT_BY_ID_SUCCESS,
	EDIT_QUESTION_ID
} from './actionTypes'
import { fetchScriptsApi, fetchScriptByIdApi } from '../../api/'

export const fetchScripts = () => async dispatch => {
	dispatch({ type: FETCH_SCRIPTS_START })

	try {
		const scripts = await fetchScriptsApi()
		dispatch({
			type: FETCH_SCRIPTS_SUCCESS,
			payload: scripts
		})
	} catch (err) {
		dispatch({
			type: FETCH_SCRIPTS_FAILURE,
			error: true
		})
	}
}

export const fetchScriptById = id => async dispatch => {
	dispatch({ type: FETCH_SCRIPT_BY_ID_START })

	try {
		const script = await fetchScriptByIdApi(id)
		dispatch({
			type: FETCH_SCRIPT_BY_ID_SUCCESS,
			payload: script
		})
	} catch (err) {
		dispatch({
			type: FETCH_SCRIPT_BY_ID_FAILURE,
			payload: err,
			error: true
		})
	}
}

export const questionId = (id) => dispatch =>{
	dispatch({
		type:EDIT_QUESTION_ID,
		payload: id
	})
}