export const ROLES_IN_PROJECT = {
    Unknown: 0,
    Manager: 1,
    Curator: 2,
    Customer: 3,
    Controller: 4,
    Worker: 5,
    Initiator: 6,
};

export const findParticipantByRole = (participents, role) => {
    const participant = participents.find((participantItem) => participantItem.ProjectRole === ROLES_IN_PROJECT[role]);
    return participant ? [participant.Employee] : [];
};

export const findParticipantsByRole = (participents, role) => participents
    .filter((participant) => participant.ProjectRole === ROLES_IN_PROJECT[role])
    .map((participant) => participant.Employee);
