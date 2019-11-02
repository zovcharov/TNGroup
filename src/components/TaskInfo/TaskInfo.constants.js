import PersonItem from "../PersonItem/PersonItem";
import React from "react";

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
        cell: (item) => (
            <PersonItem />
        ),
    },
]

export const COLUMNS_SUBTASKS = [
    {
        label: 'Название задачи',
        name: 'Name',
        width: '40%',
    },
    {
        label: 'Дата окончания',
        name: 'Date',
        width: '30%',
    },
    {
        label: 'Постановщик задачи',
        name: 'Person',
        width: '30%',
        cell: (item) => (
            <PersonItem />
        ),
    },
];

export const ITEMS_SUBTASK = [
    {
        Name: 'Fffff',
        Date: 'qqffqfqf',
        Person: 'qrqrqrq',
    },
];