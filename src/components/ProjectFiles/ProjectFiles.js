/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import './ProjectFiles.scss';

const ProjectFiles = ({ files, uploadFile }) => {
    const onUploadFile = (event) => {
        const { files: uploadedFiles } = event.currentTarget;
        uploadFile(uploadedFiles[0]);
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

ProjectFiles.propTypes = {
    uploadFile: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            Name: PropTypes.string,
            Id: PropTypes.number,
        }),
    ).isRequired,
};

export default ProjectFiles;
