import React from 'react';

import Table from '../Table/Table';
import { formatDateToString } from "../../helpers/helpers";

const COLUMNS_REPORTS = [
    {
        label: 'ID',
        name: 'Id',
        width: '5%'
    },
    {
        label: 'Дата создания',
        name: 'DateCreate',
        width: '30%',
        cell: item => formatDateToString(item)
    },
    {
        label: 'Создатель',
        name: 'Creator',
        width: '15%'
    },
    {
        label: 'Статус выполнения',
        name: 'IsComplete',
        width: '20%',
        cell: (item) => {
            return item ? 'Выполнено' : 'Не выполнено'
        },
    }
];

export const Reports = props => {
    const {
        reports = [],
    } = props;

    return (
        <Table columns={COLUMNS_REPORTS} items={reports} />
    );
};
