/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';

import ModalWrapper from '../ModalWrapper';
import Button from '../../Button/Button';
import DatePicker from '../../DatePicker/DatePicker';

import './MilestoneModal.scss';

const MilestoneModal = ({ isOpen, onClose, onSubmit }) => {
    const [isModalOpen, onChangeModalOpen] = useState(false);
    const [milestoneName, changeMilestoneName] = useState('');
    const [milestoneDate, changeMilestoneDate] = useState(new Date());
    const inputRef = React.createRef();

    const onCloseModal = () => {
        // eslint-disable-next-line no-unused-expressions
        onClose && onClose();
        onChangeModalOpen(false);
    };

    const onChangeName = (event) => {
        changeMilestoneName(event.target.value);
    };

    const onChangeDate = (date) => {
        changeMilestoneDate(date);
    };

    const onSubmitMilestone = () => {
        if (milestoneName.trim().length === 0) {
            return;
        }
        onSubmit(milestoneName, milestoneDate);
        // Чистим стейт иначе при следующем открытии получим старый
        changeMilestoneName('');
        // Ёбаные хаки с закрытиями модалки, иначе может неправильно отработать
        setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            onClose && onClose();
            onChangeModalOpen(false);
        });
    };

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isOpen && onChangeModalOpen(true);
        // eslint-disable-next-line no-unused-expressions
        inputRef.current && inputRef.current.focus();
    }, [isOpen, inputRef]);

    return (
        <ModalWrapper isOpen={isModalOpen} onClose={onCloseModal}>
            <div className="milestone-modal">
                <div className="milestone-modal__title">Название вехи</div>
                <input
                    ref={inputRef}
                    type="text"
                    value={milestoneName}
                    onChange={onChangeName}
                    className="milestone-modal__input"
                />
                <DatePicker value={milestoneDate} onDayChange={onChangeDate} />
                <Button className="milestone-modal__submit">
                    <span className="submit__text" onClick={onSubmitMilestone}>Создать веху</span>
                </Button>
            </div>
        </ModalWrapper>
    );
};

export default MilestoneModal;
