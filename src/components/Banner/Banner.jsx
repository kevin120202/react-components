import React from 'react'
import "./Banner.css"
import check from "../../assets/Check circle.png"
import exclamation from "../../assets/Exclamation.png"
import icon from "../../assets/Icon.png"
import x from "../../assets/X circle.png"

function Banner({ title, status, children }) {
    let className;
    let img;
    if (status === "success") {
        className = "success success-title"
        img = check
    } else if (status === "warning") {
        className = "warning warning-title"
        img = exclamation
    } else if (status === "error") {
        className = "error error-title"
        img = x
    } else {
        className = "neutral neutral-title"
        img = icon
    }

    return (
        <div className={`banner ${className}`}>
            <span>
                <img src={img} alt="check" />
                {title}
            </span>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Banner