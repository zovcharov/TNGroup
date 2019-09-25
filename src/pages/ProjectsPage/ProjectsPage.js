import React from 'react';

import Project from './../../components/Project/Project';

const projectsMock = [
    {
        name: 'Произвести внедрение проектно-цифровой платформы',
        status: 'Выполняется',
        updated: '1 час назад',
        number: 747,
        provider: {
            name: 'Новиков Алексей Петрович',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        executor:  {
            name: 'Иванов Иван Иваныч',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        expiration: '08.09.2019',
    },
    {
        name: 'Произвести внедрение проектно-цифровой платформы',
        status: 'Выполняется',
        updated: '1 час назад',
        number: 747,
        provider: {
            name: 'Новиков Алексей Петрович',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        executor:  {
            name: 'Иванов Иван Иваныч',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        expiration: '08.09.2019',
    },
    {
        name: 'Произвести внедрение проектно-цифровой платформы',
        status: 'Выполняется',
        updated: '1 час назад',
        number: 747,
        provider: {
            name: 'Новиков Алексей Петрович',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        executor:  {
            name: 'Иванов Иван Иваныч',
            avatarUrl: 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        },
        expiration: '08.09.2019',
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            {
                projectsMock.map((project, index) => (
                    <Project {...project} key={project.number + index} />
                ))
            }
        </div>
    )
};

export default ProjectsPage;
