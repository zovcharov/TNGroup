import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Agreements from '../../components/Agreements/Agreements';

import { fetchUserAgreements } from '../../redux/fetchers';
import {
    userAgreementsFetch,
    userAgreementsUpdate
} from '../../redux/actions';

const AllUserAgreementsPage = (props) => {
    const {
        userAgreements,
        userAgreementsDataStatus,
        userAgreementsFetch,
        userAgreementsUpdate,
    } = props;

    useEffect(() => {
        if (userAgreementsDataStatus === 'pending') {
            fetchUserAgreements(userAgreementsFetch, userAgreementsUpdate);
        }
    }, [userAgreements, userAgreementsDataStatus]);

    if (userAgreementsDataStatus === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <React.Fragment>
            <Agreements agreements={userAgreements} />
        </React.Fragment>
    );
};

const mapStateToProps = ({userAgreements, userAgreementsDataStatus}) => ({
    userAgreements,
    userAgreementsDataStatus
});

const mapDispatchToProps = (dispatch) => ({
    userAgreementsFetch: () => dispatch(userAgreementsFetch()),
    userAgreementsUpdate: (data) => dispatch(userAgreementsUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserAgreementsPage);
