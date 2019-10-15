import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Tasks from '../../components/Tasks/Tasks';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchProjectTasks } from '../../redux/fetchers';
import {
    projectTasksFetch,
    projectTasksUpdate,
} from '../../redux/actions';

const ProjectRisksPage = (props) => {
    const {
        match: { params: { projectId } },
        tasks,
        tasksProjectId,
        tasksDataStatus,
        projectTasksFetch,
        projectTasksUpdate,
    } = props;

    useEffect(() => {
        if (tasksDataStatus === 'pending') {
            fetchProjectTasks(Number(projectId), projectTasksFetch, projectTasksUpdate);
        }
    }, [tasksDataStatus, tasks]);

    useEffect(() => {
        if (tasksDataStatus !== 'loading' && projectId !== tasksProjectId) {
            fetchProjectTasks(Number(projectId), projectTasksFetch, projectTasksUpdate);
        }
    }, [projectId]);

    if (tasksDataStatus === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <React.Fragment>
            <NavigationPanel projectId={projectId} activePage="tasks" />
            <Tasks tasks={tasks} />
        </React.Fragment>
    );
};

const mapStateToProps = ({ tasks, tasksProjectId, tasksDataStatus }) => ({
    tasks,
    tasksProjectId,
    tasksDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    projectTasksFetch: (projectId) => dispatch(projectTasksFetch(projectId)),
    projectTasksUpdate: (projectId) => dispatch(projectTasksUpdate(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRisksPage);
