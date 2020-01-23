/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import './FilesComponent.scss';
import Preloader from '../Preloader/Preloader';

const FilesComponent = ({ files, uploadFile, isLoading, title }) => {
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
                <div className="files__empty">
                    Нет файлов
                </div>
            );
        }

        if (isLoading) {
            return <Preloader theme="dark" />;
        }

        return files.map(({ Name, Id }) => (
            <div className="files__item" key={Id}>
                <a className="files__link">{Name}</a>
            </div>
        ));
    };

    return (
        <div className="files">
            {
                title && (
                    <div className="files__header">
                        <p>{title}</p>
                    </div>
                )
            }
            <div className="files__content">
                {
                    renderContent()
                }
            </div>
            <div className="files__bottom">
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

FilesComponent.propTypes = {
    uploadFile: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            Name: PropTypes.string,
            Id: PropTypes.number,
        }),
    ).isRequired,
};

export default FilesComponent;
