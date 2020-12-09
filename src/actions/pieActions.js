import { CREATE_PIE, FETCH_PIE, UPDATE_PIE, FETCH_PIES } from './types'
import { URL_PREFIX } from './urlPrefix'

export const createPie = (pie, history) => dispatch => {
  
  const options = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  fetch(`${ URL_PREFIX }/pies`, options)
    .then(res => res.json())
    .then((pie) => {
      dispatch({
        type: CREATE_PIE,
        payload: pie
      })
      console.log('saved pie', pie)
      history.push('/pies')
    })
  
}

export const fetchPie = (id) => dispatch => {
  const apiUrl = `${ URL_PREFIX }/pies/${id}`

  fetch(apiUrl, null)
    .then(res => res.json())
    .then((pie) => {
      dispatch({
        type: FETCH_PIE,
        payload: pie
      })
    })
  
}

export const updatePie = (pie, history) => dispatch => {

  const options = {
    method: 'PATCH',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( { pie: pie } )
  }

  let apiUrl = `${ URL_PREFIX }/pies/${pie.id}`
  
  fetch(`${apiUrl}`, options)
    .then(res => res.json())
    .then((savedPie) => {
      
      dispatch({
        type: UPDATE_PIE,
        payload: savedPie
      })
      console.log('savedPie', savedPie)
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