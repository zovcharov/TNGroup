import { formatDateToString } from '../helpers/helpers';

// eslint-disable-next-line consistent-return
export const getTextStatus = (statusNumber) => {
    switch (statusNumber) {
        case 0: return { man: 'Новый', woman: 'Новая' };
        case 1: return { man: 'В работе', woman: 'В работе' };
        case 2: return { man: 'Выполнен', woman: 'Выполнена' };
        case 3: return { man: 'Отменён', woman: 'Отменена' };
        case 4: return { man: 'Ожидает', woman: 'Ожидает' };
        default: return { man: '', woman: '' };
    }
};

// eslint-disable-next-line consistent-return
export const getRiskStatus = (statusNumber) => {
    switch (statusNumber) {
        case 0: return 'Риск не сработал';
        case 1: return 'Риск сработал';
        default: return '';
    }
};

// eslint-disable-next-line consistent-return
export const getAgreementNameByDocumentType = (docType) => {
    switch (docType) {
        case 0: return 'Согласование паспорта проекта';
        case 1: return 'Согласование изменения паспорта проекта';
        case 2: return 'Согласование календарного плана';
        case 3: return 'Согласование изменения календарного плана';
        case 4: return 'Согласование отчета';
        default: return 'Согласование';
    }
};

export const getAgreementResultString = (agreementResult) => {
    switch (agreementResult) {
        case 0: return 'На рассмотрении';
        case 1: return 'Принято';
        case 2: return 'Отклонено';
        default: return 'Не указано';
    }
};

export const selectFromProject = (project) => ({
    projectName: project.ProjectName,
    status: project.Status,
    lastDateUpdate: new Date(project.LastDateUpdate),
    id: project.Id,
    dateEnd: new Date(project.DateEnd),
});

// TODO: убрать мок на имени
export const selectFromTask = (task) => ({
    description: task.Description,
    name: task.Name || 'ффф',
    status: getTextStatus(task.Status).woman,
    id: task.Id,
    lastDateUpdate: new Date(task.LastDateUpdate),
    performerName: task.Performer && task.Performer.Name,
    dateEnd: formatDateToString(task.DateEnd),
});

export const selectFromLastTask = (task) => ({
    description: task.Description,
    status: getTextStatus(task.Status).woman,
    id: task.Id,
    lastDateUpdate: new Date(task.LastDateUpdate),
});

export const selectProjectPermissions = (project) => ({
    canAddPlannedRisk: project.Status === 0,
    canAddUnplannedRisk: project.Status === 3,
});

export const selectPlannedRisk = (risk) => ({
    ...risk,
    Status: getRiskStatus(risk.Status),
    Date: formatDateToString(risk.Date),
});

export const selectUserAgreement = (userAgreement) => ({
    id: userAgreement.Id,
    documentId: userAgreement.DocumentId,
    projectId: userAgreement.ProjectId,
    name: getAgreementNameByDocumentType(userAgreement.DocumentType),
    resultString: getAgreementResultString(userAgreement.Result),
    result: userAgreement.Result,
    lastDateUpdate: userAgreement.LastDateUpdate,
    performanceList: userAgreement.PerformanceList,
});


export const selectUserAgreements = (userAgreements = []) => userAgreements.map(selectUserAgreement);
export const selectFromProjects = (projects = []) => projects.map(selectFromProject);
export const selectFromTasks = (tasks = []) => tasks.map(selectFromTask);
export const selectFromLastTasks = (tasks = []) => tasks.map(selectFromLastTask);
export const selectFromPlannedRisks = (risks = []) => risks.map(selectPlannedRisk);
