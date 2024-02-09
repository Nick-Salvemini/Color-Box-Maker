import React from "react";
import './Box.css';

function Box({ color, height, width, remove }) {
    const containerStyles = {
        display: 'block'
    }

    const boxStyles = {
        backgroundColor: color,
        height: `${height}px`,
        width: `${width}px`,
        display: 'inline-block',
    }

    const buttonStyles = {
        backgroundColor: color,
    }

    return (
        <div style={containerStyles}>
            <div style={boxStyles}></div>
            <button style={buttonStyles} onClick={remove}>Remove Box</button>
        </div>
    );
}

export default Box