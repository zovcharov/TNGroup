/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React from 'react';

import './SingleMilestoneInput.scss';

const SingleMilestoneInput = ({ milestone, onSetMilestone, onClear }) => (
    <div className="single-milestone-input">
        {
            milestone && milestone.name ? (
                <>
                    <div className="single-milestone-input__name">{milestone.name}</div>
                    <div className="single-milestone-input__clear-button" onClick={onClear} />
                </>
            ) : (
                <div className="single-milestone-input__add-button" onClick={onSetMilestone} />
            )
        }
    </div>
);

export default SingleMilestoneInput;
