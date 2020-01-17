/* eslint-disable no-unused-expressions */

export const ROLES_IN_PROJECT = {
    Unknown: 0,
    Manager: 1,
    Curator: 2,
    Customer: 3,
    Controller: 4,
    Worker: 5,
    Initiator: 6,
};

const isNumber = (value) => typeof value === 'number';

const getIdFromParticipantItem = (participant) => (
    // eslint-disable-next-line no-nested-ternary
    isNumber(participant) ? participant : isNumber(participant.Id) ? participant.Id : 0
);
const getParticipants = (participants) => {
    const preparedParticipants = [];

    participants.initiator[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.initiator[0]),
        ProjectRole: ROLES_IN_PROJECT.Initiator,
    });
    participants.curator[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.curator[0]),
        ProjectRole: ROLES_IN_PROJECT.Curator,
    });
    participants.customer[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.customer[0]),
        ProjectRole: ROLES_IN_PROJECT.Customer,
    });
    participants.customerContact[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.customerContact[0]),
        ProjectRole: ROLES_IN_PROJECT.Unknown,
    });
    participants.controller[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.controller[0]),
        ProjectRole: ROLES_IN_PROJECT.Controller,
    });
    participants.manager[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.manager[0]),
        ProjectRole: ROLES_IN_PROJECT.Manager,
    });
    participants.executors && participants.executors.forEach((item) => {
        preparedParticipants.push({
            EmployeeId: getIdFromParticipantItem(item),
            ProjectRole: ROLES_IN_PROJECT.Worker,
        });
    });

    return preparedParticipants;
};

export const prepareDataToSave = (data) => ({
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
        // eslint-disable-next-line no-nested-ternary
        StatusDocument: data.isDraft ? 1 : data.needAgreement ? 2 : 0,
    },
    PassportProjectId: data.passportId,
    Id: data.projectId,
    Participants: getParticipants(data.participants),
    ProjectEvents: data.milestones.map((milestine) => ({
        DateExecution: milestine.date,
        Description: milestine.name,
    })),
});
