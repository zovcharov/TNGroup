import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GanttChart from '../../components/GanttChart/GanttChart';

import { userFetchSchedules } from '../../redux/fetchers';
import {
    userSchedulesFetch,
    userSchedulesUpdate
} from '../../redux/actions';

const Plan = (tasks, index) => (
    <GanttChart key={`schedule-${index}`} ProjectTasks={tasks.tasks} />
)

const PlansPage = (props) => {
    const {
        scheduleFetch,
        scheduleUpdate,
        schedulesDataStatus,
        schedules,
        allPlansPage = false,
    } = props;

    useEffect(() => {
        if (schedulesDataStatus === 'pending') {
            userFetchSchedules(scheduleFetch, scheduleUpdate)
        }
    }, [schedulesDataStatus, schedules]);

    return (
        <div className="plans-page">
            <div className="plans__title">Календарные планы:</div>
            {
                schedulesDataStatus === 'loaded' &&
                schedules.filter(item => item.ProjectTasks.length).map((schedule, index) => (
                    <GanttChart key={`schedule-${index}`} ProjectTasks={schedule.ProjectTasks} />
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    schedulesDataStatus: state.userSchedulesDataStatus,
    schedules: state.userSchedules,
});

const mapDispatchToProps = (dispatch) => ({
    scheduleFetch: () => dispatch(userSchedulesFetch()),
    scheduleUpdate: (data) => dispatch(userSchedulesUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlansPage);
