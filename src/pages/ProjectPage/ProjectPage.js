import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import {fetchSingleProject} from '../../redux/fetchers';
import {
    singleProjectFetch,
    singleProjectUpdate
} from '../../redux/actions';

const ProjectPage = (props) => {
    const {
        match: { params: { projectId } },
        singleProject,
        singleProjectDataState,
        singleProjectFetch,
        singleProjectUpdate
    } = props;

    useEffect(()  => {
        if (singleProjectDataState === 'pending') {
            fetchSingleProject(projectId, singleProjectFetch, singleProjectUpdate)
        }

    }, [projectId]);

    if (singleProjectDataState === 'loading') {
        return <Preloader fullScreen />
    }

    return (
        <React.Fragment>
            <NavigationPanel  projectId={projectId} activePage="project" />
            <div className="info">
                <ProjectInfo info={singleProject} />
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = ({singleProject, singleProjectDataState}) => ({
    singleProject,
    singleProjectDataState
});

const mapDispatchToProps = (dispatch) => ({
    singleProjectFetch: () => dispatch(singleProjectFetch()),
    singleProjectUpdate: (data) => dispatch(singleProjectUpdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
