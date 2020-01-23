import React from 'react';
import PersonItem from '../PersonItem/PersonItem';
import { formatDateToString } from '../../helpers/helpers';

export const COLUMNS_PROJECT_EVENTS = [
    {
        label: 'Название',
        name: 'Name',
        width: '40%',
    },
    {
        label: 'Дата ',
        name: 'DateExecution',
        width: '30%',
    },
    {
        label: 'Прикреплено',
        name: 'Person',
        width: '30%',
        cell: () => (
            <PersonItem />
        ),
    },
];

