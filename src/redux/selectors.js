import { formatDateToString } from './../helpers/helpers';

export const getTextStatus = (statusNumber) => {
    switch (statusNumber) {
        case 0: return { man: 'Новый', woman: 'Новая' };
        case 1: return { man: 'В работе', woman: 'В работе' };
        case 2: return { man: 'Выполнен', woman: 'Выполнена' };
        case 3: return { man: 'Отменён', woman: 'Отменена' };
        case 4: return { man: 'Ожидает', woman: 'Ожидает' };
    }
};

export const selectFromProject = (project) => {
    return {
        projectName: project.ProjectName,
        status: project.Status,
        lastDateUpdate: new Date(project.LastDateUpdate),
        id: project.Id,
        dateEnd: new Date(project.DateEnd),
    }
};

// TODO: убрать мок на имени
export const selectFromTask = (task) => {
    return {
        description: task.Description,
        name: task.Name || 'ффф',
        status: getTextStatus(task.Status).woman,
        id: task.Id,
        lastDateUpdate: new Date(task.LastDateUpdate),
        performerName: task.Performer && task.Performer.Name,
        dateEnd: formatDateToString(task.DateEnd)
    }
};

export const selectFromLastTask = (task) => {
    return {
        description: task.Description,
        status: getTextStatus(task.Status).woman,
        id: task.Id,
        lastDateUpdate: new Date(task.LastDateUpdate),
    }
};

export const selectProjectPermissions = (project) => {
    return {
        canAddPlannedRisk: project.Status === 0,
        canAddUnplannedRisk: project.Status === 3,
    }
};

export const selectFromProjects = (projects) => projects.map(selectFromProject);
export const selectFromTasks = (tasks) => tasks.map(selectFromTask);
export const selectFromLastTasks = (tasks) => tasks.map(selectFromLastTask);
