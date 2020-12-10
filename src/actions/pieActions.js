import { CREATE_PIE, FETCH_PIE, UPDATE_PIE, FETCH_PIES } from './types'
import { URL_PREFIX } from './urlPrefix'
import { refreshUser } from '../actions/userActions'

export const createPie = (pie, history, user) => dispatch => {
  
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
      dispatch(refreshUser(user))
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

export const updatePie = (pie, user) => dispatch => {

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
    }).then(() => {
      dispatch(refreshUser(user))
    })
}

export const fetchPies = () => dispatch => {

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