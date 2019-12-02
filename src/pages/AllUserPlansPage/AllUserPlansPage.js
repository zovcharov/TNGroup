import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GanttChart from '../../components/GanttChart/GanttChart';
import Preloader from '../../components/Preloader/Preloader';

import { userFetchSchedules } from '../../redux/fetchers';
import {
    userSchedulesFetch,
    userSchedulesUpdate
} from '../../redux/actions';

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
            {
                schedulesDataStatus === 'loading' &&
                <Preloader fullScreen />
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
