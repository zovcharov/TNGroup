import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GanttChart from '../../components/GanttChart/GanttChart';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchSchedules } from '../../redux/fetchers';
import {
    scheduleFetch,
    scheduleUpdate
} from '../../redux/actions';

import './PlansPage.scss';

const PlansPage = (props) => {
    const {
        match: { params: { projectId } },
        scheduleFetch,
        scheduleUpdate,
        schedulesDataStatus,
        schedules,
    } = props;

    useEffect(() => {
        if (schedulesDataStatus === 'pending') {
            fetchSchedules(projectId, scheduleFetch, scheduleUpdate)
        }
    }, [schedulesDataStatus, schedules]);

    return (
        <div className="plans-page">
            <NavigationPanel projectId={projectId} activePage="plans" />
            <div className="plans__title">Календарные планы:</div>
            {
                schedulesDataStatus === 'loaded' &&
                schedules.map((schedule, index) => (
                    <GanttChart key={`schedule-${index}`} ProjectTasks={schedule.ProjectTasks} />
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    schedulesDataStatus: state.schedulesDataStatus,
    schedules: state.schedules,
});

const mapDispatchToProps = (dispatch) => ({
    scheduleFetch: () => dispatch(scheduleFetch()),
    scheduleUpdate: (data) => dispatch(scheduleUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlansPage);
