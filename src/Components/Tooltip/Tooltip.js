import React from 'react';
import './Tooltip.scss';

const Tooltip = ({ message, children }) => {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip-message">
                {message}
            </div>
        </div>
    );
};

export default Tooltip;