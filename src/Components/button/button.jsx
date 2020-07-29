import React from 'react';
import './button.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <div className="custom-button"
        {...otherProps} >
            { children }
        </div>
    )
}

export default Button
