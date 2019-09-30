import React from 'react';
import propTypes from 'prop-types';

import Avatar from './../Avatar/Avatar';

import './Project.scss';

const Project = (props) => {
    debugger
    const {
        projectName,
        status,
        lastDateUpdate,
        id,
        provider,
        executor,
        dateEnd,
    } = props;

    return (
        <div className="project">
            <div className="project-col">
                <div className="project-col__title">Название</div>
                <div className="project-col__content content-text">
                    {projectName}
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Статус</div>
                <div className="project-col__content content-text">
                    {status}
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Обновлено</div>
                <div className="project-col__content content-text content-text--italian">
                    {lastDateUpdate.toString()}
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Номер №</div>
                <div className="project-col__content content-text">
                    {id}
                </div>
            </div>
            {/*<div className="project-col">
                <div className="project-col__title">Поставщик</div>
                <div className="project-col__content content-person">
                    <Avatar size="m" avatarUrl={provider.avatarUrl} />
                    <div className="content-person__name">
                        {provider.name }
                    </div>
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Исполнитель</div>
                <div className="project-col__content content-person">
                    <Avatar size="m" avatarUrl={provider.avatarUrl} />
                    <div className="content-person__name">
                        {executor.name}
                    </div>
                </div>
            </div>*/}
            <div className="project-col">
                <div className="project-col__title">Срок окончания</div>
                <div className="project-col__content content-text">
                    {dateEnd.toString()}
                </div>
            </div>
        </div>
    )
};

/*Project.propTypes = {
    name: propTypes.string.isRequired,
    status: propTypes.string.isRequired,
    updated: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
    provider: propTypes.shape({
        name: propTypes.string.isRequired,
        avatarUrl: propTypes.string.isRequired,
    }).isRequired,
    executor: propTypes.shape({
        name: propTypes.string.isRequired,
        avatarUrl: propTypes.string.isRequired,
    }).isRequired,
    expiration: propTypes.string.isRequired
}*/

export default Project;
