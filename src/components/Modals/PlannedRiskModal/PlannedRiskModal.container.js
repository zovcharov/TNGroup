/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';

import ModalWrapper from '../ModalWrapper';
import PlannedRiskModal from './PlannedRiskModal';

const PlannedRiskModalContainer = ({
    isOpen, onClose, isEdit, projectId, ...props
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
        <ModalWrapper isOpen={isModalOpen} onClose={onCloseModal} title="Запланированный риск" isLoading={isLoading}>
            <PlannedRiskModal {...props} onClose={onCloseModal} projectId={projectId} setLoading={changeLoading} />
        </ModalWrapper>
    );
};

export default PlannedRiskModalContainer;
