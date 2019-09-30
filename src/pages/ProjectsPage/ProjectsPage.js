import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Project from './../../components/Project/Project';
import Preloader from './../../components/Preloader/Preloader';

import {
    projectsFetch,
    projectsUpdate
} from './../../redux/actions';

import {
    fetchProjects,
} from './../../redux/fetchers';

const ProjectsPage = ({projectsFetch, projectsUpdate, projectsDataState, projects}) => {
    useEffect(()  => {
        if (projectsDataState === 'pending') {
            fetchProjects(projectsFetch, projectsUpdate)
        }

    }, [projectsDataState]);

    if (projectsDataState === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <div className="projects-page">
            {
                projects.map((project) => {
                    debugger
                    return (
                        <Project {...project} key={project.id} />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = ({projects, projectsDataState}) => ({
    projects,
    projectsDataState,
});

const mapDispatchToProps = (dispatch) => ({
    projectsFetch: () => dispatch(projectsFetch()),
    projectsUpdate: (data) => dispatch(projectsUpdate(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
