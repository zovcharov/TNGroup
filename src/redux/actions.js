import { createAction } from 'redux-actions';
import ApiProvider from './../ApiProvider/ApiProvider'

// Projects action types
export const PROJECTS_FETCH = 'TNG/PROJECTS_FETCH';
export const PROJECTS_UPDATE = 'TNG/PROJECTS_UPDATE';
export const PROJECTS_SET_DATA_STATUS = 'TNG/PROJECTS_SET_DATA_STATUS';
export const USERS_FETCH = 'TNG/USERS_FETCH';
export const USERS_UPDATE = 'TNG/USERS_UPDATE';
export const USERS_SET_DATA_STATUS = 'TNG/USERS_SET_DATA_STATUS';

// Single projects action types
export const SINGLE_PROJECT_FETCH = 'TNG/SINGLE_PROJECT_FETCH';
export const SINGLE_PROJECT_UPDATE = 'TNG/SINGLE_PROJECT_UPDATE';

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

export const usersFetch = () => ({
    type: USERS_FETCH,
});

export const usersUpdate = (data) => ({
    type: USERS_UPDATE,
    data
});
