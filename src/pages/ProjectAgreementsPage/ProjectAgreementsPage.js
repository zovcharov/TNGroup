import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Agreements from '../../components/Agreements/Agreements';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchAgreements } from '../../redux/fetchers';
import {
    agreementsFetch,
    agreementsUpdate
} from '../../redux/actions';

const ProjectAgreementsPage = (props) => {
    const {
        match: { params: { projectId } },
        agreements,
        agreementsDataStatus,
        agreementsProjectId,
        agreementsFetch,
        agreementsUpdate,
    } = props;

    useEffect(() => {
        if (agreementsDataStatus === 'pending') {
            fetchAgreements(Number(projectId), agreementsFetch, agreementsUpdate);
        }
    }, [agreementsDataStatus, agreements]);

    useEffect(() => {
        if (agreementsDataStatus !== 'loading' && projectId !== agreementsProjectId) {
            fetchAgreements(Number(projectId), agreementsFetch, agreementsUpdate);
        }
    }, [projectId]);

    if (agreementsDataStatus === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <React.Fragment>
            <NavigationPanel  projectId={projectId} activePage="agreements" />
            <Agreements agreements={agreements} />
        </React.Fragment>
    );
};

const mapStateToProps = ({agreements, agreementsDataStatus, agreementsProjectId}) => ({
    agreements,
    agreementsDataStatus
});

const mapDispatchToProps = (dispatch) => ({
    agreementsFetch: (projectId) => dispatch(agreementsFetch(projectId)),
    agreementsUpdate: (projectId) => dispatch(agreementsUpdate(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectAgreementsPage);
