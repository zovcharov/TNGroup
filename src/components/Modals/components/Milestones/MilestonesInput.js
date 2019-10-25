import React, { useState, useEffect } from 'react';

import './MilestonesInput.scss';

const MilestonesInput = ({ milestones = [], onAddMilestone, singleItem }) => {
    const [currentMilestones, changeMilestones] = useState([]);
    const [filled, changeFilled] = useState(false);

    useEffect(() => {
        changeMilestones(milestones);
    }, [milestones]);

    const onRemoveItem = (itemIndex) => {
        const newCurrentMilestones = currentMilestones.slice();
        newCurrentMilestones.splice(itemIndex, 1);
        changeMilestones(newCurrentMilestones);
    };

    const getMilestonesItems = () => currentMilestones.filter(item => !!item).map((milestone, index) => (
        <span key={`milestone-name-${index}`} className="milestones-input__item">
            {milestone.name}
            <span className="milestones-input__edit-item" />
            <span className="milestones-input__remove-item" onClick={() => onRemoveItem(index)}/>
        </span>
    ));

    const getMilestoneClassname = () => singleItem ? 'milestones-input milestones-input--single-item' : 'milestones-input';

    return (
        <div className={getMilestoneClassname()}>
            <div className="milestones-input__input">
                { getMilestonesItems() }
                <div className="milestones-input__add-button" onClick={onAddMilestone}/>
            </div>
        </div>
    )
};

export default MilestonesInput;
