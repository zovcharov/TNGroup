// eslint-disable-next-line import/prefer-default-export
export const prepareTaskData = (data) => ({
    Name: data.taskName,
    Description: data.taskDescription,
    DateBegin: new Date(data.taskStartDate),
    DateEnd: new Date(data.taskEndDate),
    PerformerId: data.taskExecutors.length ? data.taskExecutors[0] : 0,
    ProjectEvents: [
        {
            DateExecution: data.taskStartMilestone && data.taskStartMilestone.date,
            Description: data.taskStartMilestone && data.taskStartMilestone.name,
        }, {
            DateExecution: data.taskEndMilestone && data.taskEndMilestone.date,
            Description: data.taskEndMilestone && data.taskEndMilestone.name,
        },
    ],
    PlannedScheduleId: 15,
});
