import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import './SquarePanel.scss'

const SquarePanel = (props) => {
  const {
    bgPattern,
    icon,
    to = '/',
    children
  } = props
  return (
    <Link to={to}>
      <Button
        className='square-panel'
        style={{
          background: `${bgPattern}`
        }}>
          <span className='square-panel_icon' style={{backgroundImage: `url(${icon})`}} />
          <span className='square-panel_text'>{children}</span>
      </Button>
    </Link>
  )
}

export default SquarePanel