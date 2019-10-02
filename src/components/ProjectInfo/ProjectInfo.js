import React from 'react';

import './ProjectInfo.scss';

const ProjectInfo = ({info}) => {
    return (
        <div className="project-info">
            <div className="project-info__cols-block">
                <div className="project-info__col"></div>
                <div className="project-info__col"></div>
            </div>
            {JSON.stringify(info)}
        </div>
    )
};

export default ProjectInfo;
