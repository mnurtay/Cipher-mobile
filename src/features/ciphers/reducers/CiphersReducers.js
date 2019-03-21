import * as types from '../../../utils/types'

let initialState = {
    ciphers: [],
    isLoading: false,
    isError: false
}

export default function CiphersReducers(state=initialState, action){
    switch(action.type){
        case types.CIPHERS_PENDING: {
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            })
        }
        case types.CIPHERS_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                isLoading: false
            })
        }
    }
    return state
}