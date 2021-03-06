/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './DashboardPage.scss';

import SquarePanel from '../../components/SquarePanel/SquarePanel';
import addProjectIcon from '../../icons/add-project-btn-icon-big.png';
import addTaskIcon from '../../icons/add-task-btn-icon-big.png';
import tasksAndProjectsIcon from '../../icons/tasks-and-projects-btn-icon-big.png';
import risksIcon from '../../icons/risks-btn-icon-big.png';
import agreementsIcon from '../../icons/agreements-btn-icon-big.png';
import employeesIcon from '../../icons/employees-btn-icon-big.png';
import Container from '../../components/Container/Container';
import CreateProjectModal from '../../components/Modals/CreateProjectModal/CreateProjectModal';
import Table from '../../components/Table/Table';
import { COLUMNS_TASKS } from './DashboardPage.constants';
import PseudoButton from '../../components/Buttons/PseudoButton/PseudoButton';

import {
    lastProjectsTasksFetch,
    lastProjectsTasksUpdate,
    lastAgreementsFetch,
    lastAgreementsUpdate,
} from '../../redux/actions';

import {
    fetchLastProjectTasks,
    fetchLastAgreements,
} from '../../redux/fetchers';

export const prepareLastTasks = (tasks) => tasks.map((task) => ({
    ...task,
    nameCell: {
        description: task.description,
        id: task.id,
    },
}));

const DashboardPage = (props) => {
    const {
        lastProjectsTasksFetch,
        lastProjectsTasksUpdate,
        lastProjectTasksDataStatus,
        lastProjectTasks,
        lastAgreementsFetch,
        lastAgreementsUpdate,
        lastAgreementsDataStatus,
    } = props;
    const [isCreateProjectModalOpen, onOpenCreateProjectModal] = useState(false);

    const openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    const PANELS = [
        {
            icon: addProjectIcon,
            label: 'Добавить проект',
            bgPattern: 'linear-gradient(135deg, #8e43a0 0%, #8e43a0 20%, #6581e5 100%)',
            onClick: openCreateProjectModal,
        },
        {
            icon: addTaskIcon,
            label: 'Отчеты',
            bgPattern: 'linear-gradient(135deg, #097896 0%, #097896 20%, #24a680 100%)',
            to: 'userreports'
        },
        {
            icon: tasksAndProjectsIcon,
            label: 'Задачи и проекты',
            bgPattern: 'linear-gradient(135deg, #ef8613 0%, #ef8613 20%, #f3b506 100%)',
            to: 'projects',
        },
        {
            icon: risksIcon,
            label: 'Управление рисками',
            bgPattern: 'linear-gradient(135deg, #bc437d 0%, #bc437d 20%, #ef4d54 100%)',
            to: 'userrisks',
        },
        {
            icon: agreementsIcon,
            label: 'Согласования',
            bgPattern: 'linear-gradient(135deg, #1eab58 0%, #1eab58 20%, #7af258 100%)',
            to: 'useragreements',
        },
        {
            icon: employeesIcon,
            label: 'Сотрудники',
            bgPattern: 'linear-gradient(135deg, #b5447f 0%, #b5447f 20%,#137593 100%)',
        },
    ];

    useEffect(() => {
        if (lastAgreementsDataStatus === 'pending') {
            fetchLastProjectTasks(lastProjectsTasksFetch, lastProjectsTasksUpdate);
        }

        if (lastProjectTasksDataStatus === 'pending') {
            fetchLastAgreements(lastAgreementsFetch, lastAgreementsUpdate);
        }
    }, []);

    return (
        <div className="dashboard-page">
            <div className="dashboard-panels">
                <Link to="userplans" className="dashboard-calendar">
                    <p className="dashboard-calendar__title">
                        Календарные планы
                    </p>
                </Link>
                <div className="dashboard-shortcuts">
                    {
                        PANELS.map((panel, index) => {
                            const {
                                icon,
                                label,
                                bgPattern,
                                onClick,
                                to = '/',
                            } = panel;

                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={index} className="dashboard-shortcuts__wrapper">
                                    <SquarePanel
                                        to={to}
                                        icon={icon}
                                        bgPattern={bgPattern}
                                        onClick={onClick}
                                    >
                                        {label}
                                    </SquarePanel>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="dashboard-panels">
                <div className="dashboard-tasks">
                    <Container label="Последние задачи">
                        <Table
                            columns={COLUMNS_TASKS}
                            items={prepareLastTasks(lastProjectTasks)}
                        />
                        <PseudoButton link="/tasks">Смотреть все задачи</PseudoButton>
                    </Container>
                </div>
            </div>
            <CreateProjectModal isOpen={isCreateProjectModalOpen} onClose={closeCreateProjectModal} />
        </div>
    );
};

DashboardPage.propTypes = {
    lastProjectTasksDataStatus: PropTypes.string.isRequired,
    lastProjectTasks: PropTypes.array.isRequired,
    lastAgreementsDataStatus: PropTypes.string.isRequired,
    lastProjectsTasksFetch: PropTypes.func.isRequired,
    lastAgreementsFetch: PropTypes.func.isRequired,
    lastProjectsTasksUpdate: PropTypes.func.isRequired,
    lastAgreementsUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    lastProjectTasksDataStatus: state.lastProjectTasksDataStatus,
    lastProjectTasks: state.lastProjectTasks,
    lastAgreementsDataStatus: state.lastAgreementsDataStatus,
    lastAgreements: state.lastAgreements,
});

const mapDispatchToProps = (dispatch) => ({
    lastProjectsTasksFetch: () => dispatch(lastProjectsTasksFetch()),
    lastAgreementsFetch: () => dispatch(lastAgreementsFetch()),
    lastProjectsTasksUpdate: (data) => dispatch(lastProjectsTasksUpdate(data)),
    lastAgreementsUpdate: (data) => dispatch(lastAgreementsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
