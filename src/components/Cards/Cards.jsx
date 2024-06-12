import React from 'react'
import "./Cards.css"
import { BsArrowCounterclockwise } from "react-icons/bs";


function Cards({ title, icon, children }) {
    return (
        <div className='card'>
            <div className='icon-bg'>
                {icon ? <img src={icon} alt="icon" className='img-icon' /> :
                    <BsArrowCounterclockwise className='default-icon' />
                }
            </div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default Cards