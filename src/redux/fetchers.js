import ApiProvider from '../ApiProvider/ApiProvider';
import { ITEMS_TASKS } from '../ApiProvider/mockups';

export const fetchProjects = (fetchAction, updateAction) => {
    fetchAction();

    ApiProvider.Get('project')
        .then((data) => {
            updateAction(data);
        });
};

export const fetchTasks = (projectId, fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('ProjectTask', '', { curProjectId: projectId })
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
            return data;
        });
};

export const fetchAgreements = (projectId, fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('Agreement', '', { curProjectId: projectId })
        .then((data) => {
            const result = {
                agreements: data || [],
                projectId,
            };
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(result);
            return result;
        });
};

export const fetchSingleProject = (projectId, fetchAction, updateAction) => {
    fetchAction();

    let project = {};

    ApiProvider.Get('project', projectId)
        .then((data) => {
            project = data;

            Promise.all([fetchTasks(projectId), fetchAgreements(projectId)]).then((res) => {
                project.tasks = res[0].length === 0 ? ITEMS_TASKS : res[0];
                project.agreement = res[1] && res[1].length ? res[1] : [];

                updateAction(project);
            });
        });
};

export const fetchUsers = (fetchAction, updateAction) => {
    fetchAction();

    return ApiProvider.Get('Employee')
        .then((data) => {
            updateAction(data);
        });
};

export const saveProject = (data) => ApiProvider.Post('project', '', data);

export const editProject = (data, projectId) => ApiProvider.Put('project', '', { ...data, curProjectId: projectId });

export const saveTask = (data, projectId) => ApiProvider.Post('ProjectTask', '', { ...data, curProjectId: projectId });

export const fetchProjectTasks = (projectId, fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('ProjectTask', '', { curProjectId: projectId })
        .then((data) => {
            const result = {
                tasks: data && data.length ? data : [],
                projectId,
            };
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(result);
            return result;
        });
};

export const fetchUserAgreements = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('Agreement', 'getforuser')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction({
                agreements: data,
            });
        })
        .catch((e) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction({ error: e });
        });
};

export const fetchRisks = (projectId, fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return Promise.all([
        ApiProvider.Get('UnplannedRisk', '', { curProjectId: projectId }),
        ApiProvider.Get('PlannedRisk', '', { curProjectId: projectId }),
    ]).then((res) => {
        const result = {
            unplannedRisks: res[0] && res[0].length ? res[0] : [],
            plannedRisks: res[1] && res[1].length ? res[1] : [],
            projectId,
        };

        // eslint-disable-next-line no-unused-expressions
        updateAction && updateAction(result);
        return res;
    });
};

export const fetchUserRisks = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return Promise.all([
        ApiProvider.Get('UnplannedRisk', 'getforuser'),
        ApiProvider.Get('PlannedRisk', 'getforuser'),
    ]).then((res) => {
        const result = {
            unplannedRisks: res[0] && res[0].length ? res[0] : [],
            plannedRisks: res[1] && res[1].length ? res[1] : [],
        };

        // eslint-disable-next-line no-unused-expressions
        updateAction && updateAction(result);
        return res;
    });
};

export const fetchLastProjectTasks = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('LastProjectTask')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
            return data;
        });
};

export const fetchLastAgreements = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('LastAgreement')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
            return data;
        });
};

export const fetchSingleTask = (taskId, fetchAction, updateAction) => {
    fetchAction();

    return ApiProvider.Get('ProjectTask', taskId)
        .then((data) => {
            updateAction(data);

            return data;
        });
};

export const fetchSchedules = (projectId, fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction(projectId);

    return ApiProvider.Get('PlannedSchedule', '', { curProjectId: projectId })
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
            return data;
        });
};

export const savePlannedRisk = (projectId, data) => ApiProvider.Post('PlannedRisk', '', { curProjectId: projectId, ...data });

export const saveUnplannedRisk = (projectId, data) => ApiProvider.Post('UnplannedRisk', '', { curProjectId: projectId, ...data });

export const userFetchSchedules = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();

    return ApiProvider.Get('PlannedSchedule', 'getforuser')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
            return data;
        });
};

export const fetchUserDocuments = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();
    return ApiProvider.Get('Attachment', 'GetForUser')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data.length === 0 ? [] : data);
        });
};

export const fetchUserReports = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();
    return ApiProvider.Get('Report', 'GetForUser')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
        });
};

export const fetchUserProfile = (fetchAction, updateAction) => {
    // eslint-disable-next-line no-unused-expressions
    fetchAction && fetchAction();
    return ApiProvider.Get('Employee', 'GetForUser')
        .then((data) => {
            // eslint-disable-next-line no-unused-expressions
            updateAction && updateAction(data);
        });
};
