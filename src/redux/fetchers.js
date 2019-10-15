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

    let project = {};

    ApiProvider.Get('project', projectId)
        .then(data => {
            project = data;

            Promise.all([fetchTasks(projectId)]).then(res => {
                project.tasks = res[0];

                updateAction(project);
            })
        })
};

export const fetchUsers = (fetchAction, updateAction) => {
    fetchAction();

    return ApiProvider.Get('user')
        .then(data => {
            updateAction(data);
        })
};

export const saveProject = (data) => {
    return ApiProvider.Post('api', 'project', data);
};

export const fetchTasks = (projectId, fetchAction, updateAction) => {
    fetchAction && fetchAction();

    return ApiProvider.Get('ProjectTask', '', {curProjectId: projectId})
        .then(data => {
            updateAction && updateAction(data);
            return data;
        })
};
