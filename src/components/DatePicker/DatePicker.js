/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React, { useCallback } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './DatePicker.scss';

const DatePicker = ({ onDayChange, value }) => (
    <div className="date-picker-wrapper">
        <DayPickerInput
            value={value}
            onDayChange={useCallback((value) => onDayChange(value), [onDayChange])}
            placeholder="ГГГГ-ММ-ДД"
        />
        <span className="calendar-icon" />
    </div>
);

export default DatePicker;
