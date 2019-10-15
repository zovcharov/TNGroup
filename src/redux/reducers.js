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
} from './actions';

import {
    selectFromProjects
} from './selectors';

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
        default:
            return state;
    }
}
