import { CREATE_PIE, FETCH_PIE, UPDATE_PIE, FETCH_PIES, FETCH_PIES_FOR_CURRENT_USER } from './types'
import { URL_PREFIX } from './urlPrefix'
import getErrorMessage from '../_helpers/errorHelper'


export const createPie = (pie, history) => dispatch => {
  
  const options = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  fetch(`${ URL_PREFIX }/pies`, options)
    .then(res => res.json())
    .then((pie) => {
      return dispatch({
        type: CREATE_PIE,
        payload: pie
      })
    }).then(() => {
      history.push('/pies')
    })
  }

export const fetchPie = (id) => dispatch => {
  const apiUrl = `${ URL_PREFIX }/pies/${id}`

  fetch(apiUrl, null)
    .then(res => res.json())
    .then((pie) => {
      return dispatch({
        type: FETCH_PIE,
        payload: pie
      })
    })
  
}

export const updatePie = (pie) => dispatch => {

  const options = {
    method: 'PATCH',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  let apiUrl = `${ URL_PREFIX }/pies/${pie.id}`
  
  fetch(`${apiUrl}`, options)
    .then(res => res.json())
    .then((savedPie) => {
      return dispatch({
        type: UPDATE_PIE,
        payload: savedPie
      })
    })
}

export const fetchPies = () => {
  return dispatch => {
    
    let apiUrl = `${ URL_PREFIX }/pies`
    
    fetch(`${apiUrl}`, null)
      .then(res => res.json())
      .then((pies) => {
        
        dispatch({
          type: FETCH_PIES,
          payload: pies
        })

      })
  }
}

export const fetchPiesForCurrentUser = (user) => {
  
  return dispatch => {
    
    const requestOptions = {
      method: 'GET',
      headers: (user && user.token) ? { 'Authorization': 'Bearer ' + user.token } : {}
    }

    fetch(`${ URL_PREFIX }/user`, requestOptions)
      .then(response => response.json())
      .then(response => {
        if(response.error || response.errors) {
          dispatch({ 
            type: FETCH_PIES_FOR_CURRENT_USER,
            error: getErrorMessage(response)
          })
        }
        else {
          dispatch({
            type: FETCH_PIES_FOR_CURRENT_USER,
            payload: response.user.pies
          })
        }
      })
      .catch((error) => {
        dispatch({ 
          type: FETCH_PIES_FOR_CURRENT_USER,
          error: error.toString()
        })
      })
    }
}