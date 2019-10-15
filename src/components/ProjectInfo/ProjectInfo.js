import React from 'react';

import './ProjectInfo.scss';
import Container from '../Container/Container';
import Table from '../Table/Table';
import ProjectPassport from '../ProjectMainInfo/ProjectPassport';
import ProjectFiles from '../ProjectFiles/ProjectFiles';

const COLUMNS_TASKS = [
  {
    label: 'Название',
    name: 'name',
    width: '50%'
  },
  {
    label: 'Статус',
    name: 'state',
    width: '30%'
  },
  {
    label: 'Обновлено',
    name: 'lastUpdate',
    width: '20%'
  }
]

const ITEMS_TASKS = [
  {
    name: 'aaarwqrqwrqwqwrrwqwrqwqqwra',
    state: 'ИИИ',
    lastUpdate: 'qrtqrq'
  },
  {
    name: 'aaaqwrwqwrqrwrqwa',
    state: 'ИИИ',
    lastUpdate: 'qrtqrq'
  },
  {
    name: 'aaaarqwqrqwrrwqrqwrqwrqwrqwrqwrrqwqrwqwr',
    state: 'ИИИ',
    lastUpdate: 'qrtqrq'
  },
]

const ProjectInfo = ({info}) => {
    const {
      Alias,
      PassportProject,
      Participants
    } = info
    const passportInfo = {
      Alias,
      Participants,
      ...PassportProject
    }
    return (
        <div className="project-info">
            <div className="project-info__cols-block">
                <div className="project-info__col">
                  <Container
                    className='project-info__contaners-divider'
                    label='Календарный план проекта'>
                      <Table columns={COLUMNS_TASKS} items={ITEMS_TASKS} />
                  </Container>
                  <Container
                    className='project-info__contaners-divider'
                    label='Задачи'>
                      <Table columns={COLUMNS_TASKS} items={ITEMS_TASKS} />
                  </Container>
                  <Container
                    label='Риски'>
                      <Table columns={COLUMNS_TASKS} items={ITEMS_TASKS} />
                  </Container>
                </div>
                <div className="project-info__col">
                <Container
                  className='project-info__contaners-divider'
                  labelClass='project-info__project-name-label'>
                    <ProjectPassport
                      {...passportInfo} />
                </Container>
                <Container
                  className='project-info__contaners-divider'>
                    <ProjectFiles />
                </Container>
                </div>
            </div>
            <div className='project-info__agreements'>
              <Container
                label='Согласования'>
                  <Table columns={COLUMNS_TASKS} items={ITEMS_TASKS} />
              </Container>
            </div>
            {JSON.stringify(info)}
        </div>
    )
};

export default ProjectInfo;
