import React from 'react';
import Table from '../Table/Table';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';

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

const Risks = ({ unplannedRisks, plannedRisks }) => {
    return (
        <React.Fragment>
            <div className="risks__title">Риски:</div>
            <div className="risks">
                <Table columns={COLUMNS_RISKS} items={prepareData(unplannedRisks, plannedRisks)} />
                <div className="risks__footer">
                    <DefaultButton>
                        <span>Добавить риск</span>
                    </DefaultButton>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Risks;
