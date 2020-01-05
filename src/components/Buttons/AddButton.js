/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React from 'react';

import './Button.scss';

const AddButton = (props) => {
    const {
        text,
        type,
        onClick,
    } = props;

    return (
        <div className={`button button_type_${type}`} onClick={onClick}>
            <span className="button__icon" />
            <span className="button__text">{text}</span>
        </div>
    );
};

export default AddButton;
