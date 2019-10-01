import {
    PROJECTS_UPDATE,
    PROJECTS_SET_DATA_STATUS, PROJECTS_FETCH,
} from './actions';

import {
    selectFromProjects
} from './selectors';

const defaultState = {
    projects: [],
    projectsDataState: 'pending'
};

export default (state, action) => {
    const stateAssign = (data) => Object.assign({}, state, data);

    switch (action.type) {
        case PROJECTS_FETCH:
            return stateAssign({ projectsDataState: 'loading' });
        case PROJECTS_UPDATE:
            const a = selectFromProjects(action.data);
            return stateAssign({ projects: selectFromProjects(action.data), projectsDataState: 'loaded' });
        case PROJECTS_SET_DATA_STATUS:
            return state;
        default:
            return state;
    }
}
