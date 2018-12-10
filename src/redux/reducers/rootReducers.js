import {combineReducers} from 'redux'
import scripts from './scripts'
import scriptsPage from './scriptsPage'
import scriptPage from './scriptPage'
import questionMap from './questionMap'
export default combineReducers({
    scripts,
    scriptsPage,
    scriptPage,
    questionMap
})