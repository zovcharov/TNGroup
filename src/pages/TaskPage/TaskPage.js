import React from 'react';
import Container from "../../components/Container/Container";
import './TaskPage.scss'
import {InfoBlock} from "../../components/ProjectMainInfo/ProjectPassport";
import Table from "../../components/Table/Table";
import PersonItem from "../../components/PersonItem/PersonItem";
import ProjectFiles from "../../components/ProjectFiles/ProjectFiles";

const COLUMNS_TASK = [
    {
        label: 'Название задачи',
        name: 'Name',
        width: '40%'
    },
    {
        label: 'Дата окончания',
        name: 'Date',
        width: '30%'
    },
    {
        label: 'Постановщик задачи',
        name: 'Person',
        width: '30%',
        cell: (item) => (
            <PersonItem/>
        )
    },
]

const ITEMS_SUBTASK = [
    {
        Name: 'Fffff',
        Date: 'qqffqfqf',
        Person: 'qrqrqrq',
    }
]

const TaskPage = (props) => {
    return (
        <div className='task-page'>
            <div className='task-panels'>
                <Container className='task-description_main'>
                    <InfoBlock label='Описание задачи'>
                        Автоматизация базируется на использование средств вычислительной техники (СВТ) и необходимого ПО.
                        Она позволяет существенно сократить время обслуживания пользователей,
                        значительно повысить уровень их обслуживания, преобразует и видоизменяет отдельные
                        технологические процессы, а порой – все основные традиционно используемые технологии.
                        , способствуя ликвидации многих рутинных операций, повышая комфортность и одновременно
                        эффективность работы, предоставляя пользователям новые, ранее неведомые, возможности работы
                        с информацией, создаёт и новые проблемы, решение которых может быть осуществлено лишь на базе
                        использования общенаучных методов и широкого использования новых информационных технологий.
                    </InfoBlock>
                    <InfoBlock label='Прикрепленные файлы'>
                    </InfoBlock>
                    <div className='task-subtasks'>
                        <Table columns={COLUMNS_TASK} items={ITEMS_SUBTASK}/>
                    </div>
                </Container>
                <Container className='task-description_additional'>
                    <InfoBlock label='Название задачи'>
                        йкцкйкйцкйкцкйцйцкйкцйц
                    </InfoBlock>
                    <div className='task-description__row'>
                        <div className='task-description__col_3'>
                            <InfoBlock label='№ задачи'>
                                747
                            </InfoBlock>
                        </div>
                        <div className='task-description__col_3'>
                            <InfoBlock label='Дата начала'>
                                747
                            </InfoBlock>
                        </div>
                        <div className='task-description__col_3'>
                            <InfoBlock label='Дата окончания'>
                                747
                            </InfoBlock>
                        </div>
                    </div>
                    <InfoBlock label='Проект'>qrqrrqqrqrrqqrrq</InfoBlock>
                </Container>
            </div>
        </div>
    )
}

export default TaskPage;
