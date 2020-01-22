/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import PersonItem from '../../../PersonItem/PersonItem';
import { formatDateToString } from '../../../../helpers/helpers';

import './ReportTask.scss';
import CreateTaskModal from '../../../Modals/CreateTaskModal/CreateTaskModal.container';

const ReportTask = ({ taskInfo, projectId, onUpdateTask }) => {
    const [isOpen, toggleIsOpen] = useState(false);
    const [isTaskModalOpen, toggleIsTaskModalOpen] = useState(false);

    const onOpenTaskModal = () => toggleIsTaskModalOpen(true);
    const onCloseTaskModal = () => toggleIsTaskModalOpen(false);

    const onOpenInfo = () => toggleIsOpen(true);
    const onCloseInfo = () => toggleIsOpen(false);

    const renderInfoToggler = () => {
        if (isOpen) {
            return (
                <div className="report-task__additional-info-button" onClick={onCloseInfo}>&uarr;</div>
            );
        }

        return (
            <div className="report-task__additional-info-button" onClick={onOpenInfo}>&darr;</div>
        );
    };

    const renderAdditionalTaskInfo = () => {
        if (isOpen) {
            return (
                <>
                    <div className="report-task__separator" />
                    <div className="report-task__info-row report-task__info-row_additional">
                        <span className="report-task__info-title">Описание: </span>
                        {taskInfo.Description}
                    </div>
                    <div className="report-task__info-row report-task__info-row_additional">
                        <span className="report-task__info-title">Дата начала: </span>
                        {formatDateToString(taskInfo.DateBegin)}
                    </div>
                    <div className="report-task__info-row report-task__info-row_additional">
                        <span className="report-task__info-title">Дата конца: </span>
                        {formatDateToString(taskInfo.DateEnd)}
                    </div>
                    <div className="report-task__info-row report-task__info-row_additional">
                        <span className="report-task__info-title">Имя проекта: </span>
                        {taskInfo.ProjectName}
                    </div>
                </>
            );
        }

        return null;
    };

    return (
        <div className="report-task">
            {
                taskInfo.CanUserEdit && (
                    <span className="report-task__edit-btn" onClick={onOpenTaskModal} />
                )
            }
            <div className="report-task__info">
                <div className="report-task__info-row">
                    <div className="report-task__info-item report-task__info-item_type_id">
                        <div className="report-task__info-title">Id</div>
                        <div className="report-task__info-value">
                            {taskInfo.Id}
                        </div>
                    </div>
                    <div className="report-task__info-item report-task__info-item_type_name">
                        <div className="report-task__info-title">Имя задачи</div>
                        <div className="report-task__info-value">
                            {taskInfo.Name || 'Отсутствует'}
                        </div>
                    </div>
                    <div className="report-task__info-item report-task__info-item_type_executor">
                        <div className="report-task__info-title">Исполнитель</div>
                        <div className="report-task__info-value">
                            <PersonItem person={taskInfo.Performer} singleString />
                        </div>
                    </div>
                    <div className="report-task__info-item report-task__info-item_type_date">
                        <div className="report-task__info-title">Дата обновления</div>
                        <div className="report-task__info-value">
                            { formatDateToString(taskInfo.LastDateUpdate) }
                        </div>
                    </div>
                    <div className="report-task__info-item report-task__info-item_type_status">
                        <div className="report-task__info-title">Статус</div>
                        <div className="report-task__info-value">
                            {taskInfo.StatusText}
                        </div>
                    </div>
                </div>
                {
                    renderAdditionalTaskInfo()
                }
            </div>
            {
                renderInfoToggler()
            }
            {
                taskInfo.CanUserEdit && (
                    <CreateTaskModal
                        isEdit
                        projectId={projectId}
                        isOpen={isTaskModalOpen}
                        onClose={onCloseTaskModal}
                        onUpdateTask={onUpdateTask}
                        {...taskInfo}
                    />
                )
            }
        </div>
    );
};

export default ReportTask;
