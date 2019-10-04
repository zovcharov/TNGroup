import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './NavSearch.scss'

const NavSearch = (props) => {
  const {
    onSubmit = () => {}
  } = props

  const [value, changeValue] = useState('')

  const submit = () => {
    if (value !== '') {
      onSubmit(value)
    }
  }

  const onPressEnter = (event) => {
    if (event.key === 'Enter') {
      submit()
    }
  }

  return (
    <div className='nav-search'>
      <input
        value={value}
        onChange={event => changeValue(event.target.value)}
        spellCheck={false}
        type='text'
        onKeyPress={onPressEnter}
        className='nav-search__input' />
      <span className='nav-search__icon' onClick={submit} />
    </div>
  )
}

NavSearch.propTypes = {
  onSubmit: PropTypes.func
}

export default NavSearch