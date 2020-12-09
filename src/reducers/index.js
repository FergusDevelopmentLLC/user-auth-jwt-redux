import { combineReducers } from 'redux'
import authenticationReducer from './authenticationReducer'
import pieReducer from './pieReducer'

const appReducer = combineReducers({
  authenticationReducer,
  pieReducer
  
})

//https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
  
  if (action.type === 'CLEAR_DATA') {
    state = undefined
  }
  
  return appReducer(state, action)
}

export default rootReducer