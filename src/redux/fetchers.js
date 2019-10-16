import ApiProvider from './../ApiProvider/ApiProvider';
import { ITEMS_TASKS } from '../ApiProvider/mockups'
import agreementsMock from "./mocks/agreementsMock";

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

            Promise.all([fetchTasks(projectId), fetchAgreements(projectId)]).then(res => {
                project.tasks = res[0].length === 0 ? ITEMS_TASKS : res[0];
                project.agreement = res[1] && res[1].length ? res[1] : agreementsMock;

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
    return ApiProvider.Post( 'project', '', data);
};

export const fetchTasks = (projectId, fetchAction, updateAction) => {
    fetchAction && fetchAction();

    return ApiProvider.Get('ProjectTask', '', {curProjectId: projectId})
        .then(data => {
            updateAction && updateAction(data);
            return data;
        })
};

export const fetchProjectTasks = (projectId, fetchAction, updateAction) => {
    fetchAction && fetchAction();

    return ApiProvider.Get('ProjectTask', '', {curProjectId: projectId})
        .then(data => {
            const result = {
                tasks: data && data.length ? data : [],
                projectId,
            }
            updateAction && updateAction(result);
            return result;
        })
};

export const fetchAgreements = (projectId, fetchAction, updateAction) => {
    fetchAction && fetchAction();

    return ApiProvider.Get('Agreement', '', {curProjectId: projectId})
        .then(data => {
            const result = {
                agreements: data || [],
                projectId
            };
            updateAction && updateAction(result);
            return result;
        })
};

export const fetchRisks = (projectId, fetchAction, updateAction) => {
    fetchAction && fetchAction();

    return Promise.all([
        ApiProvider.Get('UnplannedRisk', '', {curProjectId: projectId}),
        ApiProvider.Get('PlannedRisk', '', {curProjectId: projectId}),
    ]).then(res => {
        const result = {
            unplannedRisks: res[0] && res[0].length ? res[0] : [],
            plannedRisks: res[1] && res[1].length ? res[0] : [],
            projectId
        };

        updateAction && updateAction(result);
        return res
    });
};
