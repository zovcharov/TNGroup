/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import './Sidebar.scss';
import { SideMenu } from '../SideMenu/SideMenu';
import MENU_ITEMS from '../SideMenu/menuItems';

const Sidebar = () => (
    <aside className="sidebar">
        <SideMenu items={MENU_ITEMS} />
    </aside>
);

export default Sidebar;
