/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Risk from '../../components/Risk/Risk';
import Preloader from '../../components/Preloader/Preloader';

import { fetchUserRisks } from '../../redux/fetchers';
import {
    userRisksFetch,
    userRisksUpdate,
} from '../../redux/actions';

const UnplannedRiskPage = (props) => {
    const {
        userUnplannedRisks,
        userRisksDataStatus,
        userRisksFetch,
        userRisksUpdate,
        match: { params: { riskId } },
    } = props;
    const [currentRisk, changeCurrentRisk] = useState({});

    useEffect(() => {
        if (userRisksDataStatus === 'pending') {
            fetchUserRisks(userRisksFetch, userRisksUpdate);
        } else if (userRisksDataStatus === 'loaded') {
            const currentRisk = userUnplannedRisks.find((risk) => risk.Id === Number(riskId));
            // Если риск существует, то записываем его в state
            if (currentRisk) {
                changeCurrentRisk(currentRisk);
            } else {
                // Иначе отправляем на notfound
                window.location.hash = '#/notfound';
            }
        }
    }, [userRisksDataStatus, userUnplannedRisks]);

    if (userRisksDataStatus === 'loading') {
        return <Preloader />;
    }

    return (
        <Risk {...currentRisk} />
    );
};

const mapStateToProps = ({
    userUnplannedRisks,
    userRisksDataStatus,
}) => ({
    userUnplannedRisks,
    userRisksDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userRisksFetch: () => dispatch(userRisksFetch()),
    userRisksUpdate: (data) => dispatch(userRisksUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnplannedRiskPage);
