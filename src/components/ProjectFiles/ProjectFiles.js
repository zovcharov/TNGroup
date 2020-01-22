/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import './ProjectFiles.scss';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';

const ProjectFiles = ({ files }) => (
    <div className="project-files">
        <div className="project-files__header">
            <p>Файлы проекта</p>
        </div>
        <div className="project-files__content">
            {files.map(({ Name, Id }) => (
                <div className="project-files__item" key={Id}>
                    <a className="project-files__link">{Name}</a>
                </div>
            ))}
        </div>
        <div className="project-files__bottom">
            <DefaultButton>Прикрепить файлы</DefaultButton>
        </div>
    </div>
);

export default ProjectFiles;
