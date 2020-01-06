/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';

import Select from 'react-select';

import './TngSelect.scss';

const TngSelect = ({ items, onChange }) => (
    <Select
        className="tng-select-container"
        classNamePrefix="tng-select"
        options={items}
        placeholder=""
        onChange={onChange}
    />
);

export default TngSelect;
