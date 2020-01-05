/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';

import './MilestonesInput.scss';

const MilestonesInput = ({ milestones = [], onAddMilestone, singleItem }) => {
    const [currentMilestones, changeMilestones] = useState([]);

    useEffect(() => {
        changeMilestones(milestones);
    }, [milestones]);

    const onRemoveItem = (itemIndex) => {
        const newCurrentMilestones = currentMilestones.slice();
        newCurrentMilestones.splice(itemIndex, 1);
        changeMilestones(newCurrentMilestones);
    };

    const getMilestonesItems = () => currentMilestones.filter((item) => !!item).map((milestone, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`milestone-name-${index}`} className="milestones-input__item">
            {milestone.name}
            <span className="milestones-input__edit-item" />
            <span className="milestones-input__remove-item" onClick={() => onRemoveItem(index)} />
        </span>
    ));

    const getMilestoneClassname = () => (singleItem ? 'milestones-input milestones-input--single-item' : 'milestones-input');

    return (
        <div className={getMilestoneClassname()}>
            <div className="milestones-input__input">
                { getMilestonesItems() }
                <div className="milestones-input__add-button" onClick={onAddMilestone} />
            </div>
        </div>
    );
};

export default MilestonesInput;
