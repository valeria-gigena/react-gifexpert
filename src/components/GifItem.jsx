import React from 'react'

export const Giftem = ({ title, id, url }) => {
    return (
        <div className='card' key={id}>
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}

export default Giftem
