import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './TopNav.scss'

const TopNav = (props) => {
  return (
    <div className='topNav'>
      <Button
        className='topNav__button'>
        <span className='topNav__button-icon topNav__button-icon_add' />
        Добавить задачу
      </Button>
      <Button
        className='topNav__button'>
        <span className='topNav__button-icon topNav__button-icon_favorite' />
        Избранное
      </Button>
    </div>
  )
}

export default TopNav