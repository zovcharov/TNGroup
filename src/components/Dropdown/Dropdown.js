import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Dropdown.scss'

const getClassNames = (propsList, closed) => {
  const {
    className,
    disabled
  } = propsList
  let classes = ['dropdown']
  if (closed) {
    classes.push('dropdown_closed')
  }
  if (disabled) {
    classes.push('dropdown_disabled')
  }
  if (className) {
    classes.push(className)
  }
  return classes.join(' ')
}

const Dropdown = (props) => {
  const {
    disabled,
    label,
    children,
    width = '100%',
    labelClass,
    menuClass,
    buttonClass
  } = props

  const [closed, toggle] = useState(true)
  const dropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) toggle(true)
    }
    document.addEventListener('click', handleClickOutside, false)
    document.addEventListener('contextmenu', handleClickOutside, false)
    return () => {
      document.removeEventListener('click', handleClickOutside, false)
      document.removeEventListener('contextmenu', handleClickOutside, false)
    }
  })

  return (
    <div
      ref={dropdownRef}
      className={getClassNames(props, closed)}>
      <button
        type='button'
        className={`dropdown__toggle ${buttonClass}`}
        onClick={() => {
          if (!disabled) toggle(!closed)
        }}>
        <span className={`${labelClass}`}>{label}</span>
      </button>
      <ul className={`dropdown__menu ${menuClass}`} style={{width: width}}>
        {children}
      </ul>
    </div>
  )
}

const DropdownItem = (props) => {
  const {
    children,
    onClick = () => {}
  } = props
  return (
    <li onClick={onClick} className='dropdown__item'>{children}</li>
  )
}

Dropdown.propsTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  width: PropTypes.string,
  labelClass: PropTypes.string,
  menuClass: PropTypes.string,
  buttonClass: PropTypes.string
}

DropdownItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func
}

export {Dropdown, DropdownItem}