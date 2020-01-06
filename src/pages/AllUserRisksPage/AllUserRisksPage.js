/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Risks from '../../components/Risks/Risks';

import { fetchUserRisks } from '../../redux/fetchers';
import {
    userRisksFetch,
    userRisksUpdate,
} from '../../redux/actions';

const AllUserRisksPage = (props) => {
    const {
        userPlannedRisks,
        userUnplannedRisks,
        userRisksDataStatus,
        userRisksFetch,
        userRisksUpdate,
    } = props;


    // Со страницы всех рисков не даем добавлять риски, только со страницы рисков проекта
    const projectPermissions = {
        canAddPlannedRisk: false,
        canAddUnplannedRisk: false,
    };

    useEffect(() => {
        if (userRisksDataStatus === 'pending') {
            fetchUserRisks(userRisksFetch, userRisksUpdate);
        }
    }, [userRisksDataStatus, userUnplannedRisks, userPlannedRisks]);

    if (userRisksDataStatus === 'loading') {
        return <Preloader fullScreen />;
    }

    return (
        <>
            <Risks
                projectPermissions={projectPermissions}
                unplannedRisks={userUnplannedRisks}
                plannedRisks={userPlannedRisks}
            />
        </>
    );
};

const mapStateToProps = ({
    userPlannedRisks,
    userUnplannedRisks,
    userRisksDataStatus,
}) => ({
    userPlannedRisks,
    userUnplannedRisks,
    userRisksDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userRisksFetch: () => dispatch(userRisksFetch()),
    userRisksUpdate: (data) => dispatch(userRisksUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserRisksPage);
