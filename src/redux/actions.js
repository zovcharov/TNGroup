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

// Last project tasks action types
export const LAST_PROJECT_TASKS_FETCH = 'TNG/LAST_PROJECT_TASKS_FETCH';
export const LAST_PROJECT_TASKS_UPDATE = 'TNG/LAST_PROJECT_TASKS_UPDATE';

// Last agreements action types
export const LAST_AGREEMENTS_FETCH = 'TNG/LAST_AGREEMENTS_FETCH';
export const LAST_AGREEMENTS_UPDATE = 'TNG/LAST_AGREEMENTS_TASKS_UPDATE';

// Schedule action types
export const SCHEDULE_FETCH = 'TNG/SCHEDULE_FETCH';
export const SCHEDULE_UPDATE = 'TNG/SCHEDULE_UPDATE';

// Task action types
export const SINGLE_TASK_FETCH = 'TNG/SINGLE_TASK_FETCH';
export const SINGLE_TASK_UPDATE = 'TNG/SINGLE_TASK_UPDATE';


// User schedule
export const USER_SCHEDULES_FETCH = 'TNG/USER_SCHEDULES_FETCH';
export const USER_SCHEDULES_UPDATE = 'TNG/USER_SCHEDULES_UPDATE';

export const RESET_STATE = 'TNG/RESET_STATE';

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

// Last projects tasks actions
export const lastProjectsTasksFetch = () => ({
    type: LAST_PROJECT_TASKS_FETCH,
});

export const lastProjectsTasksUpdate = (data) => ({
    type: LAST_PROJECT_TASKS_UPDATE,
    data
});

// Last agreements actions
export const lastAgreementsFetch = () => ({
    type: LAST_AGREEMENTS_FETCH,
});

export const lastAgreementsUpdate = (data) => ({
    type: LAST_AGREEMENTS_UPDATE,
    data
});

// Schedule actions
export const scheduleFetch = () => ({
    type: SCHEDULES_FETCH,
});

export const scheduleUpdate = (data) => ({
    type: SCHEDULES_UPDATE,
    data
});

// Task actions
export const singleTaskFetch = () => ({
    type: SINGLE_TASK_FETCH,
});

export const singleTaskUpdate = (data) => ({
    type: SINGLE_TASK_UPDATE,
    data
});

export const resetState = () => ({
    type: RESET_STATE,
});

export const userSchedulesFetch = () => ({
    type: USER_SCHEDULES_FETCH,
});

export const userSchedulesUpdate = (data) => ({
    type: USER_SCHEDULES_UPDATE,
    data
});
