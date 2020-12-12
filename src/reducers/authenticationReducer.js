import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
  loggedIn: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        user: action.user
      }
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        errorMessage: action.error
      }
    case LOGOUT:
      return {
        loggedIn: false,
        user: {}
      }
    case SIGNUP_REQUEST:
      return {
        user: action.user
      }
    case SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case SIGNUP_FAILURE:
      return {
        loggedIn: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}