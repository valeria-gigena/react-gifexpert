
import AddCategory from './components/AddCategory'
import React, { useState } from 'react'
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  const onAddCategory = (value) => {
    setCategories([value, ...categories])
  }

  return (
    <>
      <AddCategory onNewCategory={event => onAddCategory(event)}
      ></AddCategory>
      <h1>GitExpertApp</h1>
      <ol>
        {categories.map(item => { return <li key={item}>{item}</li> })}
      </ol>
    </>
  )
}

export default GifExpertApp
