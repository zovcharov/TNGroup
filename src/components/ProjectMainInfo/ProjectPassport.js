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
    const projectOwner = Participants && Participants.find((part) => part.ProjectRole === 1);

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
                        <PersonItem person={projectOwner} />
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Контактное лицо заказчика:">
                        <PersonItem person={projectOwner} />
                    </InfoBlock>
                </div>
            </div>
            <div className="project-main-info__row">
                <div className="project-main-info__col">
                    <InfoBlock label="Исполнители:">
                        <PersonItem person={projectOwner} />
                    </InfoBlock>
                </div>
                <div className="project-main-info__col">
                    <InfoBlock label="Контролер проекта:">
                        <PersonItem person={projectOwner} />
                    </InfoBlock>
                    <InfoBlock label="Руководитель:">
                        <PersonItem person={projectOwner} />
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
