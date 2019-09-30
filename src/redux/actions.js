import { createAction } from 'redux-actions';
import ApiProvider from './../ApiProvider/ApiProvider'

export const PROJECTS_FETCH = 'TNG/PROJECTS_FETCH';
export const PROJECTS_UPDATE = 'TNG/PROJECTS_UPDATE';
export const PROJECTS_SET_DATA_STATUS = 'TNG/PROJECTS_SET_DATA_STATUS';

export const projectsFetch = (data) => ({
    type: PROJECTS_FETCH,
});

export const projectsUpdate = (data) => ({
    type: PROJECTS_UPDATE,
    data
});
