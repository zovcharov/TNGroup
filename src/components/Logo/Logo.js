/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */

import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
    <div className="logo">
        <Link to="/">
            <span className="logo__img" />
            <p className="logo__text">ТНГ-Групп</p>
        </Link>
    </div>
);

export default Logo;
