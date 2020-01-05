/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CreateProjectModalContent from './CreateProjectModalContent';
import ModalWrapper from '../ModalWrapper';

const CreateProjectModal = ({
    isOpen, onClose, isEdit, ...props
}) => {
    const [isModalOpen, onChangeModalOpen] = useState(false);
    const [isLoading, changeLoading] = useState(false);

    const onCloseModal = () => {
        onClose();
        onChangeModalOpen(false);
    };

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isOpen && onChangeModalOpen(true);
    }, [isOpen]);

    return (
        <ModalWrapper isOpen={isModalOpen} onClose={onCloseModal} title="Паспорт проекта" isLoading={isLoading}>
            <CreateProjectModalContent isEdit={isEdit} onClose={onCloseModal} setLoading={changeLoading} {...props} />
        </ModalWrapper>
    );
};

const mapStateToProps = () => ({

});


export default connect(mapStateToProps, null)(CreateProjectModal);
