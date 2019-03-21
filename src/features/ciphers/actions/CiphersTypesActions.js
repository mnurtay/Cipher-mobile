import * as types from '../../../utils/types'
import {HOST_LIST} from '../../../utils/constants'

import Axios from 'axios'

function onCiphersTypesFetchingPending(){
    return{
        type: types.CIPHER_TYPES_PENDING,
        payload: null
    }
}

function onCiphersTypesFetchingFulfilled(obj){
    return{
        type: types.CIPHER_TYPES_FULFILLED,
        payload: obj
    }
}


export async function onCiphersTypesFetching(){
    return async (dispatch, getState) => {
        dispatch(onCiphersTypesFetchingPending())
        URL = HOST_LIST[0] + 'api/algo/list/'
        cipherTypes_obj = {
            cipherTypes: [],
            isLoading: false,
            isError: false
        }
        try{
            let result = await Axios.get(URL)
            //console.log('ACTION_LECTURES_SUCCESS', result.data)
            cipherTypes_obj.cipherTypes = result.data
        } catch(error){
            //console.log('ACTION_LECTURES_ERROR', error)
            cipherTypes_obj.isError = true
        }
        dispatch(onCiphersTypesFetchingFulfilled(cipherTypes_obj))
    }
}