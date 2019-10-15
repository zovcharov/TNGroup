import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {
    usersFetch,
    usersUpdate
} from '../../redux/actions';
import {fetchUsers} from "../../redux/fetchers";

import './Wrapper.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Preloader from '../Preloader/Preloader';
import NavigationPanel from '../NavigationPanel/NavigationPanel';

const Wrapper = ({children, usersDataState, usersFetch, usersUpdate}) => {
    const [ isContentActive, onChangeContentActive ] = useState(false);

    const isDashboard = window.location.hash === '#/'

    useEffect(() => {
        if (!localStorage.getItem('access_token') && window.location.hash !== '#/login') {
            window.location.hash = '#/login';
        } else  {
           if (localStorage.getItem('access_token') && window.location.hash === '#/login') {
               window.location.hash = '#/';
           } else {
               onChangeContentActive(true);
           }
        }
    }, []);

    useEffect(() => {
        if (usersDataState === 'pending') {
            fetchUsers(usersFetch, usersUpdate)
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

const mapStateToProps = ({ users, usersDataState }) => ({
    users,
    usersDataState
});

const mapDispatchToProps = (dispatch) => ({
    usersFetch: () => dispatch(usersFetch()),
    usersUpdate: (data) => dispatch(usersUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
