import React from 'react';
import Table from '../Table/Table';

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
        <div className="agreements">
            <Table columns={COLUMNS_AGREEMENTS} items={agreements} />
        </div>
    )
    /*return (
        <table className="agreements-table">
            <thead>
                <tr>
                    <td className="agreements-table__title">Название</td>
                    <td className="agreements-table__title">Статус</td>
                    <td className="agreements-table__title">Тип документа</td>
                    <td className="agreements-table__title">Обновлено</td>
                </tr>
            </thead>
            <tbody>
            {
                agreements.map(agreement => (
                    <tr className="agreements-table__row">
                        <td className="agreements-table__data">{agreement.Name}</td>
                        <td className="agreements-table__data">{agreement.Status}</td>
                        <td className="agreements-table__data">{agreement.DocumentType}</td>
                        <td className="agreements-table__data">{agreement.LastDateUpdate.toDateString()}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )*/
};

export default Agreements;
