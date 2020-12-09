import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'
import { connect } from 'react-redux'
import { fetchPie } from '../actions/pieActions'
import { updatePie } from '../actions/pieActions'

const PieContainer = ({
  id=0,
  fetchPie,
  updatePie,
  pie
}) => {

  useEffect(() => {
    fetchPie(id)
  }, [id, fetchPie, updatePie])

  const getButtons = () => {
    if(pie.pieces) {
      return pie.pieces.map((piece, index) => {
        return <div key={index}><button onClick={()=> {
          const array = [parseInt(1 + index.toString()), parseInt(2 + index.toString()), parseInt(3 + index.toString()), parseInt(4 + index.toString()), parseInt(5 + index.toString()), parseInt(6 + index.toString()), parseInt(7 + index.toString())]
          for (let chunk of array) {
            if(!pie.chunks.includes(chunk)) {
              updatePie({
                ...pie,
                chunks: [...pie.chunks, chunk]
              })
              break
            }
          }
        }}>Add { piece }</button></div>
      })
    }
  }

  return (
    <div>
      <Pie pieces={ pie.pieces } chunks={ pie.chunks } title={ pie.title } />
      { getButtons() }
    </div>
  )
}

PieContainer.propTypes = {
  id: PropTypes.number.isRequired,
  fetchPie: PropTypes.func.isRequired,
  updatePie: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    pie: state.pieReducer.pie
  }
}

export default connect(mapStateToProps, { fetchPie, updatePie })(PieContainer)

