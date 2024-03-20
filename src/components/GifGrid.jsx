import React from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({ categories }) => {
  return (

    <ol>
      {categories.map(item => {
        return <GifGridItem category={item}></GifGridItem>
        // return <li key={item}>{item}</li> 
      })


      }
    </ol>

  )
}

export default GifGrid
