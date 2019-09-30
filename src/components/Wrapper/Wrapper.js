import React from 'react'

import './Wrapper.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <div className='content'>
        <div className='wrapper__page'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Wrapper