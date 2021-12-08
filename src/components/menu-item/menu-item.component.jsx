import './menu-item.css'
import React from 'react'
import { withRouter } from 'react-router-dom'
const MenuItem = ({ title, imageUrl, history, match, linkUrl }) => {
    return (
        <div className="menu-item"
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="backgroundImg"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toLowerCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
    
    }
export default withRouter(MenuItem);