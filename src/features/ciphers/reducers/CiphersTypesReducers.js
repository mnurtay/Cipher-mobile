import * as types from '../../../utils/types'

let initialState = {
    cipherTypes: [],
    isLoading: false,
    isError: false
}

export default function CiphersTypesReducers(state=initialState, action){
    switch(action.type){
        case types.CIPHER_TYPES_PENDING: {
            return Object.assign({}, state, {
                isLoading: true,
                isError: false
            })
        }
        case types.CIPHER_TYPES_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                isLoading: false
            })
        }
    }
    return state
}