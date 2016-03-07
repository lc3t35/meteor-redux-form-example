import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import users from '/client/app/modules/login/reducers'
export default combineReducers({
    users,
    routing
})