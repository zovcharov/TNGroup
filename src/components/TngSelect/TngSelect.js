import React from 'react';

import Select from 'react-select';

import './TngSelect.scss';

const TngSelect = ({ items, onChange }) => {
    return (
        <Select
            className="tng-select-container"
            classNamePrefix="tng-select"
            options={items}
            placeholder=""
            onChange={onChange}
        />
    )
};

export default TngSelect;
