import * as types from '../../../utils/types'
import {HOST_LIST} from '../../../utils/constants'

import Axios from 'axios'

// ************ FETCHING LECTURES ************ //
function onLecturesFetchingPending(){
    return {
        type: types.LECTURES_PENDING,
        payload: null
    }
}

function onLecturesFetchingFulfilled(obj){
    return {
        type: types.LECTURES_FULFILLED,
        payload: obj
    }
}

export async function onLectureFetching(){
    return async (dispatch, getState) => {
        dispatch(onLecturesFetchingPending())
        URL = HOST_LIST[0] + 'api/lectures/list/'
        lecture_obj = {
            lectures: [],
            lecturesLoading: false,
            isError: false
        }
        try{
            let result = await Axios.get(URL)
            //console.log('ACTION_LECTURES_SUCCESS', result.data)
            lecture_obj.lectures = result.data
        } catch(error){
            //console.log('ACTION_LECTURES_ERROR', error)
            lecture_obj.isError = true
        }
        dispatch(onLecturesFetchingFulfilled(lecture_obj))
    }
}
