import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './SideMenu.scss'
import CreateProjectModal from './../Modals/CreateProjectModal/CreateProjectModal';

const SideMenu = (props) => {
  const {
    items = []
  } = props
  return (
    <ul className='sideMenu'>
      {
        items.map((item, index) => (
          <SideMenuItem key={index} to={item.link} bold={item.bold}>
            {item.title}
          </SideMenuItem>
        ))
      }
    </ul>
  )
}

const SideMenuItem = (props) => {
  const {
    to='/',
    children,
    bold,
  } = props;

  return (
    <li className={`sideMenu__item ${bold ? 'sideMenu__item--bold' : ''}`}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export { SideMenu, SideMenuItem }
