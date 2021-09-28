import React from 'react';
import './Button.css';

const Button = ({ name, action, label, color = "", icon, type = "", disabled }) => {
    return (
        <button
            disabled={disabled}
            className={`btn ${color} ${type}`}
            onClick={action}
        >
            {label ? label : (icon ? icon : "Button")}
        </button>
    );
};

export default Button;