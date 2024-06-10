import React from 'react'
import "./Badge.css"

function Badge({ color, isRound, children }) {

    return (
        <div className={`badge ${color} ${isRound && "round"}`}>
            {children}
        </div>
    )
}

export default Badge
