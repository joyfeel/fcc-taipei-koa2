import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'

function counter(state = 0, action) {
  return state
}

const rootReducer = combineReducers({
  auth,
  counter,
  routing: routerReducer
})

export default rootReducer
