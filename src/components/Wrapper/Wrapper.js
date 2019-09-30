import React, { useState, useEffect } from 'react'

import './Wrapper.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Preloader from '../Preloader/Preloader';

const Wrapper = ({children}) => {
    const [ isContentActive, onChangeContentActive ] = useState(false);

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
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <Preloader fullScreen />
    )
};

export default Wrapper
