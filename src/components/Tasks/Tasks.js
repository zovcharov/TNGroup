/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Table from '../Table/Table';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import CreateTaskModal from '../Modals/CreateTaskModal/CreateTaskModal.container';

import './Tasks.scss';

const COLUMNS_TASKS = [
    {
        label: 'Название',
        name: 'nameCell',
        width: '30%',
        cell: (item) => <Link className="tasks__task-name" to={`/task/${item.id}`}>{item.name}</Link>,
    },
    {
        label: 'Статус',
        name: 'status',
        width: '15%',
    },
    {
        label: 'Обновлено',
        name: 'lastDateUpdate',
        width: '10%',
    },
    {
        label: 'Номер',
        name: 'id',
        width: '10%',
    },
    {
        label: 'Исполнитель',
        name: 'performerName',
        width: '25%',
    },
    {
        label: 'Дата окончания',
        name: 'dateEnd',
        width: '10%',
    },
];

const prepareTasks = (tasks) => tasks.map((task) => ({
    ...task,
    nameCell: {
        name: task.name,
        id: task.id,
    },
}));

const Tasks = ({ tasks, projectId }) => {
    const [isCreateTaskModalOpen, onOpenTaskProjectModal] = useState(false);

    const openCreateTaskModal = useCallback(() => onOpenTaskProjectModal(true), []);
    const closeCreateTaskModal = useCallback(() => onOpenTaskProjectModal(false), []);

    return (
        <>
            <div className="tasks__title">Задачи:</div>
            <div className="tasks">
                <Table columns={COLUMNS_TASKS} items={prepareTasks(tasks)} />
                <div className="tasks__footer">
                    <DefaultButton onClick={openCreateTaskModal}>
                        <span>Добавить задачу</span>
                    </DefaultButton>
                </div>
            </div>
            <CreateTaskModal projectId={projectId} isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal} />
        </>
    );
};

export default Tasks;
