import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'
import Profile from '../Profile/Profile'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Profile />
    </header>
  )
}

export default Header