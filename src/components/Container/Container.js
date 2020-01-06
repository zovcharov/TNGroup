/* eslint-disable react/prop-types */

import React from 'react';

import './Container.scss';

const Container = (props) => {
    const {
        children,
        label,
        labelClass = '',
        className = '',
    } = props;
    return (
        <div className={`container ${className}`}>
            <div className={`container-label ${labelClass}`}>
                {label && `${label}:`}
            </div>
            <div className="container-content">
                {children}
            </div>
        </div>
    );
};

export default Container;
