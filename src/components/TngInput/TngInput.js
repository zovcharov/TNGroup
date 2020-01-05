/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';

import './TngInput.scss';

const TngInput = (props) => {
    const {
        multiline,
        changeValue,
        value,
    } = props;

    const onValueChange = (event) => {
        changeValue(event.target.value);
    };

    if (multiline) {
        return <textarea type="text" className="tng-input multiline" value={value || ''} onChange={onValueChange} />;
    }

    return (
        <input type="text" className="tng-input" value={value || ''} onChange={onValueChange} />
    );
};

export default TngInput;
