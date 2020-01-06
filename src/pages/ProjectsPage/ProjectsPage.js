/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProjectListItem from '../../components/ProjectListItem/ProjectListItem';
import Preloader from '../../components/Preloader/Preloader';

import {
    projectsFetch,
    projectsUpdate,
} from '../../redux/actions';

import {
    fetchProjects,
} from '../../redux/fetchers';

import './ProjectsPage.scss';

const ProjectsPage = ({
    projectsFetch, projectsUpdate, projectsDataState, projects,
}) => {
    useEffect(() => {
        if (projectsDataState === 'pending') {
            fetchProjects(projectsFetch, projectsUpdate);
        }
    }, [projectsDataState]);

    if (projectsDataState === 'loading') {
        return <Preloader fullScreen />;
    }

    return (
        <div className="projects-page">
            <div className="projects-page__title">
                Проекты:
            </div>
            {
                projects.map((project) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <ProjectListItem {...project} key={project.id} />
                ))
            }
        </div>
    );
};

const mapStateToProps = ({ projects, projectsDataState }) => ({
    projects,
    projectsDataState,
});

const mapDispatchToProps = (dispatch) => ({
    projectsFetch: () => dispatch(projectsFetch()),
    projectsUpdate: (data) => dispatch(projectsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
