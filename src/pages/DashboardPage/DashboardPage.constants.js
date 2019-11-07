import {Link} from "react-router-dom";
import React from "react";

export const COLUMNS_TASKS = [
    {
        label: 'Название',
        name: 'nameCell',
        width: '55%',
        cell: (item) => <Link className="tasks__task-name" to={`/task/${item.id}`}>{item.description}</Link>
    },
    {
        label: 'Статус',
        name: 'status',
        width: '15%'
    },
    {
        label: 'Номер',
        name: 'id',
        width: '15%'
    },
    {
        label: 'Обновлено',
        name: 'lastDateUpdate',
        width: '15%'
    },
];

export const COLUMNS_AGREEMENTS = [
    {
        label: 'Название',
        name: 'Name',
        width: '100%',
    }
];
