import React, { useState, useEffect } from 'react';

import ModalWrapper from './../ModalWrapper';
import RiskModal from './RiskModal';

const RiskModalContainer = ({ isOpen, onClose, isEdit, projectId, ...props }) => {
    const [isModalOpen, onChangeModalOpen] = useState(false);
    const [isLoading, changeLoading] = useState(false);

    const onCloseModal = () => {
        onClose();
        onChangeModalOpen(false)
    };

    useEffect(() => {
        isOpen && onChangeModalOpen(true);
    }, [isOpen]);

    return (
        <ModalWrapper isOpen={isModalOpen} onClose={onCloseModal} title="Создание риска" isLoading={isLoading}>
            <RiskModal {...props} onClose={onCloseModal} projectId={projectId} setLoading={changeLoading} />
        </ModalWrapper>
    )
};

export default RiskModalContainer;
