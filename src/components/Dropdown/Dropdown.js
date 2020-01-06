/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';
import { useClickOutsideToClose } from '../../helpers/effects';

const getClassNames = (propsList, closed) => {
    const {
        className,
        disabled,
    } = propsList;
    const classes = ['dropdown'];
    if (closed) {
        classes.push('dropdown_closed');
    }
    if (disabled) {
        classes.push('dropdown_disabled');
    }
    if (className) {
        classes.push(className);
    }
    return classes.join(' ');
};

const Dropdown = (props) => {
    const {
        disabled,
        label,
        children,
        width = '100%',
        labelClass = '',
        menuClass = '',
        buttonClass = '',
    } = props;

    const [closed, toggle] = useState(true);

    const dropdownRef = useRef(null);
    useClickOutsideToClose(dropdownRef, () => toggle(true));

    return (
        <div
            ref={dropdownRef}
            className={getClassNames(props, closed)}
        >
            <button
                type="button"
                className={`dropdown__toggle ${buttonClass}`}
                onClick={() => {
                    if (!disabled) toggle(!closed);
                }}
            >
                <span className={`${labelClass}`}>{label}</span>
            </button>
            <ul className={`dropdown__menu ${menuClass}`} style={{ width }}>
                {children}
            </ul>
        </div>
    );
};

const DropdownItem = (props) => {
    const {
        children,
        onClick = () => {},
    } = props;
    return (
        <li onClick={onClick} className="dropdown__item">{children}</li>
    );
};

Dropdown.propsTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    width: PropTypes.string,
    labelClass: PropTypes.string,
    menuClass: PropTypes.string,
    buttonClass: PropTypes.string,
};

DropdownItem.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func,
};

export { Dropdown, DropdownItem };
