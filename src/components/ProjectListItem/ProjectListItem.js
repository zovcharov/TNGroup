/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectListItem.scss';

const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = `0${yy}`;

    return `${dd}.${mm}.${yy}`;
};

const ProjectListItem = (props) => {
    const {
        projectName,
        status,
        lastDateUpdate,
        id,
        dateEnd,
    } = props;

    return (
        <Link to={`/project/${id}`} className="project">
            <div className="project-col project-col__name">
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
                    {formatDate(lastDateUpdate)}
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Номер №</div>
                <div className="project-col__content content-text">
                    {id}
                </div>
            </div>
            <div className="project-col">
                <div className="project-col__title">Срок окончания</div>
                <div className="project-col__content content-text">
                    {formatDate(dateEnd)}
                </div>
            </div>
        </Link>
    );
};

export default ProjectListItem;
