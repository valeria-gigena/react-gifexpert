
import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGridItem from './components/GifGridItem'


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategory = (value) => {
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory onNewCategory={event => onAddCategory(event)} />
      {
        categories.map((item => (<GifGridItem key={item} category={item} />)

        ))
      }

    </>
  )
}

export default GifExpertApp
