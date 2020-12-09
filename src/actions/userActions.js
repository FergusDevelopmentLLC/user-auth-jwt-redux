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
      .then(response => {
        return response.json()
      })
      .then(user => {
        
        if(user.errors) {
          console.log('Dispatching login failure')
          dispatch({ 
            type: LOGIN_FAILURE,
            error: user.errors
          })
        }
        else {
          console.log('Store user')
          console.log('user', user)
          dispatch({
            type: LOGIN_SUCCESS,
            user: user
          })
          console.log('history', history)
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
