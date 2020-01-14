import { DEFAULT_STORE } from './defaultStore';
import {
    PROJECTS_FETCH,
    PROJECTS_UPDATE,
    USERS_FETCH,
    USERS_UPDATE,
    SINGLE_PROJECT_FETCH,
    SINGLE_PROJECT_UPDATE,
    TASKS_FETCH,
    TASKS_UPDATE,
    SCHEDULES_FETCH,
    SCHEDULES_UPDATE,
    AGREEMENTS_FETCH,
    AGREEMENTS_UPDATE,
    RISKS_FETCH,
    RISKS_UPDATE,
    PROJECT_TASKS_FETCH,
    PROJECT_TASKS_UPDATE,
    LAST_PROJECT_TASKS_FETCH,
    LAST_PROJECT_TASKS_UPDATE,
    LAST_AGREEMENTS_FETCH,
    LAST_AGREEMENTS_UPDATE,
    SCHEDULE_FETCH,
    SCHEDULE_UPDATE,
    SINGLE_TASK_FETCH,
    SINGLE_TASK_UPDATE,
    RESET_STATE,
    USER_SCHEDULES_FETCH,
    USER_SCHEDULES_UPDATE,
    USER_RISKS_FETCH,
    USER_RISKS_UPDATE,
    USER_DOCUMENTS_FETCH,
    USER_DOCUMENTS_UPDATE,
    USER_AGREEMENTS_FETCH,
    USER_AGREEMENTS_UPDATE,
    USER_REPORTS_FETCH,
    USER_REPORTS_UPDATE,
    USER_PROFILE_FETCH,
    USER_PROFILE_UPDATE,
} from './actions';

import {
    selectFromProjects,
    selectFromTasks,
    selectFromLastTasks,
    selectProjectPermissions,
    selectFromPlannedRisks,
    selectUserAgreements,
} from './selectors';

export default (state = DEFAULT_STORE, action) => {
    const stateAssign = (data) => ({ ...state, ...data });

    switch (action.type) {
        case PROJECTS_FETCH:
            return stateAssign({ projectsDataState: 'loading' });
        case PROJECTS_UPDATE:
            return stateAssign({ projects: selectFromProjects(action.data), projectsDataState: 'loaded' });
        case SINGLE_PROJECT_FETCH:
            return stateAssign({ singleProjectDataState: 'loading' });
        case SINGLE_PROJECT_UPDATE:
            return stateAssign({
                singleProject: {
                    ...action.data,
                    agreements: selectUserAgreements(action.data.agreements),
                },
                singleProjectDataState: 'loaded',
                projectPermissions: selectProjectPermissions(action.data),
            });
        case USERS_FETCH:
            return stateAssign({ usersDataState: 'loading' });
        case USERS_UPDATE:
            return stateAssign({ users: action.data, usersDataState: 'loaded' });
        case TASKS_FETCH:
            return stateAssign({ tasksDataStatus: 'loading' });
        case TASKS_UPDATE:
            return stateAssign({ tasks: action.data, tasksDataStatus: 'loaded' });
        case SCHEDULES_FETCH:
            return stateAssign({ schedulesDataStatus: 'loading' });
        case SCHEDULES_UPDATE:
            return stateAssign({ schedules: action.data, schedulesDataStatus: 'loaded' });
        case AGREEMENTS_FETCH:
            return stateAssign({ agreementsDataStatus: 'loading' });
        case AGREEMENTS_UPDATE:
            return stateAssign({
                agreements: action.data.agreements.length
                    ? selectUserAgreements(action.data.agreements)
                    : [],
                agreementsProjectId: action.data.projectId,
                agreementsDataStatus: 'loaded',
            });
        case USER_AGREEMENTS_FETCH:
            return stateAssign({ userAgreementsDataStatus: 'loading' });
        case USER_AGREEMENTS_UPDATE:
            return stateAssign({
                userAgreements: action.data.agreements && action.data.agreements.length
                    ? selectUserAgreements(action.data.agreements)
                    : [],
                userAgreementsDataStatus: 'loaded',
                userAgreementsError: action.data.error,
            });
        case RISKS_FETCH:
            return stateAssign({ risksDataStatus: 'loading' });
        case RISKS_UPDATE:
            return stateAssign({
                unplannedRisks: selectFromPlannedRisks(action.data.unplannedRisks),
                plannedRisks: selectFromPlannedRisks(action.data.plannedRisks),
                risksProjectId: action.data.projectId,
                risksDataStatus: 'loaded',
            });
        case USER_RISKS_FETCH:
            return stateAssign({ userRisksDataStatus: 'loading' });
        case USER_RISKS_UPDATE:
            return stateAssign({
                userUnplannedRisks: selectFromPlannedRisks(action.data.unplannedRisks),
                userPlannedRisks: selectFromPlannedRisks(action.data.plannedRisks),
                userRisksDataStatus: 'loaded',
            });
        case PROJECT_TASKS_FETCH:
            return stateAssign({ tasksDataStatus: 'loading' });
        case PROJECT_TASKS_UPDATE:
            return stateAssign({
                tasks: selectFromTasks(action.data.tasks),
                tasksProjectId: action.data.tasksProjectId,
                tasksDataStatus: 'loaded',
            });
        case LAST_PROJECT_TASKS_FETCH:
            return stateAssign({ lastProjectTasksDataStatus: 'loading' });
        case LAST_PROJECT_TASKS_UPDATE:
            return stateAssign({ lastProjectTasksDataStatus: 'loaded', lastProjectTasks: selectFromLastTasks(action.data) });
        case LAST_AGREEMENTS_FETCH:
            return stateAssign({ lastAgreementsDataStatus: 'loading' });
        case LAST_AGREEMENTS_UPDATE:
            return stateAssign({
                lastAgreementsDataStatus: 'loaded',
                lastAgreements: action.data.length > 0 ? action.data : [],
            });
        case SINGLE_TASK_FETCH:
            return stateAssign({ singleTaskDataState: 'loading' });
        case SINGLE_TASK_UPDATE:
            return stateAssign({ singleTaskDataState: 'loaded', singleTask: action.data });
        case SCHEDULE_FETCH:
            return stateAssign({ schedulesDataStatus: 'loading' });
        case SCHEDULE_UPDATE:
            return stateAssign({ schedulesDataStatus: 'loaded', schedules: action.data });
        case USER_SCHEDULES_FETCH:
            return stateAssign({ userSchedulesDataStatus: 'loading' });
        case USER_SCHEDULES_UPDATE:
            return stateAssign({ userSchedulesDataStatus: 'loaded', userSchedules: action.data });
        case USER_DOCUMENTS_FETCH:
            return stateAssign({ userDocumentsDataStatus: 'loading' });
        case USER_DOCUMENTS_UPDATE:
            return stateAssign({ userDocumentsDataStatus: 'loaded', userDocuments: action.data });
        case USER_REPORTS_FETCH:
            return stateAssign({ userReportsDataStatus: 'loading' });
        case USER_REPORTS_UPDATE:
            return stateAssign({
                userReportsDataStatus: 'loaded',
                userReports: action.data && action.data.length ? action.data.length : [],
            });
        case USER_PROFILE_FETCH:
            return stateAssign({ currentUserInfoDataStatus: 'loading' });
        case USER_PROFILE_UPDATE:
            return stateAssign({
                currentUserInfoDataStatus: 'loaded',
                currentUserInfo: action.data,
            });
        case RESET_STATE:
            return DEFAULT_STORE;
        default:
            return state;
    }
};
