import React from 'react'
import PropTypes from 'prop-types'

import './Container.scss'

const Container = (props) => {
  const {
    children,
    label,
    labelClass = ''
  } = props
  return (
    <div className='container'>
      <div className={`container-label ${labelClass}`}>
        {label}
      </div>
      <div className='container-content'>
        {children}
      </div>
    </div>
  )
}

export default Container