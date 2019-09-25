import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'
import Profile from '../Profile/Profile'
import TopNav from '../TopNav/TopNav'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <TopNav />
      <Profile />
    </header>
  )
}

export default Header