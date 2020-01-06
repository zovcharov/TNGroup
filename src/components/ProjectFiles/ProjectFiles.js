/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import './ProjectFiles.scss';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';

const FILES = [
    {
        name: 'Раз',
        link: '',
    },
    {
        name: 'Два',
        link: '',
    },
    {
        name: 'Три',
        link: '',
    },
    {
        name: 'Чотыри',
        link: '',
    },
];

const ProjectFiles = () => (
    <div className="project-files">
        <div className="project-files__header">
            <p>Файлы проекта</p>
        </div>
        <div className="project-files__content">
            {FILES.map(({ name, link }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="project-files__item" key={index}>
                    <a className="project-files__link" href={link}>{name}</a>
                </div>
            ))}
        </div>
        <div className="project-files__bottom">
            <DefaultButton>Прикрепить файлы</DefaultButton>
        </div>
    </div>
);

export default ProjectFiles;
