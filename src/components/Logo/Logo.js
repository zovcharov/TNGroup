import React from 'react'
import { Link } from 'react-router-dom';
import './Logo.scss'

const Logo = () => {
  return (
    <div className='logo'>
        <Link to="/">
          <span className='logo__img'/>
          <p className='logo__text'>ТНГ-Групп</p>
        </Link>
    </div>
  )
}

export default Logo
