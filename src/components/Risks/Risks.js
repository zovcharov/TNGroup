import React, { useState } from 'react';
import Table from '../Table/Table';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import PlannedRiskModalContainer from '../Modals/PlannedRiskModal/PlannedRiskModal.container';
import UnplannedRiskModalContainer from '../Modals/UnplannedRiskModal/UnplannedRiskModal.container';

import './Risks.scss';

const COLUMNS_RISKS = [
    {
        label: 'Название',
        name: 'Name',
        width: '30%'
    },
    {
        label: 'Статус',
        name: 'Status',
        width: '25%'
    },
    {
        label: 'Тип',
        name: 'Type',
        width: '25%'
    },
    {
        label: 'Дата события',
        name: 'Date',
        width: '20%'
    }
];

const prepareData = (unplannedRisks, plannedRisks) => {
    const preparedUnplannedRisks = unplannedRisks.map((risk) => Object.assign({}, risk, {Type: 'Незапланированный'}));
    const preparedPlannedRisks = plannedRisks.map((risk) => Object.assign({}, risk, {Type: 'Запланированный'}));

    return [...preparedUnplannedRisks, ...preparedPlannedRisks];
};

const Risks = ({ unplannedRisks, plannedRisks, projectId, projectPermissions }) => {
    const [isPlannedRiskModalOpen, togglePlannedRiskModal] = useState(false);
    const [isUnplannedRiskModalOpen, toggleUnplannedRiskModal] = useState(false);

    const onOpenPlannedRiskModal = () => togglePlannedRiskModal(true);
    const onClosePlannedRiskModal = () => togglePlannedRiskModal(false);

    const onOpenUnplannedRiskModal = () => toggleUnplannedRiskModal(true);
    const onCloseUnplannedRiskModal = () => toggleUnplannedRiskModal(false);

    return (
        <React.Fragment>
            <div className="risks__title">Риски:</div>
            <div className="risks">
                <Table columns={COLUMNS_RISKS} items={prepareData(unplannedRisks, plannedRisks)} />
                <div className="risks__footer">
                    {
                        projectPermissions.canAddPlannedRisk &&
                        <DefaultButton className="create-planned-risk-button" onClick={onOpenPlannedRiskModal}>
                            <span>Добавить запланированный риск</span>
                        </DefaultButton>
                    }
                    {
                        projectPermissions.canAddUnplannedRisk &&
                        <DefaultButton className="create-unplanned-risk-button" onClick={onOpenUnplannedRiskModal}>
                            <span>Добавить незапланированный риск</span>
                        </DefaultButton>
                    }
                </div>
            </div>
            {
                projectId &&
                <React.Fragment>
                    <PlannedRiskModalContainer isOpen={isPlannedRiskModalOpen} onClose={onClosePlannedRiskModal} projectId={projectId}/>
                    <UnplannedRiskModalContainer isOpen={isUnplannedRiskModalOpen} onClose={onCloseUnplannedRiskModal} projectId={projectId}/>
                </React.Fragment>
            }
        </React.Fragment>
    )
};

export default Risks;
