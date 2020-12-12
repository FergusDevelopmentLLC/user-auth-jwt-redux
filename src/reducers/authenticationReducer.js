import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, CURRENT_USER_REFRESH_REQUEST, CURRENT_USER_REFRESH_FAILURE, CURRENT_USER_REFRESH_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {
  loggedIn: false,
  loading: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.payload
      }
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        loading: false,
        errorMessage: action.error
      }
    case LOGOUT:
      return {
        loggedIn: false,
        loading: false,
        user: {}
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        loggedIn: true,
      }
    case SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.payload
      }
    case SIGNUP_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        errorMessage: action.error
      }
    case CURRENT_USER_REFRESH_REQUEST:
      return {
        ...state,
        loading: false
      }
    case CURRENT_USER_REFRESH_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.payload
      }
    case CURRENT_USER_REFRESH_FAILURE:
      return {
        loggedIn: false,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}