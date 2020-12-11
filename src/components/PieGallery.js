import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import { connect } from 'react-redux'
import { fetchPies } from '../actions/pieActions'
import { Link } from 'react-router-dom'

const PieGallery = ({
  fetchPies,
  pies
}) => {

  useEffect(() => {
    fetchPies()
  }, [])

  return (
    <>
    <div className="pie-gallery">
      {
        pies.map((pie) => {
          return  <div key={pie.id} className="pie-gallery-container">
                    <Pie pieData={ pie } />
                    <div><Link to={`/pies/${pie.id}`}>Update</Link></div>
                  </div>
        })
      }
    </div>
    </>
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