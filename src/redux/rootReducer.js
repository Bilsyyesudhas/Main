import { combineReducers } from 'redux'
import authReducer from '../Modules/Auth/reducers'

export default combineReducers({
  auth: authReducer,
})
