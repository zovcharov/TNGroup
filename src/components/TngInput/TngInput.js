import React, { useState } from 'react';

import './TngInput.scss';

const TngInput = (props) => {
    const {
        multiline,
        changeValue,
        value,
    } = props;
    //const [value, changeValue] = useState('');

    const onValueChange = (event) => {
        debugger
        changeValue(event.target.value);
    };

    if (multiline) {
        return <textarea type="text" className="tng-input multiline" value={value || ''} onChange={onValueChange} />
    }

    debugger
    return (
        <input type="text" className="tng-input" value={value || ''} onChange={onValueChange} />
    );
};

export default TngInput;
