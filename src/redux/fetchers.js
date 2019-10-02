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
