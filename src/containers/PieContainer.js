import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'
import { connect } from 'react-redux'
import { fetchPie } from '../actions/pieActions'
import PieControls from '../components/PieControls'

const PieContainer = ({
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

PieContainer.propTypes = {
  id: PropTypes.number.isRequired,
  fetchPie: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pie: state.pieReducer.pie
  }
}

export default connect(mapStateToProps, { fetchPie })(PieContainer)

