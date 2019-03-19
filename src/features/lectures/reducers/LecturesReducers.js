import * as types from '../../../utils/types'

let initialState = {
    lectures: [],
    lecturesLoading: false,
    isError: false
}

export default function LecturesReducers(state=initialState, action){
    switch(action.type){
        case types.LECTURES_PENDING: {
            return Object.assign({}, state, {
                lecturesLoading: true,
                isError: false
            })
        }
        case types.LECTURES_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                lecturesLoading: false
            })
        }
    }
    return state
}