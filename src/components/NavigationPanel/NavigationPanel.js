import React from 'react';
import {Link} from 'react-router-dom';

import AddButton from './../Buttons/AddButton';

import './NavigationPanel.scss';

const LINKS = [
    {
        title: 'Главная страница проекта',
        url: '/projects',
        isActive: true
    }, {
        title: 'Календарные планы',
        url: '/plans',
        isActive: false
    }, {
        title: 'Задачи',
        url: '/tasks',
        isActive: false
    }, {
        title: 'Риски',
        url: '/risks',
        isActive: false
    }, {
        title: 'Согласования',
        url: '/agreements',
        isActive: false
    }
];

const NavigationPanel = () => {
    const onAddProject = () => console.log('add project');
    const onAddTask = () => console.log('add task');

    const setActiveLink = (link) => {
        return link.isActive ? 'navigation-panel__link--active' : '';
    }

    return (
        <div className="navigation-panel">
            <div className="navigation-panel__links">
                {
                    LINKS.map((link, index) => (
                        <Link key={index} className={`navigation-panel__link ${setActiveLink(link)}`} to={link.url}>
                            {link.title}
                        </Link>
                    ))
                }
                    <AddButton text="Добавить проект" onClick={onAddProject} type="add-project" />
                    <AddButton text="Добавить задачу" onClick={onAddTask} type="add-task" />
            </div>
        </div>

    )
};

export default NavigationPanel;
