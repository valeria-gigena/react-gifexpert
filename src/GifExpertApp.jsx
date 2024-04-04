
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Friends'])
  const onAddCategory = (value) => {
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory onNewCategory={event => onAddCategory(event)} />
      { categories.map((item => (<GifGrid key={item} category={item} />)))  }
    </>
  )
}

