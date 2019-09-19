import React from 'react';

import './Button.scss';

const AddButton = (props) => {
    const {
        text,
        type,
        onClick
    } = props;

    return (
        <div className={`button button_type_${type}`} onClick={onClick}>
            <span className="button__icon"></span>
            <span className="button__text">{text}</span>
        </div>
    )
};

export default AddButton;
