import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './SideMenu.scss'

const SideMenu = (props) => {
  const {
    items = []
  } = props
  return (
    <ul className='sideMenu'>
      {items.map((item, index) => (
        <SideMenuItem key={index} to={item.link}>{item.title}</SideMenuItem>
      ))}
    </ul>
  )
}

const SideMenuItem = (props) => {
  const {
    to='/',
    children
  } = props
  return (
    <li className='sideMenu__item'>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export { SideMenu, SideMenuItem }