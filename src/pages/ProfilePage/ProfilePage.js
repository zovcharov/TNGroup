/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { userProfileFetch, userProfileUpdate } from '../../redux/actions';
import { fetchUserProfile } from '../../redux/fetchers';

const ProfilePage = (props) => {
    const {
        currentUserInfo = {},
        currentUserInfoDataStatus,
        userProfileFetch,
        userProfileUpdate,
    } = props;

    useEffect(() => {
        if (currentUserInfoDataStatus === 'pending') {
            fetchUserProfile(userProfileFetch, userProfileUpdate);
        }
    }, [currentUserInfoDataStatus]);

    return (
        <ProfileInfo info={currentUserInfo} />
    );
};

ProfilePage.propTypes = {
    currentUserInfo: PropTypes.shape({}),
    currentUserInfoDataStatus: PropTypes.string,
    userProfileFetch: PropTypes.func,
    userProfileUpdate: PropTypes.func,
};

const mapStateToProps = (state) => ({
    currentUserInfo: state.currentUserInfo,
    currentUserInfoDataStatus: state.currentUserInfoDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userProfileFetch: () => dispatch(userProfileFetch()),
    userProfileUpdate: (data) => dispatch(userProfileUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
