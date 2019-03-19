import { combineReducers } from 'redux'

import LecturesReducers from '../features/lectures/reducers/LecturesReducers'
import LectureDetailReducers from '../features/lectures/reducers/LectureDetailReducers'

export default combineReducers({
    LecturesReducers,
    LectureDetailReducers
})