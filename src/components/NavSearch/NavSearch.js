import React from 'react'
import PropTypes from 'prop-types'
import './NavSearch.scss'

const NavSearch = (props) => {
  return (
    <div className='nav-search'>
      <input type='text' className='nav-search__input' />
      <span className='nav-search__icon' />
    </div>
  )
}

export default NavSearch