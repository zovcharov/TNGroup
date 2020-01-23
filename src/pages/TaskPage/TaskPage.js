/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './TaskPage.scss';
import TaskInfo from '../../components/TaskInfo/TaskInfo';
import {
    singleTaskFetch,
    singleTaskUpdate,
} from '../../redux/actions';
import { fetchSingleTask, fetchTaskFiles } from '../../redux/fetchers';

const TaskPage = (props) => {
    const {
        match: { params: { taskId = 1 } },
        singleTask,
        singleTaskDataState,
        singleTaskFetch,
        singleTaskUpdate,
    } = props;
    const [taskFiles, changeFiles] = useState([]);

    useEffect(() => {
        if (singleTaskDataState === 'pending') {
            fetchSingleTask(taskId, singleTaskFetch, singleTaskUpdate);
        }
    }, [taskId]);

    useEffect(() => {
        fetchTaskFiles(taskId)
            .then((files) => {
                changeFiles(files);
            });
    }, []);

    return (
        <>
            <TaskInfo info={{ ...singleTask}} taskFiles={taskFiles} />
        </>
    );
};

const mapStateToProps = (state) => ({
    singleTask: state.singleTask,
    singleTaskDataState: state.singleTaskDataState,
});

const mapDispatchToProps = (dispatch) => ({
    singleTaskFetch: () => dispatch(singleTaskFetch()),
    singleTaskUpdate: (id) => dispatch(singleTaskUpdate(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
