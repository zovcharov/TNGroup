import React from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';

import './Agreements.scss';

const COLUMNS_AGREEMENTS = [
    {
        label: 'Название',
        name: 'Name',
        width: '25%'
    },
    {
        label: 'Статус',
        name: 'Status',
        width: '25%'
    },
    {
        label: 'Тип документа',
        name: 'DocumentType',
        width: '25%'
    },
    {
        label: 'Обновлено',
        name: 'LastDateUpdate',
        width: '25%'
    }
]

const Agreements = ({ agreements }) => {
    return (
        <React.Fragment>
            <div className="agreements__title">Согласования:</div>
            <div className="agreements">
                <Table columns={COLUMNS_AGREEMENTS} items={agreements} />
                <div className="agreements__footer">
                    <Button>
                        <span>Добавить согласование</span>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Agreements;
