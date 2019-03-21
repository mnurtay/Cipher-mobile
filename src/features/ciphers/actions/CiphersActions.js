import * as types from '../../../utils/types'
import {HOST_LIST} from '../../../utils/constants'

import Axios from 'axios'

function onCiphersFetchingPending(){
    return{
        type: types.CIPHERS_PENDING,
        payload: null
    }
}

function onCiphersFetchingFulfilled(obj){
    return{
        type: types.CIPHERS_FULFILLED,
        payload: obj
    }
}


export async function onCiphersFetching(id){
    return async (dispatch, getState) => {
        dispatch(onCiphersFetchingPending())
        URL = HOST_LIST[0] + 'api/algo/list/'+id
        cipher_obj = {
            ciphers: [],
            isLoading: false,
            isError: false
        }
        try{
            let result = await Axios.get(URL)
            //console.log('ACTION_LECTURES_SUCCESS', result.data)
            cipher_obj.ciphers = result.data
        } catch(error){
            //console.log('ACTION_LECTURES_ERROR', error)
            cipher_obj.isError = true
        }
        dispatch(onCiphersFetchingFulfilled(cipher_obj))
    }
}