import React from 'react'
import "./Testimonials.css"

function Testimonials({ name, img, title, children }) {
    return (
        <div className='testimonial'>
            <img src={img} alt="img" />
            <div className="info">
                <p>{children}</p>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Testimonials