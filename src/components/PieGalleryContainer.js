import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPiesForCurrentUser } from '../actions/pieActions'
import PieGallery from './PieGallery'

export const PieGalleryContainer = ({
  fetchPiesForCurrentUser,
  pies,
  user
}) => {

  useEffect(() => {
    console.log('pies', pies)
    fetchPiesForCurrentUser(user)
  },[])

  return (
    <PieGallery pies={pies} />
  )
}

const mapStateToProps = (state) => ({
  pies: state.pieReducer.pies,
  user: state.authenticationReducer.user
})

export default connect(mapStateToProps, { fetchPiesForCurrentUser })(PieGalleryContainer)