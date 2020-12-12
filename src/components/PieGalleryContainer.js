import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPies } from '../actions/pieActions'
import { fetchPiesForCurrentUser } from '../actions/pieActions'
import PieGallery from './PieGallery'

export const PieGalleryContainer = ({
  loggedIn,
  fetchPies,
  fetchPiesForCurrentUser,
  pies,
  user
}) => {

  useEffect(() => {

    console.log('loggedIn', loggedIn)

    if(loggedIn)
      fetchPiesForCurrentUser(user)
    else
      fetchPies()
    
  }, [loggedIn])

  return (
    <PieGallery pies={pies} />
  )
}

const mapStateToProps = (state) => ({
  pies: state.pieReducer.pies,
  loggedIn: state.authenticationReducer.loggedIn,
  user: state.authenticationReducer.user
})

export default connect(mapStateToProps, { fetchPies, fetchPiesForCurrentUser })(PieGalleryContainer)