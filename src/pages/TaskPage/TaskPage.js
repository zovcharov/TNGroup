import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './TaskPage.scss';
import TaskInfo from '../../components/TaskInfo/TaskInfo';
import { singleTaskFetch, singleTaskUpdate } from '../../redux/actions';
import { fetchSingleTask } from '../../redux/fetchers';

const TaskPage = (props) => {
    const {
        match: { params: { taskId = 1 } },
        singleTask,
        singleTaskDataState,
        singleTaskFetch,
        singleTaskUpdate
    } = props

    useEffect(() => {
        if (singleTaskDataState === 'pending') {
            fetchSingleTask(taskId, singleTaskFetch, singleTaskUpdate);
        }
    }, [taskId])

    return (
        <React.Fragment>
            <TaskInfo info={singleTask} />
        </React.Fragment>
    )
}

const mapStateToProps = ({ singleTask, singleTaskDataState }) => ({
    singleTask,
    singleTaskDataState,
});

const mapDispatchToProps = (dispatch) => ({
    singleTaskFetch: () => dispatch(singleTaskFetch()),
    singleTaskUpdate: (id) => dispatch(singleTaskUpdate(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
