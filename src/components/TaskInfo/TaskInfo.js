import React, { useEffect } from 'react'

import './TaskInfo.scss'
import Container from "../Container/Container";
import {InfoBlock} from "../ProjectMainInfo/ProjectPassport";
import Table from "../Table/Table";
import PersonItem from "../PersonItem/PersonItem";

const COLUMNS_TASK = [
    {
        label: 'Название задачи',
        name: 'Name',
        width: '40%',
    },
    {
        label: 'Дата окончания',
        name: 'Date',
        width: '30%',
    },
    {
        label: 'Постановщик задачи',
        name: 'Person',
        width: '30%',
        cell: (item) => (
            <PersonItem />
        ),
    },
];

const ITEMS_SUBTASK = [
    {
        Name: 'Fffff',
        Date: 'qqffqfqf',
        Person: 'qrqrqrq',
    },
];

const TaskInfo = (props) => {
    const {
        info
    } = props

    console.log(info)

    return (
        <div className="task-page">
            <div className="task-panels">
                <Container className="task-description_main">
                    <InfoBlock label="Описание задачи">
                        {info.Description}
                    </InfoBlock>
                    <InfoBlock label="Прикрепленные файлы" />
                    <div className="task-subtasks">
                        <span>Подзадачи:</span>
                        <Table columns={COLUMNS_TASK} items={ITEMS_SUBTASK} />
                    </div>
                </Container>
                <Container className="task-description_additional">
                    <InfoBlock label="Название задачи">
                        йкцкйкйцкйкцкйцйцкйкцйц
                    </InfoBlock>
                    <div className="task-description__row">
                        <div className="task-description__col_3">
                            <InfoBlock label="№ задачи">
                                747
                            </InfoBlock>
                        </div>
                        <div className="task-description__col_3">
                            <InfoBlock label="Дата начала">
                                747
                            </InfoBlock>
                        </div>
                        <div className="task-description__col_3">
                            <InfoBlock label="Дата окончания">
                                747
                            </InfoBlock>
                        </div>
                    </div>
                    <InfoBlock label="Проект">qrqrrqqrqrrqqrrq</InfoBlock>
                </Container>
            </div>
            <Container className='task-panels' label='Ближайшие вехи'>
                <Table columns={COLUMNS_TASK} items={ITEMS_SUBTASK}/>
            </Container>

        </div>
    )
}

export default TaskInfo
