import React from 'react';
import './menuItems.scss';

const MenuItems = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            
            <div className='content'>
                <div className='title'> {title} </div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItems;