import { createAction } from 'redux-actions';
import ApiProvider from './../ApiProvider/ApiProvider'

// Projects action types
export const PROJECTS_FETCH = 'TNG/PROJECTS_FETCH';
export const PROJECTS_UPDATE = 'TNG/PROJECTS_UPDATE';

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
