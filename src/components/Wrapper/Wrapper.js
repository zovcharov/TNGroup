import React, { useState, useEffect } from 'react'

import './Wrapper.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Preloader from '../Preloader/Preloader';
import NavigationPanel from '../NavigationPanel/NavigationPanel';

const Wrapper = ({children}) => {
    const [ isContentActive, onChangeContentActive ] = useState(false);

    const isDashboard = window.location.pathname === '/'

    useEffect(() => {
        if (!localStorage.getItem('access_token') && window.location.pathname !== '/login') {
            window.location.pathname = '/login';
        } else  {
           if (localStorage.getItem('access_token') && window.location.pathname === '/login') {
               window.location.pathname = '/';
           } else {
               onChangeContentActive(true);
           }
        }
    }, []);

    return isContentActive ? (
        <div className='wrapper'>
            <Header />
            <Sidebar />
            <div className='content'>
                <div className='wrapper__page'>
                    {!isDashboard &&
                      <NavigationPanel
                    />}
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <Preloader fullScreen />
    )
};

export default Wrapper
