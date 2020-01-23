/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './TaskPage.scss';
import TaskInfo from '../../components/TaskInfo/TaskInfo';
import {
    singleTaskFetch,
    singleTaskUpdate,
    taskFilesFetch,
    taskFilesUpdate
} from '../../redux/actions';
import {fetchSingleTask, fetchTaskFiles} from '../../redux/fetchers';

const TaskPage = (props) => {
    const {
        match: { params: { taskId = 1 } },
        singleTask,
        singleTaskDataState,
        singleTaskFetch,
        singleTaskUpdate,
        taskFilesFetch,
        taskFilesUpdate,
        taskFiles,
        taskFilesDataStatus,
    } = props;

    useEffect(() => {
        if (singleTaskDataState === 'pending') {
            fetchSingleTask(taskId, singleTaskFetch, singleTaskUpdate);
        }
        if (taskFilesDataStatus === 'pending') {
            fetchTaskFiles(taskId, taskFilesFetch, taskFilesUpdate);
        }
    }, [taskId]);

    return (
        <>
            <TaskInfo info={{ ...singleTask, taskFiles }} />
        </>
    );
};

const mapStateToProps = (state) => ({
    singleTask: state.singleTask,
    singleTaskDataState: state.singleTaskDataState,
    taskFiles: state.taskFiles,
    taskFilesDataStatus: state.taskFilesDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    singleTaskFetch: () => dispatch(singleTaskFetch()),
    singleTaskUpdate: (id) => dispatch(singleTaskUpdate(id)),
    taskFilesFetch: () => dispatch(taskFilesFetch()),
    taskFilesUpdate: () => dispatch(taskFilesUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
