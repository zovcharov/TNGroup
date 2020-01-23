/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import './ProjectFiles.scss';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton';
import { uploadProjectFile } from '../../redux/fetchers';
import Preloader from '../Preloader/Preloader';

const ProjectFiles = ({ files, changeFileList, projectId }) => {
    debugger;
    const [isFilesLoading, toggleIsFilesLoading] = useState(false);

    const onUploadFile = (event) => {
        const { files: uploadedFiles } = event.currentTarget;
        const data = new FormData();
        data.append('file', uploadedFiles[0]);

        toggleIsFilesLoading(true);
        uploadProjectFile(data, projectId)
            .then((res) => {
                const filesList = files.slice();
                filesList.push(res);
                changeFileList(filesList);
            })
            .finally(() => {
                toggleIsFilesLoading(false);
            });
    };

    /**
     * Hack for detecting loading same file twice
     * @param event
     */
    const onFileInputClick = (event) => {
        // eslint-disable-next-line no-param-reassign
        event.target.value = null;
    };

    const renderContent = () => {
        if (isFilesLoading) {
            return <Preloader theme="dark" />;
        }

        if (files.length === 0) {
            return (
                <div className="project-file__empty">
                    Нет файлов
                </div>
            );
        }

        return files.map(({ Name, Id }) => (
            <div className="project-files__item" key={Id}>
                <a className="project-files__link">{Name}</a>
            </div>
        ));
    };

    return (
        <div className="project-files">
            <div className="project-files__header">
                <p>Файлы проекта</p>
            </div>
            <div className="project-files__content">
                {
                    renderContent()
                }
            </div>
            <div className="project-files__bottom">
                <label className="add-files__button" htmlFor="file-input">
                    Прикрепить файлы
                </label>
                <input
                    id="file-input"
                    type="file"
                    className="add-files__file-input"
                    name="projectFiles"
                    onChange={onUploadFile}
                    onClick={onFileInputClick}
                />
            </div>
        </div>
    );
};

export default ProjectFiles;
