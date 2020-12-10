import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types'
import { URL_PREFIX } from './urlPrefix'

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const getErrorMessage = ( response ) => {
  
  let errorMessage = ''
  
  if(response.errors) {
    errorMessage = Object.keys(response.errors).map((key) => `${key.capitalize()} ${[...new Set(response.errors[key])].join(', ')}`).join(', ') + '.'
  }
  else if(response.error) {
    errorMessage = response.error
  }
  
  return errorMessage
}

export const login = (email, password, history) => {
  
  return dispatch => {

    dispatch({ type: LOGIN_REQUEST, email })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"user":{"email":email, "password":password}})
    }

    fetch(`${ URL_PREFIX }/api/users/login`, requestOptions)
      .then(response => response.json())
      .then(response => {
        
        if(response.error || response.errors) {
          dispatch({ 
            type: LOGIN_FAILURE,
            error: getErrorMessage(response)
          })
        }
        else {
          dispatch({
            type: LOGIN_SUCCESS,
            user: response.user
          })
          history.push('/mypies', null)
        }
      })
      .catch((error) => {
        dispatch({ 
          type: LOGIN_FAILURE,
          error: error.toString()
        })
      })
    }
}

export const logout = () => {
  return { type: LOGOUT }
}

export const signup = (email, password, firstname, lastname, history) => {
  
  return dispatch => {

    dispatch({ type: SIGNUP_REQUEST, email })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"user":{"email":email, "password":password, "first_name": firstname, "last_name": lastname}})
    }

    fetch(`${ URL_PREFIX }/api/users`, requestOptions)
      .then(response => response.json())
      .then(response => {
        if(response.error || response.errors) {
          dispatch({ 
            type: SIGNUP_FAILURE,
            error: getErrorMessage(response)
          })
        }
        else {
          dispatch({
            type: SIGNUP_SUCCESS,
            user: response.user
          })
          history.push('/mypies', null)
        }
      })
      .catch((error) => {
        dispatch({ 
          type: SIGNUP_FAILURE,
          error: error.toString()
        })
      })
    }
}