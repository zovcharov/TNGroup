/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import './ProjectPassport.scss';

import { formatDateToString } from '../../helpers/helpers';
import PersonItem from '../PersonItem/PersonItem';
import CreateProjectModal from '../Modals/CreateProjectModal/CreateProjectModal';
import {
    findParticipantByRole,
    findParticipantsByRole, PROJECT_ROLE_CONTROLLER,
    PROJECT_ROLE_CURATOR, PROJECT_ROLE_CUSTOMER,
    PROJECT_ROLE_MANAGER, PROJECT_ROLE_WORKER
} from '../../helpers/usersHelper';

const ProjectMainInfo = (props) => {
    const [isCreateProjectModalOpen, onOpenCreateProjectModal] = useState(false);
    const {
        Name,
        DateCreate,
        DateEnd,
        Objective,
        Description,
        ExpectedResult,
        ExpectedProduct,
        MeetingLocation,
        MeetingPeriodic,
        EstimatedCost,
        PlannedFinancingSource,
        ApproximateEconomicEffect,
        Participants,
        canUserEditProject,
    } = props;

    const openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    const createDate = formatDateToString(DateCreate);
    const endDate = formatDateToString(DateEnd);

    const projectManager = Participants && findParticipantByRole(Participants, PROJECT_ROLE_MANAGER)[0];
    const projectCurator = Participants && findParticipantByRole(Participants, PROJECT_ROLE_CURATOR)[0];
    const projectCustomer = Participants && findParticipantByRole(Participants, PROJECT_ROLE_CUSTOMER)[0];
    const projectController = Participants && findParticipantByRole(Participants, PROJECT_ROLE_CONTROLLER)[0];
    const projectWorkers = Participants && findParticipantsByRole(Participants, PROJECT_ROLE_WORKER);

    return (
        <div className="project-main-info">
            {
                canUserEditProject
                && <span className="project-main-info__edit-button" onClick={openCreateProjectModal} />
            }
            <div className="project-main-info__row">
                <InfoBlock label="Название проекта:">
                    <span className="project-main-info__label">
                        {Name}
                    </span>
                </InfoBlock>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Дата постановки:">
                        {createDate}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Дата окончания:">
                        {endDate}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <InfoBlock label="Цель проекта:">
                    {Objective}
                </InfoBlock>
            </div>
            <div className="project-main-info__row">
                <InfoBlock label="Описание проекта:">
                    {Description}
                </InfoBlock>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Ожидаемый результат:">
                        {ExpectedResult}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Ожидаемый продукт:">
                        {ExpectedProduct}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Место проведения совещания:">
                        {MeetingLocation}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Периодичность совещания:">
                        {MeetingPeriodic}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Стоимость проекта(ориентировочно):">
                        {EstimatedCost}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Источник финансирования:">
                        {PlannedFinancingSource}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Экономический эффект:">
                        {ApproximateEconomicEffect}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Заказчик:">
                        <PersonItem person={projectCustomer} />
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Куратор:">
                        <PersonItem person={projectCurator} />
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Исполнители:">
                        {
                            projectWorkers && projectWorkers.map((worker) => (
                                <PersonItem person={worker} key={`worker-${worker.Id}`} />
                            ))
                        }
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Контролер проекта:">
                        <PersonItem person={projectController} />
                    </InfoBlock>
                    <InfoBlock label="Руководитель:">
                        <PersonItem person={projectManager} />
                    </InfoBlock>
                </div>
            </div>
            <CreateProjectModal
                isOpen={isCreateProjectModalOpen}
                onClose={closeCreateProjectModal}
                isEdit
                {...props}
            />
        </div>
    );
};

export const InfoBlock = ({ label, children, className = '' }) => (
    <div className={`info-block ${className}`}>
        <p className="info-block__label">{label}</p>
        <div className="info-block__content">
            {children}
        </div>
    </div>
);

export default ProjectMainInfo;
