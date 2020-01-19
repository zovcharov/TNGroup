export const PROJECT_ROLE_UNKNOWN = 0
export const PROJECT_ROLE_MANAGER = 1;
export const PROJECT_ROLE_CURATOR = 2;
export const PROJECT_ROLE_CUSTOMER = 3;
export const PROJECT_ROLE_CONTROLLER = 4;
export const PROJECT_ROLE_WORKER = 5;
export const PROJECT_ROLE_INITIATOR = 6;

export const findParticipantByRole = (participents, role) => {
    const participant = participents.find((participantItem) => participantItem.ProjectRole === role);
    return participant ? [participant.Employee] : [];
};

export const findParticipantsByRole = (participents, role) => participents
    .filter((participant) => participant.ProjectRole === role)
    .map((participant) => participant.Employee);
