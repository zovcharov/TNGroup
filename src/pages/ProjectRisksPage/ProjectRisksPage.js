import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Risks from '../../components/Risks/Risks';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchRisks } from '../../redux/fetchers';
import {
    risksFetch,
    risksUpdate
} from '../../redux/actions';

const ProjectRisksPage = (props) => {
    const {
        match: { params: { projectId } },
        unplannedRisks,
        plannedRisks,
        risksProjectId,
        risksDataStatus,
        risksFetch,
        risksUpdate,
    } = props;

    useEffect(() => {
        if (risksDataStatus === 'pending') {
            fetchRisks(Number(projectId), risksFetch, risksUpdate);
        }
    }, [risksDataStatus, unplannedRisks, plannedRisks]);

    useEffect(() => {
        if (risksDataStatus !== 'loading' && projectId !== risksProjectId) {
            fetchRisks(Number(projectId), risksFetch, risksUpdate);
        }
    }, [projectId]);

    if (risksDataStatus === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <React.Fragment>
            <NavigationPanel  projectId={projectId} activePage="risks" />
            <Risks unplannedRisks={unplannedRisks}  plannedRisks={plannedRisks}/>
        </React.Fragment>
    );
};

const mapStateToProps = ({ unplannedRisks, plannedRisks, risksProjectId, risksDataStatus }) => ({
    unplannedRisks,
    plannedRisks,
    risksProjectId,
    risksDataStatus
});

const mapDispatchToProps = (dispatch) => ({
    risksFetch: (projectId) => dispatch(risksFetch(projectId)),
    risksUpdate: (projectId) => dispatch(risksUpdate(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRisksPage);
