import React, { useState, useEffect } from 'react';
import CreateReportInfo from '../../components/CreateReportInfo/CreateReportInfo';
import Preloader from '../../components/Preloader/Preloader';

import {
    fetchReportData,
    fetchReportProjectTasks,
    fetchReportPlannedRisks,
    fetchReportUnplannedRisks,
} from '../../redux/fetchers';

const CreateReportPage = (props) => {
    const {
        match: { params: { projectId } },
    } = props;
    const [reportDataStatus, changeReportDataStatus] = useState('pending');
    const [reportTasks, changeReportTasks] = useState([]);
    const [reportPlannedRisks, changeReportPlannedRisks] = useState([]);
    const [reportUnplannedRisks, changeReportUnplannedRisks] = useState([]);
    const [reportDataError, changeReportDataError] = useState(undefined);

    useEffect(() => {
        if (reportDataStatus === 'pending') {
            changeReportDataStatus('loading');
            fetchReportData(projectId)
                .then((response) => {
                    changeReportTasks(response.tasks);
                    changeReportPlannedRisks(response.plannedRisks);
                    changeReportUnplannedRisks(response.unplannedRisks);
                    changeReportDataStatus('inited');
                })
                .catch((error) => {
                    changeReportDataError(error);
                    changeReportDataStatus('error');
                });
        }
    }, []);

    const onUpdateTasks = () => {
        fetchReportProjectTasks(projectId).then((plannedRisks) => changeReportTasks(plannedRisks));
    };

    const onUpdatePlannedRisks = () => {
        fetchReportPlannedRisks(projectId).then((plannedRisks) => changeReportPlannedRisks(plannedRisks));
    };

    const onUpdateUnplannedRisks = () => {
        fetchReportUnplannedRisks(projectId).then((plannedRisks) => changeReportUnplannedRisks(plannedRisks));
    };

    if (reportDataStatus === 'loading') {
        return <Preloader fullScreen />;
    }

    return (
        <CreateReportInfo
            projectId={projectId}
            reportTasks={reportTasks}
            reportPlannedRisks={reportPlannedRisks}
            reportUnplannedRisks={reportUnplannedRisks}
            onUpdateTask={onUpdateTasks}
            onUpdatePlannedRisks={onUpdatePlannedRisks}
            onUpdateUnplannedRisks={onUpdateUnplannedRisks}
        />
    );
};

export default CreateReportPage;
