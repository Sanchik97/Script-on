import { randomId } from '../../selectors/index'

const initialState = {
	id: randomId(),
    nameOfQuestion: 'Реплика оператора',
    nameOfAnswer: null,
    answerId: null
}


export const (state = initialState, action) =>{

}