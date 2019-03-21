import * as types from '../../../utils/types'

let initialState = {
    result: [],
    isLoading: false,
    isError: false
}

export default function ResultReducers(state=initialState, action){
    switch(action.type){
        case types.RESULT_PENDING: {
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            })
        }
        case types.RESULT_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                isLoading: false
            })
        }
    }
    return state
}