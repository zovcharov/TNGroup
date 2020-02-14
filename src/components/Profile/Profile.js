/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './Profile.scss';
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown';

import {
    resetState,
} from '../../redux/actions';

const Profile = (props) => {
    const {
        currentUser = {}
    } = props;
    const {
        Name,
        RefUrlAvatar,
    } = currentUser

    const Logout = () => {
        localStorage.removeItem('UserId');
        localStorage.removeItem('UserRoles');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_id');
        resetState();
        window.location.hash = '#/login';
    };

    return (
        <div className="profile">
            <Avatar width="52px" height="52px" avatarUrl={RefUrlAvatar} />
            <Dropdown
                label={Name}
                labelClass="profile__name"
                buttonClass="profile__button"
            >
                <DropdownItem><Link to="/profile">Профиль</Link></DropdownItem>
                <DropdownItem onClick={Logout}>Выйти</DropdownItem>
            </Dropdown>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.currentUserInfo,
})

const mapDispatchToProps = (dispatch) => ({
    resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
