import * as types from '../../../utils/types'
import {HOST_LIST} from '../../../utils/constants'

import Axios from 'axios'

function onResultFetchingPending(){
    return{
        type: types.RESULT_PENDING,
        payload: null
    }
}

function onResultFetchingFulfilled(obj){
    return{
        type: types.RESULT_FULFILLED,
        payload: obj
    }
}


export async function onResultFetching(to, obj){
    return async (dispatch, getState) => {
        dispatch(onResultFetchingPending())
        URL = HOST_LIST[0] + 'api/algo/'+to+'/'
        result_obj = {
            result: [],
            isLoading: false,
            isError: false
        }
        try{
            let result = await Axios.get(URL, obj)
            //console.log('ACTION_LECTURES_SUCCESS', result.data)
            result_obj.result = result.data
        } catch(error){
            //console.log('ACTION_LECTURES_ERROR', error)
            result_obj.isError = true
        }
        dispatch(onResultFetchingFulfilled(result_obj))
    }
}