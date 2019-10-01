import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'
import Profile from '../Profile/Profile'
import TopNav from '../TopNav/TopNav'
import NavSearch from '../NavSearch/NavSearch'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <NavSearch />
      <TopNav />
      <Profile />
    </header>
  )
}

export default Header