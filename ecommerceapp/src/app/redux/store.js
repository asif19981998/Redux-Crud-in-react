import {applyMiddleware, createStore} from "redux"
import studentReducer from './student/studentReducer';
import thunk from 'redux-thunk';
const store = createStore(studentReducer,applyMiddleware(thunk))

export default store