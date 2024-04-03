import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({ title, id, url }) => {
    return (
        <div className='card' key={id}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}