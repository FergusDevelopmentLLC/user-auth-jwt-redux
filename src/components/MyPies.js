import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Pie from './Pie'
import { Link } from 'react-router-dom'

const MyPies = ({
  pies = []
}) => {
  return (
    <div>
      <h1>My pies</h1>
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
    </div>
  )
}

MyPies.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    pies: state.authenticationReducer.user.pies
  }
}

export default connect(mapStateToProps, null)(MyPies)

