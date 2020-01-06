/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss';

const getClassNames = (propsList) => {
    const {
        className,
        disabled,
    } = propsList;
    const classes = ['button'];

    if (disabled) {
        classes.push('button_disabled');
    }
    if (className) {
        classes.push(className);
    }
    return classes.join(' ');
};

const Button = (props) => {
    const {
        type = 'button',
        onClick = () => {},
        children,
        disabled = false,
        style,
        link,
    } = props;

    if (link) {
        return (
            <Link
                to={link}
                type={type}
                onClick={disabled ? () => {} : onClick}
                className={getClassNames(props)}
                style={style}
            >
                {children}
            </Link>
        );
    }

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            type={type}
            onClick={disabled ? () => {} : onClick}
            className={getClassNames(props)}
            style={style}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
    disabled: PropTypes.bool,
    style: PropTypes.shape({}),
};

export default Button;
