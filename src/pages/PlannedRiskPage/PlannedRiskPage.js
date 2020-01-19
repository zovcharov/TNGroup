/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Risk from '../../components/Risk/Risk';
import Preloader from '../../components/Preloader/Preloader';
import { findParticipantByRole } from '../../helpers/usersHelper';

import { fetchUserRisks, fetchSingleProject } from '../../redux/fetchers';
import {
    userRisksFetch,
    userRisksUpdate,
} from '../../redux/actions';

const PlannedRiskPage = (props) => {
    const {
        currentUserInfo = { Id: 0 },
        userPlannedRisks,
        userRisksDataStatus,
        userRisksFetch,
        userRisksUpdate,
        match: { params: { riskId } },
    } = props;
    const [currentRisk, changeCurrentRisk] = useState({});
    const [canUserEditAndDeleteRisk, changeCanUserEditAndDeleteRisk] = useState(false);

    useEffect(() => {
        if (userRisksDataStatus === 'pending') {
            fetchUserRisks(userRisksFetch, userRisksUpdate);
        } else if (userRisksDataStatus === 'loaded') {
            const currentRisk = userPlannedRisks.find((risk) => risk.Id === Number(riskId));
            // Если риск существует, то записываем его в state
            if (currentRisk) {
                changeCurrentRisk(currentRisk);
            } else {
                // Иначе отправляем на notfound
                window.location.hash = '#/notfound';
            }
        }
    }, [userRisksDataStatus, userPlannedRisks]);

    useEffect(() => {
        if (currentRisk && currentRisk.ProjectId && currentUserInfo.Id !== 0) {
            fetchSingleProject(currentRisk.ProjectId)
                .then((res) => {
                    const projectManager = findParticipantByRole(res.Participants, 'Manager');
                    changeCanUserEditAndDeleteRisk(projectManager && projectManager[0].Id === currentUserInfo.Id);
                });
        }
    }, [currentRisk, currentUserInfo]);

    const onUpdateRisk = () => {
        fetchUserRisks(userRisksFetch, userRisksUpdate);
    };

    if (userRisksDataStatus === 'loading') {
        return <Preloader />;
    }

    return (
        <Risk
            {...currentRisk}
            canUserEditAndDeleteRisk={canUserEditAndDeleteRisk}
            type="planned"
            onUpdateRisk={onUpdateRisk}
        />
    );
};

const mapStateToProps = ({
    currentUserInfo,
    userPlannedRisks,
    userRisksDataStatus,
}) => ({
    currentUserInfo,
    userPlannedRisks,
    userRisksDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userRisksFetch: () => dispatch(userRisksFetch()),
    userRisksUpdate: (data) => dispatch(userRisksUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlannedRiskPage);
