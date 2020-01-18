/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import './DefaultButton.scss';

const DefaultButton = (props) => {
    const {
        className = '',
        children,
        onClick = () => {},
        link = '',
    } = props;

    if (link) {
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={`default-button default-button_type_link ${className}`}
                to={link}
            >
                {children}
            </Link>
        );
    }
    return (
        <Button
            className={`default-button ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default DefaultButton;
