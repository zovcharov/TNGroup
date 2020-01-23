import propTypes from 'prop-types';

import organizationPropTypes from './organizationPropTypes';
import userPropTypes from './userPropTypes';

export default propTypes.shape({
    Name: propTypes.string,
    Email: propTypes.string,
    Phone: propTypes.string,
    Position: propTypes.string,
    IsWhatsApp: propTypes.bool,
    Skype: propTypes.string,
    SocialNet: propTypes.string,
    Department: propTypes.string,
    DateBirth: propTypes.string,
    Sex: propTypes.number,
    OrganizationId: propTypes.number,
    Organization: organizationPropTypes,
    IsCustomer: propTypes.bool,
    UserId: propTypes.number,
    User: userPropTypes,
    RefUrlAvatar: propTypes.string,
    Id: propTypes.number,
});
