import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.scss'
import { SideMenu } from '../SideMenu/SideMenu'
import MENU_ITEMS from '../SideMenu/menuItems'

const Sidebar = (props) => {
  return (
    <aside className='sidebar'>
      <SideMenu items={MENU_ITEMS} />
    </aside>
  )
}

export default Sidebar