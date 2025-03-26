import React from 'react';
import '../styles/Menu.css';

export const MenuItems = ({ image, title, content, price }) => {
    return (
        <div className="menu-item">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <div className="menu-item-content">
                <h2 className="menu-item-title">{title}</h2>
                <p>{content}</p>
                <p className="menu-item-price">{price} TL</p>
            </div>
        </div>
    );
};