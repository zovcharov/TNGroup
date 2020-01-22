/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const AddButton = (props) => {
    const {
        text,
        type,
        onClick,
        link,
    } = props;

    if (link) {
        return (
            <Link to={link} className={`button button_type_${type}`}>
                <span className="button__icon" />
                <span className="button__text">{text}</span>
            </Link>
        )
    }

    return (
        <div className={`button button_type_${type}`} onClick={onClick}>
            <span className="button__icon" />
            <span className="button__text">{text}</span>
        </div>
    );
};

export default AddButton;
