import React from 'react'
import PropTypes from 'prop-types'
import Pie from './Pie'
import { Link } from 'react-router-dom'

const PieGallery = ({
  pies = []
}) => {
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
  pies: PropTypes.array
}

export default PieGallery