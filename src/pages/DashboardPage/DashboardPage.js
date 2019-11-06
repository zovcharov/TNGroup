import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import './DashboardPage.scss'

import SquarePanel from '../../components/SquarePanel/SquarePanel'
import addProjectIcon from '../../icons/add-project-btn-icon-big.png'
import addTaskIcon from '../../icons/add-task-btn-icon-big.png'
import tasksAndProjectsIcon from '../../icons/tasks-and-projects-btn-icon-big.png'
import risksIcon from '../../icons/risks-btn-icon-big.png'
import agreementsIcon from '../../icons/agreements-btn-icon-big.png'
import employeesIcon from '../../icons/employees-btn-icon-big.png'
import Container from '../../components/Container/Container'
import CreateProjectModal from "../../components/Modals/CreateProjectModal/CreateProjectModal";
import Table from '../../components/Table/Table';
import { COLUMNS_TASKS, COLUMNS_AGREEMENTS } from './DashboardPage.constants';
import PseudoButton from './../../components/Buttons/PseudoButton/PseudoButton';

import {
    lastProjectsTasksFetch,
    lastProjectsTasksUpdate,
    lastAgreementsFetch,
    lastAgreementsUpdate,
} from './../../redux/actions';

import {
    fetchLastProjectTasks,
    fetchLastAgreements
} from './../../redux/fetchers';

const DashboardPage = (props) => {
    const {
        lastProjectsTasksFetch,
        lastProjectsTasksUpdate,
        lastProjectTasksDataStatus,
        lastProjectTasks,
        lastAgreementsFetch,
        lastAgreementsUpdate,
        lastAgreementsDataStatus,
        lastAgreements
    } = props;
    const [isCreateProjectModalOpen, onOpenCreateProjectModal] = useState(false);

    const  openCreateProjectModal = () => onOpenCreateProjectModal(true);
    const  closeCreateProjectModal = () => onOpenCreateProjectModal(false);

    const PANELS = [
        {
            icon: addProjectIcon,
            label: 'Добавить проект',
            bgPattern: 'linear-gradient(135deg, #8e43a0 0%, #8e43a0 20%, #6581e5 100%)',
            onClick: openCreateProjectModal,
        },
        {
            icon: addTaskIcon,
            label: 'Добавить задачу',
            bgPattern: 'linear-gradient(135deg, #097896 0%, #097896 20%, #24a680 100%)'
        },
        {
            icon: tasksAndProjectsIcon,
            label: 'Задачи и проекты',
            bgPattern: 'linear-gradient(135deg, #ef8613 0%, #ef8613 20%, #f3b506 100%)'
        },
        {
            icon: risksIcon,
            label: 'Управление рисками',
            bgPattern: 'linear-gradient(135deg, #bc437d 0%, #bc437d 20%, #ef4d54 100%)'
        },
        {
            icon: agreementsIcon,
            label: 'Согласования',
            bgPattern: 'linear-gradient(135deg, #1eab58 0%, #1eab58 20%, #7af258 100%)'
        },
        {
            icon: employeesIcon,
            label: 'Сотрудники',
            bgPattern: 'linear-gradient(135deg, #b5447f 0%, #b5447f 20%,#137593 100%)'
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
        <div className='dashboard-page'>
            <div className='dashboard-panels'>
                <div className='dashboard-calendar'/>
                <div className='dashboard-shortcuts'>
                    {
                        PANELS.map((panel, index) => {
                            const {
                                icon,
                                label,
                                bgPattern,
                                onClick
                            } = panel;

                            return (
                                <div key={index} className='dashboard-shortcuts__wrapper'>
                                    <SquarePanel
                                        icon={icon}
                                        bgPattern={bgPattern}
                                        onClick={onClick}
                                    >
                                        {label}
                                    </SquarePanel>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='dashboard-panels'>
                <div className='dashboard-tasks'>
                    {
                        Boolean(lastProjectTasks.length) &&
                        <Container label='Последние задачи'>
                            <Table columns={COLUMNS_TASKS} items={lastProjectTasks} />
                            <PseudoButton link="/tasks">Смотреть все задачи</PseudoButton>
                        </Container>
                    }
                </div>
                <div className='dashboard-agreements'>
                    {
                        Boolean(lastAgreements.length) &&
                        <Container label='Последние согласования'>
                            <Table columns={COLUMNS_AGREEMENTS} items={lastAgreements} />
                            <div className='dashboard-agreements__bottom'>
                                <PseudoButton link="/agreements">Смотреть все запросы</PseudoButton>
                            </div>
                        </Container>
                    }
                </div>
            </div>

            <CreateProjectModal isOpen={isCreateProjectModalOpen} onClose={closeCreateProjectModal} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    lastProjectTasksDataStatus: state.lastProjectTasksDataStatus,
    lastProjectTasks: state.lastProjectTasks,
    lastAgreementsDataStatus: state.lastAgreementsDataStatus,
    lastAgreements: state.lastAgreements
});

const mapDispatchToProps = (dispatch) => ({
    lastProjectsTasksFetch: () => dispatch(lastProjectsTasksFetch()),
    lastAgreementsFetch: () => dispatch(lastAgreementsFetch()),
    lastProjectsTasksUpdate: (data) => dispatch(lastProjectsTasksUpdate(data)),
    lastAgreementsUpdate: (data) => dispatch(lastAgreementsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
