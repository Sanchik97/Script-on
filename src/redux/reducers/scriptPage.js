import { FETCH_SCRIPT_BY_ID_SUCCESS } from "../actions/actionTypes";
import * as R from 'ramda'
 
const initialState = {
    id: null
}

export default (state = initialState, action) =>{

    switch (action.type) {
        case FETCH_SCRIPT_BY_ID_SUCCESS:
        return R.merge(state, {
            id: R.prop('id', action.payload)
        })    
        default:
        return state    
    }
}