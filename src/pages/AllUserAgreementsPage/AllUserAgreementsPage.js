/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Agreements from '../../components/Agreements/Agreements';
import TngError from '../../components/TngError/TngError';

import { fetchUserAgreements } from '../../redux/fetchers';
import {
    userAgreementsFetch,
    userAgreementsUpdate,
} from '../../redux/actions';

const AllUserAgreementsPage = (props) => {
    const {
        userAgreements,
        userAgreementsDataStatus,
        userAgreementsFetch,
        userAgreementsUpdate,
        userAgreementsError,
        currentUserInfo = { UserId: 0 },
    } = props;

    useEffect(() => {
        fetchUserAgreements(userAgreementsFetch, userAgreementsUpdate);
    }, []);

    const updateAgreementsList = () => fetchUserAgreements(userAgreementsFetch, userAgreementsUpdate);

    if (userAgreementsDataStatus === 'loading') {
        return <Preloader fullScreen />;
    }

    if (userAgreementsError) {
        return <TngError error={userAgreementsError} />;
    }

    return (
        <Agreements
            agreements={userAgreements}
            currentUserInfo={currentUserInfo}
            updateAgreementsList={updateAgreementsList}
        />
    );
};

const mapStateToProps = ({
    userAgreements, userAgreementsDataStatus, userAgreementsError, currentUserInfo,
}) => ({
    currentUserInfo,
    userAgreements,
    userAgreementsDataStatus,
    userAgreementsError,
});

const mapDispatchToProps = (dispatch) => ({
    userAgreementsFetch: () => dispatch(userAgreementsFetch()),
    userAgreementsUpdate: (data) => dispatch(userAgreementsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserAgreementsPage);
