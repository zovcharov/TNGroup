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
} from './actions';

import {
    selectFromProjects,
    selectFromTasks,
} from './selectors';

import agreementsMock from './mocks/agreementsMock';
import { unplannedRisksMock, plannedRisksMock } from './mocks/risksMock';
import { tasksMock } from './mocks/projectTasksMock';

export default (state, action) => {
    const stateAssign = (data) => Object.assign({}, state, data);

    switch (action.type) {
        case PROJECTS_FETCH:
            return stateAssign({ projectsDataState: 'loading' });
        case PROJECTS_UPDATE:
            return stateAssign({ projects: selectFromProjects(action.data), projectsDataState: 'loaded' });
        case SINGLE_PROJECT_FETCH:
            return stateAssign({ singleProjectDataState: 'loading' });
        case SINGLE_PROJECT_UPDATE:
            return stateAssign({ singleProject: action.data, singleProjectDataState: 'loaded' });
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
                agreements: action.data.agreements.length ? action.data.agreements : agreementsMock,
                agreementsProjectId: action.data.projectId,
                agreementsDataStatus: 'loaded',
            });
        case RISKS_FETCH:
            return stateAssign({ risksDataStatus: 'loading' });
        case RISKS_UPDATE:
            return stateAssign({
                unplannedRisks: action.data.unplannedRisks.length ? action.data.unplannedRisks : unplannedRisksMock,
                plannedRisks: action.data.plannedRisks.length ? action.data.plannedRisks : plannedRisksMock,
                risksProjectId: action.data.projectId,
                risksDataStatus: 'loaded',
            });
        case PROJECT_TASKS_FETCH:
            return stateAssign({ tasksDataStatus: 'loading' });
        case PROJECT_TASKS_UPDATE:
            return stateAssign({
                tasks: action.data.tasks.length ? action.data.tasks : tasksMock,
                tasksProjectId: action.data.tasksProjectId,
                tasksDataStatus: 'loaded',
            });
        case LAST_PROJECT_TASKS_FETCH:
            return stateAssign({ lastProjectTasksDataStatus: 'loading' });
        case LAST_PROJECT_TASKS_UPDATE:
            return stateAssign({ lastProjectTasksDataStatus: 'loaded', lastProjectTasks: selectFromTasks(action.data) });
        case LAST_AGREEMENTS_FETCH:
            return stateAssign({ lastAgreementsDataStatus: 'loading' });
        case LAST_AGREEMENTS_UPDATE:
            debugger
            return stateAssign({ lastAgreementsDataStatus: 'loaded', lastAgreements: action.data.length > 0 ? action.data : agreementsMock.slice(0, 3) });
        default:
            return state;
    }
}
