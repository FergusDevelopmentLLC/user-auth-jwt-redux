import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import { connect } from 'react-redux'
import { fetchPie } from '../actions/pieActions'
import PieControls from './PieControls'

const PieController = ({
  id=0,
  fetchPie,
  updatePie,
  pie
}) => {

  useEffect(() => {
    fetchPie(id)
  }, [id, fetchPie, updatePie])
  
  const getPie = () => Object.keys(pie).length > 0 ? <Pie pieData={ pie } /> : null
  const getPieControls = () => Object.keys(pie).length > 0 ? <PieControls pieData={ pie } /> : null
  
  return (
    <div className='pie-container'>
      { getPie() }
      { getPieControls() }
    </div>
  )
}

PieController.propTypes = {
  id: PropTypes.number.isRequired,
  fetchPie: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pie: state.pieReducer.pie
  }
}

export default connect(mapStateToProps, { fetchPie })(PieController)

