import React from 'react'

import './Wrapper.scss'
import Header from '../Header/Header'

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Wrapper