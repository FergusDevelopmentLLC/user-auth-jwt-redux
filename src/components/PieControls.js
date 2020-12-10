import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updatePie } from '../actions/pieActions'

const PieControls = ({
  pieData = {
    pieces: [],
    chunks: []
  },
  updatePie
}) => {

  const addChunk = (index) => {
    const piece = [parseInt(1 + index.toString()), parseInt(2 + index.toString()), parseInt(3 + index.toString()), parseInt(4 + index.toString()), parseInt(5 + index.toString()), parseInt(6 + index.toString()), parseInt(7 + index.toString())]
    for (let chunk of piece) {
      if(!pieData.chunks.includes(chunk)) {
        updatePie({
          ...pieData,
          chunks: [...pieData.chunks, chunk]
        })
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
          chunks: pieData.chunks.filter((c) => {
            return c != chunk
          })
        })
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
  updatePie: PropTypes.func.isRequired
}

export default connect(null, { updatePie })(PieControls)