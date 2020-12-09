import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Pie from '../components/Pie'
import { connect } from 'react-redux'
import { fetchPies } from '../actions/pieActions'

const PieGalleryContainer = ({
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
          return  <div key={pie.id} style={{width: '15rem'}}>
                    <Pie pieces={ pie.pieces } chunks={ pie.chunks } title={ pie.title } />
                    <Link to={ `/pies/${pie.id}`}>View</Link>
                  </div>
        })
      }
    </div>
    
  )
}

PieGalleryContainer.propTypes = {
  fetchPies: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    pies: state.pieReducer.pies
  }
}

export default connect(mapStateToProps, { fetchPies })(PieGalleryContainer)

