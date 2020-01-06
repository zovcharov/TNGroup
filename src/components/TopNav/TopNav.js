import React, { useState } from 'react';
import Button from '../Button/Button';
import CreateProjectModal from '../Modals/CreateProjectModal/CreateProjectModal';

import './TopNav.scss';

const TopNav = () => {
    const [isCreateProjectModalOpen, onOpenCreateProjectModal] = useState(false);

    const openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    return (
        <div className="topNav">
            <Button
                className="topNav__button"
                onClick={openCreateProjectModal}
            >
                <span className="topNav__button-icon topNav__button-icon_add" />
                Создать проект
            </Button>

            <CreateProjectModal isOpen={isCreateProjectModalOpen} onClose={closeCreateProjectModal} />
        </div>
    );
};

export default TopNav;
