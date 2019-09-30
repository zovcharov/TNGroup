import ApiProvider from './../ApiProvider/ApiProvider';

export const fetchProjects = (fetchAction, updateAction) => {
    fetchAction();

    ApiProvider.Get('api', 'project')
        .then(data => {
            updateAction(data);
        })
};
