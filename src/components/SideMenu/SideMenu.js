/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu = (props) => {
    const {
        items = [],
    } = props;
    return (
        <ul className="sideMenu">
            {
                items.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SideMenuItem key={index} to={item.link} bold={item.bold}>
                        {item.title}
                    </SideMenuItem>
                ))
            }
        </ul>
    );
};

const SideMenuItem = (props) => {
    const {
        to = '/',
        children,
        bold,
    } = props;

    return (
        <li className={`sideMenu__item ${bold ? 'sideMenu__item--bold' : ''}`}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

export { SideMenu, SideMenuItem };
