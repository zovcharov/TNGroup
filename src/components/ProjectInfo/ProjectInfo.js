/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import './ProjectInfo.scss';
import Container from '../Container/Container';
import Table from '../Table/Table';
import ProjectPassport from '../ProjectMainInfo/ProjectPassport';
import ProjectFiles from '../ProjectFiles/ProjectFiles';
import { ITEMS_TASKS } from '../../ApiProvider/mockups';
import { COLUMNS_AGREEMENTS } from '../Agreements/Agreements';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import { formatDateToString } from '../../helpers/helpers';

const COLUMNS_TASKS = [
    {
        label: 'Название',
        name: 'Description',
        width: '50%',
    },
    {
        label: 'Статус',
        name: 'state',
        width: '30%',
    },
    {
        label: 'Обновлено',
        name: 'LastDateUpdate',
        width: '20%',
    },
];

const COLUMNS_RISKS = [
    {
        label: 'Название',
        name: 'Name',
        width: '50%',
    },
    {
        label: 'Статус',
        name: 'State',
        width: '30%',
    },
    {
        label: 'Обновлено',
        name: 'Date',
        width: '20%',
        cell: (item) => formatDateToString(item),
    },
];

const BottomButtons = (props) => {
    const {
        children,
    } = props;
    return (
        <div className="bottom-buttons">
            {children}
        </div>
    );
};

const ProjectInfo = ({ info, currentUserId }) => {
    const {
        Id,
        Alias,
        PassportProject,
        Participants,
        agreements,
        tasks,
        PlannedRisks,
    } = info;

    const passportInfo = {
        Id,
        Alias,
        Participants,
        ...PassportProject,
    };

    const canUserEditProject = () => (Participants && Participants.filter((participant) => {
        if (participant.EmployeeId === currentUserId
           && (participant.ProjectRole === 1 || participant.ProjectRole === 6)) {
            return true;
        }

        return false;
    }).length > 0);

    return (
        <div className="project-info">
            <div className="project-info__cols-block">
                <div className="project-info__col">
                    <Container
                        className="project-info__contaners-divider"
                        label="Календарный план проекта"
                    >
                        <Table columns={COLUMNS_TASKS} items={ITEMS_TASKS} />
                    </Container>
                    <Container
                        className="project-info__contaners-divider"
                        label="Задачи"
                    >
                        <Table columns={COLUMNS_TASKS} items={tasks} />
                        <BottomButtons>
                            <DefaultButton>Показать все задачи</DefaultButton>
                            <DefaultButton>Добавить задачу</DefaultButton>
                        </BottomButtons>
                    </Container>
                    <Container
                        label="Риски"
                    >
                        <Table columns={COLUMNS_RISKS} items={PlannedRisks} />
                        <BottomButtons>
                            <DefaultButton>Показать все риски</DefaultButton>
                            <DefaultButton>Добавить риск</DefaultButton>
                        </BottomButtons>
                    </Container>
                </div>
                <div className="project-info__col">
                    <Container
                        className="project-info__contaners-divider"
                        labelClass="project-info__project-name-label"
                    >
                        <ProjectPassport
                            projectId={Id}
                            canUserEditProject={canUserEditProject()}
                            {...passportInfo}
                        />
                    </Container>
                    <Container
                        className="project-info__contaners-divider"
                    >
                        <ProjectFiles />
                    </Container>
                </div>
            </div>
            <div className="project-info__agreements">
                <Container
                    label="Согласования"
                >
                    <Table columns={COLUMNS_AGREEMENTS} items={agreements} />
                    <BottomButtons>
                        <DefaultButton>Показать все согласования</DefaultButton>
                        <DefaultButton>Добавить согласование</DefaultButton>
                    </BottomButtons>
                </Container>
            </div>
        </div>
    );
};

export default ProjectInfo;
