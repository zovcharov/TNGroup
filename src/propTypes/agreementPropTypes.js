import propTypes from 'prop-types';
import projectUserRolePropTypes from './projectUserRolePropTypes';

export default propTypes.shape({
    DocumentId: propTypes.number,
    DocumentType: propTypes.number,
    ProjectId: propTypes.number,
    Status: propTypes.number,
    Result: propTypes.number,
    DateCreate: propTypes.string,
    DateEnd: propTypes.string,
    LastDateUpdate: propTypes.string,
    PerformanceList: propTypes.arrayOf(propTypes.shape({
        ParticipantId: propTypes.number,
        ProjectUserRole: projectUserRolePropTypes,
        AgreementId: propTypes.number,
        Result: propTypes.number,
        Date: propTypes.string,
        Comment: propTypes.string,
        CanUserEdit: propTypes.bool,
        CanUserDelete: propTypes.bool,
        Id: propTypes.number,
    })),
    CanUserEdit: propTypes.bool,
    CanUserDelete: propTypes.bool,
    Id: propTypes.number,
});
