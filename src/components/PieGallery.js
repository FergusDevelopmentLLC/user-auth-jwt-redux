import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Pie from './Pie'
import { connect } from 'react-redux'
import { fetchPies } from '../actions/pieActions'

const PieGallery = ({
  fetchPies,
  pies
}) => {

  useEffect(() => {
    fetchPies()
  }, [fetchPies])

  return (
    <div className="pie-gallery">
      {
        pies.map((pie) => {
          return  <div key={pie.id} className="pie-gallery-container">
                    <Pie pieData={ pie } />
                    <Link to={ `/pies/${pie.id}`}>View</Link>
                  </div>
        })
      }
    </div>
    
  )
}

PieGallery.propTypes = {
  fetchPies: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pies: state.pieReducer.pies
  }
}

export default connect(mapStateToProps, { fetchPies })(PieGallery)