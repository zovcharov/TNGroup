import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import Risks from '../../components/Risks/Risks';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import { fetchRisks, fetchSingleProject } from '../../redux/fetchers';
import {
    risksFetch,
    risksUpdate,
    singleProjectFetch,
    singleProjectUpdate
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
        projectPermissions,
        singleProject,
        singleProjectDataState,
        singleProjectFetch,
        singleProjectUpdate
    } = props;

    useEffect(() => {
        if (risksDataStatus === 'pending') {
            fetchRisks(Number(projectId), risksFetch, risksUpdate);
        }
    }, [risksDataStatus, unplannedRisks, plannedRisks]);

    useEffect(()  => {
        if (singleProjectDataState === 'pending') {
            fetchSingleProject(projectId, singleProjectFetch, singleProjectUpdate)
        }

    }, [projectId]);

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
            <Risks
                projectPermissions={projectPermissions}
                unplannedRisks={unplannedRisks}
                plannedRisks={plannedRisks}
                projectId={projectId}
            />
        </React.Fragment>
    );
};

const mapStateToProps = ({
     unplannedRisks,
     plannedRisks,
     risksProjectId,
     risksDataStatus,
     projectPermissions,
     singleProject,
     singleProjectDataState
}) => ({
    unplannedRisks,
    plannedRisks,
    risksProjectId,
    risksDataStatus,
    projectPermissions,
    singleProject,
    singleProjectDataState
});

const mapDispatchToProps = (dispatch) => ({
    risksFetch: (projectId) => dispatch(risksFetch(projectId)),
    risksUpdate: (projectId) => dispatch(risksUpdate(projectId)),
    singleProjectFetch: () => dispatch(singleProjectFetch()),
    singleProjectUpdate: (data) => dispatch(singleProjectUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRisksPage);
