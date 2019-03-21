import { combineReducers } from 'redux'

import LecturesReducers from '../features/lectures/reducers/LecturesReducers'
import LectureDetailReducers from '../features/lectures/reducers/LectureDetailReducers'
import CiphersTypesReducers from '../features/ciphers/reducers/CiphersTypesReducers'

export default combineReducers({
    LecturesReducers,
    LectureDetailReducers,
    CiphersTypesReducers,
})