import React, { useEffect } from 'react'

import './TaskInfo.scss'
import Container from "../Container/Container";
import {InfoBlock} from "../ProjectMainInfo/ProjectPassport";
import Table from "../Table/Table";
import PersonItem from "../PersonItem/PersonItem";
import {formatDateToString} from "../../helpers/helpers";
import {
    COLUMNS_PROJECT_EVENTS,
    COLUMNS_SUBTASKS,
    ITEMS_SUBTASK
} from './TaskInfo.constants'

const TaskInfo = (props) => {
    const {
        info = {}
    } = props
    const {
        DateBegin,
        DateEnd,
        Description,
        Name,
        Id,
        ProjectEvents,
    } = info

    const beginDate = formatDateToString(DateBegin)
    const endDate = formatDateToString(DateEnd)

    console.log(info)

    return (
        <div className="task-page">
            <div className="task-panels">
                <Container className="task-description_main">
                    <InfoBlock label="Описание задачи">
                        {Description}
                    </InfoBlock>
                    <InfoBlock label="Прикрепленные файлы" />
                    <div className="task-subtasks">
                        <span>Подзадачи:</span>
                        <Table columns={COLUMNS_SUBTASKS} items={ITEMS_SUBTASK} />
                    </div>
                </Container>
                <Container className="task-description_additional">
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
                    <InfoBlock label='Исполнитель:'>
                        <PersonItem />
                    </InfoBlock>
                    <InfoBlock label="Проект">qrqrrqqrqrrqqrrq</InfoBlock>
                </Container>
            </div>
            <Container className='task-panels' label='Ближайшие вехи'>
                <Table columns={COLUMNS_PROJECT_EVENTS} items={ProjectEvents}/>
            </Container>

        </div>
    )
}

export default TaskInfo
