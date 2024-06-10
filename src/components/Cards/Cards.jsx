import React from 'react'
import "./Cards.css"

function Cards({ title, icon, children }) {
    return (
        <div className='card'>
            <div className='icon-bg'>
                <img src={icon} alt="icon" className='img-icon' />
            </div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Cards