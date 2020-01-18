/* eslint-disable no-unused-expressions */

import {
    PROJECT_ROLE_CONTROLLER,
    PROJECT_ROLE_CURATOR,
    PROJECT_ROLE_CUSTOMER,
    PROJECT_ROLE_INITIATOR, PROJECT_ROLE_MANAGER,
    PROJECT_ROLE_UNKNOWN, PROJECT_ROLE_WORKER
} from "../../../helpers/usersHelper";

const isNumber = (value) => typeof value === 'number';

const getIdFromParticipantItem = (participant) => (
    // eslint-disable-next-line no-nested-ternary
    isNumber(participant) ? participant : isNumber(participant.Id) ? participant.Id : 0
);
const getParticipants = (participants) => {
    const preparedParticipants = [];

    participants.initiator[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.initiator[0]),
        ProjectRole: PROJECT_ROLE_INITIATOR,
    });
    participants.curator[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.curator[0]),
        ProjectRole: PROJECT_ROLE_CURATOR,
    });
    participants.customer[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.customer[0]),
        ProjectRole: PROJECT_ROLE_CUSTOMER,
    });
    participants.customerContact[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.customerContact[0]),
        ProjectRole: PROJECT_ROLE_UNKNOWN,
    });
    participants.controller[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.controller[0]),
        ProjectRole: PROJECT_ROLE_CONTROLLER,
    });
    participants.manager[0] && preparedParticipants.push({
        EmployeeId: getIdFromParticipantItem(participants.manager[0]),
        ProjectRole: PROJECT_ROLE_MANAGER,
    });
    participants.executors && participants.executors.forEach((item) => {
        preparedParticipants.push({
            EmployeeId: getIdFromParticipantItem(item),
            ProjectRole: PROJECT_ROLE_WORKER,
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
