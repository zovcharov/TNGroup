import React, { useState } from 'react';
import ReportTask from './components/ReportTask/ReportTask';
import ReportPlannedRisk from './components/ReportPlannedRisk/ReportPlannedRisk';
import ReportUnplannedRisk from './components/ReportUnplannedRisk/ReportUnplannedRisk';

import './CreateReportInfo.scss';

const CreateReportInfo = (props) => {
    const {
        projectId,
        reportTasks,
        reportPlannedRisks,
        reportUnplannedRisks,
        onUpdatePlannedRisks,
        onUpdateUnplannedRisks,
    } = props;

    const renderReportTasks = () => reportTasks.map((task) => (
        <ReportTask projectId={projectId} taskInfo={task} key={`report-task-${task.Id}`} />
    ));

    const renderReportReportPlannedRisks = () => reportPlannedRisks.map((risk) => (
        <ReportPlannedRisk
            projectId={projectId}
            onUpdatePlannedRisks={onUpdatePlannedRisks}
            riskInfo={risk}
            key={`report-task-${risk.Id}`}
        />
    ));

    const renderReportReportUnplannedRisks = () => reportUnplannedRisks.map((risk) => (
        <ReportUnplannedRisk
            projectId={projectId}
            onUpdateUnplannedRisks={onUpdateUnplannedRisks}
            riskInfo={risk}
            key={`report-task-${risk.Id}`}
        />
    ));

    return (
        <div className="create-report-info">
            {
                reportTasks.length > 0 && (
                    <div className="create-report-info__tasks">
                        <div className="create-report-info__title">Задачи:</div>
                        {
                            renderReportTasks()
                        }
                    </div>
                )
            }
            {
                reportPlannedRisks.length && (
                    <div className="create-report-info__planned-risks">
                        <div className="create-report-info__title">Запланированные риски:</div>
                        {
                            renderReportReportPlannedRisks()
                        }
                    </div>
                )
            }
            {
                reportUnplannedRisks.length && (
                    <div className="create-report-info__unplanned-risks">
                        <div className="create-report-info__title">Незапланированные риски:</div>
                        {
                            renderReportReportUnplannedRisks()
                        }
                    </div>
                )
            }
        </div>
    );
};

export default CreateReportInfo;
