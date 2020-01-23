/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './TaskInfo.scss';
import Container from '../Container/Container';
import { InfoBlock } from '../ProjectMainInfo/ProjectPassport';
import Table from '../Table/Table';
import PersonItem from '../PersonItem/PersonItem';
import { formatDateToString } from '../../helpers/helpers';
import { COLUMNS_PROJECT_EVENTS } from './TaskInfo.constants';
import CreateTaskModal from '../Modals/CreateTaskModal/CreateTaskModal.container';
import FilesComponent from '../FilesComponent/FilesComponent';
import { uploadTaskFile } from '../../redux/fetchers';

const TaskInfo = (props) => {
    const {
        info = {},
        taskFiles,
    } = props;
    const {
        DateBegin,
        DateEnd,
        Description,
        Name,
        Id,
        ProjectEvents,
        Performer,
        PreviousConnectedTaskId,
        NextConnectedTaskId,
        ProjectId,
    } = info;

    const [fileList, changeFileList] = useState([]);
    const [isFilesLoading, changeIsFilesLoading] = useState(false);

    const beginDate = formatDateToString(DateBegin);
    const endDate = formatDateToString(DateEnd);

    const [isCreateTaskModalOpen, changeCreateTaskModalOpen] = useState(false);

    const onOpenCreateTaskModal = () => changeCreateTaskModalOpen(true);
    const onCloseCreateTaskModal = () => changeCreateTaskModalOpen(false);

    useEffect(() => {
        changeFileList(taskFiles);
    }, [taskFiles]);

    const uploadFile = (file) => {
        const data = new FormData();
        data.append('file', file);
        changeIsFilesLoading(true);
        uploadTaskFile(data, Id, ProjectId)
            .then((res) => {
                const filesList = fileList.slice();
                filesList.push(res);
                changeFileList(filesList);
                changeIsFilesLoading(false);
            });
    };

    return (
        <div className="task-page">
            <div className="task-panels">
                <Container className="task-description_main">
                    <InfoBlock label="Описание задачи">
                        {Description}
                    </InfoBlock>
                    <InfoBlock label="Прикрепленные файлы">
                        <FilesComponent files={fileList} uploadFile={uploadFile} isLoading={isFilesLoading} />
                    </InfoBlock>
                    <div className="task-description_related-tasks">
                        <div className="task-description_related-tasks_link-left">
                            {PreviousConnectedTaskId
                            && <Link to={`/task/${PreviousConnectedTaskId}`}>{'< Предыдущая задача'}</Link>}
                        </div>
                        <div className="task-description_related-tasks_link-right">
                            {NextConnectedTaskId
                            && <Link to={`/task/${NextConnectedTaskId}`}>{'Следующая задача >'}</Link>}
                        </div>
                    </div>
                </Container>
                <Container className="task-description_additional">
                    <span
                        className="task-description_additional__edit-button"
                        onClick={onOpenCreateTaskModal}
                    />
                    <InfoBlock label="Название задачи">
                        {Name}
                    </InfoBlock>
                    <div className="task-description__row">
                        <div className="task-description__col_3">
                            <InfoBlock label="№ задачи">
                                {Id}
                            </InfoBlock>
                        </div>
                        <div className="task-description__col_3">
                            <InfoBlock label="Дата начала">
                                {beginDate}
                            </InfoBlock>
                        </div>
                        <div className="task-description__col_3">
                            <InfoBlock label="Дата окончания">
                                {endDate}
                            </InfoBlock>
                        </div>
                    </div>
                    <InfoBlock label="Исполнитель:">
                        <PersonItem person={Performer} />
                    </InfoBlock>
                </Container>
            </div>
            <Container className="task-panels" label="Ближайшие вехи">
                <Table columns={COLUMNS_PROJECT_EVENTS} items={ProjectEvents} />
            </Container>
            <CreateTaskModal
                isOpen={isCreateTaskModalOpen}
                onClose={onCloseCreateTaskModal}
                isEdit
                {...props.info}
            />
        </div>
    );
};

export default TaskInfo;
