import {
    PROJECTS_FETCH,
    PROJECTS_UPDATE,
    SINGLE_PROJECT_FETCH,
    SINGLE_PROJECT_UPDATE,
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
            return stateAssign({ projects: selectFromProjects(action.data), projectsDataState: 'loaded' });
        case SINGLE_PROJECT_FETCH:
            return stateAssign({ singleProjectDataState: 'loading' });
        case SINGLE_PROJECT_UPDATE:
            return stateAssign({ singleProject: action.data, singleProjectDataState: 'loaded' });
        default:
            return state;
    }
}
