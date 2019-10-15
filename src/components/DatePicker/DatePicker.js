import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './DatePicker.scss';

const DatePicker = ({ onDayChange, value }) => {
    return (
        <div className="date-picker-wrapper">
            <DayPickerInput value={value} onDayChange={onDayChange} placeholder="ГГГГ-ММ-ДД" />
            <span className="calendar-icon" />
        </div>
    )
};

export default DatePicker;
