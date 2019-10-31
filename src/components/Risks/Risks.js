import React, { useState } from 'react';
import Table from '../Table/Table';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import RiskModalContainer from '../Modals/RiskModal/RiskModal.container';

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

const Risks = ({ unplannedRisks, plannedRisks, projectId }) => {
    const [isRiskModalOpen, toggleRiskModal] = useState(false);

    const onOpenRiskModal = () => toggleRiskModal(true);
    const onCloseRiskModal = () => toggleRiskModal(false);

    return (
        <React.Fragment>
            <div className="risks__title">Риски:</div>
            <div className="risks">
                <Table columns={COLUMNS_RISKS} items={prepareData(unplannedRisks, plannedRisks)} />
                <div className="risks__footer">
                    <DefaultButton onClick={onOpenRiskModal}>
                        <span>Добавить риск</span>
                    </DefaultButton>
                </div>
            </div>
            <RiskModalContainer isOpen={isRiskModalOpen} onClose={onCloseRiskModal} projectId={projectId}/>
        </React.Fragment>
    )
};

export default Risks;
