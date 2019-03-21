import { combineReducers } from 'redux'

import LecturesReducers from '../features/lectures/reducers/LecturesReducers'
import LectureDetailReducers from '../features/lectures/reducers/LectureDetailReducers'
import CiphersTypesReducers from '../features/ciphers/reducers/CiphersTypesReducers'
import CiphersReducers from '../features/ciphers/reducers/CiphersReducers'
import ResultReducers from '../features/ciphers/reducers/ResultReducers'

export default combineReducers({
    LecturesReducers,
    LectureDetailReducers,
    CiphersTypesReducers,
    CiphersReducers,
    ResultReducers
})