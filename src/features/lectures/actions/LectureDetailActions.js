import * as types from '../../../utils/types'
import {HOST_LIST} from '../../../utils/constants'

import Axios from 'axios'

// ************ FETCHING LECTURES ************ //
function onLectureFetchingPending(){
    return {
        type: types.LECTURE_PENDING,
        payload: null
    }
}

function onLectureFetchingFulfilled(obj){
    return {
        type: types.LECTURE_FULFILLED,
        payload: obj
    }
}

export async function onLectureDetailFetching(id){
    return async (dispatch, getState) => {
        dispatch(onLectureFetchingPending())
        URL = HOST_LIST[0] + 'api/lectures/list/'+id
        lecture_obj = {
            lecture: {},
            lectureLoading: false,
            isError: false
        }
        try{
            let result = await Axios.get(URL)
            //console.log('ACTION_LECTURES_SUCCESS', result.data)
            lecture_obj.lecture = result.data
        } catch(error){
            //console.log('ACTION_LECTURES_ERROR', error)
            lecture_obj.isError = true
        }
        dispatch(onLectureFetchingFulfilled(lecture_obj))
    }
}
