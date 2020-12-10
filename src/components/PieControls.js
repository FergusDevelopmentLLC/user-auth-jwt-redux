import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updatePie } from '../actions/pieActions'
import { refreshUser } from '../actions/userActions'

const PieControls = ({
  pieData = {
    pieces: [],
    chunks: []
  },
  updatePie,
  user
}) => {

  const addChunk = (index) => {
    const piece = [parseInt(1 + index.toString()), parseInt(2 + index.toString()), parseInt(3 + index.toString()), parseInt(4 + index.toString()), parseInt(5 + index.toString()), parseInt(6 + index.toString()), parseInt(7 + index.toString())]
    for (let chunk of piece) {
      if(!pieData.chunks.includes(chunk)) {
        updatePie({
          ...pieData,
          chunks: [...pieData.chunks, chunk]
        }, user)
        break
      }
    }
  }

  const removeChunk = (index) => {
    const piece = [parseInt(7 + index.toString()), parseInt(6 + index.toString()), parseInt(5 + index.toString()), parseInt(4 + index.toString()), parseInt(3 + index.toString()), parseInt(2 + index.toString()), parseInt(1 + index.toString())]
    for (let chunk of piece) {
      if(pieData.chunks.includes(chunk)) {
        updatePie({
          ...pieData,
          chunks: pieData.chunks.filter((c) => c !== chunk)
        }, user)
        break
      }
    }
  }

  const getButtons = () => {
    if(pieData.pieces) {
      return pieData.pieces.map((piece, index) => {
        return  <div key={index} className='pie-controls-container'>
                  <h4>{ piece }</h4>
                  <div><button onClick={() => addChunk(index) }>Add chunk</button> <button onClick={() => removeChunk(index) }>Remove chunk</button></div>
                </div>
      })
    }
  }

  return getButtons()
}

PieControls.propTypes = {
  updatePie: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.authenticationReducer.user
  }
}

export default connect(mapStateToProps, { updatePie, refreshUser })(PieControls)