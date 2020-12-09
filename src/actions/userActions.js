import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './types'
import { URL_PREFIX } from './urlPrefix'


//import { history } from '../_helpers';
//login,
//getAll
export const userActions = {
  logout
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
      .then(user => {
        if(user.error) {
          dispatch({ 
            type: LOGIN_FAILURE,
            error: user.error
          })
        }
        else {
          dispatch({
            type: LOGIN_SUCCESS,
            user: user
          })
          history.push('/mypies', null)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
    }

  
  
}

function logout() {
  //userService.logout();
  return { type: LOGOUT };
}
