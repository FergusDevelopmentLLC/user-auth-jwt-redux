import React, { useState } from "react"
import { createPie } from '../actions/pieActions'
import { useHistory } from "react-router"
import { useSelector, useDispatch } from 'react-redux'

export const PieForm = () => {

  const user = useSelector(state => state.authenticationReducer.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const [pie, setPie] = useState({
    title: '',
    pieces: ['', '', '', '', '', '', '', '']
  })
  
  const setTitle = (event) => {
    setPie({
      ...pie,
      title: event.target.value
    })
  }

  const setPiece = (event) => {
    const p = [...pie.pieces]
    p[event.target.id] = event.target.value
    setPie({
      ...pie,
      pieces: p
    })
  }

  //TODO: where to put this?
  String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim())
  }

  return (
    <div>
      <h1>Create Pie</h1>
      <form className='form'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' value={ pie.title } onChange={ setTitle } />

        <label htmlFor='piece00'>Piece</label>
        <input type='text' name='piece00' id={0} value={ pie.piece00 } onChange={ setPiece } />

        <label htmlFor='piece01'>Piece</label>
        <input type='text' name='piece01' id={1} value={ pie.piece01 } onChange={ setPiece }/>

        <label htmlFor='piece02'>Piece</label>
        <input type='text' name='piece02' id={2} value={ pie.piece02 } onChange={ setPiece }/>

        <label htmlFor='piece03'>Piece</label>
        <input type='text' name='piece03' id={3} value={ pie.piece03 } onChange={ setPiece }/>

        <label htmlFor='piece04'>Piece</label>
        <input type='text' name='piece04' id={4} value={ pie.piece04 } onChange={ setPiece }/>

        <label htmlFor='piece05'>Piece</label>
        <input type='text' name='piece05' id={5} value={ pie.piece05 } onChange={ setPiece }/>
        
        <label htmlFor='piece06'>Piece</label>
        <input type='text' name='piece06' id={6} value={ pie.piece06 } onChange={ setPiece }/>

        <label htmlFor='piece07'>Piece</label>
        <input type='text' name='piece07' id={7} value={ pie.piece07 } onChange={ setPiece }/>

        <input type='submit' value="Save" onClick={(event) => {
          event.preventDefault()
          if(pie.title.isEmpty() || pie.pieces[0].isEmpty() || pie.pieces[1].isEmpty() || pie.pieces[2].isEmpty() || pie.pieces[3].isEmpty() || pie.pieces[4].isEmpty() || pie.pieces[5].isEmpty() || pie.pieces[6].isEmpty() || pie.pieces[7].isEmpty()) {
            alert('All fields are required')
          }
          else {
            pie.user_id = user.id
            dispatch(createPie(pie, user, history))
          }
        }} />
      </form>
    </div>
  )
}

export default PieForm
