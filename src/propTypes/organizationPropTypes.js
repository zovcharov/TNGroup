import propTypes from 'prop-types';

export default propTypes.shape({
    Name: propTypes.string,
    ShortName: propTypes.string,
    IKO: propTypes.string,
    INN: propTypes.string,
    AddressLegal: propTypes.string,
    AddressMail: propTypes.string,
    Phone: propTypes.string,
    Fax: propTypes.string,
    Email: propTypes.string,
    Id: propTypes.number.isRequired,
});
