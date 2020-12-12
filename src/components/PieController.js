import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import PieControls from './PieControls'
import { fetchPie } from '../actions/pieActions'
import { useSelector, useDispatch} from 'react-redux'

const PieController = ({
  id = 0
}) => {

  const getPie = () => Object.keys(pie).length > 0 ? <Pie pieData={ pie } /> : null
  const getPieControls = () => Object.keys(pie).length > 0 ? <PieControls pieData={ pie } /> : null
  const pie = useSelector(state => state.pieReducer.pie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPie(id))
  }, [id])
  
  return (
    <div className='pie-container'>
      { getPie() }
      { getPieControls() }
    </div>
  )
}

PieController.propTypes = {
  id: PropTypes.number.isRequired
}

export default PieController