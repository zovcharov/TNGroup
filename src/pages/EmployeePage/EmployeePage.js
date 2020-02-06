/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import {
    userProfileFetch,
    userProfileUpdate,
} from '../../redux/actions';
import {
    fetchUserProfile,
} from '../../redux/fetchers';

const ProfilePage = (props) => {
    const {
        match: { params: { employeeId } },
        userInfo = {},
        userInfoDataStatus,
        userProfileFetch,
        userProfileUpdate,
    } = props;

    useEffect(() => {
        if (userInfoDataStatus === 'pending') {
            fetchUserProfile(Number(employeeId), userProfileFetch, userProfileUpdate);
        }
    }, [userInfoDataStatus]);

    return (
        <ProfileInfo info={userInfo} />
    );
};

ProfilePage.propTypes = {
    userInfo: PropTypes.shape({}),
    userInfoDataStatus: PropTypes.string,
    userProfileFetch: PropTypes.func,
    userProfileUpdate: PropTypes.func,
};

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
    userInfoDataStatus: state.userInfoDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userProfileFetch: () => dispatch(userProfileFetch()),
    userProfileUpdate: (data) => dispatch(userProfileUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
