/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Reports } from '../../components/Reports/Reports';
import Preloader from '../../components/Preloader/Preloader';

import './AllUserReports.scss';

import { fetchUserReports } from '../../redux/fetchers';

import {
    userReportsFetch,
    userReportsUpdate,
} from '../../redux/actions';

const AllUserReports = (props) => {
    const {
        userReports,
        userReportsDataStatus,
        userReportsFetch,
        userReportsUpdate,
    } = props;

    useEffect(() => {
        if (userReportsDataStatus === 'pending') {
            fetchUserReports(userReportsFetch, userReportsUpdate);
        }
    }, []);

    if (userReportsDataStatus === 'loading') {
        return <Preloader fullScreen />;
    }

    return (
        <div className="user-reports">
            <div className="user-reports__title">Отчеты:</div>
            <Reports reports={userReports} />
        </div>
    );
};

const mapStateToProps = ({
    userReports,
    userReportsDataStatus,
}) => ({
    userReports,
    userReportsDataStatus,
});

const mapDispatchToProps = (dispatch) => ({
    userReportsFetch: () => dispatch(userReportsFetch()),
    userReportsUpdate: (data) => dispatch(userReportsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserReports);
