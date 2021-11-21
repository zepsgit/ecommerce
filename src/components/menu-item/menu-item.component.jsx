import './menu-item.css'
import React from 'react'
const MenuItem = ({ title, imgUrl, size }) => (
    <div className={`menu-item ${size}`}>
        <div className="backgroundImg"
            style={{ backgroundImage:`url(${imgUrl})`}}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;