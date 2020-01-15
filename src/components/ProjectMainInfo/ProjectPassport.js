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
    PROJECT_MANAGER,
    PROJECT_SUPERVISER,
    PROJECT_WORKER,
    PROJECT_CUSTOMER,
    PROJECT_CURATOR,
} from '../../pages/ProjectsPage/ProjectPage.constants';

export const getPersonByRole = (partisipants = [], role) => {
    const persons = partisipants.filter((part) => part.ProjectRole === role);
    return (
        persons.map(({Employee}) => (
            <PersonItem person={Employee} />
        ))
    );
}

export const InfoBlock = ({ label, children, className = '' }) => (
    <div className={`info-block ${className}`}>
        <p className="info-block__label">{label}</p>
        <div className="info-block__content">
            {children}
        </div>
    </div>
);

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
        Customer,
        Participants,
        canUserEditProject,
    } = props;

    const openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    const createDate = formatDateToString(DateCreate);
    const endDate = formatDateToString(DateEnd);

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
                        {Customer}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Куратор:">
                        {getPersonByRole(Participants, PROJECT_CURATOR)}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Контактное лицо заказчика:">
                        {getPersonByRole(Participants, PROJECT_CUSTOMER)}
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Исполнители:">
                        {getPersonByRole(Participants, PROJECT_WORKER)}
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Контролер проекта:">
                        {getPersonByRole(Participants, PROJECT_SUPERVISER)}
                    </InfoBlock>
                    <InfoBlock label="Руководитель:">
                        {getPersonByRole(Participants, PROJECT_MANAGER)}
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

export default ProjectMainInfo;
