import React from 'react'
import {getGifs} from '../helpers/getGifs'

const GifGridItem = ({ category }) => {
  getGifs(category);

  return (
    <>

      <h3>{category}</h3>

    </>
  )
}

export default GifGridItem
