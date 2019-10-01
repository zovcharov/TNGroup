export const selectFromProject = (project) => {
    return {
        projectName: project.ProjectName,
        status: project.Status,
        lastDateUpdate: new Date(project.LastDateUpdate),
        id: project.Id,
        dateEnd: new Date(project.DateEnd),
    }
};

export const selectFromProjects = (projects) => projects.map(project => selectFromProject(project));
