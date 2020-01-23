import propTypes from 'prop-types';
import employeePropTypes from './employeePropTypes';

export default propTypes.shape({
    EmployeeId: propTypes.number.isRequired,
    Employee: employeePropTypes,
    ProjectRole: propTypes.number.isRequired,
    ProjectId: propTypes.number.isRequired,
    DateUpdate: propTypes.string.isRequired,
    IsDeleted: propTypes.bool.isRequired,
    CanUserEdit: propTypes.bool.isRequired,
    CanUserDelete: propTypes.bool.isRequired,
    Id: propTypes.number.isRequired,
});
