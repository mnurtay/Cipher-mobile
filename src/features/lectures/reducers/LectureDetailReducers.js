import * as types from '../../../utils/types'

let initialState = {
    lecture: [],
    lectureLoading: false,
    isError: false
}

export default function LectureDetailReducers(state=initialState, action){
    switch(action.type){
        case types.LECTURE_PENDING: {
            return Object.assign({}, state, {
                lectureLoading: true,
                isError: false
            })
        }
        case types.LECTURE_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                lectureLoading: false
            })
        }
    }
    return state
}