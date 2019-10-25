import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import AddButton from './../Buttons/AddButton';
import CreateProjectModal from './../Modals/CreateProjectModal/CreateProjectModal';
import CreateTaskModal from './../Modals/CreateTaskModal/CreateTaskModal.container';

import './NavigationPanel.scss';

const getLinks = (projectId) => [
    {
        name: 'project',
        title: 'Главная страница проекта',
        url: `/project/${projectId}`,
    }, {
        name: 'plans',
        title: 'Календарные планы',
        url: `/plans/${projectId}`,
    }, {
        name: 'tasks',
        title: 'Задачи',
        url: `/tasks/${projectId}`,
    }, {
        name: 'risks',
        title: 'Риски',
        url: `/risks/${projectId}`,
    }, {
        name: 'agreements',
        title: 'Согласования',
        url: `/agreements/${projectId}`,
    }
];

const NavigationPanel = ({ projectId, activePage }) => {
    const [isCreateProjectModalOpen, onOpenCreateProjectModal] = useState(false);
    const [isCreateTaskModalOpen, onOpenTaskProjectModal] = useState(false);

    const  openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const  closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    const  openCreateTaskModal = () => onOpenTaskProjectModal(true);
    const  closeCreateTaskModal = () => onOpenTaskProjectModal(false);

    const setActiveLink = (link) => {
        return link.name === activePage ? 'navigation-panel__link--active' : '';
    };

    return (
        <div className="navigation-panel">
            <div className="navigation-panel__links">
                {
                    getLinks(projectId).map((link, index) => {
                        if (window.location.hash === '#/projects' && index === 0) {
                            return (
                                <Link key={index} className={`navigation-panel__link navigation-panel__link--active`} to="#/projects">
                                    Все проекты
                                </Link>
                            )
                        }
                        return (
                            <Link key={index} className={`navigation-panel__link ${setActiveLink(link)}`} to={link.url}>
                                {link.title}
                            </Link>
                        )
                    })
                }
                <AddButton text="Добавить проект" onClick={openCreateProjectModal} type="add-project" />
                <AddButton text="Добавить задачу" onClick={openCreateTaskModal} type="add-task" />

                <CreateProjectModal isOpen={isCreateProjectModalOpen} onClose={closeCreateProjectModal} />
                <CreateTaskModal projectId={projectId} isOpen={isCreateTaskModalOpen} onClose={closeCreateTaskModal} />
            </div>
        </div>

    )
};

export default NavigationPanel;
