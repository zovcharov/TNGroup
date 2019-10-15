import React, { useState, useEffect } from 'react';

import './MilestonesInput.scss';

const MilestonesInput = ({ milestones = [], onAddMilestone }) => {
    const [currentMilestones, changeMilestones] = useState([]);

    useEffect(() => {
        changeMilestones(milestones);
    }, [milestones]);

    const onRemoveItem = (itemIndex) => {
        const newCurrentMilestones = currentMilestones.slice();
        newCurrentMilestones.splice(itemIndex, 1);
        changeMilestones(newCurrentMilestones);
    };

    const getMilestonesItems = () => currentMilestones.map((milestone, index) => (
        <span key={`milestone-name-${index}`} className="milestones-input__item">
            {milestone.name}
            <span className="milestones-input__edit-item" />
            <span className="milestones-input__remove-item" onClick={() => onRemoveItem(index)}/>
        </span>
    ));

    return (
        <div className="milestones-input">
            <div className="milestones-input__input">
                { getMilestonesItems() }
                <div className="milestones-input__add-button" onClick={onAddMilestone}/>
            </div>
        </div>
    )
};

export default MilestonesInput;
