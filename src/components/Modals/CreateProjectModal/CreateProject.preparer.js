export const ROLES_IN_PROJECT = {
    Unknown: 0,
    Manager: 1,
    Curator: 2,
    Customer: 3,
    Controller: 4,
    Worker: 5,
    Initiator: 6,
};

const getParticipants = (participants) => {
    const preparedParticipants = [];

    preparedParticipants.push({
        EmployeeId: participants.initiator[0],
        ProjectRole: ROLES_IN_PROJECT.Initiator,
    });
    preparedParticipants.push({
        EmployeeId: participants.curator[0],
        ProjectRole: ROLES_IN_PROJECT.Curator,
    });
    preparedParticipants.push({
        EmployeeId: participants.customer[0],
        ProjectRole: ROLES_IN_PROJECT.Customer,
    });
    preparedParticipants.push({
        EmployeeId: participants.customerContact[0],
        ProjectRole: ROLES_IN_PROJECT.Unknown,
    });
    preparedParticipants.push({
        EmployeeId: participants.controller[0],
        ProjectRole: ROLES_IN_PROJECT.Controller,
    });
    preparedParticipants.push({
        EmployeeId: participants.manager[0],
        ProjectRole: ROLES_IN_PROJECT.Manager,
    });
    participants.executors.forEach(item => {
        preparedParticipants.push({
            EmployeeId: item,
            ProjectRole: ROLES_IN_PROJECT.Worker,
        });
    });

    return preparedParticipants;
};

export const prepareDataToSave = (data) => {
    return {
        PassportProject: {
            Name: data.projectName,
            Description: data.projectDescription,
            Objective: data.projectGoal,
            ExpectedResult: data.projectResult,
            ExpectedProduct: data.projectProduct,
            DateEnd: data.projectEndDate,
            MeetingLocation: data.meetingPlace,
            MeetingPeriodic: data.meetingPeriodicity,
            EstimatedCost: Number(data.projectCost),
            ApproximateEconomicEffect: Number(data.economicEffect),
        },
        PassportProjectId: data.passportId,
        Id: data.projectId,
        Participants: getParticipants(data.participants),
        ProjectEvents: data.milestones.map(milestine => ({
            DateExecution: milestine.date,
            Description: milestine.name,
        }))
    }
};
