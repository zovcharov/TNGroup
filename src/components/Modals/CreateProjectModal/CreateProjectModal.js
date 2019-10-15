import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CreateProjectModalContent from './CreateProjectModalContent';
import ModalWrapper from './../ModalWrapper';

const CreateProjectModal = ({ isOpen, onClose }) => {
    const [isModalOpen, onChangeModalOpen] = useState(false);

    const onCloseModal = () => {
        onClose();
        onChangeModalOpen(false)
    };

    useEffect(() => {
        isOpen && onChangeModalOpen(true);
    }, [isOpen]);

    return (
        <ModalWrapper isOpen={isModalOpen} onClose={onCloseModal} title="Паспорт проекта">
            <CreateProjectModalContent />
        </ModalWrapper>
    )
};

const mapStateToProps = state => {
    return {

    }
};


export default connect(mapStateToProps, null)(CreateProjectModal);
