/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import './SquarePanel.scss';

const SquarePanel = (props) => {
    const {
        bgPattern,
        icon,
        to = '/',
        children,
        onClick,
    } = props;

    return (
        <Link to={to}>
            <Button
                className="square-panel"
                style={{
                    background: `${bgPattern}`,
                }}
                onClick={onClick}
            >
                <span className="square-panel_icon" style={{ backgroundImage: `url(${icon})` }} />
                <span className="square-panel_text">{children}</span>
            </Button>
        </Link>
    );
};

export default SquarePanel;
