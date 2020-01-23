import propTypes from 'prop-types';

export default propTypes.shape({
    Login: propTypes.string,
    HashPassword: propTypes.string,
    UserName: propTypes.string,
    Email: propTypes.string,
    Id: propTypes.number,
});
