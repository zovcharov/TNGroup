/* eslint-disable react/prop-types */

import React from 'react';
import Button from '../../Button/Button';
import './SubmitButton.scss';

const SubmitButton = (props) => {
    const {
        className = '',
        children,
        onClick = () => {},
    } = props;
    return (
        <Button
            className={`submit-button ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default SubmitButton;
