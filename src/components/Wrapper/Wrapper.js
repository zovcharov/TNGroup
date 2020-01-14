/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    usersFetch,
    usersUpdate,
    userProfileFetch,
    userProfileUpdate,
} from '../../redux/actions';
import {fetchUserProfile, fetchUsers} from '../../redux/fetchers';

import './Wrapper.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Preloader from '../Preloader/Preloader';

const Wrapper = (props) => {
    const {
        children,
        usersDataState,
        usersFetch,
        usersUpdate,
        userProfileFetch,
        userProfileUpdate,
        currentUserInfoDataStatus,
    } = props;
    const [isContentActive, onChangeContentActive] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('access_token') && window.location.hash !== '#/login') {
            window.location.hash = '#/login';
        } else if (localStorage.getItem('access_token') && window.location.hash === '#/login') {
            window.location.hash = '#/';
        } else {
            onChangeContentActive(true);
        }
    }, []);

    useEffect(() => {
        if (usersDataState === 'pending') {
            fetchUsers(usersFetch, usersUpdate);
        }
    }, []);

    useEffect(() => {
        if (currentUserInfoDataStatus === 'pending') {
            fetchUserProfile(userProfileFetch, userProfileUpdate);
        }
    }, [currentUserInfoDataStatus]);

    return isContentActive ? (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content">
                <div className="wrapper__page">
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <Preloader fullScreen />
    );
};

const mapStateToProps = (state) => ({
    currentUserInfoDataStatus: state.currentUserInfoDataStatus,
    users: state.users,
    usersDataState: state.usersDataState,
});

const mapDispatchToProps = (dispatch) => ({
    usersFetch: () => dispatch(usersFetch()),
    usersUpdate: (data) => dispatch(usersUpdate(data)),
    userProfileFetch: () => dispatch(userProfileFetch()),
    userProfileUpdate: (data) => dispatch(userProfileUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
