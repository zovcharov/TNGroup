import React from 'react';

import './SingleMilestoneInput.scss';

const SingleMilestoneInput = ({milestone, onSetMilestone, onClear}) => {
    return (
        <div className="single-milestone-input">
            {
                milestone && milestone.name ? (
                    <React.Fragment>
                        <div className="single-milestone-input__name">{milestone.name}</div>
                        <div className="single-milestone-input__clear-button" onClick={onClear} />
                    </React.Fragment>
                ) : (
                    <div className="single-milestone-input__add-button" onClick={onSetMilestone} />
                )
            }
        </div>
    )
};

export default SingleMilestoneInput;
