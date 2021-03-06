/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchSingleProject } from '../../redux/fetchers';
import {
    singleProjectFetch,
    singleProjectUpdate,
} from '../../redux/actions';

const ProjectPage = (props) => {
    const {
        match: { params: { projectId } },
        singleProject,
        singleProjectDataState,
        singleProjectFetch,
        singleProjectUpdate,
        currentUserInfo = { UserId: 0 },
    } = props;

    useEffect(() => {
        // Перваязагрузка проекта
        if (singleProjectDataState === 'pending') {
            fetchSingleProject(projectId, singleProjectFetch, singleProjectUpdate);
        } else if (singleProjectDataState === 'loaded' && singleProject.Id !== Number(projectId)) {
            // Зарузка при смене проекта
            fetchSingleProject(projectId, singleProjectFetch, singleProjectUpdate);
        }
    }, [projectId, singleProjectDataState, singleProject]);

    if (singleProjectDataState === 'loading') {
        return <Preloader fullScreen />;
    }

    return (
        <>
            <NavigationPanel projectId={projectId} activePage="project" />
            <div className="info">
                <ProjectInfo info={singleProject} currentUserId={currentUserInfo.UserId} />
            </div>
        </>
    );
};

const mapStateToProps = ({ currentUserInfo, singleProject, singleProjectDataState }) => ({
    currentUserInfo,
    singleProject,
    singleProjectDataState,
});

const mapDispatchToProps = (dispatch) => ({
    singleProjectFetch: () => dispatch(singleProjectFetch()),
    singleProjectUpdate: (data) => dispatch(singleProjectUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
