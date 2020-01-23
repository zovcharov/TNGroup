/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import './ProjectInfo.scss';
import Container from '../Container/Container';
import Table from '../Table/Table';
import ProjectPassport from '../ProjectMainInfo/ProjectPassport';
import ProjectFiles from '../ProjectFiles/ProjectFiles';
import { COLUMNS_AGREEMENTS } from '../Agreements/Agreements';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import { formatDateToString } from '../../helpers/helpers';
import CreateTaskModal from '../Modals/CreateTaskModal/CreateTaskModal.container';
import UnplannedRiskModalContainer from '../Modals/UnplannedRiskModal/UnplannedRiskModal.container';
import GanttChart from '../GanttChart/GanttChart';
import { uploadProjectFile } from '../../redux/fetchers';

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

export const getLastSchedule = (PlannedSchedules = []) => {
    const lastSchedule = Boolean(PlannedSchedules.length)
        && PlannedSchedules.reduce((prev, curr) => (prev.Version < curr.Version ? curr : prev));
    return lastSchedule.ProjectTasks ? lastSchedule.ProjectTasks : [];
};

const ProjectInfo = ({ info, currentUserId }) => {
    const {
        Id,
        Alias,
        PassportProject,
        Participants,
        agreements = [],
        tasks,
        PlannedRisks,
        PlannedSchedules = [],
        Attachments = [],
    } = info;
    const [fileList, changeFileList] = useState(Attachments);


    const passportInfo = {
        Id,
        Alias,
        Participants,
        ...PassportProject,
    };

    const [isCreateTaskModalOpen, toggleCreateTaskModalOpen] = useState(false);
    const [isUnplannedRiskModalOpen, toggleUnplannedRiskModal] = useState(false);

    const onOpenCreateTaskModal = () => toggleCreateTaskModalOpen(true);
    const onCloseCreateTaskModal = () => toggleCreateTaskModalOpen(false);

    const onOpenUnplannedRiskModal = () => toggleUnplannedRiskModal(true);
    const onCloseUnplannedRiskModal = () => toggleUnplannedRiskModal(false);
    const lastSchedule = getLastSchedule(PlannedSchedules);

    const uploadFile = (file) => {
        const data = new FormData();
        data.append('file', file);
        uploadProjectFile(data, Id)
            .then((res) => {
                const filesList = fileList.slice();
                filesList.push(res);
                changeFileList(filesList);
            });
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
                        <GanttChart ProjectTasks={lastSchedule} />
                    </Container>
                    <Container
                        className="project-info__contaners-divider"
                        label="Задачи"
                    >
                        <Table columns={COLUMNS_TASKS} items={tasks} />
                        <BottomButtons>
                            <DefaultButton
                                link={`/tasks/${Id}`}
                            >
                                Показать все задачи
                            </DefaultButton>
                            <DefaultButton
                                onClick={onOpenCreateTaskModal}
                            >
                                Добавить задачу
                            </DefaultButton>
                        </BottomButtons>
                    </Container>
                    <Container
                        label="Риски"
                    >
                        <Table columns={COLUMNS_RISKS} items={PlannedRisks} />
                        <BottomButtons>
                            <DefaultButton
                                link={`/risks/${Id}`}
                            >
                                Показать все риски
                            </DefaultButton>
                            <DefaultButton
                                onClick={onOpenUnplannedRiskModal}
                            >
                                Добавить риск
                            </DefaultButton>
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
                            Attachments={fileList}
                            {...passportInfo}
                        />
                    </Container>
                    <Container
                        className="project-info__contaners-divider"
                    >
                        <ProjectFiles files={fileList} uploadFile={uploadFile} />
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

            <CreateTaskModal projectId={Id} isOpen={isCreateTaskModalOpen} onClose={onCloseCreateTaskModal} />
            <UnplannedRiskModalContainer isOpen={isUnplannedRiskModalOpen} onClose={onCloseUnplannedRiskModal} projectId={Id} />
        </div>
    );
};

export default ProjectInfo;
