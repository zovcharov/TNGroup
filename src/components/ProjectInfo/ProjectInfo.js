import React from 'react';

import './ProjectInfo.scss';
import Container from '../Container/Container';
import Table from '../Table/Table';
import ProjectPassport from '../ProjectMainInfo/ProjectPassport';
import ProjectFiles from '../ProjectFiles/ProjectFiles';
import {ITEMS_TASKS} from "../../ApiProvider/mockups";

const COLUMNS_TASKS = [
  {
    label: 'Название',
    name: 'Description',
    width: '50%'
  },
  {
    label: 'Статус',
    name: 'state',
    width: '30%'
  },
  {
    label: 'Обновлено',
    name: 'LastDateUpdate',
    width: '20%'
  }
]

const COLUMNS_AGREEMENTS = [

]

const ProjectInfo = ({info}) => {
    const {
      Id,
      Alias,
      PassportProject,
      Participants,
      agreement,
      tasks
    } = info
    const passportInfo = {
      Id,
      Alias,
      Participants,
      ...PassportProject,
    }

    console.log(info)

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
                      <Table columns={COLUMNS_TASKS} items={tasks} />
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
                  <Table columns={COLUMNS_AGREEMENTS} items={agreement} />
              </Container>
            </div>
            {JSON.stringify(info)}
        </div>
    )
};

export default ProjectInfo;
