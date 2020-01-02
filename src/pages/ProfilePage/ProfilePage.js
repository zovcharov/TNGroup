import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import {userProfileFetch, userProfileUpdate} from "../../redux/actions";
import {fetchUserProfile} from "../../redux/fetchers";

const ProfilePage = (props) => {
    const {
        userProfile = {},
        userProfileDataStatus,
        userProfileFetch,
        userProfileUpdate
    } = props;

    useEffect(() => {
        if (userProfileDataStatus === 'pending') {
            fetchUserProfile(userProfileFetch, userProfileUpdate)
        }
    });

    return (
        <ProfileInfo info={userProfile} />
    )
};

ProfilePage.propTypes = {
    userProfile: PropTypes.object,
    userProfileDataStatus: PropTypes.string,
    userProfileFetch: PropTypes.func,
    userProfileUpdate: PropTypes.func
};

const mapStateToProps = (state) => ({
    userProfile: state.userProfile,
    userProfileDataStatus: state.userProfileDataStatus
});

const mapDispatchToProps = (dispatch) => ({
    userProfileFetch: () => dispatch(userProfileFetch()),
    userProfileUpdate: (data) => dispatch(userProfileUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
