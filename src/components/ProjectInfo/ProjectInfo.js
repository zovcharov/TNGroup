import React from 'react';

import './ProjectInfo.scss';
import Container from '../Container/Container';

const ProjectInfo = ({info}) => {
    return (
        <div className="project-info">
            <div className="project-info__cols-block">
                <div className="project-info__col">
                  <Container
                    className='project-info__contaners-divider'
                    label='Календарный план проекта'>

                  </Container>
                  <Container
                    className='project-info__contaners-divider'
                    label='Задачи'>

                  </Container>
                  <Container
                    label='Риски'>

                  </Container>
                </div>
                <div className="project-info__col">
                <Container
                  className='project-info__contaners-divider'
                  label='Название проекта'
                  labelClass='project-info__project-name-label'>

                </Container>
                </div>
            </div>
            <div className='project-info__agreements'>
              <Container
                label='Согласования'>

              </Container>
            </div>
            {JSON.stringify(info)}
        </div>
    )
};

export default ProjectInfo;
