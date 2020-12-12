import React from 'react'
import { connect } from 'react-redux'
import PieGallery from './PieGallery'

export const PieGalleryContainer = ({
  pies
}) => {
  return (
    <PieGallery pies={pies} />
  )
}

const mapStateToProps = (state) => ({
  pies: state.authenticationReducer.user.pies
})

export default connect(mapStateToProps, null )(PieGalleryContainer)