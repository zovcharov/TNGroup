import React from 'react';
import Table from '../Table/Table';
import Button from '../Button/Button';

import './Tasks.scss';

const COLUMNS_TASKS = [
    {
        label: 'Название',
        name: 'Description',
        width: '30%'
    },
    {
        label: 'Статус',
        name: 'Status',
        width: '15%'
    },
    {
        label: 'Обновлено',
        name: 'LastDateUpdate',
        width: '10%'
    },
    {
        label: 'Номер',
        name: 'Id',
        width: '10%'
    },
    {
        label: 'Исполнитель',
        name: 'Performer',
        width: '25%'
    },
    {
        label: 'Дата окончания',
        name: 'DateEnd',
        width: '10%'
    }

];

const prepareData = (tasks) => tasks.map((task => {
    const {
        Description,
        Status,
        LastDateUpdate,
        Id,
        Performer: { Name: Performer },
        DateEnd,
    } = task;

    return {
        Description,
        Status,
        LastDateUpdate,
        Id,
        Performer,
        DateEnd,
    }
}));

const Tasks = ({ tasks }) => {
    return (
        <React.Fragment>
            <div className="risks__title">Задачи:</div>
            <div className="risks">
                <Table columns={COLUMNS_TASKS} items={prepareData(tasks)} />
                <div className="risks__footer">
                    <Button>
                        <span>Добавить задачу</span>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Tasks;
