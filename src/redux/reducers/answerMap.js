import { ANSWER_ID } from '../actions/actionTypes'

const initialState={
    answerId: '0'
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ANSWER_ID:
                return{
                    answerId: action.payload
                }
        default:
            return state
    }
}