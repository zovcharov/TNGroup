import ApiProvider from './../ApiProvider/ApiProvider';

export const fetchProjects = (fetchAction, updateAction) => {
    fetchAction();

    ApiProvider.Get('project')
        .then(data => {
            updateAction(data);
        })
};

export const fetchSingleProject = (projectId, fetchAction, updateAction) => {
    fetchAction();

    ApiProvider.Get('project', projectId)
        .then(data => {
            updateAction(data);
        })
};

export const fetchUsers = (fetchAction, updateAction) => {
    fetchAction();
    debugger

    ApiProvider.Get('api', 'user')
        .then(data => {
            updateAction(data);
        })
};

export const saveProject = (data) => {
    ApiProvider.Post('api', 'project', data)
        .then(data => {
            debugger
        })
        .catch(err => {
            debugger
        })
}
