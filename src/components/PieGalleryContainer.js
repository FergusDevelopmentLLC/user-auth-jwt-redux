import React from 'react'
import PieGallery from './PieGallery'
import { useSelector } from "react-redux";

export const PieGalleryContainer = () => {

  const pies = useSelector(state => state.authenticationReducer.user.pies)

  return (
    <PieGallery pies={pies} />
  )
}

export default PieGalleryContainer