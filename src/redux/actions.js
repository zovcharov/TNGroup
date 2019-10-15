import { createAction } from 'redux-actions';
import ApiProvider from './../ApiProvider/ApiProvider'

// Projects action types
export const PROJECTS_FETCH = 'TNG/PROJECTS_FETCH';
export const PROJECTS_UPDATE = 'TNG/PROJECTS_UPDATE';

// Users action types
export const USERS_FETCH = 'TNG/USERS_FETCH';
export const USERS_UPDATE = 'TNG/USERS_UPDATE';

// Single projects action types
export const SINGLE_PROJECT_FETCH = 'TNG/SINGLE_PROJECT_FETCH';
export const SINGLE_PROJECT_UPDATE = 'TNG/SINGLE_PROJECT_UPDATE';

// Single projects action types
export const TASKS_FETCH = 'TNG/TASKS_FETCH';
export const TASKS_UPDATE = 'TNG/TASKS_UPDATE';

// Project tasks action types
export const PROJECT_TASKS_FETCH = 'TNG/PROJECT_TASKS_FETCH';
export const PROJECT_TASKS_UPDATE = 'TNG/PROJECT_TASKS_UPDATE';

// Schedule projects action types
export const SCHEDULES_FETCH = 'TNG/SCHEDULES_FETCH';
export const SCHEDULES_UPDATE = 'TNG/SCHEDULES_UPDATE';

// Risks projects action types
export const RISKS_FETCH = 'TNG/RISKS_FETCH';
export const RISKS_UPDATE = 'TNG/RISKS_UPDATE';

// Agreement projects action types
export const AGREEMENTS_FETCH = 'TNG/AGREEMENTS_FETCH';
export const AGREEMENTS_UPDATE = 'TNG/AGREEMENTS_UPDATE';

// User agreement projects action types
export const USER_AGREEMENTS_FETCH = 'TNG/USER_AGREEMENTS_FETCH';
export const USER_AGREEMENTS_UPDATE = 'TNG/USER_AGREEMENTS_UPDATE';

// Project actions
export const projectsFetch = (data) => ({
    type: PROJECTS_FETCH,
});
export const projectsUpdate = (data) => ({
    type: PROJECTS_UPDATE,
    data
});

// Single project actions
export const singleProjectFetch = (data) => ({
    type: SINGLE_PROJECT_FETCH,
});
export const singleProjectUpdate = (data) => ({
    type: SINGLE_PROJECT_UPDATE,
    data
});

// Users actions
export const usersFetch = () => ({
    type: USERS_FETCH,
});

export const usersUpdate = (data) => ({
    type: USERS_UPDATE,
    data
});

// Tasks actions
export const tasksFetch = () => ({
    type: TASKS_FETCH,
});

export const tasksUpdate = (data) => ({
    type: TASKS_UPDATE,
    data
});


// Project tasks actions
export const projectTasksFetch = () => ({
    type: PROJECT_TASKS_FETCH,
});

export const projectTasksUpdate = (data) => ({
    type: PROJECT_TASKS_UPDATE,
    data
});

// Schedule actions
export const schedulesFetch = () => ({
    type: SCHEDULES_FETCH,
});

export const schedulesUpdate = (data) => ({
    type: SCHEDULES_UPDATE,
    data
});

// Risks actions
export const risksFetch = () => ({
    type: RISKS_FETCH,
});

export const risksUpdate = (data) => ({
    type: RISKS_UPDATE,
    data
});

// Agreement actions
export const agreementsFetch = () => ({
    type: AGREEMENTS_FETCH,
});

export const agreementsUpdate = (data) => ({
    type: AGREEMENTS_UPDATE,
    data
});

// User agreement actions
export const userAgreementsFetch = () => ({
    type: USER_AGREEMENTS_FETCH,
});

export const userAgreementsUpdate = (data) => ({
    type: USER_AGREEMENTS_UPDATE,
    data
});
