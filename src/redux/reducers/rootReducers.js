import {combineReducers} from 'redux'
import scripts from './scripts'
import scriptsPage from './scriptsPage'
import scriptPage from './scriptPage'
import questionMap from './questionMap'
import answerMap from './answerMap'


export default combineReducers({
    scripts,
    scriptsPage,
    scriptPage,
    questionMap,
    answerMap
})