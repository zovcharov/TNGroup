/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */

import React, { useState } from 'react';

import './CreateTaskModal.scss';
import TngInput from '../../TngInput/TngInput';
import DatePicker from '../../DatePicker/DatePicker';
import TngUserSelect from '../../TngUserSelect/TngUserSelect';
import SingleMilestoneInput from '../components/Milestones/SingleMilestoneInput';
import MilestoneModal from '../MilestoneModal/MilestoneModal';
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import { prepareTaskData } from './CreateTask.preparer';
import { saveTask } from '../../../redux/fetchers';

const FILES_MOCK = ['Отчет о предыдущем проекте.pdf', 'Договор подряда.docx', 'Внутренний регламент выполнения задач.pptx', 'Акт приема работ.pdf'];

const CreateTaskModal = ({
    projectId, onClose, setLoading,
}) => {
    const [isStartMilestoneModalOpen, toggleStartMilestoneModal] = useState(false);
    const [isEndMilestoneModalOpen, toggleEndMilestoneModal] = useState(false);


    const [taskName, changeTaskName] = useState('');
    const [taskStartDate, changeTaskStartDate] = useState('');
    const [taskEndDate, changeTaskEndDate] = useState('');
    const [taskExecutors, changeTaskExecutors] = useState([]);
    const [taskDescription, changeTaskDescription] = useState('');
    const [taskStartMilestone, changeTaskStartMilestone] = useState({});
    const [taskEndMilestone, changeTaskEndMilestone] = useState(undefined);
    // eslint-disable-next-line no-unused-vars
    const [taskFiles, changeTaskFiles] = useState(FILES_MOCK);

    const onAddStartMilestone = () => toggleStartMilestoneModal(true);
    const onStartMilestoneModalClose = () => toggleStartMilestoneModal(false);
    const onAddEndMilestone = () => toggleEndMilestoneModal(true);
    const onEndMilestoneModalClose = () => toggleEndMilestoneModal(false);

    const onCreateStartMilestone = (name, date) => changeTaskStartMilestone({ name, date });
    const onClearStartMilestone = () => changeTaskStartMilestone({});
    const onCreateEndMilestone = (name, date) => changeTaskEndMilestone({ name, date });
    const onClearEndMilestone = () => changeTaskEndMilestone({});

    const onSaveTask = () => {
        const data = {
            taskName,
            taskStartDate,
            taskEndDate,
            taskExecutors,
            taskDescription,
            taskStartMilestone,
            taskEndMilestone,
        };

        // eslint-disable-next-line no-unused-expressions
        setLoading && setLoading(true);
        saveTask(prepareTaskData(data), projectId)
            .then(() => {
                onClose();
            })
            .finally(() => {
                // eslint-disable-next-line no-unused-expressions
                setLoading && setLoading(false);
            });
    };

    const getFilesList = () => taskFiles.map((file, index) => (
        <a className="file-item" href="#" key={`file-${index}`}>{file}</a>
    ));

    return (
        <div className="task-modal">
            <div className="task-modal__content">
                <div className="task-name task-modal__grid-item">
                    <div className="task-modal__label">Название задачи:</div>
                    <div className="task-modal__input">
                        <TngInput value={taskName} changeValue={changeTaskName} />
                    </div>
                </div>
                <div className="task-executors task-modal__grid-item">
                    <div className="task-modal__label">Исполнитель:</div>
                    <div className="task-modal__input">
                        <TngUserSelect onChangeSelectedUser={changeTaskExecutors} selectedUsers={taskExecutors} />
                    </div>
                </div>
                <div className="task-start-day task-modal__grid-item">
                    <div className="task-modal__label">Дата начала задачи:</div>
                    <div className="task-modal__input">
                        <DatePicker value={taskStartDate} onDayChange={changeTaskStartDate} />
                    </div>
                </div>
                <div className="task-end-day task-modal__grid-item">
                    <div className="task-modal__label">Дата завершения задачи:</div>
                    <div className="task-modal__input">
                        <DatePicker value={taskEndDate} onDayChange={changeTaskEndDate} />
                    </div>
                </div>
                <div className="task-description task-modal__grid-item">
                    <div className="task-modal__label">Описание задачи:</div>
                    <div className="task-modal__input">
                        <TngInput multiline value={taskDescription} changeValue={changeTaskDescription} />
                    </div>
                </div>
                <div className="task-start-milestone task-modal__grid-item">
                    <div className="task-modal__label">Веха на начало задачи:</div>
                    <div className="task-modal__input">
                        <SingleMilestoneInput
                            milestone={taskStartMilestone}
                            onSetMilestone={onAddStartMilestone}
                            onClear={onClearStartMilestone}
                        />
                        <MilestoneModal
                            isOpen={isStartMilestoneModalOpen}
                            onClose={onStartMilestoneModalClose}
                            onSubmit={onCreateStartMilestone}
                        />
                    </div>
                </div>
                <div className="task-end-milestone task-modal__grid-item">
                    <div className="task-modal__label">Веха на конец задачи:</div>
                    <div className="task-modal__input">
                        <SingleMilestoneInput
                            milestone={taskEndMilestone}
                            onSetMilestone={onAddEndMilestone}
                            onClear={onClearEndMilestone}
                        />
                        <MilestoneModal
                            isOpen={isEndMilestoneModalOpen}
                            onClose={onEndMilestoneModalClose}
                            onSubmit={onCreateEndMilestone}
                        />
                    </div>
                </div>
                <div className="task-files task-modal__grid-item">
                    <div className="task-files__title">Прикреплённые файлы:</div>
                    <div className="task-files__content">
                        <div className="task-files__files-list">
                            { getFilesList() }
                        </div>
                        <div className="task-files__add-files-btn" />
                    </div>
                </div>
            </div>
            <div className="task-modal__footer">
                <SubmitButton className="footer__button" onClick={onSaveTask}>
                    <span className="button__content">
                        Отправить на согласование
                    </span>
                </SubmitButton>
            </div>
        </div>
    );
};

export default CreateTaskModal;
